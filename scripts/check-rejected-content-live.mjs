#!/usr/bin/env node
/*
 * check-rejected-content-live.mjs — a curator's refusal must not be shippable.
 *
 * THE DEFECT THIS EXISTS FOR (vqzo 2026-10-21T13:05Z)
 *   A curate verdict refused a patch. The refusal was recorded, correctly, in
 *   curate-VQZO-20261021T1235Z-firstscreen-measured-8-rows.json with ok=false.
 *   Nine minutes later a host auto-commit landed that patch's content at HEAD
 *   dc7fecd8 under a commit message that said "swarm-rewrite 0 low-value
 *   note(s)" - a message that describes a note rewrite that never happened and
 *   that never mentions the two strings the curator had just refused.
 *
 *   Nothing in the repo could stop it, and the reason is measurable: every
 *   commit the repo's own hooks recorded is in gate-audit.jsonl, and dc7fecd8
 *   is NOT. The host's commit path does not run the hooks, so the receipt gate,
 *   the scope gate and every other pre-commit control were absent on exactly
 *   the path that needed them.
 *
 *   The refusal itself was not lost either. check-curate-gap.mjs saw the
 *   patch, saw that a verdict existed, and counted it as CURATED - it never
 *   read the verdict's ok value. A refusal is a verdict, and a verdict that
 *   says no is not a verdict that says yes.
 *
 * WHAT THIS DOES
 *   It holds the exact shipped literals that a curate verdict refused, and
 *   refuses the tree while any of them is present in shipped content. It is a
 *   DETECTIVE, not a mechanism: it cannot stop the commit, it can only make
 *   the tree red and say which string, where, and which verdict refused it.
 *   It runs in the gate chain, so a deploy of a tree carrying refused
 *   content is blocked rather than shipped.
 *
 * WHY FULL LITERALS AND NOT FRAGMENTS
 *   Measured, not assumed: the fragment "section time limits" is a CORRECT
 *   statement on /exams/hpat/, which publishes a per-section timing table
 *   (65/45/40 minutes). A fragment match would have failed that page forever.
 *   Only the full TNPSC snippet was refused. So every entry here is the exact
 *   literal that was refused, and the gate matches the whole of it.
 *
 * EXIT CODES
 *   0 = no refused string is live. 1 = a refused string IS live (fail).
 *   2 = INERT: the refusal record is missing or unreadable, so NOTHING was
 *   adjudicated. rc=2 is NOT a pass and NOT a refusal - the chain reports it
 *   as NOT-RUN, and a control that cannot run must never be green.
 *
 * USAGE
 *   node scripts/check-rejected-content-live.mjs            # check the repo
 *   node scripts/check-rejected-content-live.mjs --json     # machine-readable
 *   node scripts/check-rejected-content-live.mjs --root DIR # check another tree
 *   node scripts/check-rejected-content-live.mjs --selfcheck
 *
 * THE RECORD
 *   scripts/rejected-content-strings.json, tracked in the repo so the check
 *   also runs on the deploy host, where the workspace patch store is absent.
 *   A curate verdict that refuses a specific shipped string must add an
 *   entry there. A verdict that refuses a RULE (rather than a literal) does
 *   not belong there: rules are governed by the patch-level receipt.
 */

import { readFileSync, existsSync, readdirSync, statSync, mkdtempSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join, relative, extname, resolve } from 'node:path';
import { tmpdir } from 'node:os';

const argv = process.argv.slice(2);
const hasFlag = (f) => argv.includes(f);
const flagVal = (f, d) => {
  const i = argv.indexOf(f);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : d;
};
const JSON_OUT = hasFlag('--json');
const ROOT = resolve(flagVal('--root', process.cwd()));
const RECORD = join(ROOT, 'scripts', 'rejected-content-strings.json');

/* Shipped content only. A refused string in a script, a log or a patch is a
   record of the refusal, not the refusal itself being shipped. */
const SHIPPED_ROOTS = ['src/data', 'src/content'];
const SHIPPED_EXT = new Set(['.ts', '.tsx', '.md', '.mdx', '.astro', '.js', '.mjs', '.json']);
const SKIP_DIR = new Set(['node_modules', '.git', 'dist', '.astro', 'public']);

const COMMENT_PREFIX = /^(\/\/|\/\*|\*|<!--|#\s*---)/;

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIR.has(e.name)) continue;
      walk(p, out);
    } else if (e.isFile() && SHIPPED_EXT.has(extname(e.name))) {
      out.push(p);
    }
  }
  return out;
}

/* A comment line is not shipped content. The house comments in
   seo-meta-overrides.ts quote fragments of the strings they document, so the
   filter is what keeps this gate from failing on its own history. */
function isCommentLine(raw) {
  const t = raw.trim();
  if (!t) return true;
  return COMMENT_PREFIX.test(t);
}

function collapse(s) {
  return s.replace(/\s+/g, ' ').trim();
}

export function scanFile(file, rejectedStrings) {
  const hits = [];
  let text;
  try {
    text = readFileSync(file, 'utf8');
  } catch {
    return hits;
  }
  /* Keep the line numbers, and stay linear: the live lines are joined once
     and a start-offset index maps a character position back to its line. */
  const live = [];
  text.split('\n').forEach((raw, i) => {
    if (!isCommentLine(raw)) live.push({ no: i + 1, text: collapse(raw) });
  });
  let full = '';
  const starts = [];
  for (const l of live) {
    starts.push(full.length);
    full += (full ? ' ' : '') + l.text;
  }
  const lineAt = (pos) => {
    let k = 0;
    for (let i = 0; i < starts.length; i++) {
      if (starts[i] <= pos) k = i;
      else break;
    }
    return live.length ? live[k].no : 1;
  };
  for (const entry of rejectedStrings) {
    const needle = collapse(entry.rejected_string);
    if (!needle) continue;
    const at = full.indexOf(needle);
    if (at === -1) continue;
    hits.push({
      id: entry.id,
      file: file,
      line: lineAt(at),
      rejected_string: entry.rejected_string,
      source_curate: entry.source_curate || null,
      reason: entry.reason || null,
    });
  }
  return hits;
}

export function scanTree(root, record) {
  const entries = (record && record.entries) || [];
  const strings = entries.filter((e) => e && typeof e.rejected_string === 'string' && e.rejected_string.trim());
  const files = SHIPPED_ROOTS.flatMap((r) => walk(join(root, r)));
  const hits = files.flatMap((f) => scanFile(f, strings));
  return { hits, filesScanned: files.length, stringsChecked: strings.length };
}

export function loadRecord(root) {
  const p = join(root, 'scripts', 'rejected-content-strings.json');
  if (!existsSync(p)) return { record: null, error: 'record file not found: ' + p };
  try {
    return { record: JSON.parse(readFileSync(p, 'utf8')), error: null };
  } catch (e) {
    return { record: null, error: 'record file is not valid JSON: ' + e.message };
  }
}

function selfcheck() {
  const checks = [];
  const ok = (name, pass, detail) => checks.push({ name, pass: !!pass, detail: detail || '' });

  const dir = mkdtempSync(join(tmpdir(), 'sr-rejected-live-'));
  try {
    mkdirSync(join(dir, 'src/data/exams'), { recursive: true });
    mkdirSync(join(dir, 'scripts'), { recursive: true });
    const { record } = loadRecord(ROOT);
    const entry = record.entries[0];
    const needle = entry.rejected_string;

    // control 1: the record file is present and parseable
    ok('record file parses', !!record && Array.isArray(record.entries) && record.entries.length > 0);

    // control 2: a clean tree passes
    writeFileSync(join(dir, 'scripts/rejected-content-strings.json'), JSON.stringify(record));
    const clean = scanTree(dir, record);
    ok('clean tree -> no hits', clean.hits.length === 0, 'hits=' + clean.hits.length);

    // control 3: the refused string IS live -> the gate must SEE it
    writeFileSync(
      join(dir, 'src/data/exams/uptet.ts'),
      "export const e = {\n  description: '" + needle + "',\n};\n",
    );
    const live = scanTree(dir, record);
    ok('refused string live -> detected', live.hits.length === 1, 'hits=' + live.hits.length);
    ok('the hit names the right id', live.hits[0] && live.hits[0].id === entry.id, live.hits[0] && live.hits[0].id);

    // control 4: the same string inside a COMMENT is not shipped content
    writeFileSync(
      join(dir, 'src/data/exams/uptet.ts'),
      "// description: '" + needle + "',\nexport const e = {};\n",
    );
    const commented = scanTree(dir, record);
    ok('refused string in a comment -> not a hit', commented.hits.length === 0, 'hits=' + commented.hits.length);

    // control 5: a FRAGMENT on an unrelated page is not a hit
    writeFileSync(
      join(dir, 'src/data/exams/hpat.ts'),
      "export const e = { description: 'the section time limits are tight (65/45/40 minutes)' };\n",
    );
    const frag = scanTree(dir, record);
    ok('fragment on another page -> not a hit', frag.hits.length === 0, 'hits=' + frag.hits.length);

    // control 6: a missing record file is INERT, never green
    const missing = scanTree('/nonexistent-sr-rejected-live-tree', record);
    ok('missing tree -> no crash, 0 hits', missing.hits.length === 0);
    const { record: none, error } = loadRecord('/nonexistent-sr-rejected-live-tree');
    ok('missing record file -> INERT (record null, error set)', none === null && !!error, error || '');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }

  const failed = checks.filter((c) => !c.pass);
  for (const c of checks) {
    console.log(`${c.pass ? 'PASS' : 'FAIL'}  ${c.name}${c.detail ? '  (' + c.detail + ')' : ''}`);
  }
  console.log(`selfcheck: ${checks.length - failed.length}/${checks.length}`);
  process.exit(failed.length ? 1 : 0);
}

if (hasFlag('--selfcheck')) selfcheck();

const { record, error } = loadRecord(ROOT);
if (!record) {
  const msg = 'check-rejected-content-live: INERT — ' + error + '. Nothing was adjudicated. This is NOT a pass.';
  if (JSON_OUT) {
    console.log(JSON.stringify({ tool: 'check-rejected-content-live', status: 'INERT', error, rc: 2 }, null, 1));
  } else {
    console.error(msg);
  }
  process.exit(2);
}

const { hits, filesScanned, stringsChecked } = scanTree(ROOT, record);

if (JSON_OUT) {
  console.log(
    JSON.stringify(
      {
        tool: 'check-rejected-content-live',
        root: ROOT,
        record_entries: (record.entries || []).length,
        strings_checked: stringsChecked,
        files_scanned: filesScanned,
        hits: hits,
        status: hits.length ? 'FAIL' : 'PASS',
        rc: hits.length ? 1 : 0,
      },
      null,
      1,
    ),
  );
} else if (hits.length) {
  console.error(`check-rejected-content-live: FAIL — ${hits.length} curator-refused string(s) are live in shipped content:`);
  for (const h of hits) {
    console.error(`  ${h.file}:${h.line}  [${h.id}]`);
    console.error(`    refused string: ${h.rejected_string}`);
    if (h.source_curate) console.error(`    refused by:     ${h.source_curate}`);
    if (h.reason) console.error(`    why:            ${h.reason}`);
  }
  console.error('A refused string is not shippable. Revert the string, or record a new verdict.');
} else {
  console.log(
    `check-rejected-content-live: PASS — ${stringsChecked} refused string(s) checked across ${filesScanned} shipped file(s); none is live.`,
  );
}
process.exit(hits.length ? 1 : 0);
