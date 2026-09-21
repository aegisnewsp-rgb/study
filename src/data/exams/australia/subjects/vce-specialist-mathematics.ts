// VCE Specialist Mathematics — Victorian Curriculum and Assessment Authority (VCAA)
// Study Design: VCE Mathematics Study Design (2023), implementing Units 1 and 2
// from 2023 and Units 3 and 4 from 2024.
// Awarding body: Victorian Curriculum and Assessment Authority (VCAA).
// Official source: https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/specialist-mathematics/vce-specialist-mathematics
// The 2023 Study Design organises Specialist Mathematics around four Areas of
// Study in both Units 1-2 and Units 3-4: Functions, relations and graphs;
// Algebra, number and structure; Calculus; Data analysis, probability and
// statistics. Specialist Mathematics extends Methods with vectors, complex
// numbers, kinematics, mechanics and advanced calculus. Topic names below
// match the official Areas of Study headings. No per-Area-of-Study assessment
// weighting is published, so no weight field is set on any row.

import type { Subject } from '../../types';

export const vceSpecialistMathematics: Subject = {
  id: 'vce-specialist-mathematics',
  name: 'Specialist Mathematics',
  color: '#7c3aed',
  topics: [
    {
      id: 'vcespec-001',
      name: 'Functions, Relations and Graphs (Specialist)',
      description: 'Circular functions, combinations of functions and the connection between trigonometric and exponential forms, plus the introduction of vectors as functions of a scalar parameter (position vector, displacement vector, velocity and acceleration as time-dependent vectors). The Specialist extension of the corresponding Methods Area of Study.'
    },
    {
      id: 'vcespec-002',
      name: 'Algebra, Number and Structure (Specialist)',
      description: 'Complex numbers (rectangular, polar and exponential forms), arithmetic and geometric sequences, recurrence relations, matrices and matrix algebra, and the formal logic of mathematical proof. Specialist extension of the corresponding Methods Area of Study.'
    },
    {
      id: 'vcespec-003',
      name: 'Calculus (Specialist)',
      description: 'Further differentiation and integration techniques, differential equations, vector calculus, kinematics in one and two dimensions, the language of mechanics, and applications of calculus to motion under constant and variable forces.'
    },
    {
      id: 'vcespec-004',
      name: 'Data Analysis, Probability and Statistics (Specialist)',
      description: 'Continuous random variables, the normal distribution, the distribution of sample means, confidence intervals, hypothesis testing and the language of statistical inference. Builds on the corresponding Methods Area of Study.'
    },
    {
      id: 'vcespec-005',
      name: 'Vectors and Vector Algebra',
      description: 'Vector notation, vector operations (addition, scalar multiplication, dot product, cross product), unit vectors, projection and resolution of vectors. Tested in Units 3-4 and forms the foundation for mechanics and kinematics questions on Examination 2.'
    },
    {
      id: 'vcespec-006',
      name: 'Mechanics and Kinematics',
      description: 'Motion in one and two dimensions using vector and parametric methods, Newton\'s laws applied to particles on inclined planes and connected bodies, work, energy, power and momentum. Assessed in Units 3-4 Examination 2 and is the most applied strand of Specialist Mathematics.'
    },
    {
      id: 'vcespec-007',
      name: 'Complex Numbers',
      description: 'Imaginary unit, complex arithmetic, Argand diagrams, modulus and argument, De Moivre\'s theorem, roots of complex numbers and applications to polynomial equations. A Units 3-4 topic that draws on the Algebra, Number and Structure Area of Study.'
    }
  ]
};