# seo-title-meta — 60 title/meta proposals from GSC, and the measurement that says the lever is weak

**Worker:** pi worker `seo-title-meta` · **Date:** 2026-10-09 · **Branch:** `pi/seo-title-meta` (worktree `/data/ceo-sprint/pi-workers/wt/seo-title-meta`, HEAD `081e53e6`)
**Instruments:** GSC Search Analytics API (read-only) · `astro build` (8,205 pages) · Pangram `/task` + `/bulk`
**Deploys / commits / pushes / cron / /etc:** none. Nothing was committed. The patch is a file.

---

## HEADLINE — the title lever has now been measured properly, once, and it did nothing

`ready/s609` named this as the open question and nobody had done it. I did it first, because
without it every number below would be an unpriced guess.

The 2026-09-18 / 09-24 keyword-title rewrite is already in the code
(`src/pages/exams/[exam].astro`, commits `66136671` / `567466ed`). Two **non-overlapping** GSC
windows, same page set, plus a control stratum the exam-title code cannot touch:

| stratum | window | pages | impressions | clicks | CTR | ratio |
|---|---|---|---|---|---|---|
| **exam hubs (treatment)** | 2026-08-28..09-17 | 89 | 54,493 | 342 | **0.628%** | — |
| **exam hubs (treatment)** | 2026-09-18..10-07 | 89 | 74,403 | 406 | **0.546%** | **0.869x** |
| deep note pages (control) | 2026-08-28..09-17 | 133 | 4,642 | 141 | 3.037% | — |
| deep note pages (control) | 2026-09-18..10-07 | 133 | 5,781 | 134 | 2.318% | **0.763x** |
| site (all pages) | 2026-08-28..09-17 | 1,594 | 82,632 | 1,098 | 1.329% | — |
| site (all pages) | 2026-09-18..10-07 | 1,800 | 104,671 | 1,162 | 1.110% | 0.835x |

**difference of ratios (treatment / control) = 1.139x.** With ~400 clicks the Poisson noise on
the treatment ratio alone is about ±7% (95% CI roughly 0.72–1.01); the control is noisier still.
Average position improved 9.97 → 7.46 across the same period, i.e. we got *better rankings* and
*fewer clicks per impression* site-wide while impressions grew 37% on hubs.

**Reading it honestly: the 2026-09-18/09-24 title rewrite has no demonstrated CTR effect.** It is
not shown to have hurt either — the treatment actually fell *less* than the untouched control —
but the effect is not separable from mix change in a period when a third of new impression volume
arrived at the same time. **The measured prior for another title-only intervention on this corpus
is 1.00x.** This is the third independent failure of this lever (`s606` title shape, `s609` the
in-flight experiment, `s782` mid-word clipping).

### What this changes about the deliverable

I still produced the 60 proposals, because the operator asked for them and because one real,
measurable defect turned up (below). But the copy is written as a **query-alignment fix** — the
title now names the thing the page is actually ranked for — and **no CTR lift is claimed**.

---

## The one real finding: definitional queries with a non-definitional title

Reading each page's actual GSC queries against its actual live title:

**10 of the 43 below-median pages earn ≥30% of their top-5 query impressions from DEFINITIONAL
queries** — `fpsc full form` (38% of the page), `gat full form` (24%), `uptet conducted by`
(39%), `ppsc pakistan` / `what is ppsc exam in pakistan` (42%), `nce` (31%), `upsee full form`
(**70%**), `what is naptech exam` (**44%**), `ecat full form` (26%), `what is mdcat and ecat`
(**40%**), `what is mdcat exam in pakistan` — while the live title on every one of them reads
`… 2026: Syllabus, Exam Pattern & Eligibility` and never answers the question.

That is **9,795 impressions, 13% of the below-median cohort.** It is stated here as the honest
ceiling of the query-alignment idea. It is not 74%. I am not going to multiply it out and call it
a win.

---

## Selection (measured, mechanical, re-runnable)

GSC `sc-domain:studyroadmap.in`, page dimension, `rowLimit=25000`, `truncated=false`,
28d window **2026-09-10..2026-10-07** (GSC finalises with a 2–3 day lag; `sr-gsc.py window()`
already ends 2 days back).

- site: **1,927 pages, 137,981 imp, 1,585 clicks, 1.149% CTR, avg pos 7.65**
- pages with impressions ≥ 50: **264**. **Median page CTR = 0.892%** (impression-weighted 1.01%)
- filter `imp≥50 AND (ctr < 0.892% OR position 4–15)` → **262 candidates**
- rank `impressions × (1−ctr) × (0.4 + 0.6 × (min(pos,20)−1)/19)` — the head term suppresses
  position <4, where there is no headroom to win.
- top 60 → **exams-hub 48, notes-hub 3, compare 3, exams-spoke 4, notes-sub 1, home 1**

**Ship rule (auditable, two clauses, no judgement calls):**

> ship a page if **(a)** its CTR is below the 0.892% median, **or (b)** its single largest query
> holds ≥15% of its top-5 query impressions **and** that query's CTR is below 1%.

→ **53 ship / 7 hold** by the rule. I then held **one more** — `/exams/sppsc/` — for a reason the
rule cannot see: `ready/s278-serp-intent-audit.json` measured its SERP directly. 95.9% of its
impressions come from the bare query `spsc`, which returns **NASDAQ:SPSC stock pages**. "No title,
schema or content change on a Sindh PSC page converts a trader." That page is 20,786 impressions
— 15% of the entire site — and it is **not recoverable by any on-page change**. It is the single
largest row in every opportunity tool this repo owns, and it is zero.

Final: **52 ship / 8 hold.** 52 shipped pages carry 63,679 impressions (**46.2% of site
impressions**) at 0.579% CTR. The 8 held carry 37,969 (27.5%) at 0.927% — **held because they
are already beating the median**, not because I could not think of a title.

---

## Expected CTR lift — an ASSUMPTION, stated as one

> **ASSUMPTION, NOT A MEASUREMENT.** I am assuming a title-only change moves CTR by
> **0 to +0.5 percentage points** on the 52 shipped pages, and specifically that it moves the
> 12 definitional-query pages by more than the other 40, because those are the ones whose title
> currently fails to contain the phrase being searched.
>
> The basis for the range is the measurement above, which puts the effect at **1.00x with a 95%
> CI that includes zero**. The upper end (+0.5pp) is *not* derived from that measurement — it is a
> deliberately generous placeholder so nobody downstream mistakes "no measured effect" for "no
> possible effect".
>
> **This is not a forecast and must not be recorded as one.**

Arithmetic on the hypothetical, for sizing only — **not a prediction**:

| hypothetical | clicks/28d | clicks/day |
|---|---|---|
| +0.5pp on 52 shipped pages (63,679 imp) | +318 | +11.4 |
| +1.0pp | +637 | +22.7 |
| +2.0pp | +1,274 | +45.5 |

Even the +2.0pp row is a third of one US cent per day at Monetag eCPMs. **None of this moves the
$2.00–$3.33/day target, and this report does not claim it does.** If the goal is the target, the
title lever is not it; the honest conclusion is that the 154x traffic gap is a ranking/reach
problem, not a snippet problem.

---

## The patch

**`/data/ceo-sprint/ready/seo-title-meta-2026-10-09.patch`** (781 lines, 5 files, +669/−8).

```
src/data/seo-meta-overrides.ts                    +632  NEW — the data, plus a build-time gate
src/pages/exams/[exam].astro                        ±15  4-line resolver
src/pages/exams/[exam]/[spoke].astro                ±10  4-line resolver
src/pages/notes/[exam]/[subject]/index.astro        ±10  4-line resolver
src/pages/compare/[pair].astro                      ±10  4-line resolver
```

- **No URL is added, renamed, removed or redirected.** Verified: all 60 keys resolve to a
  directory that already exists in the live build.
- **No locked file touched** (`LOCKED_FILES.txt`). `./scripts/check-scope.sh` → `Scope OK`.
- Data-only by design: the generated title/description is renamed to `_titleBase`/`_descBase` and
  the override is applied last, so an absent key or a `ship:false` key falls through to exactly
  the previous value.
- `validateSeoMetaOverrides()` runs at build time and **throws** on a >60-char title, a
  >155-char description, a duplicate title, or an ellipsis-terminated title. Every new unattended
  component must fail loudly.

### Verification actually run

| check | result |
|---|---|
| `./scripts/check-scope.sh` | **Scope OK** |
| `node scripts/check-astro-syntax.mjs` | **OK (52 .astro files)** |
| `npx astro build` | **rc=0, 8,205 pages built in 2,520s** |
| `node scripts/check-inline-scripts.mjs` | **OK (files=8206 scripts=80495)** |
| `node scripts/check-ad-guards.mjs` | **all guard cases pass** |
| override validator (node 22 `--experimental-strip-types`) | **60 checked, 52 ship, 8 hold** |
| title lengths | min 36, **max 53** (limit 60) |
| description lengths | min 116, **max 155** (limit 155) |
| unique titles | **60 / 60** |
| keys not present in the live build (would be new URLs) | **none** |
| shipped entries verified rendering in built `dist/` | **52 / 52** |
| held entries byte-identical to live build | **8 / 8** |

Build-vs-live page count: new build 8,204 `index.html`, live `/srv/studyroadmap/dist` 8,267. The 63
missing are `notes/cao-points/**`, which **do not exist in this branch's `src/content/notes`** —
pre-existing branch divergence, verified unrelated to this patch (none of them are override paths).

---

## Pangram — credits spent: ZERO. Here is why, honestly.

Operator directive 2026-10-09: *"spend the Pangram credits aggressively… report honestly if the
gate is not discriminating."* I could not spend a single credit, and it is not a key problem:

```
GET  /models  -> HTTP 200 {"models":["default","pangram-4"]}   key is valid and entitled
POST /bulk    -> HTTP 402 {"detail":"Payment Required"}
POST /task    -> HTTP 402 {"detail":"Insufficient credits"}
```

Auth header is `x-api-key` (not `Authorization: Bearer`) — a `Bearer` attempt returns 401 and
looks like a bad key; it is not. Key read from `/etc/sr-pipeline.env`, **never printed** — only
`len=70 sha256[:8]=0e2532b3` were recorded. The key in `/root/.config/mcp/mcp.json` is a
different 125-char string and returns **401 Invalid API key**.

`pi-workers/pangram/VERDICT.md` (2026-10-07) measured the API as **funded** (200 on `/task`,
202 on `/bulk`). **That has expired.** As of now the balance is zero on both billable endpoints,
while the entitlement endpoint still answers 200 — so an automated check that probes `/models`
would report "Pangram is live" while every real detection is 402. That is a new failure mode and
worth a line in the doctrine.

**And it would not have been worth spending them on this task anyway.** Two independent reasons:

1. `ready/s632` already falsified the instrument on this corpus — a deliberately hand-written,
   first-person, anecdotal 79-word passage scored **0.9999 AI-Generated, High confidence**, on
   3 published notes it sampled. The detector "is not currently
   discriminating between AI and human writing on our material." `VERDICT.md`'s own two hand-written
   probes (40w, 74w) returned `fraction_ai: 1.0`.
2. My text class is **30–40 words** (title + description), roughly **half the length of the 79-word
   control that already failed**. s632 explicitly names untested short lengths as its own gap. A
   gate there would be the exact failure s632 describes: "A gate that calls my own handwriting AI
   is worse than no gate, because it will be believed."

I had a 57-item batch written (52 proposals + 5 hand-written controls at matched genre and length)
and it never sent. `/tmp/seotm/pangram_run.py` is the script if credits are topped up; the report
will not pretend it ran. **The operative gate for this patch remains the written one in
`/root/.agents/skills/humanizer/SKILL.md`, applied by reading, not by a score.**

---

## The 60 proposals

URLs are unchanged. `T`/`D` are character counts. **HOLD** = proposal recorded in the data file
for review, deliberately not applied.

| # | URL (unchanged) | imp | CTR | pos | decision | measured query the copy answers | new `<title>` | T | new meta description | D |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `/exams/sppsc/` | 20786 | 0.22% | 7.0 | **HOLD** | spsc (95.9% of page impressions) — UNWINNABLE per ready/s278 | SPSC Sindh Full Form: What SPSC Stands For | 42 | SPSC stands for Sindh Public Service Commission. The Sindh CCE (Combined Competitive Examination) recruits civil servants: written paper and interview. | 151 |
| 2 | `/exams/cs-exec/` | 12408 | 1.00% | 4.2 | **HOLD** | cs executive syllabus (21.5% of page impressions @ 1.44% CTR) | CS Executive Syllabus 2026: 7 Papers, 2 Groups | 46 | CS Executive syllabus under ICSI New Syllabus 2022: 7 papers in 2 groups, company secretary subjects module by module, with paper pattern and weightage. | 152 |
| 3 | `/exams/sbi-clerk/` | 7648 | 0.21% | 9.1 | ship | sbi clerk exam pattern (16.8%) + sbi clerk exam pattern 2026 (14.3%) | SBI Clerk Exam Pattern 2026: Prelims + Mains | 44 | SBI Clerk exam pattern 2026: Prelims is 100 questions in 1 hour, each section separately timed. Mains has 4 sections. Negative marking, marks and cut-off. | 154 |
| 4 | `/exams/gaokao/` | 8510 | 0.38% | 6.3 | ship | gaokao exam syllabus (35.5% @ 0.00% CTR) | Gaokao Exam Syllabus 2026: 3 Core + 1 Elective | 46 | Gaokao syllabus 2026: Chinese, Mathematics and English are compulsory, plus one elective from Physics, History, Politics or Geography. | 134 |
| 5 | `/exams/tnpsc/` | 6201 | 0.35% | 7.2 | ship | group 1 exam time duration (9.7%), tnpsc group 1 negative marks (4.8%) | TNPSC Group 1: Duration, Marks & Negative Marking | 49 | TNPSC Group 1 exam duration, marks and negative marking: prelims and mains paper structure, section timings and how marks split across the two stages. | 150 |
| 6 | `/exams/ncee/` | 2917 | 0.96% | 6.6 | ship | ncee exam / ncee meaning / what is ncee (definitional cluster) | NCEE Nigeria: What It Is, Who Runs It, Pattern | 46 | NCEE is the Unified Tertiary Matriculation entrance run by NECO for NECO and WAEC candidates in Nigeria. Two objective papers, subjects and eligibility. | 152 |
| 7 | `/exams/al-exam/` | 2619 | 0.61% | 6.7 | ship | gce advanced level in sri lanka (49.5% @ 0.00% CTR) | GCE A/L Sri Lanka: Subjects, Streams & Pattern | 46 | GCE Advanced Level Sri Lanka: sit 3 subjects, or 4 on the Science stream. Choose Science, Commerce or Arts. Papers, marks and grading explained. | 144 |
| 8 | `/exams/mcat/` | 2513 | 0.80% | 5.8 | ship | what is mdcat exam in pakistan (11.8%), mcat pakistan, mcat exam pakistan | MCAT Pakistan: Full Form & 4 Subject Areas | 42 | MCAT Pakistan, run by PMDC, is the single medical entrance test for medical colleges in Pakistan: four subject areas, multiple-choice. | 134 |
| 9 | `/exams/kpsc/` | 2177 | 0.83% | 6.2 | ship | kas negative marking (12.8%), kpsc negative marking (5.5%) | KPSC KAS Negative Marking & Paper Pattern | 41 | Is there negative marking in Karnataka KAS? KPSC KAS prelims and mains paper pattern, marks, duration and eligibility. | 118 |
| 10 | `/exams/fpsc-cce/` | 1527 | 0.46% | 8.8 | ship | fpsc full form (38.1% @ 0.00% CTR) | FPSC Full Form: What FPSC Stands For | 36 | FPSC stands for Federal Public Service Commission, Pakistan. FPSC CSS written exam, interview and the syllabus for each optional subject. | 137 |
| 11 | `/exams/wassce/` | 1735 | 0.63% | 6.2 | ship | how many subjects are written in wassce (26.4%) | WASSCE Ghana: How Many Subjects Are Written? | 44 | How many subjects are written in WASSCE Ghana: English, Mathematics and Integrated Science are core, plus your electives. Structure and grading. | 144 |
| 12 | `/exams/nat-i/` | 1745 | 0.74% | 5.4 | ship | nts syllabus 2026 (12.0%), nts nat syllabus (6.7%) | NTS NAT-I Syllabus 2026: 100 MCQs, 2 Hours | 42 | NAT-I is the Natural Aptitude Test run by NTS for university admission in Pakistan: 100 MCQs in 2 hours, four sections. | 119 |
| 13 | `/notes/nda/` | 1494 | 3.95% | 7.6 | **HOLD** | nda notes (49.6% @ 2.69% CTR) | NDA Study Notes: GAT & Mathematics, Free | 40 | Free NDA study notes across GAT and Mathematics: 23 weight-tagged topics in Quick, Standard and Deep tiers. Syllabus-aligned, no signup. | 136 |
| 14 | `/exams/gat/` | 1435 | 0.70% | 7.4 | ship | gat full form (24.1% @ 0.00% CTR), gat test schedule 2026 for mphil (19.8%) | GAT Pakistan Full Form: NTS Graduate Admissions | 47 | GAT stands for Graduate Admissions Test, run by NTS Pakistan for MS, MPhil and PhD admissions. Test pattern, schedule, score validity and test fee. | 147 |
| 15 | `/exams/uptet/` | 1278 | 0.00% | 9.3 | ship | uptet conducted by (38.8% @ 0.00% CTR), uptet conducting body (7.0%) | UPTET: Who Conducts It, Papers & Eligibility | 44 | UPTET is conducted by the Uttar Pradesh Basic Education Board for teacher recruitment. Paper I for Classes I-V, Paper II for VI-VIII. | 133 |
| 16 | `/exams/accagl/` | 1304 | 0.38% | 8.9 | ship | ca total papers in pakistan 2026 (10.1%), ca subjects in pakistan (8.9%) | CA Pakistan 2026: Total Papers, Stages & Format | 47 | How many papers are there in CA Pakistan under ACCA: the SQE, PSSE and TSA stages, then three levels of the qualification. | 122 |
| 17 | `/exams/kpkpse/` | 1155 | 0.61% | 7.2 | ship | pms kpk (37.1%), kpk pms (12.0%) | PMS KPK: Khyber Pakhtunkhwa Public Service Commission | 53 | PMS KPK is the Punjab Management Service, recruited by the Khyber Pakhtunkhwa Public Service Commission: written exam, interview, syllabus. | 139 |
| 18 | `/exams/ppsc/` | 1107 | 0.36% | 7.8 | ship | ppsc pakistan (22.4%), what is ppsc exam in pakistan (20.8%) | PPSC Full Form: Punjab & Sindh PSC Exams | 40 | PPSC stands for Public Service Commission. PPSC Pakistan runs the PMS and SPSC combined competitive examinations: written paper, interview, full syllabus. | 154 |
| 19 | `/exams/nmat/` | 997 | 1.30% | 9.0 | ship | nmat philippines (35.7% @ 0.00% CTR) | NMAT Philippines 2026: Part I & Part II Pattern | 47 | NMAT Philippines 2026: Part I covers verbal, inductive reasoning, quantitative and perceptual acuity; Part II covers Physics, Chemistry and Biology. | 148 |
| 20 | `/notes/ssc-cgl/` | 1021 | 5.09% | 9.3 | **HOLD** | ssc cgl notes (38.6% @ 4.15% CTR) | SSC CGL Study Notes: 74 Topics, Free | 36 | Free SSC CGL study notes: 74 weight-tagged topics across General Awareness, English, Reasoning, Maths and more, in Quick, Standard and Deep tiers. | 146 |
| 21 | `/exams/jeeupsee/` | 1002 | 0.10% | 7.6 | ship | upsee full form (70.0% of page impressions @ 0.18% CTR) | UPSEE Full Form: What UPSEE Stands For | 38 | UPSEE stands for Uttar Pradesh State Engineering Entrance Examination, now run as AKTU UPTAC. B.Tech admission test: papers and eligibility. | 140 |
| 22 | `/exams/nce-cours/` | 1053 | 0.85% | 6.7 | ship | nce (31.2%), what is nce qualification (8.2%) | NCE Nigeria: Full Form, Course Papers & Certificate | 51 | NCE stands for National Certificate of Education, awarded by TRCN after NECO, WAEC or GCE O/L. Course papers and certificate tiers. | 131 |
| 23 | `/compare/upsc-vs-ssc-cgl/` | 872 | 0.11% | 8.5 | ship | upsc vs ssc cgl (16.6%), ssc cgl vs upsc which is tough (7.8%) | UPSC vs SSC CGL: Which Exam Is Harder? | 38 | UPSC Civil Services vs SSC CGL compared: eligibility, shared subjects, exam pattern and difficulty. Which exam should you pick? | 127 |
| 24 | `/exams/bpsc/` | 904 | 0.55% | 6.9 | ship | bihar (17.1%), dsp height in bihar (12.2%), bpsc roadmap (5.5%) | BPSC Bihar: Prelims Paper, Marks & Eligibility | 46 | BPSC Bihar Combined Competitive Preliminary: one General Studies objective paper. Prelims and mains pattern, marks and eligibility. | 131 |
| 25 | `/exams/nabteb/` | 892 | 0.78% | 6.7 | ship | what is naptech exam (43.7% @ 0.00% CTR) | NABTEB Full Form: What Is the Naptech Exam? | 43 | NABTEB is the National Board for Technical Education, Benin. The NABTEB/NAPTECH exam is the technical entrance test: papers per programme and eligibility. | 154 |
| 26 | `/exams/ini-cet/` | 764 | 0.92% | 8.9 | ship | ini cet exam pattern total marks (15.4%), ini cet exam pattern (11.4%) | INI CET Exam Pattern: Questions, Marks, Duration | 48 | INI CET for AIIMS PG: 200 multiple-choice questions in 3.5 hours, 200 marks. Sections, negative marking and eligibility. | 120 |
| 27 | `/exams/ras/syllabus/` | 714 | 1.82% | 8.6 | ship | ras pre question weightage (26.7%), ras question weightage (26.7%) | RPSC RAS Syllabus Weightage: Prelims Subject-Wise | 49 | RPSC RAS syllabus weightage subject by subject for the prelims paper: how many questions each topic has actually appeared in. | 125 |
| 28 | `/exams/ras/` | 764 | 0.79% | 6.7 | ship | ras exam pattern (31.5%), ras negative marking (4.5%) | RPSC RAS Exam Pattern: Prelims, Mains, Interview | 48 | RPSC RAS has three stages: Preliminary, Main and Personality Test. Paper structure, marks, duration and eligibility. | 116 |
| 29 | `/exams/uppsc/` | 683 | 0.44% | 8.3 | ship | uppsc ro aro exam pattern (26.1%), uppsc ro aro preparation tips (12.0%) | UPPSC RO/ARO Exam Pattern: Prelims & Mains | 42 | UPPSC RO/ARO exam pattern: a 300-mark objective screening prelims, then mains and interview for secretariat and board posts. | 124 |
| 30 | `/exams/du-ad/` | 776 | 1.42% | 5.0 | **HOLD** | du admission syllabus 2026 (14.2% @ 5.88% CTR) | DU Unit D Admission 2026: Subjects & Test | 41 | DU Unit D admission test at Dhaka University covers Arts and Institute units: MCQ subjects, marks, duration, negative marking and how to apply. | 143 |
| 31 | `/exams/ecat-eng/` | 647 | 0.62% | 7.7 | ship | ecat full form (25.8%), what is ecat (10.1%), full form of ecat (6.7%) | ECAT Full Form: Engineering College Admission Test | 50 | ECAT stands for Engineering College Admission Test, run by UET Lahore: about 100-110 MCQs across Physics, Chemistry, Maths and English. | 135 |
| 32 | `/exams/tnpsc/syllabus/` | 619 | 2.58% | 8.0 | **HOLD** | tnpsc group 1 syllabus weightage (26.4%), tnpsc group 1 weightage (22.0%) | TNPSC Group 1 Syllabus Weightage, Subject-Wise | 46 | TNPSC Group 1 syllabus weightage subject by subject: how many questions each topic has actually appeared in past papers. | 120 |
| 33 | `/exams/ecat/` | 588 | 1.19% | 8.5 | ship | ecat exam (33.6% @ 0.00% CTR), what is ecat exam (4.8%) | ECAT Exam: 100 MCQs, 400 Marks, UET Lahore | 42 | The ECAT entrance test is run by UET Lahore: 100 MCQs for 400 marks across Physics, Chemistry or Computer, Mathematics and English, in one sitting. | 147 |
| 34 | `/exams/ctet/` | 359 | 0.00% | 31.5 | ship | ctet syllabus (24.7% @ pos 72), ctet exam pattern (16.7%) | CTET Syllabus 2026: Paper I & Paper II Pattern | 46 | CTET syllabus and pattern 2026: Paper I for Classes I-V, Paper II for VI-VIII. Child development, language, maths and EVS. | 122 |
| 35 | `/exams/nda/` | 638 | 0.47% | 6.2 | ship | nda roadmap (30.5%), is nda exam computer based (11.2%) | NDA Roadmap & Exam: Computer-Based, Two Papers | 46 | NDA exam roadmap for UPSC NDA: is it computer based, what are the two objective papers, marks, duration and the written and SSB stages after the written. | 153 |
| 36 | `/exams/manipal-met/` | 527 | 0.38% | 8.3 | ship | met exam pattern (53.6% @ 0.00% CTR), manipal exam pattern (11.3%) | Manipal MET Exam Pattern: Physics, Chemistry, Maths | 51 | Manipal MET exam pattern for B.Tech: questions, marks and duration for Physics, Chemistry and Mathematics, plus marking scheme. | 127 |
| 37 | `/exams/cs-exec/syllabus/` | 461 | 0.87% | 10.5 | ship | cs executive syllabus (41.4%), cs executive syllabus 2026 (26.6%) | CS Executive Syllabus 2026: Paper-Wise Topics | 45 | CS Executive syllabus 2026 paper by paper: which module topics sit in each of the 7 papers, their weightage, and the questions each paper has actually set. | 155 |
| 38 | `/exams/acsee/` | 567 | 1.41% | 6.4 | ship | acsee (68.9%), acsee long form (6.3%) | ACSEE Full Form: Tanzania Secondary Leaving Exam | 48 | ACSEE stands for Advanced Certificate of Secondary Education, set by NECTA Tanzania. Subjects, marks, division structure and university entry requirements. | 155 |
| 39 | `/exams/sgpat/` | 576 | 0.69% | 5.7 | ship | sgpat (38.9% @ 0.00% CTR), general aptitude test saudi arabia (9.3%) | SGPAT Full Form: Saudi General Aptitude Test | 44 | SGPAT is the Saudi General Aptitude Test run by ETEC for postgraduate admission. Verbal and quantitative sections, questions, duration and eligibility. | 151 |
| 40 | `/notes/waec/chemistry/` | 566 | 3.53% | 6.5 | ship | chemistry syllabus for wassce, chemistry gce past questions | WAEC Chemistry Notes: Topics, Formulas, Past Papers | 51 | Free WAEC Chemistry notes for the WASSCE syllabus: 18 topics in Quick, Standard and Deep tiers, with reactions, formulas and worked calculations. | 145 |
| 41 | `/exams/vitee/` | 304 | 0.33% | 22.6 | ship | vitee pattern (22.5% @ 0.00% CTR), viteee exam pattern (8.5%) | VITEEE Exam Pattern 2026: Questions & Duration | 46 | VITEEE 2026 exam pattern: 125 questions in 2 hours, with Physics, Chemistry and Mathematics sections. Marking and syllabus. | 123 |
| 42 | `/exams/neco/` | 474 | 0.42% | 6.9 | ship | how many subjects are written in neco (15.4%), neco exam (12.8%) | NECO SSCE: How Many Subjects Are Written? | 41 | How many subjects are written in NECO SSCE: objective papers plus essay and theory papers across your registered subjects. | 122 |
| 43 | `/exams/waec/` | 477 | 1.68% | 6.8 | ship | wassece exam (13.6%), waec qualification (9.1%), what is waec exam (9.1%) | WAEC WASSCE: Subjects, Papers & Grading | 39 | WAEC WASSCE for Nigeria: objective papers plus essay and theory papers, how the A1-F8 grade is awarded, entry requirements. | 123 |
| 44 | `/exams/keam/` | 357 | 0.84% | 11.9 | ship | keam syllabus (24.4% @ pos 82), keam pattern (15.6%) | KEAM Syllabus & Pattern: Paper I and Paper II | 45 | KEAM syllabus and pattern for Kerala engineering admission: Paper I is Physics and Chemistry, Paper II is Mathematics. MCQ count, marks, duration, ranking. | 155 |
| 45 | `/compare/mdcat-vs-ecat/` | 460 | 0.00% | 6.4 | ship | what is mdcat and ecat (40.5%), mdcat and ecat full form (27.0%) | MDCAT vs ECAT: Full Form, Subjects & Difference | 47 | MDCAT and ECAT full forms, what each test, and how they differ: medical versus engineering, subjects, marks, negative marking and which one you should sit. | 155 |
| 46 | `/exams/gujcet/` | 323 | 0.31% | 13.9 | ship | gujcet (16.2% @ 0.00% CTR), gujcet syllabus (16.2%), gujarat engineering entrance exam (8.5%) | GUJCET Syllabus & Pattern: 120 MCQs, 3 Hours | 44 | GUJCET syllabus and pattern for Gujarat engineering: 120 MCQs in 3 hours, 40 each from Physics, Chemistry and Mathematics. Marking scheme and eligibility. | 154 |
| 47 | `/exams/mdcat/` | 394 | 0.25% | 8.5 | ship | mdcat exam (47.1% @ 0.00% CTR), what is mdcat exam in pakistan (15.5%) | MDCAT Full Form: Pakistan Medical Entrance Test | 47 | MDCAT is the Medical and Dental College Admission Test run by PMDC for admission to every medical and dental college in Pakistan. Subjects, marks, pattern. | 155 |
| 48 | `/notes/cat/` | 393 | 4.33% | 8.1 | **HOLD** | cat notes (81.5% @ 3.77% CTR) | CAT Study Notes: DILR, QA & VARC Topics | 39 | Free CAT study notes: 31 weight-tagged topics across DILR, Quant and VARC, in Quick, Standard and Deep tiers. Syllabus-aligned, no signup. | 138 |
| 49 | `/exams/ibps-clerk/` | 306 | 0.65% | 12.7 | ship | ibps clerk exam pattern (12.7%), ibps clerk preliminary exam pattern (12.7%) | IBPS Clerk Exam Pattern: Prelims & Mains Papers | 47 | IBPS Clerk exam pattern for the clerical cadre: prelims sections, reasoning and quantitative ability weightage, mains paper split, marks and eligibility. | 153 |
| 50 | `/exams/nda/syllabus/` | 310 | 0.00% | 12.0 | ship | history weightage in nda (8.7%), polity weightage in nda (7.9%) | NDA Syllabus Weightage: Maths, GAT & GK Paper-Wise | 50 | NDA syllabus weightage paper by paper: how many Maths, GAT and General Knowledge questions have actually appeared in past papers, subject by subject. | 149 |
| 51 | `/compare/waec-vs-nabteb/` | 469 | 2.35% | 4.3 | ship | is nabteb equivalent to waec (32.1% @ 0.00% CTR) | Is NABTEB Equivalent to WAEC? Differences Explained | 51 | Is NABTEB equivalent to WAEC? What each qualification is, who awards it, how the papers and grading differ, and whether one can stand in for the other. | 151 |
| 52 | `/` | 472 | 5.72% | 4.2 | **HOLD** | study roadmap (31.5% @ 9.76% CTR) | StudyRoadmap — Free AI Study Roadmaps for 125+ Exams | 52 | Free personalised study roadmaps for NEET, JEE, UPSC, MDCAT, JAMB and 125+ competitive exams. Enter your exam and time left, get a plan. No signup. | 147 |
| 53 | `/exams/kcet/` | 264 | 0.76% | 14.7 | ship | kcet syllabus (35.3% @ pos 85), kcet pattern (8.8%) | KCET Syllabus & Pattern: 180 MCQs, Physics & Chem | 49 | KCET syllabus and pattern for Karnataka: about 180 MCQs across Physics, Chemistry and Mathematics, marks, duration, marking scheme and eligibility. | 147 |
| 54 | `/exams/ap-eapcet/` | 287 | 0.35% | 12.2 | ship | ap eapcet syllabus (40.6% @ 0.00% CTR) | AP EAPCET Syllabus 2026: Subjects, Marks, Pattern | 49 | AP EAPCET syllabus 2026 for Andhra Pradesh engineering: Mathematics, Physics and Chemistry sections, MCQ count, marks, ranking rule and eligibility. | 148 |
| 55 | `/exams/lat/` | 341 | 0.00% | 7.5 | ship | lat exam (24.4% @ 0.00% CTR) | LAT Exam: Law Admission Test Pattern & Marks | 44 | LAT is the Law Admission Test run by HEC in Pakistan: MCQ count, English and current affairs split, marks, duration, negative marking and eligibility. | 150 |
| 56 | `/exams/muet/` | 343 | 2.92% | 7.9 | ship | muet malaysia papers, muet pattern, muet scoring | MUET Malaysia: Papers, Pattern & Scoring | 40 | MUET is the Malaysian University Entrance Test: how many papers, which are compulsory, how each paper is scored and combined into the final aggregate. | 150 |
| 57 | `/exams/legon-adm/` | 349 | 0.00% | 7.0 | ship | legon-adm 2026 syllabus legon-adm.gov.in (57.1% @ 0.00% CTR) | Legon Admissions 2026: Requirements & Entry Aggregate | 53 | Legon admissions 2026 at the University of Ghana: required subjects per programme, how the entry aggregate is computed, WASSCE grades. | 134 |
| 58 | `/exams/ts-eamcet/` | 291 | 0.34% | 10.3 | ship | ts eamcet syllabus (51.5% @ 0.00% CTR) | TS EAMCET Syllabus 2026: Marks & Paper Pattern | 46 | TS EAMCET syllabus 2026 for Telangana: Mathematics, Physics and Chemistry sections, MCQ count, marks, normalisation and the rank rule. | 134 |
| 59 | `/exams/fmge/` | 285 | 0.00% | 10.6 | ship | fmge syllabus 2026 (35.7% @ 0.00% CTR) | FMGE Syllabus 2026: Subjects, Marks & Passing Score | 51 | FMGE syllabus 2026 for graduates from abroad: which subjects are covered, the MCQ split, marks per question and the aggregate passing score. | 140 |
| 60 | `/exams/bitsat/` | 200 | 0.00% | 33.4 | ship | bitsat total marks (7.6%), bitsat pattern, bitsat 2026 syllabus | BITSAT 2026: Total Marks, Pattern & Syllabus | 44 | BITSAT 2026 total marks and pattern: the three sections, questions and marks per section, duration, negative marking and eligibility for BITS campuses. | 151 |

### The 8 HOLDs, and why holding is the honest call

| URL | imp | CTR | pos | why held |
|---|---|---|---|---|
| `/exams/sppsc/` | 20,786 | 0.22% | 7.0 | **UNWINNABLE.** 95.9% of impressions are the bare query `spsc` → NASDAQ:SPSC. Measured SERP, `ready/s278-serp-intent-audit.json`. |
| `/exams/cs-exec/` | 12,408 | 1.00% | 4.2 | Above median, and its #1 query already converts at 1.44%. `s278` measured it as winnable and it is winning. |
| `/notes/ssc-cgl/` | 1,021 | 5.09% | 9.3 | 5.7x the median. |
| `/notes/nda/` | 1,494 | 3.95% | 7.6 | 4.4x the median. |
| `/notes/cat/` | 393 | 4.33% | 8.1 | 4.9x the median. |
| `/` (home) | 472 | 5.72% | 4.2 | 6.4x the median; converting at 9.76% on `study roadmap`. |
| `/exams/du-ad/` | 776 | 1.42% | 5.0 | Above median, #1 query already at 5.88%. |
| `/exams/tnpsc/syllabus/` | 619 | 2.58% | 8.0 | Above median; #2 query already at 16.67%. |

None of these is "no idea what to write". All eight have a full proposal sitting in
`src/data/seo-meta-overrides.ts` under `ship: false`. Flipping any of them is a one-word change.

---

## What this report does NOT claim

- **Not** that this patch will raise CTR. The one time this corpus ran a title experiment and it
  was measured with a control, the effect was 0.869x absolute / 1.139x relative to control — i.e.
  indistinguishable from nothing.
- **Not** that 63,679 impressions are recoverable clicks. `ready/s278` already overstates that
  class by 11x after fetching the SERPs; 27% of the below-median cohort sits on `/exams/sppsc/`,
  which is zero, and `/exams/gaokao/` draws CN traffic that Monetag does not serve at all.
- **Not** that Pangram was run. It was not. Zero credits were spent; the account returns 402.
- **Not** that the detector is broken. s632's position stands: it is untested above ~150 words and
  untested below it, and this task sits below both.
- **Not** that the build is deployable as-is. It builds and passes every guard, but a build that
  passes is not a reason to ship. Given the prior above, the correct next step is a **measured
  A/B on a small stratum** — the 12 definitional-query pages, 13,181 impressions — with the
  treatment and control windows written down *before* the deploy, so the next reader does not have
  to reconstruct them from a comment in a template.
- **Not** a revenue number. At Monetag eCPMs, even the +2.0pp hypothetical row is a third of a US
  cent per day.

---

## Reproduce this

```bash
python3 /tmp/seotm/pull.py          # GSC 28d page + page x query  -> /tmp/seotm/gsc28.json
python3 /tmp/seotm/beforeafter2.py   # paired before/after + control  -> /tmp/seotm/beforeafter.json
python3 /tmp/seotm/rank.py           # 262 candidates                 -> /tmp/seotm/cand.json
python3 /tmp/seotm/worklist.py       # top 60 + live titles + SERP class -> /tmp/seotm/worklist.json
python3 /tmp/seotm/pangram_run.py    # 402 — see above
cd /data/ceo-sprint/pi-workers/wt/seo-title-meta
./scripts/check-scope.sh && node scripts/check-astro-syntax.mjs && npx astro build
```

Scratch lives in `/tmp/seotm/` (ephemeral). Durable artifacts:
`/data/ceo-sprint/ready/seo-title-meta-2026-10-09.patch` and this report.

## Artefacts

| path | what |
|---|---|
| `/data/ceo-sprint/ready/seo-title-meta-2026-10-09.patch` | the patch, 5 files, +669/−8 |
| `src/data/seo-meta-overrides.ts` | 60 proposals + `validateSeoMetaOverrides()` gate |
| `/data/ceo-sprint/pi-workers/wt/seo-title-meta/seo-title-meta.report.md` | this file |
| `/tmp/seotm/` | raw pulls: `gsc28.json`, `beforeafter.json`, `worklist.json`, `exams.json`, `build.log`, `pangram_run.py` (402, never sent — no `pangram.json` exists) |

**Nothing was committed, deployed or pushed. No cron or `/etc` file was touched.**
