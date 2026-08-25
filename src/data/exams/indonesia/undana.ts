import type { ExamTemplate, Subject } from '../types';

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

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'undana',
  examName: 'UNDANA Admission (Indonesia)',
  country: 'indonesia',
  description: "Universitas Nusa Cendana (Undana) admission test — public university in East Nusa Tenggara, Indonesia.",
  examPattern: "University-specific entrance or UTBK-based admission. Tests academic potential and subject knowledge.",
  eligibility: "SMA graduate or equivalent. For domestic students primarily.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UNDANA Admission (Indonesia) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UNDANA Admission (Indonesia) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UNDANA Admission (Indonesia) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UNDANA Admission (Indonesia) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UNDANA Admission (Indonesia) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UNDANA Admission (Indonesia) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UNDANA Admission (Indonesia) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UNDANA Admission (Indonesia) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UNDANA Admission (Indonesia) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UNDANA Admission (Indonesia) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UNDANA Admission (Indonesia) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UNDANA Admission (Indonesia) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UNDANA Admission (Indonesia) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UNDANA Admission (Indonesia) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UNDANA Admission (Indonesia) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UNDANA Admission (Indonesia) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UNDANA Admission (Indonesia) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UNDANA Admission (Indonesia) — 2 Years'),
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
  prepOverview:
    'Universitas Nusa Cendana (Undana) admission test — public university in East Nusa Tenggara, Indonesia. For UNDANA Admission (Indonesia), use this UNDANA Admission (Indonesia) hub to see what UNDANA Admission (Indonesia) topics to study; use https://undana.ac.id to see when you may register.',
  commonMistakes: [
    'Mirrors of UNDANA Admission (Indonesia) \'syllabus 2019\' are a common trap; start from https://undana.ac.id.',
    'Section timing for UNDANA Admission (Indonesia) only counts if it matches the live duration.',
    'Do not assume UNDANA Admission (Indonesia) is open to every degree title until https://undana.ac.id says so.',
    'Treat \'sure selection\' UNDANA Admission (Indonesia) ads as marketing; the board does not endorse them.',
    'Who the board describes as eligible for UNDANA Admission (Indonesia): SMA graduate or equivalent. For domestic students primarily. Re-read it on https://undana.ac.id the week you apply.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://undana.ac.id',
};

export default exam;
