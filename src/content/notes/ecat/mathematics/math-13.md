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

Probability quantifies how likely an event is, using **P(A) = n(A)/n(S)**, where n(A) is the count of favourable outcomes and n(S) is the total count of equally likely outcomes in the sample space. The value always satisfies **0 ≤ P(A) ≤ 1**. A permutation counts ordered arrangements of r distinct objects taken from n distinct objects: **P(n,r) = n!/(n−r)!**.

- **Order matters** for permutations; ignore it for combinations (nCr = n!/(r!(n−r)!), not asked directly but often the trap).
- **Independent events** multiply: P(A ∩ B) = P(A)·P(B).
- **Mutually exclusive events** add with no overlap: P(A ∪ B) = P(A) + P(B).
- **Complement rule**: P(A') = 1 − P(A) — fastest shortcut for "at least one" problems.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Probability Rules

ECAT asks you to apply axioms, not derive them. Memorise the four operational formulas and recognise which one a question triggers by its wording.

| Rule | Formula | When to use |
| --- | --- | --- |
| Classical | P(A) = n(A)/n(S) | Finite sample space, equally likely outcomes |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | "A or B" — subtract the overlap unless mutually exclusive |
| Multiplication | P(A ∩ B) = P(A)·P(B) | Independent events only |
| Conditional | P(A\|B) = P(A ∩ B)/P(B) | "A given that B has occurred", P(B) > 0 |

#### Permutations vs Counting Principle

The factorial n! grows fast (5! = 120, 6! = 720), so permutation values explode quickly. For P(n,r), cancel n! against (n−r)! before multiplying to avoid overflow errors on paper.

#### Typical ECAT Patterns

- "How many ways can 5 people sit on 3 chairs?" → P(5,3) = 60.
- "Probability of getting at least one head in 3 coin tosses?" → 1 − P(all tails) = 1 − (1/2)³ = 7/8.
- "Two cards drawn without replacement — probability second is a king?" → Conditional, P(K₂\|K₁) = 3/51.

ECAT tests these as 1–2 MCQs in the Mathematics section, usually as short numeric answers (integer or simplified fraction).

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Bayes' Theorem

When P(A\|B) is asked but only P(B\|A), P(A), and P(B) are given, use **Bayes' theorem**: P(A\|B) = P(B\|A)·P(A) / P(B). ECAT rarely tests Bayes directly, but conditional probability appears in "without replacement" card or ball problems.

| Mistake | Why it costs marks | Fix |
| --- | --- | --- |
| Using P(A\|B) = P(B\|A) | Different denominators | Write the conditional formula explicitly first |
| Treating "with replacement" as "without" | Denominator changes (52 vs 51) | Re-read the stem for the word "replacement" |
| Adding instead of multiplying for "and" | Wording traps | "And" → multiply (independent); "Or" → add (with overlap) |
| Computing C(n,r) when P(n,r) is asked | Order ignored wrongly | Check whether arrangement or selection is asked |

#### Worked Micro-Example

A bag has 4 red and 6 blue balls. Three balls are drawn without replacement. Find P(exactly 2 red).

> Counting the favourable draws: C(4,2)·C(6,1) = 6·6 = 36; total draws: C(10,3) = 120; so P = 36/120 = 3/10.

#### Exam Strategy

ECAT's 4% weight means one MCQ on average — practise 15–20 past-paper items on probability and P(n,r) formulas to lock in the pattern recognition.

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
