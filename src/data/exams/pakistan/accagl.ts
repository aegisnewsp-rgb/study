import type { ExamTemplate, Subject } from '../types';

import { accounting } from './subjects/accounting';
import { taxation } from './subjects/taxation';
import { audit } from './subjects/audit';
import { financial_report } from './subjects/financial-report';

const subjects: Subject[] = [
    accounting,
    taxation,
    audit,
    financial_report,
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
  examId: 'accagl',
  examName: 'ACCA/CA Pakistan',
  country: 'pakistan',
  description: `The ACCA (Association of Chartered Certified Accountants) and CA (Chartered Accountancy) Pakistan qualifications are professional accounting certifications that prepare candidates for careers in audit, taxation, financial management, and advisory services. ACCA is a global professional accounting body offering the ACCA Qualification, while CA Pakistan is the local Chartered Accountancy programme offered by the Institute of Chartered Accountants of Pakistan (ICAP). Both pathways involve passing a series of professional examinations followed by a period of practical experience to become a fully qualified professional.`,
  examPattern: `The ACCA Qualification consists of 13 exams across three levels: Applied Knowledge (3 exams - Business and Technology, Management Accounting, Financial Accounting), Applied Skills (6 exams - Corporate and Business Law, Performance Management, Taxation, Financial Reporting, Audit and Assurance, Financial Management), and Strategic Professional (4 exams - two compulsory Strategic Business Leader and Strategic Business Reporting, plus two optional exams from Advanced Taxation, Advanced Audit and Assurance, Advanced Financial Management, Advanced Performance Management). Each exam is computer-based and can be attempted in any order subject to prerequisites. CA Pakistan consists of multiple examination stages: Foundation, Professional (three stages), and Final.`,
  eligibility: `For ACCA: There are no strict academic entry requirements for the ACCA Qualification - anyone can start with the Foundations Diplomas. For the full ACCA Qualification, candidates typically need two A-levels and three GCSEs (or equivalent) in five separate subjects including English and Mathematics, or a bachelor's degree. For CA Pakistan (ICAP): Candidates must have completed Intermediate (12 years of education) with at least 50% marks or a bachelor's degree. Graduates with 16 years of education can claim exemptions from certain levels. Candidates must also complete three years of practical training under a qualified Chartered Accountant before becoming fully qualified.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for ACCA/CA Pakistan — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for ACCA/CA Pakistan — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for ACCA/CA Pakistan — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for ACCA/CA Pakistan — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for ACCA/CA Pakistan — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for ACCA/CA Pakistan — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for ACCA/CA Pakistan — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for ACCA/CA Pakistan',
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
