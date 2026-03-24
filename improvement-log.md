# Improvement Log — StudyRoadmap™

---

## Cycle 01 | 2026-03-24T12:52 UTC

**Change:** Add FAQPage JSON-LD structured data to homepage

**Category:** structured-data

**Why it matters:**
FAQ schema earns rich search results (People Also Ask, FAQ expansion), directly signals E-E-A-T expertise to Google, and improves AdSense quality by making the homepage feel like a complete, trustworthy resource rather than thin landing page. This is especially valuable for a free planning tool targeting exam students who search informational queries.

**Files edited:**
- `src/layouts/Layout.astro` — accept optional `faqs` prop, inject FAQPage JSON-LD `<script type="application/ld+json">`
- `src/pages/index.astro` — pass FAQ array as prop to Layout

**Tests to run:**
- Validate JSON-LD with `curl` to fetch homepage HTML, grep for `application/ld+json`
- Verify 5 FAQ `<script>` tags render in built HTML
- Confirm no Layout breakage on other pages (exams, roadmap, about, privacy, terms)
- Live test: fetch `https://studyroadmap.in/` → check title, canonical, meta description, JSON-LD presence

**Rollback method:**
- Revert Layout.astro and index.astro to prior versions (git checkout)
- Redeploy via webhook

**Result:** DEPLOY BLOCKED — Docker layer cache on remote build server prevented fresh dist/ from reaching live container. FAQ JSON-LD verified correct in local dist/ and via build. Dockerfile and deploy.sh updated with `ARG BUILD_DATE=$(date +%s)` cache-busting mechanism. Next webhook trigger should pick up both the code changes and the Dockerfile fix.

**Live test:** FAIL — remote server still serving pre-change HTML (COPY layer cached). Code is correct; deployment infrastructure needs cache invalidation on next build.

---


## Cycle 02 | 2026-03-24T13:33 UTC

**Change:** Added GRE (Graduate Record Examination) as new exam — 3 subjects (Verbal Reasoning, Quantitative Reasoning, Analytical Writing), 18 durations, 22 topics, full RoadmapTemplate data

**Category:** content-depth

**Why it matters:**
GRE is a globally recognised graduate admissions test used by Indian, Pakistani, and Nigerian students applying to US/European/Canadian universities. Adding it expands the site's relevance for international-bound students and captures valuable long-tail search queries. It's the 21st exam and first new addition.

**Files changed:**
- `src/data/exams/gre.ts` — new GRE exam (created)
- `src/data/index.ts` — import + export GRE, add to ALL_EXAMS

**Tests run:**
- `npm run build` → PASSES, 6 pages
- GRE confirmed in `dist/roadmap/index.html` (embedded in client-side JS bundle)
- Deploy webhook → completed on host

**Live test:** FAIL — same Docker layer cache issue as Cycle 01. `COPY --from=build` layer cached on remote build server. Code is correct. GRE will appear on live site once a non-cached deploy runs on the VPS.

**Rollback method:**
- `git checkout src/data/exams/gre.ts src/data/index.ts`

**Result:** DEPLOY BLOCKED — same remote Docker layer cache issue. Code correct. GRE will appear on live site once a non-cached deploy runs on the VPS.

## Cycle 03 | 2026-03-24T13:54 UTC

**Change:** Add FAQPage JSON-LD to /exams page (6 exam-agnostic Q&As) + update homepage FAQ answer to reflect 21 exams (added GRE)

**Category:** structured-data

**Why it matters:**
The /exams page is the primary informational landing page for students researching exams. FAQ schema here captures high-volume long-tail queries ("What is NEET eligibility?", "How to apply for JAMB?", "Best time to start preparing") in People Also Ask rich results. Combined with the homepage FAQ from Cycle 01, StudyRoadmap now has FAQ coverage on both its highest-traffic entry points.

**Files edited:**
- `src/pages/exams.astro` — 6 FAQs in frontmatter (exam selection, eligibility, multi-exam prep, timing, mode, documents) + faqs prop passed to Layout
- `src/pages/index.astro` — homepage FAQ answer updated from "20+ exams" to "21 exams" + GRE listed; hero stats updated to "21+"

**Tests run:**
- `npm run build` → PASSES, 6 pages
- FAQ JSON-LD validated: Homepage (5 Qs ✅), Exams (6 Qs ✅)
- Google Rich Results Test schema check: Both VALID
- Live site test: / FAQPage=True ✅, /exams/ FAQPage=True ✅, 6 questions live ✅
- Cycle 01 + 02 content also now live: GRE=True ✅
- robots.txt: 6 URLs indexed, no blocking issues ✅
- Sitemap: all 6 pages confirmed 200 ✅

**Result:** PASSED — all live tests green. FAQ JSON-LD live on / and /exams/. GRE now visible on homepage. Total: 2 FAQPage schemas, 11 questions, 1 new exam.

