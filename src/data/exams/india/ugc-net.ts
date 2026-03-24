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

const paper1: Subject = {
  id: 'paper1', name: 'Paper 1 (General)', color: '#3b82f6',
  topics: [
    { id: 'p1-001', name: 'Teaching Aptitude', weight: 5 },
    { id: 'p1-002', name: 'Research Aptitude', weight: 5 },
    { id: 'p1-003', name: 'Communication', weight: 4 },
    { id: 'p1-004', name: 'Reasoning', weight: 4 },
    { id: 'p1-005', name: 'Logical Reasoning', weight: 4 },
    { id: 'p1-006', name: 'Data Interpretation', weight: 5 },
    { id: 'p1-007', name: 'ICT', weight: 4 },
    { id: 'p1-008', name: 'People Environment', weight: 3 },
    { id: 'p1-009', name: 'Higher Education System', weight: 4 },
  ]
};

const subject: Subject = {
  id: 'subject', name: 'Subject (UGC NET)', color: '#10b981',
  topics: [
    { id: 'sub-001', name: 'Research Methodology', weight: 5 },
    { id: 'sub-002', name: 'Subject-Specific Topics', weight: 5 },
    { id: 'sub-003', name: 'Core Concepts', weight: 4 },
    { id: 'sub-004', name: 'Contemporary Issues', weight: 4 },
    { id: 'sub-005', name: 'Theories and Models', weight: 4 },
  ]
};

const subjects = [paper1, subject];

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
    { subject: 'Paper 1 (General)', topics: ['Teaching Aptitude', 'Research Aptitude', 'Data Interpretation', 'Logical Reasoning', 'Communication'] },
    { subject: 'Subject (UGC NET)', topics: ['Research Methodology', 'Subject-Specific Topics', 'Core Concepts'] },
  ],
  strategy: 'Focus on Paper 1 as it is common for all. Master teaching and research aptitude. Practice previous year papers.',
};

const exam: ExamTemplate = {
  examId: 'ugc-net',
  examName: 'UGC NET',
  country: 'india',
  description: `UGC\ NET\ is\ India's\ exam\ for\ determining\ eligibility\ for\ Assistant\ Professor\ and\ Junior\ Research\ Fellowship\.\ Conducted\ by\ NTA\ twice\ yearly,\ testing\ subject\ knowledge\ and\ teaching/research\ aptitude\.`,
  examPattern: `Paper\ 1:\ 50\ MCQs\ on\ Teaching\ Aptitude,\ Research\ Aptitude,\ Comprehension,\ Logical\ Reasoning,\ Data\ Interpretation\.\ Paper\ 2:\ 100\ subject\-specific\ MCQs\.\ 2\ sessions\ of\ 3\ hours\ each\.`,
  eligibility: `Master's\ degree\ with\ 55%\ \(50%\ for\ SC/ST/OBC/PwD\)\.\ AIIMS,\ NIMHANS,\ and\ other\ autonomous\ institute\ NET\ also\ accepted\ for\ lectureship\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://ugcnet.nta.nic.in',
};
export default exam;
