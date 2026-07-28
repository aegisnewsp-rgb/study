import type { ExamTemplate, Subject } from '../types';

import { varc } from './subjects/varc';
import { qa } from './subjects/qa';
import { logical_reasoning } from './subjects/logical-reasoning';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    varc,
    qa,
    logical_reasoning,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'cmat',
  examName: 'CMAT',
  country: 'india',
  description: `The Common Management Admission Test (CMAT) is a national-level entrance examination conducted by the National Testing Agency (NTA) for admission to management programmes (MBA/PGDM) in AICTE-approved institutions across India. CMAT is one of the few exams that provides admission to a wide network of over 1,000 B-schools and is conducted in an online computer-based format. It evaluates candidates across four key areas: verbal ability, quantitative aptitude, logical reasoning, and general awareness, reflecting the skills required for modern business management education.`,
  examPattern: `CMAT consists of 100 multiple-choice questions divided into four sections: Verbal Ability and Reading Comprehension (25 questions), Quantitative Techniques and Data Interpretation (25 questions), Logical Reasoning (25 questions), and General Awareness (25 questions). Each question carries 4 marks, with a total of 400 marks. The duration is 3 hours (180 minutes) with no sectional time limit. There is a negative marking of 1 mark for each wrong answer. The exam is conducted online (CBT) in a single shift.`,
  eligibility: `Candidates holding a bachelor's degree in any discipline with a minimum of 50% aggregate marks (45% for SC/ST/PwD candidates) from a recognized university are eligible to appear for CMAT. Candidates in their final year of graduation may also apply provisionally. There is no age limit for CMAT. Foreign nationals holding valid GMAT scores may also be considered for admission to some institutions under their respective policies.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CMAT — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for CMAT — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for CMAT — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for CMAT — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for CMAT — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CMAT — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for CMAT — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CMAT — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for CMAT — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CMAT — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for CMAT — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for CMAT — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CMAT — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for CMAT — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CMAT — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CMAT — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for CMAT — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for CMAT — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CMAT',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'CMAT (NTA) is a national MBA entrance with Quant, Logical Reasoning, Language Comprehension and General Awareness (plus Innovation & Entrepreneurship in recent cycles — confirm bulletin). Phase 1: Class 10 quant + standard LR + RC habits; daily 20-minute GA notebook (economy, awards, business). Phase 2: mixed sectional tests; log weak GA themes separately from quant errors. Phase 3: full CBT-style mocks weekly; review GA wrong answers as permanent flashcards. Confirm pattern and dates on cmat.nta.nic.in; use StudyRoadmap free roadmaps for day-level sequencing.',
  commonMistakes: [
    'Ignoring General Awareness until the last week while only drilling quant.',
    'Treating CMAT like CAT VARC depth instead of balanced four-section scoring.',
    'Skipping Innovation & Entrepreneurship preparation if the live paper includes it.',
    'Taking untimed topic quizzes only without full NTA-length mocks.',
    'Relying on last year\'s section weights instead of the current NTA notice.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://cmat.nta.nic.in/',
};

export default exam;
