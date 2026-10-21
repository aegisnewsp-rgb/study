#!/usr/bin/env node
/*
 * check-curate-gap.mjs — measure the REAL curate gap, not the one the old test can see.
 *
 * THE DEFECT THIS EXISTS FOR
 *   (queue row sr-20261020T2320Z-vqzo-FINDING-curate-verdict-has-two-homes-and-the-wrong-one-is-measured-first,
 *   score 7400, class MEASUREMENT_DEFECT__THE_GAUGE_HAS_TWO_READINGS_AND_PULSES_ONLY_READ_ONE)
 *
 *   queue-consumer-vqzo.md Step 2 says: curate every "*.mdx or *.diff in
 *   /data/openclaw-workspace/patches/ modified in last 6h WITHOUT a .receipt.json".
 *   That test is ALWAYS false, because the AUTHOR receipt is written at
 *   patch-creation time. Every pulse therefore reported an empty curate set and
 *   the cold-audit verdict was never asked for. The curate gate ran without firing.
 *
 *   Measured on the live corpus at 2026-10-21T06:35Z (this file's first run):
 *     patches in the 6h window ......... 9
 *     old test ("no .receipt.json") ..... 0   <- the number pulses kept reporting
 *     TRUE gap (no verdict anywhere) .... 2   <- VQZO-20261021T0120Z-... and
 *                                                  VQZO-20261021T0250Z-...
 *
 *   A gauge that reads 0 while two patches are un-adjudicated is worse than no
 *   gauge: it is a green light wired to nothing.
 *
 * THE TWO VERDICT HOMES (a verdict may live in EITHER)
 *   form A  curate-<name>.json  /  curate-<name>.curate-<ts>.json  /  and the
 *           name may or may not carry the .diff extension. A single glob cannot
 *           enumerate form A, which is why this drifted. So form A is matched by
 *           NAME CONTAINMENT **and** by the curate file's own "patch" field.
 *   form B  a verdict embedded in <name>.diff.receipt.json: ok:true, or
 *           status in {APPLIED_AND_COMMITTED, SHIPPED, APPLIED, LANDED, CURATED}.
 *
 *   A REFUSAL IS NOT A VERDICT. ok:false with verdict "AWAITING_CURATOR" is a
 *   patch that still owes an audit; it is counted as UNCURATED, because counting
 *   it as audited is how a 13-reason REJECT could sit next to a pulse that
 *   reported "curated" for it.
 *
 * WHAT IT DOES NOT DECIDE
 *   It does not judge content, and it never flips a receipt. It reports which
 *   patches have NO adjudication recorded, and — because a verdict on a spent
 *   artifact is a different kind of work from a verdict on live content — it
 *   splits the gap by TREE STATE:
 *     applicable  the diff still applies cleanly to the tree -> awaiting audit
 *     applied     the diff is already in the tree (reverse-check passes) -> the
 *                 content is uncommitted and the commit is waiting on the audit
 *     diverged    the diff's post-image no longer matches the tree -> the
 *                 content moved on; the ARTIFACT needs a closing verdict
 *     unknown     git or the repo is not reachable -> never guessed
 *
 *   Reverse-apply is a drift signal, not a landed proof: a later commit that
 *   shifts context in the same file makes it fail for a change that DID land.
 *   That is why forward-check is tried first and why "diverged" is a neutral
 *   label, not a claim that the content was rejected.
 *
 * USAGE
 *   node scripts/check-curate-gap.mjs                  # report (read-only)
 *   node scripts/check-curate-gap.mjs --json           # machine-readable
 *   node scripts/check-curate-gap.mjs --hours 24       # wider window (default 6)
 *   node scripts/check-curate-gap.mjs --patches <dir>   # another patch dir
 *   node scripts/check-curate-gap.mjs --self-test       # prove the controls
 *
 * EXIT CODES
 *   0  every patch in the window carries a verdict in one of the two homes
 *   1  at least one patch in the window has NO verdict (the split is printed)
 *   2  usage / environment error
 *
 * Read-only. It writes nothing, anywhere, ever.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const argv = process.argv.slice(2);
const hasFlag = (f) => argv.includes(f);
const optVal = (f, d) => {
  const i = argv.indexOf(f);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : d;
};

const JSON_OUT = hasFlag('--json');
const SELF_TEST = hasFlag('--self-test');
const HOURS = Number(optVal('--hours', '6'));
const PATCH_DIR = optVal('--patches', '/data/openclaw-workspace/patches');
const REPO = optVal('--repo', path.resolve(path.dirname(new URL(import.meta.url).pathname), '..'));

// UNKNOWN-FLAG REJECTION
//
// (sibling gate scripts/check-queue-row-freshness.mjs, class FALSE_GREEN__TYPO_FLAG_READS_AS_PASS)
//
// An unrecognized flag used to fall through to the report path and exit 0, which
// reads as a pass. A gauge that cannot tell "I was asked the wrong question"
// from "everything is fine" is not a gauge.
const KNOWN_FLAGS = new Set(['--json', '--self-test', '--hours', '--patches', '--repo']);
const valueFlags = new Set(['--hours', '--patches', '--repo']);
const unknownFlags = argv.filter((a, i) => {
  if (KNOWN_FLAGS.has(a)) return false;
  // a bare value that follows a known value-flag is not an unknown argument
  if (i > 0 && valueFlags.has(argv[i - 1])) return false;
  return true;
});
if (unknownFlags.length) {
  console.error(
    `check-curate-gap: unknown argument(s): ${unknownFlags.join(' ')}\n` +
    '  known flags: --json --self-test --hours <n> --patches <dir> --repo <dir>\n' +
    '  an unrecognized flag used to fall through to the report path and exit 0, which read as a pass.'
  );
  process.exit(2);
}
if (!Number.isFinite(HOURS) || HOURS <= 0) {
  console.error(`check-curate-gap: --hours must be a positive number (got "${optVal('--hours', '')}")`);
  process.exit(2);
}
if (!fs.existsSync(PATCH_DIR)) {
  console.error(`check-curate-gap: patch dir not found: ${PATCH_DIR}`);
  process.exit(2);
}

const PATCH_EXT = new Set(['.diff', '.mdx']);

// A receipt that says the patch did NOT land cleanly is not a verdict.
const VERDICT_STATUSES = new Set(['APPLIED_AND_COMMITTED', 'SHIPPED', 'APPLIED', 'LANDED', 'CURATED']);

/** strip the patch extension to get the core stem used by curate-<stem> names */
function stemOf(name) {
  for (const ext of PATCH_EXT) if (name.endsWith(ext)) return name.slice(0, -ext.length);
  return name;
}

function isPatchFile(name) {
  if (name.endsWith('.receipt.json')) return false;
  if (name.startsWith('curate-')) return false;
  for (const ext of PATCH_EXT) if (name.endsWith(ext)) return true;
  return false;
}

/** the repo-relative targets a patch claims */
function targetsOf(patchText) {
  const out = new Set();
  for (const line of patchText.split('\n')) {
    let m = /^diff --git a\/(\S+) b\/(\S+)$/.exec(line);
    if (m) { out.add(m[2]); continue; }
    m = /^\+\+\+ b\/(\S+)$/.exec(line);
    if (m && m[1] !== '/dev/null') out.add(m[1]);
  }
  return [...out];
}

/** a verdict embedded in a receipt (form B) */
function verdictInReceipt(receiptPath) {
  if (!fs.existsSync(receiptPath)) return { home: null, why: 'no receipt file' };
  let d;
  try { d = JSON.parse(fs.readFileSync(receiptPath, 'utf8')); }
  catch (e) { return { home: null, why: `receipt unparseable: ${String(e.message).slice(0, 80)}` }; }
  if (!d || typeof d !== 'object') return { home: null, why: 'receipt is not an object' };
  const fields = [];
  const walk = (o, prefix = '') => {
    if (!o || typeof o !== 'object') return;
    for (const [k, v] of Object.entries(o)) {
      if (['ok', 'status', 'verdict', 'state', 'outcome', 'applied', 'curate_verdict'].includes(k)) {
        fields.push({ key: prefix + k, leaf: k, value: v });
      }
      if (v && typeof v === 'object') walk(v, prefix + k + '.');
    }
  };
  walk(d);
  for (const f of fields) {
    if (f.leaf === 'ok' && f.value === true) return { home: 'B', why: `receipt ${f.key}=true` };
  }
  for (const f of fields) {
    const v = typeof f.value === 'string' ? f.value.toUpperCase() : '';
    if (f.leaf === 'status' && VERDICT_STATUSES.has(v)) return { home: 'B', why: `receipt ${f.key}=${v}` };
  }
  for (const f of fields) {
    if (f.leaf !== 'verdict' && f.leaf !== 'curate_verdict') continue;
    const v = typeof f.value === 'string' ? f.value : JSON.stringify(f.value);
    if (/\b(APPROVED|CURATED_OK|VERDICT_OK)\b/.test(v.toUpperCase())) return { home: 'B', why: `receipt ${f.key}=${v.slice(0, 60)}` };
  }
  const refusal = fields.find((f) => f.leaf === 'ok' && f.value === false)
    || fields.find((f) => /AWAITING|REJECT|PENDING|BLOCK/.test(String(f.value).toUpperCase()));
  return { home: null, why: refusal ? `receipt records a refusal/pending, not a verdict (${refusal.key})` : 'receipt carries no verdict' };
}

/** form A: a curate-<name>*.json that names this patch */
function verdictInCurateFiles(patchName, curateFiles, dir = PATCH_DIR) {
  const stem = stemOf(patchName);
  const hits = [];
  for (const cf of curateFiles) {
    const base = cf.toLowerCase();
    let why = null;
    if (base.includes(stem.toLowerCase())) why = 'name containment';
    if (!why) {
      try {
        const d = JSON.parse(fs.readFileSync(path.join(dir, cf), 'utf8'));
        const named = d && typeof d === 'object' ? String(d.patch || d.patch_file || d.file || '') : '';
        if (named && (named === patchName || named.endsWith(patchName) || stemOf(named) === stem)) why = `curate file names "${named}"`;
      } catch { /* an unparseable curate file is not a verdict */ }
    }
    if (why) hits.push({ file: cf, why });
  }
  return hits.length ? { home: 'A', why: hits.map((h) => `${h.file} (${h.why})`).join('; ') } : { home: null, why: 'no curate file names this patch' };
}

/** tree state: can this diff still be applied, is it already in the tree, or has it diverged? */
function treeState(patchPath) {
  const insideRepo = fs.existsSync(path.join(REPO, '.git'));
  if (!insideRepo) return { state: 'unknown', why: 'no .git in repo dir' };
  const run = (args) => {
    try {
      execFileSync('git', args, { cwd: REPO, stdio: ['ignore', 'ignore', 'ignore'] });
      return true;
    } catch { return false; }
  };
  if (run(['apply', '--check', '--whitespace=nowarn', patchPath])) return { state: 'applicable', why: 'git apply --check succeeds: the diff is not in the tree' };
  if (run(['apply', '--reverse', '--check', '--whitespace=nowarn', patchPath])) return { state: 'applied', why: 'git apply --reverse --check succeeds: the change is in the tree' };
  return { state: 'diverged', why: 'neither direction applies: the post-image no longer matches the tree' };
}

/** newer patch touching the same target, carrying a verdict -> this artifact is spent */
function findSuperseder(patchName, targets, entries) {
  const self = entries.find((e) => e.name === patchName);
  if (!self) return null;
  const mine = self.mtimeMs;
  for (const e of entries) {
    if (e.name === patchName) continue;
    if (e.mtimeMs <= mine) continue;
    if (!e.targets.some((t) => targets.includes(t))) continue;
    if (e.verdict) return e.name;
  }
  return null;
}

function collect() {
  const names = fs.readdirSync(PATCH_DIR);
  const curateFiles = names.filter((n) => n.startsWith('curate-') && n.endsWith('.json'));
  const patchNames = names.filter(isPatchFile);
  const entries = patchNames.map((name) => {
    const full = path.join(PATCH_DIR, name);
    const st = fs.statSync(full);
    let text = '';
    try { text = fs.readFileSync(full, 'utf8'); } catch { text = ''; }
    return {
      name,
      path: full,
      mtimeMs: st.mtimeMs,
      targets: targetsOf(text),
      verdict: null,
    };
  });
  for (const e of entries) {
    const a = verdictInCurateFiles(e.name, curateFiles);
    const b = verdictInReceipt(e.path + '.receipt.json');
    if (a.home) e.verdict = a;
    else if (b.home) e.verdict = b;
    else e.verdict = { home: null, why: `${a.why}; ${b.why}` };
  }
  return { entries, curateFiles, patchNames };
}

function report() {
  const { entries } = collect();
  const cutoff = Date.now() - HOURS * 3600 * 1000;
  const inWindow = entries.filter((e) => e.mtimeMs >= cutoff).sort((a, b) => b.mtimeMs - a.mtimeMs);

  const rows = inWindow.map((e) => {
    const ts = treeState(e.path);
    const superseded = e.verdict.home ? null : findSuperseder(e.name, e.targets, entries);
    const receiptExists = fs.existsSync(e.path + '.receipt.json');
    return {
      patch: e.name,
      age_h: Number(((Date.now() - e.mtimeMs) / 3600000).toFixed(2)),
      verdict_home: e.verdict.home,
      verdict_why: e.verdict.why,
      tree_state: ts.state,
      tree_why: ts.why,
      superseded_by: superseded,
      old_test_would_report: receiptExists ? 0 : 1,
      targets: e.targets,
    };
  });

  const uncurated = rows.filter((r) => !r.verdict_home);
  const summary = {
    patches_in_window: rows.length,
    curated: rows.length - uncurated.length,
    uncurated_total: uncurated.length,
    uncurated_applicable: uncurated.filter((r) => r.tree_state === 'applicable').length,
    uncurated_applied: uncurated.filter((r) => r.tree_state === 'applied').length,
    uncurated_diverged: uncurated.filter((r) => r.tree_state === 'diverged').length,
    uncurated_unknown: uncurated.filter((r) => r.tree_state === 'unknown').length,
    old_test_would_report: rows.reduce((a, r) => a + r.old_test_would_report, 0),
  };
  return { summary, rows };
}

/* ------------------------------------------------------------------ self-test
 * Every control runs in a scratch dir under os.tmpdir(). The repo and the live
 * patch dir are never written to.
 */
function selfTest() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'curate-gap-selftest-'));
  let pass = 0;
  const fails = [];
  const check = (name, cond, detail = '') => {
    if (cond) pass++;
    else fails.push(`${name}${detail ? ' — ' + detail : ''}`);
  };

  const mk = (dir, name, body) => {
    fs.writeFileSync(path.join(dir, name), body);
    return name;
  };
  const patchBody = (target) => `diff --git a/${target} b/${target}\n--- a/${target}\n+++ b/${target}\n@@ -1 +1 @@\n-a\n+b\n`;

  // p1: verdict in form A, by name
  const d1 = path.join(tmp, 'home-a');
  fs.mkdirSync(d1);
  mk(d1, 'p1.diff', patchBody('src/x.ts'));
  mk(d1, 'curate-p1.json', JSON.stringify({ ok: true, reasons: [] }));
  // p2: verdict in form B, embedded in the receipt
  const d2 = path.join(tmp, 'home-b');
  fs.mkdirSync(d2);
  mk(d2, 'p2.diff', patchBody('src/y.ts'));
  mk(d2, 'p2.diff.receipt.json', JSON.stringify({ status: 'SHIPPED', applied: true }));
  // p3: a REFUSAL in the receipt is not a verdict
  const d3 = path.join(tmp, 'refusal');
  fs.mkdirSync(d3);
  mk(d3, 'p3.diff', patchBody('src/z.ts'));
  mk(d3, 'p3.diff.receipt.json', JSON.stringify({ ok: false, verdict: 'AWAITING_CURATOR' }));
  // p4: no verdict anywhere
  const d4 = path.join(tmp, 'bare');
  fs.mkdirSync(d4);
  mk(d4, 'p4.diff', patchBody('src/w.ts'));
  mk(d4, 'p4.diff.receipt.json', JSON.stringify({ outcome: 'DECLARED__IN_WORKTREE_UNCOMMITTED' }));
  // p5: form A under a DIFFERENT name, identified by the curate file's own "patch" field
  const d5 = path.join(tmp, 'renamed-curate');
  fs.mkdirSync(d5);
  mk(d5, 'p5.diff', patchBody('src/v.ts'));
  mk(d5, 'curate-vqzo-something.json', JSON.stringify({ ok: false, reasons: ['x'], patch: 'p5.diff' }));
  // p6: uncurated, but a NEWER patch on the same target carries a verdict -> spent
  const d6 = path.join(tmp, 'superseded');
  fs.mkdirSync(d6);
  mk(d6, 'p6.diff', patchBody('src/u.ts'));
  mk(d6, 'p7.diff', patchBody('src/u.ts'));
  mk(d6, 'curate-p7.json', JSON.stringify({ ok: true, reasons: [] }));

  // The scanner is exercised through the same helpers the report path uses.
  const scan = (dir) => {
    const names = fs.readdirSync(dir);
    const curateFiles = names.filter((n) => n.startsWith('curate-') && n.endsWith('.json'));
    const patchNames = names.filter(isPatchFile);
    const entries = patchNames.map((name) => {
      const full = path.join(dir, name);
      const st = fs.statSync(full);
      const text = fs.readFileSync(full, 'utf8');
      const a = verdictInCurateFiles(name, curateFiles, dir);
      const b = verdictInReceipt(full + '.receipt.json');
      return {
        name, path: full, mtimeMs: st.st_mtimeMs, targets: targetsOf(text),
        verdict: a.home ? a : (b.home ? b : { home: null, why: `${a.why}; ${b.why}` }),
      };
    });
    return entries;
  };

  const s1 = scan(d1);
  check('form A by name is a verdict', s1.find((e) => e.name === 'p1.diff').verdict.home === 'A');

  const s2 = scan(d2);
  check('form B in a receipt is a verdict', s2.find((e) => e.name === 'p2.diff').verdict.home === 'B');

  const s3 = scan(d3);
  check('a refusal is NOT a verdict', s3.find((e) => e.name === 'p3.diff').verdict.home === null);

  const s4 = scan(d4);
  check('a receipt with no verdict leaves the patch uncurated', s4.find((e) => e.name === 'p4.diff').verdict.home === null);

  const s5 = scan(d5);
  check('form A under another name is found by its patch field', s5.find((e) => e.name === 'p5.diff').verdict.home === 'A');

  const s6 = scan(d6);
  const p6 = s6.find((e) => e.name === 'p6.diff');
  check('an uncurated patch with a newer curated sibling is reported superseded',
    p6.verdict.home === null && findSuperseder('p6.diff', p6.targets, s6) === 'p7.diff');

  // The old test ("no .receipt.json") calls every patch with a receipt CURATED.
  // In d4 every patch carries a receipt, so the old test reports 0 gaps, while the
  // true gap is 1 (p4 has no verdict anywhere). This is the whole defect.
  const oldTestSays = scan(d4).filter((e) => !fs.existsSync(e.path + '.receipt.json')).length;
  const trueGap = scan(d4).filter((e) => !e.verdict.home).length;
  check('the old receipt-presence test reports 0 gaps where the true gap is 1',
    oldTestSays === 0 && trueGap === 1, `old=${oldTestSays} true=${trueGap}`);

  // Unknown-flag rejection
  const rc = (() => {
    const { spawnSync } = require('node:child_process');
    return spawnSync(process.execPath, [new URL(import.meta.url).pathname, '--totally-made-up-flag'], { encoding: 'utf8' });
  })();
  check('an unknown flag is rejected, not silently reported', rc.status === 2, `status=${rc.status}`);

  fs.rmSync(tmp, { recursive: true, force: true });

  console.log(`check-curate-gap self-test: ${pass} passed, ${fails.length} failed`);
  for (const f of fails) console.error(`  FAIL: ${f}`);
  if (fails.length) process.exit(1);
}

if (SELF_TEST) {
  // `require` is not available in ESM; use createRequire for the child-process probe.
  const { createRequire } = await import('node:module');
  globalThis.require = createRequire(import.meta.url);
  selfTest();
} else {
  const { summary, rows } = report();
  if (JSON_OUT) {
    console.log(JSON.stringify({ tool: 'check-curate-gap', hours: HOURS, patches_dir: PATCH_DIR, summary, rows }, null, 1));
  } else {
    console.log(`check-curate-gap: window ${HOURS}h in ${PATCH_DIR}`);
    console.log(`  patches in window: ${summary.patches_in_window} | curated: ${summary.curated} | UNCURATED: ${summary.uncurated_total}`);
    console.log(`  uncurated split: applicable ${summary.uncurated_applicable} | applied ${summary.uncurated_applied} | diverged ${summary.uncurated_diverged} | unknown ${summary.uncurated_unknown}`);
    console.log(`  the OLD test ("no .receipt.json") would have reported: ${summary.old_test_would_report}`);
    for (const r of rows.filter((x) => !x.verdict_home)) {
      console.log(`   UNCURATED ${r.patch}`);
      console.log(`      tree_state=${r.tree_state} (${r.tree_why})`);
      console.log(`      why no verdict: ${r.verdict_why}`);
      if (r.superseded_by) console.log(`      superseded_by: ${r.superseded_by}`);
    }
  }
  process.exit(summary.uncurated_total > 0 ? 1 : 0);
}
