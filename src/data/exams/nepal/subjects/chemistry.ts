export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Atomic Structure and Chemical Bonding', weight: 5 as const, description: 'Atomic models, quantum numbers, hybridization, VSEPR, MOT, ionic/covalent/metallic bonding and molecular orbital diagrams - the most heavily weighted section in IOE chemistry.' },
    { id: 'chemis-002', name: 'Electrochemistry', weight: 5 as const, description: 'Redox balancing, electrode potentials, Nernst equation, electrolytic and galvanic cells, Faraday laws, and conductance calculations.' },
    { id: 'chemis-003', name: 'Chemical Kinetics', weight: 4 as const, description: 'Rate laws, order and molecularity, integrated rate equations, Arrhenius equation, collision theory, and catalysis for IOE numerical problems.' },
    { id: 'chemis-004', name: 'Chemical and Ionic Equilibrium', weight: 4 as const, description: 'Le Chatelier principle, equilibrium constants (Kc, Kp, Ka, Kb, Ksp), buffer solutions, hydrolysis, and solubility product calculations.' },
    { id: 'chemis-005', name: 'Solutions and Colligative Properties', weight: 4 as const, description: 'Concentration units (molarity, molality, normality), Raoult law, elevation of boiling point, depression of freezing point, osmotic pressure, and vant Hoff factor.' },
    { id: 'chemis-006', name: 'Chemical Thermodynamics', weight: 4 as const, description: 'Enthalpy, entropy, Gibbs free energy, first and second law, Hess law, bond energy, and spontaneity of processes with worked numericals.' },
    { id: 'chemis-007', name: 'Classification and Periodicity', weight: 3 as const, description: 'Periodic table trends - atomic radius, ionization energy, electron affinity, electronegativity, valency, and anomalous behaviour across periods.' },
    { id: 'chemis-008', name: 's-Block and p-Block Elements', weight: 3 as const, description: 'Alkali and alkaline earth metals, group trends; nitrogen, oxygen, sulphur, halogen, and noble gas families with key compounds and reactions.' },
    { id: 'chemis-009', name: 'd-Block and f-Block Elements', weight: 3 as const, description: 'Transition metal properties, variable oxidation states, coloured ions, catalytic behaviour; lanthanoids and actinoids including contraction effects.' },
    { id: 'chemis-010', name: 'Coordination Compounds', weight: 3 as const, description: 'Werner theory, IUPAC naming, isomerism (linkage, ionization, optical, geometric), valence bond and crystal field theories, and applications.' },
    { id: 'chemis-011', name: 'Hydrocarbons (Aliphatic and Aromatic)', weight: 3 as const, description: 'Alkanes, alkenes, alkynes - preparation, reactions, isomerism, Markovnikov addition; benzene structure, electrophilic aromatic substitution patterns.' },
    { id: 'chemis-012', name: 'Haloalkanes and Haloarenes', weight: 2 as const, description: 'Nomenclature, SN1 and SN2 mechanisms, elimination reactions, reactivity of vinyl and aryl halides, and polyhalogen compound uses.' },
    { id: 'chemis-013', name: 'Alcohols, Phenols and Ethers', weight: 2 as const, description: 'Preparation, properties, acidic strength comparison, Williamson synthesis, and distinguishing tests for phenols versus alcohols in IOE organic section.' },
    { id: 'chemis-014', name: 'Aldehydes, Ketones, Carboxylic Acids and Amines', weight: 2 as const, description: 'Carbonyl preparation and reactions (aldol, Cannizzaro), carboxylic acid derivatives, amines basicity, diazonium salts, and named reactions.' },
    { id: 'chemis-015', name: 'Biomolecules and Polymers', weight: 1 as const, description: 'Carbohydrates, amino acids, proteins, nucleic acids, vitamins, natural and synthetic polymers, and chemistry in everyday life - lowest-weight IOE topic.' }
  ]
};
