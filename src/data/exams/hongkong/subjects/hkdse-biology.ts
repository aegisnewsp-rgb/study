// HKDSE Biology — Awarding body: Hong Kong Examinations and Assessment
// Authority (HKEAA). Source: 2026 HKDSE Biology Assessment Framework,
//   https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/bio/2026hkdse-e-bio.pdf
// and the CDC/HKEAA Biology Curriculum and Assessment Guide (Secondary 4 - 6),
//   https://www.edb.gov.hk/attachment/en/curriculum-development/kla/science-edu/Bio_C_and_A_Guide_updated_e_20151126.pdf
// Compulsory Part covers four published topics: I. Cells and Molecules of
// Life; II. Genetics and Evolution; III. Organisms and Environment; IV.
// Health and Diseases. Elective Part has four published topics and
// candidates attempt any two: V. Human Physiology: Regulation and Control;
// VI. Applied Ecology; VII. Microorganisms and Humans; VIII. Biotechnology.
// Assessment: Paper 1 (Compulsory Part, 60%, 2.5 hours — Section A MCQ 18%
// + Section B short/structured/essay 42%); Paper 2 (Elective Part, 20%, 1
// hour — structured questions on the two chosen electives); School-based
// Assessment (20% — Practical Skills 8% + Investigative Work 12%, with at
// least one assessment in each of S5 and S6). Re-check the live elective
// choice policy and SBA arrangement on hkeaa.edu.hk before committing.

import type { Subject } from '../../types';

export const hkdseBiology: Subject = {
  id: 'hkdse-biology',
  name: 'Biology',
  color: '#10b981',
  topics: [
    { id: 'hkdse-bio-001', name: 'I. Cells and Molecules of Life', weight: 5 as const, description: 'Molecules of life (water, carbohydrates, lipids, proteins, nucleic acids); cellular organisation (prokaryotic and eukaryotic cells, organelles); movement of substances across membranes (diffusion, osmosis, active transport, endocytosis, exocytosis); cell cycle and division (mitosis, meiosis); cellular energetics (photosynthesis, respiration, enzymes).' },
    { id: 'hkdse-bio-002', name: 'II. Genetics and Evolution', weight: 4 as const, description: 'Basic genetics (Mendel\'s laws, monohybrid and dihybrid crosses, sex-linked inheritance); molecular genetics (DNA structure and replication, transcription, translation, gene expression and regulation, mutations, genetic engineering); biodiversity and evolution (evidence for evolution, mechanisms, speciation, classification).' },
    { id: 'hkdse-bio-003', name: 'III. Organisms and Environment', weight: 5 as const, description: 'Essential life processes in plants (photosynthesis, transport, transpiration, plant hormones); essential life processes in animals (nutrition, digestion, circulation, gas exchange); reproduction, growth and development (human reproductive systems, flowering plant reproduction); coordination and response (nervous system, sense organs, hormones in animals); homeostasis (temperature regulation, osmotic and glucose regulation); ecosystems (energy flow, biogeochemical cycles, population dynamics).' },
    { id: 'hkdse-bio-004', name: 'IV. Health and Diseases', weight: 3 as const, description: 'Personal health (lifestyle choices, immunity, nutrition); diseases (pathogens, communicable and non-communicable diseases, prevention and treatment); body defence mechanisms (non-specific and specific immunity, antibodies, vaccination, immunological memory).' },
    { id: 'hkdse-bio-005', name: 'V. Human Physiology — Regulation and Control (Elective)', weight: 2 as const, description: 'Regulation of water content (osmoregulation in kidney); regulation of body temperature (mechanisms in mammals); regulation of gas content in blood (oxygen and carbon dioxide transport, ventilation control); hormonal control of the reproductive cycle (menstrual cycle, oestrogen, progesterone, FSH, LH).' },
    { id: 'hkdse-bio-006', name: 'VI. Applied Ecology (Elective)', weight: 2 as const, description: 'Human impact on the environment (pollution, habitat destruction, climate change); pollution control (monitoring, mitigation, legislation); conservation (in-situ and ex-situ, biodiversity hotspots, protected areas); global issues (acid rain, ozone depletion, eutrophication, sustainable development).' },
    { id: 'hkdse-bio-007', name: 'VII. Microorganisms and Humans (Elective)', weight: 2 as const, description: 'Microbiology (bacteria, viruses, fungi, growth and culture); use of microorganisms (in food production, biotechnology, sewage treatment); microbial genetics (recombination, plasmids, gene transfer); harmful effects of microorganisms (pathogenic mechanisms, antibiotic resistance).' },
    { id: 'hkdse-bio-008', name: 'VIII. Biotechnology (Elective)', weight: 2 as const, description: 'Techniques in modern biotechnology (recombinant DNA technology, PCR, gel electrophoresis, DNA sequencing, cloning, monoclonal antibodies); applications in biotechnology (medical, agricultural, industrial); bioethics (genetic testing, GM organisms, cloning, ownership of genetic material).' }
  ]
};