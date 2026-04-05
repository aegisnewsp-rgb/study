---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Academic Potential
topic: academ-009
topicName: Logical Reasoning — Deductive
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
---

# Logical Reasoning — Deductive

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Deductive reasoning moves from general principles to specific conclusions. If the premises are true and the logic is valid, the conclusion MUST be true. The classic form is: All A are B. C is an A. Therefore C is B. In the UI entrance test, deductive reasoning questions assess your ability to evaluate logical arguments and identify valid conclusions.

**Key Logical Forms:**
- Modus ponens: If P then Q. P is true. Therefore Q is true. ✓ (Valid)
- Modus tollens: If P then Q. Q is false. Therefore P is false. ✓ (Valid)
- Affirming the consequent: If P then Q. Q is true. Therefore P is true. ✗ (Invalid — converse error)
- Denying the antecedent: If P then Q. P is false. Therefore Q is false. ✗ (Invalid — inverse error)

**Key Facts:**
- A valid deductive argument guarantees the conclusion if the premises are true
- A sound argument is valid AND has true premises
- Counterexamples can disprove universal statements: "All X are Y" is disproved by a single X that is not Y
- The converse and inverse of "If P then Q" are NOT logically equivalent to the original

⚡ **Exam Tip:** In the UI entrance test, for "which conclusion follows" questions, test each answer choice against the premises. A conclusion follows if it is necessarily true (cannot possibly be false while premises are true). Look for answer choices that are too weak ("might be true") or too strong (require additional assumptions beyond the premises).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Syllogisms**

A syllogism is a deductive argument with two premises and a conclusion.

*Categorical syllogism:*
Premise 1: All WASSCE candidates are senior secondary students.
Premise 2: Some senior secondary students study Mathematics.
Conclusion: ? → "Some WASSCE candidates study Mathematics" does NOT follow (we don't know the overlap). "Some WASSCE candidates are senior secondary students" is just restating premise 1. No valid conclusion necessarily follows.

*Conditional syllogism:*
If it rains (P), the ground is wet (Q). It rained. → The ground is wet. ✓ (Modus ponens)
If it rains (P), the ground is wet (Q). The ground is not wet. → It did not rain. ✓ (Modus tollens)

**Evaluating Arguments**

To evaluate a deductive argument:
1. Identify the premises and conclusion
2. Check whether the conclusion necessarily follows from the premises
3. Look for hidden assumptions that might be false
4. Check for common logical fallacies

Example argument: "All students who pass the entrance exam are admitted. Ani passed the entrance exam. Therefore, Ani is admitted."
This is valid modus ponens. The conclusion follows necessarily IF the premises are true.

**Identifying Valid Conclusions**

Example premises:
1. All students who study medicine are science students.
2. Some students in the scholarship programme study medicine.

What follows?
- "Some scholarship programme students are science students" — possible but not necessary (the overlap could be empty? Wait — some scholarship students study medicine, and all medicine students are science students. So at least one scholarship student is studying medicine AND is a science student. This follows: SOME scholarship students who study medicine are science students. So some scholarship students are science students. ✓)

**Negation and Contrapositive**

The contrapositive of "If P then Q" is "If not Q then not P." The contrapositive is logically equivalent to the original statement.
The converse is "If Q then P" — NOT equivalent.
The inverse is "If not P then not Q" — NOT equivalent.

Example: "If it is a cat, it is a mammal."
Contrapositive: "If it is not a mammal, it is not a cat." ✓ (Equivalent)
Converse: "If it is a mammal, it is a cat." ✗ (False — dogs are mammals but not cats)
Inverse: "If it is not a cat, it is not a mammal." ✗ (False — dogs again)

**Sets and Venn Diagrams**

In Venn diagrams:
- "All A are B" → circle A is entirely inside circle B
- "Some A are B" → circles A and B overlap
- "No A are B" → circles A and B are separate
- "Some A are not B" → part of circle A lies outside circle B

Example: All physicists are scientists. Some scientists are women. What can be concluded?
At least one woman is a scientist who might or might not be a physicist. We cannot conclude any overlap between physicists and women. The Venn diagram shows physicists entirely within scientists, with women overlapping the scientists circle — they might or might not overlap the physicists circle.

**Truth Tables — Basic**

For "P → Q":

| P | Q | P → Q |
|---|---|-------|
| T | T | T     |
| T | F | F     |
| F | T | T     |
| F | F | T     |

The only false case is when P is true and Q is false.

**Direct and Indirect Reasoning**

Direct reasoning: work forward from premises to conclusion.
Indirect reasoning (proof by contradiction): assume the opposite of what you want to prove, show it leads to a contradiction, therefore the original must be true.

**Problem-Solving Strategies:**
- For "which conclusion follows" questions, test each answer against all possible arrangements consistent with the premises
- Use Venn diagrams for set-based syllogisms — they make overlaps and non-overlaps visually clear
- For conditional statements, always check the contrapositive as well as the original
- When no conclusion follows, "None of the above" may be correct — don't force a conclusion

**Common Mistakes:**
- Conflating "some" with "all" — "some A are B" only tells you about the overlap, not about all of A or all of B
- Accepting the converse as valid — "If P then Q" does not mean "If Q then P"
- Assuming a distribution that isn't stated — "Some A are B" doesn't tell you whether "Some A are not B"
- Missing hidden assumptions — always check whether there's an implicit premise being used

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Logical Equivalence**

Two statements are logically equivalent if they have the same truth value in all cases.
"P → Q" is logically equivalent to "¬Q → ¬P" (contrapositive).
"P → Q" is logically equivalent to "¬P ∨ Q" (expressed as disjunction).
"P ∧ Q" is true only when both are true.
"P ∨ Q" is true when at least one is true.

De Morgan's Laws:
¬(P ∧ Q) ≡ ¬P ∨ ¬Q
¬(P ∨ Q) ≡ ¬P ∧ ¬Q

**Quantifier Logic**

Universal quantifier (∀): "For all x, P(x)" — must hold for every element.
Existential quantifier (∃): "There exists an x such that P(x)" — must hold for at least one element.
Negation: ¬(∀x P(x)) ≡ ∃x ¬P(x). "Not all are" means "at least one is not."
Negation: ¬(∃x P(x)) ≡ ∀x ¬P(x). "None are" means "all are not."

Example: Statement: "All UI students pass the entrance exam."
Negation: "There exists at least one UI student who does not pass the entrance exam." (At least one counterexample disproves a universal claim.)

**Validity vs Truth**

An argument can be valid but have a false conclusion (if premises are false).
An argument can be sound only if it is valid AND all premises are true.
Example of valid but unsound: "All cats are birds. All birds can fly. Therefore all cats can fly." Valid form (modus ponens chain) but false first premise.

**Complex Syllogisms**

Example:
1. All doctors are university graduates.
2. No university graduate is unemployed.
3. Some nurses are not doctors.

Conclusion options:
a) Some nurses are university graduates. (Could be true — nurses who aren't doctors might be graduates; could also be false if all non-doctor nurses are unemployed. Not necessarily true.)
b) Some unemployed people are not nurses. (If all graduates are employed, then unemployed people are not graduates. Since all doctors are graduates, unemployed people are not doctors. They might be nurses or not. But the set of unemployed people ⊆ non-graduates ⊆ non-doctors. So some unemployed people are not nurses — unless all unemployed people are nurses. Possible but not certain.)
c) All doctors are employed. (Yes — all doctors are graduates, no graduate is unemployed. So all doctors are employed. ✓)

**Logic in Real-World Contexts**

Deductive reasoning is used in legal arguments, mathematical proofs, and scientific reasoning (if the theory is correct and the observations are correct, the conclusion follows).

**UI Entrance Exam Patterns**

Deductive reasoning in the UI Academic Potential test includes:
1. Categorical syllogisms (all/some/none)
2. Conditional logic (if-then statements)
3. Evaluating arguments (identifying which conclusion follows)
4. Identifying logical fallacies
5. Set-based reasoning with Venn diagrams
6. Identifying contradictions and inconsistencies

⚡ **Exam Strategy:** When a conditional conclusion seems tempting but isn't guaranteed, look at what MUST be true given the premises, not what could be or might be true. The word "must" is critical in these questions.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
