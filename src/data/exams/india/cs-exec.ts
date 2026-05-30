import type { ExamTemplate, Subject } from '../types';
import { makeRoadmap } from '../_lib/roadmap';

// CS Executive — ICSI New Syllabus 2022 (7 papers, 2 groups).
// Source of truth for paper names + chapter-level topics: official ICSI
// Executive Programme syllabus (icsi.edu). Replaced the prior 4 generic
// placeholder subjects ("Topic 1..N") on 2026-05-30 after student feedback.

const jigl: Subject = {
  id: 'jigl', name: 'Jurisprudence, Interpretation & General Laws', color: '#1d4ed8',
  topics: [
    { id: 'jigl-001', name: 'Sources of Law', weight: 3 as const },
    { id: 'jigl-002', name: 'Constitution of India', weight: 3 as const },
    { id: 'jigl-003', name: 'Interpretation of Statutes', weight: 3 as const },
    { id: 'jigl-004', name: 'General Clauses Act, 1897', weight: 3 as const },
    { id: 'jigl-005', name: 'Administrative Law', weight: 3 as const },
    { id: 'jigl-006', name: 'Law of Torts', weight: 3 as const },
    { id: 'jigl-007', name: 'Limitation Act, 1963', weight: 3 as const },
    { id: 'jigl-008', name: 'Civil Procedure Code, 1908', weight: 3 as const },
    { id: 'jigl-009', name: 'Indian Penal Code, 1860', weight: 3 as const },
    { id: 'jigl-010', name: 'Criminal Procedure Code, 1973', weight: 3 as const },
    { id: 'jigl-011', name: 'Indian Evidence Act, 1872', weight: 3 as const },
    { id: 'jigl-012', name: 'Special Courts, Tribunals under Companies Act & Other Legislations', weight: 3 as const },
    { id: 'jigl-013', name: 'Arbitration and Conciliation Act, 1996', weight: 3 as const },
    { id: 'jigl-014', name: 'Indian Stamp Act, 1899', weight: 3 as const },
    { id: 'jigl-015', name: 'Registration Act, 1908', weight: 3 as const },
    { id: 'jigl-016', name: 'Right to Information Act, 2005', weight: 3 as const },
    { id: 'jigl-017', name: 'Information Technology Act, 2000', weight: 3 as const },
  ],
};
const clp: Subject = {
  id: 'clp', name: 'Company Law & Practice', color: '#7c3aed',
  topics: [
    { id: 'clp-001', name: 'Introduction to Company Law', weight: 3 as const },
    { id: 'clp-002', name: 'Legal Status and Types of Registered Companies', weight: 3 as const },
    { id: 'clp-003', name: 'Memorandum and Articles of Association and its Alteration', weight: 3 as const },
    { id: 'clp-004', name: 'Shares and Share Capital - Concepts', weight: 3 as const },
    { id: 'clp-005', name: 'Debt Instruments - Concepts', weight: 3 as const },
    { id: 'clp-006', name: 'Members and Shareholders', weight: 3 as const },
    { id: 'clp-007', name: 'Distribution of Profits - Dividend', weight: 3 as const },
    { id: 'clp-008', name: 'Registration of Charges', weight: 3 as const },
    { id: 'clp-009', name: 'Compromise, Arrangement and Amalgamations - Concepts', weight: 3 as const },
    { id: 'clp-010', name: 'Accounts and Auditors', weight: 3 as const },
    { id: 'clp-011', name: 'Inspection, Inquiry and Investigation; Dormant Company', weight: 3 as const },
    { id: 'clp-012', name: 'Board Composition and Powers of the Board', weight: 3 as const },
    { id: 'clp-013', name: 'Directors, Key Managerial Personnel (KMP) and their Remuneration', weight: 3 as const },
    { id: 'clp-014', name: 'Meetings of Board and its Committees; General Meetings', weight: 3 as const },
    { id: 'clp-015', name: 'Annual Report - Concepts', weight: 3 as const },
    { id: 'clp-016', name: 'Corporate Social Responsibility - Concepts', weight: 3 as const },
  ],
};
const sbill: Subject = {
  id: 'sbill', name: 'Setting Up of Business, Industrial & Labour Laws', color: '#0891b2',
  topics: [
    { id: 'sbill-001', name: 'Selection of Business Organization', weight: 3 as const },
    { id: 'sbill-002', name: 'Corporate and Non-Corporate Entities; Limited Liability Partnership', weight: 3 as const },
    { id: 'sbill-003', name: 'Formation and Registration of Companies and Drafting of Incorporation Documents', weight: 3 as const },
    { id: 'sbill-004', name: 'Startups and its Registration', weight: 3 as const },
    { id: 'sbill-005', name: 'Micro, Small and Medium Enterprises (MSME)', weight: 3 as const },
    { id: 'sbill-006', name: 'Business Collaborations and Financial Services Organization', weight: 3 as const },
    { id: 'sbill-007', name: 'Various Initial Registrations and Licenses', weight: 3 as const },
    { id: 'sbill-008', name: 'Setting up of Branch / Liaison Office / Wholly Owned Subsidiary by Foreign Company', weight: 3 as const },
    { id: 'sbill-009', name: 'Setting up of Business outside India and Issues relating thereto; Conversion of Business Entities', weight: 3 as const },
    { id: 'sbill-010', name: 'Constitution and Labour Laws', weight: 3 as const },
    { id: 'sbill-011', name: 'Law of Wages (Minimum Wages, Payment of Wages, Payment of Bonus)', weight: 3 as const },
    { id: 'sbill-012', name: 'Law of Industrial Relations', weight: 3 as const },
    { id: 'sbill-013', name: 'Law of Welfare and Working Conditions (Factories Act, 1948)', weight: 3 as const },
    { id: 'sbill-014', name: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013', weight: 3 as const },
    { id: 'sbill-015', name: 'Social Security Legislations', weight: 3 as const },
    { id: 'sbill-016', name: 'Evaluation of Labour Legislation and need of Labour Codes', weight: 3 as const },
  ],
};
const cafm: Subject = {
  id: 'cafm', name: 'Corporate Accounting & Financial Management', color: '#059669',
  topics: [
    { id: 'cafm-001', name: 'Introduction to Corporate Accounting', weight: 3 as const },
    { id: 'cafm-002', name: 'Accounting for Share Capital', weight: 3 as const },
    { id: 'cafm-003', name: 'Accounting for Debentures', weight: 3 as const },
    { id: 'cafm-004', name: 'Related Aspects of Company Accounts', weight: 3 as const },
    { id: 'cafm-005', name: 'Consolidation of Accounts', weight: 3 as const },
    { id: 'cafm-006', name: 'Cash Flow Statements', weight: 3 as const },
    { id: 'cafm-007', name: 'Forecasting Financial Statements', weight: 3 as const },
    { id: 'cafm-008', name: 'Financial Statement Analysis', weight: 3 as const },
    { id: 'cafm-009', name: 'Introduction to Financial Management', weight: 3 as const },
    { id: 'cafm-010', name: 'Time Value of Money', weight: 3 as const },
    { id: 'cafm-011', name: 'Cost of Capital', weight: 3 as const },
    { id: 'cafm-012', name: 'Capital Structure', weight: 3 as const },
    { id: 'cafm-013', name: 'Capital Budgeting', weight: 3 as const },
    { id: 'cafm-014', name: 'Working Capital Management', weight: 3 as const },
    { id: 'cafm-015', name: 'Dividend Decisions', weight: 3 as const },
    { id: 'cafm-016', name: 'Security Analysis and Operational Approach to Financial Decisions', weight: 3 as const },
  ],
};
const cmsl: Subject = {
  id: 'cmsl', name: 'Capital Market & Securities Laws', color: '#f59e0b',
  topics: [
    { id: 'cmsl-001', name: 'Basics of Capital Market', weight: 3 as const },
    { id: 'cmsl-002', name: 'Securities and Exchange Board of India (SEBI)', weight: 3 as const },
    { id: 'cmsl-003', name: 'Securities Contracts (Regulation) Act, 1956', weight: 3 as const },
    { id: 'cmsl-004', name: 'Laws Governing Depositories and Depository Participants', weight: 3 as const },
    { id: 'cmsl-005', name: 'Securities Market Intermediaries', weight: 3 as const },
    { id: 'cmsl-006', name: 'Secondary Market in India', weight: 3 as const },
    { id: 'cmsl-007', name: 'International Financial Services Centres Authority (IFSCA)', weight: 3 as const },
    { id: 'cmsl-008', name: 'Issue of Securities - Concepts', weight: 3 as const },
    { id: 'cmsl-009', name: 'Acquisition of Shares and Takeovers - Concepts', weight: 3 as const },
    { id: 'cmsl-010', name: 'Delisting and Buy-Back of Securities - Concepts', weight: 3 as const },
    { id: 'cmsl-011', name: 'Listing Obligations and Disclosure Requirements (LODR)', weight: 3 as const },
    { id: 'cmsl-012', name: 'Issue and Listing of Non-Convertible Securities', weight: 3 as const },
    { id: 'cmsl-013', name: 'Mutual Funds and Collective Investment Schemes', weight: 3 as const },
    { id: 'cmsl-014', name: 'Prohibition of Insider Trading', weight: 3 as const },
    { id: 'cmsl-015', name: 'Prohibition of Fraudulent and Unfair Trade Practices Relating to Securities Market', weight: 3 as const },
  ],
};
const ecipl: Subject = {
  id: 'ecipl', name: 'Economic, Commercial and Intellectual Property Laws', color: '#16a34a',
  topics: [
    { id: 'ecipl-001', name: 'Law relating to Foreign Exchange Management (FEMA, 1999)', weight: 3 as const },
    { id: 'ecipl-002', name: 'Foreign Direct Investments - Regulations and Policy', weight: 3 as const },
    { id: 'ecipl-003', name: 'Overseas Direct Investment and External Commercial Borrowings (ECB)', weight: 3 as const },
    { id: 'ecipl-004', name: 'Foreign Trade Policy and Procedure', weight: 3 as const },
    { id: 'ecipl-005', name: 'Law relating to Special Economic Zones (SEZ)', weight: 3 as const },
    { id: 'ecipl-006', name: 'Prevention of Money Laundering Act, 2002', weight: 3 as const },
    { id: 'ecipl-007', name: 'Competition Law (Competition Act, 2002)', weight: 3 as const },
    { id: 'ecipl-008', name: 'Law relating to Foreign Contribution Regulation (FCRA, 2010)', weight: 3 as const },
    { id: 'ecipl-009', name: 'Real Estate (Regulation and Development) Act, 2016', weight: 3 as const },
    { id: 'ecipl-010', name: 'Law relating to Benami Transactions and Prohibition', weight: 3 as const },
    { id: 'ecipl-011', name: 'Law relating to Fugitive Economic Offenders; Legal Metrology', weight: 3 as const },
    { id: 'ecipl-012', name: 'Consumer Protection Act, 2019', weight: 3 as const },
    { id: 'ecipl-013', name: 'Law relating to Patents (Patents Act, 1970)', weight: 3 as const },
    { id: 'ecipl-014', name: 'Law relating to Trade Marks (Trade Marks Act, 1999)', weight: 3 as const },
    { id: 'ecipl-015', name: 'Law relating to Copyright and Industrial Designs', weight: 3 as const },
    { id: 'ecipl-016', name: 'Law relating to Geographical Indications of Goods', weight: 3 as const },
  ],
};
const tlp: Subject = {
  id: 'tlp', name: 'Tax Laws and Practice', color: '#8b5cf6',
  topics: [
    { id: 'tlp-001', name: 'Basic Concepts of Income Tax; Direct Tax at a Glance', weight: 3 as const },
    { id: 'tlp-002', name: 'Classification and Tax Incidence on Companies', weight: 3 as const },
    { id: 'tlp-003', name: 'Income under the Head Salary', weight: 3 as const },
    { id: 'tlp-004', name: 'Income under the Head House Property', weight: 3 as const },
    { id: 'tlp-005', name: 'Profits and Gains from Business and Profession', weight: 3 as const },
    { id: 'tlp-006', name: 'Capital Gains', weight: 3 as const },
    { id: 'tlp-007', name: 'Income from Other Sources', weight: 3 as const },
    { id: 'tlp-008', name: 'Incomes which do not form part of Total Income; Deductions', weight: 3 as const },
    { id: 'tlp-009', name: 'Clubbing Provisions and Set Off and/or Carry Forward of Losses', weight: 3 as const },
    { id: 'tlp-010', name: 'Computation of Total Income and Tax Liability of various entities', weight: 3 as const },
    { id: 'tlp-011', name: 'Procedural Compliance (Direct Tax)', weight: 3 as const },
    { id: 'tlp-012', name: 'Concept of Indirect Taxes at a Glance; Basics of Goods and Services Tax (GST)', weight: 3 as const },
    { id: 'tlp-013', name: 'Levy and Collection of GST', weight: 3 as const },
    { id: 'tlp-014', name: 'Time, Value and Place of Supply', weight: 3 as const },
    { id: 'tlp-015', name: 'Input Tax Credit, Computation of GST Liability and Procedural Compliance under GST', weight: 3 as const },
    { id: 'tlp-016', name: 'Overview of Customs Act, 1962', weight: 3 as const },
  ],
};

const subjects: Subject[] = [
  jigl, clp, sbill, cafm, cmsl, ecipl, tlp,
];

const exam: ExamTemplate = {
  examId: 'cs-exec',
  examName: 'CS Executive',
  country: 'india',
  description: `The Company Secretary (CS) Executive Programme is the second stage of the Company Secretaryship qualification conducted by the Institute of Company Secretaries of India (ICSI). Under the ICSI New Syllabus 2022 it comprises 7 papers across 2 groups (modules) covering corporate and company law, securities and economic laws, accounting and financial management, tax, and industrial & labour laws. It prepares candidates for governance, secretarial and corporate-compliance roles, building on the CSEET/Foundation stage.`,
  examPattern: `Under the ICSI New Syllabus 2022 the CS Executive Programme has 7 papers in 2 groups. Group 1: Jurisprudence, Interpretation & General Laws (JIGL); Company Law & Practice; Setting Up of Business, Industrial & Labour Laws (SBILL); and Corporate Accounting & Financial Management (CAFM). Group 2: Capital Market & Securities Laws (CMSL); Economic, Commercial and Intellectual Property Laws (ECIPL); and Tax Laws and Practice. Each paper carries 100 marks. All papers except CAFM use a 20% case-based objective plus 80% descriptive pattern; CAFM is fully descriptive. To pass, a candidate must score at least 40% in each paper and 50% aggregate in each group. Exemptions carry forward for papers passed with 60%+ marks.`,
  eligibility: `Candidates who have passed the CSEET (CS Executive Entrance Test) are eligible to register for the CS Executive Programme. Graduates and postgraduates (with at least 50% marks) and those who have passed the final of ICAI (CA) or ICMAI (CMA) are exempt from CSEET and may register directly. Final-year graduation students may register provisionally subject to submitting proof of passing.`,
  subjects,
  durations: {
    '1h': makeRoadmap(subjects, '1h', 1, 'Study plan for CS Executive — 1 Hour'),
    '2h': makeRoadmap(subjects, '2h', 1, 'Study plan for CS Executive — 2 Hours'),
    '3h': makeRoadmap(subjects, '3h', 1, 'Study plan for CS Executive — 3 Hours'),
    '5h': makeRoadmap(subjects, '5h', 1, 'Study plan for CS Executive — 5 Hours'),
    '12h': makeRoadmap(subjects, '12h', 1, 'Study plan for CS Executive — 12 Hours'),
    '1d': makeRoadmap(subjects, '1d', 1, 'Study plan for CS Executive — 1 Day'),
    '2d': makeRoadmap(subjects, '2d', 2, 'Study plan for CS Executive — 2 Days'),
    '3d': makeRoadmap(subjects, '3d', 3, 'Study plan for CS Executive — 3 Days'),
    '5d': makeRoadmap(subjects, '5d', 5, 'Study plan for CS Executive — 5 Days'),
    '7d': makeRoadmap(subjects, '7d', 7, 'Study plan for CS Executive — 1 Week'),
    '10d': makeRoadmap(subjects, '10d', 10, 'Study plan for CS Executive — 10 Days'),
    '2w': makeRoadmap(subjects, '2w', 14, 'Study plan for CS Executive — 2 Weeks'),
    '1mo': makeRoadmap(subjects, '1mo', 30, 'Study plan for CS Executive — 1 Month'),
    '2mo': makeRoadmap(subjects, '2mo', 60, 'Study plan for CS Executive — 2 Months'),
    '3mo': makeRoadmap(subjects, '3mo', 90, 'Study plan for CS Executive — 3 Months'),
    '6mo': makeRoadmap(subjects, '6mo', 180, 'Study plan for CS Executive — 6 Months'),
    '1yr': makeRoadmap(subjects, '1yr', 365, 'Study plan for CS Executive — 1 Year'),
    '2yr': makeRoadmap(subjects, '2yr', 730, 'Study plan for CS Executive — 2 Years'),
  },
  rescueMode: {
    name: 'Rescue Mode',
    description: 'Cramming plan for CS Executive',
    duration: '1d',
    focusAreas: subjects.slice(0, 3).map(s => ({
      subject: s.name,
      topics: s.topics.slice(0, 5).map(t => t.name),
    })),
    strategy: 'Focus on high-weight chapters, bare Acts, and ICSI past papers / suggested answers.',
  },
  lastUpdated: '2026-05-30',
  officialSource: 'https://www.icsi.edu/academic-portal/new-syllabus-2022/executive-programme/',
};

export default exam;
