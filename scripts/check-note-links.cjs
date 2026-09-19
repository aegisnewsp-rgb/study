#!/usr/bin/env node
/*
 * check-note-links.cjs — guard against ORPHANED NOTES.
 *
 * Invariant: every note file at notes/{exam}/{subject}/{id}.md must be reachable
 * from at least one topic, where reachability means either
 *   (a) an exam with examId={exam} imports a subject file whose subject id is
 *       {subject} and which declares a topic with id={id}, or
 *   (b) some exam routes {subject} to the notes pool {exam} (PCM_EXAM_SUBJECT_ROUTING)
 *       and that exam's subject file declares a topic with id={id}.
 *
 * Why this exists: topic ids and note filenames are coupled (note URLs are
 * /notes/{exam}/{subject}/{topic.id}/). Renaming topic ids without renaming the
 * backing notes silently orphans the notes — the topic loses its "Read Study Note"
 * link and the note becomes unreachable. That happened in d4f4f16e (62 note links
 * across 8 exams) and nothing in the deploy gate caught it.
 *
 * A baseline of already-known unreachable notes is committed so this guard fails
 * only on NEW orphans, never on the pre-existing backlog.
 *
 * Usage:
 *   node scripts/check-note-links.cjs                  # verify (exit 1 on new orphans)
 *   node scripts/check-note-links.cjs --update-baseline # rewrite the baseline
 *   node scripts/check-note-links.cjs --json           # machine-readable output
 * Read-only unless --update-baseline is passed.
 */
const fs = require('fs'), p = require('path');

const ROOT = p.resolve(__dirname, '..');
const examDir = p.join(ROOT, 'src/data/exams');
const notesDir = p.join(ROOT, 'src/content/notes');
const baselinePath = p.join(ROOT, 'scripts/note-link-baseline.json');
const args = process.argv.slice(2);
const UPDATE = args.includes('--update-baseline');
const JSON_OUT = args.includes('--json');

// ---- subject file -> exams that import it, and the subject id it declares ----
const subjToExams = {};
for (const c of fs.readdirSync(examDir)) {
  const cd = p.join(examDir, c);
  if (!fs.statSync(cd).isDirectory()) continue;
  for (const f of fs.readdirSync(cd)) {
    if (!f.endsWith('.ts') || f === 'index.ts') continue;
    const src = fs.readFileSync(p.join(cd, f), 'utf8');
    const m = src.match(/examId:\s*'([^']+)'/);
    const examId = m ? m[1] : f.replace(/\.ts$/, '');
    const re = /from\s+'\.\/subjects\/([^']+)'/g;
    let mm;
    while ((mm = re.exec(src))) (subjToExams[`${c}/subjects/${mm[1]}`] ??= new Set()).add(examId);
  }
}

// ---- PCM pooling map, parsed from src/data/notes-pool.ts ----
const poolSrc = fs.readFileSync(p.join(ROOT, 'src/data/notes-pool.ts'), 'utf8');
const routing = {}; // examId -> { subjectId: poolExamId }
for (const line of poolSrc.split('\n')) {
  const m = line.match(/^\s*'?([a-z0-9\-]+)'?\s*:\s*\{([^}]*)\}/i);
  if (!m) continue;
  const exam = m[1];
  const inner = {};
  for (const kv of m[2].matchAll(/([a-z0-9\-]+)\s*:\s*'([^']+)'/gi)) inner[kv[1]] = kv[2];
  if (Object.keys(inner).length) routing[exam] = inner;
}

// ---- reachable note keys ----
const reachable = new Set();
for (const c of fs.readdirSync(examDir)) {
  const sd = p.join(examDir, c, 'subjects');
  if (!fs.existsSync(sd)) continue;
  for (const f of fs.readdirSync(sd)) {
    if (!f.endsWith('.ts')) continue;
    const src = fs.readFileSync(p.join(sd, f), 'utf8');
    const subjId = (src.match(/id:\s*'([^']+)'/) || [])[1];
    if (!subjId) continue;
    const exams = [...(subjToExams[`${c}/subjects/${f.replace(/\.ts$/, '')}`] || [])];
    const tids = [];
    for (const m of src.matchAll(/\{\s*id:\s*'([^']+)'/g)) tids.push(m[1]);
    for (const ex of exams) {
      for (const t of tids) reachable.add(`${ex}/${subjId}/${t}`);
      // pooled exams read notes from the pool dir, under the same subject id
      const pool = routing[ex] && routing[ex][subjId];
      if (pool) for (const t of tids) reachable.add(`${pool}/${subjId}/${t}`);
    }
  }
}

// ---- all note files, and which are unreachable ----
const all = [];
(function walk(d) {
  if (!fs.existsSync(d)) return;
  for (const e of fs.readdirSync(d)) {
    const fp = p.join(d, e);
    if (fs.statSync(fp).isDirectory()) walk(fp);
    else if (e.endsWith('.md')) all.push(fp);
  }
})(notesDir);

const unreachable = [];
for (const fp of all) {
  const rel = p.relative(notesDir, fp);
  const parts = rel.split(p.sep);
  if (parts.length < 3) continue;
  const key = `${parts[0]}/${parts[1]}/${p.basename(fp, '.md')}`;
  if (!reachable.has(key)) unreachable.push(key);
}
unreachable.sort();

const baseline = fs.existsSync(baselinePath)
  ? JSON.parse(fs.readFileSync(baselinePath, 'utf8'))
  : { unreachable: [] };
const base = new Set(baseline.unreachable || []);
const added = unreachable.filter(k => !base.has(k));
const fixed = [...base].filter(k => !unreachable.includes(k));

if (UPDATE) {
  fs.writeFileSync(baselinePath, JSON.stringify({
    note: 'Known unreachable notes. Regenerate deliberately with --update-baseline.',
    updated: new Date().toISOString().slice(0, 10),
    count: unreachable.length,
    unreachable,
  }, null, 2) + '\n');
  console.log(`baseline updated: ${unreachable.length} known unreachable notes`);
  process.exit(0);
}

if (JSON_OUT) {
  console.log(JSON.stringify({ notes: all.length, unreachable: unreachable.length, newOrphans: added, newlyReachable: fixed }, null, 2));
} else {
  console.log(`note files: ${all.length} | reachable topic keys: ${reachable.size}`);
  console.log(`unreachable notes: ${unreachable.length} (baseline ${base.size})`);
  if (fixed.length) console.log(`newly reachable since baseline: ${fixed.length}`);
  if (added.length) {
    console.log(`\nFAIL — ${added.length} NEW orphaned note(s):`);
    for (const k of added.slice(0, 40)) console.log(`   ${k}`);
    if (added.length > 40) console.log(`   ... +${added.length - 40} more`);
    console.log('\nA note was orphaned: its filename is not the id of any reachable topic.');
    console.log('If you renamed topic ids, rename the notes too (and their topic: frontmatter).');
    console.log('If this is intentional, run: node scripts/check-note-links.cjs --update-baseline');
  } else {
    console.log('OK — no new orphaned notes.');
  }
}
process.exit(added.length ? 1 : 0);
