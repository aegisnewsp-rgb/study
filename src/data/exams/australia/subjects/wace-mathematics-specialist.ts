// WACE Mathematics Specialist — School Curriculum and Standards Authority (SCSA)
// Syllabus: Mathematics Specialist ATAR Year 12 Syllabus (teaching from January
// 2025 onwards) and Mathematics Specialist ATAR Year 11 Syllabus (teaching from
// January 2025 onwards).
// Awarding body: School Curriculum and Standards Authority (SCSA).
// Official sources:
//   https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist
//   https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0015/1121280/Mathematics-Specialist-ATAR-Year-12-Syllabus-for-teaching-from-January_2025.PDF
//   https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0004/1230673/Mathematics-Specialist-ATAR-Year-11-Syllabus-for-teaching-from-2026.PDF
// The WACE Mathematics Specialist ATAR course comprises four Units of study.
// Units 1 and 2 are Year 11 (introductory); Units 3 and 4 are Year 12
// (externally assessed, ATAR-contributing). The course extends Mathematics
// Methods with vectors, complex numbers, advanced calculus and mechanics.
// Topic names below match the named Topics in the official Unit 3 and Unit 4
// sections of the Year 12 syllabus. Weights are not published by SCSA at
// Topic granularity; only Unit 3 and Unit 4 contribute to the ATAR examination.

import type { Subject } from '../../types';

export const waceMathematicsSpecialist: Subject = {
  id: 'wace-mathematics-specialist',
  name: 'Mathematics Specialist',
  color: '#7c3aed',
  topics: [
    {
      id: 'wacespec-001',
      name: 'Unit 1: Combinatorics, Vectors and Proof (Year 11)',
      description: 'Combinatorics and counting; vectors in two dimensions, vector operations and the language of mathematical proof. First Unit of the Year 11-12 Mathematics Specialist sequence.'
    },
    {
      id: 'wacespec-002',
      name: 'Unit 2: Complex Numbers, Trigonometry and Matrices (Year 11)',
      description: 'Complex numbers in rectangular form, Argand diagrams and modulus/argument; further trigonometry and the inverse trigonometric functions; matrices and matrix algebra. Second Unit of the Year 11-12 sequence.'
    },
    {
      id: 'wacespec-003',
      name: 'Unit 3 Topic 1: Complex Numbers and Vectors',
      description: 'Polar form of complex numbers, De Moivre\'s theorem and applications to roots of polynomial equations; vectors in three dimensions, the dot product and the cross product. First Topic of Unit 3 and assessed in the ATAR Year 12 examination.'
    },
    {
      id: 'wacespec-004',
      name: 'Unit 3 Topic 2: Further Integration and Mechanics',
      description: 'Further integration by parts and substitution; integration applications in kinematics; Newton\'s laws and motion in one and two dimensions. Second Topic of Unit 3 and assessed in the ATAR Year 12 examination.'
    },
    {
      id: 'wacespec-005',
      name: 'Unit 4 Topic 1: Differential Equations and Kinematics',
      description: 'First-order differential equations and separable equations; kinematics of motion in two dimensions using vectors and parametric equations. First Topic of Unit 4 and assessed in the ATAR Year 12 examination.'
    },
    {
      id: 'wacespec-006',
      name: 'Unit 4 Topic 2: Vector Calculus and Dynamics',
      description: 'Vector-valued functions, calculus of vector functions and applications to motion; Newton\'s laws applied to connected bodies and inclined planes. Second Topic of Unit 4 and assessed in the ATAR Year 12 examination.'
    },
    {
      id: 'wacespec-007',
      name: 'Unit 4 Topic 3: Statistical Inference and Hypothesis Testing',
      description: 'Sampling distributions, the central limit theorem, confidence intervals for means and proportions, hypothesis testing for means and proportions and the chi-squared test. Third Topic of Unit 4 and assessed in the ATAR Year 12 examination.'
    }
  ]
};