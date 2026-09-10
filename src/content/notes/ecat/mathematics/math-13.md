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
lastUpdated: "2026-09-10"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT Mathematics paper.

Probability quantifies how likely an event is on a 0–1 scale. A permutation counts **ordered** arrangements of distinct objects.

- Probability: $P(A) = \dfrac{n(A)}{n(S)}$, where $n(A)$ is the number of favorable outcomes and $n(S)$ is the total number of equally likely outcomes in the sample space; result is dimensionless and satisfies $0 \le P(A) \le 1$.
- Permutation: $P(n,r) = \dfrac{n!}{(n-r)!}$, the number of ways to arrange $r$ objects chosen from $n$ distinct objects.
- Complement rule: $P(A') = 1 - P(A)$.

| Quick formula | When to use it |
| --- | --- |
| $P(A) = n(A)/n(S)$ | All outcomes equally likely |
| $P(n,r) = n!/(n-r)!$ | Order matters (rankings, codes, line-ups) |
| $P(A') = 1 - P(A)$ | Easier to count "not A" than A |

**High-yield pointers:** ECAT typically asks 1–2 MCQs from this 4%-weightage slot, usually on conditional probability or a counting problem; identify whether order matters before picking permutation vs. combination; remember $0!=1$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definitions and the probability scale

A random experiment produces a **sample space** $S$ listing every possible outcome. An event $A$ is any subset of $S$. Probability assigns each event a number between 0 (impossible) and 1 (certain) such that $P(S)=1$. Two events are **mutually exclusive** when they cannot occur together, giving $P(A \cap B)=0$, and **independent** when the occurrence of one does not change the other, giving $P(A \cap B)=P(A)\cdot P(B)$.

#### Addition and conditional probability

For any two events the addition rule is $P(A \cup B) = P(A) + P(B) - P(A \cap B)$. Subtracting the overlap is what students most often forget. The conditional probability formula $P(A|B) = \dfrac{P(A \cap B)}{P(B)}$, with $P(B)>0$, gives the revised chance of $A$ once $B$ is known to have happened. Bayes' theorem follows by substituting the multiplication rule: $P(A|B) = \dfrac{P(B|A)\cdot P(A)}{P(B)}$.

#### Permutation formula in detail

Choose $r$ objects from $n$ distinct objects and arrange them in order. The first slot has $n$ choices, the second $n-1$, continuing down to $n-r+1$ for the last slot, yielding $n(n-1)(n-2)\cdots(n-r+1) = \dfrac{n!}{(n-r)!}$.

#### Common ECAT traps

- Treating a selection as a permutation, or vice versa, especially when the question says "arrange" vs "choose".
- Forgetting $P(A \cap B)$ when adding non-exclusive events.
- Computing $P(A|B)$ but writing the answer as $P(B|A)$.

| Concept | Key point | Typical MCQ form |
| --- | --- | --- |
| Independent events | $P(A \cap B) = P(A)\cdot P(B)$ | Two coins tossed, both heads |
| Mutually exclusive | $P(A \cap B) = 0$ | Single die, even **and** odd |
| Conditional | $P(A\|B) = P(A \cap B)/P(B)$ | Card drawn without replacement |
| Permutation | $n!/(n-r)!$ | Code words, top-three finishers |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Multiplication principle and tree diagrams

When a procedure has $k$ independent stages with $n_1, n_2, \ldots, n_k$ choices respectively, the total outcomes equal $n_1 \cdot n_2 \cdots n_k$. Tree diagrams enumerate these visually and are the standard tool for two-stage conditional-probability problems on ECAT-style papers.

#### Worked example

A bag holds 5 red and 3 blue marbles. Two marbles are drawn **without replacement**. Find $P(\text{both red})$.

$P(\text{1st red}) = 5/8$. Given that first is red, $P(\text{2nd red}) = 4/7$. By the multiplication rule for dependent events, $P(\text{both red}) = \dfrac{5}{8} \times \dfrac{4}{7} = \dfrac{20}{56} = \dfrac{5}{14}$.

For the ordered arrangement version: the number of ways to pick and arrange 2 red marbles from 5 is $P(5,2) = \dfrac{5!}{3!} = 20$, and the total ordered pairs from 8 marbles is $P(8,2) = \dfrac{8!}{6!} = 56$, giving the same $20/56 = 5/14$ — a useful cross-check.

#### Edge cases and adjacent links

- $0! = 1$ by definition, so $P(n,n) = n!$ covers arranging all $n$ objects.
- Conditional probability connects directly to Bayes' theorem in Statistics and to set operations (De Morgan's laws) in Venn-diagram questions.
- "At least one" problems are almost always solved via the complement: $P(\text{at least one}) = 1 - P(\text{none})$.

#### Practice prompts

1. A 4-digit PIN uses distinct digits with no repetition. How many PINs are possible if the first digit cannot be 0?
2. Two cards are drawn from a standard 52-card deck without replacement. What is the probability that both are aces?

| Pitfall | Correct handling |
| --- | --- |
| Using $n!$ instead of $n!/(n-r)!$ | Subtract $r$ from $n$ before the factorial |
| Assuming independence after sampling | Reduce the denominator by 1 each draw |
| Treating order as irrelevant | Use permutation only when the wording demands an order |

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
