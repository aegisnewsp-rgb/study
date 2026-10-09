// USMLE Step 3 — study organisation.
// Official sources: https://www.usmle.org/ and https://www.nbme.org/
// (retrieved HTTP 200 on 2026-10-09).
// VERIFIED: Step 3 "tests your ability to apply medical knowledge and
// understanding of biomedical and clinical science for unsupervised practice"
// and is described as "one of the final steps to licensure".
// NOT VERIFIED: item counts, timing, scoring scale, fees, 2026 calendar.
// Topic lists are OUR organisation, not an NBME blueprint; weights are ours.
import type { Subject } from '../../types';

export const usmleStep3: Subject = {
  id: 'step-3', name: 'Step 3 (Unsupervised Practice)', color: '#7e22ce',
  topics: [
    { id: 's3-001', name: 'Management and Initial Stabilisation', weight: 5, description: 'The opening minutes of an encounter: how to prioritise competing problems, decide what is immediately life-threatening, and structure a management plan under time pressure.' },
    { id: 's3-002', name: 'Undifferentiated and New Presentations', weight: 5, description: 'Problems with no clear diagnosis yet — how to build and narrow a differential safely, decide on investigations, and manage while the picture is still incomplete.' },
    { id: 's3-003', name: 'Inpatient and Discharge Management', weight: 4, description: 'Managing an unwell admitted patient, monitoring response to treatment, deciding when a patient is safe for discharge, and writing a discharge plan that prevents readmission.' },
    { id: 's3-004', name: 'Emergency and Critical Care', weight: 4, description: 'Recognising and managing the time-critical presentations; basic and advanced life support principles; escalation decisions and the handover that matters.' },
    { id: 's3-005', name: 'Chronic Disease Management', weight: 4, description: 'Long-term conditions and the follow-up that keeps them stable; adjusting therapy over time; coordinating multidisciplinary care; when to escalate or refer.' },
    { id: 's3-006', name: 'Patient Safety and Health Systems', weight: 4, description: 'Recognising deterioration early; error prevention and reporting; transitions of care and handoffs; quality improvement and the systems-level causes of unsafe care.' },
    { id: 's3-007', name: 'Professionalism and Team Care', weight: 3, description: 'Working within a team and referring appropriately; scope of practice; professional behaviour, documentation and the ethical duties that survive the shift.' },
    { id: 's3-008', name: 'Practice Management and Health Economics', weight: 3, description: 'Financing and organising healthcare; cost-effectiveness reasoning; resource allocation and the trade-offs a clinician makes under constraint.' },
  ],
};
