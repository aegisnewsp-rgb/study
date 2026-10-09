// GAMSAT — Biological and Physical Sciences section.
// Official source: https://www.acer.edu.au/gamsat (ACER, retrieved 2026-10-09)
// ACER states the section is "Biological and Physical Sciences - 75 multiple choice
// questions" and "Assesses ability to identify knowledge in new contexts, and analyse
// and interpret data". The sub-topic split below is OUR study organisation of that
// 75-item pool - it is NOT an ACER-published topic weightage and must not be quoted
// as one. ACER publishes no official per-topic weightage for this section.
import type { Subject } from '../../types';
export const gamsatBioPhysical: Subject = {
  id: 'bio-physical-sciences', name: 'Biological and Physical Sciences', color: '#0f766e',
  topics: [
    { id: 'bps-001', name: 'Data Analysis and Graph Interpretation', weight: 5, description: 'Reading axes, scales and units on scientific graphs; interpreting line, bar, scatter and pie plots; spotting trends, correlations, outliers and rates of change; interpreting error bars and what a spread in repeated readings actually indicates.' },
    { id: 'bps-002', name: 'Molecular Biology and Genetics', weight: 5, description: 'DNA and RNA structure and replication, transcription and translation; Mendelian inheritance patterns and pedigree tracing; gene expression regulation; mutations and their consequences; ATP and the basics of cellular respiration.' },
    { id: 'bps-003', name: 'Cell Biology and Physiology', weight: 5, description: 'Cell organelles and what each does; membrane transport including diffusion, osmosis and active transport; enzyme kinetics including factors that change rate and what saturation means; homeostasis in human systems.' },
    { id: 'bps-004', name: 'Human Physiology Systems', weight: 4, description: 'Circulation and cardiac cycle, gas exchange and transport, renal filtration and fluid balance, nervous signalling and synaptic transmission, endocrine feedback loops and how a hormone cascade is regulated.' },
    { id: 'bps-005', name: 'Chemistry Foundations', weight: 4, description: 'Atomic structure and periodic trends; bonding and molecular shape; mole concept, stoichiometry and limiting reagents; solution concentration, pH and buffer behaviour; energy changes in reactions.' },
    { id: 'bps-006', name: 'Physics for the Biological Sciences', weight: 4, description: 'Motion and force relationships, work and energy, pressure and gas behaviour relevant to respiration and circulation, electricity and membrane potentials, and wave behaviour including light and sound.' },
    { id: 'bps-007', name: 'Ecology and Environment', weight: 3, description: 'Population dynamics and carrying capacity; energy flow and nutrient cycling through ecosystems; biodiversity loss and its drivers; human impact on ecological systems.' },
    { id: 'bps-008', name: 'Disease, Immunity and Pharmacology', weight: 3, description: 'Innate and adaptive immunity; disease mechanisms including infection, inflammation and neoplasia; how drug classes act on targets and why resistance develops.' },
    { id: 'bps-009', name: 'Evolution and Classification', weight: 2, description: 'Mechanisms of natural and sexual selection; speciation and adaptive radiation; evidence for evolution from comparative anatomy, genetics and the fossil record; taxonomic classification systems.' },
    { id: 'bps-010', name: 'Scientific Method and Experimental Design', weight: 3, description: 'Formulating a testable hypothesis, controlling variables, replication and sample size; interpreting statistical uncertainty and distinguishing correlation from causation; evaluating a flawed experimental design and saying why it is flawed.' },
  ],
};