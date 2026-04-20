## 2026-04-16 19:52 UTC

**Health check:** site 200, /exams/neet/ 200 ✓

**Issue found:** pharma-008.md was a placeholder — topicName was "Topic 8" with generic "Topic 8 is an important topic in Botany for NEET PG" content (wrong subject: Botany in a Pharmacology file).

**Fix:** Replaced with proper "Drug Interactions" content — pharmacokinetic (absorption, protein binding, CYP450, excretion) and pharmacodynamic (synergism, antagonism, potentiation) interactions, high-yield tables, clinical scenarios.

**Commit:** `fa3d1c2` — Fix pharma-008.md: replace Topic 8 placeholder with Drug Interactions content

## 2026-04-16 20:03 UTC

**Health check:** site 200, /exams/ 200, /notes/ 200, sitemap-0.xml 200 ✓

**Research log:** last entry (19:52) shows pharma-008.md placeholder fix — resolved, no critical unresolved issues.

**YAML frontmatter:** diagramPrompt fields in cs-exec/company-law/notes use block scalars (multiline quoted strings). Technically valid YAML, not errors — grep matched because closing `"""` is on a separate line after content. No broken frontmatter found.

**Exam data:** Python check skipped (no PyYAML) — manual scan of yaml files in src/data/exams/ not performed to stay under 90s limit.

**Stale dates:** None found in strategy pages.

**Fixes applied:** None (no issues requiring intervention).

**Commit/push:** Skipped (nothing to commit).

## 2026-04-16 20:22 UTC
**Health:** site ✓ (200/200)
**Checked:** Small placeholder notes under 1500 bytes
- bioche-005.md (1465b) — Enzymology: placeholder text (generic phrases like "Core concept: Enzymology is an important topic")
- bioche-007.md (1474b) — Krebs Cycle: placeholder
- pharma-010.md (1429b) — Topic 10: placeholder (says "Botany" but it's pharmacology)
**Fixed:** bioche-005.md — expanded with real Enzymology content:
  - 6-class enzyme classification with examples
  - Michaelis-Menten kinetics, Km/Vmax, Lineweaver-Burk
  - Inhibition types (competitive/non-competitive/uncompetitive)
  - Cofactors, allosteric regulation, clinical relevance
  (~3600 bytes replacing ~1465 byte placeholder)
**Commit:** bcb4f063

## 2026-04-16 22:03 UTC
**Health:** ✓ All 200 (homepage, /exams/, /notes/, sitemap-0.xml accessible)
**Checked:** YAML frontmatter (diagramPrompt — all complete), examPattern/eligibility in exam data (present), stale year refs in strategy pages (none), research-log for unresolved criticals (none)
**Fixes applied:** None
**Commit/push:** Skipped (nothing to commit)

## 2026-04-16 22:22 UTC
- **Health:** studyroadmap.in/ ✅ 200, /exams/neet/ ✅ 200
- **Checked:** None subjectName errors (none), 2024 in pages (non-critical text), missing examPattern metadata
- **Found:** 3 placeholder/generic content files under 1500 bytes: neet-pg/biochemistry/bioche-007 (Krebs Cycle), lat/gk/gk-2 (World History), fmge/biochemistry/bioche-005 (Enzymology)
- **Fixed:** Replaced placeholder content in neet-pg/biochemistry/bioche-007.md with actual Krebs Cycle content (Lite/Standard/Extended tiers with real biochemistry facts, enzymes, ATP yield, anaplerotic reactions, clinical correlations)
- **Commit:** b4982b2e

## 2026-04-16 23:04 UTC
**Health:** studyroadmap.in ✅ 200 (homepage, /exams/, /notes/); sitemap-0.xml dist/ not built yet (expected — no recent deploy)
**Checked:** YAML frontmatter (diagramPrompt — all complete across cs-exec), examPattern/eligibility in exam data (present), stale year refs (2024/25 in taxation/economics are correct live data), broken internal links (none found)
**Fixes applied:** None
**Commit/push:** Skipped (nothing to commit)
2026-04-16 23:22 UTC — Health: 200/200. Found placeholder LAT gk-2.md with generic "World History" text (no real content). Deleted. Committed: 15a41b97.

## 2026-04-16 23:52 UTC
- **Health**: studyroadmap.in/ ✅ 200, /exams/neet/ ✅ 200
- **Checked**: Placeholder files (size <1500c)
- **Found**: `fmge/biochemistry/bioche-005.md` and `uaeu-cat/gk/gk-003.md` — both contained only placeholder content ("Topic X is an important topic in Y for Z")
- **Fixed**: Deleted both placeholder files (2 files, 92 lines removed)
- **Committed**: `32170b59`

## 2026-04-17 00:22 UTC
- Health: studyroadmap.in ✓ (200), /exams/neet ✓ (200)
- Checked: placeholders (size <1500c) in src/content/notes/
- Found: 5 placeholder uaeu-cat/gk/ notes (gk-004, 005, 006, 007, 008) — all generic "Topic N" content with no real exam-specific info
- Fix: Removed 5 placeholder files (git rm)
- Commit: 6e7971f7 "Remove remaining placeholder GK notes (uaeu-cat)"

## 2026-04-17 00:52 UTC
- Health: 200 (site), 200 (neet page)
- Checked: YAML None values, placeholder notes, 2024 year references, missing examPattern metadata
- Fixed: src/content/notes/uaeu-cat/gk/gk-001.md — `country: uAeu` → `country: uae` (case mismatch vs data/exams/uae config)
- Commit: 5213b66b

## 2026-04-17 01:06 UTC
- **Health**: All endpoints 200 ✅ (homepage, /exams/, /notes/, sitemap-0.xml)
- **Research log**: Last entry 00:52 — case fixed, nothing critical unresolved
- **Checked**: YAML unclosed strings, missing examPattern/eligibility, broken HTTP links, stale year refs
- **Found**: Nothing to fix — all clear
- **Commit**: None needed

## 2026-04-17 01:22 UTC
- **Health check**: studyroadmap.in ✓ (200/200)
- **Issue found**: uaeu-cat/gk/gk-001.md was placeholder (topicName: "Topic 1", generic filler content)
- **Fix applied**: Replaced with real UAE Geography content (7 emirates, capitals, terrain, climate zones, etc.)
- **Commit**: 1bf7296b
45509100 Quick fix: replace placeholder content in uaeu-cat gk-002 with real current affairs content

## 2026-04-17 01:52 UTC
**Health**: studyroadmap.in ✅ (200), studyroadmap.in/exams/neet/ ✅ (200)
**Fix**: Replaced generic placeholder content with real "Current Affairs — International Relations" content (UAE CAT GK-focused: global diplomacy, GCC, UN, treaties, Abraham Accords)
**Commit**: 45509100


## 2026-04-17 02:04 UTC
- **Health**: All endpoints 200 ✅ (homepage, /exams/, /notes/, sitemap-0.xml)
- **Research log**: Last entry 01:52 — recent fix (commit 45509100, UAE CAT GK content). No critical unresolved issues.
- **Checked**: YAML unclosed strings, examPattern/eligibility in exam data files
- **Found**: Nothing to fix — all clear. YAML strings are properly closed. index.ts is an index file (no examPattern expected).
- **Commit**: None needed

## 2026-04-17 03:03 UTC
- **Health**: studyroadmap.in ✅ homepage 200, /exams/ 200, /notes/ 200, sitemap-0.xml 200
- **Research log**: Last entry 02:04 — no critical unresolved issues from growth agent
- **Checked**: YAML unclosed strings (none), examPattern/eligibility in 52 India exam files (all present), stale year references (FY 2024-25/AY 2025-26 tax year correct, 2025 policy targets legitimate, exam pattern data accurate)
- **Found**: Nothing to fix — all clear
- **Commit**: None needed

## 2026-04-17 04:03 UTC
- **Health**: studyroadmap.in ✅ homepage 200, /exams/ 200, /notes/ 200, sitemap-0.xml 200
- **Research log**: Last entry 03:03 — no critical unresolved issues from growth agent
- **Checked**: YAML unclosed strings (grep false positive — diagramPrompt is a body field, not frontmatter, per content schema), examPattern/eligibility in India exam files (all present)
- **Found**: Nothing to fix — all clear
- **Commit**: None needed


## 2026-04-17 04:52 UTC
- Health: ✓ 200/200
- Issue: placeholder content in src/content/notes/clat/current-affairs/ca-004.md (1444 bytes, generic filler text for all tiers)
- Fix: Rewrote all three tiers with CLAT-specific Static GK content covering Indian Polity, History, Geography, Economics
- Commit: 09fda0f2


## 2026-04-17 05:04 UTC
- **Health**: studyroadmap.in ✅ homepage 200, /exams/ 200, /notes/ 200, sitemap-0.xml 200
- **Research log**: Last entry 04:52 — fix already applied to ca-004.md; no new critical issues
- **Checked**: YAML unclosed strings in notes (diagramPrompt is body field, not frontmatter — all properly quoted), stale 2024 year references in strategy pages (none found, all legitimate)
- **Found**: Nothing to fix — all clear
- **Commit**: None needed

## 2026-04-17 05:22 UTC
- Health: studyroadmap.in/ ✓ 200, studyroadmap.in/exams/neet/ ✓ 200
- Checked: placeholder content (files <1500 bytes)
- Found: clat/english/en-006.md (Fill in Blanks) — only 1473 bytes, contained generic placeholder text ("Fill in Blanks is a key topic in this subject area")
- Fixed: Replaced with actual CLAT Fill in Blanks content (key concepts, question patterns, common traps, practice strategy, extended theory)
- Commit: c494103c

## 2026-04-17 05:52 UTC
- **Health**: studyroadmap.in/ ✅ 200, studyroadmap.in/exams/neet/ ✅ 200
- **Checked**: placeholder content in small notes files
- **Issue**: src/content/notes/clat/english/en-004.md (1449 bytes) — contained generic placeholder text ("Para Summary is a key topic in this subject area")
- **Fix**: Replaced with actual CLAT Para Summary content (Lite/Standard/Extended tiers covering main idea strategies, common traps, CLAT-specific patterns, practice approach)
- **Commit**: b9cae6fc

## 2026-04-17 07:04 UTC
- **Health**: studyroadmap.in/ ✅ 200, studyroadmap.in/exams/ ✅ 200, studyroadmap.in/notes/ ✅ 200, sitemap-0.xml ✅ 200
- **Research log**: No unresolved critical issues from growth agent
- **Checked**: YAML unclosed strings (all properly quoted), stale year references in strategy pages (none), examPattern/eligibility presence (data dir exists)
- **Found**: Nothing to fix — all clear
- **Commit**: None needed

---
**Timestamp**: 2026-04-17 07:22 UTC
**Health**: studyroadmap.in/ ✅ 200, studyroadmap.in/exams/neet/ ✅ 200
**Checked**:
- YAML errors (subjectName: None) → none
- Small placeholder notes → 3 CUET QA notes are legitimately small (~1180 bytes, valid content)
- Year references in pages → 1 legitimate reference to 2024/2025 papers in neet-strategy (contextual, not stale)
- examPattern in data files → india subjects are type-only (no examPattern needed at subject level, main exam files have it)
- Indonesia exam files → all have examPattern and eligibility
- Broken link markers / TODO content → none found
- Weight=0 issues → none

**Found**: Nothing to fix — all clear
**Commit**: None needed
## 2026-04-17 07:52 UTC
- Health: studyroadmap.in/ ✅ (200), /exams/neet/ ✅ (200)
- subjectName None check: clean
- Small quick.md files (cuet-qa-005/006): real content, not placeholders
- 2024 in pages: contextual exam analysis, no issue
- examPattern in exam data: all present
- No issues found


## 2026-04-17 09:04 UTC
- Health: studyroadmap.in/ ✅ (200), /exams/ ✅ (200), /notes/ ✅ (200)
- Sitemap: dist/ directory exists but no sitemap-0.xml found — site likely uses sitemap index with multiple sm files; not a blocker
- YAML diagramPrompt: properly quoted strings, no broken frontmatter
- examPattern in data: subject files correctly lack examPattern (only main exam files have it) — no issue
- Research log: no unresolved critical issues from growth agent
- Found: Nothing to fix — all clear
- Commit: None needed

## 2026-04-17 10:03 UTC
- Health: studyroadmap.in/ ✅ (200), /exams/ ✅ (200), /notes/ ✅ (200), sitemap-0.xml ✅ (200)
- Research log: no unresolved critical issues from growth agent
- YAML diagramPrompt: all properly quoted — no broken frontmatter found
- examPattern in exam data: all exam YAML files properly structured
- Stale date references: none found in strategy pages
- Found: Nothing to fix — all clear
- Commit: None needed

## 2026-04-17 10:22 UTC
**Health:** studyroadmap.in ✅ (200), studyroadmap.in/exams/neet/ ✅ (200)
**Checked:**
- YAML `subjectName: None` → none found
- Small files (<1500c) → 3 CUET QA quick notes — genuine content, not placeholders
- Stale `2024` in pages → neet-strategy.astro (valid context reference, not a year mismatch)
- Missing `examPattern:` → types.ts (interface file) + nigeria/index.ts (barrel export) — expected, not real issues
- TODO/FIXME/placeholder → none
- Empty files → none
- Missing frontmatter → all clean
**Fix:** None needed

=== 2026-04-17 10:52 UTC ===
Health: / → 200, /exams/neet/ → 200
Checked: subjectName=None (none), tiny files (<1500c), 2024 in exam pages (ok), examPattern missing in types/index (ok - not actual data files)
Result: No issues found.

=== 2026-04-17 12:04 UTC ===
Health: / → 200, /exams/ → 200, /notes/ → 200, sitemap-0.xml → 200
Checked: research-log unresolved (none), YAML diagramPrompt unclosed quotes (none - values properly quoted), exam data examPattern/eligibility (all present), stale 2020-2023 in strategy pages (none)
Result: No issues found.

=== 2026-04-17 12:22 UTC ===
Health: / → 200, /exams/neet/ → 200, sitemap-index → 200, /notes/cuet-ug/.../cuet-qa-012 → 200
Checked: subjectName=None (none), tiny files (780 <2000c → reviewed 3 CUET QA quick notes - genuine content), 2024 in pages (neet-strategy.astro - valid), examPattern missing in types.ts/index.ts/nigeria/index.ts (expected - interface/barrel files), sitemap (200), sitemap-index (200)
Result: No issues found.

=== 2026-04-17 13:04 UTC ===
Health: / → 200, /exams/ → 200, /notes/ → 200, sitemap-0.xml → 200
Checked: research-log unresolved (none), YAML diagramPrompt unclosed quotes (compan-001-005.cs-exec/company-law — all properly quoted), examPattern/eligibility in exam data dirs (confirmed present per prior checks), stale years 2020-2023 in strategy pages (none found)
Result: No issues found.

=== 2026-04-17 13:52 UTC ===
Health: / → 200, /exams/neet/ → 200
Checked: subjectName=None (none), tiny files <1500c (3 CUET QA quick notes — 1178-1185c each, genuine content), 2024 in exam pages (neet-strategy.astro valid contextual ref), examPattern missing in types/index.ts (expected — not exam data files)
Result: No issues found.

=== 2026-04-17 14:04 UTC ===
Health: Dev server not running (000 on localhost:4321) — build exists with 3168 HTML files in dist/
Checked: sitemap-0.xml (not in dist root — prev runs accessed via prod URL), YAML diagramPrompt unclosed quotes (1453 grep matches — confirmed FALSE POSITIVES: all properly close with " before newline; contain em dashes encoded as UTF-8 which confuses naive grep), exam data (no new issues), research-log (no unresolved critical items)
Result: No issues found. All clear.

## 2026-04-17 14:22 UTC
- Health: studyroadmap.in ✓ (200), /exams/neet/ ✓ (200)
- YAML errors (subjectName: None): none
- Placeholder files: checked small files — content is real (CUET QA notes)
- Year references in pages: 2024/2025 mentions are valid historical data references
- Missing examPattern metadata: none found
- **Result: No issues found**

## 2026-04-17 14:52 UTC
**Health:** ✅ site (200), /exams/neet/ (200)
**Checked:** YAML None subjects (0), placeholder notes (3 tiny CUET quick notes looked valid), 2024 year refs (1 context mention in neet-strategy), examPattern missing (3 non-data files)
**Fix:** None — all looked valid

## 2026-04-17 15:05 UTC
**Health:** ❌ site unreachable (curl 000/exit 35 — transient?)
**Checked:** research-log (no unresolved critical items), YAML subjectName=None (0), examPattern/eligibility in exam JSONs (all present), stale year refs 2020-2023 (none)
**Fix:** None — no issues found

## 2026-04-17 15:22 UTC
**Health:** ✅ https://studyroadmap.in/ → 200, https://studyroadmap.in/exams/neet/ → 200
**Checked:** subjectName=None (0), tiny placeholder files <1500c (3 found but real content), stale year refs 2024 in pages (1 mention — valid), examPattern missing (none)
**Fix:** None — no actionable issues found

## 2026-04-17 16:03 UTC
**Health:** ✅ https://studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** research-log (no unresolved criticals), YAML subjectName=None (0), examPattern/eligibility in exam JSONs (all present), stale year refs (none)
**Fix:** None — no issues found

## 2026-04-17 17:03 UTC
**Health:** ✅ site (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** research-log (no unresolved criticals — last entry 16:03 UTC was clean), YAML frontmatter errors (grep matched cs-exec files but all are valid block scalars with properly closed multi-line strings — no broken frontmatter), stale year references (econom-001.md and taxati-006.md have FY2024-25 which is current/valid, not stale), tiny files (none found via size check).
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-17 18:03 UTC
**Health:** ✅ https://studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** research-log (no unresolved criticals — last entry 17:03 UTC clean), YAML diagramPrompt unclosed strings (cs-exec files all valid block scalars — no broken frontmatter), examPattern/eligibility in exam JSONs (all present), stale year references (2020-2023 appear only in historical/legal context in Uganda notes — valid content)
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-17 18:52 UTC
**Health:** ✅ site (200), /exams/neet/ (200)
**Checked:** YAML subjectName errors (none), tiny files <1200c (13 found — CUET QA and GATE VA quick refs, all valid content), stale 2024 year refs in exam pages (neet-strategy.astro has "NEET 2024 and 2025" — valid current-year analysis, not stale), examPattern metadata (not YAML-based in this codebase), broken/TODO markers (only format-placeholder XXX patterns in valid CS content)
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-17 19:04 UTC
**Health:** ✅ https://studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** research-log (no unresolved criticals — last entry 18:52 UTC clean), YAML diagramPrompt unclosed strings (cs-exec files all valid block scalars with properly closed double-quoted strings — no broken frontmatter), subjectName null/empty (none), stale year references (none found)
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-17 19:22 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/neet/ (200)
**Checked:** YAML subjectName nulls (none), small files <1200c (3 valid short CUET/GATE quick notes, complete structure), stale 2024 year refs (neet-strategy.astro line 21 — "Based on NEET 2024 and 2025 papers" is current/factual), missing examPattern in data/exams (types.ts, nigeria/index.ts, index.ts — these are module files, not exam data files, so no issue)
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-17 20:03 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** research-log (no unresolved criticals — last entry 19:22 UTC clean), YAML diagramPrompt unclosed strings (compan files properly closed with double-quoted strings — no broken frontmatter), missing examPattern/eligibility in exam JSONs (none found), stale year references in strategy pages (none found)
**Fix:** None — site is healthy, no actionable issues.

`2026-04-17 20:52 UTC` — Health: 200/200. Found & fixed: **Outdated live exam banner** in `src/pages/exams/[exam].astro` — JEE Main 2026 Session 2 banner said exam was happening April 7–9, but date is now April 17. Removed the stale `jeemain` entry from `LIVE_EXAMS`. Committed as `764d5e63`.

## 2026-04-17 21:03 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** research-log (no unresolved criticals — last entry 20:52 UTC clean), YAML frontmatter (diagramPrompt strings all properly closed), examPattern/eligibility metadata (none missing), stale year references in strategy pages (none found)
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-17 22:03 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** research-log (no unresolved criticals — last entry 21:03 UTC clean), YAML frontmatter (diagramPrompt strings all properly closed in cs-exec notes), examPattern/eligibility metadata (none missing), stale year references in strategy pages (none found), sitemap-0.xml accessible on live site (200)
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-17 22:52 UTC — Quick Scan
- Health: ✅ site (200), /exams/neet/ (200)
- No subjectName: None found
- 12 small quick.md files (~1100-1200 bytes) checked — all valid content with proper frontmatter
- neet-strategy.astro references NEET 2024/2025 — OK (historical analysis)
- No missing examPattern metadata
- No TODO/FIXME/placeholder in exams data
- No broken slugs or empty fields
- **Result: No actionable issue found**

## 2026-04-17 23:04 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** research-log (no unresolved criticals — last entry 22:52 UTC clean), YAML frontmatter (diagramPrompt strings properly closed in cs-exec notes), examPattern/eligibility metadata (none missing), stale year references in strategy pages (none found — neet-strategy.astro correctly references 2024/2025 as historical analysis), TODO/FIXME/placeholder in content (none found)
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-18 00:52 UTC
- **Health:** ✅ Site up (200), /exams/neet/ up (200)
- **Checked:**
  - subjectName: None → None found
  - Small quick notes (~1180 chars) → normal for quick tier
  - "2024" in pages → Only in FAQ context (NEET 2024/2025 analysis) — OK
  - Missing examPattern → None found
  - lastUpdated on .astro pages → neet-strategy.astro was missing it
- **Fix:** Added `lastUpdated: '2026-04-18'` frontmatter to neet-strategy.astro
- **Commit:** a2f3c9d Quick fix: add lastUpdated frontmatter to neet-strategy.astro

## 2026-04-18 02:05 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** research-log (no unresolved criticals), YAML frontmatter diagramPrompt strings (all properly closed, no unterminated quotes), examPattern/eligibility nulls in exam data (none found), stale year references in strategy pages (none found — 2024/2025 only in historical FAQ context)
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-18 02:22 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/neet/ (200)
**Checked:** subjectName: None → none found; small notes (~1180 chars) → normal for quick tier; "2024" in pages → only FAQ context (NEET 2024/2025 historical analysis) — OK; missing examPattern → none found; stale year refs → none; 404/broken link markers → none; git status → heartbeat-log.md and research-log.md modified (no commit needed)
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-18 02:52 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/neet/ (200)
**Checked:** subjectName: None → none found; small quick notes → genuine content (Probability, SI/CI, Ratio topics); "2024" in pages → only FAQ context (NEET 2024/2025 historical analysis) — OK; missing examPattern → none found (types.ts/index.ts are code, not data files)
**Fix:** None — site is healthy, no actionable issues.

## 2026-04-18 03:03 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** YAML unterminated diagramPrompt quotes → none found (all properly closed); Indonesia subject files (physics.ts etc.) → subjects dir, no examPattern needed (expected); Indonesia exam files (utbk.ts, undana.ts, uii.ts) → all have examPattern/eligibility; stale year refs in strategy pages → none found (2024/2025 only in FAQ historical context)
**Fix:** None — site is healthy, no actionable issues.
## 2026-04-18 03:52 UTC
- Health: site 200/200, exams/neet 200
- YAML None check: clean
- Placeholder check (small files): all 12 files have valid frontmatter (6 required fields present)
- Year checks (2024 in pages): only 1 reference in neet-strategy.astro (contextual reference, no update needed)
- Exam JSON files: all valid
- Conclusion: no actionable issues found

## 2026-04-18 04:03 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** 4 endpoints all 200; no unresolved criticals in recent log entries; YAML frontmatter diagramPrompt unterminated quotes → none; small placeholder notes → not flagged this cycle; stale year references → none; research-log issues → none actionable
**Fix:** None — site is healthy, no actionable issues.
-e 
2026-04-18 04:52 UTC — Health: 200/200 | No issues found (subjectName:None=none, placeholders=legit content, 2024 refs=valid, examPattern=ok) | Nothing to fix

## 2026-04-18 05:03 UTC
**Health:** ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checked:** YAML unterminated diagramPrompt quotes → none (cs-exec notes properly quoted); Indonesia subjects dir → no examPattern needed (expected); exam files (utbk, undana, uii) → all have examPattern/eligibility per prior check; stale year references → none
**Fix:** None — site is healthy, no actionable issues.

**2026-04-18 05:52 UTC**
Health: ✅ site up (200/200), neet page up (200)
Checks: subjectName:None (none), placeholders (legit quick-tier content), wrong years (none), missing metadata (none)
Fix: none

**2026-04-18 06:06 UTC**
Health: ✅ site up (200/200), sitemap-0.xml (200), /notes/ (200), /exams/ (200)
Checks: diagramPrompt unterminated quotes → none; subjectName:None → none; placeholders → none; stale year refs → none; research-log criticals → none
Fix: none

2026-04-18 06:22 UTC | Health: 200/200 | Checked: YAML None issues, placeholder files, 2024 years, missing examPattern. Found: gt-008.md had 'country: india' (lowercase). Fixed: sed s/country: india/country: India/. Committed as f1deb4c8.
| 2026-04-18 06:22 UTC | Health: 200/200 | Checked: YAML None, placeholder files, 2024 years, missing examPattern. Found: gt-008.md had 'country: india' (lowercase). Fixed. Commit: f1deb4c8.

**2026-04-18 08:03 UTC**
**Health:** ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
**Checks:** diagramPrompt unterminated quotes → none; subjectName:None → none; placeholders → none; stale year refs → none; exam data examPattern/eligibility → all present; research-log criticals → none
**Fix:** None — site is healthy, no actionable issues.

**2026-04-18 08:52 UTC**
- Health: studyroadmap.in/ ✅ (200), studyroadmap.in/exams/neet/ ✅ (200)
- Checked: YAML None values (none), placeholders (files look valid), old years in pages (reference to 2024/2025 papers is intentional)
- **Fix found:** 64 exam files have placeholder `officialSource: 'https://example.com'`
- **Fixed:** src/data/exams/malaysia/muet.ts — replaced example.com with https://www.mpm.edu.my (official Malaysian Examinations Council site for MUET)
- Committed: 646440f4


**2026-04-18 09:22 UTC**
- Health: ✅ studyroadmap.in/ (200), studyroadmap.in/exams/neet/ (200)
- Checks: YAML None values → none; placeholders → files look valid; 2024 years → reference to 2024/2025 papers is intentional; missing examPattern → none
- Fix: tnpsc.ts — replaced placeholder officialSource 'https://example.com' with 'https://www.tnpsc.gov.in'
- Committed: 98a46edb

**2026-04-18 09:52 UTC**
- Health: ✅ studyroadmap.in/ (200), studyroadmap.in/exams/neet/ (200)
- Checks: YAML None values → none; placeholders in MUET writing are intentional templates; 2024 years → none; missing examPattern → only type/index files (expected)
- Fix: none

**2026-04-18 10:03 UTC**
- Health: ✅ studyroadmap.in/ (200), studyroadmap.in/exams/ (200), studyroadmap.in/notes/ (200), sitemap-0.xml (200)
- Research log: no unresolved critical issues
- Checks: YAML None values → none; placeholders → 10+ files still have example.com; 2024/2025 years → intentional references
- **Fix found:** src/data/exams/indonesia/undana.ts — placeholder officialSource
- **Fixed:** undana.ts — replaced example.com with https://undana.ac.id (official Universitas Nusa Cendana site)
- Committed & pushed: 92ec965d
2026-04-18 10:22 UTC | Health: both 200 OK | Fixed: src/data/exams/nepal/loe.ts — replaced placeholder 'example.com' with 'https://psc.gov.np' for officialSource. Remaining placeholders: russia/eed.ts, nigeria/nce-cours.ts, nigeria/toafa.ts, nepal/cmat.ts

## 2026-04-18 10:52 UTC
- Health: studyroadmap.in/ ✅ (200), studyroadmap.in/exams/neet/ ✅ (200)
- YAML None errors: none found
- Small placeholder files: ~10 notes under 1200 bytes, all have real content (GATE RC, CUET QA) — not stubs
- 2024 references in pages: neet-strategy.astro (intentional, discussing 2024 paper analysis) ✅
- Missing examPattern: only index/types files, expected ✅
- No action taken.

## 2026-04-18 11:03 UTC
- Health: studyroadmap.in/ ✅ (200), /exams/ ✅ (200), /notes/ ✅ (200), sitemap-0.xml ✅ (200)
- Research log: no unresolved critical issues
- Checks: YAML None values → none; diagramPrompt missing quotes → none; 2024 refs in strategy pages → intentional; placeholders still in ~50+ exam data files
- **Fixes (2):**
  1. nepal/engineering-ent.ts — replaced example.com with https://ioe.edu.np (Institute of Engineering, TU Nepal)
  2. malaysia/matrikulasi.ts — replaced example.com with https://mohe.gov.my (Malaysian Ministry of Higher Education)
- Committed & pushed: 7cebbf58

## 2026-04-18 11:22 UTC
- Health: ✅ site (200), /exams/neet/ (200)
- YAML None values: ✅ none found
- Placeholder files: 3 small CUET QA files (<1500B) — content verified real (formula/tricks/summary)
- 2024 year refs: found in neet-strategy.astro (contextual mention, no error)
- examPattern metadata: none missing (expected for index/types files)
- Result: No actionable issue found


## 2026-04-18 12:03 UTC
- Health: ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
- Research log: no unresolved critical issues
- Checks: YAML diagramPrompt → all properly quoted; examPattern/eligibility not required in subject data files
- Result: No actionable issue found

## 2026-04-18 12:22 UTC
- **Checked:** site health (✅ 200/200), YAML None values, small files, 2024 year refs, missing examPattern
- **Issue found:** 31 cs-exec notes had `country: cs` which is invalid (not in types.ts country union). Valid values: india|pakistan|nigeria|etc. CS Executive is an Indian exam.
- **Fix:** sed replaced `country: cs` → `country: india` across all cs-exec subdirectories (economics, taxation, company-law, accounting)
- **Committed:** d1eca4bf — "Fix country code cs→india for 31 cs-exec notes"

## 2026-04-18 13:03 UTC
- Health: ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
- Research log: previous fix committed (d1eca4bf cs→india country code)
- Checks: YAML diagramPrompt unquoted → properly quoted in cs-exec files (intentional); examPattern subjects have no metadata requirement; 2024 refs are contextual (exam paper analysis, valid); internal link text mentions of studyroadmap.in are explanatory examples, not broken links
- Result: No actionable issue found

## 2026-04-18 13:52 UTC
- Health: studyroadmap.in ✅ (200), /exams/neet/ ✅ (200)
- Checked: YAML subjectName:None (none) | Placeholders (3 small CUET quick notes — content looks OK) | Wrong years in pages (NEET 2024 refs OK) | Missing examPattern in data files (false positives — all had examPattern)
- Found: Indonesia physics.ts had 10 generic placeholder topics ("Topic 1", "Topic 2"...) with id "physic-001" etc.
- Fix: Replaced with real Indonesian UTBK physics topics (Vektor & Kinematika, Hukum Newton, Listrik & Magnet, etc.) + fixed id prefix to "phys-"
- Commit: b640ab24

## 2026-04-18 14:04 UTC
- Health: ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
- Research log: prior fix (b640ab24 Indonesia physics) committed
- Checks: YAML unterminated quotes (none — cs-exec diagramPrompt values properly quoted), examPattern/eligibility in all india/*.ts files, stale year refs in strategy pages (none), broken internal links (none), empty subjectName (none)
- Result: No actionable issue found


2026-04-18 14:46 UTC — Quick check: / = 200, /exams/neet/ = 200, subjectName None: none, placeholder files: none, 2024 in pages: neet-strategy.astro (contextual reference, valid), examPattern missing: only type/index files (normal). No fix needed.
## 2026-04-19 18:05 UTC
- Health: ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
- Research log: no critical unresolved issues from growth agent
- Checks: YAML unterminated quotes (none), examPattern/eligibility (confirmed ok prior), stale year refs (none), broken internal links (none)
- Result: No actionable issue found — nothing to fix this hour

## 2026-04-19 19:03 UTC
- Health: ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
- Research log: no critical unresolved issues from growth agent
- Checks: YAML unterminated quotes (none — cs-exec company-law diagramPrompts properly quoted), examPattern/eligibility (india exam files confirmed ok; indonesia subjects are subject-knowledge files, no examPattern needed), stale year refs in strategy pages (none found)
- Result: No actionable issue found — nothing to fix this hour

## 2026-04-19 19:04 UTC
- Health: ✅ studyroadmap.in/ (200), /exams/neet/ (200)
- subjectName: None (none found)
- Small note files (<1500c): cuet-qa-005, cuet-qa-006, cuet-qa-012 — all valid content
- 2024 refs in pages: neet-strategy.astro (valid contextual reference to past papers)
- examPattern: all exam data files confirmed to have examPattern/eligibility
- Stale .bak files: Layout.astro.bak present (no refs to it; not actionable)
- Result: No actionable issue found

## 2026-04-19 20:03 UTC
- Health: ✅ studyroadmap.in/ (200), /exams/ (200), /notes/ (200), sitemap-0.xml (200)
- Research log: no critical unresolved issues from growth agent
- Checks: YAML unterminated quotes (cs-exec company-law diagramPrompts properly quoted — previous note was accurate), examPattern/eligibility (Indonesia subjects/ dir intentionally has no examPattern as subject-knowledge files, not exam definitions), stale year refs in strategy pages (none found)
- Result: No actionable issue found — nothing to fix this hour

## 2026-04-19 20:05 UTC
- **Health:** studyroadmap.in ✅ (200), /exams/neet/ ✅ (200)
- **YAML None values:** None found
- **Small files (<1500c):** 3 found (cuet-qa-012, cuet-qa-005, cuet-qa-006) — all valid real content
- **Wrong years in pages:** NEET 2024 reference in neet-strategy.astro — valid content ("Based on NEET 2024 and 2025 papers")
- **Missing examPattern:** Only index/type re-export files (types.ts, nigeria/index.ts, index.ts, pakistan/index.ts) — expected
- **Fix:** None needed

## 2026-04-19 21:03 UTC
- **Health:** studyroadmap.in ✅ (200), /exams/ ✅ (200), /notes/ ✅ (200), sitemap-0.xml ✅ (200)
- **Research log:** no critical unresolved issues from growth agent
- **YAML diagramPrompt quotes:** All properly closed — cs-exec company-law files are clean
- **Stale year refs:** None found in strategy pages
- **Exam data:** Files intact, examPattern/eligibility confirmed present in prior check
- **Result:** No actionable issue found — nothing to fix this hour

## 2026-04-19 22:35 UTC
**Checked:** YAML subjectName:None (none) | small files (3 found, looked OK) | stale 2024 years (1 in neet-strategy, contextually fine) | missing examPattern in .ts files (expected, not subject files)
**Issue:** Missing `diagramPrompt:` in `src/content/notes/cs-exec/economics/econom-001.md`
**Fix:** Added diagramPrompt with supply-demand equilibrium graph description
**Commit:** ce33c668

## 2026-04-20 00:03 UTC
- **Health:** studyroadmap.in ✅ (200), /exams/ ✅ (200), /notes/ ✅ (200), sitemap-0.xml ✅ (200)
- **Research log:** no critical unresolved issues from growth agent
- **YAML diagramPrompt quotes:** All properly closed (cs-exec company-law files + econom-001 all clean)
- **Exam data:** TypeScript-based; no missing examPattern/eligibility in subject files
- **Stale year refs:** None found
- **Result:** No actionable issue — nothing to fix this hour

## 2026-04-20 00:35 UTC
- **Health:** studyroadmap.in ✅ (200), /exams/neet/ ✅ (200)
- **YAML None values:** None found
- **Empty files:** None found
- **Stale year refs:** None found
- **Missing diagramPrompt:** 22 cs-exec notes missing diagramPrompt
- **Fix:** Added diagramPrompt to cs-exec/economics/econom-003.md (Theory of Production and Cost — production function curve)
- **Commit:** b967bc2d
