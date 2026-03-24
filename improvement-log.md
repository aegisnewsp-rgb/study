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


## Cycle 04 | 2026-03-24T14:03 UTC

**Change:** Add Organization JSON-LD schema to Layout.astro — appears on all pages

**Category:** structured-data

**Why it matters:**
Organization schema tells Google StudyRoadmap is a credible brand entity with a clear identity, mission, and social presence. This directly strengthens E-E-A-T signals (Trustworthiness + Authoritativeness), which matters for both organic ranking and AdSense policy compliance. The GitHub sameAs link further validates authenticity.

**Files edited:**
- `src/layouts/Layout.astro` — Organization JSON-LD added as `<script type="application/ld+json">` in head, above FAQPage block
  - @type: Organization, @id: https://studyroadmap.in/#organization
  - name: StudyRoadmap, url: https://studyroadmap.in
  - description: "Free AI-powered study roadmap generator for 21 competitive exams..."
  - logo: /og-image.svg
  - sameAs: GitHub profile

**Tests run:**
- `npm run build` → PASSES, 6 pages
- Local validation: Homepage ✅ Organization+FAQPage, Exams ✅ Organization+FAQPage (6 Qs), About ✅ Organization
- Schema structure validated — all required fields present
- Live test: / ✅ Organization live, ✅ FAQPage live (5 Qs)
- Live test: /exams/ ✅ Organization live, ✅ FAQPage live (6 Qs)

**Result:** PASSED — Organization schema live on all pages. FAQ schemas on homepage + exams still intact.


## Cycle 05 | 2026-03-24T15:11 UTC

**Change:** News ticker system — exam/education news on homepage, 10-item rolling window, updated every 30 min via cron

**Category:** content-depth

**Why it matters:**
Static sites lose freshness signals to Google. A live news ticker sourced from real RSS feeds shows the site is actively maintained, keeps students coming back, and surfaces exam announcements (registration dates, result updates, schedule changes) directly on the homepage — high value for student audience. Client-side fetch means no rebuild needed for news updates.

**Files changed:**
- `scripts/fetch_news.py` — new: 9 Google News RSS feeds (India/Pakistan/Nigeria), word-boundary keyword tagging, off-topic filter (football/fifa/cricket etc.), 10-item rolling window, no-change exit if no new items
- `src/data/news.ts` — new: NewsItem type, getCountryFlag, formatNewsDate
- `src/pages/index.astro` — news ticker section between stats bar and How It Works; client-side JS fetches /news.json at runtime
- `docker-compose.yml` — volume mount: ./news.json → /usr/share/nginx/html/news.json:ro (nginx serves live file without rebuild)
- `public/news.json` — initial seed data (NEET/JAMB/MDCAT); overwritten on each cron run
- `src/styles/global.css` — .scrollbar-hide CSS class

**Tests run:**
- fetch_news.py dry run → 817 items fetched, 10 saved, quality check: all Nigeria/WAEC exam news ✅
- `npm run build` → PASSES, 6 pages
- Live: /news.json → 200, 10 items ✅
- Live: / → news-ticker section + Org schema + FAQPage ✅
- News quality: all 10 items exam-relevant, properly tagged with exam keywords ✅

**Result:** PASSED — news ticker live, updates every 30 min from cron, volume-mounted news.json served directly by nginx

