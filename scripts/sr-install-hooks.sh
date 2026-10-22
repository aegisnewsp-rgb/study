#!/bin/sh
# sr-install-hooks.sh — install the repo's git hooks into .git/hooks.
#
# WHY THIS EXISTS (measured 2026-10-21):
#   The receipt gate was installed by hand on 2026-10-21T01:11Z with a bare
#   `cp` from a shell. Nothing in the repo reproduced it, so a fresh clone — or
#   the deploy host — had no gate at all, and the 0405Z guard that was supposed
#   to protect the deploy path was guarding nothing on that machine. A guard
#   nobody can install is not a guard.
#
#   The same hole lost the BYPASS AUDIT: commit 870649cf landed four files that
#   three refusing receipts govern, and there was no post-commit hook, so
#   neither `--no-verify` nor SR_RECEIPT_GATE_BYPASS=1 left a record.
#
#   And the hole reopened by a path NO commit hook can see (measured
#   2026-10-22T09:05Z): commits made with `git commit-tree` + `git update-ref`
#   run no hooks at all, so they left no pre-commit verdict and no post-commit
#   record — the audit trail was blind for 4h34m, covering the window in which
#   a refused change landed. `reference-transaction` fires for every ref
#   update and is not skipped by --no-verify, so it closes that hole.
#
# USAGE:
#   scripts/sr-install-hooks.sh            # install pre-commit + post-commit
#   scripts/sr-install-hooks.sh --check    # report what is installed, change nothing
#   scripts/sr-install-hooks.sh --remove   # remove the two hooks
#
# EXIT CODES: 0 = installed (or already correct), 1 = failed.
#
# IDEMPOTENT: running it twice is a no-op the second time. A hook that is
# already byte-identical to the template is left alone.

set -uo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || {
    echo "sr-install-hooks: not inside a git repository" >&2
    exit 1
}

HOOKS_DIR="$REPO_ROOT/.git/hooks"
SRC_DIR="$REPO_ROOT/scripts/git-hooks"
HOOKS="pre-commit post-commit reference-transaction"
MODE="${1:-install}"

report() {
    for h in $HOOKS; do
        src="$SRC_DIR/$h"
        dst="$HOOKS_DIR/$h"
        if [ ! -f "$src" ]; then
            echo "  $h: TEMPLATE MISSING ($src)"
            continue
        fi
        if [ -f "$dst" ] && cmp -s "$src" "$dst"; then
            echo "  $h: installed and current"
        elif [ -f "$dst" ]; then
            echo "  $h: installed but DIFFERS from the template"
        else
            echo "  $h: NOT installed"
        fi
    done
}

case "$MODE" in
    --check)
        echo "sr-install-hooks: current state in $HOOKS_DIR"
        report
        exit 0
        ;;
    --remove)
        for h in $HOOKS; do
            if [ -f "$HOOKS_DIR/$h" ]; then
                rm -f "$HOOKS_DIR/$h"
                echo "  removed $h"
            fi
        done
        exit 0
        ;;
    install) ;;
    *)
        echo "usage: sr-install-hooks.sh [--check|--remove]" >&2
        exit 1
        ;;
esac

[ -d "$HOOKS_DIR" ] || mkdir -p "$HOOKS_DIR"

rc=0
for h in $HOOKS; do
    src="$SRC_DIR/$h"
    dst="$HOOKS_DIR/$h"
    if [ ! -f "$src" ]; then
        echo "  $h: SKIPPED — template missing at $src" >&2
        rc=1
        continue
    fi
    if [ -f "$dst" ] && cmp -s "$src" "$dst"; then
        chmod +x "$dst" 2>/dev/null || true
        echo "  $h: already current"
        continue
    fi
    # Back up a hook that is not ours before replacing it. Ours carries a marker.
    # The reference-transaction hook is ours too, and it is identified by its
    # own script name — testing for the gate's name alone made the installer
    # back up its own hook on every run.
    if [ -f "$dst" ] && ! grep -qE "sr-receipt-gate|sr-ref-tx-audit" "$dst" 2>/dev/null; then
        cp "$dst" "$dst.bak-$(date -u +%Y%m%dT%H%M%SZ)"
        echo "  $h: existing hook was not ours — backed it up to $dst.bak-*"
    fi
    cp "$src" "$dst" || { echo "  $h: FAILED to copy" >&2; rc=1; continue; }
    chmod 755 "$dst" || { echo "  $h: FAILED to chmod" >&2; rc=1; continue; }
    echo "  $h: installed"
done

echo "sr-install-hooks: state now"
report

exit $rc
