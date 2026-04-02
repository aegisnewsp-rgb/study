export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'nep-math-001', name: 'Algebra and Functions', weight: 5 as const, description: 'Linear and quadratic equations, polynomials, logarithms, sequences and series (AP, GP), permutations and combinations, binomial theorem, and inequalities — core Nepal engineering entrance math.' },
    { id: 'nep-math-002', name: 'Trigonometry', weight: 4 as const, description: 'Trigonometric ratios, identities, equations, inverse trig, heights and distances, and applications of trigonometry in geometry and physics contexts.' },
    { id: 'nep-math-003', name: 'Calculus — Differentiation', weight: 5 as const, description: 'Limits, continuity, derivatives of algebraic and transcendental functions, chain rule, implicit differentiation, applications (tangents, normals, maxima/minima, rate problems).' },
    { id: 'nep-math-004', name: 'Calculus — Integration', weight: 5 as const, description: 'Indefinite and definite integrals, integration by parts, by substitution, partial fractions, area under curves, and differential equations (first order, separable).' },
    { id: 'nep-math-005', name: 'Coordinate Geometry', weight: 4 as const, description: 'Cartesian coordinates, straight lines, circles, ellipses, parabolas, hyperbolas, and conic sections — frequently combined with calculus in IOE entrance problems.' },
    { id: 'nep-math-006', name: 'Vectors and 3D Geometry', weight: 4 as const, description: 'Vector operations, scalar and cross products, 3D coordinate geometry, lines and planes in space, and direction cosines/ratios.' },
    { id: 'nep-math-007', name: 'Probability and Statistics', weight: 3 as const, description: 'Permutations and combinations, probability of events, Bayes\' theorem, binomial distribution, mean, median, mode, and standard deviation.' },
    { id: 'nep-math-008', name: 'Dynamics and Statics', weight: 4 as const, description: 'Newton\'s laws, friction, projectile motion, work-energy theorem, conservation of momentum, equilibrium conditions, and center of mass — frequently tested in IOE entrance physics but overlaps with mathematics.' }
  ]
};

export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'nep-phy-001', name: 'Mechanics — Kinematics and Dynamics', weight: 5 as const, description: 'Motion in one and two dimensions, Newton\'s laws, friction, circular motion, conservation of momentum, and collisions — highest-weight IOE entrance physics topic with many numerical problems.' },
    { id: 'nep-phy-002', name: 'Work, Energy, and Power', weight: 4 as const, description: 'Work done by constant and variable forces, kinetic and potential energy, conservation of energy, power, and applications to simple machines.' },
    { id: 'nep-phy-003', name: 'Gravitation and Oscillations', weight: 4 as const, description: 'Universal gravitation, orbital motion, Kepler\'s laws, simple harmonic motion, damped and forced oscillations, and resonance phenomena.' },
    { id: 'nep-phy-004', name: 'Heat and Thermodynamics', weight: 4 as const, description: 'Heat transfer, calorimetry, specific heat, latent heat, kinetic theory of gases, and first and second laws of thermodynamics.' },
    { id: 'nep-phy-005', name: 'Waves and Sound', weight: 4 as const, description: 'Wave properties, equation of wave motion, superposition, standing waves, sound waves, Doppler effect, and musical acoustics.' },
    { id: 'nep-phy-006', name: 'Optics', weight: 4 as const, description: 'Reflection, refraction, Snell\'s law, lenses, mirrors, optical instruments, interference, diffraction, polarization, and wave optics.' },
    { id: 'nep-phy-007', name: 'Electricity and Magnetism', weight: 5 as const, description: 'Electrostatics, Coulomb\'s law, electric fields, capacitors, DC circuits, Kirchhoff\'s laws, magnetic fields, electromagnetic induction, and AC circuits — heaviest-weighted IOE physics topic.' },
    { id: 'nep-phy-008', name: 'Modern Physics and Electronics', weight: 4 as const, description: 'Photoelectric effect, Bohr model, atomic energy levels, radioactivity, semiconductor devices (diodes, transistors), logic gates, and digital electronics.' }
  ]
};

export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'nep-chem-001', name: 'Atomic Structure and Periodic Table', weight: 3 as const, description: 'Atomic models, quantum numbers, electron configuration, periodic trends, and the relationship between element properties and electronic structure.' },
    { id: 'nep-chem-002', name: 'Chemical Bonding and Molecular Structure', weight: 4 as const, description: 'Ionic, covalent, and metallic bonding, VSEPR theory, hybridization, molecular orbital theory, and intermolecular forces.' },
    { id: 'nep-chem-003', name: 'Chemical Reactions and Stoichiometry', weight: 5 as const, description: 'Balancing reactions, oxidation-reduction, limiting reagent, mole concept, equivalent weight, and quantitative analysis in chemical calculations — highest-weight IOE chemistry topic.' },
    { id: 'nep-chem-004', name: 'Organic Chemistry', weight: 5 as const, description: 'Hydrocarbons, functional groups, reaction mechanisms (substitution, addition, elimination), polymerization, biomolecules, and stereochemistry — frequently tested in IOE entrance chemistry.' },
    { id: 'nep-chem-005', name: 'Chemical Equilibrium and Thermodynamics', weight: 4 as const, description: 'Chemical equilibrium, Le Chatelier\'s principle, equilibrium constants, enthalpy, entropy, Gibbs free energy, and spontaneity of reactions.' },
    { id: 'nep-chem-006', name: 'Electrochemistry and Redox', weight: 3 as const, description: 'Galvanic and electrolytic cells, standard electrode potentials, Faraday\'s laws, corrosion, and practical applications of redox reactions.' },
    { id: 'nep-chem-007', name: 'States of Matter and Solutions', weight: 3 as const, description: 'Gases (ideal gas law, kinetic theory), liquids (properties, surface tension, viscosity), solids (crystal types), and solution chemistry (concentration, colligative properties).' }
  ]
};
