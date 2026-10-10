// USMLE Step 2 CK — study organisation.
// Official sources: https://www.usmle.org/ and https://www.nbme.org/
// (retrieved HTTP 200 on 2026-10-09).
// VERIFIED: Step 2 CK "evaluates your clinical knowledge and ability to apply
// medical concepts in patient care".
// NOT VERIFIED: item counts, timing, scoring scale, fees, 2026 calendar.
// Topic lists are OUR organisation, not an NBME blueprint; weights are ours.
import type { Subject } from '../../types';

export const usmleStep2ck: Subject = {
  id: 'step-2-ck', name: 'Step 2 CK (Clinical Knowledge)', color: '#0e7490',
  topics: [
    { id: 's2-001', name: 'Internal Medicine Core', weight: 5, description: 'Cardiovascular, pulmonary, gastrointestinal, renal, endocrine and rheumatologic presentations — recognising the pattern, choosing the right next investigation, and avoiding the common mimics.' },
    { id: 's2-002', name: 'Medicine by Presentation', weight: 5, description: 'Working a problem from presenting complaint rather than from diagnosis: chest pain, dyspnoea, jaundice, oedema, fever, weight loss and the differential that each must rule out.' },
    { id: 's2-003', name: 'Obstetrics and Gynaecology', weight: 4, description: 'Antenatal care and the normal progression of pregnancy; complications of each trimester; labour and delivery management; gynaecological presentations and their investigation pathway.' },
    { id: 's2-004', name: 'Paediatrics', weight: 4, description: 'The sick child by age group; growth and developmental milestones; neonatal care and its immediate complications; paediatric immunisation and common congenital problems.' },
    { id: 's2-005', name: 'Surgery and Perioperative Care', weight: 4, description: 'Acute abdomen and its surgical causes; wound care, sepsis and perioperative risk; trauma assessment; principles of elective surgery and postoperative complications.' },
    { id: 's2-006', name: 'Psychiatry and Behavioural Medicine', weight: 3, description: 'Mood, anxiety, psychotic and substance-related disorders; suicide risk assessment and management; capacity and involuntary care; the behavioural and psychosocial issues that alter a management plan.' },
    { id: 's2-007', name: 'Prevention and Public Health in Practice', weight: 3, description: 'Screening and prevention applied to individual patients; vaccination decisions; health maintenance; interpreting screening results honestly rather than reflexively ordering the next test.' },
    { id: 's2-008', name: 'Ethics, Law and Communication', weight: 3, description: 'Informed consent, confidentiality and end-of-life decisions; breaking bad news and communicating with families; clinical ethics when guidelines conflict; professional boundaries.' },
    { id: 's2-009', name: 'Diagnostic Testing and Imaging', weight: 4, description: 'Choosing and interpreting laboratory and imaging investigations; pre-test probability and what a result actually means for this patient; avoiding unnecessary testing.' },
    { id: 's2-010', name: 'Pharmacology in Clinical Scenarios', weight: 4, description: 'Selecting and dosing drugs in real presentations; contraindications and monitoring; pain control, anticoagulation, and the interactions that cause avoidable harm.' },
  ],
};
