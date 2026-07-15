---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-015
topicName: Permutations
weight: 5
country: india
generated: "2026-03-24T08:32:07.940870"
lastUpdated: "2026-07-15"
diagramPrompt: "Mathematical diagram showing Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **permutation** counts the number of **ordered arrangements** of `r` distinct objects chosen from `n` distinct objects. The central formula is:

$$^nP_r = \frac{n!}{(n-r)!}, \quad n \ge r \ge 0$$

where `n` is the total pool of distinct objects and `r` is the number of positions filled. The factorial identity `n! = n \times (n-1) \times \cdots \times 2 \times 1` drives every counting step, with `0! = 1` as the base case.

> **High-yield pointer:** Circular permutations of `n` distinct objects = `(n-1)!`, NOT `n!` — fix one object to remove rotational equivalence.

#### Exam pointers:
- Distinguish **order matters (permutation)** from **order irrelevant (combination)** before plugging into a formula.
- When items repeat (e.g., `MISSISSIPPI`), divide by the factorial of each repeated block.
- Derangements `D_n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}` are tested via inclusion–exclusion.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and the core formula

For `n` distinct objects arranged `r` at a time, the number of linear arrangements is:

$$^nP_r = \frac{n!}{(n-r)!}$$

Derivation: the first position has `n` choices, the second `n-1`, …, the `r`-th has `n-r+1`. Multiplying gives `n(n-1)\cdots(n-r+1) = n!/(n-r)!`. This rests on the **Fundamental Principle of Counting** — if task A can be done in `m` ways and task B in `n` ways, the pair can be done in `m \times n` ways.

#### Identical objects and multinomial counts

When `n` objects contain `p` identical of one kind, `q` of another, `r` of a third, and so on, distinct arrangements equal:

$$\frac{n!}{p! \, q! \, r! \cdots}$$

The denominator cancels overcounting from treating identical items as distinguishable. Example: the letters of `MISSISSIPPI` (11 letters with `4` I's, `4` S's, `2` P's) yield `11!/(4! \cdot 4! \cdot 2!) = 34650` distinct arrangements.

#### Circular arrangements and constraints

For `n` distinct objects around a circle, fix one object as reference (eliminating `n` rotations), giving `(n-1)!`. The **gaps method** handles "arrangements where no two of `k` specified objects are adjacent": place the non-restricted `(n-k)` items first, creating `(n-k-1)!` linear arrangements and `(n-k)` internal gaps plus `2` end gaps, then seat the `k` objects in `^kP_k` ways.

> **Trap:** "Together" means bundle the group first (internal permutations), then treat the bundle as one unit among `(n - \text{group size} + 1)` slots.

#### Permutation vs combination

The identity `^nP_r = r! \cdot {^nC_r}` connects the two counts: each `r`-combination can be internally ordered in `r!` ways. Use this when a problem gives a combination count and asks for ordered arrangements.

| Situation | Formula |
|---|---|
| `r` from `n` distinct, ordered | `n! / (n-r)!` |
| All `n` in a circle | `(n-1)!` |
| `n` with repeats (p,q,r identical) | `n! / (p! q! r!)` |
| `r`-arrangements with repetition allowed | `n^r` |
| Derangements of `n` items | `n! \sum (-1)^k / k!` |

JEE Advanced typically tests permutations as a **single integer-answer or MCQ worth 3–4 marks**, often embedded inside Probability or Binomial Theorem questions.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Derangements via inclusion–exclusion

A **derangement** `D_n` is a permutation with no fixed point. Using inclusion–exclusion on the `n` bad events `A_i` (element `i` stays in position `i`):

$$D_n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!} \approx \frac{n!}{e}$$

For small `n`: `D_1 = 0`, `D_2 = 1`, `D_3 = 2`, `D_4 = 9`, `D_5 = 44`. The recurrence `D_n = (n-1)(D_{n-1} + D_{n-2})` is faster to compute by hand.

#### Restricted positions — problème des ménages

For `n` married couples seated at a circular table with men and women alternating and no spouse adjacent, the count is the **ménage number**:

$$M_n = 2 \cdot n! \cdot A_n$$

where `A_n` satisfies the recurrence `A_n = (n-2)A_{n-1} + (n-3)A_{n-2}` with `A_0 = 1, A_1 = 0`. JEE Advanced occasionally disguises this as a "circular arrangement with alternating groups" question.

#### Multinomial distribution of distinct objects into labeled boxes

Distributing `n` distinct objects into groups of sizes `n_1, n_2, \ldots, n_k` (with `n_1 + n_2 + \cdots + n_k = n`):

$$\binom{n}{n_1, n_2, \ldots, n_k} = \frac{n!}{n_1! \, n_2! \cdots n_k!}$$

This coefficient appears in the **Multinomial Theorem** and in probability questions asking for the chance that a shuffled deck produces specific block structures.

#### Common mistakes

> **Misread trap:** `^nP_r` with `r > n` gives 0, not a negative factorial — guard with the condition `n \ge r`.

- Confusing `n^r` (with repetition) with `n!/(n-r)!` (without repetition).
- Treating circular permutations as `n!` when rotations are equivalent; using `(n-1)!` for necklaces where flips also coincide (then divide by `2` for `n \ge 3`).
- For multinomial division: forgetting one of the repeated-group factorials.
- Overcounting in "apart" problems by placing restricted items in non-adjacent gaps but using `^kP_k` instead of `k!` if those `k` items are themselves distinct yet treated as identical.

#### Practice prompts

1. **Integer answer:** Find the number of ways to arrange the letters of `BANANA` so that no two `A`'s are adjacent. (Answer: `5! \cdot {^6C_3} / \text{overlap correction}` — solve via the gaps method.)
2. **MCQ:** Six distinct books are distributed among three students such that each gets at least one. The number of distributions is — (compute via multinomial restricted by the "at least one" condition).

#### Connections to adjacent topics

Permutations feed directly into **Probability** (sample spaces), **Binomial Theorem** (`(x+y)^n` coefficients are combinations, but coefficient *positions* correspond to permutations of exponent allocations), and **Generating Functions** (exponential generating functions encode `n!` weights). Mastery here unlocks the harder arrangement problems in JEE Advanced Paper 2.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
