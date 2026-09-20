import type { Subject } from '../../types';

// Leaving Certificate Mathematics — NCCA syllabus for examinations from 2015
// onwards (current specification, applies to candidates sitting in 2026 and
// 2027 until the redevelopment rolls out in September 2027). Five strands are
// assessed at three levels — Foundation (1 paper), Ordinary (2 papers) and
// Higher (2 papers). The strand titles below are taken verbatim from the
// syllabus PDF (curriculumonline.ie/getmedia/.../SCSEC25_Maths_syllabus_*).
// Source: NCCA Leaving Certificate Mathematics syllabus, examination from
// 2015, https://ncca.ie/en/resources/lc-mathematics-syllabus/
// Verify the live paper pattern and any post-2027 specification changes on
// curriculumonline.ie before committing a revision plan to a student.
export const lcMathematics: Subject = {
  id: 'lc-mathematics',
  name: 'Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'lc-math-001', name: 'Statistics and Probability', weight: 4 as const, description: 'Descriptive statistics, sampling, correlation and regression, probability rules and distributions, including the binomial and normal distributions. Foundation tier introduces counts and simple probability.' },
    { id: 'lc-math-002', name: 'Geometry and Trigonometry', weight: 4 as const, description: 'Synthetic and coordinate geometry of the line and circle, transformations, constructions, the geometry of triangles (including sine and cosine rule), and 2D/3D trigonometry with Pythagoras. Higher tier extends to 3D problems.' },
    { id: 'lc-math-003', name: 'Number', weight: 3 as const, description: 'Arithmetic, percentages, indices, surds, complex numbers, financial mathematics (compound interest, APR, depreciation, amortisation) and counting principles including permutations and combinations.' },
    { id: 'lc-math-004', name: 'Algebra', weight: 5 as const, description: 'Expressions, formulae, equations (linear, simultaneous, quadratic), inequalities, sequences and series (arithmetic, geometric), the binomial theorem, and algebraic proofs. Largest strand by marks at Higher level.' },
    { id: 'lc-math-005', name: 'Functions', weight: 5 as const, description: 'Functions as mappings, graphs of polynomial, exponential, logarithmic and trigonometric functions, transformations, calculus (differentiation and integration) and their application to rates, maxima/minima and area. Single largest Higher-level component.' }
  ]
};
