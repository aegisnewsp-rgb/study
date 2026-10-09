// CIMA CGMA Professional Qualification — Strategic Level.
// Source: AICPA & CIMA official pages, retrieved independently by this worker on 2026-10-09
// (https://www.aicpa-cima.com/resources/landing/exams and .../landing/cgma-designation), with the
// module list from the official CGMA Professional Qualification Syllabus as cited by Manus.
// The CGMA designation also requires three years of verified relevant professional experience,
// assessed through CIMA's Practical Experience Requirements process.
// AICPA & CIMA publishes no per-topic weightage. Weight values below are our own prioritisation.
import type { Subject } from '../../types';
export const cimaStrategic: Subject = {
  id: 'strategic-level', name: 'Strategic Level', color: '#7c3aed',
  topics: [
    { id: 'st-001', name: 'E3 Strategic Management', weight: 5, description: 'Business analysis and the strategic environment, corporate governance and ethics, strategic positioning and competitive advantage, and the leadership and change skills the module assesses.' },
    { id: 'st-002', name: 'P3 Risk Management', weight: 5, description: 'Risk identification and assessment, governance and internal control, audit and assurance, treasury and financial risk management, and the strategic role of risk in an organisation.' },
    { id: 'st-003', name: 'F3 Financial Strategy', weight: 5, description: 'Financing structures and the cost of capital, capital budgeting and investment appraisal, working capital and treasury management, and the interface between financing policy and corporate strategy.' },
    { id: 'st-004', name: 'Strategic Case Study', weight: 4, description: 'The three-hour Strategic Case Study, computer-based and human-marked, on pre-seen material, examining judgement across finance, management and risk at senior level.' },
    { id: 'st-005', name: 'Practical Experience and the CGMA Designation', weight: 4, description: 'The three years of verified relevant professional experience required for the designation, and how CIMA\'s Practical Experience Requirements process assesses it. Passing the examinations alone is not sufficient.' },
  ],
};
