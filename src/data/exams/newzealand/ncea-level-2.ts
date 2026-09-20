import type { ExamTemplate, Subject } from '../types';

import { mathematicsL2 } from './subjects/mathematics-l2';

const subjects: Subject[] = [
    mathematicsL2,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ncea-level-2',
  examName: 'NCEA Level 2 (Mathematics)',
  country: 'newzealand',
  description: 'NCEA Level 2 is the second year of the National Certificate of Educational Achievement, sat by New Zealand students typically in Year 12 at age 16-17. Mathematics at Level 2 consists of 14 achievement standards across algebra, calculus, trigonometry, probability and statistics. Students typically attempt 4-6 standards at one sitting, depending on the school\'s course design. The qualification is awarded by NZQA and is one of the three approved subjects that, with sufficient credits, supports University Entrance (alongside Level 3).',
  examPattern: 'Fourteen achievement standards, ranging from 2 to 5 credits each (total 40 credits available). Three standards are externally assessed by end-of-year NZQA examination (91261 Apply algebraic methods, 91262 Apply calculus methods, 91267 Apply probability methods). The remaining standards are internally assessed by the school across the year and submitted to NZQA for moderation. Students are graded Not Achieved, Achieved, Merit (relational thinking) or Excellence (extended abstract thinking) on each standard.',
  eligibility: 'Open to all students enrolled at a New Zealand secondary school. Most candidates sit NCEA Level 2 in Year 12. There is no formal prerequisite, but schools expect students to have completed NCEA Level 1 Mathematics (or the equivalent curriculum level 6) before enrolling. Mathematics at Level 2 is required for University Entrance numeracy literacy building and for entry to many tertiary STEM pathways.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for NCEA Level 2 Mathematics — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for NCEA Level 2 Mathematics — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for NCEA Level 2 Mathematics — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for NCEA Level 2 Mathematics — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for NCEA Level 2 Mathematics — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for NCEA Level 2 Mathematics — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for NCEA Level 2 Mathematics — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for NCEA Level 2 Mathematics — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for NCEA Level 2 Mathematics — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for NCEA Level 2 Mathematics — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for NCEA Level 2 Mathematics — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for NCEA Level 2 Mathematics — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for NCEA Level 2 Mathematics — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for NCEA Level 2 Mathematics — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for NCEA Level 2 Mathematics — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for NCEA Level 2 Mathematics — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for NCEA Level 2 Mathematics — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for NCEA Level 2 Mathematics — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for NCEA Level 2 Mathematics',
    duration: '1d',
    focusAreas: subjects.slice(0, 1).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 4).map(t => t.name),
    })),
    strategy: 'Prioritise the three externally assessed standards (91261 Algebra, 91262 Calculus, 91267 Probability) which together carry 13 of the 40 available credits. Drill NZQA exemplars on ncea.education.govt.nz.',
  },
  prepOverview:
    'NCEA Level 2 Mathematics preparation runs across two tracks: the three externally assessed standards (91261 Apply algebraic methods, 91262 Apply calculus methods, 91267 Apply probability methods) that sit as end-of-year NZQA exams in November, and the eleven internally assessed standards that the school schedules across Terms 1-3. Most schools pick 4-6 standards per year, so the first decision is which standards to enter - usually driven by the student\'s tertiary pathway. For calculus-heavy STEM routes, 91262 (5 credits External) is the highest-value standard and should anchor the revision plan. For statistics-heavy routes, 91264 and 91267 carry the larger credit loads. NZQA publishes assessment specifications and exemplars on ncea.education.govt.nz, and these are the single best preparation resource. Re-check the live standard numbers, assessment specifications and any in-year changes on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics before committing a revision plan to a student (newzealand).',
  commonMistakes: [
    'Entering all 14 standards and failing to specialise - students who take the full slate have less depth per standard and rarely achieve Excellence grades.',
    'Confusing 91261 (algebra methods) with 91269 (systems of equations) - they assess different content and require separate practice.',
    'Skipping 91267 probability because it is an External standard - 91267 carries 4 credits and uses binomial and normal distributions which appear in Level 3 statistics as well.',
    'Treating 91262 calculus as a memorisation subject - calculus questions test method selection, not formula recall; practising method identification on NZQA exemplars is the highest-leverage habit.',
    'Writing up 91263 (questionnaire design) without ethics - the standard explicitly assesses ethical considerations including informed consent and confidentiality.',
    'Forgetting that 91267 (External) and 91264/91265 (Internal) are not interchangeable - mixing up which standards are internal vs external at registration time costs a year.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics',
};

export default exam;
