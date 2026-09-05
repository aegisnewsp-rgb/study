import type { ExamTemplate, Subject } from '../types';

import { history } from './subjects/history';
import { geography } from './subjects/geography';
import { indian_polity } from './subjects/indian-polity';
import { karnataka_specific } from './subjects/karnataka-specific';

const subjects: Subject[] = [
    history,
    geography,
    indian_polity,
    karnataka_specific,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'kpsc',
  examName: 'KPSC KAS',
  country: 'india',
  description: `The Karnataka Public Service Commission (KPSC) Gazetted Probationers Examination (KAS) recruits officers for Group A and Group B executive and administrative posts in Karnataka, including Assistant Commissioner (KAS Executive), Deputy Superintendent of Police (DySP), Assistant Commissioner of Commercial Taxes, Treasury Officer, and Tehsildar (Grade II). The selection process follows a three-tier system: Preliminary Examination (Objective), Main Examination (Written Descriptive), and Personality Test (Interview).`,
  examPattern: `The KPSC KAS Preliminary Examination consists of two objective MCQ papers of 2 hours duration each: Paper I covers General Studies (national and international) and Humanities (100 questions, 200 marks); Paper II covers General Studies (state significance, science, technology, environment) and General Mental Ability (100 questions, 200 marks). Negative marking is 0.25 of the marks assigned to each question (0.50 mark deducted per incorrect answer). The Main Examination consists of two qualifying language papers (Kannada and English, 150 marks each, 35% minimum passing threshold) and five compulsory scoring papers of 250 marks and 3 hours each: Essay, GS-I, GS-II, GS-III, and GS-IV (1250 marks total). The Personality Test carries 50 marks, bringing the final merit aggregate to 1300 marks.`,
  eligibility: `Candidates must be Indian citizens holding a bachelor's degree from a recognized university. As per Karnataka government notifications, the age limit as of the last date of application is 21 to 38 years for General Merit (GM), 21 to 41 years for OBC categories (2A, 2B, 3A, 3B), and 21 to 43 years for SC, ST, and Category-1. Knowledge of Kannada is mandatory, verified either by schooling with Kannada as a language or by clearing KPSC's compulsory Kannada language test. Domicile or reservation certificates issued by competent Karnataka revenue authorities are required for category relaxations.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KPSC KAS — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for KPSC KAS — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for KPSC KAS — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for KPSC KAS — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for KPSC KAS — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KPSC KAS — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for KPSC KAS — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KPSC KAS — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for KPSC KAS — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KPSC KAS — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for KPSC KAS — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for KPSC KAS — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KPSC KAS — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for KPSC KAS — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KPSC KAS — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KPSC KAS — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for KPSC KAS — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for KPSC KAS — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KPSC KAS',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'KPSC KAS is a multi-stage Karnataka state civil service exam (Prelims, Mains, Interview as notified). Build national GS plus Karnataka history, geography, economy and schemes; practise previous KPSC papers and answer writing. Confirm syllabus and stages on kpsc.kar.nic.in for the live advert.',
  commonMistakes: [
    'Ignoring Karnataka-specific GS units.',
    'No mains answer-writing practice.',
    'Weak prelims MCQ timing and negative-marking strategy.',
    'Outdated syllabus PDFs.',
    'Application document and eligibility checklist failures.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://kpsc.kar.nic.in/',
};

export default exam;
