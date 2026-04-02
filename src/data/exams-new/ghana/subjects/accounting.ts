const accounting: Subject = {
  id: 'accounting', name: 'None', color: '#0891b2',
  topics: [
    { id: 'accoun-001', name: 'Accounting Principles', weight: 3 as const, description: 'Fundamental concepts including going concern, consistency, matching concept, and the double-entry system essential for WASSCE accounting.' },
    { id: 'accoun-002', name: 'Journal Entries', weight: 3 as const, description: 'Recording transactions in the general journal using debits and credits — the foundation of all accounting records in WASSCE.' },
    { id: 'accoun-003', name: 'Ledger Posting', weight: 3 as const, description: 'Transferring entries from journals to ledgers, balancing accounts, and preparing T-accounts for WASSCE financial statements.' },
    { id: 'accoun-004', name: 'Trial Balance', weight: 3 as const, description: 'Extracting a trial balance to check arithmetical accuracy of ledger accounts — a mandatory step before final accounts.' },
    { id: 'accoun-005', name: 'Depreciation', weight: 3 as const, description: 'Straight-line and reducing balance methods of depreciation — frequently examined under WASSCE for non-current asset accounting.' },
    { id: 'accoun-006', name: 'Final Accounts', weight: 3 as const, description: 'Trading account, profit and loss account, and balance sheet preparation for sole proprietors — core WASSCE accounting topic.' },
    { id: 'accoun-007', name: 'Company Accounts', weight: 3 as const, description: 'Issued share capital, reserves, dividends, and the financial statements of incorporated entities under Ghanaian company law.' },
    { id: 'accoun-008', name: 'Issue of Shares', weight: 3 as const, description: 'Accounting treatment for share issues at par, premium, and discount — tested in WASSCE paper 2 and Legon admission exams.' },
    { id: 'accoun-009', name: 'Debentures', weight: 3 as const, description: 'Issue and redemption of debentures, interest calculations, and distinguishing between shares and debentures as sources of capital.' },
    { id: 'accoun-010', name: 'Cost Accounting Basics', weight: 3 as const, description: 'Prime cost, overheads, cost apportionment, and preparing cost statements — practical skill for Ghanaian business contexts.' },
  ]
};
