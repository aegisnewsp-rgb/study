#!/usr/bin/env node
/**
 * check-internal-links.mjs — site-wide internal link integrity + orphan census.
 *
 * Why this exists (measured 2026-10-16T04:05Z, vqzo pulse 0405Z):
 * the site emits 8,593 pages. Nothing checked whether the ~555,000 internal
 * links between them actually resolve, and nothing distinguished a page that
 * is unreachable-by-design (noindex filler, e.g. the non-curated /compare
 * pairs) from one that is unreachable-by-accident (an indexable hub nothing
 * links to). check-note-links.cjs is a different axis: it proves every note is
 * reachable from a declared topic at the SOURCE level. This gate works on the
 * EMITTED html, so it also catches link targets that no longer correspond to a
 * generated route.
 *
 * Two bugs from the pulse that found it are encoded as fixtures below, because
 * both produced a confident, completely wrong "0 defects" or "94 defects" story:
 *   B1 page map stored '/roadmap' while anchors emit '/roadmap/' -> every real
 *      page read as broken (512,070 false instances). Trailing slash is not a
 *      distinct resource here, so both forms fold to one key.
 *   B2 robots meta was read from head[:4000]; Layout.astro emits robots at
 *      line 233, well past that window, so all 94 /compare pages read as
 *      indexable. Robots must be read from the whole file.
 *
 * Usage:
 *   node scripts/check-internal-links.mjs                 # verify (exit 1 on NEW broken links)
 *   node scripts/check-internal-links.mjs --json          # machine-readable
 *   node scripts/check-internal-links.mjs --strict-orphans # also fail on indexable orphans
 *   node scripts/check-internal-links.mjs --dist <dir>    # default: dist
 *   node scripts/check-internal-links.mjs --update-baseline
 *
 * Read-only. Wiring into deploy.sh is an owner edit (deploy.sh is LOCKED).
 */
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n, d) => {
  const i = args.indexOf(n);
  return i >= 0 && args[i + 1] ? args[i + 1] : d;
};

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIST = path.resolve(REPO, opt('--dist', 'dist'));
const BASELINE_FILE = path.join(REPO, 'scripts', 'internal-link-baseline.json');
const SITE_HOSTS = new Set(['studyroadmap.in', 'www.studyroadmap.in']);

// Whole-path-segment directory prefixes that are assets, not pages (see B1).
const ALLOWED_PREFIX = /^\/(?:_astro|images|img|assets|static|data)\//;
const ALLOWED_FILE =
  /^\/[^/]*\.(?:xml|txt|json|pdf|js|css|png|jpe?g|svg|webp|avif|ico|webmanifest)(?:\.gz)?$/;
const allowedNonPage = (p) =>
  ALLOWED_PREFIX.test(p) ||
  ALLOWED_FILE.test(p) ||
  /^\/favicon[^/]*$/.test(p) ||
  /^\/(?:robots|sitemap[^/]*|ads|app-ads)\.txt$/.test(p) ||
  /^\/manifest[^/]*$/.test(p) ||
  /^\/llm[^/]*\.txt$/.test(p);

const HREF_RE = /<a\b[^>]*?\shref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gis;
const ROBOTS_RE = /<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)/i;

/** Fold /x and /x/ to one key. B1. */
const canon = (p) => {
  if (!p.startsWith('/')) p = '/' + p;
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p || '/';
};

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function emittedPages() {
  const pages = new Map();
  if (!fs.existsSync(DIST)) {
    console.error(`check-internal-links: no build output at ${DIST} — run a build first`);
    process.exit(2);
  }
  for (const full of walk(DIST)) {
    if (!full.endsWith('.html')) continue;
    const rel = path.relative(DIST, full).split(path.sep).join('/');
    let p;
    if (rel === 'index.html') p = '/';
    else if (rel.endsWith('/index.html')) p = '/' + rel.slice(0, -'/index.html'.length);
    else p = '/' + rel.slice(0, -'.html'.length);
    pages.set(canon(p), full);
  }
  return pages;
}

function normalize(raw, srcPath) {
  const href = raw.trim();
  if (!href) return null;
  if (href.startsWith('#')) return null;
  // NOTE: the colon is INSIDE each alternative. Writing /^(mailto:|...):/ matches
  // "mailto::" and lets every mailto: anchor fall through to relative-path
  // resolution, inventing a broken target per page (12,069 false instances,
  // 897 fake targets on 2026-10-16T04:05Z). --selfcheck guards this.
  if (/^(mailto:|tel:|javascript:|data:)/i.test(href)) return null;
  let p;
  if (href.startsWith('//')) p = href.slice(2).includes('/') ? href.slice(2) : href.slice(2);
  if (href.startsWith('http://') || href.startsWith('https://')) {
    let u;
    try {
      u = new URL(href);
    } catch {
      return null;
    }
    if (!SITE_HOSTS.has(u.hostname.toLowerCase())) return null;
    p = u.pathname || '/';
  } else if (href.startsWith('/')) {
    p = href;
  } else {
    p = path.posix.join(path.posix.dirname(srcPath), href);
    if (!p.startsWith('/')) p = '/' + p;
  }
  p = decodeURIComponent(p.split('#')[0].split('?')[0]);
  if (!p.startsWith('/')) p = '/' + p;
  return { target: canon(p), literal: p };
}

/** Whole-file read. B2: robots lives past a 4KB head window. */
function robotsOf(file) {
  const m = ROBOTS_RE.exec(fs.readFileSync(file, 'utf8'));
  return m ? m[1].toLowerCase() : 'index,follow (implicit)';
}

function main() {
  const pages = emittedPages();
  const inbound = new Map();
  const outDeg = new Map();
  const brokenTargets = new Map();

  for (const [page, file] of pages) {
    const html = fs.readFileSync(file, 'utf8');
    const seen = new Set();
    let m;
    HREF_RE.lastIndex = 0;
    while ((m = HREF_RE.exec(html)) !== null) {
      const n = normalize(m[1] ?? m[2] ?? m[3] ?? '', page);
      if (!n) continue;
      const { target, literal } = n;
      if (pages.has(target)) {
        outDeg.set(page, (outDeg.get(page) || 0) + 1);
        if (target !== page) seen.add(target);
        continue;
      }
      if (allowedNonPage(target) || allowedNonPage(literal)) continue;
      brokenTargets.set(target, (brokenTargets.get(target) || 0) + 1);
    }
    for (const t of seen) inbound.set(t, (inbound.get(t) || 0) + 1);
  }

  const indexableOrphans = [];
  const noindexOrphans = [];
  for (const [page, file] of pages) {
    if (page === '/' || (inbound.get(page) || 0) > 0) continue;
    (robotsOf(file).includes('noindex') ? noindexOrphans : indexableOrphans).push(page);
  }
  indexableOrphans.sort();
  noindexOrphans.sort();

  let baseline = { brokenTargets: [], indexableOrphans: [] };
  if (fs.existsSync(BASELINE_FILE)) {
    try {
      baseline = JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8'));
    } catch {
      console.error('check-internal-links: baseline is not valid JSON — fix or delete it');
      process.exit(2);
    }
  }
  const knownBroken = new Set(baseline.brokenTargets || []);
  const newBroken = [...brokenTargets.entries()].filter(([t]) => !knownBroken.has(t));
  const knownOrphans = new Set(baseline.indexableOrphans || []);
  const newOrphans = indexableOrphans.filter((p) => !knownOrphans.has(p));

  const report = {
    dist: path.relative(REPO, DIST) || DIST,
    pages: pages.size,
    broken_target_count: brokenTargets.size,
    broken_link_instances: [...brokenTargets.values()].reduce((a, b) => a + b, 0),
    new_broken: newBroken.map(([t, c]) => ({ target: t, instances: c })),
    indexable_orphans: indexableOrphans,
    indexable_orphans_new: newOrphans,
    noindex_orphans_by_design: noindexOrphans.length,
    pages_with_zero_outbound: [...pages.keys()].filter((p) => p !== '/' && !(outDeg.get(p) || 0)),
  };

  if (flag('--update-baseline')) {
    fs.writeFileSync(
      BASELINE_FILE,
      JSON.stringify(
        { brokenTargets: [...brokenTargets.keys()].sort(), indexableOrphans, updated: new Date().toISOString() },
        null,
        1
      ) + '\n'
    );
    console.log(`baseline rewritten: ${brokenTargets.size} broken targets, ${indexableOrphans.length} indexable orphans`);
    return;
  }
  if (flag('--json')) console.log(JSON.stringify(report, null, 1));
  else {
    console.log(`check-internal-links: ${report.pages} emitted pages`);
    console.log(`  broken internal link targets: ${report.broken_target_count} (${report.broken_link_instances} instances)`);
    console.log(`  zero-inbound pages: ${indexableOrphans.length + noindexOrphans.length}` +
      `  [noindex-by-design ${noindexOrphans.length}, indexable ${indexableOrphans.length}]`);
    for (const [t, c] of newBroken.slice(0, 25)) console.log(`  BROKEN ${c}x ${t}`);
    for (const o of newOrphans.slice(0, 25)) console.log(`  ORPHAN ${o} (indexable, zero inbound)`);
    if (!newBroken.length && !newOrphans.length) console.log('  OK — no new broken links, no new indexable orphans');
  }

  if (newBroken.length) {
    console.error(`FAIL: ${newBroken.length} new broken internal link target(s)`);
    process.exit(1);
  }
  if (flag('--strict-orphans') && newOrphans.length) {
    console.error(`FAIL: ${newOrphans.length} new indexable orphan page(s)`);
    process.exit(1);
  }
}

/**
 * Fail-closed fixtures. A link gate that cannot fail is worse than no gate:
 * it prints "0 defects" forever. Each fixture is a known href with a known
 * verdict, so a regression in normalize()/canon()/robotsOf() shows up as a
 * failed assertion instead of a confident wrong number.
 */
const FIXTURES = [
  ['/exams/neet', false, 'real page'],
  ['/exams/neet/', false, 'real page, trailing slash'],
  ['/exams/zzz-not-a-real-exam/', true, 'fake exam slug'],
  ['/exams/neet-ug/', true, 'near-miss slug'],
  ['/notes/does-not-exist-xyz/', true, 'fake note'],
  ['/sitemap-0.xml', false, 'allowed non-page'],
  ['/favicon.ico', false, 'allowed non-page'],
  ['/_astro/app.hash.js', false, 'allowed asset (segment prefix)'],
  ['mailto:pushkersaini@gmail.com', false, 'mailto must not become a path'],
  ['tel:+911234567890', false, 'tel must not become a path'],
  ['javascript:void(0)', false, 'javascript:'],
  ['#section', false, 'fragment'],
  ['', false, 'empty'],
  ['https://example.com/x', false, 'external'],
];

function selfcheck() {
  const pages = emittedPages();
  const sample = pages.get('/exams/neet') || [...pages.values()][0];
  let failed = 0;
  for (const [href, expectBroken, desc] of FIXTURES) {
    const n = normalize(href, '/exams/neet');
    let broken = false;
    if (n) {
      broken =
        !pages.has(n.target) && !allowedNonPage(n.target) && !allowedNonPage(n.literal);
    }
    const ok = broken === expectBroken;
    if (!ok) failed++;
    console.log(
      `  ${ok ? 'ok  ' : 'FAIL'} expect_broken=${String(expectBroken).padEnd(5)} got=${String(broken).padEnd(5)} ${href || '(empty)'} — ${desc}`
    );
  }
  // robots must be read from the whole file (B2)
  const noindexed = [...pages.values()].filter((f) => robotsOf(f).includes('noindex')).length;
  const robotsOk = noindexed > 0;
  if (!robotsOk) failed++;
  console.log(`  ${robotsOk ? 'ok  ' : 'FAIL'} robots read past the head window: ${noindexed} pages report noindex`);
  console.log(
    failed ? `SELFCHECK FAIL: ${failed} fixture(s)` : `SELFCHECK PASS: ${FIXTURES.length + 1} fixtures`
  );
  process.exit(failed ? 1 : 0);
}

if (flag('--selfcheck')) selfcheck();
else main();