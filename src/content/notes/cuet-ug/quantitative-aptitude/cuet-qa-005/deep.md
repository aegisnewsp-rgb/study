---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-005
topicName: "Simple & Compound Interest — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "Four growth curves on one graph — SI (straight line), CI annual, CI quarterly, CI monthly — all diverging upward with CI curves progressively steeper"
country: India
generated: ai-v1
---



## Simple & Compound Interest — Deep Dive

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
