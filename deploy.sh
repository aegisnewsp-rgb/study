#!/bin/bash
# ─── StudyRoadmap Deploy Script ──────────────────────────────────
# Run this on your VPS after uploading the files
#
# 1. Upload files to /srv/studyroadmap/ using SCP:
#    scp -r ./studyroadmap-astro/* root@187.127.134.151:/srv/studyroadmap/
#
# 2. SSH into your VPS and run:
#    cd /srv/studyroadmap && bash deploy.sh
# ─────────────────────────────────────────────────────────────────

set -e
cd /srv/studyroadmap

echo "[1/4] Stopping existing container..."
docker compose down 2>/dev/null || true

echo "[2/4] Building Docker image..."
docker build -t studyroadmap:latest .

echo "[3/4] Starting container with Traefik..."
docker compose up -d --force-recreate

echo "[4/4] Verifying..."
sleep 3
if docker ps | grep -q studyroadmap; then
    echo "✅ StudyRoadmap deployed successfully!"
    echo "   https://studyroadmap.in"
    echo "   Container status:"
    docker compose ps
else
    echo "❌ Deployment failed. Check logs: docker compose logs studyroadmap"
    exit 1
fi
