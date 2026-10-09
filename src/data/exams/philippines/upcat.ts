import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { upcatLanguageProficiency } from './subjects/upcat-language-proficiency';
import { upcatScience } from './subjects/upcat-science';
import { upcatMathematics } from './subjects/upcat-mathematics';
import { upcatReadingComprehension } from './subjects/upcat-reading-comprehension';

const subjects: Subject[] = [
  upcatLanguageProficiency,
  upcatReadingComprehension,
  upcatScience,
  upcatMathematics,
];

const exam: ExamTemplate = {
  examId: 'upcat',
  examName: 'UPCAT (UP College Admission Test)',
  country: 'philippines',
  description:
    'The UPCAT is the University of the Philippines\' own entrance examination, and it is the single route into the country\'s largest and oldest university system. UP describes the test as consisting of "four subtests: Language Proficiency (in English and Filipino), Science, Mathematics, and Reading Comprehension (in English and Filipino)". What makes UPCAT unusual is what happens after the test: UP states that "standardized UPCAT scores are combined with the composite of final grades in Grades 8, 9, 10, and 11 to determine the admission score (\'UPG\')". The paper is not the whole admission decision, and the test itself lasts about five hours.',
  examPattern:
    'Four subtests — Language Proficiency, Reading Comprehension, Science and Mathematics — delivered as a single sittings of about five hours. UP\'s published guidance tells applicants to arrive by 6:00 am for a morning session or 12:00 pm for an afternoon session and to go to the test centre named on the test permit. UP does not publish a question count, a per-subtest duration or any weightage table for the four subtests, so anyone quoting "200 questions" or "25 per section" is quoting a number the University has not published. The UPG admission score blends the standardised UPCAT result with your Grades 8–11 record, which is why a candidate with a weaker paper but a stronger school record can still qualify.',
  eligibility:
    'UP states the minimum requirements for UPCAT 2027 (Academic Year 2027–2028) directly: applicants must be "Grade 11 students this AY 2025–2026 (those expecting to graduate from senior high school/Grade 12 by the end of AY 2026–2027); OR senior high school graduates", with complete Grades 8, 9, 10 and 11 in the K–12 curriculum, or their foreign equivalent, by the grades submission deadline. Applicants must NOT have taken any college or post-secondary courses, taken the UPCAT before, or had their UP college application processed during a year in which they did not sit the test. International applicants who studied outside the Philippines have a separate route, described by UP as "without taking the UPCAT", using SAT scores, GCE results, an IB Diploma or another approved equivalent.',
  calendarDates: {
    applicationStart: 'UPCAT 2027 applications run in the first half of 2026 on the official portal upcat2027online.up.edu.ph — check the portal for the live window.',
    examDates: '01–02 August 2026 (UPCAT 2027, per the UP application portal).',
    resultDate: 'UP states that "the results for UPCAT 2027 will be released within the first half of the year 2027". There is no published result day.',
  },
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'UPCAT study plan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'UPCAT study plan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'UPCAT study plan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'UPCAT study plan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'UPCAT study plan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'UPCAT study plan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'UPCAT study plan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'UPCAT study plan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'UPCAT study plan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'UPCAT study plan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'UPCAT study plan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'UPCAT study plan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'UPCAT study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'UPCAT study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'UPCAT study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'UPCAT study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'UPCAT study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'UPCAT study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Last-ditch UPCAT plan in the week before the August sitting',
    duration: '1w',
    focusAreas: [
      { subject: 'Mathematics', topics: ['Word Problems and Reasoning', 'Algebra: Equations and Inequalities', 'Geometry and Measurement'] },
      { subject: 'Science', topics: ['Scientific Method and Data Interpretation', 'Biological Systems and Human Physiology'] },
      { subject: 'Reading Comprehension', topics: ['Locating the Explicit Answer', 'Inference from Stated Evidence'] },
      { subject: 'Language Proficiency', topics: ['Reading for Comprehension Under Time Pressure', 'Grammar in Context, Not in Isolation'] },
    ],
    strategy: 'Four full-length timed sittings in the last week, because the test is five hours long and the single most common failure is simply running out of stamina. Fix your order on day one and never change it. From day three onwards, do nothing but timed Reading Comprehension and timed Mathematics — they carry the most transferable marks and they are where the time leaks. Do not spend the last two days re-reading science textbooks; the returns there are the worst of the four subtests.',
  },
  prepOverview:
    'Start where the exam is scored. Because UP combines the standardised UPCAT result with your Grades 8–11 composite into the UPG, your school record is already part of the equation — so the preparation budget belongs in the subtests that move fastest. Mathematics and Reading Comprehension improve measurably in a fortnight if you do timed sets; science content needs months and will not arrive in time, but scientific-reasoning items can be trained. Treat the five-hour length as the first exam to prepare for: build stamina early, practise holding attention on material you have already read, and rehearse the morning routine including travel and food. Language Proficiency is the subtest most damaged by slow reading, so most of your practice should be timed passages with hard questions left blank rather than guessed. UP publishes no subtest weightages, so anyone selling you a percentage breakdown is inventing one; the weights on this page are StudyRoadmap\'s own prioritisation.',
  commonMistakes: [
    'Applying under the name "UPAT". The University of the Philippines calls it the UP College Admission Test, or UPCAT, on its own portal. The University states that the test "consists of four subtests" — anyone quoting a fifth, or a nine-item breakdown, is quoting something UP did not publish.',
    'Memorising a question count or a per-subtest timing. UP publishes neither. The only published duration figure is that test administration "will last about five hours".',
    'Treating the paper as the whole admission score. UP states that standardized UPCAT scores are combined with the composite of final grades in Grades 8–11 to form the UPG, so your school record matters as much as your sitting.',
    'Missing the grades-submission deadline. UP requires complete Grades 8 to 11 by a separate submission window, and the grade upload is as binding as the application itself.',
    'Forgetting that the test can only be sat once. UP states applicants must not have taken the UPCAT before, so a walk-in retake is not available.',
    'Booking travel for the wrong day. UP runs the test across two consecutive days and assigns each applicant a session — the test permit names the date, and 6:00 am or 12:00 pm arrival is required for the two sessions.',
    'Applying as an international applicant through the UPCAT by default. UP publishes a separate international route, "without taking the UPCAT", using SAT, GCE, IB or another approved equivalent.',
  ],
  lastUpdated: '2026-10-09',
  officialSource: 'https://upcat.up.edu.ph/htmls/aboutupcat.html',
};

export default exam;