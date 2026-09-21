// JUPAS — Joint University Programmes Admissions System (Hong Kong).
// Awarding body: Joint University Programmes Admissions System (JUPAS)
// operated jointly by the nine University Grants Committee-funded
// institutions plus the Hong Kong Metropolitan University and the
// Self-financing Sub-degree Programmes sector. JUPAS itself is not a
// subject examination; it is the central admissions platform that
// processes HKDSE results for the majority of UGC-funded undergraduate
// places in Hong Kong. Topic items below map to the published JUPAS
// application procedures and admission-score calculation mechanisms
// published on jupas.edu.hk, with the 2025 entry score conversion
// (5**=8.5, 5*=7, 5=5.5, 4=4, 3=3, 2=2, 1=1) referenced from the
// 2025 JUPAS Admissions Scores report.
// Source: JUPAS official site and procedure pages,
//   https://www.jupas.edu.hk/
//   https://www.jupas.edu.hk/en/application-procedures-information/
//   https://www.jupas.edu.hk/en/results-of-application/main-round-offer/
// and the participating-institutions\' admissions pages (HKU, HKUST,
// CityU, PolyU, etc). The JUPAS application timeline for the 2026 entry
// year is published by JUPAS each spring; always re-check the live
// calendar on jupas.edu.hk before committing a revision plan.

import type { Subject } from '../../types';

export const jupasApplication: Subject = {
  id: 'jupas-application',
  name: 'Application Mechanics',
  color: '#6366f1',
  topics: [
    { id: 'jupas-app-001', name: 'JUPAS Account and Application Timeline', weight: 3 as const, description: 'JUPAS account registration, JUPAS ID, the 2026 entry cycle timeline (application period Oct-Dec 2025; HKDSE results release; modification window; Main Round offer; Clearing Round). Re-check the live calendar on jupas.edu.hk — the dates for each cycle are published each spring.' },
    { id: 'jupas-app-002', name: 'Programme Choices — Band A, Band B, Band C', weight: 5 as const, description: 'Each applicant may list up to 20 programme choices grouped into three bands. Band A (free choice), Band B (free choice), Band C (free choice); each institution/programme can be listed once. Within a band, programme choices are treated as equally ranked. Choice ordering is critical because Main Round offers are determined by the highest band in which a programme admits the applicant.' },
    { id: 'jupas-app-003', name: 'School Principal\'s Nominations (SPN)', weight: 3 as const, description: 'A separate direct-offer scheme run through participating schools. Each school may nominate up to a quota of students for direct admission to selected programmes before Main Round. SPN offers are made concurrently with JUPAS Main Round offers; recipients must accept or decline SPN offers before the JUPAS Main Round offer day.' },
    { id: 'jupas-app-004', name: 'Application Fee and Required Documents', weight: 2 as const, description: 'JUPAS application fee (charged per cycle), supporting documents (HKDSE results, predicted grades, school reports, other qualifications). Re-check the fee schedule and document requirements on jupas.edu.hk for the candidate\'s cycle — both change year to year.' },
    { id: 'jupas-app-005', name: 'Modification of Programme Choices After HKDSE Release', weight: 4 as const, description: 'Between HKDSE results release and the modification deadline, each applicant is allocated a 48-hour time slot (announced from late June; modification window mid-July) in which to add, remove or reorder choices. Modification may ONLY be submitted within the allocated time slot — applicants who miss the slot cannot modify afterwards. Strategy: re-rank choices based on actual HKDSE results, consider changing the band structure (e.g. moving a science programme down a band if results are weaker than predicted).' }
  ]
};