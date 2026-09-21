---
exam: ncea-level-2
examName: NCEA Level 2 (Mathematics)
subject: mathematics-l2
subjectName: Mathematics
topic: mathl2-003
topicName: "Apply sequences and series in solving problems (91258)"
weight: 2
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply sequences and series in solving problems (91258) — NCEA Level 2 Mathematics Notes

Achievement Standard 91258 is a small but tightly-scoped internal standard at NCEA Level 2, carrying 2 credits. It focuses on arithmetic and geometric sequences and series, including explicit and recursive forms, sum to n terms, and applications to growth and decay problems. The content here underpins financial mathematics and exponential growth problems in later Level 2 standards and the Level 3 calculus stream.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **2 credits**, internally assessed by the school, NZQA moderated.
- Topics: arithmetic sequences (constant difference), geometric sequences (constant ratio), explicit and recursive forms, sum to n terms (arithmetic and geometric), applications to growth, decay, and finance.
- **Merit** requires relational thinking — connecting recursive and explicit forms, choosing the right formula for the problem.
- **Excellence** requires extended abstract thinking — generalising to compound interest, comparing arithmetic and geometric growth.

#### Examiner traps

- Using the arithmetic formula when the common difference changes mid-sequence (the formula no longer applies).
- Confusing the sum formula with the nth-term formula — they are different.
- Forgetting that the first term is t₁, not t₀ (the standard starts at 1).
- Sign errors when the common ratio is negative (e.g., r = −2 alternates signs).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Arithmetic sequences

An arithmetic sequence has a constant difference d between consecutive terms. Examples: 2, 5, 8, 11, 14, … (d = 3); 100, 90, 80, 70, … (d = −10).

**Explicit form:**

tₙ = t₁ + (n − 1)d

**Recursive form:**

t₁ = a (given), tₙ = tₙ₋₁ + d for n ≥ 2

**Sum to n terms:**

Sₙ = n/2 × (2t₁ + (n − 1)d) = n/2 × (t₁ + tₙ)

Either form gives the same result. The first is useful when t₁ and d are known; the second when t₁ and tₙ are known.

#### Geometric sequences

A geometric sequence has a constant ratio r between consecutive terms. Examples: 2, 6, 18, 54, … (r = 3); 100, 50, 25, 12.5, … (r = 0.5).

**Explicit form:**

tₙ = t₁ × rⁿ⁻¹

**Recursive form:**

t₁ = a (given), tₙ = r × tₙ₋₁ for n ≥ 2

**Sum to n terms (when r ≠ 1):**

Sₙ = t₁ × (1 − rⁿ) / (1 − r) = t₁ × (rⁿ − 1) / (r − 1)

Both forms are equivalent; the first is preferred when r < 1 because the numerator and denominator are positive, the second when r > 1.

**Sum to infinity (when −1 < r < 1):**

S_∞ = t₁ / (1 − r)

The geometric sum converges to a finite value when |r| < 1; diverges otherwise.

#### Applications to growth and decay

**Compound growth:** value after n periods = principal × (1 + r)ⁿ, where r is the per-period growth rate.

**Compound decay:** value after n periods = principal × (1 − r)ⁿ, where r is the per-period decay rate (so the per-period multiplier is 1 − r).

**Inflation:** real value = nominal value / (1 + inflation rate)ⁿ.

#### Connecting recursive and explicit forms

To convert from recursive (t₁ = a, tₙ = r × tₙ₋₁) to explicit (tₙ = a × rⁿ⁻¹):

- t₁ = a = a × r⁰
- t₂ = r × t₁ = r × a = a × r¹
- t₃ = r × t₂ = r² × a = a × r²
- … pattern: tₙ = a × rⁿ⁻¹.

The explicit form is much faster for calculating t₁₀₀; the recursive form is much faster for simulating a sequence one term at a time.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### When arithmetic and geometric meet

A common Excellence-grade problem combines arithmetic and geometric sequences:

- "A sequence starts at 5 and grows by 3 each term for 10 terms, then grows by 12% each term for the next 10 terms. Find the 20th term."

The 10th arithmetic term: t₁₀ = 5 + 9 × 3 = 32. The 11th term (first geometric) is 32 × 1.12 = 35.84. The 20th term is t₁₀ × 1.12⁹ × (since the geometric starts at term 10 in the explicit, and we need 9 more multiplications): 32 × 1.12⁹ ≈ 32 × 2.7731 ≈ 88.74.

#### Financial applications

**Mortgage-style:** A loan of P at monthly interest rate r with monthly repayment A has balance after n months: balance = P × (1 + r)ⁿ − A × ((1 + r)ⁿ − 1)/r.

**Savings-style:** A deposit of D made each year into an account earning r per year grows to D × ((1 + r)ⁿ − 1)/r after n years.

These are both geometric sums in disguise, and the same formula applies.

#### Common misconceptions (and the correction)

- "Sum to n is the same as nth term." No — tₙ is the nth term; Sₙ is the sum of the first n terms.
- "Geometric series always diverge." Only when |r| ≥ 1; for |r| < 1 they converge to t₁/(1 − r).
- "Arithmetic and geometric are the same." No — arithmetic has a constant difference; geometric has a constant ratio.
- "t₀ = 0." In NCEA, sequences start at t₁, not t₀.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document and clarifications on ncea.education.govt.nz. Re-check the live version of 91258 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 2 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics. Awarding body: NZQA.*
