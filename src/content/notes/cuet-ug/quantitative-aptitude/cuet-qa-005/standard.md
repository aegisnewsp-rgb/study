---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-005
topicName: "Simple & Compound Interest"
tier: standard
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "A timeline showing Year 1 and Year 2 with bars beneath each year for both SI and CI — SI bars of equal height, CI bars increasing in height each year"
country: India
generated: ai-v1
---



## Simple & Compound Interest

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
