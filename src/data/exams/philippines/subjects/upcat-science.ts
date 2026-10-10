// UPCAT — Science subtest.
// Official source: https://upcat.up.edu.ph/htmls/aboutupcat.html (UP Office of Admissions,
// retrieved 2026-10-09). UP names "Science" as one of four UPCAT subtests and publishes no
// syllabus, question count, duration or weightage for it.
// The topic split below is StudyRoadmap's own organisation of general science study, NOT an
// UP-published blueprint. Weight values are our prioritisation only.
import type { Subject } from '../../types';
export const upcatScience: Subject = {
  id: 'science', name: 'Science', color: '#15803d',
  topics: [
    { id: 'sci-001', name: 'Biological Systems and Human Physiology', weight: 5, description: 'Cell structure and function, genetics and inheritance, nutrition, respiration, circulation, excretion, the nervous and endocrine systems, and homeostasis as the organising idea behind them.' },
    { id: 'sci-002', name: 'Chemistry: Matter, Bonding and Reactions', weight: 5, description: 'Atomic structure, the periodic trends, chemical and ionic bonding, acids and bases, stoichiometry, equilibrium and rates, and the organic families that matter in biology.' },
    { id: 'sci-003', name: 'Physics: Motion, Forces and Energy', weight: 4, description: 'Describing motion quantitatively, Newton\'s laws, work, energy and power, momentum, waves and sound, electricity at the level an entrance test uses it, and the everyday physics of fluids and heat.' },
    { id: 'sci-004', name: 'Earth Science and Environmental Systems', weight: 4, description: 'Plate tectonics, the rock cycle, the water cycle, weather and climate, atmospheric structure, and human impact on ecosystems.' },
    { id: 'sci-005', name: 'Scientific Method and Data Interpretation', weight: 4, description: 'Designing and interpreting controlled experiments, distinguishing correlation from causation, reading graphs and tables, and evaluating a claim from the evidence given rather than from background belief.' },
    { id: 'sci-006', name: 'Biodiversity, Ecology and Evolution', weight: 3, description: 'Population dynamics, food webs and energy flow, natural selection and speciation, and the classification of living organisms.' },
  ],
};
