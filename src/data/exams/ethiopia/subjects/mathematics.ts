export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'eth-math-001', name: 'Algebra and Number Systems', weight: 5 as const, description: 'Real numbers, algebraic expressions, linear and quadratic equations, logarithms, inequalities, progressions (AP, GP), and the binomial theorem — core EUEE quantitative topics.' },
    { id: 'eth-math-002', name: 'Functions and Graphs', weight: 4 as const, description: 'Domain and range, inverse functions, composite functions, polynomial and rational functions, exponential and logarithmic functions, and graphing techniques.' },
    { id: 'eth-math-003', name: 'Trigonometry', weight: 4 as const, description: 'Trigonometric ratios and identities, inverse trigonometry, solving trig equations, and applications to geometry — frequently combined with calculus problems.' },
    { id: 'eth-math-004', name: 'Calculus — Differentiation', weight: 5 as const, description: 'Limits and continuity, derivative rules (power, product, quotient, chain), implicit differentiation, higher-order derivatives, and applications (tangents, rates of change, optimization).' },
    { id: 'eth-math-005', name: 'Calculus — Integration', weight: 4 as const, description: 'Indefinite and definite integrals, integration techniques (substitution, by parts), areas under curves, and applications of integration in physics and geometry contexts.' },
    { id: 'eth-math-006', name: 'Geometry and Coordinate Geometry', weight: 4 as const, description: 'Plane geometry theorems, coordinate geometry (lines, circles, conic sections), distance and section formulas, and transformation geometry.' },
    { id: 'eth-math-007', name: 'Probability and Statistics', weight: 3 as const, description: 'Combinatorics (permutations and combinations), probability of simple and compound events, conditional probability, Bayes\' theorem, and basic statistical measures.' },
    { id: 'eth-math-008', name: 'Vectors and Linear Algebra', weight: 3 as const, description: 'Vector operations in 2D and 3D, scalar and vector products, matrix operations, determinants, solving systems of linear equations, and applications.' }
  ]
};
