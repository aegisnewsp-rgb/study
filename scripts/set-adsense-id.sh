#!/usr/bin/env bash
# scripts/set-adsense-id.sh — RETIRED 2026-09-15.
#
# StudyRoadmap no longer uses Google AdSense. Monetag (monetag.com) is the only
# ad network; its site-verification id and zones live in src/lib/ads.ts:
#
#   MONETAG_SITE_ID     — <meta name="monetag"> ownership signal
#   MONETAG_MULTITAG_ZONE / MONETAG_POPUNDER_ZONE — AdRouter zones
#
# This stub exists so an old runbook, cron entry or agent that still calls it
# fails loudly instead of silently re-injecting AdSense into Layout.astro and
# public/ads.txt (which would breach the ad policy and re-add a third-party
# network we have deliberately removed).
set -euo pipefail
echo "ERROR: set-adsense-id.sh is retired — AdSense was removed on 2026-09-15." >&2
echo "Monetag is the only ad network. Configure zones in src/lib/ads.ts." >&2
exit 1
