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
  examId: 'cmat-nepal',
  examName: 'CMAT Nepal (MBA Entrance)',
  country: 'nepal',
  description: "Common Management Admission Test (CMAT) Nepal — entrance exam for MBA and management programmes at various universities in Nepal.",
  examPattern: "100 MCQs covering: Quantitative Techniques (25), Logical Reasoning (25), Language Comprehension (25), General Awareness (25). 2 hours.",
  eligibility: "Bachelor's degree in any discipline from a recognised university. Minimum score requirements vary by institution.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CMAT Nepal (MBA Entrance) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for CMAT Nepal (MBA Entrance) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for CMAT Nepal (MBA Entrance) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for CMAT Nepal (MBA Entrance) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for CMAT Nepal (MBA Entrance) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CMAT Nepal (MBA Entrance) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for CMAT Nepal (MBA Entrance) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CMAT Nepal (MBA Entrance) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for CMAT Nepal (MBA Entrance) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CMAT Nepal (MBA Entrance) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for CMAT Nepal (MBA Entrance) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for CMAT Nepal (MBA Entrance) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CMAT Nepal (MBA Entrance) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for CMAT Nepal (MBA Entrance) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CMAT Nepal (MBA Entrance) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CMAT Nepal (MBA Entrance) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for CMAT Nepal (MBA Entrance) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for CMAT Nepal (MBA Entrance) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CMAT Nepal (MBA Entrance)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Common Management Admission Test (CMAT) Nepal — entrance exam for MBA and management programmes at various universities in Nepal. For CMAT Nepal (MBA Entrance), save the CMAT Nepal (MBA Entrance) syllabus PDF from https://cmat.edu.np and ignore unofficial CMAT Nepal (MBA Entrance) must-do lists that omit that file.',
  commonMistakes: [
    'If your CMAT Nepal (MBA Entrance) brochure has no date, throw it out and open https://cmat.edu.np.',
    'Section timing for CMAT Nepal (MBA Entrance) only counts if it matches the live duration.',
    'Some CMAT Nepal (MBA Entrance) programmes add extra subject prerequisites after you pay — check https://cmat.edu.np.',
    'Nobody on this site can guarantee a CMAT Nepal (MBA Entrance) rank, percentile, or admission.',
    'Pattern note for CMAT Nepal (MBA Entrance): 100 MCQs covering: Quantitative Techniques (25), Logical Reasoning (25), Language Comprehension (25)… Confirm that wording on https://cmat.edu.np before you lock a timetable.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://cmat.edu.np',
};

export default exam;
