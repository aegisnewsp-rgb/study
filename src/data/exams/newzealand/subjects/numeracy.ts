// NCEA University Entrance Numeracy requirement.
// Awarding body: NZQA (New Zealand Qualifications Authority).
// Specification: University Entrance numeracy requirement, 10 credits at
// Level 1 or above. Source: NZQA numeracy standards and UE numeracy page,
// https://www2.nzqa.govt.nz/about-us/publications/newsletters-circulars/assessment-matters/a2023-17/
// Numeracy credits can come from the dedicated co-requisite unit standards
// (US32406 English-medium, US32412 Te Pāngarau Māori-medium) or from a
// limited list of "numeracy rich" achievement standards in Mathematics,
// Science, Geography and other subjects (downloadable spreadsheet on the
// NZQA UE numeracy page). Topic weights reflect credit value and frequency
// of use; the co-requisite unit standard carries the highest weight because
// it is the dedicated UE numeracy pathway. Re-check the live numeracy
// achievement standards spreadsheet on nzqa.govt.nz before committing any
// revision plan to a student.

import type { Subject } from '../../types';

export const numeracy: Subject = {
  id: 'numeracy',
  name: 'Numeracy',
  color: '#7c3aed',
  topics: [
    { id: 'num-001', name: 'Use mathematics and statistics to meet the numeracy demands of a range of everyday situations (US32406)', weight: 5 as const, description: 'Solve problems in real-life contexts by selecting and applying number, measurement, algebra, geometry, statistics or probability methods; explain the reasonableness of results. Dedicated UE Numeracy co-requisite, 5 credits.' },
    { id: 'num-002', name: 'Te Pāngarau numeracy standard (US32412)', weight: 5 as const, description: 'Māori-medium equivalent of US32406: apply mathematics and statistics in everyday situations through te reo Māori. Counts toward UE numeracy for students on a Māori-medium pathway.' },
    { id: 'num-003', name: 'NCEA Level 1 Mathematics: Interpret and apply mathematical and statistical information in context (91946)', weight: 4 as const, description: 'Level 1 Mathematics and Statistics external standard: apply mathematical and statistical methods to interpret information in context. Counts toward UE numeracy when used in conjunction with US32406.' },
    { id: 'num-004', name: 'NCEA Level 1 Mathematics: Demonstrate mathematical reasoning (91947)', weight: 4 as const, description: 'Level 1 Mathematics and Statistics external standard: solve problems using number, algebra, geometry, measurement, statistics and probability. Counts toward UE numeracy when used in conjunction with US32406.' },
    { id: 'num-005', name: 'Numeracy-rich achievement standards from Mathematics (Level 1 and above)', weight: 3 as const, description: 'Selected Level 1 and above Mathematics achievement standards on the published "numeracy rich" list. Together with US32406 these make up the 10-credit UE numeracy requirement.' },
    { id: 'num-006', name: 'Numeracy-rich achievement standards from Science, Geography and other subjects', weight: 3 as const, description: 'Selected Level 1 and above achievement standards from Science, Geography and similar subjects that contribute to UE numeracy. See the UE numeracy spreadsheet on nzqa.govt.nz for the full list.' }
  ]
};
