import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';
import { science } from './subjects/science';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    mathematics,
    english,
    science,
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
  examId: 'uaeu-cat',
  examName: 'UAE University CAT',
  country: 'uae',
  description: 'United Arab Emirates University (UAEU) College Admission Test — a standardised admissions test for undergraduate admission to UAEU\'s various colleges. UAEU is the UAE\'s flagship national university, located in Al Ain. The test is required for Emirati nationals and UAE residents seeking admission to undergraduate programmes, particularly in the Colleges of Business, Engineering, Health Sciences, and Humanities. UAE nationals are given priority in admission.',
  examPattern: 'Tests English, Mathematics, and analytical skills. Computer-based adaptive format. The English section assesses reading comprehension, vocabulary, and writing skills. Mathematics covers algebra, geometry, statistics, and quantitative reasoning. The analytical skills section tests logical reasoning, pattern recognition, and problem-solving. Each section is timed separately. The test adapts to candidate performance — correct answers lead to harder questions, incorrect answers to easier ones.',
  eligibility: 'High school completion (Tawjihi or equivalent) with minimum GPA requirements. UAE nationals given priority. For UAE nationals, the minimum GPA requirement is typically lower. Residents must have a high school diploma with good academic standing. Some programmes have additional subject requirements — for example, Engineering requires high school Mathematics. The test is conducted in Arabic and English depending on the programme.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UAE University CAT — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UAE University CAT — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UAE University CAT — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UAE University CAT — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UAE University CAT — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UAE University CAT — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UAE University CAT — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UAE University CAT',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.uaeu.ac.ae',
};

export default exam;
