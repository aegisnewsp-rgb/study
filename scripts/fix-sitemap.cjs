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
// normalized slug → ACTUAL dist dir name. STEP 4 must read the real dir: a
// case/char-corrupted examId (the historical 'uAeu-cat' pattern) normalizes
// into the Set but its dist dir keeps the raw name — resolving the noindex
// check from the normalized slug would throw, and a swallowed read error
// must mean "exclude", never "include unchecked".
const distDirByNormalizedId = new Map();
if (fs.existsSync(distExamsBase)) {
  for (const dir of fs.readdirSync(distExamsBase, { withFileTypes: true })) {
    if (dir.isDirectory()) {
      // Normalize to the same slug format as the examId slugification in STEP 4
      const normalized = dir.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      generatedExamIds.add(normalized);
      distDirByNormalizedId.set(normalized, dir.name);
    }
  }
}

if (examIds.length === 0) {
  console.log('Could not extract exam IDs from source, skipping');
  process.exit(0);
}

const today = new Date().toISOString().split('T')[0];

// ---------------------------------------------------------------------------
// SOURCE-DATE RESOLVER (vqzo 2026-10-16, MEASURED against the live corpus)
// ---------------------------------------------------------------------------
// Why this exists. STEP 4/5/6b appended `<lastmod>${today}</lastmod>` to every
// URL they added. `today` is the BUILD date, so those entries assert the page
// changed on the day the site was deployed. Measured live 2026-10-16
// (sitemap-0.xml, HTTP 200, 862,035 B, 5,062 blocks): 3,293 isoDatetime +
// 1,769 date-only, and ALL 1,769 date-only values hold the IDENTICAL date
// (2026-10-16). One build-stamp cohort, not 1,769 independent edit dates.
//
// The earlier proposed fix dropped all 1,769 (patches/…-SHAPE.diff). That
// discards real recency: the true dates are already in this repo. Measured
// coverage of a source-derived rule over the live 1,769:
//   1,744 (98.6%) resolve to a real content date from source
//      study-plan 1,014 | notes 415 | exams 255 | exam-dates 26 | compare 25 | blog 9
//    25 (1.4%) are genuinely dateless hubs/utility pages (about, privacy,
//      terms, contact, the /notes/ index, ...). Those emit NO <lastmod> at
//      all, which is valid sitemap XML — an absent tag claims nothing.
// So this is not "drop recency"; it replaces a false date with the true one
// on 98.6% of the cohort and removes the claim on the remaining 1.4%.
//
// Rules, each traceable to a source field that already exists:
//   /exams/<id>/, /exams/<id>/<spoke>/  -> examLastUpdated[id]     (ExamTemplate.lastUpdated)
//   /study-plan/<id>/...               -> examLastUpdated[id]     (spoke is derived from the exam)
//   /compare/<a>-vs-<b>/               -> min(a,b)               (older of the two: conservative)
//   /notes/<section>/...               -> newest member note lastUpdated (section index page)
//   /exam-dates/<exam>/<event>/<date>/ -> the date in the URL path (it IS the page's subject)
//   /blog/<slug>/                      -> publishDate frontmatter
// No rule falls back to `today`. Absent a source date, the tag is omitted.
const examsSrcBase = path.join(__dirname, '..', 'src', 'data', 'exams');
const examLastUpdated = (() => {
  const map = new Map();
  const walk = dir => {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) { walk(full); continue; }
      if (!/\.ts$/.test(ent.name)) continue;
      let src;
      try { src = fs.readFileSync(full, 'utf8'); } catch { continue; }
      const id = src.match(/\bexamId:\s*['"]([^'"]+)['"]/);
      const lu = src.match(/\blastUpdated:\s*['"](\d{4}-\d{2}-\d{2})['"]/);
      if (id && lu) map.set(id[1], lu[1]);
    }
  };
  walk(examsSrcBase);
  return map;
})();

const notesSrcBase = path.join(__dirname, '..', 'src', 'content', 'notes');
const notesNewestCache = new Map();
function notesNewestLastUpdated(relDir) {
  if (notesNewestCache.has(relDir)) return notesNewestCache.get(relDir);
  let newest = null;
  const walk = dir => {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) { walk(full); continue; }
      if (!/\.(md|mdx)$/.test(ent.name)) continue;
      try {
        const m = fs.readFileSync(full, 'utf8').match(/^lastUpdated:\s*["']?(\d{4}-\d{2}-\d{2})/m);
        if (m && (!newest || m[1] > newest)) newest = m[1];
      } catch {}
    }
  };
  walk(path.join(notesSrcBase, relDir));
  notesNewestCache.set(relDir, newest);
  return newest;
}

const blogPublishDate = (() => {
  const map = new Map();
  let files;
  try { files = fs.readdirSync(path.join(__dirname, '..', 'src', 'pages', 'blog')); } catch { return map; }
  for (const f of files) {
    if (!/\.astro$/.test(f)) continue;
    try {
      const m = fs.readFileSync(path.join(__dirname, '..', 'src', 'pages', 'blog', f), 'utf8')
        .match(/publishDate\s*=\s*['"](\d{4}-\d{2}-\d{2})['"]/);
      if (m) map.set(f.replace(/\.astro$/, ''), m[1]);
    } catch {}
  }
  return map;
})();

// Full-URL form (works for blocks already in the sitemap as well as new ones).
function sourceLastmodFor(fullUrl) {
  let p;
  try { p = new URL(fullUrl).pathname; } catch { return null; }
  const seg = p.split('/').filter(Boolean);
  if (!seg.length) return null;
  if (seg[0] === 'exams' && seg.length >= 2 && examLastUpdated.has(seg[1])) return examLastUpdated.get(seg[1]);
  if (seg[0] === 'study-plan' && seg.length >= 2 && examLastUpdated.has(seg[1])) return examLastUpdated.get(seg[1]);
  if (seg[0] === 'compare' && seg.length >= 2) {
    const pair = seg[1].split('-vs-');
    if (pair.length === 2 && examLastUpdated.has(pair[0]) && examLastUpdated.has(pair[1])) {
      return [examLastUpdated.get(pair[0]), examLastUpdated.get(pair[1])].sort()[0];
    }
    return null;
  }
  if (seg[0] === 'exam-dates') {
    const dated = p.match(/\/(\d{4}-\d{2}-\d{2})\/?$/);
    if (dated) return dated[1];
    if (seg.length >= 2 && examLastUpdated.has(seg[1])) return examLastUpdated.get(seg[1]);
    return null;
  }
  if (seg[0] === 'notes') {
    return notesNewestLastUpdated(seg.slice(1).join('/')) || (seg.length === 1 ? notesNewestLastUpdated('') : null);
  }
  if (seg[0] === 'blog' && seg.length === 2 && blogPublishDate.has(seg[1])) return blogPublishDate.get(seg[1]);
  return null;
}

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
  // Remove any existing priority/changefreq tags and add correct ones.
  // 2026-09-23 FIX (sprint 83): keep EXACTLY ONE <lastmod>, and prefer the real
  // content date over this build's date.
  // The old line injected <lastmod>${today}</lastmod> into EVERY url block
  // without removing an existing one, so: (a) the live sitemap carries 7,948
  // <lastmod> tags for 4,826 URLs -- 3,122 blocks have two, which is invalid
  // (the sitemap protocol allows at most one per <url>); (b) all 4,826 URLs
  // claim to have changed on the build date, masking each note's real
  // lastUpdated; and (c) it was CUMULATIVE -- each build appended another tag,
  // so a re-run of the old script yields 4,826 duplicated blocks. <lastmod> is
  // the primary recrawl-priority hint, so a uniformly-today, duplicated value
  // is worthless to Google. This version is idempotent AND self-healing: it
  // collapses existing duplicates to the real date and only stamps today when
  // the URL genuinely has no date of its own (STEP 2's original intent).
  //
  // 2026-10-16 CORRECTION (vqzo): the sentence above misnames what the code
  // actually does, and it has already cost one wasted fix. `realLm` is NOT
  // "the real content date" -- it is only "the first existing value that is not
  // today's date". STEP 1 cannot tell a build stamp from a genuine content
  // date: once a URL is stamped on day X, that stamp is indistinguishable from
  // a real date and is preserved forever after. Measured against the live
  // corpus 2026-10-16 (sitemap-0.xml, HTTP 200, 862,035 bytes, 5,062 blocks):
  // 3,293 isoDatetime + 1,769 date-only, 0 absent -- and all 1,769 date-only
  // values hold the SAME date (2026-10-16). That is one build-stamp cohort, not
  // 1,769 independent edit dates. Replaying this predicate over simulated
  // deploy dates 2026-10-16..20 leaves the distribution identical (delta 0):
  // these values do NOT advance on deploy, and have not since this rewrite.
  //
  // Two consequences, recorded so the next reader is not misled the same way:
  //   1. Do NOT "fix" this by filtering on `v !== today`. That predicate
  //      matches nothing after the first day and yields output byte-identical
  //      to the current file. Already tried once:
  //      patches/fix-sitemap-omit-false-lastmod.diff -- adjudicated ok=false
  //      as a proven no-op (861,962 bytes either way over the live corpus).
  //   2. A real fix needs a shape- or source-based rule, and that is an
  //      SEO-semantics decision, currently held for the operator. Note also
  //      that STEP 4 (~lines 274/297/323/347) stamps `today` unconditionally
  //      on every newly appended URL, which is how the cohort keeps growing.
  const existingLm = [...urlBlock.matchAll(/<lastmod>([^<]*)<\/lastmod>/g)]
    .map(m => m[1]).filter(Boolean);
  const locM = urlBlock.match(/<loc>([^<]*)<\/loc>/);
  // Prefer a date resolved from SOURCE over anything the sitemap already
  // carried. `today` in an existing value means build stamp, not content date.
  const srcDate = locM ? sourceLastmodFor(locM[1]) : null;
  // Fallback ONLY accepts an isoDatetime-shaped value. A date-only value in
  // this corpus is always a build stamp: every genuine content date reaches
  // the sitemap as YYYY-MM-DDTHH:mm:ss.sssZ (astro.config serialize() and
  // note frontmatter both produce that shape), and the only producer of a
  // bare YYYY-MM-DD is this script's own `${today}` injection. Accepting a
  // date-only value here is what lets the stamp re-adopt itself on the NEXT
  // deploy, because `v !== today` is true again once the build date moves on.
  const realLm = srcDate || existingLm.find(v => /^\d{4}-\d{2}-\d{2}T/.test(v));
  // MEASURED s1144 (2026-10-16): a <lastmod> whose date equals the build date is a build
  // artefact, not a content date. Note `existingLm[0]` is ALSO a stamp: this script is
  // idempotent, so once a prior run wrote a build-date value that value survives on every
  // later run and gets re-adopted. Removing only the injection left 1769 bare stamps in
  // place (measured 1769 -> 1769). Drop both: emit <lastmod> only for a real content date.
  const lastmod = realLm || null;
  let fixed = urlBlock
    .replace(/<lastmod>[^<]*<\/lastmod>/g, '')
    .replace(/<priority>[^<]*<\/priority>/g, '')
    .replace(/<changefreq>[^<]*<\/changefreq>/g, '');
  fixed = fixed.replace('</loc>', `</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}<changefreq>${changefreq}</changefreq><priority>${priority}</priority>`);
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
// Only match single-segment exam slugs like /exams/neet/ — NOT spoke paths
// like /exams/neet/syllabus/ which are intentional sub-pages.
const sitemapLocMatches = sitemap.matchAll(/<loc>([^<]*\/exams\/([^<\/]+)\/)<\/loc>/g);
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
  // MEASURED s1144: this step WAS the primary injector - it stamped `today` into every URL
  // block that had none. STEP 1 has already collapsed duplicates and kept only real content
  // dates, so anything still lacking a lastmod here genuinely has none. Omit the tag rather
  // than assert a false one; a missing <lastmod> is valid sitemaps XML.
  return match;
});

// STEP 3a: Strip URLs whose rendered HTML carries `<meta name="robots" content="noindex...">`.
// Applies mainly to thin/placeholder notes pages — they must NOT appear in sitemaps either,
// or Google penalises the whole domain for sitemap-vs-noindex mismatch.
const distRootForScan = path.join(__dirname, '..', 'dist');
function urlPathFromLoc(loc) {
  try { return new URL(loc).pathname; } catch { return null; }
}
let sitemapStripCount = 0;
let sitemapMissingDiskCount = 0;
sitemap = sitemap.replace(/<url>[\s\S]*?<\/url>/g, (block) => {
  const m = block.match(/<loc>([^<]+)<\/loc>/);
  if (!m) return block;
  const p = urlPathFromLoc(m[1]);
  if (!p || p === '/') return block;
  const candidate = path.join(distRootForScan, p.replace(/\/$/, ''), 'index.html');
  if (!fs.existsSync(candidate)) {
    // STEP 3a-strict: URL has no backing index.html on disk → would 404 in prod.
    // Strip it from sitemap rather than feeding Google a known broken link.
    sitemapMissingDiskCount++;
    return '';
  }
  try {
    const html = fs.readFileSync(candidate, 'utf8');
    if (/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
      sitemapStripCount++;
      return '';
    }
  } catch {}
  return block;
});
if (sitemapStripCount > 0) console.log(`Sitemap: stripped ${sitemapStripCount} noindexed URLs from Astro-emitted sitemap`);
if (sitemapMissingDiskCount > 0) console.log(`Sitemap: stripped ${sitemapMissingDiskCount} URLs with no index.html on disk (would-be 404s)`);

// STEP 3b: Build set of exam URLs already in sitemap
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

// NB: STEP 3a strips noindexed exam hubs from the Astro-emitted sitemap, but
// existingUrls is built AFTER that strip — so without a noindex check here,
// this step silently re-adds every noindexed exam hub as "missing" (the exact
// bug that leaked all 14 NOINDEX_EXAMS hubs into the live sitemap, found
// 2026-07-03). A sitemap URL must never serve robots noindex.
let reAddSkippedNoindex = 0;
const newExamUrls = examIds
  .filter(id => !existingUrls.has(`${BASE_URL}/exams/${id}/`))
  .filter(id => generatedExamIds.has(id))  // only include if page was actually generated
  .filter(id => {
    const idx = path.join(distExamsBase, distDirByNormalizedId.get(id) || id, 'index.html');
    try {
      const html = fs.readFileSync(idx, 'utf8');
      if (/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
        reAddSkippedNoindex++;
        return false;
      }
    } catch {
      // Unreadable page ⇒ its noindex state is unknown — exclude, don't ship.
      reAddSkippedNoindex++;
      return false;
    }
    return true;
  })
  .map(id => {
    const lm = sourceLastmodFor(`${BASE_URL}/exams/${id}/`);
    return `<url><loc>${BASE_URL}/exams/${id}/</loc>${lm ? `<lastmod>${lm}</lastmod>` : ''}</url>`;
  });
if (reAddSkippedNoindex > 0) console.log(`Sitemap: refused to re-add ${reAddSkippedNoindex} noindexed exam hubs`);

// STEP 5: Add notes pages to sitemap
// Scan dist/notes/ for all generated note pages
const distNotesBase = path.join(__dirname, '..', 'dist', 'notes');
const noteUrls = [];
let skippedNoindex = 0;
function scanNotesDir(dir, urlPath) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const newUrlPath = urlPath + '/' + entry.name;
    if (entry.isDirectory()) {
      const idxPath = path.join(full, 'index.html');
      if (fs.existsSync(idxPath)) {
        // Skip noindexed notes — they should not be in the sitemap either.
        const html = fs.readFileSync(idxPath, 'utf8');
        if (/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
          skippedNoindex++;
        } else {
          const noteUrl = `${BASE_URL}${newUrlPath}/`;
          if (!existingUrls.has(noteUrl)) {
            const noteLm = sourceLastmodFor(noteUrl);
            noteUrls.push(`<url><loc>${noteUrl}</loc>${noteLm ? `<lastmod>${noteLm}</lastmod>` : ''}<changefreq>weekly</changefreq><priority>0.6</priority></url>`);
          }
        }
      }
      scanNotesDir(full, newUrlPath);
    }
  }
}
scanNotesDir(distNotesBase, '/notes');
if (skippedNoindex > 0) console.log(`Sitemap: skipped ${skippedNoindex} noindexed notes pages (thin/placeholder)`);

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
  .map(url => {
    const lm = sourceLastmodFor(url);
    return `<url><loc>${url}</loc>${lm ? `<lastmod>${lm}</lastmod>` : ''}<changefreq>weekly</changefreq><priority>0.7</priority></url>`;
  });

// STEP 6b: Catch-all — walk dist/ recursively, add any index.html whose URL is missing.
// Covers /exams/{id}/{spoke}/, /study-plan/{id}/{d}/, /compare/{pair}/, /after-12th/{stream}/,
// /ai-answers/, and any future static routes Astro emits.
const distRoot = path.join(__dirname, '..', 'dist');
const catchAllUrls = [];
function walkCatchAll(dir, urlPath) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '_astro' || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = urlPath + '/' + entry.name;
      if (fs.existsSync(path.join(full, 'index.html'))) {
        const u = `${BASE_URL}${sub}/`;
        if (!existingUrls.has(u)) {
          // Skip notes (already handled), exam-hubs (already handled), and the homepage
          if (!u.includes('/notes/') && !u.match(/\/exams\/[^/]+\/$/)) {
            // Respect page-level noindex (e.g. non-canonical study-plan durations):
            // a URL that serves noindex must NOT be in the sitemap, or Google flags
            // the sitemap-vs-noindex mismatch as a quality problem.
            const html = fs.readFileSync(path.join(full, 'index.html'), 'utf8');
            if (!/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
              const clm = sourceLastmodFor(u);
              catchAllUrls.push(`<url><loc>${u}</loc>${clm ? `<lastmod>${clm}</lastmod>` : ''}<changefreq>monthly</changefreq><priority>0.6</priority></url>`);
            }
          }
        }
      }
      walkCatchAll(full, sub);
    }
  }
}
walkCatchAll(distRoot, '');
if (catchAllUrls.length > 0) console.log(`Catch-all: +${catchAllUrls.length} URLs (spokes, study-plans, comparisons, after-12th, ai-answers, …)`);

// Build complete final sitemap and write atomically
const allNewUrls = [...newExamUrls, ...noteUrls, ...staticUrls, ...catchAllUrls];
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

// Chain: update site revision metadata
try { require('./update-revision.cjs'); } catch (e) { console.error('update-revision.cjs failed:', e.message); }

