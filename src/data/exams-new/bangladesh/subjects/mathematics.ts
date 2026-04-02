import type { Subject } from '../types';

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Algebra: Polynomials & Quadratic Equations', weight: 5 as const, description: 'Polynomial roots, Vieta\'s formulas, quadratic equations, inequalities, and complex numbers — fundamental for BUET admission math paper.' },
    { id: 'mathem-002', name: 'Permutation, Combination & Probability', weight: 4 as const, description: 'Factorial notation, binomial theorem, combinations, probability theorems, and Bayes\' theorem — high-weightage topic for BUET and DU admission.' },
    { id: 'mathem-003', name: 'Trigonometry', weight: 5 as const, description: 'Trigonometric ratios, identities, equations, inverse functions, and solutions of triangles — consistently tested in BUET written exam.' },
    { id: 'mathem-004', name: 'Analytic Geometry', weight: 4 as const, description: 'Coordinate geometry, straight lines, circles, ellipses, parabolas, hyperbolas, and conic sections — essential for BUET admission geometry problems.' },
    { id: 'mathem-005', name: 'Differential Calculus', weight: 5 as const, description: 'Limits, continuity, differentiation rules, applications of derivatives (tangents, maxima-minima), and L\'Hôpital\'s rule — core BUET calculus topic.' },
    { id: 'mathem-006', name: 'Integral Calculus', weight: 5 as const, description: 'Integration techniques, definite integrals, area under curves, and applications of integration — high-scoring topic for BUET admission math.' },
    { id: 'mathem-007', name: 'Differential Equations', weight: 3 as const, description: 'First and second order differential equations, boundary conditions, and applications to engineering problems — relevant for BUET engineering mathematics.' },
    { id: 'mathem-008', name: 'Vector Algebra', weight: 4 as const, description: 'Vector operations, scalar and cross products, vector equations of lines and planes — important for physics-calculator problems in BUET exam.' },
    { id: 'mathem-009', name: 'Matrix & Determinants', weight: 4 as const, description: 'Matrix operations, determinants, inverse matrices, eigenvalues, and solving linear equations using matrices — key topic for BUET admission.' },
    { id: 'mathem-010', name: 'Sequences & Series', weight: 4 as const, description: 'Arithmetic and geometric progressions, infinite series, convergence tests, and binomial series — frequently appears in BUET math paper.' },
    { id: 'mathem-011', name: 'Complex Numbers', weight: 3 as const, description: 'De Moivre\'s theorem, Argand diagram, polar form, and roots of complex numbers — important for BUET electrical engineering mathematics.' },
    { id: 'mathem-012', name: 'Set Theory & Logic', weight: 2 as const, description: 'Set operations, Venn diagrams, propositions, truth tables, and logical reasoning — foundational topic supporting mathematical thinking.' },
    { id: 'mathem-013', name: 'Statistics & Measures of Dispersion', weight: 3 as const, description: 'Mean, median, mode, standard deviation, variance, and probability distributions — relevant for both BUET and general admission statistics.' },
    { id: 'mathem-014', name: '3D Geometry', weight: 4 as const, description: 'Three-dimensional coordinate geometry, distance formula, equations of spheres, lines, and planes in space — important for BUET admission.' },
    { id: 'mathem-015', name: 'Mathematical Reasoning & Induction', weight: 2 as const, description: 'Principle of mathematical induction, logical reasoning, and proof techniques — foundational topic for rigorous mathematical problem-solving.' },
  ]
};

export { mathematics };
