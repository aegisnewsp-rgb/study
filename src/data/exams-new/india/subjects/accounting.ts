import type { Subject } from '../types';

const accounting: Subject = {
  id: 'accounting', name: 'Accounting', color: '#0891b2',
  topics: [
    { id: 'accoun-001', name: 'Accounting Principles', weight: 3 as const, description: 'Fundamental concepts including GAAP, going concern, matching principle, and double-entry system for CA Foundation.' },
    { id: 'accoun-002', name: 'Journal Entries', weight: 3 as const, description: 'Recording transactions in journal with debits and credits, opening entries, and adjusting entries for CA exams.' },
    { id: 'accoun-003', name: 'Ledger Posting', weight: 3 as const, description: 'Posting from journal to ledgers, balancing of accounts, and preparation of trial balance.' },
    { id: 'accoun-004', name: 'Trial Balance', weight: 3 as const, description: 'Preparation and verification of trial balance to check arithmetic accuracy of books.' },
    { id: 'accoun-005', name: 'Depreciation', weight: 3 as const, description: 'Methods of depreciation — straight line, written down value, and units of production — for asset valuation.' },
    { id: 'accoun-006', name: 'Final Accounts', weight: 3 as const, description: 'Trading account, profit & loss account, and balance sheet preparation with closing entries.' },
    { id: 'accoun-007', name: 'Company Accounts', weight: 3 as const, description: 'Issue of shares, forfeiture, reissue, and preparation of company financial statements.' },
    { id: 'accoun-008', name: 'Issue of Shares', weight: 3 as const, description: 'Accounting treatment for share issues at par, premium, and discount; calls in arrears and advance.' },
    { id: 'accoun-009', name: 'Debentures', weight: 3 as const, description: 'Issue and redemption of debentures including convertible debentures and sinking fund method.' },
    { id: 'accoun-010', name: 'Cost Accounting Basics', weight: 3 as const, description: 'Classification of costs, cost sheet preparation, and distinction between cost, financial, and management accounting.' },
    { id: 'accoun-011', name: 'Marginal Costing', weight: 3 as const, description: 'CVP analysis, contribution margin, BEP, and decision-making using marginal costing techniques.' },
    { id: 'accoun-012', name: 'Standard Costing', weight: 3 as const, description: 'Variance analysis including material, labour, and overhead variances for cost control.' },
    { id: 'accoun-013', name: 'Budgetary Control', weight: 3 as const, description: 'Preparation of budgets, flexible budgets, and budgetary control systems for planning and control.' },
    { id: 'accoun-014', name: 'Ratio Analysis', weight: 3 as const, description: 'Liquidity, solvency, profitability, and turnover ratios for financial statement analysis.' },
    { id: 'accoun-015', name: 'Funds Flow Statement', weight: 3 as const, description: 'Analysis of changes in working capital and funds from operations for financial restructuring.' },
  ]
};

export { accounting };
