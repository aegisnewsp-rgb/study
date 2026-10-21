#!/usr/bin/env node
/**
 * sr-gate-audit — the durable audit trail for the receipt gate.
 *
 * WHY THIS FILE EXISTS (measured 2026-10-21T05:35Z; queue row
 * sr-20261021T0520Z-vqzo-COMMIT-BYPASS-870649cf-landed-3-governed-files-guard-proved-working):
 * commit 870649cf landed four files that three REFUSING receipts govern. The
 * pre-commit gate was live and correct — replayed in an isolated clone it
 * returns rc=1 and names all three receipts — so the commit went in with
 * `--no-verify` or with SR_RECEIPT_GATE_BYPASS=1. Neither leaves a record:
 *
 *   - `--no-verify` skips the hook entirely: no output, no file, no trace.
 *   - `SR_RECEIPT_GATE_BYPASS=1` printed ONE line to the committer's stderr and
 *     nothing else, and only on the REFUSE path. The hook's own comment claimed
 *     the bypass was "(logged, not silent)"; nothing was logged to disk. After
 *     the fact there was no way to tell WHICH mechanism was used, WHEN, or by
 *     WHOM.
 *
 * A control nobody can audit is a control nobody can trust. This file is the
 * SINGLE durable writer, so the record format is defined once and cannot drift
 * between the two mechanisms below.
 *
 * TWO INDEPENDENT MECHANISMS, because neither alone is complete:
 *   1. The gate calls writeAudit() when SR_RECEIPT_GATE_BYPASS=1. It sees the
 *      staged paths and the verdict that was overridden.
 *   2. The post-commit hook calls this script after EVERY commit. Verified
 *      locally on git 2.47.3 (/tmp/nvtest, 2026-10-21): `--no-verify` skips
 *      pre-commit but NOT post-commit. So a `--no-verify` bypass is still
 *      recorded — with the commit sha, the author, and the paths that landed.
 *
 * CONTRACT:
 *   - NEVER exits non-zero. A missing or unwritable audit directory must not
 *     fail a commit. The failure mode of a control is worse than its absence,
 *     so the write failure is reported LOUDLY and the exit code stays 0.
 *   - NEVER CREATES A DIRECTORY. Measured 2026-10-21 on this host:
 *     `mkdirSync('/proc/<dir>', {recursive:true})` does not throw and does not
 *     return — it HANGS FOREVER (procfs quirk). A synchronous fs call that can
 *     block indefinitely inside a pre-commit hook would hang every commit that
 *     happened to point SR_AUDIT_LOG at such a path. So the writer requires
 *     the parent directory to already exist and reports a loud error when it
 *     does not. The mesh's default directory always exists.
 *   - Appends one JSON object per line (JSONL). Never truncates and never
 *     rewrites history. Rotates to <path>.1 at MAX_BYTES so the file cannot
 *     grow without bound.
 *   - Records no secrets: paths, verdicts, timestamps, identities only.
 *
 * Usage:
 *   node scripts/sr-gate-audit.mjs --event bypass --verdict REFUSE --rc 1 --paths a,b
 *   node scripts/sr-gate-audit.mjs --event commit --sha HEAD
 */

import { appendFileSync, existsSync, renameSync, statSync } from 'node:fs';
import { dirname } from 'node:path';
import { execFileSync } from 'node:child_process';

export const DEFAULT_LOG = '/data/openclaw-workspace/gate-audit.jsonl';
export const MAX_BYTES = 2 * 1024 * 1024;

/** The audit log path. Overridable so a test (or a host) can point it elsewhere. */
export function auditLogPath() {
  return process.env.SR_AUDIT_LOG || DEFAULT_LOG;
}

/**
 * Append one audit record. NEVER throws and never rejects: the caller gets a
 * result object and decides what to do about it. Returns {ok, path, error}.
 */
export function writeAudit(fields, logPath = auditLogPath()) {
  const record = { ts: new Date().toISOString(), ...fields };
  let line;
  try {
    line = JSON.stringify(record);
  } catch (err) {
    // A field that cannot be serialised must not take the commit down with it.
    return { ok: false, path: logPath, error: `record is not serialisable: ${err.message}` };
  }
  try {
    const dir = dirname(logPath);
    if (!existsSync(dir)) {
      return {
        ok: false,
        path: logPath,
        error: `audit directory does not exist: ${dir} (create it, or point SR_AUDIT_LOG elsewhere)`,
      };
    }
    if (existsSync(logPath) && statSync(logPath).size > MAX_BYTES) {
      renameSync(logPath, `${logPath}.1`);
    }
    appendFileSync(logPath, `${line}\n`);
    return { ok: true, path: logPath };
  } catch (err) {
    return { ok: false, path: logPath, error: err.message };
  }
}

/** Run a git command and return its trimmed stdout, or '' if it fails. */
function git(args, cwd) {
  try {
    return execFileSync('git', args, {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return '';
  }
}

/**
 * The facts about a commit that just landed: sha, author, and the paths it
 * touched. `--root` matters: the first commit in a repo has no parent, and
 * `git diff-tree` without it reports an empty file list for root commits.
 */
export function collectCommitFacts(cwd = process.cwd()) {
  const sha = git(['rev-parse', 'HEAD'], cwd);
  const author = git(['log', '-1', '--format=%an <%ae>'], cwd);
  const paths = git(
    ['diff-tree', '--no-commit-id', '--name-only', '-r', '--root', 'HEAD'],
    cwd,
  )
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
  return { sha, author, paths };
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) {
      out[key] = true;
    } else {
      out[key] = next;
      i++;
    }
  }
  return out;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const event = typeof args.event === 'string' ? args.event : 'unknown';
  const fields = {
    event,
    pid: process.pid,
    user: process.env.USER || process.env.LOGNAME || 'unknown',
    cwd: process.cwd(),
  };

  if (event === 'commit') {
    const facts = collectCommitFacts();
    fields.sha = facts.sha;
    fields.author = facts.author;
    fields.paths = facts.paths.slice(0, 200);
    fields.path_count = facts.paths.length;
  } else {
    if (typeof args.verdict === 'string') fields.verdict = args.verdict;
    if (args.rc !== undefined) fields.rc = Number(args.rc);
    if (typeof args.paths === 'string') {
      fields.paths = args.paths.split(',').map((s) => s.trim()).filter(Boolean).slice(0, 200);
      fields.path_count = fields.paths.length;
    }
    if (typeof args.note === 'string') fields.note = args.note;
  }

  const out = writeAudit(fields);
  if (!out.ok) {
    // stderr: this is the failure channel a hook should show.
    console.error(`sr-gate-audit: AUDIT WRITE FAILED (${out.error}). The event is NOT recorded.`);
    // Exit 0 on purpose: a broken audit trail must never block a commit.
    return 0;
  }
  // stdout on success: a hook may discard stdout without hiding a real failure.
  console.log(`sr-gate-audit: recorded ${event} -> ${out.path}`);
  return 0;
}

const isMain = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  process.exit(main());
}
