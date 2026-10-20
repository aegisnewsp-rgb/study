import type { ExamTemplate, Subject } from '../types';

import { medical_knowledge } from './subjects/medical-knowledge';
import { english } from './subjects/english';
import { clinical_skills } from './subjects/clinical-skills';

const subjects: Subject[] = [
    medical_knowledge,
    english,
    clinical_skills,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'doh',
  examName: 'DOH (UAE)',
  country: 'uae',
  description: 'The Department of Health (DoH) in Abu Dhabi licenses healthcare professionals for the emirate, and most candidates still refer to the licensing exam as the HAAD exam. Do not confuse it with Dubai\'s separate regulator, the Dubai Health Authority; they are distinct bodies, and a DoH licence does not cover Dubai practice. The computer-based test is delivered through Pearson VUE centres under rules set by the DoH itself.',
  examPattern: 'Professional competency assessment through computer-based testing. Format varies by profession. For physicians, the exam covers medical knowledge relevant to their specialty, patient management, and professional ethics. For pharmacists, it covers Pharmacology, Pharmaceutics, Clinical Pharmacy, and Pharmaceutical Chemistry. For nurses, it covers nursing theory, clinical skills, and healthcare ethics. The exam is typically MCQ-based with questions drawn from a large pool, and each attempt presents a different set of questions.',
  eligibility: 'Recognised primary healthcare qualification from an accredited institution, relevant to the profession you intend to practise. Physicians must have completed their internship, and specialists must have completed residency or fellowship training; nurses must hold a nursing diploma or degree. Most candidates complete DataFlow primary source verification of these documents, which is normally required before a sitting can be booked. An English-language proficiency certificate is part of the licence application, but DoH does not publish the accepted scores on its PQR page, so the threshold is set per profession — confirm yours rather than assuming a band you saw on a coaching page. At least two years of post-graduation clinical experience is the working expectation across most clinical professions. The board publishes a Professional Qualification Requirement (PQR) document that sets the role-specific rules and any specialty exemptions — check it before you book, because it, not a coaching page, decides what you are eligible to sit.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for DOH (UAE) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for DOH (UAE) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for DOH (UAE) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for DOH (UAE) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for DOH (UAE) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for DOH (UAE) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for DOH (UAE) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for DOH (UAE) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for DOH (UAE) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for DOH (UAE) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for DOH (UAE) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for DOH (UAE) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for DOH (UAE) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for DOH (UAE) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for DOH (UAE) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for DOH (UAE) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for DOH (UAE) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for DOH (UAE) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for DOH (UAE)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Sequence your preparation around the workflow rather than around textbook chapters: start a DataFlow file first, because delays there block everything downstream, then book a Pearson VUE slot once verification is progressing. There is no single paper everyone sits. The content, weighting and item count differ by profession and by specialty, so pull the candidate guide and the PQR for your specific title before you commit to a question bank. Build timed mock blocks on the Pearson VUE interface early, not late.',
  commonMistakes: [
    'Screenshot cut-offs from last cycle do not bind DOH (UAE) this year — https://www.doh.gov.ae does.',
    'A DOH (UAE) mock with a different number of items trains the wrong stamina.',
    'Do not assume DOH (UAE) is open to every degree title until https://www.doh.gov.ae says so.',
    'Treat \'sure selection\' DOH (UAE) ads as marketing; the board does not endorse them.',
    'Eligibility snippet we store for DOH (UAE): Recognised primary medical qualification. Post-graduate experience may be required for specialists. Boards edit this; https://www.doh.gov.ae wins.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.doh.gov.ae',
};

export default exam;
