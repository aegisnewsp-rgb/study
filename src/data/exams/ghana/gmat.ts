import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { mathematics } from './subjects/mathematics';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    english,
    mathematics,
    gk,
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
  examId: 'gmat',
  examName: 'GMAT',
  country: 'ghana',
  description: 'Graduate Management Admission Test (GMAT) — the global entrance exam for MBA and Master\'s in Finance programmes worldwide, including Ghana\'s top business schools. The GMAT is a computer-adaptive test (CAT) developed by the Graduate Management Admission Council (GMAC). While not a Ghana-specific exam, it is used by Ghanaian business schools including the University of Ghana Business School, Ghana Institute of Management and Public Administration (GIMPA), and other institutions offering MBA and postgraduate management programmes.',
  examPattern: 'Analytical Writing Assessment (30min), Integrated Reasoning (30min), Quantitative (62min), Verbal (65min). Adaptive format, scored 200-800. The AWA requires writing an essay analyzing an argument. Integrated Reasoning tests data interpretation from multiple sources. Quantitative covers problem solving and data sufficiency. Verbal covers reading comprehension, critical reasoning, and sentence correction. The test is taken on a computer at an authorized testing center (e.g., Ghanaian test centers in Accra).',
  eligibility: 'Any undergraduate degree. No minimum score requirement but top programmes typically require 600+. The GMAT has no eligibility criteria in terms of education background — anyone can take it. However, a score of 600+ is generally needed for admission to top MBA programmes. The GMAT score is valid for 5 years. Candidates may take the exam multiple times, but there is a 16-day waiting period between attempts.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for GMAT — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for GMAT — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for GMAT — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for GMAT — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for GMAT — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for GMAT — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for GMAT — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for GMAT',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.gmac.com',
};

export default exam;
