#!/usr/bin/env node
/*
 * check-exam-faq-keys.mjs — close the "patch hit the wrong FAQ key" blind spot.
 *
 * THE DEFECT THIS EXISTS FOR (queue row sr-20261019T0335Z, score 44000):
 *   src/data/exam-faqs.ts held two keys differing by one doubled letter —
 *   'cucet-pg' (live) and 'cuet-pg' (dead). Every grep-driven edit to this file
 *   matches exactly one of them, so a patch authored against the wrong key
 *   applies cleanly, passes check-scope.sh, passes check-astro-syntax.mjs, and
 *   changes nothing a reader ever sees. It false-passed a census.
 *
 *   The same class already false-passed a build earlier (the parse-gate defect
 *   filed at 0305Z). An instrument that cannot see its own target is worse than
 *   no instrument, because it manufactures confidence.
 *
 * WHAT THIS GATE DOES, per the row's recommended_instrument_change:
 *   (a) locate blocks by BYTE-COMPARED KEY EQUALITY. Keys are extracted as exact
 *       string literals and compared with ===. No substring match, no eyeball
 *       match, no regex that could stop one character early. This gate never
 *       performs the operation that caused the defect.
 *   (b) RE-IMPORT THE COMMITTED MODULE and assert the key set is visible through
 *       Object.keys(EXAM_FAQS) at runtime, not through the source text. A source
 *       grep proves the text was written; only the import proves the module
 *       still yields the key. Both are required to pass.
 *   (c) REFUSE "file greps as N and census dropped by N" as proof on its own.
 *       Static key count and runtime key count are reported side by side and must
 *       agree; where they cannot, the gate fails rather than picking a number.
 *
 * INVARIANTS
 *   1. no duplicate defined key              -> FAIL (silently shadows the earlier block)
 *   2. every alias target is a defined key   -> FAIL (a live key set to undefined)
 *   3. runtime keys == static keys           -> FAIL (requirement (b))
 *   4. no dead near-twin key                 -> FAIL (the cucet-pg/cuet-pg class)
 *   5. near-twin pairs where both are live   -> WARN (informational; real exams)
 *
 * BASELINE
 *   scripts/exam-faq-key-baseline.txt records pairs that are known-bad ON
 *   PURPOSE, so a pre-existing defect cannot pin this gate red forever and get
 *   it ignored. Same idiom as scripts/known-breach-baseline.txt. The gate
 *   REPORTS baselined pairs every run and excludes them from the fail set.
 *   Deleting a line re-arms the gate for that pair immediately — and a NEW
 *   dead twin never gets a free pass, which is the whole point.
 *
 * Usage:
 *   node scripts/check-exam-faq-keys.mjs           # verify (exit 1 on any FAIL)
 *   node scripts/check-exam-faq-keys.mjs --json    # machine-readable output
 *
 * Read-only. Never writes.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGET = path.join(ROOT, 'src/data/exam-faqs.ts');
const SRC = path.join(ROOT, 'src');
const JSON_OUT = process.argv.includes('--json');

const BASELINE = path.join(ROOT, 'scripts/exam-faq-key-baseline.txt');

const fails = [];
const warns = [];
let baselined = [];

/** Deliberate, recorded exceptions. One 'a b' pair per line, '#' comments. */
function readBaseline() {
  if (!fs.existsSync(BASELINE)) return new Set();
  return new Set(
    fs.readFileSync(BASELINE, 'utf8')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'))
      .map((l) => l.split(/\s+/).sort().join(' '))
  );
}

// ---------------------------------------------------------------- static parse

function readTarget() {
  if (!fs.existsSync(TARGET)) {
    fails.push({ code: 'TARGET_MISSING', detail: `not found: ${TARGET}` });
    return null;
  }
  return fs.readFileSync(TARGET, 'utf8');
}

/**
 * Extract key literals with byte equality, never substring.
 *
 * Two shapes are legal in this file:
 *   'key': [...]                      — key inside the object literal
 *   EXAM_FAQS['key'] = ...            — key in a later assignment
 *
 * The literal is captured whole, then unescaped. Comparison downstream is
 * always a === between two captured literals, which is the whole point: a
 * substring search for "cucet-pg" cannot tell us whether the block we edited
 * was the one the reader loads.
 */
function parseKeys(src) {
  const defined = [];   // keys declared by a literal block
  const aliases = [];   // { key, target } from EXAM_FAQS['a'] = EXAM_FAQS['b']

  const literal = String.raw`(['"])((?:\\.|(?!\1)[^\\])*)\1`;

  // Object-literal keys: a quote at start of line, indented, followed by ':'
  const keyRe = new RegExp(String.raw`^[ \t]*${literal}[ \t]*:`, 'gm');
  let m;
  while ((m = keyRe.exec(src)) !== null) {
    defined.push(unquote(m[2]));
  }

  // Assignments: EXAM_FAQS['a'] = [ ... ]   or   EXAM_FAQS['a'] = EXAM_FAQS['b'];
  const assignRe = new RegExp(
    String.raw`EXAM_FAQS\[${literal}\][ \t]*=[ \t]*(?:EXAM_FAQS\[${literal}\]|\[)`,
    'g'
  );
  while ((m = assignRe.exec(src)) !== null) {
    defined.push(unquote(m[2]));
    if (m[4] !== undefined) aliases.push({ key: unquote(m[2]), target: unquote(m[4]) });
  }

  return { defined, aliases };
}

function unquote(raw) {
  return raw.replace(/\\(.)/g, '$1');
}

// ------------------------------------------------------------------ near-twins

/** Levenshtein, bounded — keys are short, so the full matrix is cheap. */
function editDistance(a, b) {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(
        prev[j] + 1,
        cur[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
    prev = cur;
  }
  return prev[n];
}

/** Every consumer file under src/, as one blob, for liveness checks. */
function readConsumers() {
  const out = [];
  const walk = (dir) => {
    let ents;
    try { ents = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of ents) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (!/\.(ts|tsx|astro|mjs|cjs|js|jsx|mdx|md)$/.test(e.name)) continue;
      if (path.resolve(p) === TARGET) continue; // never count the module against itself
      try { out.push([p, fs.readFileSync(p, 'utf8')]); } catch { /* unreadable is not evidence */ }
    }
  };
  walk(SRC);
  return out;
}

/**
 * Is this key actually consumed? A key is live if some other source file refers
 * to it as an exact literal. Substring search is acceptable HERE — this is the
 * liveness test, and over-counting liveness only ever makes the gate more
 * conservative about what it calls dead.
 */
function isLive(key, consumers) {
  const needle = `'${key}'`;
  return consumers.some(([, text]) => text.includes(needle));
}

// ------------------------------------------------------------- runtime re-import

/**
 * Requirement (b). Import the committed module and read the key set off the
 * live object. If Node cannot load it, that is itself a finding — a module that
 * does not import cannot be proven to contain anything.
 */
async function runtimeKeys() {
  try {
    const mod = await import(pathToFileUrl(TARGET));
    const obj = mod.EXAM_FAQS;
    if (!obj || typeof obj !== 'object') {
      fails.push({ code: 'EXPORT_MISSING', detail: 'EXAM_FAQS did not export an object' });
      return null;
    }
    return Object.keys(obj);
  } catch (err) {
    fails.push({ code: 'IMPORT_FAILED', detail: String(err && err.message || err).slice(0, 300) });
    return null;
  }
}

function pathToFileUrl(p) {
  return new URL(`file://${p}`).href;
}

// ------------------------------------------------------------------------ main

const src = readTarget();
let report = { target: path.relative(ROOT, TARGET), staticKeys: 0, runtimeKeys: 0, fails, warns };

if (src !== null) {
  const { defined, aliases } = parseKeys(src);
  const staticSet = new Set(defined);

  // Invariant 1 — duplicate defined key.
  const seen = new Map();
  for (const k of defined) seen.set(k, (seen.get(k) || 0) + 1);
  for (const [k, c] of seen) {
    if (c > 1) fails.push({ code: 'DUPLICATE_KEY', detail: `'${k}' defined ${c}x` });
  }

  // Invariant 2 — alias target must exist.
  for (const a of aliases) {
    if (!staticSet.has(a.target)) {
      fails.push({ code: 'DANGLING_ALIAS', detail: `EXAM_FAQS['${a.key}'] = EXAM_FAQS['${a.target}'] but '${a.target}' is not defined` });
    }
  }

  const consumers = readConsumers();

  // Invariants 4 + 5 — near-twin analysis.
  const keys = [...staticSet].sort();
  const deadNearTwins = [];
  const liveTwins = [];
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const a = keys[i], b = keys[j];
      if (Math.abs(a.length - b.length) > 1) continue;
      if (editDistance(a, b) > 1) continue;
      const liveA = isLive(a, consumers), liveB = isLive(b, consumers);
      if (liveA && liveB) liveTwins.push([a, b]);
      else if (liveA !== liveB) deadNearTwins.push({ dead: liveA ? b : a, live: liveA ? a : b });
      else deadNearTwins.push({ dead: null, live: null, both: [a, b] });
    }
  }
  const baseline = readBaseline();
  // Name WHICH twin is dead. "At least one is never referenced" is not actionable:
  // it forced the 2026-10-19 09:45Z row to guess 'met' was superseded by 'mat',
  // which was wrong ('mat' is AIMA's exam; the real twin is 'manipal-met').
  // That guess reached a permanent file. The gate already computes liveness, so
  // report it instead of discarding it.
  for (const t of deadNearTwins) {
    const a = t.dead ?? t.both[0], b = t.live ?? t.both[1];
    const pair = [a, b].sort().join(' ');
    const detail = t.dead
      ? `'${a}' and '${b}' differ by one edit; '${t.dead}' is DEAD (no consumer file references it) and '${t.live}' is the live key. Delete the '${t.dead}' block; a grep for '${t.dead}' matches only the dead one.`
      : `'${a}' and '${b}' differ by one edit and NEITHER is referenced by any consumer file, so both are dead. Delete both blocks.`;
    if (baseline.has(pair)) {
      baselined.push(pair);
      warns.push({ code: 'BASELINED_DEAD_TWIN', detail: `${detail} (recorded in exam-faq-key-baseline.txt — fix it and delete the line to re-arm.)` });
    } else {
      fails.push({ code: 'DEAD_NEAR_TWIN', detail });
    }
  }
  if (liveTwins.length) {
    warns.push({
      code: 'LIVE_NEAR_TWINS',
      count: liveTwins.length,
      detail: `${liveTwins.length} near-twin pairs where both keys are referenced (distinct real exams). Lower risk than the dead-twin case; listed so a future dead key is recognisable.`,
    });
  }

  // Invariant 3 — static vs runtime. Requirement (c): the two counts must agree
  // or the gate fails. It does not pick a winner.
  const rt = await runtimeKeys();
  if (rt) {
    const rtSet = new Set(rt);
    if (rtSet.size !== staticSet.size) {
      fails.push({
        code: 'KEYSET_DISAGREEMENT',
        detail: `static parse sees ${staticSet.size} keys, committed module exports ${rtSet.size}. Do not accept a grep count as proof — reconcile the two.`,
      });
    }
    for (const k of staticSet) {
      if (!rtSet.has(k)) fails.push({ code: 'STATIC_ONLY', detail: `'${k}' parsed from source but absent from the imported module` });
    }
    for (const k of rtSet) {
      if (!staticSet.has(k)) fails.push({ code: 'RUNTIME_ONLY', detail: `'${k}' present in the imported module but not parsed from source` });
    }
    report.runtimeKeys = rtSet.size;
  }

  report.staticKeys = staticSet.size;
  report.aliases = aliases.length;
  report.baselined = baselined;
}

// ---------------------------------------------------------------------- output

if (JSON_OUT) {
  console.log(JSON.stringify({ ...report, ok: fails.length === 0 }, null, 2));
} else {
  console.log(`check-exam-faq-keys: ${report.staticKeys} static keys, ${report.runtimeKeys} runtime keys`);
  for (const w of warns) console.log(`WARN  ${w.code}: ${w.detail}`);
  for (const f of fails) console.log(`FAIL  ${f.code}: ${f.detail}`);
  console.log(fails.length ? `FAILED (${fails.length})` : 'OK');
}

process.exit(fails.length ? 1 : 0);
