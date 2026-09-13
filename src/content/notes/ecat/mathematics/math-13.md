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
> Rapid summary for last-minute revision before your ECAT Mathematics paper.

**Probability** quantifies how likely an event A is, defined on a sample space of equally likely outcomes:

$$P(A) = \frac{n(A)}{n(S)}, \quad 0 \le P(A) \le 1$$

where n(A) is the count of favorable outcomes and n(S) is the total count of equally likely outcomes.

A **permutation** counts ordered arrangements. The number of ways to arrange r distinct objects chosen from n distinct objects is:

$$P(n,r) = \frac{n!}{(n-r)!}$$

#### ECAT pointers:
- ECAT Mathematics devotes **4% weightage** to this topic, typically 1–2 MCQs.
- Read the wording carefully: "arrange" ⇒ permutation, "select" ⇒ combination.
- For two independent events, multiply; for two mutually exclusive events, add without subtracting any overlap.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Probability Rules

Every probability question reduces to counting outcomes in a sample space and applying one of three rules. The **complement rule** turns "at least one" problems into single calculations: P(A′) = 1 − P(A).

The **addition rule** covers "A or B":

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

When A and B are **mutually exclusive**, P(A ∩ B) = 0, so the formula collapses to plain addition. ECAT commonly tests whether you remember to subtract the overlap in non-mutually-exclusive cases.

The **multiplication rule** covers "A and B". For **independent** events, P(A ∩ B) = P(A) · P(B). For **conditional** cases, P(A ∩ B) = P(A|B) · P(B), and Bayes' theorem lets you reverse the conditioning.

#### Permutations vs. Combinations

The **multiplication principle** states: if task 1 can be done in m ways and task 2 in n ways, both together can be done in m · n ways. Permutations extend this to ordered sequences via the factorial function n! = n · (n − 1) · … · 1.

| Concept | Formula | When to use |
| --- | --- | --- |
| Permutation P(n,r) | n! / (n − r)! | Order matters (rankings, arrangements, password strings) |
| Combination C(n,r) | n! / [r!(n − r)!] | Order irrelevant (teams, committees, hand picks) |
| Multiplication principle | m · n | Sequential independent choices |
| Complement rule | 1 − P(A) | "At least one" problems |

#### Typical ECAT Question Types

- Counting arrangements of letters/digits where letters repeat or positions are fixed.
- Probability from cards, dice, or balls drawn with/without replacement.
- Conditional probability phrased as "given that B occurred, find P(A)".
- Bayes' theorem in two-stage experiments such as defective-item inspections.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Micro-Example

**Problem.** A 4-digit PIN is formed using digits 0–9 with no repetition. What is the probability that the PIN reads 2024 in some scrambled order when the digits 2, 0, 2, 4 are not available?

Total ordered 4-digit PINs with no repetition and first digit ≠ 0: 9 · 9 · 8 · 7 = 4536 (nine non-zero choices for the first slot, then nine remaining digits, then 8, then 7).

Favorable PINs: the digits must be exactly {0, 2, 2, 4}, which has only **one** valid digit multiset. Arrangements of 2, 0, 2, 4 with the leading digit ≠ 0: count permutations of {0,2,2,4} minus those starting with 0. Total permutations = 4! / 2! = 12. Starting with 0: arrange {2,2,4} in 3! / 2! = 3 ways. So favorable = 12 − 3 = 9.

P(pin is one of the 9 arrangements) = 9 / 4536 = 1 / 504.

#### Edge Cases and Examiner Traps

| Trap | Why it loses marks | Correct move |
| --- | --- | --- |
| Using n! instead of n!/(n−r)! | Counts all n objects, ignoring the r chosen | Subtract (n − r) in denominator |
| Treating "without replacement" as independent | Draws change the sample space | Update n(S) after each draw |
| P(A\|B) vs P(B\|A) swap | Conditioning direction reversed | Apply P(A\|B) = P(A∩B)/P(B) directly |
| Dividing by r! when order matters | Removes a real order count | Use P(n,r), not C(n,r) |

#### Connections to Adjacent Topics

Permutations feed directly into the **binomial theorem** (coefficients are C(n,r)) and into **sequence counting** problems. Probability axioms underpin **statistics and expectation** in later engineering coursework, so mastering P(A∪B) and Bayes here pays off in reliability engineering and signal-detection modules.

#### Practice Prompts

1. Five cards numbered 1–5 are shuffled. Find the probability that card 3 appears in an odd position when two specific cards are forced to the ends.
2. A bag holds 4 red and 6 blue balls. Two balls are drawn without replacement. Compute P(both red) and P(second is red | first is blue), then verify Bayes on a third draw.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
