import type { Subject } from '../../types';

// Leaving Certificate English — NCCA specification being phased in for fifth
// years from September 2025 (replaces the older syllabus for first
// examination 2027). The current syllabus still applies to the 2026 cohort;
// the new specification structure below reflects the four strands published
// in the September 2025 specification document
// (curriculumonline.ie/getmedia/.../SC-English-Spec-ENG-INT.pdf). The
// assessment remains Ordinary and Higher, with Paper 1, Paper 2 and the
// Speaking/Listening component carried over from the previous syllabus. The
// four strand rows are kept as orientation rows; the mode-of-language and
// text groups that the current and incoming specifications both assess are
// added below as their own revision rows.
// Source: NCCA Leaving Certificate English Specification (for introduction
// September 2025, first examination 2027),
// https://www.curriculumonline.ie/getmedia/cea2a97f-0663-4bd7-9a16-6dcec6249e24/SC-English-Spec-ENG-INT.pdf
// Current syllabus and prescribed text list:
// https://www.curriculumonline.ie/getmedia/3bb84cb3-59af-4ab3-8965-61656bddc5d7/SCSEC14_English_Syllabus.pdf
// Verify the live assessment arrangements and the prescribed text list on
// gov.ie and curriculumonline.ie before committing a revision plan.
export const lcEnglish: Subject = {
  id: 'lc-english',
  name: 'English',
  color: '#dc2626',
  topics: [
    { id: 'lc-eng-001', name: 'Exploring', weight: 4 as const, description: 'Orientation row for the first strand, which runs across reading, viewing, listening and the oral mode rather than sitting in one paper. After this you can decide which of the comprehension rows below a passage question belongs to before you start annotating it.' },
    { id: 'lc-eng-002', name: 'Creating', weight: 4 as const, description: 'Orientation row for composition, which the syllabus splits into the three language purposes you must be able to write in. After this you can look at a title and say which purpose it is asking for and which one you would write if it offered a choice.' },
    { id: 'lc-eng-003', name: 'Comparing', weight: 3 as const, description: 'Orientation row for the comparative strand, where a small number of texts are read together rather than one at a time. After this you can hold a comparison structure in mind before you start choosing which key moments to write about.' },
    { id: 'lc-eng-004', name: 'Analysing', weight: 4 as const, description: 'Orientation row for close analysis of language choices in poetry, prose, drama and film, including the unseen text. After this you can move from noticing a technique to explaining what it does to the reader.' },

    { id: 'lc-eng-005', name: 'Reading and Viewing Texts', weight: 3 as const, description: 'After revising this you can read for detail and for overall effect in the same passage, and treat a visual or screen text with the same annotation discipline you apply to print.' },
    { id: 'lc-eng-006', name: 'Listening and Oral Communication', weight: 3 as const, description: 'After revising this you can follow an unseen spoken text once without a transcript, and plan a spoken response that answers the question asked rather than the one you prepared for.' },
    { id: 'lc-eng-007', name: 'Personal Response and Reflection', weight: 3 as const, description: 'After revising this you can turn a personal experience into an organised piece with a controlling idea, using a specific moment to carry the reflection instead of summary.' },
    { id: 'lc-eng-008', name: 'Argument and Persuasion', weight: 4 as const, description: 'After revising this you can build an argument that a reader who disagrees with you would still find fair, support each claim with evidence, and sustain a register that matches an informed audience.' },
    { id: 'lc-eng-009', name: 'Imaginative and Narrative Composition', weight: 4 as const, description: 'After revising this you can write an imaginative piece with control of narrative perspective, pacing and shape, and revise a draft for the same standard you would apply to an argument.' },

    { id: 'lc-eng-010', name: 'Comparative Study of Texts', weight: 4 as const, description: 'After revising this you can select key moments from more than one text, organise them around a theme or context rather than one text at a time, and link them explicitly with comparative language.' },
    { id: 'lc-eng-011', name: 'Poetry and the Single Text', weight: 4 as const, description: 'After revising this you can analyse how a poem turns on sound and form as well as image, and how a single prescribed text uses character, theme and dramatic or narrative technique to hold a reader.' },
    { id: 'lc-eng-012', name: 'Unseen Text, Critical Literacy and Language Rules', weight: 3 as const, description: 'After revising this you can analyse an unseen passage inside exam time, evaluate how a text constructs an argument or an image of a person, and apply the language rules the syllabus names.' }
  ]
};
