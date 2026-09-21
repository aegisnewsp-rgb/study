// WACE Mathematics Methods — School Curriculum and Standards Authority (SCSA)
// Syllabus: Mathematics Methods ATAR Year 12 Syllabus (teaching from January
// 2025 onwards) and Mathematics Methods ATAR Year 11 Syllabus (teaching from
// January 2025 onwards), refreshed for WACE 2026.
// Awarding body: School Curriculum and Standards Authority (SCSA).
// Official sources:
//   https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods
//   https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0006/1211298/Mathematics-Methods-ATAR-Year-12-Syllabus-for-teaching-from-January-2026.PDF
//   https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0006/1232178/Mathematics-Methods-ATAR-Year-11-Syllabus-for-teaching-from-2026.PDF
// The WACE Mathematics Methods ATAR course comprises four Units of study.
// Units 1 and 2 are Year 11 (introductory); Units 3 and 4 are Year 12
// (externally assessed, ATAR-contributing). Unit 3 and Unit 4 each contain
// three named Topics that map onto the Year 12 syllabus examination design.
// Topic names below match the Topics in the official Unit 3 and Unit 4
// sections of the Year 12 syllabus. Weights are not published by SCSA at
// Topic granularity; only Unit 3 and Unit 4 contribute to the ATAR examination.

import type { Subject } from '../../types';

export const waceMathematicsMethods: Subject = {
  id: 'wace-mathematics-methods',
  name: 'Mathematics Methods',
  color: '#2563eb',
  topics: [
    {
      id: 'wacemeth-001',
      name: 'Unit 1: Functions and Probability (Year 11)',
      description: 'Combinations of functions, composite functions and inverse functions; further transformations of graphs; introduction to discrete probability distributions. First Unit of the Year 11-12 Mathematics Methods sequence.'
    },
    {
      id: 'wacemeth-002',
      name: 'Unit 2: Exponential, Circular and Logarithmic Functions, and Differentiation (Year 11)',
      description: 'Exponential, circular (sine, cosine) and logarithmic functions and their transformations; product, quotient and chain rules of differentiation; applications of differentiation to curve sketching and rates of change. Second Unit of the Year 11-12 sequence.'
    },
    {
      id: 'wacemeth-003',
      name: 'Unit 3 Topic 1: Further Differentiation and Applications',
      description: 'Further differentiation rules, related rates of change, optimisation problems and curve sketching using derivatives. First Topic of Unit 3 in the Year 12 Mathematics Methods syllabus and assessed in the ATAR Year 12 examination.'
    },
    {
      id: 'wacemeth-004',
      name: 'Unit 3 Topic 2: Integrals',
      description: 'Anti-differentiation, the fundamental theorem of calculus, definite integrals and the area under a curve; basic substitution. Second Topic of Unit 3 and assessed in the ATAR Year 12 examination.'
    },
    {
      id: 'wacemeth-005',
      name: 'Unit 3 Topic 3: Discrete Random Variables',
      description: 'Discrete random variables and their probability distributions; the binomial distribution; expectation, variance and standard deviation. Third Topic of Unit 3 and assessed in the ATAR Year 12 examination.'
    },
    {
      id: 'wacemeth-006',
      name: 'Unit 4 Topic 1: Logarithmic Functions',
      description: 'Logarithmic functions and their graphs, the natural logarithm, change of base and applications to growth and decay models. First Topic of Unit 4 and assessed in the ATAR Year 12 examination.'
    },
    {
      id: 'wacemeth-007',
      name: 'Unit 4 Topic 2: Further Integration',
      description: 'Further integration by substitution; definite integrals and areas between curves; integration of trigonometric functions and applications to kinematics. Second Topic of Unit 4 and assessed in the ATAR Year 12 examination.'
    },
    {
      id: 'wacemeth-008',
      name: 'Unit 4 Topic 3: Continuous Random Variables and the Normal Distribution',
      description: 'Continuous random variables, the normal distribution and its parameters, the standard normal distribution and confidence intervals for proportions. Third Topic of Unit 4 and assessed in the ATAR Year 12 examination.'
    }
  ]
};