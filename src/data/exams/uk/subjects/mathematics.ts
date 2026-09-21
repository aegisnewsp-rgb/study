import type { Subject } from '../../types';

// AQA GCSE Mathematics (8300) — Foundation and Higher tiers share these six
// content strands. Weights reflect AQA's published assessment weighting at the
// higher tier: Algebra is the largest single strand by marks, Ratio/proportion/
// rates of change is second, Geometry and measures third. Probability and
// Statistics are smaller strands and often tested jointly. Source: AQA GCSE
// Mathematics specification 8300 (v1.4, published 2024 for first assessment
// 2026 onwards), https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300
// Verify the live weighting percentages and tier rules on aqa.org.uk before
// committing any revision plan to a student.
export const mathematics: Subject = {
  id: 'mathematics',
  name: 'Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'mathem-001', name: 'Number', weight: 3 as const, description: 'Structure and calculation: place value, four operations with integers, fractions, decimals, percentages, indices, standard form, surds, and bounds. Foundation material that underpins every later strand.' },
    { id: 'mathem-002', name: 'Algebra', weight: 5 as const, description: 'Expressions, formulae, equations (linear, quadratic, simultaneous), inequalities, sequences, graphs of linear and quadratic functions, functions, iteration, and algebraic proof. The single largest content strand at higher tier.' },
    { id: 'mathem-003', name: 'Ratio, Proportion and Rates of Change', weight: 5 as const, description: 'Direct and inverse proportion, ratio in context, compound units, conversion graphs, density, pressure, speed, and exponential growth and decay. Carries significant applied-problem weight on both tiers.' },
    { id: 'mathem-004', name: 'Geometry and Measures', weight: 4 as const, description: 'Angles, polygons, circles, area and volume of 2D and 3D shapes, similarity and congruence, Pythagoras, trigonometry (including sine and cosine rule), vectors, and transformations.' },
    { id: 'mathem-005', name: 'Probability', weight: 3 as const, description: 'Sample space diagrams, Venn diagrams, tree diagrams (independent and dependent events), conditional probability, and expectation. Higher-tier introduces formal notation and algebraic probability.' },
    { id: 'mathem-006', name: 'Statistics', weight: 3 as const, description: 'Data collection, frequency tables, averages and spread, cumulative frequency, histograms, box plots, scatter graphs and correlation, and interpreting distributions. Often paired with Probability on Paper 2.' }
  ]
};
