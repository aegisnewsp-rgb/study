#!/usr/bin/env node
// Remove "Topic N" / "Topic N:" placeholder garbage from note titles WITHOUT
// disturbing the deliberate a11y bridge-heading design (template emits
// <h1>{topicName}</h1>; the body's leading `# {topicName}` is demoted to an
// <h2> by rehypeDemoteBodyH1 so the outline is h1->h2->h3, not h1->h3).
//
// Per note:
//   1. Frontmatter topicName "Topic N: Real Title" -> "Real Title"
//      (pure "Topic N" with no real title is left alone — noindexed, no source
//       of truth for a real title; owned by the rewrite pipeline.)
//   2. The leading body H1, if it is a placeholder, is rewritten to the (cleaned)
//      topicName so it keeps serving as the bridge heading:
//        "# Topic N"        -> "# {cleanTopicName}"   (only if a real title exists)
//        "# Topic N: X"     -> "# {cleanTopicName}"
//      A leading "# {already-real-title}" (EXACT_DUP / DIFFERENT) is left intact.
//
// Dry-run by default; pass --apply to write. Idempotent.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const apply = process.argv.includes('--apply');
const PREFIX = /^(Topic|Chapter|Section|Unit|Module|Part)\s+\d+\s*:\s*(?=\S)/i;
const PURE = /^(Topic|Chapter|Section|Unit|Module|Part)\s+\d+\s*:?\s*$/i;

function walk(d, o = []) {
  for (const n of readdirSync(d)) {
    const p = join(d, n); const s = statSync(p);
    if (s.isDirectory()) walk(p, o); else if (n.endsWith('.md')) o.push(p);
  }
  return o;
}

let tnFixed = 0, h1FromPlaceholder = 0, h1FromPrefix = 0, filesChanged = 0;
const samples = [];

for (const file of walk('src/content/notes')) {
  const raw = readFileSync(file, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fm) continue;
  const fmBlock = fm[0];
  const fmBody = fm[1];
  let body = raw.slice(fmBlock.length);

  // --- 1. frontmatter topicName ---
  const tnRe = /^(\s*topicName:\s*)(["']?)(.*?)\2(\s*)$/m;
  const m = fmBody.match(tnRe);
  if (!m) continue;
  const rawVal = m[3];
  let cleanTN;
  let newFmBody = fmBody;
  if (PREFIX.test(rawVal)) {
    cleanTN = rawVal.replace(PREFIX, '').trim();
    newFmBody = fmBody.replace(tnRe, (_all, p1, q, _v, p4) => `${p1}${q}${cleanTN}${q}${p4}`);
    tnFixed++;
  } else if (PURE.test(rawVal.trim())) {
    cleanTN = null; // pure placeholder; cannot recover a real title
  } else {
    cleanTN = rawVal.trim(); // already clean
  }

  // --- 2. leading body H1 ---
  const lines = body.split('\n');
  const hIdx = lines.findIndex((l) => /^#{1,6}\s+\S/.test(l.trim()));
  let newBody = body;
  let h1Note = '';
  if (hIdx !== -1) {
    const ht = lines[hIdx].trim();
    if (/^#\s+\S/.test(ht)) {
      const text = ht.replace(/^#\s+/, '').trim();
      const isPurePh = PURE.test(text);
      const isPrefix = PREFIX.test(text);
      if ((isPurePh || isPrefix) && cleanTN) {
        lines[hIdx] = `# ${cleanTN}`;
        newBody = lines.join('\n');
        if (isPurePh) { h1FromPlaceholder++; h1Note = 'h1:placeholder->title'; }
        else { h1FromPrefix++; h1Note = 'h1:prefix-stripped'; }
      }
    }
  }

  if (newFmBody !== fmBody || newBody !== body) {
    filesChanged++;
    const tags = [newFmBody !== fmBody ? 'TN' : '', h1Note].filter(Boolean).join('+');
    if (samples.length < 12) {
      samples.push(`${file.replace('src/content/notes/', '')}  [${tags}]  -> "${cleanTN}"`);
    }
    if (apply) {
      // Replace only the frontmatter body inside the exact ---\n...\n---\n wrapper.
      // Function replacement avoids `$`-pattern interpretation in newFmBody.
      const rebuilt = fmBlock.replace(fmBody, () => newFmBody) + newBody;
      writeFileSync(file, rebuilt);
    }
  }
}

console.log(`${apply ? 'APPLIED' : 'DRY-RUN'}`);
console.log(`files changed:        ${filesChanged}`);
console.log(`  topicName cleaned:  ${tnFixed}`);
console.log(`  body H1 placeholder->title: ${h1FromPlaceholder}`);
console.log(`  body H1 prefix-stripped:    ${h1FromPrefix}`);
console.log('\n--- sample changes ---');
samples.forEach((s) => console.log('  ' + s));
if (!apply) console.log('\n(dry-run — pass --apply to write)');
