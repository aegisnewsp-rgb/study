// HKDSE Mathematics — Compulsory Part + Extended Part (Module 1 and Module 2).
// Awarding body: Hong Kong Examinations and Assessment Authority (HKEAA).
// Source: 2026 HKDSE Mathematics Assessment Framework,
//   https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/math/2026hkdse-e-math.pdf
// and the CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6),
//   https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/Math_CAGuide_e_2015.pdf
// The Compulsory Part is taken by every HKDSE Mathematics candidate and is
// grouped into three strands (Number and Algebra; Measures, Shape and Space;
// Data Handling) plus a Further Learning Unit (Inquiry and Investigation,
// Further Applications). The Extended Part is optional: candidates who take
// it add ONE module — Module 1 (Calculus and Statistics) or Module 2
// (Algebra and Calculus). Topic names below are taken verbatim from the
// Curriculum and Assessment Guide learning-unit lists. Weights reflect the
// Compulsory Part paper weightings (Paper 1 65%, Paper 2 35%) and the size
// of each strand; Extended Part modules carry weight 3 each as a single
// 2.5-hour paper. Re-check the live Compulsory/Extended Part boundary and
// assessment framework on hkeaa.edu.hk before committing a revision plan.

import type { Subject } from '../../types';

export const hkdseMathematics: Subject = {
  id: 'hkdse-mathematics',
  name: 'Mathematics (Compulsory Part)',
  color: '#2563eb',
  topics: [
    { id: 'hkdse-mathem-001', name: 'Number and Algebra — Quadratic Equations and Functions', weight: 5 as const, description: 'Quadratic equations in one unknown (including the discriminant and graphical interpretation); functions and graphs (domain, range, compositions and inverse functions); exponential and logarithmic functions (laws of logarithms, change of base). The largest strand by paper weighting.' },
    { id: 'hkdse-mathem-002', name: 'Number and Algebra — Polynomials, Equations and Sequences', weight: 5 as const, description: 'More about polynomials (factor theorem, remainder theorem, partial fractions where required); more about equations (simultaneous equations, systems with non-linear terms); variations (direct, inverse, joint and partial variation); arithmetic and geometric sequences and their summations; inequalities and linear programming (graphical solution of systems of linear inequalities); more about graphs of functions (transformations, piecewise and modulus graphs).' },
    { id: 'hkdse-mathem-003', name: 'Measures, Shape and Space — Geometry of Circles', weight: 4 as const, description: 'Basic properties of circles (chord, tangent, angle in alternate segment, cyclic quadrilateral); locus in the Cartesian plane (perpendicular bisector, angle bisector, locus of constant distance from a fixed line/point); equations of straight lines and circles (parallel/perpendicular gradients, distance formula, standard form of a circle); more about trigonometry (sine rule, cosine rule, area of a triangle, bearings and heights-and-distances).' },
    { id: 'hkdse-mathem-004', name: 'Data Handling — Probability and Statistics', weight: 4 as const, description: 'Permutation and combination (including cases with repetition and restricted arrangements); more about probability (addition and multiplication rules, conditional probability); measures of dispersion (range, interquartile range, variance, standard deviation for grouped and ungrouped data); uses and abuses of statistics (misleading graphs, sampling bias, misinterpretation of correlation).' },
    { id: 'hkdse-mathem-005', name: 'Further Learning Unit — Inquiry, Investigation and Applications', weight: 3 as const, description: 'Inquiry and investigation (modelling real-world problems, mathematical reasoning and proof); further applications (open-ended problem solving, mathematical communication across the three strands). Tested implicitly across Paper 1 Section B and Paper 2 Section B questions.' },
    { id: 'hkdse-mathem-006', name: 'Extended Part — Module 1: Calculus and Statistics', weight: 3 as const, description: 'Single 2.5-hour paper. Binomial expansion; differentiation of polynomial, exponential, logarithmic and trigonometric functions; second derivative and applications (maxima/minima, curve sketching); integration (indefinite and definite integrals); conditional probability and Bayes\' theorem; discrete random variables and probability distributions (binomial, geometric, Poisson); normal distribution and its applications; point and interval estimation including confidence intervals for a population mean and proportion.' },
    { id: 'hkdse-mathem-007', name: 'Extended Part — Module 2: Algebra and Calculus', weight: 3 as const, description: 'Single 2.5-hour paper. Surds and mathematical induction; binomial theorem; more about trigonometric functions (including inverse trigonometric functions); introduction to the number e; limits and differentiation; applications of differentiation; indefinite and definite integration; applications of definite integration; determinants, matrices and systems of linear equations; vectors including scalar and vector products and applications.' }
  ]
};