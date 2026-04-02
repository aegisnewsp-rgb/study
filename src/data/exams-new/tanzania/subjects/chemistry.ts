import type { Subject } from '../types';

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Atomic Structure & Bonding', weight: 3 as const, description: 'Electron configuration, ionic, covalent and metallic bonding, shapes of molecules — foundational for all other chemistry topics.' },
    { id: 'chemis-002', name: 'The Periodic Table', weight: 3 as const, description: 'Periodic trends, group properties, and transition metals — ACSEE frequently asks comparative questions across periods and groups.' },
    { id: 'chemis-003', name: 'Chemical energetics', weight: 3 as const, description: 'Enthalpy changes, Hess\'s law, and bond energies — calculations are a reliable source of marks in Paper 2.' },
    { id: 'chemis-004', name: 'Chemical Kinetics', weight: 3 as const, description: 'Rates of reaction, rate equations, activation energy, and catalysis — graph-based questions appear in both theory and practical papers.' },
    { id: 'chemis-005', name: 'Equilibrium', weight: 3 as const, description: 'Le Chatelier\'s principle, Kc and Kp calculations, and the effect of conditions on yield — essential for industrial chemistry questions.' },
    { id: 'chemis-006', name: 'Electrochemistry', weight: 3 as const, description: 'Redox reactions, electrochemical cells, standard electrode potentials, and electrolysis — frequently tested in ACSEE Paper 2.' },
    { id: 'chemis-007', name: 'Acids, Bases & Salts', weight: 3 as const, description: 'pH calculations, buffer solutions, hydrolysis, and titrations — a high-weight topic with many application-based questions.' },
    { id: 'chemis-008', name: 'Organic Chemistry', weight: 3 as const, description: 'Functional groups, nomenclature, reaction mechanisms, and synthesis routes — students should practise drawing structures and writing equations.' },
    { id: 'chemis-009', name: 'Organic Analysis', weight: 3 as const, description: 'Tests for functional groups, chromatography, and spectrometry — directly assessed in the ACSEE practical paper.' },
    { id: 'chemis-010', name: 'Period 3 Elements', weight: 3 as const, description: 'Properties of sodium to argon, oxides, and chlorides — short structured questions in Paper 1 are common.' },
    { id: 'chemis-011', name: 'Nitrogen & Sulfur', weight: 3 as const, description: 'Industrial preparation of ammonia, sulfuric acid, and nitrogen oxides — linked to Tanzania\'s mining and agricultural industries.' },
    { id: 'chemis-012', name: 'Halogens & Noble Gases', weight: 3 as const, description: 'Properties, reactions, and uses of group 17 elements — straightforward marks in Paper 1 multiple-choice.' },
    { id: 'chemis-013', name: 'Isomerism', weight: 3 as const, description: 'Structural and stereoisomerism including optical activity — tricky but high-scoring if practised thoroughly.' },
    { id: 'chemis-014', name: 'Quantitative Analysis', weight: 3 as const, description: 'Molar calculations, titration techniques, and percentage purity — accuracy in calculations separates high-scoring candidates.' },
    { id: 'chemis-015', name: 'Environmental Chemistry', weight: 3 as const, description: 'Water pollution, atmospheric chemistry, and green chemistry — increasingly relevant to Tanzania\'s conservation goals.' },
  ]
};

export { chemistry };
