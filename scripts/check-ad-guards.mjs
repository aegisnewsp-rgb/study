// scripts/check-ad-guards.mjs — ad-eligibility and frequency guards.
//
// AdRouter's decisions are unreachable from server-side checks: they run in the
// browser, and their failure mode is silent (an over-eager guard removes all ad
// revenue; an under-eager one serves traffic we promised not to). This runs the
// emitted AdRouter body against a DOM stub and asserts each guard, using the
// real CRAWLER_UA_RE imported from src/lib/ads.ts so the crawler case tests
// production behaviour rather than a stub that can never match.
//
//   node scripts/check-ad-guards.mjs      # exits non-zero on any failure
//
// Runs the emitted AdRouter body under a DOM stub and asserts the popunder
// session cap, the WebDriver IVT guard, and that the popunder switch still works.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

// Pull the real crawler regex out of src/lib/ads.ts so the crawler case tests
// production behaviour rather than a stub that can never match.
const adsTs = readFileSync('src/lib/ads.ts', 'utf8');
const m = adsTs.match(/CRAWLER_UA_RE = new RegExp\(([\s\S]*?)\);/);
const args = new Function('return [' + m[1] + ']')();
const crawlerSrc = args[0];
const crawlerFlags = args[1] || '';

const src = readFileSync('src/components/AdRouter.astro', 'utf8');
const body = src.match(/const js = `\n([\s\S]*?)\n`;/)[1].replace(/\\\\/g, '\\');
const js = body.replace(/\$\{[^}]*\}/g, '__CFG__');

function makeEnv({ zoneEnabled = true, webdriver = false, sessionHad = false, lastPopunder = 0, ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/128 Safari/537.36', geo = 'IN' } = {}) {
  const scripts = []; const listeners = {};
  const cfg = {
    enabled: true, tag: 'https://quge5.com/88/tag.min.js', multitag: 280401,
    popunder: 11805678, popunderZoneEnabled: zoneEnabled, cooldownMs: 43200000,
    popunderTag: 'https://al5sm.com/tag.min.js',
    pubKey: 'sr:pu:ts', sessionKey: 'sr:pu:session', geoKey: 'sr:geo', pageGeo: 'IN',
    restricted: ['DE', 'FR', 'GB', 'CH'], crawlerSrc, crawlerFlags,
    aiRefSrc: '$^', aiRefFlags: '', allowPopunder: true, allowMultitag: true, host: 'studyroadmap.in',
  };
  const mk = (init = {}) => { const m = new Map(Object.entries(init)); return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: k => m.delete(k) }; };
  const el = (t) => ({ tagName: t, id: '', src: '', dataset: {}, setAttribute(k, v) { this[k] = v; }, remove() {}, getAttribute(k) { return this[k] === undefined ? null : this[k]; } });
  const document = {
    documentElement: { setAttribute() {}, classList: { add() {}, remove() {} } },
    head: { appendChild: n => scripts.push(n) }, body: { appendChild: n => scripts.push(n) },
    createElement: el, getElementById: id => scripts.find(s => s.id === id) || null,
    querySelectorAll: () => [], querySelector: () => null,
    addEventListener: (t, f) => { (listeners[t] = listeners[t] || []).push(f); },
    removeEventListener() {}, cookie: '', readyState: 'complete', referrer: '',
  };
  const win = {
    document, localStorage: mk(lastPopunder ? { 'sr:pu:ts': String(lastPopunder) } : {}),
    sessionStorage: mk(sessionHad ? { 'sr:pu:session': '1' } : {}),
    location: { search: '', href: 'https://studyroadmap.in/exams/neet/', hostname: 'studyroadmap.in' },
    navigator: { userAgent: ua, webdriver },
    addEventListener: (t, f) => { (listeners[t] = listeners[t] || []).push(f); },
    dispatchEvent() {}, setTimeout: f => { f(); return 1; }, clearTimeout() {},
    requestIdleCallback: f => { f(); return 1; },
    fetch: () => Promise.resolve({ text: () => Promise.resolve('loc=' + geo) }),
    CustomEvent: function () {}, SR_ADS_OFF: false,
    __SR_CONSENT: { state: 'granted', ads: true, analytics: true },
  };
  win.window = win;
  const ctx = vm.createContext({ window: win, document, navigator: win.navigator, location: win.location, localStorage: win.localStorage, sessionStorage: win.sessionStorage, fetch: win.fetch, CustomEvent: win.CustomEvent, setTimeout: win.setTimeout, clearTimeout: win.clearTimeout, requestIdleCallback: win.requestIdleCallback, console, URL, RegExp, Date, Math, JSON });
  vm.runInContext(js.replace('__CFG__', JSON.stringify(cfg)), ctx);
  return { ids: scripts.map(s => s.id).filter(Boolean), scripts, ad: win.__SR_AD };
}

const HOST = (env, id) => { const s = env.scripts.find(x => x.id === id); return s ? s.src : null; };
const ZONE = (env, id) => { const s = env.scripts.find(x => x.id === id); return s ? s.dataset.zone : null; };

const cases = [
  ['human, fresh session      ', {}, env => env.ids.includes('sr-monetag') && env.ids.includes('sr-monetag-popunder') && env.ad.popunder === true],
  ['popunder uses its own host', {}, env => HOST(env, 'sr-monetag-popunder') === 'https://al5sm.com/tag.min.js' && ZONE(env, 'sr-monetag-popunder') === '11805678'],
  ['multitag uses shared host ', {}, env => HOST(env, 'sr-monetag') === 'https://quge5.com/88/tag.min.js' && env.scripts.find(x => x.id === 'sr-monetag').getAttribute('data-zone') === '280401'],
  ['human, session already had ', { sessionHad: true }, env => !env.ids.includes('sr-monetag-popunder') && env.ad.popunderSkipped === 'session-cap'],
  ['human, inside 12h cooldown ', { lastPopunder: Date.now() - 3600_000 }, env => !env.ids.includes('sr-monetag-popunder') && env.ad.popunderSkipped === 'cooldown'],
  ['human, past 12h cooldown   ', { lastPopunder: Date.now() - 13 * 3600_000 }, env => env.ids.includes('sr-monetag-popunder') && env.ad.popunder === true],
  ['WebDriver automation       ', { webdriver: true }, env => env.ids.length === 0 && env.ad.reason === 'automation'],
  ['declared crawler           ', { ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }, env => env.ids.length === 0 && env.ad.reason === 'crawler'],
  ['popunder switch off        ', { zoneEnabled: false }, env => env.ids.length === 1 && env.ad.popunderSkipped === 'zone-not-serving'],
];
let bad = 0;
for (const [name, opts, check] of cases) {
  const env = makeEnv(opts);
  const ok = check(env);
  if (!ok) bad++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}  scripts=[${env.ids.join(',')}] reason=${env.ad.reason} skip=${env.ad.popunderSkipped}`);
}
console.log(bad ? `\n${bad} FAILURES` : '\nall guard cases pass');
process.exit(bad ? 1 : 0);
