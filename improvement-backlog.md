# Improvement Backlog — StudyRoadmap™

## Top 5 Remaining Candidates (as of Cycle 53)

---

### 1. Google Search Console verification
**Status:** TODO
**What:** Add real GSC meta tag to Layout.astro (placeholder `YOUR_VERIFICATION_CODE_HERE` currently in code)
**Action needed:** User must provide their GSC verification code to replace the placeholder
**Effort:** Trivial (one line change)

---

### 2. AdSense integration
**Status:** TODO
**What:** Inject AdSense code + verify compliance (substantial content, no thin pages, clear nav)
**Prerequisites:** AdSense account approved; code from Google AdSense dashboard
**Effort:** Moderate

---

### 3. Knowledge-base content for remaining ~900 topics
**Status:** IN PROGRESS — major coverage added 2026-03-28/29
**Coverage so far (all exam-aligned, tiered Quick/Standard/Deep):**
  - NEET Physics: 29 topics ✅
  - JEE Main Physics: 28 topics ✅
  - JEE Main Chemistry: 28 topics ✅
  - JEE Advanced Physics: 28 topics ✅
  - JEE Advanced Mathematics: 28 topics ✅
  - CUET Mathematics: 25 topics ✅
  - CUET English: 15 topics ✅
  - UPSC GS1 (History, Geography, Environment, Polity): 10 topics ✅
  - UPSC GS2 (Governance, IR, Social Justice): 4 topics ✅
**Remaining:** PCM organic chemistry, PCM physical chemistry, JEE Main Mathematics (28), SSC CGL English, SSC CGL Reasoning, BBA/BCom/CA Foundation, ~60 niche international exams
**Path:** MiniMax text API pipeline — next priority: JEE Main Mathematics + PCM organic chemistry
**Effort:** High — targeting top 100 high-traffic topics next

---

### 4. Directory submissions
**Status:** TODO (low priority, uncertain ROI)
**What:** Submit to the 20 working free directories found in Cycle 38
**Effort:** Low — script ready at `scripts/directory_checker.py`

---

### 5. GSC XML sitemap submission + URL inspection
**Status:** TODO
**What:** After GSC verification, submit sitemap and use URL Inspection API to request indexing for key pages (/, /roadmap/, /exams/, /notes/)
**Effort:** Low (after GSC is verified)

---

### 6. ~~Deploy service unresponsive~~ — RESOLVED (deploy went through on retry)
**Status:** TODO (blocked on user action)
**What:** Replace `REPLACE_WITH_FORMSPREE_ID` in `src/pages/feedback.astro` with actual Formspree form ID
**Action needed:** User signs up at formspree.io (free tier), creates a form, pastes the form ID
**Effort:** Trivial (one string change)

---

---

## DONE Items (Cycles 27–59)

| Cycle | Item |
|-------|------|
| 27 | Mobile tap targets (44×44px WCAG AA) |
| 28 | News ticker system (RSS, 10-item rolling window, cron 30min) |
| 29 | robots.txt audit — AI training bots blocked, Google-Extended allowed |
| 30 | Sitemap health — 1,375 URLs confirmed 200 OK |
| 31 | SEO verification — canonical/title/OG tags correct |
| 32 | Core Web Vitals manual audit (TTFB 130ms, no render-blocking) |
| 33 | SEO wrap — 3 items remaining documented |
| 34 | E-E-A-T — GitHub org URL corrected in Organization schema |
| 35 | Fix GitHub issue links in Privacy/Terms (repo was private → org URL) |
| 36 | News display audit — untitled feed entries flagged |
| 37 | Traffic SEO audit — zero Google index confirmed, action taken |
| 38 | GSC verification tag added + directory audit (20 working dirs) |
| 39 | Google-Extended allowed in robots.txt; sitemap verified 112 URLs |
| 40 | WebSite JSON-LD + SearchAction on all pages (Sitelinks search box) |
| 40 | llm.txt added for AI system understanding |
| 41 | Notes link from roadmap topic cards |
| 42 | Content quality audit — thin placeholder notes identified |
| 43 | `robots="noindex"` on 1,263 topic pages (AdSense thin-content protection) |
| 44 | CollectionPage + ItemList schema on notes index pages |
| 45 | Sitemap reduced to 112 high-value URLs (crawl budget protection) |
| 46 | Tiered notes content (Lite/Standard/Extended) — genuine 3-tier content |
| 47 | FAQPage schema on /notes/ index page |
| 48 | FAQPage schema updated on topic pages (tier explanation) |
| 49 | 100 exams expansion (21 → 104 exams, 4,269 new notes) |
| 50 | PCM exam notes routing (15 exams route to neet/jee pools) |
| 52 | GATE exam-specific FAQs on roadmap page |
| 59 | Student feedback page (/feedback) + footer "Help Improve Notes" link |

---

## SEO Score Summary (as of Cycle 53)

| Signal | Status |
|--------|--------|
| Title/meta/canonical | ✅ All 6 pages correct |
| FAQPage JSON-LD | ✅ Homepage (5) + Exams (6) + Roadmap (12) + Notes index (4) |
| Organization schema | ✅ All pages |
| WebSite+SearchAction | ✅ All pages |
| BreadcrumbList | ✅ All notes pages (4 levels) |
| CollectionPage+ItemList | ✅ All notes index pages |
| OG image (custom) | ✅ /og-image.jpg live |
| OG images (notes) | ✅ 1,263 topic pages + 105 index pages |
| Internal linking | ✅ Topic pages cross-link equivalent exams |
| Sitemap | ✅ 112 URLs, sitemap-index.xml |
| robots.txt | ✅ AI training blocked, Google-Extended + AI indexing allowed |
| llm.txt | ✅ AI system understanding file |
| Accessibility (WCAG AA) | ✅ Skip nav, focus-visible, aria-labels, tap targets |
| Content depth | ✅ Tiered notes (Lite/Std/Ext), exam-specific FAQs, about page |
| AdSense thin-content risk | ✅ Mitigated via noindex on topic pages |
| News ticker | ✅ 10-item rolling window, 30-min updates |
| Google index | ⏳ Pending — GSC verification needed |
| Backlinks | ⏳ 0 — new domain, no outreach done yet |
