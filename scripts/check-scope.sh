#!/usr/bin/env bash
set -euo pipefail

# Scope guard for StudyRoadmap terminal/agent sprints.
# Blocks changes to UI/layout/build-config files (see LOCKED_FILES.txt),
# and flags any edits outside the allowed content/news/SEO paths.

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

staged="$(git diff --name-only --cached || true)"
unstaged="$(git diff --name-only || true)"
untracked="$(git ls-files --others --exclude-standard || true)"

# The changed-file list goes to a per-invocation mktemp file, not a fixed
# /tmp/sr_changed_files.txt. The fixed path was root-owned (created 2026-09-10 by a
# root-run) while the agent workers run as uid=1000, so every agent-triggered run
# aborted at the redirect with "Permission denied" under `set -e` — this gate had
# been silently un-runnable for every claw pulse since then. mktemp is owned by the
# caller; the trap cleans it up on every exit path.
changed_files="$(mktemp -t sr_changed_files.XXXXXX)"
trap 'rm -f "$changed_files"' EXIT

printf '%s\n%s\n%s\n' "$staged" "$unstaged" "$untracked" | sed '/^$/d' | sort -u > "$changed_files"

if [ ! -s "$changed_files" ]; then
  echo "Scope OK (no changed files)."
  exit 0
fi

fail=0

if [ -f LOCKED_FILES.txt ]; then
  while IFS= read -r locked; do
    [ -z "$locked" ] && continue
    if grep -Fxq "$locked" "$changed_files"; then
      echo "BLOCKED: locked file modified -> $locked"
      fail=1
    fi
  done < LOCKED_FILES.txt
fi

# Layout.astro: Organization schema honesty (AdSense 2026-08-25; "100+ countries" claim).
# .gitignore: ignore local Grok workflow dir like .claude/
# src/lib/: ad + consent POLICY modules (ads.ts, consent.ts) — the single source of
#   truth for what loads for whom. Added 2026-09-15 with the EEA/UK/CH consent
#   manager, because the guard's target is UI/layout/build-config drift, not the
#   policy layer that Layout/AdRouter import. Reviewed in that same change set.
# deploy.sh: unlocked 2026-09-18 (operator-approved, with LOCKED_FILES.txt) so the
#   duplicate host build could be removed — the site is built once in the Docker image
#   and no host volume is mounted, so the host build's dist/ was never served. This is
#   a build-config file, so it is added here deliberately rather than bypassed with
#   --no-verify; the guard's purpose (a human deciding) is satisfied by that decision
#   being recorded in this comment and in the commit message.
allowed_re='^(src/content/|src/content\.config\.ts|src/data/|src/lib/|src/pages/|src/components/|src/layouts/Layout\.astro|public/|scripts/|skills/|deploy\.sh|LOCKED_FILES\.txt|CLAUDE\.md|CLAUDE\.local\.md|news\.json|improvement-backlog.*\.md|heartbeat-log\.md|BUG-LIST\.md|docs/|\.gitignore|nginx\.conf)'
if out_of_scope=$(grep -Ev "$allowed_re" "$changed_files"); then
  if [ -n "$out_of_scope" ]; then
    echo "BLOCKED: out-of-scope files modified:"
    printf '  %s\n' $out_of_scope
    fail=1
  fi
fi

if [ $fail -ne 0 ]; then
  echo
  echo "Revert the offending files and retry. To intentionally widen scope,"
  echo "edit LOCKED_FILES.txt and the allowed regex in this script deliberately."
  exit 1
fi

echo "Scope OK. Changed files:"
sed 's/^/  /' "$changed_files"
