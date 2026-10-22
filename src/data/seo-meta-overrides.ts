/**
 * seo-meta-overrides.ts — per-URL `<title>` / meta-description overrides.
 *
 * WHY THIS FILE EXISTS (evidence, not taste)
 * ------------------------------------------
 * Measured 2026-10-09 from GSC (sc-domain:studyroadmap.in, 28d window
 * 2026-09-10..2026-10-07, page dimension, rowLimit 25000, not truncated):
 *
 *   site                  1,927 pages   137,981 imp   1,585 clicks   1.149% CTR   avg pos 7.65
 *   pages with imp >= 50     264 pages                          median page CTR = 0.892%
 *   262 pages qualify as (imp>=50 AND (CTR < median OR position 4-15))
 *
 * Of the top 60 by opportunity, 43 sit below the 0.892% median and hold 76,063
 * impressions (74.8% of the top-60 total).
 *
 * THE PRIOR IS WEAK, AND THAT IS STATED HERE, NOT BURIED.
 * The 2026-09-18/09-24 keyword-title rewrite (commit 66136671 / 567466ed, code at
 * src/pages/exams/[exam].astro:186-215) has now been measured before/after for the
 * first time, with an untouched control stratum, over NON-OVERLAPPING windows:
 *
 *   paired 89 exam hubs   2026-08-28..09-17  54,493 imp / 342 clicks = 0.628% CTR
 *                         2026-09-18..10-07  74,403 imp / 406 clicks = 0.546% CTR   ratio 0.869
 *   paired 133 deep notes 2026-08-28..09-17   4,642 imp / 141 clicks = 3.037% CTR
 *   (control, untouched)  2026-09-18..10-07   5,781 imp / 134 clicks = 2.318% CTR   ratio 0.763
 *   difference of ratios (treatment / control)                                        1.139
 *
 * The treatment stratum moved 0.87x in absolute terms while the control moved 0.76x;
 * site-wide CTR fell ~17% in the same period as average position improved 9.97 -> 7.46.
 * With ~400 clicks the Poisson noise on the treatment ratio alone is about +/-7% (95%
 * CI roughly 0.72-1.01). **A title-only rewrite on this corpus has no demonstrated CTR
 * effect.** These overrides are therefore written as query-alignment fixes — the title
 * now names the thing people actually searched for — and NOT as a predicted uplift.
 * ready/s606, s782 and s609 all independently failed to find a title-wording lever.
 *
 * WHAT ACTUALLY DRIVES THE SELECTION
 * ----------------------------------
 * For each URL the single largest query the page earns impressions from is read out of
 * GSC. Ten of the 43 below-median pages earn 30%+ of their top-5 query impressions from
 * DEFINITIONAL queries ("fpsc full form", "uptet conducted by", "upsee full form",
 * "what is naptech exam", "ecat full form", "what is mdcat and ecat") while the live
 * title reads "…: Syllabus, Exam Pattern & Eligibility" and never answers the question.
 * Those pages get the largest change. That is 9,795 impressions, 13% of the below-median
 * cohort — stated here because it is the honest ceiling of the query-alignment idea, not
 * because it is big.
 *
 * HARD RULES (enforced by validateSeoMetaOverrides(), which throws at build time)
 *   - title <= 60 chars, description <= 155 chars
 *   - every title unique across the file
 *   - every key is a real, already-published URL path. NO URL is added, renamed or removed.
 *   - no fabricated metric, date, mark or fee. Facts come from the exam's own data file
 *     in src/data/exams/**, from the official body's published pattern, or from the
 *     acronym's own expansion.
 *   - `ship: false` keeps the proposal in the file for review but does NOT override the
 *     template. Used where the page already beats the median CTR (7 of 60) and a change
 *     would be a change to something that works, and where the dominant query was
 *     measured UNWINNABLE (ready/s278-serp-intent-audit.json: /exams/sppsc/ draws 95.9%
 *     of its impressions from "spsc", which returns NASDAQ:SPSC stock pages — no title
 *     change converts a trader into a Sindh PSC candidate).
 *
 * PATCH IS DATA-ONLY BY DESIGN: it adds this module and three one-line resolver calls.
 * It does not touch Layout.astro, the global.css / astro.config.mjs / tailwind configs,
 * Navbar.astro, Footer.astro, RoadmapApp.tsx, docker-compose.yml, Dockerfile, nginx.conf
 * or deploy.sh — see LOCKED_FILES.txt.
 */

export interface SeoMetaOverride {
  /** SERP <title>. <= 60 chars. */
  title: string;
  /** SERP meta description. <= 155 chars. */
  description: string;
  /** The measured query this copy is written to match. For review only. */
  query: string;
  /** GSC 28d impressions for that page at the time of writing. For review only. */
  gscImpressions: number;
  /**
   * false = proposal recorded, deliberately NOT applied. The live title keeps winning.
   */
  ship?: false;
}

export const SEO_META_OVERRIDES: Record<string, SeoMetaOverride> = {

  // ── /exams/sppsc/ ─ 20,786 imp, 0.22% CTR, avg pos 7.0 (the single largest row on the site)
  // 95.9% of impressions are the bare query "spsc" -> NASDAQ:SPSC (ready/s278: UNWINNABLE).
  '/exams/sppsc/': {
    ship: false,
    title: 'SPSC Sindh Full Form: What SPSC Stands For',
    description:
      'SPSC stands for Sindh Public Service Commission. The Sindh CCE (Combined Competitive Examination) recruits civil servants: written paper and interview.',
    query: 'spsc (95.9% of page impressions) — UNWINNABLE per ready/s278',
    gscImpressions: 20786,
  },

  // ── /exams/cs-exec/ ─ 12,408 imp, 1.00% CTR (ABOVE median), pos 4.2. Working. Leave it.
  '/exams/cs-exec/': {
    ship: false,
    title: 'CS Executive Syllabus 2026: 7 Papers, 2 Groups',
    description:
      'CS Executive syllabus under ICSI New Syllabus 2022: 7 papers in 2 groups, company secretary subjects module by module, with paper pattern and weightage.',
    query: 'cs executive syllabus (21.5% of page impressions @ 1.44% CTR)',
    gscImpressions: 12408,
  },

  // ── /exams/sbi-clerk/ ─ 7,648 imp, 0.21% CTR, pos 9.1. ready/s278: the cleanest winnable
  // SERP on the site — no official SBI result in the top 10.
  '/exams/sbi-clerk/': {
    title: 'SBI Clerk Exam Pattern 2026: Prelims + Mains',
    description:
      'SBI Clerk exam pattern 2026: Prelims is 100 questions in 1 hour, Mains has 4 sections, and both stages carry one-fourth negative marking. Marks, cut-off.',
    query: 'sbi clerk exam pattern (16.8%) + sbi clerk exam pattern 2026 (14.3%)',
    gscImpressions: 7648,
  },

  // ── /exams/gaokao/ ─ 8,510 imp, 0.38% CTR. NOTE: CN traffic is non-monetisable
  // (Monetag serves no CN demand) — ranked for reach, not revenue.
  '/exams/gaokao/': {
    title: 'Gaokao 2026 Syllabus: 3+1+2, Six Papers, 750 Marks',
    description:
      'Gaokao 2026 has six papers: Chinese, Mathematics and a foreign language, plus one of Physics or History and two of Chemistry, Biology, Politics, Geography.',
    query: 'gaokao exam syllabus (35.5% @ 0.00% CTR)',
    gscImpressions: 8510,
  },

  '/exams/tnpsc/': {
    title: 'TNPSC Group 1: Duration, Marks & Negative Marking',
    // 2026-10-21 vqzo 1250Z: the measured query 'group 1 exam time duration' (9.7% of
    // 6,201 impressions) asks for the exam TIME. The snippet said 'section timings', then
    // 'section time limits' - but TNPSC has no per-section time limit anywhere in its own
    // body, only per-PAPER durations ('200 questions carrying 300 marks (3 hours
    // duration)', 'four descriptive papers of 3 hours each'). 'per-paper time limits' is
    // the wording the body actually supports, and it keeps the 'time' token the measured
    // query needs. 150 chars.
    description:
      'TNPSC Group 1 exam duration, marks and negative marking: prelims and mains structure, per-paper time limits and how marks split across the two stages.',
    query: 'group 1 exam time duration (9.7%), tnpsc group 1 negative marks (4.8%)',
    gscImpressions: 6201,
  },

  '/exams/ncee/': {
    title: 'NCEE Nigeria: What It Is, Who Runs It, Pattern',
    description:
      'NCEE is the Unified Tertiary Matriculation entrance run by NECO for NECO and WAEC candidates in Nigeria. Two objective papers, subjects and eligibility.',
    query: 'ncee exam / ncee meaning / what is ncee (definitional cluster)',
    gscImpressions: 2917,
  },

  '/exams/al-exam/': {
    title: 'GCE A/L Sri Lanka: Subjects, Streams & Pattern',
    description:
      'GCE Advanced Level Sri Lanka: sit 3 main subjects plus a Common General Test. Choose Science, Commerce or Arts — papers, marks and grading explained.',
    query: 'gce advanced level in sri lanka (49.5% @ 0.00% CTR)',
    gscImpressions: 2619,
  },

  '/exams/mcat/': {
    title: 'MDCAT (MCAT) Pakistan 2026: 4 Subject Areas & Pattern',
    description:
      "MDCAT (formerly MCAT), run by PMDC, is Pakistan's single medical entrance test for MBBS and BDS: four subject areas, 180 MCQs in 3 hours.",
    query: 'what is mdcat exam in pakistan (11.8%), mcat pakistan, mcat exam pakistan',
    gscImpressions: 2513,
  },

  '/exams/kpsc/': {
    title: 'KPSC KAS Negative Marking & Paper Pattern',
    description:
      'Is there negative marking in Karnataka KAS? KPSC KAS prelims and mains paper pattern, marks, duration and eligibility.',
    query: 'kas negative marking (12.8%), kpsc negative marking (5.5%)',
    gscImpressions: 2177,
  },

  '/exams/fpsc-cce/': {
    title: 'FPSC CSS 2026: Full Form, Paper Pattern & Optionals',
    description:
      'FPSC stands for Federal Public Service Commission; CSS is the Central Superior Services Competitive Examination. Written exam, interview, optionals.',
    query: 'fpsc full form (38.1% @ 0.00% CTR)',
    gscImpressions: 1527,
  },

  '/exams/wassce/': {
    title: 'WASSCE Ghana: How Many Subjects Are Written?',
    description:
      'How many subjects are written in WASSCE Ghana? Four core (English, Maths, Integrated Science, Social Studies) plus 3-4 electives. Grading explained.',
    query: 'how many subjects are written in wassce (26.4%)',
    gscImpressions: 1735,
  },

  '/exams/nat-i/': {
    title: 'NTS NAT-I Syllabus 2026: 100 MCQs, 2 Hours',
    description:
      'NAT-I is the Natural Aptitude Test run by NTS for university admission in Pakistan: 100 MCQs in 2 hours, four sections.',
    query: 'nts syllabus 2026 (12.0%), nts nat syllabus (6.7%)',
    gscImpressions: 1745,
  },

  // ── /notes/nda/ ─ 1,494 imp, 3.95% CTR (4.4x the median). Working. Leave it.
  '/notes/nda/': {
    ship: false,
    title: 'NDA Study Notes: GAT & Mathematics, Free',
    description:
      'Free NDA study notes across GAT and Mathematics: 23 weight-tagged topics in Quick, Standard and Deep tiers. Syllabus-aligned, no signup.',
    query: 'nda notes (49.6% @ 2.69% CTR)',
    gscImpressions: 1494,
  },

  '/exams/gat/': {
    // 2026-10-20 vqzo: this snippet ranks for the measured query 'gat full form'
    // (24.1% of this page's impressions, at 0.00% CTR) and expanded the acronym as
    // 'Graduate Admissions Test'. NTS itself writes 'Graduate Assessment Test' on
    // nts.org.pk/new/GAT-S.php, and src/data/exams/pakistan/gat.ts says the same in
    // its own body copy. A user searching the full form was shown an expansion that
    // the official body and the page itself contradicted. Corrected to the official
    // name; both strings are 25 characters, so the 155-char description limit and the
    // measured snippet length are both unchanged.
    title: 'GAT Pakistan Full Form: NTS Graduate Assessment Test',
    // 2026-10-21 vqzo: the measured query cluster 'gat test schedule 2026 for mphil' is 19.8%
    // of this page's 1,435 impressions and the snippet carried no year at all. The body
    // now names the NTS 2026 session schedule in its first screen; the snippet has to
    // carry the same year or the reader never sees it. Title, pattern and fee unchanged.
    description:
      'GAT stands for Graduate Assessment Test, run by NTS Pakistan for MS, MPhil and PhD admissions. 2026 test schedule, pattern, score validity and fee.',
    query: 'gat full form (24.1% @ 0.00% CTR), gat test schedule 2026 for mphil (19.8%)',
    gscImpressions: 1435,
  },

  '/exams/uptet/': {
// 2026-10-18 vqzo: the snippet named the conducting body that this page's own
    // body explicitly debunks. src/data/exams/india/uptet.ts states that "several
    // older write-ups still name the UP Basic Education Board (UPBEB) as the
    // conducting body, and that attribution is out of date", and gives the current
    // one: the U.P. Directorate of Elementary Education (U.P. Pariksha Niyamak
    // Pradhikari, Prayagraj), which runs updeled.gov.in. The string "Basic Education
    // Board" appeared nowhere else in that file except inside the debunking sentence.
    // Same defect shape as the NABTEB snippet fixed at bb148402 -- the SERP denied
    // what the page's own body says -- and worse here, because the measured query IS
    // the body question: "uptet conducted by" is 38.8% of this page's impressions at
    // 0.00% CTR, so the single string a searcher reads before clicking was the one
    // string the page disputes.
    // Off-site corroboration 2026-10-18: updeled.gov.in states its contents are
    // "provided by U.P. PARIKSHA NIYAMAK PRADHIKARI, PRAYAGRAJ, Uttar Pradesh". No
    // source found attributes UPTET to UPBEB.
    // No marks, dates, fees or paper structure touched.
    title: 'UPTET: Who Conducts It, Papers & Eligibility',
    // 2026-10-21 vqzo 1250Z: the measured queries are 'uptet conducted by' (38.8% of this
    // page's impressions, 0.00% CTR) and 'uptet conducting body' (7.0%), so the snippet
    // has to carry BOTH 'conducted' and 'conducting body'. Two earlier cuts failed: the
    // first dropped 'conducted', the second welded a comma appositive onto the object of
    // 'conducted by' ('... Elementary Education, the conducting body, Prayagraj'), which
    // reads as a three-item list and is circular - X cannot be "conducted by the
    // conducting body". The wording below states the fact in one sentence, then names the
    // role in a sentence of its own, so nothing is welded onto anything. 155 chars, inside
    // the 155 limit. The Hindi name stays in the body.
    description:
      'UPTET is conducted by the U.P. Directorate of Elementary Education, Prayagraj. This is the conducting body. Paper I for Classes I-V, Paper II for VI-VIII.',
    query: 'uptet conducted by (38.8% @ 0.00% CTR), uptet conducting body (7.0%)',
    gscImpressions: 1278,
  },

  '/exams/accagl/': {
    title: 'CA Pakistan 2026: Subjects, Stages & Total Papers',
    description:
      'How many papers in CA Pakistan: ICAP runs Foundation, Professional and Final stages, while ACCA is a separate body with 13 exams across three levels.',
    query: 'ca total papers in pakistan 2026 (10.1%), ca subjects in pakistan (8.9%)',
    gscImpressions: 1304,
  },

  '/exams/kpkpse/': {
    // 2026-10-18 vqzo: same defect class as bb148402 (nabteb) and ea0bc43e
    // (uptet, nce-cours) — the snippet denied what the page's own body says.
    // It read "the Punjab Management Service". This page's data file
    // (src/data/exams/pakistan/kpkpse.ts) names the exam "Khyber Pakhtunkhwa
    // Public Service Commission PROVINCIAL Management Service (KP PMS)"
    // throughout, and "Punjab" appears nowhere in the module. Punjab is a
    // different province running a different service: the Punjab Management
    // Service belongs to the PUNJAB Public Service Commission, which is the
    // /exams/ppsc/ page. The two entries had the provinces mirrored — ppsc's
    // own copy was corrected for this at bb148402 and the correction was never
    // propagated back here.
    // So the snippet gave the searcher the wrong province for the exact query
    // this page ranks for ("pms kpk" 37.1% + "kpk pms" 12.0%). Names fixed to
    // the module's own: KP PMS, KPPSC. The title was already correct.
    title: 'PMS KPK: Khyber Pakhtunkhwa Public Service Commission',
    description:
      'PMS KPK is the Khyber Pakhtunkhwa Provincial Management Service (KP PMS), recruited by the KPPSC: written exam, interview, syllabus.',
    query: 'pms kpk (37.1%), kpk pms (12.0%)',
    gscImpressions: 1155,
  },

  '/exams/ppsc/': {
    // 2026-10-18 vqzo: the old copy was wrong in the same shape as the NABTEB
    // defect fixed at bb148402 — the snippet denied what the page's own body says.
    // It read "PPSC Pakistan runs the PMS and SPSC combined competitive
    // examinations". PPSC is the PUNJAB Public Service Commission; SPSC is the
    // SINDH Public Service Commission, a separate constitutional body headquartered
    // in Karachi (spsc.gos.pk) with its own CCE, age bands and domicile rules. PPSC
    // cannot run SPSC examinations. The giveaway was internal: the string "SPSC"
    // appears nowhere in this page's body (src/data/exams/pakistan/ppsc.ts), which
    // is Punjab-only throughout, and the site already has a separate, correctly
    // labelled /exams/sppsc/ page for Sindh (examId 'sppsc', examName "SPSC
    // (Sindh)"). Correction 2026-10-18 0420Z: this comment first cited
    // /exams/spsc/, which is NOT a route on this site -- there is no spsc exam
    // file and no /exams/spsc/ page. src/pages/exams/[exam].astro:155 keys the
    // Sindh title off 'sppsc'. Cite /exams/sppsc/ here.
    // The old title compounded it by
    // presenting "Punjab & Sindh PSC" as one thing with one full form.
    // Dropping the word "Punjab" from "Public Service Commission" is what allowed
    // the two commissions to be merged at all.
    // Expansion + jurisdiction: this page's own description field, corroborated by
    // ppsc.gop.pk ("General Recruitment Examinations and PMS Examinations in
    // Punjab") and Wikipedia (Punjab Public Service Commission, a constitutional
    // and statutory agency). PMS is the Punjab Civil Service, per the body — so
    // PMS is a Punjab exam, not a Sindh one. No marks, fees or dates introduced.
    title: 'PPSC Full Form: Punjab Public Service Commission Exam',
    description:
      'PPSC is the Punjab Public Service Commission of Pakistan, the constitutional body running Punjab competitive exams, including the PMS civil service exam.',
    query: 'ppsc pakistan (22.4%), what is ppsc exam in pakistan (20.8%)',
    gscImpressions: 1107,
  },

  '/exams/nmat/': {
    title: 'NMAT Philippines 2026: Part I & Part II Pattern',
    description:
      'NMAT Philippines 2026: Part I covers verbal, inductive reasoning, quantitative and perceptual acuity; Part II covers Physics, Chemistry and Biology.',
    query: 'nmat philippines (35.7% @ 0.00% CTR)',
    gscImpressions: 997,
  },

  // ── /notes/ssc-cgl/ ─ 1,021 imp, 5.09% CTR (5.7x the median). Working. Leave it.
  '/notes/ssc-cgl/': {
    ship: false,
    title: 'SSC CGL Study Notes: 74 Topics, Free',
    description:
      'Free SSC CGL study notes: 74 weight-tagged topics across General Awareness, English, Reasoning, Maths and more, in Quick, Standard and Deep tiers.',
    query: 'ssc cgl notes (38.6% @ 4.15% CTR)',
    gscImpressions: 1021,
  },

  '/exams/jeeupsee/': {
    title: 'UPSEE Full Form: What UPSEE Stands For',
    description:
      'UPSEE stands for Uttar Pradesh State Engineering Entrance Examination, now run as AKTU UPTAC. B.Tech admission test: papers and eligibility.',
    query: 'upsee full form (70.0% of page impressions @ 0.18% CTR)',
    gscImpressions: 1002,
  },

  '/exams/nce-cours/': {
// 2026-10-18 vqzo: two errors against this page's own body, on a snippet whose
    // measured query is literally "what is NCE".
    // 1. Expansion -- the snippet said "National Certificate in Education"; the body
    //    (src/data/exams/nigeria/nce-cours.ts) says "The Nigeria Certificate in
    //    Education (NCE)". ncce.gov.ng and Wikipedia both give "Nigeria Certificate
    //    in Education".
    // 2. Awarding body -- the snippet said "awarded by TRCN"; the body says it is
    //    awarded by the National Commission for Colleges of Education (NCCE), linked
    //    in the same file as ncceonline.edu.ng. TRCN is a separate body that teachers
    //    register with AFTER holding the NCE. The string "TRCN" occurred nowhere else
    //    anywhere in src/ -- a snippet-only claim with no page support, which is how it
    //    came to contradict the page it was describing.
    // Measured: 1,053 impressions; "nce" 31.2% and "what is nce qualification" 8.2%.
    // Same defect class as NABTEB (bb148402) and UPTET above.
    title: 'NCE Nigeria: Full Form, Course Papers & Certificate',
    // 2026-10-21 vqzo 1250Z: the measured query 'what is nce qualification' (8.2%) is a
    // question the snippet never answered in the words asked, so the snippet now says
    // NCE IS the teacher qualification. The TRCN clause is GONE: grep -rn 'TRCN' src/data/
    // hits only this file, so every TRCN sentence here was a snippet-only claim with no
    // page support - the exact defect class the 2026-10-18 note above was written to
    // remove. Dropping it also leaves 15 chars of headroom under the 155-char limit.
    description:
      'NCE stands for Nigeria Certificate in Education, a teacher qualification awarded by NCCE, the National Commission for Colleges of Education.',
    query: 'nce (31.2%), what is nce qualification (8.2%)',
    gscImpressions: 1053,
  },

  '/compare/upsc-vs-ssc-cgl/': {
    title: 'UPSC vs SSC CGL: Which Exam Is Harder?',
    description:
      'UPSC Civil Services vs SSC CGL compared: eligibility, shared subjects, exam pattern and difficulty. Which exam should you pick?',
    query: 'upsc vs ssc cgl (16.6%), ssc cgl vs upsc which is tough (7.8%)',
    gscImpressions: 872,
  },

  '/exams/bpsc/': {
    title: 'BPSC Bihar: Prelims Paper, Marks & Eligibility',
    // 2026-10-21 vqzo: the measured query 'dsp height in bihar' (12.2%) and 'bpsc
    // roadmap' (5.5%) both fell outside the snippet. 'Height and physical standard for
    // DSP posts' names the topic without asserting a published DSP height figure - the
    // body says the Home (Police) Department sets it and no DSP figure is published.
    description:
      'BPSC Bihar Combined Competitive: one General Studies Prelims paper and five Mains papers. Height, physical standard for DSP posts, marks, study roadmap.',
    query: 'bihar (17.1%), dsp height in bihar (12.2%), bpsc roadmap (5.5%)',
    gscImpressions: 904,
  },

  '/exams/nabteb/': {
    // 2026-10-18 vqzo: the old copy stated the wrong expansion AND the wrong
    // country — "National Board for Technical Education, Benin". NABTEB is the
    // National Business and Technical Examinations Board, Nigeria (formed April
    // 1992), which is what this page's own body copy in
    // src/data/exams/nigeria/nabteb.ts already says. The snippet contradicted
    // the page it described, and "naptech" appeared nowhere in src/ outside this
    // override — so the query this page ranks for ("what is naptech exam",
    // 43.7% of its impressions) was answered by the SERP and not by the page.
    // "Naptech" is retained as the informal name Nigerian candidates use for the
    // National Technical Certificate (NTC); it is not an official exam title.
    // Board name/country: Wikipedia, National Business and Technical Examinations
    // Board (nabteb.gov.ng was returning a WordPress fatal error this cycle).
    // Certificate names and the Nov/Dec + April/May sittings: the examPattern
    // field of this page's own data file.
    title: 'NABTEB Full Form: What "Naptech" Actually Means',
    description:
      'NABTEB is Nigeria\'s National Business and Technical Examinations Board. "Naptech" is the informal name for its National Technical Certificate (NTC).',
    query: 'what is naptech exam (43.7% @ 0.00% CTR)',
    gscImpressions: 892,
  },

  '/exams/ini-cet/': {
    title: 'INI CET Exam Pattern: Questions, Marks, Duration',
    // 2026-10-21 vqzo: the measured query 'ini cet exam pattern total marks' (15.4%)
    // asks for TOTAL marks; the snippet said '200 marks' and the word was missing.
    description:
      'INI CET for AIIMS PG: 200 multiple-choice questions in 3 hours, 200 total marks. Sections, negative marking and eligibility.',
    query: 'ini cet exam pattern total marks (15.4%), ini cet exam pattern (11.4%)',
    gscImpressions: 764,
  },

  '/exams/ras/syllabus/': {
    title: 'RPSC RAS Syllabus Weightage: Prelims Subject-Wise',
    description:
      'RPSC RAS syllabus weightage subject by subject for the prelims paper: 1-5 weightage cues by topic, so you know which questions to prepare for first.',
    query: 'ras pre question weightage (26.7%), ras question weightage (26.7%)',
    gscImpressions: 714,
  },

  '/exams/ras/': {
    title: 'RPSC RAS Exam Pattern: Prelims, Mains, Interview',
    description:
      'RPSC RAS has three stages: Prelims, Mains, Personality Test. Prelims: 150 questions, 200 marks, 3 hours, 1/3 negative marking.',
    query: 'ras exam pattern (31.5%), ras negative marking (4.5%)',
    gscImpressions: 764,
  },

  '/exams/uppsc/': {
    title: 'UPPSC RO/ARO Exam Pattern: Prelims & Mains',
    description:
      'UPPSC RO/ARO exam pattern: a 300-mark objective screening prelims, then mains and interview for secretariat and board posts.',
    query: 'uppsc ro aro exam pattern (26.1%), uppsc ro aro preparation tips (12.0%)',
    gscImpressions: 683,
  },

  // ── /exams/du-ad/ ─ 776 imp, 1.42% CTR (ABOVE median). Working. Leave it.
  '/exams/du-ad/': {
    ship: false,
    title: 'DU Unit D Admission 2026: Subjects & Test',
    description:
      'DU Unit D admission test at Dhaka University covers Arts and Institute units: MCQ subjects, marks, duration, negative marking and how to apply.',
    query: 'du admission syllabus 2026 (14.2% @ 5.88% CTR)',
    gscImpressions: 776,
  },

  '/exams/ecat-eng/': {
    title: 'ECAT Full Form: Engineering College Admission Test',
    description:
      'ECAT stands for Engineering College Admission Test, run by UET Lahore: about 100-110 MCQs across Physics, Chemistry, Maths and English.',
    query: 'ecat full form (25.8%), what is ecat (10.1%), full form of ecat (6.7%)',
    gscImpressions: 647,
  },

  // ── /exams/tnpsc/syllabus/ ─ 619 imp, 2.58% CTR (ABOVE median). Working. Leave it.
  '/exams/tnpsc/syllabus/': {
    ship: false,
    title: 'TNPSC Group 1 Syllabus Weightage, Subject-Wise',
    description:
      'TNPSC Group 1 syllabus weightage subject by subject: how many questions each topic has actually appeared in past papers.',
    query: 'tnpsc group 1 syllabus weightage (26.4%), tnpsc group 1 weightage (22.0%)',
    gscImpressions: 619,
  },

  '/exams/ecat/': {
    title: 'ECAT Exam: 100 MCQs, 400 Marks, UET Lahore',
    description:
      'The ECAT entrance test is run by UET Lahore: 100 MCQs for 400 marks across Physics, Chemistry or Computer, Mathematics and English, in one sitting.',
    query: 'ecat exam (33.6% @ 0.00% CTR), what is ecat exam (4.8%)',
    gscImpressions: 588,
  },

  '/exams/ctet/': {
    title: 'CTET Syllabus 2026: Paper I & Paper II Pattern',
    description:
      'CTET syllabus and pattern 2026: Paper I for Classes I-V, Paper II for VI-VIII. Child development, language, maths and EVS.',
    query: 'ctet syllabus (24.7% @ pos 72), ctet exam pattern (16.7%)',
    gscImpressions: 359,
  },

  '/exams/nda/': {
    // 2026-10-21 vqzo: the snippet said "Computer-Based" and the page's own
    // first screen said "Exam Mode: Pen & Paper (OMR / Written)" -- the same
    // page contradicted itself, and the snippet was the wrong half. The
    // measured query is "is nda exam computer based" (11.2% of 638 GSC 28d
    // impressions, frozen window 2026-09-10..2026-10-07), so the snippet was
    // answering a direct question with a false premise.
    // Primary source: UPSC Examination Notice No. 3/2026-NDA-I, dated 10.12.2025
    // (107pp, notice file mirrored on cdn.testbook.com; upsc.gov.in hosts the
    // same file as "Download Notification Notice (2.2 MB)"): "For both writing
    // and marking answers in the OMR sheet (Answer Sheet) candidates must use
    // black ball pen only." An OMR answer sheet is an offline, pen-and-paper
    // paper. Corroborated for both 2026 sittings (NDA-I on 12.04.2026, NDA-II
    // on 13.09.2026) by testbook, careers360, pw.live, bharatmock,
    // educationtoday and nationdefenceacademy.
    // CBT is only "possible introduction ... in [future]" (shoorveerdefenceacademy).
    // The copy now answers the measured query truthfully instead of repeating it.
    title: 'NDA Roadmap 2026: Offline (Pen-Paper), Two Papers',
    description:
      'NDA roadmap 2026: the written exam runs offline (pen and paper) with OMR answer sheets, not computer-based - two papers, marks, duration, SSB.',
    query: 'nda roadmap (30.5%), is nda exam computer based (11.2%)',
    gscImpressions: 638,
  },

  '/exams/manipal-met/': {
    title: 'Manipal MET Exam Pattern: Physics, Chemistry, Maths',
    description:
      'Manipal MET exam pattern for B.Tech: questions, marks and duration for Physics, Chemistry and Mathematics, plus marking scheme.',
    query: 'met exam pattern (53.6% @ 0.00% CTR), manipal exam pattern (11.3%)',
    gscImpressions: 527,
  },

  '/exams/cs-exec/syllabus/': {
    title: 'CS Executive Syllabus 2026: Paper-Wise Topics',
    description:
      'CS Executive syllabus 2026 paper by paper: which module topics sit in each of the 7 papers, their weightage, and the questions each paper has actually set.',
    query: 'cs executive syllabus (41.4%), cs executive syllabus 2026 (26.6%)',
    gscImpressions: 461,
  },

  '/exams/acsee/': {
    title: 'ACSEE Full Form: Tanzania Secondary Leaving Exam',
    description:
      'ACSEE stands for Advanced Certificate of Secondary Education, set by NECTA Tanzania. Subjects, marks, division structure and university entry requirements.',
    query: 'acsee (68.9%), acsee long form (6.3%)',
    gscImpressions: 567,
  },

  '/exams/sgpat/': {
    title: 'SGPAT Full Form: Saudi General Aptitude Test',
    // 2026-10-21 vqzo: the measured query 'general aptitude test saudi arabia' (9.3%)
    // names the country; the snippet said 'Saudi' and never 'Saudi Arabia'. No new
    // fact - ETEC and Saudi Arabia are already the page's own words.
    description:
      'SGPAT is the Saudi General Aptitude Test run by ETEC in Saudi Arabia for postgraduate admission. Verbal and quantitative sections, duration, eligibility.',
    query: 'sgpat (38.9% @ 0.00% CTR), general aptitude test saudi arabia (9.3%)',
    gscImpressions: 576,
  },

  '/notes/waec/chemistry/': {
    title: 'WAEC Chemistry Notes: Topics, Formulas, Past Papers',
    description:
      'Free WAEC Chemistry notes for the WASSCE syllabus: 18 topics in Quick, Standard and Deep tiers, with reactions, formulas and worked calculations.',
    query: 'chemistry syllabus for wassce, chemistry gce past questions',
    gscImpressions: 566,
  },

  '/exams/vitee/': {
    title: 'VITEEE Exam Pattern 2026: Questions & Duration',
    description:
      'VITEEE 2026 exam pattern: 125 questions in 2 hours, with Physics, Chemistry and Mathematics sections. Marking and syllabus.',
    query: 'vitee pattern (22.5% @ 0.00% CTR), viteee exam pattern (8.5%)',
    gscImpressions: 304,
  },

  '/exams/neco/': {
    title: 'NECO SSCE: How Many Subjects Are Written?',
    description:
      'How many subjects are written in NECO SSCE: objective papers plus essay and theory papers across your registered subjects.',
    query: 'how many subjects are written in neco (15.4%), neco exam (12.8%)',
    gscImpressions: 474,
  },

  '/exams/waec/': {
    title: 'WAEC WASSCE: Subjects, Papers & Grading',
    description:
      'WAEC (West African Examinations Council) awards the WASSCE qualification: objective, essay and theory papers, the A1-F9 grade, entry requirements.',
    query: 'wassece exam (13.6%), waec qualification (9.1%), what is waec exam (9.1%)',
    gscImpressions: 477,
  },

  '/exams/keam/': {
    title: 'KEAM Syllabus & Pattern: Paper I and Paper II',
    description:
      'KEAM syllabus and pattern for Kerala engineering admission: Paper I is Physics and Chemistry, Paper II is Mathematics. MCQ count, marks, duration, ranking.',
    query: 'keam syllabus (24.4% @ pos 82), keam pattern (15.6%)',
    gscImpressions: 357,
  },

  '/compare/mdcat-vs-ecat/': {
    title: 'MDCAT vs ECAT: Full Form, Subjects & Difference',
    description:
      'What is MDCAT and ECAT? MDCAT = Medical and Dental College Admission Test, ECAT = Engineering College Admission Test. Subjects, marks, which to pick.',
    query: 'what is mdcat and ecat (40.5%), mdcat and ecat full form (27.0%)',
    gscImpressions: 460,
  },

  '/exams/gujcet/': {
    title: 'GUJCET Syllabus & Pattern: 120 MCQs, 3 Hours',
    description:
      'GUJCET (Gujarat Common Entrance Test) syllabus and pattern: 120 MCQs in 3 hours for Gujarat engineering, 40 each from Physics, Chemistry and Maths.',
    query: 'gujcet (16.2% @ 0.00% CTR), gujcet syllabus (16.2%), gujarat engineering entrance exam (8.5%)',
    gscImpressions: 323,
  },

  '/exams/mdcat/': {
    title: 'MDCAT Full Form: Pakistan Medical Entrance Test',
    description:
      'MDCAT is the Medical and Dental College Admission Test run by PMDC for admission to every medical and dental college in Pakistan. Subjects, marks, pattern.',
    query: 'mdcat exam (47.1% @ 0.00% CTR), what is mdcat exam in pakistan (15.5%)',
    gscImpressions: 394,
  },

  // ── /notes/cat/ ─ 393 imp, 4.33% CTR (4.9x the median). Working. Leave it.
  '/notes/cat/': {
    ship: false,
    title: 'CAT Study Notes: DILR, QA & VARC Topics',
    description:
      'Free CAT study notes: 31 weight-tagged topics across DILR, Quant and VARC, in Quick, Standard and Deep tiers. Syllabus-aligned, no signup.',
    query: 'cat notes (81.5% @ 3.77% CTR)',
    gscImpressions: 393,
  },

  '/exams/ibps-clerk/': {
    title: 'IBPS Clerk Exam Pattern: Prelims & Mains Papers',
    description:
      'IBPS Clerk exam pattern for the clerical cadre: prelims sections, reasoning and quantitative ability weightage, mains paper split, marks and eligibility.',
    query: 'ibps clerk exam pattern (12.7%), ibps clerk preliminary exam pattern (12.7%)',
    gscImpressions: 306,
  },

  '/exams/nda/syllabus/': {
    title: 'NDA Syllabus Weightage: Maths & GAT Topic Breakdown',
    description:
      'NDA syllabus weightage for the Mathematics and GAT papers: 1-5 weightage cues by topic, so you know which questions you should prepare for first.',
    query: 'history weightage in nda (8.7%), polity weightage in nda (7.9%)',
    gscImpressions: 310,
  },

  '/compare/waec-vs-nabteb/': {
    title: 'Is NABTEB Equivalent to WAEC? Differences Explained',
    description:
      'Is NABTEB equivalent to WAEC? What each qualification is, who awards it, how the papers and grading differ, and whether one can stand in for the other.',
    query: 'is nabteb equivalent to waec (32.1% @ 0.00% CTR)',
    gscImpressions: 469,
  },

  // ── / (homepage) ─ 472 imp, 5.72% CTR (6.4x the median). Working. Leave it.
  '/': {
    ship: false,
    title: 'StudyRoadmap — Free AI Study Roadmaps for 125+ Exams',
    description:
      'Free personalised study roadmaps for NEET, JEE, UPSC, MDCAT, JAMB and 125+ competitive exams. Enter your exam and time left, get a plan. No signup.',
    query: 'study roadmap (31.5% @ 9.76% CTR)',
    gscImpressions: 472,
  },

  '/exams/kcet/': {
    title: 'KCET Syllabus & Pattern: 180 MCQs, Physics & Chem',
    description:
      'KCET syllabus and pattern for Karnataka: about 180 MCQs across Physics, Chemistry and Mathematics, marks, duration, marking scheme and eligibility.',
    query: 'kcet syllabus (35.3% @ pos 85), kcet pattern (8.8%)',
    gscImpressions: 264,
  },

  '/exams/ap-eapcet/': {
    title: 'AP EAPCET Syllabus 2026: Subjects, Marks, Pattern',
    description:
      'AP EAPCET syllabus 2026 for Andhra Pradesh engineering: Mathematics, Physics and Chemistry sections, MCQ count, marks, ranking rule and eligibility.',
    query: 'ap eapcet syllabus (40.6% @ 0.00% CTR)',
    gscImpressions: 287,
  },

  '/exams/lat/': {
    title: 'LAT Exam: Law Admission Test Pattern & Marks',
    description:
      'LAT is the Law Admission Test run by HEC in Pakistan: MCQ count, English and current affairs split, marks, duration, negative marking and eligibility.',
    query: 'lat exam (24.4% @ 0.00% CTR)',
    gscImpressions: 341,
  },

  '/exams/muet/': {
    title: 'MUET Malaysia: Papers, Pattern & Scoring',
    description:
      'MUET is the Malaysian University Entrance Test: how many papers, which are compulsory, how each paper is scored and combined into the final aggregate.',
    query: 'muet malaysia papers, muet pattern, muet scoring',
    gscImpressions: 343,
  },

  '/exams/legon-adm/': {
    title: 'Legon Admissions 2026: Requirements & Entry Aggregate',
    description:
      'Legon admissions 2026 at the University of Ghana: required subjects per programme, how the entry aggregate is computed, WASSCE grades.',
    query: 'legon-adm 2026 syllabus legon-adm.gov.in (57.1% @ 0.00% CTR)',
    gscImpressions: 349,
  },

  '/exams/ts-eamcet/': {
    title: 'TS EAMCET Syllabus 2026: Marks & Paper Pattern',
    description:
      'TS EAMCET syllabus 2026 for Telangana: Mathematics, Physics and Chemistry sections, MCQ count, marks, normalisation and the rank rule.',
    query: 'ts eamcet syllabus (51.5% @ 0.00% CTR)',
    gscImpressions: 291,
  },

  '/exams/fmge/': {
    title: 'FMGE Syllabus 2026: Subjects, Marks & Passing Score',
    description:
      'FMGE syllabus 2026 for graduates from abroad: which subjects are covered, the MCQ split, marks per question and the aggregate passing score.',
    query: 'fmge syllabus 2026 (35.7% @ 0.00% CTR)',
    gscImpressions: 285,
  },

  '/exams/bitsat/': {
    title: 'BITSAT 2026: Total Marks, Pattern & Syllabus',
    description:
      'BITSAT 2026 total marks and pattern: the three sections, questions and marks per section, duration, negative marking and eligibility for BITS campuses.',
    query: 'bitsat total marks (7.6%), bitsat pattern, bitsat 2026 syllabus',
    gscImpressions: 200,
  },
};

// ── Build-time gate ──────────────────────────────────────────────────────────
// Throws rather than shipping a bad override: a silent 61-char title or a duplicated
// one is exactly the failure class this repo keeps getting caught by. Every new
// unattended component must fail loudly.
export const MAX_TITLE = 60;
export const MAX_DESCRIPTION = 155;

export function validateSeoMetaOverrides(
  map: Record<string, SeoMetaOverride> = SEO_META_OVERRIDES,
): { checked: number; ship: number; hold: number } {
  const seen = new Map<string, string>();
  let ship = 0;
  const errs: string[] = [];

  for (const [path, o] of Object.entries(map)) {
    if (!path.startsWith('/')) errs.push(`${path}: key must start with "/"`);
    const t = o.title?.trim() ?? '';
    const d = o.description?.trim() ?? '';
    if (t.length > MAX_TITLE) errs.push(`${path}: title ${t.length} chars > ${MAX_TITLE}: "${t}"`);
    if (d.length > MAX_DESCRIPTION) errs.push(`${path}: description ${d.length} chars > ${MAX_DESCRIPTION}: "${d}"`);
    if (!t) errs.push(`${path}: empty title`);
    if (!d) errs.push(`${path}: empty description`);
    if (/…|\.\.\.$/.test(t)) errs.push(`${path}: title must not end in an ellipsis`);
    const key = t.toLowerCase();
    if (seen.has(key)) errs.push(`${path}: duplicate title, already used by ${seen.get(key)}: "${t}"`);
    else seen.set(key, path);
    if (o.ship !== false) ship += 1;
  }

  if (errs.length) {
    throw new Error(`seo-meta-overrides: ${errs.length} problem(s)\n  - ${errs.join('\n  - ')}`);
  }
  return { checked: Object.keys(map).length, ship, hold: Object.keys(map).length - ship };
}

/**
 * Resolve a URL path to the title/description that should actually render.
 * A path that is absent, or present with ship:false, falls through to the
 * template's own generated value — unchanged behaviour, zero blast radius.
 */
export function seoMetaFor(
  pathname: string,
  fallback: { title: string; description: string },
): { title: string; description: string } {
  const o = SEO_META_OVERRIDES[pathname];
  if (!o || o.ship === false) return fallback;
  return { title: o.title.trim(), description: o.description.trim() };
}
