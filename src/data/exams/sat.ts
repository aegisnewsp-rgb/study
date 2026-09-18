import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from './types';

import { makeRoadmap } from './_lib/roadmap';

// SAT — College Board college-readiness assessment administered internationally.
// Real, weighted subjects mapped to the three College Board sections plus the
// optional Essay.

const reading: Subject = {
  id: 'reading',
  name: 'Evidence-Based Reading',
  color: '#3b82f6',
  topics: [
    { id: 'rd-001', name: 'Reading Comprehension Passages', weight: 5, description: 'Long and paired short passages across literature, history, social science, science.' },
    { id: 'rd-002', name: 'Inference & Implicit Meaning', weight: 5, description: 'Reading between the lines, drawing conclusions, textual evidence.' },
    { id: 'rd-003', name: 'Main Idea & Theme', weight: 5, description: 'Identifying central argument and theme across passages.' },
    { id: 'rd-004', name: 'Vocabulary in Context', weight: 4, description: 'Word meaning derived from context clues.' },
    { id: 'rd-005', name: 'Author Technique & Purpose', weight: 4, description: 'Tone, rhetorical strategy, point of view.' },
    { id: 'rd-006', name: 'Command of Evidence', weight: 4, description: 'Citing paired evidence, supporting claims with textual proof.' },
  ],
};

const writing: Subject = {
  id: 'writing',
  name: 'Writing & Language',
  color: '#ef4444',
  topics: [
    { id: 'wr-001', name: 'Grammar & Conventions', weight: 5, description: 'Subject-verb agreement, tense, pronouns, modifiers.' },
    { id: 'wr-002', name: 'Punctuation', weight: 4, description: 'Commas, semicolons, colons, dashes, apostrophes.' },
    { id: 'wr-003', name: 'Sentence Structure', weight: 4, description: 'Run-ons, fragments, parallel structure, concision.' },
    { id: 'wr-004', name: 'Development & Organization', weight: 4, description: 'Adding, deleting, combining, reordering for clarity.' },
    { id: 'wr-005', name: 'Effective Language Use', weight: 4, description: 'Word choice, style, tone, precision.' },
    { id: 'wr-006', name: 'Transitions & Logic', weight: 3, description: 'Cohesion, logical sequence, addition vs. contrast.' },
    { id: 'wr-007', name: 'Passage Editing Strategies', weight: 3, description: 'Reading the full passage before changing anything.' },
  ],
};

const math: Subject = {
  id: 'math',
  name: 'Math',
  color: '#10b981',
  topics: [
    { id: 'mt-001', name: 'Heart of Algebra', weight: 5, description: 'Linear equations, systems, inequalities, functions.' },
    { id: 'mt-002', name: 'Problem Solving & Data Analysis', weight: 5, description: 'Ratios, percentages, rates, tables, scatterplots.' },
    { id: 'mt-003', name: 'Passport to Advanced Math', weight: 5, description: 'Quadratics, polynomials, exponential functions.' },
    { id: 'mt-004', name: 'Additional Topics in Math', weight: 4, description: 'Geometry, trigonometry, complex numbers.' },
    { id: 'mt-005', name: 'Algebraic Manipulation', weight: 4, description: 'Factoring, expanding, solving, completing the square.' },
    { id: 'mt-006', name: 'Graphs & Coordinate Geometry', weight: 4, description: 'Interpreting and drawing graphs, slope, transformations.' },
    { id: 'mt-007', name: 'Word Problem Translation', weight: 4, description: 'Turning English into equations.' },
    { id: 'mt-008', name: 'Probability & Statistics', weight: 3, description: 'Mean, median, standard deviation, conditional probability.' },
  ],
};

const subjects = [reading, writing, math];

const DURATIONS = ['1h','2h','3h','5h','12h','1d','2d','3d','5d','7d','10d','2w','1mo','2mo','3mo','6mo','1yr','2yr'];
const DUR_MAP: Record<string, {days: number; desc: string}> = {
  '1h':  { days: 1,   desc: '60-minute exam-eve triage: highest-yield Reading inference, Grammar agreement, Heart of Algebra items.' },
  '2h':  { days: 1,   desc: 'Two-hour priority pass — top 6 sections by weight, one quick drill set per topic.' },
  '3h':  { days: 1,   desc: 'Three-hour focus block — 9 highest-yield SAT topic areas, timed mini-sets.' },
  '5h':  { days: 1,   desc: 'Five-hour intensive — 12 top-weight topics across Reading, Writing, Math, with official-format questions.' },
  '12h': { days: 1,   desc: 'Half-day crash — ~30% of the weighted syllabus, 20 min/topic across all sections.' },
  '1d':  { days: 1,   desc: 'One-day intensive — top 20% by weight, 25 min/topic, single-pass with quick recall questions.' },
  '2d':  { days: 2,   desc: 'Two-day rapid revision — 30% coverage, weight-sorted, balanced across Reading, Writing, Math.' },
  '3d':  { days: 3,   desc: 'Three-day plan — 40% syllabus, 30-40 min/topic, brief recap each evening.' },
  '5d':  { days: 5,   desc: 'Five-day plan — 55% coverage of weighted topics, ~3 hours/day, one mini mock on day 5.' },
  '7d':  { days: 7,   desc: 'One-week plan — 70% coverage, 3-4 hours/day, two practice tests over the week.' },
  '10d': { days: 10,  desc: 'Ten-day plan — 85% coverage, ~3 hours/day, daily revision of prior topic, two practice tests.' },
  '2w':  { days: 14,  desc: 'Two-week plan — full syllabus, ~3 hours/day, last 2 days for full mock + error review.' },
  '1mo': { days: 30,  desc: 'One-month plan — full syllabus at ~2-3 topics/day, weekly practice tests, final week revision sprint.' },
  '2mo': { days: 60,  desc: 'Two-month plan — full syllabus + topic-wise practice, alternate-week practice tests, weak-topic sessions.' },
  '3mo': { days: 90,  desc: 'Three-month plan — first month content, second month practice + tests, third month revision + mock cycles.' },
  '6mo': { days: 180, desc: 'Six-month plan — foundation phase (8 weeks) + advanced phase (10 weeks) + revision phase (6 weeks).' },
  '1yr': { days: 365, desc: 'One-year plan — full syllabus twice (concept pass + advanced pass), monthly practice tests, ~2 hours/day baseline.' },
  '2yr': { days: 730, desc: 'Two-year plan — Year 1 foundation + concept depth, Year 2 advanced + mocks + final revision; ~2 hours/day.' },
};
const durations: Record<string, RoadmapTemplate> = {};
for (const d of DURATIONS) { durations[d] = makeRoadmap(subjects, d, DUR_MAP[d].days, DUR_MAP[d].desc); }

const rescueMode: RescueTemplate = {
  name: 'Last Minute Rescue',
  description: 'High-impact 48-hour sprint on the highest-yield SAT topics most likely to appear on test day.',
  duration: '2d',
  focusAreas: [
    { subject: 'Evidence-Based Reading', topics: ['Reading Comprehension Passages', 'Inference & Implicit Meaning', 'Vocabulary in Context'] },
    { subject: 'Math', topics: ['Heart of Algebra', 'Problem Solving & Data Analysis', 'Passport to Advanced Math'] },
    { subject: 'Writing & Language', topics: ['Grammar & Conventions', 'Punctuation', 'Sentence Structure'] },
  ],
  strategy: 'Prioritise Heart of Algebra and Reading Comprehension — heaviest and most-skip-prone sections. Drill official-format questions only; skip third-party materials that drift from the College Board style. Review the most-missed grammar rules (subject-verb agreement, comma usage).',
};

const exam: ExamTemplate = {
  examId: 'sat',
  examName: 'SAT',
  country: 'india',
  description: 'The SAT is a college-readiness assessment administered by the College Board and accepted by universities in the US, Canada, and increasingly internationally. The current digital SAT (launched 2023-2024 internationally, fully transitioned from paper) is shorter than the legacy test, adaptive at the section level, and scored on a 400-1600 scale. The optional Essay was retired in 2021.',
  examPattern: 'Two sections on the digital SAT: (1) Reading and Writing combined, 64 questions, 70 minutes, adaptive across two 32-question modules; (2) Math, 44 questions, 70 minutes, adaptive across two 22-question modules. Total seat-time ~2 hours 14 minutes with breaks. Scores: Evidence-Based Reading and Writing (200-800) + Math (200-800) = composite 400-1600. Most questions are multiple choice with one grid-in Math response per section.',
  eligibility: "No formal eligibility criteria — students typically take the SAT in 11th or 12th grade (ages 15-19). International candidates can register through the College Board website; test centres are available in 175+ countries. There is no prerequisite coursework, no minimum age, and no limit on retakes. Some colleges superscore or require the SAT for admissions; check each school\'s current policy.",
  subjects,
  durations,
  rescueMode,
  prepOverview:
    'SAT preparation works best in three phases: (1) map the Reading and Writing topics and the four Math domains from the official College Board test specifications, (2) finish high-weight topics with official Khan Academy and College Board practice sets and an error log, (3) sit full-length adaptive practice tests matching the official digital format and timing. Use StudyRoadmap free roadmaps and topic notes for day-level sequencing. Always re-check registration windows, fees, eligibility and pattern on https://satsuite.collegeboard.org/ for the current cycle — the paper SAT was retired and the format is now digital and adaptive.',
  commonMistakes: [
    'Practising on outdated paper-SAT PDFs instead of the current digital, adaptive format.',
    'Ignoring the section-adaptive structure — Module 2 difficulty depends on Module 1 performance.',
    'Treating Reading and Math as equal — Math carries 800 points (half the composite) and is the most-skip-prone.',
    'No written error log — repeating the same mistake types across practice tests.',
    'Treating unofficial "SAT score predictor" results as guarantees. Only the official College Board score is reported to colleges.'
  ],
  lastUpdated: '2026-09-17',
  officialSource: 'https://satsuite.collegeboard.org/',
};
export default exam;
