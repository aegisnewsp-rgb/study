import type { Subject } from '../../types';

// Central Applications Office (CAO) points system for Republic of Ireland
// Leaving Certificate applicants. The CAO is the national admissions
// clearing house for Irish Higher Education Institutions; it publishes the
// Common Points Scale (cao.ie/index.php?page=scoring&s=lcepointsgrid), the
// Common Points Scale Calculator, and the annual CAO Handbook. This subject
// covers how Leaving Certificate results are converted into CAO points and
// how those points feed the course-allocation process; topics are taken from
// the official CAO scoring and handbook pages.
// Source: Central Applications Office - Irish Leaving Certificate Examination
// Points Calculation Grid, https://www.cao.ie/index.php?page=scoring&s=lcepointsgrid
// Source: Central Applications Office - Common Points Scale,
// https://www.cao.ie/index.php?bb=cps&page=newcps
// Verify the live points scale, bonus-points rule and any in-year rule
// changes on cao.ie before committing a revision plan.
export const caoPoints: Subject = {
  id: 'cao-points',
  name: 'CAO Points System',
  color: '#f59e0b',
  topics: [
    { id: 'cao-001', name: 'Common Points Scale', weight: 5 as const, description: 'How Leaving Certificate grades convert to points - H1 = 100 down to H8 = 0, and O1 = 56 down to O8 = 0 - published by the Central Applications Office for use across all CAO applications from 2017 onwards.' },
    { id: 'cao-002', name: 'Higher Level Maths Bonus Points', weight: 4 as const, description: 'The 25 bonus points added to a candidate\'s score for achieving grade H6 or above in Higher Level Mathematics, applied once across the six best subjects and capped at the maximum 625 points.' },
    { id: 'cao-003', name: 'Six Best Subjects Rule', weight: 4 as const, description: 'A candidate\'s CAO points are calculated from their six best subject scores after the Maths bonus is applied. Foundation Level Maths scores do not contribute to points, although the grade is recorded.' },
    { id: 'cao-004', name: 'Foundation Level Maths and Points', weight: 3 as const, description: 'Foundation Level Mathematics is recorded as F1/F2/F3 but contributes 0 points to the CAO aggregate. Many Level 8 courses require a minimum grade in Ordinary Level Maths or a pass in Foundation Maths - check the specific course requirements.' },
    { id: 'cao-005', name: 'Matriculation Minimum Requirements', weight: 4 as const, description: 'The minimum subject and grade requirements to be considered for a CAO offer - typically O6/H7 in English, O6/H7 in Mathematics (or F6 in Foundation Maths for some courses) and O6/H7 in two other subjects, plus any course-specific subject requirements.' },
    { id: 'cao-006', name: 'Random Number Allocation', weight: 2 as const, description: 'When candidates are tied on points for the last available place, CAO allocates the place by a random number generated when the application is submitted, independent of grades and order of course choices.' },
    { id: 'cao-007', name: 'Course Points Cut-offs', weight: 4 as const, description: 'The published minimum points for each Level 7/8 course from previous years - the round-by-round CAO points history - and how these relate to a candidate\'s predicted aggregate, including year-on-year variation.' },
    { id: 'cao-008', name: 'Order of Course Choices', weight: 2 as const, description: 'A candidate lists up to ten Level 7/8 courses in genuine order of preference; CAO allocates one offer per round at the highest preference the candidate is entitled to, regardless of prior-round expectations.' }
  ]
};
