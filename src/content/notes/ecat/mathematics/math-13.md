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
lastUpdated: "2026-09-13"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability quantifies how likely an event is, expressed as P(A) = favorable outcomes ÷ total equally likely outcomes, with 0 ≤ P(A) ≤ 1. A permutation counts **ordered** selections, given by P(n,r) = n! / (n−r)!. ECAT typically frames 1–2 MCQs on these topics at the FSc/Pre-Engineering level, so focus on counting, the addition rule, and the permutation formula.

- **Permutation formula:** P(n,r) = n! / (n−r)! for ordered arrangements of r from n distinct objects.
- **Basic probability:** P(A) = n(A) / n(S), where n(A) is favorable and n(S) is the sample space.
- **Complement rule:** P(A′) = 1 − P(A), useful when "at least one" problems are easier flipped.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Counting Principle
If task 1 can be done in m ways and task 2 in n ways, both can be done in m · n ways. This multiplicative rule underpins every permutation and combination problem on ECAT. Tree diagrams make it easier to enumerate sample spaces for two-stage experiments like tossing two coins or drawing two cards with replacement.

#### Permutation vs Combination
Order matters in permutations (arranging books on a shelf, ranking contestants) but not in combinations (selecting a committee). The permutation formula P(n,r) = n! / (n−r)! gives ordered arrangements; for unordered groups use C(n,r) = n! / [r!(n−r)!]. Many ECAT traps hinge on this single distinction.

#### Key Probability Rules

| Rule | Formula | When to apply |
| --- | --- | --- |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Either A or B occurs (not mutually exclusive) |
| Multiplication | P(A ∩ B) = P(A) · P(B) | Independent events |
| Conditional | P(A\|B) = P(A ∩ B) / P(B), P(B) > 0 | A given that B has occurred |
| Complement | P(A′) = 1 − P(A) | "At least one" type problems |

#### Typical Question Types
- Counting arrangements: "In how many ways can 5 books be arranged if 2 specific books must be together?" → treat the pair as a block (4! × 2!).
- Probability with replacement: two dice rolled, find P(sum = 7) = 6/36 = 1/6.
- Conditional: P(king \| face card) = 4/12 = 1/3.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example
A bag holds 3 red and 5 blue balls. Two balls are drawn without replacement. Find P(both red).

Total ways to draw 2 from 8 = C(8,2) = 28. Favorable ways = C(3,2) = 3. So P(both red) = 3/28 ≈ 0.107.

Alternative via conditional probability: P(1st red) · P(2nd red \| 1st red) = (3/8) × (2/7) = 6/56 = 3/28. Both routes agree, which is a useful self-check.

#### Edge Cases and Exam Traps
- **Without replacement** invalidates the independence assumption; you cannot use P(A ∩ B) = P(A) · P(B) directly.
- Bayes' theorem reverses conditional probabilities: P(A\|B) = [P(B\|A) · P(A)] / P(B).
- Mutually exclusive events force P(A ∩ B) = 0, simplifying the addition rule.
- Factorial growth is steep: 10! = 3,628,800, so P(n,r) explodes for large n — calculators are usually permitted on ECAT.

#### Common Mistakes
1. Dropping the (n−r)! denominator when r is small, e.g., computing P(10,2) as 10! instead of 10!/8! = 90.
2. Confusing P(A\|B) with P(B\|A) on two-stage diagnostic-style questions.
3. Forgetting to subtract overlap in P(A ∪ B) when events are not mutually exclusive.

#### Practice Prompts
1. How many 4-digit codes can be formed from digits {0,1,...,9} if no digit repeats and the code must start with an odd digit?
2. Three coins are tossed. Find P(exactly two heads) using the complement rule and verify with direct counting.

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
