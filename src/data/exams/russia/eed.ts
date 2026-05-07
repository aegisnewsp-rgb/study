import type { ExamTemplate, Subject } from '../types';

import { russian_language } from './subjects/russian-language';
import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';

const subjects: Subject[] = [
    russian_language,
    mathematics,
    physics,
    chemistry,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'eed',
  examName: 'EGE (Russia)',
  country: 'russia',
  description: "ЕГЭ (Yediniy Gosudarstvenniy Ekzamen, Unified State Exam) is Russia's national university entrance examination. One of the largest standardized tests in the world — required for admission to all Russian universities. Tests in Russian language, Mathematics, and elective subjects.",
  examPattern: "2 mandatory exams: Russian Language (100 points), Mathematics (100 points base or 100 points profile). Plus 1-2 elective subjects: Physics, Chemistry, Biology, History, Social Science, Informatics, Foreign Language. Minimum 3 exams total. 3-5 hours per exam.",
  eligibility: "Certificate of Secondary General Education (аттестат). Minimum score requirements vary by university and programme.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for EGE (Russia) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for EGE (Russia) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for EGE (Russia) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for EGE (Russia) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for EGE (Russia) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for EGE (Russia) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for EGE (Russia) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for EGE (Russia) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for EGE (Russia) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for EGE (Russia) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for EGE (Russia) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for EGE (Russia) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for EGE (Russia) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for EGE (Russia) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for EGE (Russia) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for EGE (Russia) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for EGE (Russia) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for EGE (Russia) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for EGE (Russia)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://fipi.ru/ege',
};

export default exam;
