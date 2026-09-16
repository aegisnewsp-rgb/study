---
exam: gate
examName: "GATE"
subject: general-aptitude
subjectName: "General Aptitude"
topic: genera-008
topicName: "Permutation, Combination and Probability"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Permutation, Combination and Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your GATE paper.

Permutation, Combination and Probability is a General Aptitude unit (syllabus code TA1) carrying **3 marks** out of 100 — typically one 1-mark MCQ and one 2-mark MCQ or NAT — and is mandatory across every GATE paper (CS, EC, ME, CE, EE, and 25+ others). Counting (permutation/combination) feeds directly into the probability portion, since classical probability is built on counting favourable and total equally-likely outcomes.

#### Core Formulas at a Glance

| Concept | Formula | Variables (SI/Units) | When to use |
|---|---|---|---|
| Permutation | P(n,r) = n!/(n−r)! | n = total distinct objects (integer, dimensionless); r = positions filled (integer) | **Order matters** ("arrange", "rank", "queue") |
| Combination | C(n,r) = n!/[r!(n−r)!] | n = total; r = selected (both integer, dimensionless) | **Order does not matter** ("choose", "select", "team") |
| Circular permutation | (n−1)! | n = distinct objects around a circle | Necklace / round-table arrangements |
| Identical objects | n!/(n₁! n₂! … nₖ!) | n₁ + n₂ + … + nₖ = n | Letters with repeats (e.g., APPLE) |
| Classical probability | P(E) = n(E)/n(S) | n(E), n(S) are outcome counts | Finite, equally-likely sample space |
| Conditional / Bayes | P(A\|B) = P(A∩B)/P(B); P(Aᵢ\|B) = P(B\|Aᵢ)P(Aᵢ)/ΣⱼP(B\|Aⱼ)P(Aⱼ) | All terms are dimensionless ratios in [0,1] | Two-stage / "given that…" problems |

> 💡 **High-Yield Memory Hook:** **"Arrange → Permute, Pick → Combine"** — read the verb first. Also remember the link **P(n,r) = C(n,r) · r!** (every ordered r-tuple is an unordered r-set times r! orderings). For Bayes', use the weight **"Prior × Likelihood, normalised by Total"** — plug P(Aᵢ) and P(B|Aᵢ) into the numerator, then divide by Σ of the same product over all i.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for a few days to a few months of GATE prep.

GATE tests two distinct skills under TA1: **counting** (how many ways something can happen) and **probability** (how likely, on a 0–1 scale, it happens). Misreading the verb in the question — "arrange" vs "choose" — flips the formula from P(n,r) to C(n,r) and is the single most common reason students lose the 2-mark question.

#### Counting Principles and Permutations

The **Fundamental Principle of Counting (FPC)** splits a task into independent steps: if step 1 can be done in m ways and step 2 in n ways, the combined task has **m·n** ways. For mutually exclusive ways, the rule becomes **m + n**. **Inclusion–Exclusion** handles overlaps: |A ∪ B| = |A| + |B| − |A ∩ B|, generalising to three sets as |A ∪ B ∪ C| = Σ|Aᵢ| − Σ|Aᵢ ∩ Aⱼ| + |A ∩ B ∩ C|.

A **permutation** P(n,r) = n!/(n−r)! counts ordered arrangements of r objects drawn from n distinct objects. When objects repeat, divide by the factorial of each repeated group's count: arrangements of "APPLE" = 5!/2! = 60, because the two P's are indistinguishable. **Circular permutation** of n distinct objects = (n−1)!; fix one object to remove rotational symmetry.

#### Combinations and the Binomial Theorem

A **combination** C(n,r) = n!/[r!(n−r)!] counts unordered selections. The symmetry identity **C(n,r) = C(n, n−r)** lets you compute the smaller side when r > n/2. Pascal's identity **C(n,r) = C(n−1,r−1) + C(n−1,r)** is the recursion behind Pascal's Triangle and connects to the **binomial expansion** (a+b)ⁿ = Σₖ₌₀ⁿ C(n,k) aᵏ bⁿ⁻ᵏ — directly relevant to Binomial distribution probabilities.

#### Comparison Matrix: Permutation vs Combination vs Circular vs Identical

| Feature | Permutation P(n,r) | Combination C(n,r) | Circular (n−1)! | Identical n!/(n₁!n₂!…) |
|---|---|---|---|---|
| Order matters? | Yes | No | Yes (cyclic) | Yes |
| Divide by repeats? | No | No | No | Yes |
| Typical verb in question | "arrange, rank, seat" | "select, choose, team, committee" | "round table, necklace" | "letters of WORD" |
| Formula | n!/(n−r)! | n!/[r!(n−r)!] | (n−1)! | n!/(n₁!·n₂!·…·nₖ!) |
| Example trigger | Rank top 3 of 100 | Pick 3 from 100 | Seat 8 around a table | Arrangements of BANANA = 6!/(3!·2!·1!) |

#### Probability Foundations

Classical **probability** P(E) = n(E)/n(S) requires a finite sample space where every elementary outcome is equally likely. The **complement rule** P(E′) = 1 − P(E) turns "at least one" problems into tractable "none" calculations. **Conditional probability** P(A|B) = P(A∩B)/P(B) (with P(B) > 0) formalises "given B has occurred". Events are **independent** iff P(A∩B) = P(A)·P(B); mutually exclusive ≠ independent unless one event has probability 0.

**Bayes' theorem** P(Aᵢ|B) = P(B|Aᵢ)P(Aᵢ) / Σⱼ P(B|Aⱼ)P(Aⱼ) is GATE's favourite two-stage problem: defective items from multiple suppliers, medical test accuracy, urn-with-replacement switches. The denominator Σⱼ P(B|Aⱼ)P(Aⱼ) is the **Total Probability**.

#### Random Variables and the Binomial Distribution

A **random variable** X assigns a number to each outcome; its **expectation** E(X) = Σ xᵢP(xᵢ) is the long-run average, and **variance** Var(X) = E(X²) − [E(X)]² measures spread. Expectation is **linear**: E(aX+bY) = aE(X) + bE(Y), but variance scales quadratically: Var(aX+b) = a²·Var(X). A **Binomial B(n,p)** setting requires four conditions: fixed n, two outcomes, constant p, independence. Then P(X=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ, with E(X) = np and Var(X) = np(1−p).

#### 🎯 Exam-Level Worked Problem

**Question:** A box contains 3 red and 5 blue balls. Two balls are drawn **without replacement**. What is the probability that the second ball drawn is red, **given that the first ball drawn is red**? (Answer in simplest form.)

#### Solution:

Step 1 — Identify the conditional event: we need P(second red | first red) = P(A|B), where B = "first ball is red".

Step 2 — Use the **without-replacement** logic directly (a faster route than Bayes'): after drawing one red, the box has **2 red and 5 blue = 7 balls total**.

Step 3 — Compute: P(A|B) = favourable/total = 2/7.

StepSolution check via Bayes' theorem: P(B) = 3/8; P(A∩B) = P(both red) = (3/8)(2/7) = 6/56 = 3/28; P(A|B) = (3/28)/(3/8) = (3/28)·(8/3) = 8/28 = **2/7** ✓.

> ⚠️ **Examiner Trap:** Students frequently write P(A∩B) = P(A)·P(B) = (3/8)·(3/8) = 9/64, treating draws as independent. They are **not** independent because the box composition changes after the first draw — the second draw's sample space shrinks from 8 to 7. Always check whether the problem says "with replacement" or "without replacement"; only the former preserves independence.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students with three or more months of prep time.

GATE occasionally stretches TA1 into multi-step composites — a Bayes' problem wrapped inside a binomial count, or a circular arrangement with a divisibility constraint. These "trap-heavy" items require you to verify four layers: (1) correct counting family, (2) correct repetition handling, (3) correct conditional/posterior identification, and (4) correct final simplification (fractions, not decimals).

#### Advanced Traps and Edge Cases

1. **Circular arrangements with a fixed reference:** n people around a round table = (n−1)!. But if **one specific person must sit opposite another**, divide further by 2 (you fixed one rotation, then the opposite-seat constraint breaks the remaining symmetry) → total = (n−1)!/2.
2. **"At least one" vs "exactly one":** P(at least one) = 1 − P(none) is cleaner. P(exactly one) requires summing or using the binomial: Σᵢ P(Aᵢ)·Πⱼ≠ᵢ P(A'ⱼ).
3. **Independence vs pairwise disjoint:** Two events with P(A), P(B) > 0 cannot be both mutually exclusive AND independent — because disjoint forces P(A∩B) = 0, while independence would force P(A∩B) = P(A)P(B) > 0. This contradiction appears in MSQ questions.
4. **Bayes' with more than two priors:** GATE sometimes uses 3 boxes (e.g., 30%/50%/20% prior, with different defective rates). You must compute **all three** numerator weights and the **full denominator** before dividing — skipping one prior = wrong answer.
5. **Variance of a linear combination:** Var(X + Y) = Var(X) + Var(Y) + 2·Cov(X,Y); only equals Var(X) + Var(Y) when X, Y are independent. A common error is adding variances of non-independent indicators.

#### Connections to Adjacent GATE Topics

TA1 sits inside **Engineering Mathematics / General Aptitude** alongside TA2 (Sets, Relations, Graphs, Logic). Venn-diagram counting tasks (|A ∪ B ∪ C|) merge TA1 with TA2. The Binomial distribution also recurs in **Queuing models** (CS) and **reliability engineering** (ME/EE) — the same P(X=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ governs k-success-out-of-n trials. Conditional probability is reused in **hypothesis testing** under Statistics (optional in some papers).

#### Time Management and Weightage

The GA section gives you **15 minutes for 10 questions** (1-mark × 5 + 2-mark × 5). Allocate **~2 minutes per 1-mark** and **~4 minutes per 2-mark**. Counting problems typically take longer — sketch the FPC tree on scratch paper before computing. Probability word problems demand identifying "given that…" clauses first; circle them in the statement before plugging in.

#### Practice Prompts

1. **Counting + restriction:** How many 5-digit numbers using digits {0,1,2,3,4} are divisible by 3 and contain no repeated digits? (Hint: total = 5·4·3·2·1 minus those with restricted digits — or use the sum-of-digits rule for divisibility by 3.)
2. **Bayes' with three priors:** Factory I makes 30% of chips with 2% defective rate, Factory II makes 50% with 3% defective, Factory III makes 20% with 5% defective. A randomly chosen chip is defective — what is the probability it came from Factory III? Apply P(Fᵢ|D) = P(D|Fᵢ)P(Fᵢ) / Σⱼ P(D|Fⱼ)P(Fⱼ) with i = III.

---

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Permutation, Combination and Probability" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All General Aptitude notes](/notes/gate/general-aptitude/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
