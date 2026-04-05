#!/usr/bin/env node
// Post-build script to add missing /exams/ pages to sitemap
// Reads exam IDs from src/data/exams.ts (TypeScript source) to avoid needing dist/ structure
const fs = require('fs');
const path = require('path');

const examsDataPath = path.join(__dirname, '..', 'src', 'data', 'exams.ts');
const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap-0.xml');

if (!fs.existsSync(sitemapPath)) {
  console.log('Skipping sitemap fix - dist/sitemap-0.xml not found');
  process.exit(0);
}

// Try to read exam IDs from src/data/exams.ts
let examIds = [];

if (fs.existsSync(examsDataPath)) {
  const examsContent = fs.readFileSync(examsDataPath, 'utf8');
  // Also check for ./exams or ./exams-new canonical data files
  const examsIndexPath = path.join(__dirname, '..', 'src', 'data', 'exams', 'index.ts');
  const examsNewIndexPath = path.join(__dirname, '..', 'src', 'data', 'exams-new', 'index.ts');

  let allExamsContent = examsContent;

  if (fs.existsSync(examsIndexPath)) {
    allExamsContent += '\n' + fs.readFileSync(examsIndexPath, 'utf8');
  }
  if (fs.existsSync(examsNewIndexPath)) {
    allExamsContent += '\n' + fs.readFileSync(examsNewIndexPath, 'utf8');
  }

  // Extract examId values from exam objects: examId: "neet", examId: "gate", etc.
  const examIdMatches = allExamsContent.matchAll(/examId\s*:\s*["']([^"']+)["']/g);
  examIds = [...new Set([...examIdMatches].map(m => m[1]))];
}

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
  console.log('All exam pages already in sitemap or no exams found');
  process.exit(0);
}

const newSitemap = sitemap.slice(0, insertBefore) + '\n' + newExamUrls.join('\n') + '\n' + closingTag;
fs.writeFileSync(sitemapPath, newSitemap);
console.log(`Added ${newExamUrls.length} exam pages to sitemap (${examIds.length} total exams known)`);
