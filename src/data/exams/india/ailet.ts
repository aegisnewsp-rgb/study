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
  description: `The All India Law Entrance Test (AILET) is the national-level entrance examination conducted by the National Law University, Delhi (NLU Delhi) for admission to its undergraduate (BA LLB Hons.), postgraduate (LLM and PhD), and five-year integrated law programmes. AILET is one of the most prestigious law entrance exams in India, known for its high competition and rigorous selection process. The exam tests candidates on legal reasoning, logical abilities, English language proficiency, general knowledge, and mathematics. Successful candidates undergo further rounds of counselling and interviews for final admission.`,
  examPattern: `AILET consists of 150 multiple-choice questions to be answered in 90 minutes. The paper is divided into sections: English (approximately 35 questions) testing grammar, vocabulary, and comprehension; Legal Reasoning (approximately 35 questions) covering legal aptitude and legal GK; Logical Reasoning (approximately 35 questions); General Knowledge (approximately 35 questions) including current affairs and static GK; and Elementary Mathematics (approximately 10 questions). Each correct answer carries 1 mark, with 0.25 marks deducted for each incorrect answer. The examination is conducted in offline (pen-and-paper) mode.`,
  eligibility: `Candidates must have completed their 10+2 or equivalent examination with a minimum of 50% aggregate marks (45% for SC/ST/PwD candidates) from a recognized board. There is no upper age limit for the undergraduate programme as per the latest guidelines. Foreign nationals are also eligible to apply but must meet the equivalence requirements set by the Association of Indian Universities (AIU). For the LLM programme, candidates must hold a bachelor's degree in law (LLB) with at least 55% aggregate marks (50% for SC/ST/PwD).`,
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
  },  // SR-BACKFILL-V1,
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
  lastUpdated: '2026-04-06',
  officialSource: 'https://example.com',
};

export default exam;
