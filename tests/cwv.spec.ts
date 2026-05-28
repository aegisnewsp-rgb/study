import { test, expect, type Page } from '@playwright/test';

// CWV smoke spec — hits real Chromium and pulls Largest Contentful Paint +
// Cumulative Layout Shift + DOM size for the 6 routes that matter most for
// AdSense ranking + monetization.

const BASE = process.env.SR_BASE_URL || 'https://studyroadmap.in';

const TARGET = {
  lcpMs: 2500,    // < 2.5s — "Good" per web.dev
  cls: 0.10,       // < 0.1 — "Good"
  domNodes: 1500,  // Lighthouse "Excessive DOM size" threshold
};

interface VitalsSample {
  lcp: number;
  cls: number;
  domNodes: number;
  htmlBytes: number;
}

async function sampleVitals(page: Page, url: string): Promise<VitalsSample> {
  const startBytes = await new Promise<number>(async (resolve) => {
    const res = await page.context().request.get(url);
    resolve((await res.body()).byteLength);
  });
  await page.goto(url, { waitUntil: 'load' });
  // Wait until LCP settles. PerformanceObserver in the page records it.
  const vitals = await page.evaluate(() => {
    return new Promise<{lcp: number; cls: number; domNodes: number}>((resolve) => {
      let lcp = 0;
      let cls = 0;
      const lcpObs = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          lcp = (entry as any).renderTime || (entry as any).loadTime || lcp;
        }
      });
      lcpObs.observe({ type: 'largest-contentful-paint', buffered: true } as any);
      const clsObs = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) cls += (entry as any).value;
        }
      });
      clsObs.observe({ type: 'layout-shift', buffered: true } as any);
      // Give the page 4s to settle visual changes
      setTimeout(() => {
        lcpObs.disconnect();
        clsObs.disconnect();
        resolve({
          lcp,
          cls,
          domNodes: document.querySelectorAll('*').length,
        });
      }, 4000);
    });
  });
  return { ...vitals, htmlBytes: startBytes };
}

const ROUTES = [
  '/',
  '/about/',
  '/privacy/',
  '/exams/cat/',
  '/study-plan/jeemain/3mo/',
  '/notes/accagl/accounting/accoun-001/',
];

for (const route of ROUTES) {
  test(`CWV budget: ${route}`, async ({ page }) => {
    const v = await sampleVitals(page, `${BASE}${route}`);
    console.log(`route=${route} lcp=${v.lcp.toFixed(0)}ms cls=${v.cls.toFixed(3)} dom=${v.domNodes} html=${v.htmlBytes}B`);
    expect.soft(v.lcp, `LCP ${v.lcp.toFixed(0)}ms exceeds ${TARGET.lcpMs}ms`).toBeLessThan(TARGET.lcpMs);
    expect.soft(v.cls, `CLS ${v.cls.toFixed(3)} exceeds ${TARGET.cls}`).toBeLessThan(TARGET.cls);
    expect.soft(v.domNodes, `DOM ${v.domNodes} exceeds ${TARGET.domNodes}`).toBeLessThan(TARGET.domNodes);
  });
}
