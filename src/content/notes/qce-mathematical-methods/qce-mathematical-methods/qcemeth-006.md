---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-mathematical-methods
subjectName: Mathematical Methods
topic: qcemeth-006
topicName: "Major Topic: Algebra, Number and Structure"
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Major Topic: Algebra, Number and Structure — QCE Mathematical Methods (QCAA 2025) Notes

Algebra, Number and Structure is one of the four major topics in QCE Mathematical Methods. It covers surds, indices, logarithms, sequences and series; algebraic manipulation; the language of mathematical reasoning.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Indices.** a^m × a^n = a^(m+n); a^m / a^n = a^(m−n); (a^m)^n = a^(mn).
- **Surds.** √a × √b = √(ab). Simplify √12 = 2√3.
- **Logarithms.** log(xy) = log x + log y; log(x/y) = log x − log y; log(x^n) = n log x.
- **Sequences.** Arithmetic a_n = a + (n − 1)d. Geometric a_n = ar^(n − 1).
- **Proof.** Direct, by contradiction, by induction.

#### Examiner traps

- Mixing up log(xy) and log(x + y).
- Confusing arithmetic and geometric sequences.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Surds and indices

Laws: a^m × a^n = a^(m+n); a^m / a^n = a^(m−n); (a^m)^n = a^(mn); a^0 = 1; a^(−n) = 1/a^n. Surds: √a × √b = √(ab).

#### Logarithms

ln x = natural log. log_a(b) = c means a^c = b. Change of base: log_a(b) = log_c(b)/log_c(a).

#### Sequences and series

Arithmetic: S_n = n/2(2a + (n − 1)d). Geometric: S_n = a(1 − r^n)/(1 − r) for r ≠ 1. Sum to infinity S_∞ = a/(1 − r) for |r| < 1.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Algebra underpins calculus and financial mathematics

- Solving equations is the first step in most applied problems.

#### Year 11-12 planning pattern

- Daily algebraic manipulation drills.
- Weekly surds and indices practice.

#### Common misconceptions (and the correction)

- "log(xy) = log x + log y always." Yes, when x, y > 0.
- "All series have finite sums." Only geometric series with |r| < 1.

#### Specification reference

This major topic is one of four cross-cutting topics in QCE Mathematical Methods. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — Factor Theorem and complete polynomial factorisation

Consider the cubic polynomial P(x) = 2x³ − 3x² − 11x + 6.
1. Use the Factor Theorem to show that (x − 3) is a factor of P(x).
2. Factorise P(x) completely into linear factors.
3. Solve the inequality P(x) ≥ 0.

Part 1: Factor Theorem verification
The Factor Theorem states that (x − c) is a factor of P(x) if and only if P(c) = 0.
Substitute x = 3:

```
  P(3) = 2(3)³ − 3(3)² − 11(3) + 6
       = 2(27) − 3(9) − 33 + 6
       = 54 − 27 − 33 + 6
       = 0
```

Since P(3) = 0, (x − 3) is a linear factor of P(x).

Part 2: Complete factorisation via polynomial division
Divide P(x) by (x − 3):

```
               2x² + 3x − 2
       _________________________
  x − 3 ) 2x³ − 3x² − 11x + 6
        −(2x³ − 6x²)
        _______________
                 3x² − 11x
               −(3x² −  9x)
               ___________
                       −2x + 6
                     −(−2x + 6)
                     _________
                             0
```

The quotient is 2x² + 3x − 2. Factorise the quadratic quotient:

```
  2x² + 3x − 2 = (2x − 1)(x + 2)
```

Therefore, the complete factorisation of P(x) is:

```
  P(x) = (x − 3)(2x − 1)(x + 2)
```

Part 3: Solve P(x) ≥ 0
The roots of P(x) = 0 are x = −2, x = 1/2, and x = 3.
Construct a sign test across the four intervals:
- For x < −2 (test x = −3): (−)(−)(−) = negative
- For −2 < x < 1/2 (test x = 0): (−)(−)(+) = positive
- For 1/2 < x < 3 (test x = 1): (−)(+)(+) = negative
- For x > 3 (test x = 4): (+)(+)(+) = positive

Therefore, P(x) ≥ 0 on the union of closed intervals:

```
  x ∈ [−2, 1/2] ∪ [3, ∞)
```

#### Worked example — exponential equation reducible to quadratic form

Solve the equation for real values of x:

```
  4^x − 3(2^(x+1)) + 8 = 0
```

Step 1: Express terms in powers of 2^x
Notice that 4^x = (2²)^x = (2^x)² and 2^(x+1) = 2^x × 2¹ = 2(2^x).

```
  (2^x)² − 3(2(2^x)) + 8 = 0
  (2^x)² − 6(2^x) + 8 = 0
```

Step 2: Substitute u = 2^x (with constraint u > 0)

```
  u² − 6u + 8 = 0
  (u − 2)(u − 4) = 0
  u = 2  or  u = 4
```

Both values satisfy u > 0.

Step 3: Solve for x

```
  Case 1: 2^x = 2¹  ⇒  x = 1
  Case 2: 2^x = 4 = 2²  ⇒  x = 2
```

The solutions are x = 1 and x = 2.

#### Common marking-scheme mistakes

- Forgetting to test the negative values of possible roots in the Rational Root Theorem.
- Sign errors during polynomial long division, especially when subtracting negative terms.
- Forgetting that u = a^x must be strictly positive, leading to invalid attempts to evaluate logarithms of negative numbers.
- Confusing the factor (x − c) with the root x = c (for example, concluding that P(3) = 0 means (x + 3) is a factor).
- Omitting the endpoints when solving non-strict inequalities (using open parentheses instead of closed brackets).
- Misidentifying 2^(x+1) as 2^x + 1 rather than 2 × 2^x.

#### 20-minute recap before you walk in

- Remainder Theorem: dividing P(x) by (ax − b) leaves remainder R = P(b/a).
- Factor Theorem: (ax − b) is a factor if and only if P(b/a) = 0.
- For equations with 2^(2x) and 2^x, substitute u = 2^x and enforce u > 0.
- When solving polynomial inequalities, identify all real roots and construct a sign table or sketch the polynomial.
- Sum of roots for ax³ + bx² + cx + d = 0 is −b/a; product of roots is −d/a.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Mathematical Methods syllabus for algebra and number also lists the following sub-topics:

- Applying index laws to simplify algebraic fractions with negative and fractional powers.
- Solving simultaneous non-linear systems involving a straight line and a circle or parabola.
- Graphing cubic polynomials showing points of inflection and axis intercepts.
- Logarithmic change of base formula applications to solve equations with differing bases.
- Proof by counterexample for algebraic and functional conjectures.

Confirm the live sub-topic list on the QCAA Mathematical Methods syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Mathematical Methods General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*