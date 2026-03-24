# Improvement Backlog — StudyRoadmap™

Next 5 highest-value candidate changes (unordered priority):

---

## 1. About page — add trust signals and exam-board disclaimer banner
**Rationale:** The About page has good narrative content but lacks explicit trust signals (no citations to official exam board sources, no "how we build roadmaps" methodology section). Adding a brief note citing official syllabus sources + a "last updated" stamp would strengthen E-E-A-T for AdSense. Low implementation effort, meaningful trust impact for a site serving exam students making career-defining decisions.

## 2. Privacy/Terms — add real contact information
**Rationale:** Google's quality evaluators flag pages lacking real contact info. The privacy policy currently says "open an issue on GitHub" — adding an actual email address or contact URL would improve trust signals for AdSense. Very low effort, meaningful for policy compliance and trust.

## 3. Homepage — add India/Pakistan/Nigeria country linking section
**Rationale:** Currently the homepage exam grid links to /roadmap but there's no explicit "Browse by country" section linking to /exams. Adding a small visual section (3 country cards with flag + exam count) with links to /exams would improve internal linking equity and help distribute page authority. Low effort, moderate SEO value.

## 4. Add FAQPage JSON-LD to /roadmap page
**Rationale:** The /roadmap page is the core functional page. Adding FAQ schema here (e.g. "How do I read this roadmap?", "What if I miss a day?", "Can I reset my roadmap?") would capture tool-specific queries in People Also Ask. Moderate effort — requires passing FAQ data to the roadmap page Layout. Complements homepage and exams FAQ schemas.

## 5. Add WebSite schema with SearchAction to Layout.astro
**Rationale:** WebSite schema with sitelinks:searchBox enables Sitelinks search box in Google results — a premium SERP feature that improves CTR and brand presence. High visibility impact, low effort, works sitewide. Pairs well with Organization schema.

---
