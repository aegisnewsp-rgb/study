import type { Subject } from '../types';

const company_law: Subject = {
  id: 'company-law', name: 'Company Law', color: '#6b7280',
  topics: [
    { id: 'compan-001', name: 'Companies Act 2013', weight: 3 as const, description: 'Types of companies, incorporation, memorandum and articles of association, and company promoter responsibilities.' },
    { id: 'compan-002', name: 'Share Capital', weight: 3 as const, description: 'Issue, forfeiture, and reissue of shares; ESOPs; and alteration of share capital provisions.' },
    { id: 'compan-003', name: 'Debentures and Deposits', weight: 3 as const, description: 'Issue of debentures, charges, deposits, and borrowing powers of a company.' },
    { id: 'compan-004', name: 'Directors', weight: 3 as const, description: 'Appointment, powers, duties, and liabilities of directors including independent directors.' },
    { id: 'compan-005', name: 'Company Meetings', weight: 3 as const, description: 'Types of meetings, quorum, voting, resolutions (ordinary, special), and minutes for CS exams.' },
    { id: 'compan-006', name: 'Winding Up', weight: 3 as const, description: 'Modes of winding up, NCLT provisions, liquidator appointment, and dissolution of company.' },
    { id: 'compan-007', name: 'Corporate Governance', weight: 3 as const, description: 'SEBI LODR, corporate social responsibility, related party transactions, and compliance requirements.' },
    { id: 'compan-008', name: 'Corporate Secretarial Practice', weight: 3 as const, description: 'ROC filings, annual returns, XBRL, and secretarial compliance under Companies Act.' },
    { id: 'compan-009', name: 'Mergers and Acquisitions', weight: 3 as const, description: 'Schemes of merger, amalgamation, reconstruction, and NCLT approval process.' },
    { id: 'compan-010', name: 'Insolvency and Bankruptcy Code', weight: 3 as const, description: 'IBC 2016, insolvency resolution, bankruptcy, and Adjudicating Authority provisions.' },
  ]
};

export { company_law };
