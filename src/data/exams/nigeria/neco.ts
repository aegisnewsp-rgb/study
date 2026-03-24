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
    { id: 'eng-1', name: 'Comprehension Passages', weight: 5 },
    { id: 'eng-2', name: 'Summary Writing and Notes', weight: 4 },
    { id: 'eng-3', name: 'Vocabulary and Word Context', weight: 4 },
    { id: 'eng-4', name: 'Grammar: Tenses, Concord and Articles', weight: 4 },
    { id: 'eng-5', name: 'Active and Passive Voice', weight: 4 },
    { id: 'eng-6', name: 'Direct and Indirect Speech', weight: 3 },
    { id: 'eng-7', name: 'Sentence Construction', weight: 4 },
    { id: 'eng-8', name: 'Lexis and Structure', weight: 4 },
    { id: 'eng-9', name: 'Idioms, Proverbs and Figurative Language', weight: 3 },
    { id: 'eng-10', name: 'Prepositions and Conjunctions', weight: 3 },
    { id: 'eng-11', name: 'Pronouns and Agreement', weight: 3 },
    { id: 'eng-12', name: 'Question Tags and Short Responses', weight: 3 },
    { id: 'eng-13', name: 'Conditional Sentences', weight: 3 },
    { id: 'eng-14', name: 'Essay and Paragraph Writing', weight: 4 },
    { id: 'eng-15', name: 'Formal Letter and Application Writing', weight: 3 },
    { id: 'eng-16', name: 'Comprehension: Inference and Deduction', weight: 4 },
    { id: 'eng-17', name: 'Speech Writing and Debates', weight: 3 },
    { id: 'eng-18', name: 'Register and Audience Awareness', weight: 3 },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#059669',
  topics: [
    { id: 'math-1', name: 'Number and Bases (Binary, etc.)', weight: 4 },
    { id: 'math-2', name: 'Fractions, Decimals and Approximations', weight: 4 },
    { id: 'math-3', name: 'Indices, Logarithms and Surds', weight: 4 },
    { id: 'math-4', name: 'Algebraic Expressions and Operations', weight: 5 },
    { id: 'math-5', name: 'Linear and Quadratic Equations', weight: 4 },
    { id: 'math-6', name: 'Simultaneous Equations', weight: 4 },
    { id: 'math-7', name: 'Inequalities and Linear Programming', weight: 3 },
    { id: 'math-8', name: 'Plane Geometry: Angles, Triangles and Polygons', weight: 5 },
    { id: 'math-9', name: 'Circle Geometry: Angles and Chords', weight: 4 },
    { id: 'math-10', name: 'Trigonometry: Ratios and Graphs', weight: 5 },
    { id: 'math-11', name: 'Trigonometry: Sine and Cosine Rules', weight: 4 },
    { id: 'math-12', name: 'Coordinate Geometry and Graphs', weight: 4 },
    { id: 'math-13', name: 'Calculus: Differentiation', weight: 5 },
    { id: 'math-14', name: 'Calculus: Integration', weight: 5 },
    { id: 'math-15', name: 'Statistics: Measures of Central Tendency', weight: 4 },
    { id: 'math-16', name: 'Probability and Permutations', weight: 4 },
    { id: 'math-17', name: 'Mensuration: Areas and Volumes', weight: 4 },
    { id: 'math-18', name: 'Sequence and Series: AP and GP', weight: 3 },
  ]
};

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#d97706',
  topics: [
    { id: 'phy-1', name: 'Physical Quantities, Units and Measurements', weight: 3 },
    { id: 'phy-2', name: 'Kinematics: Displacement, Velocity and Acceleration', weight: 5 },
    { id: 'phy-3', name: 'Kinematics: Graphical Treatment', weight: 4 },
    { id: 'phy-4', name: "Newton's Laws of Motion", weight: 5 },
    { id: 'phy-5', name: 'Work, Energy, Power and Conservation Laws', weight: 5 },
    { id: 'phy-6', name: 'Heat Energy and Temperature Measurement', weight: 4 },
    { id: 'phy-7', name: 'Gas Laws and Kinetic Theory', weight: 4 },
    { id: 'phy-8', name: 'Waves: Properties, Equations and Phenomena', weight: 4 },
    { id: 'phy-9', name: 'Sound Waves and Doppler Effect', weight: 3 },
    { id: 'phy-10', name: 'Light: Laws of Reflection and Refraction', weight: 5 },
    { id: 'phy-11', name: 'Optical Instruments', weight: 4 },
    { id: 'phy-12', name: 'Electrostatics and Coulomb\'s Law', weight: 5 },
    { id: 'phy-13', name: 'Capacitors and Capacitance', weight: 4 },
    { id: 'phy-14', name: 'Electric Circuits: Ohm\'s Law and Kirchhoff\'s Laws', weight: 5 },
    { id: 'phy-15', name: 'Magnetic Fields and Electromagnets', weight: 4 },
    { id: 'phy-16', name: 'Electromagnetic Induction', weight: 4 },
    { id: 'phy-17', name: 'Electrons, Photons and the Photoelectric Effect', weight: 4 },
    { id: 'phy-18', name: 'Nuclear Physics: Radioactivity and Fission/Fusion', weight: 4 },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#7c3aed',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure and Electron Configuration', weight: 5 },
    { id: 'chem-2', name: 'Periodic Table and Periodic Properties', weight: 4 },
    { id: 'chem-3', name: 'Chemical Bonding: Ionic, Covalent and Metallic', weight: 5 },
    { id: 'chem-4', name: 'Chemical Calculations and Stoichiometry', weight: 5 },
    { id: 'chem-5', name: 'Physical Chemistry: Gas Laws', weight: 4 },
    { id: 'chem-6', name: 'Thermochemistry and Hess\'s Law', weight: 4 },
    { id: 'chem-7', name: 'Chemical Equilibrium and Le Chatelier\'s Principle', weight: 4 },
    { id: 'chem-8', name: 'Acids, Bases, Salts and pH', weight: 5 },
    { id: 'chem-9', name: 'Electrochemistry: Redox and Cells', weight: 4 },
    { id: 'chem-10', name: 'Chemical Kinetics and Rate Laws', weight: 4 },
    { id: 'chem-11', name: 'Organic Chemistry: Alkanes and Alkenes', weight: 4 },
    { id: 'chem-12', name: 'Organic Chemistry: Alcohols, Aldehydes and Ketones', weight: 4 },
    { id: 'chem-13', name: 'Organic Chemistry: Carboxylic Acids and Esters', weight: 4 },
    { id: 'chem-14', name: 'Amines, Amino Acids and Proteins', weight: 3 },
    { id: 'chem-15', name: 'Polymers and Synthetic Polymers', weight: 3 },
    { id: 'chem-16', name: 'Separation and Purification Techniques', weight: 3 },
    { id: 'chem-17', name: 'Water Chemistry and Hardness', weight: 3 },
    { id: 'chem-18', name: 'Environmental Chemistry and Green Chemistry', weight: 3 },
  ]
};

const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#dc2626',
  topics: [
    { id: 'bio-1', name: 'Cell Structure and Functions', weight: 5 },
    { id: 'bio-2', name: 'Cell Division: Mitosis and Meiosis', weight: 4 },
    { id: 'bio-3', name: 'Enzymes and Biochemical Reactions', weight: 5 },
    { id: 'bio-4', name: 'Nutrition: Photosynthesis and Chemosynthesis', weight: 4 },
    { id: 'bio-5', name: 'Heterotrophic Nutrition and Human Digestion', weight: 4 },
    { id: 'bio-6', name: 'Gaseous Exchange and Cell Respiration', weight: 5 },
    { id: 'bio-7', name: 'Transport in Plants and Animals', weight: 5 },
    { id: 'bio-8', name: 'Excretory Systems and Osmoregulation', weight: 4 },
    { id: 'bio-9', name: 'Coordination: Nervous and Endocrine Systems', weight: 4 },
    { id: 'bio-10', name: 'Sense Organs and Effectors', weight: 3 },
    { id: 'bio-11', name: 'Reproduction: Asexual and Sexual', weight: 4 },
    { id: 'bio-12', name: 'Growth and Development', weight: 3 },
    { id: 'bio-13', name: 'Mendelian Genetics and Probability', weight: 5 },
    { id: 'bio-14', name: 'DNA, RNA and Protein Synthesis', weight: 4 },
    { id: 'bio-15', name: 'Variation, Evolution and Natural Selection', weight: 4 },
    { id: 'bio-16', name: 'Ecology: Habitat, Ecosystem and Energy Flow', weight: 4 },
    { id: 'bio-17', name: 'Population Dynamics and Conservation', weight: 3 },
    { id: 'bio-18', name: 'Biotechnology: Tissue Culture and Genetic Engineering', weight: 4 },
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
    { subject: 'English Language', topics: ['Comprehension Passages', 'Grammar: Tenses, Concord and Articles', 'Sentence Construction', 'Lexis and Structure', 'Summary Writing and Notes', 'Essay and Paragraph Writing'] },
    { subject: 'Mathematics', topics: ['Algebraic Expressions and Operations', 'Calculus: Differentiation', 'Calculus: Integration', 'Trigonometry: Ratios and Graphs', 'Plane Geometry: Angles, Triangles and Polygons', 'Statistics: Measures of Central Tendency'] },
    { subject: 'Physics', topics: ["Newton's Laws of Motion", 'Work, Energy, Power and Conservation Laws', 'Light: Laws of Reflection and Refraction', 'Electrostatics and Coulomb\'s Law', 'Electric Circuits: Ohm\'s Law and Kirchhoff\'s Laws', 'Kinematics: Displacement, Velocity and Acceleration'] },
    { subject: 'Chemistry', topics: ['Atomic Structure and Electron Configuration', 'Chemical Bonding: Ionic, Covalent and Metallic', 'Chemical Calculations and Stoichiometry', 'Acids, Bases, Salts and pH', 'Organic Chemistry: Alkanes and Alkenes', 'Electrochemistry: Redox and Cells'] },
    { subject: 'Biology', topics: ['Cell Structure and Functions', 'Enzymes and Biochemical Reactions', 'Gaseous Exchange and Cell Respiration', 'Transport in Plants and Animals', 'Mendelian Genetics and Probability', 'Nutrition: Photosynthesis and Chemosynthesis'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'neco',
  examName: 'NECO SSCE',
  country: 'nigeria',
  description: `NECO\ SSCE\ \(National\ Examinations\ Council\)\ is\ Nigeria's\ second\ major\ secondary\ school\ certification\ exam\.\ Often\ taken\ alongside\ WAEC,\ it\ covers\ similar\ subjects\ and\ is\ accepted\ by\ most\ Nigerian\ universities\.`,
  examPattern: `Multiple\ objective\ and\ theory\ papers\.\ Minimum\ 6\ credits\ including\ English\ and\ Mathematics\ for\ university\ admission\.\ June/July\ and\ December/January\ sessions\.`,
  eligibility: `Candidates\ in\ final\ SS3\ or\ those\ within\ 5\ years\ of\ completing\ secondary\ education\.\ Age\ 16\+\ recommended\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.negov.org',
};

export default exam;
