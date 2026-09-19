export const quantitative: Subject = {
  id: 'quantitative', name: 'Quantitative', color: '#6b7280',
  topics: [
    { id: 'quanti-001', name: 'Fundamental Operations and Order of Operations', weight: 5 as const, description: 'Direct-computation items on the four operations and PEMDAS/BODMAS applied to integers, fractions, and decimals without a calculator.' },
    { id: 'quanti-002', name: 'Fractions, Decimals, and Percentages', weight: 5 as const, description: 'Conversion between fraction, decimal, and percent forms and computation of percentage change, increase, and decrease.' },
    { id: 'quanti-003', name: 'Number Properties and Signed Numbers', weight: 4 as const, description: 'Integers, signed numbers, absolute value, divisibility, primes, factors, and multiples as tested in NMAT Quantitative.' },
    { id: 'quanti-004', name: 'Exponents, Roots, and Logarithms', weight: 3 as const, description: 'Laws of exponents, square roots and nth roots, and elementary logarithmic identities used in NMAT items.' },
    { id: 'quanti-005', name: 'Ratios, Proportions, and Rates', weight: 4 as const, description: 'Direct and inverse proportion, unit rates, and conversion problems common in NMAT problem-solving items.' },
    { id: 'quanti-006', name: 'Algebra and Linear Equations', weight: 4 as const, description: 'Translating word problems into linear equations, solving for one or two unknowns, and basic algebraic manipulation.' },
    { id: 'quanti-007', name: 'Word Problems: Rates, Work, and Mixture', weight: 5 as const, description: 'Multi-step NMAT problem-solving items involving rate-time-distance, work-rate, mixture, age, and average problems.' },
    { id: 'quanti-008', name: 'Geometry and Mensuration', weight: 3 as const, description: 'Perimeter, area, and volume of common plane and solid figures as applied to NMAT problem-solving items.' },
    { id: 'quanti-009', name: 'Statistics and Probability', weight: 3 as const, description: 'Mean, median, mode, weighted averages, simple probability, and counting principles tested in the NMAT Quantitative subtest.' },
    { id: 'quanti-010', name: 'Data Interpretation', weight: 4 as const, description: 'Reading tables, bar and line graphs, and pie charts to compute totals, percentages, percent change, and weighted averages.' }
  ]
};
