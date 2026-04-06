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

const verbalReasoning: Subject = {
  id: 'verbal-reasoning', name: 'Verbal Reasoning', color: '#2563eb',
  topics: [
    { id: 'vr-1', name: 'Analogies (Word Relationships)', weight: 4, description: 'Word relationship types including cause-effect, part-whole, function, and similarity relationships tested in analogy questions for NAT entrance.' },
    { id: 'vr-2', name: 'Synonyms', weight: 3, description: 'Common academic synonyms, usage in context, and techniques for eliminating options in vocabulary-based questions.' },
    { id: 'vr-3', name: 'Antonyms', weight: 3, description: 'Common antonym pairs, understanding opposites in academic context, and vocabulary expansion techniques.' },
    { id: 'vr-4', name: 'Sentence Completion', weight: 4, description: 'Filling appropriate words in blanks to complete grammatically correct and logically coherent sentences in test contexts.' },
    { id: 'vr-5', name: 'One Word Substitution', weight: 3, description: 'Converting phrases into single words, commonly used technical and literary terms for academic vocabulary building.' },
    { id: 'vr-6', name: 'Idioms and Phrases', weight: 3, description: 'Commonly used English idioms, proverbs, and phrases with their meanings and appropriate usage in sentences.' },
    { id: 'vr-7', name: 'Spelling and Vocabulary', weight: 3, description: 'Common spelling errors, confused words, and techniques for vocabulary expansion for academic success.' },
    { id: 'vr-8', name: 'Reading Comprehension', weight: 5, description: 'Strategies for understanding passages, identifying main ideas, making inferences, tone identification, and answering RC questions.' },
    { id: 'vr-9', name: 'Verbal Analogies (Logical)', weight: 4, description: 'Logical relationship between pairs of words, systematic approach to solving analogy problems in entrance tests.' },
    { id: 'vr-10', name: 'Odd One Out (Words)', weight: 3, description: 'Identifying words that do not belong to a semantic category, classification skills for verbal reasoning tests.' },
    { id: 'vr-11', name: 'Jumbled Sentences', weight: 3, description: 'Rearranging jumbled words to form coherent sentences using grammatical and contextual clues.' },
    { id: 'vr-12', name: 'Grammar: Agreement and Usage', weight: 3, description: 'Subject-verb agreement, pronoun-antecedent agreement, and grammatical correctness in standard English.' },
    { id: 'vr-13', name: 'Critical Reading', weight: 4, description: 'Evaluating arguments, identifying assumptions, logical fallacies, and assessing strength of conclusions in passages.' },
    { id: 'vr-14', name: 'Inference and Conclusion', weight: 4, description: 'Drawing logical conclusions from given information, making predictions, and identifying implied meanings.' },
    { id: 'vr-15', name: 'Contextual Vocabulary', weight: 3, description: 'Understanding word meanings in context, distinguishing between denotation and connotation in reading passages.' },
  ]
};

const analyticalReasoning: Subject = {
  id: 'analytical-reasoning', name: 'Analytical Reasoning', color: '#059669',
  topics: [
    { id: 'ar-1', name: 'Blood Relations', weight: 4, description: 'Family relationship problems, coded relationship terminology, and deducing complete family trees from given statements and clues.' },
    { id: 'ar-2', name: 'Direction Sense', weight: 4, description: 'Problems involving cardinal directions, distance traveled, turning angles, and navigation based logical reasoning.' },
    { id: 'ar-3', name: 'Coding-Decoding', weight: 4, description: 'Letter and number coding patterns, analogical relationships in codes, and decoding encrypted messages systematically.' },
    { id: 'ar-4', name: 'Series Completion (Numbers)', weight: 4, description: 'Complete number sequences, identifying patterns, finding next term, and number series logic problems.' },
    { id: 'ar-5', name: 'Series Completion (Letters)', weight: 3, description: 'Letter sequences, alphabetical position patterns, and finding next term in letter series problems.' },
    { id: 'ar-6', name: 'Classification and Odd One Out', weight: 3, description: 'Identifying items that do not belong to a category, classifying objects based on common characteristics.' },
    { id: 'ar-7', name: 'Seating Arrangements', weight: 4, description: 'Linear and circular seating arrangement problems involving ordering by various attributes in row or circular setups.' },
    { id: 'ar-8', name: 'Puzzles (Linear and Circular)', weight: 4, description: 'Various puzzle types including ranking, scheduling, classification puzzles commonly found in analytical reasoning sections.' },
    { id: 'ar-9', name: 'Syllogisms and Logical Deduction', weight: 5, description: 'Deductive reasoning using two premises, Venn diagram method, and drawing valid conclusions from given statements.' },
    { id: 'ar-10', name: 'Statement and Assumptions', weight: 4, description: 'Identifying implicit assumptions in statements, evaluating what must be true based on given premises.' },
    { id: 'ar-11', name: 'Statement and Arguments', weight: 4, description: 'Evaluating strength of arguments, identifying logical flaws, and assessing validity of conclusions.' },
    { id: 'ar-12', name: 'Cause and Effect', weight: 3, description: 'Identifying causal relationships between events, distinguishing correlation from causation, and evaluating causal arguments.' },
    { id: 'ar-13', name: 'Ranking and Ordering', weight: 3, description: 'Problems involving arrangement of people or items based on relative ranks, heights, weights, or other attributes.' },
    { id: 'ar-14', name: 'Venn Diagrams', weight: 4, description: 'Solving problems using Venn diagram representation of sets, intersections, unions, and logical relationships.' },
    { id: 'ar-15', name: 'Cube and Dice Problems', weight: 3, description: 'Visualizing dice positions, counting visible faces, cube cutting problems, and spatial reasoning with dice and cubes.' },
  ]
};

const quantitativeReasoning: Subject = {
  id: 'quantitative-reasoning', name: 'Quantitative Reasoning', color: '#d97706',
  topics: [
    { id: 'qr-1', name: 'Number System and Properties', weight: 4, description: 'Properties of integers, fractions, decimals, percentages, ratios, and fundamental operations on different number sets.' },
    { id: 'qr-2', name: 'Fractions and Decimals', weight: 3, description: 'Conversions between fractions and decimals, operations on fractions, and applications in real-world problems.' },
    { id: 'qr-3', name: 'Percentages', weight: 4, description: 'Percentage calculations, percentage increase/decrease, profit-loss percentages, and applications in statistics and data analysis.' },
    { id: 'qr-4', name: 'Profit and Loss', weight: 4, description: 'Cost price, selling price, profit percentage, loss percentage, discount calculations, and marked price problems.' },
    { id: 'qr-5', name: 'Ratio and Proportion', weight: 4, description: 'Direct and inverse proportions, ratio calculations, and solving word problems involving proportional relationships.' },
    { id: 'qr-6', name: 'Time, Distance and Work', weight: 4, description: 'Speed-time-distance relationships, work efficiency problems, pipes and cisterns, and time-distance graphs.' },
    { id: 'qr-7', name: 'Simple and Compound Interest', weight: 3, description: 'Interest calculations using simple and compound interest formulas, principal, rate, time, and annuity concepts.' },
    { id: 'qr-8', name: 'Algebraic Expressions', weight: 4, description: 'Algebraic expressions simplification, identities, factorization, and basic algebraic operations and manipulation.' },
    { id: 'qr-9', name: 'Linear Equations', weight: 4, description: 'Formation and solution of linear equations in one and two variables with word problem applications.' },
    { id: 'qr-10', name: 'Quadratic Equations', weight: 3, description: 'Methods of solving quadratic equations including factorization, completing square, and quadratic formula.' },
    { id: 'qr-11', name: 'Geometry: Lines, Angles and Triangles', weight: 4, description: 'Properties of lines, angle relationships, triangle theorems, congruence, similarity, and Pythagorean theorem.' },
    { id: 'qr-12', name: 'Circles and Mensuration', weight: 3, description: 'Circle properties, chord-tangent relationships, area and perimeter calculations for various 2D shapes.' },
    { id: 'qr-13', name: 'Data Interpretation (Charts/Tables)', weight: 4, description: 'Reading and interpreting data from tables, bar graphs, line graphs, pie charts for analytical decision making.' },
    { id: 'qr-14', name: 'Probability and Permutations', weight: 4, description: 'Basic probability concepts, permutations, combinations, probability theorems, and applications in statistics.' },
    { id: 'qr-15', name: 'Averages and Statistics', weight: 3, description: 'Mean, median, mode calculations, weighted averages, standard deviation, and statistical analysis basics.' },
  ]
};

const subjectKnowledge: Subject = {
  id: 'subject-knowledge', name: 'Subject Knowledge', color: '#7c3aed',
  topics: [
    { id: 'sub-1', name: 'Physics: Mechanics', weight: 4, description: 'Laws of motion, force and momentum, work-energy theorem, gravitation, and mechanical principles governing physical systems.' },
    { id: 'sub-2', name: 'Physics: Electricity and Magnetism', weight: 4, description: 'Electric circuits, magnetic fields, electromagnetic induction, and fundamental concepts of electromagnetism.' },
    { id: 'sub-3', name: 'Chemistry: Physical Chemistry', weight: 4, description: 'Chemical equilibrium, rates of reactions, thermodynamics, electrochemistry, and solution chemistry.' },
    { id: 'sub-4', name: 'Chemistry: Organic Chemistry', weight: 4, description: 'Hydrocarbons, functional groups, organic reactions, isomerism, and basic organic chemistry principles.' },
    { id: 'sub-5', name: 'Biology: Cell Biology and Genetics', weight: 4, description: 'Cell structure, cell division, DNA replication, gene expression, and fundamental genetics principles.' },
    { id: 'sub-6', name: 'Biology: Human Physiology', weight: 4, description: 'Human body systems including digestive, circulatory, respiratory, nervous, and endocrine system functions.' },
    { id: 'sub-7', name: 'Mathematics: Algebra and Calculus', weight: 4, description: 'Algebraic expressions, equations, limits, derivatives, integrals, and applications of calculus.' },
    { id: 'sub-8', name: 'Mathematics: Geometry and Trigonometry', weight: 4, description: 'Plane geometry, solid geometry, trigonometric ratios, identities, and solving triangles.' },
    { id: 'sub-9', name: 'Computer Science: Fundamentals', weight: 3, description: 'Basic computer concepts, hardware components, software types, operating systems, and IT literacy basics.' },
    { id: 'sub-10', name: 'Computer Science: Programming Basics', weight: 3, description: 'Programming fundamentals, algorithms, flowcharts, basic coding concepts, and problem-solving approaches.' },
  ]
};

const subjects = [verbalReasoning, analyticalReasoning, quantitativeReasoning, subjectKnowledge];

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
    { subject: 'Verbal Reasoning', topics: ['Analogies (Word Relationships)', 'Sentence Completion', 'Reading Comprehension', 'Critical Reading', 'Inference and Conclusion', 'Spelling and Vocabulary'] },
    { subject: 'Analytical Reasoning', topics: ['Coding-Decoding', 'Blood Relations', 'Syllogisms and Logical Deduction', 'Seating Arrangements', 'Puzzles (Linear and Circular)', 'Series Completion (Numbers)'] },
    { subject: 'Quantitative Reasoning', topics: ['Number System and Properties', 'Percentages', 'Profit and Loss', 'Time, Distance and Work', 'Linear Equations', 'Data Interpretation (Charts/Tables)'] },
    { subject: 'Subject Knowledge', topics: ['Physics: Mechanics', 'Physics: Electricity and Magnetism', 'Chemistry: Physical Chemistry', 'Biology: Cell Biology and Genetics', 'Mathematics: Algebra and Calculus'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'nat-i',
  examName: 'NAT-I (NTS)',
  country: 'pakistan',
  description: `NAT\-I\ \(NTS\)\ is\ Pakistan's\ aptitude\ test\ used\ by\ various\ universities\ for\ admission\ decisions\.\ Tests\ verbal,\ analytical,\ and\ quantitative\ reasoning\ along\ with\ subject\ knowledge\.`,
  examPattern: `100\ MCQs\ in\ 2\ hours\.\ Sections:\ Verbal\ \(20\),\ Analytical\ \(20\),\ Quantitative\ \(20\),\ Subject\ \(40\)\.\ Score\ reported\ on\ 100\-point\ scale\.`,
  eligibility: `Bachelor's\ degree\ \(16\ years\ of\ education\)\ for\ postgraduate\ programs\.\ HSSC\ for\ undergraduate\.\ Varies\ by\ institution\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.nts.org.pk',
};

export default exam;
