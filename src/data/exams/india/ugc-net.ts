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

const paper1: Subject = {
  id: 'paper1', name: 'Paper 1 (General)', color: '#3b82f6',
  topics: [
    { id: 'p1-001', name: 'Teaching Aptitude', weight: 5, description: 'Teaching characteristics, methods, styles, evaluation techniques, and factors affecting teaching effectiveness.' },
    { id: 'p1-002', name: 'Research Aptitude', weight: 5, description: 'Research methodology, types of research, research ethics, sampling techniques, and data collection methods.' },
    { id: 'p1-003', name: 'Communication', weight: 4, description: 'Types of communication, barriers, effective communication strategies, and use of media in education.' },
    { id: 'p1-004', name: 'Reasoning', weight: 4, description: 'Verbal and non-verbal reasoning including analogies, classification, series, and pattern recognition.' },
    { id: 'p1-005', name: 'Logical Reasoning', weight: 4, description: 'Deductive and inductive reasoning, logic gates, Venn diagrams, and evaluating arguments and assumptions.' },
    { id: 'p1-006', name: 'Data Interpretation', weight: 5, description: 'Reading tables, charts, graphs, and statistical data to draw meaningful conclusions and make projections.' },
    { id: 'p1-007', name: 'ICT', weight: 4, description: 'Information and Communication Technology fundamentals, internet, e-learning, and digital tools for teaching.' },
    { id: 'p1-008', name: 'People Environment', weight: 3, description: 'Interaction between people and environment, environmental issues, sustainable development, and biodiversity.' },
    { id: 'p1-009', name: 'Higher Education System', weight: 4, description: 'Indian higher education structure, UGC, universities, colleges, autonomous institutions, and regulatory bodies.' },
  ]
};

const subject: Subject = {
  id: 'subject', name: 'Subject (UGC NET)', color: '#10b981',
  topics: [
    { id: 'sub-001', name: 'Research Methodology', weight: 5, description: 'Research design, hypothesis formulation, tools of data collection, statistical analysis, and report writing.' },
    { id: 'sub-002', name: 'Subject-Specific Topics', weight: 5, description: 'In-depth subject knowledge specific to the candidate\'s post-graduation discipline as chosen during application.' },
    { id: 'sub-003', name: 'Core Concepts', weight: 4, description: 'Fundamental theories, principles, and foundational concepts of the candidate\'s academic discipline.' },
    { id: 'sub-004', name: 'Contemporary Issues', weight: 4, description: 'Latest developments, debates, and emerging trends in the candidate\'s academic subject area.' },
    { id: 'sub-005', name: 'Theories and Models', weight: 4, description: 'Major theories, models, and frameworks in the discipline that explain phenomena and guide research.' },
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
  description: "The National Eligibility Test (UGC NET), conducted by NTA, determines eligibility for Assistant Professor and Junior Research Fellowship (JRF) in Indian universities/colleges. One of the largest examinations in the world with over 10 lakh candidates per session. Tests teaching and research aptitude.",
  examPattern: "Two papers (Paper I: 50 questions on teaching/research aptitude, Paper II: 100 questions in the subject), 300 marks total, 3 hours. No negative marking.",
  eligibility: "Master's degree with 55% aggregate (50% for SC/ST/OBC). JRF has additional age limit of 30 years.",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-06',
  officialSource: 'https://ugcnet.nta.nic.in',
};
export default exam;
