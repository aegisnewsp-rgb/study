import type { ExamTemplate, Subject } from '../types';

import { varc } from './subjects/varc';
import { qa } from './subjects/qa';
import { logical_reasoning } from './subjects/logical-reasoning';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    varc,
    qa,
    logical_reasoning,
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
  examId: 'cmat',
  examName: 'CMAT',
  country: 'india',
  description: `The Common Management Admission Test (CMAT) is a national-level entrance examination conducted by the National Testing Agency (NTA) for admission to management programmes (MBA/PGDM) in AICTE-approved institutions across India. CMAT is one of the few exams that provides admission to a wide network of over 1,000 B-schools and is conducted in an online computer-based format. It evaluates candidates across four key areas: verbal ability, quantitative aptitude, logical reasoning, and general awareness, reflecting the skills required for modern business management education.`,
  examPattern: `CMAT consists of 100 multiple-choice questions divided into four sections: Verbal Ability and Reading Comprehension (25 questions), Quantitative Techniques and Data Interpretation (25 questions), Logical Reasoning (25 questions), and General Awareness (25 questions). Each question carries 4 marks, with a total of 400 marks. The duration is 3 hours (180 minutes) with no sectional time limit. There is a negative marking of 1 mark for each wrong answer. The exam is conducted online (CBT) in a single shift.`,
  eligibility: `Candidates holding a bachelor's degree in any discipline with a minimum of 50% aggregate marks (45% for SC/ST/PwD candidates) from a recognized university are eligible to appear for CMAT. Candidates in their final year of graduation may also apply provisionally. There is no age limit for CMAT. Foreign nationals holding valid GMAT scores may also be considered for admission to some institutions under their respective policies.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CMAT — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CMAT — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CMAT — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CMAT — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CMAT — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CMAT — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CMAT — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CMAT',
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
