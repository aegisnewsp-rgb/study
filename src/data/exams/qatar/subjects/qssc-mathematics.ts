// Qatar General Secondary Education Certificate — Mathematics.
// Awarding body: Ministry of Education and Higher Education (MoEHE), State of
// Qatar. Source: Qatar MoEHE Curriculum Standards for Mathematics, KG to Grade
// 12 (MoEHE, 2018; reproduced on the ABEGS Marsad regional education archive),
// https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf
// The MoEHE standards document organises secondary Mathematics (Grades 10-12)
// into three content strands, with two parallel tracks at upper secondary:
// the Foundational track (التأسيسي) and the Advanced track (المتقدم). Strand
// weights at Grade 12 Advanced published by MoEHE: Algebra and Calculus ~69
// percent, Geometry and Trigonometry ~14 percent, Data Handling ~17 percent
// (p.29 of the source PDF). Topics below are taken from the published Grade
// 10-12 sub-topic matrices (pp.50-61) and grouped into study-ready units.
// Re-check the live assessment weighting, the new unified Grade 10 science
// curriculum introduced from the 2026-2027 academic year, and any in-year
// track changes on https://www.edu.gov.qa/ before committing any revision
// plan to a student.

import type { Subject } from '../../types';

export const qsscMathematics: Subject = {
  id: 'qssc-mathematics',
  name: 'Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'qsscmath-001', name: 'Algebra — Quadratics and Polynomials', weight: 5 as const, description: 'Quadratic equations and inequalities, polynomial identities, the Remainder and Factor Theorems, polynomial long division, partial fractions, and the algebraic manipulation that underpins calculus and advanced functions at Grade 12 advanced track.' },
    { id: 'qsscmath-002', name: 'Functions, Graphs and Transformations', weight: 5 as const, description: 'Quadratic, reciprocal, absolute-value, square-root, cube-root, exponential, logarithmic and trigonometric functions, operations on functions, and geometric transformations (translations, reflections, stretches) on function graphs.' },
    { id: 'qsscmath-003', name: 'Sequences, Series and the Binomial Theorem', weight: 4 as const, description: 'Arithmetic and geometric progressions, finite and infinite series, sigma notation, the Binomial theorem for positive integer exponents, permutations and combinations as preparation for probability and advanced algebra.' },
    { id: 'qsscmath-004', name: 'Exponents, Logarithms and Complex Numbers', weight: 4 as const, description: 'Laws of exponents and logarithms, the natural exponential and Euler\'s number e, the change-of-base formula, complex numbers in rectangular and polar form, De Moivre\'s theorem and applications to roots of unity.' },
    { id: 'qsscmath-005', name: 'Calculus — Differentiation', weight: 5 as const, description: 'Limits and continuity, the definition of the derivative, differentiation rules (power, product, quotient, chain), implicit differentiation, derivatives of trigonometric, exponential and logarithmic functions, critical points, optimisation and related rates.' },
    { id: 'qsscmath-006', name: 'Calculus — Integration and Differential Equations', weight: 5 as const, description: 'The definite and indefinite integral, the Fundamental Theorem of Calculus, integration by substitution, parts and partial fractions, area-under-curve and volume-of-revolution problems, and elementary separable differential equations at advanced track.' },
    { id: 'qsscmath-007', name: 'Geometry — Similarity, Circles and Vectors', weight: 4 as const, description: 'Triangle similarity, circle theorems (tangent-chord, cyclic quadrilateral, alternate segment), the circle equation, vectors in two and three dimensions at Grade 12 advanced, scalar and vector products, and geometric proofs.' },
    { id: 'qsscmath-008', name: 'Trigonometry — Identities, Equations and Applications', weight: 4 as const, description: 'Trigonometric ratios in degrees and radians, the Law of Sines and Law of Cosines, Heron\'s formula for area, sum/difference and double-angle identities, and solving trigonometric equations at advanced track.' },
    { id: 'qsscmath-009', name: 'Statistics — Central Tendency, Dispersion and Regression', weight: 3 as const, description: 'Mean, median, mode, range, variance and standard deviation for grouped and ungrouped data, cumulative frequency, correlation and the regression line, and designing statistical studies with margin of error.' },
    { id: 'qsscmath-010', name: 'Probability — Rules, Conditional Probability and Distributions', weight: 3 as const, description: 'Sample space, compound events (union, intersection, complement), independent and dependent events, conditional probability, tree diagrams and probability tables, and the binomial and normal distributions with z-scores at advanced track.' }
  ]
};
