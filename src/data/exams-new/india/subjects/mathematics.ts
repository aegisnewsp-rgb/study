import type { Subject } from '../types';

const mathematics: Subject = {
  id: 'mathematics', name: '('mathematics', 'Mathematics')', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Algebra', weight: 3 as const, description: 'Covers permutations, combinations, binomial theorem, and progression series commonly tested in AP EAPCET and JEE Main.' },
    { id: 'mathem-002', name: 'Calculus', weight: 3 as const, description: 'Includes differentiation, integration, and differential equations — high-weight topics in most engineering entrance exams.' },
    { id: 'mathem-003', name: 'Coordinate Geometry', weight: 3 as const, description: 'Covers straight lines, circles, parabola, ellipse, and hyperbola with focus on NCERT textbook problems and previous year questions.' },
    { id: 'mathem-004', name: 'Trigonometry', weight: 3 as const, description: 'Inverse trig functions, identities, equations, and properties of triangles — essential for scoring in AP EAPCET.' },
    { id: 'mathem-005', name: 'Vector Algebra', weight: 3 as const, description: 'Covers vector operations, dot and cross products, and their applications in physics problems.' },
    { id: 'mathem-006', name: 'Matrices and Determinants', weight: 3 as const, description: 'Properties of matrices, rank, systems of linear equations, and area calculations using determinants.' },
    { id: 'mathem-007', name: 'Probability', weight: 3 as const, description: 'Includes Bayes theorem, conditional probability, random variables, and distribution — frequently asked in AP EAPCET.' },
    { id: 'mathem-008', name: 'Complex Numbers', weight: 3 as const, description: 'Argand plane, De Moivre theorem, roots of unity, and geometry of complex expressions.' },
    { id: 'mathem-009', name: 'Sequences and Series', weight: 3 as const, description: 'Arithmetic, geometric progressions, sum of series, and convergence tests for infinite series.' },
    { id: 'mathem-010', name: '3D Geometry', weight: 3 as const, description: 'Direction cosines, lines in space, planes, and shortest distance between skew lines.' },
    { id: 'mathem-011', name: 'Differential Equations', weight: 3 as const, description: 'First and second order ODEs, variable separable, homogeneous, and linear differential equations.' },
    { id: 'mathem-012', name: 'Statics and Dynamics', weight: 3 as const, description: 'Basics of forces, equilibrium, kinematics, and Newton's laws of motion applied to JEE-level problems.' },
    { id: 'mathem-013', name: 'Set Theory and Relations', weight: 3 as const, description: 'Venn diagrams, equivalence relations, functions, and domain/codomain concepts.' },
    { id: 'mathem-014', name: 'Mathematical Reasoning', weight: 3 as const, description: 'Statements, logical connectives, converse/inverse/contrapositive, and validity of arguments.' },
    { id: 'mathem-015', name: 'Linear Programming', weight: 3 as const, description: 'Graphical method, feasible region, and optimization for boundary point solutions.' },
  ]
};

export { mathematics };