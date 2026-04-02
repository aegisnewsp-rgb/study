import type { Subject } from '../types';

const reasoning: Subject = {
  id: 'reasoning', name: '('reasoning', 'Reasoning')', color: '#6b7280',
  topics: [
    { id: 'reason-001', name: 'Blood Relations', weight: 3 as const, description: 'Family tree problems, coded relations, and generational mapping for banking and SSC exams.' },
    { id: 'reason-002', name: 'Coding-Decoding', weight: 3 as const, description: 'Letter-number patterns, analogy-based coding, and shift-based encryption — common in SBI and IBPS.' },
    { id: 'reason-003', name: 'Syllogism', weight: 3 as const, description: 'Logical deduction using Venn diagrams, both/all/only conclusions for IBPS PO and clerk exams.' },
    { id: 'reason-004', name: 'Direction Sense', weight: 3 as const, description: 'Distance and direction problems, clockwise/anticlockwise turns, and cardinal direction calculations.' },
    { id: 'reason-005', name: 'Seating Arrangement', weight: 3 as const, description: 'Linear and circular arrangements, puzzles with multiple parameters — frequently asked in SBI PO.' },
    { id: 'reason-006', name: 'Puzzles', weight: 3 as const, description: 'Classification, comparison, and sequential puzzles testing logical arrangement skills in competitive exams.' },
    { id: 'reason-007', name: 'Input-Output', weight: 3 as const, description: 'Machine input-output reasoning, letter-digit arrangements following specific rules.' },
    { id: 'reason-008', name: 'Inequalities', weight: 3 as const, description: 'Direct and coded inequality problems with >, <, = symbols for banking exam reasoning sections.' },
    { id: 'reason-009', name: 'Data Sufficiency', weight: 3 as const, description: 'Whether given statements provide sufficient data to answer questions — common in RBI and SBI exams.' },
    { id: 'reason-010', name: 'Logical Sequence', weight: 3 as const, description: 'Arranging words in meaningful order, dictionary arrangement, and logical chain formation.' },
  ]
};

export { reasoning };