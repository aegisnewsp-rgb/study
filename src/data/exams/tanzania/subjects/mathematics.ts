export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Differentiation', weight: 5 as const, description: 'Limits, first and higher-order derivatives, chain and quotient rules, implicit differentiation, applications (tangents, normals, maxima, minima, rates of change). Heaviest topic in NECTA 142/1.' },
    { id: 'mathem-002', name: 'Integration', weight: 5 as const, description: 'Indefinite integrals, definite integrals, integration by parts, substitution, area under curves, volumes of revolution and trapezoidal rule. Core NECTA 142/1 paper topic.' },
    { id: 'mathem-003', name: 'Coordinate Geometry I', weight: 5 as const, description: 'Straight lines, circles, conic sections (parabola, ellipse, hyperbola), parametric equations and locus problems. Heaviest single component of NECTA 142/1.' },
    { id: 'mathem-004', name: 'Probability', weight: 5 as const, description: 'Conditional probability, Bayes theorem, total probability law, random variables, expectation, binomial and normal distributions. Highest-weighted topic in NECTA 142/2.' },
    { id: 'mathem-005', name: 'Numerical Methods', weight: 4 as const, description: 'Bisection, Newton-Raphson, secant methods for equation solving; numerical integration (trapezoidal, Simpson); finite differences and interpolation.' },
    { id: 'mathem-006', name: 'Trigonometry', weight: 4 as const, description: 'Identities, equations, sum and product formulas, inverse trig functions, polar coordinates and De Moivre theorem applications.' },
    { id: 'mathem-007', name: 'Algebra', weight: 4 as const, description: 'Polynomials, partial fractions, binomial theorem for any index, sequences and series (AP, GP, binomial), mathematical induction.' },
    { id: 'mathem-008', name: 'Differential Equations', weight: 4 as const, description: 'First-order (variable separable, linear, homogeneous), second-order linear ODEs with constant coefficients and applications to growth/decay models.' },
    { id: 'mathem-009', name: 'Coordinate Geometry II', weight: 4 as const, description: 'Three-dimensional geometry: lines, planes, spheres, angles between lines and planes, distance formulas in 3D.' },
    { id: 'mathem-010', name: 'Vectors', weight: 4 as const, description: 'Vector operations, scalar and cross products, applications to geometry, equations of lines and planes using vectors.' },
    { id: 'mathem-011', name: 'Functions', weight: 3 as const, description: 'Domain, range, even/odd, composite and inverse functions, transformations, exponential and logarithmic graphs, asymptotes.' },
    { id: 'mathem-012', name: 'Sets', weight: 3 as const, description: 'Set notation, Venn diagrams, operations on sets, ordered pairs, Cartesian products, relations and equivalence relations.' },
    { id: 'mathem-013', name: 'Logic', weight: 3 as const, description: 'Propositional logic, truth tables, logical equivalence, tautologies, quantifiers, validity of arguments, rules of inference.' },
    { id: 'mathem-014', name: 'Complex Numbers', weight: 3 as const, description: 'Argand diagram, modulus-argument form, De Moivre theorem, roots of unity, loci in the complex plane.' },
    { id: 'mathem-015', name: 'Linear Programming', weight: 2 as const, description: 'Formulating linear constraints, graphical solution, simplex method basics, integer programming. Lower-weight but routinely examined.' }
  ]
};