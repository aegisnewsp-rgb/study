import type { ExamTemplate, Subject } from '../types';

import { reasoning } from './subjects/reasoning';
import { quant } from './subjects/quant';
import { english } from './subjects/english';
import { general_awareness } from './subjects/general-awareness';

const subjects: Subject[] = [
    reasoning,
    quant,
    english,
    general_awareness,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'sbi-po',
  examName: 'SBI PO',
  description: 'SBI PO (Probationary Officer) is one of the most sought-after banking examinations in India, conducted by the State Bank of India for recruitment to officer cadre positions. The three-stage selection process comprises Preliminary Examination (objective online test), Main Examination (objective + descriptive online test), and Group Exercise & Interview. The Prelims tests Reasoning, Quantitative Aptitude, and English Language in a time-bound format. The Mains is more comprehensive with Reasoning, Computer Aptitude, Data Analysis & Interpretation, General/Economy/Banking Awareness, and an English Descriptive Test. The exam demands both speed and accuracy, with negative marking of 0.25 in Prelims and 0.25 in Mains objective questions. Success in SBI PO opens doors to a prestigious career in India\'s largest public sector bank with attractive compensation and growth opportunities.',
  examPattern: 'As notified by State Bank of India (https://sbi.co.in/careers), the Preliminary Examination consists of 100 questions for 100 marks (1 hour). Per the official SBI PO recruitment notification (https://sbi.co.in/careers), the Main Examination comprises an objective test of 200 marks (155 questions across Reasoning & Computer Aptitude 45 questions, Data Analysis & Interpretation 35 questions, General/Economy/Banking Awareness 50 questions, and English 35 questions) plus a Descriptive Test of 50 marks (2 questions, 30 minutes). As specified in the official SBI recruitment notification (https://sbi.co.in/careers), Group Exercises (20 marks) and Interview (30 marks) follow for shortlisted candidates.',
  eligibility: 'Per official SBI recruitment notifications (https://sbi.co.in/careers), candidates must hold a Bachelor\'s degree in any discipline from a recognized university. Final-year graduation candidates are eligible to apply provisionally as specified in the advertisement. The prescribed age bracket is 21 to 30 years as of the cutoff date, with standard upper age relaxations (up to 33 years for OBC, 35 years for SC/ST, and 45 years for PwD) as notified by the bank.',
  country: 'india',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SBI PO — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for SBI PO — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for SBI PO — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for SBI PO — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for SBI PO — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SBI PO — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for SBI PO — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SBI PO — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for SBI PO — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SBI PO — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for SBI PO — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for SBI PO — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SBI PO — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for SBI PO — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SBI PO — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SBI PO — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for SBI PO — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for SBI PO — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SBI PO',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'SBI PO: Prelims → Mains (objective + descriptive) → Group Exercise & Interview. Phase 1: Prelims speed trinity (Reasoning, Quant, English) with sectional timers. Phase 2: Mains DI-heavy sets, banking/economy awareness, computer aptitude and descriptive letter/essay practice. Phase 3: alternate Prelims and Mains mocks; keep an error log and a weekly banking news digest. Confirm stages and marking on sbi.co.in careers; pair with StudyRoadmap roadmaps.',
  commonMistakes: [
    'Treating SBI PO like a pure speed test and under-preparing Mains descriptive writing.',
    'Neglecting banking and economy awareness until the last fortnight.',
    'No GE/interview communication practice after written stages.',
    'Ignoring negative marking and over-attempting weak sections.',
    'Relying on outdated Mains pattern PDFs instead of the live SBI notice.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://sbi.co.in/web/careers',
};

export default exam;
