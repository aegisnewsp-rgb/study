import type { Subject } from '../../types';

// Junior Cycle Mathematics — NCCA specification introduced in 2017 and first
// examined in 2019. The course has five strands: a unifying strand (which
// develops mathematical proficiency) and four contextual strands (Number,
// Geometry and Trigonometry, Algebra and Functions, Statistics and
// Probability). Designed for a minimum of 240 hours timetabled engagement
// across the three years of junior cycle; assessment combines a written
// examination, two Classroom-Based Assessments and an Assessment Task. The
// strand rows are kept as orientation rows; the strand content is added below
// as its own revision rows so a block of study maps onto a real group of
// learning outcomes rather than a whole strand.
// Source: NCCA Junior Cycle Mathematics Specification,
// https://curriculumonline.ie/getmedia/6a7f1ff5-9b9e-4d71-8e1f-6d4f932191db/JC_Mathematics_Specification.pdf
// (learning outcomes by strand: https://www.curriculumonline.ie/junior-cycle/junior-cycle-subjects/mathematics/expectations-for-students/)
// Verify the live CBA windows and any in-year specification changes on
// curriculumonline.ie before committing a revision plan.
export const jcMathematics: Subject = {
  id: 'jc-mathematics',
  name: 'Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'jc-math-001', name: 'Unifying Strand', weight: 3 as const, description: 'Mathematical proficiency runs through every other strand rather than sitting beside them. After revising it you can explain, in writing, the reasoning behind a solution and say which of the four strands the idea came from.' },
    { id: 'jc-math-002', name: 'Number', weight: 4 as const, description: 'Orientation row for the number strand, which runs from the real number system through ratio, percentage, indices, surds and financial contexts. After this you can decide which of the three rows below a number question belongs to.' },
    { id: 'jc-math-003', name: 'Geometry and Trigonometry', weight: 4 as const, description: 'Orientation row for the geometry strand, which moves from constructions and congruence through length, area and volume to the circle theorems and trigonometry. After this you can route a diagram to the right row without re-reading the question twice.' },
    { id: 'jc-math-004', name: 'Algebra and Functions', weight: 4 as const, description: 'Orientation row for the algebra strand, which carries a student from an expression through equations and sequences to functions, graphs and an introduction to calculus. After this you can tell whether a question wants manipulation, solving or interpretation.' },
    { id: 'jc-math-005', name: 'Statistics and Probability', weight: 3 as const, description: 'Orientation row for the statistics strand, which splits cleanly into describing data and drawing chance conclusions from it. After this you can separate a data-handling question from a probability question on sight.' },

    { id: 'jc-math-006', name: 'Real Numbers, Ratio, Percentage, Indices and Surds', weight: 3 as const, description: 'After revising this you can place a value in the set that describes it, convert between ratio, percentage and fraction, and apply the index and surd laws to simplify an expression without a sign error.' },
    { id: 'jc-math-007', name: 'Financial Mathematics', weight: 2 as const, description: 'After revising this you can calculate compound interest and depreciation, and decide which of them a consumer or savings question is actually asking for.' },

    { id: 'jc-math-008', name: 'Constructions, Transformations, Congruence and Similarity', weight: 3 as const, description: 'After revising this you can set out and justify a bisector, perpendicular or tangent construction, apply a translation, reflection or rotation, and prove two triangles congruent or similar with the reason stated at each step.' },
    { id: 'jc-math-009', name: 'Pythagoras, Area and Volume', weight: 4 as const, description: 'After revising this you can solve a missing side in any right-angled triangle and use that result to find length, area, surface area or volume of a solid, choosing the correct formula from a diagram.' },
    { id: 'jc-math-010', name: 'Circle Theorems and Coordinate Geometry', weight: 3 as const, description: 'After revising this you can name the circle theorem behind an angle or length relationship and write it into a proof, and describe the slope, midpoint and equation of a line from its graph.' },
    { id: 'jc-math-011', name: 'Right-angled Trigonometry', weight: 3 as const, description: 'After revising this you can pick sine, cosine or tangent from a triangle, calculate the missing side or angle, and solve a multi-step problem where the answer feeds into a second triangle.' },

    { id: 'jc-math-012', name: 'Algebraic Expressions, Formulae and Linear Equations', weight: 4 as const, description: 'After revising this you can expand, factorise and substitute into an expression, rearrange a formula for a required variable, and solve a linear equation or a pair of simultaneous equations and interpret the pair as a point.' },
    { id: 'jc-math-013', name: 'Quadratic Equations, Sequences and Series', weight: 4 as const, description: 'After revising this you can solve a quadratic by factoring, completing the square or the formula and use its roots to sketch a parabola, and find the general term and sum of an arithmetic or geometric sequence.' },
    { id: 'jc-math-014', name: 'Functions, Graphs and Calculus', weight: 4 as const, description: 'After revising this you can read a domain, range and composite from a mapping, sketch a graph from its defining equation, and interpret a rate of change from a graph or a difference quotient.' },

    { id: 'jc-math-015', name: 'Statistical Description and Graphics', weight: 3 as const, description: 'After revising this you can build a frequency table, calculate the measures of central tendency and spread that suit the data, and choose the graphic that shows the distribution honestly rather than the one that looks best.' },
    { id: 'jc-math-016', name: 'Probability', weight: 3 as const, description: 'After revising this you can list an outcome sample space, apply the addition and multiplication rules to a written scenario, and calculate a probability as a fraction, decimal and percentage with the right denominator.' }
  ]
};
