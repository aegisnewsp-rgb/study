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
 * had two formats swapped), then re-audited zone-by-zone through the Monetag
 * MCP on 2026-09-16, which enumerated all 8 zones on the account. Every zone on
 * the account is listed here, wired or not — an unlisted zone id is how a
 * "missing" zone hides. Formats come from `zone_type_id` + `direction_id` in
 * that API, not from the dashboard labels:
 *
 *   zone_type_id 115 + direction 1   -> OnClick (Popunder)
 *   zone_type_id  40 + direction 61  -> In-Page Push
 *   zone_type_id  74 + direction 61  -> Vignette Banner
 *   multitag:true, no type           -> Push Notifications
 *
 *   11798843  Rich tag      OnClick (Popunder)   MULTI  <- OURS. Container's
 *   11798844  Rich tag      In-Page Push         MULTI     PRIMARY OnClick
 *   11798845  Rich tag      Vignette Banner      MULTI     format, our biggest
 *   11798846  Rich tag      Push Notifications   MULTI     single revenue line.
 *   11805678  standalone    OnClick (Popunder)   12 h cap
 *
 * CORRECTED 2026-09-17 against `monetag_get_zones`, three times over:
 *
 *   * 11798843 IS ours. The API returns it with site_id 3489910 (our site),
 *     multitag:true, zone_type_id 115, sharing site_direction_id 3877508 with
 *     our standalone popunder. A prior session read the container's
 *     `extra_formats` array ([11798846, 11798845, 11798844]) and concluded that
 *     WAS the container. It is the container's EXTRA formats; 11798843 is its
 *     primary OnClick and can never appear there. Grading on that array
 *     excluded our top earner — $0.026298 of $0.058825 over 7 days, ~45% — from
 *     "attributable to us" and told every review run to ignore it.
 *   * 11799057 was NOT dead. We probed it against the shared quge5.com host and
 *     got a 404. Its real tag is n6wxm.com/vignette.min.js (HTTP 200, 193 KB).
 *     Same trap as the popunder host mismatch below: the host is per-zone, so a
 *     404 from the wrong host is not a dead zone.
 *   * 11823622 is a DIRECT LINK (zone_type_id 114), created 2026-09-17 — not an
 *     OnClick zone as an earlier reading of this file assumed.
 *
 * The container is OFF as of 2026-09-17, by operator decision — see the block
 * on MONETAG_MULTITAG_ENABLED below for the 7-day numbers behind it.
 *
 * Still deliberately NOT wired — do not "finish" these by adding a loader.
 * Each one duplicates a format we already serve standalone, so a loader would
 * buy a second request and a wider CSP for no extra impression:
 *
 *   11799015  standalone    In-Page Push         duplicate of the format we just
 *                                                 removed from the container for
 *                                                 being the account's worst CPM
 *                                                 (measured $0.0099 eCPM against
 *                                                 $0.144 for vignette). Negative
 *                                                 value by definition.
 *   11805740  standalone    In-Page Push         same as 11799015; created
 *                                                 later, same duplicate/CPM
 *                                                 argument. Kept in the census
 *                                                 so it is a documented decision
 *                                                 rather than an oversight
 */
export const MONETAG_MULTITAG_ZONE = 280401;

/**
 * The MultiTag container is OFF as of 2026-09-17, by operator decision.
 *
 * Why: a container is all-or-nothing, and its four members are not equally worth
 * their requests. Graded over the 7 days to 2026-09-17
 * (`monetag_get_statistics`, group_by=zone_id):
 *
 *   11798843  OnClick        66 impr   $0.026298   eCPM $0.399  <- biggest line
 *   11798845  Vignette      129 impr   $0.018519   eCPM $0.144
 *   11798844  In-Page Push  193 impr   $0.001912   eCPM $0.0099 <- 14x worse
 *   11798846  Push            7 impr   $0.000000   3 subscriptions
 *
 * 11798844 alone took 454 of the account's requests to earn $0.0019. And
 * 11798843 is a SECOND, uncapped popunder: the container fires it on load while
 * our own capped popunder (11805678) is also running, which breaks the
 * one-popunder-per-session rule this file encodes.
 *
 * So the container is replaced by three standalone tags, each one we choose, cap
 * and can attribute:
 *
 *   11805678  OnClick (Popunder)   al5sm.com/tag.min.js        (existing)
 *   11799057  Vignette Banner      n6wxm.com/vignette.min.js   (new here)
 *   11823622  Direct Link          omg10.com/4/11823622        (new here)
 *
 * COST, stated plainly: 11798843 was ~45% of 7-day revenue. Dropping the
 * container gives that up in exchange for popunder compliance and for no longer
 * paying 454 requests for $0.0019. The standalone vignette should recover part of
 * it; the direct link is new and unmeasured.
 *
 * CONSEQUENCE: push (11798846) is `multitag: true`, so the container was its
 * only delivery path — but it is NOT container-only. Monetag's standalone push
 * endpoint on pushno.com resolves the zone server-side and activates for this
 * zone and no other, so push survives the container's removal. See
 * MONETAG_PUSH_TAG_SRC below.
 */
export const MONETAG_MULTITAG_ENABLED = false;

/**
 * Standalone Vignette Banner — zone 11799057, "Talented tag". Replaces the
 * container's 11798845 as our in-content native format.
 *
 * Its tag host is n6wxm.com and the bundle is `vignette.min.js`, NOT the shared
 * quge5.com MultiTag host. Verified 2026-09-17:
 * https://n6wxm.com/vignette.min.js -> HTTP 200, 193,625 bytes.
 */
export const MONETAG_VIGNETTE_ZONE = 11799057;
export const MONETAG_VIGNETTE_TAG_SRC = 'https://n6wxm.com/vignette.min.js';
export const MONETAG_VIGNETTE_ENABLED = true;

/**
 * Direct Link — zone 11823622, "Nice tag", created 2026-09-17. A URL, not a
 * script: it belongs on a user-initiated element and opens the offer only when
 * the visitor chooses to click.
 *
 * Placed as an explicitly labelled sponsored link in the footer — the least
 * intrusive surface that is still honest to the reader, and the one surface that
 * cannot fire without a deliberate click. It is never opened automatically: an
 * auto-open would be a second popunder, which the policy in this file forbids.
 */
export const MONETAG_DIRECTLINK_ZONE = 11823622;
export const MONETAG_DIRECTLINK_URL = 'https://omg10.com/4/11823622';
export const MONETAG_DIRECTLINK_ENABLED = true;

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
 *
 * Success criterion — do not call this leg fixed on the strength of the diff.
 * Registering a worker is necessary but not sufficient: the zone only starts
 * reporting once Monetag's own tag turns that worker into a subscription, and a
 * visitor who never grants notification permission never becomes one. The leg
 * is closed only when the Monetag MCP shows subscriptions > 0 for 11798846 (it
 * stood at 1,502 prerequests / 0 requests / 0 subscriptions over
 * 2026-09-13 → 09-16).
 *
 * CORRECTED 2026-09-16 by measurement (`/data/push-late-register-probe.mjs`).
 * An earlier note in this file claimed the tag switches to a "worker-backed"
 * request (`…&sw=3.1.647`) once a worker exists, and treated that as the fix.
 * That was wrong. The probe serves `/sw.js` as 404 with **zero** registrations
 * and the tag still sends `…&sw=3.1.647`: `sw=` is the tag's own bundle version
 * parameter, present either way, and the live-vs-probe comparison that produced
 * the claim was reading a URL truncated at 96 characters. The same probe also
 * shows the tag calls `Notification.requestPermission()` on load with
 * `navigator.userActivation.isActive === false`, worker or no worker.
 *
 * So the dead leg is a *subscription* problem, not a worker problem. An
 * ungestured permission request is suppressed into Chrome's quiet prompt
 * (`kGestureGatedNotificationMessage` in `permission_request_manager.cc`) or
 * ignored outright — Firefox and Safari require the gesture — so nobody
 * subscribes and the zone has nothing to deliver. The fix is a reader-initiated
 * opt-in: the worker is registered from inside a click and the permission
 * request is made there, carrying user activation. See `offerPush()` in
 * AdRouter.astro.
 */
export const MONETAG_PUSH_ZONE = 11798846;
export const MONETAG_PUSH_SW_PATH = '/sw.js';
/**
 * ON as of 2026-09-17, and the reason is worth recording because it reverses a
 * conclusion this file carried for a day.
 *
 * Push was turned off when the container went off, on the assumption that a
 * `multitag: true` zone with `zone_type_id: null` has no tag of its own and so
 * must die with its container. That assumption was wrong.
 *
 * `/data/pushno-standalone-probe.mjs` loads Monetag's documented standalone push
 * tag the way a browser does, with PushManager.subscribe and
 * serviceWorker.register spied on, and compares a real zone id against a bogus
 * one. Results, 2026-09-17:
 *
 *   p=11798846 (ours)      -> registers /sw.js?v=…&p=11798846, calls
 *                             my.rtmark.net/gid.js?…&zoneId=11798846&source=pusher
 *   p=11798845 (vignette)  -> nothing
 *   p=11805678 (OnClick)   -> nothing
 *   p=11799057 (vignette)  -> nothing
 *   p=99999999 (bogus)     -> nothing
 *
 * So the endpoint resolves the zone server-side and activates ONLY for a push
 * zone — and it activates for the zone we already have. No new zone is needed.
 * (A bare curl cannot show this: ntfc.php returns a generic 29,139-byte
 * bootstrap, byte-identical for a real id and a bogus one.)
 *
 * The worker we already self-host at `/sw.js` is that zone's own worker, so the
 * tag and the worker agree on the zone id. CSP: pushno.com is in script-src
 * (nginx.conf), and connect-src is already `https:` so the loader's fetches to
 * pushno.com and my.rtmark.net need nothing further.
 */
export const MONETAG_PUSH_TAG_SRC = 'https://pushno.com/ntfc.php?p=11798846&tco=1';
export const MONETAG_PUSH_ENABLED = true;

/**
 * Session flag marking that the offer was already shown in this tab session.
 *
 * Without it the offer re-renders on every page load for a reader who declines
 * to answer (neither grant nor "Not now"), so a reader working through five
 * notes meets the same bottom bar five times. That is exactly the nag pattern
 * the opt-in exists to avoid. Session-scoped rather than permanent on purpose:
 * a returning reader in a new session may reasonably be asked once more, which
 * a permanent flag would forbid while a per-page-load flag would nag.
 */
export const MONETAG_PUSH_OFFERED_KEY = 'sr:push:offered';

/**
 * Reader dismissed the notification offer. Once set we never ask again — an
 * opt-in that reappears is a nag, and the reader has given a clear answer.
 */
export const MONETAG_PUSH_DISMISS_KEY = 'sr:push:dismissed';

/**
 * sessionStorage flag for the one post-consent reload. The Monetag tag reads
 * notification permission when it loads, so after a reader grants it we reload
 * once with permission already granted — that is what turns a permission into a
 * subscription. Guarded per tab session so a denied-then-retried state can never
 * loop.
 */
export const MONETAG_PUSH_RELOADED_KEY = 'sr:push:reloaded';

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
 * the cross-session floor. (A 6 h floor was trialled on 2026-09-15 and reverted
 * to match the "12h-cap" zone definition.)
 *
 * THE EFFECTIVE RULE, stated once so the layers do not read as three competing
 * policies (an adversarial review on 2026-09-16 flagged exactly that):
 *
 *   1. one per tab session      — the UX rule, strictest, enforced by
 *                                 POPUNDER_SESSION_KEY. A reader working through
 *                                 notes never meets a second popunder.
 *   2. one per browser per 12 h — the cross-session backstop, this constant.
 *   3. Monetag's server-side cap — an unknown third layer we do NOT rely on.
 *                                 It only affects fill, not our own behaviour.
 *
 * So the contract is (2) applied only when (1) allows. Nothing here depends on
 * the dashboard's frequency setting, and changing that setting changes fill, not
 * our surface policy.
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
