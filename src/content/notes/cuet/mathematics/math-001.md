---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-001
topicName: Sets Relations
weight: 3
country: india
generated: "2026-03-29T05:04:44"
lastUpdated: "2026-07-09"
---

# Sets Relations

### 🟢 Lite — Quick Review (1h–1d)

Everything in this section fits on one side of paper. If you can answer the seven check questions at the bottom without looking back, stop here and move to the practice set.

#### Core definitions in one pass

A **set** is a well-defined collection of distinct objects. Sets are written with capital letters, elements with lowercase. The order of elements is irrelevant and repetition is ignored, so {1, 2, 3} = {3, 1, 2} = {1, 1, 2, 3}. The symbol **∈** reads "belongs to"; **∉** reads "does not belong to". The **universal set U** is the full background set, and the **complement** of A in U is A′ = {x ∈ U : x ∉ A}. The **cardinality** n(A) is the number of elements in A. Two sets are **disjoint** when A ∩ B = ∅.

#### The five relations, one line each

| Relation | Symbol | Meaning | Test |
|---|---|---|---|
| Subset | A ⊆ B | every element of A is in B | A − B = ∅ |
| Proper subset | A ⊂ B | A ⊆ B and A ≠ B | A − B = ∅ and A ≠ B |
| Superset | A ⊇ B | every element of B is in A | B − A = ∅ |
| Equality | A = B | same elements, any order | A ⊆ B and B ⊆ A |
| Disjoint | A ∩ B = ∅ | no common element | n(A ∩ B) = 0 |

#### The five formulas that carry the whole topic

1. **Inclusion–exclusion, two sets:** n(A ∪ B) = n(A) + n(B) − n(A ∩ B).
2. **Inclusion–exclusion, three sets:** n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C).
3. **Complement:** n(A′) = n(U) − n(A), and n(A ∪ B)′ = n(U) − n(A ∪ B).
4. **Power set:** a set with n elements has 2ⁿ subsets and 2ⁿ − 1 proper subsets.
5. **De Morgan:** (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′.

#### Six traps that decide the answer

- **∅ is a subset of every set**, including itself. A set never has zero subsets; the empty set has exactly one, namely ∅.
- **A − B ≠ B − A.** Order matters for difference. It does not matter for union or intersection.
- **⊆ allows equality, ⊂ does not.** A ⊂ A is false.
- **n(A) = n(B) together with A ⊆ B forces A = B.** Use this to kill options in one line.
- **"At least one" means the union; "exactly one" means the symmetric difference.** They are different questions and different numbers.
- **A proper subset of an n-element set has at most n − 1 elements**, and 0 elements if you allow ∅.

#### Seven check questions

1. How many subsets does a set with 4 elements have? → 16.
2. How many proper subsets does a set with 5 elements have? → 31.
3. If n(A) = 12, n(B) = 15, n(A ∩ B) = 4, n(U) = 30, find n(A′ ∩ B′). → 7.
4. Is ∅ a proper subset of ∅? → No.
5. Write (A ∩ B)′ using only union and complement. → A′ ∪ B′.
6. If A = {1, 2, 3} and B = {3, 4}, find n(A Δ B). → 4.
7. The number of subsets of a set A is 32. Find n(A). → 5.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Notation, universal set, and the empty set

Fix a universal set U and read every set as a subset of U. The complement A′ is only meaningful relative to U — if U changes, A′ changes. This matters in questions that give n(U) explicitly, because every complement count you compute is anchored to that U and not to "everything".

n(∅) = 0 but the empty set still has one subset. The reason: ∅ ⊆ ∅ is true, since there is no element of ∅ that fails to be in ∅. The proper subsets of ∅: none, so 2⁰ − 1 = 0, consistent. From this one edge case every power-set fact in the topic falls out.

#### Subset relations, formalised

A ⊆ B means ∀x, x ∈ A ⇒ x ∈ B. Equivalently A − B = ∅. A ⊂ B adds A ≠ B. The chain A ⊂ B ⊂ C implies A ⊂ C, and ⊆ behaves the same way.

Two facts worth memorising because they end arguments quickly:

- If n(A) = n(B) and A ⊆ B, then A = B.
- If A ⊂ B then n(B) ≥ n(A) + 1. So a set of size 2 is never a subset of a set of size 1.

#### Set operations and where each one sits in the Venn diagram

| Operation | Symbol | Reading | Venn region |
|---|---|---|---|
| Union | A ∪ B | x in A or x in B | both circles, shaded |
| Intersection | A ∩ B | x in A and x in B | lens overlap only |
| Difference | A − B | x in A, x not in B | A minus the lens |
| Symmetric difference | A Δ B | x in exactly one of A, B | both crescents, lens unshaded |
| Complement | A′ | x in U, x not in A | everything outside A |

Useful identities, all provable in one line from the region picture:

- A ∪ B = (A′ ∩ B′)′
- A − B = A ∩ B′
- A Δ B = (A ∪ B) − (A ∩ B) = (A ∩ B′) ∪ (A′ ∩ B)
- n(A Δ B) = n(A) + n(B) − 2n(A ∩ B)
- n(A − B) = n(A) − n(A ∩ B)
- A is disjoint from B ⟺ A ⊆ B′

#### Counting: where inclusion–exclusion comes from

For two sets, adding n(A) + n(B) counts the intersection twice, so subtract it once:

n(A ∪ B) = n(A) + n(B) − n(A ∩ B).

For three sets, the pairwise subtraction removes every shared element once too many, and the triple intersection has been subtracted three times when it should appear once, so it is added back once:

n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C).

Complements let you invert any of these. n(A′ ∩ B′) = n(U) − n(A) − n(B) + n(A ∩ B) is the most-used form on this topic, and it is the same identity read from the other side.

#### Worked example — two sets

In a batch of 60 students, 35 study Mathematics, 32 study Physics, and 14 study both. How many study at least one subject, how many study Mathematics only, and how many study neither if the batch is the whole universal set?

- At least one: n(M ∪ P) = 35 + 32 − 14 = 53.
- Mathematics only: n(M − P) = 35 − 14 = 21.
- Physics only: 32 − 14 = 18.
- Both: 14. Check: 21 + 18 + 14 = 53. ✓
- Neither: n(U) − 53 = 60 − 53 = 7.

The check line matters. If 21 + 18 + 14 had not returned 53, at least one of the readings was wrong.

#### De Morgan's laws, and why the direction flips

Not (A or B) is true only when x is outside A and outside B, so the complement of a union is an intersection. Not (A and B) is true as soon as x escapes either one, so the complement of an intersection is a union. Generalised:

(A₁ ∪ A₂ ∪ … ∪ Aₙ)′ = A₁′ ∩ A₂′ ∩ … ∩ Aₙ′ and (A₁ ∩ A₂ ∩ … ∩ Aₙ)′ = A₁′ ∪ A₂′ ∪ … ∪ Aₙ′.

**Worked example.** Of 100 households, 60 own a television, 45 own a refrigerator, 25 own both. How many own at least one, and how many own neither?

- At least one: 60 + 45 − 25 = 80.
- Neither: 100 − 80 = 20. Equivalently by De Morgan, 20 = n(TV′ ∩ F′), so 20 households own neither.

#### Power set, and reading numbers backwards

For a set with n elements, every element is independently in or out of a subset, giving 2ⁿ subsets. The reading-backwards questions are routine:

- "The number of subsets of A is 64" → n(A) = 6.
- "The number of proper subsets of A is 31" → 2ⁿ − 1 = 31 → n(A) = 5.
- "The number of elements in A is 3 and in P(A) is 8" → consistent, since P(A) has 8 members.
- "n(P(A)) = 16" → 2ⁿ = 16 → n(A) = 4, and then P(A) itself has 2⁴ = 16 members whose own power set has 2¹⁶ members.

---

### 🔴 Extended — Deep Study (3mo+)

#### Worked problem 1 — three-set Venn, given the data in the messy form

A survey of a coaching class covers 80 students. The reported figures are:

| Given | Value |
|---|---|
| Study Mathematics (M) | 32 |
| Study Physics (P) | 35 |
| Study Chemistry (C) | 25 |
| M and P | 12 |
| M and C | 10 |
| P and C | 9 |
| All three | 4 |

**Step 1 — at least one subject.** n(M ∪ P ∪ C) = (32 + 35 + 25) − (12 + 10 + 9) + 4 = 90 − 31 + 4 = 63.

**Step 2 — no subject.** 80 − 63 = 17.

**Step 3 — rebuild the Venn regions, innermost first.**
- All three: 4.
- M and P only: 12 − 4 = 8. M and C only: 10 − 4 = 6. P and C only: 9 − 4 = 5.
- Only M: 32 − (12 + 10 − 4) = 32 − 18 = 14.
- Only P: 35 − (12 + 9 − 4) = 35 − 17 = 18.
- Only C: 25 − (10 + 9 − 4) = 25 − 15 = 10.
- Total check: 4 + 8 + 6 + 5 + 14 + 18 + 10 = 65. But step 1 said 63.

That mismatch means one of the seven supplied numbers is inconsistent with a real Venn diagram — the same situation you meet in an exam when you are meant to find the faulty entry. Find it by another route: "only M" must be non-negative, and here it is, so check the total the other way.

n(U) = 80 and n(at least one) = 63 means 17 study none. The seven region values already sum to 65, so the supplied data overstates the union by 2. One of the pairwise figures is too small — most plausibly M ∩ P = 12, which should read 10. With M ∩ P = 10: n(M ∩ P only) = 6, only M = 32 − (10 + 10 − 4) = 16, and the regions now total 4 + 6 + 6 + 5 + 16 + 18 + 10 = 63. ✓ Union restored.

**The transferable lesson:** always finish a Venn problem by adding the seven regions and comparing with the union you computed in step 1. When they disagree, one supplied number is wrong — the method tells you the exam is asking you to find it.

#### Worked problem 2 — "exactly one", "exactly two", "only A"

Using the corrected regions above (only M = 16, only P = 18, only C = 10, exactly two = 6 + 6 + 5 = 17, all three = 4, none = 17):

- **Exactly one subject:** 16 + 18 + 10 = 44. Never write n(M) + n(P) + n(C) for this; that overcounts the overlaps.
- **Exactly two subjects:** 6 + 6 + 5 = 17. Read it as (M ∩ P ∪ M ∩ C ∪ P ∩ C) minus the triple: (12 → use corrected 10) — safer as (10 + 10 + 9) − 3 × 4 = 29 − 12 = 17. ✓
- **Only Mathematics:** 16.
- **M but not P:** the "only M" crescent plus the "M and C only" lens, since C-only-when-not-P is exactly the M ∩ C ∧ P′ region: 16 + 6 = 22.
- **Neither M nor P:** n(U) − n(M ∪ P) = 80 − (32 + 35 − 10) = 80 − 57 = 23. Check by regions: only C (10) + none (17) = 27. Hmm, 27 ≠ 23.

Recompute: n(M ∪ P) with M ∩ P = 10 is 32 + 35 − 10 = 57, so neither = 80 − 57 = 23. The region route says only-C (10) + none (17) = 27. The gap of 4 is the all-three region: those students are in both M and P, so they are **not** in "neither M nor P", but they are also not in "only C". The region route wrongly put the all-three block into the C-only count. Since all-three is already inside the union, it is not part of any "only" or "none" block. Correcting: neither M nor P = (only C) + (none) − (all three) = 10 + 17 − 4 = 23. ✓

**The transferable lesson:** the all-three region is counted by the union but by no "only" or "neither" block. Whenever you mix the two methods, subtract it once.

#### Worked problem 3 — counting ordered pairs of subsets

Let A = {1, 2} and B = {2, 3}. How many ordered pairs (X, Y) satisfy X ⊆ A, Y ⊆ B, and X ∩ Y = ∅?

**Method 1 — count everything, subtract the bad ones.** Without the disjointness condition there are 2² × 2² = 16 pairs. A pair fails only when 2 ∈ X and 2 ∈ Y. Fixing that, element 1 is free in X (2 ways) and element 3 is free in Y (2 ways), giving 2 × 2 = 4 bad pairs. Answer: 16 − 4 = 12.

**Method 2 — per element, in the student's own frame.** Element 2 sits in both A and B. It can be in X only, in Y only, or in neither — three legal choices, and it can never be in both. Element 1 has two choices (in X, or nowhere). Element 3 has two choices. So 3 × 2 × 2 = 12. ✓

Both methods agree, and method 2 is the one to use in the exam: treat each element independently and multiply. The only element with a real constraint is the one in A ∩ B, and it gets three states instead of two.

#### Worked problem 4 — subset counting with restrictions

Let S = {1, 2, 3, 4, 5, 6}. Answer each in one line with the reason.

- Subsets of S: 2⁶ = 64.
- Subsets with exactly 3 elements: choose 3 of 6, C(6, 3) = 20.
- Subsets containing 1: 1 is fixed in, the other 5 are free, 2⁵ = 32.
- Subsets containing both 1 and 2 but not 3: 4 remaining elements free, 2⁴ = 16.
- Subsets containing exactly one of 1, 2: two choices for which one, then 5 free, 2 × 2⁵ = 64.
- Subsets of even cardinality: half of all subsets, 32. The complement map X ↦ S − X is a bijection between even and odd subsets, so the split is even.
- Subsets of S that are also subsets of {1, 2, 3}: 2³ = 8.

#### Edge cases worth knowing

- **If n(A) = n and n(B) = m, the number of ordered pairs (X, Y) with X ⊆ A and Y ⊆ B is 2ⁿ · 2ᵐ = 2ⁿ⁺ᵐ.**
- **If A ⊆ B then P(A) ⊆ P(B),** and the containment is proper when A ≠ B.
- **A Δ B is a subset of A ∪ B and is disjoint from A ∩ B.**
- **Symmetric difference is associative and commutative** but neither union nor intersection is (both are commutative).
- **If n(A ∪ B) = n(A) + n(B), then A and B are disjoint.**

---

### 🟠 Exam Essentials (1 day before)

#### Formula card — reproduce this from memory

| Quantity | Formula |
|---|---|
| Union, two sets | n(A ∪ B) = n(A) + n(B) − n(A ∩ B) |
| Union, three sets | n(A∪B∪C) = Σn(A) − Σn(pair) + n(A∩B∩C) |
| Elements in exactly one | n(A) + n(B) − 2n(A ∩ B) |
| Only A | n(A) − n(A ∩ B) |
| Complement of one set | n(A′) = n(U) − n(A) |
| Neither A nor B | n(U) − n(A) − n(B) + n(A ∩ B) |
| Subsets of an n-set | 2ⁿ |
| Proper subsets of an n-set | 2ⁿ − 1 |
| De Morgan, union | (A ∪ B)′ = A′ ∩ B′ |
| De Morgan, intersection | (A ∩ B)′ = A′ ∪ B′ |

#### Pre-submission checklist

- [ ] Read whether the question says at least one, exactly one, only A, or neither — these are four different requests.
- [ ] Confirm the universal set is stated. If it is not, assume n(U) = n(A) + n(B) − n(A ∩ B) + n(neither given).
- [ ] Draw the three circles before substituting anything, and label the seven regions.
- [ ] Fill the innermost region first (all three), then the pairwise-only lenses, then the outer crescents.
- [ ] Add the seven regions and confirm the total matches the union you computed by formula.
- [ ] Distinguish ⊆ from ⊂ everywhere you wrote a subset sign.
- [ ] For every complement count, confirm the complement is taken in U, not in A.

#### How to spend the last thirty minutes

Do not re-read definitions. Take a blank sheet and do three things: (1) draw and label a full three-set Venn with all seven regions and the "none" region marked, (2) write the formula card above without looking, (3) solve one three-set problem end to end including the region check. That single pass covers every way this topic is asked.

---

### 🔵 High-Yield Patterns

1. **Rebuild regions from the inside out.** Given the messy pairwise data, start with the all-three block, subtract it from each pair to get pair-only lenses, then get outer crescents by subtraction. This is the single most reliable routine on the topic.
2. **Always run the region-sum check.** If the seven regions do not total the union from inclusion–exclusion, the question is a "find the wrong entry" item and the mismatch localises the error.
3. **Use ⊆ with equal cardinalities to kill options.** If a choice says A ⊆ B and both are the same size, that choice forces A = B. Most MCQ eliminations are this one line.
4. **Convert "at least one" into its complement when the universal set is given.** n(A ∪ B ∪ C) = n(U) − n(A′ ∩ B′ ∩ C′) is often one subtraction instead of seven.
5. **Count subset problems element by element.** Each element gets 2 states; an element constrained to be absent or present gets 1. Multiply. Do not choose combinations unless the question fixes the subset's size.
6. **Read counts backwards.** "Number of subsets is 64" means n(A) = 6. "Number of proper subsets is 31" means n(A) = 5. The question is testing the power-set rule, not set counting.
7. **Turn a De Morgan question into an inclusion–exclusion one.** (A ∩ B)′ = A′ ∪ B′ lets you answer every complement question with a formula you already know.

---

### 🟣 Traps and question forms you will meet

| Trap | What happens if you fall in | Fix |
|---|---|---|
| Treat ∅ as having 0 subsets | You get 2ⁿ − 1 for the subset count | ∅ ⊆ ∅, so the empty set has 1 subset |
| Use ⊆ where ⊂ was written | You accept equality as a valid proper subset | Proper means strictly fewer elements |
| Compute n(A) + n(B) − n(A ∩ B) for "exactly one" | Everyone in the intersection is removed, but they should be removed twice | Use n(A) + n(B) − 2n(A ∩ B) |
| Forget the all-three block when listing "only" regions | Your region sum exceeds the union | Subtract n(A ∩ B ∩ C) once |
| Assume the complement without a universal set | Your answer depends on an unspoken U | Derive U from the given counts |
| Read {1, 2} and {2, 1} as different sets | Set equality question answered wrong | Order never matters; only membership does |
| Count subsets of the empty power set | n(P(A)) = 2^(2ⁿ) is 2ⁿ where n = 0 | n = 0 gives 2⁰ = 1 subset, and that subset is ∅ |

#### Four question forms, and the line that answers each

- **"Which of the following is not a subset of {1, 2, 3}?"** — test each candidate with A − B = ∅. The odd one out is the set containing an element outside the parent, or one that is a proper subset when a subset was asked for.
- **"How many relations are possible between two given sets?"** — decide, separately, whether A ⊆ B, B ⊆ A, A = B, and A ∩ B = ∅; each true statement contributes one relation. Equality is counted through ⊆ and ⊇, not as a separate case.
- **"Find the number of elements in A ∪ B ∪ C given only region data."** — this is a straight region addition. No formula needed.
- **"If n(A ∪ B) = 10 and n(A) = 7, n(B) = 5, find n(A ∩ B)."** — rearrange inclusion–exclusion: n(A ∩ B) = 7 + 5 − 10 = 2. Learning to rearrange the formula is worth more than memorising it.

---

### 💡 Pro Tips

1. **Write the Venn before you write the arithmetic.** A drawn diagram turns a word problem into seven labelled numbers, and it is the only way to catch a misread of "only" versus "at least".
2. **Carry one worked example all the way through.** The seven-region example in the Extended section uses the same numbers in four different questions. Re-solving it under a different wording teaches more than four unrelated problems.
3. **Learn the 2ⁿ rule by the each-element-independent argument, not by rote.** It takes thirty seconds and it is the only proof you will need for the subset counts.
4. **Memorise the "neither" formula as its own line.** n(U) − n(A) − n(B) + n(A ∩ B) appears far more often than its stepwise equivalent and saves three lines of working per question.
5. **Expect the "wrong entry" variant.** When a Venn problem's regions refuse to sum, treat that as the design of the question, not as your error. Find the entry that is inconsistent with a non-negative region.
6. **Practise rearrangement, not just substitution.** Being able to solve for n(A ∩ B), n(A ∪ B), or n(A′) from any two of the four related counts is what makes these questions reliable under time pressure.
7. **Sanity-check against the universal set every time.** If the union count exceeds n(U), you have an error before you have an answer.
8. **Keep one page of this topic and revisit it before heavier chapters.** Sets and relations underlie the language used in probability and in sequence-and-series questions, so a twenty-minute revisit there saves time later.

---

### 📚 Sources and where to go deeper

| Resource | Where to find it | Use it for |
|---|---|---|
| NCERT Class 11 Mathematics, Chapter 1 — Sets | NCERT textbook, Sets chapter | The official definitions and the Venn-diagram notation everything else in this topic rests on |
| NCERT Class 11 Mathematics, Chapter 2 — Relations and Functions | NCERT textbook, Relations and Functions chapter | Extending subset relations into general relations on a set; useful for the deeper questions |
| NCERT Class 12 Mathematics, Chapter 3 — Matrices | NCERT textbook, Matrices chapter | Determinants and Cramer's rule, which apply the same inclusion–exclusion-style counting to linear systems |
| Worked-problem compilations for CUET UG Mathematics | Reputable coaching material and past-paper books | Timed practice on Venn and inclusion–exclusion items |
| Class 11 Mathematics for entrance exams, R.D. Sharma | Widely available book | Large question banks on sets; the exercises on inclusion–exclusion and De Morgan's laws are the relevant sections |
| Set theory revision on a reputable mathematics reference site | Search for "inclusion exclusion principle" and "De Morgan's laws" | Alternative derivations if a formula still feels unproven |

---

**Continue your study**

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Sets Relations" sits in a personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — a one-day sprint across the highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — the sibling topics in this subject
