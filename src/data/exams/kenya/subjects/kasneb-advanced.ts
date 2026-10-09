// KASNEB CPA — Advanced Level and the additional requirements.
// Source: Kenya Accountants and Secretaries National Examinations Board,
// https://www.kasneb.or.ke/cpa — fetched and read independently by this worker on 2026-10-09
// (HTTP 200). The compulsory papers, the specialisation papers and the three additional
// requirements below are quoted from that page.
//
// CORRECTION TO OTHER SOURCES: the live KASNEB page lists the Advanced compulsory paper
// CA34S3: Advanced Management Accounting, and the three specialisation papers as CA34S1:
// Advanced Taxation, CA34S2: Advanced Auditing and Assurance and CA34S4: Advanced Public
// Financial Management. A secondary retrieval of the qualification booklet reported these as
// CA34, CA35S1, CA35S2 and CA35S3 respectively. This file follows the live KASNEB page.
//
// KASNEB publishes no per-paper weightage. Weight values below are StudyRoadmap's own.
import type { Subject } from '../../types';
export const kasnebAdvanced: Subject = {
  id: 'advanced-level', name: 'Advanced Level', color: '#7c3aed',
  topics: [
    { id: 'ca31', name: 'CA31: Leadership and Management', weight: 5, description: 'Leadership theory and its application, organisational behaviour, change management, governance and ethics, and the manager\'s role in strategy implementation.' },
    { id: 'ca32', name: 'CA32: Advanced Financial Reporting and Analysis', weight: 5, description: 'Complex financial reporting including consolidation, accounting for income taxes, pensions and financial instruments, and interpreting statements for decision-making.' },
    { id: 'ca33', name: 'CA33: Advanced Financial Management', weight: 5, description: 'Advanced financing structures, valuation, capital structure and dividend policy, and the interface between financing decisions and corporate strategy.' },
    { id: 'ca34s3', name: 'CA34S3: Advanced Management Accounting', weight: 5, description: 'Advanced costing and performance measurement, relevant costing and short-term decision analysis, and process and operations management at senior level.' },
    { id: 'ca34s', name: 'CA34S1/S2/S4: Specialisation Papers', weight: 5, description: 'One specialisation paper is selected, with double specialisation allowed: CA34S1 Advanced Taxation, CA34S2 Advanced Auditing and Assurance, or CA34S4 Advanced Public Financial Management.' },
    { id: 'ca35p-ca36we-ca37wp', name: 'CA35P, CA36WE and CA37WP: Practical and Workshop Requirements', weight: 5, description: 'CA35P Business Data Analytics is a practical paper. CA36WE is a Workshop on Ethics. CA37WP is a Workshop on Work Simulation for candidates without one year of relevant practical experience.' },
  ],
};
