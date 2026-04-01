export interface Topic { id: string; name: string; weight: 1|2|3|4|5; }
export interface Subject { id: string; name: string; topics: Topic[]; color: string; }
export interface DailyTopicItem extends Topic { subject: string; }
export interface RoadmapTemplate { duration: string; totalDays: number; dailyTopics: DailyTopicItem[]; description: string; }
export interface RescueTemplate { name: string; description?: string; duration: string; focusAreas: {subject:string;topics:string[]}[]; strategy: string; }
export interface ExamTemplate { examId: string; examName: string; country: 'india'|'pakistan'|'nigeria'; subjects: Subject[]; durations: Record<string, RoadmapTemplate>; rescueMode: RescueTemplate; lastUpdated: string; officialSource: string;
  description?: string;
  examPattern?: string;
  eligibility?: string; }

function makeRoadmap(subjects: Subject[], durationKey: string, totalDays: number, description: string): RoadmapTemplate {
  const allTopics: DailyTopicItem[] = [];
  for (const s of subjects) { for (const t of s.topics) { allTopics.push({ ...t, subject: s.name }); } }
  const totalTopics = allTopics.length;
  const topicsToCover = Math.min(Math.ceil(totalTopics / totalDays) * 3, totalTopics);
  const selected = allTopics.slice(0, topicsToCover);
  const perDay = Math.ceil(topicsToCover / totalDays);
  const dailyTopics: DailyTopicItem[] = selected.slice(0, perDay);
  return { duration: durationKey, totalDays, dailyTopics, description };
}

const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'phy-001', name: 'Units & Measurement', weight: 3 , description: 'SI units, dimensions, significant figures, vernier calipers, screw gauge, error analysis, and dimensional analysis.' },
    { id: 'phy-002', name: 'Motion in 1D', weight: 4 , description: 'Kinematics of straight-line motion — displacement, velocity, acceleration, equations of motion, and graphical analysis.' },
    { id: 'phy-003', name: 'Motion in 2D', weight: 4 , description: 'Projectile motion, relative velocity, and circular motion — vector analysis of 2D motion problems.' },
    { id: 'phy-004', name: 'Laws of Motion', weight: 5 , description: "Newton's three laws, free body diagrams, friction, pulley problems, and application of momentum conservation." },
    { id: 'phy-005', name: 'Work Energy Power', weight: 5 , description: 'Work done by forces, kinetic and potential energy, work-energy theorem, and power calculations.' },
    { id: 'phy-006', name: 'Rotational Motion', weight: 4 , description: 'Torque, moment of inertia, angular momentum conservation, rotational kinetic energy, and equilibrium.' },
    { id: 'phy-007', name: 'Gravitation', weight: 4 , description: "Newton's law of gravitation, gravitational field and potential, Kepler's laws, orbital velocity, and escape velocity." },
    { id: 'phy-008', name: 'Mechanical Properties', weight: 3 , description: "Elasticity — stress, strain, Young's modulus, bulk modulus, shear modulus, Hooke's law, and Poisson's ratio." },
    { id: 'phy-009', name: 'Fluid Mechanics', weight: 3 , description: "Pascal's law, buoyancy, Bernoulli's principle, surface tension, viscosity, and Stokes' law." },
    { id: 'phy-010', name: 'Thermal Properties', weight: 4 , description: 'Heat, temperature, thermal expansion, calorimetry, specific heat, latent heat, and heat transfer methods.' },
    { id: 'phy-011', name: 'Thermodynamics', weight: 5 , description: 'Laws of thermodynamics, specific heat capacities, isothermal and adiabatic processes, and heat engines.' },
    { id: 'phy-012', name: 'Kinetic Theory', weight: 3 , description: 'Kinetic theory of gases, RMS velocity, degrees of freedom, equipartition theorem, and gas laws.' },
    { id: 'phy-013', name: 'SHM', weight: 4 , description: 'Simple harmonic motion — displacement, velocity, acceleration, spring-mass system, pendulum, and energy in SHM.' },
    { id: 'phy-014', name: 'Waves', weight: 4 , description: 'Wave equation, speed of sound, Doppler effect, standing waves, resonance, and beats in wave motion.' },
    { id: 'phy-015', name: 'Electrostatics', weight: 5 , description: "Coulomb's law, electric field, electric dipole, Gauss's law, electric potential, and capacitance." },
    { id: 'phy-016', name: 'Capacitance', weight: 4 , description: 'Capacitors, series and parallel combinations, dielectric materials, energy stored, and RC time constant.' },
    { id: 'phy-017', name: 'Current Electricity', weight: 5 , description: "Electric current, Ohm's law, resistivity, combination of resistors, Kirchhoff's laws, and circuit analysis." },
    { id: 'phy-018', name: 'Moving Charges', weight: 4 , description: 'Magnetic force on moving charges, Biot-Savart law, cyclotron, and torque on current loops in magnetic fields.' },
    { id: 'phy-019', name: 'Magnetism', weight: 4 , description: "Earth's magnetism, magnetic dipole moment, para/ferro/dia-magnetism, and magnetic properties of materials." },
    { id: 'phy-020', name: 'EMI', weight: 5 , description: "Electromagnetic induction — Faraday's law, Lenz's law, motional EMF, self and mutual inductance, and AC generators." },
    { id: 'phy-021', name: 'AC', weight: 4 , description: 'Alternating current, RMS value, phasor diagrams, LCR circuits, resonance, transformers, and power in AC.' },
    { id: 'phy-022', name: 'EM Waves', weight: 3 , description: 'Electromagnetic spectrum, properties of EM waves, displacement current, and communication systems.' },
    { id: 'phy-023', name: 'Ray Optics', weight: 5 , description: 'Reflection, refraction, spherical mirrors, lenses, prism, total internal reflection, and optical instruments.' },
    { id: 'phy-024', name: 'Wave Optics', weight: 4 , description: "Interference, Young's double slit, diffraction, single slit diffraction, resolving power, and polarization." },
    { id: 'phy-025', name: 'Dual Nature', weight: 5 , description: "Photoelectric effect, Einstein's equation, photon concept, de Broglie wavelength, and wave-particle duality." },
    { id: 'phy-026', name: 'Atoms', weight: 3 , description: 'Bohr model of hydrogen atom, spectral lines, energy levels, Rydberg formula, and hydrogen spectrum.' },
    { id: 'phy-027', name: 'Nuclei', weight: 3 , description: 'Nuclear composition, binding energy, mass defect, nuclear reactions, radioactivity, decay laws, and half-life.' },
    { id: 'phy-028', name: 'Semiconductors', weight: 3 , description: 'Semiconductor physics, diodes, transistors, logic gates, p-n junction, Boolean algebra, and communication.' },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chem-001', name: 'Some Basic Concepts', weight: 3 , description: 'Laws of chemical combination, mole concept, molarity, normality, empirical and molecular formulae, stoichiometry, and limiting reagent.' },
    { id: 'chem-002', name: 'Atomic Structure', weight: 4 , description: "Bohr model, quantum numbers, Aufbau principle, Hund's rule, Pauli's exclusion principle, and electronic configuration." },
    { id: 'chem-003', name: 'Chemical Bonding', weight: 5 , description: 'Ionic, covalent, metallic, hydrogen, and van der Waals bonds; VSEPR theory, hybridisation, MOT, and dipole moment.' },
    { id: 'chem-004', name: 'Classification', weight: 3 , description: 'Periodicity in properties, modern periodic table, trends in atomic radius, ionisation energy, electronegativity, and electron affinity.' },
    { id: 'chem-005', name: 'States of Matter', weight: 3 , description: 'Gaseous state — gas laws, kinetic theory, van der Waals equation, and real gas behavior.' },
    { id: 'chem-006', name: 'Thermodynamics', weight: 5 , description: "Internal energy, enthalpy, Hess's law, Gibbs free energy, spontaneity, and thermochemical calculations." },
    { id: 'chem-007', name: 'Equilibrium', weight: 4 , description: "Chemical equilibrium, Le Chatelier's principle, Kp and Kc, ionic equilibrium, pH, buffers, and solubility product." },
    { id: 'chem-008', name: 'Redox', weight: 3 , description: 'Oxidation-reduction, oxidation number, balancing redox equations, and electrochemical series.' },
    { id: 'chem-009', name: 'Electrochemistry', weight: 4 , description: "Galvanic cells, electrolytic cells, Nernst equation, conductance, Faraday's laws, and batteries." },
    { id: 'chem-010', name: 'Kinetics', weight: 4 , description: 'Rate of reaction, rate laws, order, molecularity, Arrhenius equation, and half-life calculations.' },
    { id: 'chem-011', name: 'Surface Chemistry', weight: 2 , description: 'Adsorption, catalysis, colloids — preparation, properties, and applications in industry.' },
    { id: 'chem-012', name: 'Solutions', weight: 3 , description: "Concentration terms, Raoult's law, abnormal molecular mass, boiling point elevation, and freezing point depression." },
    { id: 'chem-013', name: 'Colloidal', weight: 2 , description: 'Classification of colloids, Brownian motion, Tyndall effect, coagulation, and emulsions.' },
    { id: 'chem-014', name: 'Periodic Table', weight: 4 , description: 'Trends in atomic radius, ionisation energy, electronegativity, electron affinity across periods and groups; s, p, d, f blocks.' },
    { id: 'chem-015', name: 's-Block', weight: 3 , description: 'Alkali and alkaline earth metals — compounds like NaOH, Na2CO3, CaCO3, MgCl2, and biological importance.' },
    { id: 'chem-016', name: 'p-Block', weight: 4 , description: 'Group 13-18 elements — boron, carbon family, nitrogen, oxygen, halogen, and noble gas compounds.' },
    { id: 'chem-017', name: 'd-Block', weight: 4 , description: 'Transition metals, electronic configuration, properties, alloys, and inner transition metals (lanthanides and actinides).' },
    { id: 'chem-018', name: 'f-Block', weight: 2 , description: 'Lanthanides and actinides — electronic configuration, oxidation states, and strategic importance.' },
    { id: 'chem-019', name: 'Metallurgy', weight: 3 , description: 'Occurrence, concentration of ores, extraction of metals (Fe, Cu, Al), refining, and environmental effects.' },
    { id: 'chem-020', name: 'Hydrocarbons', weight: 4 , description: 'Alkanes, alkenes, alkynes — preparation, properties, and reaction mechanisms including free radical halogenation.' },
    { id: 'chem-021', name: 'Haloalkanes', weight: 3 , description: 'Nucleophilic substitution SN1/SN2, elimination E1/E2, and chiral molecules in haloalkanes.' },
    { id: 'chem-022', name: 'Alcohols Phenol Ether', weight: 3 , description: 'Preparation, properties, and reactions of alcohols, phenols, and ethers; distinction between them.' },
    { id: 'chem-023', name: 'Aldehydes Ketones', weight: 3 , description: 'Nucleophilic addition, aldol condensation, Cannizzaro reaction, and tests for aldehydes and ketones.' },
    { id: 'chem-024', name: 'Carboxylic Acids', weight: 3 , description: 'Acidity of carboxylic acids, esterification, decarboxylation, and conversion to amides and anhydrides.' },
    { id: 'chem-025', name: 'Amines', weight: 3 , description: 'Classification of amines, basicity comparison in aqueous and non-aqueous media, preparation, and nucleophilic reactions.' },
    { id: 'chem-026', name: 'Biomolecules', weight: 3 , description: 'Carbohydrates, amino acids, proteins, enzymes, and nucleic acids — structure, classification, and function.' },
    { id: 'chem-027', name: 'Polymers', weight: 2 , description: 'Natural and synthetic polymers, addition and condensation polymerisation, biodegradable polymers, and commercial plastics.' },
    { id: 'chem-028', name: 'Environmental Chemistry', weight: 2 , description: 'Environmental pollution — air, water, and soil; greenhouse effect, ozone depletion, and waste management.' },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#f59e0b',
  topics: [
    { id: 'math-001', name: 'Sets Relations', weight: 3 , description: 'Sets, Venn diagrams, relations, functions, domain, range, and types of functions (one-one, onto, bijective).' },
    { id: 'math-002', name: 'Trigonometry', weight: 5 , description: 'Trigonometric ratios, identities, equations, inverse trig, and solution of triangles using sine and cosine rules.' },
    { id: 'math-003', name: 'Inverse Trig', weight: 3 , description: 'Inverse trigonometric functions — domains, ranges, principal values, and standard identities involving inverse trig.' },
    { id: 'math-004', name: 'Limits', weight: 5 , description: "Limits of functions, L'Hospital's rule, limits of indeterminate forms, and standard limit formulas." },
    { id: 'math-005', name: 'Continuity', weight: 4 , description: 'Continuity and differentiability, intermediate value theorem, and behavior of functions at points.' },
    { id: 'math-006', name: 'Differentiability', weight: 4 },
    { id: 'math-007', name: 'Differentiation', weight: 5 , description: 'Derivatives of various functions, product, quotient, chain rules, and implicit differentiation.' },
    { id: 'math-008', name: 'AOD', weight: 5 },
    { id: 'math-009', name: 'Indefinite Integrals', weight: 4 },
    { id: 'math-010', name: 'Definite Integrals', weight: 4 },
    { id: 'math-011', name: 'DE', weight: 3 },
    { id: 'math-012', name: 'Vector Algebra', weight: 4 },
    { id: 'math-013', name: '3D Geometry', weight: 4 , description: 'Direction ratios, equations of lines and planes in 3D, angle between lines and planes, and shortest distance problems.' },
    { id: 'math-014', name: 'Probability', weight: 4 , description: "Classical and conditional probability, Bayes' theorem, binomial distribution, and random experiments." },
    { id: 'math-015', name: 'Permutations', weight: 3 },
    { id: 'math-016', name: 'Binomial', weight: 3 , description: 'Binomial theorem for positive integer index, binomial expansion, middle term, and greatest binomial coefficient.' },
    { id: 'math-017', name: 'Sequences', weight: 4 },
    { id: 'math-018', name: 'Matrices', weight: 4 , description: 'Types of matrices, operations on matrices, transpose, adjoint, inverse of matrix, and solution of linear equations.' },
    { id: 'math-019', name: 'Determinants', weight: 3 , description: "Determinants, evaluation using properties, minors and cofactors, and solution of linear equations using Cramer's rule." },
    { id: 'math-020', name: 'Complex Numbers', weight: 5 , description: "Complex numbers in algebraic form, Argand plane, modulus, argument, and De Moivre's theorem." },
    { id: 'math-021', name: 'Parabola', weight: 4 , description: 'Standard equation of parabola, directrix, focus, latus rectum, and tangent and normal equations.' },
    { id: 'math-022', name: 'Ellipse', weight: 3 , description: 'Standard equation of ellipse, eccentricity, latus rectum, and tangent and normal equations.' },
    { id: 'math-023', name: 'Hyperbola', weight: 3 , description: 'Standard equation of hyperbola, eccentricity, latus rectum, conjugate hyperbola, and tangent equations.' },
    { id: 'math-024', name: 'Circle', weight: 4 , description: 'Equation of circle — standard form, general form, tangents, and normal to a circle; director circle.' },
    { id: 'math-025', name: 'Straight Lines', weight: 3 , description: 'Pair of straight lines, angle between lines, distance between parallel lines, and family of lines through intersection.' },
  ]
};

const subjects = [physics, chemistry, mathematics];

const DURATIONS = ['1h','2h','3h','5h','12h','1d','2d','3d','5d','7d','10d','2w','1mo','2mo','3mo','6mo','1yr','2yr'];
const DUR_MAP: Record<string, {days: number; desc: string}> = {
  '1h':{days:1,desc:'One-hour speed-run covering highest-yield topics.'},
  '2h':{days:1,desc:'Two-hour rapid review of must-know concepts.'},
  '3h':{days:1,desc:'Three-hour focused session on critical topics.'},
  '5h':{days:1,desc:'Five-hour intensive sprint for quick learners.'},
  '12h':{days:1,desc:'Half-day comprehensive coverage of fundamentals.'},
  '1d':{days:1,desc:'One-day intensive sprint covering highest-weight topics.'},
  '2d':{days:2,desc:'Two-day rapid revision on high-weight topics.'},
  '3d':{days:3,desc:'Three-day intensive covering core concepts.'},
  '5d':{days:5,desc:'Five-day comprehensive focused preparation.'},
  '7d':{days:7,desc:'One-week intensive covering all major topics.'},
  '10d':{days:10,desc:'Ten-day detailed plan with thorough coverage.'},
  '2w':{days:14,desc:'Two-week balanced plan with revision time.'},
  '1mo':{days:30,desc:'One-month comprehensive preparation plan.'},
  '2mo':{days:60,desc:'Two-month detailed study plan with revision.'},
  '3mo':{days:90,desc:'Three-month extensive prep with mock tests.'},
  '6mo':{days:180,desc:'Six-month complete prep with stronghold building.'},
  '1yr':{days:365,desc:'One-year comprehensive journey to mastery.'},
  '2yr':{days:730,desc:'Two-year relaxed prep for deep understanding.'},
};
const durations: Record<string, RoadmapTemplate> = {};
for (const d of DURATIONS) { durations[d] = makeRoadmap(subjects, d, DUR_MAP[d].days, DUR_MAP[d].desc); }

const rescueMode: RescueTemplate = {
  name: 'Last Minute Rescue',
  description: 'High-impact 48-hour sprint covering only the highest-yield topics most likely to appear in the exam.',
  duration: '2d',
  focusAreas: [
    { subject: 'Physics', topics: ['Electrostatics', 'Current Electricity', 'EMI', 'Ray Optics', 'Laws of Motion', 'Work Energy Power'] },
    { subject: 'Chemistry', topics: ['Chemical Bonding', 'Thermodynamics', 'Equilibrium', 'Organic Chemistry'] },
    { subject: 'Mathematics', topics: ['Calculus', 'Algebra', 'Coordinate Geometry', 'Trigonometry'] },
  ],
  strategy: 'Focus on highest-yield topics. Practice previous year papers. Review key formulas.',
};

const exam: ExamTemplate = {
  examId: 'jeemain',
  examName: 'JEE Main',
  country: 'india',
  description: `JEE\ Main\ is\ the\ first\-stage\ entrance\ exam\ for\ admission\ to\ NITs,\ IIITs,\ and\ other\ Centrally\ Funded\ Technical\ Institutions\.\ Also\ used\ for\ JEE\ Advanced\ eligibility\.\ Conducted\ by\ NTA\ in\ multiple\ sessions\.`,
  examPattern: `300\ marks\ \(100\ each\ in\ Physics,\ Chemistry,\ Mathematics\)\.\ 25\ MCQs\ \+\ 5\ numerical\ questions\ per\ subject\.\ 4\ marks\ per\ MCQ,\ 4\ marks\ per\ correct\ numerical\.`,
  eligibility: `10\+2\ with\ Physics,\ Chemistry,\ Mathematics\.\ No\ age\ limit\ but\ must\ be\ within\ 2\ years\ of\ passing\ 12th\ for\ appearing\ in\ consecutive\ attempts\ cycles\.`,
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://jeemain.ntaonline.in',
};
export default exam;
