// JUPAS — Offers and Results subject.
// Source: JUPAS official offers and results pages,
//   https://www.jupas.edu.hk/en/results-of-application/main-round-offer/
//   https://www.jupas.edu.hk/en/application-procedures-information/selection-amendment-of-programme-choices/modification-of-programme-choices-after-release-of-hkdse-examination-results/
//   https://www.jupas.edu.hk/en/page/detail/512/
//   https://www.jupas.edu.hk/en/useful-materials/faq/about-jupas/clearing-round-offer/
// For the 2026 entry cycle: Main Round offer date 5 August 2026; acceptance
// fee HK$5,000; modification window mid-July 2026 with 48-hour allocated
// slots announced from late June 2026; Clearing Round after Main Round.
// Dates for each entry year are published by JUPAS each spring; re-check
// the live calendar on jupas.edu.hk before committing a revision plan.

import type { Subject } from '../../types';

export const jupasOffers: Subject = {
  id: 'jupas-offers',
  name: 'Offers and Results',
  color: '#7c3aed',
  topics: [
    { id: 'jupas-off-001', name: 'Main Round Offer', weight: 4 as const, description: 'Announced on a single date (for 2026 entry: 5 August 2026, 9:00 am). Each successful applicant receives at most ONE offer: either a UGC-funded programme, an HKMU self-financing programme, or a SSSDP programme. Offers are made through the applicant\'s JUPAS account. Main Round offers must be accepted by paying an acceptance fee (HK$5,000 for the 2026 cycle) by the published deadline — typically the day after the offer.' },
    { id: 'jupas-off-002', name: 'Clearing Round', weight: 4 as const, description: 'A second-round offer process for unfilled Main Round places and applicants who received no Main Round offer. Clearing Round is announced after Main Round acceptance deadlines. Applicants may modify their choices before Clearing Round (subject to the published modification rules); Clearing Round offers follow the same offer-day format as Main Round.' },
    { id: 'jupas-off-003', name: 'Acceptance Fee, Registration and Enrolment', weight: 3 as const, description: 'Successful applicants must pay the acceptance fee within the published window to hold the offer. Payment channels include bank counters, PPS, JPP and the JUPAS online system (check the live channels list on jupas.edu.hk). Failure to pay the acceptance fee by the deadline forfeits the offer. After payment, candidates must enrol at the admitting institution during the published registration window.' },
    { id: 'jupas-off-004', name: 'Re-application and Late-cycle Decisions', weight: 2 as const, description: 'Candidates who decline or forfeit a Main Round offer can re-apply in a subsequent cycle, including through the non-JUPAS admissions route for the following year. International qualifications and non-HKDSE applicants generally apply directly to the institutions rather than through JUPAS. Re-admission rules and lateral-entry policies vary by institution.' },
    { id: 'jupas-off-005', name: 'Interview and Aptitude Test Preparation', weight: 3 as const, description: 'Some programmes (especially in Medicine, Dentistry, Education, Architecture, Law, and certain professional degrees) require an interview, aptitude test or portfolio review after Main Round. Preparation: read the programme\'s admissions page for the interview format (panel interview, MMI, group task); review the programme\'s learning outcomes and recent curriculum; practice common questions on motivation, subject interest and career plans.' }
  ]
};