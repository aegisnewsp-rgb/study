import type { Subject } from '../types';

const chemistry: Subject = {
  id: 'chemistry', name: '('chemistry', 'Chemistry')', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Topic 1', weight: 3 as const, description: 'Atomic structure and the periodic table: electron configuration, periodic trends, and chemical bonding.' },
    { id: 'chemis-002', name: 'Topic 2', weight: 3 as const, description: 'Chemical reactions and stoichiometry: balancing equations, molar calculations, and reaction types.' },
    { id: 'chemis-003', name: 'Topic 3', weight: 3 as const, description: 'States of matter: gases, liquids, solids, and phase changes with kinetic molecular theory.' },
    { id: 'chemis-004', name: 'Topic 4', weight: 3 as const, description: 'Solutions and solubility: concentration calculations, colligative properties, and UAE water chemistry.' },
    { id: 'chemis-005', name: 'Topic 5', weight: 3 as const, description: 'Acids, bases, and pH: buffer systems, titrations, and environmental chemistry applications.' },
    { id: 'chemis-006', name: 'Topic 6', weight: 3 as const, description: 'Organic chemistry fundamentals: hydrocarbons, functional groups, and biochemical compounds.' },
    { id: 'chemis-007', name: 'Topic 7', weight: 3 as const, description: 'Thermochemistry: enthalpy, calorimetry, and energy changes in chemical reactions.' },
    { id: 'chemis-008', name: 'Topic 8', weight: 3 as const, description: 'Electrochemistry: redox reactions, galvanic cells, and industrial applications in UAE.' },
    { id: 'chemis-009', name: 'Topic 9', weight: 3 as const, description: 'Chemical kinetics: reaction rates, catalysts, and factors affecting reaction speed.' },
    { id: 'chemis-010', name: 'Topic 10', weight: 3 as const, description: 'Laboratory techniques and safety: equipment handling, measurements, and chemical safety protocols.' },
  ]
};

export { chemistry };