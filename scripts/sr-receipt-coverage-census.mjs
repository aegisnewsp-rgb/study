#!/usr/bin/env node
/**
 * sr-receipt-coverage-census.mjs — the ENFORCEMENT-GAP census for the receipt store.
 *
 * WHY THIS FILE EXISTS (2026-10-24T1250Z, vqzo):
 *   The 1235Z pulse put this census inside scripts/sr-receipt-gate.mjs. That file is
 *   UNCOMMITTABLE. Two receipts govern it and both REFUSE:
 *     VQZO-20261021T1850Z-receipt-gate-supersession-a-...-rejected-receipt-cannot-refuse-forever.diff.receipt.json
 *     VQZO-20261021T2305Z-receipt-gate-supersession-v2-a-refusal-can-only-be-retired-by-proof.diff.receipt.json
 *   Both are REJECTED supersession patches that never landed (applied=false, ok=false),
 *   and both declare "targets": ["scripts/sr-receipt-gate.mjs"]. Their refusal is the
 *   house default-refuse direction working as intended: no commit may touch that file
 *   until a FRESH curator verdict approves it. The operator holds that decision
 *   (queue row 1935Z).
 *
 *   MEASURED THIS PULSE, over every receipt in the live store: the refusing receipts
 *   block exactly TWO paths under scripts/ — scripts/sr-receipt-gate.mjs (the 2
 *   rejected supersession receipts above) AND scripts/same-page-restatement-baseline.txt
 *   (1 unrelated receipt, VQZO-20261020T1920Z-nce-cours-four-module-side-pairs, which
 *   never landed). Every OTHER scripts/ path is clean, including THIS file and
 *   scripts/git-hooks/pre-commit and scripts/check-gate-chain.sh. So the census lives
 *   HERE, and the COMMIT LINE gets it from the pre-commit hook, which is not blocked.
 *   The measurement is not lost to a blocked path; it moves to a path that can
 *   actually ship.
 *
 *   (CORRECTED 2026-10-24T1305Z: the first version of this comment said the
 *   refusing receipts block "exactly ONE path under scripts/ — scripts/sr-receipt-gate.mjs
 *   . Every other scripts/ path is clean." That was measured to be FALSE: TWO scripts/
 *   paths are blocked. The DECISION the comment supports — that this file and the
 *   pre-commit hook are committable — was independently verified TRUE and is
 *   unchanged. Only the overstated cleanliness claim was wrong.)
 *
 * WHAT IT REPORTS — the gap, in numbers, every time:
 *   A receipt REFUSES a commit. If that receipt declares no target, the gate cannot
 *   map it to any file, so its refusal is NOT ENFORCED — the gate says so in a warning
 *   and moves on. Measured on the live store: 143 of 157 refusing receipts declare no
 *   target. The gate's warning line ends in "AND ITS VERDICT REFUSES", which on a
 *   commit line reads like a refusal that FIRED. It did not fire. Nothing enforced it.
 *
 *   This census prints the number so "no refusal fired" can never be read as "nothing
 *   was refused".
 *
 * WHAT IT DOES NOT DO — it never changes a verdict:
 *   It measures. It does not enforce, does not block, does not retire a receipt, and
 *   does not decide anything. Deriving a refusal onto a whole FILE is the false-
 *   positive mechanism the operator documented on 2026-10-22: a receipt that rejects
 *   ONE hunk would block every later, unrelated commit to that file. Measured: the
 *   derivable receipts would govern 405 distinct files. So derivation is MEASURED here
 *   and deliberately NOT enforced. The supersession rule that would make enforcement
 *   safe is an operator decision, not a claw edit.
 *
 * PATH SCOPE IS NOT RE-DECIDED HERE:
 *   judgeReceipt, receiptTargets and findReceipts are imported from sr-receipt-gate.mjs
 *   rather than copied. A second copy of the refusal rules is a guaranteed future
 *   drift — the 2026-10-21T0412Z path-scope widening already had to be applied twice.
 *
 * (CORRECTED 2026-10-24T1320Z, vqzo — the curator's C9 check, measured at runtime.)
 *   The 1305Z curator REJECTed this patch on exactly one point: the commit line could
 *   print "0 ENFORCED against the staged files" when the STAGED FILE LIST could not be
 *   read. The mechanism: stagedFiles() returns {files: [], ok: false} on a failed read,
 *   findReceipts([], dir) does NOT throw, so the count came back {count: 0, ok: true} —
 *   zero for a measurement that was never taken. The FIX-2 promise ("a count that could
 *   not be taken is never printed as 0") was therefore only half implemented.
 *   THE FIX: the count is taken ONLY when the staged list was actually read
 *   (enforcedCountForStaged consults staged.ok FIRST). Otherwise the commit line reads
 *   "the ENFORCED COUNT WAS NOT TAKEN (this is NOT \"0 enforced\")" and a separate
 *   "the STAGED FILE LIST could not be read — NOT a pass." line is printed BEFORE it.
 *   Self-test control 8 covers it.
 *
 * Usage:
 *   node scripts/sr-receipt-coverage-census.mjs            # one line, for the commit line
 *   node scripts/sr-receipt-coverage-census.mjs --report    # the full census
 *   node scripts/sr-receipt-coverage-census.mjs --json      # machine-readable
 *   node scripts/sr-receipt-coverage-census.mjs --selfcheck # controls, incl. a negative control
 *
 * EXIT CODES: 0 = a census was taken (a measurement, never a verdict about the commit).
 *              2 = could not run — the receipt store was not reachable. NOT-RUN, NOT a
 *                  pass: a control that could not run must not print zeros that read
 *                  like a clean bill.
 */

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { judgeReceipt, receiptTargets, findReceipts, repoRoot } from './sr-receipt-gate.mjs';

// PATCH_DIR is module-private in sr-receipt-gate.mjs and deliberately not re-declared
// here: when patchDir is omitted, findReceipts applies its OWN default (SR_PATCH_DIR or
// /data/openclaw-workspace/patches). Inheriting the default beats copying the constant,
// which is how a store path silently forks into two. Same idiom as
// scripts/sr-ungoverned-content-census.mjs.
const STORE = undefined;

/** A string that is plausibly a repo-relative path. */
export function looksLikeRepoPath(v) {
  if (typeof v !== 'string') return false;
  const s = v.trim();
  if (!s || /\s/.test(s) || !s.includes('/')) return false;
  return ['src/', 'public/', 'scripts/', 'docs/'].some((p) => s.startsWith(p));
}

/**
 * The files a unified diff touches, read from its own headers.
 *
 * MEASURED 2026-10-24T1235Z: some diffs in the store carry a doubled prefix
 * ("diff --git a/a/src/... b/b/src/..."), so the leading a/ or b/ has to be
 * stripped before the path is used.
 */
export function diffTouchedPaths(text) {
  const raw = new Set();
  for (const line of String(text).split('\n')) {
    let m = /^diff --git a\/(.+?) b\/(.+)$/.exec(line);
    if (m) {
      raw.add(m[2]);
      continue;
    }
    m = /^--- a\/(.+)$/.exec(line);
    if (m) {
      raw.add(m[1].trim());
      continue;
    }
    m = /^\+\+\+ b\/(.+)$/.exec(line);
    if (m) raw.add(m[1].trim());
  }
  const out = new Set();
  for (const p of raw) {
    if (p === '/dev/null') continue;
    const q = p.replace(/^[ab]\//, '');
    if (looksLikeRepoPath(q)) out.add(q);
  }
  return out;
}

/**
 * The sibling diff of a receipt, if the store holds one.
 *
 * BASENAME only: the receipt path is absolute, and joining an absolute path onto
 * patchDir would look for "<store>/<store>/name.diff" and find nothing. (Measured: the
 * first version of this function did exactly that, and the census reported 0 derivable
 * receipts on a store that contains 40.)
 */
export function siblingDiffPath(receiptPath, patchDir) {
  const base = receiptPath.split('/').pop().replace(/\.receipt\.json$/, '');
  const candidates = [...new Set([base, `${base}.diff`, `${base}.md`, `${base}.patch`])];
  for (const c of candidates) {
    if (c.endsWith('.receipt.json')) continue;
    const full = join(patchDir, c);
    if (existsSync(full)) return full;
  }
  return null;
}

/**
 * The files a receipt's refusal WOULD govern, if the gate derived them from the
 * sibling diff instead of requiring a declared target.
 *
 * MEASURED, NOT ASSUMED (2026-10-24T1235Z): on the live store this would make 40 of
 * the 143 unmappable refusing receipts enforceable, and it would enforce them on 405
 * distinct files — 2 of which another writer was editing at that moment. So this
 * function MEASURES the blast radius; it does NOT enforce it.
 */
export function derivedTargets(receiptPath, patchDir) {
  const sib = siblingDiffPath(receiptPath, patchDir);
  if (!sib) return new Set();
  try {
    return diffTouchedPaths(readFileSync(sib, 'utf8'));
  } catch {
    return new Set();
  }
}

/**
 * The full enforcement-gap census for the store.
 *
 * Measurement only — it never changes a verdict, and it is never consulted on the
 * commit path to decide anything.
 */
export function coverageCensus(patchDir) {
  const out = {
    storePath: patchDir || '(the gate default)',
    receiptsRead: 0,
    refusingTotal: 0,
    refusingWithDeclaredTargets: 0,
    refusingUnmappable: 0,
    derivableFromSiblingDiff: 0,
    notDerivable: 0,
    filesWouldBeGoverned: 0,
    wouldGovernFiles: [],
  };
  const dir = patchDir || process.env.SR_PATCH_DIR || '/data/openclaw-workspace/patches';
  out.storePath = dir;
  if (!existsSync(dir)) return out;
  const files = new Set();
  for (const rf of readdirSync(dir).filter((f) => f.endsWith('.receipt.json'))) {
    const full = join(dir, rf);
    let doc;
    try {
      doc = JSON.parse(readFileSync(full, 'utf8'));
    } catch {
      continue;
    }
    out.receiptsRead++;
    const j = judgeReceipt(full);
    if (!j.refuse) continue;
    out.refusingTotal++;
    if (receiptTargets(doc).size) {
      out.refusingWithDeclaredTargets++;
      continue;
    }
    out.refusingUnmappable++;
    const d = derivedTargets(full, dir);
    if (d.size) {
      out.derivableFromSiblingDiff++;
      d.forEach((f) => files.add(f));
    } else {
      out.notDerivable++;
    }
  }
  out.filesWouldBeGoverned = files.size;
  out.wouldGovernFiles = [...files].sort();
  return out;
}

/**
 * The staged files, exactly as the gate sees them on the commit path.
 *
 * NEVER silently returns [] on failure (2026-10-24T1305Z): a measurement that could
 * not be taken has to say so. An empty list here would print "0 ENFORCED against the
 * staged files" — the exact reading this file exists to make impossible.
 */
export function stagedFiles(cwd = repoRoot()) {
  try {
    const files = execFileSync('git', ['diff', '--cached', '--name-only'], { cwd, encoding: 'utf8' })
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    return { files, ok: true };
  } catch {
    return { files: [], ok: false };
  }
}

/**
 * THE COMMIT LINE. One line, every time.
 *
 * The gate's own unmappable-receipt warning ends in "AND ITS VERDICT REFUSES", which
 * reads like a refusal that fired. It did not fire. This line says what actually
 * happened, with the numbers.
 */
export function coverageLine(census, enforced) {
  // `enforced` is {count, ok}. If the count could not be taken, it is printed as
  // NOT TAKEN — never as 0. (2026-10-24T1305Z: the first version swallowed the
  // throw and returned 0, which would have printed "0 ENFORCED" on a broken query.)
  const enforcedText =
    enforced && enforced.ok
      ? `${enforced.count} ENFORCED against the staged files`
      : 'the ENFORCED COUNT WAS NOT TAKEN (this is NOT "0 enforced") — the gate could not be queried';
  return (
    `sr-receipt-coverage: ${census.refusingTotal} refusing receipt(s) in the store — ` +
    `${enforcedText}; ` +
    `${census.refusingUnmappable} NOT ENFORCEABLE (they declare no target, so the gate ` +
    `could not map them to any file — a known coverage gap, NOT a pass). ` +
    `The "AND ITS VERDICT REFUSES" warnings above are NOT enforced refusals. ` +
    `${census.derivableFromSiblingDiff} of the unenforced ones could be derived from a ` +
    `sibling diff, which would govern ${census.filesWouldBeGoverned} file(s); that is ` +
    `MEASURED and deliberately NOT enforced (operator decision, row 1935Z)`
  );
}

function enforcedCount(staged, patchDir) {
  try {
    const { matched } = findReceipts(staged, patchDir);
    return {
      count: (matched || []).filter((r) => judgeReceipt(r.receipt).refuse).length,
      ok: true,
    };
  } catch {
    // A count that could not be taken is NOT zero. (2026-10-24T1305Z)
    return { count: 0, ok: false };
  }
}

/**
 * The count, taken ONLY when the staged-file list was actually read.
 *
 * (2026-10-24T1320Z) An unread staged list is a measurement that could NOT be taken.
 * findReceipts([], dir) does not throw, so calling it anyway returns {count: 0, ok: true}
 * and the commit line prints "0 ENFORCED against the staged files" — zero for a
 * measurement that never happened. Here the ok flag is consulted FIRST, so an unread
 * staged list yields NOT-TAKEN, and the commit line says so.
 */
export function enforcedCountForStaged(staged, patchDir) {
  if (!staged || !staged.ok) return { count: 0, ok: false };
  return enforcedCount(staged.files, patchDir);
}

function printReport(census) {
  console.error('sr-receipt-coverage: receipt-store enforcement census (measurement only — no verdict changes)');
  console.error(`  store: ${census.storePath}`);
  console.error(`  receipts read: ${census.receiptsRead}`);
  console.error(`  refusing receipts: ${census.refusingTotal}`);
  console.error(`    with a declared target (enforceable): ${census.refusingWithDeclaredTargets}`);
  console.error(`    with NO declared target (NOT enforceable): ${census.refusingUnmappable}`);
  console.error(`      derivable from the sibling diff (would become enforceable): ${census.derivableFromSiblingDiff}`);
  console.error(`      with no sibling diff at all: ${census.notDerivable}`);
  console.error(`  files the derivable receipts would govern: ${census.filesWouldBeGoverned}`);
  console.error('  NOTE: derivation is MEASURED, not enforced. Enforcing it would land on every file');
  console.error('  above; the supersession rule that makes that safe is an operator decision (row 1935Z).');
}

/**
 * Controls. A negative control is mandatory: an instrument that always reports "clean"
 * is indistinguishable from an instrument that cannot see the defect.
 */
function selfcheck() {
  const tmp = '/tmp/sr-receipt-coverage-selfcheck';
  execFileSync('rm', ['-rf', tmp]);
  execFileSync('mkdir', ['-p', tmp]);
  const wr = (n, s) => execFileSync('sh', ['-c', `cat > "${tmp}/${n}" <<'EOF'\n${s}\nEOF`]);

  let fails = 0;
  let total = 0;
  const check = (ok, label) => {
    total++;
    if (!ok) {
      fails++;
      console.error(`  FAIL  ${label}`);
    }
  };

  // 1. A refusing receipt that declares NO target is counted as unmappable.
  wr('orphan.diff.receipt.json', JSON.stringify({ patch: 'orphan.diff', applied: false, ok: false }));
  // 2. A refusing receipt that DOES declare a target is counted as enforceable.
  wr('targeted.diff.receipt.json', JSON.stringify({ patch: 'targeted.diff', applied: false, ok: false, targets: ['src/data/exams/x.ts'] }));
  // 3. A passing receipt is not counted as refusing at all.
  wr('passing.diff.receipt.json', JSON.stringify({ patch: 'passing.diff', applied: true, ok: true, targets: ['src/data/exams/y.ts'] }));
  // 4. A refusing receipt whose sibling diff names a file is DERIVABLE (measured only).
  wr('derivable.diff', 'diff --git a/src/data/exams/z.ts b/src/data/exams/z.ts\n');
  wr('derivable.diff.receipt.json', JSON.stringify({ patch: 'derivable.diff', applied: false, ok: false }));

  const c = coverageCensus(tmp);
  check(c.refusingTotal === 3, '3 refusing receipts counted (the passing one is not)');
  check(c.refusingWithDeclaredTargets === 1, '1 refusing receipt has a declared target');
  check(c.refusingUnmappable === 2, '2 refusing receipts declare no target');
  check(c.derivableFromSiblingDiff === 1, '1 unmappable receipt is derivable from its sibling diff');
  check(c.notDerivable === 1, '1 unmappable receipt has no sibling diff at all');
  check(c.filesWouldBeGoverned === 1, 'the derivable receipt would govern 1 file');
  check(c.wouldGovernFiles[0] === 'src/data/exams/z.ts', 'the derived file is the one the sibling diff names');

  // 5. THE NEGATIVE CONTROL: a store with the SAME shape as the live one must still
  //    report the gap. An instrument that reports 0 on a store that contains 2
  //    unmappable refusals is blind, and must fail here.
  check(c.refusingUnmappable > 0, 'NEGATIVE CONTROL: the unmappable refusals are visible');

  // 6. The census NEVER changes a verdict: the gate's own decision on a targeted file
  //    is identical before and AFTER the census has run over the same store.
  //
  //    (CORRECTED 2026-10-24T1305Z: the first version called findReceipts twice with
  //    IDENTICAL arguments and no census in between. That is a tautology — it would
  //    still pass if the census rewrote every receipt in the store, because the two
  //    reads never straddled it. The census now runs BETWEEN the two reads, and the
  //    compared value is the matched receipt SET (path + refuse flag), not a count.)
  const matchedSignature = () =>
    (findReceipts(['src/data/exams/x.ts'], tmp).matched || [])
      .map((r) => `${r.receipt}:${judgeReceipt(r.receipt).refuse}`)
      .sort()
      .join('|');
  const before = matchedSignature();
  coverageCensus(tmp);
  const after = matchedSignature();
  check(before.length > 0 && after === before, 'the census changed no verdict');

  // 7. A missing store is NOT-RUN, not "zero refusals".
  const missing = coverageCensus('/tmp/sr-receipt-coverage-selfcheck-does-not-exist');
  check(missing.receiptsRead === 0 && missing.refusingTotal === 0, 'a missing store yields no readings');
  check(missing.storePath.includes('does-not-exist'), 'a missing store still names its path (so it can be reported as NOT-RUN)');

  // 8. A COUNT THAT WAS NOT TAKEN IS NEVER PRINTED AS ZERO (2026-10-24T1320Z).
  //    An unread staged-file list must yield NOT-TAKEN, and the commit line must not
  //    read "0 ENFORCED" — the false green this control exists to prevent.
  const unreadStaged = enforcedCountForStaged({ files: [], ok: false }, tmp);
  check(unreadStaged.ok === false, 'an unread staged-file list yields NO count (not zero)');
  const notTakenLine = coverageLine(c, unreadStaged);
  check(
    !notTakenLine.includes('0 ENFORCED') && notTakenLine.includes('WAS NOT TAKEN'),
    'the commit line never prints a count of 0 for a count that was not taken'
  );
  check(
    enforcedCountForStaged({ files: [], ok: true }, tmp).ok === true,
    'a staged-file list that WAS read still takes the count'
  );

  execFileSync('rm', ['-rf', tmp]);
  console.error(`sr-receipt-coverage: SELFTEST ${fails === 0 ? 'OK' : 'FAILED'} (${total - fails}/${total} controls)`);
  process.exit(fails === 0 ? 0 : 1);
}

const isMain = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  const argv = process.argv.slice(2);
  if (argv.includes('--selfcheck')) {
    selfcheck();
  } else if (argv.includes('--report')) {
    const dir = process.env.SR_PATCH_DIR || '/data/openclaw-workspace/patches';
    if (!existsSync(dir)) {
      console.error(`sr-receipt-coverage: INERT — RECEIPT STORE NOT FOUND: ${dir}`);
      console.error('  No receipt was read, so NO census was taken. This is NOT a pass.');
      process.exit(2);
    }
    printReport(coverageCensus(STORE));
    process.exit(0);
  } else if (argv.includes('--json')) {
    const dir = process.env.SR_PATCH_DIR || '/data/openclaw-workspace/patches';
    if (!existsSync(dir)) {
      console.error(JSON.stringify({ ok: false, inert: true, storePath: dir }));
      process.exit(2);
    }
    const census = coverageCensus(STORE);
    console.log(JSON.stringify({ ok: true, ...census }, null, 2));
    process.exit(0);
  } else {
    // The default: the one line that goes on the commit line.
    const dir = process.env.SR_PATCH_DIR || '/data/openclaw-workspace/patches';
    if (!existsSync(dir)) {
      console.error(`sr-receipt-coverage: INERT — RECEIPT STORE NOT FOUND: ${dir}`);
      console.error('  No census was taken. This is NOT a pass.');
      process.exit(2);
    }
    const census = coverageCensus(STORE);
    const staged = stagedFiles();
    if (!staged.ok) {
      console.error('sr-receipt-coverage: the STAGED FILE LIST could not be read — NOT a pass.');
    }
    // (CORRECTED 2026-10-24T1320Z: the count was taken from staged.files even when the
    // staged list could NOT be read. stagedFiles() then returns {files: [], ok: false},
    // findReceipts([], STORE) does not throw, and the commit line printed
    // "0 ENFORCED against the staged files" — a count of ZERO for a measurement that was
    // never taken. The count is now taken ONLY when the staged list was actually read;
    // otherwise it is NOT TAKEN and the commit line says so.)
    const enforced = enforcedCountForStaged(staged, STORE);
    console.error(coverageLine(census, enforced));
    process.exit(0);
  }
}
