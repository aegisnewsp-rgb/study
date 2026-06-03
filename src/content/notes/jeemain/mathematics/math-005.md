---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-005
topicName: Permutations and Combinations
weight: 5
country: india
generated: "2026-04-17T22:37:00.000000"
lastUpdated: 2026-04-17
diagramPrompt: "Clean educational diagram showing Permutations and Combinations arrangement counting with clear labels, white background, color-coded items, exam-style illustration"





---
# Permutations and Combinations

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Permutations and Combinations** — Key Facts for JEE Main
Fundamental principle of counting: if task A can be done in m ways and task B in n ways, then A followed by B can be done in m × n ways
Addition principle: if tasks are exclusive (either A or B), total = m + n
Permutation (arrangement): nP_r = n!/(n−r)! — order matters
Combination (selection): nC_r = n!/[r!(n−r)!] — order does not matter
Key: nC_r = nC_{n−r} (complementary property)
⚡ Exam tip: JEE Main P&C problems are tricky — always ask: "Does order matter?" If yes → permutations; if no → combinations!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Permutations and Combinations** — JEE Main Study Guide

**Counting principles:**
- Arrangement of n distinct objects: n! ways
- Circular arrangement: (n−1)! for distinct objects around a circle (clockwise vs anticlockwise considered same)
- Arrangement in a line with some identical objects: n!/[n₁!n₂!...]

**Special arrangements:**
- Number of ways to arrange the 6 letters of word "BANANA": B(1), A(3), N(2) → 6!/(1!3!2!) = 60
- Rank of a word in dictionary: arrange letters alphabetically, count words before the target

**Restricted permutations:**
- Objects in a row, A must be at one end: 2 × (n−1)! (A at left OR right end)
- Objects in a row, A and B must be together: treat AB as one unit → 2 × (n−1)! (A left of B OR B left of A)
- Objects in a row, A and B must NOT be together: total − together = n! − 2×(n−1)! = (n−2)(n−1)!

**Derangements:**
Number of ways n objects can be arranged so that no object is in its original position:
D_n = n![1 − 1/1! + 1/2! − 1/3! + ... + (−1)^n/ n!]; also D_n = (n−1)(D_{n−1} + D_{n−2}) with D₁ = 0, D₂ = 1
Alternatively: D_n = round(n!/e)

**Partition problems:**
- Divide n identical objects into r groups (allow empty groups): C(n+r−1, r−1)
- Divide n distinct objects into r groups (allow empty): r^n (each object has r choices)
- Divide n distinct objects into r nonempty groups: use Stirling numbers of second kind S(n, r) or inclusion-exclusion

**Distribution problems:**
- Distribute n distinct objects to r distinct boxes (boxes can be empty): r^n
- Distribute n distinct objects to r distinct boxes (no box empty): use inclusion-exclusion: r^n − C(r,1)(r−1)^n + C(r,2)(r−2)^n − ...
- Distribute n identical objects to r distinct boxes: C(n+r−1, r−1)

- **Key formula:** nC_r = n!/[r!(n−r)!]; nP_r = n!/(n−r)!
- **Common trap:** For "at least one" problems, use total − none = total − (all fail) — inclusion-exclusion often needed
- **Exam weight:** 1–2 questions per year (4–8 marks); high difficulty, high scoring for those who understand the logic

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Permutations and Combinations** — Comprehensive JEE Main Notes

**Inclusion-Exclusion Principle:**
| A ∪ B | = | A | + | B | − | A ∩ B |
| A ∪ B ∪ C | = | A | + | B | + | C | − | A∩B | − | B∩C | − | C∩A | + | A∩B∩C |

**Applications of inclusion-exclusion:**
- Count numbers from 1 to 1000 not divisible by 2, 3, or 5: total 1000 − floor(1000/2) − floor(1000/3) − floor(1000/5) + floor(1000/6) + floor(1000/10) + floor(1000/15) − floor(1000/30)
- "At least one" complement: total − none

**The "stars and bars" method:**
For distributing n identical items into r distinct boxes:
- Allow empty boxes: C(n + r − 1, r − 1)
- No box empty: C(n − 1, r − 1) (first give 1 to each box, remaining n−r identical items → C((n−r)+r−1, r−1) = C(n−1, r−1))

**Grouping problems:**
- Divide n objects into groups of sizes a, b, c (order of groups doesn't matter): n!/[a!b!c!] when a+b+c=n and groups are distinct
- If groups are also of different sizes: the multiplier depends on whether groups have same size
- If groups are identical (just "divide into 3 groups of sizes a, b, c where a, b, c are equal): then divide by factorial of equal group sizes

**Arrangement with repetitions:**
Number of arrangements of n items with p identical of type 1, q identical of type 2, r identical of type 3...:
n!/[p!q!r!...]

**Selection with conditions:**
- Select r objects from n, where a particular object is always included: C(n−1, r−1)
- Select r objects from n, where a particular object is never included: C(n−1, r)
- Select r objects from n, where two particular objects are either both included or both excluded: C(n−2, r−2) + C(n−2, r)

**Multinomial theorem connection:**
Number of ways to distribute n distinct objects into r distinct groups of sizes n₁, n₂, ..., n_r (where n₁+n₂+...+n_r = n) is: n!/(n₁! n₂! ... n_r!)
This is also the coefficient of a^{n₁} b^{n₂} ... in (a + b + ...)^n

**Key combinatorial identities:**
- Pascal's identity: C(n, r) = C(n−1, r) + C(n−1, r−1)
- Vandermonde's identity: Σ C(m, k) C(n, r−k) = C(m+n, r)
- C(n, k) = n/k · C(n−1, k−1)
- C(n, 0) + C(n, 1) + ... + C(n, n) = 2^n

**Circular permutations:**
- n distinct people around a round table: (n−1)! arrangements
- If clockwise/anticlockwise are different: 2(n−1)!
- If rotations are considered same: (n−1)!/2 for necklaces (but usually not needed in JEE)
- n distinct beads in a necklace: (n−1)!/2

**Bridge crossing and similar:**
Think carefully about whether arrangements are being counted once or twice
Example: "How many ways can 5 men and 5 women be seated at a round table so that no two women are adjacent?"
Treat men first: seat 5 men around the round table in (5−1)! = 4! = 24 ways → 5 men occupy 5 alternate seats, creating 5 gaps → 5 women fill the 5 gaps: 5! = 120 ways → total = 24 × 120 = 2880

- **Remember:** Order matters → permutation (nP_r); order doesn't matter → combination (nC_r); to handle "at least one" or "none", use complement: total − cases where condition fails; for distributing identical items, use stars and bars: C(n+r−1, r−1)
- **Previous years:** "Number of ways to select 3 consonants and 2 vowels from 7 consonants and 4 vowels" [2023]; "Number of ways to form a committee with at least 3 men from 5 men and 4 women" [2024]; "Arrange word ASSASSINATION" [2024]

---

## 📊 JEE Main Exam Essentials

| Detail | Value |
|---|---|
| Questions | 90 (30 per subject) |
| Time | 3 hours |
| Marks | 300 (90 per subject) |
| Section | Physics (30), Chemistry (30), Mathematics (30) |
| Negative | −1 for wrong answer |
| Mode | Computer-based |

### 🎯 High-Yield Topics for JEE Main Mathematics
- Calculus (Differentiation + Integration) — ~35 marks combined
- Coordinate Geometry (straight lines, circles, conics) — ~20 marks
- Algebra (Complex Numbers, Quadratics, P&C, Probability) — ~25 marks
- Trigonometry + Inverse Trigonometry — ~15 marks
- Vector + 3D — ~15 marks

### 📝 Previous Year Question Patterns
- P&C: 1–2 questions per year, 4–8 marks
- Common patterns: arrangements with restrictions, distribution of identical/distinct objects, committee formation, inclusion-exclusion
- Weight: high difficulty, high rewards — master it!

### 💡 Pro Tips
- The most common error is confusing permutations and combinations — ask "does order matter here?"
- For "at least one" problems, always try complement: total minus none
- Stars and bars: n identical objects into r distinct boxes (empty allowed) → C(n+r−1, r−1)
- For arrangements with restrictions like "A and B must sit together", treat AB as one unit first
- When asked about seating around a round table, always divide by n for rotational symmetry
- For word arrangements, separate identical letters first, then arrange total letters dividing by factorials of each repeated letter
- Inclusion-exclusion is essential for "not divisible by" type questions
- Many JEE Main P&C problems can be solved by first principles — don't jump to formulas

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*