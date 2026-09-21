// SAT Math — College Board digital SAT (international).
// Awarding body: College Board. Test specifications from the Digital SAT
// Suite Specifications Overview. Two modules of 22 questions each (20
// operational + 2 pretest), 35 minutes per module, 70 minutes total. Topics
// here are the four published "content domains" of the SAT Math section
// (Heart of Algebra, Problem Solving and Data Analysis, Passport to
// Advanced Math, and Geometry and Trigonometry). Source: The Digital SAT
// Suite of Assessments Specifications Overview,
// https://satsuite.collegeboard.org/media/pdf/digital-sat-test-spec-overview.pdf
// Re-check the live domain weighting and calculator policy on
// satsuite.collegeboard.org before committing any revision plan to a student.

import type { Subject } from '../../types';

export const satMath: Subject = {
  id: 'sat-math',
  name: 'Math',
  color: '#10b981',
  topics: [
    { id: 'satm-001', name: 'Heart of Algebra — Linear Equations and Inequalities', weight: 5 as const, description: 'Linear equations in one and two variables, systems of linear equations, linear inequalities, absolute value equations and inequalities, and the graphical interpretation of linear functions — the largest Math domain by share of items.' },
    { id: 'satm-002', name: 'Heart of Algebra — Functions and Function Notation', weight: 4 as const, description: 'Interpreting and using function notation, evaluating functions, the language of functions (input, output, domain, range), linear and piecewise functions, and composing functions.' },
    { id: 'satm-003', name: 'Problem Solving and Data Analysis — Ratios, Rates and Percentages', weight: 4 as const, description: 'Ratio and proportion, percentage change, unit rates, rate-time-distance problems, and direct/inverse variation in real-world contexts.' },
    { id: 'satm-004', name: 'Problem Solving and Data Analysis — Statistics and Probability', weight: 4 as const, description: 'One-variable and two-variable statistics: mean, median, mode, range, standard deviation, scatterplots and line of best fit, conditional probability, independent events, and basic probability rules.' },
    { id: 'satm-005', name: 'Passport to Advanced Math — Quadratics and Polynomials', weight: 5 as const, description: 'Solving quadratic equations by factoring, completing the square and the quadratic formula; the discriminant; polynomial arithmetic; the remainder theorem; graphs of quadratic and polynomial functions.' },
    { id: 'satm-006', name: 'Passport to Advanced Math — Exponential, Radical and Rational Expressions', weight: 4 as const, description: 'Equivalent expressions with exponents, radicals and rational denominators; growth and decay (exponential functions); function transformation; and inverse functions.' },
    { id: 'satm-007', name: 'Geometry and Trigonometry', weight: 4 as const, description: 'Area and volume of plane and solid figures, coordinate geometry (lines, distance, midpoint), circle properties, similarity, right-triangle trigonometry (sine, cosine, tangent) and the unit circle.' }
  ]
};