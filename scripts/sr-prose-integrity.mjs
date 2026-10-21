#!/usr/bin/env node
/**
 * sr-prose-integrity — prove whether a patch changes PROSE, at the byte level.
 *
 * WHY THIS EXISTS (vqzo 2026-10-21T10:20Z):
 *   The mesh has four open "structural-only" waves (0320Z tier triad, 0705Z
 *   residuals, 0750Z orphan-H3 demotion, 1005Z completion). Every one of them
 *   claims "0 prose lines changed", and every one of them is blocked on an
 *   operator override. The claims are prose assertions in a JSON record; this
 *   tool turns each of them into a measurement over the diff itself.
 *
 *   A counting mistake is easy here, because a patch that MOVES a paragraph
 *   shows up in the diff as one prose line removed and one prose line added.
 *   Counting added lines minus removed lines calls that "0 net prose" and
 *   hides a relocation. So the tool separates three outcomes:
 *
 *     PROSE AUTHORED    text that exists only on the + side  -> real new words
 *     PROSE DELETED     text that exists only on the - side  -> real lost words
 *     PROSE RELOCATED   the SAME text on both sides          -> a MOVE, not an edit
 *
 *   Relocation is not an AdSense risk (not one character of originality
 *   changes) but it IS a structural change: a paragraph that sat under "What
 *   the grade is" now sits under a different heading, so the section it
 *   belongs to changed. A reviewer deciding "is this structural-only?" needs
 *   to see relocations named, not netted away.
 *
 * WHAT IS STRUCTURAL (never prose):
 *   - markdown heading lines  (# / ## / ### / #### ...)
 *   - blank lines
 *   - horizontal rules        (--- / *** / ___)
 *
 * EXIT CODES
 *   0  no prose authored, no prose deleted (relocations may still be reported)
 *   1  prose was authored or deleted  -> this patch is NOT structural-only
 *   2  usage / IO error (nothing was asserted; this is NOT a pass)
 *
 * Usage:
 *   node scripts/sr-prose-integrity.mjs <patch.diff> [patch2.diff ...]
 *   node scripts/sr-prose-integrity.mjs --json <patch.diff>
 *   node scripts/sr-prose-integrity.mjs --tree <patch.diff>   (file-level ground truth)
 *   node scripts/sr-prose-integrity.mjs --selftest
 *
 * The tool READS ONLY. It never applies a patch and never touches the tree.
 */

import { readFileSync, writeFileSync, existsSync, mkdtempSync, cpSync, rmSync, readdirSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const HEADING_RE = /^\s{0,3}#{1,6}(\s|$)/;
const RULE_RE = /^\s{0,3}([-*_])(\s*\1){2,}\s*$/;

/**
 * Is this file USER-FACING CONTENT, i.e. is "prose" the right question for it?
 *
 * WHY THIS EXISTS (vqzo 2026-10-21T1650Z):
 *   The first version of this tool classified every non-heading, non-blank,
 *   non-rule line as "prose". That is correct for a NOTE and wrong for
 *   anything else: a 440-line JavaScript gate is not prose, and the tool
 *   reported "prose authored: 424" for it. A patch that adds a gate script
 *   is not an AdSense originality problem, and a verdict that says it is
 *   would send the next pulse hunting for filler inside code.
 *
 *   So the question is asked per FILE, and "prose" is the right question only
 *   for shipped content under src/content/. Everything else is reported as
 *   CODE, and the tool says the prose gate is not applicable - which is the
 *   honest answer, and is never reported as a pass on prose.
 */
export function isContentPath(path) {
  if (!path) return false;
  const p = path.replace(/^a\//, '').replace(/^b\//, '');
  return /^src\/content\//.test(p) && /\.(md|mdx|markdown)$/i.test(p);
}

/** Classify one diff body line. */
export function classify(line) {
  if (/^\s*$/.test(line)) return 'blank';
  if (RULE_RE.test(line)) return 'rule';
  if (HEADING_RE.test(line)) return 'heading';
  return 'prose';
}

/** Multiset difference: items in `a` not consumed by `b` (and the reverse). */
export function multisetDiff(a, b) {
  const pool = new Map();
  for (const x of b) pool.set(x, (pool.get(x) || 0) + 1);
  const onlyA = [];
  for (const x of a) {
    const n = pool.get(x) || 0;
    if (n > 0) pool.set(x, n - 1);
    else onlyA.push(x);
  }
  const pool2 = new Map();
  for (const x of a) pool2.set(x, (pool2.get(x) || 0) + 1);
  const onlyB = [];
  for (const x of b) {
    const n = pool2.get(x) || 0;
    if (n > 0) pool2.set(x, n - 1);
    else onlyB.push(x);
  }
  return { onlyA, onlyB };
}

/**
 * Parse a unified diff into per-file change records.
 * Handles the `a/` `b/` prefixes and git's `diff --git` headers.
 */
export function parseDiff(text) {
  const files = [];
  let cur = null;
  for (const raw of text.split('\n')) {
    if (raw.startsWith('diff --git ')) {
      cur = { path: null, removed: [], added: [] };
      files.push(cur);
      continue;
    }
    if (raw.startsWith('--- ')) {
      // The -a/ side header. It also marks the start of a file record in a
      // plain `diff -u` patch, which has no `diff --git` line: start a new
      // record when the current one already has a path.
      if (!cur || cur.path !== null) {
        cur = { path: null, removed: [], added: [] };
        files.push(cur);
      }
      continue;
    }
    if (!cur) continue;
    if (raw.startsWith('+++ ')) {
      const p = raw.slice(4).trim();
      cur.path = p.replace(/^b\//, '');
      continue;
    }
    if (raw.startsWith('+')) cur.added.push(raw.slice(1));
    else if (raw.startsWith('-')) cur.removed.push(raw.slice(1));
  }
  return files;
}

/** Analyse one parsed file record. */
export function analyseFile(rec) {
  const content = isContentPath(rec.path);
  const removedProse = content ? rec.removed.filter((l) => classify(l) === 'prose') : [];
  const addedProse = content ? rec.added.filter((l) => classify(l) === 'prose') : [];
  const removedHead = rec.removed.filter((l) => classify(l) === 'heading');
  const addedHead = rec.added.filter((l) => classify(l) === 'heading');
  const { onlyA, onlyB } = multisetDiff(removedProse, addedProse);
  const relocated =
    removedProse.length > 0 &&
    onlyA.length === 0 &&
    onlyB.length === 0 &&
    removedProse.length === addedProse.length;
  return {
    path: rec.path,
    content,
    headings_changed: Math.max(removedHead.length, addedHead.length),
    code_lines_added: content ? 0 : rec.added.length,
    code_lines_removed: content ? 0 : rec.removed.length,
    prose_lines_removed: removedProse.length,
    prose_lines_added: addedProse.length,
    prose_authored: onlyB.length,
    prose_deleted: onlyA.length,
    prose_relocated: relocated ? removedProse.length : 0,
    authored_samples: onlyB.slice(0, 3),
    deleted_samples: onlyA.slice(0, 3),
  };
}

/** Analyse a whole patch file. */
export function analysePatch(path) {
  const text = readFileSync(path, 'utf8');
  const files = parseDiff(text).map(analyseFile);
  const sum = (k) => files.reduce((n, f) => n + f[k], 0);
  const authored = sum('prose_authored');
  const deleted = sum('prose_deleted');
  const contentFiles = files.filter((f) => f.content).length;
  return {
    patch: path,
    files: files.length,
    content_files: contentFiles,
    non_content_files: files.length - contentFiles,
    prose_applicable: contentFiles > 0,
    code_lines_changed: sum('code_lines_added') + sum('code_lines_removed'),
    headings_changed: sum('headings_changed'),
    prose_authored: authored,
    prose_deleted: deleted,
    prose_relocated: sum('prose_relocated'),
    files_with_relocation: files.filter((f) => f.prose_relocated > 0).length,
    files_with_authored_prose: files.filter((f) => f.prose_authored > 0).length,
    structural_only: contentFiles > 0 && authored === 0 && deleted === 0,
    detail: files.filter(
      (f) => f.prose_authored || f.prose_deleted || f.prose_relocated,
    ),
  };
}

/* ------------------------------------------------------------------ *
 * FILE-LEVEL GROUND TRUTH
 *
 * The diff-level view above cannot tell a REAL paragraph move from a
 * hunk-boundary artifact: when a heading is inserted between two
 * paragraphs, git re-emits the first line of the following paragraph as
 * a -/+ pair even though the line never moved. Both look identical in a
 * diff, so the diff says "relocated" and the file says otherwise.
 *
 * The file-level view is the ground truth. It reconstructs HEAD in a
 * temp dir, applies the patch there, and compares the PROSE SEQUENCE of
 * each file before and after. It never touches the real tree.
 * ------------------------------------------------------------------ */

/** The prose of a file: everything that is not a heading, blank or rule. */
export function proseSequence(text) {
  return text
    .split('\n')
    .filter((l) => classify(l) === 'prose')
    .map((l) => l.replace(/\s+$/, ''));
}

/** Longest common subsequence length for two line arrays. */
function lcsLength(a, b) {
  const n = a.length;
  const m = b.length;
  let prev = new Array(m + 1).fill(0);
  let cur = new Array(m + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      cur[j] = a[i - 1] === b[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
    }
    [prev, cur] = [cur, prev];
    cur.fill(0);
  }
  return prev[m];
}

function repoRoot() {
  try {
    return execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return process.cwd();
  }
}

/**
 * Apply a patch to a throwaway copy of HEAD and compare prose per file.
 * Returns null when the patch cannot be applied to HEAD (the caller then
 * falls back to the diff-level view and says so).
 */
export function analysePatchTree(patchPath, repo = repoRoot()) {
  const base = mkdtempSync(join(tmpdir(), 'sr-prose-'));
  const patched = mkdtempSync(join(tmpdir(), 'sr-prose-'));
  try {
    const tar = execFileSync('git', ['archive', 'HEAD'], { cwd: repo, maxBuffer: 1 << 28 });
    execFileSync('tar', ['-x', '-C', base], { input: tar, maxBuffer: 1 << 28 });
    cpSync(base, patched, { recursive: true });
    let applyRc = 0;
    let applyErr = '';
    try {
      execFileSync('git', ['apply', '-p1', '-v', patchPath], { cwd: patched, stdio: ['ignore', 'pipe', 'pipe'] });
    } catch (e) {
      applyRc = e.status ?? 1;
      applyErr = String(e.stderr || e.message || '').split('\n').slice(0, 4).join(' | ');
    }
    if (applyRc !== 0) {
      // Try a deeper strip: some patch writers emit a/a/ b/b/ prefixes.
      try {
        execFileSync('git', ['apply', '-p2', '-v', patchPath], { cwd: patched, stdio: ['ignore', 'pipe', 'pipe'] });
        applyRc = 0;
        applyErr = '';
      } catch {
        return { applied: false, apply_error: applyErr || `git apply rc=${applyRc}` };
      }
    }
    const recs = parseDiff(readFileSync(patchPath, 'utf8'));
    const byPath = new Map(recs.filter((r) => r.path).map((r) => [r.path, r]));
    const targets = recs.map((r) => r.path).filter(Boolean);
    const files = [];
    for (const t of targets) {
      if (!isContentPath(t)) {
        const rec = byPath.get(t) || { added: [], removed: [] };
        files.push({
          path: t,
          status: 'NOT_A_CONTENT_FILE',
          prose_authored: 0,
          prose_deleted: 0,
          prose_moved: 0,
          lines_added: rec.added.length,
          lines_removed: rec.removed.length,
        });
        continue;
      }
      const bFile = join(base, t);
      const pFile = join(patched, t);
      if (!existsSync(bFile) || !existsSync(pFile)) {
        files.push({ path: t, status: 'MISSING_IN_TREE', prose_authored: 0, prose_deleted: 0, prose_moved: 0 });
        continue;
      }
      const a = proseSequence(readFileSync(bFile, 'utf8'));
      const b = proseSequence(readFileSync(pFile, 'utf8'));
      const lcs = lcsLength(a, b);
      const { onlyA, onlyB } = multisetDiff(a, b);
      const moved = a.length - lcs;
      let status = 'UNCHANGED';
      if (onlyB.length || onlyA.length) status = 'PROSE_CHANGED';
      else if (moved > 0) status = 'RELOCATED';
      files.push({
        path: t,
        status,
        prose_lines_before: a.length,
        prose_lines_after: b.length,
        prose_authored: onlyB.length,
        prose_deleted: onlyA.length,
        prose_moved: moved,
        authored_samples: onlyB.slice(0, 2),
        deleted_samples: onlyA.slice(0, 2),
      });
    }
    const sum = (k) => files.reduce((n, f) => n + (f[k] || 0), 0);
    const contentFiles = files.filter((f) => f.status !== 'NOT_A_CONTENT_FILE').length;
    return {
      applied: true,
      files: files.length,
      content_files: contentFiles,
      prose_applicable: contentFiles > 0,
      code_lines_changed: files
        .filter((f) => f.status === 'NOT_A_CONTENT_FILE')
        .reduce((n, f) => n + (f.lines_added || 0) + (f.lines_removed || 0), 0),
      prose_authored: sum('prose_authored'),
      prose_deleted: sum('prose_deleted'),
      prose_moved: sum('prose_moved'),
      files_relocated: files.filter((f) => f.status === 'RELOCATED').length,
      files_changed: files.filter((f) => f.status === 'PROSE_CHANGED').length,
      files_unchanged: files.filter((f) => f.status === 'UNCHANGED').length,
      structural_only:
        contentFiles > 0 && sum('prose_authored') === 0 && sum('prose_deleted') === 0,
      detail: files.filter((f) => f.status !== 'UNCHANGED'),
    };
  } finally {
    rmSync(base, { recursive: true, force: true });
    rmSync(patched, { recursive: true, force: true });
  }
}

function printTree(r, label) {
  console.log(`\ntree-level: ${label}`);
  if (!r.applied) {
    console.log(`  PATCH DID NOT APPLY TO HEAD — no file-level verdict: ${r.apply_error}`);
    return;
  }
  console.log(
    `  files: ${r.files}   prose authored: ${r.prose_authored}   prose deleted: ${r.prose_deleted}   prose MOVED: ${r.prose_moved} (in ${r.files_relocated} file(s))`,
  );
  console.log(
    `  files unchanged: ${r.files_unchanged}   files relocated: ${r.files_relocated}   files with prose changed: ${r.files_changed}`,
  );
  if (!r.prose_applicable) {
    console.log(
      `  VERDICT: NOT-A-CONTENT-FILE — the prose gate is NOT applicable here (${r.code_lines_changed} code line(s) changed)`,
    );
  }
  for (const f of r.detail.slice(0, 10)) {
    console.log(`    ${f.path}  [${f.status}]`);
    if (f.prose_moved) console.log(`      moved ${f.prose_moved} prose line(s) to a new position (same text)`);
    for (const s of f.authored_samples || []) console.log(`      + ${s.slice(0, 150)}`);
    for (const s of f.deleted_samples || []) console.log(`      - ${s.slice(0, 150)}`);
  }
  if (r.detail.length > 10) console.log(`    ... and ${r.detail.length - 10} more`);
}

function printReport(r) {
  const tag = !r.prose_applicable
    ? 'NOT-A-CONTENT-FILE — prose gate NOT applicable (code only)'
    : r.structural_only
      ? 'STRUCTURAL-ONLY'
      : 'PROSE CHANGED — NOT structural-only';
  console.log(`\npatch: ${r.patch}`);
  console.log(
    `  files: ${r.files}  content_files: ${r.content_files}  headings_changed: ${r.headings_changed}`,
  );
  if (!r.prose_applicable) {
    console.log(`  code lines changed: ${r.code_lines_changed}  (prose not applicable)`);
  }
  console.log(
    `  prose authored: ${r.prose_authored}   prose deleted: ${r.prose_deleted}   prose relocated: ${r.prose_relocated} (in ${r.files_with_relocation} file(s))`,
  );
  console.log(`  VERDICT: ${tag}`);
  for (const f of r.detail.slice(0, 12)) {
    console.log(`    ${f.path}`);
    if (f.prose_relocated) console.log(`      relocated ${f.prose_relocated} prose line(s) — same text, new position`);
    if (f.prose_authored) {
      console.log(`      AUTHORED ${f.prose_authored}:`);
      for (const s of f.authored_samples) console.log(`        + ${s.slice(0, 150)}`);
    }
    if (f.prose_deleted) {
      console.log(`      DELETED ${f.prose_deleted}:`);
      for (const s of f.deleted_samples) console.log(`        - ${s.slice(0, 150)}`);
    }
  }
  if (r.detail.length > 12) console.log(`    ... and ${r.detail.length - 12} more file(s) with prose changes`);
}

function selftest() {
  const cases = [
    {
      name: 'heading-only demotion is structural',
      diff: '--- a/src/content/notes/t/t-001.md\n+++ b/src/content/notes/t/t-001.md\n@@ -1,2 +1,2 @@\n-## Old title\n+#### New title\n',
      expect: { structural_only: true, prose_applicable: true, authored: 0, deleted: 0, relocated: 0 },
    },
    {
      name: 'a word edit is prose authored + deleted',
      diff: '--- a/src/content/notes/t/t-001.md\n+++ b/src/content/notes/t/t-001.md\n@@ -1,1 +1,1 @@\n-Interest is charged each period.\n+Interest is charged every period.\n',
      expect: { structural_only: false, prose_applicable: true, authored: 1, deleted: 1, relocated: 0 },
    },
    {
      name: 'a moved paragraph is a RELOCATION, not an edit',
      diff: '--- a/src/content/notes/t/t-001.md\n+++ b/src/content/notes/t/t-001.md\n@@ -1,3 +1,3 @@\n-Para one.\n Para two.\n+Para one.\n',
      expect: { structural_only: true, prose_applicable: true, authored: 0, deleted: 0, relocated: 1 },
    },
    {
      name: 'a deleted paragraph is prose deleted',
      diff: '--- a/src/content/notes/t/t-001.md\n+++ b/src/content/notes/t/t-001.md\n@@ -1,2 +1,1 @@\n Keep this.\n-Drop this.\n',
      expect: { structural_only: false, prose_applicable: true, authored: 0, deleted: 1, relocated: 0 },
    },
    {
      name: 'a whitespace-only prose change is still a prose change',
      diff: '--- a/src/content/notes/t/t-001.md\n+++ b/src/content/notes/t/t-001.md\n@@ -1,1 +1,1 @@\n-Interest is charged each period.\n+Interest is charged each period. \n',
      expect: { structural_only: false, prose_applicable: true, authored: 1, deleted: 1, relocated: 0 },
    },
    {
      name: 'a move PLUS a word edit is not hidden by the move',
      diff: '--- a/src/content/notes/t/t-001.md\n+++ b/src/content/notes/t/t-001.md\n@@ -1,3 +1,3 @@\n-Para one.\n-Para two.\n+Para one.\n+Para three.\n',
      expect: { structural_only: false, prose_applicable: true, authored: 1, deleted: 1, relocated: 0 },
    },
    {
      name: 'blank lines and rules are not prose',
      diff: '--- a/src/content/notes/t/t-001.md\n+++ b/src/content/notes/t/t-001.md\n@@ -1,3 +1,4 @@\n-## T\n+### T\n+\n+---\n',
      expect: { structural_only: true, prose_applicable: true, authored: 0, deleted: 0, relocated: 0 },
    },
    {
      name: 'a SCRIPT patch is not prose-bearing (code is not prose)',
      diff: '--- a/scripts/check-foo.mjs\n+++ b/scripts/check-foo.mjs\n@@ -1,1 +1,2 @@\n const x = 1;\n+const y = 2;\n',
      expect: { structural_only: false, prose_applicable: false, authored: 0, deleted: 0, relocated: 0 },
    },
    {
      name: 'a markdown file outside src/content is not prose either',
      diff: '--- a/README.md\n+++ b/README.md\n@@ -1,1 +1,2 @@\n Hello there.\n+Goodbye there.\n',
      expect: { structural_only: false, prose_applicable: false, authored: 0, deleted: 0, relocated: 0 },
    },
  ];
  let pass = 0;
  let total = cases.length;
  for (const c of cases) {
    const recs = parseDiff(c.diff);
    const f = analyseFile(recs[0]);
    const got = {
      structural_only: f.content
        ? f.prose_authored === 0 && f.prose_deleted === 0
        : false,
      prose_applicable: f.content,
      authored: f.prose_authored,
      deleted: f.prose_deleted,
      relocated: f.prose_relocated,
    };
    const ok = JSON.stringify(got) === JSON.stringify(c.expect);
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${c.name}`);
    if (!ok) console.log(`      expected ${JSON.stringify(c.expect)} got ${JSON.stringify(got)}`);
    else pass++;
  }
  // --- patch-level controls: the FAILURE PREDICATE and the exit path -------
  // The file-level cases above cannot reach the exit path, and the exit path
  // is where the second defect lived: a script patch was reported as PROSE
  // CHANGED and exited 1 because the condition asked `!structural_only`
  // instead of "a CONTENT file's prose changed".
  const dir = mkdtempSync(join(tmpdir(), 'sr-prose-st-'));
  try {
    const mk = (name, body) => {
      const f = join(dir, name);
      writeFileSync(f, body);
      return f;
    };
    const patchChecks = [
      [
        'a script patch does not FAIL the prose gate',
        mk('script.diff', '--- a/scripts/check-foo.mjs\n+++ b/scripts/check-foo.mjs\n@@ -1,1 +1,2 @@\n const x = 1;\n+const y = 2;\n'),
        false,
      ],
      [
        'a structural content patch does not FAIL the prose gate',
        mk('structural.diff', '--- a/src/content/notes/t/t-001.md\n+++ b/src/content/notes/t/t-001.md\n@@ -1,1 +1,1 @@\n-## Old\n+#### New\n'),
        false,
      ],
      [
        'a content patch that edits prose FAILS the prose gate',
        mk('prose.diff', '--- a/src/content/notes/t/t-001.md\n+++ b/src/content/notes/t/t-001.md\n@@ -1,1 +1,1 @@\n-Interest is charged each period.\n+Interest is charged every period.\n'),
        true,
      ],
    ];
    for (const [name, file, want] of patchChecks) {
      const got = proseGateFailure(analysePatch(file));
      const ok = got === want;
      console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`);
      if (!ok) console.log(`      expected failure=${want} got ${got}`);
      else pass++;
      total++;
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }

  console.log(`\n${pass}/${total} controls passed`);
  return pass === total ? 0 : 1;
}

const argv = process.argv.slice(2);
if (argv.includes('--selftest')) {
  process.exit(selftest());
}
if (!argv.length) {
  console.error('usage: node scripts/sr-prose-integrity.mjs <patch.diff> [...] | --json | --selftest');
  process.exit(2);
}
const asJson = argv.includes('--json');
const withTree = argv.includes('--tree');
const repoArgIdx = argv.indexOf('--repo');
const repo = repoArgIdx >= 0 ? argv[repoArgIdx + 1] : undefined;
const paths = argv.filter((a, i) => !a.startsWith('--') && !(repoArgIdx >= 0 && i === repoArgIdx + 1));
if (!paths.length) {
  console.error('usage: node scripts/sr-prose-integrity.mjs <patch.diff> [...] | --json | --tree | --selftest');
  process.exit(2);
}
const results = [];
for (const p of paths) {
  if (!existsSync(p)) {
    console.error(`patch not found: ${p}`);
    process.exit(2);
  }
  const r = analysePatch(p);
  if (withTree) r.tree = analysePatchTree(p, repo);
  results.push(r);
}
/**
 * Does this patch FAIL the prose gate?
 *
 * The failure condition is "a CONTENT file's prose was authored or deleted".
 * A patch that touches no content file has no prose question, so it cannot
 * fail it - and saying otherwise would report a gate script as an AdSense
 * originality problem. This was the first defect the content-awareness change
 * exposed: the exit path still asked `!structural_only`, and a script patch
 * was reported as PROSE CHANGED and exited 1.
 */
export function proseGateFailure(result) {
  const diff = result.prose_applicable &&
    (result.prose_authored > 0 || result.prose_deleted > 0);
  const tree = result.tree && result.tree.applied && result.tree.prose_applicable &&
    (result.tree.prose_authored > 0 || result.tree.prose_deleted > 0);
  return Boolean(diff || tree);
}

/** Is the prose gate even applicable to this patch? */
export function proseGateApplicable(result) {
  return Boolean(
    result.prose_applicable || (result.tree && result.tree.applied && result.tree.prose_applicable),
  );
}

if (asJson) {
  console.log(JSON.stringify({ tool: 'sr-prose-integrity', results }, null, 2));
} else {
  for (const r of results) {
    printReport(r);
    if (r.tree) printTree(r.tree, r.patch);
  }
  const worst = results.some(proseGateFailure);
  const applicable = results.some(proseGateApplicable);
  console.log(
    `\n${results.length} patch(es) analysed; overall: ${
      worst ? 'PROSE CHANGED' : applicable ? 'ALL STRUCTURAL-ONLY' : 'PROSE NOT APPLICABLE (no content file)'
    }`,
  );
}
process.exit(results.some(proseGateFailure) ? 1 : 0);
