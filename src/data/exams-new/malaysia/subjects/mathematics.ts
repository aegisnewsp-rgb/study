import type { Subject } from '../types';

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Algebraic Expressions & Operations', weight: 3 as const, description: 'Master simplification, expansion, and factorisation of algebraic expressions including quadratics, fractions, and surds.' },
    { id: 'mathem-002', name: 'Equations & Inequalities', weight: 3 as const, description: 'Solve linear, quadratic, and simultaneous equations, and interpret solutions of inequalities on the number line.' },
    { id: 'mathem-003', name: 'Trigonometry', weight: 3 as const, description: 'Apply sine, cosine, and tangent ratios, solve trigonometric equations, and use identities such as sin²θ + cos²θ = 1.' },
    { id: 'mathem-004', name: 'Geometry & Coordinate Geometry', weight: 3 as const, description: 'Solve problems involving lines, circles, and conic sections using coordinate geometry formulas in the Cartesian plane.' },
    { id: 'mathem-005', name: 'Differentiation', weight: 3 as const, description: 'Differentiate polynomial, exponential, and trigonometric functions; apply differentiation to find gradients, tangents, and rates of change.' },
    { id: 'mathem-006', name: 'Integration', weight: 3 as const, description: 'Integrate standard functions and apply integration to calculate areas under curves and volumes of revolution.' },
    { id: 'mathem-007', name: 'Sequences & Series', weight: 3 as const, description: 'Determine the nth term and sum of arithmetic and geometric progressions, including infinite geometric series.' },
    { id: 'mathem-008', name: 'Exponential & Logarithmic Functions', weight: 3 as const, description: 'Solve exponential and logarithmic equations, apply laws of logarithms, and interpret growth and decay problems.' },
    { id: 'mathem-009', name: 'Statistics & Data Handling', weight: 3 as const, description: 'Calculate measures of central tendency and dispersion, and interpret data presented in various statistical diagrams.' },
    { id: 'mathem-010', name: 'Probability', weight: 3 as const, description: 'Calculate probabilities of single and combined events using addition and multiplication rules, including conditional probability.' },
    { id: 'mathem-011', name: 'Permutations & Combinations', weight: 3 as const, description: 'Distinguish between permutations and combinations and apply the formulas nPr and nCr to counting problems.' },
    { id: 'mathem-012', name: 'Vectors in 2D & 3D', weight: 3 as const, description: 'Perform vector operations, find dot and cross products, and apply vectors to geometry and mechanics problems.' },
    { id: 'mathem-013', name: 'Complex Numbers', weight: 3 as const, description: 'Perform arithmetic operations on complex numbers, represent them on the Argand diagram, and solve polynomial equations.' },
    { id: 'mathem-014', name: 'Matrices & Linear Algebra', weight: 3 as const, description: 'Perform matrix operations, find determinants and inverses, and solve systems of linear equations using matrices.' },
    { id: 'mathem-015', name: 'Calculus Applications & Problem Solving', weight: 3 as const, description: 'Apply differentiation and integration to real-world problems involving optimisation, kinematics, and curve sketching.' },
  ]
};

export { mathematics };
