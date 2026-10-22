import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';

const subjects: Subject[] = [
    mathematics,
    physics,
    chemistry,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'ecat-eng',
  examName: 'ECAT (Engineering)',
  country: 'pakistan',
  description: `The Engineering College Admission Test (ECAT) is a standardized entrance examination conducted by the University of Engineering and Technology (UET) Lahore on behalf of the Pakistan Engineering Council (PEC) for admission to undergraduate engineering programmes at public sector engineering universities across Pakistan. ECAT is a mandatory requirement for admission to most engineering universities in Punjab and is also accepted by several universities in other provinces. The test evaluates candidates' knowledge and conceptual understanding of Physics, Chemistry, and Mathematics at the intermediate (FSc) level, along with English proficiency.`,
  examPattern: `ECAT consists of approximately 100-110 multiple-choice questions divided into four sections: Mathematics (30 questions), Physics (30 questions), Chemistry (30 questions), and English (10-20 questions covering vocabulary, grammar, and comprehension). Each correct answer typically carries 4 marks, with no negative marking. The total marks are approximately 400. The duration is typically 100 minutes (1 hour 40 minutes). The examination is conducted in computer-based format at designated testing centres. The questions are drawn from the FSc/ICS (Part I and Part II) curriculum covering topics in calculus, algebra, mechanics, thermodynamics, electromagnetic theory, organic and inorganic chemistry.`,
  eligibility: `Candidates must have appeared in the FSc (Pre-Engineering) or equivalent examination with Physics, Chemistry, and Mathematics as compulsory subjects, scoring at least 60% marks in the annual examination. Alternatively, candidates with ICS (Intermediate in Computer Science) with Mathematics and Physics are also eligible for some engineering programmes. Candidates with a BSc (Double Mathematics and Physics) degree with at least 60% marks are also eligible. Candidates must be Pakistani nationals or hold valid Pakistani identity documents. Students appearing in their final FSc examination may apply provisionally.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for ECAT (Engineering) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for ECAT (Engineering) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for ECAT (Engineering) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for ECAT (Engineering) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for ECAT (Engineering) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for ECAT (Engineering) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for ECAT (Engineering) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for ECAT (Engineering) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for ECAT (Engineering) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for ECAT (Engineering) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for ECAT (Engineering) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for ECAT (Engineering) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for ECAT (Engineering) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for ECAT (Engineering) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for ECAT (Engineering) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for ECAT (Engineering) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for ECAT (Engineering) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for ECAT (Engineering) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for ECAT (Engineering)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Plan backwards from the paper rather than from the syllabus, because the shape of this test rewards speed more than depth. It is a computer-based paper of about 100 minutes carrying approximately 100-110 multiple-choice questions, split across four sections — Mathematics 30, Physics 30, Chemistry 30 and English between 10 and 20 — with four marks for every correct answer and no negative marking. That last detail changes how the paper should be attacked: an unanswered question and a wrong one cost exactly the same, so the marks on questions that can be partly worked out are worth collecting, while time spent re-reading a Physics question that is not going to be solved is the most expensive mistake available on the day. The three technical sections together carry 90 of the questions, which is why the Mathematics, Physics and Chemistry study plans on this page carry the bulk of the preparation and English is the block to clear quickly at the end. Eligibility is the gate to check before anything else: FSc (Pre-Engineering) with Physics, Chemistry and Mathematics at 60%, or ICS with Mathematics and Physics, or a BSc with Double Mathematics and Physics at 60%.',
  commonMistakes: [
    'Leaving the English block unanswered: it is worth 10 to 20 of the roughly 100-110 questions, and with no negative marking an untouched question and a wrong one cost the same, so those marks are given away for nothing.',
    'Letting the Mathematics block eat the clock: the paper allows about 100 minutes for the whole test, so each section needs its own cut-off rather than one running from the first question to the last.',
    'Studying past the intermediate syllabus: the questions are drawn from the FSc and ICS curriculum in calculus, algebra, mechanics, thermodynamics, electromagnetic theory, and organic and inorganic chemistry, so hours spent on university material come straight out of the syllabus being examined.',
    'Missing the eligibility rule on marks: the test requires Physics, Chemistry and Mathematics as compulsory subjects with at least 60% in the annual examination, and no amount of preparation substitutes for an eligibility rule checked at registration.',
    'Reading a provisional application as a seat: candidates appearing in the final FSc may apply provisionally, but the 60% requirement and the compulsory-subject combination still have to be met, and the ICS route needs Mathematics and Physics while the BSc route needs Double Mathematics and Physics — the certificate held on the result date is the one that counts.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://ecat.uet.edu.pk/',
  conductingBody: 'University of Engineering and Technology (UET) Lahore',
};

export default exam;
