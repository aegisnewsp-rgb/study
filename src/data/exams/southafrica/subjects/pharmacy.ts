export const pharmacy: Subject = {
  id: 'pharmacy', name: 'Pharmacy', color: '#6b7280',
  topics: [
    { id: 'pharma-001', name: 'Drug Nomenclature and Classification', weight: 2 as const, description: 'Chemical, generic, and brand names; WHO ATC classification; Schedule 1 to 5 categories; and naming conventions for biosimilars and generics.' },
    { id: 'pharma-002', name: 'Pharmacokinetics - ADME', weight: 5 as const, description: 'Absorption, distribution, metabolism, excretion overview; bioavailability, first-pass effect, volume of distribution, and clearance calculations.' },
    { id: 'pharma-003', name: 'Pharmacokinetics - Absorption', weight: 4 as const, description: 'Routes of administration, factors affecting absorption, bioavailability, Fick\'s law, and bioequivalence of generic formulations.' },
    { id: 'pharma-004', name: 'Pharmacokinetics - Distribution', weight: 4 as const, description: 'Plasma protein binding, tissue distribution, apparent volume of distribution, blood-brain and placental barriers, and drug reservoirs.' },
    { id: 'pharma-005', name: 'Pharmacokinetics - Metabolism', weight: 4 as const, description: 'Phase I and Phase II reactions, cytochrome P450 induction and inhibition, prodrug activation, and hepatic clearance.' },
    { id: 'pharma-006', name: 'Drug-Receptor Interactions and Pharmacodynamics', weight: 5 as const, description: 'Agonists, antagonists, partial agonists, dose-response curves, EC50, therapeutic index, and receptor desensitisation.' },
    { id: 'pharma-007', name: 'Pharmacokinetics - Elimination', weight: 4 as const, description: 'Renal and biliary excretion, half-life, steady-state, Cockcroft-Gault creatinine clearance, and dose adjustments in renal impairment.' },
    { id: 'pharma-008', name: 'Drug Interactions', weight: 4 as const, description: 'Pharmacokinetic and pharmacodynamic interactions, CYP450-mediated interactions, and common synergisms and antagonisms in polypharmacy.' },
    { id: 'pharma-009', name: 'Adverse Drug Reactions and Pharmacovigilance', weight: 4 as const, description: 'Type A and B reactions, allergic and idiosyncratic responses, pharmacovigilance reporting, and causality assessment scales.' },
    { id: 'pharma-010', name: 'Clinical Pharmacy and Pharmaceutical Care', weight: 5 as const, description: 'Patient medication review, pharmaceutical care plans, SOAP notes, drug therapy monitoring, and ward-round participation.' },
    { id: 'pharma-011', name: 'Infectious Disease and Antimicrobial Therapy', weight: 3 as const, description: 'Antibiotic classes, spectrum of activity, resistance mechanisms, antimicrobial stewardship, TB and HIV therapy regimens.' },
    { id: 'pharma-012', name: 'Cardiovascular Drugs', weight: 3 as const, description: 'Antihypertensives (ACE-I, ARBs, beta-blockers, CCBs), statins, antiplatelets, anticoagulants, and heart failure pharmacology.' },
    { id: 'pharma-013', name: 'Central Nervous System Drugs', weight: 3 as const, description: 'Anxiolytics, antipsychotics, antidepressants, anticonvulsants, and anaesthetics - mechanisms, side effects, and dependency risks.' },
    { id: 'pharma-014', name: 'Endocrine and Metabolic Drugs', weight: 3 as const, description: 'Insulin and oral hypoglycaemics, thyroid drugs, corticosteroids, oral contraceptives, and hormone replacement therapy.' },
    { id: 'pharma-015', name: 'Toxicology and Emergency Pharmacy', weight: 3 as const, description: 'Common poisonings, antidotes, paracetamol overdose management, snakebite protocols, and emergency pharmacy interventions.' }
  ]
};