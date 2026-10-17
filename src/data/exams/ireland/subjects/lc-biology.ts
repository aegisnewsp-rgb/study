import type { Subject } from '../../types';

// Leaving Certificate Biology — NCCA specification introduced for fifth year
// students in September 2025 (first examination 2027). Replaces the older
// 2002 syllabus for the 2026-onwards cohort. The specification comprises a
// unifying strand, Nature of Science, and three contextual strands:
// Organisation of Life, Structures and Processes of Life, and Interactions
// of Life. Those three contextual strands are divided into fourteen numbered
// units (1.1 to 3.3), each carrying its own learning outcomes; the rows below
// keep the four strand rows as orientation rows and then add one row per
// numbered unit so a revision block maps onto a real unit. Assessment is at
// Ordinary and Higher level.
// Source: NCCA Leaving Certificate Biology Specification (September 2025),
// https://www.curriculumonline.ie/getmedia/04e86311-7225-4cf3-a723-675e33154daf/SC-BIOLOGY-Spec-ENG.pdf
// (subject landing page: https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/biology/)
// Verify the live assessment arrangements and any in-year specification
// changes on curriculumonline.ie before committing a revision plan.
export const lcBiology: Subject = {
  id: 'lc-biology',
  name: 'Biology',
  color: '#10b981',
  topics: [
    { id: 'lc-bio-001', name: 'Nature of Science', weight: 3 as const, description: 'The unifying strand runs through every unit rather than sitting beside them. After revising it you can design an investigation, argue from biological evidence, and place any finding in the history and ethics of biology.' },
    { id: 'lc-bio-002', name: 'Organisation of Life', weight: 4 as const, description: 'Orientation row for strand 1, which runs from what counts as living through the molecules and cells that carry life out to inheritance and evolution. After this you can order units 1.1 to 1.5 as one causal chain and know which unit carries the examinable detail.' },
    { id: 'lc-bio-003', name: 'Structures and Processes of Life', weight: 5 as const, description: 'Orientation row for strand 2, the largest block of content on the paper, running from enzymes and energy transfer through division, control, reproduction and transport. After this you can say which of units 2.1 to 2.6 any question belongs to before you start revising it.' },
    { id: 'lc-bio-004', name: 'Interactions of Life', weight: 4 as const, description: 'Orientation row for strand 3, which moves from individual organisms through ecosystems to human impact and applied biotechnology. After this you can tell whether a question is asking about an ecosystem, a microorganism or an engineered system.' },

    { id: 'lc-bio-005', name: 'Characteristics of Life and Viruses', weight: 2 as const, description: 'Unit 1.1. After revising this you can test a proposed organism against the life processes and give the evidence that places viruses on the living and non-living side of that line.' },
    { id: 'lc-bio-006', name: 'The Chemicals of Life: Biomolecules', weight: 4 as const, description: 'Unit 1.2. After revising this you can draw the structure of each biomolecule, explain how that structure suits its function, and predict the test result for an unknown carbohydrate, lipid or protein.' },
    { id: 'lc-bio-007', name: 'The Unit of Life: Cells', weight: 4 as const, description: 'Unit 1.3. After revising this you can label prokaryotic, plant and animal cells, explain what each organelle contributes, and trace how a cell moves material across its membrane.' },
    { id: 'lc-bio-008', name: 'Information of Life: Genetic Inheritance', weight: 4 as const, description: 'Unit 1.4. After revising this you can work a monohybrid and dihybrid cross from first principles and predict offspring ratios for a pedigree that includes a sex-linked trait.' },
    { id: 'lc-bio-009', name: 'The Origins of Life: Evolution', weight: 3 as const, description: 'Unit 1.5. After revising this you can explain how natural selection, mutation and isolation build up diversity over generations and use that account to explain a named adaptation.' },

    { id: 'lc-bio-010', name: 'Enzymes', weight: 3 as const, description: 'Unit 2.1. After revising this you can explain how an enzyme lowers activation energy, predict how rate responds to temperature, pH and substrate concentration, and identify the type of inhibition a graph shows.' },
    { id: 'lc-bio-011', name: 'Photosynthesis and Respiration', weight: 4 as const, description: 'Unit 2.2. After revising this you can stage the light-dependent and light-independent reactions, link glycolysis and the citric acid cycle to ATP yield, and design an investigation into a factor that changes the rate of photosynthesis.' },
    { id: 'lc-bio-012', name: 'Cell Division and Protein Synthesis', weight: 4 as const, description: 'Unit 2.3. After revising this you can order the stages of the cell cycle, explain why meiosis generates variation where mitosis does not, and follow information from DNA replication through transcription to a working protein.' },
    { id: 'lc-bio-013', name: 'Response and Homeostasis', weight: 4 as const, description: 'Unit 2.4. After revising this you can trace a homeostatic feedback loop in the human body and explain how the nervous, endocrine, musculoskeletal and immune systems each restore a set point when it moves.' },
    { id: 'lc-bio-014', name: 'Reproduction', weight: 3 as const, description: 'Unit 2.5. After revising this you can compare asexual and sexual reproduction in plants and animals and explain how hormonal control coordinates the human reproductive cycle.' },
    { id: 'lc-bio-015', name: 'Transport and Exchange in Organisms', weight: 5 as const, description: 'Unit 2.6. After revising this you can explain how gases, nutrients and waste move by diffusion, osmosis, active transport, mass flow and ventilation, and use surface-area-to-volume reasoning to explain an organ design.' },

    { id: 'lc-bio-016', name: 'Ecology, Ecosystems and Biodiversity', weight: 4 as const, description: 'Unit 3.1. After revising this you can build a food web, trace energy and matter through it, predict the effect of removing one species, and evaluate a conservation measure against the evidence for its effect.' },
    { id: 'lc-bio-017', name: 'Microorganisms and Nutrient Cycling', weight: 3 as const, description: 'Unit 3.2. After revising this you can explain how decomposers and nitrogen-fixers drive nutrient cycling, describe how a microorganism carries out fermentation, and link that process to industrial and food applications.' },
    { id: 'lc-bio-018', name: 'Genetic Engineering and Biotechnology', weight: 3 as const, description: 'Unit 3.3. After revising this you can follow a gene from isolation through restriction enzymes and vectors into an expressed product, and weigh the medical and ethical claims made for it.' }
  ]
};
