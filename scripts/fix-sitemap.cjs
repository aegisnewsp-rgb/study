#!/usr/bin/env node
// Post-build script to add missing /exams/ pages to sitemap
const fs = require('fs');
const path = require('path');

const examsDir = path.join(__dirname, '..', 'dist', 'exams');
const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap-0.xml');

if (!fs.existsSync(examsDir) || !fs.existsSync(sitemapPath)) {
  console.log('Skipping sitemap fix - files not found');
  process.exit(0);
}

const examDirs = fs.readdirSync(examsDir).filter(f => {
  return fs.statSync(path.join(examsDir, f)).isDirectory();
});

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const closingTag = '</urlset>';
const insertBefore = sitemap.indexOf(closingTag);

if (insertBefore === -1) {
  console.log('Could not find closing tag in sitemap');
  process.exit(1);
}

const examUrls = examDirs
  .filter(examId => examId && examId.trim())
  .map(examId => `  <url><loc>https://studyroadmap.com/exams/${examId.trim()}/</loc></url>`)
  .join('\n');

const newSitemap = sitemap.slice(0, insertBefore) + '\n' + examUrls + '\n' + closingTag;

fs.writeFileSync(sitemapPath, newSitemap);
console.log(`Added ${examDirs.length} exam pages to sitemap`);
