export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'eth-math-001', name: 'Algebra and Number Systems', weight: 5 as const, description: 'Real numbers, algebraic expressions, linear and quadratic equations, logarithms, inequalities, progressions (AP, GP), and the binomial theorem — core EUEE quantitative topics.' },
    { id: 'eth-math-002', name: 'Functions and Graphs', weight: 4 as const, description: 'Domain and range, inverse functions, composite functions, polynomial and rational functions, exponential and logarithmic functions, and graphing techniques.' },
    { id: 'eth-math-003', name: 'Trigonometry', weight: 4 as const, description: 'Trigonometric ratios and identities, inverse trigonometry, solving trig equations, and applications to geometry — frequently combined with calculus problems.' },
    { id: 'eth-math-004', name: 'Calculus — Differentiation', weight: 5 as const, description: 'Limits and continuity, derivative rules (power, product, quotient, chain), implicit differentiation, higher-order derivatives, and applications (tangents, rates of change, optimization).' },
    { id: 'eth-math-005', name: 'Calculus — Integration', weight: 4 as const, description: 'Indefinite and definite integrals, integration techniques (substitution, by parts), areas under curves, and applications of integration in physics and geometry contexts.' },
    { id: 'eth-math-006', name: 'Geometry and Coordinate Geometry', weight: 4 as const, description: 'Plane geometry theorems, coordinate geometry (lines, circles, conic sections), distance and section formulas, and transformation geometry.' },
    { id: 'eth-math-007', name: 'Probability and Statistics', weight: 3 as const, description: 'Combinatorics (permutations and combinations), probability of simple and compound events, conditional probability, Bayes\' theorem, and basic statistical measures.' },
    { id: 'eth-math-008', name: 'Vectors and Linear Algebra', weight: 3 as const, description: 'Vector operations in 2D and 3D, scalar and vector products, matrix operations, determinants, solving systems of linear equations, and applications.' }
  ]
};

export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'eth-phy-001', name: 'Mechanics — Kinematics and Dynamics', weight: 5 as const, description: 'Motion in one and two dimensions, projectile motion, relative velocity, Newton\'s laws of motion, friction, circular motion, and momentum conservation.' },
    { id: 'eth-phy-002', name: 'Work, Energy, and Power', weight: 4 as const, description: 'Work done by constant and variable forces, kinetic and potential energy, conservation of mechanical energy, power, and collisions (elastic and inelastic).' },
    { id: 'eth-phy-003', name: 'Gravitation and Oscillations', weight: 4 as const, description: 'Universal gravitation, Kepler\'s laws, gravitational field, simple harmonic motion, damped and forced oscillations, and resonance phenomena.' },
    { id: 'eth-phy-004', name: 'Heat and Thermodynamics', weight: 4 as const, description: 'Heat transfer mechanisms, calorimetry, specific and latent heat, kinetic theory of gases, first and second laws of thermodynamics, and heat engines.' },
    { id: 'eth-phy-005', name: 'Electricity and Magnetism', weight: 5 as const, description: 'Electrostatics (Coulomb\'s law, electric fields), capacitance, DC circuits, Kirchhoff\'s laws, magnetic effects of current, electromagnetic induction, and AC circuits — heaviest EUEE physics topic.' },
    { id: 'eth-phy-006', name: 'Optics and Wave Phenomena', weight: 4 as const, description: 'Reflection, refraction, Snell\'s law, lenses and mirrors, optical instruments, wave optics (interference, diffraction), and the Doppler effect in waves.' },
    { id: 'eth-phy-007', name: 'Modern Physics', weight: 4 as const, description: 'Photoelectric effect, Bohr model and energy levels, atomic spectra, radioactivity, nuclear reactions, fission and fusion, and introduction to quantum physics.' }
  ]
};

export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'eth-chem-001', name: 'Atomic Structure and Chemical Periodicity', weight: 3 as const, description: 'Atomic orbitals, quantum numbers, electron configurations, and periodic trends in physical and chemical properties of elements.' },
    { id: 'eth-chem-002', name: 'Chemical Bonding and Molecular Structure', weight: 4 as const, description: 'Ionic, covalent, and metallic bonding, VSEPR theory, valence bond theory, hybridization, molecular orbital theory, and bond polarity.' },
    { id: 'eth-chem-003', name: 'States of Matter and Solutions', weight: 4 as const, description: 'Gases (ideal gas law, kinetic molecular theory), liquids (properties, vapor pressure), solids (crystal types), and solutions (concentration units, colligative properties).' },
    { id: 'eth-chem-004', name: 'Chemical Reactions and Equilibrium', weight: 5 as const, description: 'Types of chemical reactions, reaction rates (rate laws, order), chemical equilibrium, equilibrium constants, Le Chatelier\'s principle, and acid-base equilibria (pH, buffers).' },
    { id: 'eth-chem-005', name: 'Organic Chemistry', weight: 5 as const, description: 'Structure and bonding in organic compounds, functional groups, reaction mechanisms (substitution, addition, elimination), stereochemistry, polymers, and biomolecules — highest-weight chemistry topic.' },
    { id: 'eth-chem-006', name: 'Electrochemistry and Redox', weight: 3 as const, description: 'Oxidation and reduction, electrochemical cells, standard electrode potentials, Faraday\'s laws, and applications in batteries and electrolysis.' }
  ]
};
