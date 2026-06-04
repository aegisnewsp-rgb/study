#!/usr/bin/env node
/*
 * subject-name-scan.cjs — Title-integrity audit for SUBJECT DATA FILES.
 *
 * Companion to title-body-scan.mjs / placeholder-heading-scan.mjs (which scan NOTE
 * frontmatter). This scans the other rendered source of topic labels:
 *   src/data/exams/<country>/subjects/<subject>.ts  ->  topics[].name
 * which is rendered user-facing in RoadmapApp.tsx (topic chip + aria-label) and
 * exams/[exam]/[spoke].astro. A `name: 'Topic N'` placeholder ships a generic,
 * low-value label (and a "Open notes for Topic 4" aria-label) to production.
 *
 * Resolution: each subject file is imported by one or more exams; the real label
 * is the matching note's `topicName` (notes/<exam>/<subjectId>/<topicId>.md).
 * Topic ids are NOT globally unique, so resolution is per-(exam, subject, topic).
 *
 * Output: counts of total placeholders, resolvable (note has a real topicName),
 * noteMissing (ghost topic — no backing note; usually an unauthored exam shell),
 * and topicNamePlaceholder (note exists but its topicName is also a placeholder).
 *
 * Read-only. Use fix-subject-names.cjs to apply the resolvable substitutions.
 */
const fs = require('fs'), p = require('path');
const examDir = 'src/data/exams';

function buildSubjToExams() {
  const map = {};
  for (const c of fs.readdirSync(examDir)) {
    const cd = p.join(examDir, c);
    if (!fs.statSync(cd).isDirectory()) continue;
    for (const f of fs.readdirSync(cd)) {
      if (!f.endsWith('.ts') || f === 'index.ts') continue;
      let src; try { src = fs.readFileSync(p.join(cd, f), 'utf8'); } catch { continue; }
      const m = src.match(/examId:\s*'([^']+)'/);
      const examId = m ? m[1] : f.replace(/\.ts$/, '');
      const re = /from\s+'\.\/subjects\/([^']+)'/g; let mm;
      while ((mm = re.exec(src))) (map[`${c}/subjects/${mm[1]}`] ??= new Set()).add(examId);
    }
  }
  return map;
}

function buildNoteMap() {
  const map = {};
  (function walk(d) {
    for (const x of fs.readdirSync(d)) {
      const fp = p.join(d, x), st = fs.statSync(fp);
      if (st.isDirectory()) walk(fp);
      else if (x.endsWith('.md')) {
        const fm = (fs.readFileSync(fp, 'utf8').split('---')[1]) || '';
        const g = k => { const r = fm.match(new RegExp('^' + k + ':\\s*(.*)$', 'm')); return r ? r[1].trim().replace(/^"|"$/g, '') : ''; };
        const ex = g('exam'), su = g('subject'), to = g('topic'), tn = g('topicName');
        if (ex && su && to) map[`${ex}/${su}/${to}`] = tn;
      }
    }
  })('src/content/notes');
  return map;
}

const isPlaceholder = s => /^Topic \d+$/.test(s);

function main() {
  const subjToExams = buildSubjToExams();
  const noteMap = buildNoteMap();
  const stats = { total: 0, resolvable: 0, noteMissing: 0, topicNamePlaceholder: 0 };
  const examples = [];
  for (const c of fs.readdirSync(examDir)) {
    const sd = p.join(examDir, c, 'subjects');
    if (!fs.existsSync(sd)) continue;
    for (const f of fs.readdirSync(sd)) {
      if (!f.endsWith('.ts')) continue;
      const key = `${c}/subjects/${f.replace(/\.ts$/, '')}`;
      const src = fs.readFileSync(p.join(sd, f), 'utf8');
      const subjId = (src.match(/id:\s*'([^']+)'/) || [])[1] || null;
      const exams = [...(subjToExams[key] || [])];
      const re = /\{\s*id:\s*'([^']+)',\s*name:\s*'(Topic \d+)'/g; let m;
      while ((m = re.exec(src))) {
        stats.total++;
        const tid = m[1];
        let real = null, anyNote = false, anyPh = false;
        for (const ex of exams) {
          const tn = noteMap[`${ex}/${subjId}/${tid}`];
          if (tn !== undefined) { anyNote = true; if (isPlaceholder(tn)) anyPh = true; else if (!real) real = tn; }
        }
        if (real) { stats.resolvable++; if (examples.length < 10) examples.push(`${key} ${tid} -> ${real.slice(0, 64)}`); }
        else if (!anyNote) stats.noteMissing++;
        else if (anyPh) stats.topicNamePlaceholder++;
      }
    }
  }
  console.log(JSON.stringify(stats, null, 2));
  console.log('\nRESOLVABLE EXAMPLES:');
  examples.forEach(e => console.log('  ', e));
}
main();
