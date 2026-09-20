import type { Subject } from '../../types';

// Junior Cycle Mathematics — NCCA specification introduced in 2017 and first
// examined in 2019. The course has five strands: a unifying strand (which
// develops mathematical proficiency) and four contextual strands (Number,
// Geometry and Trigonometry, Algebra and Functions, Statistics and
// Probability). Designed for a minimum of 240 hours timetabled engagement
// across the three years of junior cycle; assessment combines a written
// examination, two Classroom-Based Assessments and an Assessment Task.
// Source: NCCA Junior Cycle Mathematics Specification,
// https://www.curriculumonline.ie/junior-cycle/junior-cycle-subjects/mathematics/
// Verify the live CBA windows and any in-year specification changes on
// curriculumonline.ie before committing a revision plan.
export const jcMathematics: Subject = {
  id: 'jc-mathematics',
  name: 'Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'jc-math-001', name: 'Unifying Strand', weight: 3 as const, description: 'Mathematical proficiency across the course - communicating, reasoning, applying mathematical ideas and representing problems - integrated into every other strand.' },
    { id: 'jc-math-002', name: 'Number', weight: 4 as const, description: 'The real number system, sets, arithmetic with integers and rationals, decimals, percentages, ratio and proportion, indices, surds, financial mathematics including compound interest and depreciation.' },
    { id: 'jc-math-003', name: 'Geometry and Trigonometry', weight: 4 as const, description: 'Constructions, transformations, Pythagoras, congruence and similarity, areas and volumes, circle theorems, coordinate geometry of the line, and right-angled trigonometry with sine, cosine and tangent.' },
    { id: 'jc-math-004', name: 'Algebra and Functions', weight: 4 as const, description: 'Expressions, formulae, linear and quadratic equations and inequalities, simultaneous equations, sequences and series (arithmetic and geometric), functions and their graphs, and introductory calculus concepts at Higher level.' },
    { id: 'jc-math-005', name: 'Statistics and Probability', weight: 3 as const, description: 'Data handling - frequency tables, averages and spread, histograms, cumulative frequency, box plots and scatter graphs - together with probability, sample spaces and elementary combinatorics.' }
  ]
};
