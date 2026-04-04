# PM-Technical Task Queue
## Status: DONE: PM-Technical

---

## TASK QUEUE

### TASK-TECH-001 [PM-Technical] Core Web Vitals Audit — Image & Font Optimization
**Status:** DONE ✓
**File(s):** src/layouts/Layout.astro, src/components/*.astro
**What:** Audit all Astro components for Core Web Vitals issues. Check:
1. All `<img>` tags have explicit width/height attributes (prevent CLS)
2. All font loads use `font-display: swap` 
3. No render-blocking CSS or JS in `<head>`
4. Any inline critical CSS vs deferred stylesheets

**Acceptance:** 
1. List all files with potential CLS issues (images without dimensions)
2. List all font declarations without swap
3. No `<link rel="stylesheet">` in `<head>` that blocks rendering (external CDN fonts should be preloaded or deferred)
4. Verify Layout.astro has minimal critical CSS

**Why:** CLS < 0.1 and LCP < 2.5s are Core Web Vitals ranking factors. StudyRoadmap targets students who need fast loads on mobile.

**Rollback:** git checkout HEAD -- [affected files]

---

## COMPLETED THIS CYCLE

### TASK-TECH-001 — Core Web Vitals Audit (DONE ✓)

**Audit Findings:**

1. **CLS (Image dimensions): CLEAN ✅**
   - Zero `<img>` tags found in entire `src/` tree
   - Logos use CSS-sized `<div>` elements (w-8 h-8), flags use emoji in fixed-size divs
   - No risk of layout shift from images

2. **Font `font-display: swap`: CLEAN ✅**
   - Google Fonts URL includes `&display=swap` parameter
   - Text renders immediately with fallback (swap) — no invisible text issue

3. **Render-blocking CSS: ISSUE FOUND & FIXED ✅**
   - `global.css` had `@import url('https://fonts.googleapis.com/...')` — this creates a render-blocking network request even with preconnect
   - Built CSS (`/_astro/Layout.MvJzBsyT.css`) confirmed the raw `@import` was bundled verbatim
   - **FIX:** Removed the `@import` from `global.css`; added `<link rel="preload" as="style" ... onload="this.onload=null;this.rel='stylesheet'">` to `Layout.astro` head — loads fonts asynchronously without blocking first paint
   - `noscript` fallback added for JS-disabled browsers

4. **Critical CSS: ACCEPTABLE ✅**
   - Astro bundles all CSS into `/_astro/Layout.MvJzBsyT.css` — single stylesheet, no extra round-trips
   - No duplicate or unused stylesheets
   - Dark mode script is inline (FOUC-prevention) — minimal overhead

**Files Changed:**
- `src/styles/global.css` — removed Google Fonts `@import`
- `src/layouts/Layout.astro` — added async font preload pattern

**Note:** `TASK_BOARD.md` does not exist in the repo; skipped.

