---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-013
topicName: "Probability"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A detailed probability tree with multiple branching levels showing dependent events, with probability labels on each branch and final outcome nodes labeled"
country: india
generated: 2026-05-26
lastUpdated: 2026-05-26
---

# Probability

### 🟢 Lite

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

### 🟡 Standard

### Concept Explanation
Probability is the branch of mathematics that quantifies how likely an event is to occur. Think of it as a way of assigning a number between 0 and 1 to any outcome — 0 means it will never happen, 1 means it's guaranteed. When you flip a fair coin, the probability of heads is exactly 0.5, meaning it's equally likely to happen as not happen. This framework shows up everywhere: weather forecasts, insurance premiums, medical test results, and of course, exam questions.

When we're interested in more than one event happening, things get more interesting. If you want to know the probability that it rains today AND you remember your umbrella, you can't just multiply individual probabilities unless the events are independent — meaning one doesn't affect the other. If those events aren't independent, you need to account for how one changes the likelihood of the other using conditional probability.

The most common mistake students make is double-counting. If event A and event B can both happen, simply adding P(A) + P(B) will count the situation where both occur twice. The inclusion-exclusion principle fixes this by subtracting the overlap. Always ask yourself: can these events happen at the same time?

### Key Formulas
| Symbol | Meaning |
|--------|---------|
| P(A) | Probability that event A occurs |
| P(A∪B) | Probability that A or B or both occur |
| P(A∩B) | Probability that both A and B occur |
| P(B\|A) | Probability of B given that A has already occurred |
| P(not A) | Probability that A does not occur |

### Step-by-Step Example
**Q:** A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. What is the probability that both are red?

**Step 1:** Find P(first ball is red) = 5/8

**Step 2:** After removing one red ball, 4 red and 3 blue remain. P(second ball is red | first was red) = 4/7

**Step 3:** Multiply: P(both red) = (5/8) × (4/7) = 20/56 = **5/14**

**Answer:** 5/14

### Common Mistakes
- Assuming independence when there's no replacement → Drawing without replacement means events are dependent; multiply sequentially instead
- Forgetting to subtract the intersection in P(A∪B) → Always apply the inclusion-exclusion formula: P(A∪B) = P(A) + P(B) − P(A∩B)

### Quick Test (2 Qs)
1. Q: Two dice are thrown. What is P(sum equals 8)? Options: A) 1/6 B) 5/36 C) 7/36 D) 1/9. Ans: B) 5/36 (Reason: Favorable pairs are (2,6),(3,5),(4,4),(5,3),(6,2) = 5 out of 36 total outcomes)
2. Q: A card is drawn from a standard deck. P(face card or heart)? Options: A) 4/13 B) 11/26 C) 3/13 D) 1/2. Ans: B) 11/26 (Reason: There are 12 face cards and 13 hearts, but 3 cards — the J, Q, K of hearts — belong to both groups. By inclusion-exclusion: P(face)=12/52, P(heart)=13/52, P(both)=3/52, so P = 12/52 + 13/52 − 3/52 = 22/52 = 11/26.)

### 🔴 Extended

### Concept Deep Dive
At its core, probability is a formal language for reasoning under uncertainty. Imagine you're about to make a decision with incomplete information — which route to take home, whether to carry an umbrella, whether an investment will pay off. Probability gives you a systematic way to assign numeric confidence to different outcomes. The classical definition, born from gambling problems in 17th century France, says that if an experiment has n equally likely outcomes and m of them are favorable, then P = m/n. This works beautifully for coin flips and dice rolls, but real life rarely gives you equally likely outcomes.

The frequentist view says probability is the long-run proportion of times an event would occur if you repeated the experiment infinitely. If you flip a fair coin a million times, you'll get very close to 500,000 heads — the relative frequency approaches 0.5. The Bayesian view is more subjective: probability represents your personal degree of belief. A doctor might say there's a 30% chance a patient has a certain condition based on symptoms and test results. Both views are valid and useful depending on context.

Conditional probability is where things get genuinely interesting. P(B|A) — read as "probability of B given A" — asks: if we know A has happened, how does that change the likelihood of B? Consider a cancer screening test that correctly identifies the disease 99% of the time but also gives false positives 5% of the time. If you test positive, what's the actual probability you have cancer? This depends heavily on the base rate — how common the cancer is in the population. A 99% accurate test can still produce more false positives than true cases if the disease is rare enough. This counterintuitive result is called the base rate fallacy, and it's one of the most important concepts in probability because it appears constantly in medical testing, legal evidence evaluation, and quality control.

Bayes' Theorem is the master formula for updating probabilities when you get new evidence. It states that P(A|B) = P(B|A) × P(A) / P(B). The intuition is elegant: the posterior probability of A given B equals the likelihood of B given A, weighted by the prior probability of A, normalized by the total probability of B. Think of it as a feedback loop — you start with a belief (prior), observe data (evidence), and update to a new belief (posterior) that incorporates what you learned.

### Advanced Formula Derivation
**Bayes' Theorem** can be derived directly from the definition of conditional probability. We know that P(B|A) = P(A∩B)/P(A) and P(A|B) = P(A∩B)/P(B). Rearranging the first gives P(A∩B) = P(B|A) × P(A). Substituting this into the second formula yields P(A|B) = [P(B|A) × P(A)] / P(B). The denominator P(B) can be expanded using the law of total probability: P(B) = P(B|A) × P(A) + P(B|A') × P(A'), where A' is the complement of A. This expansion is what you use in practice when applying Bayes' theorem to real problems.

**Law of Total Probability**: If events A₁, A₂, ..., Aₙ partition the sample space (they're mutually exclusive and cover all outcomes), then for any event B, P(B) = Σ P(B|Aᵢ) × P(Aᵢ). This is essential when the denominator P(B) isn't directly observable.

### GATE-Level Numerical Problems
**Q1 (GATE 2020):** In a class, 60% of students play cricket and 50% play football. If 10% play neither, what is the probability that a randomly chosen student plays both cricket and football?
- Working: P(Cricket) = 0.6, P(Football) = 0.5, P(neither) = 0.1. Since probabilities must sum to 1, P(Cricket or Football or both) = 1 − 0.1 = 0.9. Using inclusion-exclusion: P(C∪F) = P(C) + P(F) − P(C∩F). So 0.9 = 0.6 + 0.5 − P(C∩F).
- Answer: P(C∩F) = 0.6 + 0.5 − 0.9 = **0.2 (20%)**
- Common error: Forgetting to subtract from 1 to find P(C∪F) first

**Q2 (GATE 2019):** A fair die is thrown twice. Given that the sum is 7, what is the probability that one of the throws showed a 4?
- Working: Sample space for sum=7: {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)} — 6 equally likely outcomes. Favorable outcomes (one throw is 4): {(3,4),(4,3)} — 2 outcomes. P = 2/6 = 1/3.
- Answer: **1/3**
- Common error: Thinking it's 1/6 (counting only (4,3)) — both (3,4) and (4,3) satisfy the condition

**Q3:** An insurance company classifies drivers into three risk categories: Low (60%), Medium (30%), High (10%). Accident rates for each category are 2%, 5%, and 15% respectively. If a driver had an accident last year, what is the probability they were in the High-risk category?
- Working: Using Bayes' theorem. P(High|Accident) = [P(Accident|High) × P(High)] / P(Accident). P(Accident) = (0.02×0.6)+(0.05×0.3)+(0.15×0.1) = 0.012+0.015+0.015 = 0.042. Numerator = 0.15 × 0.1 = 0.015. So P = 0.015/0.042 ≈ 0.357.
- Answer: approximately **35.7%**
- Common error: Ignoring the base rates and just saying 15% — this ignores how most accidents come from low-risk drivers simply because there are many more of them

### Multiple Approaches
**Method A: Tree Diagram** — Draw all possible branches with probabilities. Multiply along paths, add branches for "or" outcomes. Best when events are sequential and dependent.

**Method B: Bayes' Theorem Formula** — Use directly when you have P(B|A) and need P(A|B). Identify which probability is given (likelihood), which is the prior, and compute the denominator using total probability.

**When to use:** Use tree diagrams when the problem is narrative and sequential. Use Bayes' formula directly when you have all numerical values and need a clean calculation without drawing every branch.

### Tricky Cases
- **Without replacement**: Each draw changes the composition of the set. Never multiply n/total × (n−1)/(total−1) blindly — adjust numerators and denominators after each draw.
- **At least one success**: It's often easier to calculate P(no successes) and subtract from 1. P(at least one head in two flips) = 1 − P(no heads) = 1 − (1/2 × 1/2) = 3/4.
- **Dependent events in sequence**: Always use conditional probabilities for subsequent events, not the original totals.

*Content adapted based on your selected roadmap duration.*
