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


function makeRoadmap(subjects: Subject[], duration: string, totalDays: number, description: string): RoadmapTemplate {
  const dailyCapacity = Math.max(1, Math.floor(subjects.reduce((sum, s) => sum + s.topics.length, 0) / totalDays));
  const dailyTopics: DailyTopicItem[] = [];
  let day = 1;
  const usedTopics = new Set<string>();

  while (day <= totalDays) {
    for (const subject of subjects) {
      const available = subject.topics.filter(t => !usedTopics.has(t.id));
      const toUse = available.slice(0, dailyCapacity);
      for (const topic of toUse) {
        usedTopics.add(topic.id);
        dailyTopics.push({ ...topic, subject: subject.name });
      }
    }
    day++;
    if (usedTopics.size >= subjects.reduce((s, sb) => s + sb.topics.length, 0)) break;
  }

  return { duration, totalDays, dailyTopics, description };
}

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
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CMA Foundation — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CMA Foundation — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CMA Foundation — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CMA Foundation — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CMA Foundation — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CMA Foundation — 6 Months'),
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
  lastUpdated: '2026-04-06',
  officialSource: 'https://example.com',
};

export default exam;
