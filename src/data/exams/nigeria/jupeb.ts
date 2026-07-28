import type { ExamTemplate, Subject } from '../types';

import { subject_combinations } from './subjects/subject-combinations';

const subjects: Subject[] = [
    subject_combinations,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'jupeb',
  examName: 'JUPEB (Joint Universities Preliminary Examinations Board)',
  country: 'nigeria',
  description: 'The Joint Universities Preliminary Examinations Board (JUPEB) is a national direct entry programme accepted by all Nigerian universities. Candidates study 3-4 subjects for one academic year at accredited JUPEB centres and use the resulting certificate for 200-level (second year) admission. The programme serves as a bridge between SSCE/NECO and university education, compressing the A-Level equivalent curriculum into one year. JUPEB is managed by a consortium of Nigerian universities and the examinations are standardized across all accredited centres nationwide.',
  examPattern: '3 subjects (depending on desired university course), each with 2-3 papers per subject plus a general paper. Each subject paper is 2-3 hours. The examination is held at the end of the one-year programme. Science combinations include PCM (Physics, Chemistry, Mathematics) or PCB (Physics, Chemistry, Biology); Arts combinations include Literature, Government, Economics; Commercial combinations include Accounting, Economics, Mathematics. Grades awarded are A-E with minimum E required for direct entry.',
  eligibility: 'SSCE holder with minimum 5 credits including English and Mathematics (for most university requirements). The programme is open to all who meet the O-Level requirements regardless of age. Students who have completed their NCE, Diploma, or already have JAMB attempt may also enroll. The programme is typically one academic year (September to June). Candidates must register with an accredited JUPEB centre and sit the final examinations at designated centres.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for JUPEB (Nigeria) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for JUPEB (Nigeria) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for JUPEB (Nigeria) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for JUPEB (Nigeria) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for JUPEB (Nigeria) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for JUPEB (Nigeria) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for JUPEB (Nigeria) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for JUPEB (Nigeria) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for JUPEB (Nigeria) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for JUPEB (Nigeria) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for JUPEB (Nigeria) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for JUPEB (Nigeria) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for JUPEB (Nigeria) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for JUPEB (Nigeria) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for JUPEB (Nigeria) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for JUPEB (Nigeria) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for JUPEB (Nigeria) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for JUPEB (Nigeria) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for JUPEB (Nigeria)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Prepare for JUPEB (Joint Universities Preliminary Examinations Board) in three phases: map the live syllabus and pattern from the official notice, finish high-weight topics with timed practice and an error log, then run full-length mocks matching official duration and marking. Pair with StudyRoadmap free roadmaps for remaining weeks. Confirm registration, fees, eligibility and paper rules only on https://jupeb.edu.ng for the current nigeria cycle.',
  commonMistakes: [
    'Relying on outdated JUPEB (Joint Universities Preliminary Examinations Board) materials instead of the live official notice.',
    'Skipping full-length timed mocks until the final days.',
    'Over-studying low-yield topics while high-weight sections stay weak.',
    'No error log for repeated mistake patterns.',
    'Treating unofficial cut-offs as guaranteed outcomes.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://jupeb.edu.ng',
};

export default exam;
