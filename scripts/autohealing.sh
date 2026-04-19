#!/bin/bash
LOG="/tmp/sr-autohealing.log"
echo "[$(date)] Autohealing check" >> $LOG
cd /srv/studyroadmap

# Rule 1: Re-lock any unlocked config files
for f in astro.config.mjs postcss.config.mjs package.json package-lock.json src/layouts/Layout.astro src/styles/global.css; do
  lsattr "$f" 2>/dev/null | grep -q "\-\-\-\-i" || {
    chattr +i "$f"
    echo "[$(date)] Re-locked: $f" >> $LOG
  }
done

# Rule 2: HTTP check — restart if down
HTTP=$(curl -so /dev/null -w "%{http_code}" https://studyroadmap.in/ 2>/dev/null)
if [ "$HTTP" != "200" ]; then
  echo "[$(date)] Site down ($HTTP) — restarting" >> $LOG
  docker compose restart
  sleep 15
  HTTP2=$(curl -so /dev/null -w "%{http_code}" https://studyroadmap.in/ 2>/dev/null)
  echo "[$(date)] After restart: $HTTP2" >> $LOG
fi

# Rule 3: CSS validation (only runs if dist/ exists)
if [ -d "dist/_astro" ]; then
  CSS=$(find dist/_astro/ -name "*.css" | wc -l)
  if [ "$CSS" -eq 0 ]; then
    echo "[$(date)] CRITICAL: 0 CSS files in dist — NOT deploying" >> $LOG
  fi
fi

echo "[$(date)] Checks complete" >> $LOG
