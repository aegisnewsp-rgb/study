---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-specialist-mathematics
subjectName: Specialist Mathematics
topic: qcespec-001
topicName: Surds, Algebra, Functions and Probability
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 1: Surds, Algebra, Functions and Probability — QCE Specialist Mathematics (QCAA 2025) Notes

Unit 1 of QCE Specialist Mathematics covers surds, algebraic manipulation, indices and logarithms; linear and quadratic functions, transformations and the language of function notation; elementary probability and counting. First Unit of the four-Unit Specialist Mathematics sequence.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Surds.** √a × √b = √(ab). Rationalise denominators.
- **Algebra.** Expand, factorise, complete the square.
- **Functions.** Linear, quadratic, exponential. Transformations.
- **Probability.** P(A ∪ B) = P(A) + P(B) − P(A ∩ B). P(A|B) = P(A ∩ B)/P(B).

#### Examiner traps

- Mixing up permutation and combination.
- Forgetting to rationalise surd denominators.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Surds and indices

Laws of indices: a^m × a^n = a^(m+n); a^m / a^n = a^(m−n); (a^m)^n = a^(mn); a^(1/n) = ⁿ√a. Simplify surds by extracting square factors. Rationalise: 1/√3 = √3/3.

#### Functions and transformations

Linear y = mx + c. Quadratic y = a(x − h)² + k. Vertex (h, k). Transformations: translate, stretch, compress, reflect.

#### Probability

P(A) = n(A)/n(total). Addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Multiplication rule for independent events: P(A ∩ B) = P(A)P(B). Conditional: P(A|B) = P(A ∩ B)/P(B).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 1 prepares for Units 2-4

- Algebra, functions and probability are foundational for calculus, statistics, vectors and mechanics.

#### Year 11 planning pattern

- Term 1: Surds, indices.
- Term 2: Algebra, transformations.
- Term 3: Functions.
- Term 4: Probability.

#### Common misconceptions (and the correction)

- "Permutation and combination are the same." No — order matters in permutations.
- "Independent events are mutually exclusive." No — mutually exclusive events cannot both occur; independent events can.

#### Specification reference

This Unit is the first of four Units of QCE Specialist Mathematics. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — rationalising binomial surd denominators

Express the following fraction in simplest form with a rational denominator:

```
  (3 + √5) / (2√5 − 1)
```

Step 1: Multiply numerator and denominator by the conjugate of the denominator
The denominator is 2√5 − 1; its conjugate is 2√5 + 1:

```
  [ (3 + √5)(2√5 + 1) ] / [ (2√5 − 1)(2√5 + 1) ]
```

Step 2: Expand the denominator using the difference of two squares (a − b)(a + b) = a² − b²

```
  (2√5)² − (1)² = (4 × 5) − 1 = 20 − 1 = 19
```

Step 3: Expand the numerator using FOIL

```
  (3)(2√5) + (3)(1) + (√5)(2√5) + (√5)(1)
  = 6√5 + 3 + (2 × 5) + √5
  = 6√5 + 3 + 10 + √5
  = 13 + 7√5
```

Step 4: Combine into a single fraction

```
  (13 + 7√5) / 19
```

#### Worked example — combinatorics and constrained arrangements

A committee of 5 students must be selected from a cohort of 7 boys and 6 girls.
1. Find the total number of possible committees without restrictions.
2. Find the number of committees containing exactly 3 boys and 2 girls.
3. Find the number of committees containing at least 1 girl.

Part 1: No restrictions
Choose 5 students from 13 students total:

```
  (13 choose 5) = 13! / (5! × 8!)
                = (13 × 12 × 11 × 10 × 9) / (5 × 4 × 3 × 2 × 1)
                = 154440 / 120
                = 1,287
```

Part 2: Exactly 3 boys and 2 girls
Apply the multiplication principle:

```
  (7 choose 3) × (6 choose 2)
  = [ 7! / (3! 4!) ] × [ 6! / (2! 4!) ]
  = [ (7 × 6 × 5) / (3 × 2 × 1) ] × [ (6 × 5) / (2 × 1) ]
  = 35 × 15
  = 525
```

Part 3: At least 1 girl
Use the complement rule: Total committees minus committees with 0 girls (all boys):

```
  Committees with 0 girls = (7 choose 5) = (7 choose 2) = 21
  Committees with at least 1 girl = 1287 − 21 = 1,266
```

#### Common marking-scheme mistakes

- Forgetting to multiply all terms when expanding binomial surds, missing middle cross-terms.
- Using permutations P(n, r) instead of combinations C(n, r) when order of selection does not matter.
- In complement counting, subtracting from the wrong total or miscounting the excluded case.
- Stating quadratic inequality solutions as a conjunction when they form two disjoint intervals (writing 1 < x < 4 instead of x < 1 or x > 4).
- Forgetting that √a × √b = √(ab) requires non-negative real radicands.

#### 20-minute recap before you walk in

- Difference of squares rationalisation: multiply (a + √b) by (a − √b) to clear surds.
- Combination formula: (n choose r) = n! / (r! (n − r)!). Order does not matter.
- Permutation formula: P(n, r) = n! / (n − r)!. Order matters.
- At least one event: P(at least one) = 1 − P(none).
- Conditional probability: P(A | B) = P(A ∩ B) / P(B).

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Specialist Mathematics syllabus for Unit 1 also lists the following sub-topics:

- Pigeonhole principle applications in geometric and discrete number theory problems.
- Principle of inclusion-exclusion for three overlapping finite sets.
- Matrix representations of linear systems and row operations on augmented matrices.
- Reciprocal and rational function graphs of the form y = (ax + b) / (cx + d).
- Pascal's triangle properties and combinatorial proofs of identity relationships.

Confirm the live sub-topic list on the QCAA Specialist Mathematics syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Specialist Mathematics General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*