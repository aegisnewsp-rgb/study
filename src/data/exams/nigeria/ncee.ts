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

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#2563eb',
  topics: [
    { id: 'math-1', name: 'Number Work: Whole Numbers, Fractions, Decimals', weight: 5, description: 'Performing operations with whole numbers, fractions, and decimals, and understanding place value in practical contexts.' },
    { id: 'math-2', name: 'Percentages and Ratios', weight: 4, description: 'Calculating percentages, ratios, proportions, and applying them to solve everyday and examination problems.' },
    { id: 'math-3', name: 'Factors and Multiples (HCF and LCM)', weight: 4, description: 'Finding highest common factors and lowest common multiples and using them to solve division problems.' },
    { id: 'math-4', name: 'Indices and Standard Form', weight: 3, description: 'Applying laws of indices to simplify expressions and expressing numbers in standard form (scientific notation).' },
    { id: 'math-5', name: 'Algebraic Expressions and Simple Equations', weight: 5, description: 'Simplifying algebraic expressions, expanding brackets, and solving linear equations in one unknown.' },
    { id: 'math-6', name: 'Word Problems and Applications', weight: 5, description: 'Translating real-life situations into mathematical statements and solving applied word problems.' },
    { id: 'math-7', name: 'Geometry: Angles, Lines and Triangles', weight: 5, description: 'Understanding properties of angles formed by intersecting lines, triangle types, and angle sum properties.' },
    { id: 'math-8', name: 'Circles: Parts and Properties', weight: 4, description: 'Studying radius, diameter, circumference, area of circles, and properties of chords and arcs.' },
    { id: 'math-9', name: 'Perimeter and Area of Plane Shapes', weight: 4, description: 'Calculating perimeters and areas of triangles, rectangles, squares, and composite plane figures.' },
    { id: 'math-10', name: 'Volume and Surface Area', weight: 4, description: 'Finding volumes and surface areas of cubes, cuboids, cylinders, cones, and spheres.' },
    { id: 'math-11', name: 'Statistics: Pictograms, Bar Charts and Tally', weight: 4, description: 'Reading and interpreting pictograms, bar charts, and tally marks to extract information from data.' },
    { id: 'math-12', name: 'Probability (Simple Events)', weight: 3, description: 'Calculating the probability of simple events using the ratio of favourable to total outcomes.' },
  ]
};

const english: Subject = {
  id: 'english', name: 'English', color: '#059669',
  topics: [
    { id: 'eng-1', name: 'Vocabulary and Word Meanings', weight: 4, description: 'Building vocabulary by learning word meanings, context clues, prefixes, suffixes, and root words.' },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3, description: 'Identifying words with similar and opposite meanings to improve language expression and comprehension.' },
    { id: 'eng-3', name: 'Comprehension Passages (Short)', weight: 5, description: 'Reading short passages carefully to answer questions testing literal understanding and basic inference.' },
    { id: 'eng-4', name: 'Sentence Completion and Fill in the Blanks', weight: 4, description: 'Choosing appropriate words to complete sentences meaningfully using grammatical and contextual cues.' },
    { id: 'eng-5', name: 'Parts of Speech', weight: 4, description: 'Identifying and using nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and articles correctly.' },
    { id: 'eng-6', name: 'Tenses: Present, Past and Future', weight: 4, description: 'Using present, past, and future tenses correctly in simple and continuous forms for clear communication.' },
    { id: 'eng-7', name: 'Singular and Plural Nouns', weight: 3, description: 'Forming plurals correctly, including irregular plurals, and using singular and plural nouns appropriately.' },
    { id: 'eng-8', name: 'Subject-Verb Agreement', weight: 3, description: 'Ensuring verbs agree with their subjects in number and person in all types of sentences.' },
    { id: 'eng-9', name: 'Direct and Indirect Speech (Basic)', weight: 3, description: 'Converting simple statements from direct to indirect speech and understanding reporting verbs.' },
    { id: 'eng-10', name: 'Paragraph Writing', weight: 4, description: 'Writing simple, coherent paragraphs with a clear topic sentence, supporting details, and a concluding sentence.' },
    { id: 'eng-11', name: 'Letter Writing Basics', weight: 3, description: 'Writing formal and informal letters including personal letters, apology letters, and request letters.' },
    { id: 'eng-12', name: 'Idioms and Simple Proverbs', weight: 3, description: 'Understanding common Nigerian and international idioms and proverbs used in everyday communication.' },
  ]
};

const quantReasoning: Subject = {
  id: 'quant-reasoning', name: 'Quantitative Reasoning', color: '#d97706',
  topics: [
    { id: 'qr-1', name: 'Number Patterns and Sequences', weight: 5, description: 'Identifying patterns in sequences of numbers and determining the rule to find subsequent terms.' },
    { id: 'qr-2', name: 'Odd One Out (Numbers)', weight: 4, description: 'Identifying which number in a set does not follow the same pattern or rule as the others.' },
    { id: 'qr-3', name: 'Number Analogies', weight: 4, description: 'Finding the relationship between pairs of numbers and applying the same relationship to find a missing number.' },
    { id: 'qr-4', name: 'Simple Word Problems Involving Operations', weight: 5, description: 'Translating simple word problems into arithmetic operations and solving them accurately.' },
    { id: 'qr-5', name: 'Series Completion (Numbers and Figures)', weight: 4, description: 'Finding the next term in a number or figure series by identifying the underlying pattern.' },
    { id: 'qr-6', name: 'Spatial Reasoning: Patterns and Relationships', weight: 4, description: 'Visualising and manipulating shapes in space to understand geometric relationships and patterns.' },
    { id: 'qr-7', name: 'Coding and Decoding (Simple)', weight: 4, description: 'Finding the rule used to encode letters or numbers and applying it to decode given sequences.' },
    { id: 'qr-8', name: 'Ranking and Ordering Problems', weight: 3, description: 'Determining the position or order of items based on given clues about relative rankings.' },
    { id: 'qr-9', name: 'Figure Series and Sequences', weight: 4, description: 'Identifying patterns in sequences of figures and predicting the next figure in the series.' },
    { id: 'qr-10', name: 'Basic Geometry Reasoning', weight: 4, description: 'Applying basic geometric knowledge to solve reasoning problems involving shapes and spatial relationships.' },
    { id: 'qr-11', name: 'Data Interpretation from Simple Tables', weight: 4, description: 'Reading information from simple tables and performing calculations to answer interpretation questions.' },
    { id: 'qr-12', name: 'Distance, Speed and Time Problems', weight: 4, description: 'Solving problems involving distance, speed, and time relationships including average speed calculations.' },
  ]
};

const verbalReasoning: Subject = {
  id: 'verbal-reasoning', name: 'Verbal Reasoning', color: '#7c3aed',
  topics: [
    { id: 'vr-1', name: 'Word Analogies', weight: 5, description: 'Understanding the relationship between pairs of words and applying the same relationship to find a missing word.' },
    { id: 'vr-2', name: 'Sentence Completion', weight: 4, description: 'Filling in missing words in sentences to make them grammatically correct and semantically meaningful.' },
    { id: 'vr-3', name: 'Synonyms', weight: 3, description: 'Identifying words that have the same or nearly the same meaning as a given word.' },
    { id: 'vr-4', name: 'Antonyms', weight: 3, description: 'Identifying words that have opposite meanings to a given word in context.' },
    { id: 'vr-5', name: 'Jumbled Words and Unscrambling', weight: 4, description: 'Rearranging letters to form meaningful words and arranging words to form coherent sentences.' },
    { id: 'vr-6', name: 'Odd One Out (Words)', weight: 4, description: 'Identifying which word in a group does not belong based on category, meaning, or characteristic.' },
    { id: 'vr-7', name: 'Alphabetical Arrangement', weight: 3, description: 'Arranging words in alphabetical order and finding words at specific positions in an alphabetical list.' },
    { id: 'vr-8', name: 'Word Classification', weight: 3, description: 'Grouping words that share common characteristics such as category, function, or origin.' },
    { id: 'vr-9', name: 'Reading Comprehension and Inference', weight: 5, description: 'Understanding passages, identifying main ideas, and drawing logical conclusions from textual evidence.' },
    { id: 'vr-10', name: 'Meaning from Context', weight: 4, description: 'Inferring the meaning of unfamiliar words from the context in which they appear in a passage.' },
    { id: 'vr-11', name: 'Simple Logic and Deduction', weight: 4, description: 'Using given statements to arrive at logical conclusions through basic deductive reasoning.' },
    { id: 'vr-12', name: 'Cause and Effect Relationships', weight: 3, description: 'Understanding how actions or events lead to specific outcomes and identifying causal connections in text.' },
  ]
};

const civic: Subject = {
  id: 'civic', name: 'Civic Education', color: '#dc2626',
  topics: [
    { id: 'civ-1', name: 'Nigerian National Identity and Anthem', weight: 4, description: 'Learning the Nigerian national anthem, pledge, and understanding what it means to be a Nigerian citizen.' },
    { id: 'civ-2', name: 'Our National Symbols', weight: 3, description: 'Studying the Nigerian coat of arms, flag, national flowers, and other symbols representing national identity.' },
    { id: 'civ-3', name: 'Nigerian Constitution and Federalism', weight: 4, description: 'Understanding the purpose of Nigeria\'s constitution, the federal system, and the relationship between tiers of government.' },
    { id: 'civ-4', name: 'Rights and Responsibilities of Citizens', weight: 4, description: 'Learning the fundamental rights of Nigerian citizens and the corresponding responsibilities toward the nation.' },
    { id: 'civ-5', name: 'National Unity and Diversity', weight: 3, description: 'Understanding Nigeria\'s ethnic, religious, and cultural diversity and the importance of unity in diversity.' },
    { id: 'civ-6', name: 'The Executive, Legislature and Judiciary', weight: 4, description: 'Studying the three arms of government in Nigeria, their functions, and how they check each other.' },
    { id: 'civ-7', name: 'Electoral Process and Voting', weight: 3, description: 'Understanding how elections are conducted in Nigeria, voter registration, and the importance of voting.' },
    { id: 'civ-8', name: 'Civic Virtues: Honesty, Discipline, Justice', weight: 3, description: 'Learning the importance of honesty, discipline, justice, integrity, and other virtues in building a good society.' },
    { id: 'civ-9', name: 'Traffic Rules and Road Safety', weight: 3, description: 'Understanding traffic regulations, road signs, and safety practices for pedestrians and vehicle users.' },
    { id: 'civ-10', name: 'Human Rights and Fundamental Rights', weight: 4, description: 'Studying universal human rights, fundamental rights in the Nigerian constitution, and mechanisms for their protection.' },
    { id: 'civ-11', name: 'Good Governance and Leadership', weight: 3, description: 'Understanding what constitutes good governance, transparent leadership, and accountability in public service.' },
    { id: 'civ-12', name: 'The Legislature and Law Making', weight: 3, description: 'Learning how laws are made at national and state levels and the role of representatives in lawmaking.' },
  ]
};

const naturalScience: Subject = {
  id: 'natural-science', name: 'Natural Science', color: '#0891b2',
  topics: [
    { id: 'ns-1', name: 'Living Things: Characteristics and Classification', weight: 4, description: 'Studying the characteristics of living things and classifying them into plants, animals, and microorganisms.' },
    { id: 'ns-2', name: 'The Human Body: Major Organs and Systems', weight: 5, description: 'Learning the major organs of the human body and understanding the functions of key body systems.' },
    { id: 'ns-3', name: 'Plants: Structure and Functions', weight: 4, description: 'Studying the parts of a plant (root, stem, leaf, flower) and their specific functions in plant life.' },
    { id: 'ns-4', name: 'Animals: Classification and Habitats', weight: 4, description: 'Classifying animals into groups based on characteristics and understanding different habitats they live in.' },
    { id: 'ns-5', name: 'Matter: States and Properties', weight: 4, description: 'Understanding the three states of matter (solid, liquid, gas), their properties, and how matter changes state.' },
    { id: 'ns-6', name: 'Simple Chemical Changes', weight: 3, description: 'Observing and understanding simple chemical changes including rusting, burning, and mixing substances.' },
    { id: 'ns-7', name: 'Force and Motion', weight: 5, description: 'Understanding types of forces, how objects move, speed, direction, and the effects of forces on objects.' },
    { id: 'ns-8', name: 'Energy: Forms and Transformations', weight: 4, description: 'Studying different forms of energy (light, heat, sound, chemical) and how energy is transformed from one form to another.' },
    { id: 'ns-9', name: 'Light and Sound', weight: 4, description: 'Understanding how light travels, reflection, shadows, how sound is produced, and how it travels through different media.' },
    { id: 'ns-10', name: 'The Solar System and Earth', weight: 4, description: 'Learning about the planets, the sun, moon, stars, and understanding day and night and the seasons.' },
    { id: 'ns-11', name: 'Weather and Climate', weight: 3, description: 'Understanding weather elements (rain, wind, temperature), climate differences, and reading simple weather symbols.' },
    { id: 'ns-12', name: 'Safety in the Home and School', weight: 3, description: 'Learning safety rules, first aid basics, hazard identification, and safe practices at home and school.' },
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
  description: 'NCEE (National Common Entrance Examination) is Nigeria\'s exam for admission into Federal Government Colleges (Unity Schools) at the Junior Secondary level (JS2).',
  examPattern: '100 MCQs covering General Paper (English, Mathematics, Quantitative Reasoning, Verbal Reasoning) and 3 selected subject papers. 2 hours 30 minutes total.',
  eligibility: 'Class 12 graduate or equivalent. For Education degree programmes at Nigerian universities. No upper age limit.',
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-02',
  officialSource: 'https://www.education.gov.ng',
};

export default exam;
