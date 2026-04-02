import type { Subject } from '../types';

const mathematics: Subject = {
  id: 'mathematics', name: '('mathematics', 'Mathematics')', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Topic 1', weight: 3 as const, description: 'Sets, relations, and functions including Venn diagrams, domain, range, and inverse functions for IOE Nepal.' },
    { id: 'mathem-002', name: 'Topic 2', weight: 3 as const, description: 'Algebra covering quadratic equations, inequalities, progressions, and binomial theorem for IOE entrance.' },
    { id: 'mathem-003', name: 'Topic 3', weight: 3 as const, description: 'Trigonometry including ratios, identities, equations, and inverse trigonometric functions.' },
    { id: 'mathem-004', name: 'Topic 4', weight: 3 as const, description: 'Coordinate geometry with straight lines, circles, conic sections, and locus problems.' },
    { id: 'mathem-005', name: 'Topic 5', weight: 3 as const, description: 'Calculus covering limits, continuity, and differentiability with graphical interpretations.' },
    { id: 'mathem-006', name: 'Topic 6', weight: 3 as const, description: 'Differentiation including derivative rules, applications to rate of change, and tangent-normal problems.' },
    { id: 'mathem-007', name: 'Topic 7', weight: 3 as const, description: 'Integration covering indefinite and definite integrals, area under curves, and differential equations.' },
    { id: 'mathem-008', name: 'Topic 8', weight: 3 as const, description: 'Vectors in 2D and 3D including scalar and vector products, and their applications.' },
    { id: 'mathem-009', name: 'Topic 9', weight: 3 as const, description: 'Matrices and determinants including operations, inverse matrices, and solving linear equations.' },
    { id: 'mathem-010', name: 'Topic 10', weight: 3 as const, description: 'Probability and statistics including permutations, combinations, probability theorems, and data interpretation.' },
    { id: 'mathem-011', name: 'Topic 11', weight: 3 as const, description: 'Complex numbers including operations, modulus, argument, and De Moivre\'s theorem.' },
    { id: 'mathem-012', name: 'Topic 12', weight: 3 as const, description: 'Sequences and series including arithmetic and geometric progressions and infinite series convergence.' },
    { id: 'mathem-013', name: 'Topic 13', weight: 3 as const, description: 'Permutation, combination, and probability distribution for IOE entrance exam preparation.' },
    { id: 'mathem-014', name: 'Topic 14', weight: 3 as const, description: 'Binomial theorem for positive integer and rational indices with applications.' },
    { id: 'mathem-015', name: 'Topic 15', weight: 3 as const, description: 'Dynamics covering Newton\'s laws, work-energy, collision problems, and rotational mechanics.' },
  ]
};

export { mathematics };
