export const audit: Subject = {
  id: 'audit', name: 'Auditing', color: '#6b7280',
  topics: [
    { id: 'audit-001', name: 'Auditing Concepts and Principles', weight: 3 as const, description: 'Fundamental auditing concepts, generally accepted auditing standards, ethics, and professional responsibilities of auditors.' },
    { id: 'audit-002', name: 'Audit Planning and Program', weight: 3 as const, description: 'Audit planning process, risk assessment, materiality determination, and development of audit program.' },
    { id: 'audit-003', name: 'Audit Evidence Collection', weight: 3 as const, description: 'Techniques for gathering sufficient appropriate audit evidence including inspection, observation, inquiry, and confirmation.' },
    { id: 'audit-004', name: 'Internal Control Evaluation', weight: 3 as const, description: 'Evaluation of internal control systems, understanding control environment, and testing controls for effectiveness.' },
    { id: 'audit-005', name: 'Auditing Cash and Bank Balances', weight: 3 as const, description: 'Verification of cash in hand, bank balances, bank reconciliations, and cutoff procedures.' },
    { id: 'audit-006', name: 'Auditing Receivables and Inventories', weight: 3 as const, description: 'Verification of trade debtors, sundry debtors, stock observation, and inventory valuation methods.' },
    { id: 'audit-007', name: 'Auditing Fixed Assets', weight: 3 as const, description: 'Verification of owned and leased fixed assets, depreciation verification, and impairment assessment.' },
    { id: 'audit-008', name: 'Audit Reports and Opinions', weight: 3 as const, description: 'Types of audit reports: unqualified, qualified, adverse, disclaimer; components of audit opinion.' }
  ]
};