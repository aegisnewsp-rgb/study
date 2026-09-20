import type { Subject } from '../../types';

// Leaving Certificate Biology — NCCA specification introduced for fifth year
// students in September 2025 (first examination 2027). Replaces the older
// 2002 syllabus for the 2026-onwards cohort. The structure comprises a
// unifying strand, Nature of Science, and three contextual strands:
// Organisation of Life, Structures and Processes of Life, and Interactions
// of Life. Assessment is at Ordinary and Higher level.
// Source: NCCA Leaving Certificate Biology Specification (September 2025),
// https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/biology/
// Verify the live assessment arrangements and any in-year specification
// changes on curriculumonline.ie before committing a revision plan.
export const lcBiology: Subject = {
  id: 'lc-biology',
  name: 'Biology',
  color: '#10b981',
  topics: [
    { id: 'lc-bio-001', name: 'Nature of Science', weight: 3 as const, description: 'Unifying strand that develops the practices of science: investigating, reasoning, communicating and the role of biology in society, with emphasis on evidence-based argument and the historical development of biological ideas.' },
    { id: 'lc-bio-002', name: 'Organisation of Life', weight: 4 as const, description: 'Cell biology as the basis of life - prokaryotic and eukaryotic cell structure, biomolecules (carbohydrates, lipids, proteins, nucleic acids), enzymes, and the diversity of organisms including classification and ecology.' },
    { id: 'lc-bio-003', name: 'Structures and Processes of Life', weight: 5 as const, description: 'Genetics and evolution - DNA, gene expression, inheritance patterns, genetic engineering and biotechnology; photosynthesis, respiration, plant biology and transport; and animal physiology including digestion, circulation, immunity and the nervous system. Largest strand by mark weight.' },
    { id: 'lc-bio-004', name: 'Interactions of Life', weight: 4 as const, description: 'Ecosystems, population dynamics, nutrient cycling, pollution and sustainability; the human impact on the biosphere including climate change, biodiversity loss and conservation biology.' }
  ]
};
