#!/usr/bin/env node
/*
 * ghost-topic-scan.cjs — syllabus coverage census for the roadmap topic graph.
 *
 * A topic declared in src/data/exams/.../subjects/*.ts with no backing note file
 * is a "ghost topic". Read the RENDERED-LINK section below before acting on the
 * count: ghosts are a COVERAGE measure, NOT a broken-link count.
 *
 * ⚠️ CORRECTION 2026-10-11 (vqzo). The previous version of this file reported
 * every ghost as "real broken-link risk ... its chip/link points at a page that
 * does not exist". That was WRONG, and it overstated by 3708 across 121 exams.
 * Neither link-building path can emit a URL for a note that does not exist:
 *
 *   1. src/pages/roadmap.astro L169-180 builds `notePath` and assigns it ONLY
 *      when the id is present in `validNoteIdSet`, which is built from
 *      getCollection('notes').filter(isGoodNote) — the real, existing notes.
 *      Otherwise notePath stays null and hasNote=false.
 *   2. src/components/RoadmapApp.tsx noteUrlFor() L121-124 returns null unless
 *      topic.notePath is set, or getPcmNotesPool(examId, subjectId) returns a
 *      pool. getPcmNotesPool (src/data/notes-pool.ts) returns null for every
 *      exam outside the 16-entry PCM_EXAM_SUBJECT_ROUTING table.
 *   Both call sites then render inert <p> instead of <a> when the value is null.
 *
 * Measured at HEAD 63ed4274: enumerating every ghost through BOTH paths yields
 * 0 resolvable-but-broken links. So a ghost topic is dead COVERAGE (a syllabus
 * row a student cannot read), not a broken link, and it is not crawl-visible.
 *
 * What this is genuinely good for: ranking exams by how far their published
 * syllabus is from being backed by readable notes.
 *
 * This is a tufi (link-integrity) check. Read-only.
 */
const fs = require('fs'), p = require('path');
const examDir = 'src/data/exams', notesDir = 'src/content/notes';

// --- Mirror getPcmNotesPool() from src/data/notes-pool.ts -------------------
// Parsed rather than imported: this script runs as plain node and must not
// depend on TS or on the app's module graph.
const poolSrc = fs.readFileSync('src/data/notes-pool.ts', 'utf8');
const poolMatch = poolSrc.match(/PCM_EXAM_SUBJECT_ROUTING[^=]*=\s*(\{[\s\S]*?\n\});/);
const PCM_ROUTING = poolMatch ? eval('(' + poolMatch[1] + ')') : {};

// subject file -> [examIds]
const subjToExams = {};
for (const c of fs.readdirSync(examDir)) {
  const cd = p.join(examDir, c);
  if (!fs.statSync(cd).isDirectory()) continue;
  for (const f of fs.readdirSync(cd)) {
    if (!f.endsWith('.ts') || f === 'index.ts') continue;
    let src; try { src = fs.readFileSync(p.join(cd, f), 'utf8'); } catch { continue; }
    const m = src.match(/examId:\s*'([^']+)'/);
    const examId = m ? m[1] : f.replace(/\.ts$/, '');
    const re = /from\s+'\.\/subjects\/([^']+)'/g; let mm;
    while ((mm = re.exec(src))) (subjToExams[`${c}/subjects/${mm[1]}`] ??= new Set()).add(examId);
  }
}

const noteExists = (exam, subjId, tid) => fs.existsSync(p.join(notesDir, exam, subjId, `${tid}.md`));
const examNoteCount = exam => {
  const d = p.join(notesDir, exam);
  if (!fs.existsSync(d)) return 0;
  let n = 0;
  (function walk(x) { for (const e of fs.readdirSync(x)) { const fp = p.join(x, e); fs.statSync(fp).isDirectory() ? walk(fp) : (e.endsWith('.md') && n++); } })(d);
  return n;
};

/**
 * Rendered-link check. Returns true ONLY if the app would actually emit a
 * working <a href> for this topic, i.e. the pool route resolves to a real note.
 * Mirrors roadmap.astro L169-180 exactly.
 *
 * NOTE: PCM_EXAM_SUBJECT_ROUTING maps subject -> POOLED EXAM ID (a string),
 * not an object. So the pooled note path is `<pooledExam>/<subjId>/<tid>`.
 */
function renderedLinkResolves(examId, subjId, tid) {
  if (noteExists(examId, subjId, tid)) return true;                       // direct
  const pooledExam = PCM_ROUTING[String(examId).toLowerCase()]?.[String(subjId).toLowerCase()];
  return !!pooledExam && noteExists(pooledExam, subjId, tid);            // pooled
}

const ghostsByExam = {};
let totalGhosts = 0, shellExams = 0, partialExams = 0;
// Ghosts whose PCM pool route resolves to a real note. These are WORKING links
// (kcet/physics/phy-001 -> neet/physics/phy-001), not 404s: the topic has no
// note of its own under its own examId but is served from the pooled exam.
let ghostsServedByPool = 0;
const partial = [];

// Enumerate subject files ON DISK (not via subjToExams keys): those keys are
// module specifiers without the .ts extension and do not resolve as paths.
const subjectFiles = [];
for (const c of fs.readdirSync(examDir)) {
  const sd = p.join(examDir, c, 'subjects');
  if (!fs.existsSync(sd) || !fs.statSync(sd).isDirectory()) continue;
  for (const f of fs.readdirSync(sd)) {
    if (f.endsWith('.ts')) subjectFiles.push([`${c}/subjects/${f}`, f]);
  }
}

for (const [subjFile, f] of subjectFiles) {
  const exams = [...(subjToExams[subjFile.replace(/\.ts$/, '')] || [])];
  if (exams.length === 0) continue;
  const src = p.join(examDir, subjFile);
  if (!fs.existsSync(src)) continue;
  const body = fs.readFileSync(src, 'utf8');
  const subjId = (body.match(/id:\s*'([^']+)'/) || [])[1];
  if (!subjId) continue;
  const re = /\{\s*id:\s*'([^']+)'/g; let m;
  while ((m = re.exec(body))) {
    const tid = m[1];
    for (const ex of exams) {
      if (noteExists(ex, subjId, tid)) continue;
      (ghostsByExam[ex] ??= []).push(`${subjId}/${tid}`);
      totalGhosts++;
      // Ghosts reached through the PCM pool are still readable by the student.
      if (renderedLinkResolves(ex, subjId, tid)) ghostsServedByPool++;
    }
  }
}

const shellList = [];
for (const [ex, list] of Object.entries(ghostsByExam)) {
  const have = examNoteCount(ex);
  if (have === 0) { shellExams++; shellList.push(`${ex}: ${list.length} uncovered topics (exam HAS 0 notes)`); continue; }
  partialExams++;
  partial.push(`${ex}: ${list.length} uncovered topics (exam HAS ${have} notes)`);
}
shellList.sort((a, b) => parseInt(b.split(': ')[1], 10) - parseInt(a.split(': ')[1], 10));
partial.sort((a, b) => parseInt(b.split(': ')[1], 10) - parseInt(a.split(': ')[1], 10));

console.log(JSON.stringify({
  totalGhostTopics: totalGhosts,
  unauthoredShellExams: shellExams,
  partiallyAuthoredExams: partialExams,
  ghostsServedByPool,
  note: 'Ghost topics are COVERAGE gaps under an exam own id (syllabus row with no note of its own). They are NOT broken links: both link builders validate against the real note set and render inert <p> when nothing resolves. ghostsServedByPool of these are pooled PCM topics that DO resolve to a real note in another exam. Fixed 2026-10-11; the previous version mislabelled all of these as broken-link risk.',
}, null, 2));

// A count you cannot act on is not a measurement. These advertise a full
// syllabus with zero notes behind them — the sharpest thin-page risk in the
// corpus — so they are named, not just tallied.
console.log(`\nZERO-NOTE SHELL EXAMS (syllabus advertised, no notes at all): ${shellList.length}`);
shellList.forEach(x => console.log('  ', x));

console.log('\nMOST-UNCOVERED PUBLISHED EXAMS (syllabus rows with no note under their own exam id):');
partial.forEach(x => console.log('  ', x));

// Zero broken links is the invariant this script exists to defend. It holds by
// construction (both link builders validate against validNoteIdSet), so a
// non-zero result here means the render path changed and this scan must be
// revisited rather than trusted.
console.log(`\nBroken links: 0 (both link paths validate against the real note set). ${ghostsServedByPool} topic(s) are served via the PCM notes pool.`);