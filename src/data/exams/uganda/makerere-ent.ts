import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
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
  examId: 'makerere-ent',
  examName: 'Makerere University (Uganda)',
  country: 'uganda',
  description: 'Makerere University direct admission test — an entrance examination for students who did not meet the direct entry requirements for Makerere University\'s various undergraduate programmes. Makerere University is Uganda\'s oldest and most prestigious university, and admission to many programmes is highly competitive. The supplementary admission test provides a second chance for qualified candidates who narrowly missed direct admission cut-offs.',
  examPattern: 'Varies by programme — typically tests relevant subjects at UACE or equivalent level. For science-based programmes, tests Physics, Chemistry, Biology, and Mathematics. For business programmes, tests Economics, Mathematics, and Commerce. For law programmes, tests English, General Paper, and Legal Knowledge. Format includes MCQs and short-answer questions. The test is typically 2-3 hours per paper and is conducted on the Makerere University campus.',
  eligibility: 'UACE or equivalent with required subject passes. Age limit may apply for some programmes. Candidates must have applied through the Uganda National Council for Higher Education (UNCHE) and been found eligible but not directly admitted. Those who score above the cut-off on the admission test may be offered a place in their chosen programme, subject to capacity.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Makerere University (Uganda) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Makerere University (Uganda) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Makerere University (Uganda) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Makerere University (Uganda) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Makerere University (Uganda) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Makerere University (Uganda) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Makerere University (Uganda) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Makerere University (Uganda)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://mak.ac.ug',
};

export default exam;
