import type { ExamTemplate, Subject } from '../types';

import { satRw } from './subjects/sat-rw';
import { satMath } from './subjects/sat-math';

const subjects: Subject[] = [
    satRw,
    satMath,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'sat-kuwait',
  examName: 'SAT (College Board) — Kuwait',
  country: 'kuwait',
  description: 'The SAT is a college-readiness assessment administered by the College Board and accepted by universities in the United States and internationally. In Kuwait, candidates typically register for the SAT through the College Board website and sit the exam at the British Council Kuwait test centre in Kuwait City or at a private international-school testing site. The current digital SAT (fully transitioned from the legacy paper SAT, which was retired internationally) is shorter than the previous version, adaptive at the section level (Module 2 difficulty depends on Module 1 performance), and scored on a 400-1600 scale. The optional Essay was retired in 2021. The SAT is widely used by Kuwaiti students applying to undergraduate programmes at US universities, the Gulf region (American University of Sharjah, American University of Beirut), and scholarship programmes that require a College Board assessment.',
  examPattern: 'Two sections on the digital SAT: (1) Reading and Writing, 64 questions across two 32-question modules (32 min + 32 min, with a 10-minute break between sections), adaptive across the two modules; (2) Math, 44 questions across two 22-question modules (35 min + 35 min), adaptive across the two modules. Total seat-time approximately 2 hours 14 minutes with a break. Scores: Evidence-Based Reading and Writing (200-800) + Math (200-800) = composite 400-1600. Most questions are multiple choice with one grid-in Math response per section. Calculator policy: permitted for the entire Math section; an on-screen calculator is provided, and students may also use their own approved calculator. Re-check the live digital SAT specifications and any in-year policy changes on https://satsuite.collegeboard.org/ before committing any revision plan.',
  eligibility: 'No formal eligibility criteria. Most candidates are Kuwaiti high-school students in Grade 11 or 12, applying to undergraduate programmes that require or accept the SAT. There is no prerequisite coursework, no minimum age (parental consent required for candidates under 13), and no limit on retakes. International candidates register through the College Board website and pay the international test fee. Test-centre availability, fees, identification requirements and the ID policy on test day vary by country — confirm the live Kuwait test centre, accepted ID (passport for non-residents, Kuwait Civil ID for residents), and registration windows on https://satsuite.collegeboard.org/ before submission.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SAT (Kuwait) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for SAT (Kuwait) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for SAT (Kuwait) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for SAT (Kuwait) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for SAT (Kuwait) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SAT (Kuwait) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for SAT (Kuwait) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SAT (Kuwait) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for SAT (Kuwait) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SAT (Kuwait) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for SAT (Kuwait) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for SAT (Kuwait) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SAT (Kuwait) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for SAT (Kuwait) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SAT (Kuwait) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SAT (Kuwait) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for SAT (Kuwait) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for SAT (Kuwait) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SAT (Kuwait)',
    duration: '1d',
    focusAreas: [
      { subject: 'Math', topics: ['Heart of Algebra — Linear Equations and Inequalities', 'Passport to Advanced Math — Quadratics and Polynomials', 'Problem Solving and Data Analysis — Ratios, Rates and Percentages'] },
      { subject: 'Reading and Writing', topics: ['Information and Ideas — Reading Comprehension', 'Standard English Conventions — Grammar and Punctuation', 'Craft and Structure — Words in Context'] }
    ],
    strategy: 'Spend the largest block on the digital SAT Math domain that carries the most items (Heart of Algebra and Passport to Advanced Math together account for the largest share of Math items), then on Reading and Writing Comprehension (the section most candidates lose marks on for slow reading). Drill official College Board Khan Academy practice items aligned to the current digital format only — paper SAT PDFs drift from the live adaptive structure.',
  },
  prepOverview:
    'SAT preparation for Kuwaiti candidates works in three phases: (1) map the Reading and Writing domains (Information and Ideas, Craft and Structure, Expression of Ideas, Standard English Conventions) and the four Math domains (Heart of Algebra, Problem Solving and Data Analysis, Passport to Advanced Math, Geometry and Trigonometry) from the official College Board test specifications, (2) finish high-weight items with official Khan Academy and College Board practice sets and an error log, (3) sit full-length adaptive practice tests matching the official digital format and timing. The single highest-leverage resource is the official Khan Academy SAT practice paired with the College Board digital SAT practice tests on satsuite.collegeboard.org. For three-month plans, target a weekly full Math test plus two Reading and Writing drill sets, with bi-weekly full practice tests in the final month. Always re-check the live test centre in Kuwait (British Council Kuwait City or a private international-school testing site), the international fee, the accepted ID on test day (passport for non-residents, Kuwait Civil ID for residents), and any in-year format changes on https://satsuite.collegeboard.org/ before committing a revision plan to a student (kuwait).',
  commonMistakes: [
    'Practising on outdated paper-SAT PDFs instead of the current digital, adaptive format — the structure, pacing and difficulty profile are not equivalent.',
    'Ignoring the section-adaptive structure — Module 2 difficulty depends on Module 1 performance, so a slow first module can cascade into a low-difficulty second module and cap the score.',
    'Treating Reading and Writing and Math as equal — Math carries 800 points (half the composite) and is the section most candidates can move up most quickly with focused practice.',
    'No written error log — repeating the same mistake types across practice tests costs the same marks on every paper.',
    'Under-preparing for the Reading and Writing passage-based questions — many candidates assume Math is the only "study" subject; the section-adaptive Reading and Writing module is a strong differentiator at the top of the band.',
    'Failing to confirm the test-centre ID policy before test day — the College Board accepts a passport for non-residents and the Kuwait Civil ID for residents, and an incorrect ID on test day can void the registration.',
    'Treating unofficial "SAT score predictor" results as guarantees. Only the official College Board score is reported to universities.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://satsuite.collegeboard.org/',
};
export default exam;
