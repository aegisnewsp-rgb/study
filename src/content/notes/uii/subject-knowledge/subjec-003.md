---
exam: uii
examName: UI Entrance (Indonesia)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: subjec-003
topicName: Topic 3
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-10"
---

# Topic 3

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Subject Knowledge Topic 3 at **UI Entrance (Indonesia)** bundles the foundational quantitative blocks — *himpunan*, *relasi dan fungsi*, *persamaan/pertidaksamaan*, *barisan dan deret*, *peluang*, and *statistika dasar* — that account for roughly **3%** of total score weight. Every block rests on a small set of formulas you must keep ready: the *arithmetic progression* term `U_n = a + (n−1)b` and sum `S_n = n/2 · (2a + (n−1)b)`; the *geometric progression* term `U_n = a·r^(n−1)` and sum `S_n = a(1−r^n)/(1−r)` for `r ≠ 1`; the probability rule `P(A) = n(A)/n(S)` with `0 ≤ P(A) ≤ 1`; and the mean `x̄ = Σxᵢ / n`. Distinguish a **relasi** from a **fungsi** with the *vertical-line test*: one domain element must map to exactly one codomain element.

| Block | Must-know identity | Common trap |
|---|---|---|
| Fungsi | Vertical-line test | Treating a relation as a function |
| Deret geometri | `r ≠ 1` required | Using the infinite sum with `|r| ≥ 1` |
| Peluang | `0 ≤ P(A) ≤ 1` | Producing a probability above 1 |
| Aritmetika | `b = U_n − U_{n−1}` | Mixing `b` with `r` |

> Mnemonic: **"AR-GE"** — Aritmetika = beda (R→e in Indonesian: "beda"), Geometri = rasio.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Himpunan and Set Operations
A *himpunan* lists elements without regard to order, and the core operations are **gabungan** `A ∪ B`, **irisan** `A ∩ B`, and **komplemen** `A^c`. De Morgan's laws translate visually on a Venn diagram: `(A ∪ B)^c = A^c ∩ B^c` and `(A ∩ B)^c = A^c ∪ B^c`. UI Entrance items often give cardinalities `n(A)`, `n(B)`, `n(A ∩ B)` and ask for `n(A ∪ B)` via inclusion-exclusion.

#### Relasi, Fungsi, and Composition
A *relasi* from set `A` to set `B` is any subset of `A × B`; a *fungsi* is a relation in which every element of the **domain** has *exactly one* image in the **kodomain**. The *range* is the actual set of images produced. For composition, `(f ∘ g)(x) = f(g(x))` reads *g first, then f* — order matters because `f ∘ g ≠ g ∘ f` in general. Injective (one-to-one), surjective (onto), and bijective functions are classified by comparing domain and range sizes.

#### Persamaan, Pertidaksamaan, Barisan, Deret
Linear equations reduce to algebraic rearrangement; quadratic equations use the discriminant `D = b² − 4ac` (positive ⇒ two real roots, zero ⇒ one repeated root, negative ⇒ complex). *Barisan aritmetika* has constant *beda* `b`; *barisan geometri* has constant *rasio* `r`. Infinite geometric sums converge only when `|r| < 1`, giving `S = a/(1−r)`.

#### Peluang and Statistika Dasar
Use `P(A) = n(A)/n(S)`. For two events, `P(A ∪ B) = P(A) + P(B) − P(A ∩ B)`, and conditional probability reads `P(A|B) = P(A ∩ B) / P(B)`. In *statistika*, mean, median, and mode are computed in the standard way; the *simpangan rata-rata* is `Σ|xᵢ − x̄| / n`.

#### Typical UI Entrance Question Patterns
Expect 5–8 multiple-choice items per session from this block: Venn three-set problems, word problems requiring the arithmetic or geometric sum formula, single-step probability questions, and a figure-pattern reasoning item. Watch units — UI Entrance often embeds a percent or year inside the word problem.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Mechanism Pitfalls
The trickiest UI Entrance items hide a **domain restriction** inside an otherwise innocent expression. Solving `1/(x−2) < 3` requires excluding `x = 2` *and* tracking sign flips across the critical point — a one-sided mistake produces a solution set the examiner flags as "domain-error." Similarly, `√(x − 5)` forces `x ≥ 5`, and `ln(3x)` forces `x > 0`. The vertical-line test confirms a function; a horizontal-line test on a *one-to-one* function confirms injectivity.

#### Worked Numeric Example
**Problem.** A geometric series has first term `a = 6` and ratio `r = 1/3`. Find `U_5` and `S_5`.

`U_5 = 6 · (1/3)^(5−1) = 6 · (1/81) = 6/81 = 2/27`
`S_5 = 6 · (1 − (1/3)^5) / (1 − 1/3) = 6 · (1 − 1/243) / (2/3) = 6 · (242/243) · (3/2) = 242/27 ≈ 8.96`

The infinite sum is `S = 6 / (1 − 1/3) = 6 / (2/3) = 9`, valid because `|r| = 1/3 < 1`. The finite `S_5 ≈ 8.96 < 9` confirms convergence.

#### Common Mistakes to Drill
- Treating a relation as a function whenever the mapping "looks regular."
- Applying `S_n = a(1 − r^n)/(1 − r)` without checking `r ≠ 1`.
- Using the infinite geometric sum when `|r| ≥ 1`.
- Computing `P(A ∪ B)` as `P(A) + P(B)`, forgetting the overlap.
- Reversing the order of function composition.
- Reporting a probability greater than 1 from a poorly defined sample space.

#### Connections and Strategy
Topic 3 feeds directly into **penalaran analitis** later in the same subject block (puzzle-style questions reuse the same logic). Allocate ~12–15 seconds per item; items here are scoring accelerators because the math is short. If stuck on a Venn problem, draw three overlapping circles and label cardinalities from the inside out — UI Entrance examiners reward clean diagrams with correct final numbers.

#### Practice Prompts
1. Given `n(A) = 12`, `n(B) = 15`, `n(A ∪ B) = 20`, find `n(A ∩ B)` and the probability that a randomly chosen element from `A ∪ B` lies in *exactly one* of the sets.
2. The 4th term of an arithmetic sequence equals 17 and the 10th term equals 41; find `a`, `b`, and `S_20`.

---

## Continue your study

- **[View this topic in your UI Entrance (Indonesia) roadmap](/roadmap/?exam=uii&duration=1mo)** — see where "Topic 3" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uii&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UI Entrance (Indonesia) exam overview](/exams/uii/)** — pattern, eligibility, and syllabus
- **[All Subject Knowledge notes](/notes/uii/subject-knowledge/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
