#!/bin/bash
set -e
cd /srv/studyroadmap

echo "=== BUILD ==="
npm run build 2>&1 | tail -5

echo "=== CSS CHECK ==="
CSS=$(find dist/_astro/ -name "*.css" 2>/dev/null | wc -l)
echo "CSS files: $CSS"
if [ "$CSS" -eq 0 ]; then
  echo "❌ ABORT: No CSS files found. Deploy blocked."
  exit 1
fi

echo "=== DEPLOYING ==="
docker compose build --pull --no-cache --build-arg BUILD_DATE=$(date +%s)
docker compose up -d --force-recreate

sleep 5
HTTP=$(curl -so /dev/null -w "%{http_code}" https://studyroadmap.in/)
echo "=== LIVE: HTTP $HTTP ==="

CSS_FILE=$(grep -o '/_astro/[^"]*\.css' dist/index.html | head -1)
echo "CSS live: $CSS_FILE"
curl -Is "https://studyroadmap.in${CSS_FILE}" | grep -E "HTTP|content-type"
