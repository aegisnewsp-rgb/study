import type { ExamTemplate, Subject } from '../types';

import { logical_reasoning } from './subjects/logical-reasoning';
import { analytical_reasoning } from './subjects/analytical-reasoning';
import { reading_comp } from './subjects/reading-comp';
import { english } from './subjects/english';

const subjects: Subject[] = [
    logical_reasoning,
    analytical_reasoning,
    reading_comp,
    english,
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
  examId: 'lsat',
  examName: 'LSAT India',
  country: 'india',
  description: `The Law School Admission Test India (LSAT India) is a standardized entrance examination for admission to undergraduate and postgraduate law programmes at participating law schools across India. It is the Indian iteration of the globally recognized LSAT, administered in India by the Law School Admission Council (LSAC). LSAT India tests candidates on reading comprehension, logical reasoning, and analytical reasoning skills, which are considered essential for success in law school. Numerous law colleges in India accept LSAT India scores for admission to their 5-year integrated BA LLB, 3-year LLB, and LLM programmes.`,
  examPattern: `LSAT India consists of multiple-choice questions divided into four sections: Reading Comprehension (approximately 22-24 questions), Analytical Reasoning (approximately 22-24 questions), Logical Reasoning I (approximately 22-24 questions), and Logical Reasoning II (approximately 22-24 questions). There is also an experimental (unscored) section and an unscored writing sample. Total scored questions are approximately 92-100, to be completed in 2 hours 20 minutes (140 minutes). Each correct answer is scored, and there is no negative marking for wrong answers. The exam is conducted online (computer-based) and is adaptive in some sections.`,
  eligibility: `For the 5-year integrated BA LLB programme: Candidates must have passed the 10+2 or equivalent examination with a minimum of 45-50% aggregate marks (requirements vary by institution). For the 3-year LLB programme: Candidates must have a bachelor's degree in any discipline with a minimum of 45-50% aggregate marks from a recognized university (requirements vary by institution). There is no upper age limit for law programmes. Candidates appearing in their final year of graduation or 10+2 may also apply provisionally. LSAT India scores are accepted by participating law schools; each institution may set its own minimum score cutoff.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for LSAT India — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for LSAT India — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for LSAT India — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for LSAT India — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for LSAT India — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for LSAT India — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for LSAT India — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for LSAT India',
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
