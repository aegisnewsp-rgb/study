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
lastUpdated: "2026-09-14"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability quantifies the chance of an event on a scale of **0 ≤ P(A) ≤ 1**, computed as **P(A) = n(A)/n(S)**, where *n(A)* is the count of favorable outcomes and *n(S)* is the total equally likely outcomes in the sample space. A **permutation** is an ordered selection of *r* objects from *n* distinct objects, given by **P(n,r) = n!/(n−r)!**.

| Concept | Use When | Formula |
|---|---|---|
| Probability | Measuring likelihood | P(A) = n(A)/n(S) |
| Permutation | Order matters | P(n,r) = n!/(n−r)! |
| Complement | "Not A" event | P(A′) = 1 − P(A) |
| Multiplication | Sequential choices | m × n ways |

> 💡 **High-Yield Memory Hook:** **"PERM = POSITIONS matter, COMB = CREW only"** — if rearranging changes the answer, you need P(n,r); if it doesn't, you need C(n,r). For ECAT, spot the word *"arrange"* (permutation) versus *"select/choose/group"* (combination).

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

Probability rules branch into three operational directions: classical counting using the sample space, conditional chains through Bayes-style reasoning, and the ordered arrangements handled by permutations. ECAT routinely tests these by asking students to recognize which counting model fits a one-line problem and then apply the right formula without algebraic slippage.

#### Core Formulas and Variables

| Formula | Meaning | Variables / SI |
|---|---|---|
| P(A) = n(A)/n(S) | Classical probability | n(A), n(S) are dimensionless counts |
| P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Addition rule | dimensionless |
| P(A ∩ B) = P(A)·P(B) | Independent events only | dimensionless |
| P(A\|B) = P(A ∩ B)/P(B) | Conditional probability, P(B) > 0 | dimensionless |
| P(n,r) = n!/(n−r)! | Ordered arrangements | n, r are integers, r ≤ n |

#### Key Principles
1. **Sample space first:** list every equally likely outcome before counting favorable ones.
2. **Multiplication principle:** if task 1 has *m* ways and task 2 has *n* ways, both together have *m·n* ways.
3. **Order check:** "arrange/seat/rank" → permutation; "select/committee/group" → combination.
4. **Independence check:** events are independent only if one does not influence the other.

#### Concept Comparison Matrix

| Feature | Permutation P(n,r) | Combination C(n,r) |
|---|---|---|
| Order | Required | Not required |
| Formula | n!/(n−r)! | n!/[r!(n−r)!] |
| Example | 1st, 2nd, 3rd prize | Committee of 3 members |
| ECAT keyword | "arrange", "rank", "seating" | "select", "choose", "group" |
| Count growth | Larger than C(n,r) for r ≥ 2 | Smaller than P(n,r) for r ≥ 2 |

#### 🎯 Exam-Level Worked Problem

**Question:** A bag contains 5 red and 3 blue balls. Two balls are drawn in succession. What is the probability that both are red, if the first ball is *not* replaced?

#### Solution:
- Total balls: *n(S)* = 8.
- P(1st red) = 5/8.
- After one red is removed: 4 red remain out of 7 total, so P(2nd red | 1st red) = 4/7.
- Joint probability: P(both red) = (5/8) × (4/7) = **20/56 = 5/14**.

> ⚠️ **Examiner Trap:** Students often answer (5/8) × (5/8) = 25/64, forgetting that draws are **dependent** without replacement. ECAT variants test this with wording like *"without replacement"* versus *"with replacement"* — read carefully.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

The deeper layer of this topic merges **counting theory** with **axiomatic probability** (Kolmogorov's three axioms). ECAT problems at UET Lahore rarely go beyond two-stage conditional setups, but mastery lets you handle Bayes' theorem and inclusion–exclusion extensions.

#### Advanced Traps and Edge Cases

| Trap | What Happens | Correct Approach |
|---|---|---|
| Treating conditional as reverse | Writes P(B\|A) when asked for P(A\|B) | Re-anchor: "given B" sets the new sample space |
| Ignoring mutually exclusive overlap | Adds P(A) + P(B) directly | Subtract P(A ∩ B) when events can occur together |
| Forgetting factorial base | Uses n! in numerator without (n−r)! in denominator | Permutation = n!/(n−r)! always |
| Counting arrangements as selections | Picks C(n,r) for "arrange in a row" | Use P(n,r); order counts |
| Misreading "at least one" | Computes single probability | Use complement: 1 − P(none) |

#### 🔴 Advanced Practice Prompts
1. **Three-digit codes from {0,1,2,3,4} with no repetition:** how many codes are odd and greater than 200? (Answer pathway: fix last digit to {1,3} → 2 choices, fix hundreds digit with constraint, then permute the middle.)
2. **Two cards drawn from 52:** find P(ace on 2nd \| king on 1st) with replacement vs without replacement. Compare the two numerical answers (1/13 with replacement; 4/51 without).

> ⚠️ **Examiner Trap:** In multi-part problems, ECAT often lists "with replacement" and "without replacement" as separate MCQs in the same paper. Mixing the two yields off-by-one answers in the denominator (7 vs 8, 51 vs 52). Always restate the sample space *after* each draw.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
