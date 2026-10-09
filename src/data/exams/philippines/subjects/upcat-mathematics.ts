// UPCAT — Mathematics subtest.
// Official source: https://upcat.up.edu.ph/htmls/aboutupcat.html (UP Office of Admissions,
// retrieved 2026-10-09). UP names "Mathematics" as one of four UPCAT subtests and publishes
// no syllabus, question count, duration or weightage for it.
// The topic split below is StudyRoadmap's own organisation, NOT an UP-published blueprint.
// Weight values are our prioritisation only.
import type { Subject } from '../../types';
export const upcatMathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#b45309',
  topics: [
    { id: 'math-001', name: 'Number Sense and Operations', weight: 4, description: 'Fractions, decimals, percentages, ratio, proportion, rates, unit conversion and order of operations — the arithmetic that every other topic quietly depends on.' },
    { id: 'math-002', name: 'Algebra: Equations and Inequalities', weight: 5, description: 'Solving linear and quadratic equations, simultaneous equations, inequalities on a number line, factoring, and translating a worded problem into an expression before touching it.' },
    { id: 'math-003', name: 'Functions and Graphs', weight: 5, description: 'Linear, quadratic and exponential functions; domain and range; reading, sketching and transforming graphs; and the slope-intercept form as a description of a relationship rather than a formula to memorise.' },
    { id: 'math-004', name: 'Geometry and Measurement', weight: 5, description: 'Angles, triangles, circles, polygons, area and perimeter, surface area and volume, similarity and congruence, and the Pythagorean theorem in two- and three-dimensional settings.' },
    { id: 'math-005', name: 'Trigonometry', weight: 4, description: 'Radians and degrees, the sine, cosine and tangent ratios, solving for an angle or a side, and applying them to heights, bearings and periodic motion.' },
    { id: 'math-006', name: 'Statistics and Probability', weight: 4, description: 'Mean, median, mode and spread, frequency tables and histograms, simple probability, combinations, and reading a probability statement carefully enough to know what it does not claim.' },
    { id: 'math-007', name: 'Word Problems and Reasoning', weight: 5, description: 'The long, contextual items that mix several topics — budget, travel, mixture, rate and comparison problems — broken into quantities before any algebra begins.' },
  ],
};
