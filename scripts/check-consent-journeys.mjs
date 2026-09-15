// scripts/check-consent-journeys.mjs — browser verification for the CMP.
//
// The CMP is the one component that decides whether *anything* loads for a
// visitor, and its failure mode is silent: a broken callback leaves
// window.__SR_CONSENT at 'unknown', which AdRouter reads as "load nothing" in
// EEA/UK/CH. No server-side check can see that. These journeys drive a real
// browser through it.
//
// Runs against a locally served `dist/` build. Cloudflare's /cdn-cgi/trace does
// not exist locally, so each journey stubs it with the country under test —
// that is the same first-party signal the production host returns, so nothing
// about the code path changes.
//
//   python3 -m http.server 8899 --directory dist &
//   node scripts/check-consent-journeys.mjs http://127.0.0.1:8899
//
// Exits non-zero if any check fails (25 checks as of 2026-09-15).
import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://127.0.0.1:8899';
const PAGE = '/exams/neet/';
const results = [];
let failures = 0;

function check(name, ok, detail = '') {
  results.push(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
  if (!ok) failures++;
}

// A realistic UA by default: Playwright's own headless UA matches the site's
// crawler guard (CRAWLER_UA_RE includes HeadlessChrome), so every journey would
// otherwise be suppressed as a bot and prove nothing. The crawler journey
// overrides this deliberately.
const HUMAN_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

async function newCtx(browser, { geo, ua = HUMAN_UA } = {}) {
  const ctx = await browser.newContext({
    userAgent: ua,
    locale: 'en-GB',
  });
  // vanilla-cookieconsent 3.1.0 ships hideFromBots:true, which suppresses its
  // own UI when navigator.webdriver is set — as it is under Playwright. Without
  // this the banner can never render in an automated run and the journeys would
  // report a product bug that only exists in the harness.
  await ctx.addInitScript(() => {
    try {
      Object.defineProperty(navigator, 'webdriver', { get: () => false });
    } catch {}
  });
  if (geo !== undefined) {
    await ctx.route('**/cdn-cgi/trace', (route) =>
      route.fulfill({ status: 200, contentType: 'text/plain', body: `fl=1\nloc=${geo}\n` }));
  } else {
    await ctx.route('**/cdn-cgi/trace', (route) => route.abort());
  }
  return ctx;
}

const state = (page) => page.evaluate(() => {
  const c = window.__SR_CONSENT || {};
  const a = window.__SR_AD || {};
  return {
    consent: c.state, ads: !!c.ads, analytics: !!c.analytics, geo: c.geo, via: c.via,
    required: !!c.required,
    ad: { multitag: !!a.multitag, popunder: !!a.popunder, reason: a.reason, visitorGeo: a.visitorGeo },
    scripts: {
      monetag: !!document.getElementById('sr-monetag'),
      umami: !!document.getElementById('sr-umami'),
      gtag: !!document.getElementById('sr-gtag'),
    },
    ccHtml: !!document.querySelector('#cc-main, .cc--main, [data-cc]'),
    modals: document.querySelectorAll('.cm, .pm, #cc-main').length,
  };
});

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await chromium.launch();

// ── 1. EEA visitor, no decision yet: banner required, nothing loads ─────────
{
  const ctx = await newCtx(browser, { geo: 'DE' });
  const page = await ctx.newPage();
  await page.goto(BASE + PAGE, { waitUntil: 'load' });
  await wait(1200);
  const s = await state(page);
  check('EEA/DE: consent required', s.required === true, `required=${s.required} geo=${s.geo}`);
  check('EEA/DE: no decision yet', s.consent === 'unknown', `state=${s.consent}`);
  check('EEA/DE: consent banner rendered', s.ccHtml || s.modals > 0, `modals=${s.modals}`);
  check('EEA/DE: no Monetag loader before consent', s.scripts.monetag === false);
  check('EEA/DE: no analytics tracker before consent', s.scripts.umami === false);
  check('EEA/DE: multitag not started', s.ad.multitag === false, `reason=${s.ad.reason}`);

  // Accept all → full surface unlocks
  const accept = page.getByRole('button', { name: 'Accept all' }).first();
  if (await accept.count()) { await accept.click(); await wait(5200); }
  const a = await state(page);
  check('EEA/DE accept: ads granted', a.ads === true, `state=${a.consent}`);
  check('EEA/DE accept: analytics granted', a.analytics === true);
  check('EEA/DE accept: Monetag loader present', a.scripts.monetag === true, `reason=${a.ad.reason}`);
  check('EEA/DE accept: umami tracker present', a.scripts.umami === true);
  await ctx.close();
}

// ── 2. EEA visitor who rejects: stays off, and survives a reload ────────────
{
  const ctx = await newCtx(browser, { geo: 'DE' });
  const page = await ctx.newPage();
  await page.goto(BASE + PAGE, { waitUntil: 'load' });
  await wait(1200);
  const reject = page.getByRole('button', { name: 'Reject all' }).first();
  if (await reject.count()) { await reject.click(); await wait(3000); }
  const r = await state(page);
  check('EEA/DE reject: decision recorded as denied', r.consent === 'denied', `state=${r.consent}`);
  check('EEA/DE reject: no Monetag loader', r.scripts.monetag === false);
  check('EEA/DE reject: no umami tracker', r.scripts.umami === false);

  // Reload → the stored rejection is honoured, no banner re-shown.
  const page2 = await ctx.newPage();
  await page2.goto(BASE + PAGE, { waitUntil: 'load' });
  await wait(1500);
  const r2 = await state(page2);
  check('EEA/DE reload: rejection persists', r2.consent === 'denied' && r2.ads === false, `state=${r2.consent}`);
  check('EEA/DE reload: no re-consent prompt needed', r2.ccHtml === false);
  await ctx.close();
}

// ── 3. Non-EEA visitor: unchanged behaviour, no banner ─────────────────────
{
  const ctx = await newCtx(browser, { geo: 'IN' });
  const page = await ctx.newPage();
  await page.goto(BASE + PAGE, { waitUntil: 'load' });
  await wait(5200);
  const s = await state(page);
  check('IN: not a consent region', s.required === false);
  check('IN: no banner shown', s.ccHtml === false, `modals=${s.modals}`);
  check('IN: Monetag loader present', s.scripts.monetag === true, `reason=${s.ad.reason}`);
  check('IN: umami tracker present', s.scripts.umami === true);
  await ctx.close();
}

// ── 4. Travel case: non-EU inferred grant must NOT unlock ads inside the EEA ─
// Same browser context on purpose: localStorage (the stored decision) must
// survive, while sessionStorage (the cached country) does not.
{
  let geo = 'IN';
  const ctx = await browser.newContext({ locale: 'en-GB', userAgent: HUMAN_UA });
  await ctx.addInitScript(() => {
    try { Object.defineProperty(navigator, 'webdriver', { get: () => false }); } catch {}
  });
  await ctx.route('**/cdn-cgi/trace', (route) =>
    route.fulfill({ status: 200, contentType: 'text/plain', body: `fl=1\nloc=${geo}\n` }));
  const page = await ctx.newPage();
  await page.goto(BASE + PAGE, { waitUntil: 'load' });
  await wait(2500);
  const before = await state(page);
  check('travel: IN baseline loads ads', before.scripts.monetag === true, `state=${before.consent}`);

  geo = 'DE';
  const page2 = await ctx.newPage();
  await page2.goto(BASE + PAGE, { waitUntil: 'load' });
  await wait(2500);
  const s = await state(page2);
  check('travel IN→DE: assumed grant not replayed as consent',
    s.scripts.monetag === false && s.ad.multitag === false, `state=${s.consent} via=${s.via}`);
  check('travel IN→DE: banner offered instead', s.ccHtml === true, `modals=${s.modals}`);
  await ctx.close();
}

// ── 5. Declared crawler: no banner, no ads ────────────────────────────────
{
  const ctx = await newCtx(browser, {
    geo: 'DE',
    ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  });
  const page = await ctx.newPage();
  await page.goto(BASE + PAGE, { waitUntil: 'load' });
  await wait(2500);
  const s = await state(page);
  check('crawler: no banner', s.ccHtml === false, `modals=${s.modals}`);
  check('crawler: no Monetag loader', s.scripts.monetag === false, `reason=${s.ad.reason}`);
  await ctx.close();
}

// ── 6. ?noads=1 opt-out ───────────────────────────────────────────────────
{
  const ctx = await newCtx(browser, { geo: 'IN' });
  const page = await ctx.newPage();
  await page.goto(BASE + PAGE + '?noads=1', { waitUntil: 'load' });
  await wait(2500);
  const s = await state(page);
  check('noads=1: ads suppressed', s.scripts.monetag === false, `state=${s.consent} reason=${s.ad.reason}`);
  await ctx.close();
}

await browser.close();
console.log(results.join('\n'));
console.log(`\n${results.length - failures}/${results.length} checks passed`);
process.exit(failures ? 1 : 0);
