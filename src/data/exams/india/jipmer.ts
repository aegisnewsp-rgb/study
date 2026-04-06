import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';
import { english } from './subjects/english';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
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
  examId: 'jipmer',
  examName: 'JIPMER',
  country: 'india',
  description: `The Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER) entrance examination was a premier medical entrance test for admission to the MBBS programme at JIPMER Puducherry and JIPMER Karaikal. JIPMER was one of the top medical institutions in India, consistently ranked among the top medical colleges in the country. From 2020 onwards, JIPMER MBBS was merged with NEET UG, making NEET the single entrance test for all medical colleges in India including JIPMER. However, JIPMER continues to conduct separate entrance tests for its postgraduate (MD/MS) programmes.`,
  examPattern: `The JIPMER MBBS Undergraduate entrance examination (now integrated with NEET) previously consisted of 200 multiple-choice questions covering Physics (60 questions), Chemistry (60 questions), Biology (60 questions including Botany and Zoology), English and Logical Reasoning (10 questions each), and Quantitative Aptitude (10 questions). Total duration was 3 hours. Each correct answer was awarded 1 mark with 0.25 marks deducted for incorrect answers. The exam was conducted in online (computer-based) mode in English only. For the PG entrance (MD/MS), JIPMER continues to hold its own exam with 250 MCQs covering all clinical and pre-clinical subjects.`,
  eligibility: `For MBBS admission (via NEET UG): Candidates must have completed 10+2 or equivalent with Physics, Chemistry, Biology, and English, with a minimum of 50% aggregate marks (40% for SC/ST/OBC and 45% for PwD candidates). The upper age limit was 25 years for general category with relaxations. For MD/MS programmes (via INI CET): Candidates must have completed MBBS with internship and scored the required aggregate marks in the MBBS professional examinations. Only Indian citizens and Overseas Citizens of India (OCI) are eligible.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for JIPMER — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for JIPMER — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for JIPMER — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for JIPMER — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for JIPMER — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for JIPMER — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for JIPMER — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for JIPMER',
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
