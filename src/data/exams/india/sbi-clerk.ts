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
  description: 'SBI Clerk (Junior Associates) is a banking sector examination conducted by the State Bank of India to recruit candidates for clerical cadre positions in various SBI branches across India. The selection process consists of two stages: Preliminary Examination (online objective test) and Main Examination (online objective test with descriptive paper in English). The Prelims covers Reasoning Ability, Numerical Ability, and English Language — all three sections are equally important for clearing the cut-off. The Mains includes Reasoning Ability, General/Economic Awareness, Quantitative Aptitude, and English Language with a separate English Descriptive Test for letter and essay writing. Strong banking awareness is critical for the General Awareness section, which tests knowledge of SBI, banking terminology, government schemes, and current financial developments. It is one of the most popular entry-level banking exams with thousands of vacancies every year.',
  examPattern: 'Preliminary Exam (100 marks, 1 hour): Reasoning (35 questions), Numerical Ability (35 questions), English Language (30 questions) — each section has separate timing. Main Exam (200 marks, 2 hours 40 min): Reasoning (50 questions), General/Economic Awareness (50 questions), Quantitative Aptitude (50 questions), English Language (40 questions) — plus English Descriptive Test (Letter and Essay, 50 marks). Negative marking of 0.25 in both Prelims and Mains. Both exams are conducted online. Candidates must clear each stage to proceed to the next.',
  eligibility: 'Candidates must be Indian citizens aged between 20-28 years for general category (with relaxation for SC/ST/OBC). Educational qualification is a bachelor\'s degree in any discipline from a recognized university or equivalent. Proficiency in local language is preferred. Final year students are not eligible. Computer literacy is essential as the job involves extensive digital banking operations.',
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
