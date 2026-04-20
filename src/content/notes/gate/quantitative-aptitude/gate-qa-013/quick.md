---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-013
topicName: Probability
tier: quick
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A Venn diagram showing two overlapping circles labeled 'Event A' and 'Event B', with the overlap shaded to represent P(A∩B)"
country: India
generated: ai-v1
---



## Probability — Quick Reference

### Key Formula/Rule
P(A or B) = P(A) + P(B) − P(A and B both occur)

### Memory Trick
**"ADD then SUBTRACT"** — Add individual probabilities, subtract the overlap so you don't count it twice.

### 1-Sentence Summary
Probability measures how likely something is to happen, expressed as a number between 0 (impossible) and 1 (certain).

### Essential Formulas

| Formula | When to Use |
|---------|-------------|
| P(A or B) = P(A) + P(B) − P(A∩B) | Union of two events (non-mutually exclusive) |
| P(A and B) = P(A) × P(B) | Independent events only |
| P(A or B) = P(A) + P(B) | Mutually exclusive events (cannot both occur) |
| P(not A) = 1 − P(A) | Complement of an event |
| P(A) = Favorable outcomes / Total outcomes | Basic definition |

### Worked Example

Q: A die is rolled. What is P(even or a multiple of 3)?
A:
- P(even) = {2, 4, 6} → 3/6 = 1/2
- P(multiple of 3) = {3, 6} → 2/6 = 1/3
- P(both, i.e. 6) = {6} → 1/6
- P = 1/2 + 1/3 − 1/6 = 3/6 + 2/6 − 1/6 = 4/6 = **2/3**

### Independent vs Mutually Exclusive

**Independent events:** One event does not affect the probability of the other.
- Example: Tossing a coin twice — P(Head on 2nd toss) is always 1/2 regardless of first toss
- Formula: P(A∩B) = P(A) × P(B)

**Mutually exclusive (disjoint):** Events cannot happen together.
- Example: Rolling a die — you cannot get both an even number AND the number 3 in one roll
- Formula: P(A∩B) = 0

⚡ **GATE Tip:** The key distinction is whether events can happen together. Draw a quick Venn diagram if unsure — the overlap region is where both occur. If overlap exists and events are not independent, use the subtraction formula.

### Must Remember
- Probability always lies between 0 and 1
- P(not A) = 1 − P(A) — use for "at least one" type questions
- For independent events A and B: P(A and B) = P(A) × P(B)
- Mutually exclusive events cannot both happen, so P(A and B) = 0
- Conditional probability: P(A|B) = P(A∩B) / P(B) — "probability of A given B has occurred"
- Bayes' theorem: P(A|B) = P(B|A) × P(A) / P(B) — know when to apply this for "reverse probability" questions

### Common GATE Question Patterns

**Pattern 1 — "At least one" questions:**
P(at least one heads in 3 tosses) = 1 − P(no heads) = 1 − (1/2)³ = 1 − 1/8 = 7/8

**Pattern 2 — Complementary counting:**
Instead of counting desired outcomes, count the complement and subtract from 1.

**Pattern 3 — Dice and cards:**
With dice: count total outcomes = 6ⁿ. With cards: total outcomes = 52 (standard deck).

**Pattern 4 — Permutation/combination in probability:**
P(numerator) = C(favourable, r) / C(total, r) for "r items selected without order"

⚡ **Exam Tip:** Don't confuse permutations and combinations in probability questions. If order matters (arrangements), use P(n,r) = n!/(n−r)!. If only selection matters (no order), use C(n,r) = n!/r!(n−r)!.