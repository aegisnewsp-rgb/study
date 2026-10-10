import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';
import { kasnebFoundation } from './subjects/kasneb-foundation';
import { kasnebIntermediate } from './subjects/kasneb-intermediate';
import { kasnebAdvanced } from './subjects/kasneb-advanced';

const subjects: Subject[] = [
  kasnebFoundation,
  kasnebIntermediate,
  kasnebAdvanced,
];

const exam: ExamTemplate = {
  examId: 'kasneb-cpa',
  examName: 'KASNEB CPA (Certified Public Accountants, Kenya)',
  country: 'kenya',
  description:
    'The CPA qualification is examined by the Kenya Accountants and Secretaries National Examinations Board, a state corporation under Kenya\'s National Treasury and Economic Planning whose mandate includes developing syllabuses, conducting professional examinations and certifying candidates. KASNEB calls the qualification Certified Public Accountants; "CPA Kenya" is a common shorthand rather than the formal title on KASNEB\'s own qualification page. The course is structured in three levels — Foundation, Intermediate and Advanced — and entry requires a KCSE mean grade of C+ (Plus), a KASNEB diploma qualification, or any other recognised diploma.',
  examPattern:
    'The CPA course is structured into three levels. Foundation Level: CA11 Financial Accounting, CA12 Communication Skills, CA13 Introduction to Law and Governance, CA14 Economics, CA15 Quantitative Analysis, CA16 Information Communication Technology. Intermediate Level: CA21 Company Law, CA22 Financial Management, CA23 Financial Reporting and Analysis, CA24 Auditing and Assurance, CA25 Management Accounting, CA26 Public Finance and Taxation. Advanced Level compulsory papers: CA31 Leadership and Management, CA32 Advanced Financial Reporting and Analysis, CA33 Advanced Financial Management, CA34S3 Advanced Management Accounting. One specialisation paper is selected, with double specialisation allowed: CA34S1 Advanced Taxation, CA34S2 Advanced Auditing and Assurance, or CA34S4 Advanced Public Financial Management. Three further requirements sit alongside the papers: CA35P Business Data Analytics, a practical paper; CA36WE, a Workshop on Ethics; and CA37WP, a Workshop on Work Simulation for candidates without one year of relevant practical experience. KASNEB states that examinations are held three times each year — April, August and December — and that CPA papers are three hours in duration, with morning sessions beginning at 9:00 a.m. and afternoon sessions at 2:00 p.m. KASNEB states that each level requires an average of one year.',
  eligibility:
    'KASNEB sets the minimum entry requirement directly: a KCSE mean grade of C+ (Plus), or a KASNEB diploma qualification, or any other recognised diploma. On top of the papers, KASNEB requires one year of practical experience, and provides an alternative route: candidates without one year of relevant practical experience sit the Work Simulation workshop, CA37WP, which KASNEB organises with ICPAK. Candidates are advised to budget an additional year beyond the examination timeline to meet internship and practical-experience requirements, so the three levels of examinations are not the whole duration of becoming qualified.',
  calendarDates: {
    applicationEnd: 'For the December 2026 sitting, KASNEB\'s published notice gives an examination-entry close of 30 October 2026.',
    examDates: 'Examinations are held three times each year — April, August and December. The December 2026 examination window was published as 30 November to 3 December 2026.',
    resultDate: 'Not published on the notice reviewed. Confirm the result date on KASNEB\'s own site.',
  },
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'KASNEB CPA study plan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'KASNEB CPA study plan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'KASNEB CPA study plan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'KASNEB CPA study plan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'KASNEB CPA study plan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'KASNEB study plan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'KASNEB study plan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'KASNEB study plan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'KASNEB study plan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'KASNEB study plan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'KASNEB study plan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'KASNEB study plan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'KASNEB CPA study plan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'KASNEB CPA study plan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'KASNEB CPA study plan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'KASNEB CPA study plan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'KASNEB CPA study plan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'KASNEB CPA study plan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Plan for a candidate entering a KASNEB CPA examination window with limited time',
    duration: '1mo',
    focusAreas: [
      { subject: 'Foundation Level', topics: ['CA15: Quantitative Analysis', 'CA11: Financial Accounting'] },
      { subject: 'Intermediate Level', topics: ['CA23: Financial Reporting and Analysis', 'CA24: Auditing and Assurance'] },
      { subject: 'Advanced Level', topics: ['CA34S: Specialisation Papers', 'CA35P, CA36WE and CA37WP: Practical and Workshop Requirements'] },
    ],
    strategy: 'Sit the papers you are strongest in rather than the ones at the level you are attempting. KASNEB runs examinations three times a year, so a Foundation or Intermediate paper can be taken in a later sitting without jeopardising an Advanced one, and each level is charged per paper — so every paper you register for is a separate cost. With a month, pick two papers, not six. Quantitative Analysis and Financial Accounting return the most marks per hour because both are procedural; Auditing and Financial Reporting reward structure and can be improved quickly by learning the framework rather than the detail. Do not forget CA36WE and the ethics material — the workshop requirement is assessed separately from the papers, and a candidate who forgets it discovers the requirement when it matters.',
  },
  prepOverview:
    'Plan this qualification as a three-year project rather than an examination season. KASNEB states that each level requires an average of one year and advises candidates to allow an additional year to meet internship and practical-experience requirements, so the three levels of papers are the shorter half of the qualification. Starting the experience requirement early matters more than starting the syllabuses early, because the experience does not compress.\n\nUse the three-sittings-a-year structure deliberately. KASNEB holds examinations in April, August and December, which means you can take Foundation papers in one sitting and Intermediate papers in another without losing a year. Choose the level you can finish properly rather than the level you have reached, and remember that each paper carries its own examination fee — so registering for papers you are not ready for is a real financial cost, not just wasted time.\n\nThen handle the parts that are not examinations at all. CA35P is a practical paper in business data analytics, not a written paper. CA36WE is a workshop on ethics. CA37WP is a work-simulation workshop that serves as the alternative route to the one-year practical experience. Each has its own preparation format, and each can be scheduled around your work in ways that a written examination cannot.\n\nOn the papers themselves, plan for three hours with no breaks in the morning or afternoon session. KASNEB states CPA papers are three hours, with sessions starting at 9:00 a.m. and 2:00 p.m. Build to full-length timed sittings well before the window, because the difference between a candidate who has done three-hour sittings and one who has not is mostly in the last hour of the paper.\n\nOne caution about sources. KASNEB\'s own qualification page is authoritative for the paper list, and it has changed: the Advanced compulsory paper in Advanced Management Accounting is listed as CA34S3, and the three specialisation papers as CA34S1, CA34S2 and CA34S4. You will see older paper codes in third-party material. Check the codes against KASNEB before you plan a study timetable around them.',
  commonMistakes: [
    'Using outdated paper codes. KASNEB\'s own page lists CA34S3 as the Advanced Management Accounting paper and CA34S1, CA34S2 and CA34S4 as the specialisations; third-party material frequently carries older CA34 and CA35S codes.',
    'Treating "CPA Kenya" as the formal qualification name. KASNEB\'s qualification page calls the qualification Certified Public Accountants.',
    'Planning only for the examinations. KASNEB requires one year of practical experience, with CA37WP as the alternative route for candidates who do not have it, and advises an additional year beyond the examination timeline.',
    'Forgetting CA35P, CA36WE and CA37WP. The business data analytics practical paper and the two workshops are assessed separately from the written papers.',
    'Attending without sustained practice. KASNEB states CPA papers are three hours long, which is a stamina problem as much as a knowledge problem.',
    'Registering for every paper in a sitting. Each paper carries its own examination fee, and examinations run three times a year, so a paper can be deferred rather than crammed.',
    'Missing the examination-entry close. KASNEB publishes the entry deadline per sitting, and it sits well before the examination window.',
    'Ignoring the entry requirement. A KCSE mean grade of C+ (Plus), a KASNEB diploma, or another recognised diploma is required, and candidates with foreign secondary results should check how those are treated before registering.',
  ],
  lastUpdated: '2026-10-09',
  officialSource: 'https://www.kasneb.or.ke/cpa',
};

export default exam;
