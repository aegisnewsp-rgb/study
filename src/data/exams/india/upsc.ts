import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from '../types';


import { makeRoadmap } from '../_lib/roadmap';
const gs1: Subject = {
  id: 'gs1', name: 'GS1 (History/Geography/Polity)', color: '#3b82f6',
  topics: [
    { id: 'gs1-001', name: 'World History', weight: 4, description: 'Major historical events, revolutions, world wars, and colonial histories that shaped modern nations and global relations.' },
    { id: 'gs1-002', name: 'Indian History', weight: 5, description: 'Ancient, medieval, and modern Indian history including the freedom struggle, cultural heritage, and significant movements.' },
    { id: 'gs1-003', name: 'Post-Independence', weight: 3, description: 'India\'s political development, constitution-making, and major events from 1947 to the present.' },
    { id: 'gs1-004', name: 'Geography World', weight: 4, description: 'World geography including continents, countries, physical features, climate patterns, and resource distribution.' },
    { id: 'gs1-005', name: 'Geography India', weight: 4, description: 'India\'s physical geography, climate, rivers, mountains, and regional variations in environment and resources.' },
    { id: 'gs1-006', name: 'Indian Polity', weight: 5, description: 'Indian Constitution, governance structure, parliamentary system, fundamental rights, and political institutions.' },
    { id: 'gs1-007', name: 'Physical Geography', weight: 3, description: 'Earth\'s physical processes including plate tectonics, landforms, ocean currents, and atmospheric phenomena.' },
    { id: 'gs1-008', name: 'Economy', weight: 4, description: 'Indian economic structure, planning, fiscal policy, banking, and major economic reforms and challenges.' },
    { id: 'gs1-009', name: 'Environment', weight: 3, description: 'Ecology, biodiversity, environmental conservation, climate change, and sustainable development issues.' },
    { id: 'gs1-010', name: 'Science Tech', weight: 3, description: 'Key scientific discoveries, modern technologies, space programme, and India\'s achievements in science.' },
  ]
};

const gs2: Subject = {
  id: 'gs2', name: 'GS2 (Governance/IR)', color: '#10b981',
  topics: [
    { id: 'gs2-001', name: 'Governance', weight: 4, description: 'Government policies, transparency, accountability, e-governance initiatives, and public service delivery mechanisms.' },
    { id: 'gs2-002', name: 'International Relations', weight: 4, description: 'India\'s foreign policy, diplomatic relations, international agreements, and global geopolitics affecting India.' },
    { id: 'gs2-003', name: 'Polity', weight: 4, description: 'Constitutional framework, governance structures, political institutions, and their functioning at central and state levels.' },
    { id: 'gs2-004', name: 'Social Justice', weight: 3, description: 'Welfare schemes, affirmative action, rights of marginalised groups, and social inclusion policies.' },
  ]
};

const essay: Subject = {
  id: 'essay', name: 'Essay Writing', color: '#8b5cf6',
  topics: [
    { id: 'ess-001', name: 'Essay Writing', weight: 5, description: 'Structured essay writing on philosophical, social, economic, and political topics testing depth of knowledge and expression.' },
  ]
};

const optional: Subject = {
  id: 'optional', name: 'Optional Subject', color: '#f59e0b',
  topics: [
    { id: 'opt-001', name: 'General Studies', weight: 5, description: 'Elective subject chosen by candidate from a list of 26 optional subjects including literature, science, and social sciences.' },
  ]
};

const subjects = [gs1, gs2, essay, optional];

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
    { subject: 'GS1 (History/Geography/Polity)', topics: ['Indian History', 'Indian Polity', 'Geography India', 'Geography World'] },
    { subject: 'GS2 (Governance/IR)', topics: ['Governance', 'International Relations', 'Polity'] },
    { subject: 'Essay Writing', topics: ['Essay Writing'] },
  ],
  strategy: 'Focus on high-weightage GS topics. Practice answer writing. Review current affairs and map-based questions.',
};

const exam: ExamTemplate = {
  examId: 'upsc',
  examName: 'UPSC Civil Services',
  country: 'india',
  description: "The Union Public Service Commission (UPSC) Civil Services Examination is India's most prestigious competitive exam for recruiting officers for the Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), and other central services. Conducted in three stages: Preliminary (objective MCQs), Main (nine descriptive papers), and Interview. Over 10 lakh candidates appear annually for ~1,000 vacancies.",
  examPattern: "Preliminary: 2 papers (GS I + CSAT), 200 marks each, 2 hours each. Main: 9 papers (Essay, GS I-IV, Optional I-II, Language), 250-300 marks each, 3 hours each. Interview: 275 marks.",
  eligibility: "Indian citizen, age 21-32 (relaxation for OBC/SC/ST), minimum educational qualification: bachelor's degree in any discipline.",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-06',
  officialSource: 'https://upsc.gov.in',
};
export default exam;
