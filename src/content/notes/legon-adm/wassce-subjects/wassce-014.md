---
exam: legon-adm
examName: Legon Admissions (Ghana)
subject: quant
subjectName: Wassce Subjects
topic: wassce-014
topicName: Topic 14
weight: 3
country: legon
generated: "2026-03-25T17:00:00"
---

# Topic 14: Sets and Venn Diagrams

### 🟢 Lite — Quick Review (1h–1d)

A set is a well-defined collection of distinct objects, called elements or members. The notation uses curly brackets: A = {2, 4, 6, 8} represents the set of even numbers from 1 to 8. The universal set, denoted by ξ or U, contains all the elements under consideration for a particular discussion. The empty set, denoted by ∅ or {}, contains no elements at all. Set relationships—subsets, unions, intersections, and complements—are visualised using Venn diagrams, which use overlapping circles to show logical relationships between sets.

The Venn diagram was introduced by British mathematician John Venn in 1880 as a way of visually representing sets and their relationships. Today it remains an essential tool for solving logical problems involving categories and groupings. Understanding set notation and operations is crucial for the WASSCE quantitative reasoning paper, where questions frequently test your ability to interpret and manipulate sets.

**Key Facts:**
- n(A) denotes the number of elements in set A
- ∈ means "is an element of"; ∉ means "is not an element of"
- ⊆ means "is a subset of"; ⊂ means "is a proper subset of"
- ∪ denotes union (elements in A or B or both)
- ∩ denotes intersection (elements in both A and B)
- A' denotes complement of A (all elements not in A)
- For any set A: A ∪ A' = ξ, A ∩ A' = ∅
- n(A ∪ B) = n(A) + n(B) - n(A ∩ B)

⚡ **Exam Tip:** In WASSCE questions involving set word problems, always draw a Venn diagram first. Label the regions with the number of elements in each, working from the intersection outward.

---

### 🟡 Standard — Regular Study (2d–2mo)

**Set Notation and Operations**

Given: ξ = {1, 2, 3, 4, 5, 6, 7, 8}, A = {2, 4, 6, 8}, B = {3, 6, 7}

Find: A ∪ B, A ∩ B, A', n(B)

A ∪ B = {2, 3, 4, 6, 7, 8} (all elements in either set)
A ∩ B = {6} (elements in both sets)
A' = {1, 3, 5, 7} (elements not in A)
n(B) = **3**

**Venn Diagram — Complement**

In a class of 30 students, 18 study Mathematics (M) and 15 study Physics (P). If 10 study both subjects, find how many study neither.

Using n(M ∪ P) = n(M) + n(P) - n(M ∩ P):
n(M ∪ P) = 18 + 15 - 10 = 23
Students studying neither = 30 - 23 = **7 students**

**Venn Diagram — Three Sets**

In a survey of 100 people: 60 read newspaper A, 50 read newspaper B, and 30 read newspaper C. If 20 read both A and B, 15 read both B and C, 10 read both A and C, and 5 read all three:

First, fill in the centre (all three): 5
A ∩ B only (not C): 20 - 5 = 15
B ∩ C only (not A): 15 - 5 = 10
A ∩ C only (not B): 10 - 5 = 5
A only: 60 - 15 - 5 - 10 = 30
B only: 50 - 15 - 5 - 10 = 20
C only: 30 - 10 - 5 - 5 = 10
Outside all: 100 - (30+20+10+15+5+10+5) = **5**

**Set Identities**

- Commutative: A ∪ B = B ∪ A; A ∩ B = B ∩ A
- Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C); (A ∩ B) ∩ C = A ∩ (B ∩ C)
- Distributive: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C); A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
- De Morgan's Laws: (A ∪ B)' = A' ∩ B'; (A ∩ B)' = A' ∪ B'

**Comparison Table: Set Operations**

| Operation | Symbol | Meaning | Venn Diagram Region |
|-----------|--------|---------|---------------------|
| Union | A ∪ B | In A or B or both | Both circles entirely |
| Intersection | A ∩ B | In both A and B | Overlap only |
| Complement | A' | Not in A | Everything outside A |
| Difference | A \ B | In A but not in B | A minus the overlap |
| Symmetric difference | A Δ B | In A or B but not both | Non-overlapping parts |

**Solving Problems Using Venn Diagrams**

In a group of 45 students: 28 play football (F), 20 play basketball (B), and 10 play neither. If 8 play both sports, find how many play exactly one sport.

Students playing at least one sport: 45 - 10 = 35
Using: n(F ∪ B) = n(F) + n(B) - n(F ∩ B)
35 = 28 + 20 - n(F ∩ B)
35 = 48 - n(F ∩ B)
n(F ∩ B) = 48 - 35 = **13**

But this contradicts the given 8 who play both! Rechecking:
n(F ∪ B) = 28 + 20 - 8 = 40
Students playing neither = 45 - 40 = **5** (consistent)

Exactly one sport:
- F only: 28 - 8 = **20**
- B only: 20 - 8 = **12**

**Common Mistakes to Avoid:**
1. Confusing union (∪) with intersection (∩)
2. Forgetting to subtract the intersection when adding two sets
3. Misreading "neither" as "both"
4. In three-set problems, forgetting to subtract the double-counted overlaps
5. Confusing "at least one" with "exactly one"

**Problem-Solving Strategy:**
1. Identify all sets mentioned and define them clearly
2. Note what information is given (individual counts, intersections, universal set)
3. Draw a Venn diagram, starting with the intersection
4. Work outward, subtracting from larger regions
5. Use the formula n(A ∪ B) = n(A) + n(B) - n(A ∩ B) when appropriate
6. Answer the specific question asked

---

### 🔴 Extended — Deep Study (3mo+)

**Proving Set Identities Using Venn Diagrams**

To prove (A ∪ B)' = A' ∩ B' (De Morgan's Law):

The left side (A ∪ B)' is the region outside both circles.
The right side A' ∩ B' is the region outside A AND outside B—also the region outside both circles.
Since both sides represent the same region, they are equal. Q.E.D.

**Algebra of Sets**

The following laws govern set operations:

*Identity Laws:*
- A ∪ ∅ = A
- A ∩ ξ = A

*Domination Laws:*
- A ∪ ξ = ξ
- A ∩ ∅ = ∅

*Idempotent Laws:*
- A ∪ A = A
- A ∩ A = A

*Double Complement Law:*
- (A')' = A

**Three-Set Problem Formula**

For three sets A, B, C:
n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(A ∩ C) - n(B ∩ C) + n(A ∩ B ∩ C)

In a village of 100 people: 50 grow cocoa, 40 grow maize, 30 grow groundnuts. If 20 grow cocoa and maize, 15 grow cocoa and groundnuts, 10 grow maize and groundnuts, and 5 grow all three crops:

n(A ∪ M ∪ G) = 50 + 40 + 30 - 20 - 15 - 10 + 5 = **80**
People growing none = 100 - 80 = **20**

**Indexed Sets and Families**

For the universal set of integers, define:
Evens = {2, 4, 6, 8, ...}
Primes = {2, 3, 5, 7, 11, 13, ...}
Perfect squares = {1, 4, 9, 16, 25, ...}

Set operations on these:
Evens ∩ Primes = {2} (2 is the only even prime)
Evens ∩ Perfect squares = {4, 16, 36, 64, ...}

**Partitions**

A partition of a set divides it into non-overlapping subsets that cover the entire set. If A and B are non-empty subsets of S such that A ∩ B = ∅ and A ∪ B = S, then {A, B} is a partition of S.

**Boolean Algebra Connection**

Set operations satisfy the same laws as Boolean algebra:
- Union behaves like OR
- Intersection behaves like AND
- Complement behaves like NOT

This connection underlies all digital computer logic and circuit design—a profound application of seemingly abstract set theory.

**WASSCE Examination Patterns:**

The WASSCE quantitative reasoning paper typically includes:
1. Set notation interpretation (Objective)
2. Finding unions, intersections, and complements (Objective)
3. Venn diagram problems involving two sets (Objective and Theory)
4. Three-set Venn diagram problems (Theory)
5. Set identities and algebraic manipulation (Theory)

**Essential Formulas:**
- n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
- n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A∩B) - n(A∩C) - n(B∩C) + n(A∩B∩C)
- n(A') = n(ξ) - n(A)
- A ⊆ B if and only if every element of A is also in B

⚡ **Pro Exam Tip:** In WASSCE, when solving three-set Venn diagram problems, always calculate the "exactly one" regions first. Use the formula: exactly one = total in all three - (two-element overlaps) - 2(three-element overlap) before finding individual single regions.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
