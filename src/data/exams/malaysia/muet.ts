import type { ExamTemplate, Subject } from '../types';

import { reading } from './subjects/reading';
import { writing } from './subjects/writing';
import { listening } from './subjects/listening';
import { speaking } from './subjects/speaking';

const subjects: Subject[] = [
    reading,
    writing,
    listening,
    speaking,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'muet',
  examName: 'MUET (Malaysia)',
  country: 'malaysia',
  description: "Malaysian University English Test (MUET) is a compulsory English proficiency test for admission to Malaysian public universities. Scored on a band scale 1-6, with most programmes requiring Band 4 minimum.",
  examPattern: "4 papers: Listening (45 min), Speaking (30 min), Reading (75 min), Writing (75 min). Computer-delivered or paper-based.",
  eligibility: "Malaysian secondary or pre-university students. Required for UPU and university admission alongside STPM/Matriculation.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MUET (Malaysia) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for MUET (Malaysia) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for MUET (Malaysia) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for MUET (Malaysia) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for MUET (Malaysia) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MUET (Malaysia) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for MUET (Malaysia) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MUET (Malaysia) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for MUET (Malaysia) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MUET (Malaysia) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for MUET (Malaysia) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for MUET (Malaysia) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MUET (Malaysia) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for MUET (Malaysia) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MUET (Malaysia) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MUET (Malaysia) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for MUET (Malaysia) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for MUET (Malaysia) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for MUET (Malaysia)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.mpm.edu.my',
};

export default exam;
