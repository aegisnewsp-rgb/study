---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Subject Knowledge
topic: subjec-014
topicName: Probability & Counting Principles
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
diagramPrompt: Tree diagram showing two coin tosses, branching to HH, HT, TH, TT with probability 1/4 each at each final outcome, and a separate diagram showing 5 points on a circle with all chords drawn connecting them
---

# Probability & Counting Principles

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Probability basics:**
- P(event) = (number of favourable outcomes) / (total number of equally likely outcomes)
- P(success) + P(failure) = 1
- 0 ≤ P(event) ≤ 1

**Counting principles:**
- **Addition principle:** If task A can be done in m ways and task B in n ways (mutually exclusive), then A or B can be done in m + n ways
- **Multiplication principle:** If task A has m ways and task B has n ways, doing both A and B has m × n ways

**Permutations (order matters):** nPk = n! / (n − k)!
**Combinations (order doesn't matter):** nCk = n! / (k!(n − k)!)

⚡ **Exam tip:** Use combinations when selecting team members (Anna and Bob together = Bob and Anna), permutations when arranging in positions (first, second, third place). If unsure, ask: does swapping two selected items change the outcome? If no → combinations; if yes → permutations.

⚡ **Exam tip:** "At least one" probability problems: P(at least one) = 1 − P(none). Much easier than calculating all "at least one" cases separately.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Working with Probability**

Example: A bag contains 4 red balls and 6 blue balls. Two balls are drawn without replacement.
- P(first red) = 4/10 = 2/5
- P(second red given first red) = 3/9 = 1/3
- P(both red) = (4/10) × (3/9) = 12/90 = 2/15

**With replacement vs without replacement:** With replacement means each draw is independent; without replacement means they're dependent (conditional probability).

**Combined Events**

For independent events A and B: P(A and B) = P(A) × P(B)

For mutually exclusive events (cannot happen together): P(A or B) = P(A) + P(B)

For non-mutually exclusive events: P(A or B) = P(A) + P(B) − P(A and B)

Example: Drawing a king OR a heart from a 52-card deck.
- P(king) = 4/52 = 1/13
- P(heart) = 13/52 = 1/4
- P(king of hearts) = 1/52 (this was subtracted twice)
- P(king or heart) = 1/13 + 1/4 − 1/52 = (4 + 13 − 1)/52 = 16/52 = 4/13

**Permutations — Arrangements**

How many ways can 5 books be arranged on a shelf? 5! = 5 × 4 × 3 × 2 × 1 = 120 ways.

How many 3-digit numbers can be formed from digits {1, 2, 3, 4} if digits cannot repeat?
- Hundreds digit: 4 choices
- Tens digit: 3 remaining choices
- Units digit: 2 remaining choices
- Total: 4 × 3 × 2 = 24 (which is 4P3 = 24)

**Combinations — Selections**

How many ways to choose 3 students from a class of 12 for a committee?
- 12C3 = 12! / (3! × 9!) = (12 × 11 × 10) / (3 × 2 × 1) = 220 ways.

Note: 5C2 = 5C3 = 10. In general, nCk = nC(n−k).

**Common Mistakes to Avoid:**

| Mistake | Correct approach |
|---------|-----------------|
| Treating dependent events as independent | Without replacement → dependent; calculate conditional probability |
| Confusing permutations with combinations | Ask: does order matter? Is this a ranking/arrangement or just a selection? |
| Forgetting to divide by factorials | Permutations: divide by (n−k)!; Combinations: divide by k!(n−k)! |
| Not simplifying probability answers | Reduce fractions: 12/48 = 1/4 |
| Double-counting in "or" problems | Subtract the intersection: P(A∪B) = P(A) + P(B) − P(A∩B) |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Conditional Probability and Bayes' Theorem**

P(A|B) means "probability of A given that B has occurred." Formula: P(A|B) = P(A∩B) / P(B).

Example: In a class, 60% of students passed Mathematics, 55% passed Physics, and 40% passed both. Given that a student passed Physics, what's the probability they also passed Mathematics?
- P(M|P) = P(M∩P) / P(P) = 0.40 / 0.55 = 8/11 ≈ 0.727

Bayes' Theorem: P(A|B) = P(B|A) × P(A) / P(B)

For a disease affecting 1% of the population: P(disease) = 0.01. A test has 95% sensitivity (correct positive rate) and 90% specificity. P(positive|disease) = 0.95, P(negative|no disease) = 0.90, so P(positive|no disease) = 0.10. P(disease|positive) = (0.95 × 0.01) / (0.95 × 0.01 + 0.10 × 0.99) = 0.0095 / 0.1085 ≈ 0.0876 (8.76%). Despite the test being reasonably accurate, the probability is low because the disease is rare.

**The Birthday Problem**

How many people needed in a room for a >50% chance that at least two share a birthday? Counter-intuitively, only 23. With 23 people, P(no match) = 365/365 × 364/365 × ... × 343/365 ≈ 0.493, so P(match) ≈ 0.507 > 0.5.

This is a classic "at least one" problem solved by computing 1 − P(none).

**Permutations with Repeated Elements**

How many distinct arrangements of the letters in "STATISTICS"? Total letters = 10, with repeats: S appears 3 times, T appears 3 times, I appears 3 times, A appears 1 time.
- Number of arrangements = 10! / (3! × 3! × 3! × 1!) = 168,168.

**Circular Arrangements**

Number of ways to arrange n distinct objects in a circle = (n − 1)! (fix one object as reference and arrange the rest relative to it).

At a round table with 6 people, how many seatings? (6 − 1)! = 120. However, arrangements that are rotations of each other are identical; reflections are different unless the table is unlabelled and symmetric.

**The Binomial Distribution**

For n independent trials, each with probability p of success: P(X = k) = nCk × p^k × (1 − p)^(n − k).

A biased coin has P(heads) = 0.6. Tossed 5 times, P(exactly 3 heads) = 5C3 × (0.6)³ × (0.4)² = 10 × 0.216 × 0.16 = 0.3456.

Expected value E(X) = np = 5 × 0.6 = 3 heads.

**Counting Chords and Intersections**

How many chords can be drawn connecting n points on a circle if no three chords intersect at a single interior point? Each chord is determined by choosing 2 points: nC2 chords. In a convex polygon with n vertices, the number of diagonals = nC2 − n = n(n − 3)/2.

**Historical Context**

Probability originated in games of chance. Girolamo Cardano (1501-1576) wrote Liber de Ludo Aleae on gambling probability. Fermat and Pascal corresponded in 1654 on the problem of points (how to divide stakes when a game is interrupted), considered the founding of probability theory. Jacob Bernoulli's Ars Conjectandi (1713) established the law of large numbers. Thomas Bayes developed Bayes' theorem (published 1763). Pascal's triangle, known to Chinese mathematicians centuries earlier, encodes binomial coefficients.

**Exam Pattern Analysis**

UI probability questions frequently:
1. Ask for probability of compound events (with or without replacement)
2. Use counting principles in "how many ways" questions
3. Test conditional probability with two-way tables
4. Apply binomial probability for repeated independent trials
5. Use "at least one" complement approach

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
