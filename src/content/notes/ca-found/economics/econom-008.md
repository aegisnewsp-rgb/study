---
exam: ca-found
examName: CA Foundation
subject: economics
subjectName: "Economics"
topic: econom-008
topicName: Factor Markets
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-05-26"
---

# Factor Markets

### 🟢 Lite — Quick Review (1h–1d)

**Factor Markets** in CA Foundation QA covers financial mathematics used to value capital and cash flows over time. The foundational principle is that **money today is worth more than the same amount in the future** due to earning capacity (time value of money).

**Core formulas to memorise:**
- **Simple Interest:** SI = P × r × n
- **Compound Interest:** FV = P(1 + r)^n
- **Present Value:** PV = FV ÷ (1 + r)^n
- **PV of Ordinary Annuity:** PMT × [1 − (1 + r)^−n] ÷ r
- **PV of Annuity Due:** multiply ordinary annuity formula by (1 + r)
- **Capital Recovery Factor:** CRF = r(1 + r)^n ÷ [(1 + r)^n − 1]

**Exam pointers (CA Foundation Paper 3):**
- Numerical questions on PV/FV of annuity carry 3–5 marks each
- **Capital recovery** and **sinking fund** questions appear in 2-mark and 4-mark variants
- Always check whether payments are at *beginning* (annuity due) or *end* (ordinary annuity) before applying a formula
- Rounding errors compound — carry 4–5 decimal places during calculation

---

### 🟡 Standard — Regular Study (2d–2mo)

## Time Value of Money

The **time value of money** holds that ₹100 available today is worth more than ₹100 receivable in Year 3 because today's amount can be invested to earn interest. This principle underpins all factor market calculations — present value (PV) discounts future cash flows back to today's terms, while future value (FV) projects current cash flows forward.

## Simple vs Compound Interest

**Simple Interest (SI)** accrues only on the original principal:
- SI = P × r × n
- Total amount = P(1 + rn)

**Compound Interest (CI)** accrues on accumulated principal:
- FV = P(1 + r)^n
- Here r must be the rate *per compounding period*, and n must be the total number of compounding periods.

If compounding is semi-annual, divide r by 2 and multiply n by 2 before substituting.

## PV and FV Relationships

$$PV = \frac{FV}{(1+r)^n}$$

Given a future obligation of ₹50,000 due in 5 years at 10% p.a. compounded annually:
$$PV = \frac{50000}{(1.10)^5} = ₹31,046.05$$

## Annuities

An **annuity** is a sequence of equal payments at uniform intervals. Two variants matter:

| Type | Timing | Formula adjustment |
|------|--------|---------------------|
| Ordinary Annuity | Payment at period-end | None |
| Annuity Due | Payment at period-beginning | Multiply PV result by (1+r) |

For a 4-year annuity of ₹10,000 at 8% p.a.:

- **Ordinary annuity PV:** 10,000 × [1 − (1.08)^−4] ÷ 0.08 = ₹33,122.78
- **Annuity due PV:** 33,122.78 × 1.08 = ₹35,772.60

## Capital Recovery Factor

This finds the **annual payment** required to fully repay a loan (principal + interest) over n periods at rate r:
$$CRF = \frac{r(1+r)^n}{(1+r)^n - 1}$$

For a ₹200,000 loan at 12% over 5 years, annual payment = 200,000 × 0.27741 = **₹55,482** per year.

---

### 🔴 Extended — Deep Study (3mo+)

## Effective vs Nominal Rate

When compounding frequency exceeds annual (e.g., monthly), the **effective annual rate (EAR)** must be used:
$$EAR = \left(1 + \frac{r_{nominal}}{m}\right)^m - 1$$

A nominal 12% rate compounded monthly gives:
$$EAR = \left(1 + \frac{0.12}{12}\right)^{12} - 1 = 1.2682 - 1 = 12.68\%$$

Failing to convert nominal to effective rate inflates the true cost of borrowing or understates investment returns.

## Sinking Fund Factor

Whereas CRF answers "what annual payment repays a loan?", the **Sinking Fund Factor (SFF)** answers "what annual deposit accumulates to a target future sum?":

$$SFF = \frac{r}{(1+r)^n - 1}$$

To accumulate ₹500,000 in 10 years at 9%:
Annual deposit = 500,000 × SFF = 500,000 × 0.06565 = **₹32,825** per year.

Note that SFF is simply CRF minus r: CRF = SFF + r.

## Common Mistakes

1. **Omitting the (1+r) multiplier for annuity due** — this is the most frequent error in CA Foundation exams, costing 2–4 marks.
2. **Mismatched time units** — if r is annual but compounding is quarterly, set r quarterly = r/4 and n = 4×years.
3. **Treating non-uniform cash flows as annuity** — use individual PV calculations for irregular streams.
4. **Confusing SI and CI** — SI is linear in n; CI is exponential. For periods >1 year at identical r, CI always produces a larger FV.

## Practice Prompts

1. A finance lease requires payment of ₹15,000 at the *beginning* of each quarter for 3 years at 16% p.a. compounded quarterly. Find the PV of the lease obligation.

2. A company plans to retire a ₹800,000 bond issue in 6 years by accumulating a sinking fund earning 10% p.a. The annual sinking fund deposit is ₹97,695. Verify whether the deposit amount is correct using SFF.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
