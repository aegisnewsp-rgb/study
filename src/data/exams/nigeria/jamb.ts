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
  id: 'english', name: 'English Language', color: '#2563eb',
  topics: [
    { id: 'eng-1', name: 'Vocabulary and Word Meanings', weight: 4, description: 'Building vocabulary through context clues, word roots, prefixes, suffixes, and understanding meanings in passage-based questions.' },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3, description: 'Identifying words with similar and opposite meanings to improve comprehension and language precision.' },
    { id: 'eng-3', name: 'Comprehension Passages', weight: 5, description: 'Reading passages carefully to answer literal, inferential, and evaluative questions testing understanding and analysis.' },
    { id: 'eng-4', name: 'Grammar: Parts of Speech', weight: 4, description: 'Identifying and correctly using nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections.' },
    { id: 'eng-5', name: 'Tenses and Their Usage', weight: 4, description: 'Using present, past, and future tenses correctly in simple, continuous, perfect, and perfect continuous forms.' },
    { id: 'eng-6', name: 'Active and Passive Voice', weight: 3, description: 'Converting sentences between active and passive voice and recognising when each form is preferred.' },
    { id: 'eng-7', name: 'Direct and Indirect Speech', weight: 3, description: 'Reporting statements, questions, and commands accurately by converting direct speech to indirect speech.' },
    { id: 'eng-8', name: 'Sentence Structure and Synthesis', weight: 4, description: 'Constructing grammatically correct sentences, joining clauses with conjunctions, and avoiding common sentence errors.' },
    { id: 'eng-9', name: 'Lexis and Structure', weight: 4, description: 'Understanding word usage patterns, collocations, phrasal verbs, and structural rules specific to JAMB English.' },
    { id: 'eng-10', name: 'Pronouns and Agreement', weight: 3, description: 'Ensuring pronouns agree with their antecedents in number, gender, and person throughout sentences.' },
    { id: 'eng-11', name: 'Prepositions', weight: 3, description: 'Using prepositions correctly for time, place, direction, and manner in various sentence contexts.' },
    { id: 'eng-12', name: 'Question Tags and Short Answers', weight: 3, description: 'Forming question tags correctly and providing appropriate short answers in affirmative and negative contexts.' },
    { id: 'eng-13', name: 'Conditional Sentences', weight: 3, description: 'Constructing zero, first, second, and third conditionals accurately to express real and hypothetical situations.' },
    { id: 'eng-14', name: 'Paragraph and Essay Writing', weight: 4, description: 'Planning, organising, and writing coherent paragraphs and essays on common JAMB topics with clear arguments.' },
    { id: 'eng-15', name: 'Summary and Inference from Passages', weight: 4, description: 'Identifying main ideas, summarising passages, and drawing logical inferences from textual evidence.' },
  ]
};

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#059669',
  topics: [
    { id: 'phy-1', name: 'Motion in One Dimension', weight: 5, description: 'Analysing straight-line motion using displacement, velocity, acceleration, and interpreting motion graphs.' },
    { id: 'phy-2', name: 'Motion in Two Dimensions', weight: 4, description: 'Studying projectile motion, relative velocity, and applying vector analysis to two-dimensional problems.' },
    { id: 'phy-3', name: "Newton's Laws of Motion", weight: 5, description: 'Applying Newton\'s three laws to solve equilibrium, friction, and acceleration problems in mechanical systems.' },
    { id: 'phy-4', name: 'Work, Energy and Power', weight: 5, description: 'Calculating work done, kinetic and potential energy, power, and understanding energy conversion in machines.' },
    { id: 'phy-5', name: 'Circular Motion and Gravitation', weight: 4, description: 'Understanding centripetal force, orbital motion, Kepler\'s laws, and gravitational field concepts.' },
    { id: 'phy-6', name: 'Waves and Wave Motion', weight: 4, description: 'Studying wave properties including amplitude, frequency, wavelength, wave speed, and wave equations.' },
    { id: 'phy-7', name: 'Sound Waves', weight: 3, description: 'Understanding sound propagation, speed of sound, Doppler effect, echo, and resonance phenomena.' },
    { id: 'phy-8', name: 'Light and Geometrical Optics', weight: 5, description: 'Applying laws of reflection and refraction, total internal reflection, and using lenses and mirrors in optical systems.' },
    { id: 'phy-9', name: 'Wave Optics (Interference and Diffraction)', weight: 4, description: 'Understanding interference, diffraction patterns, Young\'s double-slit experiment, and thin film effects.' },
    { id: 'phy-10', name: 'Electrostatics', weight: 5, description: 'Understanding Coulomb\'s law, electric fields, potential, and electric force calculations for point charges.' },
    { id: 'phy-11', name: 'Capacitors and Capacitance', weight: 4, description: 'Studying capacitance, factors affecting capacitance, energy stored in capacitors, and capacitor combinations.' },
    { id: 'phy-12', name: 'Electric Current and Circuits', weight: 5, description: 'Applying Ohm\'s law, Kirchhoff\'s laws, analysing series-parallel circuits, and calculating circuit parameters.' },
    { id: 'phy-13', name: 'Magnetic Field and Electromagnetism', weight: 4, description: 'Understanding magnetic fields around conductors, force on moving charges, and electromagnetic effects.' },
    { id: 'phy-14', name: 'Electromagnetic Induction', weight: 4, description: 'Studying Faraday\'s law, Lenz\'s law, induced EMF, self-induction, and applications in generators and transformers.' },
    { id: 'phy-15', name: 'Modern Physics: Photoelectric Effect', weight: 4, description: 'Understanding photon concept, photoelectric equations, Einstein\'s explanation, and threshold frequency.' },
    { id: 'phy-16', name: 'Atomic Structure and Bohr Model', weight: 4, description: 'Studying electron energy levels, spectral series, hydrogen atom model, and atomic transitions.' },
    { id: 'phy-17', name: 'Nuclear Physics and Radioactivity', weight: 4, description: 'Understanding nuclear decay, half-life, alpha, beta, gamma radiation, fission, and fusion reactions.' },
    { id: 'phy-18', name: 'Heat and Thermodynamics', weight: 4, description: 'Studying heat transfer, specific heat capacity, the three gas laws, and the first and second laws of thermodynamics.' },
    { id: 'phy-19', name: 'Simple Harmonic Motion', weight: 4, description: 'Understanding oscillation of springs and pendulums, period, frequency, energy in SHM, and damping.' },
    { id: 'phy-20', name: 'Fluid Mechanics', weight: 3, description: 'Applying Pascal\'s principle, Bernoulli\'s equation, and understanding pressure, upthrust, and fluid flow.' },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#d97706',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure and the Periodic Table', weight: 4, description: 'Understanding electron configuration, atomic orbitals, periodic trends, and how they relate to element properties.' },
    { id: 'chem-2', name: 'Chemical Bonding and Molecular Structure', weight: 5, description: 'Understanding ionic, covalent, and metallic bonding, intermolecular forces, VSEPR theory, and hybridisation.' },
    { id: 'chem-3', name: 'States of Matter: Gases, Liquids and Solids', weight: 4, description: 'Applying gas laws (Boyle\'s, Charles\'s, Avogadro\'s, ideal gas equation) and understanding changes of state.' },
    { id: 'chem-4', name: 'Stoichiometry and Chemical Equations', weight: 5, description: 'Writing balanced equations, performing mole calculations, and solving stoichiometric problems accurately.' },
    { id: 'chem-5', name: 'Thermochemistry and Energetics', weight: 4, description: 'Calculating enthalpy changes, understanding exothermic and endothermic reactions, and Hess\'s law applications.' },
    { id: 'chem-6', name: 'Chemical Kinetics', weight: 4, description: 'Studying reaction rates, rate laws, factors affecting rates, order of reaction, and activation energy.' },
    { id: 'chem-7', name: 'Chemical Equilibrium', weight: 4, description: 'Understanding reversible reactions, equilibrium constant expressions, Le Chatelier\'s principle, and equilibrium calculations.' },
    { id: 'chem-8', name: 'Acids, Bases and Salts', weight: 5, description: 'Understanding acid-base theories, pH calculations, buffer solutions, hydrolysis, and titrations.' },
    { id: 'chem-9', name: 'Electrochemistry', weight: 4, description: 'Understanding galvanic and electrolytic cells, standard electrode potentials, and applications in corrosion and plating.' },
    { id: 'chem-10', name: 'Organic Chemistry: Hydrocarbons', weight: 5, description: 'Studying alkanes, alkenes, alkynes, their preparation, properties, reactions, and naming conventions.' },
    { id: 'chem-11', name: 'Alkyl Halides and Alcohols', weight: 4, description: 'Understanding substitution and elimination reactions, properties of alcohols, and their industrial importance.' },
    { id: 'chem-12', name: 'Aldehydes, Ketones and Carboxylic Acids', weight: 4, description: 'Studying carbonyl compounds, their preparation, properties, reactions, and applications in daily life.' },
    { id: 'chem-13', name: 'Amines and Amides', weight: 3, description: 'Understanding the structure, nomenclature, basicity, and reactions of amine and amide compounds.' },
    { id: 'chem-14', name: 'Polymers and Biomolecules', weight: 3, description: 'Studying addition and condensation polymerisation, natural and synthetic polymers, proteins, and carbohydrates.' },
    { id: 'chem-15', name: 'Separation Techniques', weight: 3, description: 'Learning distillation, chromatography, filtration, crystallisation, and sublimation for separating mixtures.' },
    { id: 'chem-16', name: 'Redox Reactions', weight: 4, description: 'Understanding oxidation and reduction, oxidation numbers, balancing redox equations, and electrochemical series.' },
    { id: 'chem-17', name: 'Periodic Properties and Group Chemistry', weight: 3, description: 'Studying trends down groups and across periods including ionisation energy, electronegativity, and atomic radius.' },
    { id: 'chem-18', name: 'Transition Metals', weight: 3, description: 'Understanding properties of transition metals, complex ions, variable oxidation states, and their applications.' },
    { id: 'chem-19', name: 'Equilibrium and Ionic Equilibrium', weight: 4, description: 'Studying solubility product, common ion effect, and calculations involving ionic equilibria in solutions.' },
    { id: 'chem-20', name: 'Environmental Chemistry', weight: 2, description: 'Understanding air and water pollution, greenhouse effect, ozone depletion, and green chemistry concepts.' },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#7c3aed',
  topics: [
    { id: 'math-1', name: 'Number and Numeration', weight: 4, description: 'Working with integers, fractions, decimals, surds, and understanding number bases for computational problems.' },
    { id: 'math-2', name: 'Algebraic Processes', weight: 5, description: 'Manipulating algebraic expressions, factorisation, simplification, and solving algebraic problems efficiently.' },
    { id: 'math-3', name: 'Geometry: Lines, Angles and Triangles', weight: 5, description: 'Studying properties of lines, angles, polygons, and triangles including similarity and congruence criteria.' },
    { id: 'math-4', name: 'Circles and Chords', weight: 4, description: 'Understanding circle theorems, arcs, chords, tangents, angle properties, and their applications in problems.' },
    { id: 'math-5', name: 'Trigonometry: Ratios and Identities', weight: 5, description: 'Using sine, cosine, tangent ratios, solving trigonometric equations, and applying fundamental identities.' },
    { id: 'math-6', name: 'Trigonometry: Solutions of Triangles', weight: 4, description: 'Applying sine rule, cosine rule, and area formulas to solve problems involving non-right-angled triangles.' },
    { id: 'math-7', name: 'Coordinate Geometry', weight: 4, description: 'Finding equations of lines, distance between points, midpoint, gradient, and intersection of straight lines.' },
    { id: 'math-8', name: 'Calculus: Differentiation', weight: 5, description: 'Finding derivatives of polynomial, trigonometric, and exponential functions and applying to practical problems.' },
    { id: 'math-9', name: 'Calculus: Integration', weight: 5, description: 'Integrating functions, finding areas under curves, and solving problems involving definite and indefinite integrals.' },
    { id: 'math-10', name: 'Statistics and Data Presentation', weight: 4, description: 'Organising data into frequency distributions, histograms, bar charts, and calculating appropriate measures.' },
    { id: 'math-11', name: 'Probability', weight: 4, description: 'Calculating probabilities using classical definition, tree diagrams, and understanding independent and dependent events.' },
    { id: 'math-12', name: 'Permutations and Combinations', weight: 4, description: 'Applying formulas for arrangements and selections to solve counting problems in probability and statistics.' },
    { id: 'math-13', name: 'Sequence and Series (AP and GP)', weight: 4, description: 'Finding nth terms and sums of arithmetic and geometric progressions and solving related word problems.' },
    { id: 'math-14', name: 'Quadratic Equations', weight: 4, description: 'Solving quadratic equations by factorisation, completing the square, and using the quadratic formula.' },
    { id: 'math-15', name: 'Matrices and Determinants', weight: 3, description: 'Performing matrix operations, calculating determinants, and solving simultaneous equations using matrices.' },
    { id: 'math-16', name: 'Vectors in Two Dimensions', weight: 3, description: 'Understanding vector representation, magnitude, direction, adding vectors, and resolving vectors into components.' },
    { id: 'math-17', name: 'Area and Perimeter of Plane Figures', weight: 3, description: 'Calculating perimeters and areas of triangles, quadrilaterals, circles, and composite plane shapes.' },
    { id: 'math-18', name: 'Three-Dimensional Geometry Basics', weight: 3, description: 'Understanding directions in space, angles between lines and planes, and applying 3D geometry concepts.' },
    { id: 'math-19', name: 'Logarithms and Exponentials', weight: 3, description: 'Applying laws of logarithms, solving exponential equations, and using log tables for calculations.' },
    { id: 'math-20', name: 'Sets and Set Theory', weight: 3, description: 'Understanding set notation, Venn diagrams, union, intersection, complement, and solving set problems.' },
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
  description: 'JAMB UTME is Nigeria\'s unified tertiary matriculation exam, mandatory for university admission. Covers English and three subject combinations based on candidate\'s intended course.',
  examPattern: '180 MCQs, 2 hours, 400 marks total. Four subjects (Language + 3 UTAS subjects based on programme choice). 45 minutes per subject. 1 mark per correct answer.',
  eligibility: 'UTME: Class 12 graduate or final-year student, age 16+. Direct Entry: ND/NCE/A-Level or equivalent, minimum 5 credits in WASSCE or NECO including English and Mathematics.',
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-02',
  officialSource: 'https://www.jamb.gov.ng',
};

export default exam;
