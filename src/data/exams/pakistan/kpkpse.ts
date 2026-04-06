import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { islamic_studies } from './subjects/islamic-studies';
import { pakistan_affairs } from './subjects/pakistan-affairs';

const subjects: Subject[] = [
    english,
    gk,
    islamic_studies,
    pakistan_affairs,
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
  examId: 'kpkpse',
  examName: 'KPK PMS',
  country: 'pakistan',
  description: `The Khyber Pakhtunkhwa Public Service Commission Provincial Management Service (KP PMS) examination is the premier civil service recruitment test for the Khyber Pakhtunkhwa province. This comprehensive examination recruits candidates for administrative positions in the provincial civil service, including positions like Deputy Commissioner, Assistant Commissioner, and various provincial secretary posts. The examination evaluates candidates across multiple subjects including English, Current Affairs, Pakistan Affairs, Islamic Studies, General Knowledge, and General Science. Successful candidates undergo training at the Civil Services Academy before being posted to various departments across the province.`,
  examPattern: `The KP PMS examination consists of multiple written papers: English (Essay, Precis, and Grammar), Current Affairs of Pakistan and World, Pakistan Affairs, Islamic Studies, General Knowledge, and General Science. Each paper carries 100 marks. The examination is conducted in Peshawar and other designated centers. After passing the written examination, candidates appear for a psychological test and interview. The final selection is based on combined marks from written examination, psychological test, and interview performance.`,
  eligibility: `Candidates must be Pakistani nationals domiciled in Khyber Pakhtunkhwa province with at least a second division Bachelors degree (16 years of education) from an HEC-recognized university. The age limit is 21-30 years for most positions with relaxations for government employees and certain other categories. Female candidates and those from tribal areas are encouraged to apply. Candidates must be of good character and must not have been dismissed from government service for misconduct or have a criminal record.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KPK PMS — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KPK PMS — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KPK PMS — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KPK PMS — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KPK PMS — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KPK PMS — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KPK PMS — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KPK PMS',
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
