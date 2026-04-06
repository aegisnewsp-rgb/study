import type { ExamTemplate, Subject } from '../types';

import { biology } from './subjects/biology';
import { chemistry } from './subjects/chemistry';
import { physics } from './subjects/physics';
import { english } from './subjects/english';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    biology,
    chemistry,
    physics,
    english,
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
  examId: 'medical-adm',
  examName: 'Medical Admission Test (Bangladesh)',
  country: 'bangladesh',
  description: 'Medical admission test for government and private medical colleges in Bangladesh. Highly competitive with over 100,000 applicants for approximately 4,000 seats in government medical colleges and additional seats in private institutions. The exam is conducted by the Director General of Health Services (DGHS) under the Ministry of Health and Family Welfare. Admission to MBBS and BDS programmes across Bangladesh is based solely on this examination combined with HSC academic performance.',
  examPattern: '100 MCQs: Biology(30 questions), Chemistry(25 questions), Physics(25 questions), English(10 questions), GK(10 questions). 1 hour duration. Each question carries 1 mark. Biology carries the highest weightage reflecting its importance in medical studies. The exam is conducted simultaneously in Dhaka and divisional cities in a computer-based format at designated centres.',
  eligibility: 'HSC or equivalent with Biology, Chemistry, Physics as compulsory subjects and minimum GPA requirements — typically GPA 4.0 in Biology, Chemistry, and Physics combined and GPA 3.5 in SSC or equivalent. Bangladeshi nationals only. Students must be at least 17 years old by December 31st of the admission year. Foreign nationals holding Bangladeshi citizenship or O/A Level certificates must meet specific equivalence requirements set by DGHS.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Medical Admission (Bangladesh) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Medical Admission (Bangladesh) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Medical Admission (Bangladesh) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Medical Admission (Bangladesh) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Medical Admission (Bangladesh) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Medical Admission (Bangladesh) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Medical Admission (Bangladesh) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Medical Admission (Bangladesh)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://dghs.gov.bd',
};

export default exam;
