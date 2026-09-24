---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-004
topicName: Sequences and Series
weight: 4
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Sequences and Series — A-Level Mathematics (AQA 7357) Notes

Sequences and Series is section D of the AQA 7357 specification. The section covers arithmetic and geometric sequences, sigma notation, recurrence relations, and the binomial expansion for positive integer and rational n (with the validity condition for approximation). Sequences and series questions on AQA papers are usually short — 3 to 6 marks — but they cover a lot of ground per question, mixing the formula application with sigma notation and the convergence condition for the binomial expansion. Mastering sigma notation early saves time on both the series sums and the binomial expansion.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Arithmetic sequence

A sequence is arithmetic if consecutive terms differ by a constant common difference d. The nth term is aₙ = a + (n − 1)d. The sum of the first n terms is Sₙ = n/2 · (2a + (n − 1)d) = n/2 · (a + l) where l is the last term.

#### Geometric sequence

A sequence is geometric if consecutive terms have a constant common ratio r. The nth term is aₙ = ar^(n−1). The sum of the first n terms is Sₙ = a(1 − rⁿ)/(1 − r) for r ≠ 1.

#### Sigma notation

Σ (from k=1 to n) of f(k) means f(1) + f(2) + … + f(n). Σ k = n(n+1)/2. Σ k² = n(n+1)(2n+1)/6. Σ k³ = (n(n+1)/2)². These three are the standard sums you should be able to evaluate without working.

#### Binomial expansion

For (a + b)ⁿ where n is a positive integer: expand using Pascal's triangle or the formula with binomial coefficients C(n, r) = n! / (r! (n − r)!). For rational n (including negative), the expansion is an infinite series valid only when |b/a| < 1.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Arithmetic sequences and series

An arithmetic sequence has constant first difference: a, a + d, a + 2d, a + 3d, … The nth term is:

aₙ = a + (n − 1)d.

The sum of the first n terms is:

Sₙ = n/2 · (2a + (n − 1)d) = n(a + l)/2,

where l is the nth (last) term. Use the first form when a and d are given; use the second when the first and last terms are given.

**Worked example.** Find the sum of the first 20 terms of the arithmetic series 5, 8, 11, 14, ….

a = 5, d = 3. S₂₀ = 20/2 · (2·5 + 19·3) = 10 · (10 + 57) = 10 · 67 = 670.

#### Geometric sequences and series

A geometric sequence has constant common ratio: a, ar, ar², ar³, … The nth term is:

aₙ = ar^(n−1).

The sum of the first n terms (for r ≠ 1) is:

Sₙ = a(1 − rⁿ)/(1 − r).

For r > 1, it is cleaner to write Sₙ = a(rⁿ − 1)/(r − 1). Both forms are equivalent.

**Sum to infinity.** For |r| < 1, S∞ = a/(1 − r). For |r| ≥ 1, the series diverges and has no finite sum.

**Worked example.** Find the sum to infinity of 1, 1/2, 1/4, 1/8, ….

a = 1, r = 1/2. |r| < 1, so S∞ = 1/(1 − 1/2) = 2.

#### Sigma notation

Σ is the Greek capital sigma, used as a shorthand for "sum the following expression". The bounds under and over sigma tell you where to start and stop:

Σ (k=1 to n) k² = 1² + 2² + 3² + … + n².

The three standard sums are:

- Σ k = n(n + 1)/2.
- Σ k² = n(n + 1)(2n + 1)/6.
- Σ k³ = (n(n + 1)/2)².

To evaluate Σ from k=1 to n of (3k² − 2k + 5): split into 3 Σ k² − 2 Σ k + 5 Σ 1, then substitute the standard sums (Σ 1 = n).

**Worked example.** Evaluate Σ (k=1 to 10) (2k + 1).

= 2 Σ k + Σ 1 = 2 · 10·11/2 + 10 = 110 + 10 = 120.

#### Recurrence relations

A recurrence relation defines aₙ in terms of earlier terms. The first term (or first few terms) is given explicitly, and the rule generates the rest.**

**Worked example.** Given a₁ = 3, aₙ₊₁ = 2aₙ − 1, find a₄.

a₂ = 2·3 − 1 = 5. a₃ = 2·5 − 1 = 9. a₄ = 2·9 − 1 = 17.

Some recurrences have a closed form (a direct formula for aₙ) — for instance, a₁ = 3, aₙ₊₁ = 2aₙ has closed form aₙ = 3 · 2^(n−1). Solving a recurrence in closed form is the link to series-sum-by-recognising-geometric-form questions.

#### Binomial expansion for positive integer n

For (a + b)ⁿ where n is a positive integer:

(a + b)ⁿ = Σ (r=0 to n) C(n, r) a^(n−r) b^r.

The coefficient C(n, r) = n! / (r! (n − r)!) is the number of ways to choose r positions from n. Pascal's triangle gives the coefficients for small n:

- n = 0: 1
- n = 1: 1 1
- n = 2: 1 2 1
- n = 3: 1 3 3 1
- n = 4: 1 4 6 4 1

**Worked example.** Expand (2 + x)⁴.

(2 + x)⁴ = 16 + 4·8·x + 6·4·x² + 4·2·x³ + x⁴ = 16 + 32x + 24x² + 8x³ + x⁴.

#### Binomial expansion for rational n

For n a negative integer or fraction (like −1/2 or 1/3), the expansion is an infinite series:

(1 + x)ⁿ = 1 + nx + n(n−1)/2! · x² + n(n−1)(n−2)/3! · x³ + …

**Validity condition.** The expansion is valid only when |x| < 1. This is essential at A-level: the expansion is an approximation, and outside the validity range the series diverges or gives nonsense.

**Worked example.** Find the first three terms in the expansion of (1 + x)^(−1/2) and state the range of validity.

Using the binomial formula:

(1 + x)^(−1/2) = 1 + (−1/2)x + (−1/2)(−3/2)/2! · x² + … = 1 − x/2 + 3x²/8 − …

The series is valid for |x| < 1, i.e. −1 < x < 1.

**Worked example — expansion of (2 + 3x)^(−1).**

Factor out 2: (2 + 3x)^(−1) = 2^(−1) · (1 + 3x/2)^(−1) = (1/2) · (1 + (−1)(3x/2) + (−1)(−2)/2 · (3x/2)² + …) = (1/2)(1 − 3x/2 + 9x²/8 − …).

Validity: |3x/2| < 1, so |x| < 2/3.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why series sums need care with sign

The formula Sₙ = a(1 − rⁿ)/(1 − r) is the "compact" form. For r > 1, multiplying numerator and denominator by −1 gives a(rⁿ − 1)/(r − 1), which avoids a negative denominator and produces a clean positive sum. Using the compact form with r > 1 gives a negative result that, in absolute value, is correct but is a sign trap.

A common exam question asks for the sum to infinity of a geometric series where a is negative and r is positive. The formula S∞ = a/(1 − r) still applies: with a = −2 and r = 1/2, S∞ = −2/(1/2) = −4. The series converges to −4 from below.

#### Worked pattern — sum of arithmetic–geometric series

For a series that is both arithmetic and geometric, like Σ r^k from k = 0 to n, recognise the form (geometric) and apply the geometric sum. For a series that is neither, like Σ k r^k, the technique is:

1. Let S = Σ k r^k.
2. Write rS = Σ k r^(k+1) = Σ (k+1) r^(k+1) − Σ r^(k+1) (index shift).
3. Subtract: S − rS = Σ r^k − Σ r^(k+1) − Σ (k+1) r^(k+1) + Σ k r^(k+1), simplify, solve for S.

This is a standard AQA technique for sum-of-r^k-with-r-weight questions, and it sets up the bridge to A-level Further Mathematics.

#### Worked pattern — using binomial expansion as an approximation

When |x| is small (say |x| < 0.1), the higher-order terms in (1 + x)ⁿ are tiny. Truncating after the first two or three terms gives an approximation with controllable error.

**Worked example.** Use the expansion of (1 + x)^(1/3) up to the x² term to estimate ∛(1.008), and estimate the error.

Put x = 0.008. (1 + x)^(1/3) ≈ 1 + (1/3)x − (1/9)x² = 1 + 0.008/3 − (0.008)²/9 ≈ 1 + 0.002667 − 0.0000071 ≈ 1.002660.

The first omitted term is +(1/81)x³ ≈ +5.3·10⁻¹⁰, which is far smaller than the precision we care about. The approximation is good to about 7 significant figures.

#### Common misconceptions (and the correction)

- "Sum to infinity only exists for geometric series." True — for arithmetic series, the sum to infinity is undefined because terms grow without bound.
- "The binomial expansion of (1 + x)ⁿ works for any x." It works only for |x| < 1. Use the full expansion (positive integer n) for any x.
- "Sigma notation sums over the indices, not the values." Σ k from k = 1 to n is 1 + 2 + … + n = n(n + 1)/2, not "n copies of k". Always interpret sigma as a sum of values.
- "A recurrence with aₙ₊₁ = aₙ + 5 has the same form as an arithmetic sequence." It is an arithmetic sequence; the recurrence defines aₙ = a₁ + 5(n − 1). Recognise arithmetic and geometric patterns by inspection.

#### Specification reference

Section D of the AQA A-level Mathematics 7357 specification appears on Paper 1 (pure content) in short, focused questions that combine sigma notation with one of the standard sums. The binomial expansion for rational n with |x| < 1 is also assessed on Paper 1. Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*