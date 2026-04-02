import type { Subject } from '../types';

const taxation: Subject = {
  id: 'taxation', name: 'Taxation', color: '#6b7280',
  topics: [
    { id: 'taxati-001', name: 'Income Tax Basics', weight: 3 as const, description: 'Concepts of income, agricultural income, previous year, assessment year, and residential status for tax liability.' },
    { id: 'taxati-002', name: 'Heads of Income', weight: 3 as const, description: 'Salaries, house property, business/profession, capital gains, and other sources — computation and deductions.' },
    { id: 'taxati-003', name: 'Deductions and Exemptions', weight: 3 as const, description: 'Section 80C to 80U deductions, exemptions under Section 10, and rebate calculations.' },
    { id: 'taxati-004', name: 'Capital Gains', weight: 3 as const, description: 'Short-term and long-term capital assets, indexation, and computation of capital gains tax.' },
    { id: 'taxati-005', name: 'Set Off and Carry Forward', weight: 3 as const, description: 'Intra-head and inter-head set off, carry forward of losses, and conditions for set off.' },
    { id: 'taxati-006', name: 'Tax Audit and Return Filing', weight: 3 as const, description: 'Tax audit requirements, ITR forms, TDS, advance tax, and e-filing procedures.' },
    { id: 'taxati-007', name: 'GST Overview', weight: 3 as const, description: 'GST structure, CGST/SGST/IGST, exemptions, input tax credit, and GST registration for CS and CMA.' },
    { id: 'taxati-008', name: 'GST Procedures and Returns', weight: 3 as const, description: 'GSTR filing, reverse charge mechanism, e-way bills, and GST compliance for businesses.' },
  ]
};

export { taxation };
