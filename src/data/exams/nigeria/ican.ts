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
  examId: 'ican',
  examName: 'ICAN (Institute of Chartered Accountants of Nigeria)',
  country: 'nigeria',
  description: 'The Institute of Chartered Accountants of Nigeria (ICAN) examinations test accounting, auditing, taxation, and business knowledge across multiple levels: Foundation, Intermediate, and Final. ICAN is the professional body for accountants in Nigeria and its qualification is recognized across the West African sub-region and internationally. The examinations are held twice yearly (June and December) and assess candidates on both theoretical knowledge and practical application of accounting principles in Nigerian business contexts.',
  examPattern: 'Multiple papers per diet (June and December): Financial Accounting and Reporting, Auditing and Assurance, Taxation, Business Law, and Management Information Systems. Each paper is 3 hours duration. Foundation level has 4 papers, Intermediate has 5 papers, and Final has 6 papers. Examinations are paper-based with some multiple-choice and long-form questions requiring calculations and narrative answers.',
  eligibility: 'For Foundation level: SSCE/NECO with credits in English and Mathematics plus 2 other subjects. For Intermediate level: Completion of Foundation or degree in relevant discipline. For Final level: Completion of Intermediate. HND/Bachelor\'s degree holders in accounting or related fields may gain exemptions from certain levels. Non-accounting degree holders must start from Foundation. Candidates must be registered with ICAN before appearing for examinations.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for ICAN (Nigeria) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for ICAN (Nigeria) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for ICAN (Nigeria) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for ICAN (Nigeria) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for ICAN (Nigeria) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for ICAN (Nigeria) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for ICAN (Nigeria) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for ICAN (Nigeria)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.ican.org.ng',
};

export default exam;
