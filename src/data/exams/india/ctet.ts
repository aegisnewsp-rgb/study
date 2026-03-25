import type { ExamTemplate, Subject } from '../types';

import { child_pedagogy } from './subjects/child-pedagogy';
import { english } from './subjects/english';
import { mathematics } from './subjects/mathematics';
import { science } from './subjects/science';
import { social } from './subjects/social';

const subjects: Subject[] = [
    child_pedagogy,
    english,
    mathematics,
    science,
    social,
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
  examId: 'ctet',
  examName: 'CTET',
  country: 'india',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CTET — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CTET — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CTET — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CTET — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CTET — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CTET — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CTET — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CTET',
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
