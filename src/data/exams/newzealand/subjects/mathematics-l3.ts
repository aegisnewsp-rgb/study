// NCEA Level 3 Mathematics (Calculus stream).
// Awarding body: NZQA (New Zealand Qualifications Authority).
// Specification: Mathematics achievement standards, Level 3 (current schedule
// of 15 standards in force for assessment 2024 onwards). The Calculus subject
// at Level 3 is built around differentiations, integration, complex numbers,
// trigonometry, conics and probability distributions. Five standards are
// externally assessed (91577, 91578, 91579, 91584, 91585, 91586), with
// differentiation and integration each carrying 6 credits - the largest single
// credit loads in the schedule. Source: NZQA NCEA Level 3 Mathematics
// achievement standards,
// https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics&view=all
// Re-check the live standard numbers, credit values and assessment methods
// on nzqa.govt.nz before committing any revision plan to a student.

import type { Subject } from '../../types';

export const mathematicsL3: Subject = {
  id: 'mathematics-l3',
  name: 'Mathematics (Calculus)',
  color: '#2563eb',
  topics: [
    { id: 'mathl3-001', name: 'Apply the geometry of conic sections in solving problems (91573)', weight: 3 as const, description: 'Conic sections: circle, ellipse, parabola, hyperbola; equations, foci, directrices, eccentricities; intersections of lines and conics. Internal, 3 credits.' },
    { id: 'mathl3-002', name: 'Apply linear programming methods in solving problems (91574)', weight: 3 as const, description: 'Linear programming: formulate a problem with constraints, graph the feasible region, find the vertices, optimise the objective function. Internal, 3 credits.' },
    { id: 'mathl3-003', name: 'Apply trigonometric methods in solving problems (91575)', weight: 4 as const, description: 'Trigonometric identities, addition and double-angle formulas, equations involving compound angles, and applications in 2D and 3D problems. Internal, 4 credits.' },
    { id: 'mathl3-004', name: 'Use critical path analysis in solving problems (91576)', weight: 2 as const, description: 'Project scheduling: activity networks, earliest and latest start/finish times, float, critical path identification; resource considerations. Internal, 2 credits.' },
    { id: 'mathl3-005', name: 'Apply the algebra of complex numbers in solving problems (91577)', weight: 5 as const, description: 'Complex numbers in rectangular and polar form, modulus and argument, arithmetic operations, De Moivre\'s theorem, roots of complex numbers. External, 5 credits.' },
    { id: 'mathl3-006', name: 'Apply differentiation methods in solving problems (91578)', weight: 5 as const, description: 'Differentiation of polynomial, exponential, logarithmic and trigonometric functions; product, quotient and chain rules; curve sketching, optimisation, related rates, kinematics. External, 6 credits.' },
    { id: 'mathl3-007', name: 'Apply integration methods in solving problems (91579)', weight: 5 as const, description: 'Integration techniques including substitution and by parts; definite integrals, area under and between curves, volumes of revolution, differential equations. External, 6 credits.' },
    { id: 'mathl3-008', name: 'Investigate time series data (91580)', weight: 4 as const, description: 'Time series: trend, seasonal, cyclic and irregular components; moving averages, seasonal indices, deseasonalisation, forecasting and residual analysis. Internal, 4 credits.' },
    { id: 'mathl3-009', name: 'Investigate bivariate measurement data (91581)', weight: 4 as const, description: 'Bivariate data: correlation, linear and non-linear regression, residuals, transformations to linearise data, interpretation of models in context. Internal, 4 credits.' },
    { id: 'mathl3-010', name: 'Use statistical methods to make a formal inference (91582)', weight: 4 as const, description: 'Formal inference: confidence intervals and hypothesis tests for population means and proportions; one-sample and two-sample tests; interpreting p-values. Internal, 4 credits.' },
    { id: 'mathl3-011', name: 'Conduct an experiment to investigate a situation using experimental design principles (91583)', weight: 4 as const, description: 'Plan experiments with controls, replicates, randomisation and blocking; carry out the experiment; analyse data and report findings with appropriate statistical methods. Internal, 4 credits.' },
    { id: 'mathl3-012', name: 'Evaluate statistically based reports (91584)', weight: 4 as const, description: 'Critically evaluate a statistical report: assess study design, sampling, statistical techniques, assumptions, conclusions and limitations. External, 4 credits.' },
    { id: 'mathl3-013', name: 'Apply probability concepts in solving problems (91585)', weight: 4 as const, description: 'Probability rules, conditional probability, Bayes\' theorem, expected value, decision trees; probability applied to risk and quality problems. External, 4 credits.' },
    { id: 'mathl3-014', name: 'Apply probability distributions in solving problems (91586)', weight: 4 as const, description: 'Discrete and continuous probability distributions: binomial, Poisson, normal, uniform; properties, calculations, and applications to real-world contexts. External, 4 credits.' },
    { id: 'mathl3-015', name: 'Apply systems of simultaneous equations in solving problems (91587)', weight: 3 as const, description: 'Systems of three linear equations in three variables solved algebraically; non-linear systems involving quadratics; applications with three or more unknowns. Internal, 3 credits.' }
  ]
};
