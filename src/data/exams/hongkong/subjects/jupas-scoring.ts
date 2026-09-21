// JUPAS — Admission Scoring subject.
// Source: JUPAS score conversion and programme-specific scoring formulae
// published on jupas.edu.hk and on each participating institution\'s
// admissions pages:
//   https://www.jupas.edu.hk/f/page/3667/af_2025_JUPAS.pdf
//   https://www.cityu.edu.hk/admo/sites/default/files/2026-01/2026_JUPAS_MainAdmissionScoreCalculation.pdf
//   https://admissions.hku.hk/sites/default/files/2026-06/HKU-JUPAS-Expected-Score-2026.pdf
//   https://join.hkust.edu.hk/sites/default/files/2026-06/2026%20Expected%20Scores%20and%20Flexible%20Admissions%20Arrangement.pdf
//   https://www.polyu.edu.hk/study/ug/admissions/jupas/jupas-admission-selection
// Score conversion (with effect from the 2025 entry): Category A Core and
// Elective subjects 5** = 8.5, 5* = 7, 5 = 5.5, 4 = 4, 3 = 3, 2 = 2, 1 = 1.
// Category B (Applied Learning) and Category C (Other Languages) use a
// separate published conversion table. Re-check the live conversion table
// and each programme\'s published scoring formula on jupas.edu.hk and the
// participating-institution admissions sites before committing a revision
// plan to a student.

import type { Subject } from '../../types';

export const jupasScoring: Subject = {
  id: 'jupas-scoring',
  name: 'Admission Scoring',
  color: '#0d9488',
  topics: [
    { id: 'jupas-sco-001', name: 'HKDSE Score Conversion Table (2025 entry onwards)', weight: 4 as const, description: 'Category A Core and Elective subjects are converted to numeric scores for admission ranking: 5** = 8.5, 5* = 7, 5 = 5.5, 4 = 4, 3 = 3, 2 = 2, 1 = 1. Category B (Applied Learning) and Category C (Other Languages) subjects use a separate published conversion table — the simplest level (Attained / N) is converted to specific values and higher levels to higher numbers. The conversion is used for ranking only; HKDSE grades still appear on the certificate.' },
    { id: 'jupas-sco-002', name: '"Best 5" and "Best 6" Programme Scoring Formulae', weight: 5 as const, description: 'JUPAS participating-institution programmes adopt different scoring formulae. The common patterns are: (i) Any Best 5 subjects; (ii) Chinese + English + Any Best 3; (iii) Any Best 5 with a bonus for the 6th subject; (iv) weighted formulae (e.g. English × 1.5, M1/M2 × 2 in HKUST science programmes; Physics/M2 weighted in some engineering programmes). Candidates must check the live scoring formula on the admissions page for each programme they apply to.' },
    { id: 'jupas-sco-003', name: 'Weighted Subjects — English, Mathematics and Electives', weight: 5 as const, description: 'Many programmes weight specific subjects. Typical weightings: English × 1.5 or × 2 (English-medium programmes); Mathematics × 1.5 (sciences and engineering); M1/M2 × 1.5 or × 2 (maths-heavy programmes); Biology/Chemistry/Physics × 1.5 in some medical and life-science programmes. In HKUST\'s expected-score tables, the highest score of at most TWO weighted electives is taken in the Best 5 calculation.' },
    { id: 'jupas-sco-004', name: 'Subject-Specific Requirements and Minimum Entrance', weight: 4 as const, description: 'Each programme publishes minimum entrance requirements: usually 3 core subjects (Chinese, English, Mathematics) at Level 3-4 plus one elective at Level 2-3. Some programmes specify the elective subjects (e.g. Physics required for Engineering; Biology or Chemistry required for Medicine). The minimum entrance requirement is a hard gate; failure to meet it removes the candidate from consideration regardless of score.' },
    { id: 'jupas-sco-005', name: 'Expected Score, Median and Range', weight: 3 as const, description: 'Most programmes publish an expected score range and a median admit score from the previous cycle. These are reference numbers — actual cutoffs vary by cycle. HKU, HKUST, CityU, PolyU, HKBU, LU, OUHK, HKMU and EdUHK all publish their own data; JUPAS publishes the consolidated 2025 JUPAS Admissions Scores report (nine participating institutions). Treat published scores as guidance, not as cutoffs.' }
  ]
};