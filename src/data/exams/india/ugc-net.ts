export interface Topic { id: string; name: string; weight: 1|2|3|4|5; description?: string; }
export interface Subject { id: string; name: string; topics: Topic[]; color: string; }
export interface DailyTopicItem extends Topic { subject: string; }
export interface RoadmapTemplate { duration: string; totalDays: number; dailyTopics: DailyTopicItem[]; description: string; }
export interface RescueTemplate { name: string; description?: string; duration: string; focusAreas: {subject:string;topics:string[]}[]; strategy: string; }
export interface ExamTemplate { examId: string; examName: string; country: 'india'|'pakistan'|'nigeria'; subjects: Subject[]; durations: Record<string, RoadmapTemplate>; rescueMode: RescueTemplate; lastUpdated: string; officialSource: string;
  description?: string;
  examPattern?: string;
  eligibility?: string; }

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
const paper1: Subject = {
  id: 'paper1', name: 'Paper 1 (General)', color: '#3b82f6',
  topics: [
    { id: 'p1-001', name: 'Teaching Aptitude', weight: 5, description: 'Teaching characteristics, methods, styles, evaluation techniques, and factors affecting teaching effectiveness.' },
    { id: 'p1-002', name: 'Research Aptitude', weight: 5, description: 'Research methodology, types of research, research ethics, sampling techniques, and data collection methods.' },
    { id: 'p1-003', name: 'Communication', weight: 4, description: 'Types of communication, barriers, effective communication strategies, and use of media in education.' },
    { id: 'p1-004', name: 'Reasoning', weight: 4, description: 'Verbal and non-verbal reasoning including analogies, classification, series, and pattern recognition.' },
    { id: 'p1-005', name: 'Logical Reasoning', weight: 4, description: 'Deductive and inductive reasoning, logic gates, Venn diagrams, and evaluating arguments and assumptions.' },
    { id: 'p1-006', name: 'Data Interpretation', weight: 5, description: 'Reading tables, charts, graphs, and statistical data to draw meaningful conclusions and make projections.' },
    { id: 'p1-007', name: 'ICT', weight: 4, description: 'Information and Communication Technology fundamentals, internet, e-learning, and digital tools for teaching.' },
    { id: 'p1-008', name: 'People Environment', weight: 3, description: 'Interaction between people and environment, environmental issues, sustainable development, and biodiversity.' },
    { id: 'p1-009', name: 'Higher Education System', weight: 4, description: 'Indian higher education structure, UGC, universities, colleges, autonomous institutions, and regulatory bodies.' },
  ]
};

const subject: Subject = {
  id: 'subject', name: 'Subject (UGC NET)', color: '#10b981',
  topics: [
    { id: 'sub-001', name: 'Research Methodology', weight: 5, description: 'Research design, hypothesis formulation, tools of data collection, statistical analysis, and report writing.' },
    { id: 'sub-002', name: 'Subject-Specific Topics', weight: 5, description: 'In-depth subject knowledge specific to the candidate\'s post-graduation discipline as chosen during application.' },
    { id: 'sub-003', name: 'Core Concepts', weight: 4, description: 'Fundamental theories, principles, and foundational concepts of the candidate\'s academic discipline.' },
    { id: 'sub-004', name: 'Contemporary Issues', weight: 4, description: 'Latest developments, debates, and emerging trends in the candidate\'s academic subject area.' },
    { id: 'sub-005', name: 'Theories and Models', weight: 4, description: 'Major theories, models, and frameworks in the discipline that explain phenomena and guide research.' },
  ]
};

const subjects = [paper1, subject];

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
  description: 'High-impact 48-hour sprint covering only the highest-yield topics most likely to appear in the exam.',
  duration: '2d',
  focusAreas: [
    { subject: 'Paper 1 (General)', topics: ['Teaching Aptitude', 'Research Aptitude', 'Data Interpretation', 'Logical Reasoning', 'Communication'] },
    { subject: 'Subject (UGC NET)', topics: ['Research Methodology', 'Subject-Specific Topics', 'Core Concepts'] },
  ],
  strategy: 'Focus on Paper 1 as it is common for all. Master teaching and research aptitude. Practice previous year papers.',
};

const exam: ExamTemplate = {
  examId: 'ugc-net',
  examName: 'UGC NET',
  country: 'india',
  description: "The National Eligibility Test (UGC NET), conducted by NTA, determines eligibility for Assistant Professor and Junior Research Fellowship (JRF) in Indian universities/colleges. One of the largest examinations in the world with over 10 lakh candidates per session. Tests teaching and research aptitude.",
  examPattern: "Two papers (Paper I: 50 questions on teaching/research aptitude, Paper II: 100 questions in the subject), 300 marks total, 3 hours. No negative marking.",
  eligibility: "Master's degree with 55% aggregate (50% for SC/ST/OBC). JRF has additional age limit of 30 years.",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-06',
  officialSource: 'https://ugcnet.nta.nic.in',
};
export default exam;
