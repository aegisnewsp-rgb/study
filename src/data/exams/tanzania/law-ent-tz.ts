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
  examId: 'law-ent-tz',
  examName: 'Tanzania Law School',
  country: 'tanzania',
  description: 'The Tanzania Law School entrance examination is the mandatory entry test for admission to the postgraduate Diploma in Law programme offered by the Tanzania School of Law (the law faculty at the University of Dar es Salaam and other accredited institutions). The programme is a prerequisite for being called to the bar and practicing law in Tanzania. The exam ensures candidates have the foundational skills needed for legal education at the professional level.',
  examPattern: 'Typically consists of multiple papers covering English (comprehension and legal writing), General Knowledge and Current Affairs (Tanzanian history, politics, constitution), Logical Reasoning (analytical reasoning, argument analysis), and an introduction to Legal Concepts (basic law principles, the Tanzanian legal system). The format includes MCQs and short-answer questions. Duration varies but is typically 2-3 hours per paper.',
  eligibility: 'An undergraduate degree (minimum Lower Second Class) in any field from a recognised university. English proficiency is required. Candidates must be of good character and not have any criminal convictions. Applications are made directly to the Tanzania School of Law or through the respective university law faculty. Selection is competitive based on both the entrance exam and undergraduate performance.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Tanzania Law School — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Tanzania Law School — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Tanzania Law School — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Tanzania Law School — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Tanzania Law School — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Tanzania Law School — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Tanzania Law School — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Tanzania Law School — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Tanzania Law School — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Tanzania Law School — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Tanzania Law School — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Tanzania Law School — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Tanzania Law School — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Tanzania Law School — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Tanzania Law School — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Tanzania Law School — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Tanzania Law School — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Tanzania Law School — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Tanzania Law School',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Prepare for Tanzania Law School in three phases: map the live syllabus and pattern from the official notice, finish high-weight topics with timed practice and an error log, then run full-length mocks matching official duration and marking. Pair with StudyRoadmap free roadmaps for remaining weeks. Confirm registration, fees, eligibility and paper rules only on https://udsm.ac.tz for the current tanzania cycle.',
  commonMistakes: [
    'Relying on outdated Tanzania Law School materials instead of the live official notice.',
    'Skipping full-length timed mocks until the final days.',
    'Over-studying low-yield topics while high-weight sections stay weak.',
    'No error log for repeated mistake patterns.',
    'Treating unofficial cut-offs as guaranteed outcomes.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://udsm.ac.tz',
};

export default exam;
