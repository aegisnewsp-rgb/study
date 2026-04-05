---



exam: nat-i
examName: NAT-I (NTS)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-9
topicName: Syllogisms and Logical Deduction
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.130994"
diagramPrompt: "Educational diagram illustrating Syllogisms and Logical Deduction with clear labels, white background, exam-style illustration"



---
# Syllogisms and Logical Deduction

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your NAT-I/NTS exam.

**What is a Syllogism?**
A syllogism is a logical argument with two premises (major and minor) that lead to a conclusion. The conclusion must be true if both premises are true.

**Standard Form:**
- **Major premise:** A general statement (e.g., "All mammals are warm-blooded")
- **Minor premise:** A specific case (e.g., "A whale is a mammal")
- **Conclusion:** Follows logically ("Therefore, a whale is warm-blooded")

**Types of Categorical Statements:**

| Statement | Meaning | Symbol |
|---|---|---|
| All A are B | Every A is B | $A \subseteq B$ |
| No A are B | No A is B | $A \cap B = \varnothing$ |
| Some A are B | At least one A is B | $A \cap B \neq \varnothing$ |
| Some A are not B | At least one A is not B | $A \not\subseteq B$ |

**Validity vs Truth:**
- **Validity** refers to the logical structure — if the premises are true, must the conclusion be true?
- **Soundness** requires both valid structure AND true premises

⚡ **NTS Tip:** A valid syllogism with false premises can still have a false conclusion. Check BOTH the structure and whether the premises are actually true. A valid but unsound argument still produces an invalid conclusion in practice.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for NAT-I Analytical Reasoning students with a few days to months.

**The Square of Opposition:**

This diagram shows the logical relationships between categorical statements:

```
         All A are B (Universal Affirmative)
               ↑
    Contradictory↑        ↑Contradictory
               ←   Some A are not B (Particular Negative)
Some A are B (Particular Affirmative)
               ↑
               ↓
         No A are B (Universal Negative)
```

- **Contradictory:** One is true, the other is false (All vs Some not; No vs Some)
- **Contrary:** Cannot both be true, but can both be false (All vs No)
- **Subcontrary:** Cannot both be false, but can both be true (Some vs Some not)
- **Subalternation:** If All A are B is true, then Some A are B is true

**Testing Validity — Venn Diagrams:**

Draw three circles: A, B, and the middle term. Shade, mark X, or leave blank according to the premises.

*Example:* All cats are animals. Some cats are black. Therefore, Some animals are black.
- Mark A-circle inside B-circle (all cats in animals)
- Put X in the overlap of cats and black (some cats are black)
- The overlap of animals and black now has the X — conclusion follows. VALID.

**Common Valid Patterns:**

1. **Barbara (AAA-1):** All B are C. All A are B. ∴ All A are C.
2. **Celarent (EAE-1):** No B are C. All A are B. ∴ No A are C.
3. **Darii (AII-1):** All B are C. Some A are B. ∴ Some A are C.
4. **Ferio (EIO-1):** No B are C. Some A are B. ∴ Some A are not C.

**Common Invalid Patterns:**

- **Illicit major:** Premise is about some, conclusion is about all
- **Illicit minor:** Same error with the other term
- ** undistributed middle:** The middle term (connecting the two premises) is never fully covered in either premise

⚡ **NTS Common Mistakes:**
- Confusing the logical structure with whether the conclusion "sounds right"
- Forgetting that "some" statements do not imply "all" or "no"
- Mixing up contrary and contradictory relationships
- Trying to visualise syllogisms without using Venn diagrams systematically

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for NAT-I and NTS Analytical Reasoning preparation.

**Advanced Syllogistic Forms:**

There are 4 types × 4 positions of the middle term = 64 possible syllogism forms. Only 24 are valid (some have sub-variations).

**Mood and Figure:**

The mood is the type of each statement (A, E, I, O). The figure is the position of the middle term:

| Figure | Subject of Major | Predicate of Major | Subject of Minor | Predicate of Minor |
|---|---|---|---|---|
| 1st | M | P | S | M |
| 2nd | P | M | S | M |
| 3rd | M | P | M | S |
| 4th | P | M | M | S |

Valid moods in each figure include: 1st (AAA, EAE, AII, EIO); 2nd (EAE, AEE, EIO, AOO); 3rd (AAI, EAO, IAI, OAO); 4th (AEO, EAE, IEO).

**Conditional Syllogisms:**

"If P, then Q" — "P" is the sufficient condition; "Q" is the necessary condition.

*Modus ponens (affirming the antecedent):*
If P, then Q. P is true. ∴ Q is true.
"If it rains, the ground is wet. It rained. Therefore, the ground is wet." VALID.

*Modus tollens (denying the consequent):*
If P, then Q. Q is false. ∴ P is false.
"If it rains, the ground is wet. The ground is not wet. Therefore, it did not rain." VALID.

*Hypothetical syllogism:*
If P, then Q. If Q, then R. ∴ If P, then R.

**Disjunctive Syllogisms:**

Either P or Q. Not P. ∴ Q. (VALID — when the "or" is exclusive)
Either P or Q. P. ∴ Not Q. (VALID — exclusive or)

⚠️ "P or Q" in everyday language is often inclusive. If it is inclusive, neither disjunctive syllogism form is fully valid without additional information.

**Logical Deduction from Given Statements:**

When a set of conditional statements is given:
1. Identify which condition is sufficient and which is necessary
2. Chain forward (sufficient → necessary) or backward (negating necessary → negating sufficient)
3. Look for contradictory conditions (if P → Q and P → not Q both hold, P is impossible)

*Example:*
Given: "All engineers are logical. Some logical people are mathematicians. No poets are engineers."
Conclusion that definitely follows: "Some mathematicians are not poets." Why? Some logical people are mathematicians (so there is overlap). No poets are engineers, and all engineers are logical, so no poets are logical people. The overlap between "mathematician" and "logical person" may or may not include poets — we cannot deduce this. Actually we CAN: if some mathematicians are logical (overlap L and M), and no poets are in L, then the overlap between L and M cannot include any poets. So some mathematicians are not poets. VALID.

**NTS/NAT-I Patterns:**
- NAT-I Analytical Reasoning has syllogism and logic questions as a major component
- Common question types: "Which of the following conclusions must be true?" / "Which conclusion follows?" / "Which argument is most closely parallel?"
- Practice using Venn diagrams systematically — they are the most reliable method
- Build speed by memorizing the valid syllogism forms

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
