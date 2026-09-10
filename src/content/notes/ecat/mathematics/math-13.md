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
> Rapid summary for last-minute revision before your exam.

**Probability** measures how likely an event is, written as P(A) = favourable outcomes ÷ total equally likely outcomes, with the value locked between 0 and 1. A **permutation** counts the ordered arrangements of *r* objects chosen from *n*, given by P(n,r) = n! / (n−r)!. Two rules save time on most ECAT items: P(A′) = 1 − P(A) for complement questions, and P(A ∩ B) = P(A) · P(B) only when A and B are **independent**. Order matters in permutations; it does not in combinations, so read the wording — "arrange" versus "select" — before choosing a formula.

- **P(A) = n(A) / n(S)**, where n(A) is favourable outcomes and n(S) is the sample-space size.
- **P(n,r) = n! / (n−r)!**, the count of ordered selections.
- **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**, dropping the last term only if events are mutually exclusive.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Probability Axioms

Every ECAT probability question rests on three axioms: P(A) ≥ 0, P(S) = 1 for the full sample space, and additivity over **mutually exclusive** events. From these flow the complement rule P(A′) = 1 − P(A) and the general addition rule P(A ∪ B) = P(A) + P(B) − P(A ∩ B). The overlap term vanishes when A and B cannot occur together, but it must be kept whenever the events share outcomes.

#### Conditional Probability and Independence

**Conditional probability** answers "given B has occurred, what is the chance of A?" using P(A|B) = P(A ∩ B) / P(B), valid only when P(B) > 0. Events are **independent** precisely when P(A ∩ B) = P(A) · P(B), which is equivalent to P(A|B) = P(A). Confusing the two directions of conditioning — P(A|B) versus P(B|A) — is the most common error ECAT examiners exploit.

#### Permutations vs. Combinations

| Concept | Formula | When to use |
| --- | --- | --- |
| Permutation P(n,r) | n! / (n−r)! | Order matters (rankings, line-ups, codes) |
| Combination C(n,r) | n! / [r! (n−r)!] | Order does not matter (committees, handshakes) |
| Multiplication principle | m · n | Sequential independent choices |

#### Multiplication Principle

If task 1 has *m* ways and task 2 has *n* ways, both tasks together have m · n ways. This extends to *k* tasks: m₁ · m₂ · … · mₖ. A tree diagram is the cleanest way to enumerate the sample space for two-stage experiments like tossing two coins or drawing two cards without replacement.

- Watch the wording: "how many arrangements" → permutation; "how many groups" → combination.
- Check independence before multiplying probabilities; check mutual exclusivity before adding.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Bayes' Theorem and Two-Stage Problems

ECAT occasionally tests **Bayes' theorem**: P(A|B) = [P(B|A) · P(A)] / P(B). The denominator P(B) is usually expanded with the law of total probability, P(B) = P(B|A)·P(A) + P(B|A′)·P(A′). Use it for "reverse conditioning" questions such as defective items drawn from two machines.

#### Counting Edge Cases

Repetition matters: arranging the letters of "ALLAH" uses n! / (multiplicities of repeated letters) — 5! / 3! = 20 — not a plain P(n,r). Circular permutations of *n* distinct objects around a round table equal (n−1)!, since rotations are equivalent. For restricted permutations (objects that must stay apart), use inclusion–exclusion: total minus the arrangements where forbidden items sit together.

#### Common Mistakes ECAT Tests

1. **Permutation–combination swap**: choosing P(5,2) = 20 instead of C(5,2) = 10 for a committee of 2 from 5 people.
2. **Adding without subtracting overlap** when events share outcomes, inflating the probability above 1.
3. **Multiplying for dependent events**: drawing two cards without replacement violates independence, so the multiplication rule needs adjustment.
4. **Factorial slip**: writing (n+r)! instead of (n−r)! in the denominator when r items are placed in order.
5. **Ignoring the "at least one" wording**: complement rule converts "at least one" into 1 − P(none), which is almost always faster than direct counting.

#### Worked Example

A bag has 4 red and 6 blue balls. Two balls are drawn without replacement. Find P(both red). P(1st red) = 4/10, P(2nd red | 1st red) = 3/9. So P = (4/10) × (3/9) = 12/90 = 2/15. Note the second denominator shrinks — a clear sign the events are dependent.

#### Practice Prompts

1. In how many ways can the letters of "MISSISSIPPI" be arranged? Answer uses 11! / (4! · 4! · 2!) = 34,650.
2. A die is rolled twice. Find P(sum ≥ 10) using the complement P(sum ≤ 9) = 1 − 6/36 = 30/36 = 5/6.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
