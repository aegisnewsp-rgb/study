const physics: Subject = {
  id: 'physics', name: '('physics', 'Physics')', color: '#3b82f6',
  topics: [
    { id: 'physic-001', name: 'Mechanics', weight: 3 as const, description: 'Covers kinematics, Newton\'s laws of motion, momentum, work, energy, and power — fundamental for solving KU physics exam problems.' },
    { id: 'physic-002', name: 'Waves & Optics', weight: 3 as const, description: 'Includes wave properties, sound, light reflection, refraction, diffraction, and interference — frequent in KCSE and KU placement exams.' },
    { id: 'physic-003', name: 'Heat & Thermodynamics', weight: 3 as const, description: 'Covers heat transfer, specific heat capacity, latent heat, gas laws, and the first and second laws of thermodynamics.' },
    { id: 'physic-004', name: 'Electricity & Magnetism', weight: 3 as const, description: 'Includes electric circuits, Coulomb\'s law, capacitance, electromagnetic induction, and AC/DC current analysis.' },
    { id: 'physic-005', name: 'Modern Physics', weight: 3 as const, description: 'Covers photoelectric effect, atomic models, nuclear physics, radioactivity, and half-life calculations — high emphasis in KU exams.' },
    { id: 'physic-006', name: 'Fluid Statics & Dynamics', weight: 3 as const, description: 'Includes Archimedes\' principle, Bernoulli\'s equation, viscosity, and pressure calculations in fluids.' },
    { id: 'physic-007', name: 'Gravitation & Satellite Motion', weight: 3 as const, description: 'Covers Newton\'s law of gravitation, orbital velocity, escape velocity, and Kepler\'s laws of planetary motion.' },
    { id: 'physic-008', name: 'Oscillations & Simple Harmonic Motion', weight: 3 as const, description: 'Includes spring-mass systems, pendulums, damping, resonance, and energy in SHM — key for wave-based questions.' },
    { id: 'physic-009', name: 'Dimensional Analysis & Units', weight: 3 as const, description: 'Covers SI units, dimensional analysis, significant figures, and error estimation — essential foundation skills.' },
    { id: 'physic-010', name: 'Circular Motion', weight: 3 as const, description: 'Includes centripetal force, angular momentum, banking of roads, and vertical circular motion problems.' },
    { id: 'physic-011', name: 'Electrostatics', weight: 3 as const, description: 'Covers electric fields, potential, Gauss\'s law, capacitors, and energy stored in electric fields.' },
    { id: 'physic-012', name: 'Practical Physics & Data Analysis', weight: 3 as const, description: 'Focuses on laboratory techniques, graph plotting, uncertainty calculation, and interpreting experimental data.' },
  ]
};

export { physics };
