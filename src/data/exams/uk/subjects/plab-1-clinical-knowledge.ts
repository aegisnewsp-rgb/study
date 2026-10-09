// PLAB — PLAB 1, the written paper of 180 single-best-answer questions.
// Source: General Medical Council, PLAB guide pages on gmc-uk.org, as cited and quoted by
// Manus on 2026-10-09 (https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab
// and the plab-1-guide / plab-2-guide pages beneath it).
// NOTE: gmc-uk.org returns HTTP 403 (Cloudflare) to this worker, so the figures below are
// reproduced from the Manus retrieval of GMC pages and were NOT independently fetched here.
// GMC publishes no per-topic blueprint. Topic split below is StudyRoadmap's own organisation.
import type { Subject } from '../../types';
export const plabOneClinicalKnowledge: Subject = {
  id: 'plab-1-clinical-knowledge', name: 'PLAB 1 — Clinical Knowledge', color: '#0e7490',
  topics: [
    { id: 'p1-001', name: 'Medicine: Systems and Diagnosis', weight: 5, description: 'Presenting problems across cardiology, respiratory, gastroenterology, endocrinology, renal, neurology, haematology, rheumatology and infectious disease, framed as clinical scenarios rather than as a disease list.' },
    { id: 'p1-002', name: 'Surgery and the Pre-operative Patient', weight: 5, description: 'Common surgical presentations, abdominal and orthopaedic problems, wound healing, infection, peri-operative risk and the management of the surgical patient.' },
    { id: 'p1-003', name: 'Obstetrics and Paediatrics', weight: 5, description: 'Antenatal care and common complications, labour and its emergencies, postnatal care, and paediatric presentations including the diseases of the newborn and childhood infection.' },
    { id: 'p1-004', name: 'Psychiatry', weight: 4, description: 'Common psychiatric presentations, the mental state examination, mood disorders, psychosis, and the boundaries between organic and psychiatric illness.' },
    { id: 'p1-005', name: 'General Practice and Public Health', weight: 4, description: 'The consultation in general practice, prescribing safely, preventive medicine, immunisation, screening, and the social and legal framework of UK health practice.' },
    { id: 'p1-006', name: 'Data Interpretation and Clinical Reasoning', weight: 5, description: 'Reading ECGs, chest and abdominal radiographs, blood results and drug charts, then reasoning from the scenario the GMC gives around each one.' },
  ],
};
