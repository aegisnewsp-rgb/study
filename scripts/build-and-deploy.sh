#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

"$REPO_ROOT/scripts/check-scope.sh"

if [ -f package-lock.json ]; then
  npm ci --legacy-peer-deps
else
  npm install --legacy-peer-deps
fi

npm run build

css_count="$(find dist -type f -name '*.css' | wc -l | tr -d ' ')"
if [ "${css_count}" -lt 1 ]; then
  echo "BUILD SANITY FAIL: no CSS artifacts produced under dist/."
  exit 1
fi

if [ -x "./scripts/safe-deploy.sh" ]; then
  ./scripts/safe-deploy.sh
elif [ -x ./deploy.sh ]; then
  ./deploy.sh
else
  echo "No deploy script found; skipping deploy step."
fi

echo
echo "Post-deploy probe:"
curl -sS -I https://studyroadmap.in/ | head -n 5 || true
