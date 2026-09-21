// Medical College Admission Test (MCAT) — Biological and Biochemical
// Foundations of Living Systems (Bio/Biochem).
//
// Awarding body: Association of American Medical Colleges (AAMC).
// The Bio/Biochem section tests first-year biology, organic chemistry,
// and biochemistry concepts in the context of living systems. AAMC
// organises the content into ten foundational concepts grouped under
// four content categories: biomolecules, organ systems, energy and
// metabolism, and genetics and molecular biology.
//
// Source: AAMC, What's on the MCAT Exam? (PDF Outline),
//   https://students-residents.aamc.org/prepare-mcat-exam/whats-mcat-exam-pdf-outline
// Source: AAMC, MCAT content outline download,
//   https://students-residents.aamc.org/media/9261/download
// Verify the live section length, scoring, and any in-year content
// changes on aamc.org before committing a revision plan to a student.

import type { Subject } from '../../types';

export const bioBiochem: Subject = {
  id: 'bio-biochem',
  name: 'Biological and Biochemical Foundations of Living Systems',
  color: '#16a34a',
  topics: [
    { id: 'mcatbb-001', name: 'Biomolecules: Amino Acids, Proteins and Enzymes', weight: 5 as const, description: 'Amino acid structure and properties, peptide bonds, protein primary through quaternary structure, enzyme kinetics (Michaelis-Menten, Lineweaver-Burk), enzyme regulation and inhibition. AAMC Foundational Concept 1.' },
    { id: 'mcatbb-002', name: 'Biomolecules: Carbohydrates, Lipids and Nucleotides', weight: 4 as const, description: 'Monosaccharides, glycosidic bonds, polysaccharides, fatty acids, triglycerides, phospholipids, sterols, nitrogenous bases, nucleotides, and the structural roles of these biomolecules. AAMC Foundational Concept 1.' },
    { id: 'mcatbb-003', name: 'Cellular and Molecular Biology', weight: 5 as const, description: 'Eukaryotic and prokaryotic cell structure, membrane transport, the cytoskeleton, organelles, cell signalling, cell cycle, mitosis and meiosis, and the molecular biology of the cell. AAMC Foundational Concept 2.' },
    { id: 'mcatbb-004', name: 'Genetics and Evolution', weight: 4 as const, description: 'Mendelian genetics, extensions of Mendel, linkage and recombination, gene expression (transcription, translation), gene regulation, DNA replication and repair, and population genetics. AAMC Foundational Concept 2.' },
    { id: 'mcatbb-005', name: 'Metabolism: Glycolysis, Krebs and Oxidative Phosphorylation', weight: 5 as const, description: 'Glycolysis, pyruvate dehydrogenase, the citric acid cycle, electron transport chain, oxidative phosphorylation, the chemiosmotic mechanism, and ATP yield. AAMC Foundational Concept 3.' },
    { id: 'mcatbb-006', name: 'Metabolism: Lipids, Amino Acids and Integrated Pathways', weight: 4 as const, description: 'Beta-oxidation, fatty acid synthesis, ketogenesis, amino acid catabolism, the urea cycle, gluconeogenesis, the pentose phosphate pathway, and metabolic regulation. AAMC Foundational Concept 3.' },
    { id: 'mcatbb-007', name: 'Digestive and Excretory Systems', weight: 3 as const, description: 'Digestive enzymes and absorption, the hepatic portal system, kidney structure, glomerular filtration, tubular reabsorption and secretion, and acid-base balance. AAMC Foundational Concept 4.' },
    { id: 'mcatbb-008', name: 'Musculoskeletal, Immune and Reproductive Systems', weight: 4 as const, description: 'Skeletal muscle contraction, the sarcomere, calcium regulation, innate and adaptive immunity, antibody structure and function, hormonal control of reproduction, and the menstrual cycle. AAMC Foundational Concept 4.' }
  ]
};
