import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'mcat',
  examName: 'MCAT Pakistan',
  country: 'pakistan',
  description: `The Medical College Admission Test was Pakistan's entrance examination for undergraduate medical (MBBS) and dental (BDS) programmes, and it has since been renamed MDCAT — the Medical and Dental College Admission Test — which is the name the paper now uses. If you searched for MCAT Pakistan, you are looking at the same test. MDCAT is the compulsory route to MBBS and BDS admission in the country's public and private medical colleges, testing Biology, Chemistry, Physics and English at the FSc / HSSC Pre-Medical level. It replaced an earlier system in which individual universities ran their own entrance tests. It is now administered province by province: each admitting university publishes the notice for its own cycle, so the paper you sit is the one your province's notice describes.`,
  examPattern: `MDCAT (formerly MCAT) is a paper-based test of 180 multiple-choice questions sat in 3 hours, with no negative marking — a wrong or unattempted question scores zero rather than deducting marks. The PM&DC uniform curriculum sets the split: Biology 81 questions (45%), Chemistry 45 (25%), Physics 36 (20%), English 9 (5%) and Logical Reasoning 9 (5%), totalling 180 — confirm the current split in the official PMDC curriculum (pmdc.pk). Minimum pass marks are 55% for medical college admission and 50% for dental. The cut-off that actually decides a seat is set higher, by the admitting university for your province. For MDCAT-2026 the PM&DC rescheduled the test to 20 September 2026, and the 2025 curriculum applies.`,
  eligibility: `Candidates must have completed HSSC (Pre-Medical) or equivalent with Biology, Chemistry, and Physics as compulsory subjects from a recognized educational board. A minimum of 65% to 70% aggregate marks in HSSC is typically required for admission to public medical colleges, though private colleges may have lower thresholds. Students appearing in their final HSSC examinations may apply provisionally. Foreign qualification holders must provide equivalence certificates from IBCC. Pakistani citizens as well as foreign nationals meeting the educational requirements are eligible to appear for MCAT.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MCAT Pakistan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for MCAT Pakistan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for MCAT Pakistan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for MCAT Pakistan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for MCAT Pakistan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MCAT Pakistan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for MCAT Pakistan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MCAT Pakistan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for MCAT Pakistan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MCAT Pakistan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for MCAT Pakistan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for MCAT Pakistan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MCAT Pakistan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for MCAT Pakistan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MCAT Pakistan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MCAT Pakistan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for MCAT Pakistan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for MCAT Pakistan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for MCAT Pakistan',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'MDCAT is a single paper: 180 multiple-choice questions in 3 hours, and the subject weights come from the PM&DC curriculum — Biology 81 questions, Chemistry 45, Physics 36, English 9, Logical Reasoning 9. Plan your hours to those weights rather than to your strongest topic. Nothing is deducted for a wrong answer, so an empty answer sheet costs the same as a wrong one, and every full mock should be sat inside the full 3-hour window. Each province runs its own cycle, so the body you deal with for registration and the date printed on your admit card are the ones in your own local notice. PM&DC moved the 2026 sitting to 20 September, and the 2025 curriculum is the one in force. Check the date, the notice and the syllabus version on pmdc.pk before you plan the last month.',
  commonMistakes: [
    'Splitting revision evenly across the five sections: the curriculum puts 81 of the 180 questions in Biology and 45 in Chemistry, so English and Logical Reasoning — 9 questions each, 18 of the 180 in total — do not deserve a fifth of your time.',
    'Assuming a 55% or 50% score is a place. Those are the minimum pass marks for medical college and dental admission, and the bar that actually puts you in a seat is drawn by the university running your province\'s admissions, above them.',
    'Rushing a guess on a paper with no negative marking: a wrong question and an unattempted question score the same, so leaving a question blank costs nothing and a rushed guess cannot do better.',
    'Preparing from last year\'s structure. The 2026 sitting was moved, the 2025 syllabus is the live one, and both the weight of each section and the notice itself come out of the current PM&DC circular — not out of a coaching page that never got updated.',
    'Waiting for the HSSC result before you apply: a final-year candidate can still put in an application, and anyone whose qualification came from abroad has to attach an IBCC equivalence certificate on top of it.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://pmdc.pk/',
  conductingBody: 'Provincial admitting universities (under PM&DC)',
};

export default exam;
