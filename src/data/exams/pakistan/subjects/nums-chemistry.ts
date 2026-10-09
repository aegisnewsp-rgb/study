// NUMS MDCAT — Chemistry component.
// Source: NUMS "2026 NUMS Updated MDCAT Terms of Conditions" on numspak.edu.pk, as cited and
// quoted by Manus (https://numspak.edu.pk/upload/media/2026-NUMS-Updated-MDCAT-TOS-2026_1779075557.pdf).
// NOTE: numspak.edu.pk returns HTTP 403 to this worker, so these figures are reproduced from
// the Manus retrieval of the official document and were NOT independently fetched here.
// NUMS allocates 40 of the 150 Paper I MCQs to Chemistry (printed as 26.5%) and states that
// 70% of Biology, Chemistry and Physics questions are recall-level and 30% application-level.
// Topic split below is StudyRoadmap's own organisation; NUMS publishes no topic weightage.
import type { Subject } from '../../types';
export const numsChemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#b45309',
  topics: [
    { id: 'chem-001', name: 'Atomic Structure and Periodicity', weight: 5, description: 'Electron configuration, quantum numbers, the Aufbau and Hund principles, and reading trends across a period and down a group.' },
    { id: 'chem-002', name: 'Chemical Bonding and Molecular Structure', weight: 5, description: 'Ionic, covalent and metallic bonding, Lewis structures, VSEPR shapes, hybridisation, and intermolecular forces and what they predict about physical properties.' },
    { id: 'chem-003', name: 'Stoichiometry and Gas Laws', weight: 4, description: 'Balancing equations, mole and mass relationships, limiting reagents, concentration units, and the ideal gas equation applied at clinical temperatures and pressures.' },
    { id: 'chem-004', name: 'Acids, Bases, Buffers and pH', weight: 5, description: 'Brønsted-Lowry and Arrhenius definitions, conjugate pairs, buffer capacity and the Henderson-Hasselbalch relationship, and the pH changes that matter clinically.' },
    { id: 'chem-005', name: 'Redox and Electrochemistry', weight: 4, description: 'Oxidation-state bookkeeping, balancing redox equations by half-reaction, galvanic versus electrolytic cells, and Nernst behaviour.' },
    { id: 'chem-006', name: 'Organic Chemistry and Biochemistry', weight: 5, description: 'Functional groups, reaction types, isomerism, carbohydrates, lipids, amino acids and proteins, and the reactions the body actually runs on them.' },
  ],
};
