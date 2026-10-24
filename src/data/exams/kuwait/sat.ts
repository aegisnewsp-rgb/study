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
  examPattern: 'The digital SAT has two sections: Reading and Writing is 54 items over two 27-item modules of 32 minutes, and Math is 44 items over two 22-item modules of 35 minutes, with a 10-minute break between them and about 2 hours 14 minutes. Each section adapts across its two modules. Reading and Writing passages draw on literature, history and social science, the humanities and science. Each half scores 200 to 800, so the composite runs from 400 to 1600. Almost all items are multiple choice, apart from one grid-in Math response per section. A calculator is allowed throughout Math; an on-screen calculator is provided, and an approved personal device may be used. Check https://satsuite.collegeboard.org/ for the live specifications and any in-year change before you fix a plan.',
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
    'For a Kuwaiti student, start by mapping the eight content areas: Information and Ideas, Craft and Structure, Expression of Ideas, Standard English Conventions, Heart of Algebra, Passport to Advanced Math, Problem Solving and Data Analysis, and Geometry and Trigonometry. Next, complete College Board Khan Academy practice and digital SAT papers, recording each error by topic, timing, and method. During the final month, simulate the two sections under their separate clocks, giving the Reading and Writing half 54 items in two 27-item modules of 32 minutes each, while the Math half takes 44 items across two 22-item modules of 35 minutes each. Review the adaptive rule, because performance in each first module shapes the corresponding second module. Kuwaiti applicants considering American University of Sharjah or American University of Beirut should also check how each institution uses the section scores. Before registering, verify the British Council location in Kuwait City and available international-school sites, then follow the live requirements published at https://satsuite.collegeboard.org/ before you commit a plan.',
  commonMistakes: [
    'Preparing for an SAT Essay that is no longer on the paper. The optional Essay section has not been on it since 2021, so a practice set that still asks you to write an essay is built for a format you will not meet. Take your mocks from the current digital paper instead, and check what the live format still contains on https://satsuite.collegeboard.org/.',
    'Treating the first module as a warm-up at the British Council centre in Kuwait City. Module 2 difficulty follows Module 1 performance in each section, so a slow first module pulls the second one down and caps the section score. Time the first module on the 32-minute clock, then reset in the 10-minute break before Math.',
    'Treating Reading and Writing and Math as equal — Math carries 800 points (half the composite) and is the section most candidates can move up most quickly with focused practice.',
    'No written error log — repeating the same mistake types across practice tests costs the same marks on every paper.',
    'Under-preparing for the Reading and Writing passage-based questions — many candidates assume Math is the only "study" subject; the section-adaptive Reading and Writing module is a strong differentiator at the top of the band.',
    'Failing to confirm the test-centre ID policy before test day — the College Board accepts a passport for non-residents and the Kuwait Civil ID for residents, and an incorrect ID on test day can void the registration.',
    'Treating unofficial "SAT score predictor" results as guarantees. Only the official College Board score is reported to universities.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://satsuite.collegeboard.org/',
  conductingBody: 'College Board',
};
export default exam;
