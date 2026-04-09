---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: quant
subjectName: "Finance"
topic: financ-007
topicName: "Topic 7"
weight: 3
country: rbi
generated: "2026-03-25T17:00:00"
---

# Topic 7

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Time Value of Money (TVM)** — ₹1 today is worth more than ₹1 tomorrow due to earning potential
- **Future Value (FV)**: FV = PV × (1 + r)ⁿ — compounding forward in time
- **Present Value (PV)**: PV = FV / (1 + r)ⁿ — discounting back to today
- **Annuities**: Ordinary (payments at period end) vs Annuity Due (payments at period start)
- **NPV rule**: Accept project if NPV > 0 | **IRR rule**: Accept if IRR > cost of capital
- ⚡ Most common exam error: confusing compounding frequency with number of periods

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Time Value of Money — The Foundation of Finance

The Time Value of Money (TVM) is arguably the most important concept in quantitative finance. It forms the basis for valuation, investment appraisal, loan amortization, and even derivatives pricing. Every financial decision — from evaluating a project to taking a mortgage — involves TVM calculations.

## Why Does Money Have Time Value?

Three fundamental reasons:
1. **Productivity/Earning Capacity**: Money can be invested to earn returns
2. **Inflation**: Prices generally rise, eroding purchasing power
3. **Risk/Uncertainty**: Future cash flows are never guaranteed

## Future Value (Compounding)

Future Value answers: "If I invest ₹X today at rate r for n periods, how much will I have?"

**Simple Compounding (Single Sum):**
FV = PV × (1 + r)ⁿ

**Example:**
₹10,000 invested at 10% p.a. for 3 years:
Year 1: 10,000 × 1.10 = 11,000
Year 2: 11,000 × 1.10 = 12,100
Year 3: 12,100 × 1.10 = 13,310
FV = 10,000 × (1.10)³ = **₹13,310**

**Quarterly/Monthly Compounding:**
FV = PV × (1 + r/m)^(mn)
Where m = compounding periods per year

₹10,000 at 10% p.a. compounded quarterly for 3 years:
FV = 10,000 × (1 + 0.10/4)^(4×3) = 10,000 × (1.025)^12 = **₹13,448**

**Effective Annual Rate (EAR):**
EAR = (1 + r/m)^m − 1
EAR = (1 + 0.10/4)^4 − 1 = 10.38% (vs nominal 10%)

## Present Value (Discounting)

Present Value answers: "How much is ₹X receivable in the future worth today?"

PV = FV / (1 + r)ⁿ

**Example:**
Receiving ₹13,310 in 3 years at 10% p.a.:
PV = 13,310 / (1.10)³ = 13,310 / 1.331 = **₹10,000**

The discount rate (r) is also called the **Required Rate of Return** or **Cost of Capital**.

## Annuities

An annuity is a series of equal cash flows at regular intervals.

### Ordinary Annuity (Annuity-immediate)
Payments at the **end** of each period.

**Future Value of Ordinary Annuity:**
FVA = A × [(1 + r)^n − 1] / r

**Present Value of Ordinary Annuity:**
PVA = A × [1 − (1 + r)^(-n)] / r

**Example:**
₹10,000 paid at end of each year for 5 years at 8% p.a.:
PVA = 10,000 × [1 − (1.08)^(-5)] / 0.08
= 10,000 × [1 − 0.6806] / 0.08
= 10,000 × 0.3194 / 0.08
= 10,000 × 3.9927 = **₹39,927**

### Annuity Due
Payments at the **beginning** of each period.

PVA (Annuity Due) = PVA (Ordinary) × (1 + r)
FVA (Annuity Due) = FVA (Ordinary) × (1 + r)

## Net Present Value (NPV)

NPV is the gold standard for investment appraisal:

**NPV = Σ [CFt / (1 + r)^t] − Initial Investment**

Decision Rule: Accept if NPV > 0; Reject if NPV < 0
If comparing mutually exclusive projects: Choose the one with **higher positive NPV**

**Example:**
Project requiring ₹50,000 investment, generating:
Year 1: ₹20,000 | Year 2: ₹20,000 | Year 3: ₹25,000
At 10% discount rate:
NPV = -50,000 + 20,000/1.10 + 20,000/1.21 + 25,000/1.331
= -50,000 + 18,182 + 16,529 + 18,783
= **₹3,494** → Accept (positive NPV)

## Internal Rate of Return (IRR)

IRR is the discount rate where NPV equals zero:

**NPV = 0 → Solve for r = IRR**

Decision Rule: Accept if IRR > Cost of Capital (Required Rate of Return)

**For the above example**, IRR is the rate that makes NPV = 0:
Trying 15%: -50,000 + 20,000/1.15 + 20,000/1.3225 + 25,000/1.5209
= -50,000 + 17,391 + 15,122 + 16,438 = **-1,049** (NPV negative)
Trying 12%: -50,000 + 20,000/1.12 + 20,000/1.2544 + 25,000/1.4049
= -50,000 + 17,857 + 15,942 + 17,796 = **+1,595**
IRR is between 12% and 15%, approximately **13.5%**

If cost of capital = 10%, IRR (13.5%) > 10% → Accept project.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## NPV vs IRR — When They Conflict

NPV and IRR can give contradictory recommendations when:
1. Projects have different sizes (scale problem)
2. Projects have different cash flow timing (timing problem)
3. Mutually exclusive projects with different lives

**The NPV Profile Method:**
Plot NPV at different discount rates for each project. The discount rate where NPV curves cross is the ** crossover rate**. Below crossover rate, NPV and IRR may agree; above it, they disagree.

**Resolution Rule:** For mutually exclusive projects, **always prefer NPV** as it maximizes shareholder wealth. IRR can be misleading for projects with non-conventional cash flows (multiple sign changes in cash flows can produce multiple IRRs).

## Growing Annuity

When cash flows grow at rate g each period:

**PV of Growing Annuity:**
PVA = A × [1 − (1+g)^n / (1+r)^n] / (r − g), where r > g

## Perpetuity

A perpetuity is an annuity that continues forever:

**PV of Perpetuity** = A / r

**Growing Perpetuity** = A / (r − g)

This concept underlies dividend discount models (DDM) for stock valuation.

## Loan Amortization — EMI Calculation

EMI (Equal Monthly Installment) uses the annuity formula:

**EMI = P × r × (1 + r)^n / [(1 + r)^n − 1]**

Where P = principal, r = monthly rate, n = number of months

**Example:** ₹10,00,000 loan at 9% p.a. (0.75% monthly) for 20 years (240 months):
EMI = 10,00,000 × 0.0075 × (1.0075)^240 / [(1.0075)^240 − 1]
= 10,00,000 × 0.0075 × 6.0226 / 5.0226
= **₹7,982 per month**

## Exam Tips for RBI Grade B

1. **Read the compounding frequency carefully**: Annual vs quarterly vs monthly changes the exponent
2. **Watch the sign of cash flows**: Outflows (investments) are negative; inflows are positive
3. **For IRR**: If NPV at r = 0% is negative, IRR is definitely negative
4. **NPV profile**: A project with higher NPV at the cost of capital is always better
5. **Annuity tables**: In exam, use the formula directly — don't rely on annuity tables

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
