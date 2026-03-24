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

const english: Subject = {
  id: 'english', name: 'English', color: '#3b82f6',
  topics: [
    { id: 'en-001', name: 'Vocabulary', weight: 4 },
    { id: 'en-002', name: 'Grammar', weight: 4 },
    { id: 'en-003', name: 'Comprehension', weight: 5 },
    { id: 'en-004', name: 'Para Summary', weight: 4 },
    { id: 'en-005', name: 'Antonyms', weight: 3 },
    { id: 'en-006', name: 'Fill in Blanks', weight: 3 },
  ]
};

const currentAffairs: Subject = {
  id: 'current-affairs', name: 'Current Affairs', color: '#10b981',
  topics: [
    { id: 'ca-001', name: 'National News', weight: 4 },
    { id: 'ca-002', name: 'International News', weight: 4 },
    { id: 'ca-003', name: 'Legal News', weight: 5 },
    { id: 'ca-004', name: 'Static GK', weight: 4 },
  ]
};

const legalReasoning: Subject = {
  id: 'legal-reasoning', name: 'Legal Reasoning', color: '#8b5cf6',
  topics: [
    { id: 'lr-001', name: 'Legal Maxims', weight: 4 },
    { id: 'lr-002', name: 'Principles of Law', weight: 5 },
    { id: 'lr-003', name: 'Case Situations', weight: 5 },
    { id: 'lr-004', name: 'Indian Constitution Articles', weight: 4 },
  ]
};

const logicalReasoning: Subject = {
  id: 'logical-reasoning', name: 'Logical Reasoning', color: '#f59e0b',
  topics: [
    { id: 'lgr-001', name: 'Syllogisms', weight: 5 },
    { id: 'lgr-002', name: 'Logical Sequences', weight: 4 },
    { id: 'lgr-003', name: 'Analogies', weight: 3 },
    { id: 'lgr-004', name: 'Blood Relations', weight: 4 },
    { id: 'lgr-005', name: 'Direction Sense', weight: 3 },
  ]
};

const quantitativeTechniques: Subject = {
  id: 'quantitative-techniques', name: 'Quantitative Techniques', color: '#ef4444',
  topics: [
    { id: 'qt-001', name: 'Arithmetic', weight: 5 },
    { id: 'qt-002', name: 'Algebra', weight: 4 },
    { id: 'qt-003', name: 'Geometry', weight: 4 },
    { id: 'qt-004', name: 'Data Interpretation', weight: 5 },
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
  description: `CLAT\ is\ India's\ national\-level\ law\ entrance\ exam\ for\ admission\ to\ 22\ National\ Law\ Universities\.\ UG\-CLAT\ tests\ legal\ aptitude,\ logic,\ and\ general\ knowledge\ for\ 5\-year\ integrated\ BA\ LLB\ programs\.`,
  examPattern: `120\ MCQs\ in\ 120\ minutes\.\ Sections:\ English\ Language,\ Current\ Affairs\ \(including\ GK\),\ Legal\ Reasoning,\ Logical\ Reasoning,\ Quantitative\ Techniques\.\ 1\ mark\ per\ correct,\ \-0\.25\ per\ wrong\.`,
  eligibility: `10\+2\ or\ equivalent\ with\ minimum\ 45%\ \(40%\ for\ SC/ST\)\.\ Age:\ no\ upper\ limit\ for\ UG\ program\.\ Must\ be\ under\ 20\ for\ General,\ 22\ for\ SC/ST\ \(or\ as\ notified\)\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://consortiumofnlus.ac.in/clat',
};
export default exam;
