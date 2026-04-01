import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { quantitative } from './subjects/quantitative';
import { logical_reasoning } from './subjects/logical-reasoning';

const subjects: Subject[] = [
    english,
    quantitative,
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
  examId: 'gat',
  examName: 'GAT Pakistan',
  country: 'pakistan',
  description: `The Graduate Assessment Test (GAT) is Pakistan standardized postgraduate admission test conducted by NTS (National Testing Service) for enrollment in MS/MPhil programs at HEC-recognized universities across Pakistan. This aptitude test evaluates candidates analytical reasoning, quantitative reasoning, and English language skills required for advanced academic study at the graduate level. GAT serves as a unified screening mechanism replacing individual university entrance tests and is mandatory for admissions to most postgraduate programs. The test is designed to assess whether candidates possess the intellectual skills necessary for success in demanding graduate-level coursework and research.`,
  examPattern: `GAT General consists of 100 multiple-choice questions to be completed in 120 minutes (2 hours). The test is divided into three sections: Verbal Reasoning carries 20 questions, Quantitative Reasoning contains 30 questions, and Analytical Reasoning has 20 questions. Additionally, there is a Subject Knowledge section with 30 questions specific to the candidates academic background. GAT is conducted by NTS in paper-based pencil-and-paper format at designated centers across Pakistan. The score is valid for two years from the date of the test.`,
  eligibility: `Candidates holding a Bachelors degree (16 years of education) or equivalent from an HEC-recognized university are eligible to appear for GAT. There is no minimum percentage requirement for appearing in GAT, though individual universities may set their own passing thresholds for admission to specific programs. Students in their final year of bachelor's degree may also apply provisionally. GAT scores are used by universities for admission decisions as well as by various government departments and organizations for employment screening purposes.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for GAT Pakistan — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for GAT Pakistan — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for GAT Pakistan — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for GAT Pakistan — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for GAT Pakistan — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for GAT Pakistan — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for GAT Pakistan — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for GAT Pakistan',
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
