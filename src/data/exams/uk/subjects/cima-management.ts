// CIMA CGMA Professional Qualification — Management Level.
// Source: AICPA & CIMA official pages, retrieved independently by this worker on 2026-10-09
// (https://www.aicpa-cima.com/resources/landing/exams and .../landing/cgma-designation), with the
// module list from the official CGMA Professional Qualification Syllabus as cited by Manus.
// The Management Case Study is one of three, one per level, each computer-based, human-marked
// and three hours long, using pre-seen material.
// AICPA & CIMA publishes no per-topic weightage. Weight values below are our own prioritisation.
import type { Subject } from '../../types';
export const cimaManagement: Subject = {
  id: 'management-level', name: 'Management Level', color: '#15803d',
  topics: [
    { id: 'mg-001', name: 'E2 Managing Performance', weight: 5, description: 'Business analysis, performance measurement and balanced scorecards, benchmarking and process re-engineering, and cost and management accounting at the level of decision support.' },
    { id: 'mg-002', name: 'P2 Advanced Management Accounting', weight: 5, description: 'Standard costing and variance analysis, decision-making under uncertainty, transfer pricing, relevant costing, and pricing and investment appraisal techniques.' },
    { id: 'mg-003', name: 'F2 Advanced Financial Reporting', weight: 5, description: 'The full financial reporting framework including statement of cash flows, consolidated accounts, accounting for income taxes, pensions and financial instruments, and the drivers of published profit.' },
    { id: 'mg-004', name: 'Management Case Study', weight: 4, description: 'The three-hour Management Case Study, computer-based and human-marked, on pre-seen material, assessing integrated application across the three knowledge pillars.' },
  ],
};
