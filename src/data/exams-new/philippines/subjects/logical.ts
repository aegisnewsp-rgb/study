import type { Subject } from '../types';

const logical: Subject = {
  id: 'logical', name: 'Logical', color: '#6b7280',
  topics: [
    { id: 'logica-001', name: 'Topic 1', weight: 3 as const, description: 'Logical Reasoning Fundamentals — understanding basic principles of deductive and inductive reasoning tested in NMAT.' },
    { id: 'logica-002', name: 'Topic 2', weight: 3 as const, description: 'Syllogisms — evaluating conclusions drawn from two given premises, a core NMAT logical thinking item type.' },
    { id: 'logica-003', name: 'Topic 3', weight: 3 as const, description: 'Arguments Analysis — identifying strength, weakness, and assumptions in given arguments or statements.' },
    { id: 'logica-004', name: 'Topic 4', weight: 3 as const, description: 'Logical Sequence — arranging statements or events in a coherent chronological or procedural order.' },
    { id: 'logica-005', name: 'Topic 5', weight: 3 as const, description: 'Pattern Recognition — identifying numerical, symbolic, or visual patterns to predict the next item in a series.' },
    { id: 'logica-006', name: 'Topic 6', weight: 3 as const, description: 'Blood Relationships — solving problems involving family trees, kinship terms, and relational logic.' },
    { id: 'logica-007', name: 'Topic 7', weight: 3 as const, description: 'Coding and Decoding — deciphering letter or number codes using logical rules and patterns.' },
    { id: 'logica-008', name: 'Topic 8', weight: 3 as const, description: 'Statement and Conclusion — determining which conclusions logically follow from given statements.' },
    { id: 'logica-009', name: 'Topic 9', weight: 3 as const, description: 'Assertion and Reason — evaluating whether an assertion is true and whether its reason correctly explains it.' },
    { id: 'logica-010', name: 'Topic 10', weight: 3 as const, description: 'Practice with NMAT Logical Items — timed drills using past NMAT-style logical reasoning questions.' }
  ]
};

export { logical };
