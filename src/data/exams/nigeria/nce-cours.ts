import type { ExamTemplate, Subject } from '../types';

import { english } from './subjects/english';
import { mathematics } from './subjects/mathematics';
import { education } from './subjects/education';

const subjects: Subject[] = [
    english,
    mathematics,
    education,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'nce-cours',
  examName: 'NCE (Nigeria)',
  country: 'nigeria',
  description: `The Nigeria Certificate in Education (NCE) is a professional teaching qualification awarded by the National Commission for Colleges of Education (NCCE) in Nigeria. It is the minimum teaching qualification for teachers in Nigerian secondary schools and is awarded by Colleges of Education (also known as Teacher Training Institutions) across Nigeria. The NCE programme is a three-year programme that combines pedagogical training with subject specializations. It is the preferred qualification for teaching positions in Nigerian schools and also serves as a pathway for further studies in education at degree level.`,
  examPattern: `The NCE examination consists of written papers covering all courses taken during the three-year programme. Each subject specialization (teaching subjects) has both theoretical papers and practical teaching practice assessments. The examination covers three main components: the Teaching Subject papers (two teaching subjects, each with multiple papers), General Education papers (which include English Language, Mathematics, and Civic Education), and Education papers (covering psychology of education, curriculum studies, measurement and evaluation, and teaching practice). Each paper is typically 3 hours long. Teaching Practice is assessed through school internship visits by college tutors. Results are compiled by the NCCE through its National Examinations Council (NECO).`,
  eligibility: `Candidates must have a minimum of five credits in their SSCE (Senior Secondary Certificate Examination) or NECO (National Examination Council) results, including English Language and Mathematics, and at least three other relevant subjects related to their intended teaching subjects. For example, candidates wanting to teach Chemistry must have credits in Chemistry and other science subjects. The programme is open to both recent secondary school graduates and mature candidates. Candidates must be at least 16 years of age. Candidates with a bachelor's degree may also pursue NCE as a professional qualification.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for NCE (Nigeria) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for NCE (Nigeria) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for NCE (Nigeria) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for NCE (Nigeria) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for NCE (Nigeria) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for NCE (Nigeria) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for NCE (Nigeria) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for NCE (Nigeria) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for NCE (Nigeria) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for NCE (Nigeria) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for NCE (Nigeria) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for NCE (Nigeria) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for NCE (Nigeria) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for NCE (Nigeria) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for NCE (Nigeria) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for NCE (Nigeria) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for NCE (Nigeria) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for NCE (Nigeria) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for NCE (Nigeria)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  lastUpdated: '2026-04-06',
  officialSource: 'https://ncce.gov.ng',
};

export default exam;
