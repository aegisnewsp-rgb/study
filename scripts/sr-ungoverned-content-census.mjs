#!/usr/bin/env node
/**
 * sr-ungoverned-content-census.mjs — report shipped-content paths that NO receipt adjudicates.
 *
 * THE DEFECT THIS EXISTS FOR (vqzo 2026-10-21T1150Z):
 *   sr-receipt-gate.mjs answers one question: "does a receipt REFUSE this staged set?"
 *   It has a third answer it never reaches for. When `matched.length === 0` it returns
 *   rc=0 with note 'no receipt governs the staged files' (line ~336). That note is honest
 *   for the WHOLE-SET case. It is silent for the PARTIAL case: stage one governed file and
 *   one ungoverned file and the ungoverned path appears in no `hits`, no `block`, no
 *   `warn`, and no `note`. Measured on the live store at HEAD 388e0967:
 *
 *     gate(['src/data/exams/srilanka/gce-ol.ts'])  -> allow:true rc:0, note present
 *     gate([nce-cours.ts, gce-ol.ts])              -> allow:false rc:1, gce-ol.ts named NOWHERE
 *
 *   A partial commit — the normal shape of a real commit — therefore reports a green
 *   verdict that is true of the governed half and false of the rest. This census names
 *   the unadjudicated half instead of inferring it.
 *
 * WHY IT IS NOT NAMED check-*  (read this before renaming it):
 *   scripts/check-gate-chain.sh discovers gates by globbing `find scripts -name 'check-*'`
 *   (line ~105) and escalates ANY non-zero rc to a chain failure. An advisory census that
 *   exits non-zero on a real finding would therefore become a PERMANENT chain blocker the
 *   moment it found one ungoverned file — the exact permanent-red trap documented for the
 *   revision.json guards in sr-receipt-gate.mjs (NEVER_GATE rationale, 2026-10-21T0412Z).
 *   The `check-` prefix is what buys auto-discovery; it is also what buys escalation. This
 *   tool wants the report and not the escalation, so it opts out of auto-discovery on purpose.
 *
 * IT NEVER REFUSES ANYTHING.
 *   rc=0  nothing ungoverned (a verdict)
 *   rc=3  ungoverned shipped content found (an ADVISORY finding, NOT a refusal)
 *   rc=2  could not run (NOT-RUN, never a pass)
 *   No caller is blocked by rc=3 unless it chooses to be. Making a control that finds real
 *   problems into an outage is how controls get switched off.
 *
 * PATH SCOPE IS NOT RE-DECIDED HERE.
 *   isShippedContentPath and the receipt index are imported from sr-receipt-gate.mjs rather
 *   than copied. The 2026-10-21T0412Z widening of src/data/exams/ -> src/data/ had to be
 *   applied twice already; a second copy of the prefix list is a guaranteed future drift.
 *
 * Usage:
 *   node scripts/sr-ungoverned-content-census.mjs            # human-readable
 *   node scripts/sr-ungoverned-content-census.mjs --json     # machine-readable
 *   node scripts/sr-ungoverned-content-census.mjs --selfcheck
 */

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { isShippedContentPath, findReceipts, repoRoot } from './sr-receipt-gate.mjs';

// PATCH_DIR is module-private in sr-receipt-gate.mjs and deliberately not re-declared
// here: when patchDir is omitted, findReceipts applies its OWN default (SR_PATCH_DIR
// or /data/openclaw-workspace/patches). Inheriting the default beats copying the
// constant, which is how a store path silently forks into two.
const STORE = undefined;

export function collectShippedPaths(cwd = repoRoot()) {
  const run = (args) => {
    try {
      return execFileSync('git', args, { cwd, encoding: 'utf8' })
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean);
    } catch {
      return [];
    }
  };
  const staged = run(['diff', '--name-only', '--cached']);
  const unstaged = run(['diff', '--name-only']);
  const untracked = run(['ls-files', '--others', '--exclude-standard']);
  const all = [...new Set([...staged, ...unstaged, ...untracked])];
  return all.filter(isShippedContentPath);
}

/**
 * Which of `paths` does at least one receipt declare as one of its targets.
 * ONE pass over the store, inverted — the same `hits` gate() itself trusts, so the
 * census and the gate cannot disagree about what "governed" means.
 */
export function census(paths, patchDir = STORE) {
  const { matched, storeMissing, storePath } = findReceipts(paths, patchDir);
  const governed = new Set();
  for (const m of matched) for (const h of m.hits) governed.add(h);
  return {
    storeMissing,
    storePath,
    shippedPaths: paths,
    governedPaths: [...governed].filter((p) => paths.includes(p)).sort(),
    ungovernedPaths: paths.filter((p) => !governed.has(p)).sort(),
    receiptsConsidered: matched.length,
  };
}

function selfcheck() {
  let pass = 0;
  let fail = 0;
  const check = (ok, name, detail = '') => {
    if (ok) {
      pass++;
      console.log(`  ok   ${name}`);
    } else {
      fail++;
      console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ''}`);
    }
  };

  console.log('sr-ungoverned-content-census selfcheck');

  // 1. Path scope is inherited, not re-decided: a shipped content file is in,
  //    a release marker and a script are out.
  check(isShippedContentPath('src/data/exams/srilanka/gce-ol.ts'), 'shipped: src/data/exams/*.ts');
  check(isShippedContentPath('src/content/notes/a/b.md'), 'shipped: src/content/**');
  check(!isShippedContentPath('public/revision.json'), 'excluded: public/revision.json (NEVER_GATE)');
  check(!isShippedContentPath('src/data/site-revision.json'), 'excluded: site-revision.json (NEVER_GATE)');
  check(!isShippedContentPath('scripts/sr-prose-integrity.mjs'), 'excluded: scripts/**');
  check(!isShippedContentPath('src/data/exam-faqs.ts.bak-2026'), 'excluded: *.bak in src/');

  // 2. THE INSTRUMENT MUST SEE ITS TARGET. A census that cannot find the known
  //    ungoverned file is worse than no census, so it is asserted on a fixture
  //    rather than trusted.
  const fixReceipt = '/tmp/sr-census-selftest-patches';
  const governed = 'src/data/exams/uganda/uneb.ts';
  const ungoverned = 'src/data/exams/srilanka/gce-ol.ts';
  execFileSync('bash', ['-lc', `rm -rf ${fixReceipt} && mkdir -p ${fixReceipt}`], { encoding: 'utf8' });
  execFileSync(
    'bash',
    [
      '-lc',
      `cat > ${fixReceipt}/fix.diff.receipt.json <<'EOF'
{"applied":true,"targets":["${governed}"]}
EOF`,
    ],
    { encoding: 'utf8' },
  );
  const f = census([governed, ungoverned], fixReceipt);
  check(f.governedPaths.includes(governed), 'governed fixture recognised', JSON.stringify(f.governedPaths));
  check(
    f.ungovernedPaths.includes(ungoverned),
    'ungoverned fixture recognised — the census can see its target',
    JSON.stringify(f.ungovernedPaths),
  );
  check(
    !f.ungovernedPaths.includes(governed),
    'governed fixture never reported as ungoverned (no false positive)',
    JSON.stringify(f.ungovernedPaths),
  );

  // 3. A REFUSING receipt still counts as governance. This census reports
  //    adjudication, not approval — saying "ungoverned" about a file whose receipt
  //    says applied=false would be a second, weaker lie.
  execFileSync(
    'bash',
    [
      '-lc',
      `cat > ${fixReceipt}/refuse.diff.receipt.json <<'EOF'
{"applied":false,"targets":["src/data/exams/nepal/cmat.ts"]}
EOF`,
    ],
    { encoding: 'utf8' },
  );
  const r = census(['src/data/exams/nepal/cmat.ts'], fixReceipt);
  check(
    !r.ungovernedPaths.includes('src/data/exams/nepal/cmat.ts'),
    'a refusing receipt still counts as governed (census reports adjudication, not approval)',
  );

  // 4. A missing store is NOT-RUN, never "everything is ungoverned".
  const missing = census([governed], '/tmp/sr-census-selftest-no-such-store');
  check(missing.storeMissing === true, 'missing store is reported as storeMissing, not as a finding');

  execFileSync('bash', ['-lc', `rm -rf ${fixReceipt}`], { encoding: 'utf8' });

  console.log(`\nselfcheck: ${pass} passed, ${fail} failed`);
  return fail === 0 ? 0 : 1;
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--selfcheck')) process.exit(selfcheck());

  const paths = collectShippedPaths();
  const r = census(paths);

  if (r.storeMissing) {
    console.log(`sr-ungoverned-content-census: RECEIPT STORE NOT FOUND (${r.storePath}) — nothing was adjudicated; this is NOT a pass`);
    process.exit(2);
  }

  if (argv.includes('--json')) {
    console.log(JSON.stringify({ ...r, rc: r.ungovernedPaths.length ? 3 : 0 }, null, 2));
  } else {
    console.log(`sr-ungoverned-content-census: ${paths.length} shipped-content path(s) in play, ${r.receiptsConsidered} receipt(s) matched`);
    if (!r.ungovernedPaths.length) {
      console.log('  every shipped-content path is governed by a receipt — no finding');
    } else {
      console.log(`  ADVISORY (not a refusal): ${r.ungovernedPaths.length} shipped-content path(s) that NO receipt adjudicates:`);
      for (const p of r.ungovernedPaths) console.log(`    ${p}`);
      console.log('  These would build and serve with no recorded verdict. Review, receipt, or revert them.');
    }
    if (r.governedPaths.length) console.log(`  governed (${r.governedPaths.length}): fine to ship, subject to their receipts`);
  }
  process.exit(r.ungovernedPaths.length ? 3 : 0);
}

if (import.meta.url === `file://${process.argv[1]}`) main();

if (!existsSync(repoRoot())) process.exit(2);