export const nursing: Subject = {
  id: 'nursing', name: 'Nursing', color: '#6b7280',
  topics: [
    { id: 'nursin-001', name: 'Fundamentals of Nursing', weight: 5 as const, description: 'Nursing process, basic patient care, comfort, hygiene, mobility and vital signs - tested at the start of every HAAD nursing scenario.' },
    { id: 'nursin-002', name: 'Anatomy and Physiology for Nurses', weight: 4 as const, description: 'Organ-system anatomy and physiology applied to bedside assessment - tested as the structural baseline for every HAAD clinical nursing item.' },
    { id: 'nursin-003', name: 'Pharmacology for Nurses', weight: 5 as const, description: 'Drug classes, doses, routes, adverse effects and nurse-led monitoring - tested because medication administration is a core HAAD nursing responsibility.' },
    { id: 'nursin-004', name: 'Medical-Surgical Nursing', weight: 5 as const, description: 'Pre- and post-operative care, wound management, IV therapy, fluid and electrolyte management and chronic-disease nursing - tested across the broad adult inpatient scenarios on HAAD.' },
    { id: 'nursin-005', name: 'Pediatric Nursing', weight: 4 as const, description: 'Growth and development, paediatric vital signs, common childhood illness, immunisation and family-centred care - tested in HAAD paediatric nursing items.' },
    { id: 'nursin-006', name: 'Obstetric and Gynecological Nursing', weight: 4 as const, description: 'Antenatal care, labour and delivery, postnatal care and common gynaecological conditions - tested in HAAD OB/GYN nursing items.' },
    { id: 'nursin-007', name: 'Community Health Nursing', weight: 3 as const, description: 'Health promotion, epidemiology, vaccination and home-based care - tested as the public-health and primary-care framing in HAAD community nursing items.' },
    { id: 'nursin-008', name: 'Nursing Ethics and Professional Practice', weight: 5 as const, description: 'Patient rights, informed consent, confidentiality, scope of practice and the UAE Code of Professional Conduct - mandatory because the HAAD Standard for Licensing Examinations lists professional ethics as examined content.' }
  ]
};
