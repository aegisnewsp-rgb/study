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
    { id: 'eng-1', name: 'Vocabulary and Usage', weight: 4, description: 'Building word power through context clues, collocations, and word formation for accurate language use.' },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3, description: 'Identifying words with similar and opposite meanings to improve precision in reading and writing.' },
    { id: 'eng-3', name: 'Analogies', weight: 3, description: 'Understanding word relationships and completing verbal analogies using logical connections between pairs.' },
    { id: 'eng-4', name: 'One Word Substitution', weight: 3, description: 'Replacing phrases with single words to express ideas more concisely and precisely.' },
    { id: 'eng-5', name: 'Idioms and Phrases', weight: 3, description: 'Learning common English idioms and phrases to improve comprehension and expression.' },
    { id: 'eng-6', name: 'Sentence Completion', weight: 4, description: 'Filling in blanks with appropriate words to create grammatically correct and meaningful sentences.' },
    { id: 'eng-7', name: 'Reading Comprehension', weight: 5, description: 'Reading passages carefully to answer questions on main idea, inference, tone, and vocabulary in context.' },
    { id: 'eng-8', name: 'Para-jumbles (Sentence Rearrangement)', weight: 4, description: 'Rearranging jumbled sentences to form coherent paragraphs using transitional clues and logic.' },
    { id: 'eng-9', name: 'Spotting Errors', weight: 4, description: 'Identifying grammatical errors in sentences covering subject-verb agreement, tenses, and word choice.' },
    { id: 'eng-10', name: 'Tenses and Grammar', weight: 4, description: 'Using all verb tenses accurately and applying grammar rules for correct sentence construction.' },
    { id: 'eng-11', name: 'Active and Passive Voice', weight: 3, description: 'Converting between active and passive constructions and understanding when each voice is more effective.' },
    { id: 'eng-12', name: 'Direct and Indirect Speech', weight: 3, description: 'Reporting statements, questions, and commands accurately from direct to indirect speech.' },
    { id: 'eng-13', name: 'Prepositions and Articles', weight: 3, description: 'Using prepositions correctly for time, place, and manner, and applying article rules appropriately.' },
    { id: 'eng-14', name: 'Critical Reasoning Based on Passages', weight: 4, description: 'Analysing arguments, identifying assumptions, evaluating evidence, and drawing conclusions from text.' },
    { id: 'eng-15', name: 'Summary and Conclusion from Passages', weight: 4, description: 'Identifying main points and writing concise summaries and logical conclusions from reading passages.' },
  ]
};

const analyticalReasoning: Subject = {
  id: 'analytical-reasoning', name: 'Analytical Reasoning', color: '#059669',
  topics: [
    { id: 'ar-1', name: 'Blood Relations', weight: 4, description: 'Solving problems involving family relationships, generational hierarchy, and tracing relationship chains.' },
    { id: 'ar-2', name: 'Direction Sense', weight: 4, description: 'Understanding directions, distances, and positions to solve navigation and movement-based problems.' },
    { id: 'ar-3', name: 'Coding-Decoding', weight: 4, description: 'Finding the rule used to encode letters or numbers and applying it to decode or encode new sequences.' },
    { id: 'ar-4', name: 'Number and Letter Series', weight: 4, description: 'Identifying patterns in sequences of numbers and letters to find missing or next terms.' },
    { id: 'ar-5', name: 'Classification and Odd One Out', weight: 3, description: 'Grouping items by common characteristics and identifying which item does not belong to the group.' },
    { id: 'ar-6', name: 'Syllogisms (Logical Deduction)', weight: 5, description: 'Using two or more premises to draw valid logical conclusions through deductive reasoning.' },
    { id: 'ar-7', name: 'Statement and Assumptions', weight: 4, description: 'Identifying what is necessarily true based on given statements and recognising implicit assumptions.' },
    { id: 'ar-8', name: 'Statement and Arguments', weight: 4, description: 'Evaluating the strength and validity of arguments and identifying flaws in reasoning patterns.' },
    { id: 'ar-9', name: 'Seating Arrangements', weight: 4, description: 'Arranging people in linear and circular configurations based on given clues about their positions.' },
    { id: 'ar-10', name: 'Puzzles', weight: 4, description: 'Solving complex logical puzzles involving multiple constraints and conditions simultaneously.' },
    { id: 'ar-11', name: 'Cause and Effect', weight: 4, description: 'Determining whether a statement is a cause, effect, or neither based on given causal relationships.' },
    { id: 'ar-12', name: 'Critical Reasoning', weight: 5, description: 'Analysing arguments, identifying logical fallacies, evaluating evidence, and making sound judgments.' },
    { id: 'ar-13', name: 'Ranking and Ordering', weight: 3, description: 'Arranging items in ascending or descending order based on multiple comparative attributes.' },
    { id: 'ar-14', name: 'Venn Diagrams', weight: 4, description: 'Using Venn diagrams to represent set relationships and solving problems involving intersections and unions.' },
    { id: 'ar-15', name: 'Cube and Dice Problems', weight: 3, description: 'Visualising cube faces, dice positions, and solving problems involving cubes cut into smaller cubes.' },
  ]
};

const quantitativeReasoning: Subject = {
  id: 'quantitative-reasoning', name: 'Quantitative Reasoning', color: '#d97706',
  topics: [
    { id: 'qr-1', name: 'Number System', weight: 4, description: 'Working with integers, fractions, decimals, percentages, divisibility rules, and HCF/LCM calculations.' },
    { id: 'qr-2', name: 'Fractions, Decimals and Percentages', weight: 4, description: 'Performing operations with fractions and decimals and solving percentage-based word problems.' },
    { id: 'qr-3', name: 'Ratio and Proportion', weight: 4, description: 'Understanding ratios, proportions, direct and inverse variation, and their applications in problem solving.' },
    { id: 'qr-4', name: 'Average and Mixtures', weight: 4, description: 'Calculating arithmetic mean, weighted average, and solving mixture and alligation problems.' },
    { id: 'qr-5', name: 'Profit, Loss and Discount', weight: 4, description: 'Calculating profit and loss percentages, discount prices, and understanding markup and markdown concepts.' },
    { id: 'qr-6', name: 'Simple and Compound Interest', weight: 3, description: 'Computing simple and compound interest, understanding principal, rate, time, and amount relationships.' },
    { id: 'qr-7', name: 'Time, Distance and Work', weight: 4, description: 'Solving problems involving speed, distance, time, work rates, and combined work scenarios.' },
    { id: 'qr-8', name: 'Algebra: Expressions and Equations', weight: 4, description: 'Simplifying algebraic expressions, solving linear and quadratic equations, and using algebraic formulas.' },
    { id: 'qr-9', name: 'Quadratic Equations', weight: 3, description: 'Solving quadratic equations by factorisation and quadratic formula, and understanding discriminant.' },
    { id: 'qr-10', name: 'Geometry: Lines, Angles, Triangles', weight: 4, description: 'Applying angle properties, triangle theorems, similarity, congruence, and Pythagorean theorem.' },
    { id: 'qr-11', name: 'Circles and Quadrilaterals', weight: 3, description: 'Understanding properties of circles, chords, tangents, and calculating areas and perimeters of quadrilaterals.' },
    { id: 'qr-12', name: 'Area and Perimeter', weight: 3, description: 'Computing areas and perimeters of plane figures including triangles, rectangles, circles, and composite shapes.' },
    { id: 'qr-13', name: 'Trigonometry Basics', weight: 3, description: 'Using sine, cosine, and tangent ratios to solve right-angled triangle problems and elevation/depression questions.' },
    { id: 'qr-14', name: 'Data Interpretation from Tables and Charts', weight: 4, description: 'Reading and interpreting data from tables, bar charts, pie charts, and line graphs to answer questions.' },
    { id: 'qr-15', name: 'Probability and Permutations', weight: 4, description: 'Calculating probabilities of simple and compound events, permutations, and combinations.' },
  ]
};

const subjectKnowledge: Subject = {
  id: 'subject-knowledge', name: 'Subject Knowledge', color: '#7c3aed',
  topics: [
    { id: 'sk-1', name: 'Physics: Mechanics', weight: 4, description: 'Understanding laws of motion, work, energy, power, momentum, and applying them to solve physics problems.' },
    { id: 'sk-2', name: 'Physics: Heat and Thermodynamics', weight: 3, description: 'Studying heat transfer, specific heat capacity, thermodynamics laws, and thermal expansion.' },
    { id: 'sk-3', name: 'Physics: Electricity and Magnetism', weight: 4, description: 'Understanding electric circuits, Ohm\'s law, magnetic fields, electromagnetic induction, and AC/DC concepts.' },
    { id: 'sk-4', name: 'Physics: Light and Waves', weight: 3, description: 'Studying wave properties, sound, light reflection, refraction, lenses, mirrors, and optical instruments.' },
    { id: 'sk-5', name: 'Chemistry: Atomic Structure and Bonding', weight: 4, description: 'Understanding electron configuration, chemical bonds, periodic table trends, and molecular structure.' },
    { id: 'sk-6', name: 'Chemistry: Organic Chemistry Basics', weight: 4, description: 'Studying hydrocarbons, functional groups, organic reactions, IUPAC naming, and isomerism.' },
    { id: 'sk-7', name: 'Chemistry: Physical Chemistry', weight: 3, description: 'Understanding chemical equilibrium, reaction rates, electrochemistry, and stoichiometric calculations.' },
    { id: 'sk-8', name: 'Biology: Cell and Genetics', weight: 4, description: 'Studying cell structure, cell division, DNA, genetics, inheritance patterns, and genetic disorders.' },
    { id: 'sk-9', name: 'Biology: Human Physiology', weight: 4, description: 'Understanding human body systems including circulatory, respiratory, digestive, nervous, and endocrine systems.' },
    { id: 'sk-10', name: 'Mathematics: Calculus', weight: 4, description: 'Applying differentiation and integration to solve problems involving rates of change and areas under curves.' },
    { id: 'sk-11', name: 'Mathematics: Coordinate Geometry', weight: 3, description: 'Finding equations of lines, circles, and conic sections using coordinate geometry formulas.' },
    { id: 'sk-12', name: 'Pakistan Studies', weight: 3, description: 'Studying Pakistan\'s history, geography, constitution, political developments, and important national events.' },
    { id: 'sk-13', name: 'Islamic Studies', weight: 3, description: 'Learning Islamic history, Quranic concepts, Hadith, pillars of Islam, and Islamic civilization.' },
    { id: 'sk-14', name: 'Computer Fundamentals', weight: 3, description: 'Understanding computer basics, hardware, software, internet, MS Office, and basic programming concepts.' },
    { id: 'sk-15', name: 'General Science and Technology', weight: 3, description: 'Studying basic concepts in physics, chemistry, and biology along with current technological advancements.' },
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
  description: 'HAT-UG (HEC Aptitude Test - Undergraduate) is Pakistan\'s standardized test for undergraduate admissions in HEC-affiliated universities. Tests English, Quantitative, and Analytical skills.',
  examPattern: '100 MCQs, 2 hours, 100 marks — Analytical Reasoning, English, Pakistan Studies, Islamic Studies, General Knowledge, Current Affairs.',
  eligibility: 'HSSC Part-I or Part-II completed. Minimum 50% marks required. Conducted by NTS for admission to undergraduate programmes.',
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-02',
  officialSource: 'https://www.hec.edu.pk',
};

export default exam;
