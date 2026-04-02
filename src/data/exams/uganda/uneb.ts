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
  examId: 'uneb',
  examName: 'UNEB UACE (Uganda)',
  country: 'uganda',
  description: 'Uganda National Examinations Board (UNEB) UACE (Uganda Advanced Certificate of Education) is the national A-Level equivalent exam for university entrance in Uganda. The UACE is taken after two years of advanced secondary education (S.5 and S.6) and is the primary criterion for admission to Ugandan universities. UNEB administers the exam annually, and results are used by the Uganda National Council for Higher Education (UNCHE) for university placement.',
  examPattern: 'At least 3 principal passes in relevant subjects. Compulsory General Paper. Essay and MCQ formats. Students typically take 3-4 subjects in their chosen combination: Science (Physics, Chemistry, Biology, Mathematics), Arts (History, Geography, Economics, Divinity), or Commercial (Economics, Mathematics, Commerce, Accounting). The General Paper tests general knowledge, communication, and critical thinking. Each subject has three papers: Papers 1 and 2 (theory) and Paper 3 (practical or essay depending on subject).',
  eligibility: 'UCE (Form IV) certificate with minimum passes. Subject combinations must meet university course requirements. Students must have completed S.6 (Senior 6) of secondary education. For university admission, a minimum of 2 principal passes at the same sitting is typically required, though competitive programmes like Medicine and Law require 3 principal passes with specific subject grades.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UNEB UACE (Uganda) — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UNEB UACE (Uganda) — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UNEB UACE (Uganda) — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UNEB UACE (Uganda) — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UNEB UACE (Uganda) — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UNEB UACE (Uganda) — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UNEB UACE (Uganda) — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UNEB UACE (Uganda)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://www.uneb.ac.ug',
};

export default exam;
