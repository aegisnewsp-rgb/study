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
  examId: 'mcat',
  examName: 'MCAT Pakistan',
  country: 'pakistan',
  description: `The Medical College Admission Test (MCAT) is Pakistan standardized entrance examination for admission to undergraduate medical (MBBS) and dental (BDS) programs in public and private medical colleges across Pakistan. This comprehensive assessment evaluates candidates knowledge and understanding of Biology, Chemistry, Physics, and English at the intermediate college level. MCAT is a mandatory requirement for all medical admissions as per the Pakistan Medical Commission regulations, replacing the previous system where individual universities conducted their own entrance tests. The examination ensures standardized evaluation of candidates seeking careers in medicine and healthcare.`,
  examPattern: `MCAT Pakistan consists of multiple-choice questions divided into four subject areas: Biology carries the highest weightage with approximately 80 questions covering Zoology and Botany, Chemistry has around 60 questions including organic, inorganic, and physical chemistry, Physics contains 40 questions, and English includes 20 questions on vocabulary and comprehension. Total duration is 3 hours and 30 minutes. The examination is conducted in paper-based format at designated testing centers across Pakistan. Each correct answer earns full marks with no negative marking typically applied.`,
  eligibility: `Candidates must have completed HSSC (Pre-Medical) or equivalent with Biology, Chemistry, and Physics as compulsory subjects from a recognized educational board. A minimum of 65% to 70% aggregate marks in HSSC is typically required for admission to public medical colleges, though private colleges may have lower thresholds. Students appearing in their final HSSC examinations may apply provisionally. Foreign qualification holders must provide equivalence certificates from IBCC. Pakistani citizens as well as foreign nationals meeting the educational requirements are eligible to appear for MCAT.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for MCAT Pakistan — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for MCAT Pakistan — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for MCAT Pakistan — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for MCAT Pakistan — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for MCAT Pakistan — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for MCAT Pakistan — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for MCAT Pakistan — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for MCAT Pakistan',
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
