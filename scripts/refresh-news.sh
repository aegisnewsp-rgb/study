#!/usr/bin/env bash
# refresh-news.sh — keep the homepage exam-news feed fresh.
#
# Why this exists: src/pages/index.astro renders public/news.json both at build
# time (process.cwd()/public/news.json) and at runtime (fetch('/news.json')).
# That file is only refreshed when something runs fetch_news_v2.py — and nothing
# was, so it went stale (homepage showed weeks-old headlines). This script is the
# missing refresh, wired to host cron (see /etc/cron.d/studyroadmap).
#
# It refreshes public/news.json and COMMITS it on its own. A commit (not a bare
# working-tree write) is required: the deploy paths use `git reset --hard` /
# `git checkout -- .`, which would otherwise discard an uncommitted refresh.
# Only public/news.json is touched, so it never collides with pipeline patches.
set -uo pipefail

REPO=/srv/studyroadmap

# AUTONOMY (2026-10-03): this script had SEVEN exit points and not one of them printed
# anything. Cron runs it hourly and appends to /var/log/sr-pipeline/news-refresh.log, and
# that log was 0 BYTES and unchanged since 2026-09-19T16:51Z -- 13.5 days -- while cron
# kept firing it. A correctly-idle run and a run that died on a missing repo, a network
# failure, a corrupt feed, or a failed `git add` were byte-for-byte identical on disk.
# There was no signal to tell them apart, so the job could have been dead for a fortnight
# and the loop would not have known. Every path below now records WHY it exited.
NLOG=${SR_NEWS_LOG:-/var/log/sr-pipeline/news-refresh.log}
mkdir -p "$(dirname "$NLOG")" 2>/dev/null || true
nlog() { printf '[%s] news-refresh %s\n' "$(date -u +%FT%TZ)" "$*" >> "$NLOG" 2>/dev/null || true; }
# A REAL failure (broken repo, dead python, bad feed, failed add/commit) escalates to the
# durable event sink as well, so it is visible to the pool rather than only to this log.
nev() { printf '{"ts":"%s","src":"refresh-news","level":"error","msg":"%s"}\n' \
        "$(date -u +%FT%TZ)" "$1" >> /data/ceo-sprint/pool/pool-events.jsonl 2>/dev/null || true; }

cd "$REPO" || { nlog "FAIL cannot cd $REPO"; nev "cannot cd $REPO"; exit 0; }

# Refresh the feed (network RSS fetch; tolerate any failure — keep last-good file)
if ! python3 scripts/fetch_news_v2.py >/tmp/sr-fetch-news.out 2>&1; then
  _frc=$?
  nlog "WARN fetch_news_v2.py rc=$_frc (keeping last-good feed): $(tail -1 /tmp/sr-fetch-news.out 2>/dev/null | cut -c1-200)"
  exit 0
fi

# Nothing changed → nothing to do
if git diff --quiet -- public/news.json 2>/dev/null; then
  nlog "ok: feed unchanged ($(node -e "try{console.log((require('$REPO/public/news.json')||[]).length)}catch(e){console.log('?')}" 2>/dev/null) rows)"
  exit 0
fi

# Sanity: refuse to commit an empty/broken feed
count=$(node -e "try{console.log((require('$REPO/public/news.json')||[]).length)}catch(e){console.log(0)}" 2>/dev/null)
if [ "${count:-0}" -lt 1 ]; then
  nlog "FAIL feed has ${count:-0} rows after refresh - reverting public/news.json to last-good"
  nev "news.json has ${count:-0} rows after refresh; left last-good"
  git checkout -- public/news.json 2>/dev/null
  exit 0
fi

if ! git add public/news.json 2>/dev/null; then
  nlog "FAIL git add public/news.json failed; feed refreshed in working tree but NOT committed"
  nev "git add public/news.json failed - refresh will be lost to the next git reset --hard in the deploy path"
  exit 0
fi
if ! git -c user.name='sr-news-bot' -c user.email='news@studyroadmap.in' \
      commit -q -m 'content(news): refresh homepage exam-news feed' -- public/news.json; then
  nlog "FAIL git commit of public/news.json failed; staged change left in the index"
  nev "git commit of public/news.json failed - change staged but not committed"
  exit 0
fi
nlog "ok: committed $count-row exam-news feed"
