export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'eed-math-001', name: 'Algebra and Number Theory', weight: 4 as const, description: 'Linear equations, quadratic equations, progressions (AP, GP), polynomials, binomial theorem, complex numbers, permutations and combinations, and number theory fundamentals — the most heavily weighted algebra section in EGE.' },
    { id: 'eed-math-002', name: 'Functions and Graphs', weight: 4 as const, description: 'Domain and range, even/odd functions, inverse functions, composite functions, exponential and logarithmic functions, and graphing techniques for all function types — essential for EGE calculus problems.' },
    { id: 'eed-math-003', name: 'Trigonometry', weight: 3 as const, description: 'All six trig functions, identities, inverse trig, solving trig equations, and applications to geometry. EGE tests trig heavily within calculus and geometry contexts.' },
    { id: 'eed-math-004', name: 'Calculus — Differentiation', weight: 5 as const, description: 'Limits, derivatives of all function types, chain rule, implicit differentiation, higher-order derivatives, and applications (tangents, normals, monotonicity, extrema). The highest-weight EGE mathematics topic.' },
    { id: 'eed-math-005', name: 'Calculus — Integration', weight: 5 as const, description: 'Indefinite and definite integrals, substitution, integration by parts, partial fractions, area under curves, and applications of integration. EGE\'s second most important calculus topic.' },
    { id: 'eed-math-006', name: 'Planimetry (Plane Geometry)', weight: 3 as const, description: 'Triangles, circles, quadrilaterals, polygons, angles, chords, tangents, and inscribed/circumscribed figures. Tests geometric reasoning and theorem application.' },
    { id: 'eed-math-007', name: 'Stereometry (Solid Geometry)', weight: 3 as const, description: 'Prisms, pyramids, cylinders, cones, spheres, and composite solids. Volume, surface area, and cross-sections. Spatial visualization and theorem-based problem solving.' },
    { id: 'eed-math-008', name: 'Vectors and Analytic Geometry', weight: 3 as const, description: 'Vector operations, dot and cross product, lines and planes in space, conic sections (parabola, ellipse, hyperbola), and coordinate geometry transformations.' },
    { id: 'eed-math-009', name: 'Probability and Statistics', weight: 3 as const, description: 'Classical and conditional probability, Bayes\' theorem, random variables, expected value, variance, standard deviation, and basic statistical measures.' },
    { id: 'eed-math-010', name: 'Mathematical Logic and Proofs', weight: 2 as const, description: 'Direct and indirect proofs, proof by contradiction, mathematical induction, and set theory basics. Weights lower but tests rigorous mathematical thinking.' }
  ]
};

export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'eed-phy-001', name: 'Mechanics — Kinematics and Dynamics', weight: 5 as const, description: 'Motion in one and two dimensions, Newton\'s laws, friction, circular motion, and conservation of momentum. The most frequently tested EGE physics topic with high-weight problem questions.' },
    { id: 'eed-phy-002', name: 'Work, Energy, and Power', weight: 4 as const, description: 'Work done by constant/variable forces, kinetic and potential energy, conservation of mechanical energy, power, and collisions (elastic and inelastic).' },
    { id: 'eed-phy-003', name: 'Gravitation and Oscillations', weight: 4 as const, description: 'Universal gravitation, Kepler\'s laws, gravitational field strength, simple harmonic motion, pendulums, damped and forced oscillations, and resonance.' },
    { id: 'eed-phy-004', name: 'Molecular Physics and Thermodynamics', weight: 4 as const, description: 'Kinetic theory of gases, ideal gas law, first and second laws of thermodynamics, heat engines, entropy, phase transitions, and heat capacity — frequently combined in EGE problems.' },
    { id: 'eed-phy-005', name: 'Electrodynamics', weight: 5 as const, description: 'Electrostatic field, Coulomb\'s law, capacitors, DC circuits (Ohm\'s law, Kirchhoff\'s laws), magnetic field, electromagnetic induction, and AC circuits. The heaviest-weighted electricity topic.' },
    { id: 'eed-phy-006', name: 'Optics and Wave Physics', weight: 4 as const, description: 'Geometric optics (mirrors, lenses, refraction), wave optics (interference, diffraction, polarization), and Doppler effect. Practical problems involving optical instruments.' },
    { id: 'eed-phy-007', name: 'Quantum Physics and Atomic Structure', weight: 3 as const, description: 'Photoelectric effect, photons, Bohr model, energy levels, atomic spectra, wave-particle duality, and fundamentals of quantum mechanics — high-difficulty EGE questions.' },
    { id: 'eed-phy-008', name: 'Nuclear Physics and Radioactivity', weight: 3 as const, description: 'Radioactive decay (alpha, beta, gamma), half-life, decay laws, nuclear reactions, fission and fusion, and radiation safety. Concept-based questions with mathematical applications.' }
  ]
};

export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'eed-chem-001', name: 'Atomic Structure and Periodic Table', weight: 3 as const, description: 'Electron configuration, quantum numbers, orbital shapes, periodic trends (ionization energy, electronegativity, atomic radius), and chemical periodicity.' },
    { id: 'eed-chem-002', name: 'Chemical Bonding and Molecular Structure', weight: 4 as const, description: 'Ionic, covalent, and metallic bonding, VSEPR theory, hybridization, molecular orbital theory, dipole moments, and intermolecular forces — foundational for organic and inorganic chemistry.' },
    { id: 'eed-chem-003', name: 'Chemical Reactions and Stoichiometry', weight: 4 as const, description: 'Balancing reactions, oxidation-reduction, mole concept, molarity, equivalents, limiting reagent, theoretical yield, and practical stoichiometric calculations.' },
    { id: 'eed-chem-004', name: 'Solutions and Colloids', weight: 3 as const, description: 'Concentration units (molarity, molality, ppm), colligative properties (boiling point elevation, freezing point depression), Raoult\'s law, and colloid classification.' },
    { id: 'eed-chem-005', name: 'Chemical Thermodynamics and Kinetics', weight: 4 as const, description: 'Enthalpy, entropy, Gibbs free energy, reaction rates, rate laws, activation energy, catalysts, and chemical equilibrium — frequently combined in EGE problems.' },
    { id: 'eed-chem-006', name: 'Organic Chemistry', weight: 5 as const, description: 'Hydrocarbons, functional groups (alcohols, aldehydes, ketones, carboxylic acids, esters), reaction mechanisms, isomerism, polymers, and natural compounds. Highest-weight organic chemistry topics.' },
    { id: 'eed-chem-007', name: 'Inorganic Chemistry', weight: 4 as const, description: 'Properties of main group elements and transition metals, extraction processes, qualitative analysis, and descriptive chemistry of key elements (s, p, d blocks).' },
    { id: 'eed-chem-008', name: 'Electrochemistry and Corrosion', weight: 3 as const, description: 'Galvanic and electrolytic cells, standard electrode potentials, Nernst equation, Faraday\'s laws, and corrosion prevention methods.' }
  ]
};
