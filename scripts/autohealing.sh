#!/bin/bash
# ─── StudyRoadmap self-healing watchdog ──────────────────────────────────────
# Runs every 10 min via root crontab. Keeps studyroadmap.in serving HTTP 200.
#
# History: on 2026-06-01 the site was down ~14h. The old version of this script
# detected the 404 but only ran `docker compose restart`, which CANNOT start a
# container that is in the `created`/`exited` state — so it looped uselessly
# while the container sat un-startable (a bind-mount error left it "created").
#
# This version inspects container state and escalates correctly:
#   running  -> docker compose restart
#   else     -> docker rm -f + docker compose up -d --force-recreate
# It also defensively repairs the news.json-as-directory bug that caused the
# outage, tracks consecutive failures, and fires an alert when recovery fails.
# It deliberately does NOT auto-rebuild (too heavy/risky for a watchdog): if a
# clean recreate can't restore 200, the problem needs a human/agent — so it alerts.
# ─────────────────────────────────────────────────────────────────────────────
set -uo pipefail

REPO=/srv/studyroadmap
LOG=/tmp/sr-autohealing.log
STATE=/tmp/sr-autohealing.fails        # consecutive heal-failure counter
DOWN_MARKER=/tmp/sr-DOWN               # breadcrumb any session/operator can see
SITE=https://studyroadmap.in/

ts()  { date '+%Y-%m-%d %H:%M:%S'; }
log() { echo "[$(ts)] $*" >> "$LOG"; }
http(){ curl -so /dev/null -w "%{http_code}" -m 20 "$SITE" 2>/dev/null; }

cd "$REPO" 2>/dev/null || { log "FATAL: cannot cd $REPO"; exit 1; }
log "check"

# ── Rule 0: defensive bind-mount repair ──────────────────────────────────────
# The 2026-06-01 outage: ./news.json bind source went missing, `docker compose up`
# auto-created it as an empty DIRECTORY, and the mount failed forever. The mount
# has since been removed from docker-compose.yml, but keep this guard cheap in
# case the mount is ever reintroduced or a stray directory reappears.
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

# ── Rule 2: HTTP health check + recovery escalation ──────────────────────────
CODE=$(http)
if [ "$CODE" = "200" ]; then
  echo 0 > "$STATE"
  [ -f "$DOWN_MARKER" ] && { rm -f "$DOWN_MARKER"; log "RECOVERED earlier-down site now 200"; }
  log "OK ($CODE)"
else
  log "DOWN ($CODE) — recovering"
  CSTATE=$(docker inspect studyroadmap --format '{{.State.Status}}' 2>/dev/null || echo absent)
  log "container state=$CSTATE"

  if [ "$CSTATE" = "running" ]; then
    # Image/container fine, app wedged -> a restart is enough.
    docker compose restart >>"$LOG" 2>&1 || true
  else
    # created / exited / paused / absent -> the old container can't just be
    # started (config/mount may be stale); force a clean recreate from the image.
    docker rm -f studyroadmap >>"$LOG" 2>&1 || true
    docker compose up -d --force-recreate >>"$LOG" 2>&1 || true
  fi

  sleep 12
  CODE2=$(http)

  if [ "$CODE2" = "200" ]; then
    echo 0 > "$STATE"
    rm -f "$DOWN_MARKER"
    log "RECOVERED ($CODE2)"
  else
    FAILS=$(( $(cat "$STATE" 2>/dev/null || echo 0) + 1 ))
    echo "$FAILS" > "$STATE"
    echo "[$(ts)] studyroadmap.in DOWN ($CODE2) — $FAILS consecutive heal failures" > "$DOWN_MARKER"
    log "STILL DOWN ($CODE2) after recreate — consecutive failures: $FAILS — ALERTING"
    # Fire alert (marker already written above; sr-alert.sh adds external channels if configured)
    [ -x "$REPO/scripts/sr-alert.sh" ] && \
      "$REPO/scripts/sr-alert.sh" "studyroadmap.in DOWN ($CODE2); $FAILS consecutive heal failures; container=$CSTATE" >>"$LOG" 2>&1 || true
  fi
fi

# ── Rule 3: CSS sanity (catch a broken build that stripped all styles) ───────
if [ -d "dist/_astro" ]; then
  CSS=$(find dist/_astro/ -name "*.css" 2>/dev/null | wc -l)
  [ "$CSS" -eq 0 ] && log "CRITICAL: 0 CSS files in dist/_astro"
fi

log "complete"
