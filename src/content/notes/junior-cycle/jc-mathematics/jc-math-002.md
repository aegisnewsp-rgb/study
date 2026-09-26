---
exam: junior-cycle
examName: "Junior Cycle"
subject: jc-mathematics
subjectName: "Mathematics"
topic: jc-math-002
topicName: "Number"
weight: 4
country: ireland
generated: "2026-09-26T10:00:00"
lastUpdated: "2026-09-26"
---

# Number — Junior Cycle Mathematics Notes

The Number strand carries the real-number system, integer and rational arithmetic, decimals, percentages, ratio and proportion, indices, surds, and financial mathematics (compound interest, depreciation, APR and AER) across the three years of Junior Cycle. It is the single largest marks-allocator on the Ordinary and Higher level SEC papers at the short-question tier, and it provides the arithmetic engine for nearly every other strand. Under-preparing Number costs candidates disproportionately on the first 30 to 40 marks of the paper because the questions look easy enough to skim but reward careful sign work, percentage-to-decimal conversion, and surd manipulation.

> Verify live paper patterns and specification details on curriculumonline.ie and examinations.ie before planning revision.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Weight & Frequency**: Rated 4/5 - appears on every paper, with at least three short questions and one extended-response item in the financial mathematics section. Confirm the live mark allocation on the latest SEC specimen paper.
- **Timing Goal**: Short Number questions should average under 90 seconds; financial mathematics extended-response items should sit in the 4 to 6 minute band.
- **Core Principle**: Master four conversions and one manipulation: (1) percentage to decimal and back, (2) fraction to decimal, (3) ratio into a single-line equation, (4) currency units, and (5) the laws of indices for surd simplification.
- **Laws of indices**: *a^m × a^n = a^(m+n)*, *a^m / a^n = a^(m-n)*, *(a^m)^n = a^(mn)*, *a^0 = 1*, *a^(-n) = 1/a^n*. These collapse most surd and standard-form work to a single line.
- **Surds**: Rationalise the denominator (multiply top and bottom by the conjugate for binomials; by the bare surd for monomials). Do not approximate √2 as 1.414 unless the question asks for a decimal.
- **Compound interest**: A = P(1 + r/n)^(nt) for annual compounding (n = 1). APR is the advertised rate; AER is the compounded rate including intra-year periods - never equate the two in financial questions.
- **Percentage change**: "Increase by 12%" means multiply by 1.12, not add 12. "Decrease by 12%" means multiply by 0.88. The trap is sign direction.
- **Answer Verification**: For finance questions, sanity-check the answer: a €10,000 sum at 4% for 3 years must be in the €11,000 to €13,000 range, not €40,000.

#### Examiner traps

- Forgetting to convert a percentage to a decimal before plugging into a formula (4% means 0.04, not 4).
- Treating AER and APR as interchangeable in a comparison question - they are equal only when compounding is annual.
- Leaving a surd in a denominator and losing the "rationalise" mark.
- Computing a percentage of a percentage without re-multiplying the full chain (e.g. a 20% increase followed by a 20% decrease is not a wash; it is a 4% net decrease).
- Confusing the original principal with the future value when solving for the rate in a compound-interest question.
- Misreading "per annum" - the SEC defaults to annual compounding unless the question explicitly says otherwise.

#### 20-minute triage checklist

- [ ] Can you convert any percentage to a decimal and back without hesitation?
- [ ] Do you know the difference between simple and compound interest, and when each formula applies?
- [ ] Can you rationalise the denominator in a single step for both √a and a + √b?
- [ ] Have you practiced "find the percentage change from A to B" as both increase and decrease scenarios?

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Conceptual framework and solving methodology

Number questions on the SEC paper are arithmetic in form but reward three disciplined habits. Apply this scaffold to every short or extended Number item:

1. **Identify the rate type and the time horizon**:
   Decide whether the question is about simple interest (use I = Prt), compound interest (A = P(1 + r/n)^(nt)), depreciation (same compound-interest formula with a negative rate, or A = P(1 - r)^t), or a one-off percentage change. The time horizon (single year, multiple years, intra-year periods) selects the formula.

2. **Convert units before substituting**:
   A percentage of 4.5% becomes 0.045. A time of 18 months becomes 1.5 years. A currency unit of €5.20 does not need conversion, but a rate of 6.5% per quarter becomes 0.065 per quarter - convert the *time* to match.

3. **Execute the calculation with a single rounding step**:
   Round only at the end. For financial questions, keep four decimal places mid-calculation and round the final answer to two decimal places (the SEC convention for currency). For surds, leave the exact form unless told to evaluate.

4. **Verify against a sanity bound**:
   For a savings account, the answer must be greater than the principal and less than a 100% annual return. For a depreciation question, the answer must be smaller than the original. If the number is outside the bound, the rate or sign is wrong.

#### Detailed worked example

**Problem Context**:
A compound-interest question typical of the Higher level paper.

**Item Prompt**:
Sarah invests €8,000 in a savings account that pays 3% per annum, compounded annually. **(a)** Find the value of her investment after 4 years, correct to the nearest euro. **(b)** Find the minimum number of complete years for the investment to exceed €10,000. **(c)** If the bank instead offered 2.9% compounded monthly, would the investment exceed €10,000 sooner, later or at the same time?

**Step-by-Step Solution**:
- **Step 1 (Decode)**: (a) is a direct compound-interest calculation; (b) is an inequality solve for time; (c) is a comparison requiring a second computation.
- **Step 2 (Represent)**: A = P(1 + r)^t. For (a): A = 8000 × (1 + 0.03)^4. For (b): find smallest integer t with 8000 × 1.03^t > 10000. For (c): A = 8000 × (1 + 0.029/12)^(12t) for each integer t.
- **Step 3 (Execute)**:
  - (a) 1.03^4 = 1.12550881. A = 8000 × 1.12550881 = 9004.07, so €9,004 to the nearest euro.
  - (b) 1.03^t > 1.25 (since 10000/8000 = 1.25). Take logs: t > ln(1.25)/ln(1.03) = 0.2231/0.0296 = 7.54. Minimum whole years = 8.
  - (c) Try t = 7 with monthly compounding: A = 8000 × (1 + 0.029/12)^(84) = 8000 × (1.0024167)^84 ≈ 8000 × 1.2250 ≈ €9,800. So at t = 7 the monthly rate is still under €10,000. Try t = 8: 8000 × (1.0024167)^96 ≈ 8000 × 1.2572 ≈ €10,058. So at t = 8 it does exceed €10,000 - same minimum whole years. Compare growth rates: monthly at 2.9% produces a higher effective rate (AER slightly above 2.9%) so for large t it will overtake, but for integer t = 8 the comparison is essentially a draw.
- **Step 4 (Verify)**: (a) sanity check: 3% per year for 4 years is roughly 12% growth, so €8,000 × 1.12 ≈ €8,960 - matches. (b) sanity check: 8 years at 3% is ~27% growth, just above 25%. (c) The AER is approximately 2.93%, so the monthly account grows faster, but at the 8-year mark it barely overtakes. Answer: later or same time depending on whether you count partial years.
- **Conclusion**: Three marks from one Number question - the calculation mark, the inequality mark, and the comparison mark.

---

### 🔴 Deep Dive — Mastery & Edge Cases (3mo–2yr)

#### Advanced variations and high-difficulty edge cases

At Distinction level, the Number strand stops testing arithmetic and starts testing reasoning over numerical claims. Practice these four patterns:

- **Iterative percentage changes**: A quantity rises by *a*%, then falls by *b*%, then rises by *c*%. The net multiplier is (1 + a/100)(1 - b/100)(1 + c/100), not (a - b + c)%. Verify the final multiplier is in the right direction.
- **Reverse-engineering a rate from a final value**: "At what annual rate, compounded annually, does €5,000 grow to €7,500 in 6 years?" Solve *r* = (A/P)^(1/t) - 1. The trap is forgetting to subtract 1 after taking the t-th root.
- **Comparing APR offers**: An offer of "5.0% APR compounded monthly" has AER = (1 + 0.05/12)^12 - 1 ≈ 5.116%. The mark scheme usually expects this expansion, not a 5% flat comparison.
- **Hire purchase and depreciation**: The monthly repayment on a loan is a separate formula (repayment = P × r(1+r)^n / ((1+r)^n - 1), where r is the monthly rate and n is the number of months). Confusing this with the compound-interest formula is the most common Distinction-borderline error.

#### Systematic drill schedule

A focused four-week Number-strand pass before mocks:

- **Week 1**: Practice 10 percentage-change questions per day, mixing increase, decrease, and reverse-calculation (find the original price given a final price and percentage change). Drill until the conversion to 1 + r/100 is automatic.
- **Week 2**: Work 8 compound-interest questions, varying between "find A given P, r, t", "find t given A, P, r", and "find r given A, P, t". Build a one-page formula card for each direction.
- **Week 3**: Cover surds and indices - simplify, expand, rationalise, and evaluate (where asked). Focus on the difference between *a*^(1/2) and √*a*, and the rules for negative and fractional exponents.
- **Week 4**: Tackle 5 financial-mathematics extended-response items per sitting, timing yourself strictly. Mark each answer against the SEC mark scheme on examinations.ie and identify which marks are method marks vs accuracy marks.
