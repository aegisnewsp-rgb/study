export interface Topic { id: string; name: string; weight: 1|2|3|4|5; description?: string; }
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
    { id: 'phy-001', name: 'Units & Measurement', weight: 4, description: "Units & Measurement: SI units, dimensions, significant figures, errors — accuracy, precision, and propagation of uncertainties in experimental science." },
    { id: 'phy-002', name: 'Motion in 1D', weight: 5, description: "Kinematics: Motion in 1D — displacement, velocity, acceleration, equations of motion (suvat), and graphical analysis of motion." },
    { id: 'phy-003', name: 'Motion in 2D', weight: 5, description: "Projectile Motion & Relative Motion: Motion in 2D including projectile trajectories, relative velocity, and river-boat problems." },
    { id: 'phy-004', name: 'Laws of Motion', weight: 5, description: "Newton's Laws of Motion: Inertia, force, momentum conservation, friction (static and kinetic), and pulley problems — free body diagrams and constraint relations." },
    { id: 'phy-005', name: 'Work Energy Power', weight: 5, description: "Work, Energy & Power: Work done by forces, kinetic and potential energy, work-energy theorem, conservation of mechanical energy, and power calculations." },
    { id: 'phy-006', name: 'Rotational Motion', weight: 5, description: "Rotational Mechanics: Angular displacement, velocity, acceleration, moment of inertia, torque, angular momentum, and conservation laws in rotating systems." },
    { id: 'phy-007', name: 'Gravitation', weight: 5, description: "Gravitation: Newton's law of gravitation, gravitational field and potential, Kepler's laws, orbital velocity, escape velocity, and satellite motion." },
    { id: 'phy-008', name: 'Mechanical Properties', weight: 4, description: "Mechanical Properties of Solids: Stress, strain, Hooke's law, Young's modulus, bulk modulus, shear modulus, and elastic potential energy." },
    { id: 'phy-009', name: 'Fluid Mechanics', weight: 4, description: "Fluid Mechanics: Pascal's law, buoyancy, Archimedes' principle, Bernoulli's theorem, viscosity, surface tension, and capillary action." },
    { id: 'phy-010', name: 'Thermal Properties', weight: 5, description: "Thermal Properties: Heat transfer (conduction, convection, radiation), thermal expansion, calorimetry, Newton's law of cooling, and specific heat capacity." },
    { id: 'phy-011', name: 'Thermodynamics', weight: 5, description: "Thermodynamics: Laws of thermodynamics, heat engines, refrigerators, entropy, isothermal and adiabatic processes, and thermodynamic cycles." },
    { id: 'phy-012', name: 'Kinetic Theory', weight: 4, description: "Kinetic Theory of Gases: Assumptions of kinetic theory, rms velocity, degrees of freedom, gas laws, internal energy, and Maxwell's distribution." },
    { id: 'phy-013', name: 'SHM', weight: 5, description: "Simple Harmonic Motion: SHM fundamentals, equation of SHM, spring-mass system, pendulum, energy in SHM, damped oscillations, and forced oscillations." },
    { id: 'phy-014', name: 'Waves', weight: 5, description: "Waves & Sound: Wave equation, superposition, interference (Young's double slit), standing waves, beats, Doppler effect, and acoustic phenomena." },
    { id: 'phy-015', name: 'Electrostatics', weight: 5, description: "Electrostatics: Coulomb's law, electric field, electric potential, Gauss's law, electric dipoles, and energy stored in electric fields." },
    { id: 'phy-016', name: 'Capacitance', weight: 5, description: "Capacitance: Capacitors, series and parallel combinations, capacitance calculation, dielectrics, energy stored in capacitors, and RC circuits." },
    { id: 'phy-017', name: 'Current Electricity', weight: 5, description: "Current Electricity: Ohm's law, Kirchhoff's laws, series/parallel circuits, EMF, internal resistance, network analysis, and power dissipation." },
    { id: 'phy-018', name: 'Moving Charges', weight: 5, description: "Moving Charges & Magnetism: Magnetic field due to current, Biot-Savart law, Ampere's law, force on moving charges, and cyclotron原理." },
    { id: 'phy-019', name: 'Magnetism', weight: 5, description: "Magnetism & Matter: Magnetic dipole, Earth's magnetism, magnetization, magnetic materials, and magnetic force on current-carrying conductors." },
    { id: 'phy-020', name: 'EMI', weight: 5, description: "Electromagnetic Induction: Faraday's law, Lenz's law, motional EMF, self-induction, mutual induction, eddy currents, and LR/LC circuits." },
    { id: 'phy-021', name: 'AC', weight: 5, description: "Alternating Current: AC circuits, RMS and peak values, phasor diagrams, LCR circuits, resonance, impedance, power in AC circuits, and transformers." },
    { id: 'phy-022', name: 'EM Waves', weight: 4, description: "Electromagnetic Waves: Displacement current, Maxwell's equations, EM wave spectrum (radio to gamma), and properties of EM waves." },
    { id: 'phy-023', name: 'Ray Optics', weight: 5, description: "Ray Optics: Reflection, refraction, lens maker formula, prism dispersion, total internal reflection, optical instruments (microscope, telescope, human eye)." },
    { id: 'phy-024', name: 'Wave Optics', weight: 5, description: "Wave Optics: Huygens' principle, interference, Young's double slit, thin film interference, diffraction, single slit diffraction, and resolution." },
    { id: 'phy-025', name: 'Dual Nature', weight: 5, description: "Dual Nature of Matter: Photoelectric effect, Einstein's equation, photon concept, de Broglie wavelength, wave-particle duality, and Davisson-Germer experiment." },
    { id: 'phy-026', name: 'Atoms', weight: 5, description: "Atoms: Rutherford model, Bohr model, hydrogen spectrum, energy levels, excitation and ionization, and X-ray production." },
    { id: 'phy-027', name: 'Nuclei', weight: 5, description: "Nuclear Physics: Radioactivity, alpha/beta/gamma decay, half-life, decay constant, nuclear reactions, mass defect, binding energy, and fission/fusion." },
    { id: 'phy-028', name: 'Semiconductors', weight: 4, description: "Semiconductors: Intrinsic and extrinsic semiconductors, p-n junction, diode characteristics, transistors, logic gates, and semiconductor devices." },
  ]
};

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chem-001', name: 'Some Basic Concepts', weight: 5, description: "Mole Concept & Stoichiometry: Mole, molar mass, empirical and molecular formulas, limiting reagent, percent composition, and titration calculations." },
    { id: 'chem-002', name: 'Atomic Structure', weight: 5, description: "Atomic Structure: Quantum numbers, electron configurations, de Broglie hypothesis, Heisenberg uncertainty, Schrödinger equation, and atomic spectra." },
    { id: 'chem-003', name: 'Chemical Bonding', weight: 5, description: "Chemical Bonding: Ionic, covalent, metallic bonding, VSEPR theory, hybridisation (sp, sp², sp³, sp³d, sp³d²), MOT basics, bond parameters, and hydrogen bonding." },
    { id: 'chem-004', name: 'Classification', weight: 4, description: "Classification of Elements: Historical classifications, modern periodic law, periodic trends (atomic radius, ionisation energy, electronegativity, electron affinity)." },
    { id: 'chem-005', name: 'States of Matter', weight: 4, description: "States of Matter: Gas laws (Boyle's, Charles', Avogadro's), ideal gas equation, real gas behavior, van der Waals equation, and liquid state properties." },
    { id: 'chem-006', name: 'Thermodynamics', weight: 5, description: "Thermodynamics: System and surroundings, internal energy, enthalpy, Hess's law, spontaneity, Gibbs free energy, entropy, and thermochemical calculations." },
    { id: 'chem-007', name: 'Equilibrium', weight: 5, description: "Chemical Equilibrium: Law of mass action, equilibrium constant, Le Chatelier's principle, ionic equilibrium, pH, buffer solutions, solubility product, and common ion effect." },
    { id: 'chem-008', name: 'Redox', weight: 5, description: "Redox Reactions: Oxidation and reduction, oxidation numbers, balancing redox equations (oxidation number and ion-electron methods), and electrochemical series." },
    { id: 'chem-009', name: 'Electrochemistry', weight: 5, description: "Electrochemistry: Galvanic and electrolytic cells, Nernst equation, electrode potentials, Kohlrausch law, Faraday's laws of electrolysis, and batteries." },
    { id: 'chem-010', name: 'Kinetics', weight: 5, description: "Chemical Kinetics: Rate of reaction, rate laws, order and molecularity, integrated rate equations (zero, first, second order), Arrhenius equation, and reaction mechanisms." },
    { id: 'chem-011', name: 'Surface Chemistry', weight: 3, description: "Surface Chemistry: Adsorption (physisorption and chemisorption), catalysis, colloidal state, emulsion, gel, and properties of colloids (Tyndall effect, Brownian motion)." },
    { id: 'chem-012', name: 'Solutions', weight: 5, description: "Solutions: Types of solutions, Raoult's law, elevation of boiling point, depression of freezing point, osmotic pressure, and abnormal colligative properties." },
    { id: 'chem-013', name: 'Colloidal', weight: 3, description: "Colloids: Classification of colloids, preparation, purification, properties (colligative, electrophoresis), coagulation, and protective colloids." },
    { id: 'chem-014', name: 'Periodic Table', weight: 5, description: "Periodic Properties: Atomic and ionic radii, ionisation enthalpy, electron gain enthalpy, electronegativity, valence shell electron configuration, and diagonal relationship." },
    { id: 'chem-015', name: 's-Block', weight: 4, description: "s-Block Elements: Alkali and alkaline earth metals — occurrence, trends in properties, oxides, hydroxides, carbonates, nitrates, and important compounds like NaOH, Na₂CO₃, Ca(OH)₂." },
    { id: 'chem-016', name: 'p-Block', weight: 5, description: "p-Block Elements: Group 13 to 18 — trends, important compounds (borax, AlCl₃, PbO₂, interhalogens), noble gases, and anomalies in first member of each group." },
    { id: 'chem-017', name: 'd-Block', weight: 5, description: "d-Block & f-Block: Transition metals, inner transition metals, variable oxidation states, magnetic properties, complex formation, lanthanide contraction, and K₂Cr₂O₇/KMnO₄." },
    { id: 'chem-018', name: 'f-Block', weight: 4, description: "f-Block Elements: Lanthanides and actinides — electronic configuration, oxidation states, lanthanide contraction, magnetic properties, and uses of lanthanides." },
    { id: 'chem-019', name: 'Metallurgy', weight: 5, description: "Metallurgy: Occurrence, concentration methods (froth flotation, magnetic separation), extraction principles, refining methods (electrolytic, vapor phase), and alloy chemistry." },
    { id: 'chem-020', name: 'Hydrocarbons', weight: 5, description: "Hydrocarbons: Alkanes, alkenes, alkynes — preparation methods, chemical reactions (substitution, addition, combustion), Markovnikov and anti-Markovnikov rules, and aromatic hydrocarbons (benzene structure, electrophilic substitution)." },
    { id: 'chem-021', name: 'Haloalkanes', weight: 5, description: "Haloalkanes & Haloarenes: SN1, SN2, E1, E2 reactions — nucleophilicity vs basicity, carbocation stability, chirality, racemic mixture, and uses of chloral hydrate, CCl₄." },
    { id: 'chem-022', name: 'Alcohols Phenol Ether', weight: 5, description: "Alcohols, Phenols & Ethers: Preparation, reactions (dehydration, oxidation, esterification), distinction between 1°, 2°, 3° alcohols, phenolic reactions (bromination, nitration), and Williamson ether synthesis." },
    { id: 'chem-023', name: 'Aldehydes Ketones', weight: 5, description: "Aldehydes, Ketones & Carboxylic Acids: Nucleophilic addition (NaHSO₃, HCN, RMgX), oxidation reactions, Cannizzaro reaction, aldol condensation, and methods of preparation for carboxylic acids." },
    { id: 'chem-024', name: 'Carboxylic Acids', weight: 5, description: "Carboxylic Acids & Derivatives: Methods of preparation, reactions (substitution, reduction), esterification mechanism, acid chloride, amide, and anhydride chemistry." },
    { id: 'chem-025', name: 'Amines', weight: 5, description: "Amines: Classification (1°, 2°, 3°), preparation (Gabriel phthalimide, Hoffmann bromamide), basicity comparison, and reactions — acylation, carbylamine, diazotisation." },
    { id: 'chem-026', name: 'Biomolecules', weight: 4, description: "Biomolecules: Carbohydrates (mono, di, polysaccharides), amino acids, proteins, enzymes, nucleic acids (DNA, RNA), and vitamins (water and fat soluble)." },
    { id: 'chem-027', name: 'Polymers', weight: 4, description: "Polymers: Classification (addition, condensation, natural, synthetic), polymerisation mechanisms, biodegradable polymers, and important polymers — nylon, PVC, Teflon, Bakelite." },
    { id: 'chem-028', name: 'Environmental Chemistry', weight: 3, description: "Environmental Chemistry: Air and water pollution, ozone layer depletion, greenhouse effect, acid rain, waste management, and green chemistry principles." },
    { id: 'chem-029', name: 'Coordination Compounds', weight: 5, description: "Coordination Chemistry: Werner's theory, valence bond theory, crystal field theory, geometric and optical isomerism, nomenclature, and stability constants." },
  ]
};

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#f59e0b',
  topics: [
    { id: 'math-001', name: 'Sets Relations', weight: 4, description: "Sets, Relations & Functions: Set operations, Venn diagrams, types of relations (reflexive, symmetric, transitive), types of functions (one-one, onto, bijective), and inverse functions." },
    { id: 'math-002', name: 'Trigonometry', weight: 5, description: "Trigonometry: Trigonometric ratios, identities, equations, solutions of triangles, inverse trigonometry values, andHeight and Distance applications." },
    { id: 'math-003', name: 'Inverse Trig', weight: 4, description: "Inverse Trigonometric Functions: Domain, range, principal value branches, identities involving inverse trig, and solving equations with inverse trig functions." },
    { id: 'math-004', name: 'Limits', weight: 5, description: "Limits: Algebraic and trigonometric limits, L'Hospital's rule, limits at infinity, indeterminate forms (0/0, ∞/∞), and sandwich theorem." },
    { id: 'math-005', name: 'Continuity', weight: 5, description: "Continuity: Continuity at a point and interval, types of discontinuities, algebra of continuous functions, and intermediate value theorem." },
    { id: 'math-006', name: 'Differentiability', weight: 5, description: "Differentiability: Derivative as rate measure, left and right derivatives, relationship between continuity and differentiability, and differentiable vs non-differentiable functions." },
    { id: 'math-007', name: 'Differentiation', weight: 5, description: "Differentiation: Derivatives of standard functions, product, quotient, chain rules, implicit and parametric differentiation, logarithmic differentiation, and derivatives of inverse functions." },
    { id: 'math-008', name: 'AOD', weight: 5, description: "Applications of Derivatives (AOD): Tangents and normals, increasing/decreasing functions, maxima and minima (first and second derivative tests), and Rolle's and Lagrange's mean value theorems." },
    { id: 'math-009', name: 'Indefinite Integrals', weight: 5, description: "Indefinite Integrals: Integration as antiderivative, standard integrals, substitution, partial fractions, integration by parts, and trigonometric integrals." },
    { id: 'math-010', name: 'Definite Integrals', weight: 5, description: "Definite Integrals: Fundamental theorem of calculus, properties, evaluation by substitution and parts, definite integrals as limit of sum, and area under curves." },
    { id: 'math-011', name: 'DE', weight: 5, description: "Differential Equations: Order and degree, formation of DE, solving linear and Bernoulli differential equations, homogeneous equations, and applications (growth/decay, mixing problems)." },
    { id: 'math-012', name: 'Vector Algebra', weight: 5, description: "Vector Algebra: Vector operations (addition, subtraction, scalar multiplication), dot product, cross product, scalar and vector triple product, and applications in geometry." },
    { id: 'math-013', name: '3D Geometry', weight: 5, description: "3D Geometry: Direction cosines, straight lines in 3D, plane equations, distance between point and plane, angle between lines and planes, and sphere equations." },
    { id: 'math-014', name: 'Probability', weight: 5, description: "Probability: Classical and axiomatic probability, conditional probability, Bayes' theorem, independence of events, random variables, and binomial distribution." },
    { id: 'math-015', name: 'Permutations', weight: 5, description: "Permutations & Combinations: Fundamental principle of counting, permutations of distinct and identical objects, combinations, and circular permutations." },
    { id: 'math-016', name: 'Binomial', weight: 5, description: "Binomial Theorem: Positive integer index, general term, middle term, greatest term, and applications of binomial expansion for approximations." },
    { id: 'math-017', name: 'Sequences', weight: 5, description: "Sequences & Series: Arithmetic and geometric progressions, special series (sum of n terms, squares, cubes), mean (AM, GM, HM), and convergence tests for infinite series." },
    { id: 'math-018', name: 'Matrices', weight: 5, description: "Matrices: Types of matrices, operations (addition, multiplication, transpose), adjoint, inverse, rank, and solving linear equations using matrices." },
    { id: 'math-019', name: 'Determinants', weight: 5, description: "Determinants: Properties of determinants, evaluation using row/column operations, minors and cofactors, product of determinants, and solving simultaneous equations (Cramer's rule)." },
    { id: 'math-020', name: 'Complex Numbers', weight: 5, description: "Complex Numbers: Argand plane, modulus and argument, polar form, de Moivre's theorem, cube roots of unity, and solving equations with complex roots." },
    { id: 'math-021', name: 'Parabola', weight: 5, description: "Parabola: Standard equations (y²=4ax, x²=4ay), focus, directrix, latus rectum, equation of tangent and normal, and parametric equations." },
    { id: 'math-022', name: 'Ellipse', weight: 5, description: "Ellipse: Standard equation (x²/a² + y²/b² = 1), eccentricity, focus, directrix, latus rectum, tangent, and normal equations, and parametric form." },
    { id: 'math-023', name: 'Hyperbola', weight: 5, description: "Hyperbola: Standard equation (x²/a² - y²/b² = 1), eccentricity, conjugate hyperbola, asymptotes, tangent, and rectangular hyperbola (xy = c²)." },
    { id: 'math-024', name: 'Circle', weight: 5, description: "Circle: Standard and general forms, centre and radius, equation of tangent and normal, length of tangent, and radical axis/power of point for intersecting circles." },
    { id: 'math-025', name: 'Straight Lines', weight: 4, description: "Straight Lines: Various forms (slope-intercept, point-slope, two-point), angle between lines, perpendicular and parallel conditions, distance from point to line, and family of lines." },
    { id: 'math-026', name: 'Quadratic Equations', weight: 5, description: "Quadratic Equations: Roots (real, equal, complex), discriminant, relationship between roots and coefficients, formation of quadratic equations, and maximum/minimum of quadratic expressions." },
    { id: 'math-027', name: 'Progressions', weight: 5, description: "Progressions (AP, GP, HP): nth term, sum of n terms, properties of AM, GM, HM, and inserting means between numbers — including infinite geometric series." },
    { id: 'math-028', name: 'Mathematical Induction', weight: 4, description: "Mathematical Induction: Principle of mathematical induction, strong induction, and proving statements involving natural numbers (sums, divisibility, inequalities)." },
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
    { subject: 'Physics', topics: ['Electrostatics', 'Current Electricity', 'EMI', 'Rotational Motion', 'Gravitation', 'Optics'] },
    { subject: 'Chemistry', topics: ['Chemical Bonding', 'Thermodynamics', 'Equilibrium', 'Organic Chemistry', 'Coordination Compounds'] },
    { subject: 'Mathematics', topics: ['Calculus', 'Coordinate Geometry', 'Algebra', 'Vector Algebra', 'Probability'] },
  ],
  strategy: 'Focus on JEE Advanced-specific problem solving. Practice subjective and integer-type questions. Review high-weightage topics.',
};

const exam: ExamTemplate = {
  examId: 'jeeadvanced',
  examName: 'JEE Advanced',
  country: 'india',
  description: "JEE Advanced is the second-stage entrance exam for admission to the 23 Indian Institutes of Technology (IITs) and a few other premier engineering institutes. Only the top 2.5 lakh JEE Main qualifiers are eligible to appear. Known for high difficulty — tests conceptual application, multi-topic problems, and analytical skills in Physics, Chemistry, and Mathematics.",
  examPattern: "Paper 1 and Paper 2 (both compulsory), each with 54 questions totaling 306 marks. Sections in each paper: Physics, Chemistry, Mathematics. 3 hours per paper. Marking scheme varies (integer-type, multiple-correct, comprehension-based).",
  eligibility: "Among top 2.5 lakh JEE Main rankers. Age limit: 25 years (30 for SC/ST/PwD). Class 12 aggregate of 75% or top 20 percentile in respective boards.",
  subjects,
  durations,
  rescueMode,
  lastUpdated: '2026-03-23',
  officialSource: 'https://jeeadv.ac.in',
};
export default exam;
