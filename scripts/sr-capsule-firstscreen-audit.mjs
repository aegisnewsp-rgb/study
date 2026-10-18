#!/usr/bin/env node
/**
 * sr-capsule-firstscreen-audit.mjs
 *
 * Control for the `incomplete_first_screen_fix` defect class
 * (queue row sr-20261017-2035Z, commit d87b1fff / 6bc0491c).
 *
 * THE DEFECT:
 *   src/pages/exams/[exam].astro:234 builds the answer capsule from
 *     firstSentence(exam.examPattern), using firstSentence(exam.description)
 *     ONLY as a fallback when examPattern is empty.
 *   So an edit to `description` can ship, pass check-scope.sh, pass
 *   check-astro-syntax.mjs, and receive a green curate receipt while the
 *   rendered first screen is byte-for-byte unchanged. Gate success is not
 *   first-screen success.
 *
 * WHAT THIS DOES:
 *   Reconstructs the rendered capsule string for every exam hub, then flags
 *   hubs whose capsule (from examPattern) asserts a count that the same file's
 *   description/eligibility contradict. Disjoint value sets for one unit in the
 *   rendered field vs a visible field = the reader sees two different numbers.
 *
 * WHAT THIS DOES NOT DO:
 *   It does not judge which number is right. It reports the collision so a
 *   human or a sourced-correction lane resolves it. Never auto-edits.
 *
 * HONESTY RULES baked in (the board's recurring instrument failure is reporting
 * "absent" when the probe simply failed to parse):
 *   - parse failures are counted and printed. A high unparsed count means the
 *     result is NOT a clean bill of health.
 *   - a negative-control sentinel is asserted: the matcher must find a claim it
 *     planted. If it cannot, it reports the control FAILED and exits non-zero.
 *
 * Usage: node scripts/sr-capsule-firstscreen-audit.mjs [--json]
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const EXAMS_DIR = join(ROOT, 'src/data/exams');

/* ------------------------------------------------------------------ *
 * Ported verbatim from src/pages/exams/[exam].astro (L227-L240).
 * If that template changes, re-check this block; it is a copy on purpose
 * so the audit needs no build and no dev server.
 * ------------------------------------------------------------------ */
const squash = (s) => s.replace(/\s+/g, ' ').trim();
function firstSentence(s) {
  const t = squash(s);
  const m = t.match(/^.{20,}?[.!?](?=\s|$)/);
  return (m ? m[0] : t).trim();
}
function renderedCapsuleBase(examName, pattern, description) {
  const pat = pattern ? firstSentence(pattern) : '';
  if (pat) {
    const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = [];
    const re = /\(([^)]*)\)|([^()]+)/g;
    let m;
    while ((m = re.exec(examName)) !== null) {
      if (m[1] !== undefined) {
        const t = m[1].trim();
        if (t) parts.push({ opt: true, text: t });
      } else {
        const t = m[2].trim();
        if (t) parts.push({ opt: false, text: t });
      }
    }
    const nameRe = parts
      .map((p) => {
        const body = esc(p.text).replace(/\s+/g, '\\s+');
        return p.opt ? `(?:\\s*\\(?\\s*${body}\\s*\\)?)?` : body;
      })
      .join('\\s*');
    const coreRe = nameRe ? new RegExp(`^${nameRe}`, 'i') : null;
    if (coreRe && coreRe.test(pat)) {
      return pat.replace(coreRe, () => `${examName} <YEAR> `).replace(/\s+/g, ' ').trim();
    }
    return `${examName} <YEAR>: ${pat}`;
  }
  return description ? `${examName} <YEAR>: ${firstSentence(description)}` : '';
}

/* ------------------------------------------------------------------ *
 * Count-claim extraction.
 * ------------------------------------------------------------------ */
const WORD_NUMBERS = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8,
  nine: 9, ten: 10, eleven: 11, twelve: 12,
};

// Units whose count is a user-facing fact an applicant checks. Longest-first at
// build time so "questions" wins over "question"-style prefixes.
const UNITS = [
  'questions', 'subjects', 'sections', 'candidates', 'attempts', 'credits',
  'minutes', 'marks', 'papers', 'hours', 'slots', 'items', 'tests',
].sort((a, b) => b.length - a.length);

const NUM_TOKEN = String.raw`\d{1,4}(?:\.\d+)?|\b(?:${Object.keys(WORD_NUMBERS).join('|')})\b`;

// Up to 3 intervening words between the number and the unit noun, so real
// phrasing is matched: "4 compulsory core subjects", "3 or 4 elective papers".
// Without this the audit is blind to the exact WASSCE phrasing it was written for.
const CLAIM_RE = new RegExp(
  String.raw`(${NUM_TOKEN})((?:\s+(?:or|to|[a-z][a-z-]{1,14})){0,3}?)\s+(${UNITS.join('|')})\b`,
  'gi',
);
const NUM_RE = new RegExp(NUM_TOKEN, 'gi');

/** unit -> Set<number> asserted anywhere in the string. */
function countClaims(text) {
  const out = new Map();
  if (!text) return out;
  for (const m of text.matchAll(CLAIM_RE)) {
    const unit = m[3].toLowerCase();
    const chunk = m[1] + m[2]; // the number and the words bridging to the noun
    const vals = new Set();
    for (const n of chunk.matchAll(NUM_RE)) {
      const v = /^\d/.test(n[0]) ? Number(n[0]) : WORD_NUMBERS[n[0].toLowerCase()];
      // A year is not a count of anything an applicant checks.
      if (!Number.isFinite(v) || (v >= 1900 && v <= 2100)) continue;
      vals.add(v);
    }
    if (!vals.size) continue;
    if (!out.has(unit)) out.set(unit, new Set());
    for (const v of vals) out.get(unit).add(v);
  }
  return out;
}

const setsDisjoint = (a, b) => {
  for (const v of a) if (b.has(v)) return false;
  return true;
};

/* ------------------------------------------------------------------ *
 * Field extraction from the exam data files.
 * ------------------------------------------------------------------ */
function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (e === 'subjects' || e === '_lib' || e === 'node_modules') continue;
      walk(p, acc);
    } else if (e.endsWith('.ts') && !e.endsWith('.d.ts')) {
      acc.push(p);
    }
  }
  return acc;
}

/** Reads a top-level string field: 'x', "x" or `x` (template with no ${}). */
function field(src, name) {
  const re = new RegExp(String.raw`^\s*${name}:\s*([\x27\x22])((?:\\.|(?!\1)[\s\S])*?)\1`, 'm');
  const m = src.match(re);
  if (!m) return null;
  let v = m[2];
  if (m[1] === '`') {
    if (v.includes('${')) return { __interp: true }; // cannot resolve statically
    return v;
  }
  return v.replace(/\\'/g, "'").replace(/\\n/g, ' ');
}

function examIdOf(src, path) {
  const m = src.match(/examId:\s*([\x27\x22])([\s\S]*?)\1/);
  if (m) return m[2];
  return relative(ROOT, path).replace(/^src\/data\/exams\//, '').replace(/\.ts$/, '');
}

/* ------------------------------------------------------------------ *
 * Negative control — proves the matcher can find a claim it planted.
 * ------------------------------------------------------------------ */
function negativeControl() {
  const planted = 'Core: 4 compulsory subjects plus 3 or 4 electives, so 7 or 8 papers in total.';
  const claims = countClaims(planted);
  const ok =
    claims.has('subjects') &&
    claims.has('papers') &&
    claims.get('subjects').has(4) &&
    claims.get('papers').has(8);
  return {
    passed: ok,
    seeded_input: planted,
    recovered: Object.fromEntries([...claims].map(([k, v]) => [k, [...v].sort()])),
    note: ok
      ? 'matcher recovers planted counts AND the intervening-adjective form ("4 compulsory subjects")'
      : 'MATCHER FAILED its own control — a zero-finding sweep below would be meaningless',
  };
}

/* ------------------------------------------------------------------ *
 * Positive control — proves a real contradiction is actually REPORTED.
 * A negative control alone only proves the matcher is not silent; it does
 * not prove the sweep would notice if the defect were present. Without this,
 * "CLEAN" is decoration. Both run through the same comparison function the
 * sweep uses, so a refactor that breaks detection breaks the control too.
 * ------------------------------------------------------------------ */
function compareFields(examId, file, renderedField, renderedScope, visibleFields) {
  const hits = [];
  const rendered = countClaims(renderedScope);
  if (!rendered.size) return hits;
  for (const [fieldName, text] of visibleFields) {
    if (!text) continue;
    const other = countClaims(firstSentence(text));
    for (const [unit, rVals] of rendered) {
      const oVals = other.get(unit);
      if (!oVals || !oVals.size) continue;
      if (setsDisjoint(rVals, oVals)) {
        hits.push({
          exam: examId,
          file,
          unit,
          rendered_field: renderedField,
          rendered_values: [...rVals].sort((a, b) => a - b),
          conflicts_with_field: fieldName,
          conflict_values: [...oVals].sort((a, b) => a - b),
          rendered_capsule_sentence: renderedScope,
          conflicting_sentence: firstSentence(text),
        });
      }
    }
  }
  return hits;
}

function positiveControl() {
  // Shaped exactly like the real defect: the rendered field and a visible
  // field disagree about how many core subjects the paper has.
  const pattern = 'Core: 3 subjects — English, Mathematics and Science.';
  const description = 'WASSCE is written in 4 compulsory core subjects.';
  const hits = compareFields('__control__', '__control__', 'examPattern', firstSentence(pattern), [
    ['description', description],
  ]);
  const ok =
    hits.length === 1 &&
    hits[0].unit === 'subjects' &&
    hits[0].rendered_values[0] === 3 &&
    hits[0].conflict_values[0] === 4;
  return {
    passed: ok,
    seeded_rendered: firstSentence(pattern),
    seeded_visible: description,
    reported: hits,
    note: ok
      ? 'sweep comparison reports a planted contradiction — so a zero-finding sweep means none found, not none detected'
      : 'POSITIVE CONTROL FAILED — the sweep cannot be trusted to report anything; "CLEAN" would be a false negative',
  };
}

/* ------------------------------------------------------------------ *
 * Sweep.
 * ------------------------------------------------------------------ */
const findings = [];
const unparsed = [];
const nonExamModules = [];
let files = 0;
let withPattern = 0;
let renderedFromDescription = 0;

for (const path of walk(EXAMS_DIR)) {
  files += 1;
  const src = readFileSync(path, 'utf8');
  const examName = field(src, 'examName');
  const pattern = field(src, 'examPattern');
  const description = field(src, 'description');
  const eligibility = field(src, 'eligibility');

  // index.ts / types.ts barrel + type modules are not exam hubs. Counted in
  // files but excluded from the hub total, so "unparsed" never reads as a
  // coverage gap it is not.
  if (/[/\\](index|types)\.ts$/.test(path)) {
    nonExamModules.push(relative(ROOT, path));
    continue;
  }
  if (examName == null || (pattern == null && description == null)) {
    unparsed.push(relative(ROOT, path));
    continue;
  }
  if (pattern != null) withPattern += 1;
  else renderedFromDescription += 1;

  const capsule = renderedCapsuleBase(examName, pattern ?? '', description ?? '');
  const renderedField = pattern ? 'examPattern' : 'description';

  // The capsule only shows firstSentence(examPattern) — narrow the rendered side
  // to that sentence so a contradiction further down the field is not reported
  // as a first-screen defect.
  const renderedScope = pattern ? firstSentence(pattern) : firstSentence(description ?? '');

  findings.push(
    ...compareFields(examIdOf(src, path), relative(ROOT, path), renderedField, renderedScope, [
      ['description', description],
      ['eligibility', eligibility],
    ]).map((h) => ({ ...h, capsule: capsule.slice(0, 220) })),
  );
}

const negative = negativeControl();
const positive = positiveControl();
const control = { passed: negative.passed && positive.passed, negative, positive };

const report = {
  ts: new Date().toISOString(),
  tool: 'sr-capsule-firstscreen-audit',
  defect_class: 'incomplete_first_screen_fix',
  source_row: 'sr-20261017-2035Z-vqzo-firstscreen-capsule-reads-exampattern-not-description',
  template_source: 'src/pages/exams/[exam].astro L114,L234-L240 (rendered_capsule_base is a verbatim port)',
  head: process.env.SR_HEAD || null,
  coverage: {
    files_walked: files,
    exam_hubs_audited: files - nonExamModules.length - unparsed.length,
    non_exam_modules_excluded: nonExamModules.length,
    non_exam_modules: nonExamModules,
    with_examPattern: withPattern,
    rendered_from_description_fallback: renderedFromDescription,
    unparsed: unparsed.length,
    unparsed_files: unparsed.slice(0, 20),
    unparsed_note:
      'unparsed counts only exam modules whose examName/pattern/description could not be read ' +
      'statically (interpolated template literal, unusual quoting). These hubs were NOT audited. ' +
      'A non-zero unparsed count on exam hubs invalidates any "clean" reading of this report; ' +
      'non-exam barrel/type modules are excluded separately and do NOT count against coverage.',
  },
  negative_control: control.negative,
  positive_control: control.positive,
  controls_passed: control.passed,
  contradictions_found: findings.length,
  findings: findings.sort((a, b) => b.rendered_values.length - a.rendered_values.length),
  verdict:
    !control.passed
      ? 'CONTROL_FAILED — matcher did not recover its own planted claims; do not trust these numbers'
      : unparsed.length > files * 0.1
        ? 'PARTIAL — >10% of hubs unparsed, absence of findings is not evidence of absence'
        : findings.length
          ? 'CONTRADICTIONS — one or more hubs render a count in the first screen that the same file contradicts'
          : 'CLEAN — no rendered-vs-visible count contradiction found in the audited set',
  scope_note:
    'Read-only. Reports collisions; never edits. Resolving one requires a sourced correction to the ' +
    'examPattern (what renders) AND the visible field, per row sr-20261017-2035Z.',
};

const asJson = process.argv.includes('--json');
console.log(asJson ? JSON.stringify(report, null, 2) : [
  `sr-capsule-firstscreen-audit  ${report.ts}`,
  `walked=${files} hubs=${files - nonExamModules.length - unparsed.length} nonExam=${nonExamModules.length} withExamPattern=${withPattern} descFallback=${renderedFromDescription} unparsed=${unparsed.length}`,
  `negative_control=${control.negative.passed ? 'PASS' : 'FAIL'}`,
  `positive_control=${control.positive.passed ? 'PASS' : 'FAIL'}`,
  `contradictions=${findings.length}`,
  `verdict=${report.verdict}`,
  ...findings.map(
    (f) =>
      `  ${f.exam}: ${f.unit} renders ${JSON.stringify(f.rendered_values)} in ${f.rendered_field}` +
      ` but ${JSON.stringify(f.conflict_values)} in ${f.conflicts_with_field}`,
  ),
].join('\n'));

process.exit(control.passed ? 0 : 2);