import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from './types';

function makeRoadmap(subjects: Subject[], durationKey: string, totalDays: number, description: string): RoadmapTemplate {
  const allTopics = subjects.flatMap(s => s.topics.map(t => ({ ...t, subject: s.name })));
  const totalTopics = allTopics.length;
  const topicsToCover = Math.min(Math.ceil(totalTopics / totalDays) * 3, totalTopics);
  const selected = allTopics.slice(0, topicsToCover);
  const perDay = Math.ceil(topicsToCover / totalDays);
  return { duration: durationKey, totalDays, dailyTopics: selected.slice(0, perDay), description };
}

const verbal: Subject = {
  id: 'verbal', name: 'Verbal Reasoning', color: '#8b5cf6',
  topics: [
    { id: 'vr-001', name: 'Reading Comprehension', weight: 5 },
    { id: 'vr-002', name: 'Text Completion', weight: 4 },
    { id: 'vr-003', name: 'Sentence Equivalence', weight: 4 },
    { id: 'vr-004', name: 'Vocabulary Building', weight: 5 },
    { id: 'vr-005', name: 'Critical Reasoning', weight: 4 },
    { id: 'vr-006', name: 'Para Jumbles', weight: 3 },
    { id: 'vr-007', name: 'Inference', weight: 4 },
    { id: 'vr-008', name: 'Main Idea', weight: 4 },
  ]
};

const quant: Subject = {
  id: 'quant', name: 'Quantitative Reasoning', color: '#10b981',
  topics: [
    { id: 'qr-001', name: 'Arithmetic', weight: 5 },
    { id: 'qr-002', name: 'Algebra', weight: 5 },
    { id: 'qr-003', name: 'Geometry', weight: 4 },
    { id: 'qr-004', name: 'Data Interpretation', weight: 5 },
    { id: 'qr-005', name: 'Number Properties', weight: 4 },
    { id: 'qr-006', name: 'Probability & Statistics', weight: 4 },
    { id: 'qr-007', name: 'Permutations & Combinations', weight: 3 },
    { id: 'qr-008', name: 'Word Problems', weight: 4 },
    { id: 'qr-009', name: 'Comparison Problems', weight: 3 },
    { id: 'qr-010', name: 'Coordinate Geometry', weight: 3 },
  ]
};

const awa: Subject = {
  id: 'awa', name: 'Analytical Writing', color: '#f59e0b',
  topics: [
    { id: 'aw-001', name: 'Issue Essay', weight: 5 },
    { id: 'aw-002', name: 'Argument Essay', weight: 5 },
    { id: 'aw-003', name: 'Structuring Arguments', weight: 4 },
    { id: 'aw-004', name: 'Evidence Integration', weight: 4 },
  ]
};

const subjects = [verbal, quant, awa];

const DURATIONS = ['1h','2h','3h','5h','12h','1d','2d','3d','5d','7d','10d','2w','1mo','2mo','3mo','6mo','1yr','2yr'];
const DUR_MAP: Record<string, {days: number; desc: string}> = {
  '1h':{days:1,desc:'One-hour speed-run on highest-yield Verbal and Quant topics.'},
  '2h':{days:1,desc:'Two-hour rapid review of critical Verbal and Quant concepts.'},
  '3h':{days:1,desc:'Three-hour focused session on core Verbal and Quant topics.'},
  '5h':{days:1,desc:'Five-hour intensive sprint on highest-weight topics.'},
  '12h':{days:1,desc:'Half-day comprehensive coverage of all three sections.'},
  '1d':{days:1,desc:'One-day intensive covering all GRE sections.'},
  '2d':{days:2,desc:'Two-day rapid revision on high-weight Verbal and Quant.'},
  '3d':{days:3,desc:'Three-day intensive covering all GRE sections.'},
  '5d':{days:5,desc:'Five-day focused prep with Verbal, Quant and AWA practice.'},
  '7d':{days:7,desc:'One-week comprehensive GRE prep.'},
  '10d':{days:10,desc:'Ten-day detailed plan covering all sections.'},
  '2w':{days:14,desc:'Two-week balanced plan with practice essays.'},
  '1mo':{days:30,desc:'One-month comprehensive GRE preparation.'},
  '2mo':{days:60,desc:'Two-month detailed study plan with full practice tests.'},
  '3mo':{days:90,desc:'Three-month extensive prep with mocks and essay practice.'},
  '6mo':{days:180,desc:'Six-month complete prep for a top-percentile score.'},
  '1yr':{days:365,desc:'One-year relaxed prep for deep mastery.'},
  '2yr':{days:730,desc:'Two-year journey for thorough GRE mastery.'},
};
const durations: Record<string, RoadmapTemplate> = {};
for (const d of DURATIONS) { durations[d] = makeRoadmap(subjects, d, DUR_MAP[d].days, DUR_MAP[d].desc); }

const rescueMode: RescueTemplate = {
  name: 'Last Minute Rescue',
  description: 'High-impact 48-hour sprint on the highest-yield Verbal and Quant topics most likely to boost your score.',
  duration: '2d',
  focusAreas: [
    { subject: 'Verbal Reasoning', topics: ['Reading Comprehension', 'Text Completion', 'Vocabulary Building', 'Critical Reasoning'] },
    { subject: 'Quantitative Reasoning', topics: ['Arithmetic', 'Algebra', 'Data Interpretation', 'Word Problems'] },
    { subject: 'Analytical Writing', topics: ['Issue Essay', 'Argument Essay'] },
  ],
  strategy: 'Focus equally on Verbal and Quant — both scored out of 170. Practice one Issue and one Argument essay. Review common algebra and arithmetic shortcuts.',
};

const exam: ExamTemplate = {
  examId: 'gre',
  examName: 'GRE',
  country: 'india',
  description: 'The Graduate Record Examination is a standardised test widely required for graduate and business school admissions in the US, Canada, Europe, and other countries. Accepted by thousands of universities worldwide.',
  examPattern: 'Two scored Verbal sections (27 questions each) and two scored Quant sections (27 questions each), plus one unmarked experimental section. Analytical Writing: 2 essays (Issue and Argument), 30 minutes each. Scores: Verbal and Quant on a 130-170 scale.',
  eligibility: "No official eligibility criteria. Most Indian and international students with a bachelor's degree take the GRE. Test is computer-delivered year-round at ETS-authorised test centres.",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-24',
  officialSource: 'https://www.ets.org/gre',
};
export default exam;
