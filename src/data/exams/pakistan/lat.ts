export interface Topic { id: string; name: string; weight: 1|2|3|4|5; description?: string; }
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
    { id: 'eng-1', name: 'Vocabulary and Word Usage', weight: 4, description: 'Expanding vocabulary through context, word roots, collocations, and precise usage in legal and academic writing.' },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3, description: 'Identifying words with similar and opposite meanings to improve precision in comprehension and expression.' },
    { id: 'eng-3', name: 'One Word Substitution', weight: 3, description: 'Replacing multi-word phrases with single words for concise and effective communication.' },
    { id: 'eng-4', name: 'Idioms and Proverbs', weight: 3, description: 'Understanding common English idioms, proverbs, and their appropriate use in formal and informal contexts.' },
    { id: 'eng-5', name: 'Sentence Structure and Grammar', weight: 4, description: 'Constructing grammatically correct sentences, avoiding errors, and using varied sentence patterns effectively.' },
    { id: 'eng-6', name: 'Tenses and Voice', weight: 4, description: 'Using all tenses accurately and converting between active and passive voice appropriately.' },
    { id: 'eng-7', name: 'Reading Comprehension', weight: 5, description: 'Reading and analysing passages to understand main ideas, tone, arguments, and draw logical conclusions.' },
    { id: 'eng-8', name: 'Para-jumbles and Coherence', weight: 4, description: 'Rearranging jumbled sentences into coherent paragraphs and ensuring logical flow of ideas.' },
    { id: 'eng-9', name: 'Spotting Errors', weight: 3, description: 'Identifying grammatical, structural, and lexical errors in sentences with accuracy.' },
    { id: 'eng-10', name: 'Summary Writing', weight: 3, description: 'Condensing passages into concise summaries that capture essential points without personal interpretation.' },
    { id: 'eng-11', name: 'Legal Terminology', weight: 3, description: 'Learning key legal terms including writ, injunction, decree, affidavit, and understanding their usage in context.' },
    { id: 'eng-12', name: 'Critical Reasoning in English', weight: 4, description: 'Analysing arguments, identifying assumptions, evaluating evidence, and constructing logical reasoning chains.' },
  ]
};

const analyticalReasoning: Subject = {
  id: 'analytical-reasoning', name: 'Analytical Reasoning', color: '#059669',
  topics: [
    { id: 'ar-1', name: 'Logical Deduction (Syllogisms)', weight: 5, description: 'Drawing valid conclusions from given premises using formal logic and identifying invalid argument forms.' },
    { id: 'ar-2', name: 'Statement and Assumptions', weight: 4, description: 'Identifying which assumptions are necessary for a statement to hold true and evaluating their validity.' },
    { id: 'ar-3', name: 'Statement and Arguments', weight: 4, description: 'Evaluating the strength, weakness, and validity of given arguments in logical reasoning contexts.' },
    { id: 'ar-4', name: 'Blood Relations', weight: 3, description: 'Tracing family relationships through complex relationship chains involving multiple generations.' },
    { id: 'ar-5', name: 'Direction Sense', weight: 3, description: 'Understanding directional movements, distances, and positions to solve navigation-based problems.' },
    { id: 'ar-6', name: 'Coding-Decoding', weight: 3, description: 'Finding encoding patterns and applying them to decode or encode letter and number sequences.' },
    { id: 'ar-7', name: 'Series Completion', weight: 3, description: 'Identifying patterns in number and letter series to find the missing or next term.' },
    { id: 'ar-8', name: 'Seating Arrangements', weight: 4, description: 'Arranging people around tables and in lines using circular and linear seating logic based on clues.' },
    { id: 'ar-9', name: 'Cause and Effect', weight: 4, description: 'Distinguishing between causes, effects, and coincidences in given statements and scenarios.' },
    { id: 'ar-10', name: 'Critical Reasoning', weight: 5, description: 'Analysing complex arguments, identifying fallacies, weighing evidence, and reaching well-supported conclusions.' },
    { id: 'ar-11', name: 'Venn Diagrams', weight: 3, description: 'Using Venn diagrams to represent and solve problems involving logical relationships between sets.' },
    { id: 'ar-12', name: 'Puzzles and Ranking', weight: 4, description: 'Solving multi-constraint puzzles that require ordering items by multiple attributes simultaneously.' },
  ]
};

const legalReasoning: Subject = {
  id: 'legal-reasoning', name: 'Legal Reasoning', color: '#d97706',
  topics: [
    { id: 'lr-1', name: 'Legal Aptitude: Torts', weight: 4, description: 'Understanding tort law including negligence, strict liability, defamation, and compensation for civil wrongs.' },
    { id: 'lr-2', name: 'Legal Aptitude: Contract Law', weight: 5, description: 'Understanding essential elements of a valid contract, offer, acceptance, consideration, and breach of contract remedies.' },
    { id: 'lr-3', name: 'Legal Aptitude: Criminal Law', weight: 4, description: 'Studying types of crimes, mens rea, actus reus, categories of offences, and criminal responsibility.' },
    { id: 'lr-4', name: 'Legal Aptitude: Constitutional Law', weight: 4, description: 'Understanding the structure of government, fundamental rights, division of powers, and judicial review.' },
    { id: 'lr-5', name: 'Legal Aptitude: International Law', weight: 3, description: 'Studying sources of international law, treaties, state sovereignty, and international organisations.' },
    { id: 'lr-6', name: 'Legal Aptitude: Intellectual Property Rights', weight: 3, description: 'Understanding copyright, patents, trademarks, trade secrets, and IP protection mechanisms.' },
    { id: 'lr-7', name: 'Legal GK and Current Affairs', weight: 4, description: 'Knowing major legal developments, landmark judgments, and important legal news affecting the justice system.' },
    { id: 'lr-8', name: 'Indian/Pakistani Legal History', weight: 3, description: 'Studying the evolution of the legal system, colonial legal legacy, and major legal reforms in the region.' },
    { id: 'lr-9', name: 'Principle of Liability', weight: 4, description: 'Understanding vicarious liability, strict liability, and the principle ofuberrimae fidei in legal contexts.' },
    { id: 'lr-10', name: 'Legal Maxims and Doctrines', weight: 4, description: 'Learning Latin legal maxims like audi alteram partem, actus non facit reum nisi mens sit rea, and their applications.' },
    { id: 'lr-11', name: 'Legal Reasoning: Problem Solving', weight: 5, description: 'Applying legal principles to solve hypothetical case-based problems and identifying relevant legal issues.' },
    { id: 'lr-12', name: 'Rights and Duties', weight: 3, description: 'Understanding the relationship between legal rights and corresponding duties, and how they interact in law.' },
  ]
};

const generalKnowledge: Subject = {
  id: 'gk', name: 'General Knowledge', color: '#7c3aed',
  topics: [
    { id: 'gk-1', name: 'Pakistan History', weight: 4, description: 'Studying the creation of Pakistan, the independence movement, Quaid-e-Azam\'s vision, and key historical events.' },
    { id: 'gk-2', name: 'World History', weight: 3, description: 'Understanding major world events, civilizations, wars, and movements that shaped global history.' },
    { id: 'gk-3', name: 'Pakistan Geography', weight: 4, description: 'Learning about Pakistan\'s provinces, landforms, rivers, climate, natural resources, and demographic distribution.' },
    { id: 'gk-4', name: 'World Geography', weight: 3, description: 'Studying continents, oceans, major countries, capitals, landforms, and global climate patterns.' },
    { id: 'gk-5', name: 'Pakistan Politics and Constitution', weight: 4, description: 'Understanding Pakistan\'s political system, constitution, parliamentary and presidential structures, and elections.' },
    { id: 'gk-6', name: 'International Organizations (UN, WTO, etc.)', weight: 3, description: 'Learning about major international bodies, their functions, and Pakistan\'s role in them.' },
    { id: 'gk-7', name: 'Science and Technology', weight: 3, description: 'Understanding key scientific discoveries, technological advancements, and their impact on modern society.' },
    { id: 'gk-8', name: 'Economics and Banking', weight: 3, description: 'Studying basic economic concepts, supply and demand, inflation, banking systems, and monetary policy.' },
    { id: 'gk-9', name: 'Pakistani Culture and Heritage', weight: 3, description: 'Understanding Pakistan\'s diverse cultures, traditions, literature, art, music, and cultural heritage sites.' },
    { id: 'gk-10', name: 'Important Treaties and Agreements', weight: 3, description: 'Learning about significant national and international treaties, agreements, and their implications.' },
    { id: 'gk-11', name: 'Notable Pakistanis and World Personalities', weight: 2, description: 'Knowing prominent Pakistani leaders, scientists, writers, and world figures who shaped history.' },
    { id: 'gk-12', name: 'Major World Events', weight: 3, description: 'Studying recent and historical significant events that impacted nations and international relations.' },
  ]
};

const currentAffairs: Subject = {
  id: 'current-affairs', name: 'Current Affairs', color: '#dc2626',
  topics: [
    { id: 'ca-1', name: 'Pakistan: Political Developments', weight: 4, description: 'Staying updated on current political events, elections, government policies, and political parties in Pakistan.' },
    { id: 'ca-2', name: 'Pakistan: Economic Issues', weight: 4, description: 'Understanding current economic challenges, fiscal policies, trade, inflation, and development programmes in Pakistan.' },
    { id: 'ca-3', name: 'South Asian Affairs', weight: 4, description: 'Studying relations between South Asian nations, regional conflicts, cooperation, and geopolitical dynamics.' },
    { id: 'ca-4', name: 'United Nations and International Relations', weight: 3, description: 'Understanding Pakistan\'s foreign policy, diplomatic relations, and engagement with international bodies.' },
    { id: 'ca-5', name: 'Major International Conflicts', weight: 3, description: 'Studying ongoing and historical international conflicts, their causes, and efforts toward resolution.' },
    { id: 'ca-6', name: 'Climate Change and Environment', weight: 3, description: 'Understanding climate change impacts, environmental policies, renewable energy, and sustainability initiatives.' },
    { id: 'ca-7', name: 'Global Economy and Trade', weight: 3, description: 'Studying global trade patterns, economic blocs, FTAs, and Pakistan\'s position in the global economy.' },
    { id: 'ca-8', name: 'Science and Technology News', weight: 3, description: 'Staying informed about breakthroughs in AI, space exploration, medicine, and emerging technologies.' },
    { id: 'ca-9', name: 'Sports and Cultural Events', weight: 2, description: 'Knowing major sports events, achievements, and cultural festivals at national and international levels.' },
    { id: 'ca-10', name: 'Human Rights Issues', weight: 3, description: 'Understanding human rights violations, protections, conventions, and current human rights debates globally.' },
    { id: 'ca-11', name: 'Pakistan Internal Security', weight: 4, description: 'Understanding security challenges including terrorism, border issues, law enforcement, and national security policies.' },
    { id: 'ca-12', name: 'Diplomatic Relations and Visits', weight: 3, description: 'Staying updated on bilateral visits, agreements, and diplomatic engagements of Pakistan with other nations.' },
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
  description: 'LAT (Law Admission Test) is Pakistan\'s test for admission to LLB (5-year) programs at HEC-recognized universities. Tests English, Analytical Reasoning, Legal Reasoning, and General Knowledge.',
  examPattern: '100 MCQs, 2 hours, 100 marks — English (25), Analytical Reasoning (25), Islamic Studies/Area Studies (25), Pakistan Studies (25).',
  eligibility: 'HSSC or equivalent with minimum 50% aggregate. For law admission in Pakistani universities.',
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-02',
  officialSource: 'https://www.lat.gov.pk',
};

export default exam;
