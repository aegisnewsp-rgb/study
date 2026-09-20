import type { ExamTemplate, Subject } from '../types';

import { jcMathematics } from './subjects/jc-mathematics';
import { jcEnglish } from './subjects/jc-english';

const subjects: Subject[] = [
    jcMathematics,
    jcEnglish,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'junior-cycle',
  examName: 'Junior Cycle',
  country: 'ireland',
  description: 'The Junior Cycle is the three-year lower-secondary qualification taken by students in Ireland at the end of third year, typically at age 14-15. It is set by the National Council for Curriculum and Assessment (NCCA) and administered by the State Examinations Commission. Since the Framework for Junior Cycle 2015 reform, each subject is assessed by a combination of a terminal written examination (set by the SEC) and two Classroom-Based Assessments (CBAs) judged by the school, with an Assessment Task added to the final written mark for most subjects. Subjects are offered at Ordinary level and, where applicable, Higher level. Results are reported on a national descriptor scale from Distinction to Not Reported; the Junior Cycle Profile of Achievement (JCPA) is the formal school-leaving certification for the cycle.',
  examPattern: 'Each Junior Cycle subject has its own paper pattern. Mathematics and English, the two core subjects, are assessed by a two-hour written examination at Ordinary level with an additional two hours for Higher level Mathematics. Mathematics has two CBAs (a Mathematical Investigation and a Statistical Investigation) plus an Assessment Task; English has two CBAs (Oral Communication and The Collection of the Student\'s Texts) plus an Assessment Task. Subjects are reported on the common national descriptor scale: Distinction, Higher Merit, Merit, Achieved, Partially Achieved, Not Reported. Verify the live paper patterns, CBA windows and any in-year specification changes on curriculumonline.ie and examinations.ie before planning.',
  eligibility: 'All students in the third year of recognised Irish post-primary schools sit the Junior Cycle, alongside approved private candidates registered through the State Examinations Commission. There is no statutory minimum age. Reasonable accommodations are available for candidates with documented special educational needs, applied through the school\'s SEN co-ordinator and the SEC. Always confirm the latest eligibility rules, exemption arrangements for Irish, and the registration deadlines on examinations.ie before submission.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for Junior Cycle - 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for Junior Cycle - 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for Junior Cycle - 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for Junior Cycle - 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for Junior Cycle - 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for Junior Cycle - 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for Junior Cycle - 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for Junior Cycle - 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for Junior Cycle - 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for Junior Cycle - 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for Junior Cycle - 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for Junior Cycle - 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for Junior Cycle - 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for Junior Cycle - 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for Junior Cycle - 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for Junior Cycle - 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for Junior Cycle - 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for Junior Cycle - 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for Junior Cycle',
    duration: '1d',
    focusAreas: subjects.slice(0, 2).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Spend the largest block on Mathematics (Number and Algebra and Functions carry the most marks on the Higher level paper), then English (the Reading component dominates the written exam). Confirm the live CBA windows and any Assessment Task requirement on curriculumonline.ie before committing.',
  },
  prepOverview:
    'Junior Cycle preparation is built around the framework\'s blend of terminal examination and Classroom-Based Assessments. For Mathematics and English - the two subjects every candidate takes - the productive pattern is to keep CBA evidence files current through second and third year, then use the final term to drill past SEC papers at the relevant level. Tier decision (Ordinary vs Higher) is provisional by the end of second year and confirmed after the second set of third-year Christmas mocks. Use the official NCCA specifications (curriculumonline.ie hosts the current Junior Cycle English and Mathematics specifications) as the question-style reference; third-party Junior Cycle guides vary in tier alignment. For one-month plans, target two full past papers per Higher level subject plus CBA submission preparation; for three-month plans, layer a full content pass before the mock cycle. Always re-check the live CBA windows, the descriptor scale boundaries, the level decisions, and any in-year specification changes on https://www.curriculumonline.ie/junior-cycle/ and https://www.examinations.ie/ before committing a revision plan to a student (ireland).',
  commonMistakes: [
    'Treating the Classroom-Based Assessments as a soft target - the CBA grade feeds the Junior Cycle Profile of Achievement and influences the descriptor at the borderline.',
    'Leaving the Assessment Task preparation to the week before the written examination - it is timed and contributes to the final written mark in Mathematics and English.',
    'Studying only past paper questions without working through the strand learning outcomes in the NCCA specification - the published learning outcomes are the basis for the SEC examination questions.',
    'Using Higher level past papers when entered for Ordinary level, or vice versa - question depth and the available mark range differ across levels.',
    'Choosing a Higher level subject in second year and only re-evaluating after the Christmas mocks - tier decisions are easier to revise before Easter.',
    'Ignoring the prescribed text list for English - the SEC paper draws from the published Junior Cycle text list for the candidate\'s exam year.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.curriculumonline.ie/junior-cycle/',
};

export default exam;
