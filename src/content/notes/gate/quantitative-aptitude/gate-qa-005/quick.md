---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-005
topicName: "Simple & Compound Interest"
tier: quick
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A simple timeline showing principal, interest, and total amount over 3 years"
country: India
generated: ai-v1
---



## Simple & Compound Interest — Quick Reference

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