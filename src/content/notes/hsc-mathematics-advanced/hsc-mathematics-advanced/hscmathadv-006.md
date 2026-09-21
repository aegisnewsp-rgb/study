---
exam: hsc-mathematics-advanced
examName: HSC Mathematics Advanced (NESA 2024)
subject: hsc-mathematics-advanced
subjectName: Mathematics Advanced
topic: hscmathadv-006
topicName: Sequences and Series
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Sequences and Series — HSC Mathematics Advanced (NESA 2024) Notes

Sequences and Series is one of the seven Areas of Study in the HSC Mathematics Advanced syllabus. It is a Year 12 topic, taught after financial mathematics. Arithmetic sequences, geometric sequences and their sums are essential for financial mathematics (compound interest, depreciation) and for understanding limits of series.

> Re-check the live specification details and any in-year assessment changes on https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Sequence.** An ordered list of numbers a₁, a₂, a₃, … Explicit form: a_n = f(n). Recursive form: a_(n+1) = f(a_n).
- **Arithmetic sequence.** Common difference d. Explicit form: a_n = a + (n − 1)d. Sum of first n terms: S_n = n/2 × (2a + (n − 1)d) = n/2 × (a + a_n).
- **Geometric sequence.** Common ratio r. Explicit form: a_n = a r^(n − 1). Sum of first n terms: S_n = a(1 − rⁿ)/(1 − r) for r ≠ 1.
- **Sum to infinity (geometric).** S_∞ = a/(1 − r) provided |r| < 1.
- **Recurrence relations.** a_(n+1) = r a_n with a₁ = a gives a geometric sequence a_n = a r^(n−1).

#### Examiner traps

- Confusing arithmetic and geometric sequences — arithmetic has constant difference, geometric has constant ratio.
- Using the sum formula for |r| ≥ 1 — the geometric sum S_n converges only when |r| < 1; for |r| ≥ 1 the sum S_∞ diverges.
- Forgetting to convert "n-th term" indices when applying formulas — a₁ vs a_0 matters.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Arithmetic sequences

An arithmetic sequence has a constant common difference d between consecutive terms: a_(n+1) − a_n = d for all n.

Explicit form: a_n = a₁ + (n − 1)d.

To find d given a_n and a_m: d = (a_n − a_m)/(n − m).

Sum of the first n terms:
S_n = n/2 × (2a₁ + (n − 1)d) = n/2 × (a₁ + a_n).

To find n given S_n, a₁ and d: solve the quadratic n² d + n(2a₁ − d) − 2 S_n = 0 and take the positive integer root.

#### Geometric sequences

A geometric sequence has a constant common ratio r between consecutive terms: a_(n+1)/a_n = r for all n (provided a_n ≠ 0).

Explicit form: a_n = a₁ × r^(n − 1).

To find r given a_n and a_m: r = (a_n/a_m)^(1/(n − m)).

Sum of the first n terms:
S_n = a₁ × (1 − rⁿ)/(1 − r) for r ≠ 1.

For r = 1: S_n = n × a₁.

Sum to infinity (provided |r| < 1):
S_∞ = a₁/(1 − r).

#### Applications

Compound interest: if $P is invested at rate r per period for n periods, the future value is A = P(1 + r)ⁿ (compound interest) or A = P(1 + r/n)^(nt) (compound interest with n compounding periods per year).

Depreciation: an asset of value V₀ depreciating at rate r per period has value V_n = V₀(1 − r)ⁿ.

Annuities: an annuity of $M per period for n periods at rate r per period has present value PV = M × (1 − (1+r)⁻ⁿ)/r.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Sequences and Series links Algebra to Finance

- **Sequences** are the discrete analogue of functions. a_n corresponds to f(n). Geometric sequences with |r| < 1 are the discrete analogue of exponential decay.
- **Series sums** are the discrete analogue of integration. The geometric series sum a/(1 − r) corresponds to the integral of e^(−kt).
- **Financial Mathematics** is almost entirely built on arithmetic and geometric sequences. Compound interest is a geometric sequence; simple interest is an arithmetic sequence; depreciation is a geometric sequence with |1 − r| < 1.

#### Exam technique

- For "find the term" questions, identify whether the sequence is arithmetic or geometric first, then write down the appropriate formula.
- For "find n" questions, write out the formula, substitute, and solve. For arithmetic, it's a linear equation; for geometric, it's a logarithmic equation.
- For "sum to infinity" questions, check |r| < 1 first. If |r| ≥ 1, no sum to infinity exists.

#### Common misconceptions (and the correction)

- "Geometric sequence terms are added by r." No — geometric terms are multiplied by r. The common ratio r multiplies each term to get the next.
- "Sum to infinity is always finite." Only for |r| < 1. For |r| ≥ 1, the sum diverges.
- "Arithmetic and geometric are the same." No — arithmetic has constant difference, geometric has constant ratio.
- "The recurrence a_(n+1) = a_n + 5 is geometric." No — it's arithmetic with d = 5. The recurrence a_(n+1) = 2 a_n is geometric with r = 2.

#### Specification reference

This Area of Study is assessed in the HSC Mathematics Advanced Year 12 examination. Higher-tariff questions combine sequences and series with financial mathematics (compound interest, depreciation, annuities) and with limiting sum problems. Confirm the live assessment weighting and any tier-specific exclusions on curriculum.nsw.edu.au for the current specification before final revision.

---

*Last updated 2026-09-20. Source: NSW Mathematics Advanced 11–12 Syllabus (2024), https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview. Awarding body: NSW Education Standards Authority (NESA). Tier rules, calculator policy and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*