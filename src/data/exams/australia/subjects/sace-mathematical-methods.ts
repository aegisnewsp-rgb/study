// SACE Stage 2 Mathematical Methods — South Australian Certificate of Education (SACE)
// Subject Outline: Stage 2 Mathematical Methods Subject Outline.
// Subject code: 2MHS20 (20 credits).
// Awarding body: SACE Board of South Australia.
// Official source: https://www.sace.sa.edu.au/en_US/web/mathematical-methods
// Subject Outline download: https://www.sace.sa.edu.au/documents/652891/3411623/Draft+Mathematical+Methods+Subject+Outline.pdf
// The SACE Stage 2 Mathematical Methods subject outline organises content into
// six Topics, interleaving a calculus strand (Topics 1, 3, 4) with a statistics
// strand (Topics 2, 5, 6). Topic names below match the six named Topics in the
// official Subject Outline. The SACE Board does not publish per-Topic
// assessment weighting in the Subject Outline (assessment is 70% school-based
// and 30% external), so no weight field is set on any row.

import type { Subject } from '../../types';

export const saceMathematicalMethods: Subject = {
  id: 'sace-mathematical-methods',
  name: 'Mathematical Methods',
  color: '#2563eb',
  topics: [
    {
      id: 'sacemeth-001',
      name: 'Topic 1: Further Differentiation and Applications',
      description: 'Extends differentiation to products, quotients and composite functions, then applies the second derivative, curve sketching and optimisation to functions in applied contexts. First Topic of the six-Topic SACE Stage 2 Mathematical Methods course.'
    },
    {
      id: 'sacemeth-002',
      name: 'Topic 2: Discrete Random Variables',
      description: 'Probability distributions, expected value, variance and standard deviation for discrete random variables; the Bernoulli and binomial distributions and their applications. Second Topic and the first Topic of the statistics strand.'
    },
    {
      id: 'sacemeth-003',
      name: 'Topic 3: Integral Calculus',
      description: 'The definite integral as a limit of sums, the fundamental theorem of calculus, anti-differentiation, integration by substitution and applications to areas between curves. Third Topic and the second Topic of the calculus strand.'
    },
    {
      id: 'sacemeth-004',
      name: 'Topic 4: Logarithmic Functions',
      description: 'Logarithmic functions and their graphs, the natural logarithm, change of base and applications to growth and decay models. Fourth Topic and the third Topic of the calculus strand.'
    },
    {
      id: 'sacemeth-005',
      name: 'Topic 5: Continuous Random Variables and the Normal Distribution',
      description: 'Continuous random variables, the normal distribution and its parameters, the standard normal distribution and calculations of probability. Fifth Topic and the second Topic of the statistics strand.'
    },
    {
      id: 'sacemeth-006',
      name: 'Topic 6: Sampling and Confidence Intervals',
      description: 'Sampling distributions, the central limit theorem, confidence intervals for means and proportions, and the language of statistical inference. Sixth Topic and the third Topic of the statistics strand; the summative Topic of the statistics strand for the external assessment.'
    }
  ]
};