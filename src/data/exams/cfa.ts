import type { Subject, RoadmapTemplate, RescueTemplate, ExamTemplate } from './types';

import { makeRoadmap } from './_lib/roadmap';

// CFA Program — Chartered Financial Analyst certification administered by CFA
// Institute. Real, weighted subjects mapped to the 10 topic areas that span
// the three CFA Program exam levels (Level I, II, III).

const ethics: Subject = {
  id: 'ethics',
  name: 'Ethical & Professional Standards',
  color: '#0ea5e9',
  topics: [
    { id: 'et-001', name: 'Code of Ethics & Standards of Professional Conduct', weight: 5, description: 'All seven CFA Standards and their application.' },
    { id: 'et-002', name: 'Global Investment Performance Standards (GIPS)', weight: 4, description: 'Firm-wide compliance, composites, presentation.' },
    { id: 'et-003', name: 'Ethical Practices & Compliance', weight: 5, description: 'Trade allocation, soft dollars, referral fees.' },
    { id: 'et-004', name: 'Cases in Ethics', weight: 5, description: 'Applying standards to realistic scenario vignettes.' },
  ],
};

const quantitative: Subject = {
  id: 'quantitative',
  name: 'Quantitative Methods',
  color: '#8b5cf6',
  topics: [
    { id: 'qm-001', name: 'Time Value of Money', weight: 5, description: 'Discounting, compounding, annuity mathematics.' },
    { id: 'qm-002', name: 'Probability & Distributions', weight: 5, description: 'Normal, lognormal, binomial, expected value.' },
    { id: 'qm-003', name: 'Hypothesis Testing', weight: 5, description: 't-tests, ANOVA, chi-square, Type I/II errors.' },
    { id: 'qm-004', name: 'Correlation & Regression', weight: 4, description: 'OLS assumptions, R-squared, model diagnostics.' },
    { id: 'qm-005', name: 'Time-Series Analysis', weight: 4, description: 'Autocorrelation, ARIMA, stationarity.' },
    { id: 'qm-006', name: 'Discounted Cash Flow Applications', weight: 4, description: 'NPV, IRR, MIRR, project evaluation.' },
    { id: 'qm-007', name: 'Simulation & Monte Carlo', weight: 3, description: 'Random sampling for valuation and risk.' },
  ],
};

const economics: Subject = {
  id: 'economics',
  name: 'Economics',
  color: '#10b981',
  topics: [
    { id: 'ec-001', name: 'Supply & Demand', weight: 5, description: 'Market equilibrium, elasticity, surpluses.' },
    { id: 'ec-002', name: 'Monetary & Fiscal Policy', weight: 5, description: 'Central bank tools, government spending, multipliers.' },
    { id: 'ec-003', name: 'International Trade & FX', weight: 5, description: 'Comparative advantage, balance of payments, exchange rates.' },
    { id: 'ec-004', name: 'Currency Exchange Rates', weight: 4, description: 'Spot, forward, interest rate parity, carry trade.' },
    { id: 'ec-005', name: 'Economic Growth & Business Cycles', weight: 4, description: 'GDP, inflation, unemployment, cycles.' },
    { id: 'ec-006', name: 'Market Structure & Regulation', weight: 3, description: 'Perfect competition, monopoly, oligopoly, antitrust.' },
  ],
};

const fsa: Subject = {
  id: 'fsa',
  name: 'Financial Statement Analysis',
  color: '#f59e0b',
  topics: [
    { id: 'fs-001', name: 'Income Statements & Balance Sheets', weight: 5, description: 'Recognition, measurement, presentation.' },
    { id: 'fs-002', name: 'Cash Flow Statements', weight: 5, description: 'Operating, investing, financing activities.' },
    { id: 'fs-003', name: 'Financial Ratios & DuPont', weight: 5, description: 'Profitability, liquidity, leverage, efficiency.' },
    { id: 'fs-004', name: 'Inventory & Long-Lived Assets', weight: 4, description: 'FIFO/LIFO, depreciation, impairment.' },
    { id: 'fs-005', name: 'Revenue Recognition', weight: 4, description: 'IFRS 15 / ASC 606, contract-based revenue.' },
    { id: 'fs-006', name: 'Income Taxes & Non-Current Liabilities', weight: 3, description: 'Deferred tax, leases, bonds.' },
    { id: 'fs-007', name: 'Financial Reporting Quality', weight: 4, description: 'Earnings management, red flags, accruals.' },
  ],
};

const corporate: Subject = {
  id: 'corporate',
  name: 'Corporate Issuers',
  color: '#ec4899',
  topics: [
    { id: 'ci-001', name: 'Corporate Governance', weight: 5, description: 'Board structure, ESG, stakeholder vs shareholder.' },
    { id: 'ci-002', name: 'Capital Budgeting', weight: 5, description: 'NPV, IRR, real options, scenario analysis.' },
    { id: 'ci-003', name: 'Cost of Capital', weight: 5, description: 'WACC, CAPM, beta estimation, leverage.' },
    { id: 'ci-004', name: 'Capital Structure', weight: 4, description: 'Debt vs equity, MM theorems, pecking order.' },
    { id: 'ci-005', name: 'Dividends & Share Repurchases', weight: 4, description: 'Payout policy, stock splits, signal effects.' },
    { id: 'ci-006', name: 'Working Capital & Liquidity', weight: 4, description: 'Cash conversion cycle, current ratio.' },
  ],
};

const equity: Subject = {
  id: 'equity',
  name: 'Equity Investments',
  color: '#06b6d4',
  topics: [
    { id: 'eq-001', name: 'Equity Valuation Models', weight: 5, description: 'DDM, FCFE, residual income, market multiples.' },
    { id: 'eq-002', name: 'Industry & Competitive Analysis', weight: 5, description: 'Porter five forces, lifecycle, barriers.' },
    { id: 'eq-003', name: 'Return Concepts & Portfolio Evaluation', weight: 4, description: 'Holding period return, TWR, MWR.' },
    { id: 'eq-004', name: 'Market Indices & Benchmarks', weight: 4, description: 'Price-weighted vs cap-weighted, rebalancing.' },
    { id: 'eq-005', name: 'Efficient Market Hypothesis', weight: 3, description: 'Strong/semi/weak forms, behavioural critique.' },
  ],
};

const fixed_income: Subject = {
  id: 'fixed-income',
  name: 'Fixed Income',
  color: '#84cc16',
  topics: [
    { id: 'fi-001', name: 'Bond Pricing & YTM', weight: 5, description: 'Spot rates, yield-to-maturity, pricing between coupons.' },
    { id: 'fi-002', name: 'Duration & Convexity', weight: 5, description: 'Effective vs modified duration, convexity adjustment.' },
    { id: 'fi-003', name: 'Term Structure of Interest Rates', weight: 5, description: 'Spot, forward, par yield curves.' },
    { id: 'fi-004', name: 'Credit Analysis', weight: 5, description: 'Spread, ratings, recovery, default risk.' },
    { id: 'fi-005', name: 'Structured Products', weight: 4, description: 'MBS, ABS, CDO, tranching, prepayment.' },
    { id: 'fi-006', name: 'Interest Rate Risk Management', weight: 4, description: 'Hedging with futures, swaps, caps, floors.' },
  ],
};

const derivatives: Subject = {
  id: 'derivatives',
  name: 'Derivatives',
  color: '#f97316',
  topics: [
    { id: 'dv-001', name: 'Forward & Futures Pricing', weight: 5, description: 'Cost-of-carry, no-arbitrage pricing.' },
    { id: 'dv-002', name: 'Option Pricing', weight: 5, description: 'Binomial, Black-Scholes-Merton, Greeks.' },
    { id: 'dv-003', name: 'Swap Valuation & Use', weight: 5, description: 'Interest rate swaps, currency swaps, hedging.' },
    { id: 'dv-004', name: 'Option Strategies', weight: 4, description: 'Spreads, collars, straddles, risk profiles.' },
    { id: 'dv-005', name: 'Hedging Strategies', weight: 4, description: 'Delta, gamma, vega hedging in practice.' },
    { id: 'dv-006', name: 'Credit Derivatives', weight: 3, description: 'CDS, CDX, tranching of credit risk.' },
  ],
};

const alts: Subject = {
  id: 'alts',
  name: 'Alternative Investments',
  color: '#a855f7',
  topics: [
    { id: 'ai-001', name: 'Private Equity & Venture Capital', weight: 5, description: 'Buyouts, growth equity, VC stages, J-curve.' },
    { id: 'ai-002', name: 'Real Estate', weight: 5, description: 'Direct property, REITs, NOI, cap rates.' },
    { id: 'ai-003', name: 'Hedge Funds', weight: 5, description: 'Long/short, global macro, event-driven, fees.' },
    { id: 'ai-004', name: 'Commodities', weight: 4, description: 'Roll yield, contango, backwardation.' },
    { id: 'ai-005', name: 'Infrastructure & Natural Resources', weight: 3, description: 'Long-duration, regulated returns, project finance.' },
  ],
};

const portfolio: Subject = {
  id: 'portfolio',
  name: 'Portfolio Management',
  color: '#6366f1',
  topics: [
    { id: 'pm-001', name: 'Mean-Variance Portfolio Theory', weight: 5, description: 'Efficient frontier, CAL, CML, two-fund separation.' },
    { id: 'pm-002', name: 'CAPM & Multifactor Models', weight: 5, description: 'Fama-French, APT, risk premia.' },
    { id: 'pm-003', name: 'Risk Management', weight: 4, description: 'VaR, CVaR, stress testing, drawdown.' },
    { id: 'pm-004', name: 'Performance Evaluation', weight: 4, description: 'Sharpe, Treynor, Information ratio, attribution.' },
    { id: 'pm-005', name: 'Asset Allocation', weight: 4, description: 'Strategic vs tactical, IPS-based, rebalancing.' },
    { id: 'pm-006', name: 'Behavioral Finance', weight: 3, description: 'Prospect theory, biases, market anomalies.' },
  ],
};

const subjects = [ethics, quantitative, economics, fsa, corporate, equity, fixed_income, derivatives, alts, portfolio];

const DURATIONS = ['1h','2h','3h','5h','12h','1d','2d','3d','5d','7d','10d','2w','1mo','2mo','3mo','6mo','1yr','2yr'];
const DUR_MAP: Record<string, {days: number; desc: string}> = {
  '1h':  { days: 1,   desc: '60-minute exam-eve triage: Ethics Standards of Professional Conduct and Ethics cases, Time Value of Money quick drill.' },
  '2h':  { days: 1,   desc: 'Two-hour priority pass — top 6 topics by weight, one quick recall set per topic.' },
  '3h':  { days: 1,   desc: 'Three-hour focus block — 9 highest-yield CFA topic areas, formula sheet review.' },
  '5h':  { days: 1,   desc: 'Five-hour intensive — 12 top-weight topics across Ethics, Quant, FSA, Equity, FI, with formula drills.' },
  '12h': { days: 1,   desc: 'Half-day crash — ~30% of the weighted syllabus, 20 min/topic across all 10 topic areas.' },
  '1d':  { days: 1,   desc: 'One-day intensive — top 20% by weight, 25 min/topic, single-pass with quick recall questions.' },
  '2d':  { days: 2,   desc: 'Two-day rapid revision — 30% coverage, weight-sorted, balanced across all 10 topic areas.' },
  '3d':  { days: 3,   desc: 'Three-day plan — 40% syllabus, 30-40 min/topic, brief recap each evening.' },
  '5d':  { days: 5,   desc: 'Five-day plan — 55% coverage of weighted topics, ~3 hours/day, one mini mock on day 5.' },
  '7d':  { days: 7,   desc: 'One-week plan — 70% coverage, 3-4 hours/day, two practice sessions over the week.' },
  '10d': { days: 10,  desc: 'Ten-day plan — 85% coverage, ~3 hours/day, daily revision of prior topic, two practice mocks.' },
  '2w':  { days: 14,  desc: 'Two-week plan — full syllabus, ~3 hours/day, last 2 days for full mock + Ethics case review.' },
  '1mo': { days: 30,  desc: 'One-month plan — full syllabus at ~2-3 topics/day, weekly mini mocks, final week revision sprint.' },
  '2mo': { days: 60,  desc: 'Two-month plan — full syllabus + topic-wise practice, alternate-week mocks, weak-topic sessions.' },
  '3mo': { days: 90,  desc: 'Three-month plan — first month content, second month practice + mocks, third month revision + mock cycles.' },
  '6mo': { days: 180, desc: 'Six-month plan — foundation phase (8 weeks) + advanced phase (10 weeks) + revision phase (6 weeks).' },
  '1yr': { days: 365, desc: 'One-year plan — full curriculum twice (concept pass + advanced pass), monthly mocks, ~2 hours/day baseline. Suitable for one CFA Level.' },
  '2yr': { days: 730, desc: 'Two-year plan — CFA Level I (Year 1) + CFA Level II (Year 2) progression; ~2 hours/day.' },
};
const durations: Record<string, RoadmapTemplate> = {};
for (const d of DURATIONS) { durations[d] = makeRoadmap(subjects, d, DUR_MAP[d].days, DUR_MAP[d].desc); }

const rescueMode: RescueTemplate = {
  name: 'Last Minute Rescue',
  description: 'High-impact 48-hour sprint on the highest-yield CFA topic areas most likely to appear on exam day.',
  duration: '2d',
  focusAreas: [
    { subject: 'Ethical & Professional Standards', topics: ['Code of Ethics & Standards of Professional Conduct', 'Cases in Ethics', 'Ethical Practices & Compliance'] },
    { subject: 'Quantitative Methods', topics: ['Time Value of Money', 'Hypothesis Testing', 'Probability & Distributions'] },
    { subject: 'Financial Statement Analysis', topics: ['Financial Ratios & DuPont', 'Income Statements & Balance Sheets', 'Cash Flow Statements'] },
    { subject: 'Fixed Income', topics: ['Duration & Convexity', 'Bond Pricing & YTM', 'Term Structure of Interest Rates'] },
  ],
  strategy: 'Prioritise Ethics — it is tested on every CFA exam, weighted ~15-20%, and is the section most candidates over-rely on with engineering; ETL is the discipline; just apply the Standards carefully. Drill Ethics cases with the Codebook open. Review formulas for TVM, Duration/Convexity, and CAPM/WACC.',
};

const exam: ExamTemplate = {
  examId: 'cfa',
  examName: 'CFA Program',
  country: 'india',
  description: 'The Chartered Financial Analyst (CFA) Program is a professional certification administered by CFA Institute for investment and financial professionals. The three-level curriculum covers ethics, quantitative methods, economics, financial statement analysis, corporate issuers, equity, fixed income, derivatives, alternative investments, and portfolio management. Widely considered the gold-standard credential for portfolio managers, research analysts, and risk professionals.',
  examPattern: 'Three sequential exam levels (Level I, II, III), each offered twice a year (May and November; Level III only in February for some windows). Level I: 180 multiple-choice questions, two 2-hour 15-minute sessions, computer-based at Prometric centres. Level II: 88 vignette-based multiple-choice items across 22 item sets. Level III: constructed-response (essay) plus item-set multiple choice. All levels pass/fail; historical pass rates are 35-45% for Levels I and II, 50-60% for Level III.',
  eligibility: 'Enrol in the CFA Program via CFA Institute, hold a bachelor\'s degree (or be in the final year), or have 4,000 hours of qualifying work experience accumulated before exam day. Pass Level I before sitting Level II; pass Level II before sitting Level III. Work experience requirement: 4,000 hours over a minimum of 36 months in roles that involve investment decision-making. Professional conduct reference required; violations of the Code of Ethics can revoke candidacy.',
  subjects,
  durations,
  rescueMode,
  prepOverview:
    'CFA Program preparation works best in three phases: (1) map the 10 topic areas from the current CFA Institute curriculum and identify the heaviest-weighted topics in each, (2) finish high-weight topics with end-of-chapter questions, CFA Institute mock exams, and an error log, (3) sit full-length mock exams matching the official seat-time and item format. Use StudyRoadmap free roadmaps and topic notes for day-level sequencing. Always re-check exam windows, fees, eligibility and curriculum on https://www.cfainstitute.org/ for the current cycle — the curriculum is revised annually and exam windows shift by region.',
  commonMistakes: [
    'Using outdated CFA curriculum PDFs instead of the current year\'s Learning Outcome Statements (LOS) from CFA Institute.',
    'Skipping Ethics — it is tested on every CFA exam and weighted heavily across all three levels.',
    'Practising only multiple-choice and ignoring Level II vignette format or Level III constructed-response format.',
    'No written error log — repeating the same formula and concept mistakes across mocks.',
    'Treating unofficial "CFA pass predictor" scores as guarantees. Only the official pass/fail result is reported.'
  ],
  lastUpdated: '2026-09-17',
  officialSource: 'https://www.cfainstitute.org/',
};
export default exam;
