import type { ExamTemplate, Subject } from '../types';

import { child_pedagogy } from './subjects/child-pedagogy';
import { english } from './subjects/english';
import { mathematics } from './subjects/mathematics';
import { science } from './subjects/science';
import { social } from './subjects/social';

const subjects: Subject[] = [
    child_pedagogy,
    english,
    mathematics,
    science,
    social,
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
  examId: 'uptet',
  examName: 'UPTET',
  description: 'UPTET (Uttar Pradesh Teacher Eligibility Test) is a mandatory eligibility examination conducted by the Uttar Pradesh Basic Education Board (UPBEB) for teaching positions in government and aided schools across Uttar Pradesh. The exam is divided into two papers: Paper I is for candidates aspiring to teach Classes I-V (Primary), and Paper II is for Classes VI-VIII (Upper Primary). Each paper covers four sections: Child Development and Pedagogy, Language I (Hindi), Language II (English/Sanskrit/Urdu), and either Mathematics & Environmental Studies (Paper I) or Science & Social Studies (Paper II). UPTET certificate is valid for lifetime and is essential for teaching jobs in UP government schools. The exam tests not just subject knowledge but also pedagogical understanding — how children learn, teaching methodologies, and assessment approaches. With large numbers of aspirants every year, a focused preparation strategy covering all four sections equally is critical for clearing the cut-off.',
  examPattern: 'Paper I (for Classes I-V): 150 MCQ questions of 1 mark each covering Child Development & Pedagogy (30), Language I — Hindi (30), Language II — English/Urdu/Sanskrit (30), and Mathematics & Environmental Studies (30+30). Paper II (for Classes VI-VIII): 150 MCQ questions covering Child Development & Pedagogy (30), Language I — Hindi (30), Language II — English/Urdu/Sanskrit (30), and Science & Social Studies (30+30) OR Mathematics & Science (60) for Mathematics teachers. Each paper is of 150 marks with a duration of 2 hours 30 minutes. There is no negative marking. Candidates need 60% (90 marks) to pass — 55% for SC/ST candidates.',
  eligibility: 'For Paper I: Candidates must have passed Class XII (or equivalent) with minimum 50% marks and appear for or have completed 2-year D.El.Ed/BTC or equivalent. For Paper II: Candidates must have a bachelor\'s degree with 50% marks and have completed 2-year D.El.Ed/BTC or 4-year B.El.Ed. For Mathematics teachers in Paper II, B.Tech/B.E. in relevant subject is also accepted. Candidates in final year of D.El.Ed/BTC can also appear. Age limit varies by category but there is no upper age limit for the exam itself.',
  country: 'india',
  subjects,
  durations: {
  '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UPTET — 1 Hour'),
  '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UPTET — 1 Day'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UPTET — 3 Days'),
  '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UPTET — 1 Week'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UPTET — 1 Month'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UPTET — 3 Months'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UPTET — 6 Months'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UPTET',
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
