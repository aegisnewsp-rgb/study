// NUMS MDCAT — Paper II Psychological Test.
// Source: NUMS "2026 NUMS Updated MDCAT Terms of Conditions" and the 2026 NUMS MDCAT
// advertisement on numspak.edu.pk, as cited and quoted by Manus
// (https://numspak.edu.pk/upload/media/2026-NUMS-Updated-MDCAT-TOS-2026_1779075557.pdf).
// NOTE: numspak.edu.pk returns HTTP 403 to this worker, so these figures are reproduced from
// the Manus retrieval of the official document and were NOT independently fetched here.
// Official structure: Paper II is the Psychological Test, 50 one-best-option MCQs, 15 minutes,
// and NUMS gives this component a 5% weightage in its published structure table.
// NUMS publishes no item-level blueprint for Paper II. Topic split below is StudyRoadmap's
// own organisation of the kinds of item a 50-item aptitude paper contains. NUMS states that the
// whole paper is one-best-option MCQ and that "there shall be no negative marking".
import type { Subject } from '../../types';
export const numsPsychologicalTest: Subject = {
  id: 'psychological-test', name: 'Psychological Test (Paper II)', color: '#7c3aed',
  topics: [
    { id: 'psy-001', name: 'Reading Speed and Comprehension Under a Hard Cap', weight: 5, description: 'NUMS gives Paper II 50 questions in 15 minutes — 18 seconds each. The first skill is reading a stem and three or four options without re-reading.' },
    { id: 'psy-002', name: 'Classification, Odd-One-Out and Series Problems', weight: 4, description: 'Finding the rule that separates one item from four, and extending a sequence or matrix once the rule is identified.' },
    { id: 'psy-003', name: 'Numerical and Spatial Reasoning', weight: 4, description: 'Mental arithmetic under time pressure, ratio and proportion, simple proportional reasoning, and two-dimensional spatial manipulation.' },
    { id: 'psy-004', name: 'Verbal Analogies and Logical Relations', weight: 4, description: 'The relation between the first pair of terms transferred to a second pair, plus the non-verbal syllogism and statement-conclusion formats.' },
    { id: 'psy-005', name: 'Decision Making and Problem-Solving Items', weight: 4, description: 'Short situational items where several options are defensible and the test is whether you can justify one consistently rather than quickly.' },
    { id: 'psy-006', name: 'Time and Attempt Strategy for Paper II', weight: 3, description: 'A fixed 18-second budget per item, a pass-1 rule, and the discipline of leaving an item rather than spending the time the next five items need.' },
  ],
};
