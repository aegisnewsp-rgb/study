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
APP_DIR="/opt/studyroadmap-astro"
CONTAINER_NAME="studyroadmap"
PORT=9000

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
git fetch --quiet origin studyroadmap-astro
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/studyroadmap-astro)
if [ "$LOCAL" = "$REMOTE" ]; then
    log "Already at latest commit ($LOCAL). Nothing to pull."
else
    git reset --hard origin/studyroadmap-astro
    log "Updated to $REMOTE"
fi

# ── Install deps ──────────────────────────────────────────────────────────────
log "[2/5] Installing npm dependencies..."
npm ci --legacy-peer-deps --quiet

# ── Build ─────────────────────────────────────────────────────────────────────
log "[3/5] Building Astro site..."
BUILD_START=$(date +%s)
npm run build
BUILD_END=$(date +%s)
BUILD_TIME=$((BUILD_END - BUILD_START))
log "Build completed in ${BUILD_TIME}s"

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
else
    die "Container failed to start. Check: docker compose logs $CONTAINER_NAME"
fi

# ── Done ───────────────────────────────────────────────────────────────────────
COMMIT=$(git rev-parse --short HEAD)
log "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log "✅ Deploy complete!"
log "   Commit:   $COMMIT"
log "   Build:    ${BUILD_TIME}s"
log "   Time:    $(date '+%Y-%m-%d %H:%M:%S')"
log "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
