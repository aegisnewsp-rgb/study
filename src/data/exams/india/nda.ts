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

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#3b82f6',
  topics: [
    { id: 'math-001', name: 'Algebra', weight: 5 },
    { id: 'math-002', name: 'Matrices', weight: 4 },
    { id: 'math-003', name: 'Determinants', weight: 4 },
    { id: 'math-004', name: 'Trigonometry', weight: 5 },
    { id: 'math-005', name: 'Analytical Geometry', weight: 5 },
    { id: 'math-006', name: 'Differential Calculus', weight: 5 },
    { id: 'math-007', name: 'Integral Calculus', weight: 5 },
    { id: 'math-008', name: 'Vector Algebra', weight: 4 },
    { id: 'math-009', name: 'Probability', weight: 4 },
    { id: 'math-010', name: 'Statistics', weight: 3 },
    { id: 'math-011', name: 'Logarithms', weight: 3 },
    { id: 'math-012', name: 'Binary Number', weight: 2 },
    { id: 'math-013', name: 'Boolean Algebra', weight: 2 },
  ]
};

const gat: Subject = {
  id: 'gat', name: 'GAT', color: '#10b981',
  topics: [
    { id: 'gat-001', name: 'English Grammar', weight: 4 },
    { id: 'gat-002', name: 'Vocabulary', weight: 4 },
    { id: 'gat-003', name: 'Comprehension', weight: 5 },
    { id: 'gat-004', name: 'General Science Physics', weight: 4 },
    { id: 'gat-005', name: 'General Science Chemistry', weight: 4 },
    { id: 'gat-006', name: 'General Science Biology', weight: 3 },
    { id: 'gat-007', name: 'History', weight: 4 },
    { id: 'gat-008', name: 'Geography', weight: 4 },
    { id: 'gat-009', name: 'Current Affairs', weight: 5 },
    { id: 'gat-010', name: 'Polity', weight: 4 },
  ]
};

const subjects = [mathematics, gat];

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
    { subject: 'Mathematics', topics: ['Algebra', 'Trigonometry', 'Analytical Geometry', 'Differential Calculus', 'Integral Calculus'] },
    { subject: 'GAT', topics: ['Comprehension', 'Current Affairs', 'English Grammar', 'General Science Physics', 'Geography'] },
  ],
  strategy: 'Focus on NDA exam pattern. Strengthen mathematics fundamentals. Stay updated on current affairs for GAT.',
};

const exam: ExamTemplate = {
  examId: 'nda',
  examName: 'NDA',
  country: 'india',
  description: `NDA\ exam\ by\ UPSC\ selects\ candidates\ for\ the\ Indian\ Military\ Academy,\ Naval\ Academy,\ and\ Air\ Force\ Academy\.\ Selected\ candidates\ receive\ rigorous\ military\ training\ combined\ with\ graduation\.`,
  examPattern: `Paper\ 1\ \(Mathematics\):\ 120\ MCQs,\ 150\ marks,\ 2\.5\ hours\.\ Paper\ 2\ \(GAT\):\ 150\ MCQs,\ 150\ marks,\ 2\.5\ hours\.\ SSB\ interview:\ 900\ marks\ after\ qualifying\ Written\ \+\ GAT\.`,
  eligibility: `10\+2\ with\ Physics\ \&\ Mathematics\ for\ Army/Air\ Force\.\ 10\+2\ with\ PCM\ for\ Naval\ Academy\.\ Age:\ 16\.5\-19\.5\ years\.\ Only\ unmarried\ male\ and\ female\ candidates\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://upsc.gov.in',
};
export default exam;
