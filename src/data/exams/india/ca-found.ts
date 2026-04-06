import type { ExamTemplate, Subject } from '../types';

import { accounting } from './subjects/accounting';
import { economics } from './subjects/economics';
import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';

const subjects: Subject[] = [
    accounting,
    economics,
    mathematics,
    english,
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
  examId: 'ca-found',
  examName: 'CA Foundation',
  country: 'india',
  description: `The CA Foundation is the entry-level examination for the Chartered Accountancy profession in India, conducted by the Institute of Chartered Accountants of India (ICAI). It is the first stage of the three-level CA curriculum (Foundation, Intermediate, and Final). The exam tests fundamental knowledge in accounting, business laws, mathematics, and economics that form the bedrock of a career in chartered accountancy. Candidates who qualify this exam enter the CA Intermediate level and ultimately pursue a career in accounting, auditing, taxation, and financial consulting.`,
  examPattern: `The CA Foundation examination consists of four papers, each of 100 marks, with a duration of 3 hours per paper. Paper 1 is Principles and Practice of Accounting; Paper 2 is Business Laws and Business Correspondence; Paper 3 is Mathematics, Logical Reasoning, and Statistics; Paper 4 is Economics and Business and Commercial Knowledge. The exam is conducted in offline (pen-and-paper) mode. There is a negative marking of 0.25 marks for each wrong answer in the objective-type questions. Candidates must obtain a minimum of 40% marks in each paper and 50% aggregate across all papers to pass.`,
  eligibility: `Candidates who have appeared or passed the Senior Secondary Examination (10+2) or equivalent from a recognized board are eligible to register for the CA Foundation course. There is no minimum percentage requirement at the 10+2 level for registration. However, candidates must score at least 50% aggregate in Commerce-related subjects at the 10+2 level to avail of certain exemptions. Students pursuing bachelor's degrees can also register for the Foundation programme concurrently. Candidates who have passed the Intermediate level of the Institute of Company Secretaries of India (ICSI) or the Institute of Cost Accountants of India (ICAI-CMA) are exempted from CA Foundation.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CA Foundation — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CA Foundation — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CA Foundation — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CA Foundation — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CA Foundation — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CA Foundation — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CA Foundation — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CA Foundation',
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
