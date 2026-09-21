export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Numbers', weight: 3 as const, description: 'Natural numbers, factors, divisibility tests, GCD/HCF, LCM, integers, fractions, decimals, reciprocals, rates, ratios, percentages, and proportion - the foundational KNEC KCSE Paper 1 arithmetic strand.' },
    { id: 'mathem-002', name: 'Measurement', weight: 2 as const, description: 'Length, area, Pythagoras theorem, volume and capacity, mass, density, weight, time, and perimeter calculations on plane figures for KNEC KCSE Paper 1.' },
    { id: 'mathem-003', name: 'Geometry and Construction', weight: 4 as const, description: 'Angles, polygons, geometrical constructions, loci, scale drawing, bearings, common solids, nets, and 3D geometry per the KNEC KCSE syllabus 2.10.' },
    { id: 'mathem-004', name: 'Trigonometry', weight: 4 as const, description: 'Trigonometric ratios, sine and cosine rules, bearings, trig graphs, identities, and trig equations for KNEC KCSE Paper 1 and Paper 2.' },
    { id: 'mathem-005', name: 'Algebra', weight: 4 as const, description: 'Algebraic expressions, equations of straight lines, linear and quadratic equations and expressions, inequalities, surds, formulae, variations, and binomial expansions per KNEC KCSE.' },
    { id: 'mathem-006', name: 'Sequences and Series', weight: 3 as const, description: 'Number patterns, arithmetic progressions, geometric progressions, nth term formulas, and sum of AP and GP for KNEC KCSE Paper 2.' },
    { id: 'mathem-007', name: 'Matrices and Transformations', weight: 5 as const, description: '2x2 and 3x3 matrices, determinants, simultaneous equations, and transformations (reflection, rotation, enlargement, translation) per KNEC KCSE.' },
    { id: 'mathem-008', name: 'Vectors', weight: 4 as const, description: 'Vector notation, magnitude, direction, scalar product, position vectors, and 3D vector problems for KNEC KCSE Paper 2.' },
    { id: 'mathem-009', name: 'Statistics and Probability', weight: 3 as const, description: 'Data collection, histograms, frequency polygons, ogives, measures of central tendency and dispersion, probability rules, and tree diagrams per KNEC KCSE.' },
    { id: 'mathem-010', name: 'Calculus', weight: 5 as const, description: 'Limits, differentiation of algebraic and trigonometric functions, stationary points, integration, definite integrals, area under curves, and kinematics for KNEC KCSE Paper 2.' },
    { id: 'mathem-011', name: 'Commercial Arithmetic', weight: 3 as const, description: 'Simple and compound interest, profit and loss, discount, commission, depreciation, hire purchase, and income tax for KNEC KCSE Paper 1.' },
    { id: 'mathem-012', name: 'Linear Programming', weight: 2 as const, description: 'Forming linear inequalities, graphing feasible regions, optimizing the objective function, and interpreting linear programming solutions per KNEC KCSE Paper 2.' }
  ]
};