import type { ExamTemplate, Subject } from '../types';

import { arabic } from './subjects/arabic';
import { mathematics } from './subjects/mathematics';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    arabic,
    mathematics,
    biology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'qimiyah',
  examName: 'Saudi University Admission (Qimiyah)',
  country: 'saudi',
  description: "القبول في الجامعات السعودية (University Admission) — Saudi university admission through the unified admission system. High school GPA plus standardized test scores determine placement.",
  examPattern: "Standardized admission based on: High School GPA (30%), General Aptitude Test/Qiyas (30%), Achievement Test (40%). Tests Arabic, Mathematics, and analytical skills.",
  eligibility: "Saudi high school diploma (الثانوية العامة) or equivalent. Saudi citizenship or children of Saudi mothers. Minimum GPA requirements.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Saudi University Admission (Qimiyah) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Saudi University Admission (Qimiyah) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Saudi University Admission (Qimiyah) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Saudi University Admission (Qimiyah) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Saudi University Admission (Qimiyah) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Saudi University Admission (Qimiyah) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Saudi University Admission (Qimiyah) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Saudi University Admission (Qimiyah) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Saudi University Admission (Qimiyah) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Saudi University Admission (Qimiyah) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Saudi University Admission (Qimiyah) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Saudi University Admission (Qimiyah) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Saudi University Admission (Qimiyah) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Saudi University Admission (Qimiyah) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Saudi University Admission (Qimiyah) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Saudi University Admission (Qimiyah) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Saudi University Admission (Qimiyah) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Saudi University Admission (Qimiyah) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Saudi University Admission (Qimiyah)',
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
