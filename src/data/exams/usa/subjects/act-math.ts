// ACT — Mathematics Section.
// Awarding body: ACT, Inc.
// 60 questions, 60 minutes assessing higher math, essential skills, and mathematical modeling.
// Official source: https://www.act.org/content/act/en/products-and-services/the-act.html

import type { Subject } from '../../types';

export const actMath: Subject = {
  id: 'act-math',
  name: 'Mathematics',
  color: '#059669',
  topics: [
    { id: 'actm-001', name: 'Higher Math: Numbers, Operations, and Complex Numbers', weight: 4 as const, description: 'Manipulating rational exponents, scientific notation, vectors, matrices, and imaginary unit arithmetic.' },
    { id: 'actm-002', name: 'Higher Math: Algebra and Polynomial Functions', weight: 5 as const, description: 'Solving linear and quadratic equations, polynomial factoring, radical equations, and algebraic expressions under timed conditions.' },
    { id: 'actm-003', name: 'Higher Math: Functions and Graph Transformations', weight: 4 as const, description: 'Evaluating composite functions, inverse functions, piecewise definitions, and vertical and horizontal graph shifts.' },
    { id: 'actm-004', name: 'Higher Math: Plane Geometry and Coordinate Geometry', weight: 4 as const, description: 'Calculating midpoints, slopes, circle equations in coordinate planes, and properties of triangles, quadrilaterals, and parallels.' },
    { id: 'actm-005', name: 'Higher Math: Trigonometry and Radians', weight: 4 as const, description: 'Applying trigonometric identities, graphing sine and cosine waves, and solving non-right triangles using Law of Sines and Cosines.' },
    { id: 'actm-006', name: 'Higher Math: Statistics, Probability, and Counting', weight: 4 as const, description: 'Calculating permutations, combinations, conditional probability, normal distribution approximations, and expected values.' },
    { id: 'actm-007', name: 'Essential Skills: Proportions, Percentages, and Averages', weight: 5 as const, description: 'Applying middle-school and early-high-school mathematical concepts to multi-step word problems and unit rates.' },
    { id: 'actm-008', name: 'Mathematical Modeling: Real-World Applications', weight: 4 as const, description: 'Translating verbal descriptions into geometric or algebraic models to optimize variables and interpret solutions.' }
  ]
};

export default actMath;
