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
> Rapid summary for last-minute revision before your exam.

**Probability** measures how likely an event is, given by P(A) = n(A) / n(S), where n(A) counts favorable outcomes and n(S) counts all equally likely outcomes in the sample space. The result always sits between 0 and 1.

A **permutation** counts *ordered* arrangements of r objects chosen from n distinct objects, using P(n, r) = n! / (n − r)!, with n! read as "n factorial" = n × (n−1) × … × 1.

- **Order matters** in permutations; **order does not matter** in combinations.
- P(A′) = 1 − P(A) for the complement, and P(A ∪ B) = P(A) + P(B) − P(A ∩ B) for any two events.
- For independent events, P(A ∩ B) = P(A) · P(B); for dependent cases, use P(A|B) = P(A ∩ B) / P(B).

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Counting Foundation

Every probability problem on ECAT begins with correctly enumerating the sample space. The **multiplication principle** states that if task 1 has m ways and task 2 has n ways, both tasks together have m · n ways. Tree diagrams make this concrete when a question describes two or three stages, such as drawing cards with replacement or tossing coins.

#### Permutations

P(n, r) = n! / (n − r)! counts ordered selections without repetition. Example: arranging 3 winners chosen from 10 contestants gives P(10, 3) = 10 · 9 · 8 = 720. When r = n, you fall back to n!, the count of all arrangements of n distinct objects.

#### Core Probability Rules

| Rule | Formula | When to use |
| --- | --- | --- |
| Classical probability | P(A) = n(A) / n(S) | Outcomes equally likely |
| Complement | P(A′) = 1 − P(A) | "At least one" or "none" phrasing |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | A *or* B; subtract overlap |
| Multiplication (independent) | P(A ∩ B) = P(A) · P(B) | One event does not affect the other |
| Conditional | P(A\|B) = P(A ∩ B) / P(B), P(B) > 0 | A given that B occurred |

#### Exam Patterns

ECAT typically asks 1–2 MCQs worth 4% of the Mathematics section. Expect short numerical answers using factorials, a one-step conditional probability, or a counting question that requires distinguishing *arrangements* (permutation) from *selections* (combination).

- Translate "arrange" or "in how many orders" → permutation.
- Translate "select" or "form a group" → combination C(n, r) = n! / [r!(n − r)!].
- Use the complement rule when "at least one" wording inflates the counting.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Conditional Probability and Bayes

Conditional probability P(A|B) = P(A ∩ B) / P(B) describes the updated chance of A after learning B occurred. Reversing the conditioning gives P(B|A) = P(B ∩ A) / P(A), and equating the joint probability P(A ∩ B) = P(A|B)·P(B) = P(B|A)·P(A) leads directly to **Bayes' theorem**:
P(A|B) = P(B|A)·P(A) / P(B).
ECAT occasionally tests two-stage experiments such as drawing two balls from a bag without replacement, where the second probability depends on the first.

#### Mutually Exclusive vs Independent

**Mutually exclusive** events cannot occur together, so P(A ∩ B) = 0 and the addition rule collapses to P(A ∪ B) = P(A) + P(B). **Independent** events satisfy P(A ∩ B) = P(A)·P(B). These are different properties; two events can be mutually exclusive without being independent (unless one has probability 0).

#### Worked Example

A bag holds 4 red and 6 blue balls. Two balls are drawn without replacement. Find the probability that both are red.
P(both red) = (4/10) · (3/9) = 12/90 = 2/15.
Here P(A₂|A₁) = 3/9 because one red ball was removed, illustrating dependence.

#### Common Mistakes

1. Confusing P(n, r) with C(n, r) on "selection" questions — order does matter in arrangements only.
2. Using P(A ∩ B) = P(A)·P(B) on dependent draws without replacement.
3. Computing P(A|B) when the question actually asks for P(B|A).

#### Practice Prompts

- If P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2, compute P(A|B) and P(A ∪ B).
- How many 4-digit codes can be formed from digits 0–9 if no digit repeats and the code cannot start with 0?

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
