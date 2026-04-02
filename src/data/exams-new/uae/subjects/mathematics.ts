import type { Subject } from '../types';

const mathematics: Subject = {
  id: 'mathematics', name: '('mathematics', 'Mathematics')', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Topic 1', weight: 3 as const, description: 'Algebra fundamentals: equations, inequalities, polynomials, and algebraic manipulation techniques.' },
    { id: 'mathem-002', name: 'Topic 2', weight: 3 as const, description: 'Functions and graphs: linear, quadratic, exponential, and logarithmic functions analysis.' },
    { id: 'mathem-003', name: 'Topic 3', weight: 3 as const, description: 'Geometry: Euclidean geometry, triangles, circles, areas, volumes, and geometric proofs.' },
    { id: 'mathem-004', name: 'Topic 4', weight: 3 as const, description: 'Trigonometry: sine, cosine, tangent, trigonometric identities, and problem-solving applications.' },
    { id: 'mathem-005', name: 'Topic 5', weight: 3 as const, description: 'Statistics and probability: data analysis, distributions, hypothesis testing, and probability calculations.' },
    { id: 'mathem-006', name: 'Topic 6', weight: 3 as const, description: 'Calculus basics: limits, derivatives, integrals, and their applications in problem solving.' },
    { id: 'mathem-007', name: 'Topic 7', weight: 3 as const, description: 'Number systems and logic: real numbers, sequences, series, and mathematical reasoning.' },
    { id: 'mathem-008', name: 'Topic 8', weight: 3 as const, description: 'Matrices and vectors: matrix operations, vector spaces, and applications in UAE CAT quantitative sections.' },
    { id: 'mathem-009', name: 'Topic 9', weight: 3 as const, description: 'Word problems and applications: real-world mathematical modeling and problem translation into equations.' },
    { id: 'mathem-010', name: 'Topic 10', weight: 3 as const, description: 'Data interpretation: graphs, tables, charts analysis, and statistical reasoning in exam contexts.' },
    { id: 'mathem-011', name: 'Topic 11', weight: 3 as const, description: 'Time and work problems: rates, ratios, and proportional reasoning in competitive exam settings.' },
    { id: 'mathem-012', name: 'Topic 12', weight: 3 as const, description: 'Exam strategies and calculator skills: UAE CAT specific approaches and permitted calculation tools.' },
  ]
};

export { mathematics };