import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from '../types';


import { makeRoadmap } from '../_lib/roadmap';
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
  description:
    "The Staff Selection Commission Combined Graduate Level (SSC CGL) exam is a national recruitment test for Group B and C posts across central ministries and departments — including Income Tax Inspector, Assistant Section Officer, Assistant Audit/Accounts Officer, Sub-Inspector (CBI and other agencies), Statistical Investigator and many more. Since the 2022 restructuring it is mainly a two-tier computer-based process: Tier-I (objective screening) and Tier-II (objective Mains with post-specific papers, a qualifying computer module and Data Entry Speed Test where required). The older Tier-III descriptive paper and separate Tier-IV skill tests were folded or discontinued under the new scheme. Hundreds of thousands of graduates compete each cycle; final selection depends on Tier-II performance, post preference, category and document verification. Use this hub for pattern, eligibility, section weightage and free day-by-day roadmaps — confirm vacancies, dates, fees and post codes only on ssc.nic.in for the live notification.",
  examPattern:
    "Tier-I: 100 objective questions in 60 minutes for 200 marks across General Intelligence & Reasoning, General Awareness, Quantitative Aptitude and English Comprehension (25 questions each section in the usual pattern), with 0.50 negative mark per wrong answer. Tier-II: computer-based Mains — Paper-I is compulsory for most posts (maths, reasoning, English, general awareness modules with sectional structure as notified), plus Paper-II/III for Statistical Investigator / JSO and AAO-type posts when advertised. Tier-II typically uses 1 mark negative per wrong answer in scored modules; a Computer Knowledge module is qualifying for many posts, and DEST (data entry) applies where the notice requires it. Exact module marks and time limits are fixed in each year's official notice — plan Tier-I for speed (about 36 seconds per question) and Tier-II for accuracy under longer multi-module sittings.",
  eligibility:
    "Bachelor's degree in any discipline from a recognised university or equivalent as on the date specified in the notice (some posts require specific subjects such as Statistics or Economics — check post-wise essential qualifications). Age limits are post-specific, commonly in the 18–27, 18–30 or 18–32 bands with relaxations for SC/ST/OBC/PwBD/Ex-Servicemen and other categories under government rules. Nationality, character and medical standards follow the SSC notice. There is no fixed attempt limit beyond age and educational eligibility. Always re-verify category certificates, photo ID and educational documents against the current SSC CGL notification before applying.",
  prepOverview:
    "Treat SSC CGL as a high-speed Tier-I filter plus a deeper Tier-II score exam. Phase 1 (foundation): finish arithmetic (percentages, ratio, time-work, SI-CI, mensuration) and core algebra/geometry for Quant; standard reasoning sets (series, coding, seating, syllogism, blood relations); and English grammar + daily RC/error spotting. Build a rolling GA notebook: static (history, polity, geography, economy basics) plus last 6–12 months of current affairs mapped to SSC style. Phase 2 (speed): daily 25–30 minute sectional drills; aim for 80+ safe attempts in Tier-I mocks with accuracy above 85% on attempted questions. Phase 3 (Tier-II readiness): full Paper-I style practice under multi-module timing; revise advanced maths and English comprehension depth; complete computer basics and DEST practice if your target posts need them. Use StudyRoadmap notes for concept refreshers and a free roadmap matched to weeks left; pair with official previous papers from ssc.nic.in archives. One standard Quant book + one Reasoning book + PYQ bank beats ten shallow apps.",
  commonMistakes: [
    'Spending months on advanced Quant while ignoring General Awareness, which can swing Tier-I cut-offs with low time cost.',
    'Practising only untimed topic quizzes and never sitting a full 60-minute Tier-I mock with negative marking discipline.',
    'Skipping Computer Knowledge and DEST until after Tier-I, then failing qualifying modules for preferred posts.',
    'Memorising random current-affairs dumps without revising static GA and previous-year SSC question patterns.',
    'Relying on last year\'s post list, age limits or exam scheme instead of the current SSC CGL official notification.',
  ],
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-07-28',
  officialSource: 'https://ssc.gov.in',
};
export default exam;
