// GCE O/L — Science.
// Source: Department of Examinations, Sri Lanka. https://www.doenets.lk/ returned HTTP 200 to
// this worker on 2026-10-09; the Department's 2026 timetable sets the Science sessions at
// Paper II 08:30–11:40 and Paper I 13:00–14:00, reproduced here from the Manus retrieval of that
// timetable PDF (https://doenets.lk/images/resources/EXCA/OL%20timetable%20English%20-%202026_1791431651960.pdf)
// because the calendar page renders client-side and did not serve the PDF to this host.
// The Department publishes no consolidated Science mark allocation; marking schemes are issued
// per subject through its Evaluation Reports section. Weight values below are our own.
import type { Subject } from '../../types';
export const gceOlScience: Subject = {
  id: 'science', name: 'Science', color: '#15803d',
  topics: [
    { id: 'sc-001', name: 'Basic Chemistry', weight: 5, description: 'Matter, atoms and elements, compounds and mixtures, chemical reactions and the language of equations, acids and alkalis, and the reactivity series.' },
    { id: 'sc-002', name: 'Human Biology and Health', weight: 5, description: 'Cells, tissues and organs, digestion, circulation, respiration, excretion, nervous and endocrine coordination, and communicable disease.' },
    { id: 'sc-003', name: 'Motion, Forces and Energy', weight: 5, description: 'Motion and its description, forces and pressure, work, power and energy, the particle model of matter, and waves including light and sound.' },
    { id: 'sc-004', name: 'Electricity, Magnetism and Chemical Energy', weight: 4, description: 'Current, voltage, resistance and simple circuits, magnets and induced effects, and the distinction between stored chemical energy and released electrical energy.' },
    { id: 'sc-005', name: 'Nature and the Environment', weight: 4, description: 'Ecosystems, food chains and energy flow, the water and carbon cycles, renewable resources, and human impact on the environment.' },
    { id: 'sc-006', name: 'Measurement and Laboratory Practice', weight: 3, description: 'SI units, correct use of measuring instruments, experimental design and variables, and evaluating the quality of a set of results.' },
  ],
};
