#!/bin/bash
set -e
cd /srv/studyroadmap

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# A deploy builds the WORKING TREE (Dockerfile:6 `COPY . .`), so content that no
# commit ever touched would ship unless something adjudicates the tree itself.
# Added 2026-10-21T04:12Z; the operator's 02:40Z brief asked for exactly this and
# measured the leak. See scripts/sr-deploy-guard.sh for the full reasoning.
echo "=== RECEIPT GATE (dirty shipped-content tree) ==="
bash "$REPO_ROOT/scripts/sr-deploy-guard.sh" || {
    echo "DEPLOY ABORTED by receipt gate." >&2
    exit 1
}

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
