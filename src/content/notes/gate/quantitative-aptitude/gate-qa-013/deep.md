---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-013
topicName: Probability — Deep Dive
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A detailed probability tree with multiple branching levels showing dependent events, with probability labels on each branch and final outcome nodes labeled"
country: India
generated: ai-v1
---



## Probability — Deep Dive

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
