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

const reasoning: Subject = {
  id: 'reasoning', name: 'Reasoning', color: '#3b82f6',
  topics: [
    { id: 'rs-001', name: 'Series', weight: 4, description: 'Identifying patterns in alphanumeric or numeric sequences to find the missing or next term.' },
    { id: 'rs-002', name: 'Analogy', weight: 4, description: 'Finding relationships between pairs of words, numbers, or figures and applying the same relationship to a new pair.' },
    { id: 'rs-003', name: 'Classification', weight: 3, description: 'Identifying the odd one out from a group based on common properties or characteristics.' },
    { id: 'rs-004', name: 'Coding', weight: 4, description: 'Deciphering letter or number codes using patterns like letter shifting, letter-number mapping, or word coding.' },
    { id: 'rs-005', name: 'Blood Relations', weight: 4, description: 'Solving family tree problems involving siblings, parents, grandparents, and in-laws using coded relationships.' },
    { id: 'rs-006', name: 'Direction', weight: 3, description: 'Problems involving directions, distances travelled, and turning angles from a starting point.' },
    { id: 'rs-007', name: 'Ranking', weight: 3, description: 'Determining positions in a queue, rank from top/bottom, and total number of persons in a sequence.' },
    { id: 'rs-008', name: 'Mirror Images', weight: 3, description: 'Identifying the correct mirror image of a given figure or letter from multiple choices.' },
    { id: 'rs-009', name: 'Paper Folding', weight: 3, description: 'Visualising how a folded paper with cut patterns will look when unfolded.' },
    { id: 'rs-010', name: 'Sitting Arrangements', weight: 5, description: 'Linear and circular seating arrangement problems with conditions on who sits where and adjacent relationships.' },
    { id: 'rs-011', name: 'Syllogism', weight: 4, description: 'Drawing logical conclusions from two or more given statements using Venn diagrams and logical deduction.' },
    { id: 'rs-012', name: 'Statement Conclusion', weight: 4, description: 'Evaluating whether a given conclusion logically follows from the statement(s) provided.' },
    { id: 'rs-013', name: 'Calendar', weight: 3, description: 'Calculating days of the week for given dates and solving problems involving odd days and leap years.' },
    { id: 'rs-014', name: 'Clock', weight: 3, description: 'Problems involving angles between clock hands, time gains/losses, and incorrect clock scenarios.' },
    { id: 'rs-015', name: 'Dice', weight: 3, description: 'Counting visible faces, opposite faces, and probability-related problems with standard dice.' },
    { id: 'rs-016', name: 'Cube', weight: 3, description: 'Problems on painted cubes cut into smaller cubes, counting faces with different colors and edge cases.' },
  ]
};

const quant: Subject = {
  id: 'quant', name: 'Quantitative Aptitude', color: '#f59e0b',
  topics: [
    { id: 'qa-001', name: 'Percentage', weight: 5, description: 'Converting between fractions, decimals, and percentages; percentage increase/decrease; and application in profit-loss and ratio problems.' },
    { id: 'qa-002', name: 'Profit Loss', weight: 5, description: 'Calculating profit/loss amounts and percentages given cost price and selling price, including discount scenarios.' },
    { id: 'qa-003', name: 'Discount', weight: 4, description: 'Successive discounts, equivalent single discount, and relationship between discount percentage and selling price.' },
    { id: 'qa-004', name: 'Simple Interest', weight: 4, description: 'Computing simple interest, principal, rate, time, and amount using the SI formula.' },
    { id: 'qa-005', name: 'Compound Interest', weight: 4, description: 'Difference between simple and compound interest, computing amounts and interest for annual, half-yearly, and quarterly compounding.' },
    { id: 'qa-006', name: 'Ratio Proportion', weight: 4, description: 'Ratio simplification, direct and inverse proportion, and proportion-based word problems.' },
    { id: 'qa-007', name: 'Time Work', weight: 5, description: 'Work-time equivalence, men-days-hours problems, pipes and cisterns, and work efficiency ratios.' },
    { id: 'qa-008', name: 'Time Distance', weight: 5, description: 'Speed, distance, time relationships; average speed; trains, boats in streams; and relative speed problems.' },
    { id: 'qa-009', name: 'Average', weight: 4, description: 'Mean, weighted average, and average speed problems involving groups with different sizes.' },
    { id: 'qa-010', name: 'Partnership', weight: 3, description: 'Profit/loss sharing among partners based on capital contribution and time invested in a business.' },
    { id: 'qa-011', name: 'Number System', weight: 5, description: 'Divisibility rules, HCF/LCM, remainders, squares and cubes, prime numbers, and integer properties.' },
    { id: 'qa-012', name: 'Algebra', weight: 4, description: 'Linear and quadratic equations, identities, surds, indices, and algebraic expressions and identities.' },
    { id: 'qa-013', name: 'Geometry', weight: 4, description: 'Properties of triangles, circles, quadrilaterals, polygons; similarity and congruence; and angle bisector theorems.' },
    { id: 'qa-014', name: 'Mensuration', weight: 4, description: 'Area and perimeter of 2D shapes; surface area and volume of 3D solids including cone, sphere, cylinder, and cuboid.' },
    { id: 'qa-015', name: 'Data Interpretation', weight: 5, description: 'Reading and analysing tables, bar graphs, pie charts, line charts, and mixed charts to answer calculation-based questions.' },
  ]
};

const english: Subject = {
  id: 'english', name: 'English', color: '#8b5cf6',
  topics: [
    { id: 'en-001', name: 'Error Detection', weight: 5, description: 'Identifying grammatical errors in sentences covering subject-verb agreement, tenses, articles, prepositions, and modifiers.' },
    { id: 'en-002', name: 'Fill in Blanks', weight: 4, description: 'Choosing the correct word or phrase to complete a sentence contextually, testing vocabulary and grammar.' },
    { id: 'en-003', name: 'Synonyms Antonyms', weight: 3, description: 'Words with similar and opposite meanings, frequently tested in SSC CGL Tier-1 vocabulary section.' },
    { id: 'en-004', name: 'One Word', weight: 3, description: 'Finding a single word that can substitute a phrase or clause, testing active vocabulary and lexical precision.' },
    { id: 'en-005', name: 'Idioms', weight: 3, description: 'Meaning and appropriate usage of common English idioms and phrases in contextual sentences.' },
    { id: 'en-006', name: 'Cloze Test', weight: 4, description: 'Filling in blanks within a passage using contextual clues, testing vocabulary and coherence.' },
    { id: 'en-007', name: 'Reading Comprehension', weight: 5, description: 'Answering inference, fact, and vocabulary-based questions from unseen passages.' },
    { id: 'en-008', name: 'Para Jumbles', weight: 4, description: 'Rearranging jumbled sentences into a logically coherent paragraph.' },
    { id: 'en-009', name: 'Sentence Improvement', weight: 4, description: 'Selecting the grammatically correct and stylistically appropriate version of a given sentence.' },
    { id: 'en-010', name: 'Active Passive', weight: 3, description: 'Converting sentences between active and passive voice across all tenses.' },
    { id: 'en-011', name: 'Direct Indirect', weight: 3, description: 'Converting direct speech to indirect speech and vice versa, including tense and pronoun changes.' },
  ]
};

const awareness: Subject = {
  id: 'awareness', name: 'General Awareness', color: '#10b981',
  topics: [
    { id: 'ga-001', name: 'History', weight: 4, description: 'Ancient, medieval, and modern Indian history; major freedom movements; and important historical events and dates.' },
    { id: 'ga-002', name: 'Geography', weight: 4, description: 'Indian and world geography including physical features, climate, rivers, minerals, and population demographics.' },
    { id: 'ga-003', name: 'Polity', weight: 4, description: 'Indian Constitution, governance, parliamentary system, fundamental rights, and political institutions.' },
    { id: 'ga-004', name: 'Economics', weight: 4, description: 'Basic economic concepts, Indian economy, government schemes, banking, and fiscal policies.' },
    { id: 'ga-005', name: 'General Science', weight: 4, description: 'Physics, Chemistry, and Biology concepts of Class 10-12 level relevant to SSC examinations.' },
    { id: 'ga-006', name: 'Current Affairs', weight: 5, description: 'Recent national and international events, government policies, awards, summits, and important appointments.' },
    { id: 'ga-007', name: 'Computer', weight: 3, description: 'Fundamentals of computers, MS Office, internet, hardware, software, and basic IT terminology.' },
    { id: 'ga-008', name: 'Books Authors', weight: 2, description: 'Famous literary works and their authors, important books related to Indian culture, history, and freedom struggle.' },
  ]
};

const subjects = [reasoning, quant, english, awareness];

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
    { subject: 'Reasoning', topics: ['Sitting Arrangements', 'Syllogism', 'Coding', 'Series', 'Blood Relations'] },
    { subject: 'Quantitative Aptitude', topics: ['Percentage', 'Profit Loss', 'Time Work', 'Time Distance', 'Number System'] },
    { subject: 'English', topics: ['Error Detection', 'Reading Comprehension', 'Cloze Test', 'Para Jumbles'] },
    { subject: 'General Awareness', topics: ['Current Affairs', 'History', 'Geography', 'Polity'] },
  ],
  strategy: 'Focus on SSC CGL Tier-1 pattern. Practice previous year papers. Speed and accuracy are key.',
};

const exam: ExamTemplate = {
  examId: 'ssc-cgl',
  examName: 'SSC CGL',
  country: 'india',
  description: "The Staff Selection Commission Combined Graduate Level (SSC CGL) exam recruits for Group B and C posts in various ministries/departments of the Government of India. Popular posts include Income Tax Inspector, Assistant Section Officer, Sub-Inspector in CBI, and Statistical Investigator. Conducted in four tiers: Tier-I (online objective), Tier-II (online descriptive), Tier-III (descriptive English/Hindi), Tier-IV (skill test/DEST).",
  examPattern: "Tier-I: 100 MCQs, 2 hours, 200 marks (GA, Math, Reasoning, English). Tier-II: 100 MCQs each for Papers I, II, III, 2 hours each. Tier-III: Descriptive Writing (English/Hindi), 100 marks.",
  eligibility: "Bachelor's degree in any discipline from a recognised university. Age 18-32 for most posts (relaxation for reserved categories).",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://ssc.nic.in',
};
export default exam;
