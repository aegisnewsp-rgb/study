import type { ExamTemplate, Subject } from '../types';

import { pharmacy } from './subjects/pharmacy';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    pharmacy,
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
  examId: '帖ast',
  examName: 'LEA/RX Exam (Philippines)',
  country: 'philippines',
  description: `The Licensure Examination for Agriculture (LEA) and the Pharmacist Licensure Examination (RX) are professional licensure examinations conducted by the Professional Regulation Commission (PRC) of the Philippines. The LEA is for graduates of Agriculture and related programmes seeking to become licensed agriculturalists, while the RX is for pharmacy graduates who wish to become registered pharmacists. Passing these licensure examinations is a legal requirement for practicing these professions in the Philippines. Both exams are held at designated testing centres across the Philippines.`,
  examPattern: `The Licensure Examination for Agriculture (LEA) consists of written examinations covering subjects such as Crop Science, Soil Science, Agricultural Economics, Animal Science, Agricultural Extension, and Farm Mechanics. The exam typically has 200-300 multiple-choice questions divided into the aforementioned subjects, with some可能会有 essay-type questions. The Pharmacist Licensure Examination (RX) covers Pharmaceutical Chemistry, Pharmacology-Pharmacokinetics, Pharmaceutics (including Manufacturing Pharmacy), and Jurisprudence and Ethics. The RX exam has approximately 500 multiple-choice questions and may include practical/case-based scenarios. Both exams are conducted over 1-2 days, typically from 7:00 AM to 4:00 PM, in paper-and-pen format.`,
  eligibility: `For LEA: Candidates must have completed a bachelor's degree in Agriculture, Agronomy, Horticulture, Soil Science, Animal Science, or related programmes from a CHED-recognized institution. For RX (Pharmacist): Candidates must have completed a BS Pharmacy degree from a CHED-recognized institution. Both examinations require candidates to submit their application documents, including transcript of records, diploma, and other requirements, to the PRC. For both exams, candidates must be Filipino citizens (or foreign nationals if allowed by specific regulations), of good moral character, and must not have been convicted of any crime involving moral turpitude.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for LEA/RX Exam (Philippines) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for LEA/RX Exam (Philippines) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for LEA/RX Exam (Philippines) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for LEA/RX Exam (Philippines) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for LEA/RX Exam (Philippines) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for LEA/RX Exam (Philippines) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for LEA/RX Exam (Philippines) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for LEA/RX Exam (Philippines)',
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
