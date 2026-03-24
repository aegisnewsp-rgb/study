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
    { id: 'phy-1', name: 'Measurement', weight: 2 },
    { id: 'phy-2', name: 'Kinematics', weight: 5 },
    { id: 'phy-3', name: 'Dynamics', weight: 5 },
    { id: 'phy-4', name: 'Work, Energy and Power', weight: 4 },
    { id: 'phy-5', name: 'Circular Motion', weight: 4 },
    { id: 'phy-6', name: 'Fluid Dynamics', weight: 3 },
    { id: 'phy-7', name: 'Oscillations', weight: 4 },
    { id: 'phy-8', name: 'Waves', weight: 4 },
    { id: 'phy-9', name: 'Heat and Thermodynamics', weight: 4 },
    { id: 'phy-10', name: 'Electrostatics', weight: 5 },
    { id: 'phy-11', name: 'Current Electricity', weight: 5 },
    { id: 'phy-12', name: 'Electromagnetism', weight: 4 },
    { id: 'phy-13', name: 'Electromagnetic Induction (EMI)', weight: 4 },
    { id: 'phy-14', name: 'Alternating Current (AC)', weight: 3 },
    { id: 'phy-15', name: 'Light and Optics', weight: 5 },
    { id: 'phy-16', name: 'Modern Physics', weight: 4 },
    { id: 'phy-17', name: 'Nuclear Physics', weight: 3 },
    { id: 'phy-18', name: 'Electronics', weight: 3 },
    { id: 'phy-19', name: 'Communication Systems', weight: 2 },
    { id: 'phy-20', name: 'Gravitation', weight: 3 },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#059669',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure', weight: 4 },
    { id: 'chem-2', name: 'Chemical Bonding', weight: 5 },
    { id: 'chem-3', name: 'States of Matter', weight: 3 },
    { id: 'chem-4', name: 'Thermochemistry', weight: 4 },
    { id: 'chem-5', name: 'Chemical Equilibrium', weight: 4 },
    { id: 'chem-6', name: 'Acids and Bases', weight: 4 },
    { id: 'chem-7', name: 'Electrochemistry', weight: 4 },
    { id: 'chem-8', name: 'Reaction Kinetics', weight: 3 },
    { id: 'chem-9', name: 'Periodic Properties', weight: 3 },
    { id: 'chem-10', name: 'Group Elements', weight: 3 },
    { id: 'chem-11', name: 'Transition Elements', weight: 3 },
    { id: 'chem-12', name: 'Organic Chemistry Fundamentals', weight: 5 },
    { id: 'chem-13', name: 'Hydrocarbons', weight: 4 },
    { id: 'chem-14', name: 'Alcohols, Phenols and Ethers', weight: 4 },
    { id: 'chem-15', name: 'Aldehydes and Ketones', weight: 4 },
    { id: 'chem-16', name: 'Carboxylic Acids', weight: 3 },
    { id: 'chem-17', name: 'Amines', weight: 3 },
    { id: 'chem-18', name: 'Biomolecules', weight: 3 },
    { id: 'chem-19', name: 'Polymers', weight: 2 },
    { id: 'chem-20', name: 'Environmental Chemistry', weight: 2 },
  ]
};

const botany: Subject = {
  id: 'botany', name: 'Botany', color: '#7c3aed',
  topics: [
    { id: 'bot-1', name: 'Cell Biology', weight: 5 },
    { id: 'bot-2', name: 'Biochemistry', weight: 4 },
    { id: 'bot-3', name: 'Cell Division', weight: 4 },
    { id: 'bot-4', name: 'Variety of Life', weight: 3 },
    { id: 'bot-5', name: 'Kingdom Plantae', weight: 3 },
    { id: 'bot-6', name: 'Plant Kingdom Classification', weight: 3 },
    { id: 'bot-7', name: 'Plant Tissues', weight: 3 },
    { id: 'bot-8', name: 'Photosynthesis', weight: 5 },
    { id: 'bot-9', name: 'Respiration', weight: 4 },
    { id: 'bot-10', name: 'Plant Nutrition', weight: 3 },
    { id: 'bot-11', name: 'Transport in Plants', weight: 4 },
    { id: 'bot-12', name: 'Growth and Development', weight: 3 },
    { id: 'bot-13', name: 'Reproduction in Plants', weight: 4 },
    { id: 'bot-14', name: 'Inheritance', weight: 4 },
    { id: 'bot-15', name: 'Evolution', weight: 3 },
    { id: 'bot-16', name: 'Biotechnology', weight: 4 },
    { id: 'bot-17', name: 'Ecosystem', weight: 3 },
    { id: 'bot-18', name: 'Environmental Issues', weight: 2 },
  ]
};

const zoology: Subject = {
  id: 'zoology', name: 'Zoology', color: '#dc2626',
  topics: [
    { id: 'zoo-1', name: 'Introduction to Zoology', weight: 2 },
    { id: 'zoo-2', name: 'Biological Molecules', weight: 4 },
    { id: 'zoo-3', name: 'Cell Structure and Function', weight: 5 },
    { id: 'zoo-4', name: 'Tissues', weight: 3 },
    { id: 'zoo-5', name: 'Digestive System', weight: 4 },
    { id: 'zoo-6', name: 'Gaseous Exchange', weight: 3 },
    { id: 'zoo-7', name: 'Circulatory System', weight: 4 },
    { id: 'zoo-8', name: 'Excretory System', weight: 3 },
    { id: 'zoo-9', name: 'Homeostasis', weight: 4 },
    { id: 'zoo-10', name: 'Nervous System', weight: 5 },
    { id: 'zoo-11', name: 'Endocrine System', weight: 4 },
    { id: 'zoo-12', name: 'Reproductive System', weight: 3 },
    { id: 'zoo-13', name: 'Growth and Development', weight: 3 },
    { id: 'zoo-14', name: 'Heredity', weight: 4 },
    { id: 'zoo-15', name: 'Evolution', weight: 3 },
    { id: 'zoo-16', name: 'Human Welfare', weight: 3 },
    { id: 'zoo-17', name: 'Biotechnology', weight: 3 },
    { id: 'zoo-18', name: 'Ecology', weight: 3 },
  ]
};

const english: Subject = {
  id: 'english', name: 'English', color: '#0891b2',
  topics: [
    { id: 'eng-1', name: 'Vocabulary', weight: 4 },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3 },
    { id: 'eng-3', name: 'One Word Substitution', weight: 3 },
    { id: 'eng-4', name: 'Idioms and Phrases', weight: 3 },
    { id: 'eng-5', name: 'Sentence Correction', weight: 4 },
    { id: 'eng-6', name: 'Active and Passive Voice', weight: 3 },
    { id: 'eng-7', name: 'Direct and Indirect Speech', weight: 3 },
    { id: 'eng-8', name: 'Tenses', weight: 4 },
    { id: 'eng-9', name: 'Prepositions', weight: 3 },
    { id: 'eng-10', name: 'Comprehension Passages', weight: 5 },
    { id: 'eng-11', name: 'Paragraph Writing', weight: 3 },
    { id: 'eng-12', name: 'Grammar Usage', weight: 4 },
  ]
};

const logicalReasoning: Subject = {
  id: 'logical-reasoning', name: 'Logical Reasoning', color: '#4f46e5',
  topics: [
    { id: 'lr-1', name: 'Analogies', weight: 3 },
    { id: 'lr-2', name: 'Series Completion', weight: 4 },
    { id: 'lr-3', name: 'Classification', weight: 3 },
    { id: 'lr-4', name: 'Coding-Decoding', weight: 4 },
    { id: 'lr-5', name: 'Blood Relations', weight: 3 },
    { id: 'lr-6', name: 'Direction Sense', weight: 3 },
    { id: 'lr-7', name: 'Logical Sequence', weight: 4 },
    { id: 'lr-8', name: 'Statement and Conclusion', weight: 4 },
    { id: 'lr-9', name: 'Critical Reasoning', weight: 4 },
    { id: 'lr-10', name: 'Data Interpretation', weight: 4 },
  ]
};

const subjects = [physics, chemistry, botany, zoology, english, logicalReasoning];

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
    { subject: 'Physics', topics: ['Kinematics', 'Dynamics', 'Electrostatics', 'Current Electricity', 'Light and Optics', 'Modern Physics'] },
    { subject: 'Chemistry', topics: ['Atomic Structure', 'Chemical Bonding', 'Organic Chemistry Fundamentals', 'Hydrocarbons', 'Acids and Bases', 'Thermochemistry'] },
    { subject: 'Botany', topics: ['Cell Biology', 'Photosynthesis', 'Cell Division', 'Inheritance', 'Reproduction in Plants', 'Transport in Plants'] },
    { subject: 'Zoology', topics: ['Cell Structure and Function', 'Nervous System', 'Circulatory System', 'Heredity', 'Homeostasis', 'Digestive System'] },
    { subject: 'English', topics: ['Comprehension Passages', 'Vocabulary', 'Sentence Correction', 'Tenses', 'Grammar Usage'] },
    { subject: 'Logical Reasoning', topics: ['Series Completion', 'Coding-Decoding', 'Statement and Conclusion', 'Logical Sequence', 'Analogies'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'mdcat',
  examName: 'MDCAT',
  country: 'pakistan',
  description: `MDCAT\ is\ Pakistan's\ mandatory\ entry\ test\ for\ admission\ to\ all\ public\ and\ private\ medical\ colleges\.\ Conducted\ by\ PMC\ \(Pakistan\ Medical\ Commission\),\ it\ tests\ competency\ in\ Biology,\ Chemistry,\ Physics,\ and\ English\.`,
  examPattern: `200\ MCQs\ \(Biology\ 80,\ Chemistry\ 60,\ Physics\ 40,\ English\ 20\)\ to\ be\ completed\ in\ 3\.5\ hours\.\ Minimum\ 65%\ score\ required\ for\ admission\ to\ public\ medical\ colleges\.`,
  eligibility: `HSSC\ \(Pre\-Medical\)\ with\ 70%\+\ or\ equivalent\.\ Valid\ MDCAT\ score\.\ Pakistani\ nationals\ and\ foreign\ students\ can\ appear\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.pmc.gov.pk',
};

export default exam;
