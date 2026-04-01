import type { ExamTemplate, Subject } from '../types';

import { gk } from './subjects/gk';
import { subject_specific } from './subjects/subject-specific';

const subjects: Subject[] = [
    gk,
    subject_specific,
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
  examId: 'nabe',
  examName: 'NABE (Pakistan)',
  country: 'pakistan',
  description: `The National Association of Business Excellence (NABE) certification is a professional business excellence assessment in Pakistan that recognizes organizations demonstrating outstanding quality management practices and business performance standards. NABE certification is awarded to businesses meeting stringent criteria across leadership, strategy, customer focus, measurement analysis, workforce focus, and operational excellence dimensions. This certification is valuable for businesses seeking to demonstrate their commitment to quality, improve competitiveness, and align with international business excellence frameworks like EFQM and Malcolm Baldrige criteria.`,
  examPattern: `The NABE business certification assessment consists of multiple dimensions evaluating organizational performance across key business areas. The examination or assessment process includes evaluation of business processes, leadership practices, strategic planning, customer satisfaction mechanisms, and operational efficiency. Organizations are assessed through documentation review, site visits, and interviews with staff at various levels. The scoring is based on proven excellence criteria with minimum thresholds required in each dimension for certification approval.`,
  eligibility: `Any business organization operating in Pakistan with a minimum of two years operational history may apply for NABE certification. Organizations must demonstrate implementation of quality management systems and business excellence practices across their operations. Manufacturing, service, and public sector organizations are all eligible for assessment. There are no specific educational requirements for the certification itself, but organizations must show evidence of systematic business practices, documented procedures, and measurable performance improvements over time.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for NABE (Pakistan) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for NABE (Pakistan) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for NABE (Pakistan) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for NABE (Pakistan) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for NABE (Pakistan) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for NABE (Pakistan) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for NABE (Pakistan) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for NABE (Pakistan)',
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
