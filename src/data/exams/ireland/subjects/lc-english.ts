import type { Subject } from '../../types';

// Leaving Certificate English — NCCA specification being phased in for fifth
// years from September 2025 (replaces the older syllabus for first
// examination 2027). The current syllabus still applies to the 2026 cohort;
// the new specification structure below reflects the four strands published
// in the September 2025 specification document
// (curriculumonline.ie/getmedia/.../SC-English-Spec-ENG-INT.pdf). The
// assessment remains Ordinary and Higher, with Paper 1, Paper 2 and the
// Speaking/Listening component carried over from the previous syllabus.
// Source: NCCA Leaving Certificate English Specification (for introduction
// September 2025, first examination 2027),
// https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/english/
// Verify the live assessment arrangements and the prescribed text list on
// gov.ie and curriculumonline.ie before committing a revision plan.
export const lcEnglish: Subject = {
  id: 'lc-english',
  name: 'English',
  color: '#dc2626',
  topics: [
    { id: 'lc-eng-001', name: 'Exploring', weight: 4 as const, description: 'Engagement with a wide range of texts - spoken, written, visual and multimedia - to develop understanding of how meaning is constructed through language, form and context across cultures and time.' },
    { id: 'lc-eng-002', name: 'Creating', weight: 4 as const, description: 'Composition across a range of genres: personal, discursive, argumentative, imaginative, critical and literary writing, with attention to register, audience and rhetorical purpose.' },
    { id: 'lc-eng-003', name: 'Comparing', weight: 3 as const, description: 'Comparative study across three texts in the comparative mode (plus one studied on its own), drawing on key moments, themes, styles and contexts; Higher level requires Shakespeare.' },
    { id: 'lc-eng-004', name: 'Analysing', weight: 4 as const, description: 'Close critical analysis of language, structure and form in poetry, prose, drama and film; assessment of how an author crafts meaning through diction, imagery, syntax and rhetorical devices.' }
  ]
};
