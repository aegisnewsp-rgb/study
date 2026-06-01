#!/bin/bash
# ─── sr-alert.sh — minimal, dependency-free alert fan-out ─────────────────────
# Usage: sr-alert.sh "message"
#
# Always: appends to /tmp/sr-alerts.log and writes /tmp/sr-DOWN breadcrumb.
# Optional external channels, enabled only if the matching env var is set
# (put exports in /srv/studyroadmap/scripts/sr-alert.env, sourced below):
#   NTFY_URL          -> POST body to an ntfy.sh topic
#   SLACK_WEBHOOK_URL  -> POST {"text": msg} to a Slack/Discord-compatible webhook
#   HEALTHCHECK_FAIL_URL -> ping a healthchecks.io-style dead-man's-switch /fail
#   ALERT_EMAIL       -> send via `mail` if available
# This keeps alerting working with zero infra today, and lets the user wire a
# real push channel later by dropping one line into sr-alert.env.
# ─────────────────────────────────────────────────────────────────────────────
set -uo pipefail
MSG="${*:-studyroadmap alert}"
STAMP="$(date '+%Y-%m-%d %H:%M:%S')"
ENVFILE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/sr-alert.env"

echo "[$STAMP] $MSG" >> /tmp/sr-alerts.log
echo "[$STAMP] $MSG" > /tmp/sr-DOWN

# Load optional channel config (never fail if absent)
[ -f "$ENVFILE" ] && . "$ENVFILE" 2>/dev/null || true

if [ -n "${NTFY_URL:-}" ]; then
  curl -fsS -m 10 -H "Title: StudyRoadmap" -d "$MSG" "$NTFY_URL" >/dev/null 2>&1 || true
fi
if [ -n "${SLACK_WEBHOOK_URL:-}" ]; then
  curl -fsS -m 10 -H 'Content-Type: application/json' \
       -d "{\"text\":\":rotating_light: $MSG\"}" "$SLACK_WEBHOOK_URL" >/dev/null 2>&1 || true
fi
if [ -n "${HEALTHCHECK_FAIL_URL:-}" ]; then
  curl -fsS -m 10 --data-raw "$MSG" "$HEALTHCHECK_FAIL_URL" >/dev/null 2>&1 || true
fi
if [ -n "${ALERT_EMAIL:-}" ] && command -v mail >/dev/null 2>&1; then
  echo "$MSG" | mail -s "[StudyRoadmap] DOWN alert" "$ALERT_EMAIL" 2>/dev/null || true
fi
exit 0
