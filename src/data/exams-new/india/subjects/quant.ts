import type { Subject } from '../types';

const quant: Subject = {
  id: 'quant', name: '('quant', 'Quantitative Aptitude')', color: '#6b7280',
  topics: [
    { id: 'quant-001', name: 'Number Systems', weight: 3 as const, description: 'Divisibility, HCF/LCM, remainders, and properties of numbers — foundation for all competitive exams.' },
    { id: 'quant-002', name: 'Percentage', weight: 3 as const, description: 'Percentage calculations, profit-loss, discount, and successive percentage change problems.' },
    { id: 'quant-003', name: 'Ratio and Proportion', weight: 3 as const, description: 'Direct and inverse proportion, mixture problems, and partnership calculations.' },
    { id: 'quant-004', name: 'Average and Mixture', weight: 3 as const, description: 'Weighted average, alligation method, and combining elements with different values.' },
    { id: 'quant-005', name: 'Time and Work', weight: 3 as const, description: 'Work efficiency, pipes and cisterns, and work-wage problems common in banking exams.' },
    { id: 'quant-006', name: 'Time, Speed and Distance', weight: 3 as const, description: 'Relative speed, train problems, boat in still water, and circular motion concepts.' },
    { id: 'quant-007', name: 'Simple and Compound Interest', weight: 3 as const, description: 'SI vs CI formulas, Installments, and interest calculation for financial topics.' },
    { id: 'quant-008', name: 'Profit and Loss', weight: 3 as const, description: 'Marked price, discount, gain-loss percentage, and dishonest merchant problems.' },
    { id: 'quant-009', name: 'Permutation and Combination', weight: 3 as const, description: 'Counting principles, selection, arrangement, and circular permutation problems.' },
    { id: 'quant-010', name: 'Probability', weight: 3 as const, description: 'Classical probability, conditional probability, Bayes theorem, and expected value calculations.' },
    { id: 'quant-011', name: 'Data Interpretation', weight: 3 as const, description: 'Tables, bar graphs, pie charts, line graphs, and Caselets — high weight in SBI PO and IBPS.' },
    { id: 'quant-012', name: 'Simplification', weight: 3 as const, description: 'BODMAS rules, square roots, cube roots, and rapid calculations for speed tests.' },
    { id: 'quant-013', name: 'Quadratic Equations', weight: 3 as const, description: 'Roots, factorization, sum and product of roots for competitive exam quant sections.' },
    { id: 'quant-014', name: 'Mensuration', weight: 3 as const, description: 'Areas and volumes of 2D and 3D shapes — geometry for SSC and banking exams.' },
    { id: 'quant-015', name: 'Series and Sequence', weight: 3 as const, description: 'Arithmetic, geometric progressions, fibonacci, and finding missing terms in number series.' },
  ]
};

export { quant };