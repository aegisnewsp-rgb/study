// SACE Stage 2 Specialist Mathematics — South Australian Certificate of Education (SACE)
// Subject Outline: Stage 2 Specialist Mathematics Subject Outline.
// Subject code: 2MHS20 sibling (Specialist Mathematics).
// Awarding body: SACE Board of South Australia.
// Official source: https://www.sace.sa.edu.au/web/specialist-mathematics
// The SACE Stage 2 Specialist Mathematics subject outline organises content into
// six Topics, covering mathematical induction, complex numbers, advanced
// functions and graphs, three-dimensional vectors, integration techniques and
// differential equations. Topic names below match the six named Topics in the
// official Subject Outline. The SACE Board does not publish per-Topic
// assessment weighting in the Subject Outline (assessment is 70% school-based
// and 30% external), so no weight field is set on any row.

import type { Subject } from '../../types';

export const saceSpecialistMathematics: Subject = {
  id: 'sace-specialist-mathematics',
  name: 'Specialist Mathematics',
  color: '#7c3aed',
  topics: [
    {
      id: 'sacespec-001',
      name: 'Topic 1: Mathematical Induction',
      description: 'The principle of mathematical induction; rigorous proofs for sums of integer series, divisibility statements and inequality statements over the positive integers. First Topic of the six-Topic SACE Stage 2 Specialist Mathematics course.'
    },
    {
      id: 'sacespec-002',
      name: 'Topic 2: Complex Numbers',
      description: 'Cartesian and polar form of complex numbers, the Argand diagram, modulus and argument, De Moivre\'s theorem and the roots of complex numbers. Second Topic of the six-Topic sequence.'
    },
    {
      id: 'sacespec-003',
      name: 'Topic 3: Functions and Sketching Graphs',
      description: 'Rational functions and asymptotes, the modulus function, composite and inverse functions, and detailed curve sketching using calculus. Third Topic of the six-Topic sequence.'
    },
    {
      id: 'sacespec-004',
      name: 'Topic 4: Vectors in Three Dimensions',
      description: 'Vectors in three dimensions; vector operations; the dot product, the cross product, parametric equations and applications to three-dimensional geometry. Fourth Topic of the six-Topic sequence.'
    },
    {
      id: 'sacespec-005',
      name: 'Topic 5: Integration Techniques',
      description: 'Further integration by substitution, by parts and by partial fractions; definite integrals and applications to areas, volumes and kinematics. Fifth Topic of the six-Topic sequence.'
    },
    {
      id: 'sacespec-006',
      name: 'Topic 6: Rates of Change and Differential Equations',
      description: 'First-order differential equations, separable equations, modelling with differential equations and applications to growth, decay and Newton\'s law of cooling. Sixth Topic and summative Topic of the calculus strand for the external assessment.'
    }
  ]
};