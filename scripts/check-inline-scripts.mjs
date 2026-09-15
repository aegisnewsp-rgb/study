#!/usr/bin/env node
// scripts/check-inline-scripts.mjs — build-time guard.
//
// Why: src/components/AdRouter.astro (and other pages) emit inline <script>
// bodies via Astro's <script is:inline set:html={...}> pattern. A bad escape
// inside a template literal once shipped a `//` line comment into production
// and killed the entire Monetag loader — see commit "fix(ads): repair
// AdRouter inline regex literal that killed the ad loader".
//
// This script walks dist/**/*.html after `astro build` and runs `node --check`
// against every inline JS body that has no `src=` attribute and whose type is
// absent or a JS MIME type. The first syntax error fails the build (exit
// non-zero) so the bug can never ship again.
//
// Idempotent and safe to re-run.
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync, statSync, writeFileSync, rmSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { tmpdir } from 'node:os';

const DIST = process.env.SR_DIST || 'dist';
const MIN_LEN = 20;

// Match <script ...>body</script>. Use a regex with the dotall flag so the
// body can span newlines; tolerate attributes between the tag and the close.
const SCRIPT_RE = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const ATTR_RE = /([a-zA-Z:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;

function parseAttrs(attrText) {
  const out = {};
  let m;
  ATTR_RE.lastIndex = 0;
  while ((m = ATTR_RE.exec(attrText))) {
    const name = m[1].toLowerCase();
    const val = m[2] ?? m[3] ?? m[4] ?? '';
    out[name] = val;
  }
  return out;
}

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      yield* walk(full);
    } else if (st.isFile() && full.endsWith('.html')) {
      yield full;
    }
  }
}

function isJsType(t) {
  if (!t) return true;
  const v = t.toLowerCase();
  if (v === 'application/javascript' || v === 'text/javascript' || v === 'module') return true;
  // JSON-LD and other non-JS data formats are not JS source; skip.
  return false;
}

const tmp = mkdtempSync(join(tmpdir(), 'sr-inline-check-'));
let filesScanned = 0;
let scriptsChecked = 0;
let firstError = null;

try {
  for (const file of walk(DIST)) {
    filesScanned += 1;
    const html = readFileSync(file, 'utf8');
    let m;
    SCRIPT_RE.lastIndex = 0;
    while ((m = SCRIPT_RE.exec(html))) {
      const attrs = parseAttrs(m[1] || '');
      if (attrs.src) continue;             // external script, not inline
      if (!isJsType(attrs.type)) continue; // JSON-LD or non-JS data
      const body = m[2];
      if (body.trim().length < MIN_LEN) continue;
      scriptsChecked += 1;

      const tmpFile = join(tmp, `s${scriptsChecked}.js`);
      writeFileSync(tmpFile, body);
      const r = spawnSync(process.execPath, ['--check', tmpFile], { encoding: 'utf8' });
      if (r.status !== 0) {
        firstError = { file: relative('.', file), body, stderr: r.stderr || '', tmpFile };
        break;
      }
    }
    if (firstError) break;
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

if (firstError) {
  const e = firstError;
  const snippet = e.body
    .split('\n')
    .slice(0, 12)
    .map((l, i) => `${String(i + 1).padStart(4)}: ${l}`)
    .join('\n');
  console.error(`check-inline-scripts: SYNTAX ERROR in ${e.file}`);
  console.error('--- node --check stderr ---');
  console.error(e.stderr.trim());
  console.error('--- first 12 lines of script body ---');
  console.error(snippet);
  process.exit(1);
}

console.log(`check-inline-scripts: OK (files=${filesScanned} scripts=${scriptsChecked})`);
