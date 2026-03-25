---
exam: rbi-grad-b
examName: RBI Grade B
subject: finance-management
subjectName: Finance & Management
topic: rbi-fin-008
topicName: "Communication & Control — Deep Dive"
tier: deep
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "Complex multi-layered architecture diagram: Foundation shows RBI's PCA trigger thresholds with specific numbers. Above that, a three-tier control pyramid: Operational Controls (bottom, largest), Management Controls (middle), Strategic Controls (top). Side panels show Balanced Scorecard perspectives with Indian bank-specific KPIs. Bottom section shows audit types: Concurrent Audit (real-time), Internal Audit (periodic), Statutory Audit (annual), with their scope and timing differences."
country: India
generated: ai-v1
---



## Communication & Control — Deep Dive

### Concept Deep Dive

**Management Control Theory — The Foundation:**

Management control systems have evolved through distinct phases. In the early 20th century, control meant financial control — budgets, cost accounting, and ROI calculations. Robert Anthony's framework (1965) organized control into three levels: Strategic Planning (long-term, top management), Management Control (middle management, resource allocation), and Operational Control (frontline, task-level). This three-level hierarchy remains foundational.

The modern view, articulated by merchant scholars like Merchant and Simons, recognizes that control systems must address three distinct problems:
1. **Results control**: Measure outcomes and compare to targets (budgets, KPIs, ROI)
2. **行为控制 (Action/Behavior control)**: Ensure people follow correct procedures (SOPs, policies, authorization limits)
3. **Personnel control**: Hire and retain competent people who self-control (selection, training, culture)

In a central bank, all three operate simultaneously: RBI's Annual Report and financial statements address results control; its circulars and guidelines address behavior control; its recruitment examination and training programs (like the Bankers' Training College in Mumbai) address personnel control.

**ROI vs RI vs EVA — The Complete Picture:**

Let's be precise about the mathematics and limitations of each metric:

**ROI (Return on Investment):**
Advantages: Simple, intuitive, comparable across divisions, aligns with accounting profit
Disadvantages: Encourages rejecting projects below division's current ROI (even if above cost of capital), ignores size effects, ignores risk differences

*Example of the rejection problem:* Division A has ROI of 40%, Division B has 15%. A new project promises 20% return and costs ₹10 crore. Division A manager rejects it (20% < 40%, hurts division ROI), Division B manager accepts it (20% > 15%, helps division ROI). But if cost of capital is 12%, both should accept — Division A's rejection destroys value.

**RI (Residual Income):**
Advantages: Better than ROI because it uses cost of capital, absolute measure allows comparison across divisions of different sizes, encourages managers to invest whenever RI is positive
Disadvantages: Doesn't account for capital structure differences, doesn't compare performance to market benchmarks

**EVA (Economic Value Added) — The Gold Standard:**
EVA was developed by Stern Stewart & Co. in the 1990s and is trademarked. The formula:
**EVA = Invested Capital × (ROIC − WACC)**
Where ROIC = NOPAT / Invested Capital

This elegant formulation shows: value is created only when ROIC exceeds WACC. The spread (ROIC − WACC) is the "economic profit" margin on capital.

For Indian companies using EVA:
- Infosys has historically reported strong positive EVA due to high ROIC
- PSU banks often have negative or low EVA because their ROIC is depressed by high NPAs and government-directed lending at below-market rates
- HDFC Bank maintains strong EVA through high NIM and controlled credit costs

**Budget Variance Analysis:**

Budget variance analysis is the most widely used operational control tool. The formula:
**Total Variance = Budgeted Amount − Actual Amount**
- **Favorable variance**: Actual < Budgeted for revenues (good) or Actual > Budgeted for costs (good)
- **Unfavorable variance**: The opposite

Variance is decomposed into:
- **Price variance**: The difference caused by paying more or less than expected per unit
- **Quantity variance**: The difference caused by using more or less than expected

*Example for a bank:* If branch budgeted ₹10 crore in interest income but achieved ₹9 crore:
- Price variance: If interest rate earned was 10 bps below expectation → negative price variance
- Volume variance: If loan portfolio was smaller than expected → negative volume variance

Management by Exception: managers should investigate unfavorable variances above a materiality threshold (commonly 5-10% of budget) and focus attention there.

**The Balanced Scorecard — Advanced Application:**

Kaplan and Norton published their landmark paper in Harvard Business Review in 1992 after studying companies at Analog Devices and Apple. Their insight was fundamentally behavioral: "what gets measured gets managed." The problem with pure financial measurement is that financial outcomes are *lagging indicators* — by the time profits fall, the damage is done. Non-financial measures (customer satisfaction, process quality, learning) are *leading indicators* that predict future financial performance.

The **cause-and-effect chain** in a bank's balanced scorecard:

Learning & Growth → Internal Process → Customer → Financial

- If we invest in training (Learning), staff process loans faster and more accurately (Internal Process)
- Faster processing → happier customers → better NPS (Customer)
- Happier customers → more referrals → lower acquisition cost → better ROE (Financial)

For Indian banks, specific KPIs by perspective:

| Perspective | Private Bank Example (HDFC) | PSU Bank Example (SBI) |
|-------------|----------------------------|------------------------|
| Financial | ROE > 18%, NIM > 3.5% | ROE > 12%, NIM > 2.8% |
| Customer | NPS > 50, CASA ratio > 40% | NPS > 30, CASA ratio > 45% |
| Internal | Avg loan processing: 5 days | Avg loan processing: 15 days |
| Learning | 40 training hours/officer/year | 25 training hours/officer/year |

### Advanced Analysis — RBI's PCA Framework Deep Dive

RBI's Prompt Corrective Action framework is the most consequential control system in Indian banking. The revised PCA framework (effective April 2022) made the triggers more stringent and introduced new parameters.

**PCA Trigger Thresholds for Scheduled Commercial Banks:**

| Parameter | Normal → Susceptible | Susceptible → Serious | Serious → Critical |
|-----------|---------------------|----------------------|-------------------|
| CRAR | < 10.25% but ≥ 9% | < 9% but ≥ 6% | < 6% |
| Leverage Ratio | < 3% but ≥ 2.5% | < 2.5% but ≥ 1.5% | < 1.5% |
| Net NPA % | < 6% but ≥ 3% | < 3% but ≥ 2% | < 2% |
| Liquidity Ratio | < 100% but ≥ 70% | < 70% | — |

When triggered, the **interventions escalate**:
- **Susceptible:** Restriction on dividend declaration, higher provisions, supervisory action plan
- **Serious:** Restriction on branch expansion,强制 recapitalization,强制 merger or acquisition
- **Critical:** RBI may approach the central government for resolution — merger with stronger bank, reconstruction, or winding up

The 2020 YES Bank crisis and the 2018-19 IL&FS default tested India's financial control framework severely. The PCA framework's ability to catch deterioration early is crucial for financial stability — but critics note that PCA was already triggered on IL&FS at an early stage, yet the group's liquidity crisis still cascaded through the system.

### RBI-Specific Coverage

**Internal Audit vs Concurrent Audit:**

These are often confused but operate differently:

| Dimension | Concurrent Audit | Internal Audit |
|-----------|-----------------|----------------|
| Timing | Real-time, simultaneous with transactions | Periodic, retrospective |
| Scope | Focused on high-risk areas (cash, advances, compliance) | Comprehensive, covers all areas |
| Authority | Reports to Branch Manager and Audit Department | Reports directly to Audit Committee/Board |
|频率 | Continuous | Quarterly or half-yearly |
| RBI Mandate | Required for banks with >200 branches | Required for all banks |

RBI's Internal Audit Department (IAD) conducts comprehensive audits of RBI's own offices — including regional offices and the Nagpur and Coin Depositories. The rigors of this internal control is essential for RBI to maintain its credibility as a banking regulator.

### Case Study / Application

**The IL&FS Crisis (2018):** Infrastructure Leasing & Finance Financial Services (IL&FS), a systemically important NBFC, defaulted on debt payments in September 2018. The crisis exposed how India's financial control framework failed to catch early warning signs:
- IL&FS had been borrowing heavily at short-term rates while investing in long-term infrastructure — a classic asset-liability mismatch
- Ratings agencies continued giving IL&FS AAA ratings until shortly before default
- RBI's NBFC supervision was less rigorous than bank supervision
- The Ministry of Finance had significant shareholding and political oversight, yet no one intervened early

**Post-IL&FS reforms:**
- RBI strengthened NBFC supervision, bringing larger NBFCs under more bank-like regulation
- Scale-based regulation (SBR) framework for NBFCs (2022) created a tiered regulatory structure based on asset size
- RBI introduced the Short-Term Co-operative Bank Control framework improvements
- The "Large Value Fraud" reporting framework was strengthened

This case illustrates why management control systems and regulatory oversight matter at a systemic level — not just within individual organizations.

### GATE-level Numerical
**Q:** Bank of India's credit division reports the following data for FY 2024-25:
- Net Operating Profit After Tax (NOPAT): ₹4,500 crore
- Total Capital Employed: ₹25,000 crore
- Cost of Debt (pre-tax): 8%
- Cost of Equity: 15%
- Debt/Equity ratio: 60:40
- Tax rate: 30%

(a) Calculate the Weighted Average Cost of Capital (WACC)
(b) Calculate Economic Value Added (EVA)
(c) Calculate the EVA spread and comment on whether the division is creating or destroying value

**Answer:**

**(a) WACC Calculation:**

Cost of Equity (Ke) = 15%
Cost of Debt (Kd) = 8% × (1 − Tax Rate) = 8% × (1 − 0.30) = **5.6%** (after-tax)

Weights:
Debt proportion = 60% = 0.60
Equity proportion = 40% = 0.40

WACC = (Ke × E/V) + (Kd × D/V)
WACC = (15% × 0.40) + (5.6% × 0.60)
WACC = 6.0% + 3.36%
WACC = **9.36%**

**(b) EVA Calculation:**

EVA = NOPAT − (WACC × Capital Employed)
EVA = ₹4,500 − (9.36% × ₹25,000)
EVA = ₹4,500 − ₹2,340
EVA = **₹2,160 crore**

**(c) EVA Spread:**

Return on Invested Capital (ROIC) = NOPAT / Capital Employed
ROIC = ₹4,500 / ₹25,000 = **18%**

EVA Spread = ROIC − WACC = 18% − 9.36% = **8.64%**

**Comment:** The division has positive EVA of ₹2,160 crore, indicating it is **creating value** for shareholders. The ROIC of 18% significantly exceeds the cost of capital of 9.36%, generating an 8.64% spread — ₹8.64 of value created per ₹100 of capital employed. This represents excellent capital efficiency for a PSU bank.

### Multiple Perspectives
- **Academic View:** Contemporary control theory emphasizes "controls that people believe in" (Simons' Levers of Control framework) rather than purely financial control. Kaplan and Norton's successors push for "strategy maps" that make cause-and-effect relationships explicit before measuring.
- **RBI/Regulatory View:** RBI's PCA framework represents the apex of regulatory control systems — a framework where the regulator controls the regulated, not the internal management of banks. The challenge: too strict and you impede bank growth; too lenient and you get IL&FS-type crises.
- **Practical/Industry View:** Indian private sector banks have adopted sophisticated treasury and risk management controls far beyond PCA minimums — HDFC Bank and ICICI Bank use real-time treasury risk dashboards, stress testing, and dynamic hedging, going well beyond what RBI mandates.

### Recent Developments (2024-2026)
- RBI's revised PCA framework (effective April 2022) is being actively implemented — two banks (including a mid-sized PSU) were placed under PCA restrictions in 2024
- SEBI mandated that all listed companies disclose EVA metrics in their annual reports from FY 2025 onwards, formalizing Kapoor and Kaplan's push for economic value metrics
- RBI's "Risk-Based Internal Audit (RBIA)" framework, updated in 2023-24, requires banks to prioritize audit resources based on risk levels rather than evenly distributing audit effort across all branches
- The introduction of "scale-based regulation" for fintech/NBFC convergence in 2024 blurred the line between banking and non-banking financial controls
- RBI introduced an "Early Warning System (EWS)" dashboard in 2024 that uses real-time data to flag emerging vulnerabilities in banks before they breach PCA thresholds — a proactive rather than reactive control mechanism
