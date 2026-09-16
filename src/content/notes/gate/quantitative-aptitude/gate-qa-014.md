---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-014
topicName: "Permutation & Combination"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A comprehensive decision tree starting with 'Arrange all or select subset?' branching to 'Permutation or Combination?' and further to circular permutations and combinations with repetition"
country: india
generated: 2026-05-26
lastUpdated: "2026-09-16"
---

# Permutation & Combination

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Permutation counts **ordered** arrangements of objects; Combination counts **unordered** selections. GATE General Aptitude asks 1–2 questions (≈2–3 marks) per paper, usually as MCQs or NAT (Numerical Answer Type) on seating, selections, or counting under constraints.

| Concept | Formula | When to use |
|---|---|---|
| Permutation (no repetition) | nPr = n! / (n − r)! | Order matters, no repeats |
| Combination (no repetition) | nCr = n! / [r! (n − r)!] | Order does not matter |
| Circular permutation | (n − 1)! | Seating in a circle |
| Permutation with identical objects | n! / (p! q! r! …) | Repeated items (e.g., letters of a word) |
| Inclusion–Exclusion (2 sets) | \|A ∪ B\| = \|A\| + \|B\| − \|A ∩ B\| | Counting overlaps |

All quantities are dimensionless counts. For any n, nCr = nC(n − r).

> 💡 **High-Yield Memory Hook:** **"Order = P, No Order = C"** — Permutation for Permutations (arrangements), Combination for Collections (selections). Also: **PIC** — **P**igeonhole, **I**nclusion–Exclusion, **C**ircular arrangement are the three "principle" tools that rescue otherwise messy counting problems.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Counting Principles

Two rules underlie every counting problem in GATE GA:

1. **Multiplication Rule** — If step A can be done in *m* ways and step B in *n* ways, both together in *m × n* ways (used for sequential, independent choices).
2. **Addition Rule** — If task A can be done in *m* ways *or* task B in *n* ways (mutually exclusive), total = *m + n* ways.

#### Permutation vs Combination

nPr = n! / (n − r)! counts ordered arrangements of r items chosen from n distinct items. nCr = n! / [r! (n − r)!] counts unordered selections. The relationship nCr = nPr / r! lets you convert between them. The identity nCr = nC(n − r) halves work for large r.

#### Commonly Confused Setups

| Situation | Correct formula | Wrong approach (common mistake) |
|---|---|---|
| Captain + vice-captain from 11 players | 11 × 10 = 110 (use nPr = 11P2) | Using 11C2 = 55 (treats roles as unordered) |
| 2-card hand from 52 | 52C2 = 1326 | Using 52P2 = 2652 |
| Handshake among 6 people | 6C2 = 15 | Using 6P2 = 30 |
| Necklace with beads (flipping allowed) | (n − 1)! / 2 | Using (n − 1)! only |
| Letters of MISSISSIPPI | 11! / (4! · 4! · 2! · 1!) | Using 11! ignoring repeats |

#### Circular and Restricted Arrangements

For n distinct people around a round table, fix one person's seat to remove rotational symmetry: total = (n − 1)!. For "always together" arrangements, bundle the group into a single unit: treat (k + 1) units, multiply by k! internal orders. For "never together", count total minus "together" cases.

#### Repetition Allowed

When items can repeat (e.g., 3-digit codes from digits 0–9), use n^r for ordered arrangements and C(n + r − 1, r) for unordered selections with repetition. The standard nCr does **not** apply when repetition is allowed.

#### Pigeonhole and Inclusion–Exclusion

**Pigeonhole:** If n objects go into k boxes with n > k, at least one box has ⌈n/k⌉ objects — used to prove "at least two share a property".
**Inclusion–Exclusion:** For two sets, |A ∪ B| = |A| + |B| − |A ∩ B|. For three sets, add back pairwise intersections and subtract the triple intersection.

#### 🎯 Exam-Level Worked Problem

**Question:** A committee of 5 is to be formed from 6 men and 4 women such that it contains at least 2 women. How many such committees are possible? (NAT, 2 marks)

#### Solution:
Total ways to pick 5 from 10 = 10C5 = 252.
Subtract committees with fewer than 2 women (i.e., 0 or 1 woman):
- 0 women: choose all 5 from 6 men → 6C5 = 6.
- 1 woman: 4C1 × 6C4 = 4 × 15 = 60.
Valid committees = 252 − 6 − 60 = **186**.

> ⚠️ **Examiner Trap:** Students often compute only "exactly 2 women" + "exactly 3 women" + ... and miss a case, or they compute "at most 1 woman" wrongly. The cleanest path is always **total − unwanted**. Here, unwanted means 0 or 1 woman — both must be subtracted from 10C5.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Traps and Edge Cases

| Trap | What students do | Correct treatment |
|---|---|---|
| Dividing by r! when order matters | nPr / r! applied to lineup | Only divide by r! for unordered selections |
| Circular vs linear confusion | Use n! for round table | Use (n − 1)!, or (n − 1)!/2 for necklaces |
| Inclusion–Exclusion sign error | Forget to subtract \|A ∩ B\| | Always subtract overlaps once, add back triple overlap |
| Repeats treated as distinct | 11! for MISSISSIPPI | Divide by 4! · 4! · 2! · 1! |
| "At least one" with complements | Try direct case-by-case | Use 1 − P(none) for speed |

#### Boundary Conditions and Limits

- nC0 = nCn = 1; nP1 = n; nPn = n!.
- nCr is maximised at r = n/2 (floor or ceiling); useful when checking which r gives the largest count.
- For large n, n! grows faster than any exponential aⁿ eventually — relevant only when comparing orders of growth, not for direct computation.
- The Pigeonhole Principle requires n > k for the "at least two" guarantee; if n ≤ k the statement is vacuous.

#### Connections Across Topics

- **Probability:** Every probability = (favourable outcomes) / (total outcomes), where both numerator and denominator come from combinatorics.
- **Binomial Theorem:** nCr are the coefficients in (1 + x)ⁿ.
- **Number Theory:** nCr is divisible by primes between r and n − r (Kummer's theorem extends this).
- **Set Theory:** Inclusion–Exclusion generalises the addition rule to overlapping sets.

#### Advanced Practice Prompts

1. **Dice + constraint:** Three dice are rolled. How many outcomes show at least two faces with the same number? *(Hint: 6³ − 6P3 = 216 − 120 = 96 — uses Pigeonhole-style "not all distinct".)*
2. **Derangement-flavoured selection:** In how many ways can 4 boys and 3 girls sit in a row such that no two girls are adjacent? *(Hint: arrange boys first: 4! ways; create 5 gaps; pick 3 gaps for girls: 5C3 · 3! = 720.)*

> 📌 **Formula Check:** Every count is dimensionless. nPr, nCr, (n − 1)!, and n!/(p!q!r!) are pure numbers — never carry m, kg, or s. SI units apply only if a derived quantity (like probability or rate) is built on top.

---

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Permutation & Combination" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All General Aptitude (Quantitative) notes](/notes/gate/quantitative-aptitude/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
