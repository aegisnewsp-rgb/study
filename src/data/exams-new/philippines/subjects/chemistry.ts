import type { Subject } from '../types';

const chemistry: Subject = {
  id: 'chemistry', name: '('chemistry', 'Chemistry')', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Topic 1', weight: 3 as const, description: 'Atomic Structure and Periodic Table — electron configuration, periodic trends, and understanding the arrangement of elements.' },
    { id: 'chemis-002', name: 'Topic 2', weight: 3 as const, description: 'Chemical Bonding — ionic, covalent, and metallic bonds; molecular geometry and intermolecular forces.' },
    { id: 'chemis-003', name: 'Topic 3', weight: 3 as const, description: 'Stoichiometry — mole concept, balancing equations, limiting reagents, and solution stoichiometry calculations.' },
    { id: 'chemis-004', name: 'Topic 4', weight: 3 as const, description: 'Chemical Reactions and Equilibrium — reaction types, rate of reaction, and Le Chatelier\'s principle.' },
    { id: 'chemis-005', name: 'Topic 5', weight: 3 as const, description: 'Acids, Bases, and Salts — pH calculations, buffer solutions, titration, and properties of aqueous solutions.' },
    { id: 'chemis-006', name: 'Topic 6', weight: 3 as const, description: 'Electrochemistry — oxidation-reduction reactions, galvanic cells, and electrolytic processes.' },
    { id: 'chemis-007', name: 'Topic 7', weight: 3 as const, description: 'Organic Chemistry — functional groups, nomenclature, reactions of alkanes, alkenes, alkynes, and aromatic compounds.' },
    { id: 'chemis-008', name: 'Topic 8', weight: 3 as const, description: 'Thermochemistry — enthalpy, Hess\'s law, calorimetry, and energy changes in chemical reactions.' },
    { id: 'chemis-009', name: 'Topic 9', weight: 3 as const, description: 'Solutions and Colloids — concentration expressions, colligative properties, and mixture separation techniques.' },
    { id: 'chemis-010', name: 'Topic 10', weight: 3 as const, description: 'Chemistry Board Exam Practice Questions — comprehensive drills covering all LEA/RX and pharmacy chemistry topics.' }
  ]
};

export { chemistry };
