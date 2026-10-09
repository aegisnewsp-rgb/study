// PLAB — PLAB 2 domain 2, clinical management skills.
// Source: General Medical Council, PLAB guide pages on gmc-uk.org, as cited and quoted by
// Manus on 2026-10-09 (https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab
// and the plab-1-guide / plab-2-guide pages beneath it).
// NOTE: gmc-uk.org returns HTTP 403 (Cloudflare) to this worker, so the figures below are
// reproduced from the Manus retrieval of GMC pages and were NOT independently fetched here.
// GMC publishes no per-topic blueprint. Topic split below is StudyRoadmap's own organisation.
import type { Subject } from '../../types';
export const plabClinicalManagement: Subject = {
  id: 'clinical-management', name: 'PLAB 2 — Clinical Management', color: '#b45309',
  topics: [
    { id: 'cm-001', name: 'Core Data Interpretation in the Station', weight: 5, description: 'Turning the scenario, the examination findings and any supplied results into a working management plan inside the eight-minute station.' },
    { id: 'cm-002', name: 'Acute Prescribing and Safe Medication', weight: 5, description: 'Writing and speaking a safe prescription and drug chart, checking contraindications, interactions, allergies, weight-based dosing and renal adjustment.' },
    { id: 'cm-003', name: 'Fluid, Analgesia and Basic Supportive Care', weight: 4, description: 'Fluid balance, analgesia, anti-emetics, oxygen and monitoring, and the supportive framework every station assumes you will provide.' },
    { id: 'cm-004', name: 'Escalation, Handover and MDT Working', weight: 4, description: 'SBAC-style structured communication, referral decisions, handover standards, and when a Foundation-level doctor should stop and escalate.' },
    { id: 'cm-005', name: 'Chronic Disease Management in Primary Care', weight: 4, description: 'Long-term conditions in the community: type 2 diabetes, hypertension, asthma, COPD and CKD, framed as ongoing management rather than as admissions.' },
    { id: 'cm-006', name: 'Person-Centred Choices and Shared Decisions', weight: 4, description: 'Weighing options against the patient\'s stated priorities, explaining risks in plain language, and respecting a competent refusal.' },
  ],
};
