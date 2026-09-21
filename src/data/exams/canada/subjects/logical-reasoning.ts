// Law School Admission Test (LSAT) — Logical Reasoning.
//
// Awarding body: Law School Admission Council (LSAC).
// The LSAT is a computer-based standardised exam required for admission
// to most US and many Canadian law schools (including the law schools
// at the University of Toronto, Osgoode Hall at York University,
// McGill, University of British Columbia, University of Alberta,
// University of Calgary, and others). The LSAT includes two scored
// Logical Reasoning sections, one scored Reading Comprehension
// section, one unscored section (either Logical Reasoning or Reading
// Comprehension), and LSAT Argumentative Writing (administered
// separately, unscored). The Analytical Reasoning section was
// discontinued starting August 2024.
//
// Source: LSAC, Logical Reasoning,
//   https://www.lsac.org/lsat/taking-lsat/test-format/logical-reasoning
// Source: LSAC, Types of LSAT Questions,
//   https://www.lsac.org/lsat/prepare/types-lsat-questions
// Source: LSAC, Changes are coming to the LSAT in August 2024,
//   https://www.lsac.org/lsat/lsat-changes-coming-august-2024
// Verify the live section count, scoring scale, and any in-year
// changes on lsac.org before committing a revision plan to a student.

import type { Subject } from '../../types';

export const logicalReasoning: Subject = {
  id: 'logical-reasoning',
  name: 'Logical Reasoning',
  color: '#7c3aed',
  topics: [
    { id: 'lsatlr-001', name: 'Argument Structure and the Argument\'s Conclusion', weight: 5 as const, description: 'Identifying the conclusion of an argument, the premises that support it, and the overall structure (deductive, inductive, or analogical). The foundation for every other Logical Reasoning skill.' },
    { id: 'lsatlr-002', name: 'Assumptions and Implicit Premises', weight: 5 as const, description: 'Recognising unstated beliefs the argument depends on, including necessary and sufficient assumptions, and distinguishing them from explicit premises.' },
    { id: 'lsatlr-003', name: 'Strengthen and Weaken Items', weight: 5 as const, description: 'Selecting the answer that, if true, would most strengthen or most weaken the author\'s argument. The most-tested Logical Reasoning question type on the LSAT.' },
    { id: 'lsatlr-004', name: 'Flaw Identification and Reasoning Errors', weight: 5 as const, description: 'Identifying errors in the argument\'s reasoning: ad hominem, straw man, false dilemma, circular reasoning, hasty generalisation, slippery slope, post hoc, equivocation, and others.' },
    { id: 'lsatlr-005', name: 'Inference and Must Be True', weight: 4 as const, description: 'Drawing conclusions that follow necessarily from the passage. Items ask "which of the following must be true?" or "the argument logically leads to which conclusion?"' },
    { id: 'lsatlr-006', name: 'Method of Reasoning and Role of a Statement', weight: 4 as const, description: 'Describing how the author argues (method of reasoning) and identifying the function of a specific statement (e.g., counterexample, evidence, analogy, concession).' },
    { id: 'lsatlr-007', name: 'Parallel Reasoning and Analogous Arguments', weight: 4 as const, description: 'Recognising an argument that has the same logical structure as the one in the passage, or selecting an analogous scenario that mirrors the argument.' },
    { id: 'lsatlr-008', name: 'Conditional Reasoning and Logical Patterns', weight: 4 as const, description: 'Translating conditional statements ("if...then", "only if", "unless"), contrapositives, and syllogistic patterns. Common in formal logic and argument-evaluation items.' }
  ]
};
