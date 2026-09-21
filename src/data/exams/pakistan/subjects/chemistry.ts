// weight = our editorial study-priority guide on a 1-5 scale (5 = core topic that appears
// in nearly every paper, 2 = peripheral). It is a revision-order signal for students, NOT an
// official mark weighting from the examining body.
export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Atomic Structure', weight: 5 as const, description: 'Orbitals, electron configuration, quantum numbers, and periodic trends in atomic properties.' },
    { id: 'chemis-002', name: 'Chemical Bonding', weight: 5 as const, description: 'Ionic, covalent and metallic bonding, VSEPR shapes, hybridisation and intermolecular forces.' },
    { id: 'chemis-003', name: 'States of Matter', weight: 3 as const, description: 'Gas laws and kinetic molecular theory, properties of liquids, and crystal structures of solids.' },
    { id: 'chemis-004', name: 'Chemical Thermodynamics', weight: 4 as const, description: 'Enthalpy, Hess law, entropy and Gibbs free energy; predicting whether a reaction is spontaneous.' },
    { id: 'chemis-005', name: 'Chemical Equilibrium', weight: 4 as const, description: 'Equilibrium constants, Le Chatelier principle, and the factors that shift a reversible reaction.' },
    { id: 'chemis-006', name: 'Acids, Bases and Salts', weight: 5 as const, description: 'pH and pOH, buffers, titration curves, hydrolysis of salts and solubility product.' },
    { id: 'chemis-007', name: 'Electrochemistry', weight: 4 as const, description: 'Redox, electrochemical cells, electrode potentials, the Nernst equation and electrolysis.' },
    { id: 'chemis-008', name: 'Chemical Kinetics', weight: 3 as const, description: 'Rate equations, order of reaction, half-life, activation energy and collision theory.' },
    { id: 'chemis-009', name: 'Periodic Table', weight: 4 as const, description: 'Periodic trends in size, ionisation energy, electron affinity and electronegativity, plus group chemistry.' },
    { id: 'chemis-010', name: 'Organic Chemistry', weight: 5 as const, description: 'Nomenclature, isomerism and reaction mechanisms across alkanes, alkenes, aromatics and functional groups.' },
    { id: 'chemis-011', name: 'Biomolecules', weight: 3 as const, description: 'Carbohydrates, proteins, lipids, nucleic acids and enzymes, with their structures and functions.' },
    { id: 'chemis-012', name: 'Environmental Chemistry', weight: 2 as const, description: 'Air and water pollution, greenhouse gases, ozone depletion and green chemistry approaches.' },
    { id: 'chemis-013', name: 'Solutions and Colligative Properties', weight: 3 as const, description: 'Concentration units, Raoult law, and changes in boiling point, freezing point and osmotic pressure.' },
    { id: 'chemis-014', name: 'Oxidation and Reduction', weight: 3 as const, description: 'Oxidation states, oxidising and reducing agents, and balancing redox equations by the ion-electron method.' },
    { id: 'chemis-015', name: 'Chemistry in Everyday Life', weight: 2 as const, description: 'Chemistry of medicines, fertilisers, polymers, foods and detergents used in daily life.' }
  ]
};
