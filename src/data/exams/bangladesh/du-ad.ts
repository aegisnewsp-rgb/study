import type { ExamTemplate, Subject } from '../types';

import { bangla } from './subjects/bangla';
import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { science } from './subjects/science';

const subjects: Subject[] = [
    bangla,
    english,
    gk,
    science,
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
  examId: 'du-ad',
  examName: 'DU Unit D Admission (Arts & Institute)',
  country: 'bangladesh',
  description: 'Dhaka University Unit D admission test is for candidates seeking entry into the Faculty of Arts, Faculty of Law, Faculty of Earth and Environmental Sciences, and various institutes including the Institute of Social Welfare and Research, and Institute of Health Economics. The test is conducted separately for different units (A, B, C, D, and E) with Unit D covering humanities, social sciences, law, and specialized institute programmes. This is the most popular unit with the largest number of applicants, testing candidates on Bangla, English, General Knowledge, and General Science at the HSC level.',
  examPattern: 'MCQ-based written test: Bangla(30 marks), English(25 marks), General Knowledge(25 marks), and General Science(20 marks). Total 100 marks in 1 hour. Questions are objective type with multiple choice answers. Viva voce is conducted for shortlisted candidates applying to the Faculty of Law and some institute programmes.',
  eligibility: 'HSC or equivalent from any stream (Science, Arts, or Commerce) with minimum GPA requirements as specified by Dhaka University. For general admission, minimum GPA of 3.5 in HSC or equivalent is typically required. For Law Faculty, there may be additional requirements including minimum marks in specific subjects. Candidates must be Bangladeshi nationals. Students appearing in their final HSC examination may apply provisionally.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for DU Admission (Bangladesh) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for DU Admission (Bangladesh) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for DU Admission (Bangladesh) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for DU Admission (Bangladesh) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for DU Admission (Bangladesh) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for DU Admission (Bangladesh) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for DU Admission (Bangladesh) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for DU Admission (Bangladesh)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://du.ac.bd',
};

export default exam;
