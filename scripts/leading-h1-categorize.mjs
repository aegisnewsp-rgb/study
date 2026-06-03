#!/usr/bin/env node
// Categorize notes whose FIRST body heading is a level-1 `# ` heading.
// The note template already emits <h1>{topicName}</h1>, so a leading body H1
// is at best redundant and at worst a placeholder ("# Topic 3") or a
// duplicate of the title. We must NOT blindly delete a leading H1 that carries
// distinct, meaningful text — so bucket every case precisely.
//
// Buckets:
//   PLACEHOLDER  - "# Topic 3" / "# Chapter 2" (no real title)
//   PREFIX_DUP   - "# Topic 3: Cash Flows" where the title == topicName
//   EXACT_DUP    - "# Cash Flows" where text == topicName
//   PREFIX_OTHER - "# Topic 3: <text>" where <text> != topicName  (review)
//   DIFFERENT    - "# <text>" meaningful and != topicName          (review)

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const PH_PREFIX = /^(Topic|Chapter|Section|Unit|Module|Part)\s+\d+\s*:?\s*/i;
const PH_ONLY = /^(Topic|Chapter|Section|Unit|Module|Part)\s+\d+\s*:?\s*$/i;

function norm(s) {
  return (s || '')
    .toLowerCase()
    .replace(/&amp;/g, '&').replace(/&#x26;/g, '&').replace(/\band\b/g, '&')
    .replace(/[‐-―]/g, '-') // unicode dashes -> hyphen
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
function walk(d, o = []) {
  for (const n of readdirSync(d)) {
    const p = join(d, n); const s = statSync(p);
    if (s.isDirectory()) walk(p, o); else if (n.endsWith('.md')) o.push(p);
  }
  return o;
}

const buckets = { PLACEHOLDER: [], PREFIX_DUP: [], EXACT_DUP: [], PREFIX_OTHER: [], DIFFERENT: [] };
for (const file of walk('src/content/notes')) {
  const raw = readFileSync(file, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fm) continue;
  const body = raw.slice(fm[0].length);
  const tn = (fm[1].match(/^topicName:\s*["']?(.+?)["']?\s*$/m) || [])[1] || '';
  const fh = body.split('\n').find((l) => /^#{1,6}\s+\S/.test(l.trim()));
  if (!fh) continue;
  const t = fh.trim();
  if (!/^#\s+\S/.test(t)) continue; // first heading must be an H1
  const text = t.replace(/^#\s+/, '').trim();
  const rel = file.replace('src/content/notes/', '');
  const entry = { file: rel, h1: text, topicName: tn };

  if (PH_ONLY.test(text)) buckets.PLACEHOLDER.push(entry);
  else if (PH_PREFIX.test(text)) {
    const after = text.replace(PH_PREFIX, '').trim();
    if (norm(after) === norm(tn)) buckets.PREFIX_DUP.push(entry);
    else buckets.PREFIX_OTHER.push(entry);
  } else if (norm(text) === norm(tn)) buckets.EXACT_DUP.push(entry);
  else buckets.DIFFERENT.push(entry);
}

writeFileSync('/tmp/leading-h1-buckets.json', JSON.stringify(buckets, null, 2));
for (const [k, v] of Object.entries(buckets)) console.log(`${k}: ${v.length}`);
console.log('\n--- DIFFERENT (need review: meaningful H1 != topicName) ---');
buckets.DIFFERENT.slice(0, 40).forEach((e) => console.log(`${e.file}\n   H1: "${e.h1}"\n   TN: "${e.topicName}"`));
console.log(`\n--- PREFIX_OTHER (need review: "Topic N: X" where X != topicName) ---`);
buckets.PREFIX_OTHER.slice(0, 30).forEach((e) => console.log(`${e.file}  H1:"${e.h1}"  TN:"${e.topicName}"`));
console.log('\nfull -> /tmp/leading-h1-buckets.json');
