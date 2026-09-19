export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Number System', weight: 3 as const, description: 'Real numbers, complex numbers, indices, surds and logarithms with manipulation of algebraic expressions for the matriculation Mathematics module.' },
    { id: 'mathem-002', name: 'Equations, Inequalities and Absolute Values', weight: 4 as const, description: 'Linear, quadratic, polynomial, simultaneous and absolute value equations and inequalities, including sign charts and graphical solution methods.' },
    { id: 'mathem-003', name: 'Sequences, Series and Binomial Expansion', weight: 3 as const, description: 'Arithmetic and geometric progressions, sum to infinity, sigma notation and binomial theorem up to the general term with application problems.' },
    { id: 'mathem-004', name: 'Functions and Graphs', weight: 4 as const, description: 'Domain, range, composite and inverse functions, exponential and logarithmic functions, sketching graphs and solving functional equations.' },
    { id: 'mathem-005', name: 'Trigonometric Functions', weight: 4 as const, description: 'Six trigonometric ratios, identities, addition and double-angle formulas, inverse trigonometric functions and solution of trigonometric equations.' },
    { id: 'mathem-006', name: 'Matrices', weight: 3 as const, description: 'Matrix algebra, determinants, inverse of 2x2 and 3x3 matrices, and solving systems of linear equations by matrix methods including Cramer\'s rule.' },
    { id: 'mathem-007', name: 'Vectors', weight: 4 as const, description: 'Vector operations in 2D and 3D, dot product, cross product, scalar triple product, lines and planes with application to geometry problems.' },
    { id: 'mathem-008', name: 'Coordinate and Analytic Geometry', weight: 3 as const, description: 'Straight lines, circles, conic sections (parabola, ellipse, hyperbola) and polar coordinates with focus on locus and standard-form transformations.' },
    { id: 'mathem-009', name: 'Limits and Continuity', weight: 3 as const, description: 'Limit of a function, continuity, sandwich theorem and evaluation of indeterminate forms as foundation for calculus topics.' },
    { id: 'mathem-010', name: 'Differentiation', weight: 5 as const, description: 'Derivatives of algebraic, trigonometric, exponential and logarithmic functions, chain rule, implicit differentiation and higher-order derivatives with applications.' },
    { id: 'mathem-011', name: 'Integration', weight: 5 as const, description: 'Indefinite and definite integrals, substitution, integration by parts, partial fractions and applications to area, volume and rate problems.' },
    { id: 'mathem-012', name: 'Differential Equations', weight: 4 as const, description: 'First-order separable, linear and exact equations, second-order linear equations with constant coefficients and applications to growth and decay models.' },
    { id: 'mathem-013', name: 'Statistics and Probability', weight: 4 as const, description: 'Data description, measures of central tendency and dispersion, classical probability, conditional probability, Bayes\' theorem and probability distributions.' },
    { id: 'mathem-014', name: 'Correlation, Regression and Index Numbers', weight: 2 as const, description: 'Linear correlation coefficient, regression lines, least squares method, time series components and construction of price and quantity index numbers.' },
    { id: 'mathem-015', name: 'Linear Programming and Mathematics of Finance', weight: 2 as const, description: 'Linear inequalities, graphical solution of linear programming problems, simple and compound interest, annuities and amortization schedules.' }
  ]
};
