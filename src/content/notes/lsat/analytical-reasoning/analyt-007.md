---
exam: lsat
examName: LSAT India
subject: logical-reasoning
subjectName: Analytical Reasoning
topic: analyt-007
topicName: Topic 7
weight: 3
country: lsat
generated: "2026-03-25T17:00:00"
---

# Logical Conditional Reasoning — Advanced

### 🟢 Lite — Quick Review (1h–1d)

**Advanced conditional reasoning** builds on the sufficient/necessary framework. The LSAT tests your ability to chain conditions, split disjunctions, and identify hidden equivalences under time pressure.

Key skills to master:
- Chaining conditional statements (hypothetical syllogism)
- Splitting "or" using conditional form
- Recognizing when two different-looking rules are logically identical
- Identifying the condition that **must** be violated if an outcome occurs

⚡ **Exam tip:** When a game has 4+ conditional rules, look for chains — one condition often triggers a cascade of deductions.

---

### 🟡 Standard — Regular Study (2d–2mo)

## Chaining Conditional Statements

When two conditional rules share a common term, you can combine them:

> **Rule 1:** If A → B  
> **Rule 2:** If B → C  
> **Combined:** If A → C (hypothetical syllogism)

### Working Example

> "If Maya attends the conference, she must register by Friday."  
> "If Maya registers by Friday, she gets a discount."

Chaining: Maya attends → Maya registers by Friday → Maya gets a discount  
**Deduction:** If Maya attends → she gets a discount.

This is now a new conditional you can use to evaluate answer choices.

## The "Or" Split — Conditional Form

LSAT games often include rules like:

> "Either Priya submits the form, or Quinn requests an extension."

Translate this correctly: P ∨ Q  
This is **not** a conditional — it's a disjunction. But it creates conditional-like deductions:

- If ~P → Q (if Priya does NOT submit, then Quinn must request)
- If ~Q → P (if Quinn does NOT request, then Priya must submit)

In practice, disjunction often functions as two hidden conditionals through contrapositive reasoning.

## Conditional Chains and Transitivity

A **transitive chain** is the most powerful deduction pattern:

> If A → B  
> If B → C  
> If C → D  

Then: A → B → C → D

Any violation at the end (D is false) forces you backward through the chain: if D is false, then C must be false, then B must be false, then A must be false.

⚡ **Exam tip:** When the final condition in a chain is forbidden, the entire sufficient condition at the start becomes impossible.

## Equivalent Rules — Same Meaning, Different Words

The LSAT often tests whether you recognize logical equivalence. These are all the same statement:

- "P only if Q" = P → Q
- "P requires Q" = P → Q
- "Q is necessary for P" = P → Q
- "If not Q, then not P" = P → Q (contrapositive)
- "No P without Q" = P → Q

Being fluent in all five forms means no rule can confuse you on exam day.

## The Double Sufficient Trap

Watch for rules that give two separate sufficient conditions for the same outcome:

> "If R is selected, S is not selected."  
> "If T is selected, S is not selected."

Neither R nor T is sufficient for the other — but both are sufficient to guarantee: S is NOT selected.

This is different from a chain. R → ~S AND T → ~S. That's two separate arrows to the same conclusion.

## Conditional Groups and Mutual Exclusion

In games with multiple rules, you often find:

> "If X is in Group A, Y is in Group B."  
> "If Y is in Group B, X is in Group A."

These two rules together create a biconditional: X is in A if and only if Y is in B.

Recognizing a biconditional is valuable — it halves your deduction workload.

---

### 🔴 Extended — Deep Study (3mo+)

## Sufficient Set + Necessary Set Interactions

Advanced games combine sufficient and necessary conditions in ways that create complex deduction networks:

### Example Game Structure

> "The project manager selects exactly three of the five tasks {P, Q, R, S, T}."
> 
> Rules:  
> 1. If P is selected, then Q is selected. (P → Q)  
> 2. If Q is selected, then R is selected. (Q → R)  
> 3. If S is selected, then T is not selected. (S → ~T)  
> 4. Exactly one of {P, R, T} is selected.

### Deduction Network

From rules 1 and 2, we get a chain: P → Q → R

This means: if P is selected, all three are selected.  
And contrapositively: if R is NOT selected, then Q is NOT selected, and P is NOT selected.

Combined with Rule 4 (exactly one of P, R, T):  
- If R is in the set → P and Q are in → T must be excluded → only R of the three is in → possible  
- If T is in the set → S is excluded → P → Q → R chain → all three of P, Q, R are in → four tasks selected → violates "exactly three" → T cannot be selected

**Therefore:** T is not selected. S is not selected. So P, Q, R must be the three selected.

This kind of cascade deduction is exactly what the LSAT expects you to execute under pressure.

## Conditional Logic in Logical Reasoning (LR) vs. Analytical Reasoning (AR)

Note: this skill applies differently across LSAT sections:

- **Logical Reasoning (LR):** Conditional logic is used to evaluate arguments — spotting assumptions, sufficient/necessary conditions as they apply to argument structure.
- **Analytical Reasoning (AR):** Conditional logic defines game rules — your job is to extract all possible deductions from the rule set.

In AR games, you must be systematic: extract every rule, derive the contrapositive of each, identify chains, and build the complete deduction map.

## The "Could Be True" Conditional Test

For "could be true" questions, a conditional answer choice is **possible** if and only if:
1. It does not violate any original rule
2. It does not violate any contrapositive derived from original rules
3. All necessary conditions are satisfied

The most common trap: an answer choice satisfies the original rule but violates the contrapositive — and contrapositives are equally binding.

## Conditional Diagram Notation

Develop a shorthand that works for you:

| Written | Arrow | Contrapositive |
|---|---|---|
| If P, then Q | P→Q | ~Q→~P |
| P only if Q | P→Q | ~Q→~P |
| Unless P, Q | ~P→Q | ~Q→P |
| P unless Q | ~Q→P | ~P→Q |
| Only if Q, P | P→Q | ~Q→~P |

## Avoiding Conditional Fallacies

### Affirming the Consequent ( fallacy)

**Wrong:** A → B, therefore B → A  
**Example:** "If it is a dog, it is a mammal. It is a mammal. Therefore it is a dog." ← FALSE (could be a cat)

On the LSAT, this is a **common trap answer** for must-be-true and main point questions.

### Denying the Antecedent ( fallacy)

**Wrong:** A → B, therefore ~A → ~B  
**Example:** "If it rains, the match is cancelled. It does not rain. Therefore the match is not cancelled." ← FALSE (could be cancelled for another reason)

### The Additivity Trap

"If A → B" does NOT mean "If A+C → B+C"  
Adding the same condition to both sides does not preserve truth in conditional logic.

## Mixed Conditional: "If A then (B or C)"

> "If L is selected, then either M or N must be selected."

This translates to: L → (M ∨ N)  
Contrapositive: ~(M ∨ N) → ~L which equals (~M ∧ ~N) → ~L

This is powerful: if NEITHER M nor N is selected, then L cannot be selected.

## Exam Strategy for Conditional Games

1. **Write every rule in arrow notation** before attempting any question
2. **Derive every contrapositive** immediately — don't wait until you need it
3. **Identify all chains** by looking for shared terms across rules
4. **Map necessary conditions** — these act as "gates" that must be satisfied
5. **Test answer choices** against BOTH original rules AND contrapositives
6. **Watch for the "unless" flip** — these often hide the most powerful deductions

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
