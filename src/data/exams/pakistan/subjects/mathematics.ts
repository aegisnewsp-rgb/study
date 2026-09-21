// weight = our editorial study-priority guide on a 1-5 scale (5 = core topic that appears
// in nearly every paper, 2 = peripheral). It is a revision-order signal for students, NOT an
// official mark weighting from the examining body.
export const mathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#8b5cf6',
  topics: [
    { id: 'mathem-001', name: 'Number Systems', weight: 2 as const, description: 'Types of numbers, surds, indices and logarithms; the manipulation skills every later topic assumes.' },
    { id: 'mathem-002', name: 'Algebra', weight: 5 as const, description: 'Polynomials, factorisation, partial fractions and simultaneous equations; the largest single block in most papers.' },
    { id: 'mathem-003', name: 'Quadratic Equations', weight: 4 as const, description: 'Solving by factorisation, completing the square and formula; roots, discriminants and forming equations from roots.' },
    { id: 'mathem-004', name: 'Trigonometry', weight: 4 as const, description: 'Ratios, identities and equations; solving triangles and heights-and-distances problems with the sine and cosine rules.' },
    { id: 'mathem-005', name: 'Coordinate Geometry', weight: 5 as const, description: 'Straight lines, slope and distance formulas, then circles and conics; a reliable source of full-length questions.' },
    { id: 'mathem-006', name: 'Geometry', weight: 3 as const, description: 'Circle theorems, congruence, similarity and triangle mensuration; the proofs examiners reuse year after year.' },
    { id: 'mathem-007', name: 'Mensuration', weight: 2 as const, description: 'Areas, perimeters, surface areas and volumes; formula recall plus unit conversion.' },
    { id: 'mathem-008', name: 'Sets and Functions', weight: 3 as const, description: 'Set operations, Venn diagrams, function notation, domain and range, and inverse and composite functions.' },
    { id: 'mathem-009', name: 'Limit and Continuity', weight: 4 as const, description: 'Evaluating limits, indeterminate forms and continuity; the groundwork for both differentiation and integration.' },
    { id: 'mathem-010', name: 'Differentiation', weight: 5 as const, description: 'Rules of differentiation, chain, product and quotient rules; rates of change, tangents and maxima-minima problems.' },
    { id: 'mathem-011', name: 'Integration', weight: 5 as const, description: 'Standard integrals, substitution and by parts; definite integrals and areas under curves.' },
    { id: 'mathem-012', name: 'Statistics', weight: 3 as const, description: 'Mean, median, mode, dispersion and standard deviation; reading and presenting grouped data.' },
    { id: 'mathem-013', name: 'Probability', weight: 2 as const, description: 'Addition and multiplication rules, conditional probability and tree diagrams; simple counting problems.' },
    { id: 'mathem-014', name: 'Matrices and Determinants', weight: 4 as const, description: 'Matrix operations, determinants, inverses, and solving systems of linear equations.' },
    { id: 'mathem-015', name: 'Sequences and Series', weight: 3 as const, description: 'Arithmetic and geometric progressions, nth terms and sums, and infinite geometric series.' }
  ]
};
