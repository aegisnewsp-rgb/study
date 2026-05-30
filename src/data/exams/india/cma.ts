import type { ExamTemplate, Subject } from '../types';

import { accounting } from './subjects/accounting';
import { economics } from './subjects/economics';
import { mathematics } from './subjects/mathematics';
import { business_law } from './subjects/business-law';

const subjects: Subject[] = [
    accounting,
    economics,
    mathematics,
    business_law,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'cma',
  examName: 'CMA Foundation',
  country: 'india',
  description: `The CMA Foundation (Cost and Management Accounting) is the entry-level examination for the Institute of Cost Accountants of India (ICAI-CMA), formerly known as the Institute of Cost and Works Accountants of India (ICWAI). This three-level programme (Foundation, Intermediate, and Final) trains candidates in cost accounting, management accounting, financial management, and strategic decision-making. CMAs are in demand across industries for roles in cost management, budgeting, internal auditing, and financial advisory services.`,
  examPattern: `The CMA Foundation examination consists of four papers, each of 100 marks, to be attempted in two sessions of 3 hours each. Session I has Paper 1: Fundamentals of Economics and Management (50 marks each) and Paper 2: Fundamentals of Accounting (100 marks). Session II has Paper 3: Fundamentals of Law and Ethics (100 marks) and Paper 4: Fundamentals of Business Mathematics and Statistics (100 marks). The exam is conducted in offline (pen-and-paper) mode. Candidates must secure a minimum of 40% marks in each paper and 50% aggregate across all papers to qualify.`,
  eligibility: `Candidates who have passed the Senior Secondary Examination (10+2) or equivalent from a recognized board are eligible to register for the CMA Foundation course. There is no minimum percentage requirement at the 10+2 level for registration. Graduates or postgraduates in any discipline (except Cost and Management Accounting) from a recognized university are also eligible. Candidates who have passed the Foundation level of the Institute of Company Secretaries of India (ICSI) or the CA Foundation are eligible for direct entry to the CMA Intermediate.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CMA Foundation — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for CMA Foundation — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for CMA Foundation — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for CMA Foundation — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for CMA Foundation — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CMA Foundation — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for CMA Foundation — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CMA Foundation — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for CMA Foundation — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CMA Foundation — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for CMA Foundation — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for CMA Foundation — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CMA Foundation — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for CMA Foundation — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CMA Foundation — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CMA Foundation — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for CMA Foundation — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for CMA Foundation — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CMA Foundation',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-05-30',
  officialSource: 'https://icmai.in/ClntStudents/Overview',
};

export default exam;
