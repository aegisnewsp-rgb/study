import type { Subject } from '../types';

const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Algebra & Polynomials', weight: 3 as const, description: 'Factorisation, remainder theorem, quadratic equations, and binomial expansion — frequently tested in MUST admission mathematics.' },
    { id: 'mathem-002', name: 'Coordinate Geometry', weight: 3 as const, description: 'Straight lines, circles, and conic sections — equation-based questions are straightforward and high-scoring.' },
    { id: 'mathem-003', name: 'Trigonometry', weight: 3 as const, description: 'Identities, sine and cosine rules, heights and distances, and trigonometric graphs — essential for physics-linked problems.' },
    { id: 'mathem-004', name: 'Calculus (Differentiation)', weight: 3 as const, description: 'Derivatives, gradients, rates of change, and turning points — core topic with many application questions in MUST exams.' },
    { id: 'mathem-005', name: 'Calculus (Integration)', weight: 3 as const, description: 'Indefinite and definite integrals, areas under curves, and differential equations — linked with physics kinematics questions.' },
    { id: 'mathem-006', name: 'Sequences & Series', weight: 3 as const, description: 'Arithmetic and geometric progressions, sum to infinity, and binomial theorem — formula-based topic with reliable marks.' },
    { id: 'mathem-007', name: 'Vectors & Mechanics', weight: 3 as const, description: 'Vector addition, scalar product, and applications to forces and motion — bridges pure mathematics and physics.' },
    { id: 'mathem-008', name: 'Probability & Statistics', weight: 3 as const, description: 'Permutations, combinations, probability trees, mean, variance, and standard deviation — data interpretation skills.' },
    { id: 'mathem-009', name: 'Complex Numbers', weight: 3 as const, description: 'Argand diagrams, modulus and argument, de Moivre\'s theorem, and solving equations with complex roots.' },
    { id: 'mathem-010', name: 'Matrices & Linear Algebra', weight: 3 as const, description: 'Matrix operations, determinants, inverse matrices, and solving simultaneous linear equations.' },
    { id: 'mathem-011', name: 'Functions & Relations', weight: 3 as const, description: 'Domain, range, inverse functions, composite functions, and sketching graphs of standard functions.' },
    { id: 'mathem-012', name: 'Logarithms & Exponentials', weight: 3 as const, description: 'Laws of logarithms, solving exponential equations, and applications to growth and decay problems.' },
    { id: 'mathem-013', name: 'Numerical Methods', weight: 3 as const, description: 'Iteration, Newton-Raphson method, and numerical approximation — practical skills for engineering-bound students.' },
    { id: 'mathem-014', name: 'Partial Fractions', weight: 3 as const, description: 'Decomposition of rational functions into partial fractions — a technique required for integration and series problems.' },
    { id: 'mathem-015', name: 'Differential Equations', weight: 3 as const, description: 'First-order DEs, separable equations, and applications to kinematics and exponential growth models.' },
  ]
};

export { mathematics };
