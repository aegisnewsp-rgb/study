// TMUA — Paper 2: Mathematical Reasoning.
// Official source: UAT-UK, https://esat-tmua.ac.uk/about-the-tests/tmua-test/ ("Paper 2:
// Mathematical Reasoning ... Assesses your ability to deal with mathematical reasoning, and
// simple ideas from elementary logic ... 20 multiple-choice questions ... 75 minutes") and the
// Content Specification Section 2 — Arg1-Arg4 (logic of arguments), Prf1-Prf5 (mathematical
// proof), Err1-Err2 (identifying errors in purported proofs).
// https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/05/03165619/TMUA_Content_Specification.pdf
// Both retrieved independently by this worker on 2026-10-09.
// Topic split below is StudyRoadmap's own organisation. UAT-UK publishes no per-topic weightage.
import type { Subject } from '../../types';
export const tmuaMathematicalReasoning: Subject = {
  id: 'mathematical-reasoning', name: 'Paper 2 — Mathematical Reasoning', color: '#7c3aed',
  topics: [
    { id: 'mr-001', name: 'Arg1: Statements, Connectives and Truth Conditions', weight: 5, description: 'The official Arg1-Arg4 family: and, or, not, implication, converse, contrapositive, necessary and sufficient conditions, quantifiers and negation, and evaluating a compound statement from its parts.' },
    { id: 'mr-002', name: 'Arg2-Arg4: Implication, Converse and Contrapositive', weight: 5, description: 'The official logic families beyond the connectives: the difference between a statement and its converse, what a contrapositive preserves, and how a necessary condition differs from a sufficient one in an exam item.' },
    { id: 'mr-003', name: 'Prf1-Prf2: Direct Proof and Proof by Contradiction', weight: 5, description: 'The official Prf family: writing a direct proof, ordering proof steps, and proof by contradiction — including recognising when an argument that looks valid is not.' },
    { id: 'mr-004', name: 'Prf3-Prf5: Cases, Counterexamples and Extended Chains', weight: 4, description: 'The official Prf family continued: proof by cases, counterexample, deduction of implications, conjectures and conjecture refutation, and long chains of reasoning where one invalid step breaks everything.' },
    { id: 'mr-005', name: 'Err1-Err2: Finding the Error in a Proof', weight: 5, description: 'The official Err family: locating the first invalid step in a purported proof rather than the last one, and recognising classic invalid moves such as dividing by a possibly zero quantity or assuming the conclusion.' },
    { id: 'mr-006', name: 'Deductive Reasoning with Quantifiers', weight: 5, description: 'Reading and writing statements with all, some, no and exists, and using them to test whether a conclusion genuinely follows from a set of premises.' },
    { id: 'mr-007', name: 'Numerical and Algebraic Reasoning in Context', weight: 4, description: 'The applied reasoning Paper 2 also carries: modelling a described situation, checking whether a solution makes sense in the domain, and rejecting extraneous roots.' },
  ],
};
