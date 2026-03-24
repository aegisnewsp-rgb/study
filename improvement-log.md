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

