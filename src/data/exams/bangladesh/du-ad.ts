import type { ExamTemplate, Subject } from '../types';

import { bangla } from './subjects/bangla';
import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { science } from './subjects/science';

const subjects: Subject[] = [
    bangla,
    english,
    gk,
    science,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'du-ad',
  examName: 'DU Unit D Admission (Arts & Institute)',
  country: 'bangladesh',
  description: 'Dhaka University Unit D admission test is for candidates seeking entry into the Faculty of Arts, Faculty of Law, Faculty of Earth and Environmental Sciences, and various institutes including the Institute of Social Welfare and Research, and Institute of Health Economics. The test is conducted separately for different units (A, B, C, D, and E) with Unit D covering humanities, social sciences, law, and specialized institute programmes. This is the most popular unit with the largest number of applicants, testing candidates on Bangla, English, General Knowledge, and General Science at the HSC level.',
  examPattern: 'The exam is typically an MCQ-based written test totaling 100 marks in 1 hour, as detailed in official Dhaka University admission notices: Bangla(30 marks), English(25 marks), General Knowledge(25 marks), and General Science(20 marks). Questions are objective type with multiple choice answers. Viva voce is conducted for shortlisted candidates applying to specific faculties.',
  eligibility: 'HSC or equivalent from any stream (Science, Arts, or Commerce) with minimum GPA requirements as specified by Dhaka University. For general admission, minimum GPA of 3.5 in HSC or equivalent is typically required. For Law Faculty, there may be additional requirements including minimum marks in specific subjects. Candidates must be Bangladeshi nationals. Students appearing in their final HSC examination may apply provisionally.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for DU Admission (Bangladesh) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for DU Admission (Bangladesh) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for DU Admission (Bangladesh) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for DU Admission (Bangladesh) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for DU Admission (Bangladesh) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for DU Admission (Bangladesh) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for DU Admission (Bangladesh) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for DU Admission (Bangladesh) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for DU Admission (Bangladesh) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for DU Admission (Bangladesh) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for DU Admission (Bangladesh) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for DU Admission (Bangladesh) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for DU Admission (Bangladesh) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for DU Admission (Bangladesh) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for DU Admission (Bangladesh) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for DU Admission (Bangladesh) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for DU Admission (Bangladesh) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for DU Admission (Bangladesh) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for DU Admission (Bangladesh)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Prepare for Dhaka University’s Unit D test as an objective written examination for humanities, social sciences, law, and specialized institute programmes. Allocate practice by the stated split: Bangla carries 30 marks, English 25, General Knowledge 25, and General Science 20, making 100 marks in 1 hour. Because the test covers Bangla, English, General Knowledge, and General Science at HSC level, revise each named subject and practise multiple-choice questions within the time limit. Review the official Dhaka University notices for unit-specific details. Candidates generally need Bangladeshi nationality and an HSC or equivalent qualification with a GPA of at least 3.5, although Law Faculty may impose additional subject requirements. Final-year HSC candidates may apply provisionally. Shortlisted candidates for specific faculties also undertake viva voce.',
  commonMistakes: [
    'Confusing Unit D with the university’s separate units, even though Unit D covers humanities, social sciences, law, and specialized institute programmes.',
    'Assuming the HSC stream limits eligibility, although Science, Arts, and Commerce graduates may apply subject to the stated GPA requirement.',
    'Ignoring additional Law Faculty subject conditions when checking eligibility for programmes served by Unit D.',
    'Practising multiple-choice questions without the one-hour limit, despite the paper containing 100 marks across four named subjects.',
    'Missing the viva voce stage for shortlisted applicants to specific faculties, which is separate from the written test.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://du.ac.bd',
  conductingBody: 'University of Dhaka (DU)',
};

export default exam;
