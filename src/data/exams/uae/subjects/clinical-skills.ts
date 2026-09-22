export const clinical_skills: Subject = {
  id: 'clinical-skills', name: 'Clinical-Skills', color: '#6b7280',
  topics: [
    { id: 'clinic-001', name: 'Vital Signs and Patient Assessment', weight: 5 as const, description: 'Measuring temperature, pulse, respiration, blood pressure, SpO2 and pain score - the first clinical skill tested in every DOH nursing scenario.' },
    { id: 'clinic-002', name: 'Patient Health History and Interviewing Techniques', weight: 4 as const, description: 'History-taking structure, open and closed questions, cultural sensitivity and documentation - tested in DOH nursing communication and assessment items.' },
    { id: 'clinic-003', name: 'General Physical Examination Techniques', weight: 5 as const, description: 'Head-to-toe examination, inspection, palpation, percussion and auscultation - applied across body systems in DOH clinical assessment items.' },
    { id: 'clinic-004', name: 'Medication Administration and Safety', weight: 5 as const, description: 'Five rights of medication administration, routes (oral, IM, IV, SC), dosage calculation, controlled-drug handling and adverse-event reporting - tested because medication error triggers a DOH patient-safety report.' },
    { id: 'clinic-005', name: 'Wound Assessment, Care, and Dressing Techniques', weight: 3 as const, description: 'Wound classification, aseptic dressing change, signs of infection and healing stages - tested in DOH medical and nursing practical items.' },
    { id: 'clinic-006', name: 'IV Cannulation and Venepuncture', weight: 4 as const, description: 'Site selection, aseptic technique, cannula care, blood sampling and complications - tested as a core DOH nursing skill in skills-lab and scenario items.' },
    { id: 'clinic-007', name: 'Oxygen Therapy and Respiratory Care', weight: 4 as const, description: 'Nasal cannula, mask selection, nebulisation, suctioning and tracheostomy care - tested in DOH acute and respiratory nursing items.' },
    { id: 'clinic-008', name: 'Basic Life Support and Emergency Response', weight: 5 as const, description: 'Adult and paediatric BLS, AED use, choking management and crash-cart familiarity - mandatory because DOH emergency-response scenarios appear in clinical exam items.' },
    { id: 'clinic-009', name: 'Urinary Catheterisation and Bladder Care', weight: 3 as const, description: 'Male and female catheterisation, catheter care, CAUTI prevention and bladder washout - tested as a routine DOH nursing skill.' },
    { id: 'clinic-010', name: 'NG Tube Insertion and Enteral Nutrition', weight: 3 as const, description: 'Insertion technique, position confirmation, feeding administration and complication monitoring - tested as a DOH nursing clinical skill.' }
  ]
};
