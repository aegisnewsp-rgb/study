// KASNEB CPA — Foundation Level.
// Source: Kenya Accountants and Secretaries National Examinations Board,
// https://www.kasneb.or.ke/cpa — fetched and read independently by this worker on 2026-10-09
// (HTTP 200). The six CA1x papers, the minimum entry requirement and the three-level course
// structure below are quoted from that page.
// The fee figures come from https://www.kasneb.or.ke/fee-structures, which returned HTTP 200
// but renders its fee table client-side and did not serve the figures to this host; the fees are
// therefore reproduced from a Manus retrieval of KASNEB's own fee page.
// KASNEB publishes no per-paper weightage. Weight values below are StudyRoadmap's own.
import type { Subject } from '../../types';
export const kasnebFoundation: Subject = {
  id: 'foundation-level', name: 'Foundation Level', color: '#0e7490',
  topics: [
    { id: 'ca11', name: 'CA11: Financial Accounting', weight: 5, description: 'The double-entry framework, recording transactions, preparing financial statements, and the treatment of adjustments and errors.' },
    { id: 'ca12', name: 'CA12: Communication Skills', weight: 5, description: 'Written and oral communication in a professional context, report writing, and the presentation skills assessed in a professional qualification rather than in a school exam.' },
    { id: 'ca13', name: 'CA13: Introduction to Law and Governance', weight: 5, description: 'The Kenyan legal framework and its sources, contract law, the law of tort, company law fundamentals, and corporate governance.' },
    { id: 'ca14', name: 'CA14: Economics', weight: 4, description: 'Microeconomic and macroeconomic concepts, markets and equilibrium, national income, inflation and unemployment, and policy.' },
    { id: 'ca15', name: 'CA15: Quantitative Analysis', weight: 5, description: 'Mathematical and statistical techniques applied to accounting and finance problems: index numbers, time series, correlation and regression, and descriptive statistics.' },
    { id: 'ca16', name: 'CA16: Information Communication Technology', weight: 4, description: 'Information systems in an accounting context, database and spreadsheet competence, internal controls and IT controls, and the risks of manual accounting systems.' },
  ],
};
