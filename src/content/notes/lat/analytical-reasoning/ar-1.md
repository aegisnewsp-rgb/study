---
exam: lat
examName: LAT (Law Admission Test)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-1
topicName: Logical Deduction (Syllogisms)
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.020972"
diagramPrompt: "Educational diagram illustrating Logical Deduction (Syllogisms) with clear labels, white background, exam-style illustration"

---

# Logical Deduction (Syllogisms)

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary of syllogistic reasoning for the LAT analytical reasoning section.

**A syllogism is a form of deductive reasoning consisting of two premises (major and minor) that lead to a conclusion.**

**Basic Structure:**

Every syllogism has:
1. **Major Premise** — A general statement (contains the **predicate** of the conclusion)
2. **Minor Premise** — A specific statement (contains the **subject** of the conclusion)
3. **Conclusion** — The logical deduction that follows from both premises

**Example:**
- Major Premise: All mammals are warm-blooded (rule)
- Minor Premise: All whales are mammals (case)
- Conclusion: Therefore, all whales are warm-blooded

**Identifying Premises and Conclusion:**

| Term | Role | In the example |
|------|------|----------------|
| Predicate (P) | What is said about the subject | "warm-blooded" |
| Subject (S) | The thing under consideration | "whales" |
| Middle (M) | Connects the two terms | "mammals" |

The **middle term** appears in both premises but not in the conclusion.

**Types of Categorical Statements:**

| Type | Symbol | Meaning | Example |
|------|--------|---------|---------|
| Universal Affirmative | A | All S are P | All lawyers are professionals |
| Universal Negative | E | No S are P | No lawyers are accountants (in this context) |
| Particular Affirmative | I | Some S are P | Some lawyers are criminal advocates |
| Particular Negative | O | Some S are not P | Some lawyers are not criminal advocates |

**Key Validity Rules for Syllogisms:**

1. A valid syllogism must have exactly three terms (S, P, M)
2. The middle term must be distributed in at least one premise
3. If a term is distributed in the conclusion, it must be distributed in its premise
4. Two negative premises cannot yield a valid conclusion
5. If one premise is negative, the conclusion must be negative

⚡ **LAT Exam Tip:** Always check whether the conclusion follows NECESSARILY from the premises. A valid syllogism means the conclusion MUST be true if the premises are true — it is a matter of logical necessity, not probability.

---

### 🟡 Standard — Regular Study (2d–2mo)

> For LAT students who want to master logical deduction and syllogistic reasoning.

**The Four Figures of Syllogisms:**

The position of the middle term determines the figure:

| Figure | Major Premise | Minor Premise |
|--------|---------------|---------------|
| 1st | M — P | S — M |
| 2nd | P — M | S — M |
| 3rd | M — P | M — S |
| 4th | P — M | M — S |

Each figure has valid and invalid mood combinations.

**Testing Validity — Counterexample Method:**

To test whether a syllogism is valid:
1. Assume the premises are TRUE
2. Determine whether the conclusion could still be FALSE
3. If conclusion CAN be false while premises are true → the argument is INVALID
4. If conclusion MUST be true whenever premises are true → VALID

**Example of Invalid Syllogism:**
- Premise 1: All birds can fly (A-type)
- Premise 2: Penguins are birds (A-type)
- Conclusion: Therefore, penguins can fly

Counterexample: Penguins (S) are birds (M) — true. All birds (M) can fly (P) — false (a counterexample exists: penguins). Conclusion doesn't follow → INVALID.

**The Square of Opposition:**

This shows logical relationships between categorical statements:

```
     A (All S are P)         E (No S are P)
        ↘︎   ↙︎                 ↘︎   ↙︎
          Contradictory          Contrary
        ↗︎   ↖︎                 ↗︎   ↖︎
     I (Some S are P)         O (Some S are not P)
```

- **Contradictory:** A vs O, E vs I — one must be true, one false
- **Contrary:** A vs E — both cannot be true together, but both could be false
- **Subcontrary:** I vs O — both cannot be false together, but both could be true
- **Subalternation:** A → I, E → O (truth flows down); I → A (falsity flows up) is not valid

**Common Valid Forms:**

| Name | Form | Example |
|------|------|---------|
| Barbara (AAA-1) | All M are P; All S are M; ∴ All S are P | All humans are mortal; Socrates is human; ∴ Socrates is mortal |
| Celarent (EAE-1) | No M are P; All S are M; ∴ No S are P | No reptiles are mammals; All snakes are reptiles; ∴ No snakes are mammals |
| Darii (AII-1) | All M are P; Some S are M; ∴ Some S are P | All cats are mammals; Some pets are cats; ∴ Some pets are mammals |
| Ferio (EIO-1) | No M are P; Some S are M; ∴ Some S are not P | No managers are interns; Some employees are managers; ∴ Some employees are not interns |

**Common Invalid Forms:**

| Fallacy | Problem | Example of Error |
|---------|---------|------------------|
| Undistributed middle | Middle term never distributed | All A are B; All C are B; ∴ All A are C |
| Illicit major | Predicate distributed in conclusion but not in premise | No M are P; All S are M; ∴ No S are P (this one is actually Celarent, valid!) |
| Illicit minor | Subject distributed in conclusion but not in premise | All P are M; No S are M; ∴ No S are P (this one is actually valid) |
| Two negative premises | Both premises negative | No A are B; No B are C; ∴ ? (no valid conclusion possible) |

**Deductive vs Inductive Reasoning:**

- **Deductive:** If premises are true AND form is valid → conclusion MUST be true
- **Inductive:** Premises provide support but not certainty → conclusion is probable, not certain

In the LAT, syllogisms test your deductive reasoning ability. You are assessing whether the conclusion follows with logical necessity.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage of logical deduction for LAT students aiming for top scores.

**Advanced Validity Testing:**

**Venn Diagram Method:**

Draw three overlapping circles representing S, P, and M. Shade, cross-hatch, or place X marks to represent the information in each premise. If the conclusion is directly represented by the resulting diagram, the argument is valid.

- **Shading:** Indicates an area is empty (universal statements — All S are P means the part of S that is not P is empty)
- **X marks:** Indicate at least one member exists (particular statements — Some S are P)

**Example — Barbara (AAA-1):**
- All M are P → shade the part of M that is not P
- All S are M → shade the part of S that is not M
- Result: The area of S outside P is entirely shaded → All S are P is valid

**Rules Method:**

For each of the 4 figures, there are specific combinations that produce valid conclusions. The mnemonics come from medieval logic:

**Figure 1 Valid Moods:** AAA, EAE, AII, EIO (and their subalterns AA, EA, AI, EI by weakening)

**Figure 2 Valid Moods:** AEE, EAE, AOO, EIO

**Figure 3 Valid Moods:** AAI, EAO, AII, OAO, EIO

**Figure 4 Valid Moods:** AAI, EAO, AEE, EIO, IEO

**Reductio ad Absurdum:**

A powerful technique for testing validity: Assume the argument is valid, then see if accepting both premises and denying the conclusion leads to a logical contradiction. If contradiction results, the argument must be valid.

**Negations and Logical Equivalences:**

Understanding what "not" means is crucial:
- NOT (All S are P) ≡ Some S are not P
- NOT (No S are P) ≡ Some S are P
- NOT (Some S are P) ≡ No S are P (in classical logic)
- NOT (Some S are not P) ≡ All S are P

**Handling Conditional Premises:**

Many syllogisms include conditional (if-then) statements:

- If P, then Q (P → Q)
- P is true, therefore Q is true (Modus Ponens)
- Q is false, therefore P is false (Modus Tollens)

**Common Conditional Errors:**
- Affirming the consequent: "If it rains, the ground is wet; the ground is wet; therefore it rained" — INVALID (could have been hosed)
- Denying the antecedent: "If it rains, the ground is wet; it did not rain; therefore the ground is not wet" — INVALID (sprinkler could be on)

**Conditional Syllogisms:**

| Form | Structure | Valid? |
|------|-----------|--------|
| Modus Ponens | P → Q; P; ∴ Q | Yes |
| Modus Tollens | P → Q; not Q; ∴ not P | Yes |
| Affirming Consequent | P → Q; Q; ∴ P | No |
| Denying Antecedent | P → Q; not P; ∴ not Q | No |

**⚡ LAT Syllogism Problem-Solving Strategy:**

1. Identify the conclusion (often introduced by "therefore," "thus," "hence," "consequently," or "so")
2. Identify S and P of the conclusion
3. Find the middle term (the term appearing in premises but not conclusion)
4. Determine which premise is major (contains P) and which is minor (contains S)
5. Classify each premise as A, E, I, or O
6. Check validity using Venn diagrams or the rules
7. If invalid, identify the specific fallacy
8. If valid, confirm the conclusion follows necessarily

**Quick Reference — Common Valid Syllogisms:**
- Barbara (AAA-1): All M are P, All S are M, ∴ All S are P
- Celarent (EAE-1): No M are P, All S are M, ∴ No S are P
- Darii (AII-1): All M are P, Some S are M, ∴ Some S are P
- Ferio (EIO-1): No M are P, Some S are M, ∴ Some S are not P
- Cesare (EAE-2): No P are M, All S are M, ∴ No S are P
- Camestres (AEE-2): All P are M, No S are M, ∴ No S are P
