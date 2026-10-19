#!/usr/bin/env node
/*
 * check-queue-row-freshness.mjs — stop treating a queue row's status field as evidence.
 *
 * THE DEFECT THIS EXISTS FOR
 *   (queue row sr-20261019T1512Z-vqzo-FINDING-queue-status-field-is-not-authoritative,
 *   score 4100, class FALSE_OPEN_QUEUE__CONTROL_PLANE)
 *
 *   The router ranks the queue by `score` and classifies it by `status`/`state`.
 *   Both fields are written by the same agent that filed the row, and neither is
 *   checked against the repo. Measured over queue/pending: of 157 rows with no
 *   terminal token in status/state, 96 carried completion language in their own
 *   body (SHIPPED / LANDED / FIXED / RETIRED / SUPERSEDED / ALREADY_*) and 100
 *   cited a commit SHA that resolves in real git history.
 *
 *   A status field is a CLAIM. It is not a measurement.
 *
 * MEASURED COST, ALREADY PAID
 *   Rows sr-20261019T0557Z and sr-2235Z (score 3600 each) were ranked TOP OF
 *   QUEUE by the 1135Z, 1150Z and 1505Z scans while their fix had already landed
 *   at f75b15f7. One of those pulses recorded the row as `defect_live_at_head:
 *   true` — a false claim, contradicted by reading the file. Another pulse would
 *   have re-shipped the change or filed a duplicate row for a defect that cannot
 *   exist at HEAD.
 *
 * WHAT THIS GATE DOES
 *   1. REPORT (default, read-only). Classifies every pending row into one of:
 *        TERMINAL              — status/state already carries a terminal token
 *        AUTOVERIFIABLE_STALE  — body asserts completion AND cites a commit SHA
 *                                that is a real ancestor of HEAD
 *        STALE_UNVERIFIABLE    — body asserts completion, cites no verifiable SHA
 *        LIVE_UNCLAIMED        — no terminal token, no completion claim
 *      The completion/ancestor signal is REPORTING ONLY. It is what makes a row
 *      suspicious. It is never, by itself, proof that a defect is gone.
 *
 *   2. AUTOCLOSE (opt-in, --autoclose). Closes a row ONLY by running that row's
 *      OWN machine-checkable closure_probe and getting a POSITIVE result for the
 *      defect being ABSENT. Supported probe kinds:
 *        grep_absent  {path, pattern}  -> closes only if the file exists and the
 *                                        pattern has ZERO matches
 *      A row with no closure_probe is NEVER rewritten. A probe that cannot be
 *      evaluated (missing file, unreadable path, unsupported kind) is INDETERMINATE
 *      and is never rewritten either. This is the "default is to leave the row
 *      alone" requirement: the gate cannot manufacture a false green, because the
 *      only path to a status rewrite is a probe it actually ran and actually
 *      passed.
 *
 * LANDED-COMMIT TEST, and why not reverse-apply
 *   Ancestry uses `git merge-base --is-ancestor <sha> HEAD`. A prior pulse filed a
 *   lifecycle scanner that classified rows by `git apply -R --check` and called it
 *   "already_present=false" for two diffs that had in fact landed — reverse-apply
 *   false-negatives whenever a later commit shifts context in the same file. It is
 *   a drift detector, not a landed detector. Ancestry does not have that failure.
 *
 *   Note the direction of the lesson: a false NEGATIVE wastes a pulse (the row
 *   looks live). A false POSITIVE here would close a live row, which is worse.
 *   So `fix_in_history` is deliberately NOT a closable probe kind: a landed commit
 *   proves a change was made, not that the defect it addressed is absent at HEAD.
 *
 * USAGE
 *   node scripts/check-queue-row-freshness.mjs                 # report (read-only)
 *   node scripts/check-queue-row-freshness.mjs --json          # machine-readable
 *   node scripts/check-queue-row-freshness.mjs --self-test     # prove the controls
 *   node scripts/check-queue-row-freshness.mjs --autoclose     # run probes, close
 *
 * EXIT CODES
 *   0  report completed, or self-test held in both directions, or every probe
 *      decision was well-founded
 *   1  self-test FAILED a direction, or --autoclose hit a row it could not safely
 *      decide (refused rewrite is a report, not a failure; a crash is)
 *   2  usage / environment error (not inside a repo, queue dir missing)
 *
 * Read-only by default. The only writes happen under --autoclose and are confined
 * to the queue row's own JSON.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_QUEUE = '/data/openclaw-workspace/queue/pending';

const argv = process.argv.slice(2);
const hasFlag = (f) => argv.includes(f);
const optVal = (f, d) => {
  const i = argv.indexOf(f);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : d;
};

const JSON_OUT = hasFlag('--json');
const SELF_TEST = hasFlag('--self-test');
const AUTOCLOSE = hasFlag('--autoclose');
const QUEUE_DIR = optVal('--queue', DEFAULT_QUEUE);

// A row is terminal when its own status/state already says the work ended.
// These are the tokens an agent writes when it believes it finished.
const TERMINAL_TOKENS = [
  'SHIPPED', 'LANDED', 'FIXED', 'RETIRED', 'SUPERSEDED', 'ALREADY',
  'DONE', 'CLOSED', 'RESOLVED', 'CANCELLED', 'REJECTED', 'WITHDRAWN',
  'ARCHIVED', 'ABANDONED',
];

// Completion language inside the row BODY. A body that says the fix shipped while
// its status says open is exactly the contradiction this gate surfaces.
const COMPLETION_BODY_TOKENS = [
  'SHIPPED', 'LANDED', 'FIXED', 'RETIRED', 'SUPERSEDED', 'ALREADY',
  'HAS LANDED', 'IS NOW LANDED', 'NO LONGER', 'COMMITTED AT', 'DELETED',
];

const SHA_RE = /\b[0-9a-f]{7,40}\b/g;

function git(args, cwd = ROOT) {
  try {
    return {
      ok: true,
      out: execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }),
    };
  } catch (e) {
    return { ok: false, out: '', status: e.status ?? -1 };
  }
}

function isAncestor(sha) {
  return git(['merge-base', '--is-ancestor', sha, 'HEAD']).ok;
}

/** Pull every token that looks like a git sha out of a row, newest-looking first. */
function citedShas(row) {
  const raw = JSON.stringify(row);
  const found = raw.match(SHA_RE) || [];
  // de-dup, drop obvious non-shas (all digits/hex words are validated by git below)
  return [...new Set(found)].filter((s) => /[a-f]/.test(s) && !/^\d+$/.test(s));
}

function hasToken(haystack, tokens) {
  const h = haystack.toUpperCase();
  return tokens.some((t) => h.includes(t));
}

function classify(row) {
  const statusField = `${row.status ?? ''} ${row.state ?? ''}`;
  const body = JSON.stringify({ ...row, status: undefined, state: undefined });

  if (hasToken(statusField, TERMINAL_TOKENS)) return { bucket: 'TERMINAL', shas: [], landedShas: [] };

  const shas = citedShas(row);
  const landedShas = shas.filter(isAncestor);

  if (hasToken(body, COMPLETION_BODY_TOKENS)) {
    return landedShas.length
      ? { bucket: 'AUTOVERIFIABLE_STALE', shas, landedShas }
      : { bucket: 'STALE_UNVERIFIABLE', shas, landedShas };
  }
  return { bucket: 'LIVE_UNCLAIMED', shas, landedShas };
}

// ---------------------------------------------------------------------------
// closure probes: positive test for the defect being ABSENT
// ---------------------------------------------------------------------------

function probeGrepAbsent(probe, baseDir) {
  const target = path.isAbsolute(probe.path) ? probe.path : path.join(baseDir, probe.path);
  if (!fs.existsSync(target)) {
    return { verdict: 'INDETERMINATE', why: `probe path does not exist: ${probe.path}` };
  }
  let text;
  try {
    text = fs.readFileSync(target, 'utf8');
  } catch (e) {
    return { verdict: 'INDETERMINATE', why: `probe path unreadable: ${probe.path}` };
  }
  // Count NON-overlapping matches so a doubled-letter key cannot hide inside a
  // longer one — the class of mistake this whole board keeps making.
  let count = 0;
  let idx = text.indexOf(probe.pattern);
  while (idx !== -1) {
    count += 1;
    idx = text.indexOf(probe.pattern, idx + probe.pattern.length);
  }
  return count === 0
    ? { verdict: 'CLOSED', why: `0 matches for ${JSON.stringify(probe.pattern)} in ${probe.path}` }
    : { verdict: 'LIVE', why: `${count} match(es) for ${JSON.stringify(probe.pattern)} in ${probe.path}` };
}

function runProbe(row, baseDir) {
  const probe = row.closure_probe;
  if (!probe || typeof probe !== 'object') {
    return { verdict: 'NO_PROBE', why: 'row carries no machine-checkable closure_probe' };
  }
  // Dispatch on the DECLARED kind, never on the presence of path+pattern.
  // Dispatching on shape let a probe whose kind is deliberately NOT closable
  // (fix_in_history) — and any invented kind — run grep_absent and close the
  // row, which is exactly the false green this gate exists to prevent.
  if (probe.kind !== 'grep_absent') {
    return { verdict: 'UNSUPPORTED', why: `probe kind is not closable: ${JSON.stringify(probe.kind)}` };
  }
  if (typeof probe.pattern !== 'string' || typeof probe.path !== 'string') {
    return { verdict: 'UNSUPPORTED', why: `probe needs string path+pattern, got: ${Object.keys(probe).join(',')}` };
  }
  return probeGrepAbsent(probe, baseDir);
}

// ---------------------------------------------------------------------------
// load
// ---------------------------------------------------------------------------

function loadRows(queueDir) {
  if (!fs.existsSync(queueDir)) throw new Error(`queue dir not found: ${queueDir}`);
  const out = [];
  for (const name of fs.readdirSync(queueDir).sort()) {
    if (!name.endsWith('.json')) continue;
    if (name.startsWith('_') || name.startsWith('.')) continue; // artifacts, not rows
    let parsed;
    try {
      parsed = JSON.parse(fs.readFileSync(path.join(queueDir, name), 'utf8'));
    } catch {
      continue; // malformed rows are not this gate's problem
    }
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) continue;
    out.push({ file: name, row: parsed });
  }
  return out;
}

// ---------------------------------------------------------------------------
// self-test — the negative control, run every time before shipping
// ---------------------------------------------------------------------------

function selfTest() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sr-queue-freshness-'));
  const results = [];
  let ok = true;

  try {
    // live.txt still contains the defect. fixed.txt no longer does.
    fs.writeFileSync(path.join(dir, 'live.txt'), 'const FAQS = { "cuet-pg": [] };\n');
    fs.writeFileSync(path.join(dir, 'fixed.txt'), 'const FAQS = { "cucet-pg": [] };\n');

    const liveRow = {
      id: 'selftest-live',
      status: 'OPEN',
      closure_probe: { kind: 'grep_absent', path: 'live.txt', pattern: 'cuet-pg' },
    };
    const fixedRow = {
      id: 'selftest-fixed',
      status: 'OPEN',
      closure_probe: { kind: 'grep_absent', path: 'fixed.txt', pattern: 'cuet-pg' },
    };
    const noProbeRow = { id: 'selftest-noprobe', status: 'OPEN' };
    const missingRow = {
      id: 'selftest-missingfile',
      status: 'OPEN',
      closure_probe: { kind: 'grep_absent', path: 'does-not-exist.txt', pattern: 'cuet-pg' },
    };
    const unsupportedRow = {
      id: 'selftest-unsupported',
      status: 'OPEN',
      closure_probe: { kind: 'vibes' },
    };
    // The load-bearing cases. Each carries a COMPLETE, well-formed path+pattern
    // pointed at a CLEAN file — so a shape-only dispatch would read them as
    // CLOSED. The declared kind must be what stops them. Without these, the
    // "unsupported kind" case above passed vacuously (no path, no pattern) and
    // the whole kind check went untested.
    const fixInHistoryRow = {
      id: 'selftest-fix-in-history',
      status: 'OPEN',
      closure_probe: { kind: 'fix_in_history', path: 'fixed.txt', pattern: 'cuet-pg' },
    };
    const inventedKindRow = {
      id: 'selftest-invented-kind',
      status: 'OPEN',
      closure_probe: { kind: 'i_just_made_this_kind_up', path: 'fixed.txt', pattern: 'cuet-pg' },
    };
    const kindlessRow = {
      id: 'selftest-kindless',
      status: 'OPEN',
      closure_probe: { path: 'fixed.txt', pattern: 'cuet-pg' },
    };

    const expect = [
      [liveRow, 'LIVE', 'a row whose defect is still present must NOT be closed'],
      [fixedRow, 'CLOSED', 'a row whose defect is provably absent must close'],
      [noProbeRow, 'NO_PROBE', 'a row with no probe must NOT be closed'],
      [fixInHistoryRow, 'UNSUPPORTED', 'fix_in_history is documented NOT closable and must NOT close on a clean file'],
      [inventedKindRow, 'UNSUPPORTED', 'an invented kind must NOT close just because it carries path+pattern'],
      [kindlessRow, 'UNSUPPORTED', 'a probe with no declared kind must NOT close on shape alone'],
      [missingRow, 'INDETERMINATE', 'a missing probe path is not proof of absence'],
      [unsupportedRow, 'UNSUPPORTED', 'an unsupported probe kind must NOT be closed'],
    ];

    for (const [row, want, why] of expect) {
      const got = runProbe(row, dir);
      const pass = got.verdict === want;
      if (!pass) ok = false;
      results.push({ id: row.id, expected: want, got: got.verdict, pass, why, detail: got.why });
    }

    // Direction-2 control: the classifier must NOT call a terminal row stale,
    // and must NOT call an open, completion-free row done.
    // The stale case needs a REAL ancestor sha. A made-up sha must classify
    // STALE_UNVERIFIABLE, which is itself the behaviour we want from an
    // unresolvable reference — so that gets its own case rather than being
    // quietly folded into the pass.
    const headSha = git(['rev-parse', 'HEAD']).out.trim();
    const cases = [
      [classify({ status: 'SHIPPED__AUTOVERIFIED' }), 'TERMINAL', 'a terminal row must classify terminal'],
      [classify({ status: 'OPEN', note: 'still investigating' }), 'LIVE_UNCLAIMED', 'an open row with no completion claim must stay live'],
      [classify({ status: 'OPEN', note: `LANDED in ${headSha}` }), 'AUTOVERIFIABLE_STALE', 'a completion claim plus a landed sha must classify stale'],
      [classify({ status: 'OPEN', note: 'LANDED in deadbeefcafe1234' }), 'STALE_UNVERIFIABLE', 'a completion claim citing an unresolvable sha is NOT verifiable'],
    ];
    for (const [got, want, why] of cases) {
      const pass = got.bucket === want;
      if (!pass) ok = false;
      results.push({ id: `classify-${want.toLowerCase()}`, expected: want, got: got.bucket, pass, why, detail: '' });
    }
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }

  const failed = results.filter((r) => !r.pass);
  if (JSON_OUT) {
    console.log(JSON.stringify({ self_test: ok ? 'PASS' : 'FAIL', cases: results }, null, 2));
  } else {
    console.log('check-queue-row-freshness: SELF-TEST');
    for (const r of results) {
      console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.id.padEnd(24)} ${String(r.got).padEnd(14)} ${r.why}`);
    }
    console.log(`  -> ${ok ? 'PASS (negative control live in both directions)' : `FAIL (${failed.length} case(s))`}`);
  }
  process.exit(ok ? 0 : 1);
}

// ---------------------------------------------------------------------------

function main() {
  if (!git(['rev-parse', '--git-dir']).ok) {
    console.error('check-queue-row-freshness: not inside a git repo; run from the repo root.');
    process.exit(2);
  }
  if (SELF_TEST) selfTest();

  const loaded = loadRows(QUEUE_DIR);
  const counts = {};
  const rows = loaded.map(({ file, row }) => {
    const c = classify(row);
    counts[c.bucket] = (counts[c.bucket] || 0) + 1;
    return { file, row, ...c };
  });

  let closed = 0;
  const probes = [];
  if (AUTOCLOSE) {
    const baseDir = ROOT;
    for (const entry of rows) {
      if (entry.bucket === 'TERMINAL') continue;
      const res = runProbe(entry.row, baseDir);
      probes.push({ file: entry.file, bucket: entry.bucket, ...res });
      if (res.verdict !== 'CLOSED') continue;
      entry.row.status = 'SHIPPED__AUTOVERIFIED';
      entry.row.state = 'SHIPPED__AUTOVERIFIED';
      entry.row.closure_probe_result = {
        verdict: res.verdict,
        probe: entry.row.closure_probe,
        evidence: res.why,
        verified_at: new Date().toISOString(),
        head: git(['rev-parse', 'HEAD']).out.trim(),
        by: 'scripts/check-queue-row-freshness.mjs --autoclose',
      };
      fs.writeFileSync(path.join(QUEUE_DIR, entry.file), JSON.stringify(entry.row, null, 2) + '\n');
      closed += 1;
    }
  }

  const stale = rows.filter((r) => r.bucket === 'AUTOVERIFIABLE_STALE');
  const unver = rows.filter((r) => r.bucket === 'STALE_UNVERIFIABLE');

  if (JSON_OUT) {
    console.log(JSON.stringify({
      tool: 'check-queue-row-freshness',
      queue_dir: QUEUE_DIR,
      head: git(['rev-parse', 'HEAD']).out.trim(),
      rows_scanned: rows.length,
      buckets: counts,
      autoclose: AUTOCLOSE,
      closed,
      probes,
      top_stale: stale.slice(0, 20).map((r) => ({ file: r.file, landedShas: r.landedShas.slice(0, 3) })),
      stale_unverifiable: unver.slice(0, 20).map((r) => ({ file: r.file, cited: r.shas.slice(0, 3) })),
    }, null, 2));
  } else {
    console.log(`check-queue-row-freshness: ${rows.length} rows in ${QUEUE_DIR}`);
    console.log(`  head ${git(['rev-parse', '--short', 'HEAD']).out.trim()}`);
    for (const b of ['TERMINAL', 'AUTOVERIFIABLE_STALE', 'STALE_UNVERIFIABLE', 'LIVE_UNCLAIMED']) {
      console.log(`  ${b.padEnd(22)} ${counts[b] || 0}`);
    }
    const claimGap = (counts.AUTOVERIFIABLE_STALE || 0) + (counts.STALE_UNVERIFIABLE || 0);
    console.log(`  rows whose body contradicts their status: ${claimGap}`);
    if (AUTOCLOSE) {
      const byVerdict = {};
      for (const p of probes) byVerdict[p.verdict] = (byVerdict[p.verdict] || 0) + 1;
      console.log(`  autoclose: closed=${closed} verdicts=${JSON.stringify(byVerdict)}`);
      for (const p of probes.filter((x) => x.verdict === 'CLOSED')) {
        console.log(`    CLOSED   ${p.file} — ${p.why}`);
      }
    } else {
      console.log('  (report only; pass --autoclose to run closure probes)');
    }
    if (stale.length) {
      console.log('  top contradictory rows:');
      for (const r of stale.slice(0, 5)) {
        console.log(`    ${r.file.slice(0, 66).padEnd(66)} sha=${r.landedShas[0] || '-'}`);
      }
    }
  }
  process.exit(0);
}

main();