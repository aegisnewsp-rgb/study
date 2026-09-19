export const finance: Subject = {
  id: 'finance', name: 'Finance', color: '#059669',
  topics: [
    { id: 'financ-001', name: 'Financial Markets and Institutions', weight: 5 as const, description: 'Financial System in India: Structure of the Indian financial system — RBI, commercial banks, co-operative banks, NBFCs, payment banks, small finance banks, and their regulatory framework — foundational knowledge for RBI Grade B Finance paper.' },
    { id: 'financ-002', name: 'Bonds and Debentures', weight: 3 as const, description: 'Bond pricing mechanics — current yield, YTM and YTC — price-yield convexity, plus Indian G-Sec and corporate debenture regulation under SEBI and the Companies Act, 2013.' },
    { id: 'financ-003', name: 'RBI and the Banking System', weight: 5 as const, description: 'RBI structure and functions under the RBI Act 1934, monetary policy framework (MPC, repo, CRR, SLR), classification of Indian banks, NPA recognition, and DICGC deposit insurance.' },
    { id: 'financ-004', name: 'Financial Inclusion and Digital Finance', weight: 4 as const, description: 'Financial Mathematics and Accounting: Time value of money, NPV, IRR, ratio analysis, balance sheet interpretation, and basic accounting concepts — quantitative finance for RBI officers.' },
    { id: 'financ-005', name: 'Ratio Analysis', weight: 3 as const, description: 'Liquidity, solvency, activity and profitability ratios, DuPont decomposition of ROE, plus CAMELS-style banking metrics — CRAR, NIM, cost-to-income, and gross/net NPA percentage.' },
    { id: 'financ-006', name: 'Cash Flow Statement', weight: 3 as const, description: 'Cash Flow Statement structure — operating, investing and financing activities — indirect method, free cash flow, cash conversion ratio, and DSCR for credit-risk assessment.' },
    { id: 'financ-007', name: 'Time Value of Money (TVM)', weight: 3 as const, description: 'Compounding and discounting, ordinary vs annuity-due, NPV and IRR decision rules, perpetuity and growing perpetuity, plus EMI loan amortisation for project appraisal.' },
    { id: 'financ-008', name: 'Capital Budgeting', weight: 3 as const, description: 'Government Finance and Budget: Union budget components, fiscal deficit, revenue deficit, GST council, tax revenue, and implications of government borrowing for monetary policy — macro-finance intersection.' },
    { id: 'financ-009', name: 'Risk-Return Tradeoff', weight: 4 as const, description: 'Systematic vs unsystematic risk, beta measurement, CAPM and the Security Market Line, plus portfolio diversification, correlation effects, and the Sharpe ratio.' },
    { id: 'financ-010', name: 'Working Capital (WC)', weight: 3 as const, description: 'Gross vs net working capital, Cash Conversion Cycle, EOQ inventory model, matching/conservative/aggressive financing strategies, and Tandon-Chore RBI assessment norms.' }
  ]
};
