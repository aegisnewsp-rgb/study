// TMUA — Paper 1: Applications of Mathematical Knowledge.
// Official source: UAT-UK, https://esat-tmua.ac.uk/about-the-tests/tmua-test/ and the official
// TMUA Content Specification
// https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/05/03165619/TMUA_Content_Specification.pdf
// Both retrieved independently by this worker on 2026-10-09.
// UAT-UK states: "Paper 1: Applications of Mathematical Knowledge ... 20 multiple-choice
// questions ... 75 minutes" and that it "Assesses your ability to apply your knowledge of
// mathematics in new situations."
// The topic split below is StudyRoadmap's own organisation of the official content
// specification. UAT-UK publishes no per-topic weightage. Weight values are our prioritisation.
import type { Subject } from '../../types';
export const tmuaPaper1Applications: Subject = {
  id: 'paper-1-applications', name: 'Paper 1 — Applications of Mathematical Knowledge', color: '#0e7490',
  topics: [
    { id: 't1-001', name: 'Algebraic Manipulation and the Quadratic Core', weight: 5, description: 'Factorising, completing the square, roots of a quadratic, manipulating surds and indices, and rearranging formulae without losing a sign or a power.' },
    { id: 't1-002', name: 'Functions, Graphs and Transformations', weight: 5, description: 'Domain and range, composition and inverse, graph transformations including inside and outside the bracket, and reading slope and intercept physically.' },
    { id: 't1-003', name: 'Sequences and Series', weight: 5, description: 'Arithmetic and geometric sequences, the summation notation, standard series expansions, and convergence intuition rather than convergence proof.' },
    { id: 't1-004', name: 'Coordinate Geometry and Vectors', weight: 4, description: 'Straight lines in every form, distance and midpoint, circles, and vectors as a coordinate-free description of geometry problems.' },
    { id: 't1-005', name: 'Trigonometry and the Unit Circle', weight: 5, description: 'Exact trigonometric values, identities, the sine and cosine rules, solving for an angle or a side, and radians as the default in this paper.' },
    { id: 't1-006', name: 'Exponentials and Logarithms', weight: 5, description: 'Exponential growth and decay, log laws, and solving equations where the unknown appears in the exponent by taking logs.' },
    { id: 't1-007', name: 'Differentiation and Its Applications', weight: 5, description: 'Power, product, quotient and chain rules, the derivative as a rate of change and as a gradient, tangents and normals, and basic optimisation.' },
    { id: 't1-008', name: 'Integration and Definite Integration', weight: 5, description: 'Indefinite integration as reverse differentiation, the definite integral as an area, substitution, and evaluating areas under graphs including those crossing the axis.' },
  ],
};
