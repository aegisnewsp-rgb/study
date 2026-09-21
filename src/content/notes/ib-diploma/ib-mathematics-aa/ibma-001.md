---
exam: ib-diploma
examName: International Baccalaureate (IB) Diploma Programme
subject: ib-mathematics-aa
subjectName: "Mathematics: Analysis and Approaches"
topic: ibma-001
topicName: Number and Algebra
weight: 3
country: singapore
generated: "2026-09-20T15:30:00"
lastUpdated: "2026-09-20"
---

# Number and Algebra — IB Mathematics: Analysis and Approaches (AA) Notes

Number and Algebra is the first topic of the IB Mathematics: Analysis and Approaches syllabus. The topic covers sequences, series, exponents, logarithms, financial maths, the binomial theorem, proof by induction, complex numbers (roots of polynomials, polar form, De Moivre's theorem), and (at HL) counting principles and partial fractions. While Number and Algebra is not the largest topic by teaching hours, it sets the algebraic fluency that the rest of the syllabus assumes.

> Verify the live IB Math AA subject brief and any in-year curriculum update on https://ibo.org/programmes/diploma-programme/curriculum/mathematics/ before planning revision around the patterns below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### The seven facts every IB student needs

1. **Sequence**: an ordered list of numbers a₁, a₂, a₃, ….
2. **Arithmetic progression (AP)**: aₙ = a + (n − 1)d, with common difference d.
3. **Geometric progression (GP)**: aₙ = a r^(n−1), with common ratio r.
4. **Index laws**: a^m × a^n = a^(m+n); a^m / a^n = a^(m−n); (a^m)^n = a^(mn); a^0 = 1; a^(−n) = 1 / a^n.
5. **Logarithm laws**: log(ab) = log a + log b; log(a/b) = log a − log b; log(a^n) = n log a.
6. **Binomial theorem** for positive integer n: (a + b)^n = Σ_{k=0}^n C(n, k) a^(n−k) b^k.
7. **Complex numbers** of the form z = x + iy, with i² = −1.

#### Key notations

- aₙ — the nth term of a sequence
- Sₙ — the sum of the first n terms
- Σ — summation notation
- C(n, k) — the binomial coefficient n choose k
- i — the imaginary unit
- z̄ — the complex conjugate of z

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Sequences and series

**Arithmetic progression**: aₙ = a + (n − 1)d. Sum of first n terms: Sₙ = n/2 × (2a + (n − 1)d) = n/2 × (a + l), where l is the last term.

**Geometric progression**: aₙ = a r^(n−1). Sum of first n terms (for r ≠ 1): Sₙ = a (1 − rⁿ) / (1 − r). Sum to infinity (for |r| < 1): S_∞ = a / (1 − r).

#### Index laws

- a^m × a^n = a^(m+n)
- a^m / a^n = a^(m−n)
- (a^m)^n = a^(mn)
- (ab)^n = a^n b^n
- a^0 = 1 (a ≠ 0)
- a^(−n) = 1 / a^n
- a^(1/n) = nth root of a
- a^(m/n) = (a^(1/n))^m

#### Logarithm laws

- log(ab) = log a + log b
- log(a/b) = log a − log b
- log(a^n) = n log a
- log_a a = 1
- log 1 = 0
- Change of base: log_a x = ln x / ln a = log_b x / log_b a

#### Financial maths

**Compound interest**: A = P(1 + r/n)^(nt), where P is the principal, r is the annual interest rate (as a decimal), n is the number of compounding periods per year, and t is the time in years.

**Depreciation**: the same formula with a negative rate, or V = P(1 − r)^t for straight-line depreciation.

**Annuities**: a series of equal payments at regular intervals. The future value of an annuity-immediate (payments at the end of each period) is FV = PMT × [(1 + r)^n − 1] / r. The present value is PV = PMT × [1 − (1 + r)^(−n)] / r.

#### Binomial theorem

For a positive integer n, the binomial theorem expands (a + b)^n as a sum:

(a + b)^n = Σ_{k=0}^n C(n, k) a^(n−k) b^k = a^n + C(n, 1) a^(n−1) b + … + C(n, n−1) a b^(n−1) + b^n

For (1 + x)^n specifically: (1 + x)^n = Σ_{k=0}^n C(n, k) x^k.

The coefficient of x^k is C(n, k) = n! / [k! (n − k)!].

For (a + b)^n with a ≠ 1, factor out a first: (a + b)^n = a^n (1 + b/a)^n, then expand.

#### Proof by induction (HL)

A proof by induction has three steps:

1. **Base case**: verify the statement for n = 1 (or whichever starting value).
2. **Inductive hypothesis**: assume the statement is true for n = k.
3. **Inductive step**: show that, given the statement for n = k, the statement follows for n = k + 1.

If all three steps hold, the statement is true for all n ≥ the base case.

#### Counting principles (HL)

**Permutation**: P(n, r) = n! / (n − r)!.

**Combination**: C(n, r) = n! / [r! (n − r)!].

**Permutation with repetition**: arrangements of n items with multiplicities n₁, n₂, …, nₖ is n! / (n₁! n₂! … nₖ!).

**Binomial expansion and counting**: the coefficient C(n, k) equals the number of ways to choose k items from n.

#### Complex numbers

A complex number is z = x + iy, where x = Re(z), y = Im(z), and i² = −1.

**Modulus**: |z| = √(x² + y²).

**Argument**: arg(z) = arctan(y/x), measured counter-clockwise from the positive real axis.

**Polar form**: z = r (cos θ + i sin θ) = r cis θ, where r = |z| and θ = arg(z).

**De Moivre's theorem**: (cos θ + i sin θ)^n = cos nθ + i sin nθ, or equivalently (r cis θ)^n = r^n cis nθ.

**Roots of a polynomial**: a polynomial of degree n has exactly n roots (counted with multiplicity) in the complex numbers.

**Conjugate**: z̄ = x − iy. Conjugation reflects a complex number in the real axis.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Where Number and Algebra appears across the IB Mathematics: AA papers

- **IB Math AA SL Paper 1**: short structured items on sequences, series, index and logarithm laws, and the binomial theorem. Complex-numbers items also appear.
- **IB Math AA SL Paper 2**: financial maths items and additional algebra items.
- **IB Math AA HL Paper 1**: deeper sequences and series, complex numbers, and proof by induction.
- **IB Math AA HL Paper 3**: counting principles and other HL algebra items.
- **Across the papers**: writing the nth-term formula explicitly before summing is the highest-leverage exam technique for sequence-and-series items.

#### Common misconceptions (and the correction)

- "Negative indices give negative numbers." a^(−n) = 1 / a^n, not −a^n.
- "log(x + y) = log x + log y." No — log(xy) = log x + log y; there is no simple rule for log(x + y).
- "C(n, k) = n! / k!" No — C(n, k) = n! / [k! (n − k)!].
- "i is a real number." i is the imaginary unit; i² = −1 by definition.
- "Induction proves a statement." Induction proves a statement FOR ALL n ≥ the base case, given that the inductive step is valid.

#### Exam technique

- For sequence questions, write the values of a and d (or a and r) explicitly. The parameter statement is the method mark.
- For logarithm questions, state the law you are applying before simplifying. The law statement is the method mark.
- For binomial-expansion questions, write the general term T_{k+1} = C(n, k) x^k before substituting. The general term is the method mark.
- For induction questions, write all three steps (base case, inductive hypothesis, inductive step) explicitly. The structure is the method mark.

#### Specification reference

Number and Algebra is the first topic of IB Mathematics: Analysis and Approaches. At SL it covers sequences, series, indices, logarithms, the binomial theorem and basic complex numbers. At HL it extends to proof by induction, counting principles, and the deeper complex-numbers content. Confirm the live IB Math AA subject brief and any in-year curriculum update on https://ibo.org/programmes/diploma-programme/curriculum/mathematics/ before committing a revision plan.

---

*Last updated 2026-09-20. Source: IBO DP Mathematics: Analysis and Approaches subject brief, https://ibo.org/contentassets/5895a05412144fe890312bad52b17044/subject-brief-dp-math-analysis-and-approaches-en.pdf. Paper pattern and any in-year specification changes must be re-checked on https://ibo.org/programmes/diploma-programme/curriculum/ before committing a revision plan to a student.*
