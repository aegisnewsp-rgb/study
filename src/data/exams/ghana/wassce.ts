import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';
import { integratedScience } from './subjects/integrated-science';
import { socialStudies } from './subjects/social-studies';

// The four WAEC core subjects every WASSCE school candidate must sit, in the
// order the examination papers are taken. WAEC states the core set before it
// enumerates any programme, so these four are programme-independent; the
// electives below are tracked in examPattern rather than in the study plan.
// See https://waecgh.org/home/wassce-school/ — candidates then add 3 or 4
// electives for 7 or 8 papers in total.
const subjects: Subject[] = [
    mathematics,
    english,
    integratedScience,
    socialStudies,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'wassce',
  examName: 'WASSCE (Ghana)',
  country: 'ghana',
  description: `WASSCE is written in 4 compulsory core subjects — English Language, Mathematics (Core), Integrated Science and Social Studies — plus 3 or 4 elective subjects, so a candidate sits 7 or 8 papers in total. Electives are drawn from a single programme option, with Physics, Chemistry, Biology, Economics, Geography and Government among the choices. Science subjects carry a practical component alongside the written paper, and papers mix essay-type, short-answer and MCQ questions. The examination is held in May/June. The West African Senior School Certificate Examination (WASSCE) for Ghana is Ghana's national secondary school leaving exam, equivalent to the Nigerian WAEC exam, and required for university admission in Ghana. It is administered by the West African Examinations Council (WAEC) and taken by Senior High School (SHS) students in their third year (SHS 3). It is the benchmark examination for both university admission and employment in Ghana.`,
  examPattern: 'Core subjects: English Language, Integrated Science, Mathematics (Core) and Social Studies. Electives: every candidate also sits 3 or 4 elective subjects drawn from a single programme option, with Physics, Chemistry, Biology, Economics, Geography and Government among the choices. Written papers + practical for science subjects. The core subjects are compulsory for all candidates. Elective subjects are chosen based on the student\'s programme track (Science, Business, General Arts, Home Economics, Visual Arts). Science subjects have practical components. Papers include essay-type, short-answer, and MCQ questions. The examination is held in May/June.',
  eligibility: 'Junior High School (JHS) completion certificate. Minimum WASSCE grades required for university admission. Candidates must have completed JHS 3 and be registered SHS 3 students. WASSCE grades run on a nine-point scale: A1 is the highest and F9 the lowest, and only A1-C6 counts as a credit pass. For university admission, candidates typically need credits in the four core subjects plus three electives. The University of Ghana, for example, requires at least six (6) credits (A1-C6 in WASSCE) in English, Core Mathematics, Integrated Science or Core Science, and Social Studies plus three electives, with an aggregate of six subjects not exceeding 24; science-related programmes ask for at least C4 in Elective Mathematics alongside two other science electives. Competitive programmes are won on the aggregate, not on A1s in every science paper.',
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for WASSCE (Ghana) — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for WASSCE (Ghana) — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for WASSCE (Ghana) — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for WASSCE (Ghana) — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for WASSCE (Ghana) — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for WASSCE (Ghana) — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for WASSCE (Ghana) — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for WASSCE (Ghana) — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for WASSCE (Ghana) — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for WASSCE (Ghana) — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for WASSCE (Ghana) — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for WASSCE (Ghana) — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for WASSCE (Ghana) — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for WASSCE (Ghana) — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for WASSCE (Ghana) — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for WASSCE (Ghana) — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for WASSCE (Ghana) — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for WASSCE (Ghana) — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for WASSCE (Ghana)',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'West African Senior School Certificate Examination (WASSCE) for Ghana — Ghana\'s national secondary school leaving exam, equivalent to the Nigerian WAEC exam. Required for university admission in Ghana. For WASSCE (Ghana), if two blogs disagree on WASSCE (Ghana) marking, https://www.waecgh.org wins; this page only sequences WASSCE (Ghana) study.',
  commonMistakes: [
    'Mirrors of WASSCE (Ghana) \'syllabus 2019\' are a common trap; start from https://www.waecgh.org.',
    'Doing only favourite WASSCE (Ghana) chapters leaves the clock as the real examiner.',
    'A friend who sat WASSCE (Ghana) two years ago is not your eligibility officer; https://www.waecgh.org is.',
    'Nobody on this site can guarantee a WASSCE (Ghana) rank, percentile, or admission.',
    'The published WASSCE (Ghana) shape in our files is: four core subjects — English Language, Integrated Science, Mathematics (Core) and Social Studies — plus 3 or 4 electives drawn from one programme option. If https://www.waecgh.org differs, follow https://www.waecgh.org.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.waecgh.org',
};

export default exam;
