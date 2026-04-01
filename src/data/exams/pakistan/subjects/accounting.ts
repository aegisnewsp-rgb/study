export const accounting: Subject = {
  id: 'accounting', name: 'Accounting', color: '#0891b2',
  topics: [
    { id: 'accoun-001', name: 'Accounting Principles and Concepts', weight: 3 as const, description: 'Fundamental accounting principles including going concern, consistency, materiality, and matching concepts that form the foundation of financial reporting.' },
    { id: 'accoun-002', name: 'Journal Entries and Recording', weight: 3 as const, description: 'Practice of recording financial transactions in double-entry bookkeeping system using debits and credits in the journal.' },
    { id: 'accoun-003', name: 'Ledger Posting and Balancing', weight: 3 as const, description: 'Transferring entries from journal to respective ledger accounts and balancing them to prepare trial balance.' },
    { id: 'accoun-004', name: 'Trial Balance Preparation', weight: 3 as const, description: 'Preparation of trial balance to verify arithmetic accuracy of ledger postings before preparing financial statements.' },
    { id: 'accoun-005', name: 'Depreciation Methods', weight: 3 as const, description: 'Calculation of depreciation using straight-line, diminishing balance, and sum-of-years digits methods for fixed assets.' },
    { id: 'accoun-006', name: 'Financial Statements Preparation', weight: 3 as const, description: 'Preparation of Income Statement, Balance Sheet, and Cash Flow Statement from trial balance data.' },
    { id: 'accoun-007', name: 'Company Accounts', weight: 3 as const, description: 'Accounting for share capital, debentures, reserves, and preparation of company financial statements.' },
    { id: 'accoun-008', name: 'Issue of Shares and Debentures', weight: 3 as const, description: 'Accounting treatment for issuance of shares at par, premium, and discount, as well as debenture issuance and redemption.' },
    { id: 'accoun-009', name: 'Ratio Analysis', weight: 3 as const, description: 'Calculation and interpretation of liquidity, leverage, profitability, and efficiency ratios.' },
    { id: 'accoun-010', name: 'Cost Accounting Basics', weight: 3 as const, description: 'Introduction to cost classification, cost sheet preparation, and difference between job costing and process costing.' },
    { id: 'accoun-011', name: 'Marginal Costing', weight: 3 as const, description: 'Cost-volume-profit analysis, contribution margin, break-even analysis, and decision-making using marginal costing.' },
    { id: 'accoun-012', name: 'Standard Costing', weight: 3 as const, description: 'Setting standard costs, calculating variances, and their significance in cost control.' },
    { id: 'accoun-013', name: 'Budgetary Control', weight: 3 as const, description: 'Preparation of budgets, flexible budgets, and variance analysis to control organizational expenses.' },
    { id: 'accoun-014', name: 'Funds Flow Statement', weight: 3 as const, description: 'Analysis of changes in working capital and preparation of statement of sources and applications of funds.' },
    { id: 'accoun-015', name: 'Cash Flow Statement', weight: 3 as const, description: 'Preparation of cash flow statement using direct and indirect methods.' }
  ]
};