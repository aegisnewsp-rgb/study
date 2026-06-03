#!/usr/bin/env node
// Find notes whose body contains a placeholder section heading like
// "# Topic 1", "## Chapter 3", "### Section 2" — a leftover authoring artifact
// that should read the real topic/section title instead. Reports, per file:
// index-eligibility, how many placeholder headings it has, their heading
// levels, and whether the single-H1 case maps cleanly to frontmatter topicName.

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const NOTES_DIR = 'src/content/notes';
const PH = /^(#{1,4})\s+(Topic|Chapter|Section|Unit|Module|Part)\s+\d+\s*:?\s*$/;

const FILLER = [
  /is an important topic in/i, /is a fundamental concept in [A-Z]/,
  /appear regularly in (NEET|JEE)/i, /is a key topic in this subject area/i,
  /Full coverage:\s*.+ with detailed explanation/i,
];
function isLowValue(body, topicName) {
  if (/^(Topic|Chapter|Unit|Section)\s+\d+/i.test((topicName || '').trim())) return true;
  if ((body || '').length < 3500) return true;
  if (FILLER.some((re) => re.test(body))) return true;
  const cjk = (body.match(/[一-鿿]/g) || []).length;
  const ns = body.replace(/\s/g, '').length;
  if (cjk > 0 && ns > 0 && cjk / ns < 0.05) return true;
  return false;
}
function walk(d, o = []) {
  for (const n of readdirSync(d)) {
    const p = join(d, n); const s = statSync(p);
    if (s.isDirectory()) walk(p, o); else if (n.endsWith('.md')) o.push(p);
  }
  return o;
}

const rows = [];
for (const file of walk(NOTES_DIR)) {
  const raw = readFileSync(file, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fm) continue;
  const body = raw.slice(fm[0].length);
  const tn = (fm[1].match(/^topicName:\s*["']?(.+?)["']?\s*$/m) || [])[1] || '';
  const phLines = body.split('\n').filter((l) => PH.test(l.trim()));
  if (phLines.length === 0) continue;
  const levels = [...new Set(phLines.map((l) => (l.trim().match(PH)[1].length)))].sort();
  // Is the FIRST body heading a placeholder (the H1 case that hurts SEO most)?
  const firstHeading = body.split('\n').find((l) => /^#{1,4}\s+\S/.test(l.trim()));
  const firstIsPlaceholder = firstHeading ? PH.test(firstHeading.trim()) : false;
  rows.push({
    file: file.replace(NOTES_DIR + '/', ''),
    indexed: !isLowValue(body, tn),
    count: phLines.length,
    levels: levels.join(','),
    firstIsPlaceholder,
    topicName: tn,
    bodyChars: body.length,
  });
}

writeFileSync('/tmp/placeholder-headings.json', JSON.stringify(rows, null, 2));
const idx = rows.filter((r) => r.indexed);
console.log(`files with placeholder headings: ${rows.length}`);
console.log(`  indexed (live on Google): ${idx.length}`);
console.log(`  noindexed: ${rows.length - idx.length}`);
console.log(`  with >1 placeholder heading: ${rows.filter((r) => r.count > 1).length}`);
console.log(`  whose FIRST heading is the placeholder (H1 hit): ${rows.filter((r) => r.firstIsPlaceholder).length}`);
console.log(`\n--- INDEXED files, heading-count & level breakdown ---`);
const byCount = {};
for (const r of idx) byCount[`${r.count}@L${r.levels}`] = (byCount[`${r.count}@L${r.levels}`] || 0) + 1;
console.log(byCount);
console.log(`\n--- INDEXED files with >1 placeholder heading (need care) ---`);
for (const r of idx.filter((r) => r.count > 1)) console.log(`${r.file}  count=${r.count} levels=${r.levels}  TN="${r.topicName}"`);
console.log(`\nfull data -> /tmp/placeholder-headings.json`);
