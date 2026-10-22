#!/usr/bin/env node
/**
 * sr-ref-tx-audit — record EVERY ref update, including the ones no commit hook sees.
 *
 * WHY THIS FILE EXISTS (measured 2026-10-22T09:05Z–09:12Z, queue row
 * sr-20261022T0835Z-vqzo-COMMIT-BYPASS-the-receipt-gate-refused-my-staged-set-and-a-concurrent-git-add-A-landed-it-anyway):
 *
 *   The receipt gate refused a staged set (rc=1, correct) and the same change
 *   landed anyway in commit 0ce4aa56, inside another writer's commit whose
 *   message does not mention it. Replaying that exact staged set at the parent
 *   commit still returns rc=1 COMMIT REFUSED, so the gate's verdict was right
 *   and was simply never consulted.
 *
 *   The audit trail had the same hole. The post-commit hook last recorded a
 *   commit at 2026-10-22T04:17:34Z. Three later commits — bebd298c (08:00:42Z),
 *   0ce4aa56 (08:46:57Z) and fb3835d8 (08:51:07Z) — are absent from the log,
 *   and all three are local commits per `git reflog` ("commit: <msg>"), not
 *   pulls. So the trail was blind for 4h34m, which is exactly the window the
 *   bypass happened in.
 *
 *   MEASURED, not assumed, why:
 *     - `core.hooksPath` is not set in ANY config scope (repo, global, system).
 *     - `--no-verify` does NOT skip post-commit: verified on this git 2.47.3 in
 *       /tmp/nvtest3 — two commits, two "post-commit fired" lines. So
 *       --no-verify alone cannot explain a missing post-commit record.
 *     - A normal `git commit` in THIS repo always produces both the gate
 *       output and the audit record: probe commit fa9b0633 (2026-10-22T09:08:46Z)
 *       is in the log, and the gate printed its verdict.
 *     - `git commit-tree` + `git update-ref -m "commit: <msg>"` reproduces the
 *       observed signature EXACTLY: a reflog entry reading "commit: <msg>",
 *       no pre-commit gate output, no post-commit record. Probe 76d745be
 *       (2026-10-22T09:10:11Z) is absent from the log.
 *   So the three unrecorded commits were made through a path that runs NO git
 *   hooks. No hook-based control can cover that; a ref-update hook can, because
 *   reference-transaction fires for every ref update and is not skippable with
 *   --no-verify.
 *
 * WHAT THIS DOES, AND DELIBERATELY WHAT IT DOES NOT:
 *   - RECORDS every branch/tag ref update with the new sha, its author and the
 *     paths it changed. Record-only.
 *   - It does NOT abort anything. The "prepared" phase of reference-transaction
 *     CAN abort a transaction, and aborting is the obvious next step, but this
 *     repo has other live writers (a news bot and a monetisation writer commit
 *     every ~50 minutes). An aborting hook that mis-fires would block their
 *     production commits — a self-inflicted outage, which is the failure mode
 *     this codebase's own hooks are written to avoid. Aborting stays an
 *     operator decision, not a side effect of a cleanup.
 *   - It NEVER exits non-zero. A ref update must not fail because of a logger.
 *
 * CONTRACT:
 *   - Reuses writeAudit() from sr-gate-audit.mjs, so there is still exactly ONE
 *     durable writer and the record format cannot drift.
 *   - NEVER creates a directory, never throws, never blocks a transaction.
 *   - Records no secrets: shas, refs, paths, identities only.
 *
 * Usage (as a git reference-transaction hook):
 *   printf '%s %s %s' <old> <new> <ref> | node scripts/sr-ref-tx-audit.mjs committed
 */

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { writeAudit } from './sr-gate-audit.mjs';

const NULL_SHA = '0'.repeat(40);

/** Refs worth recording. Remote-tracking, stash, notes and worktree refs are
 *  not commits and would drown the log in fetch noise. */
function isInterestingRef(ref) {
  return ref.startsWith('refs/heads/') || ref.startsWith('refs/tags/');
}

function git(args, cwd) {
  try {
    return execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

/** The paths a commit changed. Handles a branch creation, where old is the
 *  null sha and there is no parent to diff against. */
export function changedPaths(oldSha, newSha, cwd) {
  if (!newSha || newSha === NULL_SHA) return [];
  if (!oldSha || oldSha === NULL_SHA) {
    return git(['diff-tree', '--no-commit-id', '--name-only', '-r', '--root', newSha], cwd)
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return git(['diff-tree', '--no-commit-id', '--name-only', '-r', oldSha, newSha], cwd)
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
}

export function recordRefUpdate({ oldSha, newSha, ref, phase, cwd = process.cwd() }) {
  if (!isInterestingRef(ref)) return { ok: true, skipped: 'uninteresting-ref' };
  const paths = changedPaths(oldSha, newSha, cwd);
  const author = git(['log', '-1', '--format=%an <%ae>', newSha], cwd);
  return writeAudit({
    event: 'ref-update',
    phase: phase || 'unknown',
    ref,
    old: oldSha,
    sha: newSha,
    author,
    paths: paths.slice(0, 200),
    path_count: paths.length,
    pid: process.pid,
    user: process.env.USER || process.env.LOGNAME || 'unknown',
    cwd,
  });
}

function main() {
  const phase = process.argv[2] || 'unknown';
  let payload = '';
  try {
    payload = readFileSync(0, 'utf8');
  } catch {
    payload = '';
  }
  const parts = payload.trim().split(/\s+/).filter(Boolean);
  const [oldSha, newSha, ref] = parts;
  if (!ref) {
    // Nothing to record. A logger must never be the reason a ref update fails.
    return 0;
  }
  const out = recordRefUpdate({ oldSha, newSha, ref, phase });
  if (!out.ok) {
    console.error(`sr-ref-tx-audit: AUDIT WRITE FAILED (${out.error}). The ref update is NOT recorded.`);
  }
  return 0;
}

const isMain = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  process.exit(main());
}
