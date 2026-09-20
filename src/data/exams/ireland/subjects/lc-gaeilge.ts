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
// (ncca.ie/media/4932/draft-specification-gaeilge-t2-en.pdf).
// Source: NCCA Leaving Certificate Irish specification,
// https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/gaeilge/
// Verify the live assessment arrangements and prescribed material on
// curriculumonline.ie before committing a revision plan.
export const lcGaeilge: Subject = {
  id: 'lc-gaeilge',
  name: 'Gaeilge (Irish)',
  color: '#16a34a',
  topics: [
    { id: 'lc-ga-001', name: 'Communication', weight: 5 as const, description: 'The main strand of the specification - Léitheoireacht, Scríbhneoireacht, Labhairt agus Éisteacht - develops the four language skills through engagement with authentic texts and tasks, including the prescribed prose and poetry. Carries the largest mark weight.' },
    { id: 'lc-ga-002', name: 'Awareness', weight: 3 as const, description: 'Language and cultural awareness - understanding of the Gaeltacht, the role of Irish in the bilingual society, literary and cultural traditions including the prescribed prose and poetry corpus.' },
    { id: 'lc-ga-003', name: 'Language Creativity', weight: 3 as const, description: 'Creative use of language across registers and genres - composition in personal, discursive and imaginative modes, supported by grammar, vocabulary expansion and stylistic awareness.' }
  ]
};
