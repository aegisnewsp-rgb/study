import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'wbjee',
  examName: 'WBJEE',
  country: 'india',
  description: "West Bengal Joint Entrance Examination (WBJEE) is the state entrance test for admission to engineering, pharmacy, and architecture colleges in West Bengal. Conducted by WBJEEB, it tests PCM fundamentals.",
  examPattern: "155 MCQs across two papers — Paper I: Mathematics (75 questions, 100 marks); Paper II: Physics (40) + Chemistry (40) = 80 questions, 100 marks. 2 hours per paper, 200 marks total. Questions appear in Category I, II and III formats with category-specific marking and negative marking.",
  eligibility: "Class 12 with PCM with minimum 45% aggregate. West Bengal domicile required for general category seats.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for WBJEE — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for WBJEE — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for WBJEE — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for WBJEE — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for WBJEE — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for WBJEE — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for WBJEE — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for WBJEE — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for WBJEE — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for WBJEE — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for WBJEE — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for WBJEE — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for WBJEE — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for WBJEE — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for WBJEE — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for WBJEE — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for WBJEE — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for WBJEE — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for WBJEE',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'WBJEE tests PCM for West Bengal engineering/pharmacy admissions, typically with Paper I (Maths) and Paper II (Physics + Chemistry) in category-based marking (confirm live). Phase 1: Class 11–12 fundamentals; Phase 2: category-wise practice if applicable; Phase 3: full previous papers. Confirm pattern and dates on wbjeeb.nic.in.',
  commonMistakes: [
    'Ignoring category-based marking strategy from the official brochure.',
    'Under-practising Mathematics Paper I relative to its rank impact.',
    'No full two-paper simulation on the same day.',
    'Using only JEE Advanced problems without WBJEE-style speed sets.',
    'Trusting outdated syllabus PDFs instead of the live WBJEEB notice.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://wbjeeb.nic.in/wbjee/',
};

export default exam;
