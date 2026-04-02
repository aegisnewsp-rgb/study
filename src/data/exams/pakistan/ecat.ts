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

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#2563eb',
  topics: [
    { id: 'phy-1', name: 'Measurement and Units', weight: 2, description: 'Understanding SI units, significant figures, precision, accuracy, and using measuring instruments correctly.' },
    { id: 'phy-2', name: 'Kinematics', weight: 5, description: 'Describing motion using displacement, velocity, acceleration equations, and interpreting motion graphs.' },
    { id: 'phy-3', name: "Newton's Laws of Motion", weight: 5, description: 'Applying Newton\'s three laws to solve problems involving forces, friction, tension, and acceleration.' },
    { id: 'phy-4', name: 'Work, Energy and Power', weight: 4, description: 'Calculating work, kinetic and potential energy, power, and understanding energy conversion and conservation.' },
    { id: 'phy-5', name: 'Circular Motion and Gravitation', weight: 4, description: 'Studying centripetal force, angular velocity, orbital motion, and Newton\'s law of gravitation.' },
    { id: 'phy-6', name: 'Fluid Statics and Dynamics', weight: 3, description: 'Understanding pressure, Pascal\'s principle, Archimedes\' principle, and fluid flow using Bernoulli\'s theorem.' },
    { id: 'phy-7', name: 'Oscillations and SHM', weight: 4, description: 'Studying simple harmonic motion of pendulums and springs, period, frequency, and energy in oscillating systems.' },
    { id: 'phy-8', name: 'Wave Motion and Sound', weight: 4, description: 'Understanding wave parameters, wave equations, sound propagation, Doppler effect, and resonance.' },
    { id: 'phy-9', name: 'Heat, Temperature and Thermodynamics', weight: 4, description: 'Studying heat transfer, calorimetry, the gas laws, and the first and second laws of thermodynamics.' },
    { id: 'phy-10', name: 'Electrostatics and Electric Field', weight: 5, description: 'Understanding Coulomb\'s law, electric fields, electric potential, and field lines around charges.' },
    { id: 'phy-11', name: 'Current Electricity and Circuits', weight: 5, description: 'Applying Ohm\'s law, Kirchhoff\'s laws, analysing complex circuits, and understanding emf and internal resistance.' },
    { id: 'phy-12', name: 'Magnetic Effects of Current', weight: 4, description: 'Understanding magnetic fields around current-carrying conductors, the motor effect, and force on charges.' },
    { id: 'phy-13', name: 'Electromagnetic Induction (EMI)', weight: 4, description: 'Studying Faraday\'s and Lenz\'s laws, induced EMF, self-induction, and applications in generators.' },
    { id: 'phy-14', name: 'Alternating Current (AC)', weight: 3, description: 'Understanding AC waveforms, RMS values, capacitive and inductive reactance, and AC circuit analysis.' },
    { id: 'phy-15', name: 'Geometrical Optics', weight: 5, description: 'Applying laws of reflection and refraction, lens and mirror formulas, and image formation in optical devices.' },
    { id: 'phy-16', name: 'Wave Optics and Interference', weight: 4, description: 'Understanding interference, diffraction gratings, Young\'s double-slit experiment, and thin film interference.' },
    { id: 'phy-17', name: 'Modern Physics and Photoelectric Effect', weight: 4, description: 'Studying photon concept, photoelectric equation, Planck\'s constant, and Einstein\'s explanation of the photoelectric effect.' },
    { id: 'phy-18', name: 'Atomic Spectra and Bohr Model', weight: 4, description: 'Understanding hydrogen spectrum, energy levels, Bohr\'s postulates, and electron transitions between orbits.' },
    { id: 'phy-19', name: 'Nuclear Physics and Radioactivity', weight: 3, description: 'Studying nuclear decay types, half-life, fission, fusion, and radiation safety precautions.' },
    { id: 'phy-20', name: 'Electronics and Semiconductors', weight: 3, description: 'Understanding p-n junctions, diodes, transistors, logic gates, and basic electronic circuit operations.' },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#059669',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure and Periodic Table', weight: 4, description: 'Understanding electron configuration, quantum numbers, orbital shapes, and periodic trends in element properties.' },
    { id: 'chem-2', name: 'Chemical Bonding and Molecular Structure', weight: 5, description: 'Studying ionic, covalent, and metallic bonding, VSEPR theory, hybridisation, and intermolecular forces.' },
    { id: 'chem-3', name: 'States of Matter (Gases, Liquids, Solids)', weight: 3, description: 'Applying kinetic molecular theory, gas laws (Boyle\'s, Charles\'s, Avogadro\'s), and understanding phase changes.' },
    { id: 'chem-4', name: 'Stoichiometry and Chemical Calculations', weight: 5, description: 'Writing balanced equations, performing mole calculations, and solving quantitative stoichiometric problems.' },
    { id: 'chem-5', name: 'Thermochemistry and Energetics', weight: 4, description: 'Calculating enthalpy changes, understanding Hess\'s law, bond energies, and energy profile diagrams.' },
    { id: 'chem-6', name: 'Chemical Equilibrium', weight: 4, description: 'Understanding reversible reactions, equilibrium constants (Kp and Kc), and Le Chatelier\'s principle applications.' },
    { id: 'chem-7', name: 'Acids, Bases and Ionic Equilibrium', weight: 4, description: 'Understanding acid-base theories, pH calculations, buffer solutions, hydrolysis, and indicators.' },
    { id: 'chem-8', name: 'Electrochemistry', weight: 4, description: 'Understanding electrochemical cells, standard electrode potentials, electrolysis, and their industrial applications.' },
    { id: 'chem-9', name: 'Chemical Kinetics', weight: 3, description: 'Studying reaction rates, rate laws, order of reaction, half-life, and factors affecting reaction rates.' },
    { id: 'chem-10', name: 'Periodic Properties and s-Block Elements', weight: 3, description: 'Understanding trends in the periodic table and the properties of alkali and alkaline earth metals.' },
    { id: 'chem-11', name: 'p-Block Elements', weight: 3, description: 'Studying the properties and reactions of groups 13-18 elements, including nitrogen, oxygen, and halogen families.' },
    { id: 'chem-12', name: 'Transition Metals and Coordination Chemistry', weight: 3, description: 'Understanding variable oxidation states, complex ion formation, colour of complexes, and catalytic properties.' },
    { id: 'chem-13', name: 'Organic Chemistry: Classification and Nomenclature', weight: 4, description: 'Learning IUPAC naming conventions, functional groups, isomerism, and structural representation.' },
    { id: 'chem-14', name: 'Alkanes, Alkenes and Alkynes', weight: 4, description: 'Studying preparation, properties, and reactions of saturated and unsaturated hydrocarbons including addition reactions.' },
    { id: 'chem-15', name: 'Alcohols, Phenols and Ethers', weight: 3, description: 'Understanding the structure, preparation, properties, and reactions of alcohols, phenols, and ether compounds.' },
    { id: 'chem-16', name: 'Aldehydes, Ketones and Carboxylic Acids', weight: 4, description: 'Studying the carbonyl group, oxidation and reduction reactions, and preparations of aldehydes and ketones.' },
    { id: 'chem-17', name: 'Amines and Nitrogen Compounds', weight: 3, description: 'Understanding classification, basicity, preparation, and reactions of amine compounds.' },
    { id: 'chem-18', name: 'Biomolecules and Polymers', weight: 3, description: 'Studying carbohydrates, proteins, amino acids, nucleic acids, and addition and condensation polymerisation.' },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#d97706',
  topics: [
    { id: 'math-1', name: 'Quadratic Equations and Inequalities', weight: 4, description: 'Solving quadratic equations by various methods and solving inequalities involving quadratic expressions.' },
    { id: 'math-2', name: 'Sequences, Series and Arithmetic Progression', weight: 4, description: 'Finding nth terms and sums of arithmetic progressions and solving AP-related word problems.' },
    { id: 'math-3', name: 'Geometric Progression and Binomial Theorem', weight: 4, description: 'Understanding GP terms and sums, and applying the binomial theorem for positive integer indices.' },
    { id: 'math-4', name: 'Trigonometry: Identities and Equations', weight: 5, description: 'Using trigonometric identities to simplify expressions and solving trigonometric equations within given intervals.' },
    { id: 'math-5', name: 'Trigonometry: Solutions of Triangles', weight: 4, description: 'Applying sine rule, cosine rule, and area of triangle formulas to solve non-right-angled triangle problems.' },
    { id: 'math-6', name: 'Straight Line and Coordinate Geometry', weight: 4, description: 'Finding equations of lines, distances, midpoints, angles between lines, and point-to-line distance formulas.' },
    { id: 'math-7', name: 'Circle, Parabola, Ellipse and Hyperbola', weight: 4, description: 'Understanding standard equations, properties, and applications of conic sections in coordinate geometry.' },
    { id: 'math-8', name: 'Limits and Continuity', weight: 4, description: 'Evaluating limits of functions, understanding continuity, and applying limit theorems in calculus problems.' },
    { id: 'math-9', name: 'Differentiation and Applications', weight: 5, description: 'Differentiating polynomial, trigonometric, exponential, and logarithmic functions and applying derivatives to practical problems.' },
    { id: 'math-10', name: 'Integration and Definite Integrals', weight: 5, description: 'Integrating functions, evaluating definite integrals, and finding areas under curves using integration.' },
    { id: 'math-11', name: 'Vectors in 2D and 3D', weight: 4, description: 'Understanding vector representation, scalar and vector products, and applying vectors to geometry problems.' },
    { id: 'math-12', name: 'Matrices and Determinants', weight: 4, description: 'Performing matrix operations, calculating determinants up to 3x3, and solving simultaneous equations.' },
    { id: 'math-13', name: 'Probability and Permutations', weight: 4, description: 'Calculating probabilities of single and combined events, permutations, and combinations formulas.' },
    { id: 'math-14', name: 'Statistics and Data Analysis', weight: 3, description: 'Calculating mean, median, mode, standard deviation, and interpreting data from frequency distributions.' },
    { id: 'math-15', name: 'Complex Numbers', weight: 3, description: 'Understanding complex number operations, Argand diagrams, modulus, argument, and polar representation.' },
    { id: 'math-16', name: 'Exponential and Logarithmic Functions', weight: 3, description: 'Applying laws of logarithms, solving exponential and logarithmic equations, and understanding their graphs.' },
    { id: 'math-17', name: 'Partial Fractions', weight: 3, description: 'Resolving rational expressions into partial fractions for integration and algebraic simplification.' },
    { id: 'math-18', name: 'Analytical Geometry: Lines and Conics', weight: 4, description: 'Studying equations of tangents and normals to conics and applying analytical methods to geometric problems.' },
    { id: 'math-19', name: 'Differential Equations Basics', weight: 3, description: 'Understanding differential equations, separable equations, and applying them to basic engineering problems.' },
    { id: 'math-20', name: 'Mathematical Induction', weight: 2, description: 'Using mathematical induction to prove statements involving natural numbers and series summation.' },
  ]
};

const english: Subject = {
  id: 'english', name: 'English', color: '#0891b2',
  topics: [
    { id: 'eng-1', name: 'Vocabulary Building', weight: 4, description: 'Expanding vocabulary through root words, prefixes, suffixes, and using new words correctly in context.' },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3, description: 'Identifying words with similar and opposite meanings to improve language precision and reading comprehension.' },
    { id: 'eng-3', name: 'Grammar: Parts of Speech', weight: 4, description: 'Identifying and correctly using nouns, pronouns, verbs, adjectives, adverbs, prepositions, and conjunctions.' },
    { id: 'eng-4', name: 'Sentence Structure and Construction', weight: 4, description: 'Building grammatically correct sentences, avoiding fragments and run-ons, and varying sentence patterns.' },
    { id: 'eng-5', name: 'Tenses and Their Usage', weight: 4, description: 'Using all tenses accurately in simple, continuous, perfect, and perfect continuous forms in context.' },
    { id: 'eng-6', name: 'Active and Passive Voice', weight: 3, description: 'Converting sentences between active and passive voice and selecting the appropriate voice for clarity.' },
    { id: 'eng-7', name: 'Direct and Indirect Speech', weight: 3, description: 'Accurately converting direct speech to indirect speech and handling statements, questions, and commands.' },
    { id: 'eng-8', name: 'Comprehension Passages', weight: 5, description: 'Reading passages critically to answer literal, inferential, and evaluative questions with accuracy and speed.' },
    { id: 'eng-9', name: 'Spotting Errors', weight: 4, description: 'Identifying grammatical errors in sentences including subject-verb agreement, tense consistency, and word choice.' },
    { id: 'eng-10', name: 'Sentence Completion and Fill in the Blanks', weight: 4, description: 'Choosing the correct words to complete sentences using grammatical, contextual, and collocation cues.' },
  ]
};

const subjects = [physics, chemistry, mathematics, english];

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
    { subject: 'Physics', topics: ['Kinematics', "Newton's Laws of Motion", 'Electrostatics and Electric Field', 'Current Electricity and Circuits', 'Differentiation and Applications', 'Geometrical Optics'] },
    { subject: 'Chemistry', topics: ['Atomic Structure and Periodic Table', 'Chemical Bonding and Molecular Structure', 'Stoichiometry and Chemical Calculations', 'Electrochemistry', 'Organic Chemistry: Classification and Nomenclature', 'Alkanes, Alkenes and Alkynes'] },
    { subject: 'Mathematics', topics: ['Trigonometry: Identities and Equations', 'Differentiation and Applications', 'Integration and Definite Integrals', 'Quadratic Equations and Inequalities', 'Probability and Permutations', 'Vectors in 2D and 3D'] },
    { subject: 'English', topics: ['Comprehension Passages', 'Vocabulary Building', 'Spotting Errors', 'Sentence Structure and Construction', 'Tenses and Their Usage'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'ecat',
  examName: 'ECAT (Engineering College Admission Test)',
  country: 'pakistan',
  description: 'ECAT (Engineering College Admission Test) is Pakistan\'s test for engineering university admissions. Conducted by UET Lahore and other universities, it covers Physics, Chemistry, Mathematics, and English.',
  examPattern: '100 MCQs, 2 hours, 400 marks — Physics(30), Chemistry(30), Mathematics(30), English(10). Each correct answer 4 marks.',
  eligibility: 'FSc (Pre-Engineering) or equivalent with minimum 60% aggregate. Candidates who appeared in HSSC Part-I can also apply provisionally.',
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-02',
  officialSource: 'https://www.ecat.gov.pk',
};

export default exam;
