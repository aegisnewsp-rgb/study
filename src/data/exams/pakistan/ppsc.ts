import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { gk } from './subjects/gk';
import { pakistan_affairs } from './subjects/pakistan-affairs';
import { current_affairs } from './subjects/current-affairs';

const subjects: Subject[] = [
    english,
    gk,
    pakistan_affairs,
    current_affairs,
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
  examId: 'ppsc',
  examName: 'PPSC (Pakistan)',
  country: 'pakistan',
  description: `The Punjab Public Service Commission (PPSC) is a government body that conducts competitive examinations for recruitment to various civil service posts in the Punjab province of Pakistan. PPSC examinations are conducted for positions in the Punjab Superior Judicial Service, Punjab Civil Service (PMS), and various other Group A and B posts in the provincial government. The commission conducts written examinations, interview boards, and other selection procedures to identify qualified candidates for positions such as Deputy Commissioner, Assistant Commissioner, and various provincial secretariat posts.`,
  examPattern: `The PPSC Combined Competitive Examination for Punjab Civil Service (PMS) consists of a written examination followed by an interview. The written examination typically includes: English (Essay, Précis, and Grammar - 100 marks), Urdu (Translation and Essay - 100 marks), General Knowledge (Pakistan Affairs, Islamic Studies, Current Affairs - 100 marks), and Optional Subjects (two papers of 100 marks each selected by the candidate from a list including History, Geography, Political Science, Economics, Sociology, Agriculture, Forestry, and others). Each paper is of 3 hours duration. The interview carries 72 marks. The preliminary examination serves as a screening test, and only qualified candidates appear for the main written examination.`,
  eligibility: `Candidates must be Pakistani nationals with a bachelor's degree (at least second division) from an HEC-recognized university. The age limit is 21-33 years for general category candidates, with relaxations for Punjab government employees, candidates from rural areas, and reserved categories. Candidates must be domiciled in Punjab province. Female candidates and transgender persons are also eligible to apply. Candidates must be of sound mind and body, and must not have been dismissed from government service for misconduct.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for PPSC (Pakistan) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for PPSC (Pakistan) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for PPSC (Pakistan) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for PPSC (Pakistan) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for PPSC (Pakistan) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for PPSC (Pakistan) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for PPSC (Pakistan) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for PPSC (Pakistan) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for PPSC (Pakistan) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for PPSC (Pakistan) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for PPSC (Pakistan) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for PPSC (Pakistan) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for PPSC (Pakistan) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for PPSC (Pakistan) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for PPSC (Pakistan) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for PPSC (Pakistan) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for PPSC (Pakistan) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for PPSC (Pakistan) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for PPSC (Pakistan)',
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
