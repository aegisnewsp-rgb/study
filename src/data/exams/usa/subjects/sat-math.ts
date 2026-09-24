// Digital SAT — Math Section.
// Awarding body: College Board.
// Restructured as a multistage adaptive digital assessment since 2024.
// Administered via Bluebook: 2 modules, 44 total questions, 70 minutes (Desmos calculator permitted throughout).
// Official source: https://satsuite.collegeboard.org/sat

import type { Subject } from '../../types';

export const satMath: Subject = {
  id: 'sat-math',
  name: 'Math',
  color: '#059669',
  topics: [
    { id: 'dsatm-001', name: 'Algebra: Linear Equations in One and Two Variables', weight: 5 as const, description: 'Formulating, solving, and graphing single-variable linear equations and systems of two-variable linear equations with real-world contexts.' },
    { id: 'dsatm-002', name: 'Algebra: Linear Functions and Inequalities', weight: 5 as const, description: 'Interpreting slope and intercepts in linear models, calculating rates of change, and graphing one- and two-variable linear inequalities.' },
    { id: 'dsatm-003', name: 'Advanced Math: Quadratic Equations and Functions', weight: 5 as const, description: 'Factoring quadratics, applying the quadratic formula, completing the square, and identifying vertex and axis of symmetry features.' },
    { id: 'dsatm-004', name: 'Advanced Math: Polynomial, Rational, and Radical Expressions', weight: 4 as const, description: 'Simplifying higher-order polynomial expressions, handling extraneous roots in radical equations, and manipulating rational algebraic terms.' },
    { id: 'dsatm-005', name: 'Advanced Math: Exponential and Nonlinear Functions', weight: 4 as const, description: 'Analyzing exponential growth and decay models, evaluating composite functions, and interpreting asymptotic behavior.' },
    { id: 'dsatm-006', name: 'Problem-Solving & Data Analysis: Ratios, Rates, and Units', weight: 4 as const, description: 'Calculating unit conversions, proportional relationships, scale factors, and percentage increase or decrease in applied contexts.' },
    { id: 'dsatm-007', name: 'Problem-Solving & Data Analysis: Two-Variable Data and Statistics', weight: 4 as const, description: 'Interpreting scatterplots, linear best-fit models, two-way tables, margin of error, and measures of center and spread.' },
    { id: 'dsatm-008', name: 'Geometry & Trigonometry: Area, Volume, and Geometric Angles', weight: 3 as const, description: 'Applying geometric formulas for circle theorems, cylinder and prism volumes, polygon angle sums, and line intersections.' },
    { id: 'dsatm-009', name: 'Geometry & Trigonometry: Right Triangles and Radians', weight: 4 as const, description: 'Solving right triangles using sine, cosine, and tangent ratios, applying the unit circle, and converting between degrees and radians.' }
  ]
};

export default satMath;
