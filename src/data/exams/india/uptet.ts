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

function makeRoadmap(subjects: Subject[], durationKey: string, totalDays: number, description: string): RoadmapTemplate {
  // SR-FEASIBILITY-V1 — feasibility-aware topic selection.
  // Per-duration coverage and per-day load assume realistic study budgets:
  //   short plans (<= 12h): 30-45 min/topic, single pass, weight-sorted
  //   day-scale (1d-2w):    rapid first pass, partial → full coverage
  //   month+:               full coverage; longer plans get more revision
  // Subjects are round-robin interleaved so day-1 isn't all one subject.
  const allTopics: DailyTopicItem[] = [];
  for (const s of subjects) {
    for (const t of s.topics) allTopics.push({ ...t, subject: s.name });
  }
  const totalTopics = allTopics.length;

  // coverage = monotonic fraction of distinct topics shown.
  const coverageMap: Record<string, number> = {
    '1h':  0.03, '2h':  0.06, '3h':  0.09, '5h':  0.14, '12h': 0.20,
    '1d':  0.25, '2d':  0.35, '3d':  0.45, '5d':  0.60, '7d':  0.75,
    '10d': 0.90, '2w':  1.00,
    '1mo': 1.00, '2mo': 1.00, '3mo': 1.00, '6mo': 1.00, '1yr': 1.00, '2yr': 1.00,
  };
  // Hard floor for short durations — always surface this many topics
  // even if the syllabus is huge. Picked so 1h..12h are clearly distinct.
  const minTopicsMap: Record<string, number> = {
    '1h': 2, '2h': 4, '3h': 6, '5h': 9, '12h': 14,
  };
  const cov = coverageMap[durationKey] ?? 1.00;
  const floor = minTopicsMap[durationKey] ?? 1;
  // Cap at totalTopics last so a small-syllabus exam never asks for more
  // topics than it has.
  const pickCount = Math.min(totalTopics, Math.max(floor, Math.ceil(totalTopics * cov)));

  // Group by subject, sort each by weight desc, then round-robin interleave.
  const bySubject: Record<string, DailyTopicItem[]> = {};
  const order: string[] = [];
  for (const t of allTopics) {
    if (!bySubject[t.subject]) { bySubject[t.subject] = []; order.push(t.subject); }
    bySubject[t.subject].push(t);
  }
  for (const k of order) bySubject[k].sort((a, b) => b.weight - a.weight);

  const interleaved: DailyTopicItem[] = [];
  let depth = 0;
  while (interleaved.length < totalTopics) {
    let added = false;
    for (const k of order) {
      const arr = bySubject[k];
      if (arr[depth]) { interleaved.push(arr[depth]); added = true; }
    }
    depth++;
    if (!added) break;
  }

  const dailyTopics: DailyTopicItem[] = interleaved.slice(0, pickCount);
  return { duration: durationKey, totalDays, dailyTopics, description };
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
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UPTET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UPTET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UPTET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UPTET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UPTET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UPTET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UPTET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UPTET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UPTET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UPTET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UPTET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UPTET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UPTET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UPTET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UPTET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UPTET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UPTET — 2 Years'),
  },  // SR-BACKFILL-V1,
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
