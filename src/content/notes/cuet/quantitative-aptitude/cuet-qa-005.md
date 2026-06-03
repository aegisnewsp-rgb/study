---
exam: cuet
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-005
topicName: "Simple & Compound Interest"
tier: unified
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "Four growth curves on one graph — SI (straight line), CI annual, CI quarterly, CI monthly — all diverging upward with CI curves progressively steeper"
country: india
generated: 2026-03-25
lastUpdated: 2026-03-25
---

# Simple & Compound Interest

### 🟢 Lite

### Key Formula/Rule
SI = (P × R × T) ÷ 100. Amount (SI) = P + SI = P(1 + RT/100). CI: Amount = P(1 + R/100)^T.

### Memory Trick
**SI = "P × R × T over 100"** — three ingredients, one division. For CI, you're multiplying the growth factor (1 + R/100) by itself T times because each period's amount becomes the next period's base.

### 1-Sentence Summary
Tests whether you understand the difference between interest calculated only on the original principal (SI) vs. interest calculated on the accumulated amount each period (CI).

### 30-Second Example
**Q:** SI on ₹5,000 at 6% per annum for 2 years?
**A:** ₹600 — (5000 × 6 × 2) ÷ 100 = 600

### 🟡 Standard

### Concept

Interest is basically the "rent" you pay for using someone else's money, or the "bonus" you earn for lending yours. **Simple Interest (SI)** is the straightforward version: you borrow ₹10,000 at 8% per year, you pay 8% of ₹10,000 = ₹800 every single year, flat. The interest never changes because it's always calculated on the original ₹10,000, never on the accumulated amount. So over 3 years, SI = ₹800 × 3 = ₹2,400.

**Compound Interest (CI)** is where it gets interesting. Instead of calculating interest on just the original principal, you calculate it on the **accumulated amount** each period. In year one, interest is 8% of ₹10,000 = ₹800, so you now owe ₹10,800. In year two, interest is 8% of ₹10,800 = ₹864. You're now paying interest on interest — which is both good when you're earning and painful when you're borrowing.

The formula for CI is Amount = P(1 + R/100)^T. That exponent T is doing heavy lifting — it means you're multiplying (1 + R/100) by itself T times. For 3 years at 8%, that's (1.08)^3 = 1.2597, so ₹10,000 becomes ₹12,597. The extra ₹197 compared to SI (₹12,400) is the "interest on interest" effect.

When interest is compounded **half-yearly** (twice a year), the rate per half-year becomes R/2 and the number of periods becomes 2T. So 8% per annum compounded half-yearly means 4% every 6 months for 2 years (4 periods).

### Key Formulas
| Formula | Use |
|---------|-----|
| SI = (P × R × T) ÷ 100 | Simple interest for one year |
| Amount (SI) = P + SI = P(1 + RT/100) | Total amount with SI |
| CI: A = P(1 + R/100)^T | Amount with CI (annual compounding) |
| CI − SI difference | Extra amount earned with CI vs. SI |
| Rate per period = R ÷ n, Periods = n × T | For n-times-per-year compounding |

### Worked Example
**Q:** Find the compound interest on ₹20,000 at 10% per annum for 2 years, compounded annually.

**Step 1:** Year 1 interest = 10% of 20,000 = ₹2,000
Year 1 amount = 20,000 + 2,000 = ₹22,000

**Step 2:** Year 2 interest = 10% of 22,000 = ₹2,200
Year 2 amount = 22,000 + 2,200 = ₹24,200

**Step 3:** CI = Final Amount − Principal = 24,200 − 20,000 = **₹4,200**

Or use formula: A = 20000 × (1 + 10/100)^2 = 20000 × 1.1 × 1.1 = **₹24,200** → CI = 24,200 − 20,000 = ₹4,200

**Answer:** ₹4,200

### Common Errors
- **Using time T directly for half-yearly compounding** → Convert properly: 2 years half-yearly means 4 periods at (R/2)% each
- **Confusing SI and CI formulas** → SI uses P × R × T (linear); CI uses P raised to power T (exponential)
- **Forgetting to subtract the principal from CI** → CI is not the final amount; it's the interest portion only: CI = A − P

### 🔴 Extended

### Full Concept

#### Why CI Grows Exponentially
This is the key insight. With SI, after T years your money grows linearly: P + P×R×T/100. With CI, it grows multiplicatively: P × (1 + R/100)^T. The difference is enormous over long periods because (1 + R/100)^T grows exponentially while P×R×T grows only linearly.

Compare ₹10,000 at 12% per year for 30 years:
- SI: 10,000 + (10,000 × 12 × 30)/100 = ₹46,000
- CI: 10,000 × (1.12)^30 = ₹29,95,992 ≈ **₹30 lakhs**

Same principal, same rate, same time — but CI gives you roughly 65× more. That's the power of compounding, and it's why starting to invest early matters so much.

#### More Frequent Compounding
When CI is compounded more than once a year, the formula adjusts: **A = P(1 + R/(100×n))^(n×T)** where n = number of compounding periods per year. For monthly compounding at 12% per annum: n = 12, so rate per month = 1%, periods = 12T.

For quarterly: A = P(1 + R/400)^(4T)
For monthly: A = P(1 + R/1200)^(12T)

The more frequent the compounding, the higher the effective amount — because you're earning "interest on interest" more often. But notice the rate per period shrinks proportionally, so the benefit is real but not dramatic.

#### Effective Rate vs. Nominal Rate
The **nominal rate** is the stated annual rate. The **effective rate** is what you actually earn or pay when compounding is factored in. If the nominal rate is 12% compounded monthly, the effective annual rate is (1 + 0.12/12)^12 − 1 = (1.01)^12 − 1 ≈ 0.1268 = **12.68%**. So the effective rate is slightly higher than the nominal rate because of more frequent compounding.

#### The Rule of 72
This is a beautiful shortcut for doubling time. **Divide 72 by the annual rate (r%) and you get the approximate number of years to double your money.** At 6% per year: 72 ÷ 6 = 12 years. At 9%: 72 ÷ 9 = 8 years. It's not exact, but for CUET it's close enough and saves precious exam time.

For more precision: **Rule of 69.3** (better for continuous compounding) or **Rule of 70** (close enough for most rates).

#### Depreciation
This is just CI in reverse — a constant percentage decrease each period. If a machine worth ₹1,00,000 depreciates at 20% per year: after year 1 = 1,00,000 × 0.80 = ₹80,000. After year 2 = 80,000 × 0.80 = ₹64,000. Formula: **Value after T years = P × (1 − r/100)^T**. Notice the minus sign instead of plus.

### Multiple Approaches

**Standard — Formula Method:**
CI = P[(1 + R/100)^T − 1]
This is cleaner when you just need the interest portion, not the full amount.

**Shortcut — Rule of 72:**
Years to double ≈ 72 ÷ r. Works best for rates between 4% and 20%. Outside this range, error increases.

**Shortcut — Net Change Approximation:**
For two successive rates r₁% and r₂%: Net factor = (1 + r₁/100)(1 + r₂/100). Equivalent to net% = r₁ + r₂ + (r₁×r₂)/100.

### CUET-Level Problems

**Q1:** The difference between CI and SI on a sum at 10% per annum for 2 years is ₹31. Find the sum.
**Working:** 
SI for 2 years = (P × 10 × 2)/100 = 0.20P
CI Year 1 = 0.10P, Amount after Y1 = 1.10P
CI Year 2 = 0.10 × 1.10P = 0.11P, Total CI = 0.10P + 0.11P = 0.21P
Difference = 0.21P − 0.20P = 0.01P = 31
**P = ₹3,100**
**Answer:** ₹3,100

**Q2:** A car worth ₹8,00,000 depreciates at 10% per year. What will it be worth after 3 years?
**Working:** 
After Y1: 8,00,000 × 0.90 = 7,20,000
After Y2: 7,20,000 × 0.90 = 6,48,000
After Y3: 6,48,000 × 0.90 = 5,83,200
Or: 8,00,000 × (0.9)^3 = 8,00,000 × 0.729 = **₹5,83,200**
**Answer:** ₹5,83,200

### Tricky Cases
- **CI when rate differs each year:** Don't use the single formula. Apply each year's rate sequentially: A = P × (1 + r₁/100) × (1 + r₂/100) × (1 + r₃/100).
- **SI and CI being equal for specific combinations:** This happens at certain T and R values. For 2 years, CI − SI = P × (R/100)^2. Setting this equal to some value lets you solve backwards.
- **Decimal years:** 6 months = 0.5 years, 18 months = 1.5 years. Always convert time to the same unit as the rate before applying formulas.

*Content adapted based on your selected roadmap duration.*
