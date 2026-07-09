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
> Rapid summary for last-minute revision before your exam.

A **set** is a well-defined collection of distinct objects, written as A = {1, 2, 3}, and two sets are compared using **set relations** such as subset (⊆), proper subset (⊂), equality (=), and disjoint (∩ = ∅). The most-tested identity in CUET UG is the inclusion–exclusion formula: **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**, extended to three sets with the extra term **+ n(A ∩ B ∩ C)**. The **empty set ∅** is a subset of every set, and the **power set P(A)** has exactly **2ⁿ elements** where n = |A|. Memorise **De Morgan's laws**: (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′.

- Master ⊆ vs ⊂ vs = vs disjoint in one line each.
- Venn diagrams (circles inside a rectangle U) solve 2-set and 3-set counting.
- Examiner favourite: "How many subsets does a set with n elements have?" → **2ⁿ**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definitions and Notation

A set is denoted by capital letters (A, B, C) and its elements by lowercase letters. The symbol **∈** means "belongs to" and **∉** means "does not belong". The **universal set U** contains all objects under consideration, and the **complement** A′ = {x ∈ U : x ∉ A}. Two sets are **equal** when A ⊆ B and B ⊆ A; they are **disjoint** when A ∩ B = ∅.

#### Subset Relations

A ⊆ B holds when every element of A lies in B. A ⊂ B is a **proper subset** (A ⊆ B but A ≠ B). A set with n elements has 2ⁿ subsets and (2ⁿ − 1) proper subsets — a CUET favourite.

#### Set Operations

| Operation | Symbol | Meaning |
|-----------|--------|---------|
| Union | A ∪ B | x ∈ A **or** x ∈ B |
| Intersection | A ∩ B | x ∈ A **and** x ∈ B |
| Difference | A − B | x ∈ A **and** x ∉ B |
| Symmetric difference | A Δ B | (A − B) ∪ (B − A) |

> **Trap:** A − B ≠ B − A. Order changes the answer (e.g., {1,2} − {2,3} = {1} but {2,3} − {1,2} = {3}).

#### Counting Formulas (Inclusion–Exclusion)

For two sets: **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**.
For three sets: add all singles, subtract pairwise intersections, then add back the triple intersection. These appear in 2-mark MCQs almost every year.

#### De Morgan's Laws

(A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′. They convert "not (A or B)" into "(not A) and (not B)".

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example with Numbers

Let U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {2, 4, 6, 8, 10}, B = {3, 6, 9}, C = {6, 10}. Then n(A ∪ B) = 5 + 3 − 1 = 7 (only 6 is shared). Using three-set inclusion–exclusion: n(A ∪ B ∪ C) = 5 + 3 + 2 − 1 − 1 − 0 + 1 = 9. The complement n((A ∪ B ∪ C)′) = 10 − 9 = 1, which is the single element {1}.

#### Common Mistakes

- Writing ∅ as an **element** of A when it should be a **subset** (∅ ⊆ A is always true).
- Forgetting to subtract n(A ∩ B), causing the union count to overshoot.
- Confusing **proper subset** (strict) with **subset** (allows equality).
- Applying De Morgan's laws in the wrong direction on complement questions.

#### Connections and Edge Cases

The **power set** P(A) = {X : X ⊆ A} always contains ∅ and A itself. If |A| = 0 then |P(A)| = 1; if |A| = 1 then |P(A)| = 2. The **symmetric difference** A Δ B equals (A ∪ B) − (A ∩ B), useful when the question asks for elements belonging to *exactly one* of the two sets. **Venn diagram** regions for three sets split the universal set into 8 disjoint zones — a CUET trick question labels each zone and asks for n of one zone given the others.

> **Strategy tip:** For CUET UG, this topic carries ~3% weight but questions are direct and scoring. Spend under 30 minutes revising definitions, the four formulas above, and one 3-circle Venn diagram. Skip proof-based extension (axiomatic set theory, Russell's paradox) — it is out of syllabus.

#### Practice Prompts

1. If n(A) = 12, n(B) = 15, n(A ∩ B) = 4, n(U) = 30, find n(A′ ∩ B′).
2. How many proper subsets does a set with 5 elements have? (Answer: 31.)

---

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Sets Relations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
