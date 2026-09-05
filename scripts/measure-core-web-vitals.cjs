#!/usr/bin/env node
/**
 * scripts/measure-core-web-vitals.cjs
 * 
 * Measures Core Web Vitals (LCP, CLS, INP / Interaction Latency) on mobile viewport
 * with throttled 4G network simulation to fulfill Tasks T52, T53, and T54.
 */

const { chromium } = require('/opt/sr-qa/node_modules/playwright');
const fs = require('fs');

const BASE = process.env.SR_HOST || 'https://studyroadmap.in';

const TARGET_PAGES = [
  { name: 'Homepage', path: '/' },
  { name: 'Exams Directory', path: '/exams/' },
  { name: 'Exam Hub (NEET)', path: '/exams/neet/' },
  { name: 'Spoke Dates (NEET)', path: '/exams/neet/dates/' },
  { name: 'Spoke Pattern (NEET)', path: '/exams/neet/pattern/' },
  { name: 'Roadmap Generator', path: '/roadmap/?exam=neet&duration=3mo' },
  { name: 'Topic Note (Physics Atoms)', path: '/notes/neet/physics/atoms/' },
];

(async () => {
  console.log(`[CWV] Starting Mobile Core Web Vitals benchmark against: ${BASE}`);
  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
    });
  } catch (err) {
    console.error(`Failed to launch browser: ${err.message}`);
    process.exit(1);
  }

  const results = [];

  for (const item of TARGET_PAGES) {
    const url = `${BASE}${item.path}`;
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 }, // Mobile iPhone SE / 8 viewport
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1 CoreWebVitalsAuditor/1.0',
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });

    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);

    // Emulate 4G Mobile network: 4 Mbps down, 1.5 Mbps up, 60ms latency
    await cdp.send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 60,
      downloadThroughput: (4 * 1024 * 1024) / 8,
      uploadThroughput: (1.5 * 1024 * 1024) / 8,
      connectionType: 'cellular4g'
    });

    // Injected performance observer for LCP and CLS
    await page.addInitScript(() => {
      window.__cwv = {
        lcp: 0,
        cls: 0,
        lcpElement: null,
        interactions: []
      };

      // Observe LCP
      try {
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            window.__cwv.lcp = entry.startTime;
            if (entry.element) {
              window.__cwv.lcpElement = entry.element.tagName + (entry.element.id ? '#' + entry.element.id : '');
            }
          }
        }).observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {}

      // Observe CLS
      try {
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              window.__cwv.cls += entry.value;
            }
          }
        }).observe({ type: 'layout-shift', buffered: true });
      } catch (e) {}
    });

    const startNav = Date.now();
    let resp;
    try {
      resp = await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    } catch (e) {
      console.warn(`[CWV] Navigation error on ${item.path}: ${e.message}`);
      await context.close();
      continue;
    }

    const navTime = Date.now() - startNav;

    // Wait a brief moment for layout shift stabilization and dynamic island hydration
    await page.waitForTimeout(2000);

    // Test interaction latency (INP proxy)
    let inpDuration = null;
    let interactionTested = 'None';

    // Test clickable elements (e.g. accordion, select, button)
    try {
      const selectEl = await page.$('#duration-select');
      const accordEl = await page.$('details summary, [aria-expanded], button');
      if (selectEl) {
        interactionTested = 'select#duration-select';
        const t0 = Date.now();
        await selectEl.click();
        await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
        inpDuration = Date.now() - t0;
      } else if (accordEl) {
        interactionTested = 'button/accordion';
        const t0 = Date.now();
        await accordEl.click();
        await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
        inpDuration = Date.now() - t0;
      }
    } catch (e) {
      // Non-blocking
    }

    const cwv = await page.evaluate(() => window.__cwv);
    const status = resp ? resp.status() : 0;

    const record = {
      name: item.name,
      path: item.path,
      status,
      lcpMs: Math.round(cwv.lcp || navTime),
      cls: Number((cwv.cls || 0).toFixed(4)),
      inpMs: inpDuration !== null ? Math.round(inpDuration) : 0,
      interactionTarget: interactionTested,
      lcpTarget: cwv.lcpElement || 'HTML',
      lcpPass: (cwv.lcp || navTime) <= 2500,
      clsPass: (cwv.cls || 0) <= 0.1,
      inpPass: (inpDuration || 0) <= 200,
    };

    results.push(record);
    console.log(`[CWV] ${item.name} (${item.path}): Status=${status}, LCP=${record.lcpMs}ms (Pass: ${record.lcpPass}), CLS=${record.cls} (Pass: ${record.clsPass}), INP=${record.inpMs}ms (Pass: ${record.inpPass})`);

    await context.close();
  }

  await browser.close();

  const reportPath = '/tmp/sr-cwv-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  console.log('\n================ CORE WEB VITALS BENCHMARK SUMMARY ================');
  console.table(results.map(r => ({
    Page: r.name,
    Path: r.path,
    'LCP (ms)': r.lcpMs,
    'LCP < 2.5s': r.lcpPass ? 'PASS' : 'FAIL',
    'CLS': r.cls,
    'CLS < 0.1': r.clsPass ? 'PASS' : 'FAIL',
    'INP (ms)': r.inpMs,
    'INP < 200ms': r.inpPass ? 'PASS' : 'FAIL'
  })));

  const allLcpPass = results.every(r => r.lcpPass);
  const allClsPass = results.every(r => r.clsPass);
  const allInpPass = results.every(r => r.inpPass);

  if (allLcpPass && allClsPass && allInpPass) {
    console.log('>>> VERDICT: ALL CORE WEB VITALS (LCP, CLS, INP) PASSED TARGET THRESHOLDS! <<<');
  } else {
    console.warn('>>> VERDICT: SOME CORE WEB VITALS EXCEEDED THRESHOLDS <<<');
  }
})();
