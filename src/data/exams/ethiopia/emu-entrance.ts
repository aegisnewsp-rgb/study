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
  examId: 'emu-entrance',
  examName: 'EMU Entrance (Ethiopia)',
  country: 'ethiopia',
  description: "Entry examination for Ethiopian universities under the EMU (Ethiopian Media University) or general Ethiopian university placement system.",
  examPattern: "Standard Ethiopian university entrance format — aptitude test plus subject-specific paper.",
  eligibility: "ESCCE certificate with required grades.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for EMU Entrance (Ethiopia) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for EMU Entrance (Ethiopia) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for EMU Entrance (Ethiopia) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for EMU Entrance (Ethiopia) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for EMU Entrance (Ethiopia) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for EMU Entrance (Ethiopia) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for EMU Entrance (Ethiopia) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for EMU Entrance (Ethiopia) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for EMU Entrance (Ethiopia) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for EMU Entrance (Ethiopia) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for EMU Entrance (Ethiopia) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for EMU Entrance (Ethiopia) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for EMU Entrance (Ethiopia) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for EMU Entrance (Ethiopia) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for EMU Entrance (Ethiopia) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for EMU Entrance (Ethiopia) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for EMU Entrance (Ethiopia) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for EMU Entrance (Ethiopia) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for EMU Entrance (Ethiopia)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-05-30',
  officialSource: 'https://www.neaea.gov.et/',
};

export default exam;
