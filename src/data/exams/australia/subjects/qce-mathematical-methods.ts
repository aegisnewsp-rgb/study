// QCE Mathematical Methods — Queensland Curriculum and Assessment Authority (QCAA)
// Syllabus: Mathematical Methods General senior syllabus (2025) v1.3, for first
// completion in 2026 or beyond.
// Awarding body: Queensland Curriculum and Assessment Authority (QCAA).
// Official source: https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods
// PDF reference: https://www.qcaa.qld.edu.au/downloads/senior-qce/syllabuses/snr_maths_methods_25_syll.pdf
// The 2025 syllabus organises Mathematical Methods around four Units of
// compulsory study, each with a named topic set. NESA does not publish per-Unit
// assessment weightings, so no weight field is set on any row. 4 Units + 4
// major topic groupings gives 8 topics.

import type { Subject } from '../../types';

export const qceMathematicalMethods: Subject = {
  id: 'qce-mathematical-methods',
  name: 'Mathematical Methods',
  color: '#2563eb',
  topics: [
    {
      id: 'qcemeth-001',
      name: 'Unit 1: Algebra, Statistics and Functions',
      description: 'Surds, algebraic manipulation, indices, logarithms; arithmetic and geometric sequences; linear and quadratic functions; introduction to statistics (univariate data, summary statistics, basic probability). First Unit of the four-Unit Mathematical Methods sequence.'
    },
    {
      id: 'qcemeth-002',
      name: 'Unit 2: Calculus',
      description: 'Introduction to differential calculus (limit, derivative, gradient of tangent at a point); differentiation rules (power, sum, product, quotient, chain); introduction to integral calculus (anti-derivative, definite integral as area under a curve). Second Unit of the four-Unit sequence.'
    },
    {
      id: 'qcemeth-003',
      name: 'Unit 3: Further Calculus and Statistics',
      description: 'Further differentiation and applications (related rates, optimisation, curve sketching); further integration (substitution, definite integrals, areas between curves); discrete random variables and the binomial distribution. Third Unit of the four-Unit sequence.'
    },
    {
      id: 'qcemeth-004',
      name: 'Unit 4: Further Calculus, Trigonometry and Statistics',
      description: 'Trigonometric identities, equations and graphs; further calculus (differential equations, motion); continuous random variables, the normal distribution, sampling and confidence intervals. Fourth Unit of the four-Unit sequence and the summative external assessment Unit.'
    },
    {
      id: 'qcemeth-005',
      name: 'Major Topic: Functions and Their Graphs',
      description: 'Linear, quadratic, polynomial, exponential, logarithmic and trigonometric functions; combinations of functions and inverse functions; transformations. Cross-cutting major topic taught across all four Units of Mathematical Methods.'
    },
    {
      id: 'qcemeth-006',
      name: 'Major Topic: Algebra, Number and Structure',
      description: 'Surds, indices, logarithms, sequences and series; algebraic manipulation; the language of mathematical reasoning. Cross-cutting major topic taught across all four Units of Mathematical Methods.'
    },
    {
      id: 'qcemeth-007',
      name: 'Major Topic: Calculus (Differentiation and Integration)',
      description: 'Differentiation (rules, applications, curve sketching); integration (definite integrals, substitution, areas between curves, applications). Cross-cutting major topic taught across Units 2-4.'
    },
    {
      id: 'qcemeth-008',
      name: 'Major Topic: Probability and Statistics',
      description: 'Univariate and bivariate data, summary statistics; probability distributions (binomial, normal); sampling, confidence intervals and hypothesis testing. Cross-cutting major topic taught across all four Units.'
    }
  ]
};