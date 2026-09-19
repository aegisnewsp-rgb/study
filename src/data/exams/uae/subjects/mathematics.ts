export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Algebra', weight: 5 as const, description: 'Linear, quadratic, rational and simultaneous equations, inequalities and expressions - the most heavily weighted algebra foundation.' },
    { id: 'mathem-002', name: 'Statistics and Probability', weight: 5 as const, description: 'Mean, median, mode, variance, probability rules, conditional probability and basic distributions - heavy data-analysis component.' },
    { id: 'mathem-003', name: 'Geometry', weight: 4 as const, description: 'Euclidean plane geometry, angles, congruent and similar triangles, circles, polygons and area/perimeter calculations.' },
    { id: 'mathem-004', name: 'Quantitative Reasoning', weight: 4 as const, description: 'Word problems, ratios, proportions, percentages, rate-time-distance and mixture problems typical of CAT math.' },
    { id: 'mathem-005', name: 'Trigonometry', weight: 4 as const, description: 'Trigonometric ratios, identities, sine and cosine rules, heights and distances, and graph sketching.' },
    { id: 'mathem-006', name: 'Coordinate Geometry', weight: 3 as const, description: 'Straight lines, slope, distance and midpoint formulas, equations of lines, circles and parabolas in the plane.' },
    { id: 'mathem-007', name: 'Functions and Graphs', weight: 3 as const, description: 'Linear, quadratic, exponential and logarithmic functions, domain, range, transformations and inverse functions.' },
    { id: 'mathem-008', name: 'Sequences and Series', weight: 3 as const, description: 'Arithmetic and geometric progressions, sum formulas, recurrence relations and basic sigma notation.' },
    { id: 'mathem-009', name: 'Polynomials', weight: 3 as const, description: 'Factor and remainder theorems, roots, partial fractions, polynomial division and identities.' },
    { id: 'mathem-010', name: 'Number Theory', weight: 2 as const, description: 'Divisibility, prime factorisation, HCF/LCM, modular arithmetic and basic counting principles.' },
    { id: 'mathem-011', name: 'Mensuration', weight: 2 as const, description: 'Areas and volumes of 2D and 3D shapes including cylinder, cone, sphere and combined solids.' },
    { id: 'mathem-012', name: 'Logic and Sets', weight: 2 as const, description: 'Set operations, Venn diagrams, logical connectives, truth tables and basic proof reasoning.' }
  ]
};