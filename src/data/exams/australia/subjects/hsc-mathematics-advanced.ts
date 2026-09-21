// HSC Mathematics Advanced — NSW Education Standards Authority (NESA)
// Syllabus: Mathematics Advanced 11–12 Syllabus (2024)
// First HSC examination for this syllabus: 2026.
// Replaces the Mathematics Advanced Stage 6 Syllabus (2017) for Year 11 from 2025
// and Year 12 from 2026.
// Awarding body: NSW Education Standards Authority (NESA).
// Official source: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview
// Year 11 and Year 12 organise content into seven Areas of Study (Functions,
// Trigonometric Functions, Exponential and Logarithmic Functions, Calculus,
// Statistical Analysis, Sequences and Series, Financial Mathematics) plus
// Working Mathematically (reasoning, communication, problem solving) which is
// assessed across every Area of Study. Topic names below match the headings on
// the official curriculum overview page; NESA does not publish a per-Area-of-Study
// assessment weighting, so no weight field is set on any row.

import type { Subject } from '../../types';

export const hscMathematicsAdvanced: Subject = {
  id: 'hsc-mathematics-advanced',
  name: 'Mathematics Advanced',
  color: '#2563eb',
  topics: [
    {
      id: 'hscmathadv-001',
      name: 'Functions',
      description: 'Working with functions (domain, range, notation, transformations), graph transformations of linear, quadratic, cubic and reciprocal functions, and further graph transformations and modelling. Functions underpin every later Area of Study and are assessed across both Year 11 and Year 12 HSC papers.'
    },
    {
      id: 'hscmathadv-002',
      name: 'Trigonometric Functions',
      description: 'Trigonometry and measure of angles (radians, exact values, identities), trigonometric identities and equations, and the sine and cosine rules. Tested as a stand-alone topic and as the engine for sinusoidal modelling in Year 12.'
    },
    {
      id: 'hscmathadv-003',
      name: 'Exponential and Logarithmic Functions',
      description: 'Index laws, exponential function graphs, natural exponential, logarithm laws, change of base, and solving exponential and logarithmic equations. Applied to growth and decay models in both Year 11 and Year 12.'
    },
    {
      id: 'hscmathadv-004',
      name: 'Calculus',
      description: 'Introduction to differentiation (Year 11), differential calculus, integral calculus, and applications of calculus (Year 12). The largest single content strand by HSC mark share, including rates of change, curve sketching, optimisation and areas under curves.'
    },
    {
      id: 'hscmathadv-005',
      name: 'Statistical Analysis',
      description: 'Probability and data (Year 11) and random variables including discrete and continuous probability distributions, the normal distribution, sampling and confidence intervals (Year 12). Assessed in both HSC examination papers.'
    },
    {
      id: 'hscmathadv-006',
      name: 'Sequences and Series',
      description: 'Arithmetic sequences and series, geometric sequences and series, recurrence relations, limiting sum of geometric series and their applications. Tested as a Year 12 topic and supports financial mathematics modelling.'
    },
    {
      id: 'hscmathadv-007',
      name: 'Financial Mathematics',
      description: 'Simple and compound interest, future value and present value, depreciation, loans and annuities, and effective annual rate of interest. Year 12 topic that combines percentage, exponential and series reasoning on the HSC paper.'
    }
  ]
};