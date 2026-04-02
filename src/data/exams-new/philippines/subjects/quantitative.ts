import type { Subject } from '../types';

const quantitative: Subject = {
  id: 'quantitative', name: '('quantitative-techniques', 'Quantitative Techniques')', color: '#0ea5e9',
  topics: [
    { id: 'quanti-001', name: 'Topic 1', weight: 3 as const, description: 'Basic Arithmetic — operations on integers, fractions, decimals, ratios, proportions, and percentages for NMAT.' },
    { id: 'quanti-002', name: 'Topic 2', weight: 3 as const, description: 'Word Problems — translating real-life situations into mathematical equations and solving for unknowns.' },
    { id: 'quanti-003', name: 'Topic 3', weight: 3 as const, description: 'Algebra — solving equations, inequalities, polynomials, and algebraic expressions commonly tested on NMAT.' },
    { id: 'quanti-004', name: 'Topic 4', weight: 3 as const, description: 'Geometry — properties of triangles, circles, polygons, and solid figures, including area and perimeter.' },
    { id: 'quanti-005', name: 'Topic 5', weight: 3 as const, description: 'Statistics and Data Interpretation — reading graphs, tables, charts, and calculating mean, median, and mode.' },
    { id: 'quanti-006', name: 'Topic 6', weight: 3 as const, description: 'Probability and Counting — fundamental counting principle, permutations, combinations, and basic probability.' },
    { id: 'quanti-007', name: 'Topic 7', weight: 3 as const, description: 'Number Series — identifying the pattern or rule governing a sequence of numbers to find the missing term.' },
    { id: 'quanti-008', name: 'Topic 8', weight: 3 as const, description: 'Clock and Calendar Problems — solving time-related logic problems frequently appearing in NMAT mental ability.' },
    { id: 'quanti-009', name: 'Topic 9', weight: 3 as const, description: 'Ratio and Proportion — solving direct and inverse proportional problems involving two or more quantities.' },
    { id: 'quanti-010', name: 'Topic 10', weight: 3 as const, description: 'NMAT Quantitative Drill — timed practice using actual NMAT quantitative techniques item types and difficulty level.' }
  ]
};

export { quantitative };
