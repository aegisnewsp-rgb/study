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

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#2563eb',
  topics: [
    { id: 'math-1', name: 'Number Work: Whole Numbers, Fractions, Decimals', weight: 5 },
    { id: 'math-2', name: 'Percentages and Ratios', weight: 4 },
    { id: 'math-3', name: 'Factors and Multiples (HCF and LCM)', weight: 4 },
    { id: 'math-4', name: 'Indices and Standard Form', weight: 3 },
    { id: 'math-5', name: 'Algebraic Expressions and Simple Equations', weight: 5 },
    { id: 'math-6', name: 'Word Problems and Applications', weight: 5 },
    { id: 'math-7', name: 'Geometry: Angles, Lines and Triangles', weight: 5 },
    { id: 'math-8', name: 'Circles: Parts and Properties', weight: 4 },
    { id: 'math-9', name: 'Perimeter and Area of Plane Shapes', weight: 4 },
    { id: 'math-10', name: 'Volume and Surface Area', weight: 4 },
    { id: 'math-11', name: 'Statistics: Pictograms, Bar Charts and Tally', weight: 4 },
    { id: 'math-12', name: 'Probability (Simple Events)', weight: 3 },
  ]
};

const english: Subject = {
  id: 'english', name: 'English', color: '#059669',
  topics: [
    { id: 'eng-1', name: 'Vocabulary and Word Meanings', weight: 4 },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3 },
    { id: 'eng-3', name: 'Comprehension Passages (Short)', weight: 5 },
    { id: 'eng-4', name: 'Sentence Completion and Fill in the Blanks', weight: 4 },
    { id: 'eng-5', name: 'Parts of Speech', weight: 4 },
    { id: 'eng-6', name: 'Tenses: Present, Past and Future', weight: 4 },
    { id: 'eng-7', name: 'Singular and Plural Nouns', weight: 3 },
    { id: 'eng-8', name: 'Subject-Verb Agreement', weight: 3 },
    { id: 'eng-9', name: 'Direct and Indirect Speech (Basic)', weight: 3 },
    { id: 'eng-10', name: 'Paragraph Writing', weight: 4 },
    { id: 'eng-11', name: 'Letter Writing Basics', weight: 3 },
    { id: 'eng-12', name: 'Idioms and Simple Proverbs', weight: 3 },
  ]
};

const quantReasoning: Subject = {
  id: 'quant-reasoning', name: 'Quantitative Reasoning', color: '#d97706',
  topics: [
    { id: 'qr-1', name: 'Number Patterns and Sequences', weight: 5 },
    { id: 'qr-2', name: 'Odd One Out (Numbers)', weight: 4 },
    { id: 'qr-3', name: 'Number Analogies', weight: 4 },
    { id: 'qr-4', name: 'Simple Word Problems Involving Operations', weight: 5 },
    { id: 'qr-5', name: 'Series Completion (Numbers and Figures)', weight: 4 },
    { id: 'qr-6', name: 'Spatial Reasoning: Patterns and Relationships', weight: 4 },
    { id: 'qr-7', name: 'Coding and Decoding (Simple)', weight: 4 },
    { id: 'qr-8', name: 'Ranking and Ordering Problems', weight: 3 },
    { id: 'qr-9', name: 'Figure Series and Sequences', weight: 4 },
    { id: 'qr-10', name: 'Basic Geometry Reasoning', weight: 4 },
    { id: 'qr-11', name: 'Data Interpretation from Simple Tables', weight: 4 },
    { id: 'qr-12', name: 'Distance, Speed and Time Problems', weight: 4 },
  ]
};

const verbalReasoning: Subject = {
  id: 'verbal-reasoning', name: 'Verbal Reasoning', color: '#7c3aed',
  topics: [
    { id: 'vr-1', name: 'Word Analogies', weight: 5 },
    { id: 'vr-2', name: 'Sentence Completion', weight: 4 },
    { id: 'vr-3', name: 'Synonyms', weight: 3 },
    { id: 'vr-4', name: 'Antonyms', weight: 3 },
    { id: 'vr-5', name: 'Jumbled Words and Unscrambling', weight: 4 },
    { id: 'vr-6', name: 'Odd One Out (Words)', weight: 4 },
    { id: 'vr-7', name: 'Alphabetical Arrangement', weight: 3 },
    { id: 'vr-8', name: 'Word Classification', weight: 3 },
    { id: 'vr-9', name: 'Reading Comprehension and Inference', weight: 5 },
    { id: 'vr-10', name: 'Meaning from Context', weight: 4 },
    { id: 'vr-11', name: 'Simple Logic and Deduction', weight: 4 },
    { id: 'vr-12', name: 'Cause and Effect Relationships', weight: 3 },
  ]
};

const civic: Subject = {
  id: 'civic', name: 'Civic Education', color: '#dc2626',
  topics: [
    { id: 'civ-1', name: ' Nigerian National Identity and Anthem', weight: 4 },
    { id: 'civ-2', name: 'Our National Symbols', weight: 3 },
    { id: 'civ-3', name: 'Nigerian Constitution and Federalism', weight: 4 },
    { id: 'civ-4', name: 'Rights and Responsibilities of Citizens', weight: 4 },
    { id: 'civ-5', name: 'National Unity and Diversity', weight: 3 },
    { id: 'civ-6', name: 'The Executive, Legislature and Judiciary', weight: 4 },
    { id: 'civ-7', name: 'Electoral Process and Voting', weight: 3 },
    { id: 'civ-8', name: 'Civic Virtues: Honesty, Discipline, Justice', weight: 3 },
    { id: 'civ-9', name: 'Traffic Rules and Road Safety', weight: 3 },
    { id: 'civ-10', name: 'Human Rights and Fundamental Rights', weight: 4 },
    { id: 'civ-11', name: 'Good Governance and Leadership', weight: 3 },
    { id: 'civ-12', name: 'The Legislature and Law Making', weight: 3 },
  ]
};

const naturalScience: Subject = {
  id: 'natural-science', name: 'Natural Science', color: '#0891b2',
  topics: [
    { id: 'ns-1', name: 'Living Things: Characteristics and Classification', weight: 4 },
    { id: 'ns-2', name: 'The Human Body: Major Organs and Systems', weight: 5 },
    { id: 'ns-3', name: 'Plants: Structure and Functions', weight: 4 },
    { id: 'ns-4', name: 'Animals: Classification and Habitats', weight: 4 },
    { id: 'ns-5', name: 'Matter: States and Properties', weight: 4 },
    { id: 'ns-6', name: 'Simple Chemical Changes', weight: 3 },
    { id: 'ns-7', name: 'Force and Motion', weight: 5 },
    { id: 'ns-8', name: 'Energy: Forms and Transformations', weight: 4 },
    { id: 'ns-9', name: 'Light and Sound', weight: 4 },
    { id: 'ns-10', name: 'The Solar System and Earth', weight: 4 },
    { id: 'ns-11', name: 'Weather and Climate', weight: 3 },
    { id: 'ns-12', name: 'Safety in the Home and School', weight: 3 },
  ]
};

const subjects = [mathematics, english, quantReasoning, verbalReasoning, civic, naturalScience];

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
    { subject: 'Mathematics', topics: ['Number Work: Whole Numbers, Fractions, Decimals', 'Algebraic Expressions and Simple Equations', 'Word Problems and Applications', 'Geometry: Angles, Lines and Triangles', 'Perimeter and Area of Plane Shapes', 'Statistics: Pictograms, Bar Charts and Tally'] },
    { subject: 'English', topics: ['Comprehension Passages (Short)', 'Vocabulary and Word Meanings', 'Sentence Completion and Fill in the Blanks', 'Tenses: Present, Past and Future', 'Parts of Speech', 'Paragraph Writing'] },
    { subject: 'Quantitative Reasoning', topics: ['Number Patterns and Sequences', 'Simple Word Problems Involving Operations', 'Series Completion (Numbers and Figures)', 'Odd One Out (Numbers)', 'Spatial Reasoning: Patterns and Relationships', 'Distance, Speed and Time Problems'] },
    { subject: 'Verbal Reasoning', topics: ['Word Analogies', 'Reading Comprehension and Inference', 'Sentence Completion', 'Jumbled Words and Unscrambling', 'Meaning from Context', 'Odd One Out (Words)'] },
    { subject: 'Civic Education', topics: ['Nigerian National Identity and Anthem', 'Rights and Responsibilities of Citizens', 'The Executive, Legislature and Judiciary', 'Human Rights and Fundamental Rights', 'Electoral Process and Voting'] },
    { subject: 'Natural Science', topics: ['The Human Body: Major Organs and Systems', 'Living Things: Characteristics and Classification', 'Force and Motion', 'Energy: Forms and Transformations', 'Light and Sound', 'The Solar System and Earth'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'ncee',
  examName: 'NCEE (National Common Entrance Examination)',
  country: 'nigeria',
  description: `NCEE\ \(National\ Common\ Entrance\ Examination\)\ is\ Nigeria's\ exam\ for\ admission\ into\ Federal\ Government\ Colleges\ \(Unity\ Schools\)\ at\ the\ Junior\ Secondary\ level\ \(JS2\)\.`,
  examPattern: `Multiple\-choice\ exam\ covering\ Mathematics,\ English,\ Quantitative\ Reasoning,\ Verbal\ Reasoning,\ Civic\ Education,\ and\ Natural\ Science\.\ Computer\-based\ format\ with\ objective\ questions\.`,
  eligibility: `Candidates\ who\ completed\ JS1\ in\ a\ recognized\ secondary\ school\.\ Must\ be\ under\ 15\ years\ of\ age\.\ Nigerian\ citizens\ only\.\ Examination\ takes\ place\ in\ January\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.education.gov.ng',
};

export default exam;
