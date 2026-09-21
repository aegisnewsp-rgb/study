// International Baccalaureate (IB) Diploma Programme.
//
// Awarding body: International Baccalaureate Organization (IB / IBO).
// The IB Diploma Programme is a two-year pre-university course studied
// in many international schools in Singapore alongside the local
// Singapore-Cambridge GCE A-Level. The IB Diploma is structured as
// six subjects (one from each of the six IB subject groups, with some
// flexibility), the three DP Core components (Theory of Knowledge,
// Extended Essay, Creativity Activity Service), and the IB grade
// conversion to local university admissions.
//
// This file groups together the IB Mathematics offering most commonly
// chosen by Singapore IB students aiming at engineering, computing,
// physical-science or quantitative-finance university courses:
// Mathematics: Analysis and Approaches (AA). The other IB Mathematics
// offering — Mathematics: Applications and Interpretation (AI) — is
// available in the same family but is not bundled here; confirm subject
// choice with the school\'s IB coordinator before bundling.
//
// Verify the live IB DP curriculum cycle, subject briefs and any
// in-year changes on the IBO programme page
// (https://ibo.org/programmes/diploma-programme/curriculum/) before
// committing any revision plan to a student.

import type { ExamTemplate, Subject } from '../types';

import { ibMathematicsAA } from './subjects/ib-mathematics-aa';

const subjects: Subject[] = [
    ibMathematicsAA,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ib-diploma',
  examName: 'International Baccalaureate (IB) Diploma Programme',
  country: 'singapore',
  description: 'The IB Diploma Programme is a two-year pre-university course offered by many international schools in Singapore. It is set by the International Baccalaureate Organization (IB / IBO) and assessed by IB examiners worldwide. The Diploma is structured as six subjects (typically three at Higher Level and three at Standard Level, drawn from the six IB subject groups), the three DP Core components (Theory of Knowledge, the Extended Essay, and Creativity Activity Service), and a final IB grade out of 45. The IB grade is converted to a local rank point score for admission to NUS, NTU, SMU and Singapore Management University through a published MOE / IBO conversion table.',
  examPattern: 'Each IB subject has its own paper pattern. IB Mathematics: Analysis and Approaches is offered at Standard Level (SL) and Higher Level (HL); SL has two written papers plus an Internal Assessment, and HL has three written papers plus an Internal Assessment. The Internal Assessment is a written exploration / modelling task that contributes a percentage of the final IB grade. Other IB subjects follow a similar paper-plus-IA pattern. The Theory of Knowledge essay and the Extended Essay are scored separately on a published rubric and contribute bonus points to the final IB grade out of 45. Confirm the live paper pattern, weighting and IA rubric on the IB subject brief and the IB programme page before planning.',
  eligibility: 'All students enrolled in an IB World School offering the Diploma Programme are eligible to sit the IB Diploma. Students take their IB exams at their school through the IB\'s May or November examination session. Private candidates are accepted in limited circumstances (typically retake candidates with school approval). There is no minimum age; entry is by school cohort. Schools are authorised by the IBO and follow the published standards for subject offerings — confirm the school\'s authorisation status on the IBO programme page before submission.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for IB Diploma Programme — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for IB Diploma Programme — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for IB Diploma Programme — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for IB Diploma Programme — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for IB Diploma Programme — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for IB Diploma Programme — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for IB Diploma Programme — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for IB Diploma Programme — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for IB Diploma Programme — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for IB Diploma Programme — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for IB Diploma Programme — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for IB Diploma Programme — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for IB Diploma Programme — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for IB Diploma Programme — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for IB Diploma Programme — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for IB Diploma Programme — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for IB Diploma Programme — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for IB Diploma Programme — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for the IB Diploma Programme',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Spend the largest block on IB Math AA Paper 1 (no calculator, pure math) plus a fast review of the IA (Internal Assessment) exploration; cross-check the live paper pattern on the IBO subject brief.',
  },
  prepOverview:
    'IB Diploma preparation in Singapore is weight-ordered across the chosen subject combination plus the three DP Core components. For a candidate taking three HL subjects (typically Mathematics AA HL, a science HL, and a humanities / language HL) plus three SL subjects and the DP Core, the productive pattern is: secure the IA (Internal Assessment) first for every HL subject because the IA is a controlled piece of work scored against a published rubric, then spend the largest revision block on IB Math AA HL Paper 1 (Pure Mathematics, no calculator) and Paper 2 (calculator, with statistics and probability), then layer the other HL / SL subjects in priority order based on the university course. Use the IBO subject briefs and the IB Math AA official guide as the question-style reference — third-party IB workbooks vary in topic alignment and may overshoot the actual paper\'s marks. For 3-month plans, target two full IB Math AA HL papers plus a focused IA pass under timed conditions; for 6-month plans, layer a full content pass before the mock cycle, and start the Extended Essay and the Theory of Knowledge essay at least six months before the May / November session. Always re-check the live IB Math AA syllabus (the next curriculum update is for first teaching 2027) and any in-year specification changes on https://ibo.org/programmes/diploma-programme/curriculum/ before committing a revision plan to a student (singapore).',
  commonMistakes: [
    'Confusing IB Mathematics: Analysis and Approaches (AA) with IB Mathematics: Applications and Interpretation (AI) — these are two distinct IB subjects with different topic lists and different exam weightings; confirm the school\'s offering with the IB coordinator before planning.',
    'Using IB Math AA past papers labelled for first examinations 2021 without checking the syllabus change — the IB Math AA syllabus is undergoing a curriculum update for first teaching 2027 and the topic emphasis may shift.',
    'Skipping the IA (Internal Assessment) until the last term — the IA is scored against a published rubric and contributes a percentage of the final IB grade; late starts leave no time for revisions.',
    'Cramming for IB Math AA Paper 1 without a non-calculator routine — Paper 1 is the no-calculator paper and a missed factorisation or algebraic simplification can cost marks on the rest of the paper.',
    'Leaving the Theory of Knowledge (TOK) essay and the Extended Essay (EE) to the last term — TOK and EE contribute up to 3 bonus points on the IB grade out of 45, and a strong TOK / EE can lift the final grade over a university offer boundary.',
    'Building an IB revision plan that ignores the HL / SL weighting in the final IB grade — HL subjects carry a higher grade weight in the IB out-of-45 calculation and need a larger time share than SL subjects.',
    'Setting a May / November revision plan without confirming the IB examination session dates — the May and November sessions have different deadlines for IA submission, EE upload and TOK essay, and a missed deadline removes the candidate from the session.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://ibo.org/programmes/diploma-programme/',
};

export default exam;
