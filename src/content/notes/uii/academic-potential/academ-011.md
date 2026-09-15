---
exam: uii
examName: UI Entrance (Indonesia)
subject: academic-potential
subjectName: Academic Potential
topic: academ-011
topicName: "Permutations, Combinations, and Counting"
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-15"
---

# Permutations, Combinations, and Counting

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Permutation **P(n,k)** counts **ordered** selections from *n* distinct objects taken *k* at a time. Combination **C(n,k)** counts **unordered** selections from the same set. Both are dimensionless integers used in UTBK-style *Potensi Akademik* numeric reasoning items.

| Symbol | Meaning | Formula | When to use |
|---|---|---|---|
| P(n,k) | Ordered selection, no repetition | n!/(n−k)! | Rankings, line-ups, passwords |
| C(n,k) | Unordered selection, no repetition | n!/[k!(n−k)!] | Committees, hand picks, subsets |
| n^k | Ordered, repetition allowed | n × n × … × n | PIN codes, plate numbers |
| C(n+k−1,k) | Unordered, repetition allowed (stars-and-bars) | — | Identical balls into distinct boxes |

> 💡 **High-Yield Memory Hook:** **"P for Position matters, C for Choose regardless"** — picture placing trophies (**P** keeps gold-silver-bronze distinct) versus scooping ice-cream flavours (**C** mixes the scoop order). Or use the rhyme: *"Permutation = Positions, Combination = Collection."*

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definitions and the Fundamental Principle

A **permutation of n distinct objects taken k at a time** (notation P(n,k) or ₙPₖ) is any ordered list of *k* different objects chosen from a set of size *n*, where each object appears at most once and the sequence matters. A **combination** is the same selection stripped of ordering — two lists with identical members in different order count once.

The **Fundamental (Multiplication) Counting Principle** states: if task A can be completed in *m* ways and, for each of those, task B can be completed in *n* ways, then the two tasks together can be completed in *m × n* ways. This principle underlies every formula on this page.

#### Comparison Matrix — Permutations vs Combinations

| Feature | Permutation P(n,k) | Combination C(n,k) |
|---|---|---|
| Order matters? | Yes | No |
| Formula | n! / (n − k)! | n! / [k!(n − k)!] |
| Typical Indonesian word cues | "susunan", "barisan", "peringkat" | "kelompok", "tim", "panitia", "komite" |
| Repetition | Use n^k if allowed | Use C(n+k−1, k) stars-and-bars |
| Symmetry identity | None | C(n,k) = C(n, n − k) |
| Edge case k = 0 | P(n,0) = 1 | C(n,0) = 1 |
| Edge case k = n | P(n,n) = n! | C(n,n) = 1 |

#### Key Rules for Word Problems

1. Read the verb: *disusun* (arranged) ⇒ **P**; *dipilih* (selected) ⇒ **C**.
2. Check repetition: a 4-digit PIN uses digits 0–9 with repetition ⇒ 10⁴; a 4-letter word with no letter repeated ⇒ P(26,4).
3. Watch for identical objects: arranging "KAKAK" has 5! = 120 raw permutations, but the two K's are indistinguishable, so divide by 2! = 2, giving 60.
4. Apply **complementary counting** when k > n/2: use C(n, n − k) to halve the computation.
5. For circular arrangements of *n* distinct objects, fix one object to break rotational symmetry and arrange the remaining *n − 1* linearly, giving **(n − 1)!** arrangements.
6. Inclusion–exclusion handles "at least one" constraints: |A ∪ B| = |A| + |B| − |A ∩ B|.

#### 🎯 Exam-Level Worked Problem

**Question:** A committee of 3 people is to be formed from 5 men and 4 women. In how many ways can the committee be formed if it must contain at least one woman?

#### Solution:
Total committees (no restriction): C(9,3) = 9! / [3!·6!] = 84.
Committees with no woman (all men): C(5,3) = 5! / [3!·2!] = 10.
Committees with at least one woman = 84 − 10 = **74**.

Verification by direct cases:
- Exactly 1 woman: C(4,1)·C(5,2) = 4·10 = 40
- Exactly 2 women: C(4,2)·C(5,1) = 6·5 = 30
- Exactly 3 women: C(4,3)·C(5,0) = 4·1 = 4
- Total = 40 + 30 + 4 = 74 ✓

> ⚠️ **Examiner Trap:** Students often multiply C(4,1)·C(5,2) and forget that the problem asks for *at least one* — not exactly one. The cleanest path is **complementary counting** (total minus the "no woman" case) which avoids listing three separate sub-cases.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Traps and Edge Cases

| Situation | Correct approach | Common error |
|---|---|---|
| Circular arrangement where mirror reflections are identical (e.g. beads on a necklace) | (n − 1)! / 2 | Forgetting the extra ÷2 |
| Identical objects into distinct boxes (≥1 ball each) | Divide k objects into m labelled boxes, subtract empty using inclusion–exclusion | Using stars-and-bars without the "≥1" adjustment |
| Identical objects into identical boxes (partitions) | Use partition function p(k); no closed formula | Treating boxes as distinct |
| "At least one" constraints on three or more categories | Inclusion–exclusion with alternating signs | Stopping after the first subtraction |
| Derangements of n items (no element in original position) | D(n) = n!·Σ(−1)^k/k! | Recursive D(n) = (n−1)[D(n−1)+D(n−2)] only |
| Restricted-position rook problems | Inclusion–exclusion on forbidden cells | Trying to list placements directly |

#### Boundary Behaviour of n!

Factorial growth outpaces exponential growth: 5! = 120, 8! = 40 320, 12! ≈ 4.79 × 10⁸. For UTBK-style numeric items, this means P(n,k) quickly exceeds calculator-friendly ranges, signalling either a typo in the question or a request for the answer **modulo** a number — a UI Entrance item style worth recognising. The identity **0! = 1** is forced by the empty-product convention and appears as a standalone trick question: "Berapakah nilai 0! + 1! + 2!?".

#### Connections to Adjacent Topics

- **Probability** uses C(n,k) as the sample-space denominator in "without replacement" draws; the numerator is the favourable C(n,k) of the specific hand.
- **Binomial theorem** expansion (a + b)^n uses C(n,k) as the coefficient of the k-th term — the same combinatorial identity, algebraic application.
- **Sequences and series** link to Pascal's identity C(n,k) + C(n,k−1) = C(n+1,k), which is the recursive rule for building Pascal's triangle row by row.

#### Two Advanced Practice Prompts

1. **Bead necklace:** How many distinct necklaces of 8 beads can be made from 6 identical red beads and 2 identical blue beads, where flipping is considered the same? (Hint: list the positions of the 2 blue beads around a circle, then divide by 2.)
2. **Derangement light:** In how many ways can the digits 1, 2, 3, 4 be arranged so that no digit stays in its original position? Use D(4) = 4!·(1 − 1 + 1/2! − 1/3! + 1/4!) = 24·(1/2 − 1/6 + 1/24) = 9.

---

## Continue your study

- **[View this topic in your UI Entrance (Indonesia) roadmap](/roadmap/?exam=uii&duration=1mo)** — see where "Permutations, Combinations, and Counting" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uii&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UI Entrance (Indonesia) exam overview](/exams/uii/)** — pattern, eligibility, and syllabus
- **[All Academic Potential notes](/notes/uii/academic-potential/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
