import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { legal_reasoning } from './subjects/legal-reasoning';
import { gk } from './subjects/gk';

const subjects: Subject[] = [
    english,
    legal_reasoning,
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
  examId: 'law-ent-uga',
  examName: 'Uganda Law Admission',
  country: 'uganda',
  description: 'Uganda law school entrance examination — the admission test for the Law Development Centre (LDC) Diploma in Law programme, which is the mandatory professional qualification for lawyers in Uganda. The LDC programme is the gateway to the Uganda Bar. The entrance examination ensures that candidates possess the foundational skills required for legal education at the professional level.',
  examPattern: 'Typically covers English Language (comprehension, grammar, essay writing), General Paper (current affairs, logical reasoning, critical analysis), and Legal Knowledge (basic principles of law, the 1995 Constitution of Uganda, structure of the Ugandan legal system). Questions are MCQs and short-answer. The exam is usually a half-day paper-based test conducted at the Law Development Centre in Kampala.',
  eligibility: 'Minimum of an undergraduate degree (bachelor\'s) in any field from a recognised university for the postgraduate Diploma route, OR excellent UACE results for the graduate entry scheme. English proficiency is essential. Candidates must be of good character and not have any serious criminal record. Applications are submitted to the Law Development Centre during the annual admission window.',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Uganda Law Admission — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Uganda Law Admission — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Uganda Law Admission — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Uganda Law Admission — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Uganda Law Admission — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Uganda Law Admission — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Uganda Law Admission — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Uganda Law Admission',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-03-25',
  officialSource: 'https://ldc.ac.ug',
};

export default exam;
