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

// Only include exam IDs that actually have a generated page in dist/exams/
// (exams may have .ts data files but not be in ALL_EXAMS, so no page is generated)
const distExamsBase = path.join(__dirname, '..', 'dist', 'exams');
const generatedExamIds = new Set();
if (fs.existsSync(distExamsBase)) {
  for (const dir of fs.readdirSync(distExamsBase, { withFileTypes: true })) {
    if (dir.isDirectory()) {
      // Normalize to the same slug format as the examId slugification in STEP 4
      const normalized = dir.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      generatedExamIds.add(normalized);
    }
  }
}

if (examIds.length === 0) {
  console.log('Could not extract exam IDs from source, skipping');
  process.exit(0);
}

const today = new Date().toISOString().split('T')[0];
const BASE_URL = 'https://studyroadmap.in';

// Read raw sitemap
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// STEP 0 (repair): Fix malformed sitemap structure (missing XML declaration / urlset open tag)
// Many sitemap generators produce bare URL entries without the XML boilerplate.
// If the file doesn't start with '<?xml', prepend the required header + opening tag.
const xmlDecl = '<?xml version="1.0" encoding="UTF-8"?>';
const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
if (!sitemap.trim().startsWith('<?xml')) {
  // Find where the first <url> block starts to avoid duplicating content
  const firstUrlMatch = sitemap.match(/<url[>\s]/);
  const firstUrlIndex = firstUrlMatch ? sitemap.indexOf(firstUrlMatch[0]) : 0;
  const leadingContent = sitemap.slice(0, firstUrlIndex);
  const urlBlock = sitemap.slice(firstUrlIndex);
  sitemap = xmlDecl + '\n' + urlsetOpen + '\n' + urlBlock;
  console.log('Repaired missing XML declaration and <urlset> opening tag in sitemap');
}

// STEP 0b: Normalize ALL URLs to lowercase to fix duplicate entries from case differences (e.g. uAeu-cat vs uaeu-cat)
// Deduplicate by keeping only the first occurrence of each lowercase URL
const seenLowerUrls = new Set();
sitemap = sitemap.replace(/(<url>[\s\S]*?<\/url>)/g, (urlBlock) => {
  const locMatch = urlBlock.match(/<loc>([^<]+)<\/loc>/);
  if (!locMatch) return urlBlock;
  const lower = locMatch[1].toLowerCase();
  if (seenLowerUrls.has(lower)) {
    console.log(`Removing duplicate URL (case variant): ${locMatch[1]}`);
    return '';  // remove duplicate
  }
  // If URL itself is uppercase, fix it
  if (locMatch[1] !== lower) {
    const fixed = urlBlock.replace(`<loc>${locMatch[1]}</loc>`, `<loc>${lower}</loc>`);
    console.log(`Normalized URL to lowercase: ${locMatch[1]} -> ${lower}`);
    seenLowerUrls.add(lower);
    return fixed;
  }
  seenLowerUrls.add(lower);
  return urlBlock;
});

// STEP 0c: Add tiered priority values to all sitemap entries
// Homepage = 1.0, /exams/ listing = 0.9, major exam pages = 0.8, notes = 0.6, other = 0.5
sitemap = sitemap.replace(/(<url>[\s\S]*?<\/url>)/g, (urlBlock) => {
  const locMatch = urlBlock.match(/<loc>([^<]+)<\/loc>/);
  if (!locMatch) return urlBlock;
  const url = locMatch[1];
  let priority = '0.5';
  let changefreq = 'monthly';
  if (url === 'https://studyroadmap.in/' || url === 'https://studyroadmap.in') {
    priority = '1.0'; changefreq = 'daily';
  } else if (url.endsWith('/exams/') || url === 'https://studyroadmap.in/exams') {
    priority = '0.9'; changefreq = 'daily';
  } else if (/\/exams\/[^/]+\/$/.test(url)) {
    priority = '0.8'; changefreq = 'weekly';
  } else if (/\/notes\/[^/]+\/$/.test(url)) {
    priority = '0.6'; changefreq = 'weekly';
  } else if (/\/notes\/[^/]+\/[^/]+\/$/.test(url)) {
    priority = '0.5'; changefreq = 'monthly';
  } else if (url.match(/\/(about|contact|privacy|terms|roadmap)\/$/)) {
    priority = '0.7'; changefreq = 'monthly';
  }
  // Remove any existing priority/changefreq tags and add correct ones
  let fixed = urlBlock.replace(/<priority>[^<]*<\/priority>/g, '').replace(/<changefreq>[^<]*<\/changefreq>/g, '');
  fixed = fixed.replace('</loc>', `</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority>`);
  return fixed;
});

// STEP 0a: Remove existing sitemap entries for exam pages that were never generated (404s)
const brokenUrls = [];
for (const id of examIds) {
  if (!generatedExamIds.has(id)) {
    brokenUrls.push(`${BASE_URL}/exams/${id}/`);
  }
}
// STEP 0b: Also remove any /exams/{id}/ entries in the sitemap that no longer exist
// as generated pages — covers cases where exam data files were deleted entirely
const examUrlInSitemap = new Set();
const sitemapLocMatches = sitemap.matchAll(/<loc>([^<]*\/exams\/([^<]+)\/)<\/loc>/g);
for (const m of sitemapLocMatches) {
  const url = m[1];
  const id = m[2].toLowerCase();
  if (!generatedExamIds.has(id)) {
    brokenUrls.push(url);
  }
}
if (brokenUrls.length > 0) {
  // Remove <url> blocks whose <loc> matches a broken URL
  sitemap = sitemap.replace(/<url>[\s\S]*?<loc>[^<]*<\/loc>[\s\S]*?<\/url>/g, (match) => {
    const locMatch = match.match(/<loc>([^<]+)<\/loc>/);
    if (locMatch && brokenUrls.includes(locMatch[1])) {
      return '';  // remove this entry
    }
    return match;
  });
  console.log(`Removed ${brokenUrls.length} broken exam entries from sitemap (no generated page): ${brokenUrls.join(', ')}`);
}
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
// Also repair any malformed closing tag position from previous buggy runs
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
  .filter(id => generatedExamIds.has(id))  // only include if page was actually generated
  .map(id => `<url><loc>${BASE_URL}/exams/${id}/</loc><lastmod>${today}</lastmod></url>`);

// STEP 5: Add notes pages to sitemap
// Scan dist/notes/ for all generated note pages
const distNotesBase = path.join(__dirname, '..', 'dist', 'notes');
const noteUrls = [];
function scanNotesDir(dir, urlPath) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const newUrlPath = urlPath + '/' + entry.name;
    if (entry.isDirectory()) {
      // Check if this directory has an index.html (= a page)
      if (fs.existsSync(path.join(full, 'index.html'))) {
        const noteUrl = `${BASE_URL}${newUrlPath}/`;
        if (!existingUrls.has(noteUrl)) {
          noteUrls.push(`<url><loc>${noteUrl}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.6</priority></url>`);
        }
      }
      scanNotesDir(full, newUrlPath);
    }
  }
}
scanNotesDir(distNotesBase, '/notes');

// STEP 6: Add static pages that may be missing
const staticPages = [
  '/notes/',
  '/study-plan-generator/',
  '/privacy/',
  '/terms/',
  '/feedback/',
  '/contact/',
  '/about/',
  '/exams/',
  '/roadmap/',
];
const staticUrls = staticPages
  .map(p => `${BASE_URL}${p}`)
  .filter(url => !existingUrls.has(url))
  .map(url => `<url><loc>${url}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`);

// Build complete final sitemap and write atomically
const allNewUrls = [...newExamUrls, ...noteUrls, ...staticUrls];
let finalSitemap;
if (allNewUrls.length > 0) {
  finalSitemap = sitemap.slice(0, lastIdx) + allNewUrls.join('\n') + '\n' + closingTag;
  console.log(`Added ${newExamUrls.length} exam pages, ${noteUrls.length} note pages, ${staticUrls.length} static pages to sitemap`);
} else {
  finalSitemap = sitemap;
  console.log(`All pages already in sitemap (${generatedExamIds.size} exam pages, notes scanned)`);
}
fs.writeFileSync(sitemapPath, finalSitemap);
console.log(`Added <lastmod> to all URL entries`);

// Chain: generate llm.txt + llms-full.txt from dist URL inventory
try { require('./gen-llms.cjs'); } catch (e) { console.error('gen-llms.cjs failed:', e.message); }

