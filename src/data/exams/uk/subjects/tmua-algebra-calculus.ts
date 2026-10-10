// TMUA — the pure-mathematics content families used in Paper 1.
// Official source: the UAT-UK TMUA Content Specification, Section 1 Part 1 (MM1-MM8),
// https://uat-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/05/03165619/TMUA_Content_Specification.pdf
// retrieved independently by this worker on 2026-10-09.
// The eight MM families in the official specification are: MM1 Algebra and functions,
// MM2 Sequences and series, MM3 Coordinate geometry in the (x, y)-plane, MM4 Trigonometry,
// MM5 Exponentials and logarithms, MM6 Differentiation, MM7 Integration, MM8 Graphs of
// functions. The grouping below is StudyRoadmap's own; UAT-UK publishes no weightage.
import type { Subject } from '../../types';
export const tmuaAlgebraAndCalculus: Subject = {
  id: 'algebra-calculus-foundations', name: 'Algebra and Calculus Foundations', color: '#15803d',
  topics: [
    { id: 'ac-001', name: 'MM1 Algebra and Functions', weight: 5, description: 'The official MM1 family: polynomial manipulation, equations and inequalities, functions and their domains, and the algebra every later family assumes.' },
    { id: 'ac-002', name: 'MM5 Exponentials and Logarithms', weight: 5, description: 'The official MM5 family: index laws, exponential growth and decay models, log laws, and solving exponential equations by taking logarithms.' },
    { id: 'ac-003', name: 'MM6 Differentiation', weight: 5, description: 'The official MM6 family: the product, quotient and chain rules, implicit and parametric differentiation where needed, and interpreting the result as a gradient or a rate of change.' },
    { id: 'ac-004', name: 'MM7 Integration', weight: 5, description: 'The official MM7 family: reverse differentiation, definite integrals and the area interpretation, substitution, and partial fractions where the specification expects them.' },
    { id: 'ac-005', name: 'MM8 Graphs of Functions', weight: 4, description: 'The official MM8 family: sketching, transforming and interpreting graphs, asymptotes, intersections and the algebra behind them.' },
    { id: 'ac-006', name: 'MM2 Sequences and Series', weight: 4, description: 'The official MM2 family: arithmetic and geometric sequences, series notation, and the standard expansions used in approximations.' },
    { id: 'ac-007', name: 'MM3 Coordinate Geometry', weight: 4, description: 'The official MM3 family: lines in gradient and implicit form, distance, midpoint, division ratios, and the algebra of circles and quadratics.' },
    { id: 'ac-008', name: 'MM4 Trigonometry', weight: 4, description: 'The official MM4 family: radians, exact values, identities, the sine and cosine rules, and solving trigonometric equations generally.' },
  ],
};
