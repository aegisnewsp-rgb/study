import type { ExamTemplate, Subject } from '../types';

import { biology } from './subjects/biology';
import { chemistry } from './subjects/chemistry';
import { physics } from './subjects/physics';
import { english } from './subjects/english';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    biology,
    chemistry,
    physics,
    english,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'medical-adm',
  examName: 'Medical Admission Test (Bangladesh)',
  country: 'bangladesh',
  description: 'Medical admission test for government and private medical colleges in Bangladesh. Highly competitive with over 100,000 applicants for approximately 4,000 seats in government medical colleges and additional seats in private institutions. The exam is conducted by the Director General of Health Services (DGHS) under the Ministry of Health and Family Welfare. Admission to MBBS and BDS programmes across Bangladesh is based solely on this examination combined with HSC academic performance.',
  examPattern: '100 MCQs: Biology(30 questions), Chemistry(25 questions), Physics(25 questions), English(10 questions), GK(10 questions). 1 hour duration. Each question carries 1 mark. Biology carries the highest weightage reflecting its importance in medical studies. The exam is conducted simultaneously in Dhaka and divisional cities in a computer-based format at designated centres.',
  eligibility: 'HSC or equivalent with Biology, Chemistry, Physics as compulsory subjects and minimum GPA requirements — typically GPA 4.0 in Biology, Chemistry, and Physics combined and GPA 3.5 in SSC or equivalent. Bangladeshi nationals only. Students must be at least 17 years old by December 31st of the admission year. Foreign nationals holding Bangladeshi citizenship or O/A Level certificates must meet specific equivalence requirements set by DGHS.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Medical Admission (Bangladesh) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Medical Admission (Bangladesh) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Medical Admission (Bangladesh) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Medical Admission (Bangladesh) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Medical Admission (Bangladesh) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Medical Admission (Bangladesh) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Medical Admission (Bangladesh) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Medical Admission (Bangladesh) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Medical Admission (Bangladesh) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Medical Admission (Bangladesh) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Medical Admission (Bangladesh) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Medical Admission (Bangladesh) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Medical Admission (Bangladesh) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Medical Admission (Bangladesh) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Medical Admission (Bangladesh) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Medical Admission (Bangladesh) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Medical Admission (Bangladesh) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Medical Admission (Bangladesh) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Medical Admission (Bangladesh)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Medical Admission Test (Bangladesh) preparation works best in three phases: (1) map the live syllabus and paper pattern from the official notice, (2) finish high-weight topics with timed practice sets and an error log, (3) sit full-length mocks matching official duration and marking. Use StudyRoadmap free roadmaps and topic notes for day-level sequencing. Always re-check registration windows, fees, eligibility and pattern on https://dghs.gov.bd for the current cycle — rules change by year and country (bangladesh).',
  commonMistakes: [
    'Using outdated Medical Admission Test (Bangladesh) pattern or syllabus PDFs instead of the live official notice.',
    'Practising only untimed quizzes and never sitting full-length mocks under exam fatigue.',
    'Ignoring high-weight sections while over-studying low-yield topics.',
    'No written error log — repeating the same mistake types across mocks.',
    'Treating unofficial cut-offs or rank predictors as guarantees.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://dghs.gov.bd',
};

export default exam;
