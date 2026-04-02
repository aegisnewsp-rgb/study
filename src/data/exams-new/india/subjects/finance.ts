import type { Subject } from '../types';

const finance: Subject = {
  id: 'finance', name: 'Finance', color: '#6b7280',
  topics: [
    { id: 'financ-001', name: 'Financial Management Basics', weight: 3 as const, description: 'Time value of money, risk-return tradeoff, and financial decision-making for corporate finance.' },
    { id: 'financ-002', name: 'Financial Statements', weight: 3 as const, description: 'Balance sheet, income statement, cash flow analysis, and ratio analysis for company evaluation.' },
    { id: 'financ-003', name: 'Capital Budgeting', weight: 3 as const, description: 'NPV, IRR, payback period, and evaluation of long-term investment projects.' },
    { id: 'financ-004', name: 'Working Capital Management', weight: 3 as const, description: 'Inventory, receivables, payables management, and cash conversion cycle optimization.' },
    { id: 'financ-005', name: 'Cost of Capital', weight: 3 as const, description: 'Equity, debt, weighted average cost of capital, and capital structure theories.' },
    { id: 'financ-006', name: 'Dividend Decision', weight: 3 as const, description: 'Dividend payout ratio, stock splits, share buybacks, and relevance theories of dividend.' },
    { id: 'financ-007', name: 'Financial Markets', weight: 3 as const, description: 'Stock markets, bond markets, money markets, and regulatory framework in India.' },
    { id: 'financ-008', name: 'Risk Management', weight: 3 as const, description: 'Foreign exchange risk, interest rate risk, hedging strategies, and derivatives basics.' },
    { id: 'financ-009', name: 'International Finance', weight: 3 as const, description: 'Forex rates, purchasing power parity, international portfolio diversification.' },
    { id: 'financ-010', name: 'Valuation Methods', weight: 3 as const, description: 'DCF, relative valuation, valuation of bonds, shares, and firms for investment decisions.' },
  ]
};

export { finance };