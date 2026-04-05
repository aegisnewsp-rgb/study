#!/usr/bin/env node
// Post-build script to add missing /exams/ pages to sitemap
// Reads exam IDs from actual exam definition files in src/data/exams/*/
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
      // e.g. src/data/exams/india, src/data/exams/pakistan, etc.
      scanDir(full);
    } else if (entry.name.endsWith('.ts') && entry.name !== 'index.ts') {
      // Individual exam file like neet.ts, gate.ts
      const content = fs.readFileSync(full, 'utf8');
      const match = content.match(/examId\s*:\s*['"]([^'"]+)['"]/);
      if (match) examIds.push(match[1]);
    }
  }
}

scanDir(examsBase);
examIds = [...new Set(examIds)];

if (examIds.length === 0) {
  console.log('Could not extract exam IDs from source, skipping exam page addition to sitemap');
  process.exit(0);
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const closingTag = '</urlset>';
const insertBefore = sitemap.indexOf(closingTag);

if (insertBefore === -1) {
  console.log('Could not find closing tag in sitemap');
  process.exit(1);
}

// Check which exam URLs are already in the sitemap
const alreadyInSitemap = new Set();
const urlRegex = /<loc>([^<]+)<\/loc>/g;
let match;
while ((match = urlRegex.exec(sitemap)) !== null) {
  alreadyInSitemap.add(match[1]);
}

const BASE_URL = 'https://studyroadmap.in';
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

const newSitemap = sitemap.slice(0, insertBefore) + '\n' + newExamUrls.join('\n') + '\n' + closingTag;
fs.writeFileSync(sitemapPath, newSitemap);
console.log(`Added ${newExamUrls.length} exam pages to sitemap (${examIds.length} total exams known)`);
