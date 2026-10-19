#!/usr/bin/env node
// scripts/check-data-module-parse.mjs — syntax gate for the TypeScript data modules.
//
// Why this gate exists (queue row sr-2235Z-vqzo-GATE-GAP-no-pulse-gate-parses-ts-data-modules-P0,
// reopened 2026-10-19T0205Z): the pulse gate set could not see a TypeScript syntax error.
// check-scope.sh checks PATHS; check-astro-syntax.mjs (until this change) parsed only .astro.
// So `src/data/exam-faqs.ts` could not parse and the standard chain still printed
// "Scope OK" + "check-astro-syntax: OK". That file is imported by
// src/pages/exams/[exam].astro and src/pages/roadmap.astro, so it sits in the FAQ data
// path of every exam page.
//
// Two real incidents, same class:
//   93e4aa1a — three raw ASCII apostrophes inside single-quoted strings on one line.
//   d429c262 — two more, inside a single 3-line edit, two pulses after the first fix.
// Both were invisible to the standard chain. Only a direct esbuild parse returned rc=1.
//
// What it does: parse (do NOT bundle) every .ts module under the given roots with esbuild,
// the same parser Vite uses during the build. Parse-only means import specifiers are never
// resolved, so a module that imports `astro:content` or a sibling alias still passes — this
// gate is syntax, not resolution, exactly like the .astro half of check-astro-syntax.mjs.
//
// Scope: syntax only. No type checking, no output review, no network. ~1s for src/.
//
// Usage: node scripts/check-data-module-parse.mjs [dir ...]   (default: src/data)
// Env:   SR_TS_PARSE_STRICT=1  -> fail when a root resolves to zero modules (a typo'd path
//                                would otherwise produce a vacuous green, which is the
//                                exact defect class this gate is closing).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import esbuild from 'esbuild';

const roots = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const dirs = roots.length ? roots : ['src/data'];

function* walk(dir, ext) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue; // dangling symlink / race with a concurrent write
    }
    if (st.isDirectory()) yield* walk(full, ext);
    else if (st.isFile() && full.endsWith(ext)) yield full;
  }
}

let files = 0;
const failures = [];
const missingRoots = [];

for (const dir of dirs) {
  if (!readdirSafe(dir)) {
    missingRoots.push(dir);
    continue;
  }
  for (const file of walk(dir, '.ts')) {
    files += 1;
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
      failures.push({ file, message });
    }
  }
}

function readdirSafe(dir) {
  try {
    statSync(dir);
    return true;
  } catch {
    return false;
  }
}

if (missingRoots.length) {
  console.error(`check-data-module-parse: root(s) not found: ${missingRoots.join(', ')}`);
  console.error('  Zero modules were parsed. This gate scanned NOTHING — that is not a pass.');
  process.exit(1);
}

if (files === 0) {
  console.error(`check-data-module-parse: no .ts modules under ${dirs.join(', ')} — scanned nothing.`);
  process.exit(process.env.SR_TS_PARSE_STRICT === '1' ? 1 : 0);
}

if (failures.length) {
  console.error(`check-data-module-parse: FAILED (${failures.length} of ${files} modules)`);
  for (const f of failures) {
    console.error(`  ${relative('.', f.file)}`);
    console.error(`    ${String(f.message).split('\n')[0]}`);
  }
  console.error('  A module the build imports does not parse. The site build will fail. Fix before commit.');
  process.exit(1);
}

console.log(`check-data-module-parse: OK (${files} .ts modules under ${dirs.join(', ')})`);