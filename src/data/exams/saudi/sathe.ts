import type { ExamTemplate, Subject } from '../types';

import { biology } from './subjects/biology';
import { chemistry } from './subjects/chemistry';
import { physics } from './subjects/physics';

const subjects: Subject[] = [
    biology,
    chemistry,
    physics,
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
  examId: 'sathe',
  examName: 'Saudi Achievement Test (Saudi-The)',
  country: 'saudi',
  description: "الاختبار التحصيلي (Saudi Achievement Test) — a subject-specific achievement examination part of Saudi Arabia's unified university admission system. Counts as 40% of the overall admission score alongside Qiyas aptitude test (30%) and high school GPA (30%).",
  examPattern: "Subject-specific test taken in one of two tracks: Science (Biology, Chemistry, Physics) or Humanities/Arts (Arabic, Islamic Studies, Social Sciences). Typically 80-100 MCQs, 2-3 hours. Tests depth of high school subject knowledge.",
  eligibility: "Saudi high school graduates (الثانوية العامة) or equivalent. No minimum score independently, but combined with Qiyas and GPA for university admission ranking.",
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Saudi Achievement Test (Saudi-The) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Saudi Achievement Test (Saudi-The) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Saudi Achievement Test (Saudi-The) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Saudi Achievement Test (Saudi-The) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Saudi Achievement Test (Saudi-The) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Saudi Achievement Test (Saudi-The) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Saudi Achievement Test (Saudi-The) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Saudi Achievement Test (Saudi-The)',
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
