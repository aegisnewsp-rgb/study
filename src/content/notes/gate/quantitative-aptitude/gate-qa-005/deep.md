---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-005
topicName: "Simple & Compound Interest — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A growth curve comparing SI (linear) vs CI (exponential) over time, with half-yearly compounding shown"
country: India
generated: ai-v1
---



## Simple & Compound Interest — Deep Dive

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
