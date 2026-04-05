#!/usr/bin/env node
// Post-build script to add missing /exams/ pages to sitemap
// Scans ALL exam definition files and adds every one to the sitemap — no allowlist needed
const fs = require('fs');
const path = require('path');

const examsBase = path.join(__dirname, '..', 'src', 'data', 'exams');
const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap-0.xml');

if (!fs.existsSync(sitemapPath)) {
  console.log('Skipping sitemap fix - dist/sitemap-0.xml not found');
  process.exit(0);
}

// Collect all exam IDs by scanning exam definition files
let examIds = [];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full);
    } else if (entry.name.endsWith('.ts') && entry.name !== 'index.ts') {
      const content = fs.readFileSync(full, 'utf8');
      const match = content.match(/examId\s*:\s*['"]([^'"]+)['"]/);
      if (match) {
        const normalized = match[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        if (normalized) examIds.push(normalized);
      }
    }
  }
}

scanDir(examsBase);
examIds = [...new Set(examIds)];

if (examIds.length === 0) {
  console.log('Could not extract exam IDs from source, skipping exam page addition to sitemap');
  process.exit(0);
}

let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Check which exam URLs are already in the sitemap
const alreadyInSitemap = new Set();
const urlRegex = /<loc>([^<]+)<\/loc>/g;
let match;
while ((match = urlRegex.exec(sitemap)) !== null) {
  alreadyInSitemap.add(match[1]);
}

const BASE_URL = 'https://studyroadmap.in';

// ── PART 1: Add lastmod to all sitemap entries that lack it ───────────────
const today = new Date().toISOString().split('T')[0]; // e.g. "2026-04-05"

// Count before
const locCountBefore = (sitemap.match(/<loc>/g) || []).length;
const lastmodCountBefore = (sitemap.match(/<lastmod>/g) || []).length;

// Strategy: add <lastmod> after each <loc> that doesn't already have one
// Pattern: <loc>...</loc> optionally followed by other tags, then <url>
let entriesAdded = 0;
sitemap = sitemap.replace(/<loc>([^<]+)<\/loc>((?:(?!<\/url>).)*?)(<\/url>)/gs, (match, loc, middle, close) => {
  if (middle.includes('<lastmod>')) {
    return match; // already has lastmod
  }
  entriesAdded++;
  return `<loc>${loc}</loc><lastmod>${today}</lastmod>${middle}${close}`;
});

const locCountAfter = (sitemap.match(/<loc>/g) || []).length;
const lastmodCountAfter = (sitemap.match(/<lastmod>/g) || []).length;
console.log(`lastmod: ${lastmodCountBefore} → ${lastmodCountAfter} entries (added ${entriesAdded})`);

// ── PART 2: Add every exam not already in sitemap ─────────────────────────
const newExamUrls = examIds
  .filter(examId => {
    const url = `${BASE_URL}/exams/${examId}/`;
    return !alreadyInSitemap.has(url);
  })
  .map(examId => `  <url><loc>${BASE_URL}/exams/${examId}/</loc></url>`);

if (newExamUrls.length === 0) {
  console.log(`All ${examIds.length} exam pages already in sitemap`);
  process.exit(0);
}

// Replace ONLY the last occurrence of </urlset> with new entries + </urlset>
const closingTag = '</urlset>';
const lastIndex = sitemap.lastIndexOf(closingTag);

if (lastIndex === -1) {
  console.log('Could not find closing tag in sitemap');
  process.exit(1);
}

const afterClosing = sitemap.slice(lastIndex + closingTag.length).trim();
if (afterClosing.length > 0 && !afterClosing.startsWith('\n')) {
  console.log('Sitemap appears malformed (content after closing tag), skipping auto-fix');
  process.exit(1);
}

const newSitemap = sitemap.slice(0, lastIndex) + newExamUrls.join('\n') + '\n' + closingTag;
fs.writeFileSync(sitemapPath, newSitemap);
console.log(`Added ${newExamUrls.length} exam pages to sitemap (${examIds.length} total exams known)`);
