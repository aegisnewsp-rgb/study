import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { legal_reasoning } from './subjects/legal-reasoning';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    english,
    legal_reasoning,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'law-ent-uga',
  examName: 'Uganda Law Admission',
  country: 'uganda',
  description: 'Uganda law school entrance examination — the admission test for the Law Development Centre (LDC) Diploma in Law programme, which is the mandatory professional qualification for lawyers in Uganda. The LDC programme is the gateway to the Uganda Bar. The entrance examination ensures that candidates possess the foundational skills required for legal education at the professional level.',
  examPattern: 'Typically covers English Language (comprehension, grammar, essay writing), General Paper (current affairs, logical reasoning, critical analysis), and Legal Knowledge (basic principles of law, the 1995 Constitution of Uganda, structure of the Ugandan legal system). Questions are MCQs and short-answer. The exam is usually a half-day paper-based test conducted at the Law Development Centre in Kampala.',
  eligibility: 'Minimum of an undergraduate degree (bachelor\'s) in any field from a recognised university for the postgraduate Diploma route, OR excellent UACE results for the graduate entry scheme. English proficiency is essential. Candidates must be of good character and not have any serious criminal record. Applications are submitted to the Law Development Centre during the annual admission window.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Uganda Law Admission — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Uganda Law Admission — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Uganda Law Admission — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Uganda Law Admission — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Uganda Law Admission — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Uganda Law Admission — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Uganda Law Admission — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Uganda Law Admission — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Uganda Law Admission — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Uganda Law Admission — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Uganda Law Admission — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Uganda Law Admission — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Uganda Law Admission — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Uganda Law Admission — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Uganda Law Admission — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Uganda Law Admission — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Uganda Law Admission — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Uganda Law Admission — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Uganda Law Admission',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Prepare for Uganda Law Admission in three phases: map the live syllabus and pattern from the official notice, finish high-weight topics with timed practice and an error log, then run full-length mocks matching official duration and marking. Pair with StudyRoadmap free roadmaps for remaining weeks. Confirm registration, fees, eligibility and paper rules only on https://ldc.ac.ug for the current uganda cycle.',
  commonMistakes: [
    'Relying on outdated Uganda Law Admission materials instead of the live official notice.',
    'Skipping full-length timed mocks until the final days.',
    'Over-studying low-yield topics while high-weight sections stay weak.',
    'No error log for repeated mistake patterns.',
    'Treating unofficial cut-offs as guaranteed outcomes.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://ldc.ac.ug',
};

export default exam;
