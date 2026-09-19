export const pharmacy: Subject = {
  id: 'pharmacy', name: 'Pharmacy', color: '#6b7280',
  topics: [
    { id: 'pharma-001', name: 'Basic Math: Fractions, Decimals, and Percentages', weight: 4 as const, description: 'Fraction-decimal-percent conversion, percentage change, and pharmacy arithmetic problems aligned with PCAT Q1A.' },
    { id: 'pharma-002', name: 'Basic Math: Unit Conversions and Logarithm Base 10', weight: 3 as const, description: 'Pharmacy dosage unit conversions and the use of log base 10 in pH and concentration problems per PCAT Q1B, Q1C.' },
    { id: 'pharma-003', name: 'Algebra: Expressions, Equations, and Inequalities', weight: 5 as const, description: 'Linear, quadratic, rational, absolute-value, and radical equations with two- and three-variable systems per PCAT Q3G.' },
    { id: 'pharma-004', name: 'Algebra: Functions, Composition, and Inverses', weight: 4 as const, description: 'Function operations, compositions, inverses, and locating extrema used in dose-response and clearance models per PCAT Q3I.' },
    { id: 'pharma-005', name: 'Probability and Counting Principles', weight: 4 as const, description: 'Basic probability rules, conditional probability, and permutations and combinations tested under PCAT Q4D.' },
    { id: 'pharma-006', name: 'Statistics: Central Tendency and Variation', weight: 4 as const, description: 'Mean, median, mode, range, variance, and standard deviation as applied to clinical-data items per PCAT Q4A, Q4B.' },
    { id: 'pharma-007', name: 'Statistics: Graphical Methods and Concepts', weight: 3 as const, description: 'Reading histograms, box plots, scatter plots, and applying statistical concepts such as correlation per PCAT Q4C, Q4E.' },
    { id: 'pharma-008', name: 'Precalculus: Exponential and Logarithmic Functions', weight: 4 as const, description: 'Graphing exponentials and logarithms, solving related equations, and modeling decay/growth per PCAT Q5A.' },
    { id: 'pharma-009', name: 'Precalculus: Circular Functions and Complex Numbers', weight: 3 as const, description: 'Domains, ranges, and inverses of sine, cosine, and tangent, plus arithmetic with complex numbers per PCAT Q5A4 and Q5B.' },
    { id: 'pharma-010', name: 'Precalculus: Vectors', weight: 2 as const, description: 'Vector addition, scalar multiplication, and equations of lines in the plane tested occasionally under PCAT Q5C.' },
    { id: 'pharma-011', name: 'Calculus: Limits and Continuity', weight: 3 as const, description: 'Evaluating limits, one-sided limits, infinite limits, and reading graphs of continuous and discontinuous functions per PCAT Q6A, Q6B.' },
    { id: 'pharma-012', name: 'Calculus: Derivatives and Applications', weight: 3 as const, description: 'Power, product, chain, and implicit differentiation and derivative tests for extrema and inflection points per PCAT Q6C.' },
    { id: 'pharma-013', name: 'Calculus: Integrals and Area', weight: 2 as const, description: 'Antiderivatives, the Fundamental Theorem of Calculus, and areas bounded by curves per PCAT Q6D, Q6E.' },
    { id: 'pharma-014', name: 'Critical Reading: Comprehension and Analysis', weight: 5 as const, description: 'Drawing main ideas, supporting details, inferences, and evaluating author purpose and tone per PCAT R1, R2.' },
    { id: 'pharma-015', name: 'Critical Reading: Evaluation and Health, Science, and Civic Writing', weight: 5 as const, description: 'Evaluating argument support, identifying bias, and writing coherent essays on health, science, or social issues per PCAT R3 and Writing.' }
  ]
};
