// South Australian Certificate of Education (SACE) — Stage 2 Mathematical
// Methods and Stage 2 Specialist Mathematics.
// Awarding body: SACE Board of South Australia.
// Subject Outlines: Stage 2 Mathematical Methods Subject Outline and Stage 2
// Specialist Mathematics Subject Outline.
// Official sources:
//   https://www.sace.sa.edu.au/en_US/web/mathematical-methods
//   https://www.sace.sa.edu.au/web/specialist-mathematics
// Both subjects are 20-credit Stage 2 subjects and contribute to the
// Australian Tertiary Admission Rank (ATAR) through the South Australian
// Tertiary Admissions Centre (SATAC) scaling process. Mathematical Methods
// develops understanding of calculus and statistics; Specialist Mathematics
// extends Methods with mathematical induction, complex numbers, advanced
// functions, three-dimensional vectors and differential equations. Re-check
// the live Subject Outlines and any operational documents on sace.sa.edu.au
// before committing a revision plan.

import type { ExamTemplate, Subject } from '../types';

import { saceMathematicalMethods } from './subjects/sace-mathematical-methods';
import { saceSpecialistMathematics } from './subjects/sace-specialist-mathematics';

const subjects: Subject[] = [
    saceMathematicalMethods,
    saceSpecialistMathematics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'sace-mathematical-methods',
  examName: 'SACE Stage 2 Mathematical Methods & Specialist Mathematics',
  country: 'australia',
  description: 'SACE Stage 2 Mathematical Methods and SACE Stage 2 Specialist Mathematics are the two ATAR-contributing mathematics subjects in the South Australian Certificate of Education, administered by the SACE Board of South Australia. Mathematical Methods develops understanding of calculus and statistics. Specialist Mathematics extends Methods with mathematical induction, complex numbers, advanced functions, three-dimensional vectors, integration techniques and differential equations. Each subject is a 20-credit Stage 2 subject with assessment split 70% school-based and 30% external assessment.',
  examPattern: 'Each subject is assessed 70% through school-based assessment (typically a learning and assessment plan of 7-8 tasks) and 30% through an external assessment. Mathematical Methods has a 2-hour external examination with technology assumed. Specialist Mathematics has a 2-hour external examination with technology assumed. The SACE Board publishes the Subject Outline, sample assessment materials and operational documents. Confirm the live external assessment structure, technology policy and operational documents on sace.sa.edu.au before each cycle.',
  eligibility: 'The SACE is the senior secondary qualification awarded by the SACE Board of South Australia. To be awarded the SACE, a student must complete the SACE pattern of study including Stage 2 English and Stage 2 mathematics. Stage 2 Mathematical Methods normally requires satisfactory completion of Stage 1 Mathematical Methods 1 and 2. Stage 2 Specialist Mathematics requires satisfactory completion of Stage 1 Specialist Mathematics and a B grade or higher in Stage 1 Mathematical Methods. Both subjects contribute to the ATAR through SATAC scaling. Check the live SACE rules and any updates on sace.sa.edu.au.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SACE Stage 2 Mathematical Methods & Specialist Mathematics',
    duration: '5d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 3).map(t => t.name),
    })),
    strategy: 'Prioritise Topic 3 (Integral Calculus) and Topic 6 (Sampling and Confidence Intervals) in Methods, and Topic 5 (Integration Techniques) and Topic 6 (Differential Equations) in Specialist. Drill SACE sample assessments and the published Topic tests.',
  },
  prepOverview:
    'SACE Stage 2 Mathematical Methods and Stage 2 Specialist Mathematics are best prepared together because Specialist extends Methods at the higher end of the syllabus. For Methods, the productive pattern is to follow the six Topics in sequence, securing the calculus strand (Topics 1, 3, 4) and the statistics strand (Topics 2, 5, 6) before the external assessment. For Specialist, secure the calculus strands (Topics 3, 5, 6) before adding mathematical induction, complex numbers and three-dimensional vectors. The single highest-leverage habit is timed practice against the SACE sample assessments and Topic tests. Re-check the live Subject Outlines and any updates on https://www.sace.sa.edu.au/en_US/web/mathematical-methods before committing a revision plan to a student (australia).',
  commonMistakes: [
    'Underweighting the school-based assessment component — 70% of the grade is school-based and the external assessment is only 30%; weak school-based performance can\'t be recovered on the day.',
    'Treating Specialist Mathematics as just harder Methods — Specialist has its own Topic strands (Mathematical Induction, Complex Numbers, Vectors in Three Dimensions) and missing these strands costs marks.',
    'Confusing SACE Mathematical Methods with HSC Mathematics Advanced or VCE Mathematical Methods — the three syllabuses use similar names but different content and assessment patterns.',
    'Memorising formulae instead of building from first principles — Specialist Mathematics rewards students who can derive integration formulas and chain-rule shortcuts, not just recall them.',
    'Leaving SACE sample assessment materials until the last week — sample papers reflect the live external assessment structure and rubric; familiarity with them is the single biggest preparation lever.',
    'Ignoring the calculus / statistics interleaving — Methods alternates calculus and statistics Topics and the assessment items test integration of both; practising them as separate silos misses the cross-Topic questions.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.sace.sa.edu.au/en_US/web/mathematical-methods',
};

export default exam;