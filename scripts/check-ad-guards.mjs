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
// session cap, the WebDriver IVT guard, the push-worker registration gate, and
// that the popunder switch still works.
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

// A stray backtick inside the template literal closes it early. The extraction
// regex above then happily returns a TRUNCATED body that still runs, so every
// guard case can pass while the real build fails with 'Expected ";" but found
// ...' — which is exactly what happened on 2026-09-16 (a backtick in a comment).
// Assert the body reaches its real end before trusting anything it says.
const TERMINATOR = 'gate();\n})();';
if (!body.trimEnd().endsWith(TERMINATOR)) {
  console.error(
    'FATAL AdRouter emitted body looks truncated — a backtick inside the `js` ' +
      'template literal closes it early and breaks `astro build`.\n' +
      `  expected it to end with: ${JSON.stringify(TERMINATOR)}\n` +
      `  actual last 120 chars:   ${JSON.stringify(body.trimEnd().slice(-120))}`
  );
  process.exit(1);
}
const strayBackticks = (body.match(/`/g) || []).length;
if (strayBackticks) {
  console.error(`FATAL emitted body contains ${strayBackticks} backtick(s); these terminate the template literal.`);
  process.exit(1);
}
const js = body.replace(/\$\{[^}]*\}/g, '__CFG__');

function makeEnv({ zoneEnabled = true, multitagEnabled = false, vignetteEnabled = true, webdriver = false, sessionHad = false, lastPopunder = 0, ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/128 Safari/537.36', geo = 'IN', consent = 'granted', adsOff = false, pushEnabled = true, pushPermission = 'default', pushDismissed = false, pushReloaded = false, permResult = 'granted' } = {}) {
  const scripts = []; const listeners = {};
  // Push registration is a permission request, not a decoration: record every
  // call so the gate can be asserted synchronously (the real API is async).
  const pushCalls = [];
  const permCalls = [];
  const reloads = [];
  const cfg = {
    enabled: true, tag: 'https://quge5.com/88/tag.min.js', multitag: 280401,
    // Container OFF (2026-09-17). It bundled a second uncapped popunder plus
    // In-Page Push at a $0.0099 eCPM. Production sets this false; the
    // reversibility case below flips it back on to prove one constant still
    // controls the whole leg.
    multitagEnabled,
    vignette: 11799057, vignetteTag: 'https://n6wxm.com/vignette.min.js', vignetteEnabled,
    directlink: 11823622, directlinkUrl: 'https://omg10.com/4/11823622', directlinkEnabled: true,
    pushZone: 11798846, pushSw: '/sw.js', pushEnabled,
    pushDismissKey: 'sr:push:dismissed', pushReloadKey: 'sr:push:reloaded',
    popunder: 11805678, popunderZoneEnabled: zoneEnabled, cooldownMs: 43200000,
    popunderTag: 'https://al5sm.com/tag.min.js',
    pubKey: 'sr:pu:ts', sessionKey: 'sr:pu:session', geoKey: 'sr:geo', pageGeo: 'IN',
    restricted: ['DE', 'FR', 'GB', 'CH'], crawlerSrc, crawlerFlags,
    aiRefSrc: '$^', aiRefFlags: '', allowPopunder: true, allowMultitag: true, host: 'studyroadmap.in',
  };
  const mk = (init = {}) => { const m = new Map(Object.entries(init)); return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: k => m.delete(k) }; };
  // Elements need listeners so the opt-in's click path can be exercised: the
  // whole point of the control is that registration + permission happen inside
  // the click, so a test that only checks the markup would miss the fix.
  const el = (t) => {
    const e = {
      tagName: t, id: '', src: '', dataset: {}, style: { cssText: '' }, textContent: '', type: '',
      children: [], handlers: {},
      setAttribute(k, v) { this[k] = v; }, remove() { const i = nodes.indexOf(this); if (i >= 0) nodes.splice(i, 1); this.removed = true; },
      getAttribute(k) { return this[k] === undefined ? null : this[k]; },
      appendChild(c) { this.children.push(c); return c; },
      addEventListener(t2, f) { (this.handlers[t2] = this.handlers[t2] || []).push(f); },
      click() { (this.handlers.click || []).forEach(f => f({ preventDefault() {} })); },
    };
    return e;
  };
  const nodes = [];
  const document = {
    documentElement: { setAttribute() {}, classList: { add() {}, remove() {} } },
    head: { appendChild: n => { nodes.push(n); scripts.push(n); return n; } },
    body: { appendChild: n => { nodes.push(n); scripts.push(n); return n; } },
    createElement: el, getElementById: id => nodes.find(s => s.id === id) || null,
    querySelectorAll: () => [], querySelector: () => null,
    addEventListener: (t, f) => { (listeners[t] = listeners[t] || []).push(f); },
    removeEventListener() {}, cookie: '', readyState: 'complete', referrer: '',
  };
  const win = {
    document, localStorage: mk({ ...(lastPopunder ? { 'sr:pu:ts': String(lastPopunder) } : {}), ...(pushDismissed ? { 'sr:push:dismissed': '1' } : {}) }),
    sessionStorage: mk({ ...(sessionHad ? { 'sr:pu:session': '1' } : {}), ...(pushReloaded ? { 'sr:push:reloaded': '1' } : {}) }),
    location: { search: '', href: 'https://studyroadmap.in/exams/neet/', hostname: 'studyroadmap.in', reload: () => reloads.push(true) },
    Notification: { permission: pushPermission, requestPermission: () => { permCalls.push(true); return Promise.resolve(permResult); } },
    navigator: {
      userAgent: ua,
      webdriver,
      serviceWorker: {
        register: (path, opts) => {
          pushCalls.push({ path, scope: opts && opts.scope });
          return Promise.resolve({ scope: 'https://studyroadmap.in/' });
        },
      },
    },
    addEventListener: (t, f) => { (listeners[t] = listeners[t] || []).push(f); },
    dispatchEvent() {}, setTimeout: f => { f(); return 1; }, clearTimeout() {},
    requestIdleCallback: f => { f(); return 1; },
    fetch: () => Promise.resolve({ text: () => Promise.resolve('loc=' + geo) }),
    CustomEvent: function () {}, SR_ADS_OFF: adsOff,
    __SR_CONSENT: { state: consent, ads: consent === 'granted', analytics: consent === 'granted' },
  };
  win.window = win;
  const ctx = vm.createContext({ window: win, document, navigator: win.navigator, location: win.location, localStorage: win.localStorage, sessionStorage: win.sessionStorage, fetch: win.fetch, CustomEvent: win.CustomEvent, setTimeout: win.setTimeout, clearTimeout: win.clearTimeout, requestIdleCallback: win.requestIdleCallback, Notification: win.Notification, console, URL, RegExp, Date, Math, JSON, Promise });
  vm.runInContext(js.replace('__CFG__', JSON.stringify(cfg)), ctx);
  return { ids: scripts.filter(s => s.tagName === 'script' && s.id).map(s => s.id), scripts, ad: win.__SR_AD, pushCalls, permCalls, reloads, storage: win.localStorage, card: () => document.getElementById('sr-push-optin'), clicks: { accept: () => { const c = document.getElementById('sr-push-optin'); const b = c && c.children.find(x => x.tagName === 'div').children.find(x => x.getAttribute('data-sr-push') === 'accept'); if (b) b.click(); return !!b; }, dismiss: () => { const c = document.getElementById('sr-push-optin'); const b = c && c.children.find(x => x.tagName === 'div').children.find(x => x.getAttribute('data-sr-push') === 'dismiss'); if (b) b.click(); return !!b; } }, acceptButton: () => { const c = document.getElementById('sr-push-optin'); return c ? c.children.find(x => x.tagName === 'div').children.find(x => x.getAttribute('data-sr-push')) : null; } };
}

const HOST = (env, id) => { const s = env.scripts.find(x => x.id === id); return s ? s.src : null; };
const ZONE = (env, id) => { const s = env.scripts.find(x => x.id === id); return s ? s.dataset.zone : null; };

const cases = [
  ['human, fresh session      ', {}, env => env.ids.includes('sr-vignette') && env.ids.includes('sr-monetag-popunder') && env.ad.popunder === true],
  ['popunder uses its own host', {}, env => HOST(env, 'sr-monetag-popunder') === 'https://al5sm.com/tag.min.js' && ZONE(env, 'sr-monetag-popunder') === '11805678'],
  ['container is NOT loaded   ', {}, env => !env.ids.includes('sr-monetag') && env.ad.multitag === false],
  ['vignette uses its own host', {}, env => HOST(env, 'sr-vignette') === 'https://n6wxm.com/vignette.min.js' && ZONE(env, 'sr-vignette') === '11799057'],
  ['vignette is switched off  ', { vignetteEnabled: false }, env => !env.ids.includes('sr-vignette') && env.ad.vignette === false],
  ['container reversible      ', { multitagEnabled: true }, env => env.ids.includes('sr-monetag') && env.ad.multitag === true],
  ['human, session already had ', { sessionHad: true }, env => !env.ids.includes('sr-monetag-popunder') && env.ad.popunderSkipped === 'session-cap'],
  ['human, inside 12h cooldown ', { lastPopunder: Date.now() - 3600_000 }, env => !env.ids.includes('sr-monetag-popunder') && env.ad.popunderSkipped === 'cooldown'],
  ['human, past 12h cooldown   ', { lastPopunder: Date.now() - 13 * 3600_000 }, env => env.ids.includes('sr-monetag-popunder') && env.ad.popunder === true],
  ['WebDriver automation       ', { webdriver: true }, env => env.ids.length === 0 && env.ad.reason === 'automation'],
  ['declared crawler           ', { ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }, env => env.ids.length === 0 && env.ad.reason === 'crawler'],
  ['popunder switch off        ', { zoneEnabled: false }, env => env.ids.length === 1 && env.ad.popunderSkipped === 'zone-not-serving'],

  // Push opt-in (zone 11798846). The measured failure mode is a permission
  // request without a gesture, which browsers suppress or ignore — so the
  // assertions are (a) a crawler/bot/opt-out/unconsented visitor is never even
  // offered it, and (b) the offer's accept path performs BOTH the worker
  // registration and the permission request inside the click. A test that only
  // checked the markup would pass while the zone stayed dead.
  ['push offers opt-in to human', {}, env => env.ad.push === 'offered' && !!env.card() && env.pushCalls.length === 0],
  // `ids` is snapshotted at makeEnv time, so it cannot see a tag the click
  // creates later; assert against the live element list instead.
  ['push accept injects push tag  ', {}, env => { env.clicks.accept(); return env.scripts.some(s => s && s.id === 'sr-push-tag'); }],
  ['push accept asks permission ', {}, env => { env.clicks.accept(); return env.permCalls.length === 1; }],
  ['push copy names sponsorship  ', {}, env => { const c = env.card(); return !!c && /sponsored/i.test(c.children[0].textContent); }],
  ['push accept honours denial   ', { permResult: 'denied' }, async env => { env.clicks.accept(); await new Promise(r => setImmediate(r)); return env.ad.push === 'denied' && env.storage.getItem('sr:push:dismissed') === '1'; }],
  ['push accept grants + reloads ', {}, async env => { env.clicks.accept(); await new Promise(r => setImmediate(r)); return env.ad.push === 'granted' && env.reloads.length === 1; }],
  ['push reload is once a session ', { pushReloaded: true }, async env => { env.clicks.accept(); await new Promise(r => setImmediate(r)); return env.ad.push === 'granted' && env.reloads.length === 0; }],
  ['push dismiss is remembered   ', {}, async env => { env.clicks.dismiss(); await new Promise(r => setImmediate(r)); return env.ad.push === 'dismissed' && env.storage.getItem('sr:push:dismissed') === '1' && !env.card(); }],
  ['push no card for crawler     ', { ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }, env => env.ad.push === 'pending' && !env.card() && env.pushCalls.length === 0],
  ['push no card for bot         ', { webdriver: true }, env => env.ad.push === 'pending' && !env.card() && env.pushCalls.length === 0],
  ['push no card on opt-out      ', { adsOff: true }, env => env.ad.push === 'pending' && !env.card() && env.pushCalls.length === 0],
  ['push no card in EEA unconsented', { geo: 'DE', consent: 'denied' }, env => env.ad.reason === 'consent-denied' && !env.card()],
  ['push no card once dismissed  ', { pushDismissed: true }, env => env.ad.push === 'dismissed' && !env.card()],
  ['push returning subscriber    ', { pushPermission: 'granted' }, env => env.ad.push === 'registered' && env.ids.includes('sr-push-tag') && !env.card()],
  ['push never offers on denied  ', { pushPermission: 'denied' }, env => env.ad.push === 'denied' && !env.card() && env.permCalls.length === 0],
  ['push kill switch honoured    ', { pushEnabled: false }, env => env.ad.push === 'disabled' && env.pushCalls.length === 0 && !env.card()],
];
let bad = 0;
for (const [name, opts, check] of cases) {
  const env = makeEnv(opts);
  // AdRouter resolves visitor country from /cdn-cgi/trace on a promise. Flush
  // the microtask queue so region-dependent cases are asserted after the
  // geo gate has actually run, not while it is still pending.
  await new Promise((r) => setImmediate(r));
  const ok = await check(env);
  if (!ok) bad++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}  scripts=[${env.ids.join(',')}] reason=${env.ad.reason} skip=${env.ad.popunderSkipped}`);
}
// ---- production wiring: the shipped constants themselves -------------------
// The cases above run against a hand-built cfg, so every one of them can pass
// while the SHIPPED constants say something else — the container quietly back on,
// or a tag host no CSP allows. These read the real values.
const constNum = (name) => {
  const mm = adsTs.match(new RegExp(name + '\\s*=\\s*([0-9]+)'));
  return mm ? Number(mm[1]) : null;
};
const constStr = (name) => {
  const mm = adsTs.match(new RegExp(name + "\\s*=\\s*'([^']*)'"));
  return mm ? mm[1] : null;
};
const constBool = (name) => {
  const mm = adsTs.match(new RegExp(name + '\\s*=\\s*(true|false)'));
  return mm ? mm[1] === 'true' : null;
};

const nginxConf = readFileSync('nginx.conf', 'utf8');
// Strip comment lines first. nginx.conf documents its own headers in prose that
// mentions `script-src`, and a plain /script-src[^;]*/ matches that COMMENT
// before it ever reaches the real directive — which made this check report a
// missing host that was in fact present (found 2026-09-17 while writing it).
const nginxDirectives = nginxConf
  .split('\n')
  .filter((line) => !line.trimStart().startsWith('#'))
  .join('\n');
const scriptSrc = (nginxDirectives.match(/script-src[^;]*/g) || []).join(' ');
// Any host we load a tag from must be allowed by script-src, or the browser
// blocks the script and the zone serves nothing while every other check stays
// green. This is precisely the check that would have caught n6wxm.com before it
// shipped: the vignette's real host is not the shared quge5.com one, and the
// live CSP did not know about it.
const tagHosts = [
  constStr('MONETAG_VIGNETTE_TAG_SRC'),
  constStr('MONETAG_POPUNDER_TAG_SRC'),
  constStr('MONETAG_PUSH_TAG_SRC'),
].filter(Boolean);
const wiring = [
  ['container 280401 is OFF        ', constBool('MONETAG_MULTITAG_ENABLED') === false],
  ['vignette zone is 11799057      ', constNum('MONETAG_VIGNETTE_ZONE') === 11799057],
  ['vignette is enabled            ', constBool('MONETAG_VIGNETTE_ENABLED') === true],
  // Push is served standalone by Monetag's push endpoint on pushno.com, which
  // `/data/pushno-standalone-probe.mjs` showed activates for zone 11798846 and
  // for no other id it was given. Asserted as a wiring pair on purpose: enabled
  // with the wrong host is worse than disabled, because it asks readers for a
  // marketing permission and then has nothing to deliver.
  ['push is ON                    ', constBool('MONETAG_PUSH_ENABLED') === true],
  ['push tag is the pushno url    ', String(constStr('MONETAG_PUSH_TAG_SRC') || '').startsWith('https://pushno.com/ntfc.php?p=11798846')],
  ['direct link is the omg10 url   ', String(constStr('MONETAG_DIRECTLINK_URL') || '').startsWith('https://omg10.com/')],
  ['direct link is enabled         ', constBool('MONETAG_DIRECTLINK_ENABLED') === true],
  ...Array.from(new Set(tagHosts)).map((u) => {
    let host = u;
    try { host = new URL(u).hostname; } catch (e) { /* keep raw for the message */ }
    return ['CSP allows script host ' + host, scriptSrc.includes(host)];
  }),
];
for (const [name, ok] of wiring) {
  if (!ok) bad++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`);
}

console.log(bad ? `\n${bad} FAILURES` : '\nall guard cases pass');
process.exit(bad ? 1 : 0);
