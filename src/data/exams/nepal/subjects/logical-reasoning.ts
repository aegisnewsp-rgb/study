import type { Subject } from '../types';

export const logical_reasoning_cmat: Subject = {
  id: 'logical-reasoning-cmat', name: 'Logical Reasoning', color: '#0ea5e9',
  topics: [
    { id: 'cmat-lr-001', name: 'Coding-Decoding and Number-Alpha Series', weight: 5 as const, description: 'Letter-shift coding, number coding, symbol coding, analogy-based coding, and number-alphabet series completion that form the bulk of CMAT Logical Reasoning questions.' },
    { id: 'cmat-lr-002', name: 'Syllogisms and Venn-Based Logic', weight: 5 as const, description: 'Categorical syllogisms, all-some-none conclusions, possibility cases, reverse syllogisms, and Venn-diagram-based reasoning treated as a high-yield CMAT topic.' },
    { id: 'cmat-lr-003', name: 'Blood Relations and Direction Sense', weight: 4 as const, description: 'Family-tree decoding with multiple generations, coded relations, and direction-distance reasoning including shadows, rotations, and shortest-path problems in CMAT Logical Reasoning.' },
    { id: 'cmat-lr-004', name: 'Analogy and Classification', weight: 4 as const, description: 'Word analogies, number analogies, letter analogies, classification of odd-one-out sets, and pattern-completion items standard in MBA-entrance logical reasoning papers.' },
    { id: 'cmat-lr-005', name: 'Seating, Puzzles, and Arrangement', weight: 4 as const, description: 'Linear and circular seating, floor puzzles, scheduling with constraints, and ranking-order puzzles that test structured deduction in the CMAT Logical Reasoning section.' },
    { id: 'cmat-lr-006', name: 'Series Completion and Pattern Recognition', weight: 3 as const, description: 'Number series, letter series, alpha-numeric series, mixed series, and recurrence-pattern detection that recur every year in the CMAT reasoning paper.' },
    { id: 'cmat-lr-007', name: 'Statements - Assumptions, Conclusions, and Arguments', weight: 3 as const, description: 'Implicit assumptions, logical conclusions, strength of arguments, course of action, and assertion-reason sets that make up the verbal logic half of CMAT Logical Reasoning.' },
    { id: 'cmat-lr-008', name: 'Input-Output and Machine-Input', weight: 3 as const, description: 'Step-wise rearrangement problems where elements shift by defined rules across steps, then answer questions on a particular step in CMAT reasoning sets.' },
    { id: 'cmat-lr-009', name: 'Critical Reasoning and Paragraph Arguments', weight: 3 as const, description: 'Short passages with strengthen-weaken, assumption-finding, inference, and tone-of-author questions mirroring CAT-level critical reasoning items in CMAT Logical Reasoning.' },
    { id: 'cmat-lr-010', name: 'Data Sufficiency in Reasoning', weight: 2 as const, description: 'Two-statement sufficiency problems where the candidate judges whether statements 1 and 2 alone or together answer a logical-reasoning question, a recurring CMAT higher-difficulty item.' },
    { id: 'cmat-lr-011', name: 'Decision Making and Ethical Reasoning', weight: 2 as const, description: 'Course-of-action selection, prioritisation dilemmas, group-decision scenarios, and ethical-judgement cases typical of the decision-making subset inside CMAT Logical Reasoning.' },
    { id: 'cmat-lr-012', name: 'Mathematical Operations and Cubes-Dice', weight: 1 as const, description: 'Symbol substitution sums, dice-rotation reasoning, and cube-folding problems that appear occasionally as the low-weight tail of CMAT Logical Reasoning MCQs.' }
  ]
};