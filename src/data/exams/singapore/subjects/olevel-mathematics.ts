// Singapore-Cambridge GCE O-Level Mathematics (Elementary Mathematics) — syllabus code 4052.
//
// Awarding body: Singapore Examinations and Assessment Board (SEAB) in
// collaboration with Cambridge International Education, under the
// Singapore-Cambridge brand. The MOE Curriculum Planning and Development
// Division designs the content; SEAB and Cambridge jointly administer.
//
// The 4052 syllabus is the standard Secondary 4 mathematics subject taken
// by most Singapore secondary students at the end of Sec 4. The content
// is organised into three strands: Number and Algebra, Geometry and
// Measurement, and Statistics and Probability. The topic list below uses
// the official strand headings from the SEAB 4052 syllabus, with the
// sub-strand groupings a Singapore Sec 4 student would recognise from
// the official syllabus document.
//
// Important: from 2027, the 4052 code is being replaced in the new
// Singapore-Cambridge Secondary Education Certificate (SEC) by code K310.
// The content structure is unchanged; only the subject code and the
// qualification title change. Verify the live code on the SEAB 2026
// O-Level syllabuses page before committing a revision plan.
//
// Source: SEAB GCE O-Level Mathematics 4052 syllabus (examined from 2023),
// https://www.seab.gov.sg/docs/default-source/national-examinations/syllabus/olevel/2023syllabus/4052_y23_sy.pdf
// Source: SEAB 2026 O-Level syllabuses listing,
// https://www.seab.gov.sg/gce-o-level/o-level-syllabuses-examined-for-school-candidates-2026/
import type { Subject } from '../../types';

export const olevelMathematics: Subject = {
  id: 'olevel-mathematics',
  name: 'Mathematics (Elementary Mathematics)',
  color: '#2563eb',
  topics: [
    { id: 'olem-001', name: 'Numbers and Their Operations', weight: 4 as const, description: 'Integers, rational numbers, real numbers, indices, standard form, surds, bounds, estimation, and the four operations in context. The arithmetic backbone of Paper 1.' },
    { id: 'olem-002', name: 'Algebraic Expressions, Equations and Inequalities', weight: 5 as const, description: 'Linear and quadratic expressions; factorisation, completing the square and the quadratic formula; simultaneous equations in two variables; inequalities and sign charts. The largest single strand by marks on both Paper 1 and Paper 2.' },
    { id: 'olem-003', name: 'Functions and Graphs', weight: 4 as const, description: 'Linear, quadratic, cubic, reciprocal, exponential and logarithmic graphs; graphical solution of equations; piecewise functions; rates of change read off a graph. Central to Paper 2 graph-plotting and to any applied-modelling question.' },
    { id: 'olem-004', name: 'Ratio, Rate, Proportion and Percentages', weight: 4 as const, description: 'Direct and inverse proportion; map scales and similar-figures problems; compound interest, hire purchase, instalments and other money contexts; rate-time-distance problems. Heaviest practical-application load on Paper 2.' },
    { id: 'olem-005', name: 'Geometry (Angles, Polygons, Congruence and Similarity)', weight: 3 as const, description: 'Angle properties of parallel lines and polygons; congruence tests (SSS, SAS, ASA, RHS); similarity tests; construction of triangles and quadrilaterals.' },
    { id: 'olem-006', name: 'Mensuration and Trigonometry', weight: 4 as const, description: 'Perimeter and area of 2D figures; surface area and volume of 3D solids including pyramids, cones and spheres; sine, cosine and tangent ratios; sine and cosine rules; bearings. A long applied-paper strand.' },
    { id: 'olem-007', name: 'Coordinate Geometry and Vectors', weight: 3 as const, description: 'Equation of a straight line; gradient, midpoint and distance formulae; parallel and perpendicular conditions; basic 2D vectors and simple vector arithmetic.' },
    { id: 'olem-008', name: 'Statistics and Probability', weight: 4 as const, description: 'Histograms, cumulative-frequency curves, box-and-whisker plots, stem-and-leaf diagrams; mean, median, mode and standard deviation; sample space, Venn diagrams, tree diagrams and conditional probability. Often tested jointly on a single Paper-2 question.' }
  ]
};
