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

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'phy-001', name: 'Units & Measurement', weight: 4 },
    { id: 'phy-002', name: 'Motion in 1D', weight: 5 },
    { id: 'phy-003', name: 'Motion in 2D', weight: 5 },
    { id: 'phy-004', name: 'Laws of Motion', weight: 5 },
    { id: 'phy-005', name: 'Work Energy Power', weight: 5 },
    { id: 'phy-006', name: 'Rotational Motion', weight: 5 },
    { id: 'phy-007', name: 'Gravitation', weight: 5 },
    { id: 'phy-008', name: 'Mechanical Properties', weight: 4 },
    { id: 'phy-009', name: 'Fluid Mechanics', weight: 4 },
    { id: 'phy-010', name: 'Thermal Properties', weight: 5 },
    { id: 'phy-011', name: 'Thermodynamics', weight: 5 },
    { id: 'phy-012', name: 'Kinetic Theory', weight: 4 },
    { id: 'phy-013', name: 'SHM', weight: 5 },
    { id: 'phy-014', name: 'Waves', weight: 5 },
    { id: 'phy-015', name: 'Electrostatics', weight: 5 },
    { id: 'phy-016', name: 'Capacitance', weight: 5 },
    { id: 'phy-017', name: 'Current Electricity', weight: 5 },
    { id: 'phy-018', name: 'Moving Charges', weight: 5 },
    { id: 'phy-019', name: 'Magnetism', weight: 5 },
    { id: 'phy-020', name: 'EMI', weight: 5 },
    { id: 'phy-021', name: 'AC', weight: 5 },
    { id: 'phy-022', name: 'EM Waves', weight: 4 },
    { id: 'phy-023', name: 'Ray Optics', weight: 5 },
    { id: 'phy-024', name: 'Wave Optics', weight: 5 },
    { id: 'phy-025', name: 'Dual Nature', weight: 5 },
    { id: 'phy-026', name: 'Atoms', weight: 5 },
    { id: 'phy-027', name: 'Nuclei', weight: 5 },
    { id: 'phy-028', name: 'Semiconductors', weight: 4 },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chem-001', name: 'Some Basic Concepts', weight: 5 },
    { id: 'chem-002', name: 'Atomic Structure', weight: 5 },
    { id: 'chem-003', name: 'Chemical Bonding', weight: 5 },
    { id: 'chem-004', name: 'Classification', weight: 4 },
    { id: 'chem-005', name: 'States of Matter', weight: 4 },
    { id: 'chem-006', name: 'Thermodynamics', weight: 5 },
    { id: 'chem-007', name: 'Equilibrium', weight: 5 },
    { id: 'chem-008', name: 'Redox', weight: 5 },
    { id: 'chem-009', name: 'Electrochemistry', weight: 5 },
    { id: 'chem-010', name: 'Kinetics', weight: 5 },
    { id: 'chem-011', name: 'Surface Chemistry', weight: 3 },
    { id: 'chem-012', name: 'Solutions', weight: 5 },
    { id: 'chem-013', name: 'Colloidal', weight: 3 },
    { id: 'chem-014', name: 'Periodic Table', weight: 5 },
    { id: 'chem-015', name: 's-Block', weight: 4 },
    { id: 'chem-016', name: 'p-Block', weight: 5 },
    { id: 'chem-017', name: 'd-Block', weight: 5 },
    { id: 'chem-018', name: 'f-Block', weight: 4 },
    { id: 'chem-019', name: 'Metallurgy', weight: 5 },
    { id: 'chem-020', name: 'Hydrocarbons', weight: 5 },
    { id: 'chem-021', name: 'Haloalkanes', weight: 5 },
    { id: 'chem-022', name: 'Alcohols Phenol Ether', weight: 5 },
    { id: 'chem-023', name: 'Aldehydes Ketones', weight: 5 },
    { id: 'chem-024', name: 'Carboxylic Acids', weight: 5 },
    { id: 'chem-025', name: 'Amines', weight: 5 },
    { id: 'chem-026', name: 'Biomolecules', weight: 4 },
    { id: 'chem-027', name: 'Polymers', weight: 4 },
    { id: 'chem-028', name: 'Environmental Chemistry', weight: 3 },
    { id: 'chem-029', name: 'Coordination Compounds', weight: 5 },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#f59e0b',
  topics: [
    { id: 'math-001', name: 'Sets Relations', weight: 4 },
    { id: 'math-002', name: 'Trigonometry', weight: 5 },
    { id: 'math-003', name: 'Inverse Trig', weight: 4 },
    { id: 'math-004', name: 'Limits', weight: 5 },
    { id: 'math-005', name: 'Continuity', weight: 5 },
    { id: 'math-006', name: 'Differentiability', weight: 5 },
    { id: 'math-007', name: 'Differentiation', weight: 5 },
    { id: 'math-008', name: 'AOD', weight: 5 },
    { id: 'math-009', name: 'Indefinite Integrals', weight: 5 },
    { id: 'math-010', name: 'Definite Integrals', weight: 5 },
    { id: 'math-011', name: 'DE', weight: 5 },
    { id: 'math-012', name: 'Vector Algebra', weight: 5 },
    { id: 'math-013', name: '3D Geometry', weight: 5 },
    { id: 'math-014', name: 'Probability', weight: 5 },
    { id: 'math-015', name: 'Permutations', weight: 5 },
    { id: 'math-016', name: 'Binomial', weight: 5 },
    { id: 'math-017', name: 'Sequences', weight: 5 },
    { id: 'math-018', name: 'Matrices', weight: 5 },
    { id: 'math-019', name: 'Determinants', weight: 5 },
    { id: 'math-020', name: 'Complex Numbers', weight: 5 },
    { id: 'math-021', name: 'Parabola', weight: 5 },
    { id: 'math-022', name: 'Ellipse', weight: 5 },
    { id: 'math-023', name: 'Hyperbola', weight: 5 },
    { id: 'math-024', name: 'Circle', weight: 5 },
    { id: 'math-025', name: 'Straight Lines', weight: 4 },
    { id: 'math-026', name: 'Quadratic Equations', weight: 5 },
    { id: 'math-027', name: 'Progressions', weight: 5 },
    { id: 'math-028', name: 'Mathematical Induction', weight: 4 },
  ]
};

const subjects = [physics, chemistry, mathematics];

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
    { subject: 'Physics', topics: ['Electrostatics', 'Current Electricity', 'EMI', 'Rotational Motion', 'Gravitation', 'Optics'] },
    { subject: 'Chemistry', topics: ['Chemical Bonding', 'Thermodynamics', 'Equilibrium', 'Organic Chemistry', 'Coordination Compounds'] },
    { subject: 'Mathematics', topics: ['Calculus', 'Coordinate Geometry', 'Algebra', 'Vector Algebra', 'Probability'] },
  ],
  strategy: 'Focus on JEE Advanced-specific problem solving. Practice subjective and integer-type questions. Review high-weightage topics.',
};

const exam: ExamTemplate = {
  examId: 'jeeadvanced',
  examName: 'JEE Advanced',
  country: 'india',
  description: `JEE\ Advanced\ is\ the\ second\ stage\ of\ India's\ engineering\ entrance\ exam,\ leading\ to\ admission\ in\ IITs\.\ One\ of\ the\ world's\ toughest\ undergraduate\ exams,\ testing\ deep\ conceptual\ understanding\.`,
  examPattern: `Paper\ 1\ and\ Paper\ 2\ \(both\ mandatory\),\ each\ with\ Physics,\ Chemistry,\ Mathematics\.\ Integer\-type,\ multiple\-correct,\ paragraph\-type\ questions\.\ Variable\ marking\ scheme\.`,
  eligibility: `Must\ be\ among\ top\ 2\.5\ lakh\ rank\ holders\ in\ JEE\ Main\.\ Only\ 2\ attempts\ allowed\ in\ consecutive\ years\.\ Age\ limit:\ under\ 25\ \(30\ for\ SC/ST\)\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://jeeadv.ac.in',
};
export default exam;
