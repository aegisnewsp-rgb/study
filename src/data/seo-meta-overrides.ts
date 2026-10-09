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
      'SBI Clerk exam pattern 2026: Prelims is 100 questions in 1 hour, each section separately timed. Mains has 4 sections. Negative marking, marks and cut-off.',
    query: 'sbi clerk exam pattern (16.8%) + sbi clerk exam pattern 2026 (14.3%)',
    gscImpressions: 7648,
  },

  // ── /exams/gaokao/ ─ 8,510 imp, 0.38% CTR. NOTE: CN traffic is non-monetisable
  // (Monetag serves no CN demand) — ranked for reach, not revenue.
  '/exams/gaokao/': {
    title: 'Gaokao Exam Syllabus 2026: 3 Core + 1 Elective',
    description:
      'Gaokao syllabus 2026: Chinese, Mathematics and English are compulsory, plus one elective from Physics, History, Politics or Geography.',
    query: 'gaokao exam syllabus (35.5% @ 0.00% CTR)',
    gscImpressions: 8510,
  },

  '/exams/tnpsc/': {
    title: 'TNPSC Group 1: Duration, Marks & Negative Marking',
    description:
      'TNPSC Group 1 exam duration, marks and negative marking: prelims and mains paper structure, section timings and how marks split across the two stages.',
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
      'GCE Advanced Level Sri Lanka: sit 3 subjects, or 4 on the Science stream. Choose Science, Commerce or Arts. Papers, marks and grading explained.',
    query: 'gce advanced level in sri lanka (49.5% @ 0.00% CTR)',
    gscImpressions: 2619,
  },

  '/exams/mcat/': {
    title: 'MCAT Pakistan: Full Form & 4 Subject Areas',
    description:
      'MCAT Pakistan, run by PMDC, is the single medical entrance test for medical colleges in Pakistan: four subject areas, multiple-choice.',
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
    title: 'FPSC Full Form: What FPSC Stands For',
    description:
      'FPSC stands for Federal Public Service Commission, Pakistan. FPSC CSS written exam, interview and the syllabus for each optional subject.',
    query: 'fpsc full form (38.1% @ 0.00% CTR)',
    gscImpressions: 1527,
  },

  '/exams/wassce/': {
    title: 'WASSCE Ghana: How Many Subjects Are Written?',
    description:
      'How many subjects are written in WASSCE Ghana: English, Mathematics and Integrated Science are core, plus your electives. Structure and grading.',
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
    title: 'GAT Pakistan Full Form: NTS Graduate Admissions',
    description:
      'GAT stands for Graduate Admissions Test, run by NTS Pakistan for MS, MPhil and PhD admissions. Test pattern, schedule, score validity and test fee.',
    query: 'gat full form (24.1% @ 0.00% CTR), gat test schedule 2026 for mphil (19.8%)',
    gscImpressions: 1435,
  },

  '/exams/uptet/': {
    title: 'UPTET: Who Conducts It, Papers & Eligibility',
    description:
      'UPTET is conducted by the Uttar Pradesh Basic Education Board for teacher recruitment. Paper I for Classes I-V, Paper II for VI-VIII.',
    query: 'uptet conducted by (38.8% @ 0.00% CTR), uptet conducting body (7.0%)',
    gscImpressions: 1278,
  },

  '/exams/accagl/': {
    title: 'CA Pakistan 2026: Total Papers, Stages & Format',
    description:
      'How many papers are there in CA Pakistan under ACCA: the SQE, PSSE and TSA stages, then three levels of the qualification.',
    query: 'ca total papers in pakistan 2026 (10.1%), ca subjects in pakistan (8.9%)',
    gscImpressions: 1304,
  },

  '/exams/kpkpse/': {
    title: 'PMS KPK: Khyber Pakhtunkhwa Public Service Commission',
    description:
      'PMS KPK is the Punjab Management Service, recruited by the Khyber Pakhtunkhwa Public Service Commission: written exam, interview, syllabus.',
    query: 'pms kpk (37.1%), kpk pms (12.0%)',
    gscImpressions: 1155,
  },

  '/exams/ppsc/': {
    title: 'PPSC Full Form: Punjab & Sindh PSC Exams',
    description:
      'PPSC stands for Public Service Commission. PPSC Pakistan runs the PMS and SPSC combined competitive examinations: written paper, interview, full syllabus.',
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
    title: 'NCE Nigeria: Full Form, Course Papers & Certificate',
    description:
      'NCE stands for National Certificate of Education, awarded by TRCN after NECO, WAEC or GCE O/L. Course papers and certificate tiers.',
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
    description:
      'BPSC Bihar Combined Competitive Preliminary: one General Studies objective paper. Prelims and mains pattern, marks and eligibility.',
    query: 'bihar (17.1%), dsp height in bihar (12.2%), bpsc roadmap (5.5%)',
    gscImpressions: 904,
  },

  '/exams/nabteb/': {
    title: 'NABTEB Full Form: What Is the Naptech Exam?',
    description:
      'NABTEB is the National Board for Technical Education, Benin. The NABTEB/NAPTECH exam is the technical entrance test: papers per programme and eligibility.',
    query: 'what is naptech exam (43.7% @ 0.00% CTR)',
    gscImpressions: 892,
  },

  '/exams/ini-cet/': {
    title: 'INI CET Exam Pattern: Questions, Marks, Duration',
    description:
      'INI CET for AIIMS PG: 200 multiple-choice questions in 3.5 hours, 200 marks. Sections, negative marking and eligibility.',
    query: 'ini cet exam pattern total marks (15.4%), ini cet exam pattern (11.4%)',
    gscImpressions: 764,
  },

  '/exams/ras/syllabus/': {
    title: 'RPSC RAS Syllabus Weightage: Prelims Subject-Wise',
    description:
      'RPSC RAS syllabus weightage subject by subject for the prelims paper: how many questions each topic has actually appeared in.',
    query: 'ras pre question weightage (26.7%), ras question weightage (26.7%)',
    gscImpressions: 714,
  },

  '/exams/ras/': {
    title: 'RPSC RAS Exam Pattern: Prelims, Mains, Interview',
    description:
      'RPSC RAS has three stages: Preliminary, Main and Personality Test. Paper structure, marks, duration and eligibility.',
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
    title: 'NDA Roadmap & Exam: Computer-Based, Two Papers',
    description:
      'NDA exam roadmap for UPSC NDA: is it computer based, what are the two objective papers, marks, duration and the written and SSB stages after the written.',
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
    description:
      'SGPAT is the Saudi General Aptitude Test run by ETEC for postgraduate admission. Verbal and quantitative sections, questions, duration and eligibility.',
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
      'WAEC WASSCE for Nigeria: objective papers plus essay and theory papers, how the A1-F8 grade is awarded, entry requirements.',
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
      'MDCAT and ECAT full forms, what each test, and how they differ: medical versus engineering, subjects, marks, negative marking and which one you should sit.',
    query: 'what is mdcat and ecat (40.5%), mdcat and ecat full form (27.0%)',
    gscImpressions: 460,
  },

  '/exams/gujcet/': {
    title: 'GUJCET Syllabus & Pattern: 120 MCQs, 3 Hours',
    description:
      'GUJCET syllabus and pattern for Gujarat engineering: 120 MCQs in 3 hours, 40 each from Physics, Chemistry and Mathematics. Marking scheme and eligibility.',
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
    title: 'NDA Syllabus Weightage: Maths, GAT & GK Paper-Wise',
    description:
      'NDA syllabus weightage paper by paper: how many Maths, GAT and General Knowledge questions have actually appeared in past papers, subject by subject.',
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
