export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'nep-math-001', name: 'Algebra and Functions', weight: 5 as const, description: 'Linear and quadratic equations, polynomials, logarithms, sequences and series (AP, GP), permutations and combinations, binomial theorem, and inequalities — core Nepal engineering entrance math.' },
    { id: 'nep-math-002', name: 'Trigonometry', weight: 4 as const, description: 'Trigonometric ratios, identities, equations, inverse trig, heights and distances, and applications of trigonometry in geometry and physics contexts.' },
    { id: 'nep-math-003', name: 'Calculus — Differentiation', weight: 5 as const, description: 'Limits, continuity, derivatives of algebraic and transcendental functions, chain rule, implicit differentiation, applications (tangents, normals, maxima/minima, rate problems).' },
    { id: 'nep-math-004', name: 'Calculus — Integration', weight: 5 as const, description: 'Indefinite and definite integrals, integration by parts, by substitution, partial fractions, area under curves, and differential equations (first order, separable).' },
    { id: 'nep-math-005', name: 'Coordinate Geometry', weight: 4 as const, description: 'Cartesian coordinates, straight lines, circles, ellipses, parabolas, hyperbolas, and conic sections — frequently combined with calculus in IOE entrance problems.' },
    { id: 'nep-math-006', name: 'Vectors and 3D Geometry', weight: 4 as const, description: 'Vector operations, scalar and cross products, 3D coordinate geometry, lines and planes in space, and direction cosines/ratios.' },
    { id: 'nep-math-007', name: 'Probability and Statistics', weight: 3 as const, description: 'Permutations and combinations, probability of events, Bayes\' theorem, binomial distribution, mean, median, mode, and standard deviation.' },
    { id: 'nep-math-008', name: 'Dynamics and Statics', weight: 4 as const, description: 'Newton\'s laws, friction, projectile motion, work-energy theorem, conservation of momentum, equilibrium conditions, and center of mass — frequently tested in IOE entrance physics but overlaps with mathematics.' }
  ]
};


