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

const english: Subject = {
  id: 'english', name: 'English Language', color: '#2563eb',
  topics: [
    { id: 'eng-1', name: 'Reading Comprehension', weight: 5 },
    { id: 'eng-2', name: 'Vocabulary and Usage', weight: 4 },
    { id: 'eng-3', name: 'Grammar: Tenses and Agreement', weight: 4 },
    { id: 'eng-4', name: 'Sentence Structure', weight: 4 },
    { id: 'eng-5', name: 'Active and Passive Voice', weight: 3 },
    { id: 'eng-6', name: 'Direct and Indirect Speech', weight: 3 },
    { id: 'eng-7', name: 'Paragraph and Essay Writing', weight: 4 },
    { id: 'eng-8', name: 'Letter Writing', weight: 3 },
    { id: 'eng-9', name: 'Lexis and Structure', weight: 4 },
    { id: 'eng-10', name: 'Prepositions and Conjunctions', weight: 3 },
    { id: 'eng-11', name: 'Summary Writing', weight: 4 },
    { id: 'eng-12', name: 'Idioms and Figurative Expressions', weight: 3 },
    { id: 'eng-13', name: 'Pronouns and Antecedent Agreement', weight: 3 },
    { id: 'eng-14', name: 'Comprehension: Inference', weight: 4 },
    { id: 'eng-15', name: 'Business Correspondence Basics', weight: 3 },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#059669',
  topics: [
    { id: 'math-1', name: 'Number Systems and Bases', weight: 4 },
    { id: 'math-2', name: 'Fractions, Decimals and Percentages', weight: 4 },
    { id: 'math-3', name: 'Indices and Logarithms', weight: 4 },
    { id: 'math-4', name: 'Algebra: Expressions and Equations', weight: 5 },
    { id: 'math-5', name: 'Quadratic Equations', weight: 4 },
    { id: 'math-6', name: 'Simultaneous Equations', weight: 4 },
    { id: 'math-7', name: 'Geometry: Angles and Triangles', weight: 5 },
    { id: 'math-8', name: 'Circle Theorems', weight: 4 },
    { id: 'math-9', name: 'Trigonometry: Ratios and Graphs', weight: 5 },
    { id: 'math-10', name: 'Coordinate Geometry', weight: 4 },
    { id: 'math-11', name: 'Calculus: Differentiation', weight: 5 },
    { id: 'math-12', name: 'Calculus: Integration', weight: 5 },
    { id: 'math-13', name: 'Statistics: Mean, Median, Mode', weight: 4 },
    { id: 'math-14', name: 'Probability', weight: 4 },
    { id: 'math-15', name: 'Mensuration: Areas and Volumes', weight: 4 },
  ]
};

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#d97706',
  topics: [
    { id: 'phy-1', name: 'Measurements and Units', weight: 3 },
    { id: 'phy-2', name: 'Kinematics and Graphical Analysis', weight: 5 },
    { id: 'phy-3', name: "Newton's Laws of Motion", weight: 5 },
    { id: 'phy-4', name: 'Work, Energy and Power', weight: 5 },
    { id: 'phy-5', name: 'Heat and Temperature', weight: 4 },
    { id: 'phy-6', name: 'Waves and Sound', weight: 4 },
    { id: 'phy-7', name: 'Light: Reflection and Refraction', weight: 5 },
    { id: 'phy-8', name: 'Optical Instruments', weight: 4 },
    { id: 'phy-9', name: 'Electrostatics and Capacitors', weight: 5 },
    { id: 'phy-10', name: 'Electric Current and Circuits', weight: 5 },
    { id: 'phy-11', name: 'Magnetic Field and Electromagnetism', weight: 4 },
    { id: 'phy-12', name: 'Electromagnetic Induction', weight: 4 },
    { id: 'phy-13', name: 'Photoelectric Effect and Atomic Physics', weight: 4 },
    { id: 'phy-14', name: 'Radioactivity and Nuclear Physics', weight: 4 },
    { id: 'phy-15', name: 'Simple Harmonic Motion', weight: 4 },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#7c3aed',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure and Bonding', weight: 5 },
    { id: 'chem-2', name: 'Periodic Table', weight: 4 },
    { id: 'chem-3', name: 'Stoichiometry', weight: 5 },
    { id: 'chem-4', name: 'States of Matter and Gas Laws', weight: 4 },
    { id: 'chem-5', name: 'Thermochemistry', weight: 4 },
    { id: 'chem-6', name: 'Chemical Equilibrium', weight: 4 },
    { id: 'chem-7', name: 'Acids, Bases and Salts', weight: 5 },
    { id: 'chem-8', name: 'Electrochemistry', weight: 4 },
    { id: 'chem-9', name: 'Organic Chemistry: Hydrocarbons', weight: 5 },
    { id: 'chem-10', name: 'Alcohols and Carboxylic Acids', weight: 4 },
    { id: 'chem-11', name: 'Aldehydes, Ketones and Esters', weight: 4 },
    { id: 'chem-12', name: 'Amines and Polymers', weight: 3 },
    { id: 'chem-13', name: 'Separation Techniques', weight: 3 },
    { id: 'chem-14', name: 'Chemical Kinetics', weight: 4 },
    { id: 'chem-15', name: 'Environmental Chemistry', weight: 3 },
  ]
};

const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#dc2626',
  topics: [
    { id: 'bio-1', name: 'Cell Structure and Functions', weight: 5 },
    { id: 'bio-2', name: 'Cell Division', weight: 4 },
    { id: 'bio-3', name: 'Enzymes and Metabolism', weight: 5 },
    { id: 'bio-4', name: 'Nutrition', weight: 4 },
    { id: 'bio-5', name: 'Respiration and Gaseous Exchange', weight: 5 },
    { id: 'bio-6', name: 'Transport in Living Things', weight: 5 },
    { id: 'bio-7', name: 'Excretion and Homeostasis', weight: 4 },
    { id: 'bio-8', name: 'Coordination and Nervous System', weight: 4 },
    { id: 'bio-9', name: 'Reproduction', weight: 4 },
    { id: 'bio-10', name: 'Genetics', weight: 5 },
    { id: 'bio-11', name: 'Variation and Evolution', weight: 4 },
    { id: 'bio-12', name: 'Ecology and Ecosystems', weight: 4 },
    { id: 'bio-13', name: 'Biotechnology', weight: 4 },
    { id: 'bio-14', name: 'Growth and Development', weight: 3 },
    { id: 'bio-15', name: 'Human Health and Disease', weight: 3 },
  ]
};

const subjects = [english, mathematics, physics, chemistry, biology];

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
    { subject: 'English Language', topics: ['Reading Comprehension', 'Grammar: Tenses and Agreement', 'Sentence Structure', 'Paragraph and Essay Writing', 'Lexis and Structure', 'Summary Writing'] },
    { subject: 'Mathematics', topics: ['Algebra: Expressions and Equations', 'Calculus: Differentiation', 'Calculus: Integration', 'Trigonometry: Ratios and Graphs', 'Geometry: Angles and Triangles', 'Statistics: Mean, Median, Mode'] },
    { subject: 'Physics', topics: ["Newton's Laws of Motion", 'Work, Energy and Power', 'Light: Reflection and Refraction', 'Electrostatics and Capacitors', 'Electric Current and Circuits', 'Kinematics and Graphical Analysis'] },
    { subject: 'Chemistry', topics: ['Atomic Structure and Bonding', 'Stoichiometry', 'Acids, Bases and Salts', 'Organic Chemistry: Hydrocarbons', 'Electrochemistry', 'Thermochemistry'] },
    { subject: 'Biology', topics: ['Cell Structure and Functions', 'Enzymes and Metabolism', 'Respiration and Gaseous Exchange', 'Transport in Living Things', 'Genetics', 'Nutrition'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'nabteb',
  examName: 'NABTEB',
  country: 'nigeria',
  description: `NABTEB\ \(National\ Business\ and\ Technical\ Examinations\ Board\)\ conducts\ technical\ and\ vocational\ examinations\ in\ Nigeria\.\ Recognized\ for\ admission\ to\ technical\ degree\ programs\ and\ professional\ certifications\.`,
  examPattern: `Theory\ and\ objective\ papers\ across\ multiple\ subjects\.\ Trade\ subjects\ include\ Electrical\ Work,\ Wood\ Work,\ Plumbing,\ etc\.\ Technical\ subjects:\ Mathematics,\ Physics,\ Chemistry\.`,
  eligibility: `Candidates\ with\ JSS3\ certification\ or\ equivalent\.\ For\ advanced\ trades,\ relevant\ pre\-NABTEB\ certification\ required\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.nabtebnigeria.org',
};

export default exam;
