// NUMS MDCAT — Biology component.
// Source: NUMS "2026 NUMS Updated MDCAT Terms of Conditions" and the 2026 NUMS MDCAT
// advertisement, both hosted on numspak.edu.pk, as cited and quoted by Manus
// (https://numspak.edu.pk/upload/media/2026-NUMS-Updated-MDCAT-TOS-2026_1779075557.pdf).
// NOTE: numspak.edu.pk returns HTTP 403 to this worker, so these figures are reproduced from
// the Manus retrieval of the official documents and were NOT independently fetched here.
// The official structure is: Paper I carries 150 one-best-option MCQs across Biology (55),
// Chemistry (40), Physics (40) and English (15), and NUMS states that for Biology, Chemistry
// and Physics "70% of questions will be recall-level and 30% application-level".
// The topic split below is StudyRoadmap's own study organisation. NUMS publishes detailed
// content lists but no topic-level percentage allocation. Weight values are our prioritisation.
import type { Subject } from '../../types';
export const numsBiology: Subject = {
  id: 'biology', name: 'Biology', color: '#15803d',
  topics: [
    { id: 'bio-001', name: 'Cell Biology and Cell Division', weight: 5, description: 'Cell structure and organelles, membrane transport, cell signalling, mitosis and meiosis — including the chromosome-number changes that separate the two.' },
    { id: 'bio-002', name: 'Genetics and Molecular Biology', weight: 5, description: 'DNA replication and transcription, translation, Mendelian inheritance, linkage and sex determination, and mutations.' },
    { id: 'bio-003', name: 'Human Physiology: Systems and Homeostasis', weight: 5, description: 'Digestion and absorption, circulation and blood, respiration, excretion, the nervous and endocrine systems, and homeostasis as the mechanism tying them together.' },
    { id: 'bio-004', name: 'Biochemistry and Metabolism', weight: 4, description: 'Enzyme kinetics and inhibition, ATP generation, carbohydrate, lipid and protein metabolism, and how the three pathways interlock.' },
    { id: 'bio-005', name: 'Microbiology and Immunology', weight: 4, description: 'Bacteria, viruses and fungi, sterilisation, antimicrobial action, innate and adaptive immunity, and the shape of an antibody response.' },
    { id: 'bio-006', name: 'Ecology and Applied Biology', weight: 3, description: 'Population and community ecology, food chains and energy flow, biogeochemical cycles, and human impact on ecosystems.' },
  ],
};
