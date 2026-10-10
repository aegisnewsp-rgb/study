// USMLE — Step 1, Step 2 CK and Step 3 study organisation.
// Official sources: https://www.usmle.org/ and https://www.nbme.org/
// (both retrieved HTTP 200 on 2026-10-09).
//
// VERIFIED from those sources: the United States Medical Licensing Examination is
// sponsored by the Federation of State Medical Boards (FSMB) and the National Board
// of Medical Examiners (NBME); it comprises Step 1, Step 2 CK and Step 3; and the
// official site states what each step assesses —
//   Step 1    : "assesses your understanding of basic sciences crucial for practicing
//               medicine"
//   Step 2 CK : "evaluates your clinical knowledge and ability to apply medical
//               concepts in patient care"
//   Step 3    : "tests your ability to apply medical knowledge and understanding of
//               biomedical and clinical science for unsupervised practice"
// NBME additionally lists Clinical Science Subject Exams, the IFOM, and NBME
// Self-Assessments as separate products.
//
// NOT VERIFIED and therefore NOT claimed anywhere in these files: item counts, block
// counts, time limits, the numeric scoring scale, pass/fail thresholds, fees, and the
// 2026 testing calendar. Those pages were not reachable from the build host. The topic
// lists below are OUR study organisation of the subject matter each step covers, not
// an NBME-published blueprint, and the `weight` values are our own prioritisation.
import type { Subject } from '../../types';

export const usmleStep1: Subject = {
  id: 'step-1', name: 'Step 1 (Basic Sciences)', color: '#1d4ed8',
  topics: [
    { id: 's1-001', name: 'Physiology of Core Systems', weight: 5, description: 'Cardiovascular, respiratory, renal and gastrointestinal physiology: pressure gradients, volume regulation, gas exchange, filtration and reabsorption, and how each system fails when stressed.' },
    { id: 's1-002', name: 'Biochemistry and Metabolism', weight: 5, description: 'Amino acid and nucleotide metabolism, energy production and oxidative phosphorylation, enzyme kinetics and inhibition, acid-base balance, and the lab values that distinguish a metabolic from a respiratory cause.' },
    { id: 's1-003', name: 'Anatomy and Embryology', weight: 4, description: 'Structure and development of the major organ systems; embryological origins that explain congenital anomalies; anatomical relationships that determine where a sign appears clinically.' },
    { id: 's1-004', name: 'Pathology: Cell Injury and Inflammation', weight: 5, description: 'Cellular adaptation, injury and death; acute and chronic inflammatory patterns; neoplasia including grading and behaviour; the general patterns of tissue response that underlie almost every disease question.' },
    { id: 's1-005', name: 'Pathology: Systemic Disease', weight: 5, description: 'Disease patterns organised by system — cardiovascular, respiratory, renal, gastrointestinal, endocrine and haematological — and the morphology that distinguishes one cause from another within each system.' },
    { id: 's1-006', name: 'Pharmacology', weight: 5, description: 'Drug classes, their targets, mechanisms and toxicities; autonomic and cardiovascular pharmacology; antimicrobial, endocrine and chemotherapeutic agents; interactions and adverse effects that change patient management.' },
    { id: 's1-007', name: 'Microbiology and Immunology', weight: 4, description: 'Bacterial, viral, fungal and parasitic organisms and their disease mechanisms; host immune responses including hypersensitivity and immunodeficiency; antimicrobial resistance.' },
    { id: 's1-008', name: 'Genetics and Molecular Biology', weight: 3, description: 'Mendelian and non-Mendelian inheritance patterns; gene structure and expression; chromosomal abnormalities; genomics as applied to diagnosis and risk assessment.' },
    { id: 's1-009', name: 'Neuroscience and Behaviour', weight: 4, description: 'Central and peripheral nervous system organisation; lesion localisation; neurotransmitter and receptor pharmacology; the biological basis of behaviour and psychiatric disease.' },
    { id: 's1-010', name: 'Epidemiology and Biostatistics', weight: 4, description: 'Study designs, measures of frequency and association, bias and confounding, and interpreting the statistical tests that appear in research and screening questions.' },
    { id: 's1-011', name: 'Public Health and Prevention', weight: 3, description: 'Screening criteria and their interpretation; immunisation schedules; communicable disease control; health systems, safety and the prevention strategies that change outcomes at population level.' },
    { id: 's1-012', name: 'Ethical and Legal Medicine', weight: 2, description: 'Consent, capacity, confidentiality and end-of-life decisions; the legal framework that governs clinical practice; the professional obligations that shape safe practice.' },
  ],
};