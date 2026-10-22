import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { science } from './subjects/science';
import { english } from './subjects/english';
import { filipino } from './subjects/filipino';

const subjects: Subject[] = [
    mathematics,
    science,
    english,
    filipino,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'u-pcat',
  examName: 'UPCAT (Philippines)',
  country: 'philippines',
  description: 'University of the Philippines College Admission Test (UPCAT) is the entrance exam for the University of the Philippines system — the most prestigious university system in the Philippines. The UP system comprises 8 constituent universities across the country. UPCAT is a highly competitive exam that tests the knowledge and skills developed over four years of secondary education. Performance in UPCAT is the primary criterion for admission, alongside the applicant\'s high school grades.',
  examPattern: 'Four subtests — Language Proficiency, Reading Comprehension, Science and Mathematics — in one paper-based sitting that runs from early morning to noon on the scheduled dates. Language Proficiency and Reading Comprehension are taken in English and Filipino; Science covers fundamental Physics, Chemistry and Biology; Mathematics covers algebra, geometry, trigonometry and statistics. The University publishes no question count and no per-subtest weightage, so any "200 questions" figure quoted elsewhere is not one the University has published. The paper is only part of the admission decision: the standardised result is combined with the Grades 8–11 school record to produce the UPG admission score.',
  eligibility: 'Graduating high school student or high school graduate with above-average grades. Must meet UPCAT cut-off scores. For incoming freshmen, candidates must be in the top third of their graduating class with a general weighted average of at least 85%. The UPCAT cut-off score varies by campus and programme — competitive courses like Engineering, Biology, and Psychology require higher scores. For transfer applicants, additional requirements apply.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for UPCAT (Philippines) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for UPCAT (Philippines) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for UPCAT (Philippines) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for UPCAT (Philippines) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for UPCAT (Philippines) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for UPCAT (Philippines) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for UPCAT (Philippines) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for UPCAT (Philippines) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for UPCAT (Philippines) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for UPCAT (Philippines) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for UPCAT (Philippines) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for UPCAT (Philippines) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for UPCAT (Philippines) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for UPCAT (Philippines) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for UPCAT (Philippines) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for UPCAT (Philippines) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for UPCAT (Philippines) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for UPCAT (Philippines) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for UPCAT (Philippines)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Plan UPCAT as one long sitting rather than a set of loose topics. Work through the four subtests one at a time, and practise the kind of question each one actually asks: vocabulary and grammar work for Language Proficiency, comprehension passages for Reading Comprehension, and timed problem sets for Mathematics and Science. Sit the paper in a single unbroken block of timed practice rather than in short isolated sessions, because stamina across a long paper decides as much as knowledge. Because the paper alone does not decide admission, keep your Grades 8–11 record in view while you prepare instead of treating the test as the whole hurdle. Confirm the programme and campus requirements with the University, since cut-offs differ by campus and course.',
  commonMistakes: [
    'Reviewing mathematics without the stated core topics, leaving algebra, geometry, trigonometry or statistics unprepared.',
    'Neglecting vocabulary, grammar and reading practice because science and mathematics receive more revision attention.',
    'Treating the language and reading papers as revision filler when they are two of the four scored subtests.',
    'Studying only in short sessions instead of practising the scheduled early-morning-to-noon format.',
    'Checking a general cut-off but not the requirement for the chosen campus and programme, which may set different cut-offs.',
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://up.edu.ph',
  conductingBody: 'University of the Philippines',
};

export default exam;
