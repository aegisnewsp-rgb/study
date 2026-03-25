import type { ExamTemplate, Subject } from './types';
import { makeRoadmap } from './types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';
import { english } from './subjects/english';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
    english,
];

const exam: ExamTemplate = {
  examId: 'du-adm',
  examName: 'DU Admission (Bangladesh)',
  country: 'bangladesh',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for DU Admission (Bangladesh) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for DU Admission (Bangladesh) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for DU Admission (Bangladesh) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for DU Admission (Bangladesh) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for DU Admission (Bangladesh) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for DU Admission (Bangladesh) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for DU Admission (Bangladesh) — 6 Months'),
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
  lastUpdated: '2026-03-25',
  officialSource: 'https://example.com',
};

export default exam;
