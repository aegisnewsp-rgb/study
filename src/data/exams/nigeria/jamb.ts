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
    { id: 'eng-1', name: 'Vocabulary and Word Meanings', weight: 4 },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3 },
    { id: 'eng-3', name: 'Comprehension Passages', weight: 5 },
    { id: 'eng-4', name: 'Grammar: Parts of Speech', weight: 4 },
    { id: 'eng-5', name: 'Tenses and Their Usage', weight: 4 },
    { id: 'eng-6', name: 'Active and Passive Voice', weight: 3 },
    { id: 'eng-7', name: 'Direct and Indirect Speech', weight: 3 },
    { id: 'eng-8', name: 'Sentence Structure and Synthesis', weight: 4 },
    { id: 'eng-9', name: 'Lexis and Structure', weight: 4 },
    { id: 'eng-10', name: 'Pronouns and Agreement', weight: 3 },
    { id: 'eng-11', name: 'Prepositions', weight: 3 },
    { id: 'eng-12', name: 'Question Tags and Short Answers', weight: 3 },
    { id: 'eng-13', name: 'Conditional Sentences', weight: 3 },
    { id: 'eng-14', name: 'Paragraph and Essay Writing', weight: 4 },
    { id: 'eng-15', name: 'Summary and Inference from Passages', weight: 4 },
  ]
};

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#059669',
  topics: [
    { id: 'phy-1', name: 'Motion in One Dimension', weight: 5 },
    { id: 'phy-2', name: 'Motion in Two Dimensions', weight: 4 },
    { id: 'phy-3', name: "Newton's Laws of Motion", weight: 5 },
    { id: 'phy-4', name: 'Work, Energy and Power', weight: 5 },
    { id: 'phy-5', name: 'Circular Motion and Gravitation', weight: 4 },
    { id: 'phy-6', name: 'Waves and Wave Motion', weight: 4 },
    { id: 'phy-7', name: 'Sound Waves', weight: 3 },
    { id: 'phy-8', name: 'Light and Geometrical Optics', weight: 5 },
    { id: 'phy-9', name: 'Wave Optics (Interference and Diffraction)', weight: 4 },
    { id: 'phy-10', name: 'Electrostatics', weight: 5 },
    { id: 'phy-11', name: 'Capacitors and Capacitance', weight: 4 },
    { id: 'phy-12', name: 'Electric Current and Circuits', weight: 5 },
    { id: 'phy-13', name: 'Magnetic Field and Electromagnetism', weight: 4 },
    { id: 'phy-14', name: 'Electromagnetic Induction', weight: 4 },
    { id: 'phy-15', name: 'Modern Physics: Photoelectric Effect', weight: 4 },
    { id: 'phy-16', name: 'Atomic Structure and Bohr Model', weight: 4 },
    { id: 'phy-17', name: 'Nuclear Physics and Radioactivity', weight: 4 },
    { id: 'phy-18', name: 'Heat and Thermodynamics', weight: 4 },
    { id: 'phy-19', name: 'Simple Harmonic Motion', weight: 4 },
    { id: 'phy-20', name: 'Fluid Mechanics', weight: 3 },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#d97706',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure and the Periodic Table', weight: 4 },
    { id: 'chem-2', name: 'Chemical Bonding and Molecular Structure', weight: 5 },
    { id: 'chem-3', name: 'States of Matter: Gases, Liquids and Solids', weight: 4 },
    { id: 'chem-4', name: 'Stoichiometry and Chemical Equations', weight: 5 },
    { id: 'chem-5', name: 'Thermochemistry and Energetics', weight: 4 },
    { id: 'chem-6', name: 'Chemical Kinetics', weight: 4 },
    { id: 'chem-7', name: 'Chemical Equilibrium', weight: 4 },
    { id: 'chem-8', name: 'Acids, Bases and Salts', weight: 5 },
    { id: 'chem-9', name: 'Electrochemistry', weight: 4 },
    { id: 'chem-10', name: 'Organic Chemistry: Hydrocarbons', weight: 5 },
    { id: 'chem-11', name: 'Alkyl Halides and Alcohols', weight: 4 },
    { id: 'chem-12', name: 'Aldehydes, Ketones and Carboxylic Acids', weight: 4 },
    { id: 'chem-13', name: 'Amines and Amides', weight: 3 },
    { id: 'chem-14', name: 'Polymers and Biomolecules', weight: 3 },
    { id: 'chem-15', name: 'Separation Techniques', weight: 3 },
    { id: 'chem-16', name: 'Redox Reactions', weight: 4 },
    { id: 'chem-17', name: 'Periodic Properties and Group Chemistry', weight: 3 },
    { id: 'chem-18', name: 'Transition Metals', weight: 3 },
    { id: 'chem-19', name: 'Equilibrium and Ionic Equilibrium', weight: 4 },
    { id: 'chem-20', name: 'Environmental Chemistry', weight: 2 },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#7c3aed',
  topics: [
    { id: 'math-1', name: 'Number and Numeration', weight: 4 },
    { id: 'math-2', name: 'Algebraic Processes', weight: 5 },
    { id: 'math-3', name: 'Geometry: Lines, Angles and Triangles', weight: 5 },
    { id: 'math-4', name: 'Circles and Chords', weight: 4 },
    { id: 'math-5', name: 'Trigonometry: Ratios and Identities', weight: 5 },
    { id: 'math-6', name: 'Trigonometry: Solutions of Triangles', weight: 4 },
    { id: 'math-7', name: 'Coordinate Geometry', weight: 4 },
    { id: 'math-8', name: 'Calculus: Differentiation', weight: 5 },
    { id: 'math-9', name: 'Calculus: Integration', weight: 5 },
    { id: 'math-10', name: 'Statistics and Data Presentation', weight: 4 },
    { id: 'math-11', name: 'Probability', weight: 4 },
    { id: 'math-12', name: 'Permutations and Combinations', weight: 4 },
    { id: 'math-13', name: 'Sequence and Series (AP and GP)', weight: 4 },
    { id: 'math-14', name: 'Quadratic Equations', weight: 4 },
    { id: 'math-15', name: 'Matrices and Determinants', weight: 3 },
    { id: 'math-16', name: 'Vectors in Two Dimensions', weight: 3 },
    { id: 'math-17', name: 'Area and Perimeter of Plane Figures', weight: 3 },
    { id: 'math-18', name: 'Three-Dimensional Geometry Basics', weight: 3 },
    { id: 'math-19', name: 'Logarithms and Exponentials', weight: 3 },
    { id: 'math-20', name: 'Sets and Set Theory', weight: 3 },
  ]
};

const subjects = [english, physics, chemistry, mathematics];

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
    { subject: 'English Language', topics: ['Comprehension Passages', 'Vocabulary and Word Meanings', 'Grammar: Parts of Speech', 'Sentence Structure and Synthesis', 'Lexis and Structure', 'Summary and Inference from Passages'] },
    { subject: 'Physics', topics: ['Motion in One Dimension', "Newton's Laws of Motion", 'Work, Energy and Power', 'Electrostatics', 'Electric Current and Circuits', 'Light and Geometrical Optics'] },
    { subject: 'Chemistry', topics: ['Atomic Structure and the Periodic Table', 'Chemical Bonding and Molecular Structure', 'Stoichiometry and Chemical Equations', 'Acids, Bases and Salts', 'Organic Chemistry: Hydrocarbons', 'Electrochemistry'] },
    { subject: 'Mathematics', topics: ['Algebraic Processes', 'Calculus: Differentiation', 'Calculus: Integration', 'Trigonometry: Ratios and Identities', 'Geometry: Lines, Angles and Triangles', 'Coordinate Geometry'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'jamb',
  examName: 'JAMB UTME',
  country: 'nigeria',
  description: `JAMB\ UTME\ is\ Nigeria's\ unified\ tertiary\ matriculation\ exam,\ mandatory\ for\ university\ admission\.\ Covers\ English\ and\ three\ subject\ combinations\ based\ on\ candidate's\ intended\ course\.`,
  examPattern: `180\ questions\ in\ 150\ minutes\.\ UTME\ Subjects:\ English\ Language\ \(compulsory\)\ \+\ 3\ relevant\ subjects\ based\ on\ course\ choice\.\ Computer\-Based\ Test\ \(CBT\)\.`,
  eligibility: `O'Level\ credits\ in\ 5\ relevant\ subjects\ including\ English\ and\ Mathematics\ \(for\ most\ courses\)\.\ Age:\ no\ upper\ limit\.\ Must\ have\ completed\ secondary\ school\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.jamb.gov.ng',
};

export default exam;
