// PLAB — PLAB 2 domain 1, data gathering, technical and assessment skills.
// Source: General Medical Council, PLAB guide pages on gmc-uk.org, as cited and quoted by
// Manus on 2026-10-09 (https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab
// and the plab-1-guide / plab-2-guide pages beneath it).
// NOTE: gmc-uk.org returns HTTP 403 (Cloudflare) to this worker, so the figures below are
// reproduced from the Manus retrieval of GMC pages and were NOT independently fetched here.
// GMC publishes no per-topic blueprint. Topic split below is StudyRoadmap's own organisation.
import type { Subject } from '../../types';
export const plabDataGathering: Subject = {
  id: 'data-gathering-technical-assessment', name: 'PLAB 2 — Data Gathering and Assessment', color: '#15803d',
  topics: [
    { id: 'dg-001', name: 'History Taking in an OSCE Station', weight: 5, description: 'Opening, structuring and summarising a consultation inside the station\'s time, and using a patient\'s cues to decide which questions to ask next rather than running a fixed script.' },
    { id: 'dg-002', name: 'Examination Technique and Sequence', weight: 5, description: 'Hands-on examination skills, correct instrument use, patient positioning, and the order that maximises yield while respecting the patient.' },
    { id: 'dg-003', name: 'Interpreting Clinical Tests', weight: 4, description: 'Reading and explaining investigations at the bedside, including blood results, imaging and simple ECGs, and saying what each does and does not show.' },
    { id: 'dg-004', name: 'Differential Diagnosis and Hypothesis Generation', weight: 5, description: 'Generating a ranked differential from the findings so far, discriminating between it on the evidence available, and knowing when the evidence is insufficient.' },
    { id: 'dg-005', name: 'Recognising and Managing the Deteriorating Patient', weight: 5, description: 'Escalating care, calling for senior help, using the emergency treatment algorithm, and staying safe and composed while doing it.' },
    { id: 'dg-006', name: 'Safety, Consent and Documentation', weight: 4, description: 'Informed consent, capacity, confidentiality, safeguarding, and the documentation and hand-over standards expected of a Foundation-level doctor.' },
  ],
};
