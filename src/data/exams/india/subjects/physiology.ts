export const physiology: Subject = {
  id: 'physiology', name: 'Physiology', color: '#6b7280',
  topics: [
    { id: 'physio-001', name: 'General Physiology & Cell', weight: 3 as const, description: 'Body fluids, membrane transport, resting membrane potential, Nernst equation, Goldman equation - foundational concepts tested frequently in NEET PG.' },
    { id: 'physio-002', name: 'Blood', weight: 3 as const, description: 'RBC, WBC, platelets, blood groups, coagulation cascade, hemoglobin variants - high-yield haematology frequently integrated with pathology.' },
    { id: 'physio-003', name: 'Nerve & Muscle', weight: 3 as const, description: 'Neuron structure, nerve conduction, synapse, neurotransmitters, muscle contraction mechanism, NMJ - direct questions and clinical correlations.' },
    { id: 'physio-004', name: 'Gastrointestinal System', weight: 3 as const, description: 'GI secretions, motility, digestion, absorption, GI hormones (gastrin, secretin, CCK) - integrated with biochemistry and pharmacology.' },
    { id: 'physio-005', name: 'Cardiovascular System', weight: 3 as const, description: 'Cardiac cycle, ECG, cardiac output, blood pressure regulation, coronary circulation - large weightage with many direct questions.' },
    { id: 'physio-006', name: 'Respiratory System', weight: 3 as const, description: 'Ventilation, gas exchange, O2-CO2 transport, hypoxia types, respiratory adjustments - frequently combined with pathology.' },
    { id: 'physio-007', name: 'Renal System', weight: 3 as const, description: 'GFR, tubular functions, micturition, acid-base balance, diuretics - high-yield with direct clinical application questions.' },
    { id: 'physio-008', name: 'Endocrine System', weight: 3 as const, description: 'Pituitary, thyroid, adrenal, parathyroid, pancreas hormones - heavily tested with integration across medicine and surgery.' },
    { id: 'physio-009', name: 'Reproductive System', weight: 3 as const, description: 'Gametogenesis, menstrual cycle, pregnancy, lactation, contraceptive methods - OBG integration with clinical scenarios.' },
    { id: 'physio-010', name: 'Central Nervous System', weight: 3 as const, description: 'Reflexes, sensory and motor pathways, HMS, BASAL GANGLIA, CEREBELLUM, hypothalamus, sleep - highest weightage in CNS.' }
  ]
};
