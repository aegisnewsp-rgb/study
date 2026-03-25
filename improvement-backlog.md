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
2. ~~Exam individual page FAQ content~~ — DONE Cycle 22
3. ~~Exam pages — add exam-pattern/eligibility metadata to /exams listing~~ — DONE Cycle 14
4. ~~Internal linking~~ — DONE Cycle 23
5. Accessibility audit — tap targets, contrast, WCAG AA basics (moderate effort)

---
*[DONE - Cycle 14]* ~~Exam pages — add exam-pattern and eligibility metadata to /exams listing~~ — eligibility line added
*[NEW]* Core Web Vitals audit — LCP, FCP, CLS (moderate effort)
*[NEW]* Exam individual page FAQ content — exam-specific FAQs on roadmap page

---
*[NEW after Cycle 16]*
1. Core Web Vitals — LCP/FCP/CLS audit (moderate effort) — Lighthouse CLI not installed; bundle analysis shows 182KB main JS
2. Exam individual page FAQ content — ~~each roadmap page has 6 FAQs but no exam-specific content yet~~ — IMPLEMENTED Cycle 22: 8 exams (NEET, JEEMain, JEEAdvanced, UPSC, CAT, MDCAT, JAMB, CLAT) × 3 exam-specific FAQs (eligibility, pattern, attempts/score), dynamic JS injection + FAQPage JSON-LD update
3. ~~Breadcrumb structured data~~ — DONE Cycle 17
4. ~~OG images for notes pages~~ — DONE Cycle 19 (1,263 images)
5. ~~Related exam links in sidebar~~ — DONE Cycle 17

---
*[DONE - Cycle 17]* ~~BreadcrumbList JSON-LD~~ — added to all 4 notes page levels
*[DONE - Cycle 19]* ~~OG images for notes pages~~ — 1,263 branded OG images generated, verified live
*[DONE]* ~~Related exam cross-links~~ — DONE Cycle 17 (notes pages)
*[NEW]* Accessibility audit — tap targets, contrast, WCAG AA basics (moderate effort)
*[DONE]* ~~Internal linking~~ — DONE Cycle 23 (topic pages + subject index pages)
