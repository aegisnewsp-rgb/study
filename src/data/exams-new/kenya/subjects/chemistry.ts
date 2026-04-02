const chemistry: Subject = {
  id: 'chemistry', name: '('chemistry', 'Chemistry')', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Atomic Structure & Periodic Table', weight: 3 as const, description: 'Covers electron configuration, orbital diagrams, periodic trends, and the relationship between atomic structure and chemical behavior.' },
    { id: 'chemis-002', name: 'Chemical Bonding', weight: 3 as const, description: 'Includes ionic, covalent, metallic bonding, VSEPR theory, hybridization, and intermolecular forces — heavily tested in KCSE.' },
    { id: 'chemis-003', name: 'Chemical Reactions & Stoichiometry', weight: 3 as const, description: 'Covers balancing equations, mole concept, limiting reagents, yield calculations, and empirical formulas.' },
    { id: 'chemis-004', name: 'Acids, Bases & Salts', weight: 3 as const, description: 'Includes pH calculations, buffer solutions, indicators, neutralization reactions, and salt hydrolysis — common in KU placement tests.' },
    { id: 'chemis-005', name: 'Electrochemistry', weight: 3 as const, description: 'Covers galvanic cells, electrolytic cells, standard electrode potentials, corrosion, and electroplating.' },
    { id: 'chemis-006', name: 'Organic Chemistry', weight: 3 as const, description: 'Includes homologous series, isomerism, reactions of alkanes, alkenes, alcohols, carboxylic acids, and basic IUPAC nomenclature.' },
    { id: 'chemis-007', name: 'Chemical Equilibrium', weight: 3 as const, description: 'Covers Le Chatelier\'s principle, equilibrium constants (Kp, Kc), and factors affecting equilibrium position.' },
    { id: 'chemis-008', name: 'Thermochemistry', weight: 3 as const, description: 'Includes enthalpy changes, Hess\'s law, bond energies, calorimetry, and endothermic vs exothermic reactions.' },
    { id: 'chemis-009', name: 'Reaction Kinetics', weight: 3 as const, description: 'Covers rate laws, order of reactions, activation energy, catalysts, and rate-determining steps.' },
    { id: 'chemis-010', name: 'Periodicity & Group Chemistry', weight: 3 as const, description: 'Includes trends across periods and groups, properties of halogens, alkali metals, and transition metals.' },
    { id: 'chemis-011', name: 'Analytical Chemistry', weight: 3 as const, description: 'Covers qualitative analysis, titration techniques, precipitation reactions, and instrumental methods.' },
    { id: 'chemis-012', name: 'Environmental & Industrial Chemistry', weight: 3 as const, description: 'Includes water hardness, fertilizers, greenhouse effect, pollution control, and extraction of metals.' },
  ]
};

export { chemistry };
