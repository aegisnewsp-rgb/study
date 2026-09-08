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
lastUpdated: "2026-09-08"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT Mathematics paper.

Probability quantifies how likely an event is, on a scale from 0 to 1. A permutation counts ordered arrangements, while a combination counts unordered selections. ECAT typically asks 1–2 MCQs from this 4%-weighted topic.

- **Classical probability:** P(A) = n(A) / n(S), where n(A) is favourable outcomes and n(S) is total equally likely outcomes.
- **Permutation formula:** P(n,r) = n! / (n−r)!, where r distinct objects are chosen in order from n.
- **Complement rule:** P(A') = 1 − P(A).
- **Addition rule:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- **Independence:** P(A ∩ B) = P(A) · P(B) when A and B are independent.
- **Conditional probability:** P(A|B) = P(A ∩ B) / P(B), valid only when P(B) > 0.

#### Key exam pointers:
- Check whether the wording says "arrange" (use permutation) or "select/group" (use combination).
- For "at least one" problems, compute 1 − P(none) to avoid casework.
- Watch for the trap where P(A|B) ≠ P(B|A).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before the test.

#### Counting Principle and Sample Spaces

Every probability problem begins by identifying the sample space S, the set of all equally likely outcomes. The fundamental counting principle states that if task 1 has m ways and task 2 has n ways, both together have m·n ways. Tree diagrams extend this to three or more stages. For ECAT, candidates must translate worded conditions ("a digit is chosen, then a letter") into a product of independent counts.

#### Permutations vs. Combinations

The factorial n! = n × (n−1) × … × 1 underpins both counting tools. A permutation P(n,r) = n!/(n−r)! preserves the order of the r chosen objects, so arranging 3 letters from A,B,C,D gives 4·3·2 = 24 sequences. A combination C(n,r) = n!/[r!(n−r)!] ignores order, so the same 3-letter selection yields 4 groups. The decisive question is whether the problem's wording treats ABC and CBA as the same outcome.

#### Probability Axioms and Rules

| Concept | Key point |
| --- | --- |
| Classical definition | P(A) = favourable / total, only valid when every outcome is equally likely |
| Complement | P(A') = 1 − P(A); useful for "at least one" problems |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B); reduce to P(A)+P(B) if mutually exclusive |
| Multiplication | P(A ∩ B) = P(A)·P(B) only for independent events |
| Conditional | P(A\|B) = P(A ∩ B) / P(B), defined when P(B) > 0 |
| Bayes | P(A\|B) = P(B\|A)·P(A) / P(B), used to reverse conditions |

#### Common Traps

- Treating dependent events as independent and multiplying probabilities directly.
- Forgetting to subtract the overlap term P(A ∩ B) when A and B are not mutually exclusive.
- Computing P(n,r) as n! rather than n!/(n−r)!, which overcounts by a factor of (n−r)!.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Numeric Example

A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. Find the probability that both are red.

Total outcomes = C(8,2) = 28. Favourable outcomes = C(5,2) = 10. So P(both red) = 10/28 = 5/14.

Using conditional multiplication instead: P(1st red) = 5/8, then P(2nd red \| 1st red) = 4/7. Product = 20/56 = 5/14. Both routes converge, confirming the independence of method.

#### Edge Cases and Connections

When events are mutually exclusive, P(A ∩ B) = 0, so the addition rule collapses to P(A) + P(B). When they are exhaustive (cover the entire sample space), P(A) + P(B) = 1. Bayes' theorem extends conditional probability to inverse reasoning, useful in medical-test-style questions where you know the probability of a positive result given disease status and must infer the probability of disease given a positive result. Permutations also connect to binomial coefficients through C(n,r) = P(n,r)/r!.

#### Practice Prompts

1. From 7 distinct books, in how many ways can 4 be arranged on a shelf if two specific books must occupy the ends? Answer: 2 · P(5,2) = 2 · 20 = 40.
2. A die is rolled twice. Find P(sum ≥ 10). Total outcomes = 36; favourable = (4,6),(5,5),(6,4),(5,6),(6,5),(6,6) = 6, so P = 6/36 = 1/6.

#### Exam Strategy

ECAT Mathematics allots 4% to Probability and Permutations, typically yielding 1–2 MCQs worth 2–4 marks. Budget about 90 seconds per item. Memorise the five core formulas and practise translating "at least one" and "given that" phrases into the complement and conditional rules respectively.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
