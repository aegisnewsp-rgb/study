import type { ExamTemplate, Subject } from '../types';

import { accounting } from './subjects/accounting';
import { taxation } from './subjects/taxation';
import { audit } from './subjects/audit';
import { financial_report } from './subjects/financial-report';

const subjects: Subject[] = [
    accounting,
    taxation,
    audit,
    financial_report,
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
  examId: 'accagl',
  examName: 'ACCA/CA Pakistan',
  country: 'pakistan',
  description: `The ACCA (Association of Chartered Certified Accountants) and CA (Chartered Accountancy) Pakistan qualifications are professional accounting certifications that prepare candidates for careers in audit, taxation, financial management, and advisory services. ACCA is a global professional accounting body offering the ACCA Qualification, while CA Pakistan is the local Chartered Accountancy programme offered by the Institute of Chartered Accountants of Pakistan (ICAP). Both pathways involve passing a series of professional examinations followed by a period of practical experience to become a fully qualified professional.`,
  examPattern: `The ACCA Qualification consists of 13 exams across three levels: Applied Knowledge (3 exams - Business and Technology, Management Accounting, Financial Accounting), Applied Skills (6 exams - Corporate and Business Law, Performance Management, Taxation, Financial Reporting, Audit and Assurance, Financial Management), and Strategic Professional (4 exams - two compulsory Strategic Business Leader and Strategic Business Reporting, plus two optional exams from Advanced Taxation, Advanced Audit and Assurance, Advanced Financial Management, Advanced Performance Management). Each exam is computer-based and can be attempted in any order subject to prerequisites. CA Pakistan consists of multiple examination stages: Foundation, Professional (three stages), and Final.`,
  eligibility: `For ACCA: There are no strict academic entry requirements for the ACCA Qualification - anyone can start with the Foundations Diplomas. For the full ACCA Qualification, candidates typically need two A-levels and three GCSEs (or equivalent) in five separate subjects including English and Mathematics, or a bachelor's degree. For CA Pakistan (ICAP): Candidates must have completed Intermediate (12 years of education) with at least 50% marks or a bachelor's degree. Graduates with 16 years of education can claim exemptions from certain levels. Candidates must also complete three years of practical training under a qualified Chartered Accountant before becoming fully qualified.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for ACCA/CA Pakistan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for ACCA/CA Pakistan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for ACCA/CA Pakistan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for ACCA/CA Pakistan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for ACCA/CA Pakistan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for ACCA/CA Pakistan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for ACCA/CA Pakistan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for ACCA/CA Pakistan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for ACCA/CA Pakistan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for ACCA/CA Pakistan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for ACCA/CA Pakistan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for ACCA/CA Pakistan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for ACCA/CA Pakistan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for ACCA/CA Pakistan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for ACCA/CA Pakistan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for ACCA/CA Pakistan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for ACCA/CA Pakistan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for ACCA/CA Pakistan — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for ACCA/CA Pakistan',
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
