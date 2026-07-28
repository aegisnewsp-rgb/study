import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from '../types';


import { makeRoadmap } from '../_lib/roadmap';
const english: Subject = {
  id: 'english', name: 'English', color: '#3b82f6',
  topics: [
    { id: 'en-001', name: 'Vocabulary', weight: 4, description: 'Word meaning, usage, synonyms, antonyms, and contextual vocabulary frequently appearing in law entrance passages.' },
    { id: 'en-002', name: 'Grammar', weight: 4, description: 'English grammar rules including tenses, subject-verb agreement, modifiers, and error identification in sentences.' },
    { id: 'en-003', name: 'Comprehension', weight: 5, description: 'Reading and interpreting unseen passages followed by factual, inferential, and vocabulary-based questions.' },
    { id: 'en-004', name: 'Para Summary', weight: 4, description: 'Identifying the main idea of a passage and selecting the most accurate summary from given options.' },
    { id: 'en-005', name: 'Antonyms', weight: 3, description: 'Words with opposite meanings tested in context within legal, social, and philosophical passages.' },
    { id: 'en-006', name: 'Fill in Blanks', weight: 3, description: 'Completing sentences with contextually appropriate words testing vocabulary and grammatical coherence.' },
  ]
};

const currentAffairs: Subject = {
  id: 'current-affairs', name: 'Current Affairs', color: '#10b981',
  topics: [
    { id: 'ca-001', name: 'National News', weight: 4, description: 'Current events in India covering government policies, appointments, important bills, and national awards.' },
    { id: 'ca-002', name: 'International News', weight: 4, description: 'Important global events, international organisations, treaties, summits, and geopolitical developments.' },
    { id: 'ca-003', name: 'Legal News', weight: 5, description: 'Recent Supreme Court and High Court judgments, new legislation, legal reforms, and significant court orders.' },
    { id: 'ca-004', name: 'Static GK', weight: 4, description: 'Static general knowledge including history, geography, civics, and cultural awareness relevant to legal contexts.' },
  ]
};

const legalReasoning: Subject = {
  id: 'legal-reasoning', name: 'Legal Reasoning', color: '#8b5cf6',
  topics: [
    { id: 'lr-001', name: 'Legal Maxims', weight: 4, description: 'Latin legal maxims and their meanings, frequently tested in CLAT legal reasoning section for application in case situations.' },
    { id: 'lr-002', name: 'Principles of Law', weight: 5, description: 'Fundamental legal principles derived from Torts, Contracts, Criminal Law, and Constitutional Law for application to fact patterns.' },
    { id: 'lr-003', name: 'Case Situations', weight: 5, description: 'Applying legal principles to fact-based scenarios to determine the correct legal outcome or liability.' },
    { id: 'lr-004', name: 'Indian Constitution Articles', weight: 4, description: 'Key articles of the Indian Constitution relevant to fundamental rights, directive principles, and governance.' },
  ]
};

const logicalReasoning: Subject = {
  id: 'logical-reasoning', name: 'Logical Reasoning', color: '#f59e0b',
  topics: [
    { id: 'lgr-001', name: 'Syllogisms', weight: 5, description: 'Logical deduction using Venn diagrams and proposition-based reasoning to draw conclusions from given statements.' },
    { id: 'lgr-002', name: 'Logical Sequences', weight: 4, description: 'Identifying patterns and sequences in number, letter, and figure series and predicting the next element.' },
    { id: 'lgr-003', name: 'Analogies', weight: 3, description: 'Establishing relationships between pairs and applying the same relationship to identify the analogous pair.' },
    { id: 'lgr-004', name: 'Blood Relations', weight: 4, description: 'Solving family tree problems using coded relationship terminology to determine degrees of kinship.' },
    { id: 'lgr-005', name: 'Direction Sense', weight: 3, description: 'Problems involving cardinal directions, distance travelled, and turning angles from a starting reference point.' },
  ]
};

const quantitativeTechniques: Subject = {
  id: 'quantitative-techniques', name: 'Quantitative Techniques', color: '#ef4444',
  topics: [
    { id: 'qt-001', name: 'Arithmetic', weight: 5, description: 'Number system, percentage, ratio-proportion, average, time-work, time-distance, profit-loss, and SI-CI at Class 10 level.' },
    { id: 'qt-002', name: 'Algebra', weight: 4, description: 'Linear and quadratic equations, identities, exponents, and basic algebraic expressions and inequalities.' },
    { id: 'qt-003', name: 'Geometry', weight: 4, description: 'Properties of triangles, circles, quadrilaterals, area and perimeter of plane figures, and basic 3D geometry.' },
    { id: 'qt-004', name: 'Data Interpretation', weight: 5, description: 'Reading and interpreting tables, bar graphs, pie charts, and line graphs to answer calculation-based questions.' },
  ]
};

const subjects = [english, currentAffairs, legalReasoning, logicalReasoning, quantitativeTechniques];

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
    { subject: 'English', topics: ['Comprehension', 'Grammar', 'Para Summary'] },
    { subject: 'Current Affairs', topics: ['Legal News', 'National News', 'Static GK'] },
    { subject: 'Legal Reasoning', topics: ['Principles of Law', 'Case Situations', 'Legal Maxims'] },
    { subject: 'Logical Reasoning', topics: ['Syllogisms', 'Logical Sequences', 'Analogies'] },
    { subject: 'Quantitative Techniques', topics: ['Arithmetic', 'Data Interpretation', 'Geometry'] },
  ],
  strategy: 'Focus on legal reasoning case-based questions. Stay updated on current legal affairs. Practice reading comprehension.',
};

const exam: ExamTemplate = {
  examId: 'clat',
  examName: 'CLAT',
  country: 'india',
  description:
    "The Common Law Admission Test (CLAT) is India's flagship law entrance exam, conducted by the Consortium of National Law Universities for admission to 5-year integrated BA LLB (and related) programmes and 1-year LLM programmes at participating NLUs. A strong CLAT rank is the main gateway to National Law Universities and is also accepted by many private law schools for their flagship programmes. The undergraduate paper is a timed, passage-heavy objective test of English, current affairs including GK, legal reasoning, logical reasoning and quantitative techniques — not a test of prior law-school knowledge. Competition is intense relative to seats at top NLUs, so sectional balance and reading speed matter as much as raw accuracy. Use this hub for pattern, eligibility, section weightage and free day-by-day roadmaps — then confirm registration windows, fees, exam dates and seat matrix only on the official Consortium portal for the current cycle.",
  examPattern:
    "Undergraduate CLAT is typically a 2-hour computer-based test with about 120 multiple-choice questions (exact count is fixed in that year's notification; older cycles used 150). Questions are organised in five areas: English Language, Current Affairs including General Knowledge, Legal Reasoning, Logical Reasoning, and Quantitative Techniques. Scoring is usually +1 for a correct answer and −0.25 for a wrong answer (confirm in the live bulletin). Most items are passage-based: you read a short text, then answer linked questions rather than isolated one-liners. Legal Reasoning tests application of given principles to facts — you are not expected to memorise statutes beforehand. Quantitative Techniques stay at Class 10 arithmetic and data interpretation. Plan mocks with full 120-minute timers and practice finishing long passages without rereading every sentence.",
  eligibility:
    "For the 5-year integrated LLB programmes: Class 12 (or equivalent) from a recognised board with the minimum aggregate percentage stated in the Consortium notice — commonly 45% for General/OBC/PwD and 40% for SC/ST categories (re-verify each year). There is usually no upper age limit under current Consortium rules for UG. For LLM: an LLB or equivalent degree with the aggregate percentage notified for that cycle (often 50% General and 45% reserved categories). Final-year students may apply provisionally if they meet documentary rules by the date the Consortium sets. Nationality, photo ID and certificate rules follow the official brochure. Always re-check category certificates and educational documents against the current CLAT notification before fee payment.",
  prepOverview:
    "Treat CLAT UG as a reading-speed and principle-application exam, not a GK dump or law-memory test. Phase 1 (foundation): daily long-form reading (editorials, judgments summaries, quality news) for English and Current Affairs; Class 10 arithmetic (percentages, ratio, averages, time-work, DI tables) for QT; and basic argument structure for Logical Reasoning. Build a rolling legal-current-affairs notebook (major Supreme Court and High Court themes, new bills, constitutional basics) without trying to memorise bare acts. Phase 2 (section skill): timed passage sets every 2–3 days for Legal and Logical Reasoning; log which passage types cost you time; practise mapping principles to facts in under a minute per question once the principle is clear. Phase 3 (simulation): full-length mocks weekly, then twice weekly in the last 6–8 weeks — review wrong attempts for misread facts, over-legalising, and panic skips. Weight calendar toward your weakest section without dropping daily reading. Use StudyRoadmap topic notes for concept refreshers and a free roadmap matched to weeks left; pair with Consortium sample papers and a serious mock series. One consistent newspaper/editorial habit + one mock series beats ten shallow current-affairs apps.",
  commonMistakes: [
    'Memorising legal maxims and bare acts while under-practising passage-based principle-to-fact application under time pressure.',
    'Treating Current Affairs as random one-liners and ignoring legal news, constitutional themes and quality editorial reading.',
    'Spending disproportionate hours on Quantitative Techniques when Legal and Logical Reasoning carry far more questions and decide rank.',
    'Taking untimed topic quizzes only and never sitting full 2-hour mocks with negative-marking discipline and passage fatigue.',
    'Relying on last year\'s question count, marking scheme or NLU seat matrix instead of the current Consortium of NLUs notification.',
  ],
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-07-28',
  officialSource: 'https://consortiumofnlus.ac.in/clat',
};
export default exam;
