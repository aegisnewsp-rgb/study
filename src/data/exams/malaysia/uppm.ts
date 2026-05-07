import type { ExamTemplate, Subject } from '../types';

import { biology } from './subjects/biology';
import { chemistry } from './subjects/chemistry';
import { physics } from './subjects/physics';
import { english } from './subjects/english';

const subjects: Subject[] = [
    biology,
    chemistry,
    physics,
    english,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'uppm',
  examName: 'UPPM/UNIMAP Admission (Malaysia)',
  country: 'malaysia',
  description: "Universiti Malaysia Perlis (UNIMAP) admission test — entry requirements for engineering and technology programmes at this northern Malaysian university.",
  examPattern: "Based on STPM, Matriculation, or direct assessment. University-specific test may be required.",
  eligibility: "STPM/Matriculation with minimum CGPA requirements. Relevant subject prerequisites.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UPPM/UNIMAP Admission (Malaysia) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UPPM/UNIMAP Admission (Malaysia)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://example.com',
};

export default exam;
