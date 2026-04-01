import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { current_affairs } from './subjects/current-affairs';

const subjects: Subject[] = [
    english,
    gk,
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
  examId: 'nlt',
  examName: 'NLT Pakistan',
  country: 'pakistan',
  description: `The National Level Test (NLT) conducted by NTS (National Testing Service) is a standardized postgraduate admission test in Pakistan used by various universities and institutions for recruitment and admission purposes. This comprehensive aptitude assessment evaluates candidates across multiple dimensions including English language proficiency, general knowledge, and current affairs awareness. NLT serves as a unified testing mechanism for various postgraduate programs in Pakistani universities, simplifying the admission process by providing a single standardized score that multiple institutions can recognize and utilize for their selection processes.`,
  examPattern: `The NLT examination consists of multiple-choice questions designed to assess candidates verbal reasoning, quantitative reasoning, and general awareness. The exact structure varies depending on the specific postgraduate program requirements, but typically includes sections on English (vocabulary, grammar, comprehension), General Knowledge (Pakistan affairs, world affairs, science), and Current Affairs. The test is conducted in paper-based pencil-and-paper format by NTS at various centers across Pakistan. Each correct answer carries equal marks with no negative marking typically applied.`,
  eligibility: `Candidates holding a Bachelors degree (16 years of education) or equivalent from an HEC-recognized university are generally eligible to appear for NLT. The specific eligibility criteria vary depending on the postgraduate program and the university to which the candidate is applying. Some specialized NLT tests may require specific undergraduate degrees or professional qualifications. Students in their final year of bachelor's degree may also apply provisionally. The NLT score is valid for admission to various postgraduate programs across participating universities in Pakistan.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for NLT Pakistan — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for NLT Pakistan — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for NLT Pakistan — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for NLT Pakistan — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for NLT Pakistan — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for NLT Pakistan — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for NLT Pakistan — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for NLT Pakistan',
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
