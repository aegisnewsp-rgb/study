#!/usr/bin/env node
// Corpus-wide title/body topic-mismatch scanner.
//
// The note-authoring pipeline emits a declarative first sentence:
//   "**<Topic>** covers <topic> for <Exam>."
// where <Topic> should equal the frontmatter `topicName`. When the bold lead
// and the frontmatter topic share NO content token, the note shows users a
// different topic than its title/URL claims (a real content-integrity bug,
// e.g. ini-cet physio-004: topicName "Gastrointestinal System" / body Cardiac).
//
// This flags candidates with zero content-token overlap. Legitimate
// chapter->subtopic narrowing (which shares at least one token, e.g.
// "Ancient Indian History" / "Indus Valley Civilization" -> share nothing,
// so those still surface and need human/LLM judgement) is left for the
// downstream judge step — this script only narrows the search space.
//
// Usage: node scripts/title-body-scan.mjs            (summary + writes /tmp/title-mismatch.json)
//        node scripts/title-body-scan.mjs --indexed  (only index-eligible notes)

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const NOTES_DIR = 'src/content/notes';
const indexedOnly = process.argv.includes('--indexed');

// Mirror of isLowValueNote() drivers in src/data/note-quality.ts (kept loose;
// only used to mark whether a candidate is index-eligible, for prioritisation).
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
  const nonSpace = body.replace(/\s/g, '').length;
  if (cjk > 0 && nonSpace > 0 && cjk / nonSpace < 0.05) return true;
  return false;
}

const STOP = new Set([
  'the', 'a', 'an', 'of', 'in', 'for', 'and', 'to', 'its', 'with', 'on', 'at',
  'covers', 'introduction', 'intro', 'overview', 'basics', 'fundamentals',
  'concept', 'concepts', 'topic', 'study', 'notes', 'part', 'amp',
]);
function tokens(s) {
  return new Set(
    (s || '')
      .toLowerCase()
      .replace(/&amp;/g, ' ')
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((t) => t.length >= 3 && !STOP.has(t)),
  );
}
function overlap(a, b) {
  for (const t of a) if (b.has(t)) return true;
  return false;
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

const files = walk(NOTES_DIR);
const candidates = [];
let scanned = 0, noLead = 0;

for (const file of files) {
  const raw = readFileSync(file, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fm) continue;
  const front = fm[1];
  const body = raw.slice(fm[0].length);
  const tn = (front.match(/^topicName:\s*["']?(.+?)["']?\s*$/m) || [])[1] || '';
  if (!tn) continue;

  const indexEligible = !isLowValue(body, tn);
  if (indexedOnly && !indexEligible) continue;
  scanned++;

  // Prefer the "**X** covers" declaration; fall back to first H1, then first bold.
  const head = body.slice(0, 600);
  let lead =
    (head.match(/\*\*(.+?)\*\*\s+covers\b/) || [])[1] ||
    (head.match(/^#\s+(.+)$/m) || [])[1] ||
    (head.match(/\*\*(.+?)\*\*/) || [])[1] ||
    '';
  if (!lead) { noLead++; continue; }

  if (!overlap(tokens(tn), tokens(lead))) {
    candidates.push({
      file: file.replace(NOTES_DIR + '/', ''),
      exam: file.split('/')[3],
      indexEligible,
      topicName: tn,
      bodyLead: lead.trim().slice(0, 100),
    });
  }
}

candidates.sort((a, b) => (a.exam || '').localeCompare(b.exam || ''));
writeFileSync('/tmp/title-mismatch.json', JSON.stringify(candidates, null, 2));

const idx = candidates.filter((c) => c.indexEligible).length;
console.log(`scanned=${scanned} (${indexedOnly ? 'index-eligible only' : 'all'})  noLead=${noLead}`);
console.log(`candidates=${candidates.length}  (index-eligible=${idx}, noindexed=${candidates.length - idx})`);
console.log('--- index-eligible candidates (the ones that matter) ---');
for (const c of candidates.filter((c) => c.indexEligible)) {
  console.log(`${c.file}\n   TN:   ${c.topicName}\n   BODY: ${c.bodyLead}`);
}
console.log('\nfull list -> /tmp/title-mismatch.json');
