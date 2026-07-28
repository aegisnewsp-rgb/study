import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { english } from './subjects/english';
import { logical_reasoning } from './subjects/logical-reasoning';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
    english,
    logical_reasoning,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'bitsat',
  examName: 'BITSAT',
  country: 'india',
  description: "BITSAT is the computer-adaptive test for admission to BITS Pilani, BITS Goa, and BITS Hyderabad campuses for BE, BPharm, and MBA programmes. Known for its all-Indian exam pattern with high competition — tests Physics, Chemistry, Mathematics/Biology and English proficiency.",
  examPattern: "130 MCQs (30 Physics, 30 Chemistry, 40 Mathematics/Biology, 10 English, 15 Logical Reasoning), 3 hours, 390 marks total. Computer-based test with no negative marking for unanswered questions.",
  eligibility: "Class 12 with PCM/PCB with minimum 75% aggregate. Admissions based on BITSAT score only — no board exam marks considered.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for BITSAT — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for BITSAT — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for BITSAT — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for BITSAT — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for BITSAT — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for BITSAT — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for BITSAT — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for BITSAT — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for BITSAT — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for BITSAT — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for BITSAT — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for BITSAT — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for BITSAT — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for BITSAT — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for BITSAT — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for BITSAT — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for BITSAT — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for BITSAT — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for BITSAT',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'BITSAT is a computer-based, high-speed entrance for BITS campuses covering Physics, Chemistry, Mathematics/Biology, English and Logical Reasoning (confirm live composition). Phase 1: NCERT-level PCM accuracy; Phase 2: speed drills + English/LR daily; Phase 3: full BITSAT-length mocks with bonus questions strategy as per the notice. Verify dates on bitsadmission.com / official BITSAT page.',
  commonMistakes: [
    'Preparing only JEE Advanced depth and never practising BITSAT-speed papers.',
    'Ignoring English and Logical Reasoning sections.',
    'No strategy for bonus questions if offered in the live pattern.',
    'Random guessing without understanding negative marking rules in the bulletin.',
    'Using outdated syllabus PDFs instead of the current BITSAT brochure.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.bits-pilani.ac.in/bitsat/',
};

export default exam;
