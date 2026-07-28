import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from '../types';


import { makeRoadmap } from '../_lib/roadmap';
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
  prepOverview:
    'UGC NET is two papers: Paper 1 (teaching/research aptitude, common) and Paper 2 (your subject). Phase 1: finish Paper 1 units with short daily drills (Teaching, Research, DI, Reasoning, ICT, Higher Education). Phase 2: subject syllabus map + previous-year clustering for high-frequency units. Phase 3: full mocks matching NTA timing; review wrong Paper 1 items as free marks lost. Do not neglect Research Aptitude and DI — they are predictable scorers. Confirm subjects, pattern and qualifying rules on the live NTA UGC NET notice; use StudyRoadmap roadmaps for week-by-week sequencing.',
  commonMistakes: [
    'Over-studying Paper 2 theory while under-practising Paper 1 DI, reasoning and teaching-aptitude items.',
    'Ignoring previous-year topic frequency and reading textbooks cover-to-cover without timed sets.',
    'Memorising random current affairs instead of higher-education structure, ICT and research ethics units.',
    'Taking untimed quizzes only and never sitting full NTA-length mocks with negative-marking discipline where applicable.',
    'Trusting outdated JRF cut-off posts instead of the current NTA information bulletin.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://ugcnet.nta.nic.in',
};
export default exam;
