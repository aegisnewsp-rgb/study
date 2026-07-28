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
  examId: 'keam',
  examName: 'KEAM',
  country: 'india',
  description: "Kerala Engineering Agricultural Medical (KEAM) is the entrance exam for professional courses in Kerala including engineering, pharmacy, and medical streams.",
  examPattern: "Paper I Physics & Chemistry (120 MCQs, 2h 30min), Paper II Mathematics (120 MCQs, 2h 30min). 4 marks per correct answer.",
  eligibility: "Class 12 with PCM with minimum 50% aggregate. Kerala domicile required for government seats.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KEAM — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for KEAM — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for KEAM — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for KEAM — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for KEAM — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KEAM — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for KEAM — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KEAM — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for KEAM — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KEAM — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for KEAM — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for KEAM — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KEAM — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for KEAM — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KEAM — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KEAM — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for KEAM — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for KEAM — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KEAM',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'KEAM (Kerala) engineering entrance emphasises Physics, Chemistry and Mathematics with state-specific pattern rules. Build Class 11–12 strength; practise previous KEAM papers; confirm paper structure and normalisation notes on the official CEE Kerala site for the live year.',
  commonMistakes: [
    'Ignoring official paper structure changes announced by CEE Kerala.',
    'No full-length timed practice.',
    'Weak calculus and coordinate geometry drills.',
    'Application/eligibility checklist failures.',
    'Using unofficial rank predictors as guarantees.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://cee.kerala.gov.in/',
};

export default exam;
