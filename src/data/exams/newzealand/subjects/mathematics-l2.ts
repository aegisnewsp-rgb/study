// NCEA Level 2 Mathematics.
// Awarding body: NZQA (New Zealand Qualifications Authority).
// Specification: Mathematics and Mathematics and Statistics achievement
// standards, Level 2 (current schedule of 14 standards in force for
// assessment 2024 onwards). Credits range from 2 to 5 per standard; five
// standards are externally assessed by end-of-year examination (91261, 91262,
// 91267 plus two others depending on the standard). The strand keywords
// (Algebra, Geometry, Trigonometry, Calculus, Probability, Statistics) come
// from the NZC Mathematics and Statistics learning area. Topic weights
// reflect published credit value (91262 carries the largest single credit
// load at 5 External). Source: NZQA NCEA Level 2 Mathematics achievement
// standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics&view=all
// Re-check the live standard numbers, credit values and assessment methods
// on nzqa.govt.nz before committing any revision plan to a student.

import type { Subject } from '../../types';

export const mathematicsL2: Subject = {
  id: 'mathematics-l2',
  name: 'Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'mathl2-001', name: 'Apply co-ordinate geometry methods in solving problems (91256)', weight: 2 as const, description: 'Co-ordinate geometry with straight lines, including gradient, midpoint, distance, parallel and perpendicular lines, and linear equations in two variables. Internal, 2 credits.' },
    { id: 'mathl2-002', name: 'Apply graphical methods in solving problems (91257)', weight: 4 as const, description: 'Graphs of linear, quadratic, cubic, exponential, reciprocal and trigonometric functions; transformations; solving equations graphically; use of the derivative at Level 2. Internal, 4 credits.' },
    { id: 'mathl2-003', name: 'Apply sequences and series in solving problems (91258)', weight: 2 as const, description: 'Arithmetic and geometric sequences and series, including explicit and recursive forms, sum to n terms, and applications to growth and decay. Internal, 2 credits.' },
    { id: 'mathl2-004', name: 'Apply trigonometric relationships in solving problems (91259)', weight: 3 as const, description: 'Sine rule, cosine rule, area of a triangle using trigonometry, and 3D trigonometry; related angle and exact-value trigonometric identities. Internal, 3 credits.' },
    { id: 'mathl2-005', name: 'Apply network methods in solving problems (91260)', weight: 2 as const, description: 'Graph theory: vertices, edges, paths, cycles, trees, spanning trees; shortest path and minimum connector problems; Eulerian and Hamiltonian concepts at Level 2. Internal, 2 credits.' },
    { id: 'mathl2-006', name: 'Apply algebraic methods in solving problems (91261)', weight: 4 as const, description: 'Manipulation of algebraic expressions, expanding and factorising, solving linear, quadratic and simple rational equations, simultaneous equations, and exponential equations. External, 4 credits.' },
    { id: 'mathl2-007', name: 'Apply calculus methods in solving problems (91262)', weight: 5 as const, description: 'Differentiation of polynomial, exponential and trigonometric functions; rates of change, tangent lines, maxima and minima, and kinematics; introduction to anti-differentiation. External, 5 credits.' },
    { id: 'mathl2-008', name: 'Design a questionnaire (91263)', weight: 3 as const, description: 'Design a questionnaire to gather data relevant to a research question; cover question types, sampling strategy, wording, layout, ethical considerations and pilot testing. Internal, 3 credits.' },
    { id: 'mathl2-009', name: 'Use statistical methods to make an inference (91264)', weight: 4 as const, description: 'Bivariate data: scatter plots, correlation, regression lines, residual analysis; making an informal inference about a population from sample data. Internal, 4 credits.' },
    { id: 'mathl2-010', name: 'Conduct an experiment to investigate a situation using statistical methods (91265)', weight: 3 as const, description: 'Plan and carry out an experiment, manage data, select and apply appropriate statistical methods, and report on findings with interpretation. Internal, 3 credits.' },
    { id: 'mathl2-011', name: 'Evaluate a statistically based report (91266)', weight: 2 as const, description: 'Critically evaluate a statistical report: assess the source, sampling, data quality, statistical techniques used, and the validity of the conclusions drawn. Internal, 2 credits.' },
    { id: 'mathl2-012', name: 'Apply probability methods in solving problems (91267)', weight: 4 as const, description: 'Probability concepts, conditional probability, independence, normal and binomial distributions applied in context; expected value and tree diagrams. External, 4 credits.' },
    { id: 'mathl2-013', name: 'Investigate a situation involving elements of chance using a simulation (91268)', weight: 2 as const, description: 'Plan and run a probability simulation, justify the choice of model, carry out a sufficient number of trials, and interpret the results. Internal, 2 credits.' },
    { id: 'mathl2-014', name: 'Apply systems of equations in solving problems (91269)', weight: 2 as const, description: 'Systems of simultaneous linear equations in two or three variables, solved algebraically and graphically; applied problems with constraints. Internal, 2 credits.' }
  ]
};
