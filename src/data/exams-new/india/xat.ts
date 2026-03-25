import type { ExamTemplate, Subject } from './types';
import { makeRoadmap } from './types';

import { varc } from './subjects/varc';
import { decision_making } from './subjects/decision-making';
import { qa } from './subjects/qa';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    varc,
    decision_making,
    qa,
    gk,
];

const exam: ExamTemplate = {
  examId: 'xat',
  examName: 'XAT',
  country: 'india',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for XAT — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for XAT — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for XAT — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for XAT — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for XAT — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for XAT — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for XAT — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for XAT',
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
