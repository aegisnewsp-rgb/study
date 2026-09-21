// QCE Specialist Mathematics — Queensland Curriculum and Assessment Authority (QCAA)
// Syllabus: Specialist Mathematics General senior syllabus (2025), implementing
// in 2025 for first completion 2026 or beyond.
// Awarding body: Queensland Curriculum and Assessment Authority (QCAA).
// Official source: https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics
// Specialist Mathematics is the highest-tier mathematics course in the QCE and
// extends Mathematical Methods with vectors, complex numbers, advanced calculus
// and mechanics. The 2025 syllabus organises Specialist Mathematics around four
// Units, with topics that match the official syllabus headings. NESA does not
// publish per-Unit assessment weightings, so no weight field is set on any row.
// 4 Units + 4 major topic groupings gives 8 topics.

import type { Subject } from '../../types';

export const qceSpecialistMathematics: Subject = {
  id: 'qce-specialist-mathematics',
  name: 'Specialist Mathematics',
  color: '#7c3aed',
  topics: [
    {
      id: 'qcespec-001',
      name: 'Unit 1: Surds, Algebra, Functions and Probability',
      description: 'Surds, algebraic manipulation, indices and logarithms; linear and quadratic functions, transformations and the language of function notation; elementary probability and counting. First Unit of the four-Unit Specialist Mathematics sequence.'
    },
    {
      id: 'qcespec-002',
      name: 'Unit 2: Calculus and Further Functions',
      description: 'Further functions (cubic, quartic, exponential, logarithmic and simple trigonometric); introduction to differential calculus (limit, derivative, gradient of tangent); elementary integral calculus (anti-derivative, area under a curve). Second Unit of the four-Unit sequence.'
    },
    {
      id: 'qcespec-003',
      name: 'Unit 3: Further Calculus and Introduction to Statistics',
      description: 'Further differentiation and applications (chain, product, quotient rules); further integration (substitution, definite integrals, areas between curves); discrete random variables and the binomial distribution. Third Unit of the four-Unit sequence.'
    },
    {
      id: 'qcespec-004',
      name: 'Unit 4: Further Calculus, Trigonometry and Statistics',
      description: 'Further calculus (differential equations, related rates, optimisation); trigonometric identities, equations and graphs; continuous random variables, the normal distribution, sampling and confidence intervals. Fourth Unit of the four-Unit sequence and the summative Unit for external assessment.'
    },
    {
      id: 'qcespec-005',
      name: 'Major Topic: Vectors and Mechanics',
      description: 'Vectors in two and three dimensions, vector operations, dot and cross products, parametric equations; kinematics, Newton\'s laws, connected bodies, work, energy and momentum. Cross-cutting major topic taught across Units 3 and 4.'
    },
    {
      id: 'qcespec-006',
      name: 'Major Topic: Complex Numbers',
      description: 'Imaginary unit, complex arithmetic, Argand diagrams, modulus and argument, De Moivre\'s theorem and applications to roots of polynomial equations. Cross-cutting major topic taught across Units 3 and 4.'
    },
    {
      id: 'qcespec-007',
      name: 'Major Topic: Proof and Mathematical Reasoning',
      description: 'Direct and indirect proof, proof by contradiction, mathematical induction, the language of mathematical argument and the formal logic of proof. Cross-cutting major topic taught across all four Units.'
    },
    {
      id: 'qcespec-008',
      name: 'Major Topic: Statistical Inference',
      description: 'Sampling distributions, the central limit theorem, confidence intervals for means and proportions, hypothesis testing and the chi-squared test for independence. Cross-cutting major topic taught primarily in Unit 4.'
    }
  ]
};