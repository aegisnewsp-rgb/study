import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
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
  examId: 'kcet',
  examName: 'KCET',
  country: 'india',
  description: "Karnataka Common Entrance Test (KCET) is the state-level exam for admission to engineering, pharmacy, and other professional courses in Karnataka's government and private colleges. Conducted by KEA, it is mandatory for Karnataka domicile students.",
  examPattern: "180 MCQs: Physics(60), Chemistry(60), Mathematics(60), 1 hour each subject, 60 marks per subject. No negative marking.",
  eligibility: "Class 12 with PCM with minimum 45% aggregate (40% for SC/ST). Karnataka domicile or appropriate category.",
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KCET — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KCET — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KCET — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KCET — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KCET — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KCET — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KCET — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KCET',
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
