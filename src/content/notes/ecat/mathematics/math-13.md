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
lastUpdated: "2026-09-11"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability measures how likely an event is, written P(A) = n(A) / n(S), where n(A) is the count of favorable outcomes and n(S) is the count of all equally likely outcomes in the sample space. The value always sits between 0 (impossible) and 1 (certain), dimensionless. A permutation counts **ordered** arrangements of r objects taken from n distinct objects, given by P(n,r) = n! / (n−r)!, also dimensionless (integer).

- **Probability rules to memorise**: complement P(A′) = 1 − P(A), addition P(A ∪ B) = P(A) + P(B) − P(A ∩ B), and independence P(A ∩ B) = P(A) · P(B).
- **Permutation vs combination**: order matters in permutations (arranging books on a shelf); order does not matter in combinations (selecting a committee).
- **ECAT pointer**: usually 1–2 MCQs worth ~4% of the paper; expect a numeric answer or a value between 0 and 1.

| Term | Meaning |
| --- | --- |
| Sample space n(S) | All equally likely results of the experiment |
| Favorable n(A) | Outcomes where event A occurs |
| Factorial n! | Product n·(n−1)·(n−2)·…·1 |
| Complement A′ | Every outcome in S that is not in A |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core probability axioms

Probability rests on three Kolmogorov axioms: every event has P(A) ≥ 0, the sure event satisfies P(S) = 1, and for two mutually exclusive events, P(A ∪ B) = P(A) + P(B). Conditional probability refines this by restricting the sample space: P(A|B) = P(A ∩ B) / P(B), valid only when P(B) > 0. When A and B are independent, the denominator simplification yields P(A ∩ B) = P(A) · P(B), which is the form examiners expect for coin tosses or dice rolls.

#### Permutation mechanics

The number of ways to arrange r distinct objects chosen from n is P(n,r) = n! / (n−r)!. The numerator counts ordered sequences of length r starting from n options without repetition, while (n−r)! strips the unused tail of the full n! arrangement. For r = n the formula collapses to n!, the count of all rearrangements of every object. For r = 2 it gives n·(n−1), a quick mental shortcut.

#### Typical ECAT question types

- **Numeric probability** (e.g., "P(drawing a red ball from 5 red, 3 blue)" → 5/8).
- **Permutation count** (e.g., "How many ways can 4 of 10 students stand in a line for a prize?" → 5040).
- **Two-stage independent** events (e.g., two coins tossed, probability of two heads → 1/4).
- **Conditional setup** with Bayes-style reasoning on a small two-stage tree.

| Rule | Formula | When to use |
| --- | --- | --- |
| Complement | P(A′) = 1 − P(A) | "At least one" phrasings |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | A or B; subtract overlap |
| Multiplication | P(A ∩ B) = P(A)·P(B) | Independent events only |
| Conditional | P(A\|B) = P(A ∩ B)/P(B) | "Given that B has happened" |

- **Trap**: assuming events are independent when a problem says "given" or "after the first draw without replacement" — they are not.
- **Trap**: forgetting the overlap subtraction in the addition rule produces a sum exceeding 1.
- **Shortcut**: "at least one" almost always invites the complement rule because it is easier.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and adjacent links

The complement rule, addition rule, and multiplication rule combine into Bayes' theorem: P(A|B) = P(B|A)·P(A) / P(B). ECAT rarely asks Bayes directly, but conditional-probability items often hide it in a two-draw urn scenario. A second edge case is sampling without replacement, where successive draws are dependent and the multiplication rule fails — instead, you track the changing denominator: drawing 1 king then 1 queen from a 52-card deck is (4/52)·(4/51) = 16/2652.

Permutation edge cases include arrangements with repetition (n^r, used when objects can repeat, such as 3-digit PIN codes), circular permutations (n−1)!, and arrangements where identical objects exist (n! / (a!·b!·…)). Distinguishing these from standard P(n,r) is the most common ECAT trap.

#### Worked micro-example

A bag holds 2 red and 3 blue balls. Two balls are drawn **without** replacement. Find P(both blue).

Total outcomes: P(5,2) = 20 ordered pairs. Favorable (blue then blue): 3·2 = 6. So P = 6/20 = 3/10. Using the conditional method: P(first blue) = 3/5, P(second blue | first blue) = 2/4 = 1/2, so P = (3/5)·(1/2) = 3/10. Both routes must agree — this is a quick self-check before submitting.

#### Exam strategy for ECAT

The 4% weightage means one or two MCQs at most. Spend under 90 seconds per question: identify whether it is counting (permutation) or chance (probability), write the formula, plug numbers, simplify the fraction. Pre-engineering students who finish the FSc counting chapter can answer these without a calculator.

| Mistake | Why it loses marks | Correct move |
| --- | --- | --- |
| Using combinations for arrangements | Undercounts by r! | Apply P(n,r) when order matters |
| P(A\|B) treated as P(B\|A) | Reverses numerator | Use joint / given denominator |
| Forgetting (n−r)! in P(n,r) | Treats it as nPr but writes n! | Divide n! by (n−r)! |
| Adding instead of multiplying | Misreads "and" as "or" | "And" → multiply, "or" → add |
| Assuming independence | Ignores "without replacement" | Update denominator after each draw |

1. Practice 5–6 ECAT-style probability items focusing on complement and conditional setups.
2. Drill P(n,r) computations for r = 2, 3, 4 until the factorial pattern becomes automatic.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
