import type { ExamTemplate, Subject } from '../types';

import { academic_potential } from './subjects/academic-potential';
import { subject_knowledge } from './subjects/subject-knowledge';

const subjects: Subject[] = [
    academic_potential,
    subject_knowledge,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'uii',
  examName: 'UII Entrance (Indonesia)',
  country: 'indonesia',
  description: "Universitas Islam Indonesia (UII) entrance examination — one of Indonesia's oldest private universities, known for Islamic studies, engineering, and business programmes.",
  examPattern: "UTBK (Ujian Tulis Berbasis Komputer) — Computer-Based Written Test covering: TPA (Academic Potential Test: verbal, numerical, figural), Pengetahuan Kuantitatif (Quantitative Knowledge), Literasi Bahasa Indonesia, Literasi Bahasa Inggris.",
  eligibility: "High school/SMA graduate (SMA or equivalent). Must have valid UTBK score from LTMPT.",
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UII Entrance (Indonesia) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UII Entrance (Indonesia) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UII Entrance (Indonesia) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UII Entrance (Indonesia) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UII Entrance (Indonesia) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UII Entrance (Indonesia) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UII Entrance (Indonesia) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UII Entrance (Indonesia) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UII Entrance (Indonesia) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UII Entrance (Indonesia) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UII Entrance (Indonesia) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UII Entrance (Indonesia) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UII Entrance (Indonesia) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UII Entrance (Indonesia) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UII Entrance (Indonesia) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UII Entrance (Indonesia) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UII Entrance (Indonesia) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UII Entrance (Indonesia) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UII Entrance (Indonesia)',
    duration: '1d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'For UII Entrance (Indonesia), keep UII Entrance (Indonesia) application admin (photo specs, IDs) off your UII Entrance (Indonesia) study clock by checking https://uii.ac.id early.',
  commonMistakes: [
    'Assuming the paper is in English. The UTBK score UII admits on carries Literasi Bahasa Indonesia, Literasi Bahasa Inggris, the TPA reasoning blocks and Pengetahuan Kuantitatif - so an English-only revision plan leaves the Indonesian literacy component untouched. Start that component early rather than in the last week; it is a whole component of the paper, not a paragraph. Component list on https://uii.ac.id.',
    'Universitas Islam Indonesia admits on a valid UTBK score from LTMPT, so confirm with the university which UTBK sitting this intake will accept before you build a timetable around it. Separately, practise the entrance paper to the published duration on https://uii.ac.id - untimed practice will not show you whether you can hold that pace.',
    'Some UII Entrance (Indonesia) programmes add extra subject prerequisites after you pay — check https://uii.ac.id.',
    'UTBK is a computer-based written test, and its TPA section carries three named blocks: verbal, numerical and figural. General reasoning practice is not the same as rehearsing each of those blocks, so a plan built on the first can leave two of them untouched without you noticing the gap. Check the component structure published on https://uii.ac.id and give each block its own slot before you fix a timetable.',
    'UII reads two eligibility limbs independently: an SMA or equivalent certificate on one side, a valid UTBK score from LTMPT on the other. A candidate who clears only one has not met the requirement, so check both before you pay an application fee - https://uii.ac.id states what the current intake wants.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://uii.ac.id',
  conductingBody: 'Universitas Islam Indonesia (UII)',
};

export default exam;
