import type { Subject } from '../types';

const chemistry: Subject = {
  id: 'chemistry', name: '('chemistry', 'Chemistry')', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Topic 1', weight: 3 as const, description: 'Atomic structure covering electron configuration, quantum numbers, and atomic models for IOE Nepal.' },
    { id: 'chemis-002', name: 'Topic 2', weight: 3 as const, description: 'Periodic table trends including ionization energy, electronegativity, and chemical reactivity patterns.' },
    { id: 'chemis-003', name: 'Topic 3', weight: 3 as const, description: 'Chemical bonding including ionic, covalent, metallic bonds, VSEPR theory, and hybridization.' },
    { id: 'chemis-004', name: 'Topic 4', weight: 3 as const, description: 'States of matter covering gas laws, liquid state properties, and solid-state chemistry.' },
    { id: 'chemis-005', name: 'Topic 5', weight: 3 as const, description: 'Thermochemistry including enthalpy, Hess\'s law, calorimetry, and energy changes in reactions.' },
    { id: 'chemis-006', name: 'Topic 6', weight: 3 as const, description: 'Chemical kinetics covering reaction rates, rate laws, activation energy, and catalysis.' },
    { id: 'chemis-007', name: 'Topic 7', weight: 3 as const, description: 'Chemical equilibrium including Le Chatelier\'s principle, equilibrium constant, and ionic equilibrium.' },
    { id: 'chemis-008', name: 'Topic 8', weight: 3 as const, description: 'Electrochemistry covering redox reactions, galvanic cells, electrolysis, and Faraday\'s laws.' },
    { id: 'chemis-009', name: 'Topic 9', weight: 3 as const, description: 'Organic chemistry including hydrocarbons, functional groups, stereochemistry, and reaction mechanisms.' },
    { id: 'chemis-010', name: 'Topic 10', weight: 3 as const, description: 'Inorganic chemistry covering main group elements, transition metals, and coordination compounds.' },
    { id: 'chemis-011', name: 'Topic 11', weight: 3 as const, description: 'Analytical chemistry including qualitative and quantitative analysis techniques and titration methods.' },
    { id: 'chemis-012', name: 'Topic 12', weight: 3 as const, description: 'Biochemistry covering carbohydrates, proteins, enzymes, vitamins, and metabolic processes.' },
    { id: 'chemis-013', name: 'Topic 13', weight: 3 as const, description: 'Environmental chemistry including water pollution, greenhouse effect, and green chemistry principles.' },
    { id: 'chemis-014', name: 'Topic 14', weight: 3 as const, description: 'Industrial chemistry covering fertilizers, polymers, plastics, and chemical manufacturing processes.' },
    { id: 'chemis-015', name: 'Topic 15', weight: 3 as const, description: 'Practical chemistry including laboratory techniques, safety procedures, and data recording methods.' },
  ]
};

export { chemistry };
