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
    { id: 'eng-1', name: 'Reading Comprehension', weight: 5, description: 'Understanding and interpreting written passages, answering inference and literal questions from diverse text types.' },
    { id: 'eng-2', name: 'Vocabulary and Usage', weight: 4, description: 'Building word power through context clues, word formation, and appropriate usage in sentences.' },
    { id: 'eng-3', name: 'Grammar: Tenses and Agreement', weight: 4, description: 'Mastering verb tenses, subject-verb agreement, and their correct application in speech and writing.' },
    { id: 'eng-4', name: 'Sentence Structure', weight: 4, description: 'Learning sentence elements, clause types, and constructing grammatically correct and varied sentences.' },
    { id: 'eng-5', name: 'Active and Passive Voice', weight: 3, description: 'Converting between active and passive constructions and understanding when each voice is appropriate.' },
    { id: 'eng-6', name: 'Direct and Indirect Speech', weight: 3, description: 'Reporting what someone said by transforming direct quotes into indirect statements accurately.' },
    { id: 'eng-7', name: 'Paragraph and Essay Writing', weight: 4, description: 'Developing organized, coherent paragraphs and full essays with clear thesis, supporting details, and conclusion.' },
    { id: 'eng-8', name: 'Letter Writing', weight: 3, description: 'Composing formal and informal letters including business correspondence, applications, and personal letters.' },
    { id: 'eng-9', name: 'Lexis and Structure', weight: 4, description: 'Studying word combinations, collocations, and structural patterns typical in English examinations.' },
    { id: 'eng-10', name: 'Prepositions and Conjunctions', weight: 3, description: 'Using prepositions correctly in time, place, and direction contexts; mastering conjunction usage to join clauses.' },
    { id: 'eng-11', name: 'Summary Writing', weight: 4, description: 'Condensing longer passages into brief, objective summaries capturing only the essential points.' },
    { id: 'eng-12', name: 'Idioms and Figurative Expressions', weight: 3, description: 'Learning common Nigerian and international idioms, metaphors, and figures of speech.' },
    { id: 'eng-13', name: 'Pronouns and Antecedent Agreement', weight: 3, description: 'Ensuring pronouns correctly match their antecedents in number, gender, and person.' },
    { id: 'eng-14', name: 'Comprehension: Inference', weight: 4, description: 'Drawing logical conclusions and making inferences from texts that are not explicitly stated.' },
    { id: 'eng-15', name: 'Business Correspondence Basics', weight: 3, description: 'Writing memos, reports, and formal business letters commonly used in technical workplaces.' },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#059669',
  topics: [
    { id: 'math-1', name: 'Number Systems and Bases', weight: 4, description: 'Working with whole numbers, fractions, decimals, percentages, and different number bases used in technical trade calculations.' },
    { id: 'math-2', name: 'Fractions, Decimals and Percentages', weight: 4, description: 'Performing arithmetic operations with fractions and decimals and solving percentage problems in practical contexts.' },
    { id: 'math-3', name: 'Indices and Logarithms', weight: 4, description: 'Applying laws of indices and logarithms to simplify calculations involving powers and exponential relationships.' },
    { id: 'math-4', name: 'Algebra: Expressions and Equations', weight: 5, description: 'Manipulating algebraic expressions, solving linear equations, and using algebra to model technical problems.' },
    { id: 'math-5', name: 'Quadratic Equations', weight: 4, description: 'Solving quadratic equations by factorisation, completing the square, and using the quadratic formula.' },
    { id: 'math-6', name: 'Simultaneous Equations', weight: 4, description: 'Solving two-variable simultaneous equations using substitution, elimination, and graphical methods.' },
    { id: 'math-7', name: 'Geometry: Angles and Triangles', weight: 5, description: 'Studying properties of angles, triangles, polygons, and applying geometry to technical drawings and measurements.' },
    { id: 'math-8', name: 'Circle Theorems', weight: 4, description: 'Understanding properties of circles including arcs, chords, tangents, and angles in the alternate segment.' },
    { id: 'math-9', name: 'Trigonometry: Ratios and Graphs', weight: 5, description: 'Using sine, cosine, and tangent ratios to solve right-angle problems and interpreting trigonometric graphs.' },
    { id: 'math-10', name: 'Coordinate Geometry', weight: 4, description: 'Plotting points, finding distances, midpoints, gradients, and equations of straight lines on the Cartesian plane.' },
    { id: 'math-11', name: 'Calculus: Differentiation', weight: 5, description: 'Finding derivatives of functions, understanding rates of change, and applying differentiation to practical problems.' },
    { id: 'math-12', name: 'Calculus: Integration', weight: 5, description: 'Integrating functions to find areas under curves and solving problems involving accumulation.' },
    { id: 'math-13', name: 'Statistics: Mean, Median, Mode', weight: 4, description: 'Collecting, organizing, and interpreting data using measures of central tendency for technical reports.' },
    { id: 'math-14', name: 'Probability', weight: 4, description: 'Calculating the likelihood of events using classical probability and tree diagrams in practical scenarios.' },
    { id: 'math-15', name: 'Mensuration: Areas and Volumes', weight: 4, description: 'Computing areas of plane shapes and volumes of solids essential for technical and trade applications.' },
  ]
};

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#d97706',
  topics: [
    { id: 'phy-1', name: 'Measurements and Units', weight: 3, description: 'Using appropriate measuring instruments, understanding SI units, and learning to minimise errors in measurements.' },
    { id: 'phy-2', name: 'Kinematics and Graphical Analysis', weight: 5, description: 'Describing motion using displacement, velocity, and acceleration; interpreting motion graphs in technical contexts.' },
    { id: 'phy-3', name: "Newton's Laws of Motion", weight: 5, description: 'Applying the three laws of motion to solve problems involving forces, inertia, and equilibrium in machines.' },
    { id: 'phy-4', name: 'Work, Energy and Power', weight: 5, description: 'Calculating work done, kinetic and potential energy, and power output for machines and engines.' },
    { id: 'phy-5', name: 'Heat and Temperature', weight: 4, description: 'Understanding heat transfer, specific heat capacity, and thermal expansion in workshop and manufacturing contexts.' },
    { id: 'phy-6', name: 'Waves and Sound', weight: 4, description: 'Studying wave properties, sound propagation, resonance, and their applications in communication systems.' },
    { id: 'phy-7', name: 'Light: Reflection and Refraction', weight: 5, description: 'Understanding laws of reflection and refraction, critical angle, and applications in optical devices.' },
    { id: 'phy-8', name: 'Optical Instruments', weight: 4, description: 'Using microscopes, telescopes, cameras, and other optical instruments for technical inspection and measurement.' },
    { id: 'phy-9', name: 'Electrostatics and Capacitors', weight: 5, description: 'Understanding electric charges, fields, Coulomb\'s law, and the function of capacitors in circuits.' },
    { id: 'phy-10', name: 'Electric Current and Circuits', weight: 5, description: 'Analysing series and parallel circuits, applying Ohm\'s law, and understanding domestic wiring principles.' },
    { id: 'phy-11', name: 'Magnetic Field and Electromagnetism', weight: 4, description: 'Studying magnetic fields around current-carrying conductors and electromagnets used in devices.' },
    { id: 'phy-12', name: 'Electromagnetic Induction', weight: 4, description: 'Understanding Faraday\'s and Lenz\'s laws, generators, and transformers in power transmission.' },
    { id: 'phy-13', name: 'Photoelectric Effect and Atomic Physics', weight: 4, description: 'Learning photon emission, atomic energy levels, and applications of quantum physics in modern electronics.' },
    { id: 'phy-14', name: 'Radioactivity and Nuclear Physics', weight: 4, description: 'Understanding nuclear decay, half-life, radiation types, and safety precautions in technical environments.' },
    { id: 'phy-15', name: 'Simple Harmonic Motion', weight: 4, description: 'Studying oscillatory motion in springs and pendulums, understanding period, frequency, and damping.' },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#7c3aed',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure and Bonding', weight: 5, description: 'Understanding electron configuration, ionic, covalent, and metallic bonding in materials used in trades.' },
    { id: 'chem-2', name: 'Periodic Table', weight: 4, description: 'Using the periodic table to predict chemical properties of elements and their compounds in technical processes.' },
    { id: 'chem-3', name: 'Stoichiometry', weight: 5, description: 'Calculating reactants and products in chemical reactions using balanced equations and mole concepts.' },
    { id: 'chem-4', name: 'States of Matter and Gas Laws', weight: 4, description: 'Applying Boyle\'s, Charles\'s, and ideal gas laws to solve problems involving gases in chemical processes.' },
    { id: 'chem-5', name: 'Thermochemistry', weight: 4, description: 'Understanding exothermic and endothermic reactions, enthalpy changes, and heat calculations in chemical reactions.' },
    { id: 'chem-6', name: 'Chemical Equilibrium', weight: 4, description: 'Studying reversible reactions, Le Chatelier\'s principle, and factors affecting equilibrium in industrial processes.' },
    { id: 'chem-7', name: 'Acids, Bases and Salts', weight: 5, description: 'Understanding acid-base theories, pH calculations, salt hydrolysis, and neutralisation in practical applications.' },
    { id: 'chem-8', name: 'Electrochemistry', weight: 4, description: 'Understanding galvanic and electrolytic cells, electroplating, and corrosion prevention in technical contexts.' },
    { id: 'chem-9', name: 'Organic Chemistry: Hydrocarbons', weight: 5, description: 'Studying alkanes, alkenes, alkynes, their properties, reactions, and applications in fuels and polymers.' },
    { id: 'chem-10', name: 'Alcohols and Carboxylic Acids', weight: 4, description: 'Understanding the structure, properties, and reactions of alcohols and carboxylic acids and their industrial uses.' },
    { id: 'chem-11', name: 'Aldehydes, Ketones and Esters', weight: 4, description: 'Studying carbonyl compounds, their preparation, properties, and applications in flavours and solvents.' },
    { id: 'chem-12', name: 'Amines and Polymers', weight: 3, description: 'Understanding amino compounds and polymerisation reactions used to produce plastics and synthetic fibres.' },
    { id: 'chem-13', name: 'Separation Techniques', weight: 3, description: 'Learning techniques such as distillation, filtration, chromatography, and crystallisation used in laboratories.' },
    { id: 'chem-14', name: 'Chemical Kinetics', weight: 4, description: 'Studying reaction rates, factors affecting rates, and activation energy in chemical processes.' },
    { id: 'chem-15', name: 'Environmental Chemistry', weight: 3, description: 'Understanding pollution, green chemistry, and the chemistry of air, water, and soil in the environment.' },
  ]
};

const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#dc2626',
  topics: [
    { id: 'bio-1', name: 'Cell Structure and Functions', weight: 5, description: 'Studying plant and animal cell organelles, their functions, and differences between prokaryotic and eukaryotic cells.' },
    { id: 'bio-2', name: 'Cell Division', weight: 4, description: 'Understanding mitosis and meiosis, their stages, significance, and role in growth and reproduction.' },
    { id: 'bio-3', name: 'Enzymes and Metabolism', weight: 5, description: 'Learning enzyme structure, function, factors affecting enzyme activity, and metabolic pathways in living organisms.' },
    { id: 'bio-4', name: 'Nutrition', weight: 4, description: 'Studying nutrients, balanced diet, digestive systems, and food tests essential for health and wellbeing.' },
    { id: 'bio-5', name: 'Respiration and Gaseous Exchange', weight: 5, description: 'Understanding aerobic and anaerobic respiration, gas exchange mechanisms, and respiratory structures in organisms.' },
    { id: 'bio-6', name: 'Transport in Living Things', weight: 5, description: 'Studying circulatory systems, blood composition, transport in plants through xylem and phloem.' },
    { id: 'bio-7', name: 'Excretion and Homeostasis', weight: 4, description: 'Understanding waste removal mechanisms, kidney function, and how organisms maintain internal balance.' },
    { id: 'bio-8', name: 'Coordination and Nervous System', weight: 4, description: 'Learning about nervous coordination, reflex arcs, hormones, and the endocrine system in humans.' },
    { id: 'bio-9', name: 'Reproduction', weight: 4, description: 'Studying sexual and asexual reproduction, gamete formation, fertilisation, and reproductive health.' },
    { id: 'bio-10', name: 'Genetics', weight: 5, description: 'Understanding Mendel\'s laws, DNA structure, genetic crosses, inheritance patterns, and genetic disorders.' },
    { id: 'bio-11', name: 'Variation and Evolution', weight: 4, description: 'Studying sources of variation, natural selection, adaptation, and evidence for evolution in species.' },
    { id: 'bio-12', name: 'Ecology and Ecosystems', weight: 4, description: 'Understanding food chains, food webs, biogeochemical cycles, and human impact on ecosystems.' },
    { id: 'bio-13', name: 'Biotechnology', weight: 4, description: 'Learning genetic engineering, tissue culture, fermentation technology, and applications in agriculture and medicine.' },
    { id: 'bio-14', name: 'Growth and Development', weight: 3, description: 'Studying growth patterns, developmental stages in plants and animals, and factors affecting growth.' },
    { id: 'bio-15', name: 'Human Health and Disease', weight: 3, description: 'Understanding common diseases, pathogens, transmission, prevention, and the immune system.' },
  ]
};

const subjects = [english, mathematics, physics, chemistry, biology];

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
    { subject: 'English Language', topics: ['Reading Comprehension', 'Grammar: Tenses and Agreement', 'Sentence Structure', 'Paragraph and Essay Writing', 'Lexis and Structure', 'Summary Writing'] },
    { subject: 'Mathematics', topics: ['Algebra: Expressions and Equations', 'Calculus: Differentiation', 'Calculus: Integration', 'Trigonometry: Ratios and Graphs', 'Geometry: Angles and Triangles', 'Statistics: Mean, Median, Mode'] },
    { subject: 'Physics', topics: ["Newton's Laws of Motion", 'Work, Energy and Power', 'Light: Reflection and Refraction', 'Electrostatics and Capacitors', 'Electric Current and Circuits', 'Kinematics and Graphical Analysis'] },
    { subject: 'Chemistry', topics: ['Atomic Structure and Bonding', 'Stoichiometry', 'Acids, Bases and Salts', 'Organic Chemistry: Hydrocarbons', 'Electrochemistry', 'Thermochemistry'] },
    { subject: 'Biology', topics: ['Cell Structure and Functions', 'Enzymes and Metabolism', 'Respiration and Gaseous Exchange', 'Transport in Living Things', 'Genetics', 'Nutrition'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'nabteb',
  examName: 'NABTEB',
  country: 'nigeria',
  description: 'NABTEB (National Business and Technical Examinations Board) conducts technical and vocational examinations in Nigeria. Recognized for admission to technical degree programs and professional certifications.',
  examPattern: 'Technical subjects vary by programme. Typically 3-5 papers per subject including theory and practical. Internal/external examination structure administered twice yearly (Nov/Dec and April/May).',
  eligibility: 'Passed Class 12/JSS3 with relevant technical background. For advanced programmes, ND/NCE certification required. Age requirements vary by institution.',
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-04-02',
  officialSource: 'https://www.nabtebnigeria.org',
};

export default exam;
