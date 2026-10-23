import type { ExamTemplate, Subject } from '../types';

import { pharmacy } from './subjects/pharmacy';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

const subjects: Subject[] = [
    pharmacy,
    chemistry,
    biology,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'pcat',
  examName: 'PCAT (Philippines)',
  country: 'philippines',
  description: 'Philippine College Admission Test (PCAT) — used by several Philippine universities as part of their admission process for various undergraduate programmes. The PCAT is a standardised entrance examination developed by the Center for Educational Measurement (CEM) and is used by multiple universities to supplement their internal admission criteria. It is particularly popular among universities in the National Capital Region and major provincial cities.',
  examPattern: 'Verbal ability, Quantitative ability, Science (Biology, Chemistry, Physics), and General Information. MCQ format. The Verbal section covers analogies, sentence completion, and reading comprehension. Quantitative ability covers arithmetic, algebra, geometry, and data interpretation. Science covers fundamental Biology, Chemistry, and Physics concepts at the high school level. General Information tests awareness of current events, Philippine history, and civic knowledge. Each section has 100-150 items.',
  eligibility: 'High school graduate or senior student. Some universities require minimum PCAT percentile scores. The PCAT is typically taken during the application season (February to May). Each participating university sets its own minimum percentile cut-off — competitive programmes may require the 60th percentile or higher. Candidates should check the specific requirements of the universities they are applying to.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for PCAT (Philippines) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for PCAT (Philippines) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for PCAT (Philippines) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for PCAT (Philippines) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for PCAT (Philippines) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for PCAT (Philippines) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for PCAT (Philippines) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for PCAT (Philippines) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for PCAT (Philippines) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for PCAT (Philippines) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for PCAT (Philippines) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for PCAT (Philippines) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for PCAT (Philippines) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for PCAT (Philippines) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for PCAT (Philippines) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for PCAT (Philippines) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for PCAT (Philippines) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for PCAT (Philippines) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for PCAT (Philippines)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Pharmacy carries the longest list on this page and Chemistry and Biology carry equal shorter ones, so the hours should not be split evenly across the three - the long one is where the extra block belongs.',
  commonMistakes: [
    'Assuming you can sit the PCAT whenever you are ready. The test typically runs in the February-to-May application season rather than on demand, so a revision plan built around a sitting outside that window may be aimed at a date that does not exist — check the available sittings on https://www.cem-inc.org.ph.',
    'The Quantitative ability section of this paper covers arithmetic, algebra, geometry and data interpretation, and data interpretation is a strand of its own rather than an extension of the arithmetic beside it. A revision plan that works through the algebra and the geometry leaves that strand unpractised, so give it its own block of practice before the paper. Check the current section list on https://www.cem-inc.org.ph.',
    'Each university taking the Philippines PCAT sets its own minimum percentile, and competitive programmes can ask for the 60th percentile or better, so a score that cleared one campus may not clear another. The CEM publishes the test itself on https://www.cem-inc.org.ph, but the cutoff that counts is the one on the admissions page of the school you are applying to.',
    'Revising long passages and calling that the Verbal section. It runs analogies, sentence completion and reading comprehension, so a plan built only on reading practice leaves the analogy and sentence-completion formats untaught - work through those formats separately before you sit the paper.',
    'Practising PCAT (Philippines) as one undifferentiated score. The paper is built from four named sections - Verbal Ability, Quantitative Ability, Science (Biology, Chemistry, Physics) and General Information - so a mock that reports only a total hides the one section actually costing you percentile. Track each section separately, and check the current section list on https://www.cem-inc.org.ph.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.cem-inc.org.ph',
  conductingBody: 'Center for Educational Measurement (CEM)',
};

export default exam;
