import type { Subject } from '../types';

const psm: Subject = {
  id: 'psm', name: 'Preventive and Social Medicine', color: '#6b7280',
  topics: [
    { id: 'psm-001', name: 'Epidemiology', weight: 3 as const, description: 'Epidemiological concepts, measures of disease frequency, study designs, and disease surveillance.' },
    { id: 'psm-002', name: 'Biostatistics', weight: 3 as const, description: 'Measures of central tendency, dispersion, hypothesis testing, chi-square, and statistical significance.' },
    { id: 'psm-003', name: 'Communicable Diseases', weight: 3 as const, description: 'Transmission, prevention, and control of cholera, TB, malaria, dengue, HIV, and emerging infections.' },
    { id: 'psm-004', name: 'Non-Communicable Diseases', weight: 3 as const, description: 'Risk factors, screening, prevention strategies, and national programs for NCDs.' },
    { id: 'psm-005', name: 'Nutrition and Health', weight: 3 as const, description: 'Macronutrients, micronutrients, PEM, obesity, BMI, and national nutrition programs.' },
    { id: 'psm-006', name: 'Environmental Health', weight: 3 as const, description: 'Water supply, sanitation, waste management, and environmental diseases for NEET PG.' },
    { id: 'psm-007', name: 'Health Programs and Policies', weight: 3 as const, description: 'National Health Mission, NHM programs, health insurance schemes, and health-for-all policies.' },
    { id: 'psm-008', name: 'Occupational Health and Research Methods', weight: 3 as const, description: 'Occupational hazards, ergonomics, ICMR ethics, and research methodology for medical PG.' },
  ]
};

export { psm };
