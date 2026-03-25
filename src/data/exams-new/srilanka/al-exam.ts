import type { ExamTemplate, Subject } from './types';
import { makeRoadmap } from './types';

import { science_stream } from './subjects/science-stream';
import { commerce_stream } from './subjects/commerce-stream';
import { arts_stream } from './subjects/arts-stream';

const subjects: Subject[] = [
    science_stream,
    commerce_stream,
    arts_stream,
];

const exam: ExamTemplate = {
  examId: 'al-exam',
  examName: 'A/L Examination (Sri Lanka)',
  country: 'srilanka',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for A/L Examination (Sri Lanka) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for A/L Examination (Sri Lanka) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for A/L Examination (Sri Lanka) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for A/L Examination (Sri Lanka) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for A/L Examination (Sri Lanka) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for A/L Examination (Sri Lanka) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for A/L Examination (Sri Lanka) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for A/L Examination (Sri Lanka)',
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
