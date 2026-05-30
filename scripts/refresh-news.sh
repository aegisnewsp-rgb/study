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
cd "$REPO" || exit 0

# Refresh the feed (network RSS fetch; tolerate any failure — keep last-good file)
python3 scripts/fetch_news_v2.py >/dev/null 2>&1 || exit 0

# Nothing changed → nothing to do
git diff --quiet -- public/news.json 2>/dev/null && exit 0

# Sanity: refuse to commit an empty/broken feed
count=$(node -e "try{console.log((require('$REPO/public/news.json')||[]).length)}catch(e){console.log(0)}" 2>/dev/null)
[ "${count:-0}" -ge 1 ] || { git checkout -- public/news.json 2>/dev/null; exit 0; }

git add public/news.json 2>/dev/null || exit 0
git -c user.name='sr-news-bot' -c user.email='news@studyroadmap.in' \
    commit -q -m 'content(news): refresh homepage exam-news feed' -- public/news.json || true
