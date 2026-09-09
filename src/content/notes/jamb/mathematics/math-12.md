---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-12
topicName: Permutations and Combinations
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.737114"
lastUpdated: "2026-09-09"
diagramPrompt: "Mathematical diagram showing Permutations and Combinations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Permutations and Combinations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your JAMB UTME Mathematics paper.

A **permutation** is an ordered arrangement of distinct objects, counted by $^nP_r = \dfrac{n!}{(n-r)!}$. A **combination** is an unordered selection, counted by $^nC_r = \dfrac{n!}{r!\,(n-r)!}$. The single most-tested idea is recognising whether **order matters** in the word problem before picking a formula.

- $^nP_r$ is used when ranking, arranging digits in a number, or scheduling positions.
- $^nC_r$ is used for committees, teams, or subject choices where the group is the answer.
- $0! = 1$ by definition, and $^nC_r = \,^nC_{n-r}$ is a symmetry shortcut.
- Circular permutations of $n$ distinct objects around a table equal $(n-1)!$, not $n!$.
- JAMB in standard papers sets 1–2 questions (about 4% weight) — in most keys one direct evaluation and one word problem.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before the exam.

#### Definitions and the factorial

The **factorial** $n!$ is the product of all positive integers from $1$ up to $n$. By convention, $0! = 1$. Every permutation and combination formula is built from factorials, so checking a calculation reduces to checking factorial arithmetic. Treat $^nP_r$ and $^nC_r$ as operators that take two inputs ($n$, $r$) and return a dimensionless count.

#### Permutation vs combination

| Concept | Formula | When to use |
| --- | --- | --- |
| Permutation $^nP_r$ | $\dfrac{n!}{(n-r)!}$ | Order matters (arrangements, rankings, passwords) |
| Combination $^nC_r$ | $\dfrac{n!}{r!(n-r)!}$ | Order does not matter (committees, selections) |
| Fundamental Counting Principle | $m \times n$ | Sequential independent choices |
| Circular permutation of $n$ objects | $(n-1)!$ | Arrangements around a closed loop |

A quick test: if swapping two chosen items produces a **different** outcome (chair vs secretary, first-place vs second-place), use $^nP_r$. If swapping produces the **same** outcome (a 3-person committee), use $^nC_r$. JAMB word problems hinge on this single decision.

#### Repetitions and restrictions

When some objects are **identical**, divide by the factorial of the repetition count. For example, the arrangements of the letters in BALLOON are $\dfrac{7!}{2!\,2!}$ because L appears twice and O appears twice. For circular permutations, fix one object to break rotational symmetry, leaving $(n-1)!$ distinct arrangements — a classic trap when students write $n!$.

#### Exam patterns and traps

Direct numerical questions ask you to evaluate $^nP_r$ or $^nC_r$ for given values of $n$ and $r$. Word problems in most keys involve forming a committee, arranging books on a shelf, or forming numbers from given digits. For "**at least**" or "**at most**" conditions, the **complement rule** ($1$ minus the unwanted case) is faster than enumerating every favourable case.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline, including links to Probability.

#### Mechanism: why the formulas work

$^nP_r$ is the number of ways to fill $r$ ordered slots from $n$ distinct objects. The first slot has $n$ options, the second $n-1$, and so on, giving $n(n-1)\dots(n-r+1) = \dfrac{n!}{(n-r)!}$. $^nC_r$ divides this by $r!$ because each unordered set of $r$ objects is counted once for every permutation of those $r$ objects, and there are $r!$ such permutations. This identity $^nP_r = r!\cdot{^nC_r}$ is the bridge between the two topics.

#### Worked micro-example

How many 3-digit even numbers can be formed from $\{0,1,2,3,4\}$ with no repeated digits?
The units digit must be $0, 2,$ or $4$ (3 choices). With repetition forbidden, the hundreds digit cannot be $0$ and cannot equal the chosen units digit, giving 3 valid hundreds digits. The tens digit then has $3$ remaining choices. Total: $3 \times 3 \times 3 = 27$ numbers — a direct application of the Fundamental Counting Principle combined with a restriction rule.

#### Edge cases and common mistakes

| Mistake | Correct handling |
| --- | --- |
| Writing $n!$ for circular permutations | Use $(n-1)!$ |
| Treating $0!$ as $0$ | $0! = 1$ by definition |
| Dividing by repetition factorials incorrectly | For $p$ identical objects: divide by $p!$ |
| Using $^nC_r$ for ordered arrangements | Switch to $^nP_r$ when rank/position is specified |
| Forgetting the complement on "at least" problems | Compute $1 - P(\text{none})$ or $1 - P(\text{at most one})$ |

#### Connection to Probability

JAMB places Permutations and Combinations inside the Probability section of the syllabus because $\text{Probability} = \dfrac{\text{favourable outcomes}}{\text{total outcomes}}$. Mastering $^nC_r$ is a prerequisite for binomial probability and conditional probability questions later in the paper. Time per question is in standard papers 90 seconds — practice enough direct evaluations to hit this pace.

#### Practice prompts

1. Evaluate $^{10}C_3 + {^5P_2}$ and state which term corresponds to ordered arrangements.
2. A committee of 4 is chosen from 6 men and 5 women. How many ways include at least 2 women? (Hint: use the complement on cases with 0 or 1 woman.)

## Continue your study

- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Permutations and Combinations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jamb/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
