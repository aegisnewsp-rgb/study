import type { Subject } from '../types';

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Atomic Structure', weight: 4 as const, description: 'Electron configuration, quantum numbers, orbital shapes, Aufbau principle, and periodic properties — core topic for BUET and medical admission chemistry.' },
    { id: 'chemis-002', name: 'Chemical Bonding', weight: 5 as const, description: 'Ionic, covalent, metallic bonding, VSEPR theory, hybridization, dipole moment, and hydrogen bonding — high-weightage in BUET and DU admission.' },
    { id: 'chemis-003', name: 'Physical Chemistry: Gaseous State', weight: 3 as const, description: 'Gas laws, kinetic theory, ideal gas equation, Graham\'s diffusion law, and real gas behavior — important calculations for admission exams.' },
    { id: 'chemis-004', name: 'Chemical Energetics', weight: 4 as const, description: 'First and second laws of thermodynamics, enthalpy, Hess\'s law, bond energy, and entropy — key topic for BUET engineering thermodynamics.' },
    { id: 'chemis-005', name: 'Chemical Kinetics', weight: 4 as const, description: 'Rate laws, order of reactions, Arrhenius equation, activation energy, and reaction mechanisms — frequently tested in BUET and medical admission.' },
    { id: 'chemis-006', name: 'Chemical Equilibrium', weight: 4 as const, description: 'Law of mass action, Le Chatelier\'s principle, Kp and Kc, ionic equilibrium, and pH calculations — essential for both engineering and medical chemistry.' },
    { id: 'chemis-007', name: 'Electrochemistry', weight: 4 as const, description: 'Redox reactions, Nernst equation, electrochemical cells, electrode potentials, and electrolysis — important for BUET admission and practical applications.' },
    { id: 'chemis-008', name: 'Solutions & Colloids', weight: 3 as const, description: 'Colligative properties, Raoult\'s law, osmosis, normality, molarity, and colloidal systems — relevant for both BUET and medical admission chemistry.' },
    { id: 'chemis-009', name: 'Inorganic Chemistry: Periodic Table', weight: 3 as const, description: 'Periodic trends, s-block, p-block elements, noble gases, and periodic properties across groups — foundation for inorganic chemistry.' },
    { id: 'chemis-010', name: 'Heavy Metals & Transition Elements', weight: 3 as const, description: 'd-block and f-block elements, complex compounds, coordination chemistry, and properties of iron, copper, and zinc — important for DU and medical.' },
    { id: 'chemis-011', name: 'Organic Chemistry: Hydrocarbons', weight: 5 as const, description: 'Alkanes, alkenes, alkynes, aromatic compounds, reaction mechanisms, and stereochemistry — high-weightage topic for BUET and medical admission.' },
    { id: 'chemis-012', name: 'Functional Groups & Reactions', weight: 5 as const, description: 'Alcohols, ethers, aldehydes, ketones, carboxylic acids, amines, and their reactions — consistently tested in BUET organic chemistry section.' },
    { id: 'chemis-013', name: 'Polymers & Biomolecules', weight: 3 as const, description: 'Natural and synthetic polymers, carbohydrates, proteins, nucleic acids, and vitamins — relevant for medical admission biology-related chemistry.' },
    { id: 'chemis-014', name: 'Environmental Chemistry', weight: 2 as const, description: 'Green chemistry, air and water pollution, ozone depletion, and greenhouse effect — covered in both BUET and medical admission syllabi.' },
    { id: 'chemis-015', name: 'Practical Chemistry', weight: 3 as const, description: 'Volumetric analysis, salt analysis, organic compound identification, and lab techniques — important for both written and practical sections of admission tests.' },
  ]
};

export { chemistry };
