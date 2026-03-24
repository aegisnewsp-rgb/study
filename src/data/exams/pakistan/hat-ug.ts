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
  id: 'english', name: 'English', color: '#2563eb',
  topics: [
    { id: 'eng-1', name: 'Vocabulary and Usage', weight: 4 },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3 },
    { id: 'eng-3', name: 'Analogies', weight: 3 },
    { id: 'eng-4', name: 'One Word Substitution', weight: 3 },
    { id: 'eng-5', name: 'Idioms and Phrases', weight: 3 },
    { id: 'eng-6', name: 'Sentence Completion', weight: 4 },
    { id: 'eng-7', name: 'Reading Comprehension', weight: 5 },
    { id: 'eng-8', name: 'Para-jumbles (Sentence Rearrangement)', weight: 4 },
    { id: 'eng-9', name: 'Spotting Errors', weight: 4 },
    { id: 'eng-10', name: 'Tenses and Grammar', weight: 4 },
    { id: 'eng-11', name: 'Active and Passive Voice', weight: 3 },
    { id: 'eng-12', name: 'Direct and Indirect Speech', weight: 3 },
    { id: 'eng-13', name: 'Prepositions and Articles', weight: 3 },
    { id: 'eng-14', name: 'Critical Reasoning Based on Passages', weight: 4 },
    { id: 'eng-15', name: 'Summary and Conclusion from Passages', weight: 4 },
  ]
};

const analyticalReasoning: Subject = {
  id: 'analytical-reasoning', name: 'Analytical Reasoning', color: '#059669',
  topics: [
    { id: 'ar-1', name: 'Blood Relations', weight: 4 },
    { id: 'ar-2', name: 'Direction Sense', weight: 4 },
    { id: 'ar-3', name: 'Coding-Decoding', weight: 4 },
    { id: 'ar-4', name: 'Number and Letter Series', weight: 4 },
    { id: 'ar-5', name: 'Classification and Odd One Out', weight: 3 },
    { id: 'ar-6', name: 'Syllogisms (Logical Deduction)', weight: 5 },
    { id: 'ar-7', name: 'Statement and Assumptions', weight: 4 },
    { id: 'ar-8', name: 'Statement and Arguments', weight: 4 },
    { id: 'ar-9', name: 'Seating Arrangements', weight: 4 },
    { id: 'ar-10', name: 'Puzzles', weight: 4 },
    { id: 'ar-11', name: 'Cause and Effect', weight: 4 },
    { id: 'ar-12', name: 'Critical Reasoning', weight: 5 },
    { id: 'ar-13', name: 'Ranking and Ordering', weight: 3 },
    { id: 'ar-14', name: 'Venn Diagrams', weight: 4 },
    { id: 'ar-15', name: 'Cube and Dice Problems', weight: 3 },
  ]
};

const quantitativeReasoning: Subject = {
  id: 'quantitative-reasoning', name: 'Quantitative Reasoning', color: '#d97706',
  topics: [
    { id: 'qr-1', name: 'Number System', weight: 4 },
    { id: 'qr-2', name: 'Fractions, Decimals and Percentages', weight: 4 },
    { id: 'qr-3', name: 'Ratio and Proportion', weight: 4 },
    { id: 'qr-4', name: 'Average and Mixtures', weight: 4 },
    { id: 'qr-5', name: 'Profit, Loss and Discount', weight: 4 },
    { id: 'qr-6', name: 'Simple and Compound Interest', weight: 3 },
    { id: 'qr-7', name: 'Time, Distance and Work', weight: 4 },
    { id: 'qr-8', name: 'Algebra: Expressions and Equations', weight: 4 },
    { id: 'qr-9', name: 'Quadratic Equations', weight: 3 },
    { id: 'qr-10', name: 'Geometry: Lines, Angles, Triangles', weight: 4 },
    { id: 'qr-11', name: 'Circles and Quadrilaterals', weight: 3 },
    { id: 'qr-12', name: 'Area and Perimeter', weight: 3 },
    { id: 'qr-13', name: 'Trigonometry Basics', weight: 3 },
    { id: 'qr-14', name: 'Data Interpretation from Tables and Charts', weight: 4 },
    { id: 'qr-15', name: 'Probability and Permutations', weight: 4 },
  ]
};

const subjectKnowledge: Subject = {
  id: 'subject-knowledge', name: 'Subject Knowledge', color: '#7c3aed',
  topics: [
    { id: 'sk-1', name: 'Physics: Mechanics', weight: 4 },
    { id: 'sk-2', name: 'Physics: Heat and Thermodynamics', weight: 3 },
    { id: 'sk-3', name: 'Physics: Electricity and Magnetism', weight: 4 },
    { id: 'sk-4', name: 'Physics: Light and Waves', weight: 3 },
    { id: 'sk-5', name: 'Chemistry: Atomic Structure and Bonding', weight: 4 },
    { id: 'sk-6', name: 'Chemistry: Organic Chemistry Basics', weight: 4 },
    { id: 'sk-7', name: 'Chemistry: Physical Chemistry', weight: 3 },
    { id: 'sk-8', name: 'Biology: Cell and Genetics', weight: 4 },
    { id: 'sk-9', name: 'Biology: Human Physiology', weight: 4 },
    { id: 'sk-10', name: 'Mathematics: Calculus', weight: 4 },
    { id: 'sk-11', name: 'Mathematics: Coordinate Geometry', weight: 3 },
    { id: 'sk-12', name: 'Pakistan Studies', weight: 3 },
    { id: 'sk-13', name: 'Islamic Studies', weight: 3 },
    { id: 'sk-14', name: 'Computer Fundamentals', weight: 3 },
    { id: 'sk-15', name: 'General Science and Technology', weight: 3 },
  ]
};

const subjects = [english, analyticalReasoning, quantitativeReasoning, subjectKnowledge];

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
    { subject: 'English', topics: ['Reading Comprehension', 'Vocabulary and Usage', 'Para-jumbles (Sentence Rearrangement)', 'Spotting Errors', 'Critical Reasoning Based on Passages', 'Sentence Completion'] },
    { subject: 'Analytical Reasoning', topics: ['Syllogisms (Logical Deduction)', 'Critical Reasoning', 'Coding-Decoding', 'Blood Relations', 'Statement and Assumptions', 'Seating Arrangements'] },
    { subject: 'Quantitative Reasoning', topics: ['Number System', 'Time, Distance and Work', 'Profit, Loss and Discount', 'Algebra: Expressions and Equations', 'Geometry: Lines, Angles, Triangles', 'Data Interpretation from Tables and Charts'] },
    { subject: 'Subject Knowledge', topics: ['Physics: Mechanics', 'Physics: Electricity and Magnetism', 'Chemistry: Atomic Structure and Bonding', 'Biology: Cell and Genetics', 'Mathematics: Calculus', 'Pakistan Studies'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'hat-ug',
  examName: 'HAT-UG (HEC Aptitude Test - Undergraduate)',
  country: 'pakistan',
  description: `HAT\-UG\ \(HEC\ Aptitude\ Test\ \-\ Undergraduate\)\ is\ Pakistan's\ standardized\ test\ for\ undergraduate\ admissions\ in\ HEC\-affiliated\ universities\.\ Tests\ English,\ Quantitative,\ and\ Analytical\ skills\.`,
  examPattern: `100\ MCQs\ covering\ English\ \(30\),\ Quantitative\ Reasoning\ \(30\),\ Analytical\ Reasoning\ \(20\),\ and\ Subject\ Knowledge\ \(20\)\.\ 2\ hours\ duration\.`,
  eligibility: `HSSC\ or\ equivalent\.\ Required\ by\ most\ HEC\-affiliated\ universities\ for\ BS\ programs\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.hec.edu.pk',
};

export default exam;
