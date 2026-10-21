#!/usr/bin/env node
/*
 * check-same-page-restatement.mjs — one exam page must not repeat itself.
 *
 * THE DEFECT THIS EXISTS FOR (vqzo 2026-10-20T0308Z + 0405Z):
 *   The curate gate flagged SAME_PAGE_8WORD_RESTATEMENT on individual patches
 *   (dat 47, muet 11, osslt 24 worst pair) but no gate covered the corpus.
 *   A full runtime measurement at 0405Z found 89 of 141 exam pages reusing an
 *   8-word shingle ACROSS TWO BLOCKS OF THE SAME PAGE, and the worst were not
 *   the flagged ones: ini-cet 69 (description restating examPattern verbatim),
 *   accagl 64, uppsc 52, kpsc 39. Every one of those passed check-scope.sh,
 *   check-astro-syntax.mjs and every other gate in the set.
 *
 *   It is a reader-visible defect, not a lint nit: a description that opens by
 *   repeating the exam-pattern paragraph means the page says the same sentence
 *   twice, and the unique content — what the exam is FOR — is pushed below the
 *   fold behind the restatement.
 *
 * WHAT THIS GATE DOES:
 *   (a) MEASURES VIA RUNTIME IMPORT. The exam modules and the FAQ map are
 *       bundled with esbuild and imported, then shingled. Never parsed by grep,
 *       never counted from source text. A grep of exam-faqs.ts cannot see that
 *       'muet' is assigned in a separate EXAM_FAQS['muet'] = [...] block rather
 *       than in the object literal — an earlier pulse of this one printed NEET's
 *       fourth FAQ while believing it had printed MUET's.
 *   (b) MEASURES BLOCK PAIRS, NOT THE PAGE TOTAL, in its report. The headline
 *       number is the worst offending pair, because "34 reused shingles" is not
 *       actionable while "eligibility vs faq3 = 34" is.
 *   (c) COUNTS ONLY CROSS-BLOCK REUSE. Reuse inside one FAQ answer is a
 *       different defect and is deliberately out of scope here.
 *
 * BASELINE
 *   scripts/same-page-restatement-baseline.txt records "key<TAB>worst" for every
 *   page that reuses shingles today, so shipping this gate cannot pin the repo
 *   red on 89 pre-existing pages and get ignored. Same idiom as
 *   scripts/exam-faq-key-baseline.txt and scripts/known-breach-baseline.txt.
 *   A page that IMPROVES below its baselined number is reported as IMPROVED and
 *   is no longer failing; deleting its line re-arms the gate for it.
 *
 *   A page NOT in the baseline that reuses any shingle is a NEW regression and
 *   FAILS. That is the entire point: the gap this closes is pages nobody looked at.
 *
 * Usage:
 *   node scripts/check-same-page-restatement.mjs          # verify, exit 1 on FAIL
 *   node scripts/check-same-page-restatement.mjs --report # table only, exit 0
 *   node scripts/check-same-page-restatement.mjs --write-baseline
 *
 * Exit codes:
 *   0 pass (incl. baselined + improved)
 *   1 a NEW or worsened page
 *   2 NOT-RUN: the measurement could not be produced (bundle/build failure).
 *     NOT a pass and NOT a fail. rc=2 is the house NOT-RUN code
 *     (scripts/check-gate-chain.sh D3), so the chain prints
 *     "NOT-RUN - asserted nothing, NOT a pass" instead of a verdict.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');
const BASELINE = path.join(HERE, 'same-page-restatement-baseline.txt');
const WORK = path.join(REPO, 'node_modules', '.sr-same-page-cache');
const N = 8; // shingle width in words

const FIELDS = ['description', 'examPattern', 'eligibility', 'prepOverview', 'commonMistakes'];
const args = process.argv.slice(2);

// ---- normalize ---------------------------------------------------------------
const norm = (s) =>
  String(s ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
const shingles = (s) => {
  const w = norm(s).split(' ');
  const out = [];
  for (let i = 0; i + N - 1 < w.length; i++) out.push(w.slice(i, i + N).join(' '));
  return out;
};

// ---- runtime import via esbuild ---------------------------------------------
// esbuild is resolved from the repo root so the gate works from any cwd.
const require = createRequire(path.join(REPO, 'package.json'));
const esbuild = require('esbuild');

fs.mkdirSync(WORK, { recursive: true });
const entry = path.join(WORK, 'entry.ts');
fs.writeFileSync(
  entry,
  `export * as exams from '${path.join(REPO, 'src/data/exams/index.ts')}';\n` +
    `export { EXAM_FAQS } from '${path.join(REPO, 'src/data/exam-faqs.ts')}';\n`
);

// A build failure is NOT a verdict. Without the guard below, an esbuild error
// (or a module that throws at import time) rejected at the top level, node
// exited 1, and the gate chain read rc=1 as "check-same-page-restatement:
// FAILED (N page(s))" - a FAIL that was never measured, reported with a
// page count that did not exist. Same defect class as queue row
// sr-20261020T0550Z-vqzo-DEFECT-negative-control-returned-rc1-on-a-build-error:
// a control that fails for the wrong reason manufactures confidence that the
// gate is armed. rc=2 is the house NOT-RUN code, so the chain reports
// "asserted nothing, NOT a pass" and a broken tree can never look like a
// clean tree, nor like a content regression.
let code;
let mod;
try {
  const built = await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'node',
    logLevel: 'silent',
    absWorkingDir: REPO,
  });
  code = built.outputFiles[0].text;
  // esbuild leaves relative .ts imports in dynamic-position strings; the runtime
  // import below is fed a bundled module, so this only normalises leftovers.
  code = code.replace(/(from\s+|import\s+)(['"])(\.[^'"]*?)\.(ts|tsx|astro)(\2)/g, '$1$2$3.mjs$5');
  const bundlePath = path.join(WORK, 'entry.built.mjs');
  fs.writeFileSync(bundlePath, code);
  mod = await import(pathToFileURL(bundlePath).href + `?t=${process.hrtime.bigint()}`);
} catch (err) {
  console.error('check-same-page-restatement: NOT-RUN (build failed) - asserted nothing, NOT a pass');
  console.error(`  cause: ${err && err.message ? err.message : String(err)}`);
  process.exit(2);
}
const exams = mod.exams ?? {};
const faqs = mod.EXAM_FAQS ?? {};

// ---- measure -----------------------------------------------------------------
const results = [];
for (const [name, e] of Object.entries(exams)) {
  if (!e || typeof e !== 'object') continue;
  const key = String(e.examId || name).toLowerCase();
  const blocks = [];
  for (const f of FIELDS) if (e[f]) blocks.push([f, shingles(e[f])]);
  (faqs[key] || []).forEach((qa, i) => {
    blocks.push([`faq${i + 1}q`, shingles(qa.question)]);
    blocks.push([`faq${i + 1}a`, shingles(qa.answer)]);
  });
  let worst = 0;
  let worstPair = '';
  let total = 0;
  for (let i = 0; i < blocks.length; i++) {
    for (let j = i + 1; j < blocks.length; j++) {
      const [na, sa] = blocks[i];
      const [nb, sb] = blocks[j];
      if (!sa.length || !sb.length) continue;
      const [small, lname, big, bname] = sa.length <= sb.length ? [sa, na, sb, nb] : [sb, nb, sa, na];
      const bigSet = new Set(big);
      let n = 0;
      for (const s of small) if (bigSet.has(s)) n++;
      if (!n) continue;
      total += n;
      if (n > worst) {
        worst = n;
        worstPair = `${lname} vs ${bname}`;
      }
    }
  }
  results.push({ key, worst, worstPair, total, faqs: (faqs[key] || []).length });
}
results.sort((a, b) => b.worst - a.worst || a.key.localeCompare(b.key));

// ---- baseline ----------------------------------------------------------------
function readBaseline() {
  const map = new Map();
  if (!fs.existsSync(BASELINE)) return map;
  for (const line of fs.readFileSync(BASELINE, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const [k, v] = t.split(/\s+/);
    if (k && v != null && /^\d+$/.test(v)) map.set(k, Number(v));
  }
  return map;
}

if (args.includes('--write-baseline')) {
  const lines = [
    '# SR_SAME_PAGE_RESTATEMENT_BASELINE - pages that already reuse an 8-word',
    '# shingle across two blocks of themselves, recorded on purpose so this gate',
    '# can be armed without pinning the repo red on pre-existing pages.',
    '#',
    '# format: key<TAB>worst_pair_count        (generated by --write-baseline)',
    '#',
    '# Lower a row / delete it to re-arm the gate for that page. A page that is',
    '# ABSENT here and reuses any shingle FAILS - pages nobody looked at are the',
    '# gap this gate exists to close.',
    '',
  ];
  for (const r of results) if (r.worst > 0) lines.push(`${r.key}\t${r.worst}`);
  fs.writeFileSync(BASELINE, lines.join('\n') + '\n');
  const flagged = results.filter((r) => r.worst > 0).length;
  console.log(`baseline written: ${flagged} of ${results.length} pages recorded`);
  process.exit(0);
}

const base = readBaseline();
const fails = [];
const improved = [];
const baselined = [];
const offenders = results.filter((r) => r.worst > 0);

for (const r of offenders) {
  const b = base.get(r.key);
  if (b === undefined) fails.push({ ...r, why: 'NEW page not in baseline' });
  else if (r.worst > b) fails.push({ ...r, why: `REGRESSED baselined ${b} -> ${r.worst}` });
  else if (r.worst < b) improved.push({ ...r, from: b });
  else baselined.push(r);
}

console.log(`check-same-page-restatement: modules=${results.length} faq_keys=${Object.keys(faqs).length}`);
console.log(`  pages reusing an 8-word shingle across blocks: ${offenders.length} of ${results.length}`);
console.log(`  baselined ${baselined.length} | improved ${improved.length} | FAIL ${fails.length}`);

if (args.includes('--report')) {
  console.log('\nworst pairs currently:');
  for (const r of offenders.slice(0, 25)) console.log(`  ${String(r.worst).padStart(3)}  ${r.key.padEnd(24)} ${r.worstPair}`);
  process.exit(0);
}

for (const r of improved) console.log(`  IMPROVED ${r.key}: ${r.from} -> ${r.worst} (${r.worstPair || 'clean'})`);
for (const r of fails) console.log(`  FAIL     ${r.key}: ${r.worst} (${r.worstPair}) — ${r.why}`);

if (fails.length) {
  console.error(`check-same-page-restatement: FAILED (${fails.length} page(s))`);
  process.exit(1);
}
console.log('check-same-page-restatement: OK');
