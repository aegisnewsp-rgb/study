import type { Subject } from '../types';

const mathematics: Subject = {
  id: 'mathematics', name: '("mathematics", "Mathematics")', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Topic 1', weight: 3 as const, description: 'Real numbers, fractions, percentages, and ratio concepts as tested in Part 1 of ЕГЭ Mathematics (Basic Level).' },
    { id: 'mathem-002', name: 'Topic 2', weight: 3 as const, description: 'Powers, roots, and exponent laws — simplification and evaluation of expressions in ЕГЭ problems.' },
    { id: 'mathem-003', name: 'Topic 3', weight: 3 as const, description: 'Algebraic identities, factoring polynomials, and transforming rational expressions on the ЕГЭ exam.' },
    { id: 'mathem-004', name: 'Topic 4', weight: 3 as const, description: 'Linear and quadratic equations, cubic equations, and rational equations solved for ЕГЭ exam tasks.' },
    { id: 'mathem-005', name: 'Topic 5', weight: 3 as const, description: 'Linear and quadratic inequalities, systems of inequalities, and interval method used in ЕГЭ problems.' },
    { id: 'mathem-006', name: 'Topic 6', weight: 3 as const, description: 'Arithmetic and geometric progressions — finding sums, terms, and applying sequences in ЕГЭ contexts.' },
    { id: 'mathem-007', name: 'Topic 7', weight: 3 as const, description: 'Functions and their graphs — reading properties from graphs of elementary functions on the ЕГЭ exam.' },
    { id: 'mathem-008', name: 'Topic 8', weight: 3 as const, description: 'Trigonometry — ratios, identities, solving trigonometric equations, and applying sine/cosine rules.' },
    { id: 'mathem-009', name: 'Topic 9', weight: 3 as const, description: 'Coordinate geometry on the plane — lines, circles, parabolas, ellipses, and distance calculations.' },
    { id: 'mathem-010', name: 'Topic 10', weight: 3 as const, description: 'Derivatives — finding tangent slopes, rates of change, and solving optimisation problems in ЕГЭ.' },
    { id: 'mathem-011', name: 'Topic 11', weight: 3 as const, description: 'Integrals and antiderivatives — calculating areas under curves as tested in the ЕГЭ profile level.' },
    { id: 'mathem-012', name: 'Topic 12', weight: 3 as const, description: 'Plane geometry — triangles, circles, polygons, area calculations, and geometric proofs on the ЕГЭ.' },
    { id: 'mathem-013', name: 'Topic 13', weight: 3 as const, description: 'Stereometry — spatial geometry of prisms, pyramids, cylinders, cones, and spheres in ЕГЭ problems.' },
    { id: 'mathem-014', name: 'Topic 14', weight: 3 as const, description: 'Vectors in the plane and space — operations, scalar product, and geometric applications in ЕГЭ.' },
    { id: 'mathem-015', name: 'Topic 15', weight: 3 as const, description: 'Probability theory and statistics — conditional probability, combinations, permutations, and data analysis.' },
    { id: 'mathem-016', name: 'Topic 16', weight: 3 as const, description: 'Mathematical modelling — translating real-world problems into equations and inequalities for ЕГЭ solutions.' },
    { id: 'mathem-017', name: 'Topic 17', weight: 3 as const, description: 'Complex numbers — operations, geometric interpretation, and solving equations on the profile ЕГЭ exam.' },
    { id: 'mathem-018', name: 'Topic 18', weight: 3 as const, description: 'Problem-solving strategies and的非standard tasks — logic puzzles, parameter analysis, and ЕГЭ尖题型.' },
  ]
};

export { mathematics };
