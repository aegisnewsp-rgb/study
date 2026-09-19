export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'eed-math-001', name: 'Algebra and Number Theory', weight: 4 as const, description: 'Linear equations, quadratic equations, progressions (AP, GP), polynomials, binomial theorem, complex numbers, permutations and combinations, and number theory fundamentals — the most heavily weighted algebra section in EGE.' },
    { id: 'eed-math-002', name: 'Functions and Graphs', weight: 4 as const, description: 'Domain and range, even/odd functions, inverse functions, composite functions, exponential and logarithmic functions, and graphing techniques for all function types — essential for EGE calculus problems.' },
    { id: 'eed-math-003', name: 'Trigonometry', weight: 3 as const, description: 'All six trig functions, identities, inverse trig, solving trig equations, and applications to geometry. EGE tests trig heavily within calculus and geometry contexts.' },
    { id: 'eed-math-004', name: 'Calculus — Differentiation', weight: 5 as const, description: 'Limits, derivatives of all function types, chain rule, implicit differentiation, higher-order derivatives, and applications (tangents, normals, monotonicity, extrema). The highest-weight EGE mathematics topic.' },
    { id: 'eed-math-005', name: 'Calculus — Integration', weight: 5 as const, description: 'Indefinite and definite integrals, substitution, integration by parts, partial fractions, area under curves, and applications of integration. EGE\'s second most important calculus topic.' },
    { id: 'eed-math-006', name: 'Planimetry (Plane Geometry)', weight: 3 as const, description: 'Triangles, circles, quadrilaterals, polygons, angles, chords, tangents, and inscribed/circumscribed figures. Tests geometric reasoning and theorem application.' },
    { id: 'eed-math-007', name: 'Stereometry (Solid Geometry)', weight: 3 as const, description: 'Prisms, pyramids, cylinders, cones, spheres, and composite solids. Volume, surface area, and cross-sections. Spatial visualization and theorem-based problem solving.' },
    { id: 'eed-math-008', name: 'Vectors and Analytic Geometry', weight: 3 as const, description: 'Vector operations, dot and cross product, lines and planes in space, conic sections (parabola, ellipse, hyperbola), and coordinate geometry transformations.' },
    { id: 'eed-math-009', name: 'Probability and Statistics', weight: 3 as const, description: 'Classical and conditional probability, Bayes\' theorem, random variables, expected value, variance, standard deviation, and basic statistical measures.' },
    { id: 'eed-math-010', name: 'Mathematical Logic and Proofs', weight: 2 as const, description: 'Direct and indirect proofs, proof by contradiction, mathematical induction, and set theory basics. Weights lower but tests rigorous mathematical thinking.' }
  ]
};
