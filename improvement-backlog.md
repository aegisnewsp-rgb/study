# Improvement Backlog — StudyRoadmap™

Next 5 highest-value candidate changes (unordered priority):

---

## 1. Add FAQPage JSON-LD to /roadmap page
**Rationale:** The /roadmap page is the core functional page. Adding FAQ schema here (e.g. "How do I read this roadmap?", "What if I miss a day?", "Can I reset my roadmap?") would capture tool-specific queries in People Also Ask. Moderate effort — requires passing FAQ data to the roadmap page Layout. Complements homepage and exams FAQ schemas from earlier cycles.

## 2. Add WebSite schema with SearchAction to Layout.astro
**Rationale:** WebSite schema with sitelinks:searchBox enables Sitelinks search box in Google results — a premium SERP feature that improves CTR and brand presence. High visibility impact, low effort, works sitewide. Pairs well with Organization schema from Cycle 04.

## 3. Privacy/Terms — expand with cookie details, GDPR rights, data retention
**Rationale:** Both pages have solid contact info now (Cycle 07). Expanding with real cookie usage explanation, data retention specifics, and GDPR/privacy rights (relevant for Nigerian and international visitors) would further strengthen trust. Low effort, meaningful for international audience.

## 4. Exam pages — add FAQPage JSON-LD to individual exam roadmap pages
**Rationale:** Each exam's roadmap page (e.g. /roadmap?exam=neet) is exam-specific. Adding a mini FAQ relevant to that exam (NEET eligibility, JAMB subject requirements, etc.) would capture long-tail queries at the moment of highest intent. Moderate effort — requires exam-specific FAQ data.

## 5. Sitemap — add sitemap for individual exam pages
**Rationale:** sitemap-0.xml currently only lists the 6 static pages. Individual roadmap pages (/roadmap?exam=neet, /roadmap?exam=jamb etc.) are not indexed. Adding a dynamic or static sitemap for exam roadmaps would help Google discover all 21 exam landing URLs. Moderate effort.

---
