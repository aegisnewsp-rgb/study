// Kuwait Secondary Certificate, Mathematics subject — awarded by the Kuwait
// Ministry of Education under the 2026/2027 secondary "tracks" regulation
// (Thanawiya Amma / General Secondary Certificate). Mathematics is one of the
// eight official paths (المسار العلمي / Mathematics track) and is also a
// foundation subject taught from Grade 10 to Grade 12 across all tracks.
// Topic strands here are taken from the Kuwait National Curriculum framework
// (Ministry of Education, Curriculum Development Sector) as referenced in the
// ABEGS State of Kuwait Intermediate and Secondary Curriculum review and from
// the Kuwait MOE official Mathematics curriculum pages, with weights
// reflecting how the marks tend to be distributed at the final Grade 12 exam
// — algebra/fundamentals, geometry, trigonometry, calculus, statistics and
// probability, and discrete mathematics each carry multiple units at terminal
// level. Source: Kuwait MOE official curriculum portal,
// https://www.moe.edu.kw/ and the published Secondary Curriculum framework
// via the ABEGS Kuwait curriculum review,
// https://cdn-files.abegs.org/abegs-marsad-prod/uploads/858632c1-3623-4790-a595-f11d80e5f4ef.pdf
// Re-check the live track regulation and the Grade 12 terminal-exam weighting
// on moe.edu.kw before committing any revision plan to a student.

import type { Subject } from '../../types';

export const kscMathematics: Subject = {
  id: 'ksc-mathematics',
  name: 'Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'kscmath-001', name: 'Algebra and Number Theory', weight: 5 as const, description: 'Linear and quadratic equations and inequalities, simultaneous systems, polynomial identities, partial fractions, indices, surds, sequences (AP, GP), binomial theorem and elementary number theory — the largest algebra strand at Thanawiya Amma terminal.' },
    { id: 'kscmath-002', name: 'Geometry and Trigonometry', weight: 4 as const, description: 'Euclidean plane and solid geometry, circle theorems, similarity and congruence, vectors in the plane, sine/cosine/tangent ratios, sine and cosine rules, and the angles/height-and-distance applications.' },
    { id: 'kscmath-003', name: 'Calculus', weight: 4 as const, description: 'Limits, derivatives of polynomial, trigonometric, exponential and logarithmic functions, applications to tangents, rates of change and maxima/minima, definite integrals and area-under-curve problems.' },
    { id: 'kscmath-004', name: 'Statistics and Probability', weight: 4 as const, description: 'Descriptive statistics (mean, median, mode, variance, standard deviation), frequency distributions, regression and correlation, and probability rules including conditional probability and Bayes\' theorem.' },
    { id: 'kscmath-005', name: 'Coordinate Geometry', weight: 3 as const, description: 'Straight-line equations, distance and midpoint formulas, circle equations, parabolas, ellipses, hyperbolas, and the standard forms of conic sections in the Cartesian plane.' },
    { id: 'kscmath-006', name: 'Functions and Graphs', weight: 3 as const, description: 'Domain and range, linear, quadratic, exponential, logarithmic and trigonometric functions, transformations, inverse functions, and interpreting graphs in applied problems.' },
    { id: 'kscmath-007', name: 'Matrices and Determinants', weight: 3 as const, description: 'Matrix operations, determinants, inverse matrices, solutions of linear systems by Cramer\'s rule and matrix inversion — covered at terminal level for the Mathematics and Sciences tracks.' }
  ]
};