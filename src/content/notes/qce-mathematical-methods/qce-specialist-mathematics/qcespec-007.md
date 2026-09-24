---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-specialist-mathematics
subjectName: Specialist Mathematics
topic: qcespec-007
topicName: "Major Topic: Proof and Mathematical Reasoning"
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Major Topic: Proof and Mathematical Reasoning — QCE Specialist Mathematics (QCAA 2025) Notes

Proof and Mathematical Reasoning is one of the four major topics in QCE Specialist Mathematics. It covers direct and indirect proof, proof by contradiction, mathematical induction, the language of mathematical argument and the formal logic of proof.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Direct proof.** Assume hypothesis, derive conclusion.
- **Proof by contradiction.** Assume negation of conclusion, derive contradiction.
- **Proof by induction.** Base case, inductive step, conclude all n.

#### Examiner traps

- Confusing the base case and the inductive step.
- Treating induction as proof by example.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Direct proof

Structure: assume P, show Q follows by logical steps.

#### Proof by contradiction

Structure: assume not Q, derive a contradiction with P.

#### Proof by induction

For a statement P(n):
1. Base case: verify P(1) is true.
2. Inductive step: assume P(k) is true for arbitrary k. Show P(k + 1) follows.
3. Conclude P(n) is true for all n ≥ 1.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Mathematical Reasoning is foundational

- Proof skills are required in every Specialist topic that involves generalisation.

#### Year 11-12 planning pattern

- Term 1: Direct proof, simple examples.
- Term 2: Proof by contradiction.
- Term 3: Proof by induction.
- Term 4: Mixed practice.

#### Common misconceptions (and the correction)

- "Induction proves examples." No — induction proves a statement for all n.
- "Contradiction is just guessing." No — contradiction is a structured proof technique.

#### Specification reference

This major topic is one of four cross-cutting topics in QCE Specialist Mathematics. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — proof by mathematical induction for a series sum

Prove by mathematical induction that for all positive integers n ≥ 1:

```
  ∑_{r=1}^n r(r + 1) = [ n(n + 1)(n + 2) ] / 3
```

Step 1: Base case (n = 1)
- Left-hand side:
  LHS = 1(1 + 1) = 1(2) = 2
- Right-hand side:
  RHS = [ 1(1 + 1)(1 + 2) ] / 3 = [ 1(2)(3) ] / 3 = 6 / 3 = 2

Since LHS = RHS = 2, the statement is true for the base case n = 1.

Step 2: Inductive hypothesis
Assume that the statement is true for some arbitrary positive integer k ≥ 1. That is, assume:

```
  ∑_{r=1}^k r(r + 1) = [ k(k + 1)(k + 2) ] / 3
```

Step 3: Inductive step (prove true for n = k + 1)
We must show that:

```
  ∑_{r=1}^(k+1) r(r + 1) = [ (k + 1)((k + 1) + 1)((k + 1) + 2) ] / 3
                         = [ (k + 1)(k + 2)(k + 3) ] / 3
```

Start from the left-hand side:

```
  LHS = [ ∑_{r=1}^k r(r + 1) ] + (k + 1)((k + 1) + 1)
```

Substitute the inductive hypothesis:

```
  LHS = [ k(k + 1)(k + 2) / 3 ] + (k + 1)(k + 2)
```

Take out the common algebraic factor (k + 1)(k + 2):

```
  LHS = (k + 1)(k + 2) [ (k / 3) + 1 ]
      = (k + 1)(k + 2) [ (k + 3) / 3 ]
      = [ (k + 1)(k + 2)(k + 3) ] / 3
      = RHS
```

Step 4: Conclusion
Since the statement holds for n = 1, and whenever it is true for n = k it is also true for n = k + 1, by the principle of mathematical induction the identity holds for all integers n ≥ 1.

#### Worked example — proof by contradiction that √3 is irrational

Prove by contradiction that √3 is an irrational number.

Step 1: State the contradictory assumption
Assume the contrary: that √3 is a rational number.
Then there exist positive integers a and b with no common factors other than 1 (that is, the fraction a/b is in simplest irreducible form with gcd(a, b) = 1) such that:

```
  √3 = a / b
```

Step 2: Square both sides and rearrange

```
  3 = a² / b²
  a² = 3 b²
```

Step 3: Deduce properties of a
Since a² = 3 b², a² is a multiple of 3.
By Euclid's lemma (since 3 is a prime number), if 3 divides a², then 3 must divide a.
Therefore, we can write a = 3c for some integer c.

Step 4: Substitute back and deduce properties of b
Substitute a = 3c into the equation a² = 3 b²:

```
  (3c)² = 3 b²
  9c² = 3 b²
  3c² = b²
```

Since b² = 3c², b² is a multiple of 3.
By the same lemma, 3 must also divide b.

Step 5: Identify the contradiction
We have established that:
- 3 divides a
- 3 divides b
This means that 3 is a common factor of both a and b.
However, this contradicts our initial premise that gcd(a, b) = 1 (that the fraction was in simplest form).

Step 6: Conclusion
The initial assumption that √3 is rational must be false. Therefore, √3 is irrational.

#### Common marking-scheme mistakes

- Omitting the inductive hypothesis statement ("Assume true for n = k") or stating it as an unverified fact rather than a conditional hypothesis.
- Expanding products into long polynomials during the inductive step instead of factorising out common factors.
- Forgetting to write the formal induction conclusion referencing the base case and inductive step.
- In proof by contradiction, failing to state explicitly what assumption is being made at the outset.
- Assuming a result that is equivalent to what is being proved (circular reasoning).

#### 20-minute recap before you walk in

- Induction structure: 1. Base case (n = 1 or stated start). 2. Inductive hypothesis (assume for n = k). 3. Inductive step (prove for n = k + 1). 4. Formal conclusion.
- In divisibility induction: write f(k+1) − f(k) or f(k+1) − M f(k) to isolate the factor.
- Proof by contradiction steps: Assume false, deduce logical consequences, arrive at an explicit contradiction, conclude statement is true.
- Contrapositive: "P implies Q" is logically equivalent to "Not Q implies Not P".
- A single counterexample disproves a universal statement ("for all x").

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Specialist Mathematics syllabus for proof also lists:

- Proof by mathematical induction for divisibility statements (e.g. 4^n − 1 is divisible by 3).
- Proof by induction for matrix powers: proving A^n expressions for 2×2 matrices.
- Proof by induction for inequalities: establishing bounds such as 2^n > n² for n ≥ 5.
- Direct proof of divisibility and prime number properties in elementary number theory.
- Direct proofs in plane Euclidean geometry using congruence and circle theorems.

Confirm the live sub-topic list on the QCAA Specialist Mathematics syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Specialist Mathematics General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*