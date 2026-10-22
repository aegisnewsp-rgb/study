import type { ExamTemplate, Subject } from '../types';

import { accounting } from './subjects/accounting';
import { taxation } from './subjects/taxation';
import { audit } from './subjects/audit';
import { financial_report } from './subjects/financial-report';

const subjects: Subject[] = [
    accounting,
    taxation,
    audit,
    financial_report,
];

import { makeRoadmap } from '../_lib/roadmap';
const exam: ExamTemplate = {
  examId: 'accagl',
  examName: 'ACCA/CA Pakistan',
  country: 'pakistan',
  description: `ACCA is a global professional accounting body, while CA Pakistan is the local route: the Chartered Accountancy programme of the Institute of Chartered Accountants of Pakistan (ICAP), structured as Foundation, Professional (three stages) and Final stages. The two are separate qualifications rather than two labels for one, so a candidate weighing them is comparing awarding bodies, exam structure and the practical-experience requirement attached to each. Neither is exam-only: both are followed by a period of practical experience, and both prepare candidates for careers in audit, taxation, financial management and advisory services. The full ACCA Qualification is 13 exams in total. How the ACCA papers divide across the three levels, and which optional papers may be chosen from, is set out in the exam-pattern section below.`,
  examPattern: `The ACCA Qualification consists of 13 exams across three levels: Applied Knowledge (3 exams - Business and Technology, Management Accounting, Financial Accounting), Applied Skills (6 exams - Corporate and Business Law, Performance Management, Taxation, Financial Reporting, Audit and Assurance, Financial Management), and Strategic Professional (4 exams - two compulsory Strategic Business Leader and Strategic Business Reporting, plus two optional exams from Advanced Taxation, Advanced Audit and Assurance, Advanced Financial Management, Advanced Performance Management). Each exam is computer-based and can be attempted in any order subject to prerequisites. CA Pakistan consists of multiple examination stages: Foundation, Professional (three stages), and Final.`,
  eligibility: `For ACCA: There are no strict academic entry requirements for the ACCA Qualification - anyone can start with the Foundations Diplomas. For the full ACCA Qualification, candidates typically need two A-levels and three GCSEs (or equivalent) in five separate subjects including English and Mathematics, or a bachelor's degree. For CA Pakistan (ICAP): Candidates typically must have completed Intermediate (12 years of education) with at least 50% marks or a bachelor's degree as confirmed in official ICAP regulations. Graduates with 16 years of education can claim exemptions from certain levels. Candidates typically must also complete three years of practical training under a qualified Chartered Accountant before becoming fully qualified.`,
  subjects,
    durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for ACCA/CA Pakistan — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for ACCA/CA Pakistan — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for ACCA/CA Pakistan — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for ACCA/CA Pakistan — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for ACCA/CA Pakistan — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for ACCA/CA Pakistan — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for ACCA/CA Pakistan — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for ACCA/CA Pakistan — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for ACCA/CA Pakistan — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for ACCA/CA Pakistan — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for ACCA/CA Pakistan — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for ACCA/CA Pakistan — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for ACCA/CA Pakistan — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for ACCA/CA Pakistan — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for ACCA/CA Pakistan — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for ACCA/CA Pakistan — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for ACCA/CA Pakistan — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for ACCA/CA Pakistan — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for ACCA/CA Pakistan',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight topics and previous year questions.',
  },
  prepOverview:
    'Settle the ACCA-versus-CA-Pakistan question early, because the awarding body, the exam structure and the experience requirement differ between them. Under ACCA, map your study order through the three ACCA levels - Applied Knowledge, Applied Skills, Strategic Professional - and plan for two compulsory papers up front, Strategic Business Leader and Strategic Business Reporting, alongside your choice of two optional papers; under CA Pakistan, work through ICAP’s Foundation, Professional and Final stages. Neither route ends at the last exam, because both are followed by practical experience, so tie each paper to work in audit, taxation, financial management or advisory services as you go. Entry differs too: with ACCA open to anyone starting from the Foundations Diplomas while CA Pakistan turns on Intermediate marks, a bachelor’s degree or an exemption claim for graduates with 16 years of education.',
  commonMistakes: [
    'Calling ACCA and CA Pakistan two names for the same qualification is wrong, because the ACCA Qualification has 13 exams across Applied Knowledge, Applied Skills and Strategic Professional while ICAP\'s route is Foundation, Professional and Final stages with its own practical training.',
    'Assuming Strategic Professional is four compulsory papers costs marks, since it has only two compulsory papers and two optional papers you choose from Advanced Performance Management, Advanced Financial Management, Advanced Audit and Assurance or Advanced Taxation.',
    'Missing Mathematics or English at school level blocks the full ACCA route, because the typical entry asks for two A-levels plus three GCSEs (or equivalent), taken across five separate subjects, and both of those two have to be among them.',
    'Relying on exams alone ignores the practical training requirement, because CA Pakistan candidates must also log three years of supervised work with a qualified Chartered Accountant before the title fully qualified is theirs, and ACCA is followed by practical experience too.',
    'Assuming you can sit any paper in any order is risky, because every ACCA paper is sat on computer, and the order you take them in is yours to choose, but only once the prerequisite papers behind it are cleared.',
  ],
  lastUpdated: '2026-07-28',
  officialSource: 'https://www.accaglobal.com/pk/en.html',
  conductingBody: 'Institute of Chartered Accountants of Pakistan (ICAP)',
};

export default exam;
