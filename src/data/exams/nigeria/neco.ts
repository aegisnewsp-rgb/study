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
  id: 'english', name: 'English Language', color: '#2563eb',
  topics: [
    { id: 'eng-1', name: 'Comprehension Passages', weight: 5, description: 'Reading and interpreting unseen passages from various genres including narrative, descriptive, expository, and argumentative texts; identifying main ideas, supporting details, tone, purpose, and writer\'s attitude; making inferences from textual evidence.' },
    { id: 'eng-2', name: 'Summary Writing and Notes', weight: 4, description: 'Extracting main points from passages and summarising concisely in one\'s own words; identifying essential details while omitting irrelevant information; and writing well-structured summaries without personal opinions or verbatim copying.' },
    { id: 'eng-3', name: 'Vocabulary and Word Context', weight: 4, description: 'Understanding words in context through synonyms, antonyms, collocations, and word formation (prefixes, suffixes); distinguishing between homophones and near-synonyms; and using context clues to determine the meaning of unfamiliar words.' },
    { id: 'eng-4', name: 'Grammar: Tenses, Concord and Articles', weight: 4, description: 'All tenses in active and passive voice, subject-verb agreement, consistent tense usage, definite and indefinite articles (a, an, the), and detecting grammatical errors in sentences and paragraphs.' },
    { id: 'eng-5', name: 'Active and Passive Voice', weight: 4, description: 'Converting accurately between active and passive constructions across all tenses; knowing when to use each voice in formal and academic writing; and identifying voice inconsistencies in edited sentences.' },
    { id: 'eng-6', name: 'Direct and Indirect Speech', weight: 3, description: 'Accurately reporting statements, questions, commands, and exclamations; applying backshift rules for tenses, time expressions, and pronouns; and handling special question types in indirect speech.' },
    { id: 'eng-7', name: 'Sentence Construction', weight: 4, description: 'Building grammatically correct and coherent sentences using simple, compound, and complex structures; using conjunctions, relative clauses, and transitional devices effectively; and avoiding sentence fragments, run-ons, and comma splices.' },
    { id: 'eng-8', name: 'Lexis and Structure', weight: 4, description: 'Word-level grammar including affixation, word class transformations (noun to verb, adjective to adverb), phrase structures, clause types, and syntactic patterns in Nigerian and international English.' },
    { id: 'eng-9', name: 'Idioms, Proverbs and Figurative Language', weight: 3, description: 'Interpreting common Nigerian and international idioms, proverbs, metaphors, similes, personification, hyperbole, and irony; understanding how figurative language creates meaning and tone in literary and non-literary texts.' },
    { id: 'eng-10', name: 'Prepositions and Conjunctions', weight: 3, description: 'Correct use of prepositions of time, place, direction, and manner; prepositional phrases in idiomatic expressions; and coordinating and subordinating conjunctions for building compound and complex sentences.' },
    { id: 'eng-11', name: 'Pronouns and Agreement', weight: 3, description: 'Subject-verb and pronoun-antecedent agreement; using relative pronouns correctly; avoiding ambiguous pronoun references; and the correct use of collective nouns in Nigerian English.' },
    { id: 'eng-12', name: 'Question Tags and Short Responses', weight: 3, description: 'Forming question tags with appropriate auxiliary verbs; giving correct short answers (Yes/No responses); and using ellipsis to give short affirmative and negative responses in spoken and written English.' },
    { id: 'eng-13', name: 'Conditional Sentences', weight: 3, description: 'Zero, first, second, third conditionals and mixed conditionals; understanding the hypothetical nature of second and third conditionals; and using if-clauses and unless clauses to express real and unreal situations.' },
    { id: 'eng-14', name: 'Essay and Paragraph Writing', weight: 4, description: 'Writing well-organised essays with clear introduction, body paragraphs, and conclusion across different essay types: narrative, descriptive, expository, and argumentative; maintaining coherence, unity, and appropriate register.' },
    { id: 'eng-15', name: 'Formal Letter and Application Writing', weight: 3, description: 'Format, tone, and conventions of formal letter writing including job applications, complaints, enquiries, and official correspondence; using appropriate salutations, body structure, and professional language.' },
    { id: 'eng-16', name: 'Comprehension: Inference and Deduction', weight: 4, description: 'Drawing logical inferences and conclusions from passages; reading between the lines to identify implied meaning, tone, attitude, and purpose; and using textual evidence to support deductions.' },
    { id: 'eng-17', name: 'Speech Writing and Debates', weight: 3, description: 'Structuring a formal speech with introduction, body, and conclusion; using rhetorical devices; writing persuasive speeches and debate arguments with logical sequencing of ideas and evidence.' },
    { id: 'eng-18', name: 'Register and Audience Awareness', weight: 3, description: 'Understanding and using appropriate register (formal, informal, colloquial) for different audiences and purposes; distinguishing between spoken and written English conventions; and adjusting tone and vocabulary accordingly.' },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#059669',
  topics: [
    { id: 'math-1', name: 'Number and Bases (Binary, etc.)', weight: 4, description: 'Conversion between number bases (binary, octal, decimal, duodecimal, hexadecimal); performing arithmetic operations in different bases; and applications of binary numbers in computing and digital systems.' },
    { id: 'math-2', name: 'Fractions, Decimals and Approximations', weight: 4, description: 'Operations with fractions and decimals; rounding numbers to specified degrees of accuracy (decimal places, significant figures); standard form (scientific notation); and percentage errors in measurement.' },
    { id: 'math-3', name: 'Indices, Logarithms and Surds', weight: 4, description: 'Laws of indices including fractional and negative indices; solving exponential equations; laws of logarithms; solving logarithmic equations; and simplifying surds (rationalising denominators containing surds).' },
    { id: 'math-4', name: 'Algebraic Expressions and Operations', weight: 5, description: 'Simplifying algebraic expressions; expanding brackets; factorisation of expressions including quadratic expressions; manipulation of algebraic fractions; and evaluating expressions given specific values.' },
    { id: 'math-5', name: 'Linear and Quadratic Equations', weight: 4, description: 'Solving linear equations in one and two variables; quadratic equations by factorisation, completing the square, and quadratic formula; nature of roots using discriminant; and forming equations from given roots.' },
    { id: 'math-6', name: 'Simultaneous Equations', weight: 4, description: 'Solving simultaneous linear equations (two and three variables) using substitution, elimination, and graphical methods; solving linear-quadratic simultaneous equations; and word problems leading to simultaneous equations.' },
    { id: 'math-7', name: 'Inequalities and Linear Programming', weight: 3, description: 'Solving linear inequalities in one and two variables; representing inequalities graphically; identifying feasible regions; and using linear programming to find maximum and minimum values in optimisation problems.' },
    { id: 'math-8', name: 'Plane Geometry: Angles, Triangles and Polygons', weight: 5, description: 'Angle properties of parallel lines; interior and exterior angles of polygons; triangle theorems including similarity and congruence; Pythagorean theorem; and properties of special quadrilaterals.' },
    { id: 'math-9', name: 'Circle Geometry: Angles and Chords', weight: 4, description: 'Angle properties of circles: angle at centre versus angle at circumference, angles in the same segment, angles in opposite segments, cyclic quadrilaterals, and tangent-chord theorems.' },
    { id: 'math-10', name: 'Trigonometry: Ratios and Graphs', weight: 5, description: 'Sine, cosine, and tangent ratios for acute and obtuse angles; complementary angle relationships; solving right and non-right triangles; sketching sine, cosine, and tangent graphs; and amplitude and period of trigonometric functions.' },
    { id: 'math-11', name: 'Trigonometry: Sine and Cosine Rules', weight: 4, description: 'Sine rule for sides and angles; cosine rule for sides and angles; area of a triangle using trigonometry; solving triangles given ASA, SSS, SAS, or SSA data; and applying to practical survey and navigation problems.' },
    { id: 'math-12', name: 'Coordinate Geometry and Graphs', weight: 4, description: 'Distance between two points; midpoint formula; gradient of a line; equation of straight line in different forms; parallel and perpendicular lines; and equation of circles in the Cartesian plane.' },
    { id: 'math-13', name: 'Calculus: Differentiation', weight: 5, description: 'Differentiation from first principles; standard derivatives of polynomial, trigonometric, exponential, and logarithmic functions; product, quotient, and chain rules; turning points; and applications to maxima, minima, and rates of change.' },
    { id: 'math-14', name: 'Calculus: Integration', weight: 5, description: 'Integration as the reverse of differentiation; indefinite and definite integrals; integration of standard functions; finding areas under curves; the trapezium rule for approximating areas; and integration by substitution.' },
    { id: 'math-15', name: 'Statistics: Measures of Central Tendency', weight: 4, description: 'Mean, median, and mode for ungrouped and grouped data (discrete and continuous); finding modal class; calculating from frequency tables with class intervals; and understanding the appropriate use of each measure.' },
    { id: 'math-16', name: 'Probability and Permutations', weight: 4, description: 'Classical and statistical definitions of probability; addition and multiplication rules; mutually exclusive and independent events; permutation formulae (nPr); combination formulae (nCr); and solving probability problems.' },
    { id: 'math-17', name: 'Mensuration: Areas and Volumes', weight: 4, description: 'Perimeter and area of plane figures including circles, sectors, and segments; surface area and volume of prisms, pyramids, cylinders, cones, and spheres; and frustum of a cone problems.' },
    { id: 'math-18', name: 'Sequence and Series: AP and GP', weight: 3, description: 'Arithmetic progression: nth term and sum to n terms; geometric progression: nth term, sum to n terms, and sum to infinity; convergence of GP; and practical applications in financial mathematics.' },
  ]
};

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#d97706',
  topics: [
    { id: 'phy-1', name: 'Physical Quantities, Units and Measurements', weight: 3, description: 'Fundamental and derived quantities; SI units and dimension analysis; prefixes (kilo, mega, micro, nano); practical measurement using Vernier calipers, micrometer screw gauge, measuring cylinder; and significant figures and scientific notation.' },
    { id: 'phy-2', name: 'Kinematics: Displacement, Velocity and Acceleration', weight: 5, description: 'Motion along a straight line: displacement, velocity, and acceleration; equations of uniformly accelerated motion (s = ut + ½at², v = u + at, v² = u² + 2as); graphical analysis (gradient = velocity/acceleration, area = displacement); and free fall under gravity.' },
    { id: 'phy-3', name: 'Kinematics: Graphical Treatment', weight: 4, description: 'Interpretation of displacement-time, velocity-time, and acceleration-time graphs; calculating velocity from the gradient of s-t graph; finding acceleration from the gradient of v-t graph; and determining distance travelled from the area under v-t graph.' },
    { id: 'phy-4', name: "Newton's Laws of Motion", weight: 5, description: 'Newton\'s three laws with practical applications; force, mass, and acceleration relationship (F = ma); weight as gravitational force; friction (static and dynamic); tension in strings; normal reaction; and analysis of connected objects in equilibrium and motion.' },
    { id: 'phy-5', name: 'Work, Energy, Power and Conservation Laws', weight: 5, description: 'Work done by constant and variable forces; kinetic energy (½mv²) and gravitational potential energy (mgh); work-energy theorem; conservation of mechanical energy; power (rate of doing work); efficiency; and energy conversions in real systems.' },
    { id: 'phy-6', name: 'Heat Energy and Temperature Measurement', weight: 4, description: 'Heat capacity and specific heat capacity; latent heat of fusion and vaporisation; calorimetry calculations; method of mixtures; British Thermal Unit; and the relationship between heat energy and temperature change in different substances.' },
    { id: 'phy-7', name: 'Gas Laws and Kinetic Theory', weight: 4, description: 'Boyle\'s law, Charles\'s law, pressure law, general gas equation (PV/T = constant), ideal gas equation (PV = nRT); kinetic theory assumptions; root mean square speed; and deviation of real gases from ideal behaviour.' },
    { id: 'phy-8', name: 'Waves: Properties, Equations and Phenomena', weight: 4, description: 'Wave parameters (wavelength, frequency, period, amplitude, wave speed: v = fλ); transverse and longitudinal waves; superposition principle; stationary waves; reflection, refraction, and diffraction of waves; and resonance in strings and tubes.' },
    { id: 'phy-9', name: 'Sound Waves and Doppler Effect', weight: 3, description: 'Production and propagation of sound; speed of sound in different media; echo and reverberation; resonance in open and closed tubes; pitch and loudness; and the Doppler effect for moving source and observer.' },
    { id: 'phy-10', name: 'Light: Laws of Reflection and Refraction', weight: 5, description: 'Laws of reflection for plane and spherical mirrors; image formation and characteristics (virtual, real, magnified); laws of refraction and Snell\'s law; refractive index; critical angle; total internal reflection; prism dispersion; and applications in optical fibres.' },
    { id: 'phy-11', name: 'Optical Instruments', weight: 4, description: 'The human eye as an optical system; angular magnification of simple magnifiers, microscopes, and astronomical telescopes; the camera; projector; near point and far point; defects of vision (myopia, hypermetropia, presbyopia, astigmatism) and their correction.' },
    { id: 'phy-12', name: 'Electrostatics and Coulomb\'s Law', weight: 5, description: 'Electric charges and charging methods; Coulomb\'s law and its applications; electric field and field lines; electric potential and potential difference; electric flux; and the relationship between electric field strength and potential gradient.' },
    { id: 'phy-13', name: 'Capacitors and Capacitance', weight: 4, description: 'Definition of capacitance; factors affecting capacitance; energy stored in a charged capacitor; series and parallel combinations of capacitors; and time constant in RC circuits during charging and discharging.' },
    { id: 'phy-14', name: 'Electric Circuits: Ohm\'s Law and Kirchhoff\'s Laws', weight: 5, description: 'Electric current as rate of charge flow; Ohm\'s law (V = IR) and its limitations; resistance and resistivity; series and parallel resistor combinations; emf and internal resistance; Kirchhoff\'s laws (junction and loop rules); and solving complex circuits.' },
    { id: 'phy-15', name: 'Magnetic Fields and Electromagnets', weight: 4, description: 'Magnetic field patterns around bar magnets and current-carrying conductors; magnetic flux density; force on a current-carrying conductor in a magnetic field (F = BIL sin θ); Fleming\'s left-hand rule; the solenoid and electromagnet applications.' },
    { id: 'phy-16', name: 'Electromagnetic Induction', weight: 4, description: 'Faraday\'s law of electromagnetic induction; Lenz\'s law and the conservation of energy; motional emf; self-induction and mutual induction; factors affecting the magnitude of induced emf; and principles of ac generators, transformers, and induction motors.' },
    { id: 'phy-17', name: 'Electrons, Photons and the Photoelectric Effect', weight: 4, description: 'Einstein\'s explanation of the photoelectric effect; work function and threshold frequency; kinetic energy of emitted electrons; the photoelectric equation (Ek = hf - φ); wave-particle duality of light; and applications in photoelectric cells.' },
    { id: 'phy-18', name: 'Nuclear Physics: Radioactivity and Fission/Fusion', weight: 4, description: 'Radioactive decay types (alpha, beta, gamma) with their properties; decay equations and half-life; activity and decay constant; nuclear fission (nuclear reactors) and fusion (sun\'s energy); mass defect and binding energy (E = mc²); and radiological hazard protection.' },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#7c3aed',
  topics: [
    { id: 'chem-1', name: 'Atomic Structure and Electron Configuration', weight: 5, description: 'Atomic models (Thomson, Rutherford, Bohr); quantum numbers and electron configuration; s, p, d, f orbital shapes and energy levels; Aufbau principle, Hund\'s rule, and Pauli exclusion principle; and writing correct electron configurations for elements up to Z=36.' },
    { id: 'chem-2', name: 'Periodic Table and Periodic Properties', weight: 4, description: 'Modern periodic law and table arrangement; periodic trends in atomic radius, ionic radius, ionisation energy, electron affinity, electronegativity, and metallic character across periods and down groups; and anomalous properties of the second period elements.' },
    { id: 'chem-3', name: 'Chemical Bonding: Ionic, Covalent and Metallic', weight: 5, description: 'Formation and properties of ionic compounds; covalent bond formation using Lewis structures; coordinate (dative) bonding; metallic bonding and properties of metals; VSEPR theory for predicting molecular shapes; hybridisation (sp, sp2, sp3); and intermolecular forces (van der Waals, hydrogen bonding).' },
    { id: 'chem-4', name: 'Chemical Calculations and Stoichiometry', weight: 5, description: 'The mole concept and Avogadro\'s constant; molar mass and its use in amount conversions; empirical and molecular formulas; writing and balancing chemical equations; limiting reagents and theoretical yield; percentage purity; and titrimetric calculations.' },
    { id: 'chem-5', name: 'Physical Chemistry: Gas Laws', weight: 4, description: 'Boyle\'s law, Charles\'s law, pressure law, Avogadro\'s law, Dalton\'s law of partial pressures, Graham\'s law of diffusion; ideal gas equation PV = nRT; and solving problems involving gases under different conditions of temperature and pressure.' },
    { id: 'chem-6', name: 'Thermochemistry and Hess\'s Law', weight: 4, description: 'Enthalpy changes in chemical reactions; standard enthalpy of formation and combustion; Hess\'s law and its application in calculating enthalpy changes for reactions that cannot be measured directly; bond dissociation enthalpy; and calorimetry.' },
    { id: 'chem-7', name: 'Chemical Equilibrium and Le Chatelier\'s Principle', weight: 4, description: 'Reversible reactions and dynamic equilibrium; equilibrium constant expressions Kc and Kp; Le Chatelier\'s principle and its application to changes in concentration, temperature, pressure, and the addition of catalysts; and equilibrium in industrial processes (Haber process, Contact process).' },
    { id: 'chem-8', name: 'Acids, Bases, Salts and pH', weight: 5, description: 'Arrhenius, Bronsted-Lowry, and Lewis definitions of acids and bases; conjugate acid-base pairs; strong and weak acids and bases; pH, pOH, and pKa calculations; buffer solutions; hydrolysis of salts; and indicators and titrations (acid-base).' },
    { id: 'chem-9', name: 'Electrochemistry: Redox and Cells', weight: 4, description: 'Oxidation and reduction; oxidation numbers and half-equations; balancing redox equations by oxidation number and ion-electron methods; standard electrode potentials; galvanic and electrolytic cells; and electroplating, refining, and quantitative electrolysis.' },
    { id: 'chem-10', name: 'Chemical Kinetics and Rate Laws', weight: 4, description: 'Reaction rate and its dependence on concentration, temperature, catalyst, and surface area; rate expression and order of reaction; rate constants and their units; half-life of a first-order reaction; and collision theory and activation energy.' },
    { id: 'chem-11', name: 'Organic Chemistry: Alkanes and Alkenes', weight: 4, description: 'Homologous series of alkanes; nomenclature; isomerism (structural and geometric); preparation methods (cracking, laboratory preparation of methane); chemical properties: combustion, halogenation, substitution reactions; and uses of alkanes.' },
    { id: 'chem-12', name: 'Organic Chemistry: Alcohols, Aldehydes and Ketones', weight: 4, description: 'Classification and nomenclature of alcohols; preparation and reactions of alcohols (oxidation, dehydration, substitution); aldehydes and ketones: preparation by oxidation of alcohols, nucleophilic addition (Tollens, Fehling\'s tests); and distinguishing between aldehydes and ketones.' },
    { id: 'chem-13', name: 'Organic Chemistry: Carboxylic Acids and Esters', weight: 4, description: 'Nomenclature and preparation of carboxylic acids; reactions: acid chloride and anhydride formation, esterification; properties of carboxylic acids; naming and preparation of esters; saponification and hydrolysis of esters; and uses of carboxylic acids and esters.' },
    { id: 'chem-14', name: 'Amines, Amino Acids and Proteins', weight: 3, description: 'Classification of amines; nomenclature; basicity of amines; preparation from halogenoalkanes; amino acids as zwitterions; peptide bond formation; primary, secondary, and tertiary structures of proteins; and enzyme action basics.' },
    { id: 'chem-15', name: 'Polymers and Synthetic Polymers', weight: 3, description: 'Addition and condensation polymerisation mechanisms; natural polymers (polysaccharides, proteins, natural rubber); synthetic polymers (polyethene, PVC, polystyrene, nylon, terylene); properties and uses of important polymers; and biodegradable alternatives.' },
    { id: 'chem-16', name: 'Separation and Purification Techniques', weight: 3, description: 'Principles and procedures for filtration, distillation and fractional distillation, sublimation, crystallisation, chromatography (paper, TLC, column), and separating funnels; selecting appropriate techniques for mixtures of different types.' },
    { id: 'chem-17', name: 'Water Chemistry and Hardness', weight: 3, description: 'Water as a solvent; properties of soft and hard water; types of hardness (temporary and permanent); methods of water softening (precipitation, ion exchange); demineralised and distilled water; and water pollution and its prevention.' },
    { id: 'chem-18', name: 'Environmental Chemistry and Green Chemistry', weight: 3, description: 'Water pollution (organic wastes, heavy metals, sewage); air pollutants (SO₂, NOₓ, CO, particulates); greenhouse effect and global warming; ozone layer depletion; soil pollution; biodegradable and non-biodegradable waste; and green chemistry principles for sustainable development.' },
  ]
};

const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#dc2626',
  topics: [
    { id: 'bio-1', name: 'Cell Structure and Functions', weight: 5, description: 'Ultrastructure of plant and animal cells; functions of organelles (nucleus, mitochondria, ribosome, chloroplast, endoplasmic reticulum, Golgi body, lysosome); cell membrane structure and the fluid mosaic model; and cell wall properties in plants versus animal cells.' },
    { id: 'bio-2', name: 'Cell Division: Mitosis and Meiosis', weight: 4, description: 'Cell cycle phases (G1, S, G2, M); mitosis stages and their characteristic events (prophase, metaphase, anaphase, telophase); significance of mitosis; meiosis stages and cross-over; production of haploid gametes; and differences between mitosis and meiosis.' },
    { id: 'bio-3', name: 'Enzymes and Biochemical Reactions', weight: 5, description: 'Enzyme structure, specificity (lock-and-key and induced-fit models), and factors affecting enzyme activity (temperature, pH, substrate concentration, enzyme concentration, inhibitors); cofactors and coenzymes; competitive and non-competitive inhibition; and enzyme applications in biotechnology.' },
    { id: 'bio-4', name: 'Nutrition: Photosynthesis and Chemosynthesis', weight: 4, description: 'Photosynthesis equation; light-dependent and light-independent reactions (Calvin cycle); chlorophyll and accessory pigments; factors affecting photosynthesis (light intensity, CO₂, temperature); chemosynthesis as an alternative to photosynthesis; and agricultural applications.' },
    { id: 'bio-5', name: 'Heterotrophic Nutrition and Human Digestion', weight: 4, description: 'Types of heterotrophic nutrition (holozoic, saprophytic, parasitic); feeding mechanisms; human digestive system: alimentary canal structure and functions; digestive enzymes and their actions; peristalsis and absorption of digested food products; and disorders of the digestive system.' },
    { id: 'bio-6', name: 'Gaseous Exchange and Cell Respiration', weight: 5, description: 'Respiratory surfaces in different organisms (insects, fish, humans); human respiratory system structure and function; mechanics of breathing (inspiration and expiration); gas exchange at alveoli; aerobic respiration (glycolysis, Krebs cycle, electron transport chain); anaerobic respiration; and energy yield comparison.' },
    { id: 'bio-7', name: 'Transport in Plants and Animals', weight: 5, description: 'Circulatory systems: open and closed, single and double; human circulatory system (heart structure, arteries, veins, capillaries); blood composition and functions; blood clotting mechanism; double circulation in mammals; transport in plants: transpiration pull, cohesion-tension theory, root pressure, and phloem transport.' },
    { id: 'bio-8', name: 'Excretory Systems and Osmoregulation', weight: 4, description: 'Nitrogenous waste products (ammonia, urea, uric acid) and excretion strategies in different animals; human excretory system: kidney structure, urine formation (ultrafiltration, reabsorption, secretion); osmoregulation; kidney dialysis; and common kidney disorders.' },
    { id: 'bio-9', name: 'Coordination: Nervous and Endocrine Systems', weight: 4, description: 'Neurone structure and types; nerve impulse transmission (resting potential, action potential, synapse); reflex arcs and reflex actions; central and peripheral nervous systems; the brain and spinal cord; endocrine glands and hormones; feedback mechanisms; and differences between nervous and hormonal coordination.' },
    { id: 'bio-10', name: 'Sense Organs and Effectors', weight: 3, description: 'Structure and function of major sense organs: eye (photoreception), ear (mechanoreception for balance and hearing), skin (thermoreception and mechanoreception); types of effectors (muscles and glands); and common sensory disorders and their corrections.' },
    { id: 'bio-11', name: 'Reproduction: Asexual and Sexual', weight: 4, description: 'Asexual reproduction types (fission, budding, spore formation, vegetative propagation, fragmentation); sexual reproduction in plants (pollination, fertilisation, seed formation); sexual reproduction in humans (gamete formation, menstrual cycle, fertilisation, embryonic development); and contraception methods.' },
    { id: 'bio-12', name: 'Growth and Development', weight: 3, description: 'Definition of growth as a permanent increase in size; measuring growth (height, weight, cell number); growth curves (geometric, sigmoid); primary and secondary growth in plants (meristems, cambium); factors affecting growth; and germination processes in seeds.' },
    { id: 'bio-13', name: 'Mendelian Genetics and Probability', weight: 5, description: 'Mendel\'s laws of inheritance; monohybrid and dihybrid crosses; dominant and recessive traits; genotype and phenotype; backcross and test cross; incomplete dominance and codominance; blood group genetics; sex-linked inheritance; genetic diagrams and Punnett squares; and probability in genetic crosses.' },
    { id: 'bio-14', name: 'DNA, RNA and Protein Synthesis', weight: 4, description: 'DNA structure (double helix, complementary base pairing); DNA replication; RNA types (mRNA, tRNA, rRNA); transcription and translation; genetic code and its properties; mutations (gene and chromosomal); and the one-gene-one-enzyme hypothesis.' },
    { id: 'bio-15', name: 'Variation, Evolution and Natural Selection', weight: 4, description: 'Continuous and discontinuous variation; sources of variation (mutation, crossing-over, independent assortment, environmental factors); Darwin\'s theory of natural selection; evidence for evolution (fossil record, comparative anatomy, embryology, molecular biology); speciation; and adaptation as a product of natural selection.' },
    { id: 'bio-16', name: 'Ecology: Habitat, Ecosystem and Energy Flow', weight: 4, description: 'Levels of ecological organisation; biotic and abiotic factors; food chains, food webs, and trophic levels; ecological pyramids of number, biomass, and energy; biogeochemical cycles (carbon and nitrogen cycles); and productivity in ecosystems.' },
    { id: 'bio-17', name: 'Population Dynamics and Conservation', weight: 3, description: 'Population growth curves (exponential and logistic); carrying capacity; predator-prey relationships; competition (interspecific and intraspecific); ecological succession; conservation of natural resources; endangered species; and Nigeria\'s biodiversity challenges.' },
    { id: 'bio-18', name: 'Biotechnology: Tissue Culture and Genetic Engineering', weight: 4, description: 'Principles of tissue culture and micropropagation; genetic engineering and recombinant DNA technology; gene cloning and PCR; DNA fingerprinting and its applications; GMOs and their benefits and risks; gene therapy; and ethical considerations in biotechnology research.' },
  ]
};

const economics: Subject = {
  id: 'economics', name: 'Economics', color: '#b45309',
  topics: [
    { id: 'econ-1', name: 'Economics: Definition and Scope', weight: 4, description: 'Definition of economics as a social science; the central economic problems of scarcity, choice, and opportunity cost; microeconomics versus macroeconomics; positive versus normative economics; and the importance of economics in understanding Nigerian and global economic issues.' },
    { id: 'econ-2', name: 'Demand and Supply Analysis', weight: 5, description: 'The law of demand and supply; individual and market demand; the demand curve and its determinants (income, tastes, price of related goods, expectations, number of buyers); movement along versus shift in demand curve; market equilibrium; and effects of price controls (floor and ceiling prices).' },
    { id: 'econ-3', name: 'Elasticity of Demand and Supply', weight: 5, description: 'Price elasticity of demand (PED): calculation using the percentage method and geometric method; factors affecting PED; income elasticity of demand (YED); cross elasticity of demand (XED); price elasticity of supply (PES); and applications in taxation and pricing decisions.' },
    { id: 'econ-4', name: 'Theory of Consumer Behaviour', weight: 4, description: 'Utility concepts: total utility and marginal utility; the law of diminishing marginal utility; consumer equilibrium using the utility maximisation rule; ordinal approach using indifference curves and budget lines; and consumer surplus.' },
    { id: 'econ-5', name: 'Production and Theory of the Firm', weight: 5, description: 'Production functions: total, average, and marginal product; law of diminishing returns; isoquants and optimal input combination; economies and diseconomies of scale; and the short-run versus long-run production analysis.' },
    { id: 'econ-6', name: 'Cost and Revenue Analysis', weight: 4, description: 'Short-run cost curves (TFC, TVC, TC, AFC, AVC, AC, MC); long-run cost curves; explicit versus implicit costs; fixed versus variable costs; relationship between cost curves and production functions; and revenue concepts (TR, AR, MR) and their relationship to elasticity.' },
    { id: 'econ-7', name: 'Market Structures', weight: 5, description: 'Characteristics and equilibrium analysis of perfect competition, monopoly, monopolistic competition, and oligopoly; price and output determination in each market structure; efficiency comparisons; price discrimination; and game theory introduction to oligopoly behaviour.' },
    { id: 'econ-8', name: 'Factor Markets and Income Distribution', weight: 4, description: 'Marginal productivity theory of factor pricing; wage determination in labour markets; role of trade unions in wage bargaining; rent, interest, and profit as factor rewards; and inequality and distribution of income in Nigeria.' },
    { id: 'econ-9', name: 'National Income Accounting', weight: 5, description: 'Concepts of GDP, GNP, NNP, NI, personal income, and disposable personal income; three methods of measuring national income (output, income, expenditure approach); problems of national income measurement; and Nigeria\'s national income statistics and living standards comparison.' },
    { id: 'econ-10', name: 'Money and Inflation', weight: 4, description: 'Functions of money; types of money and the money supply (M1, M2); quantity theory of money (Fisher\'s equation); demand for money; inflation types (demand-pull and cost-push); causes and effects of inflation in Nigeria; and anti-inflationary measures.' },
    { id: 'econ-11', name: 'Banking and Monetary Policy', weight: 4, description: 'Types of banks (central, commercial, merchant, development banks); functions of the Central Bank of Nigeria ( CBN); creation of money by commercial banks; credit creation and its limits; monetary policy tools (OMO, reserve ratio, discount rate); and the effects of monetary policy on the Nigerian economy.' },
    { id: 'econ-12', name: 'Public Finance and Taxation', weight: 4, description: 'Government revenue and expenditure; types of taxes (direct and indirect); principles of taxation (ability-to-pay, benefit principles); incidence and effects of taxation; budget as a fiscal policy instrument; and Nigeria\'s tax system and revenue challenges.' },
    { id: 'econ-13', name: 'International Trade', weight: 4, description: 'Absolute and comparative advantage theories; terms of trade; balance of payments and current account; free trade versus protectionism (tariffs, quotas, subsidies); exchange rate systems (fixed, floating, managed float); and Nigeria\'s trade policy and WTO membership implications.' },
    { id: 'econ-14', name: 'Economic Development and Planning', weight: 4, description: 'Economic growth versus economic development; development indicators (GDP per capita, HDI, poverty index); development planning in Nigeria (national development plans, SEEDS, ERGP); role of agriculture, industry, and infrastructure in development; and challenges of development planning in Nigeria.' },
  ]
};

const government: Subject = {
  id: 'government', name: 'Government', color: '#1e40af',
  topics: [
    { id: 'gov-1', name: 'Definition andScope of Government', weight: 4, description: 'Meaning and importance of government as an institution of the state; political science as a discipline; the state: its essential elements (population, territory, government, sovereignty); and the difference between government and politics in a democracy versus dictatorship.' },
    { id: 'gov-2', name: 'Forms of Government', weight: 4, description: 'Unitary and federal systems; presidential and parliamentary systems; democracy (direct and representative), oligarchy, autocracy, and military rule; merits and demerits of each form; and Nigeria\'s journey through different governance systems since independence.' },
    { id: 'gov-3', name: 'The Nigerian Constitution', weight: 5, description: 'Meaning and importance of a constitution; the 1999 Constitution (as amended) as Nigeria\'s supreme law; fundamental human rights in Chapter IV; the federal character principle; separation of powers between the three arms of government; and constitutional-making in Nigeria\'s history.' },
    { id: 'gov-4', name: 'The Executive Arm of Government', weight: 4, description: 'The President as head of state and government; Executive Council (Cabinet); Vice President and their roles; gubernatorial powers; conditions for becoming President under the 1999 Constitution; the doctrine of separation of powers; and checks and balances on executive power.' },
    { id: 'gov-5', name: 'The Legislative Arm of Government', weight: 4, description: 'National Assembly structure: Senate (109 senators) and House of Representatives (360 reps); qualifications and functions of legislators; legislative process (bill to law); State Houses of Assembly; and the role of the legislature in checks and balances.' },
    { id: 'gov-6', name: 'The Judiciary Arm of Government', weight: 4, description: 'Structure of the Nigerian judiciary: Supreme Court, Court of Appeal, Federal High Court, State High Courts, Sharia Court of Appeal, Customary Court of Appeal; judicial independence and its importance; fundamental rights enforcement; and landmark cases affecting Nigerian democracy.' },
    { id: 'gov-7', name: 'Local Government System', weight: 4, description: 'Structure of the Nigerian local government system; functions of local government councils; the 1999 Constitution provisions on local government; relationship between state and local governments; and challenges of grassroots governance in Nigeria.' },
    { id: 'gov-8', name: 'Political Parties and Elections', weight: 5, description: 'Functions of political parties; historical development of political parties in Nigeria (First to Fourth Republic); INEC\'s role in elections; electoral processes: voter registration, accreditation, voting, and results announcement; electoral malpractices and their effects; and the role of opposition parties in a democracy.' },
    { id: 'gov-9', name: 'Citizenship and Fundamental Rights', weight: 5, description: 'Meaning of citizenship; methods of acquiring Nigerian citizenship (by birth, registration, naturalisation); dual citizenship; fundamental rights in the 1999 Constitution (right to life, dignity, fair hearing, freedom of thought, movement); limitations on rights; and enforcement mechanisms.' },
    { id: 'gov-10', name: 'Public Opinion and Pressure Groups', weight: 3, description: 'Definition and formation of public opinion; factors that shape public opinion; the media\'s role in shaping opinion; definition and types of pressure groups; methods used by pressure groups to influence government; and the difference between pressure groups and political parties.' },
    { id: 'gov-11', name: 'The Civil Service and Public Corporations', weight: 3, description: 'Structure and functions of the Nigerian civil service; characteristics of a civil servant; public corporations and parastatals; commercialisation and privatisation of public enterprises in Nigeria; and the challenges of governance and public administration.' },
    { id: 'gov-12', name: 'International Organisations', weight: 4, description: 'The United Nations and its principal organs (General Assembly, Security Council, Secretariat); ECOWAS and Nigeria\'s role in regional integration; the Commonwealth; African Union and its predecessor (OAU); OPEC membership and its implications; and Nigeria\'s foreign policy principles.' },
  ]
};

const literature: Subject = {
  id: 'literature', name: 'Literature in English', color: '#9d174d',
  topics: [
    { id: 'lit-1', name: 'Literary Terms and Concepts', weight: 4, description: 'Key literary terms: plot, theme, characterisation (round/flat, static/dynamic), setting, conflict, narrator, point of view, symbolism, imagery, foreshadowing, irony (verbal, situational, dramatic), allegory, and satire; applying these terms to all literary texts studied.' },
    { id: 'lit-2', name: 'Prose: Novels and Short Stories', weight: 5, description: 'Analysis of selected African and international novels for WAEC; narrative techniques, characterisation, plot structure, themes (colonialism, identity, tradition versus modernity, gender), and social commentary in prose fiction; understanding authorial perspective and narrative voice.' },
    { id: 'lit-3', name: 'Drama: Tragedy and Comedy', weight: 5, description: 'Elements of drama: dialogue, stage direction, acts and scenes, soliloquy, aside; analysis of selected plays (tragedy, comedy, and tragi-comedy); characterisation, thematic concerns, and performance conventions; and interpretation of dramatic texts for both page and stage.' },
    { id: 'lit-4', name: 'Poetry Analysis', weight: 5, description: 'Elements of poetry: imagery, metaphor, simile, personification, apostrophe, enjambment, rhyme, rhythm, tone, mood, alliteration, assonance, consonance; analysing Nigerian and international poems for meaning, form, and effect; and paraphrasing and interpreting figurative language in poetry.' },
    { id: 'lit-5', name: 'African Oral Tradition', weight: 3, description: 'Forms of African oral literature: folk tales, legends, myths, proverbs, riddles, and songs; their social and educational functions in African communities; the transition from oral to written literature; and the preservation of oral traditions in contemporary African writing.' },
    { id: 'lit-6', name: 'Nigerian Literature: Chinua Achebe\'s Works', weight: 4, description: 'Analysis of selected works by Chinua Achebe (Things Fall Apart and others); themes of pre-colonial Igbo society, colonial encounter, cultural conflict, gender, and tradition; narrative style and language; and Achebe\'s contribution to African literature as a vehicle for cultural identity.' },
    { id: 'lit-7', name: 'Nigerian Literature: Wole Soyinka', weight: 4, description: 'Analysis of selected plays and poetry by Wole Soyinka; Yoruba cosmology and mythology in Soyinka\'s works; existential and philosophical themes; dramatic techniques; Nobel Laureate\'s use of language, symbolism, and ritual; and critique of political authoritarianism.' },
    { id: 'lit-8', name: 'Nigerian Literature: Flora Nwapa', weight: 3, description: 'Analysis of selected works by Flora Nwapa (Efuru and others); themes of women\'s agency, economic independence, motherhood, and tradition versus modernity; Nwapa\'s role as a pioneering African woman novelist; and feminist perspectives in African literature.' },
    { id: 'lit-9', name: 'Comparative Literature', weight: 4, description: 'Comparing themes, characters, and techniques across selected texts; identifying universal themes (love, conflict, identity) in different cultural contexts; the relationship between African and international literary traditions; and answering comparative essay questions effectively.' },
    { id: 'lit-10', name: 'Literary Criticism Basics', weight: 3, description: 'Introduction to literary criticism approaches: reader-response, thematic, biographical, historical, and formalist criticism; evaluating literary texts using different critical lenses; forming and defending personal interpretations; and applying criticism to improve essay writing in literature examinations.' },
  ]
};

const geography: Subject = {
  id: 'geography', name: 'Geography', color: '#166534',
  topics: [
    { id: 'geo-1', name: 'The Earth as a Planet', weight: 3, description: 'Shape and size of the Earth; latitude and longitude (parallels and meridians); great and small circles; calculating distance using latitude and longitude; time zones and international date line; and the Earth\'s movements (rotation and revolution) and their effects.' },
    { id: 'geo-2', name: 'Map Reading and Interpretation', weight: 5, description: 'Types of maps (topographic, choropleth, dot, isopleth); map scales (linear, ratio, statement); representation of relief (contours, layering, spot heights); gradient calculation; intervisibility; and extracting information from maps including direction, distance, and geographic features.' },
    { id: 'geo-3', name: 'Weather and Climate', weight: 5, description: 'Elements of weather: temperature, rainfall, humidity, wind, pressure, cloud cover; weather instruments and their uses; differences between weather and climate; types of rainfall (convectional, orographic, cyclonic); climate classification (tropical, arid, temperate); and climate change and its effects on Nigeria.' },
    { id: 'geo-4', name: 'Rock Types and Earth Movements', weight: 4, description: 'Igneous, sedimentary, and metamorphic rocks: formation, characteristics, and examples; the rock cycle; earth movements: folding, faulting, earthquakes, and volcanism; the effects of earth movements on landscape formation; and types of mountains (fold, block, volcanic).' },
    { id: 'geo-5', name: 'Hydrology and Oceanography', weight: 4, description: 'The hydrological cycle and its processes (evaporation, condensation, precipitation, runoff, infiltration); river features (source, mouth, tributaries, confluence, delta, estuary); ocean currents and their effects on climate; and marine resources.' },
    { id: 'geo-6', name: 'Population and Settlement Geography', weight: 5, description: 'Population distribution and density; population growth (birth rates, death rates, migration); demographic transition model; overpopulation and underpopulation issues; settlement types (rural versus urban); settlement site and situation factors; and Nigeria\'s population challenges and policies.' },
    { id: 'geo-7', name: 'Agriculture and Land Use', weight: 5, description: 'Types of agriculture (subsistence, commercial, shifting cultivation, irrigation farming); cash crop and food crop production in Nigeria (cocoa, groundnut, palm oil, rubber); the effects of agriculture on the environment (deforestation, soil erosion); and modern agricultural practices and challenges in Nigeria.' },
    { id: 'geo-8', name: 'Mineral Resources and Mining', weight: 4, description: 'Types of mineral resources (metallic, non-metallic, energy minerals); distribution of mineral resources in Nigeria (petroleum, natural gas, coal, tin, iron ore, limestone); methods of mining; environmental effects of mining; and Nigeria\'s mineral resource management challenges.' },
    { id: 'geo-9', name: 'Manufacturing and Industry', weight: 4, description: 'Types of industries (heavy, light, consumer, capital goods); factors influencing industrial location (raw materials, market, transport, labour, power); industrialisation in Nigeria (past and present); contribution of manufacturing to GDP; and challenges of industrial development in Nigeria.' },
    { id: 'geo-10', name: 'Transport and Trade', weight: 4, description: 'Types of transport (road, rail, water, air, pipeline); advantages and disadvantages of each transport mode; transport networks in Nigeria; factors influencing trade; Nigeria\'s major trading partners and commodities; balance of trade; and the role of ECOWAS in regional trade.' },
    { id: 'geo-11', name: 'Natural Regions and Vegetation', weight: 3, description: 'Natural regions of Nigeria: rainforest, Guinea savanna, Sudan savanna, Sahel savanna; vegetation types and their characteristics; adaptation of plants to climate; deforestation and desertification in Nigeria; conservation of Nigeria\'s biodiversity; and the effects of climate on human activities.' },
    { id: 'geo-12', name: 'Environmental Hazards and Management', weight: 4, description: 'Types of environmental hazards: floods, drought, desertification, erosion, oil spills, gully erosion (especially in southeastern Nigeria); causes and consequences; prevention and management strategies; climate change and its impact on hazard frequency; and disaster risk reduction approaches.' },
  ]
};

const subjects = [english, mathematics, physics, chemistry, biology, economics, government, literature, geography];

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
    { subject: 'English Language', topics: ['Comprehension Passages', 'Grammar: Tenses, Concord and Articles', 'Sentence Construction', 'Lexis and Structure', 'Summary Writing and Notes', 'Essay and Paragraph Writing'] },
    { subject: 'Mathematics', topics: ['Algebraic Expressions and Operations', 'Calculus: Differentiation', 'Calculus: Integration', 'Trigonometry: Ratios and Graphs', 'Plane Geometry: Angles, Triangles and Polygons', 'Coordinate Geometry and Graphs'] },
    { subject: 'Physics', topics: ["Newton's Laws of Motion", 'Work, Energy, Power and Conservation Laws', 'Light: Laws of Reflection and Refraction', 'Electrostatics and Coulomb\'s Law', 'Electric Circuits: Ohm\'s Law and Kirchhoff\'s Laws', 'Kinematics: Displacement, Velocity and Acceleration'] },
    { subject: 'Chemistry', topics: ['Atomic Structure and Electron Configuration', 'Chemical Bonding: Ionic, Covalent and Metallic', 'Chemical Calculations and Stoichiometry', 'Acids, Bases, Salts and pH', 'Organic Chemistry: Alkanes and Alkenes', 'Electrochemistry: Redox and Cells'] },
    { subject: 'Biology', topics: ['Cell Structure and Functions', 'Enzymes and Biochemical Reactions', 'Gaseous Exchange and Cell Respiration', 'Transport in Plants and Animals', 'Mendelian Genetics and Probability', 'Nutrition: Photosynthesis and Chemosynthesis'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice MCQs. Review key formulas/concepts.',
};

const exam: ExamTemplate = {
  examId: 'neco',
  examName: 'NECO SSCE',
  country: 'nigeria',
  description: 'The National Examinations Council (NECO) Senior Secondary Certificate Examination (SSCE) is Nigeria\'s second major secondary school leaving examination, administered annually by the National Examinations Council. The exam is conducted in two main diets: the June/July (Internal) examination for candidates in their final SS3 year, and the December/January (External) examination for private candidates. NECO results are widely accepted by Nigerian universities, polytechnics, and colleges of education for admission purposes, often alongside or as an alternative to WAEC.',
  examPattern: 'NECO SSCE consists of multiple-choice objective papers and essay/theory papers across all registered subjects. Each subject typically has an objective paper (1 hour 15 minutes) and a theory paper (2 hours 15 minutes). Some subjects include practical examinations (Physics, Chemistry, Biology, Agricultural Science). A minimum of six credits including English Language and Mathematics is generally required for university admission in Nigeria.',
  eligibility: 'Candidates in their final year of secondary school (SS3) may register for the June/July diet, while private candidates may register for the December/January external examination. Candidates must have completed the prescribed secondary school curriculum. For university admission, a minimum of six credits including English and Mathematics in not more than two sittings is typically required across WAEC and NECO combined or in a single diet.',
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://www.negov.org',
};

export default exam;
