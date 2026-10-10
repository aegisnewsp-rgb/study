// CIMA CGMA Professional Qualification — Operational Level.
// Source: AICPA & CIMA official pages, retrieved independently by this worker on 2026-10-09:
// https://www.aicpa-cima.com/resources/landing/exams (assessment structure verbatim below) and
// https://www.aicpa-cima.com/resources/landing/cgma-designation (qualification structure).
// The nine Objective Test subjects and the three Case Study papers come from the official
// "CGMA Professional Qualification Syllabus" as cited by Manus
// (https://www.aicpa-cima.com/resources/download/cgma-professional-qualification-syllabus);
// the fee figures per module come from https://www.aicpa-cima.com/resources/landing/fees
// as retrieved by Manus — the fee table on that page did not render to this worker.
// AICPA & CIMA publishes no per-topic weightage. Weight values below are our own prioritisation.
import type { Subject } from '../../types';
export const cimaOperational: Subject = {
  id: 'operational-level', name: 'Operational Level', color: '#0e7490',
  topics: [
    { id: 'op-001', name: 'E1 Managing Finance in a Digital World', weight: 5, description: 'Finance functions in an organisation, financial statement purpose and construction, management accounting techniques, and the technology-driven change reshaping finance roles.' },
    { id: 'op-002', name: 'P1 Management Accounting', weight: 5, description: 'Cost behaviour and classification, absorption and marginal costing, break-even analysis, budgeting, variance analysis and standard costing, and decision-making techniques.' },
    { id: 'op-003', name: 'F1 Financial Reporting', weight: 5, description: 'The conceptual framework and accounting standards, the primary statements and their linkage, double-entry bookkeeping, and the adjustments that produce a statutory result.' },
    { id: 'op-004', name: 'Operational Case Study', weight: 4, description: 'The three-hour human-marked Operational Case Study, computer-based, taken in pre-seen material and assessed on integrated application rather than on subject recall.' },
  ],
};
