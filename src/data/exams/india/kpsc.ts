import type { ExamTemplate, Subject } from '../types';

import { history } from './subjects/history';
import { geography } from './subjects/geography';
import { indian_polity } from './subjects/indian-polity';
import { karnataka_specific } from './subjects/karnataka-specific';

const subjects: Subject[] = [
    history,
    geography,
    indian_polity,
    karnataka_specific,
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
  examId: 'kpsc',
  examName: 'KPSC KAS',
  country: 'india',
  description: `The Karnataka Public Service Commission (KPSC) Karnataka Administrative Service (KAS) examination is a premier civil service examination conducted for recruitment to various Group A and Group B posts in the Karnataka state government. The KAS examination is considered one of the most competitive state-level civil service exams in India. It recruits candidates for administrative positions such as Deputy Commissioner, Assistant Commissioner, District Collector, and various other posts in the Karnataka state government. The examination process includes a Preliminary examination, Main examination, and Interview.`,
  examPattern: `The KPSC KAS Preliminary examination consists of two papers: Paper I (General Studies) with 200 questions carrying 200 marks, and Paper II (General Studies with Karnataka-specific topics) also with 200 questions carrying 200 marks. Both papers are objective (MCQ) type, each of 2 hours duration. The Main examination has six papers: Paper I (Kannada language), Paper II (English language), Paper III (General Studies I - Indian History, Geography, etc.), Paper IV (General Studies II - Indian Polity, Governance, etc.), Paper V (General Studies III - Economy, Science, Technology), and Paper VI (General Studies IV - Ethics, Integrity, Aptitude). Each paper is of 250 marks and 2.5 hours duration. The Interview carries 100 marks.`,
  eligibility: `Candidates must be Indian citizens with a bachelor's degree in any discipline from a recognized university. The age limit is 21-35 years for general category candidates, with relaxations for SC/ST (up to 45 years), OBC (up to 38 years), and PwD candidates (up to 40 years). Candidates must have knowledge of the Kannada language. Candidates domiciled in Karnataka are given priority in certain categories. Government servants serving under the Karnataka government may also be eligible for appearing in the examination.`,
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KPSC KAS — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KPSC KAS — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KPSC KAS — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KPSC KAS — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KPSC KAS — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KPSC KAS — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KPSC KAS — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KPSC KAS',
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
