import type { Subject } from '../../types';

// Junior Cycle English — NCCA specification introduced in 2017 and first
// examined in 2019. The course is structured around three integrated strands:
// Oral Language, Reading and Writing, with cross-cutting elements for
// communicating and exploring/using language. Assessment combines a written
// examination, two Classroom-Based Assessments (Oral Communication and The
// Collection of the Student\'s Texts) and an Assessment Task.
// Source: NCCA Junior Cycle English Specification (amended 2018),
// https://www.curriculumonline.ie/junior-cycle/junior-cycle-subjects/english/
// Verify the live CBA windows, prescribed text list and any in-year
// specification changes on curriculumonline.ie before committing a revision
// plan.
export const jcEnglish: Subject = {
  id: 'jc-english',
  name: 'English',
  color: '#dc2626',
  topics: [
    { id: 'jc-eng-001', name: 'Oral Language', weight: 4 as const, description: 'Speaking, listening and interacting in a range of contexts - presenting, debating, group discussion - including the Classroom-Based Assessment in Oral Communication. Highest-weight strand on the CBA side.' },
    { id: 'jc-eng-002', name: 'Reading', weight: 4 as const, description: 'Engagement with literary, digital and visual texts - novels, drama, poetry, film, journalism - with attention to comprehension, interpretation, comparison and critical reading. Largest component of the written examination.' },
    { id: 'jc-eng-003', name: 'Writing', weight: 3 as const, description: 'Creating texts in a range of genres - personal, imaginative, discursive and argumentative - and the Collection of the Student\'s Texts Classroom-Based Assessment, with attention to register, audience and rhetorical purpose.' }
  ]
};
