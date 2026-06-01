#!/bin/bash
# ─── StudyRoadmap self-healing watchdog (v3) ─────────────────────────────────
# Runs every 10 min via root crontab. Keeps studyroadmap.in serving HTTP 200 by
# healing BOTH layers of the request path and deferring to in-flight deploys.
#
# History:
#  - 2026-06-01: ~14h outage. ./news.json bind source became a directory, the
#    container got stuck "created", Traefik 404'd the whole domain, and the old
#    watchdog only ran `docker compose restart` (which can't start a non-running
#    container) so it looped uselessly. Mount removed; this script rewritten.
#
# This version:
#  - probes the public URL; on failure DEFERS if a deploy/build is in flight and
#    requires a sustained failure (transient deploy blips don't trigger a heal);
#  - heals the EDGE (Traefik, the single point of failure) and the APP container;
#  - serializes its destructive recreate behind flock so it can't race a deploy;
#  - tracks consecutive failures and ALERTS (sr-alert.sh) when recovery fails.
#  - deliberately never auto-rebuilds (too heavy/risky for a watchdog).
# ─────────────────────────────────────────────────────────────────────────────
set -uo pipefail

REPO=/srv/studyroadmap
LOG=/tmp/sr-autohealing.log
STATE=/tmp/sr-autohealing.fails
DOWN_MARKER=/tmp/sr-DOWN
LOCK=/var/lock/sr-deploy.lock
SITE=https://studyroadmap.in/
APP=studyroadmap
TRAEFIK=traefik-traefik-1

ts()  { date '+%Y-%m-%d %H:%M:%S'; }
log() { echo "[$(ts)] $*" >> "$LOG"; }
http(){ curl -so /dev/null -w "%{http_code}" -m 20 "$SITE" 2>/dev/null; }

cd "$REPO" 2>/dev/null || { log "FATAL: cannot cd $REPO"; exit 1; }
log "check"

# ── Rule 0: defensive bind-mount repair (root cause of the 2026-06-01 outage) ─
if [ -d "$REPO/news.json" ]; then
  log "REPAIR: news.json is a directory — removing + restoring file from dist/"
  rmdir "$REPO/news.json" 2>/dev/null || rm -rf "$REPO/news.json"
  [ -f "$REPO/dist/news.json" ] && cp -p "$REPO/dist/news.json" "$REPO/news.json"
fi

# ── Rule 1: re-lock config files ─────────────────────────────────────────────
for f in astro.config.mjs postcss.config.mjs package.json package-lock.json \
         src/layouts/Layout.astro src/styles/global.css; do
  [ -e "$f" ] || continue
  lsattr "$f" 2>/dev/null | grep -q -- "----i" || {
    chattr +i "$f" 2>/dev/null && log "Re-locked: $f"
  }
done

# ── Rule 2: layered health check + recovery ──────────────────────────────────
CODE=$(http)
if [ "$CODE" = "200" ]; then
  echo 0 > "$STATE"
  [ -f "$DOWN_MARKER" ] && { rm -f "$DOWN_MARKER"; log "site back to 200 (marker cleared)"; }
  log "OK ($CODE)"
else
  log "DOWN ($CODE) — diagnosing"

  # (a) Don't fight an in-flight deploy/build — it will bring the site up itself.
  if pgrep -af 'sr-merge-patches|sr-note-rewrite|sr-deploy\.sh|compose build|compose up|astro build|npm run build|npm ci' \
       | grep -vq "autohealing"; then
    log "deploy/build in progress — deferring heal this cycle"
  else
    # (b) Require a sustained failure (ignore a transient recreate blip).
    sleep 8
    CODE=$(http)
    if [ "$CODE" = "200" ]; then
      log "transient — recovered without action"
      echo 0 > "$STATE"; rm -f "$DOWN_MARKER"
    else
      # (c) Heal under a lock so we never race a deploy's recreate.
      exec 9>"$LOCK" 2>/dev/null
      if flock -n 9; then
        # Edge first: Traefik is the sole proxy; if it is down/unhealthy the whole
        # domain 404s regardless of the app. Restart reuses baked config (the
        # compose file needs ${ACME_EMAIL}, so never `compose up` it blindly).
        TSTATE=$(docker inspect "$TRAEFIK" --format '{{.State.Status}}' 2>/dev/null || echo absent)
        THEALTH=$(docker inspect "$TRAEFIK" --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}}' 2>/dev/null || echo none)
        if [ "$TSTATE" != "running" ] || [ "$THEALTH" = "unhealthy" ]; then
          log "EDGE: traefik status=$TSTATE health=$THEALTH — restarting edge"
          docker restart "$TRAEFIK" >>"$LOG" 2>&1 || docker start "$TRAEFIK" >>"$LOG" 2>&1 || true
          sleep 6
        fi

        # App container: recover by state.
        CSTATE=$(docker inspect "$APP" --format '{{.State.Status}}' 2>/dev/null || echo absent)
        log "APP: container state=$CSTATE"
        if [ "$CSTATE" = "running" ]; then
          docker compose restart >>"$LOG" 2>&1 || true
        else
          docker rm -f "$APP" >>"$LOG" 2>&1 || true
          docker compose up -d --force-recreate >>"$LOG" 2>&1 || true
        fi
        flock -u 9
      else
        log "recreate lock held (deploy active) — deferring"
      fi

      sleep 12
      CODE2=$(http)
      if [ "$CODE2" = "200" ]; then
        echo 0 > "$STATE"; rm -f "$DOWN_MARKER"
        log "RECOVERED ($CODE2)"
      else
        FAILS=$(( $(cat "$STATE" 2>/dev/null || echo 0) + 1 ))
        echo "$FAILS" > "$STATE"
        echo "[$(ts)] studyroadmap.in DOWN ($CODE2) — $FAILS consecutive heal failures" > "$DOWN_MARKER"
        log "STILL DOWN ($CODE2) after heal — consecutive failures: $FAILS — ALERTING"
        [ -x "$REPO/scripts/sr-alert.sh" ] && \
          "$REPO/scripts/sr-alert.sh" "studyroadmap.in DOWN ($CODE2); $FAILS consecutive heal failures" >>"$LOG" 2>&1 || true
      fi
    fi
  fi
fi

# ── Rule 3: CSS sanity (catch a build that stripped all styles) ──────────────
if [ -d "dist/_astro" ]; then
  CSS=$(find dist/_astro/ -name "*.css" 2>/dev/null | wc -l)
  [ "$CSS" -eq 0 ] && log "CRITICAL: 0 CSS files in dist/_astro"
fi

log "complete"
