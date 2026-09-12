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
lastUpdated: "2026-09-12"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT Mathematics paper.

**Probability** measures how likely an event is, ranging from 0 (impossible) to 1 (certain). For equally likely outcomes, P(A) = (favourable outcomes) / (total outcomes). A **permutation** counts ordered arrangements of r objects chosen from n distinct objects, given by P(n,r) = n! / (n−r)!. A **combination** counts selections where order does not matter: C(n,r) = n! / [r! (n−r)!].

The **complement rule** P(A′) = 1 − P(A) saves time on "at least one" problems. For two events, P(A ∪ B) = P(A) + P(B) − P(A ∩ B); if they are **mutually exclusive**, the overlap is 0. **Independent events** multiply: P(A ∩ B) = P(A) · P(B).

| Term | Meaning |
| --- | --- |
| Sample space (S) | Set of all possible outcomes |
| Favourable outcomes | Outcomes where the event occurs |
| Mutually exclusive | Cannot happen together, P(A ∩ B) = 0 |
| Independent | One does not affect the other |

- Watch the wording: "arrange" → permutation; "select" → combination.
- ECAT in most keys gives 1–2 MCQs from this 4%-weight slot, in many papers on counting or conditional probability.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before ECAT.

#### Core Probability Rules

Probability is built on three axioms attributed to Kolmogorov: P(A) ≥ 0, P(S) = 1, and additivity over disjoint events. From these, the complement rule and the addition rule follow directly. Conditional probability, P(A|B) = P(A ∩ B) / P(B), restates the sample space as the outcomes of B and asks how in many papers A occurs within it. Bayes' theorem, P(A|B) = P(B|A)·P(A) / P(B), then inverts this conditioning — useful when a problem gives "reverse" information.

#### Permutations vs. Combinations

The **multiplication principle** underpins both: if task 1 can be done in m ways and task 2 in n ways, both can be done in m·n ways. Permutations extend this to ordered sequences of r objects drawn without replacement from n, producing the formula P(n,r) = n! / (n−r)!. Combinations remove the ordering by dividing out the r! internal arrangements of each selected set, giving C(n,r) = n! / [r! (n−r)!].

#### Worked Relationship

If r = 3 and n = 10, then P(10,3) = 10 · 9 · 8 = 720, while C(10,3) = 720 / 6 = 120. The ratio equals r! — exactly the number of orderings being discarded.

#### Typical ECAT Patterns

- "How many ways can 5 books be arranged on a shelf if 2 specific books must be together?" — fix the block first, then permute within.
- "Probability that at least one defect appears in a sample" — apply the complement rule.
- "Two cards drawn without replacement" — recognise conditional probability, not independence.

| Concept | Key point |
| --- | --- |
| Complement rule | P(A′) = 1 − P(A); faster for "at least one" |
| Addition rule | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) |
| Independence | P(A ∩ B) = P(A) · P(B) only when events don't influence each other |
| Bayes' theorem | P(A\|B) = P(B\|A)·P(A) / P(B) |
| Permutation | P(n,r) = n! / (n−r)!, order matters |

#### Common Traps

- Treating "with replacement" draws as independent when the wording actually means without replacement.
- Forgetting to subtract P(A ∩ B) when events overlap.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Counting and Conditional Probability

When a problem describes a multi-stage experiment, model it with a **tree diagram**: each branch carries the conditional probability of its child outcome. The probability of a leaf equals the product of branch probabilities along its path (multiplication rule). The probability of an event spanning multiple leaves is the sum of those leaf probabilities (addition rule for mutually exclusive leaves). This single picture reproduces both rules simultaneously and makes Bayes' theorem a literal reversal of the tree.

For **ordered arrangements with restrictions**, the standard move is to treat restricted objects as one block, count arrangements of the block plus the remaining units, and then multiply by the internal permutations of the block. For selections with identical objects, divide by the factorial of the repetitions to avoid overcounting.

#### Edge Cases Worth Memorising

| Scenario | Correct approach |
| --- | --- |
| "At least one" of several types | Complement: 1 − P(none of any type) |
| Circular permutations of n distinct objects | (n−1)!, not n! — rotations are equivalent |
| Permutations with repetition allowed | n^r, not n!/(n−r)! |
| Two draws without replacement | Use P(A ∩ B) = P(A)·P(B\|A), not P(A)·P(B) |
| Identical objects being arranged | Divide n! by the product of factorials of each repetition count |

#### Common Mistakes

- Confusing permutations and combinations in "arrange vs. select" wording.
- Applying P(A ∩ B) = P(A)·P(B) to draws without replacement — these are not independent.
- Computing P(A|B) as if it were P(B|A) when the conditioning event is swapped.
- Dropping the (n−r)! term and answering with n! when r ≠ n.

#### Practice Prompts

1. A box has 4 red and 6 blue balls. Two balls are drawn without replacement. Find the probability that both are red.
2. In how many ways can the letters of the word "MISSISSIPPI" be arranged?

#### Exam Strategy

ECAT allocates roughly 4% of Mathematics to this cluster — in most keys 1–2 MCQs. Spend under 90 seconds per question: spot whether the stem asks for arrangements (permutation) or selections (combination), check the independence assumption, and apply the complement rule whenever "at least one" appears.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
