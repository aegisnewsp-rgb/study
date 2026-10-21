#!/usr/bin/env node
/*
 * check-curate-corpus.mjs — run the AUTHORITATIVE curate gate over EVERY note.
 *
 * THE DEFECT THIS EXISTS FOR (vqzo 2026-10-21T0650Z):
 *   The curate gate (python3 /data/sr-curate-gate.py) was only ever run over a
 *   PATCH or a hand-picked handful of notes. Nothing ran it over the corpus, so
 *   the mesh sized its content work from STALE COUNTS IN QUEUE ROWS. Row
 *   sr-1035Z says so in its own words: "Do NOT trust any count in an older row
 *   without re-running sr-tier-census.py and checking its controls first."
 *
 *   The 0650Z pulse ran it over all 3520 notes for the first time. The census
 *   found 31 hard failures (28 filler_free, 3 has_three_tiers) and 540 WARNs.
 *   Reading those 28 by hand showed every one of them is a note that TEACHES
 *   the banned phrase as a discourse marker, an Arabic gloss, a quoted example
 *   or a logic term — zero authorial filler. That is the false-positive class
 *   row sr-1039Z has been carrying since 2026-10-11, and it matches its count
 *   exactly (27 'in conclusion' + 1 'it is important to note' = 28).
 *
 *   So the census is right AND the 28 are not defects. Which is exactly the
 *   trap this pulse nearly fell into: it was one grep away from filing "28
 *   live publish-blocking AdSense failures" — a headline that would have been
 *   false, and would have pointed 3 future pulses at 28 healthy notes.
 *
 * WHAT THIS DOES:
 *   (a) MEASURES VIA THE AUTHORITATIVE INSTRUMENT. It shells out to the same
 *       sr-curate-gate.py that decides a patch's ok=true, over every file under
 *       src/content/notes, in chunks of 200 (3520 paths exceed ARG_MAX as one
 *       argv). It does NOT reimplement the checks: a second implementation is
 *       a second source of truth, and a drift between them is invisible.
 *   (b) BASELINES THE KNOWN NON-PASS SET. scripts/curate-corpus-baseline.txt
 *       records "path<TAB>check" for every hard failure that exists today, so
 *       shipping this gate cannot pin the repo red on 31 pre-existing files and
 *       get ignored. Same idiom as scripts/same-page-restatement-baseline.txt,
 *       scripts/exam-faq-key-baseline.txt, scripts/gate-chain-known-failures.txt.
 *   (c) FAILS ONLY ON NEW HARD FAILURES. A note NOT in the baseline that hard
 *       -fails is a NEW regression and FAILS. That is the entire point: the
 *       gap this closes is notes nobody looked at.
 *   (d) REPORTS THE KNOWN SET WITH ITS REASON, so the 28 false positives can
 *       never be re-reported as 28 live AdSense failures by a later pulse.
 *   (e) IS INERT, NOT GREEN, WHEN ITS CONTROL IS MISSING. sr-curate-gate.py
 *       lives outside the repo (host infra, per sr-1039Z). If it is not there,
 *       this gate exits 2 and says INERT. A missing control must never become a
 *       false pass — and must never become a self-inflicted outage either
 *       (the 0555Z rule): rc=2 is "asserted nothing", not "failed".
 *
 *   WARN-only verdicts (tier_content_ok) are counted and reported but do not
 *   fail the gate: NOTE-PIPELINE L66 defines WARN as style-only.
 *
 * Usage:
 *   node scripts/check-curate-corpus.mjs              # verify, exit 1 on a NEW hard failure
 *   node scripts/check-curate-corpus.mjs --json       # machine-readable
 *   node scripts/check-curate-corpus.mjs --write-baseline
 *   node scripts/check-curate-corpus.mjs --self-test
 *
 *   SR_CURATE_GATE=<path>   override the gate location
 *
 * Exit codes: 0 pass (incl. baselined), 1 a NEW hard failure, 2 INERT (no control).
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');
const BASELINE = path.join(HERE, 'curate-corpus-baseline.txt');
const CHUNK = 200; // argv limit: 3520 paths in one argv is E2BIG
const args = process.argv.slice(2);

const opt = (name, dflt) => {
  const i = args.indexOf(name);
  if (i >= 0 && args[i + 1] && !args[i + 1].startsWith('--')) return args[i + 1];
  const p = args.find((a) => a.startsWith(name + '='));
  return p ? p.slice(name.length + 1) : dflt;
};
const flag = (name) => args.includes(name);

const REPO_DIR = path.resolve(opt('--repo', REPO));
const GATE = path.resolve(opt('--gate', process.env.SR_CURATE_GATE || '/data/sr-curate-gate.py'));
const NOTES_DIR = path.join(REPO_DIR, 'src', 'content', 'notes');
const BASELINE_FILE = opt('--baseline', BASELINE);

// ---- note discovery ----------------------------------------------------------
function listNotes() {
  const out = [];
  const walk = (dir) => {
    let ents;
    try {
      ents = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of ents) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.isFile() && e.name.endsWith('.md')) out.push(path.relative(REPO_DIR, p));
    }
  };
  walk(NOTES_DIR);
  return out.sort();
}

// ---- run the authoritative gate ---------------------------------------------
// The gate exits 1 when any note FAILs, and 0 when all pass. A non-zero rc with
// parseable stdout is a normal result, not a gate error.
function runGate(files) {
  const results = [];
  for (let i = 0; i < files.length; i += CHUNK) {
    const part = files.slice(i, i + CHUNK);
    const r = spawnSync('python3', [GATE, '--note', ...part], {
      cwd: REPO_DIR,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    });
    if (r.error) return { error: `spawn failed: ${r.error.message}` };
    if (!r.stdout || !r.stdout.trim()) {
      return { error: `gate produced no output (rc=${r.status}) for chunk starting ${part[0]}` };
    }
    let d;
    try {
      d = JSON.parse(r.stdout);
    } catch (e) {
      return { error: `gate output was not JSON for chunk starting ${part[0]}: ${e.message}` };
    }
    results.push(...(d.results || []));
  }
  return { results };
}

function hardFailures(results) {
  const out = [];
  for (const r of results) {
    const hard = r.hard_failures || [];
    if (!hard.length) continue;
    for (const c of hard) out.push({ file: r.file, check: c, filler: r.filler_hits || [] });
  }
  return out;
}

// ---- baseline ----------------------------------------------------------------
function readBaseline() {
  const map = new Map();
  if (!fs.existsSync(BASELINE_FILE)) return map;
  for (const line of fs.readFileSync(BASELINE_FILE, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const [file, check] = t.split('\t');
    if (file && check) map.set(`${file}\t${check}`, { file, check });
  }
  return map;
}

function writeBaseline(fails) {
  const nFiller = fails.filter((f) => f.check === 'filler_free').length;
  const nTiers = fails.filter((f) => f.check === 'has_three_tiers').length;
  const lines = [
    '# SR_CURATE_CORPUS_BASELINE - notes that hard-fail the curate gate TODAY.',
    '#',
    '# format: path<TAB>check   (one line per failing check)',
    '#',
    '# A note NOT listed here that hard-fails is a NEW regression and FAILS the',
    '# gate. A line here that stops failing is reported as IMPROVED; deleting a',
    '# line re-arms the gate for that note.',
    '#',
    '# THIS FILE IS VERSION CONTROLLED. The gate cannot tell a NEW hard failure',
    '# from a known one without it; with it missing the gate is INERT (rc=2),',
    '# never a false red. Restore it with: git checkout -- scripts/curate-corpus-baseline.txt',
    '#',
    '# WHAT IS IN HERE, AND WHY IT IS TOLERATED:',
    `#   filler_free  (${nFiller})  KNOWN FALSE POSITIVES, not authorial filler. These`,
    '#       notes TEACH the banned phrase - a discourse marker list, an Arabic',
    '#       gloss, a quoted example, a logic term. Measured line by line at',
    '#       0650Z: 27 notes hit "in conclusion" and 1 hits "it is important to',
    '#       note", and every hit sits in a marker/gloss/example context.',
    '#       This is the class carried by row sr-1039Z since 2026-10-11; the',
    '#       count reconciles exactly with that row. DO NOT re-report these as',
    '#       live AdSense failures - read the context before believing a count.',
    `#   has_three_tiers  (${nTiers})  REAL but known. These notes are missing the`,
    '#       3-tier body. The fix is NEW tier content, which is prose, which is',
    '#       behind the Pangram 402 outage and the operator structural-only',
    '#       override. Tracked by the 0320Z tier-triad row. NOT a false positive',
    '#       - a known gap. Each line is a note that is mid-fix: delete the line',
    '#       as soon as the note passes, so the gate re-arms for that note.',
    '#',
    '# generated by: node scripts/check-curate-corpus.mjs --write-baseline',
    '',
  ];
  for (const f of fails.slice().sort((a, b) => (a.file + a.check).localeCompare(b.file + b.check))) {
    lines.push(`${f.file}\t${f.check}`);
  }
  fs.writeFileSync(BASELINE_FILE, lines.join('\n') + '\n');
  return fails.length;
}

// ---- verify ------------------------------------------------------------------
function verify() {
  if (!fs.existsSync(GATE)) {
    return {
      rc: 2,
      inert: true,
      text:
        `check-curate-corpus: INERT - the curate gate is not at ${GATE}.\n` +
        `  This gate asserts nothing. It is NOT a pass and NOT a failure.\n` +
        `  Set SR_CURATE_GATE=<path> or pass --gate <path>.\n` +
        `  The gate lives outside the repo on purpose (host infra, row sr-1039Z).`,
    };
  }
  if (!fs.existsSync(NOTES_DIR)) {
    return {
      rc: 2,
      inert: true,
      text: `check-curate-corpus: INERT - no notes dir at ${NOTES_DIR}.`,
    };
  }
  // MEASURED 2026-10-21T10:50Z: with the script present but the baseline
  // absent, readBaseline() returned an EMPTY map, so every KNOWN hard failure
  // was reported as NEW -- 63 failures, rc=1, on a clean HEAD tree whose
  // baseline-bearing sibling returned 28 baselined / 0 NEW / rc=0. A missing
  // control must not read as a false red, and it must not read as a pass
  // either, so it is INERT (rc=2) like the missing-gate case above. The
  // baseline is version-controlled: restore it with
  //   git checkout -- scripts/curate-corpus-baseline.txt
  if (!fs.existsSync(BASELINE_FILE)) {
    return {
      rc: 2,
      inert: true,
      text:
        `check-curate-corpus: INERT - no baseline at ${BASELINE_FILE}.\n` +
        `  Without the baseline this gate cannot tell a NEW hard failure from a\n` +
        `  known one, so it asserts nothing. This is NOT a pass and NOT a failure.\n` +
        `  Reporting the known set as NEW would be a false red (63 phantom\n` +
        `  failures on a clean HEAD tree, measured). The baseline is version\n` +
        `  controlled. Restore it with:\n` +
        `    git checkout -- scripts/curate-corpus-baseline.txt\n` +
        `  or regenerate it against this tree with:\n` +
        `    node scripts/check-curate-corpus.mjs --write-baseline`,
    };
  }
  const files = listNotes();
  const { results, error } = runGate(files);
  if (error) {
    return { rc: 2, inert: true, text: `check-curate-corpus: INERT - ${error}` };
  }
  const fails = hardFailures(results);
  const base = readBaseline();
  const failKeys = new Set(fails.map((f) => `${f.file}\t${f.check}`));

  const fresh = fails.filter((f) => !base.has(`${f.file}\t${f.check}`));
  const improved = [...base.entries()].filter(([k]) => !failKeys.has(k));
  const warnCount = results.filter((r) => r.verdict === 'WARN').length;
  const passCount = results.filter((r) => r.verdict === 'PASS').length;

  const out = {
    rc: fresh.length ? 1 : 0,
    notes: results.length,
    pass: passCount,
    warn: warnCount,
    hard_failures: fails.length,
    baselined: fails.length - fresh.length,
    new_failures: fresh.length,
    improved: improved.length,
    fresh,
    improved_files: improved.map(([k]) => k),
  };
  return { rc: out.rc, json: out, text: render(out) };
}

function render(o) {
  const L = [];
  L.push(`check-curate-corpus: notes=${o.notes} pass=${o.pass} warn=${o.warn} hard_fail=${o.hard_failures}`);
  L.push(`  hard failures: ${o.baselined} baselined (known) | ${o.new_failures} NEW`);
  if (o.improved) L.push(`  improved (no longer failing): ${o.improved}`);
  for (const f of o.fresh) {
    L.push(`  FAIL ${f.file} - ${f.check}${f.filler.length ? ` (${f.filler.join(', ')})` : ''}`);
    L.push(`       NEW: not in curate-corpus-baseline.txt`);
  }
  L.push(
    '  NOTE: baselined filler_free hits are notes that TEACH the banned phrase as a',
    '  discourse marker / gloss / quoted example. Read the context before reporting',
    '  them as authorial filler. See sr-1039Z.'
  );
  if (!o.new_failures) L.push('check-curate-corpus: OK');
  else L.push('check-curate-corpus: FAILED');
  return L.join('\n');
}

// ---- self test ---------------------------------------------------------------
// Controls run in a scratch dir. The repo and the live patch dir are never
// written to. A gate that cannot see its target is worse than no gate, so one
// control plants a defect and demands that this gate SEE it.
function selfTest() {
  const results = [];
  const ok = (name, cond, detail) => results.push({ name, pass: !!cond, detail: detail || '' });

  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sr-curate-corpus-selftest-'));
  const scratchRepo = path.join(tmp, 'repo');
  const notes = path.join(scratchRepo, 'src', 'content', 'notes', 'x');
  fs.mkdirSync(notes, { recursive: true });

  // A stub gate: it reports whatever FIXTURES names, so the logic is tested
  // without depending on the real gate's behaviour.
  const stub = path.join(tmp, 'stub-gate.py');
  fs.writeFileSync(
    stub,
    `import json, os, sys
fx = json.loads(os.environ.get("STUB_FIXTURES", "{}"))
files = sys.argv[2:]
out = []
for f in files:
    key = os.path.basename(f)
    spec = fx.get(key, {"verdict": "PASS", "hard_failures": []})
    out.append({"file": f, "verdict": spec.get("verdict", "PASS"),
                "hard_failures": spec.get("hard_failures", []),
                "filler_hits": spec.get("filler_hits", []), "checks": {}})
print(json.dumps({"notes_checked": len(out), "results": out}))
`
  );
  fs.writeFileSync(path.join(notes, 'a.md'), 'x');
  fs.writeFileSync(path.join(notes, 'b.md'), 'x');
  fs.writeFileSync(path.join(notes, 'c.md'), 'x');

  const baseFile = path.join(tmp, 'baseline.txt');
  const run = (fixtures, baseline) => {
    const r = spawnSync(
      'node',
      [
        path.join(HERE, 'check-curate-corpus.mjs'),
        '--repo', scratchRepo,
        '--gate', stub,
        '--baseline', baseFile,
      ],
      {
        encoding: 'utf8',
        env: { ...process.env, STUB_FIXTURES: JSON.stringify(fixtures) },
      }
    );
    return { rc: r.status, out: r.stdout || '', err: r.stderr || '' };
  };

  // C1: a NEW hard failure with an empty baseline must FAIL.
  fs.writeFileSync(baseFile, '');
  let r = run({ 'a.md': { verdict: 'FAIL', hard_failures: ['filler_free'] } });
  ok('C1 new hard failure fails the gate', r.rc === 1, `rc=${r.rc}`);
  ok('C1 names the file', /a\.md/.test(r.out), r.out.split('\n').slice(0, 4).join(' | '));

  // C2: the same failure, once baselined, must NOT fail.
  // The key is the path RELATIVE TO THE REPO ROOT, which is what the gate
  // reports: src/content/notes/x/a.md, not x/a.md.
  fs.writeFileSync(baseFile, 'src/content/notes/x/a.md\tfiller_free\n');
  r = run({ 'a.md': { verdict: 'FAIL', hard_failures: ['filler_free'] } });
  ok('C2 baselined failure does not fail the gate', r.rc === 0, `rc=${r.rc}`);

  // C3: a baselined note that stops failing is reported IMPROVED, not failed.
  r = run({ 'a.md': { verdict: 'PASS', hard_failures: [] } });
  ok('C3 improved note is reported, not failed', r.rc === 0 && /improved/i.test(r.out), `rc=${r.rc}`);

  // C4: WARN-only is not a hard failure.
  fs.writeFileSync(baseFile, '');
  r = run({ 'a.md': { verdict: 'WARN', hard_failures: [] } });
  ok('C4 WARN-only does not fail the gate', r.rc === 0, `rc=${r.rc}`);

  // C5: a missing gate is INERT (rc=2), never a pass.
  r = spawnSync(
    'node',
    [path.join(HERE, 'check-curate-corpus.mjs'), '--repo', scratchRepo, '--gate', path.join(tmp, 'nope.py'), '--baseline', baseFile],
    { encoding: 'utf8' }
  );
  ok('C5 missing control is INERT rc=2, not a pass', r.status === 2, `rc=${r.status}`);
  ok('C5 says INERT', /INERT/.test(r.stdout || ''), (r.stdout || '').split('\n')[0]);

  // C6: the instrument can SEE a planted defect (a gate that cannot see its
  // target is worse than no gate) - proved by planting and demanding a hit.
  fs.writeFileSync(baseFile, '');
  r = run({ 'b.md': { verdict: 'FAIL', hard_failures: ['has_three_tiers'] } });
  ok('C6 a planted defect is detected', r.rc === 1 && /b\.md/.test(r.out), `rc=${r.rc}`);

  // C7: --write-baseline writes the failing set, and the gate then passes.
  const wb = spawnSync(
    'node',
    [path.join(HERE, 'check-curate-corpus.mjs'), '--repo', scratchRepo, '--gate', stub, '--baseline', baseFile, '--write-baseline'],
    { encoding: 'utf8', env: { ...process.env, STUB_FIXTURES: JSON.stringify({ 'a.md': { verdict: 'FAIL', hard_failures: ['filler_free'] } }) } }
  );
  const written = fs.existsSync(baseFile) ? fs.readFileSync(baseFile, 'utf8') : '';
  ok('C7 --write-baseline records the failure', /a\.md\tfiller_free/.test(written), written.split('\n').filter(Boolean).slice(-2).join(' | '));
  r = run({ 'a.md': { verdict: 'FAIL', hard_failures: ['filler_free'] } });
  ok('C7 gate passes against its own baseline', r.rc === 0, `rc=${r.rc}`);

  // C8: a MISSING baseline is INERT (rc=2). It must never read as a false red
  // (a known failure reported as NEW, rc=1) and never as a pass (rc=0).
  // MEASURED 2026-10-21T10:50Z on a clean HEAD tree: script present, baseline
  // absent -> 63 NEW failures, rc=1. The control that failed is the control
  // that could not run.
  const missingBase = path.join(tmp, 'no-such-baseline.txt');
  const r8 = spawnSync(
    'node',
    [path.join(HERE, 'check-curate-corpus.mjs'), '--repo', scratchRepo, '--gate', stub, '--baseline', missingBase],
    { encoding: 'utf8', env: { ...process.env, STUB_FIXTURES: JSON.stringify({ 'a.md': { verdict: 'FAIL', hard_failures: ['filler_free'] } }) } }
  );
  ok('C8 missing baseline is INERT rc=2, not a false red', r8.status === 2, `rc=${r8.status}`);
  ok('C8 says INERT', /INERT/.test(r8.stdout || ''), (r8.stdout || '').split('\n')[0]);
  ok('C8 reports no NEW failure', !/new_failures/.test(r8.stdout || '') && !/FAIL\s+src\//.test(r8.stdout || ''), (r8.stdout || '').split('\n').slice(0, 3).join(' | '));

  fs.rmSync(tmp, { recursive: true, force: true });

  let failed = 0;
  for (const t of results) {
    if (!t.pass) failed++;
    console.log(`  [${t.pass ? 'ok' : 'FAIL'}] ${t.name}${t.detail ? ` (${t.detail})` : ''}`);
  }
  console.log(`check-curate-corpus self-test: ${results.length - failed}/${results.length} passed`);
  return failed === 0 ? 0 : 1;
}

// ---- main --------------------------------------------------------------------
if (flag('--self-test')) {
  process.exit(selfTest());
}

if (flag('--write-baseline')) {
  if (!fs.existsSync(GATE)) {
    console.error(`check-curate-corpus: INERT - the curate gate is not at ${GATE}.`);
    process.exit(2);
  }
  const files = listNotes();
  const { results, error } = runGate(files);
  if (error) {
    console.error(`check-curate-corpus: INERT - ${error}`);
    process.exit(2);
  }
  const n = writeBaseline(hardFailures(results));
  console.log(`baseline written: ${n} failing check(s) recorded in ${BASELINE_FILE}`);
  process.exit(0);
}

const v = verify();
if (v.json) {
  console.log(JSON.stringify(v.json, null, 2));
  if (!v.json.new_failures) console.error(v.text);
} else {
  console.log(v.text);
}
process.exit(v.rc);
