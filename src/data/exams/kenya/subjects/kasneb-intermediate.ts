// KASNEB CPA — Intermediate Level.
// Source: Kenya Accountants and Secretaries National Examinations Board,
// https://www.kasneb.or.ke/cpa — fetched and read independently by this worker on 2026-10-09.
// The six CA2x papers below are quoted from that page. Level durations and the three-sittings-
// a-year pattern come from KASNEB's Qualifications Booklet and FAQ pages as retrieved by
// Manus; the April 2026 CPA timetable stating that CPA papers are three hours was retrieved by
// Manus from https://kasneb.or.ke/sites/default/files/2026-04/TIMETABLES%20APRIL%202026%20-%204%20%20DAYS-%2015-2-2026.pdf
// KASNEB publishes no per-paper weightage. Weight values below are StudyRoadmap's own.
import type { Subject } from '../../types';
export const kasnebIntermediate: Subject = {
  id: 'intermediate-level', name: 'Intermediate Level', color: '#15803d',
  topics: [
    { id: 'ca21', name: 'CA21: Company Law', weight: 5, description: 'The formation and constitution of companies, shares and directors\' duties, corporate governance, insolvency and winding up, under Kenyan law.' },
    { id: 'ca22', name: 'CA22: Financial Management', weight: 5, description: 'Time value of money, capital budgeting techniques, working capital management, and the cost of capital and capital structure decisions.' },
    { id: 'ca23', name: 'CA23: Financial Reporting and Analysis', weight: 5, description: 'The financial reporting framework, the primary statements and their linkage, statement of cash flows, and interpreting reported results by ratio analysis.' },
    { id: 'ca24', name: 'CA24: Auditing and Assurance', weight: 5, description: 'The audit process, planning and risk assessment, evidence and materiality, internal controls, the auditor\'s report, and assurance services more broadly.' },
    { id: 'ca25', name: 'CA25: Management Accounting', weight: 5, description: 'Cost accounting and analysis, cost behaviour, absorption and marginal costing, budgeting, standard costing and variance analysis, and decision-making techniques.' },
    { id: 'ca26', name: 'CA26: Public Finance and Taxation', weight: 5, description: 'Public financial management, budgetary processes, taxation in Kenya including income tax, VAT and the taxes administered by the authority, and fiscal policy.' },
  ],
};
