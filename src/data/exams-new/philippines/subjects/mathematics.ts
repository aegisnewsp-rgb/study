import type { Subject } from '../types';

const mathematics: Subject = {
  id: 'mathematics', name: '('mathematics', 'Mathematics')', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Topic 1', weight: 3 as const, description: 'Basic Algebra — operations on algebraic expressions, factoring, and solving linear and quadratic equations.' },
    { id: 'mathem-002', name: 'Topic 2', weight: 3 as const, description: 'Plane Geometry — properties, theorems, and proofs related to triangles, quadrilaterals, and circles.' },
    { id: 'mathem-003', name: 'Topic 3', weight: 3 as const, description: 'Solid Geometry — volume and surface area of 3D shapes such as prisms, cylinders, cones, and spheres.' },
    { id: 'mathem-004', name: 'Topic 4', weight: 3 as const, description: 'Trigonometry — ratios, identities, and solving right and oblique triangle problems for UPCAT.' },
    { id: 'mathem-005', name: 'Topic 5', weight: 3 as const, description: 'Statistics and Probability — measures of central tendency, dispersion, and basic probability computations.' },
    { id: 'mathem-006', name: 'Topic 6', weight: 3 as const, description: 'Number Theory — divisibility rules, primes, factors, multiples, and number system conversions.' },
    { id: 'mathem-007', name: 'Topic 7', weight: 3 as const, description: 'Sequences and Series — arithmetic and geometric progressions, including sum and nth term calculations.' },
    { id: 'mathem-008', name: 'Topic 8', weight: 3 as const, description: 'Variation and Proportion — direct, inverse, joint, and partitive proportion problems.' },
    { id: 'mathem-009', name: 'Topic 9', weight: 3 as const, description: 'Coordinate Geometry — plotting points, slopes, equations of lines, and distance between two points.' },
    { id: 'mathem-010', name: 'Topic 10', weight: 3 as const, description: 'Logarithms and Exponents — laws of exponents and logarithms, and solving exponential and logarithmic equations.' },
    { id: 'mathem-011', name: 'Topic 11', weight: 3 as const, description: 'Sets and Functions — Venn diagrams, set operations, and understanding functions and their graphs.' },
    { id: 'mathem-012', name: 'Topic 12', weight: 3 as const, description: 'Progressions and Patterns — identifying and extending numerical and algebraic patterns in sequences.' },
    { id: 'mathem-013', name: 'Topic 13', weight: 3 as const, description: 'Word Problems in Mathematics — translating contextual problems into mathematical models and solving them.' },
    { id: 'mathem-014', name: 'Topic 14', weight: 3 as const, description: 'Permutation and Combination — counting principles, factorial notation, and solving arrangement problems.' },
    { id: 'mathem-015', name: 'Topic 15', weight: 3 as const, description: 'UPCAT Mathematics Practice Tests — timed full-length drills matching the difficulty and format of UPCAT math.' }
  ]
};

export { mathematics };
