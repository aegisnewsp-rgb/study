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
  examId: 'pcat',
  examName: 'LEA/RX Exam (Philippines)',
  country: 'philippines',
  description: 'Philippine College Admission Test (PCAT) — used by several Philippine universities as part of their admission process for various undergraduate programmes. The PCAT is a standardised entrance examination developed by the Center for Educational Measurement (CEM) and is used by multiple universities to supplement their internal admission criteria. It is particularly popular among universities in the National Capital Region and major provincial cities.',
  examPattern: 'Verbal ability, Quantitative ability, Science (Biology, Chemistry, Physics), and General Information. MCQ format. The Verbal section covers analogies, sentence completion, and reading comprehension. Quantitative ability covers arithmetic, algebra, geometry, and data interpretation. Science covers fundamental Biology, Chemistry, and Physics concepts at the high school level. General Information tests awareness of current events, Philippine history, and civic knowledge. Each section has 100-150 items.',
  eligibility: 'High school graduate or senior student. Some universities require minimum PCAT percentile scores. The PCAT is typically taken during the application season (February to May). Each participating university sets its own minimum percentile cut-off — competitive programmes may require the 60th percentile or higher. Candidates should check the specific requirements of the universities they are applying to.',
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
  officialSource: 'https://www.cem-inc.org',
};

export default exam;
