#!/usr/bin/env node
// Post-build script to add missing /exams/ pages to sitemap
// Also adds <lastmod> to all <url> entries that lack it
const fs = require('fs');
const path = require('path');

const examsBase = path.join(__dirname, '..', 'src', 'data', 'exams');
const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap-0.xml');

if (!fs.existsSync(sitemapPath)) {
  console.log('Skipping sitemap fix - dist/sitemap-0.xml not found');
  process.exit(0);
}

// Collect all exam IDs from source files
let examIds = [];
function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
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
  console.log('Could not extract exam IDs from source, skipping');
  process.exit(0);
}

const today = new Date().toISOString().split('T')[0];
const BASE_URL = 'https://studyroadmap.in';

// Read raw sitemap
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// STEP 1: Remove any malformed exam entries that appear AFTER the closing </urlset>
// (these were appended by older buggy versions of this script)
const closingTag = '</urlset>';
const lastClosingIndex = sitemap.lastIndexOf(closingTag);
if (lastClosingIndex !== -1) {
  const afterClosing = sitemap.slice(lastClosingIndex + closingTag.length);
  if (afterClosing.trim().length > 0) {
    // Truncate everything after the last </urlset> — that's the garbage
    sitemap = sitemap.slice(0, lastClosingIndex + closingTag.length);
    console.log('Removed malformed exam entries found after </urlset>');
  }
}

// STEP 2: Add <lastmod> to all <url> entries that don't have one
// Match complete <url>...</url> blocks
sitemap = sitemap.replace(/<url>([\s\S]*?<\/url>)/g, (match, inner) => {
  if (inner.includes('<lastmod>')) return match;
  // Insert <lastmod> right after the first </loc>
  return `<url>${inner.replace('</loc>', `</loc><lastmod>${today}</lastmod>`)}`;
});

// STEP 3: Build set of exam URLs already in sitemap
const existingUrls = new Set();
const locMatches = sitemap.matchAll(/<loc>([^<]+)<\/loc>/g);
for (const m of locMatches) {
  existingUrls.add(m[1]);
}

// STEP 4: Append any missing exam pages (with lastmod) before </urlset>
const lastIdx = sitemap.lastIndexOf(closingTag);
if (lastIdx === -1) {
  console.log('No closing </urlset> found');
  process.exit(1);
}

const newExamUrls = examIds
  .filter(id => !existingUrls.has(`${BASE_URL}/exams/${id}/`))
  .map(id => `<url><loc>${BASE_URL}/exams/${id}/</loc><lastmod>${today}</lastmod></url>`);

if (newExamUrls.length === 0) {
  console.log(`All ${examIds.length} exam pages already in sitemap`);
  process.exit(0);
}

const newSitemap = sitemap.slice(0, lastIdx) + newExamUrls.join('') + '\n' + closingTag;
fs.writeFileSync(sitemapPath, newSitemap);
console.log(`Added ${newExamUrls.length} exam pages to sitemap (${examIds.length} total exams known)`);
