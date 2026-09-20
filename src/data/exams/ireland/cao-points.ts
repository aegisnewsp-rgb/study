import type { ExamTemplate, Subject } from '../types';

import { caoPoints } from './subjects/cao-points';

const subjects: Subject[] = [
    caoPoints,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'cao-points',
  examName: 'CAO Points System (Irish Leaving Certificate)',
  country: 'ireland',
  description: 'The Central Applications Office (CAO) operates the common points scale that converts Irish Leaving Certificate grades into a single aggregate score for undergraduate admissions to Irish Higher Education Institutions. The points scale has applied to all CAO applicants since 2017 (the new Common Points Scale), with the 25-point bonus for Higher Level Mathematics at grade H6 or above. The CAO process runs annually: applications open in late autumn, course choices are submitted by 1 February, late applications by 1 May, and offers are issued in three rounds through August and September. CAO also manages the HEAR (Higher Education Access Route) and DARE (Disability Access Route) supplementary application schemes, the QQI FET/FETAC pathway scoring, and the GCE A-Level/GCSE scoring scheme for non-Leaving Certificate applicants.',
  examPattern: 'There is no CAO examination; the points score is calculated from the six best Leaving Certificate subject results (or the equivalent under the QQI FET or GCE A-Level scoring grids published by CAO). The Common Points Scale runs from 100 points (H1) down to 0 (H8 / O7 / O8), with 25 bonus points added for Higher Level Mathematics at H6 or above, capped at the maximum aggregate of 625 points. The CAO Handbook (cao.ie/handbook/) is published annually and is the source of record for the scoring scheme, course codes, and round-by-round points history. Confirm the live scoring rules, bonus-points threshold, and the current round dates on cao.ie before planning.',
  eligibility: 'Any applicant who has sat or will sit the Irish Leaving Certificate Examination (or an equivalent such as QQI FET/FETAC awards, GCE A-Levels, or international qualifications covered by the CAO scoring grids) may apply through CAO for Level 7/8 undergraduate courses at participating Irish HEIs. There is no minimum Leaving Certificate result required to make a CAO application, but each course has its own matriculation and subject-specific entry requirements which must be met for the candidate to receive an offer. Mature applicants (23 or older on 1 January of the application year) apply through a separate route. HEAR and DARE applicants must meet the published socio-economic or disability criteria in addition to the academic requirements. Always confirm the latest rules, course-specific requirements and round dates on cao.ie before submission.',
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CAO Points System - 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for CAO Points System - 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for CAO Points System - 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for CAO Points System - 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for CAO Points System - 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CAO Points System - 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for CAO Points System - 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CAO Points System - 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for CAO Points System - 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CAO Points System - 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for CAO Points System - 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for CAO Points System - 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CAO Points System - 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for CAO Points System - 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CAO Points System - 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CAO Points System - 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for CAO Points System - 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for CAO Points System - 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for the CAO Points System',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Spend the largest block on the Common Points Scale (the grid that converts grades to points) and the Higher Level Maths bonus, then work through the matriculation minimum requirements for the candidate\'s target courses, then verify the order-of-preferences rule on cao.ie.',
  },
  prepOverview:
    'CAO preparation is not subject-specific; it is preparation for the process of applying through the Central Applications Office for Irish Higher Education. The productive pattern is: confirm the Common Points Scale and the Higher Level Maths bonus rule first, then the candidate\'s target courses\' matriculation and subject-specific entry requirements, then the points history of those courses from the round-by-round CAO data, then the order-of-preferences rule and the random number tie-breaker, then the registration windows and the HEAR/DARE supplementary schemes if relevant. Use the official CAO Handbook and the points calculation grid (cao.ie/index.php?page=scoring&s=lcepointsgrid) as the source of record; third-party points predictor sites are useful for sanity-checking a candidate\'s aggregate but cannot match CAO\'s own scoring rules. For one-month plans, work through the candidate\'s top-ten course choices against the published cut-offs and the matriculation requirements; for three-month plans, layer a HEAR/DARE review if the candidate is eligible. Always re-check the live scoring rules, registration dates and the participating HEIs\' course-specific entry requirements on https://www.cao.ie/ before committing a revision plan to a student (ireland).',
  commonMistakes: [
    'Listing course choices in realistic-rather-than-genuine order of preference - CAO allocates the highest preference the candidate is entitled to, regardless of how likely the candidate thinks it is to be reached.',
    'Forgetting the Higher Level Mathematics bonus-points threshold - the 25 points are added for H6 or above, not for passing, and the candidate cannot reach the 625 cap without the bonus at H6 or higher.',
    'Assuming Foundation Level Mathematics contributes points - Foundation Maths (F1/F2/F3) scores 0 points on the CAO aggregate even though the grade is recorded, which makes most Level 8 courses out of reach.',
    'Ignoring the course-specific subject requirements - many courses require a specific grade in a specific subject (e.g. H4 in Chemistry for medicine at several HEIs) regardless of the points total.',
    'Missing the 1 February CAO deadline for normal applications and the 1 May deadline for late applications - the late-application fee increases and some course-specific options close earlier.',
    'Trusting third-party points predictors as the authority - they only model the published scale and can miss course-specific rules; always cross-check on cao.ie.',
    'Forgetting that the random number tie-breaker is generated at the time of application, so re-registering changes the random number but does not change the points.'
  ],
  lastUpdated: '2026-09-20',
  officialSource: 'https://www.cao.ie/',
};

export default exam;
