export const accounting: Subject = {
  id: 'accounting', name: 'Accounting', color: '#0891b2',
  topics: [
    { id: 'accoun-001', name: 'Introduction to Financial Accounting', weight: 2 as const, description: 'Origin, nature and purpose of accounting; users of accounting information; branches of accounting (financial, cost, management, public sector).' },
    { id: 'accoun-002', name: 'Accounting Equation and Double Entry Principles', weight: 4 as const, description: 'The accounting equation Assets = Liabilities + Capital; rules of debit and credit; double-entry posting and the trial balance derivation.' },
    { id: 'accoun-003', name: 'Accounting Concepts', weight: 3 as const, description: 'Going concern, accruals, prudence, consistency, materiality, business entity, historical cost and money measurement, with practical illustrations.' },
    { id: 'accoun-004', name: 'Final Accounts of a Sole Trader', weight: 5 as const, description: 'Trading account, profit and loss account and balance sheet from ledger balances, including adjustments for closing stock, depreciation, accruals and prepayments.' },
    { id: 'accoun-005', name: 'Provisions and Reserves', weight: 3 as const, description: 'Distinction between provisions and reserves; creation, treatment and disclosure in final accounts; specific reserves versus general reserves.' },
    { id: 'accoun-006', name: 'Manufacturing Accounts', weight: 4 as const, description: 'Cost of raw materials, labour and factory overheads; prime cost and total production cost; transfer to trading account of the manufacturer.' },
    { id: 'accoun-007', name: 'Control Accounts and Self-Balancing Ledgers', weight: 4 as const, description: 'Sales, purchases, returns and creditors control accounts; reconciliation with subsidiary ledgers and detection of posting errors.' },
    { id: 'accoun-008', name: 'Single Entry and Incomplete Records', weight: 4 as const, description: 'Conversion to double entry; statement of affairs to determine opening and closing capital; determination of missing figures and profit.' },
    { id: 'accoun-009', name: 'Partnership Accounts', weight: 5 as const, description: 'Formation, profit and loss appropriation account, partners current and capital accounts, change in profit-sharing ratio, admission and dissolution.' },
    { id: 'accoun-010', name: 'Company Accounts', weight: 5 as const, description: 'Issue of shares and debentures, reserves, final accounts of limited liability companies and interpretation of published financial statements.' }
  ]
};
