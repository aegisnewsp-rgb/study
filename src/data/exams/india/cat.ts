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
  const allTopics: DailyTopicItem[] = [];
  for (const s of subjects) { for (const t of s.topics) { allTopics.push({ ...t, subject: s.name }); } }
  const totalTopics = allTopics.length;
  const topicsToCover = Math.min(Math.ceil(totalTopics / totalDays) * 3, totalTopics);
  const selected = allTopics.slice(0, topicsToCover);
  const perDay = Math.ceil(topicsToCover / totalDays);
  const dailyTopics: DailyTopicItem[] = selected.slice(0, perDay);
  return { duration: durationKey, totalDays, dailyTopics, description };
}

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
  '1h':{days:1,desc:'One-hour speed-run covering highest-yield topics.'},
  '2h':{days:1,desc:'Two-hour rapid review of must-know concepts.'},
  '3h':{days:1,desc:'Three-hour focused session on critical topics.'},
  '5h':{days:1,desc:'Five-hour intensive sprint for quick learners.'},
  '12h':{days:1,desc:'Half-day comprehensive coverage of fundamentals.'},
  '1d':{days:1,desc:'One-day intensive sprint covering highest-weight topics.'},
  '2d':{days:2,desc:'Two-day rapid revision on high-weight topics.'},
  '3d':{days:3,desc:'Three-day intensive covering core concepts.'},
  '5d':{days:5,desc:'Five-day comprehensive focused preparation.'},
  '7d':{days:7,desc:'One-week intensive covering all major topics.'},
  '10d':{days:10,desc:'Ten-day detailed plan with thorough coverage.'},
  '2w':{days:14,desc:'Two-week balanced plan with revision time.'},
  '1mo':{days:30,desc:'One-month comprehensive preparation plan.'},
  '2mo':{days:60,desc:'Two-month detailed study plan with revision.'},
  '3mo':{days:90,desc:'Three-month extensive prep with mock tests.'},
  '6mo':{days:180,desc:'Six-month complete prep with stronghold building.'},
  '1yr':{days:365,desc:'One-year comprehensive journey to mastery.'},
  '2yr':{days:730,desc:'Two-year relaxed prep for deep understanding.'},
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
  description: "The Common Admission Test (CAT) is India's most competitive management entrance exam, conducted by IIMs for admission to MBA/PGP programmes at 20+ IIMs and 100+ B-schools nationwide. The exam tests quantitative ability, verbal ability, data interpretation, and logical reasoning. Over 2.5 lakh candidates appear annually for ~5,000 seats.",
  examPattern: "3 sections (VA-RC, DILR, QA), 66 questions total, 2 hours, scaled score out of 300. Each correct answer gets 3 marks, 1 mark deducted for wrong answer.",
  eligibility: "Bachelor's degree with minimum 50% aggregate (45% for SC/ST/PwD) from a recognised university. Final year students eligible to apply.",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://iimcat.ac.in',
};
export default exam;
