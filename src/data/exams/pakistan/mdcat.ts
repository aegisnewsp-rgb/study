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

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#2563eb',
  topics: [
    { id: 'phy-1', name: 'Measurement', weight: 2, description: 'SI units, dimensional analysis, measurement techniques, and precision in physical quantities for medical physics contexts.' },
    { id: 'phy-2', name: 'Kinematics', weight: 5, description: 'Study of motion without forces covering displacement, velocity, acceleration, equations of motion, and graphical analysis.' },
    { id: 'phy-3', name: 'Dynamics', weight: 5, description: 'Newtons three laws of motion, friction, equilibrium, momentum conservation, and application of forces in practical situations.' },
    { id: 'phy-4', name: 'Work, Energy and Power', weight: 4, description: 'Work done by forces, kinetic and potential energy, conservation of mechanical energy, and power calculations.' },
    { id: 'phy-5', name: 'Circular Motion', weight: 4, description: 'Uniform circular motion, centripetal force, banking of roads, and satellite motion around Earth.' },
    { id: 'phy-6', name: 'Fluid Dynamics', weight: 3, description: 'Pascals law, Archimedes principle, Bernoullis equation, fluid flow, and applications in circulatory systems.' },
    { id: 'phy-7', name: 'Oscillations', weight: 4, description: 'Simple harmonic motion characteristics, pendulum, mass-spring systems, and damped oscillations in biological systems.' },
    { id: 'phy-8', name: 'Waves', weight: 4, description: 'Wave properties, wavelength, frequency, sound waves, Doppler effect, and applications in medical imaging.' },
    { id: 'phy-9', name: 'Heat and Thermodynamics', weight: 4, description: 'Heat transfer mechanisms, specific heat, thermodynamics laws, and applications in physiological processes.' },
    { id: 'phy-10', name: 'Electrostatics', weight: 5, description: 'Electric charges, Coulomb law, electric field, potential, capacitance, and electrical phenomena in body tissues.' },
    { id: 'phy-11', name: 'Current Electricity', weight: 5, description: 'Ohms law, DC circuits, electrical resistance, power consumption, and nerve conduction physics.' },
    { id: 'phy-12', name: 'Electromagnetism', weight: 4, description: 'Magnetic field around currents, Biot-Savart law, magnetic force on charges, and electromagnetic effects in medical equipment.' },
    { id: 'phy-13', name: 'Electromagnetic Induction (EMI)', weight: 4, description: 'Faradays law, induced EMF, transformers, and applications in medical instrumentation and imaging devices.' },
    { id: 'phy-14', name: 'Alternating Current (AC)', weight: 3, description: 'AC fundamentals, RMS values, impedance, resonance, and AC circuits used in medical equipment.' },
    { id: 'phy-15', name: 'Light and Optics', weight: 5, description: 'Reflection, refraction, lenses, optical instruments, eye optics, microscopes, and applications in medical diagnostics.' },
    { id: 'phy-16', name: 'Modern Physics', weight: 4, description: 'Photoelectric effect, photon concept, atomic models, X-rays, and radiation physics essential for medical imaging.' },
    { id: 'phy-17', name: 'Nuclear Physics', weight: 3, description: 'Radioactive decay, alpha, beta, gamma radiation, half-life, and applications in nuclear medicine and radiotherapy.' },
    { id: 'phy-18', name: 'Electronics', weight: 3, description: 'Semiconductor devices, diodes, transistors, logic gates, and basic electronic circuits used in medical instruments.' },
    { id: 'phy-19', name: 'Communication Systems', weight: 2, description: 'Basic communication principles, modulation, radio waves, and transmission of medical data and telemedicine.' },
    { id: 'phy-20', name: 'Gravitation', weight: 3, description: 'Gravitational field, orbital motion, weightlessness, and applications in understanding body systems under gravity.' },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#059669',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure', weight: 4, description: 'Electron configuration, quantum numbers, atomic orbitals, periodic properties, and structure of atoms relevant to medical chemistry.' },
    { id: 'chem-2', name: 'Chemical Bonding', weight: 5, description: 'Ionic, covalent, hydrogen bonding, VSEPR theory, molecular geometry, and bond characteristics in biological molecules.' },
    { id: 'chem-3', name: 'States of Matter', weight: 3, description: 'Gaseous state laws, liquid properties, solid state crystal structures, and phase transitions in biological systems.' },
    { id: 'chem-4', name: 'Thermochemistry', weight: 4, description: 'Enthalpy changes, Hess law, calorimetry, bond energy, and energy metabolism in living organisms.' },
    { id: 'chem-5', name: 'Chemical Equilibrium', weight: 4, description: 'Reversible reactions, equilibrium constant, Le Chateliers principle, and equilibrium in physiological systems.' },
    { id: 'chem-6', name: 'Acids and Bases', weight: 4, description: 'pH and pOH, buffer systems in blood, acid-base balance, and titration in biochemical analysis.' },
    { id: 'chem-7', name: 'Electrochemistry', weight: 4, description: 'Redox reactions, electrochemical cells, electrode potentials, and biochemical oxidation processes.' },
    { id: 'chem-8', name: 'Reaction Kinetics', weight: 3, description: 'Reaction rates, rate laws, enzyme kinetics, activation energy, and factors affecting biochemical reactions.' },
    { id: 'chem-9', name: 'Periodic Properties', weight: 3, description: 'Trends in atomic size, ionization energy, electronegativity, and significance of elements in biological systems.' },
    { id: 'chem-10', name: 'Group Elements', weight: 3, description: 'Chemistry of main group elements, their compounds, and biological importance of elements like carbon, nitrogen, oxygen.' },
    { id: 'chem-11', name: 'Transition Elements', weight: 3, description: 'Electronic configurations, complex formation, biological significance of iron, hemoglobin, and trace elements.' },
    { id: 'chem-12', name: 'Organic Chemistry Fundamentals', weight: 5, description: 'Hydrocarbons, functional groups, isomerism, nomenclature, and structure-activity relationships in drug molecules.' },
    { id: 'chem-13', name: 'Hydrocarbons', weight: 4, description: 'Aliphatic and aromatic hydrocarbons, petroleum, and hydrocarbon derivatives in medicinal chemistry.' },
    { id: 'chem-14', name: 'Alcohols, Phenols and Ethers', weight: 4, description: 'Properties, reactions, and significance of these oxygen-containing compounds in biochemistry and pharmacology.' },
    { id: 'chem-15', name: 'Aldehydes and Ketones', weight: 4, description: 'Carbonyl group reactions, aromatic aldehydes, and their role in biological molecules and drugs.' },
    { id: 'chem-16', name: 'Carboxylic Acids', weight: 3, description: 'Acidity, derivatives, fatty acids, and significance in amino acids and metabolic pathways.' },
    { id: 'chem-17', name: 'Amines', weight: 3, description: 'Basicity, preparation, reactions, and importance of amines in alkaloids, neurotransmitters, and drugs.' },
    { id: 'chem-18', name: 'Biomolecules', weight: 3, description: 'Carbohydrates, proteins, lipids, nucleic acids, vitamins, hormones, and their biological functions.' },
    { id: 'chem-19', name: 'Polymers', weight: 2, description: 'Natural and synthetic polymers, biodegradable polymers, and their applications in medicine and pharmacy.' },
    { id: 'chem-20', name: 'Environmental Chemistry', weight: 2, description: 'Pollution, greenhouse effect, water treatment, and environmental aspects of chemical waste in healthcare.' },
  ]
};

const botany: Subject = {
  id: 'botany', name: 'Botany', color: '#7c3aed',
  topics: [
    { id: 'bot-1', name: 'Cell Biology', weight: 5, description: 'Cell structure and function, prokaryotic vs eukaryotic cells, cell organelles, and cell membrane transport mechanisms in plants.' },
    { id: 'bot-2', name: 'Biochemistry', weight: 4, description: 'Biological molecules in plants including carbohydrates, proteins, lipids, enzymes, and metabolic pathways specific to plant cells.' },
    { id: 'bot-3', name: 'Cell Division', weight: 4, description: 'Mitosis and meiosis in plants, cell cycle, chromosome behavior, and significance in plant growth and reproduction.' },
    { id: 'bot-4', name: 'Variety of Life', weight: 3, description: 'Five kingdoms classification, Monera through Animalia, and distinguishing characteristics of different life forms.' },
    { id: 'bot-5', name: 'Kingdom Plantae', weight: 3, description: 'Characteristics of plant kingdom, distinguishing features, and major plant groups from mosses to flowering plants.' },
    { id: 'bot-6', name: 'Plant Kingdom Classification', weight: 3, description: 'Classification systems, divisions of plant kingdom, and evolutionary relationships among plant groups.' },
    { id: 'bot-7', name: 'Plant Tissues', weight: 3, description: 'Meristematic and permanent tissues, xylem, phloem, structure of leaves, and plant tissue systems functions.' },
    { id: 'bot-8', name: 'Photosynthesis', weight: 5, description: 'Light and dark reactions, Calvin cycle, chlorophyll, factors affecting photosynthesis, and CO2 fixation pathways.' },
    { id: 'bot-9', name: 'Respiration', weight: 4, description: 'Glycolysis, Krebs cycle, electron transport chain, anaerobic respiration, and energy production in plants.' },
    { id: 'bot-10', name: 'Plant Nutrition', weight: 3, description: 'Essential nutrients, mineral deficiency symptoms, nitrogen fixation, and nutrient uptake mechanisms in plants.' },
    { id: 'bot-11', name: 'Transport in Plants', weight: 4, description: 'Water and mineral transport, transpiration pull, translocation, and pressure flow hypothesis in phloem.' },
    { id: 'bot-12', name: 'Growth and Development', weight: 3, description: 'Plant growth regulators, hormones, phototropism, gravitropism, and flowering mechanisms in plants.' },
    { id: 'bot-13', name: 'Reproduction in Plants', weight: 4, description: 'Asexual and sexual reproduction, pollination, fertilization, seed formation, and fruit development in plants.' },
    { id: 'bot-14', name: 'Inheritance', weight: 4, description: 'Mendelian inheritance, genetic crosses, dominance, segregation, and polygenic inheritance patterns in plants.' },
    { id: 'bot-15', name: 'Evolution', weight: 3, description: 'Theories of evolution, natural selection, speciation, and evolutionary history of plant kingdom.' },
    { id: 'bot-16', name: 'Biotechnology', weight: 4, description: 'Genetic engineering in plants, tissue culture, plant transformation, and biotechnology applications in agriculture.' },
    { id: 'bot-17', name: 'Ecosystem', weight: 3, description: 'Ecosystems, food chains, ecological pyramids, biogeochemical cycles, and plant role in ecosystem balance.' },
    { id: 'bot-18', name: 'Environmental Issues', weight: 2, description: 'Deforestation, biodiversity loss, conservation, and environmental impact on plant communities.' },
  ]
};

const zoology: Subject = {
  id: 'zoology', name: 'Zoology', color: '#dc2626',
  topics: [
    { id: 'zoo-1', name: 'Introduction to Zoology', weight: 2, description: 'Scope of zoology, branches of zoology, importance of zoology in medicine, and relationship of animals to human welfare.' },
    { id: 'zoo-2', name: 'Biological Molecules', weight: 4, description: 'Carbohydrates, proteins, lipids, nucleic acids, enzymes, and their functions in living organisms.' },
    { id: 'zoo-3', name: 'Cell Structure and Function', weight: 5, description: 'Eukaryotic cell organelles, cell membrane structure, cellular processes, and differences between plant and animal cells.' },
    { id: 'zoo-4', name: 'Tissues', weight: 3, description: 'Epithelial, connective, muscular, and nervous tissues, their types and functions in the human body.' },
    { id: 'zoo-5', name: 'Digestive System', weight: 4, description: 'Alimentary canal, digestive glands, enzymes, absorption, assimilation, and nutritional requirements in humans.' },
    { id: 'zoo-6', name: 'Gaseous Exchange', weight: 3, description: 'Respiratory organs, breathing mechanisms, gas exchange, transport of gases, and respiratory pigments.' },
    { id: 'zoo-7', name: 'Circulatory System', weight: 4, description: 'Heart structure, blood vessels, blood composition, cardiac cycle, blood pressure, and circulation pathways.' },
    { id: 'zoo-8', name: 'Excretory System', weight: 3, description: 'Kidney structure, urine formation, nephron function, osmoregulation, and excretion of metabolic waste.' },
    { id: 'zoo-9', name: 'Homeostasis', weight: 4, description: 'Thermoregulation, water balance, internal environment stability, and feedback mechanisms in the human body.' },
    { id: 'zoo-10', name: 'Nervous System', weight: 5, description: 'Central and peripheral nervous system, neurons, nerve impulse transmission, reflexes, and sensory organs.' },
    { id: 'zoo-11', name: 'Endocrine System', weight: 4, description: 'Hormones, endocrine glands, feedback mechanisms, hormone action, and disorders of endocrine system.' },
    { id: 'zoo-12', name: 'Reproductive System', weight: 3, description: 'Male and female reproductive systems, gamete formation, fertilization, embryonic development, and reproductive health.' },
    { id: 'zoo-13', name: 'Growth and Development', weight: 3, description: 'Animal development stages, embryonic layers, differentiation, growth patterns, and factors affecting development.' },
    { id: 'zoo-14', name: 'Heredity', weight: 4, description: 'Mendelian genetics, chromosomal theory, inheritance patterns, genetic disorders, and human genetics.' },
    { id: 'zoo-15', name: 'Evolution', weight: 3, description: 'Darwin theory, natural selection, evidence of evolution, speciation, and evolutionary relationships.' },
    { id: 'zoo-16', name: 'Human Welfare', weight: 3, description: 'Parasitism, disease-causing organisms, common diseases, vaccination, and public health measures.' },
    { id: 'zoo-17', name: 'Biotechnology', weight: 3, description: 'Genetic engineering, recombinant DNA technology, cloning, and applications in medicine and agriculture.' },
    { id: 'zoo-18', name: 'Ecology', weight: 3, description: 'Ecosystems, food webs, biogeochemical cycles, population dynamics, and human impact on environment.' },
  ]
};

const english: Subject = {
  id: 'english', name: 'English', color: '#0891b2',
  topics: [
    { id: 'eng-1', name: 'Vocabulary', weight: 4, description: 'Word formation, root words, prefixes, suffixes, contextual vocabulary, and techniques for expanding vocabulary for medical entrance exams.' },
    { id: 'eng-2', name: 'Synonyms and Antonyms', weight: 3, description: 'Common academic and medical synonyms and antonyms, and techniques for eliminating options in vocabulary-based questions.' },
    { id: 'eng-3', name: 'One Word Substitution', weight: 3, description: 'Converting phrases into single words, commonly used technical and medical terminology, and professional vocabulary building.' },
    { id: 'eng-4', name: 'Idioms and Phrases', weight: 3, description: 'Commonly used English idioms and phrases, their meanings and appropriate usage in academic and professional contexts.' },
    { id: 'eng-5', name: 'Sentence Correction', weight: 4, description: 'Identifying grammatical errors, improving sentences, and selecting grammatically correct options in multiple choice format.' },
    { id: 'eng-6', name: 'Active and Passive Voice', weight: 3, description: 'Conversion between active and passive voice across all tenses, and usage in medical and scientific writing.' },
    { id: 'eng-7', name: 'Direct and Indirect Speech', weight: 3, description: 'Rules for converting direct speech to indirect speech including changes in tense, pronouns, and time expressions.' },
    { id: 'eng-8', name: 'Tenses', weight: 4, description: 'All twelve tenses with their forms, usage in different contexts, and common errors in tense usage for academic writing.' },
    { id: 'eng-9', name: 'Prepositions', weight: 3, description: 'Correct usage of prepositions in phrases, prepositional verbs, and common errors in preposition selection.' },
    { id: 'eng-10', name: 'Comprehension Passages', weight: 5, description: 'Reading strategies for passages, identifying main ideas, making inferences, tone identification, and answering RC questions.' },
    { id: 'eng-11', name: 'Paragraph Writing', weight: 3, description: 'Developing coherent paragraphs, topic sentences, supporting details, and organizing ideas in written expression.' },
    { id: 'eng-12', name: 'Grammar Usage', weight: 4, description: 'Subject-verb agreement, modifiers, parallel structure, and grammatical correctness in complex sentence construction.' },
  ]
};

const logicalReasoning: Subject = {
  id: 'logical-reasoning', name: 'Logical Reasoning', color: '#4f46e5',
  topics: [
    { id: 'lr-1', name: 'Analogies', weight: 3, description: 'Word relationship types including cause-effect, part-whole, function, and similarity relationships tested in analogy questions.' },
    { id: 'lr-2', name: 'Series Completion', weight: 4, description: 'Complete number and letter sequences, identifying patterns, finding next term, and series logic problems.' },
    { id: 'lr-3', name: 'Classification', weight: 3, description: 'Identifying items that do not belong to a category, classifying objects based on common characteristics, and odd-one-out problems.' },
    { id: 'lr-4', name: 'Coding-Decoding', weight: 4, description: 'Letter and number coding patterns, analogical relationships in codes, and decoding encrypted messages systematically.' },
    { id: 'lr-5', name: 'Blood Relations', weight: 3, description: 'Family relationship problems, coded relationship terminology, and deducing complete family trees from given statements.' },
    { id: 'lr-6', name: 'Direction Sense', weight: 3, description: 'Problems involving cardinal directions, distance traveled, turning angles, and navigation based logical reasoning.' },
    { id: 'lr-7', name: 'Logical Sequence', weight: 4, description: 'Arranging words, sentences, or events in logical sequence based on given conditions and inferring order.' },
    { id: 'lr-8', name: 'Statement and Conclusion', weight: 4, description: 'Evaluating statements, identifying valid conclusions, and assessing logical validity of argument conclusions.' },
    { id: 'lr-9', name: 'Critical Reasoning', weight: 4, description: 'Advanced logical analysis for evaluating complex arguments, identifying flaws, and strengthening or weakening conclusions.' },
    { id: 'lr-10', name: 'Data Interpretation', weight: 4, description: 'Reading and interpreting data from tables, bar graphs, line graphs, pie charts, and analytical decision making from data.' },
  ]
};

const subjects = [physics, chemistry, botany, zoology, english, logicalReasoning];

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
    { subject: 'Physics', topics: ['Kinematics', 'Dynamics', 'Electrostatics', 'Current Electricity', 'Light and Optics', 'Modern Physics'] },
    { subject: 'Chemistry', topics: ['Atomic Structure', 'Chemical Bonding', 'Organic Chemistry Fundamentals', 'Hydrocarbons', 'Acids and Bases', 'Thermochemistry'] },
    { subject: 'Botany', topics: ['Cell Biology', 'Photosynthesis', 'Cell Division', 'Inheritance', 'Reproduction in Plants', 'Transport in Plants'] },
    { subject: 'Zoology', topics: ['Cell Structure and Function', 'Nervous System', 'Circulatory System', 'Heredity', 'Homeostasis', 'Digestive System'] },
    { subject: 'English', topics: ['Comprehension Passages', 'Vocabulary', 'Sentence Correction', 'Tenses', 'Grammar Usage'] },
    { subject: 'Logical Reasoning', topics: ['Series Completion', 'Coding-Decoding', 'Statement and Conclusion', 'Logical Sequence', 'Analogies'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'mdcat',
  examName: 'MDCAT',
  country: 'pakistan',
  description: `MDCAT\ is\ Pakistan's\ mandatory\ entry\ test\ for\ admission\ to\ all\ public\ and\ private\ medical\ colleges\.\ Conducted\ by\ PMC\ \(Pakistan\ Medical\ Commission\),\ it\ tests\ competency\ in\ Biology,\ Chemistry,\ Physics,\ and\ English\.`,
  examPattern: `200\ MCQs\ \(Biology\ 80,\ Chemistry\ 60,\ Physics\ 40,\ English\ 20\)\ to\ be\ completed\ in\ 3\.5\ hours\.\ Minimum\ 65%\ score\ required\ for\ admission\ to\ public\ medical\ colleges\.`,
  eligibility: `HSSC\ \(Pre\-Medical\)\ with\ 70%\+\ or\ equivalent\.\ Valid\ MDCAT\ score\.\ Pakistani\ nationals\ and\ foreign\ students\ can\ appear\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.pmc.gov.pk',
};

export default exam;
