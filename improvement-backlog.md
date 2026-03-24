# Improvement Backlog — StudyRoadmap™

Next 5 highest-value candidate changes (unordered priority):

---

## 1. Exam pages — add exam-pattern and eligibility metadata to /exams listing
**Rationale:** The /exams page currently shows only exam names and country flags. Adding a compact metadata row per exam (mode: online/offline, duration, sections, frequency) would make the page substantially more useful for students comparing exams. Also adds content depth for SEO. Low effort per exam — data is already in exam TypeScript files.

## 2. Core Web Vitals audit — LCP, FCP, CLS
**Rationale:** StudyRoadmap is static but hasn't been audited for Core Web Vitals. LCP is likely driven by font loading, hero image, and news ticker JS. Use the frontend-performance skill to audit and fix. Core Web Vitals are confirmed Google ranking factors. Moderate effort.

## 3. Exam individual page FAQ content
**Rationale:** Each exam has a unique URL pattern (/roadmap?exam=neet etc.). Adding an exam-specific FAQ section on the roadmap page (NEET eligibility criteria, JAMB subject requirements, etc.) would capture long-tail queries at the highest-intent moment. Moderate effort.

## 4. Footer — add last-updated timestamp
**Rationale:** Adding a "Syllabus last updated: [date]" or "Content reviewed: [date]" to the footer signals freshness to Google and students. Trivial effort, meaningful trust signal for educational content.

## 5. Twitter/X card meta tags
**Rationale:** Currently only OG tags are set. Adding Twitter Card meta (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) would improve link previews when shared on Twitter/X. Trivial effort, moderate CTR impact on Twitter shares.

---

---
*[DONE - Cycle 13]* ~~Twitter/X card meta tags~~ — already implemented in Layout.astro
*[DONE - Cycle 13]* ~~Footer — last-updated timestamp~~ — "Content reviewed March 2026" added

**Remaining candidates (next 5):**
1. Core Web Vitals audit — LCP, FCP, CLS (moderate effort)
2. Exam individual page FAQ content (moderate effort)
3. Exam pages — add exam-pattern/eligibility metadata to /exams listing (moderate effort)
4. Internal linking — connect related exam pages, country sections, roadmap pages (moderate effort)
5. Accessibility audit — tap targets, contrast, WCAG AA basics (moderate effort)

---
*[DONE - Cycle 14]* ~~Exam pages — add exam-pattern and eligibility metadata to /exams listing~~ — eligibility line added
*[NEW]* Core Web Vitals audit — LCP, FCP, CLS (moderate effort)
*[NEW]* Exam individual page FAQ content — exam-specific FAQs on roadmap page

---
*[NEW after Cycle 16]*
1. Core Web Vitals — LCP/FCP/CLS audit (moderate effort) — Lighthouse CLI not installed; bundle analysis shows 182KB main JS
2. Exam individual page FAQ content — each roadmap page has 6 FAQs but no exam-specific content yet
3. Breadcrumb structured data — add BreadcrumbList JSON-LD to all notes pages
4. OG images for notes pages — each topic page should have its own OG image (currently uses homepage og-image.jpg)
5. Related exam links in sidebar — link to other countries' equivalent exams (e.g. JEE links to MDCAT)
