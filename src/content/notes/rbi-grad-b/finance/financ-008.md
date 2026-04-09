---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: quant
subjectName: "Finance"
topic: financ-008
topicName: "Topic 8"
weight: 3
country: rbi
generated: "2026-03-25T17:00:00"
---

# Topic 8

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Capital Budgeting** evaluates long-term investment decisions using cash flows (not accounting profits)
- **NPV** is the primary criterion: Accept if NPV > 0; NPV = Σ CFt/(1+r)^t − I₀
- **IRR** is the discount rate where NPV = 0; Accept if IRR > cost of capital
- **Payback Period** measures how quickly the initial investment is recovered — ignores time value and cash flows beyond payback
- **Profitability Index (PI)** = PV of future cash inflows / Initial Investment; Accept if PI > 1
- ⚡ Always rank mutually exclusive projects by NPV, not IRR — NPV maximises shareholder wealth

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Capital Budgeting — Evaluating Long-Term Investments

Capital budgeting is the process of planning and evaluating long-term investment decisions. These decisions commit large amounts of capital for extended periods, making them among the most consequential choices a firm makes. A wrong investment can destroy shareholder value; a right one can sustain growth for decades.

## The Capital Budgeting Process

1. **Identify Investment Opportunities**: Generate project proposals
2. **Estimate Cash Flows**: Project inflows and outflows over the project's life
3. **Determine Required Rate of Return (Hurdle Rate)**: Cost of capital or target return
4. **Evaluate Using NPV, IRR, Payback, PI**: Apply decision criteria
5. **Select Projects**: Rank and choose based on criteria and budget constraints
6. **Monitor and Review**: Post-investment audit against projections

## Key Principle: Use Cash Flows, Not Accounting Profits

Capital budgeting is based on **incremental cash flows** — the actual cash that flows in and out of the project. Key considerations:

- **Ignore sunk costs**: Costs already incurred are irrelevant
- **Include opportunity costs**: Value of the best alternative foregone
- **Consider working capital changes**: Initial inventory buildup, later releases
- **Include terminal cash flows**: Salvage value of assets at project end

## Methods of Evaluation

### 1. Net Present Value (NPV)

**NPV = −I₀ + Σ[CFt / (1+r)^t]**

The most theoretically correct method because:
- Uses cash flows, not accounting profits
- Accounts for time value of money
- Is additive across projects
- Maximises shareholder wealth

**Decision Criteria:**
- NPV > 0: Accept (project creates value)
- NPV = 0: Indifferent
- NPV < 0: Reject (project destroys value)

**Example — NPV Calculation:**
A project requires ₹1,00,000 investment. Cash inflows: Year 1: ₹40,000; Year 2: ₹50,000; Year 3: ₹30,000. Cost of capital = 10%.

```
Year 0: -1,00,000 / 1.00       = -1,00,000
Year 1:  40,000 / 1.10         =   36,364
Year 2:  50,000 / 1.21         =   41,322
Year 3:  30,000 / 1.331        =   22,539
NPV = -1,00,000 + 36,364 + 41,322 + 22,539 = +₹225 ✓ Accept
```

### 2. Internal Rate of Return (IRR)

IRR is the discount rate that makes NPV = 0. Solve for r in:
−I₀ + Σ[CFt / (1+IRR)^t] = 0

**For the above example**, IRR is approximately **15%** (NPV = 0 at ~15%).
Since IRR (15%) > Cost of Capital (10%) → Accept.

**IRR Advantages:** Easy to communicate as a percentage; provides a single summary number.
**IRR Disadvantages:** Can produce multiple IRRs for projects with non-conventional cash flows; may mislead when comparing projects of different sizes.

### 3. Payback Period (PBP)

The time required to recover the initial investment from project cash flows.

**Simple (non-discounted) PBP:**
PBP = Full years before full recovery + (Unrecovered amount / Cash flow in recovery year)

**Discounted PBP:** Uses discounted cash flows.

For the above example:
- Year 1: Recover ₹40,000 (cumulative: ₹40,000)
- Year 2: Recover ₹50,000 (cumulative: ₹90,000)
- Year 3: Recover ₹30,000 → Project fully recovered during Year 3
- PBP = 2 + (10,000 / 30,000) = **2.33 years**

**Limitations:** Ignores cash flows beyond payback; ignores time value; no acceptance criterion without a benchmark.

### 4. Accounting Rate of Return (ARR)

ARR = Average Annual Accounting Profit / Average Investment

**Example:**
Initial investment: ₹1,00,000; Annual profit: ₹20,000 (constant); Salvage: ₹10,000
ARR = 20,000 / [(1,00,000 + 10,000)/2] = 20,000 / 55,000 = **36.4%**

**Limitation:** Based on accounting profits, not cash flows; ignores time value.

### 5. Profitability Index (PI)

**PI = PV of Future Cash Inflows / Initial Investment**

PI = (36,364 + 41,322 + 22,539) / 1,00,000 = 1,00,225 / 1,00,000 = **1.002**

PI > 1.0 → Accept | PI < 1.0 → Reject

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## NPV Profile and Crossover Rate

When comparing two mutually exclusive projects, plot NPV at various discount rates:

**Example — Projects A and B:**
- Project A: I₀ = 1,00,000; CF: 60,000/yr for 3 years
- Project B: I₀ = 1,00,000; CF: 30,000 (Year 1), 50,000 (Year 2), 80,000 (Year 3)

At r = 0%: NPV(A) = 80,000 | NPV(B) = 60,000
At r = 20%: NPV(A) ≈ 24,000 | NPV(B) ≈ 31,000

The two NPV profiles cross at some **crossover rate**. Below this rate, choose Project A; above it, choose Project B.

For capital rationing (budget constraint), use the **Profitability Index** to rank projects — PI maximises NPV within a fixed budget.

## Risk in Capital Budgeting

### Sensitivity Analysis
Examines how NPV changes when key variables (selling price, volume, cost) change.
- "What if sales volume falls by 10%?" → Does NPV still remain positive?

### Scenario Analysis
Best Case / Base Case / Worst Case cash flows → Three NPVs → Expected NPV and standard deviation.

### Risk-Adjusted Discount Rate (RADR)
Apply a higher discount rate to riskier projects:
- Low-risk project: 10%
- Medium-risk: 12%
- High-risk: 15%

Adjusted R = Rf + β × (Km − Rf) — links to CAPM in theory.

## Capital Budgeting in RBI Context

RBI's own investment decisions (e.g., IT infrastructure, branch expansion) follow similar capital budgeting logic. For bank credit analysis, RBI's supervisory frameworks examine:
- Whether borrowers' projects have positive NPVs (viability)
- IRR vs cost of capital margins
- Project completion risk (time and cost overruns)

**Key Exam Insight:** In RBI Phase 2, expect a case study with two mutually exclusive projects. Use NPV as the primary criterion, but discuss IRR and payback as secondary considerations. Always show your calculations — examiners reward step-by-step working.

## Practical Application: NPV vs IRR in a Numerical Problem

A company has ₹5,00,000 to invest. Two projects available:

**Project X:** Cost ₹5,00,000; CFs: 3,00,000 (Yr1), 2,50,000 (Yr2)
**Project Y:** Cost ₹5,00,000; CFs: 1,00,000 (Yr1), 2,00,000 (Yr2), 3,00,000 (Yr3)

At 12% cost of capital:

**Project X:**
NPV = -5,00,000 + 3,00,000/1.12 + 2,50,000/1.2544 = -5,00,000 + 2,67,857 + 1,99,294 = **-₹32,849** (Reject!)
IRR ≈ 10% (less than 12%) → Reject

**Project Y:**
NPV = -5,00,000 + 1,00,000/1.12 + 2,00,000/1.2544 + 3,00,000/1.4049
= -5,00,000 + 89,286 + 1,59,435 + 2,13,614 = **-₹37,665** (Reject!)

Both projects have **negative NPVs** at 12% — neither should be accepted. This illustrates the fundamental rule: NPV > 0 is the prerequisite for value creation.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
