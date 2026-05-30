import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
    biology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'kcet',
  examName: 'KCET',
  country: 'india',
  description: "Karnataka Common Entrance Test (KCET) is the state-level exam for admission to engineering, pharmacy, and other professional courses in Karnataka's government and private colleges. Conducted by KEA, it is mandatory for Karnataka domicile students.",
  examPattern: "180 MCQs: Physics(60), Chemistry(60), Mathematics(60), 1 hour each subject, 60 marks per subject. No negative marking.",
  eligibility: "Class 12 with PCM with minimum 45% aggregate (40% for SC/ST). Karnataka domicile or appropriate category.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KCET — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for KCET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for KCET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for KCET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for KCET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KCET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for KCET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KCET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for KCET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KCET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for KCET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for KCET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KCET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for KCET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KCET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KCET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for KCET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for KCET — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KCET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-05-30',
  officialSource: 'https://cetonline.karnataka.gov.in/kea/',
};

export default exam;
