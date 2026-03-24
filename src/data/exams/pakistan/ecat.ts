export interface Topic { id: string; name: string; weight: 1|2|3|4|5; }
export interface Subject { id: string; name: string; topics: Topic[]; color: string; }
export interface DailyTopicItem extends Topic { subject: string; }
export interface RoadmapTemplate { duration: string; totalDays: number; dailyTopics: DailyTopicItem[]; description: string; }
export interface RescueTemplate { name: string; description?: string; duration: string; focusAreas: {subject:string;topics:string[]}[]; strategy: string; }
export interface ExamTemplate {
  examId: string; examName: string; country: 'india'|'pakistan'|'nigeria';
  subjects: Subject[]; durations: Record<string, RoadmapTemplate>; rescueMode: RescueTemplate;
  lastUpdated: string; officialSource: string;
  description?: string;
  examPattern?: string;
  eligibility?: string;
}

function makeRoadmap(
  subjects: Subject[],
  durationKey: string,
  totalDays: number,
  description: string
): RoadmapTemplate {
  const allTopics: DailyTopicItem[] = [];
  for (const s of subjects) {
    for (const t of s.topics) {
      allTopics.push({ ...t, subject: s.name });
    }
  }
  const totalTopics = allTopics.length;
  const topicsToCover = Math.min(Math.ceil(totalTopics / totalDays) * 3, totalTopics);
  const selected = allTopics.slice(0, topicsToCover);
  const perDay = Math.ceil(topicsToCover / totalDays);
  const dailyTopics: DailyTopicItem[] = selected.slice(0, perDay);
  return { duration: durationKey, totalDays, dailyTopics, description };
}

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#2563eb',
  topics: [
    { id: 'phy-1', name: 'Measurement and Units', weight: 2 },
    { id: 'phy-2', name: 'Kinematics', weight: 5 },
    { id: 'phy-3', name: "Newton's Laws of Motion", weight: 5 },
    { id: 'phy-4', name: 'Work, Energy and Power', weight: 4 },
    { id: 'phy-5', name: 'Circular Motion and Gravitation', weight: 4 },
    { id: 'phy-6', name: 'Fluid Statics and Dynamics', weight: 3 },
    { id: 'phy-7', name: 'Oscillations and SHM', weight: 4 },
    { id: 'phy-8', name: 'Wave Motion and Sound', weight: 4 },
    { id: 'phy-9', name: 'Heat, Temperature and Thermodynamics', weight: 4 },
    { id: 'phy-10', name: 'Electrostatics and Electric Field', weight: 5 },
    { id: 'phy-11', name: 'Current Electricity and Circuits', weight: 5 },
    { id: 'phy-12', name: 'Magnetic Effects of Current', weight: 4 },
    { id: 'phy-13', name: 'Electromagnetic Induction (EMI)', weight: 4 },
    { id: 'phy-14', name: 'Alternating Current (AC)', weight: 3 },
    { id: 'phy-15', name: 'Geometrical Optics', weight: 5 },
    { id: 'phy-16', name: 'Wave Optics and Interference', weight: 4 },
    { id: 'phy-17', name: 'Modern Physics and Photoelectric Effect', weight: 4 },
    { id: 'phy-18', name: 'Atomic Spectra and Bohr Model', weight: 4 },
    { id: 'phy-19', name: 'Nuclear Physics and Radioactivity', weight: 3 },
    { id: 'phy-20', name: 'Electronics and Semiconductors', weight: 3 },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#059669',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure and Periodic Table', weight: 4 },
    { id: 'chem-2', name: 'Chemical Bonding and Molecular Structure', weight: 5 },
    { id: 'chem-3', name: 'States of Matter (Gases, Liquids, Solids)', weight: 3 },
    { id: 'chem-4', name: 'Stoichiometry and Chemical Calculations', weight: 5 },
    { id: 'chem-5', name: 'Thermochemistry and Energetics', weight: 4 },
    { id: 'chem-6', name: 'Chemical Equilibrium', weight: 4 },
    { id: 'chem-7', name: 'Acids, Bases and Ionic Equilibrium', weight: 4 },
    { id: 'chem-8', name: 'Electrochemistry', weight: 4 },
    { id: 'chem-9', name: 'Chemical Kinetics', weight: 3 },
    { id: 'chem-10', name: 'Periodic Properties and s-Block Elements', weight: 3 },
    { id: 'chem-11', name: 'p-Block Elements', weight: 3 },
    { id: 'chem-12', name: 'Transition Metals and Coordination Chemistry', weight: 3 },
    { id: 'chem-13', name: 'Organic Chemistry: Classification and Nomenclature', weight: 4 },
    { id: 'chem-14', name: 'Alkanes, Alkenes and Alkynes', weight: 4 },
    { id: 'chem-15', name: 'Alcohols, Phenols and Ethers', weight: 3 },
    { id: 'chem-16', name: 'Aldehydes, Ketones and Carboxylic Acids', weight: 4 },
    { id: 'chem-17', name: 'Amines and Nitrogen Compounds', weight: 3 },
    { id: 'chem-18', name: 'Biomolecules and Polymers', weight: 3 },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#d97706',
  topics: [
    { id: 'math-1', name: 'Quadratic Equations and Inequalities', weight: 4 },
    { id: 'math-2', name: 'Sequences, Series and Arithmetic Progression', weight: 4 },
    { id: 'math-3', name: 'Geometric Progression and Binomial Theorem', weight: 4 },
    { id: 'math-4', name: 'Trigonometry: Identities and Equations', weight: 5 },
    { id: 'math-5', name: 'Trigonometry: Solutions of Triangles', weight: 4 },
    { id: 'math-6', name: 'Straight Line and Coordinate Geometry', weight: 4 },
    { id: 'math-7', name: 'Circle, Parabola, Ellipse and Hyperbola', weight: 4 },
    { id: 'math-8', name: 'Limits and Continuity', weight: 4 },
    { id: 'math-9', name: 'Differentiation and Applications', weight: 5 },
    { id: 'math-10', name: 'Integration and Definite Integrals', weight: 5 },
    { id: 'math-11', name: 'Vectors in 2D and 3D', weight: 4 },
    { id: 'math-12', name: 'Matrices and Determinants', weight: 4 },
    { id: 'math-13', name: 'Probability and Permutations', weight: 4 },
    { id: 'math-14', name: 'Statistics and Data Analysis', weight: 3 },
    { id: 'math-15', name: 'Complex Numbers', weight: 3 },
    { id: 'math-16', name: 'Exponential and Logarithmic Functions', weight: 3 },
    { id: 'math-17', name: 'Partial Fractions', weight: 3 },
    { id: 'math-18', name: 'Analytical Geometry: Lines and Conics', weight: 4 },
    { id: 'math-19', name: 'Differential Equations Basics', weight: 3 },
    { id: 'math-20', name: 'Mathematical Induction', weight: 2 },
  ]
};

const english: Subject = {
  id: 'english', name: 'English', color: '#0891b2',
  topics: [
    { id: 'eng-1', name: 'Vocabulary Building', weight: 4 },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3 },
    { id: 'eng-3', name: 'Grammar: Parts of Speech', weight: 4 },
    { id: 'eng-4', name: 'Sentence Structure and Construction', weight: 4 },
    { id: 'eng-5', name: 'Tenses and Their Usage', weight: 4 },
    { id: 'eng-6', name: 'Active and Passive Voice', weight: 3 },
    { id: 'eng-7', name: 'Direct and Indirect Speech', weight: 3 },
    { id: 'eng-8', name: 'Comprehension Passages', weight: 5 },
    { id: 'eng-9', name: 'Spotting Errors', weight: 4 },
    { id: 'eng-10', name: 'Sentence Completion and Fill in the Blanks', weight: 4 },
  ]
};

const subjects = [physics, chemistry, mathematics, english];

const durations: Record<string, RoadmapTemplate> = {
  '1h': makeRoadmap(subjects, '1h', 1, 'One-hour speed-run covering highest-yield topics.'),
  '2h': makeRoadmap(subjects, '2h', 1, 'Two-hour rapid review of must-know concepts.'),
  '3h': makeRoadmap(subjects, '3h', 1, 'Three-hour focused session on critical topics.'),
  '5h': makeRoadmap(subjects, '5h', 1, 'Five-hour intensive sprint for quick learners.'),
  '12h': makeRoadmap(subjects, '12h', 1, 'Half-day comprehensive coverage of fundamentals.'),
  '1d': makeRoadmap(subjects, '1d', 1, 'One-day intensive sprint covering highest-weight topics.'),
  '2d': makeRoadmap(subjects, '2d', 2, 'Two-day rapid revision on high-weight topics.'),
  '3d': makeRoadmap(subjects, '3d', 3, 'Three-day intensive covering core concepts.'),
  '5d': makeRoadmap(subjects, '5d', 5, 'Five-day comprehensive focused preparation.'),
  '7d': makeRoadmap(subjects, '7d', 7, 'One-week intensive covering all major topics.'),
  '10d': makeRoadmap(subjects, '10d', 10, 'Ten-day detailed plan with thorough coverage.'),
  '2w': makeRoadmap(subjects, '2w', 14, 'Two-week balanced plan with revision time.'),
  '1mo': makeRoadmap(subjects, '1mo', 30, 'One-month comprehensive preparation plan.'),
  '2mo': makeRoadmap(subjects, '2mo', 60, 'Two-month detailed study plan with revision.'),
  '3mo': makeRoadmap(subjects, '3mo', 90, 'Three-month extensive prep with mock tests.'),
  '6mo': makeRoadmap(subjects, '6mo', 180, 'Six-month complete prep with stronghold building.'),
  '1yr': makeRoadmap(subjects, '1yr', 365, 'One-year comprehensive journey to mastery.'),
  '2yr': makeRoadmap(subjects, '2yr', 730, 'Two-year relaxed prep for deep understanding.'),
};

const rescueMode: RescueTemplate = {
  name: 'Last Minute Rescue',
  description: 'High-impact 48-hour sprint covering the highest-yield topics most likely to appear.',
  duration: '2d',
  focusAreas: [
    { subject: 'Physics', topics: ['Kinematics', "Newton's Laws of Motion", 'Electrostatics and Electric Field', 'Current Electricity and Circuits', 'Differentiation and Applications', 'Geometrical Optics'] },
    { subject: 'Chemistry', topics: ['Atomic Structure and Periodic Table', 'Chemical Bonding and Molecular Structure', 'Stoichiometry and Chemical Calculations', 'Electrochemistry', 'Organic Chemistry: Classification and Nomenclature', 'Alkanes, Alkenes and Alkynes'] },
    { subject: 'Mathematics', topics: ['Trigonometry: Identities and Equations', 'Differentiation and Applications', 'Integration and Definite Integrals', 'Quadratic Equations and Inequalities', 'Probability and Permutations', 'Vectors in 2D and 3D'] },
    { subject: 'English', topics: ['Comprehension Passages', 'Vocabulary Building', 'Spotting Errors', 'Sentence Structure and Construction', 'Tenses and Their Usage'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'ecat',
  examName: 'ECAT (Engineering College Admission Test)',
  country: 'pakistan',
  description: `ECAT\ \(Engineering\ College\ Admission\ Test\)\ is\ Pakistan's\ test\ for\ engineering\ university\ admissions\.\ Conducted\ by\ UET\ Lahore\ and\ other\ universities,\ it\ covers\ Physics,\ Chemistry,\ Mathematics,\ and\ English\.`,
  examPattern: `100\ MCQs\ \(Mathematics\ 30,\ Physics\ 30,\ Chemistry\ 25,\ English\ 15\)\ to\ be\ completed\ in\ 100\ minutes\.\ Universities\ set\ their\ own\ merit\ calculation\ formula\.`,
  eligibility: `HSSC\ \(Pre\-Engineering\)\ or\ equivalent\ with\ Physics,\ Chemistry,\ Mathematics\.\ Minimum\ 60%\ required\ for\ most\ engineering\ universities\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.ecat.gov.pk',
};

export default exam;
