import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { pakistan_affairs } from './subjects/pakistan-affairs';
import { current_affairs } from './subjects/current-affairs';

const subjects: Subject[] = [
    english,
    gk,
    pakistan_affairs,
    current_affairs,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ppsc',
  examName: 'PPSC (Pakistan)',
  country: 'pakistan',
  description: `The Punjab Public Service Commission (PPSC) is a government body that conducts competitive examinations for recruitment to various civil service posts in the Punjab province of Pakistan. PPSC examinations are conducted for positions in the Punjab Superior Judicial Service, Punjab Civil Service (PMS), and various other Group A and B posts in the provincial government. The commission conducts written examinations, interview boards, and other selection procedures to identify qualified candidates for positions such as Deputy Commissioner, Assistant Commissioner, and various provincial secretariat posts.`,
  examPattern: `The PPSC Combined Competitive Examination for Punjab Civil Service (PMS) has a written examination followed by a psychological test and interview, and it is held in phases. As advertised for the 2025 cycle, the written examination carries 1200 marks: six compulsory papers of 100 marks each (English Essay; English Précis, Comprehension and Translation; Urdu Essay, Précis, Comprehension and Translation; Islamic Studies or Ethics for non-Muslim candidates; Pakistan Studies; and a General Knowledge objective paper), together 600 marks, plus three optional subjects of 200 marks each, chosen so that no more than one comes from any single subject group. The psychological test and interview/viva voce carry a further 300 marks. Candidates must secure 50% of the written aggregate (600 marks) to reach the interview, and then 50% in the interview itself. The General Knowledge objective paper carries negative marking of 0.25 marks per wrong answer. Confirm the current cycle's paper list and totals in the PPSC advertisement before planning around them, because they are re-notified for each examination.`,
  eligibility: `Candidates must hold a graduate degree (at least second division) from a recognized university and be domiciled in Punjab. The age limit advertised for the 2025 cycle is 21 to 30 years as on 1st January 2026: officials of the Punjab or Federal Government who are domiciled in Punjab and have at least 4 years service get an upper age limit of 35 years, and special persons may receive up to 15 years relaxation. Male, female and transgender candidates may all apply. Confirm the age band and cut-off date in the current advertisement, since the Commission re-notifies them for each cycle.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for PPSC (Pakistan) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for PPSC (Pakistan) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for PPSC (Pakistan) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for PPSC (Pakistan) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for PPSC (Pakistan) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for PPSC (Pakistan) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for PPSC (Pakistan) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for PPSC (Pakistan) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for PPSC (Pakistan) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for PPSC (Pakistan) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for PPSC (Pakistan) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for PPSC (Pakistan) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for PPSC (Pakistan) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for PPSC (Pakistan) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for PPSC (Pakistan) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for PPSC (Pakistan) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for PPSC (Pakistan) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for PPSC (Pakistan) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for PPSC (Pakistan)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'PPSC (Pakistan) preparation works best in three phases: (1) map the live syllabus and paper pattern from the official notice, (2) finish high-weight topics with timed practice sets and an error log, (3) sit full-length mocks matching official duration and marking. Use StudyRoadmap free roadmaps and topic notes for day-level sequencing. Always re-check registration windows, fees, eligibility and pattern on https://www.ppsc.gop.pk/ for the current cycle — rules change by year and country (pakistan).',
  commonMistakes: [
    'Using outdated PPSC (Pakistan) pattern or syllabus PDFs instead of the live official notice.',
    'Practising only untimed quizzes and never sitting full-length mocks under exam fatigue.',
    'Ignoring high-weight sections while over-studying low-yield topics.',
    'No written error log — repeating the same mistake types across mocks.',
    'Treating unofficial cut-offs or rank predictors as guarantees.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.ppsc.gop.pk/',
};

export default exam;
