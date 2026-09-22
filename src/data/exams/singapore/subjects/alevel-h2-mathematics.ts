// Singapore-Cambridge GCE A-Level H2 Mathematics — syllabus code 9758.
//
// Awarding body: Singapore Examinations and Assessment Board (SEAB) in
// collaboration with Cambridge International Education, under the
// Singapore-Cambridge brand. MOE Curriculum Planning and Development
// Division designs the content; SEAB and Cambridge jointly administer.
//
// The 9758 syllabus is the two-year junior-college H2 Mathematics subject
// taken by students aiming at engineering, computing, physical-science or
// quantitative-finance university courses. It is organised into six
// content strands: Functions and Graphs, Sequences and Series, Vectors,
// Complex Numbers, Calculus, and Probability and
// Statistics. The topic list below uses the official strand headings
// from the SEAB 9758 syllabus, with the sub-strand groupings a Singapore
// JC student would recognise from the official syllabus document.
//
// Source: SEAB GCE A-Level H2 Mathematics 9758 syllabus (examined from 2025),
// https://www.seab.gov.sg/docs/default-source/national-examinations/syllabus/alevel/2025-a-level-syllabus/9758_y25_sy.pdf
// Source: MOE Pre-University H2 Mathematics (2024 syllabus document),
// https://www.moe.gov.sg/api/media/138f79cf-ec8a-4c4f-a532-b04823e09031/2024-Pre-University-H2-Mathematics.pdf
// Source: SEAB 2026 A-Level syllabuses listing,
// https://www.seab.gov.sg/gce-a-level/a-level-syllabuses-examined-for-school-candidates-2026/
import type { Subject } from '../../types';

export const alevelH2Mathematics: Subject = {
  id: 'alevel-h2-mathematics',
  name: 'H2 Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'ahm-001', name: 'Functions and Graphs', weight: 4 as const, description: 'Domain, range, composite and inverse functions; transformations of graphs; modulus function; the natural exponential and logarithm and their graphs. The first H2 Math topic a JC1 student meets.' },
    { id: 'ahm-002', name: 'Sequences and Series', weight: 3 as const, description: 'Arithmetic and geometric progressions; sum of first n terms and sum to infinity; convergence; binomial expansion of (1 + x)^n for any rational n. Sets up the rest of calculus and complex numbers.' },
    { id: 'ahm-003', name: 'Vectors', weight: 4 as const, description: 'Three-dimensional vector operations; dot and cross products; lines and planes in 3D; the concept of a normal vector. A heavier workload at H2 than at O-Level because 3D is required.' },
    { id: 'ahm-004', name: 'Complex Numbers and De Moivre\'s Theorem', weight: 3 as const, description: 'The Argand diagram; modulus and argument; polar form; De Moivre\'s theorem; the nth roots of a complex number and loci. A pure-mathematics strand unique to H2.' },
    { id: 'ahm-005', name: 'Calculus (Differentiation and Integration)', weight: 5 as const, description: 'Limits and continuity; the chain, product and quotient rules; implicit differentiation; Maclaurin series; definite integrals; integration by parts, substitution and partial fractions; differential equations and their applications. The largest single strand by marks on Paper 1.' },
    { id: 'ahm-006', name: 'Probability and Statistics', weight: 4 as const, description: 'Permutations, combinations and the binomial and Poisson distributions; the normal distribution; sample means and the Central Limit Theorem; unbiased estimators; confidence intervals and hypothesis testing for the mean and proportion. The other half of the largest-paper section by marks.' }
  ]
};
