#!/usr/bin/env node
/*
 * check-exam-imports.mjs — guard against UNRESOLVABLE exam-data imports.
 *
 * Invariant 1 (unresolved imports): every relative import specifier in
 * every .ts file under src/data/exams (recursively) must resolve each of its
 * relative imports to a file that actually exists on disk.
 *
 * Invariant 2 (shadowed exam dirs): there must never be BOTH
 * src/data/exams/<name>.ts AND src/data/exams/<name>/ — Node/TS resolution
 * prefers the FILE, so everything inside <name>/ becomes unreachable dead code
 * that still type-checks as source and still greps as "content".
 *
 * Why this exists:
 *   Commit f4b45c17 ("fix(mdcat,gre): correct unsourced paper numbers...") added
 *   src/data/exams/gre/gre.ts — a duplicate of the real src/data/exams/gre.ts —
 *   refactored to `import { verbal } from './subjects/verbal'` while shipping no
 *   src/data/exams/gre/subjects/ directory at all. The commit reported
 *   "npm run build green ... sr-content-audit 286/286 clean", but the file was
 *   never reachable from src/data/exams/index.ts, so it was never compiled and
 *   the build never had any reason to fail.
 *
 *   Both existing gates pass straight through this class of defect:
 *     - scripts/check-astro-syntax.mjs only parses .astro files (52 of them);
 *       it never opens src/data/exams/*.ts.
 *     - scripts/check-note-links.cjs reads exam files by scanning for
 *       `examId: '<id>'` with a regex; it never resolves imports, so a file with
 *       three broken imports parses fine and registers as a healthy exam.
 *
 *   The missing import was therefore invisible to the deploy gauntlet for the
 *   entire life of the file. This gate closes that hole.
 *
 * Usage:
 *   node scripts/check-exam-imports.mjs           # verify (exit 1 on any failure)
 *   node scripts/check-exam-imports.mjs --json    # machine-readable output
 *
 * Read-only. Never writes.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EXAM_DIR = path.join(ROOT, 'src/data/exams');
const JSON_OUT = process.argv.includes('--json');

// Extensions TS/Node will try when a specifier has no extension, in order.
const EXTS = ['.ts', '.tsx', '.mts', '.d.ts', '.js', '.jsx', '.mjs', '.json'];
const INDEX_BASENAMES = EXTS.map((e) => path.join('index', e));

/** Recursively collect every file under dir. */
function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

/**
 * Resolve a relative specifier the way TS/Node would:
 * exact file -> exact+extension -> /index.*
 */
function resolveRelative(fromFile, spec) {
  const base = path.resolve(path.dirname(fromFile), spec);
  const candidates = [base, ...EXTS.map((e) => base + e), ...INDEX_BASENAMES.map((i) => path.join(base, i))];
  for (const c of candidates) {
    try {
      if (fs.statSync(c).isFile()) return c;
    } catch {
      /* keep trying */
    }
  }
  return null;
}

// Relative import/export specifiers. Covers `import x from 'y'`, bare
// `import 'y'`, `export * from 'y'`, and dynamic `import('y')`.
const SPEC_RE = /(?:^|[\s;{}(])(?:import|export)\s*(?:[\w*{}\s,$]*?\s*from\s*)?['"](\.[^'"]*)['"]/g;
// dynamic import(...) is not caught by the form above — scan separately.
const DYN_RE = /\bimport\s*\(\s*['"](\.[^'"]*)['"]\s*\)/g;

if (!fs.existsSync(EXAM_DIR)) {
  console.error(`check-exam-imports: ${EXAM_DIR} not found`);
  process.exit(1);
}

const tsFiles = walk(EXAM_DIR).filter((f) => f.endsWith('.ts'));
const unresolved = [];

for (const file of tsFiles) {
  const src = fs.readFileSync(file, 'utf8');
  const specs = new Set();
  for (const re of [SPEC_RE, DYN_RE]) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(src)) !== null) specs.add(m[1]);
  }
  for (const spec of specs) {
    if (!resolveRelative(file, spec)) {
      unresolved.push({ file: path.relative(ROOT, file), spec, line: lineOf(src, spec) });
    }
  }
}

// ---- invariant 2: shadowed exam directories ----
const shadowed = [];
for (const entry of fs.readdirSync(EXAM_DIR, { withFileTypes: true })) {
  if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name === '_lib') continue;
  const sibling = path.join(EXAM_DIR, `${entry.name}.ts`);
  if (fs.existsSync(sibling)) {
    const inner = fs.readdirSync(path.join(EXAM_DIR, entry.name)).filter((f) => f.endsWith('.ts'));
    shadowed.push({ dir: path.relative(ROOT, path.join(EXAM_DIR, entry.name)), shadowedBy: path.relative(ROOT, sibling), files: inner });
  }
}

function lineOf(src, spec) {
  const i = src.indexOf(`'${spec}'`) >= 0 ? src.indexOf(`'${spec}'`) : src.indexOf(`"${spec}"`);
  return i < 0 ? null : src.slice(0, i).split('\n').length;
}

const total = unresolved.length + shadowed.length;

if (JSON_OUT) {
  console.log(JSON.stringify({ tsFiles: tsFiles.length, unresolved, shadowed, failures: total }, null, 2));
} else {
  console.log(`check-exam-imports: scanned ${tsFiles.length} exam-data .ts files`);
  if (unresolved.length) {
    console.error(`\nFAIL — ${unresolved.length} import(s) do not resolve to a file on disk:`);
    for (const u of unresolved) {
      console.error(`  ${u.file}:${u.line ?? '?'}  '${u.spec}'`);
    }
  }
  if (shadowed.length) {
    console.error(`\nFAIL — ${shadowed.length} shadowed exam director(ies); the .ts file wins resolution and the directory is dead code:`);
    for (const s of shadowed) {
      console.error(`  ${s.dir}/  (${s.files.join(', ') || 'empty'})  — unreachable, shadowed by ${s.shadowedBy}`);
    }
  }
  if (!total) console.log('OK — every relative exam-data import resolves; no shadowed exam directories.');
}

process.exit(total ? 1 : 0);