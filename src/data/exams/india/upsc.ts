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
  description:
    "The UPSC Civil Services Examination (CSE) recruits officers for the IAS, IPS, IFS and other Group A/B central services. The Union Public Service Commission runs a three-stage process each year: Preliminary (screening MCQs), Main (nine descriptive papers) and Personality Test (interview). Roughly ten lakh candidates fill the Prelims form for about one thousand final vacancies, so competition is extreme at every filter. Success depends on syllabus coverage, answer writing, optional-subject depth and consistent current-affairs linkage — not on last-minute compilation PDFs. This hub maps subjects, weightage and free study roadmaps; notification dates, fees and vacancy counts must be verified on upsc.gov.in.",
  examPattern:
    "Prelims: two papers on one day, 2 hours each, 200 marks each. GS Paper I (100 MCQs) counts for merit cut-off; CSAT Paper II (80 MCQs) is qualifying at 33%. Negative marking applies (usually one-third of the marks assigned to a question — confirm the year's notification). Mains: nine papers — two language papers (qualifying), Essay, GS I–IV, and Optional Papers I–II; most merit papers are 250 marks and 3 hours. Personality Test: 275 marks. Final rank uses Mains (written) + interview marks only; Prelims is screening. Build separate skills for MCQ elimination and for 150–250 word structured answers.",
  eligibility:
    "Nationality rules differ slightly by service (IAS/IPS generally require Indian citizenship; other services allow specified categories — read the notification). Age: typically 21–32 years for General on the cut-off date in the notification, with relaxations for OBC, SC/ST, PwBD and certain other categories. Attempts: usually 6 (General), 9 (OBC), unlimited within age for SC/ST — confirm the current rules. Educational qualification: a bachelor's degree from a recognised university (final-year students may apply provisionally as per notification). Number of attempts includes every Prelims appearance where you are admitted to the exam. Always match your category certificates and photo ID to UPSC specifications before applying.",
  prepOverview:
    "Structure CSE prep in layers. Foundation: NCERTs + one standard book per GS pillar (polity, economy, modern history, geography, environment). Daily: newspaper or a reliable current-affairs note tied back to the syllabus, not random scrolling. Prelims phase: PYQs by theme, elimination practice, CSAT weekly if quant/reasoning is weak. Mains phase: outline-first answer writing (introduction–body–way forward), optional subject mastery, and essay practice under time. Interview: DAF-based self-awareness and honest opinion practice. Use a free StudyRoadmap sequence to keep GS topics rotating instead of living only in one optional rabbit hole. Revisit the official syllabus PDF monthly — most wasted effort is off-syllabus content.",
  commonMistakes: [
    'Reading endless current-affairs compilations without linking them to GS syllabus headings.',
    'Delaying answer writing until after "finishing the whole syllabus" once.',
    'Ignoring CSAT until a failed qualifying score ends the attempt.',
    'Choosing an optional based on trends instead of background, interest and available mentorship.',
    'Skipping the official UPSC syllabus and previous-year papers in favour of random telegram channels.',
  ],
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-07-28',
  officialSource: 'https://upsc.gov.in',
  calendarDates: {
    notification: 'February',
    applicationStart: 'February',
    applicationEnd: 'Early March',
    correctionWindow: 'March (7-day window)',
    admitCard: 'May (2-3 weeks before Prelims)',
    examDates: 'May (Prelims) / September (Mains)',
    resultDate: 'June (Prelims) / April (Final)',
  },
};
export default exam;
