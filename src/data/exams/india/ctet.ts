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
  examId: 'ctet',
  examName: 'CTET',
  country: 'india',
  description: `The Central Teacher Eligibility Test (CTET) is a national-level examination conducted by the Central Board of Secondary Education (CBSE) to determine the eligibility of candidates for appointment as teachers for Classes I to VIII in schools governed by the Central government and schools under the NDMC, as well as schools aided by the central government. CTET is also recognized by many state governments and private schools as a benchmark for teacher recruitment. It assesses a candidate's knowledge of child development, pedagogy, language proficiency, mathematics, and environmental studies.`,
  examPattern: `CTET consists of two papers. Paper I is for candidates aspiring to teach Classes I to V and has five sections: Child Development and Pedagogy (30 questions), Language I (30 questions), Language II (30 questions), Mathematics (30 questions), and Environmental Studies (30 questions). Paper II is for Classes VI to VIII and covers Child Development and Pedagogy (30 questions), Language I (30 questions), Language II (30 questions), Mathematics and Science (60 questions) or Social Studies/Social Science (60 questions). Each paper has 150 MCQs of 1 mark each, to be completed in 150 minutes. There is no negative marking.`,
  eligibility: `For Paper I (Classes I-V): Candidates must have passed Senior Secondary (or its equivalent) with at least 50% marks and must have passed or be appearing in the final year of a 2-year Diploma in Elementary Education (D.El.Ed). For Paper II (Classes VI-VIII): Candidates must have graduation with at least 50% marks and must have passed or be appearing in the final year of a 1-year Bachelor of Education (B.Ed.) programme. Candidates with B.El.Ed., D.El.Ed., and D.Ed. qualifications from various states are also eligible.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CTET — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for CTET — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for CTET — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for CTET — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for CTET — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CTET — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for CTET — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CTET — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for CTET — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CTET — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for CTET — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for CTET — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CTET — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for CTET — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CTET — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CTET — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for CTET — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for CTET — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CTET',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://ctet.nic.in',
};

export default exam;
