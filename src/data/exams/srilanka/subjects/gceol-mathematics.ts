// GCE O/L — Mathematics.
// Source: Department of Examinations, Sri Lanka. https://www.doenets.lk/ returned HTTP 200 to
// this worker on 2026-10-09; the Department's 2026 examination timetable sets the Mathematics
// sessions at Paper I 08:30–10:30 and Paper II 13:00–16:10, reproduced here from the Manus
// retrieval of that timetable PDF (https://doenets.lk/images/resources/EXCA/OL%20timetable%20English%20-%202026_1791431651960.pdf)
// because the calendar page renders client-side and did not serve the PDF to this host.
// The Department publishes marking schemes subject by subject through its Evaluation Reports
// section and no consolidated O/L Mathematics weightage. Weight values below are our own.
import type { Subject } from '../../types';
export const gceOlMathematics: Subject = {
  id: 'mathematics', name: 'Mathematics', color: '#b45309',
  topics: [
    { id: 'ma-001', name: 'Arithmetic and Number', weight: 5, description: 'Indices and surds, standard form, ratio and proportion, percentage change and error, and number properties at the level the O/L two-paper split requires.' },
    { id: 'ma-002', name: 'Algebra', weight: 5, description: 'Simultaneous and quadratic equations, inequalities, formulae rearrangement, sequences, and the algebraic proof questions that appear across both papers.' },
    { id: 'ma-003', name: 'Geometry and Mensuration', weight: 5, description: 'Angles and circle theorems, constructions, trigonometry and the sine and cosine rules, area and volume, and bearing and scale-drawing work.' },
    { id: 'ma-004', name: 'Coordinate Geometry and Graphs', weight: 4, description: 'Straight lines, distance and gradient, quadratic graphs, and reading a graph as a relationship rather than a picture.' },
    { id: 'ma-005', name: 'Statistics and Probability', weight: 4, description: 'Averages and spread, frequency distributions, cumulative frequency graphs, simple probability, and the interpretation questions that sit alongside the calculation ones.' },
    { id: 'ma-006', name: 'Sets, Logic and Relations', weight: 3, description: 'Set notation and Venn diagrams, logical connectives, relations and mappings, and the counting techniques these support.' },
  ],
};
