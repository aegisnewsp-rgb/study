import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { logical_reasoning } from './subjects/logical-reasoning';
import { current_affairs } from './subjects/current-affairs';

const subjects: Subject[] = [
    english,
    logical_reasoning,
    current_affairs,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'law-apt',
  examName: 'Sri Lanka Law Aptitude',
  country: 'srilanka',
  description: 'Sri Lanka Law College admission test for the Certificate in Law programme — the first step toward becoming an attorney-at-law in Sri Lanka. The test is conducted by the Sri Lanka Law College under the supervision of the Supreme Court of Sri Lanka. It is the gateway examination for legal education in the country, testing the foundational skills needed for legal study at the degree and professional levels.',
  examPattern: 'Tests English, General Knowledge, Logic and Reasoning, and Legal Awareness. Structured as MCQs and short answer questions. The English section covers reading comprehension, vocabulary, and grammar. General Knowledge includes Sri Lankan history, politics, and current affairs. Logical Reasoning tests analytical skills and argument structure. Legal Awareness covers basic legal concepts, the Sri Lankan Constitution, and the structure of the legal system.',
  eligibility: 'GCE A-Level with minimum 3 passes in any stream. English proficiency required. Candidates must be Sri Lankan citizens or have permanent residency. There is no age limit. Applications are submitted directly to the Sri Lanka Law College during the annual admission period.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Sri Lanka Law Aptitude — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Sri Lanka Law Aptitude — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Sri Lanka Law Aptitude — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Sri Lanka Law Aptitude — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Sri Lanka Law Aptitude — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Sri Lanka Law Aptitude — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Sri Lanka Law Aptitude — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Sri Lanka Law Aptitude — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Sri Lanka Law Aptitude — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Sri Lanka Law Aptitude — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Sri Lanka Law Aptitude — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Sri Lanka Law Aptitude — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Sri Lanka Law Aptitude — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Sri Lanka Law Aptitude — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Sri Lanka Law Aptitude — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Sri Lanka Law Aptitude — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Sri Lanka Law Aptitude — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Sri Lanka Law Aptitude — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Sri Lanka Law Aptitude',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'The Law College entrance is not four papers of the same shape. General Knowledge and General Intelligence are 50 multiple-choice questions in one hour each - confirm both figures against the current notice at https://www.sllc.ac.lk before you fix them in a timetable. English and your Sinhala-or-Tamil proficiency paper run an hour and a half of written work, and that split is what your study hours should follow instead of four equal slabs.',
  commonMistakes: [
    'An outdated Sri Lanka Law Aptitude PDF is not a substitute for the current notice at https://www.sllc.ac.lk.',
    'Spreading revision evenly across all four papers wastes the two multiple-choice hours. The multiple-choice pair is won on speed under a hard clock, while the written pair rewards summarisation and comprehension drills that no volume of timed multiple-choice practice replaces.',
    'Eligibility here is arithmetic, and it cuts against candidates who assume a good rank is enough: https://www.sllc.ac.lk requires 40% in every paper while building the merit list from General Knowledge and General Intelligence alone, so a candidate can rank well and still be ruled out over a thin language paper.',
    'Who the Law College describes as eligible: a recognised school certificate carrying the required subject combination. Re-read the eligibility notice at https://www.sllc.ac.lk in the week you apply rather than trusting a two-year-old account of it.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.sllc.ac.lk',
};

export default exam;
