import type { ExamTemplate, Subject } from './types';
import { makeRoadmap } from './types';

import { anatomy } from './subjects/anatomy';
import { physiology } from './subjects/physiology';
import { biochemistry } from './subjects/biochemistry';
import { pharmacology } from './subjects/pharmacology';
import { pathology } from './subjects/pathology';
import { microbiology } from './subjects/microbiology';
import { forensic } from './subjects/forensic';
import { psm } from './subjects/psm';

const subjects: Subject[] = [
    anatomy,
    physiology,
    biochemistry,
    pharmacology,
    pathology,
    microbiology,
    forensic,
    psm,
];

const exam: ExamTemplate = {
  examId: 'fmge',
  examName: 'FMGE',
  country: 'india',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for FMGE — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for FMGE — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for FMGE — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for FMGE — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for FMGE — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for FMGE — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for FMGE — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for FMGE',
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
