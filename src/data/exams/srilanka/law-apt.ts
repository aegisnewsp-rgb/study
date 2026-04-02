import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { logical_reasoning } from './subjects/logical-reasoning';
import { current_affairs } from './subjects/current-affairs';

const subjects: Subject[] = [
    english,
    logical_reasoning,
    current_affairs,
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
  examId: 'law-apt',
  examName: 'Sri Lanka Law Aptitude',
  country: 'srilanka',
  description: 'Sri Lanka Law College admission test for the Certificate in Law programme — the first step toward becoming an attorney-at-law in Sri Lanka. The test is conducted by the Sri Lanka Law College under the supervision of the Supreme Court of Sri Lanka. It is the gateway examination for legal education in the country, testing the foundational skills needed for legal study at the degree and professional levels.',
  examPattern: 'Tests English, General Knowledge, Logic and Reasoning, and Legal Awareness. Structured as MCQs and short answer questions. The English section covers reading comprehension, vocabulary, and grammar. General Knowledge includes Sri Lankan history, politics, and current affairs. Logical Reasoning tests analytical skills and argument structure. Legal Awareness covers basic legal concepts, the Sri Lankan Constitution, and the structure of the legal system.',
  eligibility: 'GCE A-Level with minimum 3 passes in any stream. English proficiency required. Candidates must be Sri Lankan citizens or have permanent residency. There is no age limit. Applications are submitted directly to the Sri Lanka Law College during the annual admission period.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Sri Lanka Law Aptitude — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Sri Lanka Law Aptitude — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Sri Lanka Law Aptitude — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Sri Lanka Law Aptitude — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Sri Lanka Law Aptitude — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Sri Lanka Law Aptitude — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Sri Lanka Law Aptitude — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Sri Lanka Law Aptitude',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://www.lawcollege.lk',
};

export default exam;
