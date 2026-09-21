import type { ExamTemplate, Subject } from '../types';

import { jupasApplication } from './subjects/jupas-application';
import { jupasScoring } from './subjects/jupas-scoring';
import { jupasOffers } from './subjects/jupas-offers';

const subjects: Subject[] = [
  jupasApplication,
  jupasScoring,
  jupasOffers,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'jupas',
  examName: 'JUPAS (Joint University Programmes Admissions System)',
  country: 'hongkong',
  description: "The Joint University Programmes Admissions System (JUPAS) is the central admissions platform used by the nine University Grants Committee (UGC)-funded institutions plus the Hong Kong Metropolitan University (HKMU) and the Self-financing Sub-degree Programmes (SSSDP) sector to process undergraduate admissions for HKDSE candidates. JUPAS itself does not set an examination; it processes HKDSE results, applies institution-specific scoring formulae, and issues Main Round and Clearing Round offers. JUPAS is operated by the Joint University Programmes Admissions System Office and governed by the JUPAS Board. The system handles programme choices, the 2025 entry score conversion (Category A subjects 5**=8.5, 5*=7, 5=5.5, 4=4, 3=3, 2=2, 1=1), programme-specific scoring formulae (Any Best 5, Chinese+English+Best 3, Best 5 with a 6th-subject bonus, and weighted subject formulae), and the Main Round and Clearing Round offer process.",
  examPattern: "JUPAS has no written examination. The application cycle runs from approximately October (registration and initial choice entry) to the following August (Main Round offer day, 5 August 2026 for the 2026 entry cycle). Applicants register through the JUPAS online account, list up to 20 programme choices across Bands A/B/C, modify choices after HKDSE results release in a 48-hour allocated time slot during mid-July, receive a single Main Round offer on the published offer day, and may participate in Clearing Round if unfilled. Each successful applicant pays an acceptance fee (HK$5,000 for the 2026 cycle) within the published deadline to hold the offer. Re-check the live JUPAS calendar, the score-conversion table, and the participating institutions' published scoring formulae on https://www.jupas.edu.hk/ before planning.",
  eligibility: "Candidates who have sat the HKDSE in the current cycle or in the previous cycles (subject to the live eligibility rules), and have not yet been admitted to a UGC-funded degree programme, are eligible for JUPAS. Applicants must meet the minimum entrance requirements of their chosen programmes (typically 3 core subjects at Level 3-4 plus one elective at Level 2-3). Specific subject requirements apply for some programmes (e.g. Physics for Engineering; Biology or Chemistry for Medicine). Non-JUPAS admissions routes are available for candidates with non-HKDSE qualifications. Always confirm the latest eligibility rules, application fees, and acceptance-fee policies on https://www.jupas.edu.hk/ before submission.",
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for JUPAS — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for JUPAS — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for JUPAS — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for JUPAS — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for JUPAS — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for JUPAS — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for JUPAS — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for JUPAS — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for JUPAS — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for JUPAS — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for JUPAS — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for JUPAS — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for JUPAS — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for JUPAS — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for JUPAS — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for JUPAS — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for JUPAS — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for JUPAS — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for the JUPAS application cycle',
    duration: '1d',
    focusAreas: [
      { subject: 'Application Mechanics', topics: ['Programme Choices — Band A, Band B, Band C', 'Modification of Programme Choices After HKDSE Release', 'School Principal\'s Nominations (SPN)'] },
      { subject: 'Admission Scoring', topics: ['HKDSE Score Conversion Table (2025 entry onwards)', '"Best 5" and "Best 6" Programme Scoring Formulae', 'Weighted Subjects — English, Mathematics and Electives'] },
      { subject: 'Offers and Results', topics: ['Main Round Offer', 'Clearing Round', 'Acceptance Fee, Registration and Enrolment'] }
    ],
    strategy: "Spend the largest block on Admission Scoring — the score conversion and programme-specific formulae are the technical core of JUPAS ranking. Then on Application Mechanics — programme choice ordering and the modification window are the levers the applicant controls. Finally on Offers and Results — Main Round and Clearing Round timing and the acceptance-fee policy are the deadlines that decide the cycle. Re-check the live JUPAS calendar and the participating institutions' published scoring formulae on jupas.edu.hk before committing.",
  },
  prepOverview:
    "JUPAS preparation works across three modules: application mechanics (account, timeline, programme choices, School Principal's Nominations), admission scoring (the score conversion table, the Best 5 / Best 6 formulae, the weighted-subject rules, the minimum entrance requirements), and offers and results (Main Round, Clearing Round, the acceptance fee, and interview/aptitude test preparation). The productive study pattern is to lock down the Admission Scoring module first because the score conversion and programme-specific formulae determine rank, then layer in the Application Mechanics — programme choice ordering and the modification window are the levers the applicant actually controls — and finally the Offers and Results module for the deadlines. Use the JUPAS official site (https://www.jupas.edu.hk/) as the source of truth for the live cycle calendar, the score-conversion table, and the participating institutions' published scoring formulae. The 2025 entry onwards score conversion (5**=8.5, 5*=7, 5=5.5, 4=4, 3=3, 2=2, 1=1) is the current standard; verify the live table each cycle. The published 2025 JUPAS Admissions Scores report (nine participating institutions) is the reference for expected-score ranges; treat published ranges as guidance, not as cutoffs. For one-month plans (i.e. after HKDSE release), target the modification-window strategy plus a re-ranking of choices; for three-month plans (i.e. from the S6 start), target a structured review of each chosen programme's scoring formula and expected score range, plus the interview/aptitude test preparation. Always re-check the live JUPAS calendar, the score-conversion table, the participating institutions' scoring formulae, and any in-year policy changes on https://www.jupas.edu.hk/ before committing a revision plan to a student (hong kong).",
  commonMistakes: [
    "Listing more than 20 programme choices, or listing the same institution/programme twice in the same band — JUPAS allows up to 20 choices total, with each institution/programme listed once; duplicate entries are rejected.",
    "Treating Band A, B and C as a ranking — within a band, choices are equally ranked; only between-band ordering matters. A common error is putting a safety programme in Band A when it should be in Band B because the candidate believes Band A is \"first choice\".",
    "Missing the 48-hour modification slot after HKDSE release — JUPAS allocates a personal 48-hour window for modification of choices; applicants who miss the slot cannot modify afterwards, even if their actual results are weaker than predicted.",
    "Applying to programmes whose minimum entrance requirements are not met — failure to meet minimum entrance requirements removes the candidate from consideration regardless of score.",
    "Treating the published expected-score range as a cutoff — expected-score ranges vary by cycle and are not guarantees; some programmes use a score-band approach with concurrent consideration of band choices and interview performance.",
    "Not checking each programme's scoring formula — JUPAS participating institutions use different formulae (Any Best 5, Chinese+English+Best 3, weighted), and the same HKDSE result produces different admission scores against different programmes.",
    "Forgetting the School Principal's Nominations (SPN) deadline — SPN offers are made concurrently with JUPAS Main Round offers, and the candidate must accept or decline the SPN offer before the JUPAS Main Round offer day; the order in which offers are accepted matters.",
    "Under-preparing for programme-specific interviews or aptitude tests — programmes in Medicine, Dentistry, Education, Architecture, Law and certain professional degrees interview after Main Round and a strong interview can lift a borderline application.",
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.jupas.edu.hk/',
};
export default exam;