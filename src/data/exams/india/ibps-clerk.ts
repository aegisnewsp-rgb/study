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
  examId: 'ibps-clerk',
  examName: 'IBPS Clerk',
  country: 'india',
  description: `The IBPS Clerk examination is conducted by the Institute of Banking Personnel Selection (IBPS) for recruitment to the post of Clerk in public sector banks across India. It is one of the largest banking recruitment examinations in the country, offering candidates an opportunity to secure a stable career in the banking sector. The examination process consists of a Preliminary examination and a Main examination, followed by the allocation of candidates to various public sector banks based on their merit and preference. Successful candidates are appointed as Clerks responsible for customer service, cash handling, and administrative tasks.`,
  examPattern: `The IBPS Clerk Preliminary Examination has three sections: English Language (30 questions, 30 marks), Numerical Ability (35 questions, 35 marks), and Reasoning Ability (35 questions, 35 marks), totaling 100 questions for 100 marks to be completed in 60 minutes. The Main Examination has four sections: Reasoning Ability and Computer Aptitude (50 questions, 60 marks), English Language (40 questions, 40 marks), Quantitative Aptitude (50 questions, 50 marks), and General/Financial Awareness (50 questions, 50 marks), totaling 190 questions for 200 marks in 160 minutes. Both exams are conducted in online (computer-based) mode with negative marking of 0.25 marks for wrong answers.`,
  eligibility: `Candidates must be Indian citizens with a bachelor's degree in any discipline from a recognized university. The candidate must have a valid email ID and should be proficient in the official language of the state/UT for which they are applying. The age limit is 20-28 years for general category candidates, with relaxations up to 32 years for OBC, 35 years for SC/ST, and 38 years for PwD candidates. Computer literacy is preferred as the banking sector relies heavily on digital operations. Candidates should have knowledge of the official language of the state they are applying for.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for IBPS Clerk — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for IBPS Clerk — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for IBPS Clerk — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for IBPS Clerk — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for IBPS Clerk — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for IBPS Clerk — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for IBPS Clerk — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for IBPS Clerk',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://example.com',
};

export default exam;
