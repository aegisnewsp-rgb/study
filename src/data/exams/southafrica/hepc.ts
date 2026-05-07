import type { ExamTemplate, Subject } from '../types';

import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    physics,
    chemistry,
    biology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'hepc',
  examName: 'HEPC Medical (South Africa)',
  country: 'southafrica',
  description: 'Health Professions Council of South Africa (HPCSA) exam — the licensing and assessment examination for foreign-trained health professionals seeking registration to practice in South Africa. The HPCSA is the statutory regulatory body for health professionals in South Africa. Foreign medical graduates, nurses, and allied health professionals who obtained their qualifications outside South Africa must pass this examination to demonstrate competency before being allowed to practice in the country.',
  examPattern: 'Multiple choice and clinical examination components. Tests medical knowledge, clinical skills, and ethical practice. For medical doctors, the examination covers basic medical sciences (Anatomy, Physiology, Pathology, Pharmacology, Microbiology), clinical medicine, and professional ethics. The clinical component assesses history taking, physical examination, clinical reasoning, and patient management. For nurses, it covers nursing theory, clinical skills, and community health. The exam is typically held in two parts over several days.',
  eligibility: 'Primary healthcare qualification from a recognised foreign institution. Must have completed internship. Professional experience may be required. Candidates must submit their foreign qualification for evaluation by the HPCSA. They must have practiced for a minimum period after obtaining their degree (varies by profession). For medical doctors, a 12-month internship and at least 2 years of practice are typically required before taking the exam. English language proficiency is mandatory.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for HEPC Medical (South Africa) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for HEPC Medical (South Africa) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for HEPC Medical (South Africa) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for HEPC Medical (South Africa) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for HEPC Medical (South Africa) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for HEPC Medical (South Africa) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for HEPC Medical (South Africa) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for HEPC Medical (South Africa) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for HEPC Medical (South Africa) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for HEPC Medical (South Africa) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for HEPC Medical (South Africa) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for HEPC Medical (South Africa) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for HEPC Medical (South Africa) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for HEPC Medical (South Africa) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for HEPC Medical (South Africa) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for HEPC Medical (South Africa) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for HEPC Medical (South Africa) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for HEPC Medical (South Africa) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for HEPC Medical (South Africa)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://www.hpcsa.co.za',
};

export default exam;
