import type { ExamTemplate, Subject } from '../types';

import { legal_reasoning } from './subjects/legal-reasoning';
import { english } from './subjects/english';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    legal_reasoning,
    english,
    gk,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'mht-cet-law',
  examName: 'MHC-CET (Law)',
  country: 'india',
  description: `The Maharashtra Higher Secondary Certificate Common Entrance Test for Law (MHC-CET Law) is a state-level entrance examination conducted by the State CET Cell, Maharashtra for admission to 3-year LLB and 5-year integrated LLB programmes at law colleges in Maharashtra. The exam is conducted for candidates who have completed or are appearing in their graduation or 10+2 examinations respectively. MHC-CET Law is the primary gateway for admission to government and aided law colleges in Maharashtra, including some of the most prestigious law schools in the state.`,
  examPattern: `The MHC-CET Law examination for 3-year LLB programme consists of 150 multiple-choice questions to be completed in 120 minutes (2 hours). The paper covers Legal Aptitude and Legal Reasoning (40-50 questions), Logical and Analytical Reasoning (30-40 questions), English Language (30-40 questions), and General Knowledge and Current Affairs (30-40 questions). For 5-year integrated LLB (after 10+2), the exam has sections on Legal Aptitude, Logical Reasoning, English, Mathematics, and General Knowledge. Each correct answer carries 1 mark, with no negative marking. The exam is conducted in online (computer-based) mode in English and Marathi languages.`,
  eligibility: `For 3-year LLB programme: Candidates must have a bachelor's degree in any discipline with a minimum of 45% aggregate marks (40% for SC/ST candidates) from a recognized university. For 5-year integrated LLB programme: Candidates must have passed the 10+2 or equivalent examination with a minimum of 45% aggregate marks (40% for SC/ST candidates). There is no upper age limit for appearing in MHC-CET Law as per the latest guidelines. Maharashtra state domicile is not mandatory for appearing in the examination, though non-domicile candidates may have limited access to certain government seats.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MHC-CET (Law) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for MHC-CET (Law) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for MHC-CET (Law) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for MHC-CET (Law) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for MHC-CET (Law) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MHC-CET (Law) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for MHC-CET (Law) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MHC-CET (Law) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for MHC-CET (Law) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MHC-CET (Law) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for MHC-CET (Law) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for MHC-CET (Law) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MHC-CET (Law) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for MHC-CET (Law) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MHC-CET (Law) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MHC-CET (Law) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for MHC-CET (Law) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for MHC-CET (Law) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for MHC-CET (Law)',
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
