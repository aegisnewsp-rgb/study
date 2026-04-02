import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { english } from './subjects/english';
import { logical_reasoning } from './subjects/logical-reasoning';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
    english,
    logical_reasoning,
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
  examId: 'bitsat',
  examName: 'BITSAT',
  country: 'india',
  description: "BITSAT is the computer-adaptive test for admission to BITS Pilani, BITS Goa, and BITS Hyderabad campuses for BE, BPharm, and MBA programmes. Known for its all-Indian exam pattern with high competition — tests Physics, Chemistry, Mathematics/Biology and English proficiency.",
  examPattern: "130 MCQs (30 Physics, 30 Chemistry, 40 Mathematics/Biology, 10 English, 15 Logical Reasoning), 3 hours, 390 marks total. Computer-based test with no negative marking for unanswered questions.",
  eligibility: "Class 12 with PCM/PCB with minimum 75% aggregate. Admissions based on BITSAT score only — no board exam marks considered.",
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for BITSAT — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for BITSAT — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for BITSAT — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for BITSAT — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for BITSAT — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for BITSAT — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for BITSAT — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for BITSAT',
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
