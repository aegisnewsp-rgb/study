import type { ExamTemplate, Subject } from '../types';

import { accounting } from './subjects/accounting';
import { company_law } from './subjects/company-law';
import { economics } from './subjects/economics';
import { taxation } from './subjects/taxation';

const subjects: Subject[] = [
    accounting,
    company_law,
    economics,
    taxation,
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
  examId: 'cs-exec',
  examName: 'CS Executive',
  country: 'india',
  description: `The Company Secretary (CS) Executive Programme is the second stage of the Company Secretaryship qualification conducted by the Institute of Company Secretaries of India (ICSI). It is designed to train professionals in corporate law, company secretarial practices, corporate compliance, and governance. CS professionals play a vital role in ensuring regulatory compliance, corporate governance, and proper functioning of companies. The Executive programme builds on the Foundation level and prepares candidates for mid-level corporate secretarial roles.`,
  examPattern: `The CS Executive examination consists of two modules with a total of eight papers. Module I covers Company Law, Cost and Management Accounting, Economic and Commercial Law, and Tax Laws and Practice. Module II covers Corporate and Management Accounting, Securities Laws and Capital Markets, and Economic, Industrial and Labour Laws. Each paper carries 100 marks and is of 3 hours duration. The exam is conducted in both online (computer-based) and offline (pen-and-paper) modes. Candidates must secure a minimum of 40% marks in each paper and 50% aggregate in each module to pass.`,
  eligibility: `Candidates who have passed the CS Foundation examination are eligible to appear for the CS Executive programme. Graduates or postgraduates in any discipline (except Company Secretaryship) from a recognized university are eligible for direct entry to the Executive programme without appearing for the Foundation. Candidates who have passed the CA Foundation/CPT are also eligible for exemption from CS Foundation. There is no minimum percentage requirement for graduation for direct entry. Students in the final year of graduation may also register provisionally.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CS Executive — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CS Executive — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CS Executive — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CS Executive — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CS Executive — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CS Executive — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CS Executive — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CS Executive',
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
