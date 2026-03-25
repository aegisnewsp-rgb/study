import type { ExamTemplate, Subject } from './types';
import { makeRoadmap } from './types';

import { mathematics } from './subjects/mathematics';
import { science } from './subjects/science';
import { language } from './subjects/language';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    mathematics,
    science,
    language,
    gk,
];

const exam: ExamTemplate = {
  examId: 'undana',
  examName: 'UNDANA Admission (Indonesia)',
  country: 'indonesia',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UNDANA Admission (Indonesia) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UNDANA Admission (Indonesia) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UNDANA Admission (Indonesia) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UNDANA Admission (Indonesia) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UNDANA Admission (Indonesia) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UNDANA Admission (Indonesia) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UNDANA Admission (Indonesia) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UNDANA Admission (Indonesia)',
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
