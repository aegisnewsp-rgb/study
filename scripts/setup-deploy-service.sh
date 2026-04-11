#!/bin/bash
# ─── StudyRoadmap Deploy Service Setup ─────────────────────────────────────
# Run this ONCE on the VPS (as root or with sudo).
# This installs deploy-server.js as a proper systemd service so it stays running.
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

# ── Config ──────────────────────────────────────────────────────────────────
DEPLOY_TOKEN="${DEPLOY_TOKEN:-your-secret-token-here}"
APP_DIR="${APP_DIR:-/opt/studyroadmap-astro}"
SERVICE_FILE="$APP_DIR/scripts/studyroadmap-deploy.service"
LOG_FILE="/var/log/studyroadmap-deploy.log"
PID_FILE="/var/run/studyroadmap-deploy.pid"
PORT="${DEPLOY_PORT:-9000}"

# ── Pre-flight ────────────────────────────────────────────────────────────────
if [ "$(id -u)" -ne 0 ]; then
    echo "ERROR: Run as root (sudo bash setup-deploy-service.sh)"
    exit 1
fi

echo "[setup] Starting deploy service installation..."

# ── Verify app directory exists ──────────────────────────────────────────────
if [ ! -d "$APP_DIR" ]; then
    echo "ERROR: APP_DIR $APP_DIR does not exist."
    echo "  Update APP_DIR in this script or create the directory."
    exit 1
fi

if [ ! -f "$APP_DIR/scripts/deploy-server.js" ]; then
    echo "ERROR: deploy-server.js not found at $APP_DIR/scripts/deploy-server.js"
    exit 1
fi

# ── Check Node.js ──────────────────────────────────────────────────────────────
if ! command -v node &>/dev/null; then
    echo "ERROR: Node.js not found. Install from https://nodejs.org"
    exit 1
fi
echo "[setup] Node version: $(node --version)"

# ── Create log directory ───────────────────────────────────────────────────────
mkdir -p "$(dirname "$LOG_FILE")"
mkdir -p "$(dirname "$PID_FILE")"

# ── Install systemd service ────────────────────────────────────────────────────
echo "[setup] Installing systemd service..."
cp "$SERVICE_FILE" /etc/systemd/system/studyroadmap-deploy.service

# Enable env vars (use token from env or default)
mkdir -p /etc/systemd/system/studyroadmap-deploy.service.d/
cat > /etc/systemd/system/studyroadmap-deploy.service.d/override.conf <<EOF
[Service]
Environment=DEPLOY_TOKEN=$DEPLOY_TOKEN
Environment=DEPLOY_PORT=$PORT
Environment=APP_DIR=$APP_DIR
EOF

# ── Reload systemd ─────────────────────────────────────────────────────────────
systemctl daemon-reload
echo "[setup] Systemd daemon-reloaded"

# ── Enable and start ──────────────────────────────────────────────────────────
systemctl enable studyroadmap-deploy
echo "[setup] Service enabled"

systemctl restart studyroadmap-deploy
sleep 3

# ── Verify ────────────────────────────────────────────────────────────────────
STATUS=$(systemctl is-active studyroadmap-deploy 2>&1 || echo "failed")
echo "[setup] Service status: $STATUS"

if [ "$STATUS" = "active" ]; then
    echo ""
    echo "✅ Deploy service is running!"
    echo "   Test: curl http://localhost:$PORT/status"
    echo "   Deploy: curl -X POST http://localhost:$PORT/deploy?token=$DEPLOY_TOKEN"
    echo ""
    echo "   To trigger a deploy remotely:"
    echo "   curl -X POST http://YOUR_VPS_IP:$PORT/deploy?token=$DEPLOY_TOKEN"
else
    echo ""
    echo "❌ Service failed to start. Check logs:"
    echo "   journalctl -u studyroadmap-deploy -n 20"
    echo "   cat $LOG_FILE"
fi
