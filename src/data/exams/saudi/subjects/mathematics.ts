export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'sa-math-001', name: 'Algebra and Equations', weight: 5 as const, description: 'Linear and quadratic equations, inequalities, polynomials, rational expressions, logarithms, and exponential functions — core quantitative section for Saudi university admission tests.' },
    { id: 'sa-math-002', name: 'Functions and Graphs', weight: 4 as const, description: 'Domain and range, composite functions, inverse functions, exponential and logarithmic functions, and graphical analysis of different function types.' },
    { id: 'sa-math-003', name: 'Trigonometry', weight: 3 as const, description: 'Trigonometric ratios, identities, equations, and applications of trigonometry in geometry and physics — frequently tested in the quantitative section of Qiyas.' },
    { id: 'sa-math-004', name: 'Geometry and Measurement', weight: 4 as const, description: 'Plane geometry (triangles, circles, quadrilaterals), solid geometry, area, perimeter, volume, and properties of geometric shapes.' },
    { id: 'sa-math-005', name: 'Probability and Statistics', weight: 3 as const, description: 'Basic probability, counting principles, permutations and combinations, mean, median, mode, and standard deviation — common in Qiyas quantitative section.' },
    { id: 'sa-math-006', name: 'Arithmetic and Number Sense', weight: 4 as const, description: 'Fractions, decimals, ratios, proportions, percentages, and basic number theory (divisibility, primes). Fast and accurate arithmetic is essential for Qiyas quantitative section.' }
  ]
};
