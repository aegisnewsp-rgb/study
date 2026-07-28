import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from '../types';


import { makeRoadmap } from '../_lib/roadmap';
const varc: Subject = {
  id: 'varc', name: 'VARC', color: '#3b82f6',
  topics: [
    { id: 'vc-001', name: 'Reading Comprehension', weight: 5, description: 'Comprehending and answering questions from passages on diverse topics including humanities, business, science, and social issues.' },
    { id: 'vc-002', name: 'Verbal Ability', weight: 4, description: 'Contextual usage of words, fill-in-the-blank, and sentence completion based on logical and semantic coherence.' },
    { id: 'vc-003', name: 'Summary', weight: 4, description: 'Identifying the main idea and picking the most accurate summary from multiple options for a given passage.' },
    { id: 'vc-004', name: 'Odd Sentence', weight: 3, description: 'Identifying the sentence that does not logically fit into a paragraph from a set of jumbled sentences.' },
    { id: 'vc-005', name: 'Para Jumbles', weight: 4, description: 'Rearranging jumbled sentences to form a coherent paragraph by identifying logical flow and connectors.' },
    { id: 'vc-006', name: 'Grammar', weight: 4, description: 'Error identification, sentence correction, and application of standard English grammar rules.' },
    { id: 'vc-007', name: 'Vocabulary', weight: 3, description: 'Synonyms, antonyms, contextual meanings, and word usage in high-frequency MBA entrance-level vocabulary.' },
    { id: 'vc-008', name: 'Critical Reasoning', weight: 5, description: 'Evaluating arguments, identifying assumptions, conclusions, and logical flaws in reasoning-based questions.' },
  ]
};

const dilr: Subject = {
  id: 'dilr', name: 'DILR', color: '#10b981',
  topics: [
    { id: 'dl-001', name: 'Data Interpretation Tables', weight: 5, description: 'Extracting and computing values from structured tabular data including schedules, registers, and statistical tables.' },
    { id: 'dl-002', name: 'Data Interpretation Charts', weight: 4, description: 'Reading and interpreting pie charts, bar charts, and mixed chart types to answer calculation-based questions.' },
    { id: 'dl-003', name: 'Data Interpretation Graphs', weight: 4, description: 'Analysing line graphs, radar graphs, and other graph formats for trends and comparative values.' },
    { id: 'dl-004', name: 'Logical Reasoning Arrangements', weight: 5, description: 'Linear and circular seating arrangements, sequencing, and ranking puzzles with multiple conditional constraints.' },
    { id: 'dl-005', name: 'Logical Reasoning Puzzles', weight: 5, description: 'Complex puzzles involving tournaments, team selections, floor arrangements, and binary logic conditions.' },
    { id: 'dl-006', name: 'Blood Relations', weight: 4, description: 'Family tree problems with coded relationship terms, generating accurate conclusions from given connections.' },
    { id: 'dl-007', name: 'Direction', weight: 3, description: 'Direction-based reasoning including distance calculations, turning angles, and cardinal direction changes.' },
    { id: 'dl-008', name: 'Caselets', weight: 4, description: 'Paragraph-based data interpretation where information is embedded in a descriptive passage rather than a chart or table.' },
    { id: 'dl-009', name: 'Data Sufficiency', weight: 4, description: 'Determining whether given statements provide enough information to answer a question without actually solving it.' },
  ]
};

const qa: Subject = {
  id: 'qa', name: 'QA', color: '#f59e0b',
  topics: [
    { id: 'qa-001', name: 'Percentages', weight: 5, description: 'Percentage conversions, successive percentage changes, and applications in profit-loss, SI-CI, and ratio problems.' },
    { id: 'qa-002', name: 'Profit-Loss', weight: 5, description: 'CP-SP relationships, discount and marked price, and gain/loss percentage calculations in business scenarios.' },
    { id: 'qa-003', name: 'Time-Work', weight: 5, description: 'Work equivalence, efficiency-based problems, pipes and cisterns, and work-sharing in partnerships.' },
    { id: 'qa-004', name: 'Time-Distance', weight: 5, description: 'Speed-time-distance relationships, average speed, relative speed, train problems, and boats in streams.' },
    { id: 'qa-005', name: 'Ratio', weight: 4, description: 'Ratio simplification, proportion, direct and inverse variation, and ratio-based mixture and alligation problems.' },
    { id: 'qa-006', name: 'Equations', weight: 5, description: 'Linear and quadratic equations, forming equations from word problems, and simultaneous equation solving.' },
    { id: 'qa-007', name: 'Inequalities', weight: 4, description: 'Quadratic inequalities, modulus inequalities, and number line-based inequality reasoning problems.' },
    { id: 'qa-008', name: 'Functions', weight: 4, description: 'Algebraic functions, domain and range, composite functions, and function graphs for CAT-level questions.' },
    { id: 'qa-009', name: 'Triangles', weight: 5, description: 'Properties of triangles, congruence, similarity, angle bisectors, medians, centroid, and Pythagorean theorem.' },
    { id: 'qa-010', name: 'Circles', weight: 4, description: 'Circle theorems, chords, tangents, arcs, sector areas, and inscribed and circumscribed figures.' },
    { id: 'qa-011', name: 'Coordinate', weight: 4, description: 'Cartesian plane, distance formula, section formula, area of polygons, and collinearity conditions.' },
    { id: 'qa-012', name: 'Logarithms', weight: 3, description: 'Logarithm properties, change of base, and solving equations involving exponential and logarithmic expressions.' },
    { id: 'qa-013', name: 'Permutations', weight: 4, description: 'Fundamental principle of counting, permutations, combinations, and arrangements with restrictions.' },
    { id: 'qa-014', name: 'Probability', weight: 4, description: 'Classical probability, conditional probability, Bayes theorem, and problems on dice, cards, and coins.' },
  ]
};

const subjects = [varc, dilr, qa];

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
    { subject: 'VARC', topics: ['Reading Comprehension', 'Critical Reasoning', 'Para Jumbles', 'Summary'] },
    { subject: 'DILR', topics: ['Data Interpretation Tables', 'Logical Reasoning Puzzles', 'Logical Reasoning Arrangements', 'Caselets'] },
    { subject: 'QA', topics: ['Percentages', 'Profit-Loss', 'Time-Work', 'Time-Distance', 'Equations', 'Triangles'] },
  ],
  strategy: 'Focus on section-wise strategy. Maximize attempts in VARC and DILR. Practice mock tests for time management.',
};

const exam: ExamTemplate = {
  examId: 'cat',
  examName: 'CAT',
  country: 'india',
  description:
    "The Common Admission Test (CAT) is India's flagship MBA/PGP entrance exam, conducted annually by one of the Indian Institutes of Management on a rotating basis. A CAT score is accepted by 20+ IIMs and 100+ non-IIM B-schools for flagship two-year programmes. The computer-based test measures Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), and Quantitative Ability (QA) under strict sectional time limits. Roughly 2.5–3 lakh candidates sit each year for a few thousand top IIM seats, so percentile cut-offs for BLACKI and other top IIMs stay high. Use this hub for pattern, eligibility, section weightage and free day-by-day roadmaps — then confirm registration windows, fees and slot rules only on the official iimcat.ac.in portal for the current cycle.",
  examPattern:
    "Three timed sections in fixed order — VARC, DILR, QA — typically ~66 questions and 120 minutes total (about 40 minutes per section; exact count and minutes are set in that year's information bulletin). Scoring is usually +3 for a correct MCQ, −1 for a wrong MCQ, and 0 for unattempted; non-MCQ (TITA) items generally have no negative marking when offered. Sectional time is locked: you cannot jump sections or carry unused minutes. Scaled scores and percentiles are released after normalisation across slots. Plan mocks with the same three-block timer and practice leaving hard DILR sets early so you still attempt high-confidence QA/VARC items.",
  eligibility:
    "Bachelor's degree (or equivalent) with at least 50% aggregate marks (45% for SC/ST/PwD) from a recognised university or institute, as stated in the CAT information bulletin. Final-year students may apply if they complete degree requirements by the date IIMs notify. There is no upper age limit under the usual CAT rules. Individual IIMs and other B-schools apply their own shortlisting criteria (CAT cut-offs, academics, work experience, diversity) after the exam — a valid CAT score does not guarantee a call. Always re-check category certificates, photo ID and academic mark-sheet rules on the official site before fee payment.",
  prepOverview:
    "Treat CAT as a three-section, accuracy-plus-selection exam — not a full-syllabus school test. Phase 1 (foundation): rebuild arithmetic, algebra, geometry and modern maths basics for QA; daily RC of 2–3 dense passages for VARC; and 1–2 standard LRDI set types (tables, games-tournaments, seating) until set-up is automatic. Phase 2 (selection skill): timed sectionals every 2–3 days; log which question types you skip vs solve in under 2–3 minutes; build a personal 'attempt order' for each section. Phase 3 (simulation): full 120-minute mocks weekly, then twice weekly in the last 6–8 weeks — review for 1.5–2× mock duration focusing on wrong attempts and unforced misses. Weight calendar toward your weakest section without abandoning daily RC. Use StudyRoadmap topic notes for concept refreshers and a free roadmap matched to weeks left; pair with official sample questions and a serious mock series. One structured QA source + one LRDI set bank + daily RC beats collecting ten coaching PDFs.",
  commonMistakes: [
    'Grinding all of QA theory while never timing full VARC or DILR sections under the real 40-minute lock.',
    'Forcing every DILR set instead of abandoning a stuck set within 5–7 minutes and protecting overall percentile.',
    'Treating RC as vocabulary drills and skipping inference-heavy and multi-paragraph critical reasoning practice.',
    'Taking mocks without a written error log (wrong type, silly arithmetic, panic skip) and re-testing the same mistakes.',
    'Assuming last year\'s question count, TITA mix or IIM shortlist cut-offs without opening the current CAT bulletin and each IIM\'s admission policy.',
  ],
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-07-28',
  officialSource: 'https://iimcat.ac.in',
};
export default exam;
