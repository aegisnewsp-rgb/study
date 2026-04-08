# CLAUDE.md — StudyRoadmap Project Instructions

> This file governs all AI-assisted development on the StudyRoadmap codebase.
> Follow these rules when making any changes. Violations may break SEO, AdSense compliance, or user trust.

## Project Overview

**StudyRoadmap** (https://studyroadmap.in) is a free, no-signup AI study planner for competitive exams across India, Pakistan, Nigeria, and 16+ other countries.

- **Stack**: Astro 6 (static output), React 19, Tailwind CSS 4, TypeScript
- **Hosting**: Vercel (static), Cloudflare DNS
- **Analytics**: Plausible (cookie-free, privacy-friendly)
- **Content**: 125+ exams, 3000+ study notes, exam data in TypeScript files

## Architecture

```
src/
  pages/           # Astro pages (.astro) — each is a route
    index.astro    # Homepage
    roadmap.astro  # Roadmap generator (React SPA embedded)
    exams.astro    # All exams listing
    exams/[exam].astro  # Individual exam pages (SSG from data)
    notes/         # Study notes (from content collection)
    study-plan-generator.astro  # SEO landing page
  components/      # Shared components
    RoadmapApp.tsx # Main React app — roadmap generation logic
    Navbar.astro   # Site navigation
    Footer.astro   # Site footer with internal links
  layouts/
    Layout.astro   # Base HTML layout — all SEO meta lives here
  data/
    exams/         # Exam data files (TypeScript) — one per exam per country
    exams.ts       # Re-exports all exams
    exam-faqs.ts   # Exam-specific FAQ content
  content/
    notes/         # Markdown study notes (content collection)
  styles/
    global.css     # Global styles, utilities, print styles
public/
  robots.txt       # Crawler directives
  llm.txt          # AI platform discovery (short)
  llms-full.txt    # AI platform discovery (comprehensive)
  ads.txt          # Advertising authorization
  sitemap files    # Generated at build time
scripts/
  fix-sitemap.cjs      # Post-build sitemap enhancement
  submit-indexnow.cjs  # IndexNow submission for instant indexing
```

## Critical Rules

### 1. SEO — Do Not Break

- **Every page MUST have unique `<title>` and `<meta name="description">`** with target keywords
- **Title format**: `{Page Topic} — {Keywords} | StudyRoadmap™` (under 60 chars preferred)
- **Description**: 150-160 chars, include primary keywords, end with value proposition
- **Canonical URLs**: Always set via Layout.astro's `canonicalURL` logic
- **Internal links**: ALWAYS link to `/exams/{examId}/` for individual exams, NOT `/roadmap?exam=`
  - The `/exams/{id}/` pages have rich crawlable content (description, pattern, eligibility, FAQ)
  - The `/roadmap` page is a client-side React SPA — Google cannot crawl generated roadmaps
- **Structured data**: Every page should have at minimum: BreadcrumbList + page-specific schema
- **hreflang**: Keep en-IN, en-PK, en-NG, x-default on all pages
- **Sitemap**: After adding new pages, ensure they appear in the sitemap via `astro.config.mjs` customPages or the `fix-sitemap.cjs` postbuild script
- **robots.txt**: Block AI training bots (GPTBot, anthropic-ai, CCBot, Google-Extended), ALLOW AI citation bots (OAI-SearchBot, ClaudeBot, PerplexityBot, etc.)

### 2. Google AdSense Compliance — Mandatory

- **Content quality**: Every page must have substantial, original content (not thin/duplicated)
- **No misleading content**: Exam descriptions must be factual, sourced from official syllabi
- **No fake reviews/ratings**: NEVER add self-review schemas (AggregateRating for own site)
- **Privacy policy**: Must disclose ALL data collection (Plausible, any ads, localStorage)
- **ads.txt**: Keep updated in `public/ads.txt` with authorized sellers
- **Ad placement**: Ads must be clearly distinguishable from content (no deceptive layouts)
- **No prohibited content**: No adult content, violence, hate speech, copyrighted exam papers
- **Mobile friendly**: All pages must work on mobile — test with Chrome DevTools mobile mode
- **No excessive ads**: Maintain good content-to-ad ratio (content should dominate above fold)

### 3. Privacy — Never Compromise

- **No personal data collection**: The site stores NOTHING on servers
- **localStorage only**: Exam choices and preferences stored client-side
- **Plausible analytics**: Cookie-free, GDPR-compliant — this is the only analytics
- **Privacy policy must be accurate**: If you add any tracking, update `privacy.astro`
- **No third-party tracking pixels**: No Facebook Pixel, Google Analytics (GA4), etc.

### 4. Performance — Keep It Fast

- **Target**: <3s LCP on 3G, <100ms FID, <0.1 CLS
- **Fonts**: Load Inter async (only weights 400, 600, 700, 800)
- **Images**: Use WebP/AVIF where possible, lazy-load below fold
- **React**: RoadmapApp is the only React component — keep it lean
- **CSS**: Tailwind purges unused classes at build time
- **No heavy dependencies**: Don't add client-side JS libraries without strong justification
- **Static output**: Site is fully static (no SSR) — keep it that way for speed

### 5. Content Quality Standards

- **Exam descriptions**: Must be factual, based on official exam board publications
- **No invented data**: Never fabricate exam dates, eligibility criteria, or statistics
- **Attribution**: Always cite official exam boards (NTA, JAMB, PMDC, WAEC, etc.)
- **Disclaimer**: Every exam page must include the disclaimer that we're not affiliated with any exam board
- **Study notes**: Human-reviewed, three tiers (Quick/Standard/Deep), aligned to official syllabus
- **News section**: Sourced from Google News RSS — verify before displaying

## Development Workflow

### Adding a New Exam

1. Create exam data file in `src/data/exams/{country}/{exam-id}.ts`
2. Export it from `src/data/exams/index.ts`
3. The `[exam].astro` page will auto-generate via `getStaticPaths()`
4. Add exam-specific FAQs in `src/data/exam-faqs.ts` (at least 5 unique Q&As)
5. After build, verify the exam appears in the sitemap
6. Run `node scripts/submit-indexnow.cjs` to notify search engines

### Adding Study Notes

1. Create markdown files in `src/content/notes/{examId}/{subjectId}/{topicId}.md`
2. Include required frontmatter: exam, examName, subject, subjectName, topic, topicName, weight, country, generated
3. Notes must be substantial (>500 words for Standard tier, >200 for Quick)
4. Cross-reference with official syllabus documents

### Modifying Layout/SEO

1. Test changes locally with `npm run dev`
2. Check structured data with Google Rich Results Test (after deploying)
3. Verify mobile layout in Chrome DevTools (iPhone SE, Pixel 5)
4. Run Lighthouse audit — target 90+ on Performance, Accessibility, SEO, Best Practices
5. After deploying, submit updated pages via IndexNow

## File Naming Conventions

- Exam IDs: lowercase, hyphenated (e.g., `ssc-cgl`, `jee-main`, `hat-ug`)
- Subject IDs: lowercase, hyphenated (e.g., `organic-chemistry`, `general-awareness`)
- Topic IDs: prefix with subject abbreviation + number (e.g., `phy-001`, `chem-012`)
- Content files: `.md` for notes, `.ts` for data, `.astro` for pages

## Common Mistakes to Avoid

1. **DON'T** link exam cards to `/roadmap?exam=` — always use `/exams/{id}/`
2. **DON'T** add self-review schemas (Google considers this spam)
3. **DON'T** claim "no analytics" in privacy page (we use Plausible)
4. **DON'T** add placeholder verification codes that render in HTML
5. **DON'T** use SPA rewrites in vercel.json (breaks static page routing)
6. **DON'T** force min-height:44px on all elements (breaks inline layouts)
7. **DON'T** add Google Analytics or any tracking that requires cookies
8. **DON'T** change the Astro output mode from `static`
9. **DON'T** remove the `prefers-reduced-motion` media query
10. **DON'T** hardcode exam counts — always derive from `ALL_EXAMS.length`

## Growth & Evolution Guidelines

When making content or feature decisions, prioritize:

1. **Organic search traffic** — more indexable content pages (exam pages, notes) > SPA features
2. **AI platform citations** — keep llm.txt and llms-full.txt updated when adding exams
3. **Mobile-first** — majority of target users (India, Pakistan, Nigeria) are on mobile
4. **Page speed** — fast pages rank better and serve users on slow connections
5. **E-E-A-T signals** — author attribution, methodology citations, content review dates
6. **Internal linking** — every page should link to related content (cross-exam, notes, roadmap)

## Deployment

- **Auto-deploy**: Push to `main` triggers Vercel deploy
- **Post-deploy**: Run `node scripts/submit-indexnow.cjs` for instant indexing
- **Verify**: Check https://studyroadmap.in/sitemap-0.xml after deploy
- **Monitor**: Check Plausible dashboard for traffic changes after content updates

## Contact & Ownership

- Email: contact@studyroadmap.in
- GitHub: https://github.com/aegisnewsp-rgb/study
- Twitter: @studyroadmap_in
