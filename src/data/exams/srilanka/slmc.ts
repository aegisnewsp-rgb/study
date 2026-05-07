import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';
import { english } from './subjects/english';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
    english,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'slmc',
  examName: 'SLMC Medical (Sri Lanka)',
  country: 'srilanka',
  description: 'Sri Lanka Medical Council exam — required for foreign medical graduates seeking registration to practice medicine in Sri Lanka. The SLMC examination is mandated under the Medical Ordinance to ensure that doctors who obtained their primary medical qualification outside Sri Lanka meet the required standards of medical knowledge, clinical competence, and ethical practice before being granted a license to practice in the country.',
  examPattern: 'Multiple choice and clinical examination components. Tests medical knowledge, clinical skills, and ethical practice. The exam has two parts: Part I is a computer-based MCQ test covering basic medical sciences (Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology) and clinical medicine. Part II is a practical/clinical examination assessing history taking, physical examination skills, clinical reasoning, and communication. Both parts must be passed to obtain registration.',
  eligibility: 'Medical degree from a recognised foreign institution. Must have completed internship. Language proficiency test required (English or Sinhala/Tamil). Candidates must submit their medical degree certificate, internship completion certificate, and a letter of good standing from the medical council of the country where they obtained their degree. The exam is conducted in English.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for SLMC Medical (Sri Lanka) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for SLMC Medical (Sri Lanka) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for SLMC Medical (Sri Lanka) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for SLMC Medical (Sri Lanka) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for SLMC Medical (Sri Lanka) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for SLMC Medical (Sri Lanka) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for SLMC Medical (Sri Lanka) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for SLMC Medical (Sri Lanka) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for SLMC Medical (Sri Lanka) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for SLMC Medical (Sri Lanka) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for SLMC Medical (Sri Lanka) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for SLMC Medical (Sri Lanka) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for SLMC Medical (Sri Lanka) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for SLMC Medical (Sri Lanka) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for SLMC Medical (Sri Lanka) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for SLMC Medical (Sri Lanka) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for SLMC Medical (Sri Lanka) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for SLMC Medical (Sri Lanka) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for SLMC Medical (Sri Lanka)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://slmedcouncil.lk',
};

export default exam;
