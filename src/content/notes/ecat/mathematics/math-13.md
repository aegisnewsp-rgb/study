---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-13
topicName: Probability and Permutations
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.070666"
lastUpdated: "2026-09-09"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT Mathematics paper.

Probability quantifies how likely an event is, while permutations count ordered arrangements of distinct objects. ECAT tests these together because counting the sample space is the first step in nearly every probability question.

- **Core probability formula:** $P(A) = \dfrac{n(A)}{n(S)}$, where $n(A)$ is the number of favourable outcomes and $n(S)$ is the total number of equally likely outcomes; $0 \le P(A) \le 1$.
- **Permutation formula:** $P(n,r) = \dfrac{n!}{(n-r)!}$, the number of ways to arrange $r$ distinct objects chosen from $n$.
- **Complement rule:** $P(A') = 1 - P(A)$, useful when "at least one" problems are easier to count backwards.
- **Independent events:** $P(A \cap B) = P(A) \cdot P(B)$.
- **Addition rule:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

> Tip: Order matters in permutations; it does not in combinations. If the question asks for a "line-up" or "rank", use $P(n,r)$. If it asks for a "team" or "committee", use $C(n,r)$.

| Distinction | Permutation $P(n,r)$ | Combination $C(n,r)$ |
| --- | --- | --- |
| Order | Matters | Does not matter |
| Formula | $n!/(n-r)!$ | $n!/[r!(n-r)!]$ |
| ECAT cue word | "arrange", "rank", "queue" | "select", "choose", "committee" |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few weeks to two months before ECAT.

#### Counting Principle and Sample Spaces

The **multiplication principle** states that if a first task can be performed in $m$ ways and a second in $n$ ways, both together can be performed in $m \cdot n$ ways. ECAT questions often hide this principle inside a story — for example, forming a 4-digit code from 10 digits under a "no repetition" condition reduces to $10 \cdot 9 \cdot 8 \cdot 7 = P(10,4) = 5040$.

#### Axioms and Rules of Probability

Starting from the classical definition, three axioms define the entire system: $0 \le P(A) \le 1$, $P(S) = 1$ where $S$ is the sample space, and $P(A_1 \cup A_2 \cup \dots) = \sum P(A_i)$ for mutually exclusive events. From these, the complement rule and the general addition rule follow directly. For non-mutually-exclusive events, the overlap $P(A \cap B)$ must be subtracted exactly once, so the addition rule reads $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

#### Conditional Probability and Independence

The conditional probability $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$ with $P(B) > 0$ measures the chance of $A$ after learning that $B$ occurred. Two events are **independent** when $P(A \mid B) = P(A)$, which algebraically gives $P(A \cap B) = P(A) \cdot P(B)$. Bayes' theorem, $P(A \mid B) = \dfrac{P(B \mid A) P(A)}{P(B)}$, reverses a conditional direction and is a favourite two-stage question in ECAT.

#### Worked Counting Example

How many ways can the top 3 finishers be arranged from 8 runners? Order matters, so the answer is $P(8,3) = \dfrac{8!}{5!} = 8 \cdot 7 \cdot 6 = 336$.

| Concept | Key point | ECAT trap |
| --- | --- | --- |
| $P(A \cup B)$ | Subtract $P(A \cap B)$ once | Forgetting the overlap inflates the answer |
| Independent vs conditional | Independent means $P(A \mid B) = P(A)$ | Treating dependent events as independent over-counts |
| $P(n,r)$ vs $n^r$ | $P(n,r)$ forbids repeats; $n^r$ allows them | Reading "with replacement" but using $P(n,r)$ |
| Complement | $P(\text{at least one}) = 1 - P(\text{none})$ | Counting each "at least one" case individually |

- Multiplication principle underpins every counting problem on the paper.
- Permutations and combinations differ only by whether order is recorded.
- Conditional problems almost always require Bayes' theorem or the definition $P(A \mid B) = P(A \cap B)/P(B)$.
- Watch for the word "without replacement" — it forces factorial or $P(n,r)$ style counting.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a multi-month revision plan.

#### Edge Cases in Counting

The four standard counting formulas — $n^r$ (with replacement), $P(n,r)$ (without replacement, order matters), $C(n,r)$ (without replacement, order irrelevant), and $n!/k!$ (circular permutations of $n$ distinct objects arranged in a ring where rotations are identical) — cover nearly every ECAT scenario. Circular arrangements are the most-missed variant: seating 6 people around a round table yields $(6-1)! = 120$, not $6!$. When repetitions are allowed among $r$ selections from $n$ types, the count is $n^r$, not $P(n,r)$.

#### Common Mistakes Examiners Exploit

1. Treating "at least one" problems by direct addition — far slower than the complement rule $1 - P(\text{none})$.
2. Using $P(A \mid B)$ when the question actually supplies $P(B \mid A)$, mixing up Bayes' numerator.
3. Confusing $P(A \cap B)$ with $P(A) \cdot P(B)$ when the events are dependent.
4. Dividing by $(n-r)!$ incorrectly; the full denominator is $(n-r)!$, never $n!$ alone.
5. Ignoring the constraint $P(B) > 0$ in conditional probability — undefined cases must be excluded.

#### Connections to Adjacent Topics

Probability links directly to **binomial distribution** (repeated independent Bernoulli trials), **set theory** (Venn diagrams for union and intersection), and **combinatorics** (stars and bars, inclusion-exclusion). Permutations feed into **determinant expansions** and **group theory** at higher levels, though ECAT stays within Pre-Engineering scope set by UET Lahore.

#### Practice Prompts

1. Two dice are rolled. Find the probability that the sum is 7 or 11. (Hint: count $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ plus $(5,6),(6,5)$ over 36 total.)
2. A bag holds 5 red and 3 blue balls. Two balls are drawn without replacement. Find $P(\text{both red})$ and verify it does **not** equal $P(\text{first red}) \cdot P(\text{second red})$.

> Tip: Write down $P(A \cap B)$ before choosing between the multiplication rule and conditional rule. If the events share a stage (with/without replacement), they are dependent and you must apply $P(A \cap B) = P(A) \cdot P(B \mid A)$.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
