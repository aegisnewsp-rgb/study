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
    { id: 'eng-1', name: 'Vocabulary and Word Usage', weight: 4 },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3 },
    { id: 'eng-3', name: 'One Word Substitution', weight: 3 },
    { id: 'eng-4', name: 'Idioms and Proverbs', weight: 3 },
    { id: 'eng-5', name: 'Sentence Structure and Grammar', weight: 4 },
    { id: 'eng-6', name: 'Tenses and Voice', weight: 4 },
    { id: 'eng-7', name: 'Reading Comprehension', weight: 5 },
    { id: 'eng-8', name: 'Para-jumbles and Coherence', weight: 4 },
    { id: 'eng-9', name: 'Spotting Errors', weight: 3 },
    { id: 'eng-10', name: 'Summary Writing', weight: 3 },
    { id: 'eng-11', name: 'Legal Terminology', weight: 3 },
    { id: 'eng-12', name: 'Critical Reasoning in English', weight: 4 },
  ]
};

const analyticalReasoning: Subject = {
  id: 'analytical-reasoning', name: 'Analytical Reasoning', color: '#059669',
  topics: [
    { id: 'ar-1', name: 'Logical Deduction (Syllogisms)', weight: 5 },
    { id: 'ar-2', name: 'Statement and Assumptions', weight: 4 },
    { id: 'ar-3', name: 'Statement and Arguments', weight: 4 },
    { id: 'ar-4', name: 'Blood Relations', weight: 3 },
    { id: 'ar-5', name: 'Direction Sense', weight: 3 },
    { id: 'ar-6', name: 'Coding-Decoding', weight: 3 },
    { id: 'ar-7', name: 'Series Completion', weight: 3 },
    { id: 'ar-8', name: 'Seating Arrangements', weight: 4 },
    { id: 'ar-9', name: 'Cause and Effect', weight: 4 },
    { id: 'ar-10', name: 'Critical Reasoning', weight: 5 },
    { id: 'ar-11', name: 'Venn Diagrams', weight: 3 },
    { id: 'ar-12', name: 'Puzzles and Ranking', weight: 4 },
  ]
};

const legalReasoning: Subject = {
  id: 'legal-reasoning', name: 'Legal Reasoning', color: '#d97706',
  topics: [
    { id: 'lr-1', name: 'Legal Aptitude: Torts', weight: 4 },
    { id: 'lr-2', name: 'Legal Aptitude: Contract Law', weight: 5 },
    { id: 'lr-3', name: 'Legal Aptitude: Criminal Law', weight: 4 },
    { id: 'lr-4', name: 'Legal Aptitude: Constitutional Law', weight: 4 },
    { id: 'lr-5', name: 'Legal Aptitude: International Law', weight: 3 },
    { id: 'lr-6', name: 'Legal Aptitude: Intellectual Property Rights', weight: 3 },
    { id: 'lr-7', name: 'Legal GK and Current Affairs', weight: 4 },
    { id: 'lr-8', name: 'Indian/Pakistani Legal History', weight: 3 },
    { id: 'lr-9', name: 'Principle of Liability', weight: 4 },
    { id: 'lr-10', name: 'Legal Maxims and Doctrines', weight: 4 },
    { id: 'lr-11', name: 'Legal Reasoning: Problem Solving', weight: 5 },
    { id: 'lr-12', name: 'Rights and Duties', weight: 3 },
  ]
};

const generalKnowledge: Subject = {
  id: 'gk', name: 'General Knowledge', color: '#7c3aed',
  topics: [
    { id: 'gk-1', name: 'Pakistan History', weight: 4 },
    { id: 'gk-2', name: 'World History', weight: 3 },
    { id: 'gk-3', name: 'Pakistan Geography', weight: 4 },
    { id: 'gk-4', name: 'World Geography', weight: 3 },
    { id: 'gk-5', name: 'Pakistan Politics and Constitution', weight: 4 },
    { id: 'gk-6', name: 'International Organizations (UN, WTO, etc.)', weight: 3 },
    { id: 'gk-7', name: 'Science and Technology', weight: 3 },
    { id: 'gk-8', name: 'Economics and Banking', weight: 3 },
    { id: 'gk-9', name: 'Pakistani Culture and Heritage', weight: 3 },
    { id: 'gk-10', name: 'Important Treaties and Agreements', weight: 3 },
    { id: 'gk-11', name: 'Notable Pakistanis and World Personalities', weight: 2 },
    { id: 'gk-12', name: 'Major World Events', weight: 3 },
  ]
};

const currentAffairs: Subject = {
  id: 'current-affairs', name: 'Current Affairs', color: '#dc2626',
  topics: [
    { id: 'ca-1', name: 'Pakistan: Political Developments', weight: 4 },
    { id: 'ca-2', name: 'Pakistan: Economic Issues', weight: 4 },
    { id: 'ca-3', name: 'South Asian Affairs', weight: 4 },
    { id: 'ca-4', name: 'United Nations and International Relations', weight: 3 },
    { id: 'ca-5', name: 'Major International Conflicts', weight: 3 },
    { id: 'ca-6', name: 'Climate Change and Environment', weight: 3 },
    { id: 'ca-7', name: 'Global Economy and Trade', weight: 3 },
    { id: 'ca-8', name: 'Science and Technology News', weight: 3 },
    { id: 'ca-9', name: 'Sports and Cultural Events', weight: 2 },
    { id: 'ca-10', name: 'Human Rights Issues', weight: 3 },
    { id: 'ca-11', name: 'Pakistan Internal Security', weight: 4 },
    { id: 'ca-12', name: 'Diplomatic Relations and Visits', weight: 3 },
  ]
};

const subjects = [english, analyticalReasoning, legalReasoning, generalKnowledge, currentAffairs];

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
    { subject: 'English', topics: ['Reading Comprehension', 'Vocabulary and Word Usage', 'Para-jumbles and Coherence', 'Critical Reasoning in English', 'Sentence Structure and Grammar', 'Spotting Errors'] },
    { subject: 'Analytical Reasoning', topics: ['Logical Deduction (Syllogisms)', 'Statement and Arguments', 'Critical Reasoning', 'Seating Arrangements', 'Cause and Effect', 'Puzzles and Ranking'] },
    { subject: 'Legal Reasoning', topics: ['Legal Aptitude: Contract Law', 'Legal Aptitude: Criminal Law', 'Legal Aptitude: Constitutional Law', 'Principle of Liability', 'Legal Maxims and Doctrines', 'Legal Reasoning: Problem Solving'] },
    { subject: 'General Knowledge', topics: ['Pakistan History', 'Pakistan Geography', 'Pakistan Politics and Constitution', 'Science and Technology', 'Economics and Banking'] },
    { subject: 'Current Affairs', topics: ['Pakistan: Political Developments', 'Pakistan: Economic Issues', 'South Asian Affairs', 'Pakistan Internal Security', 'Major International Conflicts', 'Climate Change and Environment'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'lat',
  examName: 'LAT (Law Admission Test)',
  country: 'pakistan',
  description: `LAT\ \(Law\ Admission\ Test\)\ is\ Pakistan's\ test\ for\ admission\ to\ LLB\ \(5\-year\)\ programs\ at\ HEC\-recognized\ universities\.\ Tests\ English,\ Analytical\ Reasoning,\ Legal\ Reasoning,\ and\ General\ Knowledge\.`,
  examPattern: `100\ MCQs\ in\ 2\ hours\.\ Sections:\ English\ Comprehension,\ Analytical\ Reasoning,\ Legal\ Reasoning,\ General\ Knowledge\.\ Minimum\ passing:\ 50%\.`,
  eligibility: `Intermediate\ or\ equivalent\ with\ 45%\ marks\.\ Bachelor's\ holders\ also\ eligible\ for\ 3\-year\ LLB\ program\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.lat.gov.pk',
};

export default exam;
