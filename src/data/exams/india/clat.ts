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
  description: "The Common Law Admission Test (CLAT) is the national-level entrance exam for admission to 22 National Law Universities (NLUs) offering 5-year integrated BA LLB and 1-year LLM programmes. It tests legal reasoning, logical ability, English comprehension, elementary mathematics, and general knowledge.",
  examPattern: "150 MCQs, 2 hours, 150 marks — sections: English (30), GK (25), Legal Reasoning (50), Logical Reasoning (30), Math (15).",
  eligibility: "Class 12 with minimum 45% aggregate (40% for SC/ST). For LLM: LLB degree with 50% aggregate.",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-06',
  officialSource: 'https://consortiumofnlus.ac.in/clat',
};
export default exam;
