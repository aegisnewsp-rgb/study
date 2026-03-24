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

const gs1: Subject = {
  id: 'gs1', name: 'GS1 (History/Geography/Polity)', color: '#3b82f6',
  topics: [
    { id: 'gs1-001', name: 'World History', weight: 4 },
    { id: 'gs1-002', name: 'Indian History', weight: 5 },
    { id: 'gs1-003', name: 'Post-Independence', weight: 3 },
    { id: 'gs1-004', name: 'Geography World', weight: 4 },
    { id: 'gs1-005', name: 'Geography India', weight: 4 },
    { id: 'gs1-006', name: 'Indian Polity', weight: 5 },
    { id: 'gs1-007', name: 'Physical Geography', weight: 3 },
    { id: 'gs1-008', name: 'Economy', weight: 4 },
    { id: 'gs1-009', name: 'Environment', weight: 3 },
    { id: 'gs1-010', name: 'Science Tech', weight: 3 },
  ]
};

const gs2: Subject = {
  id: 'gs2', name: 'GS2 (Governance/IR)', color: '#10b981',
  topics: [
    { id: 'gs2-001', name: 'Governance', weight: 4 },
    { id: 'gs2-002', name: 'International Relations', weight: 4 },
    { id: 'gs2-003', name: 'Polity', weight: 4 },
    { id: 'gs2-004', name: 'Social Justice', weight: 3 },
  ]
};

const essay: Subject = {
  id: 'essay', name: 'Essay Writing', color: '#8b5cf6',
  topics: [
    { id: 'ess-001', name: 'Essay Writing', weight: 5 },
  ]
};

const optional: Subject = {
  id: 'optional', name: 'Optional Subject', color: '#f59e0b',
  topics: [
    { id: 'opt-001', name: 'General Studies', weight: 5 },
  ]
};

const subjects = [gs1, gs2, essay, optional];

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
    { subject: 'GS1 (History/Geography/Polity)', topics: ['Indian History', 'Indian Polity', 'Geography India', 'Geography World'] },
    { subject: 'GS2 (Governance/IR)', topics: ['Governance', 'International Relations', 'Polity'] },
    { subject: 'Essay Writing', topics: ['Essay Writing'] },
  ],
  strategy: 'Focus on high-weightage GS topics. Practice answer writing. Review current affairs and map-based questions.',
};

const exam: ExamTemplate = {
  examId: 'upsc',
  examName: 'UPSC Civil Services',
  country: 'india',
  description: `UPSC\ Civil\ Services\ Examination\ is\ India's\ most\ prestigious\ exam,\ recruiting\ officers\ for\ IAS,\ IPS,\ IFS,\ and\ 20\+\ other\ services\.\ Three\-stage:\ Prelims,\ Mains,\ Interview\.`,
  examPattern: `Prelims:\ 200\ MCQs\ \(GS\ I\ \+\ CSAT\)\.\ Mains:\ 9\ descriptive\ papers\ \(2\ qualifying:\ English\ \+\ any\ Indian\ language;\ 4\ GS\ papers\ \+\ 2\ optional\ papers\ \+\ Essay\)\.\ Interview:\ 275\ marks\.`,
  eligibility: `Graduation\ in\ any\ discipline\ from\ a\ recognized\ university\.\ Age:\ 21\-32\ \(General\)\.\ 6\ attempts\ permitted\ for\ General\ category\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://upsc.gov.in',
};
export default exam;
