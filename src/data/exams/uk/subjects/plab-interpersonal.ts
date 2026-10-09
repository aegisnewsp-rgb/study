// PLAB — PLAB 2 domain 3, interpersonal skills.
// Source: General Medical Council, PLAB guide pages on gmc-uk.org, as cited and quoted by
// Manus on 2026-10-09 (https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab
// and the plab-1-guide / plab-2-guide pages beneath it).
// NOTE: gmc-uk.org returns HTTP 403 (Cloudflare) to this worker, so the figures below are
// reproduced from the Manus retrieval of GMC pages and were NOT independently fetched here.
// GMC publishes no per-topic blueprint. Topic split below is StudyRoadmap's own organisation.
import type { Subject } from '../../types';
export const plabInterpersonal: Subject = {
  id: 'interpersonal-skills', name: 'PLAB 2 — Interpersonal Skills', color: '#7c3aed',
  topics: [
    { id: 'is-001', name: 'Building Rapport Quickly Under a Timer', weight: 5, description: 'The first thirty seconds of a station decide whether the candidate listens or talks. Openers, agenda-setting and demonstrating that you have followed the patient\'s concern.' },
    { id: 'is-002', name: 'Active Listening and Reflecting Back', weight: 5, description: 'Paraphrase, summarise and check understanding — the techniques that produce the listening marks examiners are looking for, and that candidates most often skip under time pressure.' },
    { id: 'is-003', name: 'Explaining Bad News and Difficult Issues', weight: 5, description: 'Breaking bad news step by step, checking understanding, responding to an emotional reaction, and avoiding false reassurance.' },
    { id: 'is-004', name: 'Explaining Diagnosis, Results and Treatment', weight: 5, description: 'Making a diagnosis intelligible to a non-specialist, explaining results and side effects, and checking that the patient has actually understood.' },
    { id: 'is-005', name: 'Consent, Capacity and Confidentiality', weight: 4, description: 'Genuine consent rather than signature collection, assessing capacity, and handling the confidentiality and safeguarding dilemmas a station may set up.' },
    { id: 'is-006', name: 'Working Across Cultures, Languages and Ages', weight: 4, description: 'Adapting your communication to a patient who speaks another language, has low literacy, or is very old or very young, without losing clinical content.' },
  ],
};
