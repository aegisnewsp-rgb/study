// Primary School Leaving Examination (PSLE) Mathematics — Singapore.
//
// Awarding body: Ministry of Education (MOE), Singapore; the PSLE itself is
// administered by the Singapore Examinations and Assessment Board (SEAB).
// Subject code: 1192 (Standard Mathematics) / 1196 (Foundation Mathematics).
// Curriculum frame: 2021 Primary Mathematics Syllabus (implemented from the
// 2021 Primary 1 cohort), applicable at Primary 6 from the 2026 cohort onward.
//
// The 2021 Primary Mathematics syllabus is organised into three content
// strands — Number and Algebra, Measurement and Geometry, and Statistics —
// with five inter-related curriculum components (Concepts, Skills,
// Processes, Attitudes, Metacognition) running across all three. The topic
// list below uses the official strand headings from the MOE Primary
// Mathematics Syllabus (P1–P6), with the sub-strand groupings a Singapore
// Primary 6 student would recognise from the official syllabus document.
//
// Verify the live paper pattern, AL scoring bands, and any in-year syllabus
// changes against the official MOE page
// (https://www.moe.gov.sg/primary/curriculum/syllabus) and the SEAB PSLE
// page (https://www.seab.gov.sg/psle/) before committing any revision plan
// to a student.
//
// Source: MOE Primary Mathematics Syllabus (2021, updated October 2025),
// https://www.moe.gov.sg/api/media/92bff26d-b2b4-4535-b868-b8415c744b91/2021-Primary-Mathematics-Syllabus-P1-to-P6-Updated-October-2025.pdf
// Source: SEAB PSLE examination formats (2026),
// https://www.seab.gov.sg/psle/psle-formats-examined-in-2026/
import type { Subject } from '../../types';

export const psleMathematics: Subject = {
  id: 'psle-mathematics',
  name: 'Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'pslem-001', name: 'Whole Numbers and Operations', weight: 5 as const, description: 'Place value up to 10 million; the four operations with whole numbers; order of operations; estimation and approximation. The arithmetic foundation that the rest of the syllabus rests on, assessed across every Primary 6 paper.' },
    { id: 'pslem-002', name: 'Fractions, Decimals and Percentages', weight: 5 as const, description: 'Equivalent fractions; the four operations with fractions and mixed numbers; conversion among fractions, decimals and percentages; percentage change and discount. Heaviest paper-1 load at Primary 6.' },
    { id: 'pslem-003', name: 'Ratio, Rate and Proportion', weight: 4 as const, description: 'Direct and inverse proportion; unitary method; average speed; compound units (km/h, kg, ml). Applied in word problems and in the rate-of-work and rate-of-consumption questions.' },
    { id: 'pslem-004', name: 'Algebraic Thinking', weight: 3 as const, description: 'Letter notation, simple linear equations in one unknown, pattern recognition and number sentences. Introduced from Primary 5 and built on at Primary 6.' },
    { id: 'pslem-005', name: 'Measurement (Length, Mass, Volume, Time, Money, Area and Perimeter)', weight: 4 as const, description: 'Conversion within and across metric units; reading scales; calculation of perimeter, area of triangles and composite figures, and volume of cubes and cuboids; money problems and time problems including the 24-hour clock.' },
    { id: 'pslem-006', name: 'Geometry (Angles, Polygons, Symmetry and Solids)', weight: 3 as const, description: 'Angle properties on a straight line and at a point; classification of triangles and quadrilaterals; line and rotational symmetry; nets and properties of cubes, cuboids, cones, cylinders and spheres.' },
    { id: 'pslem-007', name: 'Data Analysis and Probability', weight: 3 as const, description: 'Reading and constructing bar graphs, line graphs, pie charts and tables; mean, median, mode and range; simple probability as a fraction. A smaller strand by marks but a common Paper-2 closer.' },
    { id: 'pslem-008', name: 'Problem Solving with Heuristics', weight: 5 as const, description: 'The MOE heuristics set — draw a model, make a list, look for pattern, work backwards, guess and check, before-after, part-whole, comparison, supposition, and simultaneous-equations form — applied across all other strands on Paper 2.' }
  ]
};
