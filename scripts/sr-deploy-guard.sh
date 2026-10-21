#!/usr/bin/env bash
# ─── sr-deploy-guard.sh — refuse a deploy that would ship a refused tree ────
#
# WHY THIS EXISTS (all measured, 2026-10-21T04:05Z..04:12Z):
#
#   A deploy BUILDS THE WORKING TREE, not a commit.
#     Dockerfile:6              COPY . .
#     docker-compose.yml:3      build: .
#   so the whole tree goes into the image, and the receipt gate that refuses a
#   COMMIT cannot see an unstaged file. The operator's 2026-10-21T02:40Z brief
#   measured the consequence: a build that finished 02:35Z into dist/ carried
#   content HEAD did not contain — https://uneb.ac.ug 5x (the URL whose TLS cert
#   fails) and a "Shortlisting" line that exists only in an uncommitted file.
#
#   This runs the SAME gate, in --worktree mode, so a tree whose receipts refuse
#   aborts the deploy instead of shipping.
#
# WHY NOT `git diff --quiet`:
#
#   The build itself writes src/data/site-revision.json and public/revision.json
#   (measured: both mtime 2026-10-21 02:35:28Z — the same second as the 02:35Z
#   build), so the tree is NEVER clean. A whole-tree guard would block every
#   deploy forever, including legitimate ones, and would be disabled within a
#   day. The gate's scope is narrow, by path, and excludes those two files by
#   name.
#
# IF THE GATE SCRIPT IS MISSING:
#
#   Warn loudly and allow. Blocking every deploy because a control script went
#   missing is a self-inflicted outage, and the other deploy guards still run.
#   The missing gate is reported, never silently swallowed.
#
# Exit codes: 0 = deploy may proceed. 1 = abort the deploy.
# ─────────────────────────────────────────────────────────────────────────────

set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GATE="$REPO_ROOT/scripts/sr-receipt-gate.mjs"

if [ ! -f "$GATE" ]; then
    echo "DEPLOY GUARD WARNING: $GATE not found — receipt gate SKIPPED." >&2
    exit 0
fi

cd "$REPO_ROOT" || exit 1

if ! node "$GATE" --worktree; then
    {
        echo ""
        echo "DEPLOY ABORTED: the working tree carries shipped content that a patch receipt refuses."
        echo "  A deploy builds the WORKTREE, not a commit, so the pre-commit hook never saw this."
        echo "  The refusal detail is above (receipt name + reason)."
        echo "  To unblock: commit the content once its receipt says ok=true, revert it, or"
        echo "  record an operator override for the named receipt."
    } >&2
    exit 1
fi

exit 0
