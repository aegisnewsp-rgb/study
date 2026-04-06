import type { ExamTemplate, Subject } from '../types';

import { legal_reasoning } from './subjects/legal-reasoning';
import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { mathematics } from './subjects/mathematics';

const subjects: Subject[] = [
    legal_reasoning,
    english,
    gk,
    mathematics,
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
  examId: 'ailet',
  examName: 'AILET',
  country: 'india',
  description: `The All India Law Entrance Test (AILET) is the national-level entrance examination conducted by the National Law University, Delhi (NLU Delhi) for admission to its undergraduate (BA LLB Hons.), postgraduate (LLM and PhD), and five-year integrated law programmes. AILET is one of the most prestigious law entrance exams in India, known for its high competition and rigorous selection process. The exam tests candidates on legal reasoning, logical abilities, English language proficiency, general knowledge, and mathematics. Successful candidates undergo further rounds of counselling and interviews for final admission.`,
  examPattern: `AILET consists of 150 multiple-choice questions to be answered in 90 minutes. The paper is divided into sections: English (approximately 35 questions) testing grammar, vocabulary, and comprehension; Legal Reasoning (approximately 35 questions) covering legal aptitude and legal GK; Logical Reasoning (approximately 35 questions); General Knowledge (approximately 35 questions) including current affairs and static GK; and Elementary Mathematics (approximately 10 questions). Each correct answer carries 1 mark, with 0.25 marks deducted for each incorrect answer. The examination is conducted in offline (pen-and-paper) mode.`,
  eligibility: `Candidates must have completed their 10+2 or equivalent examination with a minimum of 50% aggregate marks (45% for SC/ST/PwD candidates) from a recognized board. There is no upper age limit for the undergraduate programme as per the latest guidelines. Foreign nationals are also eligible to apply but must meet the equivalence requirements set by the Association of Indian Universities (AIU). For the LLM programme, candidates must hold a bachelor's degree in law (LLB) with at least 55% aggregate marks (50% for SC/ST/PwD).`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for AILET — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for AILET — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for AILET — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for AILET — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for AILET — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for AILET — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for AILET — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for AILET',
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
