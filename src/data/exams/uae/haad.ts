import type { ExamTemplate, Subject } from '../types';

import { biology } from './subjects/biology';
import { chemistry } from './subjects/chemistry';
import { physics } from './subjects/physics';
import { nursing } from './subjects/nursing';

const subjects: Subject[] = [
    biology,
    chemistry,
    physics,
    nursing,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'haad',
  examName: 'HAAD (UAE)',
  country: 'uae',
  description: 'Health Authority of Abu Dhabi (HAAD) examination for healthcare professionals — a licensing exam for physicians, nurses, and allied health professionals seeking to practice in Abu Dhabi. HAAD (now integrated under DOH — Department of Health Abu Dhabi) was the regulatory body for healthcare in the Emirate of Abu Dhabi. The exam ensures that all healthcare practitioners meet the required standards of competence and knowledge before being licensed to provide clinical care.',
  examPattern: 'Computer-based exam with MCQs relevant to the professional\'s scope of practice. Number of questions varies by profession. For physicians, the exam covers Medical Knowledge (Anatomy, Physiology, Pathology, Pharmacology, Clinical Medicine), Patient Care, and Professionalism. For nurses, it covers Fundamentals of Nursing, Medical-Surgical Nursing, Community Health, and Ethics. For allied health professionals, the exam focuses on their specific discipline. Each question is multiple choice with a single best answer. The exam is taken at authorized testing centres.',
  eligibility: 'Primary qualification in the relevant healthcare profession from an accredited institution. Professional experience requirements apply. Physicians must have completed medical school and internship. Specialists require postgraduate qualifications. Nurses need a nursing diploma or degree. Allied health professionals must hold relevant professional qualifications. All candidates must have a clean professional record and meet the English language proficiency requirement.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for HAAD (UAE) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for HAAD (UAE) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for HAAD (UAE) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for HAAD (UAE) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for HAAD (UAE) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for HAAD (UAE) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for HAAD (UAE) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for HAAD (UAE) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for HAAD (UAE) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for HAAD (UAE) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for HAAD (UAE) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for HAAD (UAE) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for HAAD (UAE) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for HAAD (UAE) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for HAAD (UAE) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for HAAD (UAE) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for HAAD (UAE) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for HAAD (UAE) — 2 Years'),
  },  // SR-BACKFILL-V1,
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for HAAD (UAE)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.doh.gov.ae',
};

export default exam;
