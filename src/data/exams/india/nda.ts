import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from '../types';


import { makeRoadmap } from '../_lib/roadmap';
const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#3b82f6',
  topics: [
    { id: 'math-001', name: 'Algebra', weight: 5, description: 'Sets, relations, functions, quadratic equations, progressions, permutations, combinations, and binomial theorem.' },
    { id: 'math-002', name: 'Matrices', weight: 4, description: 'Types of matrices, matrix operations, transpose, adjoint, and inverse of a matrix using elementary transformations.' },
    { id: 'math-003', name: 'Determinants', weight: 4, description: 'Evaluation of determinants, properties of determinants, and application of Cramer\'s rule in solving linear equations.' },
    { id: 'math-004', name: 'Trigonometry', weight: 5, description: 'Trigonometric ratios, identities, inverse trigonometry, heights and distances, and solution of triangles.' },
    { id: 'math-005', name: 'Analytical Geometry', weight: 5, description: 'Straight lines, conic sections (parabola, ellipse, hyperbola), and their standard equations and properties.' },
    { id: 'math-006', name: 'Differential Calculus', weight: 5, description: 'Limits, continuity, differentiation of standard functions, and applications including tangents and normals.' },
    { id: 'math-007', name: 'Integral Calculus', weight: 5, description: 'Integration of standard functions, definite integrals, and applications to areas under curves.' },
    { id: 'math-008', name: 'Vector Algebra', weight: 4, description: 'Vectors, scalar and vector products, direction cosines, and applications to 3D geometry problems.' },
    { id: 'math-009', name: 'Probability', weight: 4, description: 'Classical and conditional probability, Bayes theorem, and problems on dice, cards, and coins.' },
    { id: 'math-010', name: 'Statistics', weight: 3, description: 'Measures of central tendency, dispersion, and basic statistical data analysis for NDA Paper I.' },
    { id: 'math-011', name: 'Logarithms', weight: 3, description: 'Logarithm properties, change of base, and solving equations involving logarithmic and exponential expressions.' },
    { id: 'math-012', name: 'Binary Number', weight: 2, description: 'Conversion between decimal and binary number systems and basic binary arithmetic operations.' },
    { id: 'math-013', name: 'Boolean Algebra', weight: 2, description: 'Boolean algebra basics, logic gates, and truth tables for digital electronics fundamentals.' },
  ]
};

const gat: Subject = {
  id: 'gat', name: 'GAT', color: '#10b981',
  topics: [
    { id: 'gat-001', name: 'English Grammar', weight: 4, description: 'Parts of speech, tenses, active-passive voice, direct-indirect speech, and error spotting in sentences.' },
    { id: 'gat-002', name: 'Vocabulary', weight: 4, description: 'Synonyms, antonyms, idioms, and word usage in context for NDA GAT English section.' },
    { id: 'gat-003', name: 'Comprehension', weight: 5, description: 'Reading unseen passages and answering factual, inferential, and vocabulary-based questions.' },
    { id: 'gat-004', name: 'General Science Physics', weight: 4, description: 'Laws of motion, gravitation, optics, electricity, magnetism, and modern physics at Class 12 level.' },
    { id: 'gat-005', name: 'General Science Chemistry', weight: 4, description: 'Atomic structure, periodic table, chemical bonding, acids-bases-salts, and environmental chemistry.' },
    { id: 'gat-006', name: 'General Science Biology', weight: 3, description: 'Human biology, nutrition, diseases, genetics, and basics of plant and animal physiology.' },
    { id: 'gat-007', name: 'History', weight: 4, description: 'Indian and world history including ancient civilisations, medieval period, world wars, and independence movements.' },
    { id: 'gat-008', name: 'Geography', weight: 4, description: 'Indian and world geography, physical features, climate, agriculture, resources, and population distribution.' },
    { id: 'gat-009', name: 'Current Affairs', weight: 5, description: 'Recent national and international events, defence-related news, awards, and government policies.' },
    { id: 'gat-010', name: 'Polity', weight: 4, description: 'Indian Constitution, governance structure, Parliament, state legislature, and fundamental rights.' },
  ]
};

const subjects = [mathematics, gat];

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
    { subject: 'Mathematics', topics: ['Algebra', 'Trigonometry', 'Analytical Geometry', 'Differential Calculus', 'Integral Calculus'] },
    { subject: 'GAT', topics: ['Comprehension', 'Current Affairs', 'English Grammar', 'General Science Physics', 'Geography'] },
  ],
  strategy: 'Focus on NDA exam pattern. Strengthen mathematics fundamentals. Stay updated on current affairs for GAT.',
};

const exam: ExamTemplate = {
  examId: 'nda',
  examName: 'NDA',
  country: 'india',
  description: "The National Defence Academy (NDA) exam, conducted by UPSC twice a year, is the gateway for admission to the Indian Army, Navy, and Air Force wings of NDA. Selected candidates undergo 3 years of training at NDA Pune followed by training at respective service academies. The exam tests mathematics and general ability, followed by SSB interview.",
  examPattern: "Paper I Mathematics (300 marks, 2.5 hours), Paper II General Ability Test (600 marks, 2.5 hours). Total: 900 marks. SSB interview: 900 marks.",
  eligibility: "Class 12 passed with Physics and Mathematics for Army/Navy/Air Force. Age 16.5-19.5 years. Only unmarried male and female candidates.",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-06',
  officialSource: 'https://upsc.gov.in',
};
export default exam;
