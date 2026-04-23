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

printf '%s\n%s\n%s\n' "$staged" "$unstaged" "$untracked" | sed '/^$/d' | sort -u > /tmp/sr_changed_files.txt

if [ ! -s /tmp/sr_changed_files.txt ]; then
  echo "Scope OK (no changed files)."
  exit 0
fi

fail=0

if [ -f LOCKED_FILES.txt ]; then
  while IFS= read -r locked; do
    [ -z "$locked" ] && continue
    if grep -Fxq "$locked" /tmp/sr_changed_files.txt; then
      echo "BLOCKED: locked file modified -> $locked"
      fail=1
    fi
  done < LOCKED_FILES.txt
fi

allowed_re='^(src/content/|src/content\.config\.ts|src/data/|src/pages/|src/components/|public/|scripts/|skills/|LOCKED_FILES\.txt|CLAUDE\.md|CLAUDE\.local\.md|news\.json|improvement-backlog.*\.md|heartbeat-log\.md)'
if out_of_scope=$(grep -Ev "$allowed_re" /tmp/sr_changed_files.txt); then
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
sed 's/^/  /' /tmp/sr_changed_files.txt
