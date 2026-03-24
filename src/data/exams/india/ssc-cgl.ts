export interface Topic { id: string; name: string; weight: 1|2|3|4|5; }
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
    { id: 'rs-001', name: 'Series', weight: 4 },
    { id: 'rs-002', name: 'Analogy', weight: 4 },
    { id: 'rs-003', name: 'Classification', weight: 3 },
    { id: 'rs-004', name: 'Coding', weight: 4 },
    { id: 'rs-005', name: 'Blood Relations', weight: 4 },
    { id: 'rs-006', name: 'Direction', weight: 3 },
    { id: 'rs-007', name: 'Ranking', weight: 3 },
    { id: 'rs-008', name: 'Mirror Images', weight: 3 },
    { id: 'rs-009', name: 'Paper Folding', weight: 3 },
    { id: 'rs-010', name: 'Sitting Arrangements', weight: 5 },
    { id: 'rs-011', name: 'Syllogism', weight: 4 },
    { id: 'rs-012', name: 'Statement Conclusion', weight: 4 },
    { id: 'rs-013', name: 'Calendar', weight: 3 },
    { id: 'rs-014', name: 'Clock', weight: 3 },
    { id: 'rs-015', name: 'Dice', weight: 3 },
    { id: 'rs-016', name: 'Cube', weight: 3 },
  ]
};

const quant: Subject = {
  id: 'quant', name: 'Quantitative Aptitude', color: '#f59e0b',
  topics: [
    { id: 'qa-001', name: 'Percentage', weight: 5 },
    { id: 'qa-002', name: 'Profit Loss', weight: 5 },
    { id: 'qa-003', name: 'Discount', weight: 4 },
    { id: 'qa-004', name: 'Simple Interest', weight: 4 },
    { id: 'qa-005', name: 'Compound Interest', weight: 4 },
    { id: 'qa-006', name: 'Ratio Proportion', weight: 4 },
    { id: 'qa-007', name: 'Time Work', weight: 5 },
    { id: 'qa-008', name: 'Time Distance', weight: 5 },
    { id: 'qa-009', name: 'Average', weight: 4 },
    { id: 'qa-010', name: 'Partnership', weight: 3 },
    { id: 'qa-011', name: 'Number System', weight: 5 },
    { id: 'qa-012', name: 'Algebra', weight: 4 },
    { id: 'qa-013', name: 'Geometry', weight: 4 },
    { id: 'qa-014', name: 'Mensuration', weight: 4 },
    { id: 'qa-015', name: 'Data Interpretation', weight: 5 },
  ]
};

const english: Subject = {
  id: 'english', name: 'English', color: '#8b5cf6',
  topics: [
    { id: 'en-001', name: 'Error Detection', weight: 5 },
    { id: 'en-002', name: 'Fill in Blanks', weight: 4 },
    { id: 'en-003', name: 'Synonyms Antonyms', weight: 3 },
    { id: 'en-004', name: 'One Word', weight: 3 },
    { id: 'en-005', name: 'Idioms', weight: 3 },
    { id: 'en-006', name: 'Cloze Test', weight: 4 },
    { id: 'en-007', name: 'Reading Comprehension', weight: 5 },
    { id: 'en-008', name: 'Para Jumbles', weight: 4 },
    { id: 'en-009', name: 'Sentence Improvement', weight: 4 },
    { id: 'en-010', name: 'Active Passive', weight: 3 },
    { id: 'en-011', name: 'Direct Indirect', weight: 3 },
  ]
};

const awareness: Subject = {
  id: 'awareness', name: 'General Awareness', color: '#10b981',
  topics: [
    { id: 'ga-001', name: 'History', weight: 4 },
    { id: 'ga-002', name: 'Geography', weight: 4 },
    { id: 'ga-003', name: 'Polity', weight: 4 },
    { id: 'ga-004', name: 'Economics', weight: 4 },
    { id: 'ga-005', name: 'General Science', weight: 4 },
    { id: 'ga-006', name: 'Current Affairs', weight: 5 },
    { id: 'ga-007', name: 'Computer', weight: 3 },
    { id: 'ga-008', name: 'Books Authors', weight: 2 },
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
  description: `SSC\ Combined\ Graduate\ Level\ is\ India's\ major\ recruitment\ exam\ for\ Group\ B\ and\ C\ posts\ in\ government\ ministries,\ departments,\ and\ organizations\.\ Covers\ multiple\ posts:\ TA,\ Auditor,\ Junior\ Accountant,\ etc\.`,
  examPattern: `Tier\ 1:\ 100\ MCQs\ \(Reasoning,\ GA,\ Math,\ English\)\ in\ 60\ minutes\.\ Tier\ 2:\ 3\ papers\ \(Math,\ English,\ Statistics/Finance\)\ in\ 120\ minutes\ each\.\ Tier\ 3:\ Descriptive\ \(essay,\ letter\)\ in\ 60\ minutes\.`,
  eligibility: `Bachelor's\ degree\ in\ any\ discipline\ from\ a\ recognized\ university\.\ Age:\ 18\-32\ for\ most\ posts\.\ Various\ relaxations\ for\ reserved\ categories\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://ssc.nic.in',
};
export default exam;
