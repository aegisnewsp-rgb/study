export const logical: Subject = {
  id: 'logical', name: 'Logical', color: '#6b7280',
  topics: [
    { id: 'logica-001', name: 'Number Series: Difference Tables', weight: 5 as const, description: 'Identifying arithmetic and higher-order rules via successive first and second differences in NMAT Inductive Reasoning number-series items.' },
    { id: 'logica-002', name: 'Number Series: Geometric and Alternating Patterns', weight: 4 as const, description: 'Constant-ratio geometric series and alternating rules by odd/even term position in number-completion items.' },
    { id: 'logica-003', name: 'Number Series: Digit, Prime, and Square Patterns', weight: 3 as const, description: 'Recognising digit-operation, prime, square, and cube sub-sequences hidden inside longer NMAT number series.' },
    { id: 'logica-004', name: 'Letter Series: Single-Step Shifts', weight: 4 as const, description: 'Constant forward or backward alphabetic shifts and simple position arithmetic in NMAT letter-series items.' },
    { id: 'logica-005', name: 'Letter Series: Multi-Step and Position Patterns', weight: 4 as const, description: 'Two-step skips, vowel or consonant alternations, and position-based indexing rules across the alphabet.' },
    { id: 'logica-006', name: 'Figural Series: Rotation, Reflection, and Repetition', weight: 5 as const, description: 'Detecting rotations, mirror reflections, and repeated motifs across frames in NMAT figural-series items.' },
    { id: 'logica-007', name: 'Figural Series: Attribute Changes', weight: 5 as const, description: 'Tracking changes in size, count, shape, shading, or color across successive figures in figural-series blocks.' },
    { id: 'logica-008', name: 'Figural Series: Positional and Counting Patterns', weight: 4 as const, description: 'Counting dots or strokes and applying positional arithmetic across the cells of a figural-series item.' },
    { id: 'logica-009', name: 'Figure Grouping: Category Sorting', weight: 4 as const, description: 'Sorting a set of figures into groups that share a defining attribute as tested in NMAT figure-grouping items.' },
    { id: 'logica-010', name: 'Figure Grouping: Odd-One-Out and Matrix Patterns', weight: 3 as const, description: 'Selecting the odd figure out and completing 2x2 or 3x3 pattern matrices under the NMAT timing constraint.' }
  ]
};
