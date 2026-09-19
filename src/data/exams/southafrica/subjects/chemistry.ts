export const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'IUPAC Nomenclature of Organic Compounds', weight: 4 as const, description: 'Naming alkanes, alkenes, alkynes, alcohols, aldehydes, ketones, carboxylic acids, esters, amines, and benzene derivatives using IUPAC rules.' },
    { id: 'chemis-002', name: 'Stereochemistry and Isomerism', weight: 3 as const, description: 'Cis-trans, E/Z, optical isomerism, chirality, R/S configuration, and how stereochemistry affects reaction outcomes in organic molecules.' },
    { id: 'chemis-003', name: 'Reaction Mechanisms - Nucleophilic Substitution and Elimination', weight: 5 as const, description: 'Curly arrow mechanisms, transition states, carbocation intermediates, and predicting E1, E2, SN1, and SN2 products.' },
    { id: 'chemis-004', name: 'Electrophilic Addition Reactions to Alkenes', weight: 4 as const, description: 'Markovnikov addition, hydrohalogenation, halogenation, hydration, and mechanisms for alkene reactions with HBr, HCl, and Br2.' },
    { id: 'chemis-005', name: 'Carbonyl Chemistry - Nucleophilic Addition Reactions', weight: 5 as const, description: 'Nucleophilic addition to C=O, hemiacetal and acetal formation, mechanism, and distinguishing aldehyde from ketone reactivity.' },
    { id: 'chemis-006', name: 'Nucleophilic Substitution Reactions - SN1 and SN2', weight: 5 as const, description: 'Rate laws, stereochemistry, solvent effects, and competition between SN1, SN2, E1, and E2 in alkyl halide reactions.' },
    { id: 'chemis-007', name: 'Electrophilic Aromatic Substitution (EAS) and Benzene Chemistry', weight: 3 as const, description: 'Benzene ring activation and deactivation, directing effects of substituents, and halogenation, nitration, and sulfonation of aromatic rings.' },
    { id: 'chemis-008', name: 'Aldehydes, Ketones, and Carbonyl Group Chemistry', weight: 3 as const, description: 'Naming, preparation methods, oxidation-reduction tests (Tollens, Fehling), and distinguishing aldehydes from ketones.' },
    { id: 'chemis-009', name: 'Carboxylic Acids, Acid Derivatives, and Claisen Condensation', weight: 4 as const, description: 'Acidity, esterification, hydrolysis of esters, acid chloride conversion, and Claisen condensation products and mechanisms.' },
    { id: 'chemis-010', name: 'Amines, Diazonium Salts, and Heterocyclic Chemistry', weight: 3 as const, description: 'Basicity of amines, diazotization, diazonium salt reactions, and naming heterocycles like pyridine, pyrrole, and furan.' },
    { id: 'chemis-011', name: 'Reaction Rates and Chemical Equilibrium', weight: 5 as const, description: 'Collision theory, Maxwell-Boltzmann curves, Le Chatelier\'s principle, and equilibrium constants Kc and Kp for reversible reactions.' },
    { id: 'chemis-012', name: 'Acids, Bases and pH - Buffers and Titrations', weight: 5 as const, description: 'Bronsted-Lowry and Arrhenius theories, Ka, Kb, Kw, pH calculations, buffer preparation, and titration curves.' },
    { id: 'chemis-013', name: 'Electrochemistry - Galvanic and Electrolytic Cells', weight: 4 as const, description: 'Galvanic cells, electrolytic cells, standard electrode potentials, balancing redox equations, and applications in industry.' },
    { id: 'chemis-014', name: 'Chemical Industry - Fertilisers and Industrial Processes', weight: 2 as const, description: 'Fertiliser production (N, P, K), Haber-Bosch process, contact process for sulfuric acid, and green chemistry principles.' },
    { id: 'chemis-015', name: 'Quantitative Aspects of Chemical Change', weight: 4 as const, description: 'Mole calculations, empirical and molecular formulas, limiting reagents, concentration units (mol/L), and stoichiometric yield.' }
  ]
};