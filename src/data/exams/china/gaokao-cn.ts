import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
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
  examId: 'gaokao-cn',
  examName: 'Gaokao Science Stream (China)',
  country: 'china',
  description: 'Gaokao Science Stream (理科, Likao) is the science track of China\'s national university entrance examination. This is an alias/specialized variant of the main Gaokao exam for students in the science stream. Science stream students take Physics, Chemistry, and Biology as their combined science paper alongside the mandatory Chinese, Mathematics, and English papers. This stream leads to engineering, medicine, natural sciences, and technology degree programmes at China\'s top universities including Tsinghua, Peking University, Fudan, and Shanghai Jiao Tong.',
  examPattern: 'Combined Science paper (Physics, Chemistry, Biology) worth 300 marks combined: Physics(110 marks), Chemistry(100 marks), Biology(90 marks). This is taken alongside the mandatory Chinese(150), Mathematics(150), and English(150) papers. Total: 750 marks. The science paper is typically 2.5 hours. Questions range from basic recall to complex analytical problems requiring multi-step solutions.',
  eligibility: 'High school graduation certificate (普通高中毕业证书) with science stream background. Students must have studied Physics, Chemistry, and Biology throughout their senior high school years. Minimum age typically 17. Students from mainland China with valid household registration (Hukou). Students from Hong Kong, Macau, and Taiwan follow separate admission procedures through the Mainland College Entrance Examination (聯招).',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Gaokao Science Stream (China) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Gaokao Science Stream (China) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Gaokao Science Stream (China) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Gaokao Science Stream (China) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Gaokao Science Stream (China) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Gaokao Science Stream (China) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Gaokao Science Stream (China) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Gaokao Science Stream (China) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Gaokao Science Stream (China) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Gaokao Science Stream (China) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Gaokao Science Stream (China) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Gaokao Science Stream (China) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Gaokao Science Stream (China) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Gaokao Science Stream (China) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Gaokao Science Stream (China) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Gaokao Science Stream (China) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Gaokao Science Stream (China) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Gaokao Science Stream (China) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Gaokao Science Stream (China)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.neea.edu.cn',
};

export default exam;
