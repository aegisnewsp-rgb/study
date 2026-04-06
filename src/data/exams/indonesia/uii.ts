import type { ExamTemplate, Subject } from '../types';

import { academic_potential } from './subjects/academic-potential';
import { subject_knowledge } from './subjects/subject-knowledge';

const subjects: Subject[] = [
    academic_potential,
    subject_knowledge,
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
  examId: 'uii',
  examName: 'UII Entrance (Indonesia)',
  country: 'indonesia',
  description: "Universitas Islam Indonesia (UII) entrance examination — one of Indonesia's oldest private universities, known for Islamic studies, engineering, and business programmes.",
  examPattern: "UTBK (Ujian Tulis Berbasis Komputer) — Computer-Based Written Test covering: TPA (Academic Potential Test: verbal, numerical, figural), Pengetahuan Kuantitatif (Quantitative Knowledge), Literasi Bahasa Indonesia, Literasi Bahasa Inggris.",
  eligibility: "High school/SMA graduate (SMA or equivalent). Must have valid UTBK score from LTMPT.",
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UII Entrance (Indonesia) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UII Entrance (Indonesia) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UII Entrance (Indonesia) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UII Entrance (Indonesia) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UII Entrance (Indonesia) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UII Entrance (Indonesia) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UII Entrance (Indonesia) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UII Entrance (Indonesia)',
    duration: '1d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://example.com',
};

export default exam;
