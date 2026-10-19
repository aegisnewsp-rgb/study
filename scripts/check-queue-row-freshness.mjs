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
 *   0. DISPATCHABILITY, before anything is ranked. A file in queue/pending is not
 *      automatically work: the directory also holds tooling artifacts (instrument
 *      findings, censuses, dumps), and an artifact is a JSON object, so a naive
 *      loader counts it as a row. Ranking by `score` alone put an artifact at the
 *      top of queue (sr-20261019T1540Z: the 0335Z near-identical-FAQ-keys finding,
 *      score 44000, TIED with the real 0935Z row — so no tie-break saved it).
 *      A row is dispatchable when it does NOT declare `claw_dispatchable: false`
 *      AND it either names work (exam / pageType / slug / promptFile / target)
 *      or declares itself dispatchable. The gate prints the count split and the
 *      real top of queue, so the router does not hand-rank and cannot reach a dump.
 *
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
 *   node scripts/check-queue-row-freshness.mjs --self-test     # prove the controls *   node scripts/check-queue-row-freshness.mjs --autoclose     # run probes, close
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

// UNKNOWN-FLAG REJECTION
//
// (vqzo pulse 2026-10-19T16:20Z, class FALSE_GREEN__TYPO_FLAG_READS_AS_PASS)
//
// hasFlag/optVal treat the flag set as open-ended: any argv this script does not
// recognize falls through every branch to the report path, which exits 0. Measured
// on this gate, at the tree this file was written:
//
//   node scripts/check-queue-row-freshness.mjs --selftest              -> exit 0
//   node scripts/check-queue-row-freshness.mjs --totally-made-up-flag  -> exit 0
//   cmp of the two outputs                                           -> identical
//
// `--selftest` is the spelling a caller reaches for first; the real flag is
// `--self-test`. The 1620Z orchestrator pulse ran `--selftest`, read the rc=0 as a
// passing self-test, and was one line away from reporting it. A gate that cannot
// tell "I was asked the wrong question" from "everything is fine" is not a gate.
const KNOWN_FLAGS = new Set(['--json', '--self-test', '--autoclose', '--queue']);
const queueIdx = argv.indexOf('--queue');
const unknownFlags = argv.filter(
  (a, i) => !KNOWN_FLAGS.has(a) && !(queueIdx >= 0 && i === queueIdx + 1)
);
if (unknownFlags.length) {
  console.error(
    `check-queue-row-freshness: unknown argument(s): ${unknownFlags.join(' ')}\n` +
    '  known flags: --json --self-test --autoclose --queue <dir>\n' +
    '  note: the self-test flag is --self-test (hyphenated). An unrecognized flag\n' +
    '        used to fall through to the report path and exit 0, which read as a pass.'
  );
  process.exit(2);
}

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

// ---------------------------------------------------------------------------
// dispatchability — a queue file is not automatically WORK
//
// (queue row sr-20261019T1540Z-vqzo-FINDING-top-scored-row-is-a-tooling-dump-not-a-queue-row,
//  score 4200, class FALSE_TOP_OF_QUEUE__TOOLING_ARTIFACT_RANKED_AS_WORK)
//
//   queue/pending mixes dispatchable rows with tooling artifacts — instrument
//   findings, censuses, dumps. An artifact is a JSON object, so loadRows counted
//   it as a row, and ranking by `score` put one at the top of queue: the 0335Z
//   near-identical-FAQ-keys finding, score 44000. It was TIED with a real row
//   (0935Z, also 44000, declared dispatchable), so a tie-break would not have
//   saved it either. Its cited token 63756365742d7067 is the hex encoding of the
//   ASCII string "cucet-pg", not a commit — `git cat-file -t` rejects it.
//
//   So: filter BEFORE sorting, and let the gate do the ranking. The router was
//   hand-ranking by score, which is how a dump reached the top.
//
// ENCODING TRAP, measured on this corpus (494 object rows):
//   `claw_dispatchable` is a JSON boolean on 163 rows and the STRING "False" on
//   6 more (a leaked Python repr — 9 rows are string-encoded in total). A
//   `row.claw_dispatchable === false` test passes all 6 string rows straight
//   through as dispatchable work. Normalize before comparing.
//
// WORK_FIELDS is measured, not guessed: exam 231, pageType 269, slug 34,
//   promptFile 28, target 8. `task`, `path`, `dispatchTo` and `examSlug` occur
//   ZERO times in this corpus and are deliberately NOT listed — a rule built on
//   fields that never occur is decoration that reads like evidence.
const WORK_FIELDS = ['exam', 'pageType', 'slug', 'promptFile', 'target'];

/** true / false when the row declares it, null when absent or unrecognised. */
function declaredDispatchable(row) {
  const v = row.claw_dispatchable;
  if (v === undefined || v === null) return null;
  if (typeof v === 'boolean') return v;
  const s = String(v).trim().toLowerCase();
  if (s === 'false') return false;
  if (s === 'true') return true;
  return null; // unrecognised: fall through to the structural test
}

function workFields(row) {
  return WORK_FIELDS.filter((k) => {
    const v = row[k];
    return v !== undefined && v !== null && v !== '' && !(Array.isArray(v) && v.length === 0);
  });
}

function dispatchability(row) {
  const declared = declaredDispatchable(row);
  if (declared === false) return { dispatchable: false, why: 'declares claw_dispatchable false' };
  const work = workFields(row);
  if (work.length) return { dispatchable: true, why: `work fields: ${work.join(',')}` };
  if (declared === true) return { dispatchable: true, why: 'declares dispatchable; no work field' };
  return { dispatchable: false, why: 'no work field, no dispatchable declaration' };
}

function scoreOf(row) {
  const s = row.score;
  return typeof s === 'number' && Number.isFinite(s) ? s : null;
}

/** Top of queue, DISPATCHABLE rows only, ranked by score. Ties break on filename.
 *  TERMINAL rows are excluded: a row the filer already marked SHIPPED/LANDED/etc must
 *  not be offered back as work. This is the same "false negative wastes a pulse,
 *  false positive re-does shipped work" trade, resolved toward not re-doing work --
 *  and it closes nothing. Excluding a row from a list mutates no row. */
function rankTop(entries, n) {
  return entries
    .filter((e) => e.dispatchable && e.score !== null && e.bucket !== 'TERMINAL')
    .sort((a, b) => b.score - a.score || a.file.localeCompare(b.file))
    .slice(0, n);
}

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
    out.push({ file: name, row: parsed, ...dispatchability(parsed), score: scoreOf(parsed) });
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

    // Direction-3 control: dispatchability. The 1540Z finding is that a tooling
    // artifact outranked real work. Each half must be falsifiable on its own,
    // so the two ENCODINGS of the declaration get separate cases -- a single
    // case for `=== false` would pass while 6 string rows still leaked through.
    const dispCases = [
      ['disp-bool-false', dispatchability({ score: 44000, claw_dispatchable: false }), false,
        'boolean false is an artifact'],
      ['disp-string-false', dispatchability({ score: 44000, exam: 'cucet', pageType: 'exam-overview', claw_dispatchable: 'False' }), false,
        'STRING "False" beats a work field. This case carries exam+pageType on purpose: WITHOUT the normalization it classifies dispatchable and the case still passed, which is how the first version of this test proved nothing'],
      ['disp-string-true', dispatchability({ score: 5, claw_dispatchable: 'True' }), true,
        'STRING "True" is a declaration, and is honoured'],
      ['disp-no-signal', dispatchability({ score: 5 }), false,
        'no work field and no declaration is an artifact'],
      ['disp-declared-true-no-work', dispatchability({ score: 5, claw_dispatchable: true }), true,
        'declared dispatchable with no work field is still work'],
      ['disp-work-field', dispatchability({ exam: 'neet', pageType: 'exam-overview' }), true,
        'a work field is dispatchable'],
      ['disp-declaration-beats-work', dispatchability({ exam: 'neet', claw_dispatchable: false }), false,
        'a non-dispatchable declaration beats a work field'],
      ['disp-empty-work-array', dispatchability({ exam: [], pageType: 'exam-overview' }), true,
        'an empty array is not a work value; the other field still counts'],
    ];
    for (const [id, got, want, why] of dispCases) {
      const pass = got.dispatchable === want;
      if (!pass) ok = false;
      results.push({ id, expected: want, got: got.dispatchable, pass, why, detail: got.why });
    }

    // Direction-4 control: the RANK, at the shape actually measured. The
    // artifact and the live row were TIED at 44000, so an implementation that
    // sorted first and filtered after would put the artifact on top on a
    // filename tie-break and still call it correct.
    // The shipped row is here for a reason: task-router measured 86 rows whose
    // own status says SHIPPED__COMMIT_* still ranking as top work, which
    // re-does shipped work if the router believes the list.
    const rankEntries = [
      { file: 'sr-artifact.json', score: 44000, ...dispatchability({ claw_dispatchable: 'False' }) },
      { file: 'sr-shipped.json', score: 44000, bucket: 'TERMINAL', ...dispatchability({ exam: 'neet', pageType: 'exam-overview' }) },
      { file: 'sr-live.json', score: 44000, ...dispatchability({ exam: 'neet', pageType: 'exam-overview' }) },
      { file: 'sr-low.json', score: 100, ...dispatchability({ exam: 'jee', pageType: 'exam-syllabus' }) },
      { file: 'sr-unscored.json', score: null, ...dispatchability({ exam: 'ups', pageType: 'exam-dates' }) },
    ];
    const rankedFiles = rankTop(rankEntries, 5).map((e) => e.file);
    const rankWant = ['sr-live.json', 'sr-low.json'];
    const rankPass = JSON.stringify(rankedFiles) === JSON.stringify(rankWant);
    if (!rankPass) ok = false;
    results.push({
      id: 'rank-filters-before-sort', expected: rankWant.join(','), got: rankedFiles.join(','), pass: rankPass,
      why: 'a tied artifact must never reach the top of queue; a row already marked SHIPPED must not either; an unscored row must not either',
      detail: '',
    });
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
  const rows = loaded.map(({ file, row, dispatchable, why, score }) => {
    const c = classify(row);
    counts[c.bucket] = (counts[c.bucket] || 0) + 1;
    return { file, row, dispatchable, why, score, ...c };
  });
  const dispatchable = rows.filter((e) => e.dispatchable);
  const artifacts = rows.filter((e) => !e.dispatchable);
  const top = rankTop(rows, 5);
  const topShipped = rows.filter((e) => e.bucket === 'TERMINAL' && e.dispatchable && e.score !== null).length;

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
      dispatchable: dispatchable.length,
      artifacts: artifacts.length,
      buckets: counts,
      top_of_queue: top.map((e) => ({ file: e.file, score: e.score, why: e.why })),
      dispatchable_but_terminal_withheld: topShipped,
      artifacts_sample: artifacts.slice(0, 10).map((e) => ({ file: e.file, score: e.score, why: e.why })),
      autoclose: AUTOCLOSE,
      closed,
      probes,
      top_stale: stale.slice(0, 20).map((r) => ({ file: r.file, landedShas: r.landedShas.slice(0, 3) })),
      stale_unverifiable: unver.slice(0, 20).map((r) => ({ file: r.file, cited: r.shas.slice(0, 3) })),
    }, null, 2));
  } else {
    console.log(`check-queue-row-freshness: ${rows.length} json objects in ${QUEUE_DIR}`);
    console.log(`  head ${git(['rev-parse', '--short', 'HEAD']).out.trim()}`);
    console.log(`  dispatchable ${dispatchable.length}   artifacts ${artifacts.length}`);
    console.log(`  dispatchable-but-already-terminal, withheld from the list: ${topShipped}`);
    console.log('  top of queue (dispatchable only, ranked by score):');
    for (const e of top) {
      console.log(`    ${String(e.score).padStart(7)}  ${e.file.slice(0, 64).padEnd(64)} ${e.why}`);
    }
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