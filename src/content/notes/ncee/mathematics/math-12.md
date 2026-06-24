---



exam: ncee
examName: NCEE (National Common Entrance Examination)
subject: mathematics
subjectName: Mathematics
topic: math-12
topicName: Probability (Simple Events)
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.585784"
lastUpdated: "2026-06-24"
diagramPrompt: "Mathematical diagram showing Probability (Simple Events) concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Probability (Simple Events)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Probability** measures how likely a single simple event is to occur. It is expressed as **P(E)**, where E is the event, and the value always lies between **0 and 1** (or 0% and 100%). The core formula is:

> **P(E) = Number of favourable outcomes / Total number of equally likely outcomes**

- A **certain event** has P(E) = 1; an **impossible event** has P(E) = 0.
- The **complement rule** states P(not E) = 1 − P(E), used for "at least one" or "none" questions.
- Always simplify the final fraction. NCEE answers are commonly written as fractions in lowest terms (e.g. 1/4, not 2/8).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Key Vocabulary
- **Experiment**: an action with a defined set of possible results (tossing a coin, rolling a die).
- **Sample space (S)**: the complete list of every possible **outcome**.
- **Event (E)**: a specific subset of outcomes we are interested in.
- **Favourable outcomes**: the outcomes in the sample space that satisfy the event.
- **Equally likely events**: outcomes that have the same chance of occurring (a fair coin, a fair die, a well-shuffled deck).

#### The Probability Formula
For any simple event E with equally likely outcomes:

> **P(E) = n(E) / n(S)**, where n(E) = number of favourable outcomes, n(S) = total number of outcomes in the sample space.

#### Sample Spaces You Must Memorise

| Experiment | n(S) |
|---|---|
| Tossing 1 coin | 2 (H, T) |
| Rolling 1 die | 6 (1–6) |
| Tossing 2 coins | 4 (HH, HT, TH, TT) |
| Rolling 2 dice | 36 ordered pairs |
| Drawing 1 card from 52 | 52 |

#### Complement Rule
> **P(E') = 1 − P(E)**, where E' means "E does not happen".

This avoids counting many outcomes directly. For example, P(at least one head in 3 tosses) = 1 − P(no heads) = 1 − 1/8 = 7/8.

#### Typical NCEE Question Pattern
NCEE objective items often ask: "A die is rolled once. What is the probability of getting an even number greater than 2?" Candidates must (1) list S = {1,2,3,4,5,6}, (2) pick E = {4, 6}, (3) compute P(E) = 2/6 = 1/3.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example With Two Dice
**Question**: Two fair dice are rolled. Find the probability that the sum is 7.

**Step 1** — Build the sample space. The total ordered pairs n(S) = 6 × 6 = 36.

**Step 2** — Identify favourable pairs that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → n(E) = 6.

**Step 3** — Apply the formula: P(sum = 7) = 6/36 = **1/6**.

This is the most-tested sum in NCEE-style questions because the number of favourable outcomes equals 6 regardless of which target sum (2 through 12) you pick, except for the extremes.

#### Edge Cases and Traps
- **Loaded instruments**: If a die is biased, outcomes are **not** equally likely, and the n(E)/n(S) formula does not apply directly — you must use given probabilities instead.
- **"At least one" problems**: Use the complement rather than counting many cases. P(at least one six in 4 rolls) = 1 − (5/6)⁴.
- **Probability greater than 1**: This signals a counting error — always check that n(E) ≤ n(S).
- **Sum-to-1 property**: For all outcomes in S, Σ P(outcome) = 1. Use this to find a missing probability.

#### Common Mistakes
1. Writing the sample space of two coins as {HH, HT, TT} (forgetting TH) and getting the wrong denominator.
2. Giving the answer as 2/4 instead of 1/2.
3. Using n(E)/n(S) when outcomes are not equally likely.

#### Practice Prompts
1. A bag contains 3 red, 5 blue, and 2 white balls. One ball is drawn at random. Find P(red or white).
2. A card is drawn from a standard 52-card deck. Find P(not a heart).

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
