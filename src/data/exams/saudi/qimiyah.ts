import type { ExamTemplate, Subject } from '../types';

import { arabic } from './subjects/arabic';
import { mathematics } from './subjects/mathematics';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    arabic,
    mathematics,
    biology,
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
  examId: 'qimiyah',
  examName: 'Saudi University Admission (Qimiyah)',
  country: 'saudi',
  description: "القبول في الجامعات السعودية (University Admission) — Saudi university admission through the unified admission system. High school GPA plus standardized test scores determine placement.",
  examPattern: "Standardized admission based on: High School GPA (30%), General Aptitude Test/Qiyas (30%), Achievement Test (40%). Tests Arabic, Mathematics, and analytical skills.",
  eligibility: "Saudi high school diploma (الثانوية العامة) or equivalent. Saudi citizenship or children of Saudi mothers. Minimum GPA requirements.",
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Saudi University Admission (Qimiyah) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Saudi University Admission (Qimiyah) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Saudi University Admission (Qimiyah) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Saudi University Admission (Qimiyah) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Saudi University Admission (Qimiyah) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Saudi University Admission (Qimiyah) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Saudi University Admission (Qimiyah) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Saudi University Admission (Qimiyah)',
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
