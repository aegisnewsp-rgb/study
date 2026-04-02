import type { Subject } from '../types';

const chemistry: Subject = {
  id: 'chemistry', name: '("chemistry", "Chemistry")', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Topic 1', weight: 3 as const, description: 'Atomic structure and the periodic law — electron configurations, orbital diagrams, and periodic trends in ЕГЭ Chemistry.' },
    { id: 'chemis-002', name: 'Topic 2', weight: 3 as const, description: 'Chemical bonding — ionic, covalent, and metallic bonds, electronegativity, and molecular geometry on the ЕГЭ exam.' },
    { id: 'chemis-003', name: 'Topic 3', weight: 3 as const, description: 'Chemical reactions — types of reactions, reaction equations, oxidation-reduction, and activity series in ЕГЭ problems.' },
    { id: 'chemis-004', name: 'Topic 4', weight: 3 as const, description: 'Chemical equilibrium — Le Chatelier\'s principle, equilibrium constants, and factors affecting reaction rates.' },
    { id: 'chemis-005', name: 'Topic 5', weight: 3 as const, description: 'Solutions and electrolytic dissociation — concentration, pH, hydrolysis, and electrolyte strength on the ЕГЭ.' },
    { id: 'chemis-006', name: 'Topic 6', weight: 3 as const, description: 'Redox reactions — oxidation numbers, balancing redox equations, and electrochemical cells in ЕГЭ Chemistry.' },
    { id: 'chemis-007', name: 'Topic 7', weight: 3 as const, description: 'Inorganic chemistry of main-group elements — properties and reactions of s- and p-block elements on the ЕГЭ.' },
    { id: 'chemis-008', name: 'Topic 8', weight: 3 as const, description: 'Transition metals and their compounds — d-block elements, complex formation, and qualitative analysis in ЕГЭ.' },
    { id: 'chemis-009', name: 'Topic 9', weight: 3 as const, description: 'Organic chemistry fundamentals — homologous series, functional groups, isomerism, and IUPAC nomenclature.' },
    { id: 'chemis-010', name: 'Topic 10', weight: 3 as const, description: 'Hydrocarbons — alkanes, alkenes, alkynes, aromatic compounds, and their reactions on the ЕГЭ Chemistry exam.' },
    { id: 'chemis-011', name: 'Topic 11', weight: 3 as const, description: 'Oxygen-containing organic compounds — alcohols, aldehydes, ketones, carboxylic acids, and esters in ЕГЭ.' },
    { id: 'chemis-012', name: 'Topic 12', weight: 3 as const, description: 'Nitrogen-containing organic compounds — amines, amides, amino acids, proteins, and polymers on the ЕГЭ exam.' },
    { id: 'chemis-013', name: 'Topic 13', weight: 3 as const, description: 'Basic organic reactions — substitution, addition, elimination, and polymerisation reactions in ЕГЭ problems.' },
    { id: 'chemis-014', name: 'Topic 14', weight: 3 as const, description: 'Stoichiometry and chemical calculations — molar mass, empirical formulas, yield calculations, and solution stoichiometry.' },
    { id: 'chemis-015', name: 'Topic 15', weight: 3 as const, description: 'Laboratory work and practical chemistry — identifying substances, common apparatus, safety rules, and qualitative analysis on the ЕГЭ.' },
  ]
};

export { chemistry };
