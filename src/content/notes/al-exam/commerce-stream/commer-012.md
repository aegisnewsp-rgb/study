---
exam: al-exam
examName: A/L Examination (Sri Lanka)
subject: commerce-stream
subjectName: "Commerce-Stream"
topic: commer-012
topicName: Business Mathematics
weight: 3
country: srilanka
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-15"
---

# Business Mathematics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Business Mathematics for the A/L Commerce stream blends commercial arithmetic (interest, annuities, hire-purchase, depreciation) with algebra tools (matrices, linear programming) used in real business decisions. The Department of Examinations, Sri Lanka prescribes these units in the A/L Commerce syllabus. Every formula below is examinable, in many papers in MCQs and structured 10-mark questions.

| Term | Formula (with variables & SI/standard unit) |
|---|---|
| Simple Interest | SI = (P × R × T) / 100, P in Rs., R = annual rate %, T = years |
| Compound Interest | A = P(1 + r/100)^n, A & P in Rs., r = annual rate %, n = years |
| Straight-Line Depreciation | D_year = (C − S) / N, C, S in Rs., N = useful life (years) |
| Reducing-Balance Depreciation | V_n = C(1 − r)^n, V_n & C in Rs., r = rate (decimal), n = years |
| Hire-Purchase Instalment | I = [(P − D)/n] + [(P − D) × r/100], all in Rs., r = annual % on balance |
| Laspeyres Index | I = (Σ p₁q₀ / Σ p₀q₀) × 100, dimensionless |

> 💡 **High-Yield Memory Hook:** **"SCRAP-LI"** — Simple Interest, Compound, Reducing-balance, Annuity, Profit/Loss — then Linear-programming, Index. Use this to recall the seven most-tested units in the A/L paper. For depreciation, remember **"S-L is Straight on cost, R-B is Reducing on book value"** so you never mix methods.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Formula Set with Dimensional Check

| # | Formula | Variables & Units | Dimensions |
|---|---|---|---|
| 1 | A = P(1 + r/100)^n | P = principal (Rs.), A = maturity amount (Rs.), r = annual rate %, n = years | [M] in Rs. |
| 2 | PV of Annuity = A × [(1 − (1+i)^(−n)) / i] | A = payment (Rs.), i = rate per period (decimal), n = periods | [M] in Rs. |
| 3 | V_n = C(1 − r)^n | C = cost (Rs.), V_n = book value after n years (Rs.), r = decimal rate | [M] in Rs. |
| 4 | I = (P − D)/n + [(P − D) × r/100] | P = cash price, D = down payment, n = instalments, r = annual % | [M] in Rs. |
| 5 | Laspeyres Index = (Σp₁q₀ / Σp₀q₀) × 100 | p = price (Rs.), q = quantity (units), base year 0, current 1 | dimensionless |

#### Concept Comparison Matrix

| Feature | Simple Interest | Compound Interest | Annuity-Ordinary | Annuity-Due |
|---|---|---|---|---|
| Interest charged on | Principal only | Principal + accumulated interest | Each payment earns interest for n−1 periods | Each payment earns for n periods |
| Formula | SI = PRT/100 | A = P(1 + r/100)^n | PV = A[(1−(1+i)^(−n))/i] | PV_due = PV_ord × (1+i) |
| Typical A/L use | Short-term loans | Savings, fixed deposits | Loans repaid at period end | Insurance premiums paid at start |
| Common trap | Forgetting to convert months → years | Using r as decimal but forgetting ÷100 | Treating ordinary as due | Forgetting the (1+i) multiplier |

| Feature | Straight-Line Depreciation | Reducing-Balance Depreciation |
|---|---|---|
| Charge each year | Equal amount (C−S)/N | Percentage of *previous book value* |
| Annual charge trend | Constant | Higher in early years, falls later |
| Formula | D = (C−S)/N | V_n = C(1−r)^n |
| Tax/audit use | Simpler, predictable | Matches asset's actual wear pattern |

#### Standard Problem Types to Practise

1. Compute maturity amount under CI with annual, semi-annual, quarterly compounding.
2. Draw a depreciation schedule for 5 years under both methods and compare book values.
3. Build an amortisation table for an annuity and find total interest paid.
4. Solve a 2-variable LPP graphically: corner-point method on objective Z = ax + by.
5. Invert a 3×3 matrix or apply Cramer's rule to a 3-equation business system.

#### 🎯 Exam-Level Worked Problem

**Question:** A piece of machinery costs Rs. 480,000 and is depreciated at 15% per year on the reducing-balance method. After 4 years the firm sells it for Rs. 200,000. Calculate (a) the book value at the end of year 4, (b) the total depreciation charged over the 4 years, and (c) the profit or loss on sale.

#### Solution:
- (a) Book value V₄ = 480,000 × (1 − 0.15)⁴ = 480,000 × (0.85)⁴.
 0.85² = 0.7225; 0.85⁴ = 0.52200625.
 V₄ = 480,000 × 0.52200625 = **Rs. 250,563** (to the nearest rupee).
- (b) Total depreciation = C − V₄ = 480,000 − 250,563 = **Rs. 229,437**.
- (c) Sale price = Rs. 200,000 < Book value Rs. 250,563, so **Loss on sale = Rs. 50,563**.

> ⚠️ **Examiner Trap:** Students in many papers compute 15% of 480,000 = 72,000 every year and subtract, getting a straight-line-style answer (Rs. 192,000). That ignores the *reducing* balance. Always multiply last year's book value by (1 − 0.15), never by the original cost.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Linear Programming and Matrix Edge Cases

Linear Programming Problems (LPPs) in the A/L paper in most keys have two decision variables x, y with 3–4 linear constraints. The feasible region is a polygon; the optimal value of Z = ax + by occurs at a **vertex (corner point)**. Edge cases examiners exploit:

1. **Unbounded feasible region** — if no closing constraint is given, Z can grow without limit, so report "no finite optimum".
2. **Multiple optimal solutions** — when the objective line coincides with a constraint edge; report *any* point on that edge.
3. **Infeasible region** — when constraints contradict (e.g. x + y ≤ 4 and x + y ≥ 10). State "no feasible solution".
4. **Degenerate vertex** — three constraints meeting at one point; do not skip it from evaluation.

For matrices, the A/L syllabus tests up to 3×3 systems. Use X = A⁻¹B when det(A) ≠ 0; otherwise apply Cramer's rule. A classic trap: dividing by zero when two rows are proportional — flag **"no unique solution"**.

#### Annuity, Trade vs. Cash Discount, and Time-Series Nuances

- **Annuity-Due vs Ordinary**: ordinary payments fall at period end, due payments fall at period start. Convert using PV_due = PV_ord × (1 + i).
- **Trade discount** is deducted from the list price *before* any cash discount applies. **Cash discount** is then calculated on the *already reduced* net price. Never add the two percentages.
- **Time-series components** decompose a series Y = T + S + C + I. For A/L, questions in most keys isolate the **secular trend** using moving averages (odd period length) or the **seasonal index** = (seasonal average / grand average) × 100.

#### Advanced Practice Prompts

1. A loan of Rs. 1,000,000 is repaid by equal annual instalments over 5 years at 12% CI. Construct the amortisation table and find the total interest paid. *(Hint: instalment A = P × i / [1 − (1+i)^(−n)] = Rs. 277,410 approx.)*
2. Solve the LPP: Maximise Z = 6x + 4y subject to x + y ≤ 80, 2x + y ≤ 120, x, y ≥ 0. Identify all corner points and any degeneracy. *(Hint: corner points (0,0), (60,0), (40,40), (0,80); Z values 0, 360, 400, 320; optimum Z = 400 at (40, 40).)*

> ⚠️ **Examiner Trap:** In LPP, students in many papers read the inequality direction backwards (≥ instead of ≤), which inverts the feasible region. Always re-read the original constraint word-for-word before plotting.

> 📌 **Formula Check:** All money variables carry unit **Rs.**; rate variables must be decimals in (1 ± r)^n but percentages in SI/HP instalment formulas. Convert consistently before substitution.

---

## Continue your study

- **[View this topic in your A/L Examination (Sri Lanka) roadmap](/roadmap/?exam=al-exam&duration=1mo)** — see where "Business Mathematics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=al-exam&duration=1d)** — 1-day sprint covering highest-weight topics
- **[A/L Examination (Sri Lanka) exam overview](/exams/al-exam/)** — pattern, eligibility, and syllabus
- **[All Commerce-Stream notes](/notes/al-exam/commerce-stream/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
