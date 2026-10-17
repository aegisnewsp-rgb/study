import type { Subject } from '../../types';

// Leaving Certificate Irish (An Ghaeilge) — NCCA revised syllabus effective
// from September 2010, first examination 2012, with prescribed material
// updated annually. The current draft specification for Leaving Certificate
// Irish (T1 and T2) published by the NCCA for Senior Cycle redevelopment
// defines three strands - Communication, Awareness and Language Creativity.
// The current published syllabus (Ordinary/Higher) assesses the four
// language skills (Léitheoireacht, Scríbhneoireacht, Labhairt, Éisteacht)
// plus cultural awareness; the structure below reflects the three-strand
// draft specification published for redevelopment
// (ncca.ie/media/4932/draft-specification-gaeilge-t2-en.pdf). The three
// strand rows are kept as orientation rows and the four language skills and
// supporting content are added below as their own revision rows.
// Source: NCCA Leaving Certificate Irish specification,
// https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/gaeilge/
// (draft redevelopment specification, English-medium schools:
// https://ncca.ie/media/4932/draft-specification-gaeilge-t2-en.pdf)
// Verify the live assessment arrangements and prescribed material on
// curriculumonline.ie before committing a revision plan.
export const lcGaeilge: Subject = {
  id: 'lc-gaeilge',
  name: 'Gaeilge (Irish)',
  color: '#16a34a',
  topics: [
    { id: 'lc-ga-001', name: 'Communication', weight: 5 as const, description: 'Orientation row for the main strand, in which the four language skills are developed together rather than examined as isolated boxes. After this you can see how a reading passage, a composition and an oral topic all draw on the same grammar and vocabulary you are revising.' },
    { id: 'lc-ga-002', name: 'Awareness', weight: 3 as const, description: 'Orientation row for the strand covering Irish as a living language and the culture that carries it. After this you can write about the place of Irish in a bilingual society with specific examples rather than general statements.' },
    { id: 'lc-ga-003', name: 'Language Creativity', weight: 3 as const, description: 'Orientation row for the strand that treats Irish as a resource to be used creatively across registers and genres. After this you can recognise which register a task needs and shift your vocabulary deliberately to match it.' },

    { id: 'lc-ga-004', name: 'Léitheoireacht: Reading in Irish', weight: 4 as const, description: 'After revising this you can read an unseen Irish passage closely enough to answer a comprehension question and to pick out the writer\'s attitude, using your knowledge of the prescribed material to work unfamiliar vocabulary from context.' },
    { id: 'lc-ga-005', name: 'Scríbhneoireacht: Composition in Irish', weight: 4 as const, description: 'After revising this you can plan and write a coherent Irish composition in a chosen register, connect paragraphs with the right linking phrases, and correct the spelling and grammatical errors that cost marks.' },
    { id: 'lc-ga-006', name: 'Labhairt: Speaking Irish', weight: 4 as const, description: 'After revising this you can sustain an oral response in Irish for the length the task requires, use a prepared opening to buy thinking time, and recover when you lose the thread.' },
    { id: 'lc-ga-007', name: 'Éisteacht: Listening Irish', weight: 3 as const, description: 'After revising this you can follow an unseen spoken Irish text at normal speed and pick out the specific detail the question asks for, rather than the general sense of the passage.' },

    { id: 'lc-ga-008', name: 'The Irish Language and the Gaeltacht', weight: 3 as const, description: 'After revising this you can describe the position of Irish in education and public life, and explain the role of the Gaeltacht in keeping the language spoken, using concrete examples of policy or community practice.' },
    { id: 'lc-ga-009', name: 'Literary and Cultural Traditions', weight: 3 as const, description: 'After revising this you can place the prescribed prose and poetry in the literary tradition they belong to and use that context to support an answer about a writer\'s themes or technique.' },

    { id: 'lc-ga-010', name: 'Grammar, Register and Style', weight: 3 as const, description: 'After revising this you can apply the grammatical rules the syllabus names and shift between formal and informal register deliberately, so the register you choose matches the audience and purpose of the task.' },
    { id: 'lc-ga-011', name: 'Creative Composition in Irish', weight: 3 as const, description: 'After revising this you can write an imaginative or personal Irish piece with a controlling idea, expand a vocabulary range beyond the classroom set, and revise a draft for style as well as accuracy.' }
  ]
};
