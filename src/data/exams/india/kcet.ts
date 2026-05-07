import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
    biology,
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
  examId: 'kcet',
  examName: 'KCET',
  country: 'india',
  description: "Karnataka Common Entrance Test (KCET) is the state-level exam for admission to engineering, pharmacy, and other professional courses in Karnataka's government and private colleges. Conducted by KEA, it is mandatory for Karnataka domicile students.",
  examPattern: "180 MCQs: Physics(60), Chemistry(60), Mathematics(60), 1 hour each subject, 60 marks per subject. No negative marking.",
  eligibility: "Class 12 with PCM with minimum 45% aggregate (40% for SC/ST). Karnataka domicile or appropriate category.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for KCET — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for KCET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for KCET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for KCET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for KCET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for KCET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for KCET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for KCET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for KCET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for KCET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for KCET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for KCET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for KCET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for KCET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for KCET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for KCET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for KCET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for KCET — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for KCET',
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
