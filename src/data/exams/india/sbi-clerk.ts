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
  examId: 'sbi-clerk',
  examName: 'SBI Clerk',
  description: 'SBI Clerk (Junior Associates) is a banking sector examination conducted by the State Bank of India to recruit candidates for clerical cadre positions in various SBI branches across India. The selection process consists of two online objective stages — a Preliminary Examination and a Main Examination — followed by a test of the specified opted local language; the Clerk cadre has no descriptive paper. The Prelims covers English Language, Numerical Ability and Reasoning Ability, each section separately timed. The Mains covers General/Financial Awareness, General English, Quantitative Aptitude, and Reasoning Ability & Computer Aptitude. The Mains score alone forms the final merit list; the Prelims only qualifies a candidate for the Mains. Strong financial and banking awareness matters for the General/Financial Awareness section, which tests banking terminology, government schemes and current financial developments. It is one of the most popular entry-level banking exams, with a large intake across states.',
  examPattern: 'Preliminary Exam (Phase-I — 100 marks, 100 questions, 1 hour; each section separately timed): English Language (30 questions, 30 marks, 20 min), Numerical Ability (35 questions, 35 marks, 20 min), Reasoning Ability (35 questions, 35 marks, 20 min). No minimum qualifying marks are prescribed for an individual section or for the aggregate, and section-wise marks are not maintained. Main Exam (Phase-II — 200 marks, 190 questions, 2 hours 40 min): General/Financial Awareness (50 questions, 50 marks, 35 min), General English (40 questions, 40 marks, 35 min), Quantitative Aptitude (50 questions, 50 marks, 45 min), Reasoning Ability & Computer Aptitude (50 questions, 60 marks, 45 min). Both stages are objective and online with five options per question and negative marking of one-fourth of the mark assigned to a question. The Main Examination is the only stage counted for the final merit list.',
  eligibility: 'Candidates must be Indian citizens. The age band is fixed in each advertisement against a stated cut-off date — for the 2025 recruitment, not below 20 and not above 28 years as on 01.04.2025, with upper-age relaxation of 3 years for OBC, 5 years for SC/ST and 10-15 years for PwBD candidates. The educational qualification is a bachelor\'s degree in any discipline from a recognised university or equivalent. Candidates must also satisfy the test of the specified opted local language unless they studied that language to 10th standard. Computer literacy is expected, as the role involves digital banking operations.',
  country: 'india',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SBI Clerk — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for SBI Clerk — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for SBI Clerk — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for SBI Clerk — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for SBI Clerk — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SBI Clerk — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for SBI Clerk — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SBI Clerk — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for SBI Clerk — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SBI Clerk — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for SBI Clerk — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for SBI Clerk — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SBI Clerk — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for SBI Clerk — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SBI Clerk — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SBI Clerk — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for SBI Clerk — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for SBI Clerk — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SBI Clerk',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'SBI Clerk (Junior Associate): Prelims and Mains with sectional timing and negative marking as notified. Build daily speed in Numerical Ability, Reasoning and English; add Computer/GA depth for Mains. Weekly full Prelims mock; track accuracy > attempts. Local language requirements may apply for some states — read the live SBI Clerk notice carefully. Use StudyRoadmap plans for day-level sequencing.',
  commonMistakes: [
    'Ignoring sectional cut-offs and only watching overall score in mocks.',
    'Under-practising English RC and grammar under time pressure.',
    'Skipping computer awareness for Mains.',
    'No local-language or document checklist against the official notice.',
    'Random guessing with 0.25 negative marking and no attempt strategy.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://sbi.bank.in/web/careers/current-openings',
};

export default exam;
