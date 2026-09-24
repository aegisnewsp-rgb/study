---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-specialist-mathematics
subjectName: Specialist Mathematics
topic: sacespec-001
topicName: Mathematical Induction
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 1: Mathematical Induction — SACE Stage 2 Specialist Mathematics Notes

Topic 1 of SACE Stage 2 Specialist Mathematics covers the principle of mathematical induction; rigorous proofs for sums of integer series, divisibility statements and inequality statements over the positive integers.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/web/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Mathematical induction.** Base case, inductive step, conclude all n.
- **Inductive step.** Assume P(k), prove P(k + 1).

#### Examiner traps

- Treating induction as proof by example.
- Missing the base case.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Proof by induction

For a statement P(n):
1. Base case: verify P(1) is true.
2. Inductive hypothesis: assume P(k) is true for arbitrary k.
3. Inductive step: prove P(k + 1) follows.
4. Conclude: P(n) is true for all n ≥ 1.

#### Examples

- Sum of first n positive integers: 1 + 2 + ... + n = n(n + 1)/2.
- Sum of first n squares: 1 + 4 + ... + n² = n(n + 1)(2n + 1)/6.
- n! ≥ 2^n for n ≥ 4.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 1 is foundational

- Induction is a general proof technique used throughout mathematics.

#### Year 12 planning pattern

- Term 1: Induction principle.
- Term 2: Practice.

#### Common misconceptions (and the correction)

- "Induction proves examples." No — induction proves a statement for all n.

---

### Specification reference

This Topic is the first Topic of the SACE Stage 2 Specialist Mathematics Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — induction for divisibility

Prove by mathematical induction that for all positive integers n ≥ 1:

```
  5^(2n) − 1 is divisible by 24
```

Step 1: Base case (n = 1)
For n = 1:

```
  5^(2(1)) − 1 = 5² − 1 = 25 − 1 = 24
```

Since 24 = 24 × 1, the statement is divisible by 24 for the base case n = 1.

Step 2: Inductive hypothesis
Assume that the statement is true for some positive integer k ≥ 1. That is, assume:

```
  5^(2k) − 1 = 24 M,  for some integer M
```

Rearranging gives 5^(2k) = 24M + 1.

Step 3: Inductive step (prove true for n = k + 1)
Consider the expression for n = k + 1:

```
  5^(2(k + 1)) − 1 = 5^(2k + 2) − 1
                   = 5^(2k) × 5² − 1
                   = 25 × 5^(2k) − 1
```

Substitute 5^(2k) = 24M + 1:

```
  = 25(24M + 1) − 1
  = 25(24M) + 25 − 1
  = 24(25M) + 24
  = 24(25M + 1)
```

Since M is an integer, 25M + 1 is an integer. Let Q = 25M + 1 ∈ ℤ:

```
  5^(2(k+1)) − 1 = 24 Q
```

This is divisible by 24.

Step 4: Conclusion
Since the statement holds for n = 1, and whenever it is true for n = k it is also true for n = k + 1, by the principle of mathematical induction 5^(2n) − 1 is divisible by 24 for all integers n ≥ 1.

#### Worked example — induction for matrix powers

Let matrix A = [ 2  1 ]
               [ 0  1 ]
Prove by mathematical induction that for all integers n ≥ 1:

```
  A^n = [ 2^n   2^n − 1 ]
        [  0       1    ]
```

Step 1: Base case (n = 1)

```
  LHS = A¹ = [ 2  1 ]
             [ 0  1 ]

  RHS = [ 2¹   2¹ − 1 ] = [ 2  1 ]
        [  0      1   ]   [ 0  1 ]
```

LHS = RHS. The statement is true for n = 1.

Step 2: Inductive hypothesis
Assume true for n = k ≥ 1:

```
  A^k = [ 2^k   2^k − 1 ]
        [  0       1    ]
```

Step 3: Inductive step (prove for n = k + 1)

```
  A^(k+1) = A^k × A
          = [ 2^k   2^k − 1 ] × [ 2  1 ]
            [  0       1    ]   [ 0  1 ]
```

Perform matrix multiplication:
- Row 1, Col 1: (2^k)(2) + (2^k − 1)(0) = 2^(k+1) + 0 = 2^(k+1)
- Row 1, Col 2: (2^k)(1) + (2^k − 1)(1) = 2^k + 2^k − 1 = 2(2^k) − 1 = 2^(k+1) − 1
- Row 2, Col 1: (0)(2) + (1)(0) = 0
- Row 2, Col 2: (0)(1) + (1)(1) = 1

```
  A^(k+1) = [ 2^(k+1)   2^(k+1) − 1 ]
            [    0           1      ]
```

This matches the RHS for n = k + 1.

Step 4: Conclusion
By the principle of mathematical induction, the identity holds for all integers n ≥ 1.

#### Common marking-scheme mistakes

- Omitting the inductive hypothesis ("Assume true for n = k").
- Writing the inductive step without substituting the inductive hypothesis.
- Using circular reasoning by assuming the n = k + 1 statement is already true.
- Failing to state explicitly that the quotient (e.g. 25M + 1) is an integer in divisibility proofs.
- Neglecting to write the final formal conclusion connecting base case and inductive step.

#### 20-minute recap before you walk in

- Induction format: Base case (verify n = 1), Inductive hypothesis (assume for n = k), Inductive step (prove for n = k + 1), Conclusion.
- In divisibility: write f(k+1) = A f(k) + B (multiple of divisor).
- In matrix powers: A^(k+1) = A^k × A or A × A^k.
- In inequality induction: compare k + 1 terms using the hypothesis bound.
- Induction proves statements for discrete integer sets, not continuous real domains.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Specialist Mathematics Subject Outline also lists:

- Proof by mathematical induction for inequalities such as 2^n > n³ for n ≥ 10.
- Proof by contradiction in discrete and continuous mathematics.
- Proof by contraposition: establishing "not Q implies not P".
- Disproving universal conjectures by constructing single concrete counterexamples.
- First-order recurrence relations and closed-form inductive verification.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Specialist Mathematics Subject Outline, https://www.sace.sa.edu.au/web/specialist-mathematics. Awarding body: SACE Board of South Australia.*