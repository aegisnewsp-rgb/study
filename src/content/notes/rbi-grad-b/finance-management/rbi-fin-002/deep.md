---
exam: rbi-grad-b
examName: RBI Grade B
subject: finance-management
subjectName: Finance & Management
topic: rbi-fin-002
topicName: Time Value of Money — Deep Dive
tier: deep
weight: 3
weight_unit: "% of Phase 2 paper"
diagramPrompt: "Draw an advanced financial decision tree: central node labelled 'Capital Budgeting Decision', branching into: (1) NPV branch → accept/reject rule explained; (2) IRR branch → accept/reject rule; (3) PI branch → accept/reject rule. Below, show a conflict scenario where NPV and IRR disagree for mutually exclusive projects, with the NPV supremacy argument summarised."
country: India
generated: ai-v1
---



## Time Value of Money — Deep Dive

### Concept Deep Dive

The Time Value of Money isn't just an academic concept — it's the DNA of modern banking. When RBI announces a repo rate hike, what actually happens? Banks face higher borrowing costs, which means their cost of funds rises. When a corporate treasurer at Tata Motors is deciding whether to raise a ₹1,000 crore loan to build a new EV plant, the first thing she does is NPV analysis — discounting all future cash flows at the new, higher required rate. If the NPV goes negative at the higher rate, the plant doesn't get built. This is monetary policy transmission working in real time.

The mathematical foundation deserves careful treatment. **Simple interest** means you earn returns only on the original principal. **Compound interest** means you earn returns on principal plus accumulated interest. For most financial decisions in India — bank deposits, loans, project evaluation — compounding is the standard. The formula **FV = PV × (1+r)ⁿ** assumes compounding once per period at rate r. If compounding is more frequent (e.g., quarterly), the formula becomes **FV = PV × (1+r/m)^(m×n)** where m is the number of compounding periods per year. As m approaches infinity, we get **continuous compounding**: **FV = PV × e^(r×n)**.

**NPV vs IRR — The Conflict**: In theory, NPV is superior for evaluating mutually exclusive projects (where you can only choose one). Here's why: NPV assumes you reinvest cash flows at the **required rate of return** — a realistic assumption for a well-functioning firm. IRR assumes you reinvest cash flows at the **IRR itself** — which can be unrealistically high or low. Consider two projects:
- Project A: invests ₹100, returns ₹200 in Year 1 (IRR = 100%)
- Project B: invests ₹100, returns ₹60 in Years 1-3 (IRR = ~22%)

A naive IRR comparison says take Project A (100% > 22%). But at a 10% required rate, Project A NPV = ₹81.8 vs Project B NPV = ₹49.2 — Project A is better. NPV wins because it measures absolute value creation.

**The Discount Rate Dilemma**: In practice, choosing the right discount rate is as important as the calculation itself. For a bank's own projects, the discount rate typically reflects:
1. Cost of Debt (interest rate on borrowings, adjusted for tax shield)
2. Cost of Equity (using CAPM: Rf + β×(Rm - Rf))
3. Weighted Average Cost of Capital (WACC) = wD×KD×(1-t) + wE×KE

For RBI's own perspective, the Social Rate of Time Preference (SRTP) — reflecting society's preference for present over future consumption — is theoretically the right discount rate for public projects, though in practice, government projects often use lower discount rates (around 12%) which may not fully reflect opportunity cost.

### Advanced Analysis

**Growing Annuity and Growing Perpetuity** extend the basic formulas to handle scenarios where cash flows grow over time — more realistic for dividend discount models and inflation-linked payments:

**PV of Growing Annuity** (cash flow grows at rate g each period):
$$PV = \frac{P}{(r-g)} \times \left[1 - \left(\frac{1+g}{1+r}\right)^n\right]$$

**PV of Growing Perpetuity** (infinite horizon):
$$PV = \frac{P}{r-g}$$

This is the foundation of the **Gordon Growth Model** for equity valuation:
$$P_0 = \frac{D_0(1+g)}{r_e - g}$$

Where D₀ is the current dividend, g is the growth rate, and r_e is the cost of equity. For a company like Infosys paying a dividend of ₹24 per share growing at 10%, with a cost of equity of 15%, the intrinsic value is ₹24 × 1.10 / (0.15 - 0.10) = ₹528 per share.

**Modified Internal Rate of Return (MIRR)** addresses one of IRR's key weaknesses by assuming reinvestment at the cost of capital rather than at IRR. It also separately accounts for financing costs and project returns. For projects with non-conventional cash flows (multiple sign changes), MIRR gives more reliable signals than IRR.

**Profitability Index (PI)** = PV of future cash inflows / PV of cash outflows. PI of 1.2 means you get ₹1.20 back for every ₹1 invested, making it a useful complement to NPV for ranking projects when capital is rationed.

### RBI-Specific Coverage

For the RBI Grade B exam, understanding TVM is critical for:
1. **Loan pricing**: Banks use IRR-based internal rate of return calculations to price their loan products
2. **Bond valuation**: The price of a bond is the PV of future coupon payments plus the PV of face value
3. **Project evaluation for RBI-supported schemes**: The RBI-administered Priority Sector Lending (PSL) targets effectively evaluate whether lending at sub-market rates creates value or distorts capital allocation
4. **Yield calculations**: The concepts directly apply to calculating yields on T-Bills, CPs, and bonds
5. **ALM (Asset Liability Management)**: Banks use NPV and duration matching to manage interest rate risk — if rates rise, the PV of their fixed-rate loan book falls

### Case Study / Application

**NHAI's Highway Project Evaluation**: The National Highways Authority of India (NHAI) evaluates highway projects using NPV at a discount rate of 12% (real, inflation-adjusted). Consider a ₹1,000 crore highway project:
- Construction cost: ₹1,000 crore (Year 0)
- Toll revenues: ₹200 crore/year for 30 years
- Maintenance cost: ₹20 crore/year

At 12% discount rate, PV of ₹180 crore annuity for 30 years = ₹180 × 8.055 = ₹1,450 crore. NPV = ₹1,450 - ₹1,000 = ₹450 crore. Positive NPV → project is viable. But if NHAI had used a 15% discount rate (reflecting higher cost of borrowing), PV factor = 6.566, PV of inflows = ₹1,182 crore, NPV = ₹182 crore — still positive but much less margin. At 20%, PV factor = 4.979, PV = ₹896 crore, NPV = -₹104 crore → project fails. This is exactly why interest rate changes by RBI affect infrastructure project execution.

### GATE-Level Numerical

**Q:** A bank is evaluating a ₹200 crore loan to a manufacturing company for 5 years. The loan requires annual interest payments at 12% and principal repayment of ₹200 crore at the end of Year 5. However, the bank also incurs a processing fee of 1% upfront (₹2 crore paid at start). What is the IRR of this loan?

**Answer:**

**Step 1:** Map the cash flows

| Year | Cash Flow |
|------|-----------|
| 0 | -₹200 crore (loan disbursed) + ₹2 crore (processing fee net effect = effectively ₹198 crore net inflow to borrower, or ₹202 crore net outflow from bank's perspective) |
| Year 1-4 | -₹24 crore (interest only: 12% × ₹200 crore) |
| Year 5 | -₹24 crore (interest) - ₹200 crore (principal) = -₹224 crore |

**Step 2:** The IRR is the rate where NPV of bank cash flows = 0

$$\text{IRR: } -200 + \frac{2}{(1+r)^0} - \frac{24}{(1+r)^1} - \frac{24}{(1+r)^2} - \frac{24}{(1+r)^3} - \frac{24}{(1+r)^4} - \frac{224}{(1+r)^5} = 0$$

Wait — let me reframe from bank's perspective more cleanly:

**Bank's Cash Flows:**

| Year | Description | Amount |
|------|-------------|--------|
| 0 | Loan disbursed | -₹200 crore |
| 0 | Processing fee received | +₹2 crore |
| 1-4 | Annual interest (12% × 200) | +₹24 crore each year |
| 5 | Annual interest + Principal | +₹224 crore |

Net Year 0: -₹198 crore (₹200 out, ₹2 in)

**Step 3:** Trial and error or use annuity shortcuts

The loan has an all-in cost that's NOT exactly 12% because of the 1% upfront fee. The true IRR will be slightly above 12%. Let's calculate using an approximation:

Total inflows to bank (Years 1-5): ₹24×4 + ₹224 = ₹96 + ₹224 = ₹320 crore
Total outflow: ₹198 crore

Using average method: ₹320/₹198 = 1.616 over 5 years → approximate IRR ≈ 10%... No, this is wrong approach.

Better approach: IRR solves for r in:

$$-198 + 24 \times \text{PVAF}(r, 4) + 224 \times \frac{1}{(1+r)^5} = 0$$

**Try r = 13%:**
- PVAF(13%, 4) = 2.974
- PV of ₹24 for 4 years = 24 × 2.974 = ₹71.38 crore
- PV of ₹224 at Year 5 = 224 / (1.13)^5 = 224 / 1.842 = ₹121.61 crore
- Total PV inflows = ₹71.38 + ₹121.61 = ₹192.99 crore
- NPV = 192.99 - 198 = -₹5.01 crore (negative)

**Try r = 12%:**
- PVAF(12%, 4) = 3.037
- PV of ₹24 for 4 years = 24 × 3.037 = ₹72.89 crore
- PV of ₹224 at Year 5 = 224 / (1.12)^5 = 224 / 1.763 = ₹127.07 crore
- Total PV inflows = ₹72.89 + ₹127.07 = ₹199.96 crore
- NPV = 199.96 - 198 = +₹1.96 crore

**Try r = 12.3%:**
- PVAF(12.3%, 4) = 3.013
- PV of ₹24 for 4 years = 24 × 3.013 = ₹72.31 crore
- PV of ₹224 at Year 5 = 224 / (1.123)^5 = 224 / 1.786 = ₹125.42 crore
- Total PV inflows = ₹72.31 + ₹125.42 = ₹197.73 crore
- NPV = 197.73 - 198 = -₹0.27 crore ≈ 0

**Answer: IRR ≈ 12.3%**

The 1% processing fee effectively increases the true cost of the loan from 12% to approximately 12.3%, illustrating how upfront fees impact actual borrowing costs — a concept banks use when quoting "all-in cost" of loans.

### Multiple Perspectives

- **Academic view**: The foundations rest on the Axiom of Temporal Utility — assuming people prefer earlier consumption to later consumption (positive time preference). The Arrow-Debreu framework generalises this to state-contingent claims, but NPV analysis is the practical workhorse.
- **RBI/Regulatory view**: RBI's guidelines on IRR for microfinance (not exceeding 10% of flat rate, or equivalently 1.33 times the flat rate) and the usury laws reflect regulatory concern that TVM calculations can be misused to disguise steep effective interest rates. The Effective Interest Rate (EIR) regulation mandates disclosure of true cost of loans.
- **Practical/Industry view**: Corporate treasurers obsess over WACC, using divisional hurdle rates that reflect each business line's risk. Banks use Duration and Convexity — extensions of TVM — to manage interest rate risk in their bond portfolios.

### Recent Developments (2024-2026)

- **RBI's Marginal Cost of Funds-based Lending Rate (MCLR) Reforms**: RBI has been pushing banks to link more loans to external benchmarks (EBLR), which changes how monetary policy transmits — TVM becomes more directly reflected in loan pricing
- **Revival of Public Sector Banks' NPA Resolution via NCLT**: NPV-based recovery calculations determine how much banks can sacrifice ( haircut) when resolving stressed assets under the Insolvency and Bankruptcy Code (IBC)
- **Digital Rupee (e₹) and Time Value**: The introduction of retail CBDC raises theoretical questions about whether electronic rupees should carry interest — if they do, it changes the TVM calculus for monetary policy
- **RBI's Differentiated Bank Licensing**: Small Finance Banks and Payments Banks operate with different risk-return frameworks; TVM analysis helps determine viable business models under each licence category
