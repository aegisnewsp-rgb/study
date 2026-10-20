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
// Exit codes: 0 = all journeys passed, 1 = journeys ran and a check failed,
// 2 = could not run at all (missing browser). Codes 1 and 2 are deliberately
// distinct: only 1 is evidence about the CMP.
import { chromium } from 'playwright';
import { readdirSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

let BASE = process.argv[2] || 'http://127.0.0.1:8899';
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
      // Assert on the Monetag loader that actually runs. The MultiTag
      // container (#sr-monetag) was switched off by operator decision
      // 2026-09-17 — it bundled a second uncapped popunder plus In-Page Push
      // at $0.0099 eCPM — so pinning this to that one id was wrong twice
      // over: the "loader present" positives could never pass, and every
      // "no loader" negative passed vacuously because the element never
      // existed at all. Consent gating of ad loads is the real invariant
      // here, so match any Monetag-sourced zone script.
      monetag: !!document.querySelector(
        "script[id^='sr-monetag'], script[id^='sr-push-tag'], script[id^='sr-vignette']"
      ),
      umami: !!document.getElementById('sr-umami'),
      gtag: !!document.getElementById('sr-gtag'),
    },
    ccHtml: !!document.querySelector('#cc-main, .cc--main, [data-cc]'),
    modals: document.querySelectorAll('.cm, .pm, #cc-main').length,
  };
});

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Playwright resolves its browser by build number (playwright 1.60.0 wants
// chromium_headless_shell-1223). That number is a property of the installed
// *package*, not of the machine: a box can carry a complete, working headless
// shell at a different build and a bare launch() still throws "Executable
// doesn't exist". That is how this gate came to sit at rc=2 for a day while
// chromium was installed and working the whole time — and a gate that asserts
// nothing is worse than no gate, because it reads as coverage. So: try the
// pinned build, then fall back to any complete build actually on disk.
function installedBrowsers() {
  const found = [];
  const roots = [
    process.env.PLAYWRIGHT_BROWSERS_PATH,
    join(process.env.HOME || homedir(), '.cache', 'ms-playwright'),
    join(homedir(), '.cache', 'ms-playwright'),
  ].filter(Boolean);
  for (const root of new Set(roots)) {
    let entries;
    try { entries = readdirSync(root, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      if (!e.isDirectory() || !/^chromium(_headless_shell)?-/.test(e.name)) continue;
      for (const rel of [
        ['chrome-headless-shell-linux64', 'chrome-headless-shell'],
        ['chrome-linux', 'chrome'],
      ]) {
        const p = join(root, e.name, ...rel);
        if (existsSync(p)) { found.push(p); break; }
      }
    }
  }
  // A system browser is a valid last resort.
  for (const p of ['/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome']) {
    if (existsSync(p)) found.push(p);
  }
  // Highest build number first: the pinned one wins when it is present.
  return [...new Set(found)].sort().reverse();
}

let browser;
let launchNote = '';
let lastLaunchError = null;
try {
  browser = await chromium.launch();
} catch (err) {
  lastLaunchError = err;
  if (/Executable doesn't exist|playwright install/i.test(String((err && err.message) || ''))) {
    for (const p of installedBrowsers()) {
      try { browser = await chromium.launch({ executablePath: p }); lastLaunchError = null; launchNote = p; break; } catch { /* try next */ }
    }
    if (browser) console.log(`check-consent-journeys: pinned build unavailable; using installed browser ${launchNote}`);
  }
}
if (!browser) {
  const err = lastLaunchError;
  // A precondition failure is NOT a CMP defect, and the two must not share an
  // exit code. Both used to exit 1 with zero check results printed, so an
  // operator could not tell "this gate never ran" from "the CMP is broken" —
  // which on the AdSense-critical path is the worst possible ambiguity.
  //   0 = all journeys passed   1 = journeys ran and a check failed   2 = could not run
  const missing = /Executable doesn't exist|playwright install/i.test(String((err && err.message) || ''));
  if (missing) {
    console.error('check-consent-journeys: PRECONDITION NOT MET — no Chromium build found for Playwright.');
    console.error('  Fix: npx playwright install   (a working system /usr/bin/chromium also works; it is auto-detected)');
    console.error('  This gate drives a real browser; it can say nothing about the CMP without one.');
  } else {
    console.error('check-consent-journeys: could not launch Chromium — this is NOT a CMP verdict.');
  }
  console.error(String((err && err.message) || err).split('\n')[0]);
  process.exit(2);
}

// ── 1. EEA visitor, no decision yet: banner required, nothing loads ─────────
// A locally served dist/ is the gate's only precondition after the browser, and
// making an operator remember to start one is how this gate sat unrun for a day.
// Serve it here when nothing is already listening, so the chain can drive it
// unattended. An already-running server always wins.
const { spawn } = await import('node:child_process');
let server = null;
async function reachable(u) {
  try { return (await fetch(u, { method: 'GET' })).ok; } catch { return false; }
}
if (!(await reachable(BASE + '/'))) {
  const dist = new URL('../dist/', import.meta.url);
  if (existsSync(dist)) {
    const port = Number(new URL(BASE).port || 0) || 8899;
    const host = new URL(BASE).hostname;
    if (!(await reachable(`http://127.0.0.1:${port}/`))) {
      server = spawn('python3', ['-m', 'http.server', String(port), '--directory', dist.pathname, '--bind', host],
        { stdio: 'ignore' });
      for (let i = 0; i < 40 && !(await reachable(`http://127.0.0.1:${port}/`)); i++) {
        await new Promise((r) => setTimeout(r, 250));
      }
      if (await reachable(`http://127.0.0.1:${port}/`)) {
        console.log(`check-consent-journeys: serving dist/ on 127.0.0.1:${port}`);
        BASE = `http://127.0.0.1:${port}`;
      }
    }
  }
}

// Every journey below throws an uncaught exception when the served build is
// not reachable (ERR_CONNECTION_REFUSED). Node then exits 1 — and 1 is this
// gate's code for "journeys ran and the CMP failed". So a forgotten server
// reported the consent manager as broken: the one false verdict this gate
// exists to prevent, produced by the gate itself. Preflight the base URL and
// fail as a precondition (2) instead.
try {
  const probe = await fetch(BASE + '/', { method: 'GET' });
  if (!probe.ok && probe.status >= 500) throw new Error(`HTTP ${probe.status}`);
} catch (err) {
  console.error(`check-consent-journeys: PRECONDITION NOT MET — no build served at ${BASE}`);
  console.error(`  ${String((err && err.message) || err).split('\n')[0]}`);
  console.error('  Fix: python3 -m http.server 8899 --directory dist &   (or pass a BASE that is already served)');
  console.error('  This gate drives a real browser; it can say nothing about the CMP without one.');
  if (server) server.kill();
  process.exit(2);
}

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
if (server) server.kill();
console.log(results.join('\n'));
console.log(`\n${results.length - failures}/${results.length} checks passed`);
process.exit(failures ? 1 : 0);
