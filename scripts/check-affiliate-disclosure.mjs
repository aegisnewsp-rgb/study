// scripts/check-affiliate-disclosure.mjs — affiliate-link compliance guard.
//
// WHY: an affiliate link is a revenue surface AND a disclosure obligation, and both
// failure modes are silent. A link with no `rel="sponsored"` loses the SEO protection;
// a link with no visible disclosure is an advertising-standards problem that no test
// would otherwise catch. And a hand-written affiliate URL bypasses
// src/components/AffiliateLink.astro entirely, which is exactly how that happens.
//
// This scans the BUILT output (dist/**/*.html), so it checks what a crawler would
// actually receive, not what the source intends.
//
//   node scripts/check-affiliate-disclosure.mjs        # exits non-zero on failure
//
// Checks, per page:
//   1. Every `data-affiliate="..."` anchor carries rel="sponsored" AND "nofollow".
//   2. Any page with an affiliate anchor also carries the disclosure block
//      (`data-affiliate-disclosure="1"`), i.e. the reader is told, not just Google.
//   3. No anchor points at a known affiliate-network host without `data-affiliate` —
//      the hand-written-link bypass.
//
// Today this passes trivially: AFFILIATES_LIVE is false, so no page ships a link.
// That is the point — the guard is in place before the first placement, not after.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';

// Affiliate-network hosts. Any outbound link to one of these must be component-built
// (i.e. carry data-affiliate), otherwise it skipped the registry and the disclosure.
const NETWORK_HOSTS = [
  'ad.admitad.com',
  'admitad.com',
  'mitgo.com',
  'cuelinks.com',
  'vcommission.com',
  'earnkaro.com',
  'awin1.com',
  'flexoffers.com',
  'shareasale.com',
  'impact.com',
  'partnerize.com',
  'tradedoubler.com',
  'linksynergy.com',
  'cj.com',
  'anrdoezrs.net',
  'dpbolvw.net',
  'jdoqocy.com',
  'kqzyfj.com',
  'tkqlhce.com',
];

if (!existsSync(DIST)) {
  console.log('affiliate-guard: no dist/ — nothing to check (run after a build).');
  process.exit(0);
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = walk(DIST);
const failures = [];
const anchorRe = /<a\b[^>]*>/gi;
let affiliatePages = 0;
let affiliateAnchors = 0;

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const rel = relative(DIST, file);
  let pageHasAffiliate = false;

  for (const tag of html.match(anchorRe) || []) {
    const idMatch = tag.match(/data-affiliate="([^"]*)"/);
    const hrefMatch = tag.match(/href="([^"]*)"/);
    const href = hrefMatch ? hrefMatch[1] : '';

    if (idMatch) {
      pageHasAffiliate = true;
      affiliateAnchors += 1;
      const relAttr = (tag.match(/rel="([^"]*)"/) || [, ''])[1].toLowerCase();
      if (!relAttr.includes('sponsored')) {
        failures.push(`${rel}: affiliate link data-affiliate="${idMatch[1]}" is missing rel="sponsored"`);
      }
      if (!relAttr.includes('nofollow')) {
        failures.push(`${rel}: affiliate link data-affiliate="${idMatch[1]}" is missing rel="nofollow"`);
      }
      if (!href) {
        failures.push(`${rel}: affiliate link data-affiliate="${idMatch[1]}" has no href`);
      }
      continue;
    }

    // A link to a network host with no data-affiliate = hand-written bypass.
    if (href && NETWORK_HOSTS.some((h) => href.includes(h))) {
      failures.push(
        `${rel}: outbound link to affiliate network host without the AffiliateLink component: ${href.slice(0, 90)}`
      );
    }
  }

  if (pageHasAffiliate) {
    affiliatePages += 1;
    if (!html.includes('data-affiliate-disclosure="1"')) {
      failures.push(`${rel}: ships an affiliate link but no visible disclosure (data-affiliate-disclosure missing)`);
    }
  }
}

if (failures.length) {
  console.error(`affiliate-guard: FAILED (${failures.length})`);
  for (const f of failures.slice(0, 40)) console.error('  ' + f);
  if (failures.length > 40) console.error(`  ... and ${failures.length - 40} more`);
  process.exit(1);
}

console.log(
  `affiliate-guard: OK — ${files.length} pages scanned, ${affiliateAnchors} affiliate link(s) across ${affiliatePages} page(s), all disclosed and rel-tagged.`
);
