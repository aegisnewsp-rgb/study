# Improvement Backlog — StudyRoadmap™

Next 5 highest-value candidate changes (unordered priority):

---

## 1. About page — add trust signals and exam-board disclaimer banner
**Rationale:** The About page has good narrative content but lacks explicit trust signals (no citations to official exam board sources, no "how we build roadmaps" methodology section). Adding a brief note citing official syllabus sources would strengthen E-E-A-T for AdSense. Low implementation effort, meaningful trust impact for a site serving exam students making career-defining decisions.

## 2. Add JSON-LD Organization schema to Layout.astro
**Rationale:** Organization schema (name, url, logo, sameAs for social profiles) helps Google understand StudyRoadmap as a credible brand entity. Low effort — add as optional Layout prop, used on homepage. Moderate SEO/E-E-A-T value, complements the FAQPage schemas added in Cycles 01 and 03.

## 3. Privacy/Terms — add real contact information
**Rationale:** Google's quality evaluators flag pages lacking real contact info. The privacy policy currently says "open an issue on GitHub" — adding an actual email or contact URL would improve trust signals for AdSense. Very low effort, meaningful for policy compliance and trust.

## 4. Homepage — add India/Pakistan/Nigeria country linking section
**Rationale:** Currently the homepage exam grid links to /roadmap but there's no explicit "Browse by country" section linking to /exams. Adding a small visual section (3 country cards with flag + exam count) with links to /exams would improve internal linking equity and help distribute page authority. Low effort, moderate SEO value.

## 5. Add FAQPage JSON-LD to /roadmap page
**Rationale:** The /roadmap page is the core functional page. Adding FAQ schema here (e.g. "How do I read this roadmap?", "What if I miss a day?", "Can I reset my roadmap?") would capture tool-specific queries. Complements Cycles 01 and 03. Moderate effort — requires passing FAQ data to the roadmap page Layout.

---
