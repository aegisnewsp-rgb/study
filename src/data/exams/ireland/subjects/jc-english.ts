import type { Subject } from '../../types';

// Junior Cycle English — NCCA specification introduced in 2017 and first
// examined in 2019. The course is structured around three integrated strands:
// Oral Language, Reading and Writing, with cross-cutting elements for
// communicating and exploring/using language. Each strand is divided into a
// number of elements, which are the headings under which the learning
// outcomes are grouped. Assessment combines a written examination, two
// Classroom-Based Assessments (Oral Communication and The Collection of the
// Student\'s Texts) and an Assessment Task. The three strand rows are kept as
// orientation rows and the elements beneath them are added as their own
// revision rows.
// Source: NCCA Junior Cycle English Specification (amended 2018),
// https://www.curriculumonline.ie/getmedia/69300aa1-104d-463b-bde8-6af571bea553/Jr-Cycle-English-Spec.pdf
// (structure and elements: https://www.curriculumonline.ie/junior-cycle/junior-cycle-subjects/english/overview-course/)
// Verify the live CBA windows, prescribed text list and any in-year
// specification changes on curriculumonline.ie before committing a revision
// plan.
export const jcEnglish: Subject = {
  id: 'jc-english',
  name: 'English',
  color: '#dc2626',
  topics: [
    { id: 'jc-eng-001', name: 'Oral Language', weight: 4 as const, description: 'Orientation row for the strand that carries speaking and listening work, including the Oral Communication Classroom-Based Assessment. After this you can decide whether an oral task is testing comprehension of what you heard, or the quality of what you said.' },
    { id: 'jc-eng-002', name: 'Reading', weight: 4 as const, description: 'Orientation row for the strand that carries most of the written examination, moving in three steps from understanding a text through analysing it to evaluating it. After this you can sort a reading paper into the three passes you will make over it.' },
    { id: 'jc-eng-003', name: 'Writing', weight: 3 as const, description: 'Orientation row for the strand that separates communicating an idea from crafting the text that carries it, and that carries the Collection of the Student\'s Texts Classroom-Based Assessment. After this you can tell which of your two writing jobs a task is actually asking for.' },

    { id: 'jc-eng-004', name: 'Listening', weight: 3 as const, description: 'After revising this you can follow a speaker\'s argument once, without a transcript, and separate what was actually said from what you inferred they meant.' },
    { id: 'jc-eng-005', name: 'Speaking and the Oral Communication Assessment', weight: 4 as const, description: 'After revising this you can present to a group, respond to an unasked question in a presentation, and hold your ground in a discussion where other speakers disagree with you.' },

    { id: 'jc-eng-006', name: 'Understanding and Comprehension', weight: 4 as const, description: 'After revising this you can identify main ideas and specific detail in an unseen passage, infer an answer the text does not state outright, and choose the option a careful reader would pick.' },
    { id: 'jc-eng-007', name: 'Analysing Language Choices', weight: 4 as const, description: 'After revising this you can explain the effect a specific word, image or sentence structure has on a reader in a novel, a poem, a play or a film, rather than naming the technique and stopping there.' },
    { id: 'jc-eng-008', name: 'Evaluating Texts and Sources', weight: 4 as const, description: 'After revising this you can judge how far a text is reliable for a stated purpose, spot how an article or advertisement frames its audience, and support a judgement with evidence from the text itself.' },

    { id: 'jc-eng-009', name: 'Communicating and Composing', weight: 4 as const, description: 'After revising this you can plan and draft a piece in a personal, narrative, argumentative or descriptive mode, organise paragraphs so each one advances the argument, and write to a register that fits the audience.' },
    { id: 'jc-eng-010', name: 'Crafting and the Collection of Texts', weight: 3 as const, description: 'After revising this you can revise a draft for sentence-level control and assemble the Collection of the Student\'s Texts evidence with a comment that explains the choices you made rather than restating the task.' }
  ]
};
