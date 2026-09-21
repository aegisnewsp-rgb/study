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
lastUpdated: "2026-09-21"
diagramPrompt: "Clean educational diagram showing Probability tree diagram and Venn diagram with clear labels, white background, color-coded events, exam-style illustration"





---

# Probability

### 🟢 Lite — Quick Review (1h–1d)
> The single hardest fact to keep straight: mutually exclusive events are NOT the same as independent events. Two events are mutually exclusive when they cannot occur together (P(A∩B)=0); they are independent when the occurrence of one does not change the probability of the other (P(A∩B)=P(A)P(B)). Mixing these up is the most common reason a JEE Main MCQ on Probability is marked wrong.

Probability measures how likely an outcome of a random experiment is, lying strictly between 0 (impossible) and 1 (certain).

- Classical definition (equally likely outcomes only): P(E) = n(E)/n(S), where n(E) is the count of favourable outcomes and n(S) is the total count. Both counts are dimensionless; the ratio itself is dimensionless and bounded in [0, 1].
- Addition rule: P(A∪B) = P(A) + P(B) − P(A∩B). When A and B are mutually exclusive, the intersection term is zero and the rule collapses to P(A) + P(B).
- Conditional probability: P(A|B) = P(A∩B)/P(B), valid only when P(B) > 0. Bayes' theorem reverses the conditioning direction: P(A|B) = P(B|A)·P(A)/P(B).

> 💡 **High-Yield Memory Hook — "MEx vs INDEP":** **M**utually **Ex**clusive = disjoint (∩ = 0); **INDEP**endent = cross-multiplied (P(A∩B) = P(A)P(B)). A disjoint pair of events with both probabilities positive can never be independent.

#### Core formulas to memorise

| Rule | Formula | When to use |
|---|---|---|
| Classical | P(E) = n(E)/n(S) | Finite S, equally likely outcomes |
| Addition | P(A∪B) = P(A)+P(B)−P(A∩B) | Any two events |
| Multiplication | P(A∩B) = P(A)·P(B|A) | Conditional setup |
| Conditional | P(A\|B) = P(A∩B)/P(B) | P(B) > 0 |
| Bayes' | P(Ai\|B) = P(B\|Ai)·P(Ai) / Σ P(B\|Aj)·P(Aj) | Ai form a partition of S |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Conditional probability is the gateway skill — Bayes' theorem, total probability, and most binomial word problems all rest on it. Master P(A|B) = P(A∩B)/P(B) before moving to anything labelled "Bayes".

#### The three pillars of probability theory

Three axioms sit underneath every formula in this chapter, and JEE Main MCQs occasionally probe them directly.

1. **Non-negativity:** P(E) ≥ 0 for every event E.
2. **Normalization:** P(S) = 1, where S is the sample space.
3. **Countable additivity:** For pairwise mutually exclusive events E1, E2, …, P(∪En) = Σ P(En).

From these alone, P(φ) = 0 and 0 ≤ P(E) ≤ 1 follow as corollaries — no extra assumption needed.

#### Addition and multiplication, side by side

The trap students fall into is applying one rule where the other belongs. The table below contrasts the most confused pairs.

| Concept | Definition | Key relation |
|---|---|---|
| Mutually exclusive | A∩B = φ | P(A∪B) = P(A)+P(B) |
| Independent | P(A∩B) = P(A)P(B) | P(A\|B) = P(A) |
| Exhaustive | A∪B = S | P(A)+P(B)+P(A∩B) terms sum to 1 with inclusion–exclusion |
| Equally likely outcomes | Each ω in S has P(ω) = 1/n(S) | Classical definition applies |

> ⚠️ **Examiner Trap:** A∩B = φ forces P(A)P(B) = 0 only if one of them is impossible. Two disjoint events with P(A) = 0.3 and P(B) = 0.4 are NOT independent: the multiplication rule P(A∩B) = P(A)P(B) gives 0.12, but the disjoint rule forces P(A∩B) = 0. Wrong answer, wrong method, double penalty.

#### Conditional probability and the lattice of dependencies

P(A|B) is read as "probability of A given B has occurred". It restricts the sample space from S to B and renormalises. The chain rule follows directly:

- P(A∩B) = P(A)·P(B|A) = P(B)·P(A|B).

Bayes' theorem is just the chain rule solved for the reverse conditioning, combined with the law of total probability:

- P(Ai|B) = P(B|Ai)·P(Ai) / Σj P(B|Aj)·P(Aj).

The denominator is the total probability of B, computed by splitting S into a partition {A1, A2, …, An}. Picking the wrong partition — usually forgetting one of the Ai or letting two of them overlap — is the standard JEE Main error in Bayes problems.

#### 🎯 Exam-Level Worked Problem

**Question (JEE Main 2022 Shift-2 pattern):** Three machines M1, M2, M3 in a workshop produce 20%, 30% and 50% of the total output respectively. Their defective rates are 5%, 4% and 2%. A randomly picked unit from a day's output is found to be defective. Find the probability it came from M2.

**Step 1 — Set up the partition.** Let Ai = "unit came from Mi". Then P(A1) = 0.20, P(A2) = 0.30, P(A3) = 0.50. These are mutually exclusive and exhaustive.

**Step 2 — Set up the condition.** Let B = "unit is defective". Given: P(B|A1) = 0.05, P(B|A2) = 0.04, P(B|A3) = 0.02.

#### Step 3 — Total probability of B.

P(B) = P(B|A1)P(A1) + P(B|A2)P(A2) + P(B|A3)P(A3)
     = (0.05)(0.20) + (0.04)(0.30) + (0.02)(0.50)
     = 0.010 + 0.012 + 0.010
     = 0.032.

#### Step 4 — Apply Bayes.

P(A2|B) = P(B|A2)P(A2) / P(B) = 0.012 / 0.032 = 12/32 = 3/8 = 0.375.

**Answer:** 3/8.

> ⚠️ **Examiner Trap:** Many students divide P(B|A2)P(A2) by P(B|A2) only, or by one of the other terms. The denominator in Bayes' theorem is ALWAYS the total probability of the conditioning event across the entire partition — never just one term.

#### Random variable and binomial distribution

A random variable X maps each outcome ω∈S to a real number. For a discrete X, the probability mass function f(x) = P(X=x) must satisfy f(x) ≥ 0 and Σ f(x) = 1.

The binomial distribution B(n, p) arises when n independent Bernoulli trials each succeed with probability p:

- P(X=k) = C(n,k)·p^k·(1−p)^(n−k), for k = 0, 1, …, n.
- Mean: μ = E(X) = np.
- Variance: σ² = Var(X) = np(1−p).
- Standard deviation: σ = √(np(1−p)).

E(X) and Var(X) are dimensionless when X is dimensionless; in physical applications like radioactive decay, n carries units of "trials" or "decays" and the mean keeps those units.

---

### 🔴 Extended — Deep Study (3mo+)
> Two questions per JEE Main shift test probability, and one of them almost always hinges on a single sign or a missed partition. Treat the boundary cases below as the real syllabus — the named formulas are just shorthand.

#### Boundary cases worth memorising

1. **Impossible conditioning.** P(A|B) is undefined when P(B) = 0. Some MCQs give a denominator that simplifies to 0 after a substitution; the answer is "0/0, undefined" rather than 0 or 1.
2. **Sure-thing conditioning.** If B ⊂ A, then P(A|B) = 1. If A and B are equivalent, P(A|B) = P(B|A) = 1.
3. **Complement shortcuts.** P(A|B) = 1 − P(Aᶜ|B), and De Morgan on conditioning gives P(Aᶜ∩Bᶜ) = 1 − P(A∪B).
4. **Binomial edge values.** P(X = 0) = (1−p)^n and P(X = n) = p^n. If asked "at least one success", use 1 − (1−p)^n instead of summing k = 1 to n.
5. **Poisson as limit.** When n → ∞ and np → λ, B(n,p) approaches Poisson(λ). JEE Main rarely tests the limit directly, but the mean λ = np is sometimes given as a hint in disguise.

#### Advanced practice prompts

- **Prompt 1 — Sign-flip Bayes.** A diagnostic test for a disease has sensitivity 99% (P(+|D) = 0.99) and specificity 95% (P(−|Dᶜ) = 0.95). If 1% of the population has the disease, what is P(D|+)? Compute this and then re-do it with prevalence 0.1% to see how dramatically the answer shifts.
- **Prompt 2 — Binomial variance trap.** If X ~ B(10, 0.3) and Y ~ B(20, 0.3) are independent, find Var(2X − 3Y). Use Var(aX + bY) = a²Var(X) + b²Var(Y) when X, Y are independent — and watch the sign of the coefficient.

#### How this topic is tested in JEE Main

- 1 question per shift, contributing roughly 5% of the Mathematics paper.
- Frequent formats: a single MCQ on Bayes' theorem with a three-branch partition, a binomial mean/variance numerical, or an MCQ distinguishing independent from mutually exclusive events.
- Highest-yield previous-year patterns: defective-item Bayes problems, drawing balls with and without replacement, and conditional probability given an observed outcome in a Bernoulli process.
- Time budget: 2–3 minutes per question; if the algebra is not collapsing inside 90 seconds, the chosen partition is probably wrong.

## Continue your study

- **[View this topic in your JEE Main roadmap](/roadmap/?exam=jeemain&duration=1mo)** — see where "Probability" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeemain&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Main exam overview](/exams/jeemain/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeemain/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
