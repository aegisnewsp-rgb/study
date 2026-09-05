#!/usr/bin/env bash
# scripts/set-adsense-id.sh — Injects Google AdSense Publisher ID into Layout.astro and public/ads.txt
# Usage: ./scripts/set-adsense-id.sh ca-pub-XXXXXXXXXXXXXXXX (or pub-XXXXXXXXXXXXXXXX)

set -euo pipefail

INPUT_ID="${1:-}"

if [ -z "$INPUT_ID" ]; then
  echo "Usage: $0 ca-pub-XXXXXXXXXXXXXXXX (or pub-XXXXXXXXXXXXXXXX)"
  exit 1
fi

# Extract 16-digit numeric publisher ID
PUB_NUM=$(echo "$INPUT_ID" | grep -oE '[0-9]{16}' || true)

if [ -z "$PUB_NUM" ]; then
  echo "ERROR: Invalid Publisher ID. Expected 16 digits (e.g., ca-pub-1234567890123456 or pub-1234567890123456)."
  exit 1
fi

CA_PUB="ca-pub-${PUB_NUM}"
PUB_ONLY="pub-${PUB_NUM}"

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

echo "Configuring StudyRoadmap with Publisher ID: $CA_PUB"

# 1. Update public/ads.txt
ADS_TXT="public/ads.txt"
if [ -f "$ADS_TXT" ]; then
  cat << ADSTXT > "$ADS_TXT"
# ads.txt — Authorized Digital Sellers
# https://studyroadmap.in/ads.txt

google.com, ${PUB_ONLY}, DIRECT, f08c47fec0942fa0

# For other ad networks, add entries below following the IAB ads.txt spec:
# https://iabtechlab.com/ads-txt/
ADSTXT
  echo "✓ Updated $ADS_TXT with: google.com, ${PUB_ONLY}, DIRECT, f08c47fec0942fa0"
fi

# 2. Update src/layouts/Layout.astro
LAYOUT_FILE="src/layouts/Layout.astro"
if [ -f "$LAYOUT_FILE" ]; then
  # Check if verification already exists
  if grep -q "google-adsense-account" "$LAYOUT_FILE"; then
    sed -i -E "s/content=\"ca-pub-[0-9]{16}\"/content=\"${CA_PUB}\"/g" "$LAYOUT_FILE"
    echo "✓ Updated existing google-adsense-account meta tag in $LAYOUT_FILE"
  else
    # Insert after Google Search Console verification meta tag
    sed -i "/google-site-verification/a \\        <!-- Google AdSense Account Verification -->\\n        <meta name=\"google-adsense-account\" content=\"${CA_PUB}\" />\\n        <script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CA_PUB}\" crossorigin=\"anonymous\"></script>" "$LAYOUT_FILE"
    echo "✓ Inserted Google AdSense verification meta tag and script into $LAYOUT_FILE"
  fi
fi

# 3. Verify scope
echo "Verifying git scope..."
./scripts/check-scope.sh

echo "========================================================================="
echo "SUCCESS! AdSense verification configured with $CA_PUB"
echo "Next step: commit and run /data/sr-deploy.sh to push live to production."
echo "========================================================================="
