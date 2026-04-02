export const physics: Subject = {
  id: 'physics', name: 'Physics', color: '#3b82f6',
  topics: [
    { id: 'eth-phy-001', name: 'Mechanics — Kinematics and Dynamics', weight: 5 as const, description: 'Motion in one and two dimensions, Newton\'s laws, friction, circular motion, work-energy theorem, and momentum conservation. Core EUEE physics topic with frequent numerical problems.' },
    { id: 'eth-phy-002', name: 'Waves and Oscillations', weight: 4 as const, description: 'Simple harmonic motion, wave properties (amplitude, frequency, wavelength, speed), wave equations, superposition, standing waves, and sound waves.' },
    { id: 'eth-phy-003', name: 'Heat and Thermodynamics', weight: 4 as const, description: 'Heat transfer, specific heat capacity, latent heat, first and second laws of thermodynamics, heat engines, and entropy concepts.' },
    { id: 'eth-phy-004', name: 'Electricity and Magnetism', weight: 5 as const, description: 'Coulomb\'s law, electric fields and potential, capacitors, DC circuits, Kirchhoff\'s laws, magnetic fields, electromagnetic induction, and AC circuits. Highest-weight EUEE physics topic.' },
    { id: 'eth-phy-005', name: 'Optics', weight: 4 as const, description: 'Reflection and refraction, lenses and mirrors, optical instruments, wave optics (interference, diffraction), and the human eye as an optical system.' },
    { id: 'eth-phy-006', name: 'Modern Physics', weight: 4 as const, description: 'Photoelectric effect, Bohr model of the atom, energy levels, radioactivity (alpha, beta, gamma decay), half-life, nuclear fission and fusion, and fundamental particles.' },
    { id: 'eth-phy-007', name: 'Fluid Mechanics', weight: 3 as const, description: 'Pressure, Pascal\'s principle, Archimedes\' principle, Bernoulli\'s equation, viscosity, and surface tension — concept-based and application-oriented problems.' }
  ]
};

export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'eth-chem-001', name: 'Atomic Structure and Periodic Trends', weight: 3 as const, description: 'Atomic models, quantum numbers, electron configuration, and periodic trends in element properties across groups and periods.' },
    { id: 'eth-chem-002', name: 'Chemical Bonding and Molecular Geometry', weight: 4 as const, description: 'Ionic, covalent, and coordinate bonds, VSEPR theory, hybridization, resonance structures, and intermolecular forces (hydrogen bonding, Van der Waals).' },
    { id: 'eth-chem-003', name: 'Chemical Reactions and Stoichiometry', weight: 4 as const, description: 'Types of reactions (combination, decomposition, displacement, combustion), balancing equations, mole concept, molarity, and limiting reagent calculations.' },
    { id: 'eth-chem-004', name: 'Organic Chemistry and Biomolecules', weight: 5 as const, description: 'Hydrocarbons (alkanes, alkenes, alkynes), functional groups, polymerization, carbohydrates, proteins, lipids, and nucleic acids — highest-weight EUEE chemistry topic.' },
    { id: 'eth-chem-005', name: 'Chemical Equilibrium and Thermodynamics', weight: 4 as const, description: 'Dynamic equilibrium, equilibrium constant, Le Chatelier\'s principle, Gibbs free energy, spontaneity, and the relationship between thermodynamics and equilibrium.' },
    { id: 'eth-chem-006', name: 'Electrochemistry and Redox', weight: 3 as const, description: 'Oxidation and reduction, oxidation numbers, electrochemical cells, standard electrode potentials, batteries, and corrosion prevention.' }
  ]
};
