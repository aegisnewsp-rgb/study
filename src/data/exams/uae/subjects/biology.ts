export const biology: Subject = {
  id: 'biology', name: 'Biology', color: '#16a34a',
  topics: [
    { id: 'biolog-001', name: 'Human Anatomy', weight: 5 as const, description: 'Gross anatomy of organ systems, regional anatomy, surface markings and clinical correlations relevant to HAAD physician scope.' },
    { id: 'biolog-002', name: 'Human Physiology', weight: 5 as const, description: 'Cardiovascular, respiratory, renal, gastrointestinal, endocrine and neurophysiology - core body function for HAAD licensing.' },
    { id: 'biolog-003', name: 'Cell Biology and Histology', weight: 4 as const, description: 'Cell structure, membrane transport, division, tissue types and microscopic identification of epithelia, connective, muscle and nerve.' },
    { id: 'biolog-004', name: 'Biochemistry', weight: 4 as const, description: 'Amino acids, proteins, enzymes, carbohydrates, lipids, nucleic acids and major metabolic pathways tested in HAAD pre-clinical MCQs.' },
    { id: 'biolog-005', name: 'Pathology', weight: 4 as const, description: 'General pathology of inflammation, neoplasia, hemodynamic disorders and disease mechanisms applied across organ systems.' },
    { id: 'biolog-006', name: 'Microbiology', weight: 3 as const, description: 'Bacteriology, virology, mycology and parasitology basics - classification, pathogenesis and clinically important organisms.' },
    { id: 'biolog-007', name: 'Genetics and Molecular Biology', weight: 3 as const, description: 'Mendelian inheritance, chromosomal disorders, DNA replication, gene expression and basic molecular diagnostic concepts.' },
    { id: 'biolog-008', name: 'Immunology', weight: 3 as const, description: 'Innate and adaptive immunity, antibodies, complement, hypersensitivity and vaccination principles relevant to clinical practice.' },
    { id: 'biolog-009', name: 'Parasitology', weight: 2 as const, description: 'Life cycles, transmission, clinical features and diagnosis of major protozoan and helminthic parasites encountered regionally.' },
    { id: 'biolog-010', name: 'Embryology and Development', weight: 2 as const, description: 'Gametogenesis, fertilization, early embryonic development, fetal membranes and organogenesis milestones.' }
  ]
};