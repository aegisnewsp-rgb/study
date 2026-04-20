---
exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-20
topicName: Sets and Set Theory
weight: 3
country: ng
generated: "2026-03-24T08:32:07.741774"
diagramPrompt: "Euler-Venn diagram showing two intersecting sets A and B with region shading, set notation labels U for universal set, A ∩ B for intersection, A ∪ B for union, and A' for complement, clean black and white style"
---

# Sets and Set Theory

Sets and Set Theory is one of the foundational topics in JAMB Mathematics. It deals with the study of collections of objects, called sets, and the relationships between them. Though it may seem simple, questions from this topic appear consistently in the JAMB UTME, and understanding sets thoroughly can earn you quick marks. This topic also lays the groundwork for probability and statistics, which are also tested in JAMB.

In this comprehensive guide, you will learn every concept you need for JAMB — from basic definitions to applied Venn diagram problems that appear year after year in the exam.

---

## 🟢 Lite — Quick Review (1h–1d)

**Sets and Set Theory** — Rapid Facts for Last-Minute Revision

- A **set** is a well-defined collection of distinct objects
- Sets are written with curly braces: A = {1, 2, 3}
- **Universal set (U)** contains all elements under consideration
- **Subset (⊆)**: Every element of A is also in B
- **Proper subset (⊂)**: A ⊂ B and A ≠ B
- **Empty set (∅)**: A set with no elements
- **Cardinality n(A)**: Number of elements in set A
- **Complement (A')**: Elements in U but not in A
- **Union (A ∪ B)**: Elements in A OR B OR both
- **Intersection (A ∩ B)**: Elements in BOTH A and B

**⚡ Exam Quick Tip:** If you see a Venn diagram question, always identify the universal set first. Then shade the requested region. JAMB often asks for the number of elements in a specific region — draw the Venn diagram and fill in values step by step.

---

## 🟡 Standard — Regular Study (2d–2mo)

### What is a Set?

A set is simply a collection of distinct objects that are grouped together as a single entity. The objects in a set are called **elements** or **members**. We use the symbol **∈** to mean "belongs to" and **∉** to mean "does not belong to."

**Examples:**
- A = {2, 4, 6} means 2 ∈ A, 3 ∉ A
- N = {1, 2, 3, 4, ...} represents the set of natural numbers

Sets can be described in two ways:
1. **Roster/Listing method**: Writing all elements within braces, e.g., A = {a, e, i, o, u}
2. **Set-builder notation**: Describing properties, e.g., A = {x : x is a vowel in the English alphabet}

### Types of Sets

| Type | Definition | Example |
|------|-----------|---------|
| **Empty set (∅ or {})** | No elements at all | B = {} (students with 3 heads) |
| **Universal set (U)** | Contains all possible elements under consideration | U = {students in your class} |
| **Finite set** | Has a limited number of elements | C = {days of the week} |
| **Infinite set** | Has unlimited elements | D = {all natural numbers} |
| **Equal sets** | Same elements regardless of order | {1,2,3} = {3,2,1} |
| **Equivalent sets** | Same number of elements | {a,b} and {1,2} |

### Set Operations

**Union (A ∪ B):** All elements that belong to A or B or both.
- Example: If A = {1,2,3} and B = {3,4,5}, then A ∪ B = {1,2,3,4,5}

**Intersection (A ∩ B):** Elements common to both A and B.
- Example: A ∩ B = {3}

**Complement (A'):** All elements in the universal set that are NOT in A.
- Example: If U = {1,2,3,4,5} and A = {2,4}, then A' = {1,3,5}

**Difference (A \ B):** Elements in A but NOT in B.
- Example: A \ B = {1,2}

### Venn Diagrams

Venn diagrams are visual representations of sets and set operations. The universal set is usually represented by a rectangle, and individual sets are shown as circles inside it.

For JAMB, you must be able to:
- Interpret Venn diagrams and find the number of elements in each region
- Solve problems involving two or three sets
- Apply the formula: n(A ∪ B) = n(A) + n(B) − n(A ∩ B)

**Important Formula for Two Sets:**
n(A ∪ B) = n(A) + n(B) − n(A ∩ B)

Therefore:
n(A ∩ B) = n(A) + n(B) − n(A ∪ B)

For three sets:
n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)

### Worked JAMB Example

**Question (based on typical JAMB pattern):** In a class of 40 students, 25 offer Mathematics (M) and 20 offer English (E). If 10 offer both subjects, how many offer neither?

**Solution:**
- Total students n(U) = 40
- n(M) = 25, n(E) = 20, n(M ∩ E) = 10
- n(M ∪ E) = n(M) + n(E) − n(M ∩ E) = 25 + 20 − 10 = 35
- Students offering neither = n(U) − n(M ∪ E) = 40 − 35 = **5**

---

## 🔴 Extended — Deep Study (3mo+)

### De Morgan's Laws

For any sets A and B within universal set U:
1. **(A ∪ B)' = A' ∩ B'** (The complement of the union is the intersection of complements)
2. **(A ∩ B)' = A' ∪ B'** (The complement of the intersection is the union of complements)

These laws are frequently tested in JAMB. Learn to recognise when to apply each one.

### Properties of Sets

- **Commutative**: A ∪ B = B ∪ A; A ∩ B = B ∩ A
- **Associative**: (A ∪ B) ∪ C = A ∪ (B ∪ C); (A ∩ B) ∩ C = A ∩ (B ∩ C)
- **Distributive**: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C); A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
- **Identity**: A ∪ ∅ = A; A ∩ U = A
- **Idempotent**: A ∪ A = A; A ∩ A = A

### Three-Set Venn Diagram Problems

When working with three sets (A, B, C), draw three overlapping circles and systematically fill in each region:

1. Start with the **triple intersection** n(A ∩ B ∩ C) if given
2. Fill the **pairwise intersections** (subtract triple intersection to avoid double-counting)
3. Fill each **individual set region** (subtract intersections)
4. Fill the **outside region** = U minus all regions inside

**Typical JAMB Question Pattern:**
"In a survey of 100 students, 60 offer Physics, 50 offer Chemistry, and 45 offer Biology. If 20 offer Physics and Chemistry, 25 offer Physics and Biology, 15 offer Chemistry and Biology, and 10 offer all three subjects, find the number of students who offer none."

### Application to Probability

Sets form the foundation of probability theory tested in JAMB Mathematics:
- **P(A)** = n(A)/n(U) for equally likely outcomes
- **P(A ∪ B)** = P(A) + P(B) − P(A ∩ B)
- **Mutually exclusive events**: P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)
- **Independent events**: P(A ∩ B) = P(A) × P(B)

---

## 📝 JAMB Exam Tips and Common Mistakes

**1. Confusing "∩" and "∪" in word problems:**
When a question says "offer Mathematics **and** English," it means intersection (M ∩ E). When it says "offer Mathematics **or** English," it means union (M ∪ E). Many students lose marks by misreading these keywords.

**2. Forgetting to subtract the intersection when finding the union:**
The formula n(A ∪ B) = n(A) + n(B) − n(A ∩ B) is essential. If you add without subtracting, you double-count the intersection and get the wrong answer.

**3. Not drawing the Venn diagram first:**
Even if the question doesn't ask for a diagram, drawing one helps you visualise the problem and avoid mistakes. JAMB questions from this topic are almost always easier when you sketch first.

**4. Assuming sets are mutually exclusive when they aren't:**
Unless the question explicitly states that sets have no common elements, always assume there could be an intersection. Check your work by verifying that your totals don't exceed the universal set.

**5. Mixing up complement and difference:**
Complement (A') means "NOT in A" relative to the universal set. Difference (A \ B) means "in A but NOT in B." Know which operation the question is asking for.

---

## 🎯 Study Priority and Order

For JAMB preparation, study sets in this order:

1. **First:** Basic definitions and types of sets — these are quick to learn and often tested directly
2. **Second:** Set operations (union, intersection, complement, difference) — practice with numerical examples
3. **Third:** Venn diagrams with two sets — the most common question type in JAMB
4. **Fourth:** Venn diagrams with three sets — harder but very testable
5. **Fifth:** De Morgan's laws and set properties — application-based questions
6. **Finally:** Application to probability — connects with Statistics topic

**Priority in JAMB:** Sets and Venn diagrams appear in roughly 1-2 questions per UTME. They are moderate priority — not as frequent as algebra but easier to secure marks once you understand the operations.

---

## 🔗 Related Topics to Study Next

- **Probability** — builds directly on set theory concepts
- **Statistics** — uses set notation and cardinality concepts
- **Logic and Reasoning** — shares the analytical approach used in set problems
- **Indices and Logarithms** — another foundational algebra topic frequently tested alongside sets

---

## 📚 Recommended Practice

1. Solve all JAMB past questions on sets from 2010–2024
2. Practice at least 20 Venn diagram problems with two and three sets
3. Memorise the key formulas: n(A ∪ B), n(A ∩ B), and De Morgan's laws
4. Time yourself — aim to solve each set problem in under 2 minutes

Remember: Sets is a topic where consistent practice pays off immediately. Once you understand the operations and can draw Venn diagrams accurately, every question on this topic becomes solvable.

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
