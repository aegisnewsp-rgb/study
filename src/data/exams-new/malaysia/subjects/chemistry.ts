import type { Subject } from '../types';

const chemistry: Subject = {
  id: 'chemistry', name: 'Chemistry', color: '#10b981',
  topics: [
    { id: 'chemis-001', name: 'Atomic Structure & The Periodic Table', weight: 3 as const, description: 'Understand electron configurations, orbital shapes, and periodic trends in properties across groups and periods.' },
    { id: 'chemis-002', name: 'Chemical Bonding & Structures', weight: 3 as const, description: 'Explain ionic, covalent, and metallic bonding, and relate bond type to physical properties of substances.' },
    { id: 'chemis-003', name: 'Mole Concept & Stoichiometry', weight: 3 as const, description: 'Calculate using the mole concept, balance chemical equations, and determine empirical and molecular formulas.' },
    { id: 'chemis-004', name: 'Chemical Reactions & Energetics', weight: 3 as const, description: 'Understand exothermic and endothermic reactions, calculate enthalpy changes, and apply Hess\'s Law.' },
    { id: 'chemis-005', name: 'Reaction Rates & Chemical Equilibrium', weight: 3 as const, description: 'Analyse factors affecting reaction rates using collision theory and apply Le Chatelier\'s principle to equilibrium systems.' },
    { id: 'chemis-006', name: 'Acids, Bases & pH Calculations', weight: 3 as const, description: 'Define acids and bases using Brønsted-Lowry and Lewis theories, calculate pH, and understand buffer solutions.' },
    { id: 'chemis-007', name: 'Oxidation & Reduction (Redox)', weight: 3 as const, description: 'Identify oxidation and reduction processes, balance redox equations, and understand electrochemical cells.' },
    { id: 'chemis-008', name: 'Electrochemistry & Galvanic Cells', weight: 3 as const, description: 'Understand standard electrode potentials, calculate cell EMF, and explain the workings of galvanic and electrolytic cells.' },
    { id: 'chemis-009', name: 'Organic Chemistry — Hydrocarbons', weight: 3 as const, description: 'Name and classify alkanes, alkenes, and alkynes; understand their properties, reactions, and structural isomerism.' },
    { id: 'chemis-010', name: 'Organic Chemistry — Functional Groups', weight: 3 as const, description: 'Identify and describe reactions of alcohols, carboxylic acids, esters, aldehydes, ketones, and amines.' },
    { id: 'chemis-011', name: 'Polymers & Synthetic Polymers', weight: 3 as const, description: 'Understand addition and condensation polymerisation, properties of common polymers, and their environmental impact.' },
    { id: 'chemis-012', name: 'Chemical Analysis & Instrumentation', weight: 3 as const, description: 'Apply spectroscopic and chromatographic methods including IR, NMR, and mass spectrometry for compound identification.' },
    { id: 'chemis-013', name: 'Thermodynamics', weight: 3 as const, description: 'Understand internal energy, entropy, Gibbs free energy, and predict the spontaneity of chemical reactions.' },
    { id: 'chemis-014', name: 'Transition Elements & Coordination Chemistry', weight: 3 as const, description: 'Describe properties of transition metals, complex ion formation, and colour changes in coordination compounds.' },
    { id: 'chemis-015', name: 'Rate Equations & Reaction Mechanisms', weight: 3 as const, description: 'Derive and use rate equations, understand order of reaction, and explain reaction mechanisms using rate-determining steps.' },
  ]
};

export { chemistry };
