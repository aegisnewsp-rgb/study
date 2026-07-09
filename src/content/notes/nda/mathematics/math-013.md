---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-013
topicName: Boolean Algebra
weight: 2
country: india
generated: "2026-03-24T08:32:07.811331"
lastUpdated: "2026-07-09"
diagramPrompt: "Mathematical diagram showing Boolean Algebra concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Boolean Algebra

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Boolean Algebra** operates on the two-element set *B* = {0, 1} using three operations: OR (**+**), AND (**·**), and NOT (′, pronounced "bar" or "complement"). A Boolean variable can only hold 0 or 1 — never 2, never a fraction. The most-tested identity in NDA is **De Morgan's Theorem**: *(A·B)′ = A′ + B′* and *(A + B)′ = A′·B′*.

> **Exam pointer:** The trap question asks "what is 1 + 1 in Boolean algebra?" Answer: **1**, because OR saturates at 1.

| Identity | AND form | OR form |
|---|---|---|
| Identity | A · 1 = A | A + 0 = A |
| Complement | A · A′ = 0 | A + A′ = 1 |
| Idempotent | A · A = A | A + A = A |

Remember **precedence**: NOT binds first, then AND, then OR. NAND/CDS aspirants get 1–2 MCQs from this topic every year, usually worth 3–4 marks.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and Huntington's Postulates

A **Boolean Algebra** is an algebraic structure *(B, +, ·, ′)* satisfying: closure under + and ·, commutativity and associativity of both, distributivity of · over + (and + over ·), existence of distinct identity elements **0** and **1**, and existence of a complement A′ for every element A. The set {0, 1} with OR, AND, NOT is the simplest instance and is the only Boolean algebra needed for NDA questions.

#### Core Laws with Variables Defined

Let *A, B, C ∈ {0, 1}*. All quantities are dimensionless logical values.

- **Identity Law:** *A + 0 = A* and *A · 1 = A*
- **Complement Law:** *A + A′ = 1* and *A · A′ = 0*
- **Idempotent Law:** *A + A = A* and *A · A = A*
- **Domination Law:** *A + 1 = 1* and *A · 0 = 0*
- **Distributive Law:** *A · (B + C) = A·B + A·C* and *A + (B·C) = (A + B)·(A + C)*
- **Involution Law:** *(A′)′ = A*

#### De Morgan's Theorem

The single most heavily tested identity. **De Morgan's Theorem** states that the complement of a sum equals the product of complements, and vice versa:

*(A + B)′ = A′ · B′* and *(A · B)′ = A′ + B′*

where *A, B ∈ {0, 1}*. The rule generalises to n variables: the complement of any Boolean expression is obtained by swapping + with · and complementing every variable individually.

#### Duality Principle

The **dual** of any Boolean identity is obtained by simultaneously swapping + ↔ · and 0 ↔ 1, leaving variables untouched. The dual of *A + 0 = A* is *A · 1 = A*. If one identity is true, its dual is automatically true — examiners test this by asking the dual form of a given identity.

#### Switching Circuits

Boolean algebra models switching networks directly. A **closed switch = 1**, an **open switch = 0**, series connection = AND (·), parallel connection = OR (+), and an inverter (NOT gate) corresponds to the complement operation. The expression *(A + B) · A′* describes a parallel block A+B in series with the complement of A.

#### Typical NDA Question Types

1. Evaluate a 2- or 3-variable expression using a given truth-table excerpt.
2. Apply De Morgan's theorem to simplify a complemented sum/product.
3. Identify the dual of a stated identity.
4. Translate a verbal statement ("at least one of X or Y is false") into symbols.

> **Scoring tip:** Always build the truth table for unfamiliar expressions — even partial tables eliminate distractors in seconds.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Micro-Example

Simplify *F = A′B + AB + A′B′*.

Step 1 — apply complement law on the first two terms: *A′B + AB = (A′ + A)·B = 1·B = B*.
Step 2 — F reduces to *B + A′B′*.
Step 3 — factor B: *B(1 + A′B′) = B · 1 = B*. So **F = B**. A truth table over (A, B) ∈ {0,1}² confirms F equals B for all four input rows.

#### Minterms, Maxterms, SOP and POS

A **minterm** is a product (AND) containing every variable exactly once, either complemented or uncomplemented. For 3 variables there are 2³ = 8 minterms: *A′B′C′*, *A′B′C*, *A′BC′*, …, *ABC*. A **maxterm** is the corresponding sum (OR) form. **Sum of Products (SOP)** is a disjunction of minterms selected from a truth-table row where the function equals 1; **Product of Sums (POS)** is a conjunction of maxterms where the function equals 0. NDA questions occasionally ask students to write the SOP form from a small truth table.

#### Edge Cases and Operator Traps

- **Precedence pitfall:** Without brackets, *A + B · C′* parses as *A + (B · C′)*, not *(A + B) · C′*. Neglecting this yields a wrong truth table.
- **Subtraction fallacy:** A′ is **not** *A − 1*; it is logical negation. For *A = 0*, A′ = 1; for *A = 1*, A′ = 0.
- **Arithmetic contamination:** Many aspirants write *1 + 1 = 2* — Boolean OR gives *1 + 1 = 1* because the result must stay in {0, 1}.
- **Dual-of-dual:** The dual of a dual is the original expression; this is occasionally framed as a verification MCQ.

#### Connections to Adjacent NDA Topics

Boolean algebra bridges **Set Theory** (union ↔ OR, intersection ↔ AND, complement ↔ NOT, with Venn diagrams providing geometric proof) and **Propositional Logic** (∨, ∧, ¬ mirror +, ·, ′ exactly). It also seeds **Probability** foundations, where events combine with AND/OR under independence assumptions. Mastery here reduces friction in higher algebra chapters and in reasoning-based questions.

> **Exam strategy:** Boolean Algebra carries ~2% weight in NDA Paper I. Treat it as a 4–6 minute sub-section: memorise De Morgan's both forms, the four basic laws, and the dual of each, then practise 15 MCQs from previous UPSC papers.

#### Practice Prompts

1. Using De Morgan's theorem, simplify *(A + B′)′* and state its dual.
2. Draw the switching circuit for *F = (A + B) · (A′ + C)* and identify the input combination (A, B, C) that forces F = 0.

---

## Continue your study

- **[View this topic in your NDA roadmap](/roadmap/?exam=nda&duration=1mo)** — see where "Boolean Algebra" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nda&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NDA exam overview](/exams/nda/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/nda/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
