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
  examId: 'mht-cet',
  examName: 'MHT-CET',
  country: 'india',
  description: "Maharashtra Common Entrance Test (MHT-CET) is the state exam for admission to BTech/BPharm courses in Maharashtra. Aligned with HSC Board syllabus — tests Physics, Chemistry, and Mathematics/Biology.",
  examPattern: "200 MCQs: Physics(50), Chemistry(50), Mathematics(100), 3 hours total, 200 marks. No negative marking.",
  eligibility: "Class 12 PCM/PCB with minimum 45% aggregate. Maharashtra domicile required for most government seats.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MHT-CET — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for MHT-CET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for MHT-CET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for MHT-CET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for MHT-CET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MHT-CET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for MHT-CET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MHT-CET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for MHT-CET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MHT-CET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for MHT-CET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for MHT-CET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MHT-CET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for MHT-CET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MHT-CET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MHT-CET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for MHT-CET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for MHT-CET — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for MHT-CET',
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
