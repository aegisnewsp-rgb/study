# Improvement Backlog — StudyRoadmap™

## Top 5 Remaining Candidates (as of Cycle 26)

---

### 1. Core Web Vitals — LCP, FCP, CLS audit
**Status:** Cannot fully measure without Lighthouse CLI
**Manual spot-check results (Cycle 26):**
- TTFB: 23ms ✅ (excellent)
- No hero images → LCP likely < 1s ✅
- 185KB JS bundle (deferred/module, non-blocking) ✅
- Google Fonts preconnect + dns-prefetch in place ✅
- No render-blocking scripts ✅
**Action needed:** Install Lighthouse CLI (`npm i -g lighthouse`) or use PageSpeed Insights API for full lab data.
**Effort:** Low if Lighthouse available; moderate without.

---

### 2. AdSense policy compliance audit
**Status:** Cannot verify without seeing AdSense actually rendered on the page
**What to check:** AdSense requires pages to have substantial unique content, clear navigation, no "thin" pages, no incentivised clicks. All StudyRoadmap pages have 1,263 topic notes (substantial), roadmap generator (unique output), breadcrumbs, FAQ schema.
**Action needed:** Inject AdSense code snippet and check against Google AdSense compliance docs.
**Effort:** Moderate (requires AdSense account access + code injection).

---

### 3. Focus indicator styles — keyboard accessibility
**Status:** ✅ DONE — Cycle 26: `focus-visible` styles added to global.css (2px brand-blue ring, mouse-outline suppressed)

---

### 4. Mobile tap target spacing — WCAG AA
**Status:** Not yet measured
**What to check:** Tap targets should be at least 44×44 CSS pixels. Most buttons/links on StudyRoadmap use Tailwind padding (px-3 py-2 = ~12×8px) which may fall short of 44px minimum.
**Action needed:** Audit all interactive elements with Chrome DevTools → Accessibility panel.
**Effort:** Low (just measurement + small CSS changes).

---

### 5. `robots.txt` AI crawler blocks — review
**Status:** Done and live — but worth reviewing whether blocking AI training crawlers (GPTBot, ChatGPT-User, CCBot, OAI-SearchBot) is intentional or if StudyRoadmap wants to opt into AI training / structured data sharing.
**Current:** All AI training bots blocked.
**Consider:** If StudyRoadmap wants traffic from AI-powered search (Perplexity, Google AI Overview), allowing at least `CCBot` or adding an OpenAI Data API opt-out may be beneficial.
**Effort:** Trivial (one-line change in `public/robots.txt`).

---

## DONE Items Summary
- ✅ Twitter/X card meta tags — Cycle 13
- ✅ Footer last-updated timestamp — Cycle 13
- ✅ Exam pages eligibility metadata — Cycle 14
- ✅ BreadcrumbList JSON-LD — Cycle 17
- ✅ Related exam cross-links — Cycle 17
- ✅ OG images (1,263 topic pages) — Cycle 19
- ✅ Core Web Vitals font loading (preconnect, swap) — Cycle 20
- ✅ OG images exam/subject index pages — Cycle 21
- ✅ Exam-specific FAQ content (8 exams, 24 Q&A) — Cycle 22
- ✅ Internal linking (topic pages + subject index) — Cycle 23
- ✅ Country tab aria-labels — Cycle 24
- ✅ Skip navigation link — Cycle 25
- ✅ Sitemap (all 1,375 URLs covered) — verified Cycle 26
