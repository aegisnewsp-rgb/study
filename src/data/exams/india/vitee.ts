import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { english } from './subjects/english';
import { general_aptitude } from './subjects/general-aptitude';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
    english,
    general_aptitude,
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
  examId: 'vitee',
  examName: 'VITEEE',
  country: 'india',
  description: "VITEEE is the entrance exam for VIT University Vellore, Chennai, Amaravati, and Bhopal campuses. One of India's largest private university entrance exams with over 2 lakh candidates. Tests PCM and English in a computer-based format.",
  examPattern: "125 MCQs: Physics(35), Chemistry(35), Mathematics/Biology(40), English(5), Aptitude(10), 2h 30min.",
  eligibility: "Class 12 PCM/PCB with minimum 60% aggregate. NRI candidates eligible through separate channel.",
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for VITEEE — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for VITEEE — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for VITEEE — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for VITEEE — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for VITEEE — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for VITEEE — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for VITEEE — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for VITEEE',
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
