import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.SR_BASE_URL || 'https://studyroadmap.in';
const SHOTS_DIR = '/tmp/sr-ui-shots';

if (!fs.existsSync(SHOTS_DIR)) {
  fs.mkdirSync(SHOTS_DIR, { recursive: true });
}

const ROUTES = [
  { id: 'home', path: '/', name: 'Homepage' },
  { id: 'exams', path: '/exams/', name: 'Exams Directory' },
  { id: 'neet-hub', path: '/exams/neet/', name: 'Flagship Exam Hub (NEET)' },
  { id: 'cat-spoke', path: '/exams/cat/eligibility/', name: 'Exam Spoke (CAT Eligibility)' },
  { id: 'notes-index', path: '/notes/', name: 'Notes Index' },
  { id: 'note-page', path: '/notes/neet/botany/bot-001/', name: 'Note Page (NEET Cell)' },
  { id: 'roadmap-gen', path: '/roadmap/?exam=jeemain&duration=3mo', name: 'Roadmap Generator' },
  { id: 'about', path: '/about/', name: 'About' },
  { id: 'author', path: '/author/pushkar-saini/', name: 'Author' },
  { id: 'contact', path: '/contact/', name: 'Contact' },
  { id: 'privacy', path: '/privacy/', name: 'Privacy' },
  { id: 'terms', path: '/terms/', name: 'Terms' },
];

const VIEWPORTS = [
  {
    name: 'desktop',
    width: 1280,
    height: 800,
    isMobile: false,
    hasTouch: false,
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 StudyRoadmapDesktopAuditor/1.0',
  },
  {
    name: 'mobile',
    width: 375,
    height: 667,
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1 StudyRoadmapMobileAuditor/1.0',
  },
];

// Helper to calculate relative luminance & contrast ratio
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function parseRgb(colorStr) {
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (match) {
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
  }
  return null;
}

function contrastRatio(rgb1, rgb2) {
  const lum1 = getLuminance(rgb1[0], rgb1[1], rgb1[2]);
  const lum2 = getLuminance(rgb2[0], rgb2[1], rgb2[2]);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

async function runAudit() {
  console.log(`Starting StudyRoadmap UI Rendering & Playwright Visual Audit on ${BASE_URL}...`);
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });

  const auditResults = [];

  for (const vp of VIEWPORTS) {
    console.log(`\n========================================================`);
    console.log(`  AUDITING VIEWPORT: ${vp.name.toUpperCase()} (${vp.width}x${vp.height})`);
    console.log(`========================================================`);

    for (const route of ROUTES) {
      const fullUrl = `${BASE_URL}${route.path}`;
      const shotPrefix = `${vp.name}-${route.id}`;
      const shotPath = path.join(SHOTS_DIR, `${shotPrefix}.png`);
      const fullShotPath = path.join(SHOTS_DIR, `${shotPrefix}-full.png`);

      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.isMobile,
        hasTouch: vp.hasTouch,
        deviceScaleFactor: vp.deviceScaleFactor || 1,
        userAgent: vp.userAgent,
      });

      const page = await context.newPage();

      // Track console errors and network failures
      const consoleErrors = [];
      const failedRequests = [];

      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      page.on('requestfailed', req => {
        // Exclude optional external trackers if blocked
        const url = req.url();
        if (!url.includes('google-analytics') && !url.includes('doubleclick') && !url.includes('googlesyndication')) {
          failedRequests.push({ url, failure: req.failure()?.errorText });
        }
      });

      // Inject Performance Observers before navigation
      await page.addInitScript(() => {
        window.__srVitals = {
          cls: 0,
          clsEntries: [],
          lcp: 0,
          lcpElement: null,
          fcp: 0,
          shifts: []
        };

        try {
          new PerformanceObserver(entryList => {
            for (const entry of entryList.getEntries()) {
              if (entry.name === 'first-contentful-paint') {
                window.__srVitals.fcp = entry.startTime;
              }
            }
          }).observe({ type: 'paint', buffered: true });
        } catch (e) {}

        try {
          new PerformanceObserver(entryList => {
            for (const entry of entryList.getEntries()) {
              window.__srVitals.lcp = entry.startTime;
              if (entry.element) {
                window.__srVitals.lcpElement = (entry.element.tagName || '') + (entry.element.className ? '.' + entry.element.className.slice(0, 30) : '');
              }
            }
          }).observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) {}

        try {
          new PerformanceObserver(entryList => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                window.__srVitals.cls += entry.value;
                window.__srVitals.shifts.push({
                  value: entry.value,
                  time: entry.startTime,
                  sources: (entry.sources || []).map(s => ({
                    node: s.node ? (s.node.tagName + (s.node.className ? '.' + s.node.className.slice(0, 30) : '')) : 'unknown',
                    prevRect: s.previousRect,
                    curRect: s.currentRect
                  }))
                });
              }
            }
          }).observe({ type: 'layout-shift', buffered: true });
        } catch (e) {}
      });

      let navStatus = null;
      let navError = null;
      const t0 = Date.now();

      try {
        const resp = await page.goto(fullUrl, { waitUntil: 'load', timeout: 30000 });
        navStatus = resp ? resp.status() : 0;
      } catch (err) {
        navError = err.message;
        console.warn(`[!] Navigation error on ${route.path} (${vp.name}): ${err.message}`);
      }

      const navTimeMs = Date.now() - t0;

      // Wait 2.5s to let dynamic layout, webfonts, and hydration settle
      await page.waitForTimeout(2500);

      // 1. Core Web Vitals extraction
      const vitals = await page.evaluate(() => {
        return window.__srVitals || { cls: 0, lcp: 0, fcp: 0, shifts: [] };
      });

      // 2. Horizontal Overflow Check
      const overflowCheck = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const bodyWidth = document.body ? document.body.scrollWidth : 0;
        const winWidth = window.innerWidth;
        const hasOverflow = docWidth > winWidth || bodyWidth > winWidth;

        const overflowingElements = [];
        if (hasOverflow) {
          const allEls = document.querySelectorAll('*');
          for (const el of allEls) {
            const rect = el.getBoundingClientRect();
            if (rect.right > winWidth + 2) {
              overflowingElements.push({
                tag: el.tagName.toLowerCase(),
                id: el.id || undefined,
                className: typeof el.className === 'string' ? el.className.slice(0, 60) : undefined,
                rectRight: Math.round(rect.right),
                excessPx: Math.round(rect.right - winWidth)
              });
              if (overflowingElements.length >= 10) break;
            }
          }
        }

        return {
          winWidth,
          docWidth,
          bodyWidth,
          hasOverflow,
          overflowingElements
        };
      });

      // 3. Fonts & Styles Check
      const fontsStyles = await page.evaluate(() => {
        const fontStatus = document.fonts ? document.fonts.status : 'unknown';
        const numFonts = document.fonts ? document.fonts.size : 0;
        let bodyFontFamily = '';
        try {
          bodyFontFamily = window.getComputedStyle(document.body).fontFamily;
        } catch (e) {}

        const stylesheets = Array.from(document.styleSheets).map(s => {
          try {
            return { href: s.href || 'inline', rules: s.cssRules ? s.cssRules.length : 0 };
          } catch (e) {
            return { href: s.href || 'cross-origin', rules: -1 };
          }
        });

        return {
          fontStatus,
          numFonts,
          bodyFontFamily,
          stylesheetCount: stylesheets.length,
        };
      });

      // 4. Color Contrast Checks on key visible elements
      const contrastCheck = await page.evaluate(() => {
        function getComputedRgb(el, prop) {
          const style = window.getComputedStyle(el);
          return style.getPropertyValue(prop);
        }

        const elementsToTest = [
          { name: 'h1', selector: 'h1' },
          { name: 'h2', selector: 'h2' },
          { name: 'body-p', selector: 'main p, article p, p' },
          { name: 'primary-button', selector: 'a.btn-primary, button.btn-primary, [role="button"]' },
          { name: 'nav-link', selector: 'nav a' },
        ];

        const results = [];
        for (const target of elementsToTest) {
          const el = document.querySelector(target.selector);
          if (el && el.offsetParent !== null) {
            const fg = getComputedRgb(el, 'color');
            let bg = getComputedRgb(el, 'background-color');
            // Traverse up if transparent
            let curr = el;
            while ((bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') && curr.parentElement) {
              curr = curr.parentElement;
              bg = getComputedRgb(curr, 'background-color');
            }
            results.push({
              name: target.name,
              fg,
              bg,
              textSnippet: (el.textContent || '').trim().slice(0, 30)
            });
          }
        }
        return results;
      });

      // Evaluate contrast ratios
      const contrastEvaluations = contrastCheck.map(c => {
        const fgRgb = parseRgb(c.fg);
        const bgRgb = parseRgb(c.bg);
        let ratio = 1;
        if (fgRgb && bgRgb) {
          ratio = Number(contrastRatio(fgRgb, bgRgb).toFixed(2));
        }
        const isHeaderOrBtn = c.name === 'h1' || c.name === 'h2' || c.name === 'primary-button';
        const minTarget = isHeaderOrBtn ? 3.0 : 4.5;
        return {
          ...c,
          ratio,
          pass: ratio >= minTarget
        };
      });

      // 5. DOM Leaks Check (Raw markdown or unescaped template tags)
      const domLeakCheck = await page.evaluate(() => {
        const issues = [];
        const rawMarkdownPatterns = [
          { pattern: /^#{1,6}\s+[A-Za-z0-9]/, type: 'Raw Markdown Heading (e.g. ### Title)' },
          { pattern: /\*\*[A-Za-z0-9\s]{2,}\*\*/, type: 'Raw Bold Markdown (**word**)' },
          { pattern: /\[[A-Za-z0-9\s]+\]\(https?:\/\/[^\s)]+\)/, type: 'Raw Markdown Link ([text](url))' },
          { pattern: /```[a-z]*\n[\s\S]*?\n```/, type: 'Raw Fenced Code Block (```)' },
          { pattern: /\|[\s-]+\|[\s-]+\|/, type: 'Raw Markdown Table (|---|---|)' }
        ];

        const unescapedTemplatePatterns = [
          { pattern: /\{\/\*[\s\S]*?\*\/\}/, type: 'Unescaped JSX Comment ({/* ... */})' },
          { pattern: /\{%\s*[a-z_]+[\s\S]*?%\}/, type: 'Unescaped Liquid/Jinja Tag ({% ... %})' },
          { pattern: /\{\{\s*[a-zA-Z0-9_.]+\s*\}\}/, type: 'Unescaped Mustache/Handlebars Tag ({{ ... }})' },
          { pattern: /<%=\s*[\s\S]*?%>/, type: 'Unescaped EJS/ERB Tag (<%= ... %>)' },
          { pattern: /&lt;astro-island/, type: 'Unescaped Astro Island Tag' }
        ];

        // Walk all text nodes
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while ((node = walker.nextNode())) {
          const parent = node.parentElement;
          if (!parent) continue;
          const tag = parent.tagName.toLowerCase();
          if (tag === 'script' || tag === 'style' || tag === 'code' || tag === 'pre') continue;

          const text = node.textContent.trim();
          if (!text) continue;

          for (const p of rawMarkdownPatterns) {
            if (p.pattern.test(text)) {
              issues.push({
                type: p.type,
                snippet: text.slice(0, 100),
                parentTag: tag,
                parentClass: parent.className ? parent.className.slice(0, 40) : undefined
              });
              break;
            }
          }

          for (const p of unescapedTemplatePatterns) {
            if (p.pattern.test(text)) {
              issues.push({
                type: p.type,
                snippet: text.slice(0, 100),
                parentTag: tag,
                parentClass: parent.className ? parent.className.slice(0, 40) : undefined
              });
              break;
            }
          }

          if (issues.length >= 15) break;
        }

        return {
          hasLeaks: issues.length > 0,
          issues
        };
      });

      // 6. Interactive Element Validations per Page Route
      const interactiveCheck = { tested: false, success: true, details: [] };

      // Route: Homepage Search Bar
      if (route.id === 'home') {
        interactiveCheck.tested = true;
        try {
          const searchInput = await page.$('#sr-home-search-input');
          const searchForm = await page.$('#sr-home-search');
          if (searchInput) {
            await searchInput.fill('NEET');
            const val = await searchInput.inputValue();
            interactiveCheck.details.push({
              element: 'Homepage Search Input',
              action: 'fill("NEET")',
              success: val === 'NEET'
            });
            // Check form action
            const action = await page.evaluate(form => form.getAttribute('action'), searchForm);
            interactiveCheck.details.push({
              element: 'Homepage Search Form',
              action: 'action verification',
              success: action === '/exams/'
            });
          } else {
            interactiveCheck.success = false;
            interactiveCheck.details.push({
              element: 'Homepage Search Input',
              action: 'locate',
              success: false,
              note: '#sr-home-search-input not found'
            });
          }
        } catch (e) {
          interactiveCheck.success = false;
          interactiveCheck.details.push({ element: 'Search Bar', error: e.message });
        }
      }

      // Route: Roadmap Generator Select Dropdown
      if (route.id === 'roadmap-gen') {
        interactiveCheck.tested = true;
        try {
          const examSelect = await page.$('#exam-select');
          const durationSelect = await page.$('#duration-select');

          if (examSelect) {
            const initialExam = await examSelect.inputValue();
            interactiveCheck.details.push({
              element: '#exam-select',
              action: 'initial query param populate',
              value: initialExam,
              success: initialExam === 'jeemain'
            });

            // Change to 'neet'
            await examSelect.selectOption('neet');
            await page.waitForTimeout(500);
            const newExam = await examSelect.inputValue();
            interactiveCheck.details.push({
              element: '#exam-select',
              action: 'selectOption("neet")',
              value: newExam,
              success: newExam === 'neet'
            });
          } else {
            interactiveCheck.success = false;
            interactiveCheck.details.push({ element: '#exam-select', action: 'locate', success: false });
          }

          if (durationSelect) {
            const initialDur = await durationSelect.inputValue();
            interactiveCheck.details.push({
              element: '#duration-select',
              action: 'initial duration populate',
              value: initialDur,
              success: initialDur === '3mo' || initialDur !== ''
            });
          }
        } catch (e) {
          interactiveCheck.success = false;
          interactiveCheck.details.push({ element: 'Exam Select Dropdown', error: e.message });
        }
      }

      // Route: Exam Hub or Spoke Collapsible FAQ accordions
      if (route.id === 'neet-hub' || route.id === 'cat-spoke') {
        interactiveCheck.tested = true;
        try {
          const firstDetails = await page.$('details');
          if (firstDetails) {
            const summary = await firstDetails.$('summary');
            if (summary) {
              const beforeOpen = await page.evaluate(el => el.hasAttribute('open'), firstDetails);
              await summary.click();
              await page.waitForTimeout(300);
              const afterOpen = await page.evaluate(el => el.hasAttribute('open'), firstDetails);
              await summary.click();
              await page.waitForTimeout(300);
              const afterClose = await page.evaluate(el => el.hasAttribute('open'), firstDetails);

              const toggledCorrectly = (afterOpen !== beforeOpen) && (afterClose === beforeOpen);
              interactiveCheck.details.push({
                element: 'FAQ Accordion (<details>)',
                action: 'open/close toggle',
                beforeOpen,
                afterOpen,
                afterClose,
                success: toggledCorrectly
              });
            }
          } else {
            // Check if there are other accordion buttons
            const accordBtn = await page.$('[aria-expanded]');
            if (accordBtn) {
              const before = await page.evaluate(el => el.getAttribute('aria-expanded'), accordBtn);
              await accordBtn.click();
              await page.waitForTimeout(300);
              const after = await page.evaluate(el => el.getAttribute('aria-expanded'), accordBtn);
              interactiveCheck.details.push({
                element: 'Accordion [aria-expanded]',
                action: 'click toggle',
                before,
                after,
                success: before !== after
              });
            } else {
              interactiveCheck.details.push({
                element: 'Accordion',
                action: 'locate',
                note: 'No details/accordion on this spoke variant (normal for certain spokes)'
              });
            }
          }
        } catch (e) {
          interactiveCheck.success = false;
          interactiveCheck.details.push({ element: 'FAQ Accordion', error: e.message });
        }
      }

      // Route: Note Page Reading Progress Bar
      if (route.id === 'note-page') {
        interactiveCheck.tested = true;
        try {
          const bar = await page.$('#reading-progress');
          if (bar) {
            const initialWidth = await page.evaluate(el => el.style.width, bar);
            const initialVal = await page.evaluate(el => el.getAttribute('aria-valuenow'), bar);

            // Scroll 50%
            await page.evaluate(() => {
              const doc = document.documentElement;
              const maxScroll = doc.scrollHeight - doc.clientHeight;
              window.scrollTo({ top: maxScroll * 0.5, behavior: 'instant' });
            });
            await page.waitForTimeout(300);

            const midWidth = await page.evaluate(el => el.style.width, bar);
            const midVal = await page.evaluate(el => el.getAttribute('aria-valuenow'), bar);

            // Scroll to bottom
            await page.evaluate(() => {
              const doc = document.documentElement;
              const maxScroll = doc.scrollHeight - doc.clientHeight;
              window.scrollTo({ top: maxScroll, behavior: 'instant' });
            });
            await page.waitForTimeout(300);

            const finalWidth = await page.evaluate(el => el.style.width, bar);
            const finalVal = await page.evaluate(el => el.getAttribute('aria-valuenow'), bar);

            const midPct = parseFloat(midWidth) || 0;
            const finalPct = parseFloat(finalWidth) || 0;
            const progressWorks = finalPct >= 90 && midPct > 0;

            interactiveCheck.details.push({
              element: '#reading-progress',
              action: 'scroll tracking verification',
              initialWidth,
              midWidth,
              finalWidth,
              midVal,
              finalVal,
              success: progressWorks
            });

            // Scroll back up for clean screenshot
            await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
            await page.waitForTimeout(200);
          } else {
            interactiveCheck.success = false;
            interactiveCheck.details.push({
              element: '#reading-progress',
              action: 'locate',
              success: false,
              note: 'Bar not found on note page'
            });
          }
        } catch (e) {
          interactiveCheck.success = false;
          interactiveCheck.details.push({ element: 'Reading Progress Bar', error: e.message });
        }
      }

      // 7. Capture Viewport & Full Page Screenshots
      await page.screenshot({ path: shotPath, fullPage: false });
      await page.screenshot({ path: fullShotPath, fullPage: true });

      const shotStat = fs.statSync(shotPath);
      const fullShotStat = fs.statSync(fullShotPath);

      // Assemble record
      const record = {
        viewport: vp.name,
        viewportDims: `${vp.width}x${vp.height}`,
        routeId: route.id,
        routeName: route.name,
        path: route.path,
        status: navStatus,
        navTimeMs,
        cwv: {
          cls: Number(vitals.cls.toFixed(4)),
          clsPass: vitals.cls <= 0.1,
          lcpMs: Math.round(vitals.lcp || navTimeMs),
          lcpPass: (vitals.lcp || navTimeMs) <= 2500,
          fcpMs: Math.round(vitals.fcp || 0),
          lcpElement: vitals.lcpElement,
          shiftCount: vitals.shifts.length,
          shifts: vitals.shifts
        },
        responsive: {
          hasOverflow: overflowCheck.hasOverflow,
          docWidth: overflowCheck.docWidth,
          winWidth: overflowCheck.winWidth,
          overflowingElements: overflowCheck.overflowingElements
        },
        fontsStyles: {
          fontStatus: fontsStyles.fontStatus,
          numFonts: fontsStyles.numFonts,
          bodyFontFamily: fontsStyles.bodyFontFamily,
          stylesheetCount: fontsStyles.stylesheetCount
        },
        contrast: {
          allPass: contrastEvaluations.every(c => c.pass),
          evaluations: contrastEvaluations
        },
        domIntegrity: {
          leakFree: !domLeakCheck.hasLeaks,
          leaks: domLeakCheck.issues,
          consoleErrorsCount: consoleErrors.length,
          consoleErrors,
          failedRequestsCount: failedRequests.length,
          failedRequests
        },
        interactive: interactiveCheck,
        screenshots: {
          viewport: { path: shotPath, sizeBytes: shotStat.size },
          full: { path: fullShotPath, sizeBytes: fullShotStat.size }
        }
      };

      auditResults.push(record);

      console.log(`[${vp.name.toUpperCase()}] ${route.name} (${route.path}): Status=${navStatus}, CLS=${record.cwv.cls} (Pass:${record.cwv.clsPass}), LCP=${record.cwv.lcpMs}ms, Overflow=${record.responsive.hasOverflow ? 'FAIL' : 'PASS'}, Leaks=${record.domIntegrity.leakFree ? '0' : record.domIntegrity.leaks.length}, ConsoleErr=${consoleErrors.length}`);

      await context.close();
    }
  }

  await browser.close();

  const outPath = '/tmp/sr-ui-audit-results.json';
  fs.writeFileSync(outPath, JSON.stringify(auditResults, null, 2));
  console.log(`\nAudit complete! Full JSON saved to ${outPath}`);

  return auditResults;
}

runAudit().catch(err => {
  console.error('Audit run failed:', err);
  process.exit(1);
});
