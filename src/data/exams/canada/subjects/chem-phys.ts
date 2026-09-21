// Medical College Admission Test (MCAT) — Chemical and Physical Foundations
// of Biological Systems (Chem/Phys).
//
// Awarding body: Association of American Medical Colleges (AAMC).
// The MCAT is a computer-based standardized exam required for admission
// to most US and Canadian medical schools. The Chem/Phys section tests
// first-year chemistry and physics concepts in the context of biological
// systems. AAMC organises the content into ten foundational concepts
// grouped under four content categories, plus four scientific inquiry
// and reasoning skills (SIRS).
//
// Source: AAMC, What's on the MCAT Exam? (PDF Outline),
//   https://students-residents.aamc.org/prepare-mcat-exam/whats-mcat-exam-pdf-outline
// Source: AAMC, What's on the MCAT Exam? (publication),
//   https://students-residents.aamc.org/whats-mcat-exam/publication-chapters/whats-mcat-exam
// Source: AAMC, MCAT content outline download,
//   https://students-residents.aamc.org/media/9261/download
// Verify the live section length, scoring, and any in-year content
// changes on aamc.org before committing a revision plan to a student.

import type { Subject } from '../../types';

export const chemPhys: Subject = {
  id: 'chem-phys',
  name: 'Chemical and Physical Foundations of Biological Systems',
  color: '#0ea5e9',
  topics: [
    { id: 'mcatcp-001', name: 'Translational Motion, Forces and Work', weight: 4 as const, description: 'Newtonian mechanics in biological contexts: displacement, velocity, acceleration, force, work, energy, power, and the work-energy theorem applied to body systems and lab techniques. AAMC Foundational Concept 4.' },
    { id: 'mcatcp-002', name: 'Equilibrium, Torque and Circuits', weight: 3 as const, description: 'Static and dynamic equilibrium, torque and lever arms, fluid statics and dynamics (Pascal, Bernoulli), electric circuits (Ohm\'s law, Kirchhoff, RC circuits), and magnetic force and induction. AAMC Foundational Concept 4.' },
    { id: 'mcatcp-003', name: 'Sound, Light and Atomic Structure', weight: 3 as const, description: 'Wave properties, sound intensity and the decibel scale, electromagnetic spectrum, geometric optics (lenses, mirrors), photon emission and absorption, atomic structure, electron configurations, and the Bohr model. AAMC Foundational Concepts 4 and 5.' },
    { id: 'mcatcp-004', name: 'Periodic Trends and Bonding', weight: 4 as const, description: 'Periodic table trends, ionic and covalent bonding, Lewis structures, VSEPR, molecular geometry, polarity, and intermolecular forces relevant to biomolecules. AAMC Foundational Concept 5.' },
    { id: 'mcatcp-005', name: 'Phases, Gases and Solutions', weight: 4 as const, description: 'Phase changes, phase diagrams, the ideal gas law, Dalton\'s and Henry\'s laws, partial pressures, colligative properties, molarity, and osmolarity in biological fluids. AAMC Foundational Concept 5.' },
    { id: 'mcatcp-006', name: 'Kinetics and Thermodynamics', weight: 5 as const, description: 'Reaction rates, rate laws, activation energy, reaction order, catalysis, enzymes as biological catalysts, enthalpy, entropy, Gibbs free energy, and the direction of spontaneous reactions. AAMC Foundational Concept 5.' },
    { id: 'mcatcp-007', name: 'Acid-Base Chemistry and Electrochemistry', weight: 5 as const, description: 'Brønsted-Lowry acids and bases, pKa, buffers, titration curves, galvanic and electrolytic cells, standard reduction potentials, the Nernst equation, and electrochemical gradients across membranes. AAMC Foundational Concept 5.' },
    { id: 'mcatcp-008', name: 'Separations, Spectrophotometry and Laboratory Techniques', weight: 3 as const, description: 'Distillation, extraction, chromatography, electrophoresis, mass spectrometry, UV-Vis spectrophotometry, and the laboratory reasoning that integrates separation and detection methods. AAMC Foundational Concept 5 and SIRS Skill 3.' }
  ]
};
