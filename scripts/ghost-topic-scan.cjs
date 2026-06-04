#!/usr/bin/env node
/*
 * ghost-topic-scan.cjs — Internal-link integrity for the roadmap topic graph.
 *
 * RoadmapApp.tsx renders each subject topic as a chip that links to its note
 * ("Open notes for <name>"). A topic declared in src/data/exams/.../subjects/*.ts
 * with NO backing note file (notes/<exam>/<subjectId>/<topicId>.md) is a "ghost
 * topic": its chip/link points at a page that does not exist -> a latent internal
 * 404 for any exam that is actually published/indexed.
 *
 * This is a tufi (link-integrity) check. Output groups ghosts by exam and marks
 * which exams have ZERO notes at all (unauthored shells — expected, low priority)
 * vs. exams that DO have notes but are missing some (real broken-link risk — fix
 * by authoring the note or removing the topic from the subject file).
 *
 * Read-only.
 */
const fs = require('fs'), p = require('path');
const examDir = 'src/data/exams', notesDir = 'src/content/notes';

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

const ghostsByExam = {};
for (const c of fs.readdirSync(examDir)) {
  const sd = p.join(examDir, c, 'subjects');
  if (!fs.existsSync(sd)) continue;
  for (const f of fs.readdirSync(sd)) {
    if (!f.endsWith('.ts')) continue;
    const src = fs.readFileSync(p.join(sd, f), 'utf8');
    const subjId = (src.match(/id:\s*'([^']+)'/) || [])[1];
    const exams = [...(subjToExams[`${c}/subjects/${f.replace(/\.ts$/, '')}`] || [])];
    const re = /\{\s*id:\s*'([^']+)'/g; let m;
    while ((m = re.exec(src))) {
      const tid = m[1];
      for (const ex of exams) {
        if (!noteExists(ex, subjId, tid)) (ghostsByExam[ex] ??= []).push(`${subjId}/${tid}`);
      }
    }
  }
}

let totalGhosts = 0, shellExams = 0, partialExams = 0;
const partial = [];
for (const [ex, list] of Object.entries(ghostsByExam)) {
  totalGhosts += list.length;
  const have = examNoteCount(ex);
  if (have === 0) shellExams++;
  else { partialExams++; partial.push(`${ex}: ${list.length} ghost topics (exam HAS ${have} notes — real broken-link risk)`); }
}
console.log(JSON.stringify({ totalGhostTopics: totalGhosts, unauthoredShellExams: shellExams, partiallyAuthoredExams: partialExams }, null, 2));
console.log('\nPARTIALLY-AUTHORED EXAMS (priority — published exams with missing note links):');
partial.sort().forEach(x => console.log('  ', x));
