---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-specialist
subjectName: Mathematics Specialist
topic: wacespec-001
topicName: Combinatorics, Vectors and Proof (Year 11)
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 1: Combinatorics, Vectors and Proof — WACE Mathematics Specialist (SCSA) Notes

Unit 1 of WACE Mathematics Specialist covers combinatorics and counting; vectors in two dimensions, vector operations and the language of mathematical proof. First Unit of the Year 11-12 Mathematics Specialist sequence.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Combinatorics.** Permutations P(n, r) = n!/(n − r)!. Combinations C(n, r) = n!/(r!(n − r)!).
- **Vectors in 2D.** Magnitude, direction, dot product.
- **Proof.** Direct, by contradiction, by induction.

#### Examiner traps

- Mixing up permutation and combination.
- Confusing position vector with displacement.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Combinatorics

Permutation (ordered): P(n, r) = n!/(n − r)!. Combination (unordered): C(n, r) = n!/(r!(n − r)!). Binomial theorem: (a + b)^n = Σ C(n, k) a^k b^(n − k).

#### Vectors in 2D

v = (a, b). Magnitude |v| = √(a² + b²). Direction θ = arctan(b/a). Dot product v · w = a·c + b·d.

#### Proof

Direct, contradiction, induction. Induction: base case, inductive step, conclusion.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 1 prepares for Units 2-4

- Combinatorics underpins probability. Vectors underpin kinematics. Proof underpins mathematical reasoning.

#### Year 11 planning pattern

- Term 1: Combinatorics.
- Term 2: Vectors.
- Term 3: Proof.
- Term 4: Revision.

#### Common misconceptions (and the correction)

- "Permutation and combination are the same." No — order matters in permutations.
- "Dot product is always positive." No — it can be negative, zero or positive.

---

### Specification reference

This Unit is the first of four Units of WACE Mathematics Specialist. Confirm the live syllabus on senior-secondary.scsa.wa.edu.au.

#### Worked example — combinatorics with identical elements and arrangements

Determine the number of distinct 8-letter arrangements that can be formed using all the letters of the word PARABOLA.
1. Find the total number of permutations without restrictions.
2. Find the number of permutations where all three letters 'A' are grouped together.
3. Find the number of permutations where no two letters 'A' are consecutive (none adjacent).

Part 1: No restrictions
The word PARABOLA contains 8 letters with letter counts:
- P: 1, A: 3, R: 1, B: 1, O: 1, L: 1

```
  Total arrangements = 8! / 3!
                     = 40,320 / 6
                     = 6,720
```

Part 2: All three 'A's grouped together
Treat the block (AAA) as a single unit.
We now arrange 6 items: (AAA), P, R, B, O, L. All 6 items are distinct:

```
  Arrangements = 6! = 720
```

Part 3: No two 'A's consecutive (gap method)
First arrange the 5 non-A letters: P, R, B, O, L.
These 5 distinct letters can be arranged in:

```
  5! = 120 ways
```

The 5 letters create 6 potential spaces (gaps) for the 'A's to be placed (before the first letter, between letters, and after the last letter):
_ L₁ _ L₂ _ L₃ _ L₄ _ L₅ _

Choose 3 of these 6 gaps to place the identical 'A's:

```
  (6 choose 3) = 6! / (3! 3!) = (6 × 5 × 4) / (3 × 2 × 1) = 20 ways
```

By the multiplication principle:

```
  Arrangements with separated A's = 120 × 20 = 2,400
```

#### Worked example — proof by mathematical induction for a series sum

Prove by mathematical induction that for all integers n ≥ 1:

```
  ∑_{r=1}^n r(3r − 1) = n²(n + 1)
```

Step 1: Base case (n = 1)
- LHS = 1(3(1) − 1) = 1(2) = 2
- RHS = 1²(1 + 1) = 1(2) = 2
LHS = RHS = 2. The statement holds for n = 1.

Step 2: Inductive hypothesis
Assume that the statement is true for some positive integer k ≥ 1:

```
  ∑_{r=1}^k r(3r − 1) = k²(k + 1)
```

Step 3: Inductive step (prove for n = k + 1)
We must show that ∑_{r=1}^(k+1) r(3r − 1) = (k + 1)²(k + 2).

```
  LHS = [ ∑_{r=1}^k r(3r − 1) ] + (k + 1)(3(k + 1) − 1)
      = k²(k + 1) + (k + 1)(3k + 2)
```

Factor out the common term (k + 1):

```
  = (k + 1) [ k² + 3k + 2 ]
  = (k + 1) [ (k + 1)(k + 2) ]
  = (k + 1)²(k + 2)
  = RHS
```

Step 4: Conclusion
By the principle of mathematical induction, the identity holds for all integers n ≥ 1.

#### Common marking-scheme mistakes

- Dividing by 3 instead of 3! when accounting for three identical letters.
- Forgetting to multiply gap placements by the permutations of non-repeated elements in combinatorics.
- Omitting the base case or formal inductive conclusion in mathematical proofs.
- Using circular arguments during the inductive step.
- Failing to state explicitly that variables represent integers in proof questions.

#### 20-minute recap before you walk in

- Permutations with repeated items: n! / (p! q! r!).
- Gap method for separated items: arrange other items first, then choose gaps with combinations.
- Block method for items together: treat group as a single super-item, multiply by internal permutations.
- Mathematical induction steps: Base case, Inductive hypothesis, Inductive step, Formal conclusion.
- Pigeonhole principle: If kn + 1 items are placed into n pigeonholes, at least one hole contains ≥ k + 1 items.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Specialist Year 11 Unit 1 syllabus also lists:

- Geometric proofs using vectors: midpoint theorems, concurrence of medians, and cyclic quadrilaterals.
- Vector projections and resolving vectors into parallel and perpendicular components.
- The Pigeonhole Principle applied to geometric packing and modular arithmetic.
- Deductive proofs of divisibility and prime number properties.
- Pascal's identity combinatorial proofs: (n choose r) + (n choose r−1) = (n+1 choose r).

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Specialist ATAR syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist. Awarding body: School Curriculum and Standards Authority (SCSA).*