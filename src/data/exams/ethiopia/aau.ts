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
  examId: 'aau',
  examName: 'AAU Admission (Ethiopia)',
  country: 'ethiopia',
  description: "Addis Ababa University (AAU) entrance examination is Ethiopia's most competitive university admission test. AAU is Ethiopia's largest and oldest university, and entrance is based on Ethiopian University Entrance Examination (EUEE) results.",
  examPattern: "Ethiopian University Entrance Examination (EUEE) — 2 papers: General Aptitude Test (GAT: verbal, quantitative, analytical reasoning) and Field of Study Test (FST: subject-specific knowledge in Science, Social Science, or Humanities).",
  eligibility: "Ethiopian Secondary School Completion Examination (ESCCE) with minimum grade requirements. Minimum age 17.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for AAU Admission (Ethiopia) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for AAU Admission (Ethiopia) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for AAU Admission (Ethiopia) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for AAU Admission (Ethiopia) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for AAU Admission (Ethiopia) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for AAU Admission (Ethiopia) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for AAU Admission (Ethiopia) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for AAU Admission (Ethiopia) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for AAU Admission (Ethiopia) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for AAU Admission (Ethiopia) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for AAU Admission (Ethiopia) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for AAU Admission (Ethiopia) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for AAU Admission (Ethiopia) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for AAU Admission (Ethiopia) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for AAU Admission (Ethiopia) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for AAU Admission (Ethiopia) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for AAU Admission (Ethiopia) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for AAU Admission (Ethiopia) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for AAU Admission (Ethiopia)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Prepare for AAU Admission (Ethiopia) in three phases: map the live syllabus and pattern from the official notice, finish high-weight topics with timed practice and an error log, then run full-length mocks matching official duration and marking. Pair with StudyRoadmap free roadmaps for remaining weeks. Confirm registration, fees, eligibility and paper rules only on https://www.aau.edu.et/admission for the current ethiopia cycle.',
  commonMistakes: [
    'Relying on outdated AAU Admission (Ethiopia) materials instead of the live official notice.',
    'Skipping full-length timed mocks until the final days.',
    'Over-studying low-yield topics while high-weight sections stay weak.',
    'No error log for repeated mistake patterns.',
    'Treating unofficial cut-offs as guaranteed outcomes.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.aau.edu.et/admission',
};

export default exam;
