/**
 * StudyRoadmap ad policy — single source of truth for every ad decision.
 *
 * Monetag (PropellerAds) is the ONLY ad network on this site — Google AdSense
 * was removed on 2026-09-15. Every ad decision is made here so `Layout.astro`,
 * `AdRouter.astro` and the host-side `/data/sr-ad-safety-check.sh` cannot
 * drift apart.
 *
 * Hard rules encoded below (see commit history for the incidents behind them):
 *  1. No ad unit on 404, policy/tool pages, or noindex pages.
 *  2. Ad loaders are deferred off the critical path (CWV budget: +10% TTFB,
 *     +5% HTML bytes vs the 18 h baseline).
 *  3. Crawlers get no ad loaders at all — see CRAWLER_UA_RE.
 *  4. Popunder is frequency-capped per visitor (POPUNDER_COOLDOWN_MS).
 */

/**
 * Ad networks. AdSense is retired; this list exists only so a future regression
 * (a stray AdSense loader reappearing) is a one-line change to catch.
 */
export const AD_NETWORKS = ['monetag'] as const;

/** Monetag site-verification id — `<meta name="monetag">` + /monetag_<id>.html. */
export const MONETAG_SITE_ID = 'dd2db0a07f698ebaba6882a4873ffe84';

/** Monetag web tag host shared by every zone on this account. */
export const MONETAG_TAG_SRC = 'https://quge5.com/88/tag.min.js';

/**
 * MultiTag ("Rich tag") container zone. Served by the shared quge5.com host;
 * Monetag fans it out server-side to the Rich-tag zones below, which is why
 * those ids — not this one — appear in reporting.
 *
 * Zone map, corrected against the dashboard on 2026-09-15 (the earlier reading
 * had two formats swapped):
 *   11798843  Rich tag      OnClick (Popunder)   MULTI  <- where our popunder
 *   11798844  Rich tag      In-Page Push         MULTI     impressions come from
 *   11798845  Rich tag      Vignette Banner      MULTI
 *   11798846  Rich tag      Push Notifications   MULTI  <- now wired: /sw.js
 *                                                         holds this zone's own
 *                                                         service worker and
 *                                                         AdRouter registers it
 *                                                         for eligible humans
 *                                                         only (2026-09-16).
 *                                                         Before that the tag
 *                                                         produced 1,467
 *                                                         prerequests and zero
 *                                                         requests, because
 *                                                         nothing in the page
 *                                                         ever registered a
 *                                                         worker.
 *   11799057  Talented tag  Vignette Banner      standalone, DELIBERATELY NOT WIRED
 *                                                          (2026-09-15): the
 *                                                          container already
 *                                                          serves a vignette
 *                                                          (11798845), so one
 *                                                          tag covers it and the
 *                                                          extra request + CSP
 *                                                          surface buys nothing
 *   11805678  standalone    OnClick (Popunder)   12 h cap
 */
export const MONETAG_MULTITAG_ZONE = 280401;

/**
 * Push-notifications zone. Unlike the other sub-zones it needs a registered
 * service worker before it can serve: the container tag loads it, but nothing
 * in the tag registers a worker. Measured 2026-09-16 on a real browser — with
 * no worker registered the zone stays at prerequests-only; with one
 * registered the tag switches to its worker-backed request
 * (`…/zone?…zone_id=11798846&sw=<bundle version>`).
 *
 * The worker itself is `public/sw.js` (that zone's own `Get tag` worker).
 * `MONETAG_PUSH_ENABLED` is the build-time kill switch: set it false and
 * AdRouter stops registering, which reverts the site to the previous (silent)
 * behaviour without touching the CSP.
 */
export const MONETAG_PUSH_ZONE = 11798846;
export const MONETAG_PUSH_SW_PATH = '/sw.js';
export const MONETAG_PUSH_ENABLED = true;

/**
 * Dedicated OnClick PopUnder zone (created 2026-09-15) so popunder reporting is
 * attributable and the page-level cap is ours rather than the MultiTag's.
 */
export const MONETAG_POPUNDER_ZONE = 11805678;

/**
 * Tag host for the standalone popunder zone, taken verbatim from the zone's
 * "Get tag" snippet in the dashboard:
 *
 *   <script>(function(s){s.dataset.zone='11805678',s.src='https://al5sm.com/tag.min.js'})
 *    ([document.documentElement, document.body].filter(Boolean).pop()
 *     .appendChild(document.createElement('script')))</script>
 *
 * The host is per-zone. Loading the shared quge5.com MultiTag host with
 * data-zone="11805678" — which is what this code did until 2026-09-15 — made the
 * tag resolve that zone against 6opo.com and get a 404 on every page, so the
 * popunder could never serve. That 404 is the standalone resolution path and is
 * the evidence that the wrong host was in use; the same probe 404s for
 * container sub-zones by design, so it is only meaningful for standalone zones.
 */
export const MONETAG_POPUNDER_TAG_SRC = 'https://al5sm.com/tag.min.js';

/**
 * Whether to load the standalone popunder zone above. On, now that its real tag
 * host is known: the previous "off" state was a workaround for the host
 * mismatch, not for a zone that cannot serve.
 */
export const MONETAG_POPUNDER_DEDICATED_ENABLED = true;

/**
 * Popunder cooldown per visitor/browser: 12 hours — the zone's own cap, kept as
 * the cross-session floor. The per-session rule below is the real UX guard; this
 * is the backstop. (A 6 h floor was trialled on 2026-09-15 and reverted to match
 * the "12h-cap" zone definition.)
 */
export const POPUNDER_COOLDOWN_MS = 12 * 60 * 60 * 1000;

/**
 * sessionStorage flag marking that this tab session was already served a
 * popunder. One per session, regardless of the cooldown: a reader who is
 * actively working through notes must never meet a second one.
 */
export const POPUNDER_SESSION_KEY = 'sr:pu:session';

/** localStorage key holding the last popunder timestamp. */
export const POPUNDER_STORAGE_KEY = 'sr:pu:ts';

/** sessionStorage key caching the visitor country lookup. */
export const VISITOR_GEO_STORAGE_KEY = 'sr:geo';

/**
 * Pages that must never request an ad. Enforced twice — here (build) and in
 * `/data/sr-ad-safety-check.sh` (live HTTP) — because a regression on any of
 * these fails deploy validation and breaches ad-network placement policy.
 */
export const AD_EXCLUDED_PATHS = [
    '/roadmap/',
    '/privacy/',
    '/terms/',
    '/disclaimer/',
    '/contact/',
    '/editorial-process/',
];

/**
 * EEA + UK + CH. Same list `Layout.astro` hands to gtag consent defaults.
 * Consent Mode keeps `ad_personalization` denied here, so the intrusive
 * (popunder) format is withheld in these regions rather than personalised.
 */
export const CONSENT_RESTRICTED_GEOS = [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
    'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL',
    'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'CH',
];

/**
 * Declared crawler / automation user-agents.
 *
 * These get **no ad loaders**. Serving impressions to non-human traffic is
 * invalid traffic (IVT): Monetag voids and can terminate the account for it,
 * so a bad IVT ratio is an account-level risk. Verified in the access log:
 * HeadlessChrome (our own QA scout) was registering the Monetag push service
 * worker on every crawl before this guard shipped.
 *
 * This is a deliberate deviation from "serve ads to bots". Real users are
 * never blocked by user-agent — only automation is.
 */
export const CRAWLER_UA_RE = new RegExp(
    [
        // generic automation tokens
        'bot', 'crawl', 'spider', 'slurp', 'headless', 'phantomjs', 'puppeteer',
        'playwright', 'lighthouse', 'pagespeed', 'gtmetrix', 'pingdom',
        'uptime', 'monitoring', 'preview', 'scanner', 'scan', 'curl', 'wget',
        'python-requests', 'python-urllib', 'aiohttp', 'axios', 'okhttp',
        'go-http-client', 'java/', 'libwww', 'httrack',
        // SEO / competitive-intel crawlers
        'semrush', 'ahrefs', 'mj12', 'dotbot', 'screaming frog', 'sitebulb',
        'seznam', 'dataforseo', 'serpstat', 'sistrix', 'archive.org_bot',
        'ia_archiver', 'zoominfo', 'similarweb', 'builtwith',
        // search-engine crawlers (must never receive ad loaders)
        'googlebot', 'bingbot', 'yandex', 'baidu', 'duckduck', 'sogou',
        'naver', 'qihoo', 'petalbot', 'applebot', 'seznambot',
        // AI crawlers + AI answer-engine fetchers. These arrive constantly and
        // are pure automation: an impression served to any of them is IVT.
        'gptbot', 'oai-searchbot', 'chatgpt-user', 'ccbot', 'claudebot',
        'claude-searchbot', 'claude-web', 'anthropic', 'perplexity',
        'bytespider', 'externalagent', 'meta-external', 'cohere', 'duckassist',
        'youbot', 'jscrawler', 'diffbot', 'timpibot', 'omgili', 'amazonbot',
        'mistralai', 'deepseek', 'grok',
        // our own tooling — these run headless or fetch pages in QA/audits and
        // must never be counted as an ad-viewing visitor.
        'studyroadmap-', 'adsense-audit', 'adsenseaudit', 'sr-qa', 'sr-seo',
        'qa-scout', 'uptime-kuma',
    ].join('|'),
    'i',
);

/**
 * AI answer engines, ordered for attribution. When a *human* clicks a citation
 * in ChatGPT/Perplexity/Copilot/Gemini/Claude, `document.referrer` points here.
 *
 * This is the only genuinely monetizable "AI" traffic: a person, usually with
 * high purchase intent, arriving from a model's answer. AI *crawlers* are
 * handled by CRAWLER_UA_RE above and get no ad loaders at all — serving them
 * would be invalid traffic and risks the Monetag account.
 */
export const AI_REFERRER_HOSTS = [
    'chatgpt.com', 'chat.openai.com', 'openai.com',
    'perplexity.ai', 'gemini.google.com', 'bard.google.com',
    'copilot.microsoft.com', 'claude.ai', 'you.com', 'phind.com', 'poe.com',
    'grok.com', 'x.ai', 'meta.ai', 'deepseek.com', 'chat.mistral.ai',
    'kagi.com', 'andisearch.com',
];

/** Matches an `https://` referrer whose hostname is (a subdomain of) an AI engine. */
export const AI_REFERRER_RE = new RegExp(
    '^https?://(?:[a-z0-9-]+\\.)*(?:' +
    AI_REFERRER_HOSTS.map((h) => h.replace(/[.]/g, '\\.')).join('|') +
    ')(?::\\d+)?(?:/|$)',
    'i',
);

/** Short attribution label for a referrer URL. Empty string when not AI-referred. */
export function aiReferrerSource(referrer?: string | null): string {
    const r = (referrer || '').trim();
    if (!r) return '';
    const m = AI_REFERRER_RE.exec(r);
    if (!m) return '';
    const host = (m[0] || '').toLowerCase();
    if (host.includes('chatgpt') || host.includes('openai')) return 'chatgpt';
    if (host.includes('perplexity')) return 'perplexity';
    if (host.includes('gemini') || host.includes('bard')) return 'gemini';
    if (host.includes('copilot')) return 'copilot';
    if (host.includes('claude')) return 'claude';
    if (host.includes('grok') || host.includes('x.ai')) return 'grok';
    if (host.includes('meta.ai')) return 'meta-ai';
    if (host.includes('deepseek')) return 'deepseek';
    if (host.includes('mistral')) return 'mistral';
    if (host.includes('you.com')) return 'you';
    if (host.includes('phind')) return 'phind';
    if (host.includes('poe')) return 'poe';
    if (host.includes('kagi')) return 'kagi';
    if (host.includes('andi')) return 'andisearch';
    return 'ai-other';
}

/**
 * Country tiers used to decide how much ad surface a visitor gets.
 * Monetag does its own demand-side geo targeting; this only decides *which*
 * formats we are willing to load for a given visitor + page combination.
 */
export const HIGH_CPM_GEOS = [
    'US', 'CA', 'GB', 'AU', 'NZ', 'IE', 'DE', 'FR', 'NL', 'SE', 'NO', 'DK',
    'FI', 'CH', 'AT', 'BE', 'IT', 'ES', 'AE', 'SA', 'QA', 'KW', 'IL', 'SG',
    'JP', 'KR', 'HK',
];

/** Core exam markets for this site (India, Pakistan, Nigeria, …). */
export const CORE_MARKET_GEOS = [
    'IN', 'PK', 'NG', 'BD', 'LK', 'NP', 'KE', 'ZA', 'GH', 'TZ', 'UG', 'EG',
    'ID', 'PH', 'MY', 'VN', 'TR', 'BR', 'MX', 'AE',
];

export type AdTier = 'high' | 'core' | 'other';

/** Map an ISO-3166-1 alpha-2 code to its ad tier. */
export function adTier(geo?: string | null): AdTier {
    const cc = (geo || '').trim().toUpperCase();
    if (!cc) return 'other';
    if (HIGH_CPM_GEOS.includes(cc)) return 'high';
    if (CORE_MARKET_GEOS.includes(cc)) return 'core';
    return 'other';
}

/**
 * Build-time eligibility decision. The client router re-checks the runtime
 * conditions (crawler UA, consent region, 12 h popunder cap).
 */
export function adEligible(pathname: string, robots?: string): boolean {
    const clean = pathname.endsWith('/') ? pathname : `${pathname}/`;
    if (clean === '/404/') return false;
    if (AD_EXCLUDED_PATHS.includes(clean)) return false;
    if (typeof robots === 'string' && /noindex/i.test(robots)) return false;
    return true;
}
