import type { ExamTemplate, Subject } from '../types';

import { mathematics } from './subjects/mathematics';
import { english } from './subjects/english';
import { integratedScience } from './subjects/integrated-science';
import { socialStudies } from './subjects/social-studies';
// WASSCE Business-programme electives. Imported so the ten Accounting and ten
// Economics notes under notes/wassce/ resolve to a declared topic: the note
// gate reaches a note only when the exam imports the subject file that declares
// its topic id. Neither module was imported anywhere, so 20 finished notes were
// unreachable from the hub. Held out of `subjects` below so the study plan still
// sequences the four core papers only, per the comment there.
import { accounting } from './subjects/accounting';
import { economics } from './subjects/economics';

void accounting;
void economics;

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
  // The unclamped description is the canonical answer to the measured subject-count
  // query and retains the May/June window. examPattern is a clamped structural
  // summary, so keep its wording distinct from the description and FAQ.
  examPattern: 'Four compulsory core subjects are fixed for every candidate, then three or four electives are added from a single programme track — Science, Business, General Arts, Home Economics or Visual Arts — so a school candidate writes 7 or 8 papers. Written papers plus a practical for science subjects.',
  eligibility: 'Junior High School (JHS) completion certificate. Candidates must have completed JHS 3 and be registered SHS 3 students. WASSCE grades run on a nine-point scale: A1 is the highest and F9 the lowest, and only A1-C6 counts as a credit pass. Entry itself is the easy gate: sitting the paper needs the certificate, while the competitive gate comes afterwards, when a university reads an aggregate across your compulsory and elective subjects rather than a single science paper. The University of Ghana publishes its own credit count and aggregate ceiling, and those figures are set out in the FAQ below.',
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
  // Opening by expanding the exam name re-narrated the hero description verbatim.
  // This block is about what to do, so it starts there.
  prepOverview:
    'Start from the WAEC notice for the current year, not a past paper pile. Mark each of the 7 or 8 papers you actually sit, and check your elective choice against the programme that will accept it — the WASSCE grade is aggregated across core and elective credits, so one weak elective can move the whole aggregate. For WASSCE (Ghana), if two blogs disagree on WASSCE (Ghana) marking, https://www.waecgh.org wins; this page only sequences WASSCE (Ghana) study.',
  commonMistakes: [
    'Mirrors of WASSCE (Ghana) \'syllabus 2019\' are a common trap; start from https://www.waecgh.org.',
    'Counting your subjects off an old index page — WAEC sets the compulsory and elective pattern for the year, so read the current combination rules at https://www.waecgh.org rather than assuming a fixed total.',
    'WAEC distinguishes school candidates, who register through their schools, from private candidates, who register online. Confirm which category applies to you and, if you are a school candidate, confirm with your school that it has submitted your entry before the applicable WAEC deadline.',
    'Reading a single grade as a result — WAEC reports grades A1 to F8 and totals them into an aggregate, and what placements compare is the aggregate, not one letter. Check how the current year combines your grades at https://www.waecgh.org.',
    'Treating any subject shape quoted on this page as WAEC\'s rule rather than our summary of it; if https://www.waecgh.org differs from anything here, follow https://www.waecgh.org.'
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.waecgh.org',
};

export default exam;
