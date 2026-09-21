// VCE Mathematical Methods — Victorian Curriculum and Assessment Authority (VCAA)
// Study Design: VCE Mathematics Study Design (2023), implementing Units 1 and 2
// from 2023 and Units 3 and 4 from 2024.
// Awarding body: Victorian Curriculum and Assessment Authority (VCAA).
// Official source: https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/mathematical-methods/vce-mathematical-methods
// The 2023 Study Design organises content across four Areas of Study in both
// Units 1-2 and Units 3-4: Functions, relations and graphs; Algebra, number
// and structure; Calculus; Data analysis, probability and statistics. The Unit
// 3-4 Areas of Study must be covered in progression from Unit 3 to Unit 4.
// Topic names below match the Areas of Study headings in the official Study
// Design. Each Area of Study is taught in both Unit 1 and Unit 2 (introductory
// level) and Unit 3 and Unit 4 (Year 12 ATAR level). The topic list captures
// both the Units 1-2 and the Units 3-4 coverage in the same row to keep the
// subject size at the official Areas of Study granularity. No per-Area-of-Study
// assessment weighting is published by the Study Design, so no weight field is
// set on any row.

import type { Subject } from '../../types';

export const vceMathematicalMethods: Subject = {
  id: 'vce-mathematical-methods',
  name: 'Mathematical Methods',
  color: '#2563eb',
  topics: [
    {
      id: 'vcemeth-001',
      name: 'Functions, Relations and Graphs',
      description: 'Linear, quadratic, polynomial, exponential, logarithmic and circular (sine and cosine) functions; combinations and composite functions; inverse functions; transformations and the graphical relationship between a function and its inverse. Assessed across both Units 1-2 and Units 3-4 (ATAR) and is the largest single content strand by examination weight.'
    },
    {
      id: 'vcemeth-002',
      name: 'Algebra, Number and Structure',
      description: 'Algebraic manipulation, exact values, indices, surds, logarithms, sequences and series, and the formal language of mathematical reasoning. Taught progressively in Units 1-2 then extended in Units 3-4.'
    },
    {
      id: 'vcemeth-003',
      name: 'Calculus',
      description: 'Rates of change and the derivative (Unit 1), anti-derivatives and the definite integral (Unit 2), then differentiation and integration of combined functions, the chain rule and the product rule, differential equations, and applications of calculus to optimisation, kinematics and area under curves (Units 3-4).'
    },
    {
      id: 'vcemeth-004',
      name: 'Data Analysis, Probability and Statistics',
      description: 'Univariate and bivariate data, correlation and regression, the normal distribution, discrete random variables, the binomial distribution, sampling and confidence intervals (Units 3-4). Combined with the Calculus Area of Study for the second examination paper.'
    }
  ]
};