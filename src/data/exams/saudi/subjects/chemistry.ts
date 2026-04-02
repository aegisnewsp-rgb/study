export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'sa-chem-001', name: 'Atomic Structure and Chemical Bonding', weight: 4 as const, description: 'Atomic models, electron configuration, periodic table, ionic and covalent bonding, VSEPR theory, and molecular geometry — foundational chemistry topics.' },
    { id: 'sa-chem-002', name: 'Chemical Reactions and Stoichiometry', weight: 5 as const, description: 'Balancing equations, oxidation-reduction, limiting reagent, mole concept, molarity, and quantitative analysis — highest-weight chemistry topic for Saudi achievement tests.' },
    { id: 'sa-chem-003', name: 'Organic Chemistry', weight: 5 as const, description: 'Hydrocarbons, functional groups (alcohols, aldehydes, ketones, carboxylic acids), reaction mechanisms, isomerism, polymers, and biomolecules — heavily tested in Saudi science admission.' },
    { id: 'sa-chem-004', name: 'Chemical Equilibrium and Thermodynamics', weight: 4 as const, description: 'Chemical equilibrium, Le Chatelier\'s principle, equilibrium constants, enthalpy, entropy, and Gibbs free energy — conceptual and numerical problems.' },
    { id: 'sa-chem-005', name: 'Electrochemistry and Solutions', weight: 3 as const, description: 'Redox reactions, electrochemical cells, Faraday\'s laws, pH and buffers, concentration calculations, and colligative properties.' }
  ]
};
