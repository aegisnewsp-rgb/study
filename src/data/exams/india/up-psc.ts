import type { ExamTemplate, Subject } from '../types';

import { history } from './subjects/history';
import { geography } from './subjects/geography';
import { indian_polity } from './subjects/indian-polity';
import { economics } from './subjects/economics';
import { general_science } from './subjects/general-science';

const subjects: Subject[] = [
    history,
    geography,
    indian_polity,
    economics,
    general_science,
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
  examId: 'up-psc',
  examName: 'UPPSC PCS',
  description: 'UPPSC PCS (Uttar Pradesh Public Service Commission — Provincial Civil Services) is a prestigious state-level examination for recruitment to various administrative posts in the Uttar Pradesh government. The exam has three stages: Prelims (screening test), Mains (written examination), and Interview/Personality Test. The Prelims consists of two objective papers — General Studies I (focusing on History, Geography, Indian Polity, Economics, General Science, and Environment) and General Studies II (covering Logic, Reasoning, Current Affairs, and Governance). The Mains exam has eight papers including General Hindi (Paper 1), Essay (Paper 2), and GS Papers I-IV covering History, Geography, Polity, Economy, General Science, and International Relations. A strong focus on Uttar Pradesh-specific topics — its history, culture, administrative structure, and regional geography — gives UP PCS a distinct state-centric preparation approach unlike other state PSC exams.',
  examPattern: 'Preliminary Examination consists of two objective papers of 200 marks each (General Studies I and II) with 1/3 negative marking. Candidates must appear for both papers. Mains Examination has eight conventional (descriptive) papers: General Hindi (Paper 1, 150 marks), Essay (Paper 2, 150 marks), General Studies I (Paper 3, 200 marks — History, Geography), General Studies II (Paper 4, 200 marks — Indian Polity, Governance), General Studies III (Paper 5, 200 marks — Economy, Science, Technology), General Studies IV (Paper 6, 200 marks — Logical Reasoning, Decision Making), and two optional subject papers (Paper 7 and 8, 200 marks each). The Interview/Personality Test carries 100 marks. Final selection is based on Mains and Interview combined.',
  eligibility: 'Candidates must be Indian citizens aged between 21-40 years for general category with educational relaxation for SC/ST/OBC. Educational qualification is a bachelor\'s degree in any discipline from a recognized university. Knowledge of Hindi language is essential. Candidates must be domiciled in Uttar Pradesh for certain posts. Final year students can apply provisionally. Physical fitness is required for certain positions including DSP. Age relaxation: 5 years for SC/ST, 3 years for OBC.',
  country: 'india',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UPPSC PCS — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UPPSC PCS — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UPPSC PCS — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UPPSC PCS — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UPPSC PCS — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UPPSC PCS — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UPPSC PCS — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UPPSC PCS',
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
