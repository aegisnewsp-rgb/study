import type { ExamTemplate, Subject } from '../types';

import { legal_reasoning } from './subjects/legal-reasoning';
import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { mathematics } from './subjects/mathematics';

const subjects: Subject[] = [
    legal_reasoning,
    english,
    gk,
    mathematics,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ailet',
  examName: 'AILET',
  country: 'india',
  description: `The All India Law Entrance Test (AILET) is the national-level entrance examination conducted by the National Law University, Delhi (NLU Delhi) for admission to its undergraduate (BA LLB Hons.), postgraduate (LLM and PhD), and five-year integrated law programmes. AILET is one of the most prestigious law entrance exams in India, known for its high competition and rigorous selection process. The exam tests candidates on logical reasoning, English language proficiency, and current affairs and general knowledge. Legal principles are folded into the logical reasoning section rather than forming a paper of their own, so no separate legal knowledge is tested. Successful candidates undergo further rounds of counselling and interviews for final admission.`,
  examPattern: `AILET typically consists of 150 multiple-choice questions carrying 150 marks in total, spread across three sections, to be answered in 120 minutes. Section A is English Language (50 questions, 50 marks); Section B is Current Affairs & General Knowledge (30 questions, 30 marks); Section C is Logical Reasoning (70 questions, 70 marks). Legal principles may be used in the Logical Reasoning section to test logical aptitude, but no legal knowledge or technical understanding is required. Each correct answer carries 1 mark, with 0.25 marks deducted for each incorrect answer. These counts are the scheme published for the AILET 2027 UG cycle, and NLU Delhi revises the section mix between cycles, so always confirm against the brochure for the year you sit.`,
  eligibility: `Candidates must have completed their 10+2 or equivalent examination with a minimum of 45% aggregate marks (42% for OBC-NCL candidates and 40% for SC/ST/PwD candidates) from a recognized board. There is no upper age limit for the undergraduate programme as per the latest guidelines. Foreign nationals are also eligible to apply but must meet the equivalence requirements set by the Association of Indian Universities (AIU). As notified by NLU Delhi (https://nludelhi.ac.in), candidates for the LLM programme must hold an LLB degree with at least 55% aggregate marks (50% for SC/ST/PwD).`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for AILET — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for AILET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for AILET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for AILET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for AILET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for AILET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for AILET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for AILET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for AILET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for AILET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for AILET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for AILET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for AILET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for AILET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for AILET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for AILET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for AILET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for AILET — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for AILET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'AILET (NLU Delhi) is a law entrance with three published sections: English Language, Current Affairs & General Knowledge, and Logical Reasoning. Legal principles may appear inside Logical Reasoning, so principle-to-fact drills still pay. Build daily reading + reasoning drills; keep a legal-current-affairs notebook. Full timed mocks weekly. Confirm pattern and dates on the official NLU Delhi AILET portal.',
  commonMistakes: [
    'Memorising bare acts instead of practising principle-application passages.',
    'Ignoring GK/current affairs with legal themes.',
    'No full-length timed mocks with the official section mix.',
    'Over-investing in quant relative to its live weight.',
    'Using last year\'s question count instead of the current brochure.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://nludelhi.ac.in/admission/ailet/',
};

export default exam;
