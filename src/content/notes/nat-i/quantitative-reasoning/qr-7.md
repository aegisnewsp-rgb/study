---



exam: nat-i
examName: NAT-I (NTS)
subject: quantitative-reasoning
subjectName: Quantitative Reasoning
topic: qr-7
topicName: Simple and Compound Interest
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.135712"
lastUpdated: "2026-06-21"
diagramPrompt: "Educational diagram illustrating Simple and Compound Interest with clear labels, white background, exam-style illustration"




---

# Simple and Compound Interest

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Simple Interest (SI)** is computed only on the original **Principal (P)** at a fixed **Rate (R)** per annum over **Time (T)** in years, using **SI = (P × R × T) / 100**, with the **Amount A = P + SI**. **Compound Interest (CI)** adds each year's interest back into the principal before recalculating, so **A = P(1 + R/100)^T** and **CI = A − P**. For NAT-I Quantitative Reasoning, expect 1–2 questions (≈3% weight) that swap P, R, T, A, or CI in the formula and ask you to solve. Remember: for T = 1 year, SI = CI; for T ≥ 2 years, CI > SI. Convert months to years (6 months = 0.5 yr) before substituting, and apply SI on the compounded amount for the leftover fraction.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Formulas
- **Simple Interest:** SI = (P × R × T) / 100, so **A = P(1 + RT/100)**
- **Compound Interest (annual):** A = P(1 + R/100)^T, and **CI = P(1 + R/100)^T − P**
- **Compounding n times per year:** A = P(1 + R/(100n))^(nT)
- **2-year CI − SI shortcut:** Difference = P(R/100)^2
- **Effective annual rate:** (1 + R/(100n))^n − 1

#### How the Two Differ
In SI, the yearly interest is constant: every year earns (P·R/100), so the total grows **linearly** with time. In CI, year-1 interest is added to P, year-2 interest is calculated on the new balance, and so on — the amount grows **geometrically**. This is why a Rs 10,000 deposit at 10% for 3 years yields SI = Rs 3,000 but CI ≈ Rs 3,310.

#### Worked Relationship
Let P = 10,000, R = 10%, T = 3 years.
- SI = (10000 × 10 × 3)/100 = **Rs 3,000** → A = 13,000
- CI = 10000 × (1.1)^3 − 10000 = 10000 × 1.331 − 10000 = **Rs 3,310** → A = 13,310
- Difference = 310 = P(R/100)^2 × (something) — the shortcut P(R/100)^2 gives the 2-year difference only.

#### Typical NAT-I Question Types
1. **Direct substitution** — given three of {P, R, T, A, CI}, find the fourth.
2. **Rate/time swap** — "at what rate will Rs 5,000 become Rs 6,050 in 2 years compounded annually?"
3. **Fractional periods** — compound for whole years, then apply SI on the resulting amount for the remaining months.
4. **Population/depreciation** — replace R with a growth or decay percentage in the CI formula.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Mechanisms
**Fractional time** (e.g., 2 years 6 months) is the most common trap. The standard NAT-I convention is: compound for the **whole years first** (using the CI formula), then apply **simple interest on the resulting amount** for the leftover fraction. A shortcut: compute A = P(1 + R/100)^2, then A_final = A[1 + (R/100) × 0.5]. Plugging 2.5 straight into (1 + R/100)^2.5 is wrong unless the question explicitly says interest compounds every month at 1/12 of the rate.

**Compounding frequency** matters when the question states "compounded half-yearly" or "quarterly." Divide R by n and multiply T by n: A = P(1 + R/(100·2))^(2T) for half-yearly. The **effective annual rate** is the single rate that, compounded once a year, would produce the same return.

**Equal annual installments:** If X is paid at the end of each year for T years to settle a loan of P, then **P = X[1 − (1 + R/100)^(−T)] / (R/100)**. Solve for X or P by substitution. This is a common NAT-I twist on the basic formula.

#### Common Mistakes
- Dividing by 100 twice (once for the rate, once for the percent) and halving the answer.
- Treating **Amount** as the interest — CI is always A − P.
- Ignoring the instruction "compounded half-yearly" and using annual compounding.
- For T = 1 year, students sometimes subtract SI from CI assuming a difference exists — they are equal.

#### Practice Prompts
1. A sum of Rs 8,000 at 12% per annum compounded annually for 18 months yields what amount? (Compute 1 year compounded → apply SI for 6 months.)
2. A loan of Rs 50,000 is repaid in 5 equal annual installments at 10% compound interest. Find the installment value using the PV annuity formula.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
