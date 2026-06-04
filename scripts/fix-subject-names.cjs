#!/usr/bin/env node
/*
 * fix-subject-names.cjs — Apply resolvable subject-data topic-label fixes.
 *
 * For every `{ id: '<tid>', name: 'Topic N' }` in src/data/exams/<c>/subjects/*.ts,
 * substitute the real label taken from the matching note's `topicName`
 * (notes/<exam>/<subjectId>/<tid>.md), resolved per-(exam, subject, topic) because
 * topic ids are not globally unique. Single quotes in labels are escaped.
 *
 * Idempotent: only rewrites entries whose name is still a 'Topic N' placeholder AND
 * whose backing note has a real (non-placeholder) topicName. Ghost topics (no note)
 * and double-placeholders are left untouched — they need note authoring first.
 *
 * Run subject-name-scan.cjs first to preview. Re-run this after each pipeline tick
 * that authors new notes, to pick up newly-resolvable labels.
 */
const fs = require('fs'), p = require('path');
const examDir = 'src/data/exams';

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

const noteMap = {};
(function walk(d) {
  for (const x of fs.readdirSync(d)) {
    const fp = p.join(d, x), st = fs.statSync(fp);
    if (st.isDirectory()) walk(fp);
    else if (x.endsWith('.md')) {
      const fm = (fs.readFileSync(fp, 'utf8').split('---')[1]) || '';
      const g = k => { const r = fm.match(new RegExp('^' + k + ':\\s*(.*)$', 'm')); return r ? r[1].trim().replace(/^"|"$/g, '') : ''; };
      const ex = g('exam'), su = g('subject'), to = g('topic'), tn = g('topicName');
      if (ex && su && to) noteMap[`${ex}/${su}/${to}`] = tn;
    }
  }
})('src/content/notes');

let fixed = 0, files = 0;
for (const c of fs.readdirSync(examDir)) {
  const sd = p.join(examDir, c, 'subjects');
  if (!fs.existsSync(sd)) continue;
  for (const f of fs.readdirSync(sd)) {
    if (!f.endsWith('.ts')) continue;
    const fp = p.join(sd, f);
    let src = fs.readFileSync(fp, 'utf8'); const orig = src;
    const subjId = (src.match(/id:\s*'([^']+)'/) || [])[1] || null;
    const exams = [...(subjToExams[`${c}/subjects/${f.replace(/\.ts$/, '')}`] || [])];
    src = src.replace(/(\{\s*id:\s*')([^']+)(',\s*name:\s*')Topic \d+(')/g, (full, a, tid, b, d) => {
      let real = null;
      for (const ex of exams) { const tn = noteMap[`${ex}/${subjId}/${tid}`]; if (tn && !/^Topic \d+$/.test(tn)) { real = tn; break; } }
      if (!real) return full;
      fixed++;
      return a + tid + b + real.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + d;
    });
    if (src !== orig) { fs.writeFileSync(fp, src); files++; }
  }
}
console.log(`fixed ${fixed} placeholder labels across ${files} files`);
