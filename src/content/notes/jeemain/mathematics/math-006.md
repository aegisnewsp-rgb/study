---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-006
topicName: Probability
weight: 5
country: india
generated: "2026-04-17T22:38:00.000000"
diagramPrompt: "Clean educational diagram showing Probability tree diagram and Venn diagram with clear labels, white background, color-coded events, exam-style illustration"





---
# Probability

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Probability** — Key Facts for JEE Main
Sample space (S): set of all possible outcomes
Event: subset of sample space
P(E) = n(E)/n(S) for equally likely outcomes; always 0 ≤ P(E) ≤ 1
Conditional probability: P(A|B) = P(A ∩ B)/P(B) (probability of A given B has occurred)
Independent events: P(A ∩ B) = P(A)·P(B); if P(A|B) = P(A)
Mutually exclusive: P(A ∪ B) = P(A) + P(B); P(A ∩ B) = 0
⚡ Exam tip: Bayes' theorem is frequently tested in JEE Main — P(A|B) = P(B|A)·P(A) / P(B)!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Probability** — JEE Main Study Guide

**Complement rule:** P(A') = 1 − P(A); useful for "at least one" problems
**Addition rule:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
**For mutually exclusive:** P(A ∪ B) = P(A) + P(B)
**Bayes' theorem:** If E₁, E₂, ..., E_n are partition of S, then P(E_i|A) = P(E_i)·P(A|E_i) / Σ P(E_j)·P(A|E_j)
**Total probability:** P(A) = Σ P(E_i)·P(A|E_i) for partition {E_i}

**Counting approach to probability:**
- When outcomes are equally likely: P(event) = favourable outcomes / total outcomes
- For complex counting problems: use P&C techniques to find numerator and denominator

**Key distributions:**
- Binomial distribution: P(X = r) = nC_r · p^r · q^{n−r} where p = success prob, q = 1−p
- Mean of binomial = np; variance = npq

**Conditional probability with cards/dice:**
P(drawing second ace given first was ace) = 3/51 = 1/17 (without replacement)
P(second ace given first was ace) = 4/52 × 3/51 (conditional, multiply)

**Independent vs mutually exclusive:**
- Two events A and B are independent if P(A ∩ B) = P(A)·P(B)
- Mutually exclusive: cannot both occur; P(A ∩ B) = 0
- Independent and mutually exclusive can both be true only if one has probability 0

**Common mistakes:**
- Confusing "with replacement" vs "without replacement" — probabilities change
- Treating non-independent events as independent
- Forgetting to subtract P(A ∩ B) in union formula

- **Key formula:** P(A|B) = P(A ∩ B)/P(B); P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
- **Common trap:** P(A|B) ≠ P(B|A) — be careful which is in numerator! Bayes' theorem swaps these
- **Exam weight:** 1–2 questions per year (4–8 marks); frequently combined with P&C for counting probability

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Probability** — Comprehensive JEE Main Notes

**Bayes' theorem derivation:**
Let E₁, E₂ partition S. For any event A:
P(E_i|A) = P(E_i ∩ A)/P(A) = P(E_i)·P(A|E_i) / Σ P(E_j)·P(A|E_j)

**Application: diagnostic test problem type:**
P(Disease|+test) = P(+test|Disease)·P(Disease) / [P(+test|Disease)·P(Disease) + P(+test|No Disease)·P(No Disease)]
This is the Bayesian calculation — very common in JEE Main

**Maximum likelihood estimation:**
The value that maximises P(X=x) for binomial is the integer part of (n+1)p

**Geometric probability:**
When outcomes form a continuous range: P(event) = length of favourable region / total length
Example: Two numbers chosen from [0,1], probability their sum < 1 = area of triangle in unit square = 1/2

**Derangements (probability perspective):**
Probability that no one gets their own hat in hat-check problem: D_n/n! = 1 − 1/1! + 1/2! − 1/3! + ... + (−1)^n/n!
As n → ∞, this approaches 1/e ≈ 0.3679

**Important identities:**
- P(A' ∩ B) = P(B) − P(A ∩ B)
- P(A ∩ B') = P(A) − P(A ∩ B)
- P((A ∪ B)') = 1 − P(A ∪ B) = P(A' ∩ B')
- P(A ∩ B) = P(A) + P(B) − P(A ∪ B)

**Random variable concepts:**
For discrete random variable X with values x_i and probabilities p_i:
- E(X) = Σ p_i x_i (expectation/mean)
- Var(X) = E(X²) − [E(X)]²
- For binomial: E(X) = np, Var(X) = npq

**Odds:**
- Odds in favour of event E: P(E)/P(E') = a:b
- Probability from odds: P(E) = a/(a+b)

**Conditional probability with urn problems:**
Drawing from urn without replacement: each draw changes remaining composition
P(first red and second blue) = (r/(r+b)) × (b/(r+b−1))

**Solved problem type:**
"From a pack of 52 cards, 3 are drawn without replacement. Find probability all are kings."
= 4C₃/52C₃ = 4/22100 = 1/5525
Or using sequential: (4/52)×(3/51)×(2/50) = 24/132600 = 1/5525 ✓

**Solved problem type:**
"Probability that at least one die shows 6 when rolling n dice = 1 − (5/6)^n"
This uses complement: none show 6 = (5/6)^n

**Probability of getting exactly r heads in n tosses:**
P(r heads) = nC_r · (1/2)^n (fair coin)
For biased coin with P(H) = p: nC_r · p^r · (1−p)^{n−r}

**JEE Main special patterns:**
- "Two cards drawn from pack. Probability both are spades?" = 13C₂/52C₂ = 3/51 = 1/17
- "At least one head in 3 tosses?" = 1 − P(no heads) = 1 − (1/2)³ = 7/8
- "Draw 3 balls from bag with 4 white, 5 black. Probability exactly 2 white?" = C(4,2)·C(5,1)/C(9,3)

- **Remember:** P(A|B) = P(A∩B)/P(B); for independent events, P(A∩B) = P(A)·P(B); complement for "at least one": 1 − P(none); for "without replacement", multiply sequentially using updated counts
- **Previous years:** "A bag contains 5 white and 7 black balls. Probability of drawing 2 white and 1 black without replacement" [2023]; "Bayes' theorem: box1 has 2 white 4 black, box2 has 3 white 3 black. Find P(box1|first ball is white)" [2024]

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
- Probability: 1–2 questions per year, 4–8 marks
- Common patterns: conditional probability, Bayes' theorem, binomial distribution, urn problems
- Weight: medium-high frequency, high difficulty but scoring

### 💡 Pro Tips
- Bayes' theorem is a JEE Main favourite — understand the partition concept thoroughly
- For "at least one" problems, complement is always easier: P(at least one) = 1 − P(none)
- When drawing without replacement, multiply sequentially with updated counts
- For geometric probability, draw the region and compute area/length ratios
- Always check whether events are independent or mutually exclusive — different formulas
- When the problem says "given that", it's a conditional probability problem
- Odds can be converted: if odds in favour are a:b, then P = a/(a+b)

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*