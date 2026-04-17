---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-022
topicName: Mathematical Reasoning
weight: 3
country: india
generated: "2026-04-17T23:06:00.000000"
diagramPrompt: "Clean educational diagram showing Mathematical Reasoning logical connectives with clear labels, white background, exam-style illustration"





---
# Mathematical Reasoning

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Mathematical Reasoning** — Key Facts for JEE Main
Statement: a sentence that is either true (T) or false (F), not both
Logical connectives: AND (∧), OR (∨), NOT (¬), IMPLIES (→), IF AND ONLY IF (↔)
Truth table: builds compound statement truth values
Converse: q → p; Inverse: ¬p → ¬q; Contrapositive: ¬q → ¬p
Tautology: always true; Contradiction: always false
⚡ Exam tip: Contrapositive (¬q → ¬p) is logically equivalent to original implication (p → q) — this is frequently tested!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Mathematical Reasoning** — JEE Main Study Guide

**Types of statements:**
- Simple statement: p, q, r (single truth value)
- Compound statement: built using connectives

**Truth tables:**
- p ∧ q: true only when both p and q are true
- p ∨ q: false only when both are false
- ¬p: opposite truth value of p
- p → q: false only when p is true and q is false
- p ↔ q: true when both have same truth value (both true or both false)

**Implication (p → q):**
True unless p is true and q is false
p is sufficient condition for q; q is necessary condition for p

**Converse, Inverse, Contrapositive:**
- Original: p → q
- Converse: q → p
- Inverse: ¬p → ¬q
- Contrapositive: ¬q → ¬p
Contrapositive is logically equivalent to original!

**Negation:**
- ¬(p ∧ q) ≡ ¬p ∨ ¬q (De Morgan's law)
- ¬(p ∨ q) ≡ ¬p ∧ ¬q (De Morgan's law)
- ¬(p → q) ≡ p ∧ ¬q
- ¬(p ↔ q) ≡ (p ∧ ¬q) ∨ (¬p ∧ q)

**Tautology and contradiction:**
- Tautology: compound statement always true (e.g., p ∨ ¬p)
- Contradiction: compound statement always false (e.g., p ∧ ¬p)
- Contingency: neither always true nor always false

**Valid forms:**
- Modus ponens: p → q, p ∴ q
- Modus tollens: p → q, ¬q ∴ ¬p
- Hypothetical syllogism: p → q, q → r ∴ p → r
- Disjunctive syllogism: p ∨ q, ¬p ∴ q

**Understanding "if" statements:**
- "If p then q" means whenever p is true, q must be true
- p → q is equivalent to ¬p ∨ q
- Only p being true and q being false makes p → q false

- **Key formula:** ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q; contrapositive of p → q is ¬q → ¬p (equivalent!)
- **Common trap:** Converse and inverse are NOT equivalent to original — only contrapositive is equivalent!
- **Exam weight:** 1 question per year (4 marks); can be tricky if truth tables aren't mastered

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Mathematical Reasoning** — Comprehensive JEE Main Notes

**Equivalent statements:**
Two statements are equivalent if they have identical truth tables

**Common equivalences:**
- p → q ≡ ¬p ∨ q
- p ↔ q ≡ (p → q) ∧ (q → p) ≡ (¬p ∨ q) ∧ (¬q ∨ p)
- p → q ≡ ¬q → ¬p (contrapositive)
- p → q ≠ q → p (converse is different!)
- p ↔ q ≡ (p ∧ q) ∨ (¬p ∧ ¬q)

**Proof techniques:**
- Direct proof: assume p, prove q
- Proof by contradiction: assume p and ¬q, derive contradiction
- Proof by contrapositive: assume ¬q, prove ¬p
- Proof by exhaustion: check all possible cases

**Logical arguments validity:**
An argument is valid if whenever all premises are true, the conclusion is also true
Validity is about structure, not about whether premises are actually true!

**Common valid argument forms:**
- Modus ponens: [(p → q) ∧ p] → q
- Modus tollens: [(p → q) ∧ ¬q] → ¬p
- Chain rule: [(p → q) ∧ (q → r)] → (p → r)

**Common fallacies:**
- Affirming consequent: [(p → q) ∧ q] → p (invalid!)
- Denying antecedent: [(p → q) ∧ ¬p] → ¬q (invalid!)

**Sets and logic connection:**
- Union (∪) corresponds to OR (∨)
- Intersection (∩) corresponds to AND (∧)
- Complement corresponds to NOT (¬)
- A ⊆ B is equivalent to (x ∈ A → x ∈ B)

**De Morgan's laws:**
- ¬(A ∪ B) = ¬A ∩ ¬B
- ¬(A ∩ B) = ¬A ∪ ¬B

**Distributive laws:**
- p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)
- p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)

**Absorption laws:**
- p ∧ (p ∨ q) ≡ p
- p ∨ (p ∧ q) ≡ p

**Double negation:**
¬(¬p) ≡ p

**Constructing truth tables:**
1. List all possible combinations of truth values for component statements
2. Calculate truth value of each compound part
3. Determine final truth value of full statement

**Logical circuit equivalence:**
- AND gate: two inputs, output 1 only when both are 1
- OR gate: two inputs, output 0 only when both are 0
- NOT gate: inverts input

**Predicates and quantifiers:**
- ∀x: for all x (universal quantifier)
- ∃x: there exists x (existential quantifier)
- ¬∀x P(x) ≡ ∃x ¬P(x)
- ¬∃x P(x) ≡ ∀x ¬P(x)

**Writing negations with quantifiers:**
- "All birds can fly": ∃ a bird that cannot fly
- "Some students are absent": All students are present

- **Remember:** p → q is false only when p is true and q is false; contrapositive ¬q → ¬p is equivalent to p → q; De Morgan's: ¬(p ∧ q) = ¬p ∨ ¬q
- **Previous years:** "If p is true and q is false, find truth value of (p ∧ q) → p" [2023]; "Write converse, inverse, contrapositive of 'If it rains, I stay home'" [2024]; "Show that (p → q) ≡ (¬q → ¬p)" [2024]

---

## 📊 JEE Main Exam Essentials

| Detail | Value |
|---|---|
| Questions | 90 (30 per subject) |
| Time | 3 hours |
| Marks | 300 (90 per subject) |
| Section | Physics (30), Chemistry (30), Mathematics (30) |
| Negative | −1 for wrong answer |
| Mode | Computer-based |

### 🎯 High-Yield Topics for JEE Main Mathematics
- Calculus (Differentiation + Integration) — ~35 marks combined
- Coordinate Geometry (straight lines, circles, conics) — ~20 marks
- Algebra (Complex Numbers, Quadratics, P&C, Probability) — ~25 marks
- Trigonometry + Inverse Trigonometry — ~15 marks
- Vector + 3D — ~15 marks

### 📝 Previous Year Question Patterns
- Mathematical Reasoning: 1 question per year, 4 marks
- Common patterns: truth table construction, identify tautology/contradiction, contrapositive, logical equivalence
- Weight: low frequency, but scoring if concepts are clear

### 💡 Pro Tips
- Always build truth table column by column for complex statements
- p → q is logically equivalent to ¬p ∨ q — this helps in evaluating
- Remember: only contrapositive is equivalent to original; converse and inverse are NOT equivalent
- De Morgan's laws are frequently used — practice applying them
- For negating statements with quantifiers, flip the quantifier and negate the predicate

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*