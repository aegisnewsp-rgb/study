import type { ExamTemplate, Subject } from '../types';

import { arabic } from './subjects/arabic';
import { mathematics } from './subjects/mathematics';

const subjects: Subject[] = [
    arabic,
    mathematics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'sgpat',
  examName: 'Saudi General Aptitude Test (SGPAT)',
  country: 'saudi',
  description: "Saudi General Aptitude Test (Qiyas/القدرات) — a standardised aptitude test measuring verbal and quantitative reasoning abilities, required for Saudi university admission.",
  examPattern: "Verbal section (synonyms, analogies, sentence completion, reading comprehension) and Quantitative section (mathematics, problem solving). Each section 25 questions, approximately 2.5 hours total.",
  eligibility: "Secondary school students and graduates. No minimum score requirement but used in combination with high school GPA.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Saudi General Aptitude Test (SGPAT) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Saudi General Aptitude Test (SGPAT) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Saudi General Aptitude Test (SGPAT) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Saudi General Aptitude Test (SGPAT) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Saudi General Aptitude Test (SGPAT) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Saudi General Aptitude Test (SGPAT) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Saudi General Aptitude Test (SGPAT) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Saudi General Aptitude Test (SGPAT) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Saudi General Aptitude Test (SGPAT) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Saudi General Aptitude Test (SGPAT) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Saudi General Aptitude Test (SGPAT) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Saudi General Aptitude Test (SGPAT) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Saudi General Aptitude Test (SGPAT) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Saudi General Aptitude Test (SGPAT)',
    duration: '1d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Prepare for Saudi General Aptitude Test (SGPAT) in three phases: map the live syllabus and pattern from the official notice, finish high-weight topics with timed practice and an error log, then run full-length mocks matching official duration and marking. Pair with StudyRoadmap free roadmaps for remaining weeks. Confirm registration, fees, eligibility and paper rules only on https://etec.gov.sa/en/service/Generalabilitytest/servicegoal for the current saudi cycle.',
  commonMistakes: [
    'Relying on outdated Saudi General Aptitude Test (SGPAT) materials instead of the live official notice.',
    'Skipping full-length timed mocks until the final days.',
    'Over-studying low-yield topics while high-weight sections stay weak.',
    'No error log for repeated mistake patterns.',
    'Treating unofficial cut-offs as guaranteed outcomes.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://etec.gov.sa/en/service/Generalabilitytest/servicegoal',
};

export default exam;
