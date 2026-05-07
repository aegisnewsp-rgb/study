import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from './types';

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
const verbal: Subject = {
  id: 'verbal', name: 'Verbal Reasoning', color: '#8b5cf6',
  topics: [
    { id: 'vr-001', name: 'Reading Comprehension', weight: 5 },
    { id: 'vr-002', name: 'Text Completion', weight: 4 },
    { id: 'vr-003', name: 'Sentence Equivalence', weight: 4 },
    { id: 'vr-004', name: 'Vocabulary Building', weight: 5 },
    { id: 'vr-005', name: 'Critical Reasoning', weight: 4 },
    { id: 'vr-006', name: 'Para Jumbles', weight: 3 },
    { id: 'vr-007', name: 'Inference', weight: 4 },
    { id: 'vr-008', name: 'Main Idea', weight: 4 },
  ]
};

const quant: Subject = {
  id: 'quant', name: 'Quantitative Reasoning', color: '#10b981',
  topics: [
    { id: 'qr-001', name: 'Arithmetic', weight: 5 },
    { id: 'qr-002', name: 'Algebra', weight: 5 },
    { id: 'qr-003', name: 'Geometry', weight: 4 },
    { id: 'qr-004', name: 'Data Interpretation', weight: 5 },
    { id: 'qr-005', name: 'Number Properties', weight: 4 },
    { id: 'qr-006', name: 'Probability & Statistics', weight: 4 },
    { id: 'qr-007', name: 'Permutations & Combinations', weight: 3 },
    { id: 'qr-008', name: 'Word Problems', weight: 4 },
    { id: 'qr-009', name: 'Comparison Problems', weight: 3 },
    { id: 'qr-010', name: 'Coordinate Geometry', weight: 3 },
  ]
};

const awa: Subject = {
  id: 'awa', name: 'Analytical Writing', color: '#f59e0b',
  topics: [
    { id: 'aw-001', name: 'Issue Essay', weight: 5 },
    { id: 'aw-002', name: 'Argument Essay', weight: 5 },
    { id: 'aw-003', name: 'Structuring Arguments', weight: 4 },
    { id: 'aw-004', name: 'Evidence Integration', weight: 4 },
  ]
};

const subjects = [verbal, quant, awa];

const DURATIONS = ['1h','2h','3h','5h','12h','1d','2d','3d','5d','7d','10d','2w','1mo','2mo','3mo','6mo','1yr','2yr'];
const DUR_MAP: Record<string, {days: number; desc: string}> = {
  // SR-DURMAP-V1 — distinct, feasibility-grounded plan summaries.
  '1h':  { days: 1,   desc: '60-minute exam-eve sprint: only the 4 highest-weight topics, formula-card style.' },
  '2h':  { days: 1,   desc: 'Two-hour priority pass — 6 top-weight topics, one quick example each, no theory deep-dive.' },
  '3h':  { days: 1,   desc: 'Three-hour focus block — 9 highest-yield topics, brief concept + 1-2 worked examples per topic.' },
  '5h':  { days: 1,   desc: 'Five-hour intensive — 12 top-weight topics across all subjects, formula recall + practice questions.' },
  '12h': { days: 1,   desc: 'Half-day crash — 30% syllabus coverage, weight-sorted, ~20 min/topic across all subjects.' },
  '1d':  { days: 1,   desc: 'One-day intensive — top 20% of syllabus by weight, ~25 min/topic, single-pass with quick recall.' },
  '2d':  { days: 2,   desc: 'Two-day rapid revision — 30% coverage, weight-sorted, ~30 min/topic, balanced across subjects.' },
  '3d':  { days: 3,   desc: 'Three-day plan — 40% syllabus coverage, ~30-40 min/topic, includes brief recap each evening.' },
  '5d':  { days: 5,   desc: 'Five-day plan — 55% coverage of weighted topics, ~3 hours/day, room for one mock test on day 5.' },
  '7d':  { days: 7,   desc: 'One-week plan — 70% coverage, ~3-4 hours/day, weight-sorted, two practice sessions over the week.' },
  '10d': { days: 10,  desc: 'Ten-day plan — 85% coverage, ~3 hours/day, daily revision of prior topic, two mocks.' },
  '2w':  { days: 14,  desc: 'Two-week plan — full syllabus, ~3 hours/day, last 2 days for full mocks + revision.' },
  '1mo': { days: 30,  desc: 'One-month plan — full syllabus at ~2-3 topics/day, weekly mocks, last week for revision sprint.' },
  '2mo': { days: 60,  desc: 'Two-month plan — full syllabus + topic-wise practice, alternate-week mocks, dedicated weak-topic sessions.' },
  '3mo': { days: 90,  desc: 'Three-month plan — first month learn, second month practice + mocks, third month revision + mock cycles.' },
  '6mo': { days: 180, desc: 'Six-month plan — foundation phase (8 weeks) + advanced phase (10 weeks) + revision phase (6 weeks).' },
  '1yr': { days: 365, desc: 'One-year plan — full syllabus twice (concept pass + advanced pass), monthly mocks, ~2 hours/day baseline.' },
  '2yr': { days: 730, desc: 'Two-year plan — Year 1 foundation + concept depth, Year 2 advanced + mocks + final revision; ~2 hours/day.' },
};
const durations: Record<string, RoadmapTemplate> = {};
for (const d of DURATIONS) { durations[d] = makeRoadmap(subjects, d, DUR_MAP[d].days, DUR_MAP[d].desc); }

const rescueMode: RescueTemplate = {
  name: 'Last Minute Rescue',
  description: 'High-impact 48-hour sprint on the highest-yield Verbal and Quant topics most likely to boost your score.',
  duration: '2d',
  focusAreas: [
    { subject: 'Verbal Reasoning', topics: ['Reading Comprehension', 'Text Completion', 'Vocabulary Building', 'Critical Reasoning'] },
    { subject: 'Quantitative Reasoning', topics: ['Arithmetic', 'Algebra', 'Data Interpretation', 'Word Problems'] },
    { subject: 'Analytical Writing', topics: ['Issue Essay', 'Argument Essay'] },
  ],
  strategy: 'Focus equally on Verbal and Quant — both scored out of 170. Practice one Issue and one Argument essay. Review common algebra and arithmetic shortcuts.',
};

const exam: ExamTemplate = {
  examId: 'gre',
  examName: 'GRE',
  country: 'india',
  description: 'The Graduate Record Examination is a standardised test widely required for graduate and business school admissions in the US, Canada, Europe, and other countries. Accepted by thousands of universities worldwide.',
  examPattern: 'Two scored Verbal sections (27 questions each) and two scored Quant sections (27 questions each), plus one unmarked experimental section. Analytical Writing: 2 essays (Issue and Argument), 30 minutes each. Scores: Verbal and Quant on a 130-170 scale.',
  eligibility: "No official eligibility criteria. Most Indian and international students with a bachelor's degree take the GRE. Test is computer-delivered year-round at ETS-authorised test centres.",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.ets.org/gre',
};
export default exam;
