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
    { id: 'eng-2', name: 'Summary Writing', weight: 4 },
    { id: 'eng-3', name: 'Vocabulary Development', weight: 4 },
    { id: 'eng-4', name: 'Grammar: Tenses and Concord', weight: 4 },
    { id: 'eng-5', name: 'Active and Passive Voice', weight: 4 },
    { id: 'eng-6', name: 'Direct and Indirect Speech', weight: 3 },
    { id: 'eng-7', name: 'Sentence Construction and Synthesis', weight: 4 },
    { id: 'eng-8', name: 'Lexis and Structure', weight: 4 },
    { id: 'eng-9', name: 'Idioms and Figurative Language', weight: 3 },
    { id: 'eng-10', name: 'Prepositions and Conjunctions', weight: 3 },
    { id: 'eng-11', name: 'Pronouns and Pronoun-Antecedent Agreement', weight: 3 },
    { id: 'eng-12', name: 'Question Tags and Responses', weight: 3 },
    { id: 'eng-13', name: 'Conditional Sentences', weight: 3 },
    { id: 'eng-14', name: 'Paragraph and Essay Writing', weight: 4 },
    { id: 'eng-15', name: 'Letter Writing (Formal and Informal)', weight: 3 },
    { id: 'eng-16', name: 'Speeches and Article Writing', weight: 3 },
    { id: 'eng-17', name: 'Register and Tone', weight: 3 },
    { id: 'eng-18', name: 'Oral English: Stress and Intonation', weight: 3 },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#059669',
  topics: [
    { id: 'math-1', name: 'Number and Numeration (Bases)', weight: 4 },
    { id: 'math-2', name: 'Fractions, Decimals and Percentages', weight: 4 },
    { id: 'math-3', name: 'Indices and Logarithms', weight: 4 },
    { id: 'math-4', name: 'Algebraic Processes', weight: 5 },
    { id: 'math-5', name: 'Simple Equations and Inequalities', weight: 4 },
    { id: 'math-6', name: 'Quadratic Equations', weight: 4 },
    { id: 'math-7', name: 'Linear Inequalities and Graphical Solutions', weight: 4 },
    { id: 'math-8', name: 'Plane Geometry: Angles and Triangles', weight: 5 },
    { id: 'math-9', name: 'Circles: Angles and Chords', weight: 4 },
    { id: 'math-10', name: 'Trigonometry: Sine, Cosine and Tangent', weight: 5 },
    { id: 'math-11', name: 'Trigonometry: Sine and Cosine Rules', weight: 4 },
    { id: 'math-12', name: 'Coordinate Geometry', weight: 4 },
    { id: 'math-13', name: 'Differentiation and Integration (Calculus)', weight: 5 },
    { id: 'math-14', name: 'Applications of Calculus (Rates, Max/Min)', weight: 4 },
    { id: 'math-15', name: 'Statistics: Mean, Median, Mode', weight: 4 },
    { id: 'math-16', name: 'Probability', weight: 4 },
    { id: 'math-17', name: 'Mensuration: Areas and Volumes', weight: 4 },
    { id: 'math-18', name: 'Sequence and Series (AP and GP)', weight: 3 },
  ]
};

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#d97706',
  topics: [
    { id: 'phy-1', name: 'Measurements and Units', weight: 3 },
    { id: 'phy-2', name: 'Kinematics: Motion in a Straight Line', weight: 5 },
    { id: 'phy-3', name: 'Kinematics: Projectiles', weight: 4 },
    { id: 'phy-4', name: "Newton's Laws of Motion and Friction", weight: 5 },
    { id: 'phy-5', name: 'Work, Energy and Power', weight: 5 },
    { id: 'phy-6', name: 'Heat and Temperature', weight: 4 },
    { id: 'phy-7', name: 'Thermal Expansion and Gas Laws', weight: 4 },
    { id: 'phy-8', name: 'Waves: Properties and Equations', weight: 4 },
    { id: 'phy-9', name: 'Sound Waves', weight: 3 },
    { id: 'phy-10', name: 'Light: Reflection and Refraction', weight: 5 },
    { id: 'phy-11', name: 'Optical Instruments', weight: 4 },
    { id: 'phy-12', name: 'Electrostatics and Capacitors', weight: 5 },
    { id: 'phy-13', name: 'Electric Current and Circuit Analysis', weight: 5 },
    { id: 'phy-14', name: 'Magnetic Field and Electromagnetism', weight: 4 },
    { id: 'phy-15', name: 'Electromagnetic Induction (Faraday\'s Laws)', weight: 4 },
    { id: 'phy-16', name: 'Modern Physics: Photoelectric Effect', weight: 4 },
    { id: 'phy-17', name: 'Atomic Physics: Bohr Model', weight: 4 },
    { id: 'phy-18', name: 'Nuclear Physics: Radioactivity', weight: 4 },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#7c3aed',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure and Bonding', weight: 5 },
    { id: 'chem-2', name: 'Periodic Properties and Group Elements', weight: 4 },
    { id: 'chem-3', name: 'Chemical Reactions and Stoichiometry', weight: 5 },
    { id: 'chem-4', name: 'States of Matter and Gas Laws', weight: 4 },
    { id: 'chem-5', name: 'Thermochemistry', weight: 4 },
    { id: 'chem-6', name: 'Chemical Equilibrium', weight: 4 },
    { id: 'chem-7', name: 'Acids, Bases and Buffers', weight: 5 },
    { id: 'chem-8', name: 'Electrochemistry and Galvanic Cells', weight: 4 },
    { id: 'chem-9', name: 'Chemical Kinetics and Rate of Reaction', weight: 4 },
    { id: 'chem-10', name: 'Organic Chemistry: Alkanes', weight: 4 },
    { id: 'chem-11', name: 'Organic Chemistry: Alkenes and Alkynes', weight: 4 },
    { id: 'chem-12', name: 'Alcohols and Carboxylic Acids', weight: 4 },
    { id: 'chem-13', name: 'Amines, Esters and Fats/Oils', weight: 3 },
    { id: 'chem-14', name: 'Polymers and Natural Polymers', weight: 3 },
    { id: 'chem-15', name: 'Separation Techniques', weight: 3 },
    { id: 'chem-16', name: 'Water and Hardness of Water', weight: 3 },
    { id: 'chem-17', name: 'Ores and Metallurgy', weight: 3 },
    { id: 'chem-18', name: 'Environmental Chemistry and Pollution', weight: 3 },
  ]
};

const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#dc2626',
  topics: [
    { id: 'bio-1', name: 'Cell Biology: Cell Structure and Organelles', weight: 5 },
    { id: 'bio-2', name: 'Cell Biology: Cell Division (Mitosis and Meiosis)', weight: 4 },
    { id: 'bio-3', name: 'Biological Molecules and Enzymes', weight: 5 },
    { id: 'bio-4', name: 'Nutrition: Autotrophic and Heterotrophic', weight: 4 },
    { id: 'bio-5', name: 'Digestive System in Humans', weight: 4 },
    { id: 'bio-6', name: 'Gaseous Exchange and Respiration', weight: 5 },
    { id: 'bio-7', name: 'Transport: Circulatory System', weight: 5 },
    { id: 'bio-8', name: 'Excretory System and Homeostasis', weight: 4 },
    { id: 'bio-9', name: 'Nervous System and Sense Organs', weight: 4 },
    { id: 'bio-10', name: 'Endocrine System and Hormones', weight: 4 },
    { id: 'bio-11', name: 'Reproduction in Plants and Animals', weight: 4 },
    { id: 'bio-12', name: 'Growth and Development', weight: 3 },
    { id: 'bio-13', name: 'Genetics: Mendelian Inheritance', weight: 5 },
    { id: 'bio-14', name: 'Variation and Evolution', weight: 4 },
    { id: 'bio-15', name: 'Ecology: Ecosystems and Food Chains', weight: 4 },
    { id: 'bio-16', name: 'Population Ecology and Biogeography', weight: 3 },
    { id: 'bio-17', name: 'Biotechnology and Genetic Engineering', weight: 4 },
    { id: 'bio-18', name: 'Human Impact on Environment', weight: 3 },
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
    { subject: 'English Language', topics: ['Comprehension Passages', 'Summary Writing', 'Grammar: Tenses and Concord', 'Sentence Construction and Synthesis', 'Lexis and Structure', 'Paragraph and Essay Writing'] },
    { subject: 'Mathematics', topics: ['Algebraic Processes', 'Differentiation and Integration (Calculus)', 'Trigonometry: Sine, Cosine and Tangent', 'Plane Geometry: Angles and Triangles', 'Coordinate Geometry', 'Statistics: Mean, Median, Mode'] },
    { subject: 'Physics', topics: ["Newton's Laws of Motion and Friction", 'Work, Energy and Power', 'Light: Reflection and Refraction', 'Electrostatics and Capacitors', 'Electric Current and Circuit Analysis', 'Modern Physics: Photoelectric Effect'] },
    { subject: 'Chemistry', topics: ['Atomic Structure and Bonding', 'Chemical Reactions and Stoichiometry', 'Acids, Bases and Buffers', 'Organic Chemistry: Alkanes', 'Electrochemistry and Galvanic Cells', 'Chemical Equilibrium'] },
    { subject: 'Biology', topics: ['Cell Biology: Cell Structure and Organelles', 'Biological Molecules and Enzymes', 'Gaseous Exchange and Respiration', 'Transport: Circulatory System', 'Genetics: Mendelian Inheritance', 'Nutrition: Autotrophic and Heterotrophic'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'waec',
  examName: 'WAEC WASSCE',
  country: 'nigeria',
  description: `WAEC\ WASSCE\ \(West\ African\ Senior\ School\ Certificate\ Examination\)\ is\ Nigeria's\ secondary\ school\ final\ exam,\ recognized\ for\ university\ admissions\ and\ used\ as\ a\ qualifying\ exam\ for\ various\ programs\.`,
  examPattern: `Multiple\ papers\ across\ May/June\ and\ Nov/Dec\ sessions\.\ Minimum\ 6\ credits\ including\ English\ and\ Mathematics\ for\ most\ university\ admissions\.\ All\ answers\ on\ paper\ \(written\)\.`,
  eligibility: `Candidates\ in\ their\ final\ year\ of\ secondary\ school\ or\ those\ who\ completed\ within\ the\ last\ 5\ years\.\ Must\ be\ 16\+\ years\ old\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.waeconline.org.ng',
};

export default exam;
