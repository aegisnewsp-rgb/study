# StudyRoadmap Technical SEO Report
**Date:** 2026-04-11  
**Scope:** All 3,355 pages — studyroadmap.in  
**Type:** Deep Technical SEO Audit

---

## 1. Core Web Vitals Audit

| Metric | Status | Notes |
|--------|--------|-------|
| Homepage HTML size | ✅ ~233 KB | Good for static site |
| CSS files | ✅ 1 external | `/_astro/Layout.Cw4MVKvs.css` (bundled by Astro build) |
| JS files (client) | ✅ 0 external JS | All inline; analytics via Plausible (async) |
| Fonts | ⚠️ External Google Font | Inter via `fonts.googleapis.com` — preconnected but not preloaded |
| DNS prefetch | ✅ Present | For `googletagmanager.com` |
| Dark mode FOUC | ✅ Prevented | Inline script swaps class before body renders |
| Web Vitals tracking | ✅ Implemented | Inline LCP/FID/CLS observer (no external dep) |

**Render-blocking resources:**  
- `plausible.io/js/pa.js` — loaded via `<script src>`, not `async` attribute. **Should add `async`**.
- Google Fonts stylesheet is non-render-blocking (default behavior), but the font files themselves require network requests.

---

## 2. XML Sitemap Analysis

**Location:** `dist/sitemap-0.xml` (generated at build time, not in `public/`)

### Findings

| Issue | Severity | Detail |
|-------|----------|--------|
| **Missing priority/changefreq on exam pages** | Medium | `fix-sitemap.cjs` generates exam URLs with ONLY `<loc>` + `<lastmod>`. Notes pages get priority 0.6 + changefreq weekly. Static pages get priority 0.7 + changefreq weekly. Exam pages get nothing — inconsistent. |
| **Unrealistic changefreq = weekly for all static/notes pages** | Low | `weekly` is applied to ALL notes and static pages. Pages like `/about/`, `/contact/`, `/privacy/`, `/terms/` rarely change — should be `monthly` or `yearly`. |
| **No duplicate URL detection in final sitemap** | Low | Script checks `existingUrls` before appending — this is correct. Duplicates are avoided. |
| **No 404 URLs in generated sitemap** | ✅ Good | `fix-sitemap.cjs` STEP 0a/0b actively removes entries for pages that were never generated. |

### Sitemap Fix Script (scripts/fix-sitemap.cjs) — What's working well:
- Repairs malformed XML declarations
- Removes broken exam entries (pages not generated)
- Adds `<lastmod>` to all entries
- Adds notes, static pages, and missing exams

---

## 3. Robots.txt Audit

**Location:** `public/robots.txt` ✅

| Check | Status |
|-------|--------|
| Sitemap directives | ✅ Present (2 sitemaps) |
| AI training bot blocking | ✅ Excellent — GPTBot, Google-Extended, ClaudeBot, CCBot, cohere-ai, etc. blocked |
| AI indexing/citations allowed | ✅ Allow for PerplexityBot, OAI-SearchBot, ClaudeBot, ChatGPT-User, etc. |
| Googlebot/Bingbot/Yandex explicit Allow | ✅ Present |
| Disallowed paths | ✅ `/api/`, `/_astro/` only — minimal and correct |
| Crawl-delay: 1 | ✅ Conservative (1s) — appropriate for shared hosting |
| Host directive | ✅ Present (for Yandex) |

**Verdict:** Robots.txt is best-in-class. AI content training vs. indexing policy is well thought out.

---

## 4. Page Speed Opportunities

**File analyzed:** `src/layouts/Layout.astro`

| Opportunity | Impact | Effort | Detail |
|------------|--------|--------|--------|
| **Add `<link rel="preload">` for Google Font files** | Medium | Low | The Inter font `.woff2` files from `fonts.gstatic.com` are fetched after the CSS is parsed. Preloading the font file saves one network round-trip. |
| **Add `async` to Plausible script** | Medium | Low | `<script src="https://plausible.io/js/pa.js">` is currently render-blocking. Add `async` attribute. |
| **Convert og-notes JPEG images to WebP** | Medium | High | All og-notes images are JPEG at 1200×630. Converting to WebP at same dimensions would reduce file size ~30-40%. |
| **Serve fonts self-hosted (optional)** | High | High | Self-hosted Inter font eliminates Google Fonts round-trip. Combined with preload = fastest option. |
| **Inline critical CSS** | Low | Medium | Only 1 CSS file exists — Astro bundles it well. Not a significant win. |
| **Image lazy loading** | Low | Low | Add `loading="lazy"` to all non-above-fold `<img>` tags. Currently OG images are referenced in `<meta property="og:image">` (not lazy loaded — correct for previews). |

---

## 5. Structured Data Audit

**Schema types found in Layout.astro:**

| Schema | Status | Completeness |
|--------|--------|--------------|
| WebSite + SearchAction | ✅ Present | Sitelinks search box — complete |
| Organization | ⚠️ Incomplete | Missing: `logo` (only favicon.svg which isn't a proper logo image), `contactPoint`, `sameAs` (empty array). |
| BreadcrumbList | ✅ Present | On pages that pass breadcrumbs prop |
| FAQPage | ✅ Present | On FAQ pages via `faqs` prop |
| Person (E-E-A-T) | ✅ Present | On authored pages via `author` prop |
| HowTo | ✅ Present | On how-to pages via `howToSteps` prop |

### Organization Schema Issues:
- `logo` uses favicon.svg — not a proper branded logo (wrong aspect ratio)
- `sameAs` is empty — should include social profiles (Twitter/X, LinkedIn, YouTube, etc.)
- `contactPoint` is missing — should include `telephone` and/or `email`
- No `address` or `foundingDate` beyond year

---

## 6. Indexability Issues

| Page Type | robots meta | Status |
|-----------|-------------|--------|
| `/404` | `noindex, nofollow` | ✅ Correct (not a real page) |
| Exam pages | None | ✅ crawls allowed |
| Notes pages | None | ✅ crawls allowed |
| Static pages | None | ✅ crawls allowed |

**No indexability issues found.** All important pages are indexable. The 404 noindex is intentional and correct.

---

## 7. Backlink & Authority Opportunities

**Current state:** Web search for "studyroadmap.in backlinks" returned zero obvious linking sources. The site appears to have no significant backlink profile yet.

### Opportunities:
| Strategy | Impact | Effort | Notes |
|----------|--------|--------|-------|
| **Submit to Google Business Profile** | High | Medium | Free, builds local citations for education niche |
| **Submit sitemap to Google Search Console** | High | Low | Ensure all 3,355 pages are indexed; submit sitemap-0.xml |
| **Guest post / educator blog outreach** | High | High | Target exam prep communities, studyblr, Reddit r/IIT, r/NEET, etc. |
| **LinkedIn company page + posts** | Medium | Medium | Share exam guides, link back to high-value pages |
| **YouTube channel (if one exists — link in sameAs)** | High | High | Video descriptions linking to the site |
| **Reddit AMAs or answer threads** | Medium | Low | r/JEE, r/NEET, r/UPSC — provide genuine help, link naturally |

---

## Prioritized Fix List

| # | Fix | Effort | Impact | Priority |
|---|-----|--------|--------|----------|
| 1 | **Add `async` to Plausible `<script>` tag** | Low | Medium | P1 |
| 2 | **Add `<link rel="preload">` for Google Font woff2 files** | Low | Medium | P1 |
| 3 | **Add `contactPoint` + social `sameAs` to Organization schema** | Low | Medium | P1 |
| 4 | **Add priority/changefreq to exam sitemap entries** (fix-sitemap.cjs) | Low | Low | P2 |
| 5 | **Fix changefreq values** (monthly for static pages, not weekly) | Low | Low | P2 |
| 6 | **Convert og-notes JPEG → WebP** | High | Medium | P3 |
| 7 | **Submit to Google Search Console + verify sitemap indexing** | Low | High | P1 |
| 8 | **Actively build backlinks** (Google Business, LinkedIn, Reddit) | High | High | P2 |
| 9 | **Self-host Inter font** (eliminate Google Fonts CDN dependency) | High | Medium | P3 |

---

## Summary Scorecard

| Area | Score | Notes |
|------|-------|-------|
| Core Web Vitals infrastructure | 8/10 | Good foundation; async script + font preload missing |
| XML Sitemap | 7/10 | Active broken-link repair; inconsistent priority/changefreq |
| Robots.txt | 10/10 | Best-in-class AI training policy |
| Page Speed | 7/10 | Solid; image format + font preload opportunities |
| Structured Data | 7/10 | Organization schema incomplete |
| Indexability | 10/10 | All important pages indexable |
| Backlink Profile | 2/10 | Near-zero backlinks — needs active outreach |
| **Overall** | **7.3/10** | Strong technical foundation; content-indexability focus needed |
