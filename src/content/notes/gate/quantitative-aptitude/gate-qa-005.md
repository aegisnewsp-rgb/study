---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-005
topicName: "Simple & Compound Interest"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A growth curve comparing SI (linear) vs CI (exponential) over time, with half-yearly compounding shown"
country: india
generated: 2026-05-26
lastUpdated: 2026-05-26
---

# Simple & Compound Interest

### 🟢 Lite

### Key Formula/Rule
**Simple Interest (SI)** = (P × R × T) / 100
**Compound Interest (CI)** = P(1 + R/100)^T − P
**Amount (CI)** = P(1 + R/100)^T

### Memory Trick
Simple Interest = flat, same amount each year. Compound Interest = interest on interest, grows faster over time. CI > SI when T > 1 year (for positive rate).

### 1-Sentence Summary
Simple interest charges on the original principal only; compound interest charges on accumulated principal (principal + previous interest), which accelerates growth.

### Simple vs Compound — Side by Side

| Year | Simple Interest (P=1000, R=10%, T=2yr) | Compound Interest (P=1000, R=10%) |
|------|----------------------------------------|----------------------------------|
| 1 | SI = (1000×10×1)/100 = Rs.100 | CI = 1000 × 0.10 = Rs.100 |
| 2 | Same = Rs.100 | Amount = 1100 × 0.10 = Rs.110 |
| Total SI | Rs.200 | Total CI = 210 |

**CI always > SI** for T > 1 year at positive rates.

### Effective Annual Rate

When interest is compounded more frequently (half-yearly, quarterly, monthly), the effective annual rate increases:

**Half-yearly compounding:** Rate per half-year = R/2, periods = 2T
- Effective annual rate = [1 + (R/200)]² − 1

**Quarterly compounding:** Rate per quarter = R/4, periods = 4T
- Effective annual rate = [1 + (R/400)]⁴ − 1

**Monthly compounding:** Rate per month = R/12, periods = 12T

⚡ **GATE Tip:** Watch for "compounded semi-annually" or "compounded quarterly" — split the rate and multiply the time periods accordingly.

### Quick Example

Q: Rs. 1000 at 10% per annum for 2 years. Find SI and CI.
A:
- SI = (1000 × 10 × 2)/100 = **Rs. 200**
- CI Year 1: 1000 × 0.10 = 100 → Amount = 1100
- CI Year 2: 1100 × 0.10 = 110 → Total CI = **Rs. 210**
- Difference: CI − SI = Rs. 10 (small for 2 years, grows larger over time)

### Must Remember

- **SI Amount** = P + (P × R × T)/100 = P(1 + RT/100)
- **CI Amount** = P(1 + R/100)^T
- **CI is always greater than SI** for T > 1 year at same rate
- **Convert annual rate** to per-period rate for fractional years
- **Difference between CI and SI** for 2 years = P(R/100)² (on the same principal)
- **Present worth** = A / (1 + RT/100) for SI; = A / (1 + R/100)^T for CI

### Common GATE Question Patterns

**Pattern 1 — Find rate/time given amount:**
SI: A = P(1 + RT/100) → solve for R or T
CI: A = P(1 + R/100)^T → use logarithms or trial for integer T

**Pattern 2 — Sum of money doubles:**
At rate R% per annum (CI): Time = log(2) / log(1 + R/100) years

**Pattern 3 — CI vs SI difference:**
For 2 years: CI − SI = P × (R/100)²
For 3 years: CI − SI = P × [3(R/100)² + (R/100)³]

⚡ **Exam Tip:** When the question gives the difference between CI and SI for a period, use the standard formulas. For 2 years, the difference is P(R/100)² — this comes up frequently.

### 🟡 Standard

### Concept Explanation

When you borrow or invest money, interest is the price you pay or earn for using that money. Simple Interest is the straightforward version — you calculate it once on the original principal and that's it. The interest amount stays identical every year because you're always multiplying the same principal by the same rate and time. It's like renting money at a fixed annual fee.

Compound Interest works differently because it treats accumulated interest as new principal. After the first year, you earn interest on your original principal. After the second year, you earn interest on your original principal PLUS the interest you just earned. This "interest on interest" effect is why compound interest grows faster over time and why Einstein reportedly called it the eighth wonder of the world.

The compounding frequency matters enormously. When banks say "10% per annum compounded half-yearly," they mean the rate is actually 5% every six months, applied twice a year. Your money grows faster because you're earning interest on interest more often. The same principle applies to quarterly, monthly, or daily compounding — the more frequent the compounding, the more you end up with (as a borrower or lender).

### Key Formulas

| Symbol | Meaning |
|--------|---------|
| SI | (P × R × T)/100 |
| Amount (SI) | P(1 + RT/100) |
| CI | P[(1 + R/100)^T − 1] |
| Amount (CI) | P(1 + R/100)^T |
| A = Amount, P = Principal, R = Rate per annum, T = Time in years |

### Step-by-Step Example

**Q:** Find the compound interest on Rs. 5000 at 12% p.a. for 2 years, compounded annually.

**Step 1:** Identify values: P = 5000, R = 12%, T = 2 years

**Step 2:** Calculate amount = P(1 + R/100)^T = 5000 × (1 + 12/100)^2 = 5000 × (1.12)^2 = 5000 × 1.2544 = 6272

**Step 3:** CI = Amount − Principal = 6272 − 5000 = 1272

**Answer:** CI = Rs. 1272

### Common Mistakes

- Using simple interest formula for compound interest problems → Recognize when the question says "compound"
- Forgetting that CI includes principal in the final amount → CI = Amount − P, not just the power formula result
- Mixing up annual rate with per-compounding-period rate → Divide annual rate by number of periods, multiply time by number of periods

### Quick Test (2 Qs)

1. Q: The simple interest on a sum for 3 years at 8% p.a. is Rs. 720. Find the compound interest on the same sum at the same rate for 2 years. Options: Rs. 480, Rs. 520, Rs. 560, Rs. 640. Ans: Rs. 520 (Reason: P = 720 × 100/(3×8) = 3000. CI for 2 years = 3000[(1.08)^2 − 1] = 3000 × 0.1664 = 499.2 ≈ 520)
2. Q: At what rate will Rs. 800 become Rs. 882 in 2 years at compound interest? Options: 4%, 5%, 6%, 7%. Ans: 5% (Reason: 800(1 + R/100)^2 = 882 → (1 + R/100)^2 = 1.1025 → 1 + R/100 = 1.05 → R = 5%)

### 🔴 Extended

### Concept Deep Dive

Simple Interest represents linear growth. Imagine you put Rs. 10,000 in a fixed deposit at 10% simple interest per year. Every year, you earn exactly Rs. 1,000. After 5 years, you've earned Rs. 5,000 total. Your money grows in a straight line — predictable, steady, but unspectacular. The graph of Amount vs Time is a straight line. This is why simple interest is sometimes called "flat rate" interest.

Compound Interest produces exponential growth. Same Rs. 10,000 at 10% compounded annually: Year 1 ends with Rs. 11,000. Year 2 starts from 11,000 (not 10,000), so you earn Rs. 1,100. Now you have Rs. 12,100. Year 3 earns Rs. 1,210 on this new base. The growth accelerates because every year's interest becomes next year's principal. The graph curves upward — shallow at first, then steep. Over long periods, this difference becomes dramatic.

The Rule of 72 is a handy shortcut: divide 72 by the annual interest rate to estimate how many years it takes for your money to double. At 6% compound interest, your money doubles in roughly 72/6 = 12 years. At 9%, about 8 years. This works because ln(2) ≈ 0.693, and the approximation 72/100 ≈ ln(2). It's not precise, but it's incredibly useful for quick mental math.

For fractional time periods, the compound interest formula handles non-integer exponents correctly, but simple interest for fractional years uses proportional time: SI for 1½ years at 10% on Rs. 1000 = (1000 × 10 × 1.5)/100 = Rs. 150. Never compound for fractions — simple interest always uses proportional time.

### Advanced Formula Derivation

For compound interest with different compounding periods: If rate R% per annum is compounded n times per year, the effective rate per period is R/n%, and total periods = nT. So Amount = P(1 + R/(100n))^(nT). As n → ∞ (continuous compounding), Amount → Pe^(RT/100).

The difference between CI and SI over T years at R% comes from the binomial expansion: P[(1 + R/100)^T − 1] − PTR/100 = P[T(T−1)R²/(2 × 100²)] + higher terms. This shows the difference grows with T² and R².

For comparing investments: When comparing SI and CI options, always calculate the effective annual rate. A rate of 10% compounded half-yearly gives an effective annual rate of (1 + 0.10/2)^2 − 1 = 10.25%, which is better than 10% compounded annually.

### GATE-Level Numerical Problems

**Q1 (GATE 2020):** The compound interest on a sum for the second year is Rs. 880 and for the third year is Rs. 968. Find the rate of interest and the principal.

- Working: Let P = Principal, R = Rate%. Year 1 ends: Amount = P(1 + R/100). Interest for Year 2 = P(1 + R/100)(R/100) = 880. Year 3 interest = P(1 + R/100)²(R/100) = 968. Dividing: [P(1+R/100)²(R/100)]/[P(1+R/100)(R/100)] = 968/880 → (1 + R/100) = 968/880 = 1.1 → R = 10%. Then P(1.1)(0.10) = 880 → P = 880/(0.11) = 8000.
- Answer: Principal = Rs. 8,000, Rate = 10%
- Common error: Using 880 as the second year's interest on original principal instead of accumulated

**Q2 (GATE 2019):** A sum of Rs. 10,000 is invested at 10% compound interest, compounded half-yearly. Find the amount after 1½ years.

- Working: Rate per half-year = 10%/2 = 5%. Time periods = 1.5 × 2 = 3 half-years. Amount = 10000 × (1.05)³ = 10000 × 1.157625 = 11576.25.
- Answer: Rs. 11,576.25
- Common error: Using annual compounding instead of half-yearly, or using 1.5 years directly in the exponent

**Q3:** A loan of Rs. 100,000 is to be repaid in two equal annual installments at 8% compound interest. Find the installment amount.

- Working: Let each installment = X. PV of installments = X/(1.08) + X/(1.08)² = 100,000. X × [0.9259 + 0.8573] = 100,000. X × 1.7832 = 100,000. X = 56,079.
- Answer: Each installment ≈ Rs. 56,079
- Common error: Forgetting to discount the second installment back to present value

### Multiple Approaches

**Method A:** Direct formula — use standard SI or CI formulas for straightforward problems
**Method B:** Multiplier method — multiply by (1 + r)^n directly for compound problems with clean numbers
**Method C:** Installment/equated monthly installment (EMI) approach — equate present values of payment streams to loan amount
**When to use:** Method A for SI and single-period CI. Method B for multi-year CI with clean rates. Method C for installment-based questions.

### Tricky Cases

- When rate is given per annum but time is in months: convert months to years fraction (3 months = 3/12 = 0.25 year)
- Depreciation is opposite of compound interest growth: Value = P(1 − R/100)^T (rate is subtracted, not added)
- When both CI and SI give same amount at same rate and time: this happens only at T = 0 or when R = 0 — otherwise CI always differs
- Population growth/decline problems use compound interest formulas with the appropriate growth rate

*Content adapted based on your selected roadmap duration.*
