#!/usr/bin/env node
/**
 * check-noindex-parity.cjs
 *
 * Why this exists (measured 2026-10-14T00:20Z, queue row sr-0020Z):
 * the noindex decision is maintained TWICE, by hand, in two files:
 *
 *   src/data/suppressed-exams.ts  -> NOINDEX_EXAMS   (33 ids)
 *   astro.config.mjs              -> NOINDEX_SITEMAP (33 ids)
 *
 * They set different things and a one-line edit to either drifts silently:
 *
 *   config-only  -> the exam is still indexable in HTML but dropped from the
 *                   sitemap. Symptom: a live exam quietly loses all organic
 *                   entry points with no error anywhere. Pure revenue loss.
 *   ts-only      -> the exam is noindex,follow in HTML but still advertised in
 *                   sitemap.xml. Symptom: crawl budget spent on URLs that are
 *                   forbidden from ranking.
 *
 * Neither drift raises a build error: astro.config.mjs and the content
 * collection validate independently, and @astrojs/sitemap just filters what it
 * is handed. Measured on 2026-10-13: both lists held 33 ids, 0 divergent, so
 * the corpus is currently clean. That is exactly why a guard is worth having —
 * a clean snapshot proves nothing about the next edit.
 *
 * This script is READ-ONLY and additive. It does not edit either list, and it
 * deliberately does NOT rewrite astro.config.mjs or suppressed-exams.ts:
 * changing what a page indexes is a search-surface decision reserved for the
 * operator, and any change there needs a full rebuild to take effect.
 *
 * Wiring into scripts/check-scope.sh is left to the owner as a separate ruling
 * (check-scope.sh edits have already been escalated once and declined).
 *
 * Usage:  node scripts/check-noindex-parity.cjs
 * Exit:   0 = lists agree (or one list legitimately absent, e.g. no dist build)
 *         1 = DIVERGENCE — report it, do not auto-fix
 */
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const TS_FILE = path.join(ROOT, 'src/data/suppressed-exams.ts');
const CFG_FILE = path.join(ROOT, 'astro.config.mjs');

const readIds = (file, label, varName) => {
  if (!fs.existsSync(file)) {
    console.log(`SKIP  ${label} not found at ${path.relative(ROOT, file)}`);
    return null;
  }
  const src = fs.readFileSync(file, 'utf8');
  // Anchor on the variable name, then take the first balanced-ish literal array.
  const re = new RegExp(`${varName}\\s*=\\s*new Set(?:<string>)?\\(\\s*\\[([\\s\\S]*?)\\]\\s*\\)`);
  const m = src.match(re);
  if (!m) {
    console.log(`SKIP  ${label}: could not locate ${varName} in ${path.relative(ROOT, file)}`);
    return null;
  }
  // Only count quoted ids on NON-comment lines. Both files carry rich // comment
  // blocks, and prose apostrophes (e.g. "301'd in nginx.conf") otherwise pair up
  // across lines and fabricate ids such as "2026". Verified: without this filter
  // this script reported a phantom divergence and exited 1 on a clean tree.
  const ids = new Set();
  for (const line of m[1].split('\n')) {
    if (line.trim().startsWith('//')) continue;
    for (const tok of line.matchAll(/['"]([a-z0-9][a-z0-9-]*)['"]/g)) ids.add(tok[1]);
  }
  return ids;
};

const main = () => {
  const ts = readIds(TS_FILE, 'NOINDEX_EXAMS (src/data/suppressed-exams.ts)', 'NOINDEX_EXAMS');
  const cfg = readIds(CFG_FILE, 'NOINDEX_SITEMAP (astro.config.mjs)', 'NOINDEX_SITEMAP');

  if (!ts && !cfg) {
    console.log('OK — neither noindex list could be read; nothing to compare.');
    return 0;
  }
  if (!ts || !cfg) {
    console.log('OK — only one noindex list present; parity not applicable.');
    return 0;
  }

  const configOnly = [...cfg].filter((x) => !ts.has(x)).sort();
  const tsOnly = [...ts].filter((x) => !cfg.has(x)).sort();

  if (!configOnly.length && !tsOnly.length) {
    console.log(`OK — noindex parity holds: ${ts.size} ids in both lists, 0 divergent.`);
    return 0;
  }

  console.error('FAIL — noindex parity DIVERGENCE between the two hand-maintained lists.\n');
  if (configOnly.length) {
    console.error('In astro.config.mjs sitemap list but NOT in suppressed-exams.ts:');
    console.error('  -> these exams stay indexable in HTML but vanish from sitemap.xml.');
    console.error('  -> live organic entry points are lost silently. HIGHEST IMPACT.');
    for (const x of configOnly) console.error(`     ${x}`);
  }
  if (tsOnly.length) {
    console.error('In suppressed-exams.ts but NOT in astro.config.mjs sitemap list:');
    console.error('  -> these exams are noindex,follow yet still advertised in sitemap.xml.');
    console.error('  -> crawl budget spent on URLs forbidden from ranking.');
    for (const x of tsOnly) console.error(`     ${x}`);
  }
  console.error('\nDo NOT auto-edit either file — the correct value is an operator ruling.');
  console.error('Reconcile by hand, then rebuild so the sitemap is regenerated.');
  return 1;
};

process.exit(main());