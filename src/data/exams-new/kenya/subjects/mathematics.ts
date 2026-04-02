const mathematics: Subject = {
  id: 'mathematics', name: '('mathematics', 'Mathematics')', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Algebra & Equations', weight: 3 as const, description: 'Covers quadratic equations, inequalities, simultaneous equations, logarithms, and exponential functions — core for KCSE and KU placement.' },
    { id: 'mathem-002', name: 'Geometry & Coordinate Geometry', weight: 3 as const, description: 'Includes Euclidean geometry, circle theorems, coordinate geometry, straight lines, and conic sections.' },
    { id: 'mathem-003', name: 'Trigonometry', weight: 3 as const, description: 'Covers trigonometric ratios, identities, sine and cosine rules, solving triangles, and applications in navigation and surveying.' },
    { id: 'mathem-004', name: 'Calculus (Differentiation & Integration)', weight: 3 as const, description: 'Includes limits, derivatives, integrals, curve sketching, optimization problems, and area under curves — high weight in KU exams.' },
    { id: 'mathem-005', name: 'Statistics & Probability', weight: 3 as const, description: 'Covers mean, median, mode, standard deviation, probability trees, permutations, combinations, and binomial distribution.' },
    { id: 'mathem-006', name: 'Vectors & Matrices', weight: 3 as const, description: 'Includes vector operations, dot and cross products, matrix operations, determinants, and solving systems using matrices.' },
    { id: 'mathem-007', name: 'Sequences & Series', weight: 3 as const, description: 'Covers arithmetic and geometric progressions, convergence, sum to infinity, and applications in financial mathematics.' },
    { id: 'mathem-008', name: 'Complex Numbers', weight: 3 as const, description: 'Includes operations with complex numbers, Argand diagrams, modulus, argument, and solving polynomial equations.' },
    { id: 'mathem-009', name: 'Functions & Relations', weight: 3 as const, description: 'Covers domain, range, inverse functions, composite functions, polynomial functions, and graphing techniques.' },
    { id: 'mathem-010', name: 'Number Theory & Sets', weight: 3 as const, description: 'Includes prime numbers, divisibility, set theory, Venn diagrams, and logic fundamentals.' },
    { id: 'mathem-011', name: 'Linear Programming', weight: 3 as const, description: 'Covers formulation of LP problems, graphical solutions, and simplex method basics for optimization.' },
    { id: 'mathem-012', name: 'Kinematics & Dynamics', weight: 3 as const, description: 'Covers motion in a straight line, projectile motion, Newton\'s laws, and applications in physics-related maths problems.' },
  ]
};

export { mathematics };
