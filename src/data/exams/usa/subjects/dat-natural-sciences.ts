// DAT — Survey of the Natural Sciences.
// Source: American Dental Association, https://www.ada.org/education/testing/exams/dental-admission-test-dat
// — fetched and read independently by this worker on 2026-10-09 (HTTP 200). That page states the
// four sections and their item counts: Survey of the Natural Sciences (100 items), Perceptual
// Ability (90 items), Reading Comprehension (50 items) and Quantitative Reasoning (40 items), and
// a total administration time of five hours and 15 minutes.
// The Biology / General Chemistry / Organic Chemistry split inside the 100 items, and the 90-minute
// section timing, come from the ADA DAT Candidate Guide as retrieved by Manus
// (https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/education/dat_candidate_guide.pdf);
// ADA also states there that it announced updated Organic Chemistry Test Specifications for 2026.
// The ADA publishes no per-topic weightage. Weight values below are StudyRoadmap's own.
import type { Subject } from '../../types';
export const datNaturalSciences: Subject = {
  id: 'natural-sciences', name: 'Survey of the Natural Sciences', color: '#15803d',
  topics: [
    { id: 'ns-001', name: 'General Chemistry Foundations', weight: 5, description: 'Atomic structure, bonding and molecular geometry, stoichiometry and the mole concept, solutions and concentration, thermodynamics and equilibrium, acid-base chemistry, and electrochemistry.' },
    { id: 'ns-002', name: 'Organic Chemistry Structure and Reactivity', weight: 5, description: 'Functional groups and nomenclature, stereochemistry, reaction mechanisms including substitution, elimination and addition, and carbonyl chemistry. ADA updated its Organic Chemistry Test Specifications for 2026, so candidates testing from May 2026 onward should use the specifications in effect on their administration date.' },
    { id: 'ns-003', name: 'Biochemistry and Metabolism', weight: 5, description: 'Amino acid and protein structure, enzymology and kinetics, carbohydrate and lipid metabolism, nucleic acids, and vitamins and cofactors.' },
    { id: 'ns-004', name: 'General Biology and Physiology', weight: 5, description: 'Cell biology, genetics and inheritance, microbiology, immunology, anatomy and physiology of the major organ systems, and the digestive, nervous and endocrine systems in particular.' },
    { id: 'ns-005', name: 'Microbiology and Disease Processes', weight: 4, description: 'Bacterial, viral and fungal pathogens, disinfection and sterilisation, antimicrobial agents, and the mechanisms of infectious and inflammatory disease.' },
    { id: 'ns-006', name: 'Dental-Specific Biological Science', weight: 4, description: 'Oral anatomy, tooth development and eruption, enamel and dentine biology, oral microbiology including plaque and caries, and periodontal disease.' },
  ],
};
