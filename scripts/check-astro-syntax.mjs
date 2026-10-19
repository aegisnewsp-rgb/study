#!/usr/bin/env node
// scripts/check-astro-syntax.mjs — pre-build guard for inline script bodies.
//
// Why: `@astrojs/compiler`'s transform() does NOT fail on a stray backtick
// inside a frontmatter template literal — verified 2026-09-15 by feeding it a
// file with one. Astro only notices when Vite/esbuild compiles the emitted
// output, i.e. ~2 seconds into a build that then dies (or, worse, ships a
// body whose comment/string boundary moved). Two real incidents came from
// this class: an inline `//` that killed the Monetag loader, and a backtick in
// a ConsentManager comment that stopped the whole build.
//
// What it does: transform every .astro file, then parse the generated module
// with esbuild. That is the same parse the build performs, just per-file and
// before the site build starts. Both parsers are already installed as
// Astro/Vite dependencies.
//
// Scope: syntax only — no type checking, no output review. ~2s for src/.
//
// vqzo 2026-10-19: the .ts half was missing and that made this chain FALSE-GREEN on a
// whole defect class. check-scope.sh checks paths; this file parsed only .astro, so a
// raw ASCII apostrophe inside a single-quoted string in src/data/exam-faqs.ts produced a
// file Vite cannot compile while BOTH gates printed OK — twice (93e4aa1a line 275, then
// d429c262 two pulses later). This gate now parses the TypeScript data modules too, which
// is what `check-data-module-parse.mjs` exists for as a standalone entry point.
//
// A plain `astro build` also fails on these (vite/esbuild dies ~5s in, before
// any page is rendered), so this is a convenience for agents and pre-commit
// loops, not the deploy gate: it gives the file and line without starting a
// build. Wiring it into package.json "prebuild" was considered and skipped —
// package.json is deliberately outside scripts/check-scope.sh's allowed paths.
//
// Usage: node scripts/check-astro-syntax.mjs [dir ...]   (default: src)
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { transform } from '@astrojs/compiler';
import esbuild from 'esbuild';

const roots = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const dirs = roots.length ? roots : ['src'];

function* walk(dir, ext) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) yield* walk(full, ext);
    else if (st.isFile() && full.endsWith(ext)) yield full;
  }
}

let files = 0;
const failures = [];

for (const dir of dirs) {
  for (const file of walk(dir, '.astro')) {
    files += 1;
    const source = readFileSync(file, 'utf8');
    let code;
    try {
      const out = await transform(source, { filename: file });
      code = out.code;
    } catch (e) {
      failures.push({ file, where: 'astro compiler', message: String(e && e.message || e) });
      continue;
    }
    try {
      // Parse (do not bundle) the generated ESM module. loader:'js' accepts
      // import/export, so this is a pure syntax gate.
      await esbuild.transform(code, { loader: 'ts', sourcefile: file, logLevel: 'silent' });
    } catch (e) {
      const msg = (e && e.errors && e.errors[0])
        ? `${e.errors[0].text}${e.errors[0].location ? ` @ line ${e.errors[0].location.line}:${e.errors[0].location.column}` : ''}`
        : String((e && e.message) || e);
      failures.push({ file, where: 'generated module', message: msg });
    }
  }
}

// --- .ts data modules (vqzo 2026-10-19) -------------------------------------
// Parse, do not bundle: import specifiers are never resolved, so a module importing
// `astro:content` or a sibling alias still passes. This is syntax only.
let tsFiles = 0;
for (const dir of dirs) {
  for (const file of walk(dir, '.ts')) {
    tsFiles += 1;
    try {
      esbuild.transformSync(readFileSync(file, 'utf8'), {
        loader: 'ts',
        format: 'esm',
        sourcefile: file,
        logLevel: 'silent',
      });
    } catch (e) {
      const err = (e && e.errors && e.errors[0]) || null;
      const message = err
        ? `${err.text}${err.location ? ` @ line ${err.location.line}:${err.location.column}` : ''}`
        : String((e && e.message) || e);
      failures.push({ file, where: 'ts module', message });
    }
  }
}

if (files === 0 && tsFiles === 0) {
  console.error(`check-astro-syntax: FAILED — no .astro or .ts files found under ${dirs.join(', ')}.`);
  console.error('  Nothing was parsed. A gate that scanned nothing must not report OK.');
  process.exit(1);
}

if (failures.length) {
  console.error(`check-astro-syntax: FAILED (${failures.length} of ${files} .astro + ${tsFiles} .ts files)`);
  for (const f of failures) {
    console.error(`  ${relative('.', f.file)}  [${f.where}]`);
    console.error(`    ${f.message.split('\n')[0]}`);
  }
  process.exit(1);
}

console.log(`check-astro-syntax: OK (${files} .astro files, ${tsFiles} .ts modules parsed)`);
