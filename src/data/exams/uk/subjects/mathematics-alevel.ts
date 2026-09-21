import type { Subject } from '../../types';

// AQA A-level Mathematics (7357) — the published content sections A to S, with
// mechanics and statistics included (this is the standard A-level, not Further
// Mathematics, which is a separate specification).
//
// Source: AQA A-level Mathematics 7357 specification, Section 2.2 "Assessments"
// and Section 3 "Subject content", first teaching 2017. Three written papers,
// each 2 hours, 100 marks and 33⅓% of the A-level (300 marks in total):
// https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification/specification-at-a-glance
//
// The weights below are OUR revision-priority guide (1 = check last, 5 = check
// first), not an official AQA mark weighting. AQA weights the three papers
// equally at 33⅓% each and publishes no per-section percentage, so no number
// here is an AQA weighting. Confirm the live paper structure and any
// specification updates on aqa.org.uk before committing a revision plan to a
// student (uk).
export const mathematicsAlevel: Subject = {
  id: 'mathematics',
  name: 'Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'almath-001', name: 'Proof', weight: 4 as const, description: 'The structure of a mathematical argument, direct proof, proof by exhaustion, disproof by counter-example and proof by contradiction — including the irrationality of √2 and the infinity of primes (section A).' },
    { id: 'almath-002', name: 'Algebra and Functions', weight: 5 as const, description: 'Indices and surds, quadratic functions and their graphs, simultaneous equations, inequalities, polynomials and the factor theorem, partial fractions, function notation and transformations, and modelling with functions (section B). The section most other papers lean on.' },
    { id: 'almath-003', name: 'Coordinate Geometry', weight: 4 as const, description: 'Equation of a straight line, parallel and perpendicular gradients, the equation of a circle, and parametric equations of curves in the (x, y) plane (section C).' },
    { id: 'almath-004', name: 'Sequences and Series', weight: 4 as const, description: 'Arithmetic and geometric sequences, sigma notation, recurrence relations, and the binomial expansion for positive integer and rational n including the validity condition for approximation (section D).' },
    { id: 'almath-005', name: 'Trigonometry', weight: 4 as const, description: 'Radian measure, arc length and sector area, exact values, trigonometric identities and equations, reciprocal and inverse trigonometric functions, and small-angle approximations (section E).' },
    { id: 'almath-006', name: 'Exponentials and Logarithms', weight: 5 as const, description: 'The exponential function and its graph, laws of logarithms, solving exponential equations, modelling growth and decay, and reducing a relationship to linear form with logs (section F).' },
    { id: 'almath-007', name: 'Differentiation', weight: 5 as const, description: 'Differentiation from first principles, standard results, the product, quotient and chain rules, tangents and normals, stationary points and points of inflection, and implicit differentiation (section G).' },
    { id: 'almath-008', name: 'Integration', weight: 5 as const, description: 'Definite and indefinite integration, area under a curve and between curves, integration by substitution and by parts, volumes of revolution, and the trapezium rule as an approximation (section H).' },
    { id: 'almath-009', name: 'Numerical Methods', weight: 2 as const, description: 'Locating a root by sign change, fixed-point iteration and the Newton–Raphson method, and recognising when these methods fail or converge slowly (section I). Smallest section; revise only after the calculus is secure.' },
    { id: 'almath-010', name: 'Vectors', weight: 3 as const, description: 'Vectors in two and three dimensions, magnitude and direction, position vectors, and using vectors to solve geometric problems including proof of collinearity (section J).' },
    { id: 'almath-011', name: 'Statistical Sampling and Data Presentation', weight: 3 as const, description: 'Sampling methods and their limitations, the large data set, and presenting, describing and interpreting data with summary statistics and appropriate diagrams (sections K and L).' },
    { id: 'almath-012', name: 'Probability', weight: 3 as const, description: 'Mutually exclusive and independent events, conditional probability, Venn diagrams and tree diagrams, and applying probability formulae (section M).' },
    { id: 'almath-013', name: 'Statistical Distributions and Hypothesis Testing', weight: 4 as const, description: 'The binomial and normal distributions, the normal approximation to the binomial, and setting up, carrying out and interpreting a hypothesis test against a stated significance level (sections N and O).' },
    { id: 'almath-014', name: 'Quantities, Units and Kinematics', weight: 3 as const, description: 'SI base units for length, time and mass and the derived units for velocity, acceleration, force, weight and moment, plus constant-acceleration formulae, displacement–time and velocity–time graphs, and variable acceleration (sections P and Q).' },
    { id: 'almath-015', name: 'Forces, Newton\u2019s Laws and Moments', weight: 3 as const, description: 'Newton\u2019s laws of motion, resolving forces, equilibrium, connected particles and pulleys, friction, and moments about a point including non-uniform rods (sections R and S).' }
  ]
};

export default mathematicsAlevel;
