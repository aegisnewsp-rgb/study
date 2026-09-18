#!/bin/bash
# ─── StudyRoadmap Deploy Script ──────────────────────────────────────────────
# VPS-only deploy. Run on the VPS (not via CI/CD).
#
# Usage:
#   bash deploy.sh              # full build + deploy
#   bash deploy.sh --no-cache  # rebuild without Docker cache
#
# Or trigger remotely via:
#   curl -X POST http://localhost:9000/deploy?token=YOUR_TOKEN
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

DEPLOY_TOKEN="${DEPLOY_TOKEN:-your-secret-token-here}"
BUILD_NO_CACHE="${1:-}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="${APP_DIR:-/srv/studyroadmap}"
CONTAINER_NAME="studyroadmap"
PORT=9000
DEPLOY_BRANCH="${DEPLOY_BRANCH:-feature/openclaw-content-machine}"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }
warn() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] WARN: $*" >&2; }
die() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $*" >&2; exit 1; }

# ── Pre-flight ────────────────────────────────────────────────────────────────
if [ ! -d "$APP_DIR" ]; then
    die "APP_DIR $APP_DIR does not exist. Update the path in deploy.sh or create the directory."
fi

if ! command -v docker &>/dev/null; then
    die "Docker is not installed."
fi

if ! docker info &>/dev/null; then
    warn "Docker daemon not reachable. Trying systemctl start docker..."
    sudo systemctl start docker || sudo systemctl restart docker
    sleep 2
fi

# ── Pull latest code ───────────────────────────────────────────────────────────
log "[1/5] Pulling latest code from git..."
cd "$APP_DIR"
git fetch --quiet origin $DEPLOY_BRANCH
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/$DEPLOY_BRANCH)
if [ "$LOCAL" = "$REMOTE" ]; then
    log "Already at latest commit ($LOCAL). Nothing to pull."
elif git merge-base --is-ancestor "$REMOTE" "$LOCAL" 2>/dev/null; then
    # Local is AHEAD of remote (has unpushed commits) — do NOT reset backwards.
    # This guards against pipeline-generated commits that haven't reached origin yet.
    log "Local ($LOCAL) is ahead of origin/$DEPLOY_BRANCH ($REMOTE); preserving local commits"
elif git merge-base --is-ancestor "$LOCAL" "$REMOTE" 2>/dev/null; then
    # Clean fast-forward from remote
    git reset --hard origin/$DEPLOY_BRANCH
    log "Fast-forwarded to $REMOTE"
else
    # Diverged — refuse to silently destroy local work. Log and bail.
    die "Local ($LOCAL) has diverged from origin/$DEPLOY_BRANCH ($REMOTE). Manual merge required."
fi

# ── Install deps ──────────────────────────────────────────────────────────────
log "[2/5] Installing npm dependencies..."
npm ci --legacy-peer-deps --quiet

# ── Pre-build source guards (replaces the duplicate host build) ────────────────
# The site is built ONCE, inside the Docker image (Dockerfile:7 `RUN npm run build`),
# and THAT output is what nginx serves: docker-compose.yml mounts no host volume, so
# the `npm run build` that used to run here produced a dist/ that was never served.
# Measured cost of the duplicate on 2026-09-18: 1733s logged as "Build:" plus ~26 min
# in the image = 64 minutes end-to-end for one deploy (09:58→11:02Z).
#
# The host build was not entirely useless, so its coverage is preserved rather than
# deleted: its npm `postbuild` hook ran check-inline-scripts.mjs and check-ad-guards.mjs,
# and host tooling (sr-indexnow-delta.sh, sr-pattern-learn.sh, sr-orphans.sh, and the
# T20 affiliate guard) reads $APP/dist. So: source-only guards run HERE, before the
# image build (fast fail, nothing shipped), and the host dist/ is refreshed FROM THE
# SERVED IMAGE further down, where the dist-based guards then run against exactly what
# went live.
log "[3/5] Pre-build source guards (site build happens in the image)..."
BUILD_START=$(date +%s)
for guard in check-astro-syntax.mjs check-ad-guards.mjs; do
    if [ -f "scripts/$guard" ]; then
        if ! node "scripts/$guard"; then
            die "source guard $guard failed — aborting before the image build"
        fi
    else
        warn "source guard scripts/$guard not found — skipping"
    fi
done
BUILD_END=$(date +%s)
BUILD_TIME=$((BUILD_END - BUILD_START))
log "Source guards passed in ${BUILD_TIME}s (site is built once, in the image)"

# ── Build Docker image ─────────────────────────────────────────────────────────
log "[4/5] Building Docker image..."
DOCKER_BUILD_FLAGS="--pull"
if [ "$BUILD_NO_CACHE" = "--no-cache" ]; then
    DOCKER_BUILD_FLAGS="$DOCKER_BUILD_FLAGS --no-cache"
    log "Building WITHOUT cache (--no-cache flag)"
fi
docker compose build $DOCKER_BUILD_FLAGS --build-arg BUILD_DATE=$(date +%s)

# ── Deploy ─────────────────────────────────────────────────────────────────────
log "[5/5] Starting container..."
docker compose up -d --force-recreate

# Wait for container to be healthy
sleep 5
if docker ps | grep -q "$CONTAINER_NAME"; then
    log "✅ Container '$CONTAINER_NAME' is running"

    # Verify it responds
    HTTP_CODE=$(docker exec "$CONTAINER_NAME" wget -q -O - --spider http://localhost:80/ 2>/dev/null && echo "200" || echo "000")
    if [ "$HTTP_CODE" = "200" ]; then
        log "✅ Site is responding (HTTP 200)"
    else
        warn "Container running but site returned HTTP $HTTP_CODE"
    fi

    # ── Refresh host dist/ from the SERVED image, then guard the served output ───
    # Host tooling reads $APP/dist, but with the duplicate host build removed that
    # directory would go stale. Copying it out of the running container keeps host
    # tooling truthful AND makes the dist-based guards check what actually shipped
    # (including the sitemap's lastmod, which fix-sitemap.cjs rewrites in the image).
    # Swap-in-place via a temp dir so a failed copy leaves the previous dist/ intact.
    SYNC_TMP="$APP_DIR/.dist-sync.$$"
    rm -rf "$SYNC_TMP"
    if mkdir -p "$SYNC_TMP" && docker cp "$CONTAINER_NAME:/usr/share/nginx/html/." "$SYNC_TMP/" 2>/dev/null; then
        if [ -d "$APP_DIR/dist" ]; then mv "$APP_DIR/dist" "$APP_DIR/.dist-old.$$" 2>/dev/null || true; fi
        if mv "$SYNC_TMP" "$APP_DIR/dist" 2>/dev/null; then
            rm -rf "$APP_DIR/.dist-old.$$"
            log "host dist/ refreshed from served image ($(find "$APP_DIR/dist" -type f 2>/dev/null | wc -l | tr -d ' ') files)"
        else
            warn "could not move synced dist into place — restoring previous dist/"
            [ -d "$APP_DIR/.dist-old.$$" ] && mv "$APP_DIR/.dist-old.$$" "$APP_DIR/dist"
            rm -rf "$SYNC_TMP"
        fi
    else
        warn "dist sync from image FAILED — host dist/ left as-is (host tooling may be stale)"
        rm -rf "$SYNC_TMP"
    fi

    # Dist-based guards, now run against the served output.
    for guard in check-inline-scripts.mjs check-affiliate-disclosure.mjs; do
        if [ -f "scripts/$guard" ]; then
            if ! node "scripts/$guard"; then
                die "post-deploy guard $guard failed against the served output"
            fi
        fi
    done
else
    die "Container failed to start. Check: docker compose logs $CONTAINER_NAME"
fi

# ── Purge Cloudflare edge cache (needs CF_API_TOKEN) ─────────────────────────
if [ -x /data/sr-cloudflare-purge.sh ]; then
    log "Purging Cloudflare cache..."
    bash /data/sr-cloudflare-purge.sh || warn "CF purge skipped/failed (set CF_API_TOKEN to enable)"
fi

# ── Done ───────────────────────────────────────────────────────────────────────
COMMIT=$(git rev-parse --short HEAD)
log "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log "✅ Deploy complete!"
log "   Commit:   $COMMIT"
log "   Build:    ${BUILD_TIME}s"
log "   Time:    $(date '+%Y-%m-%d %H:%M:%S')"
log "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
