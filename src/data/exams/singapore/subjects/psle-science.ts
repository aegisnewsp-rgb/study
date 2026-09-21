// Primary School Leaving Examination (PSLE) Science — Singapore.
//
// Awarding body: Ministry of Education (MOE), Singapore; the PSLE itself
// is administered by the Singapore Examinations and Assessment Board (SEAB).
// Subject code: 1195 (Standard Science) / 1197 (Foundation Science).
// Curriculum frame: 2023 Primary Science Syllabus (implemented from the 2023
// Primary 3 cohort).
//
// The 2023 Primary Science syllabus is built on four themes — Diversity,
// Systems, Cycles, and Energy and Interactions — that span the upper-primary
// years (Primary 5 and 6). The topic list below uses the official theme
// headings from the MOE Primary Science Syllabus (P3–P6), with the
// sub-strand groupings a Singapore Primary 6 student would recognise from
// the official syllabus document.
//
// Verify the live paper pattern, AL scoring bands, and any in-year syllabus
// changes against the official MOE page
// (https://www.moe.gov.sg/primary/curriculum/syllabus) and the SEAB PSLE
// page (https://www.seab.gov.sg/psle/) before committing any revision plan
// to a student.
//
// Source: MOE Primary Science Teaching and Learning Syllabus (2023),
// https://www.moe.gov.sg/api/media/ba3562d3-5b31-4459-8693-45cde7b97273/Primary-Science-Syllabus-2023.pdf
// Source: SEAB PSLE examination formats (2026),
// https://www.seab.gov.sg/psle/psle-formats-examined-in-2026/
import type { Subject } from '../../types';

export const psleScience: Subject = {
  id: 'psle-science',
  name: 'Science',
  color: '#10b981',
  topics: [
    { id: 'psles-001', name: 'Diversity (Living Things, Materials and Their Properties)', weight: 4 as const, description: 'Classification of living things into groups; characteristics of plants and animals; diversity of materials including their physical properties. A Primary 3-4 strand revisited and consolidated at Primary 5.' },
    { id: 'psles-002', name: 'Systems (Plant, Animal and Human Body Systems)', weight: 5 as const, description: 'Plant transport system (xylem and phloem); human digestive, circulatory, respiratory and excretory systems; interactions within and between systems. The largest single section at Primary 6 by marks.' },
    { id: 'psles-003', name: 'Cycles (Matter and Energy Cycles)', weight: 4 as const, description: 'Life cycles of plants and animals; the water cycle; the carbon cycle; reproductive cycles in flowering plants and humans. Heaviest connection to the Open-Ended section of the PSLE Science paper.' },
    { id: 'psles-004', name: 'Energy (Forms, Uses and Conversion; Electrical Energy)', weight: 4 as const, description: 'Forms and uses of energy; energy conversion and conservation; sources of energy; conductors and insulators; simple series and parallel circuits; the electromagnet. A combined Primary 5-6 strand.' },
    { id: 'psles-005', name: 'Interactions (Forces, Living Together, Environment)', weight: 4 as const, description: 'Types of forces (friction, gravity, magnetic, elastic, etc.); ecosystems; food chains and food webs; adaptation for survival; man\'s impact on the environment. A Primary 6-specific strand.' },
    { id: 'psles-006', name: 'Scientific Inquiry and Process Skills', weight: 3 as const, description: 'Observation, classification, comparison, inference, prediction, hypothesis formulation, experimentation (fair test), and data interpretation. The skill set that drives the PSLE Science Paper 1 and Paper 2 open-ended questions.' }
  ]
};
