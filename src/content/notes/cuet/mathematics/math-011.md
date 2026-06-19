---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-011
topicName: Sequences Series
weight: 3
country: india
generated: "2026-03-29T05:05:31"
lastUpdated: "2026-06-19"
---

# Sequences Series

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **sequence** is an ordered list of numbers whose *n*-th term follows a definite rule, written **a_n**. A **series** is the sum Σa_n of those terms. Two families dominate CUET UG: the **Arithmetic Progression (AP)** with constant difference **d = a_n − a_{n−1}**, and the **Geometric Progression (GP)** with constant ratio **r = a_n / a_{n−1}**.

Must-know formulas:

- AP n-th term: **a_n = a + (n − 1)d**; sum: **S_n = n/2 [2a + (n − 1)d]**
- GP n-th term: **a_n = ar^(n−1)**; sum: **S_n = a(1 − r^n)/(1 − r)** for r ≠ 1
- Infinite GP: **S_∞ = a/(1 − r)** only when |r| < 1
- **AM = (a+b)/2**, **GM = √(ab)**, and for positives **AM ≥ GM ≥ HM**

Quick exam cues: 1+1 = 2 is the smallest AP; 2, 4, 8, … is a GP with r = 2; Σk = n(n+1)/2.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definitions and Notation

An **AP** is a sequence where every consecutive pair differs by the same number d: a, a+d, a+2d, … Its general term is **a_n = a + (n−1)d**, where a is the first term. A **GP** instead multiplies by a fixed ratio r: a, ar, ar², … giving **a_n = ar^(n−1)**. The series sum S_n of an AP equals **n/2 [2a + (n−1)d]** and can also be written as **n/2 (a + l)** where l is the last term. For a GP, **S_n = a(1 − r^n)/(1 − r)** when r ≠ 1; if r = 1, S_n collapses to **na** (a common trap on CUET).

#### Why S_n of an AP is Quadratic

Because a_n itself is linear in n, summing from 1 to n yields a quadratic. Concretely, **a_n = S_n − S_{n−1}**, so if S_n = An² + Bn + C, then a_n = 2An + (B − A), confirming the linear n-th term.

#### Means and Insertion

Given two numbers a and b, the **Arithmetic Mean (AM)** is (a+b)/2 and the **Geometric Mean (GM)** is √(ab). To insert n AMs between a and b, treat the full list as an AP of length n+2 with difference **d = (b−a)/(n+1)**. For n GMs, use ratio **r = (b/a)^(1/(n+1))**. The classical inequality **AM ≥ GM ≥ HM** holds only for strictly positive numbers — examiners often test this positivity condition.

#### Special Natural-Number Sums

These identities are asked almost every year:

| Sum | Closed form |
|---|---|
| 1 + 2 + … + n | **n(n+1)/2** |
| 1² + 2² + … + n² | **n(n+1)(2n+1)/6** |
| 1³ + 2³ + … + n³ | **[n(n+1)/2]²** |

#### CUET Question Patterns

Expect 2–3 MCQs: computing a_n or S_n given a and d (or a and r); spotting whether a given list is AP or GP; one question on infinite GP convergence (test |r| < 1); an AM-GM inequality problem assuming positive terms. Numerical traps include off-by-one errors where the “first term” is actually a_2, and applying the GP sum formula at r = 1.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Infinite Series Convergence

The expression **S_∞ = a/(1−r)** is meaningful only when |r| < 1; otherwise partial sums diverge to ±∞ or oscillate. This is why a question such as “sum of 1 + 2 + 4 + 8 + …” has **no finite answer**, while 1 + 1/2 + 1/4 + 1/8 + … = 2. Memorise the boundary: at r = 1 you get the harmonic-divergent case na; at r = −1 you get the alternating series 1, −1, 1, −1, … whose partial sums oscillate and never settle.

#### Arithmetico-Geometric Progression (AGP)

A sequence whose n-th term has the form **(a + (n−1)d)·r^(n−1)** is an AGP. The sum to n terms is obtained by the *difference method*: multiply S_n by r, subtract, and use a telescoping cancellation. AGPs appear occasionally in CUET mixed-concepts papers, especially when an AP multiplier meets a GP factor.

#### Edge Cases and Common Mistakes

- **Index confusion.** The term called “the 3rd term” in a question may actually be a_2 if the stated list starts at index 0. Always anchor a_n = a + (n−1)d with the right a.
- **AM-GM on negatives.** The inequality fails or reverses for non-positive numbers; e.g., a = −4, b = −9 gives AM = −6.5, GM = √36 = 6, so GM > AM. Always check the sign.
- **Sum vs n-th term.** S_n is cumulative; a_n is incremental. Using the S_n formula when the question asks for a_n (or vice versa) is the single most common error.
- **Insertion formulas.** d and r for insertion problems depend on n+1, not n — a frequent off-by-one.

#### Adjacent Topics

Sequences & Series connects to **Binomial Theorem** (coefficients form APs in particular expansions), **Mathematical Induction** (proving the natural-number sums), and **Limits** (S_∞ of a GP is a limit). Mastering the AP–GP dichotomy here makes coordinate geometry and probability’s geometric-distribution questions easier.

#### Practice Prompts

1. If the 7th and 13th terms of an AP are 10 and 16, find S_20. *(Hint: solve for a and d first; expect S_20 = 590.)*
2. Find the sum to infinity of the GP: 0.15, 0.0015, 0.000015, … *(a = 0.15, r = 0.01; S_∞ = 0.15/0.99 = 5/33.)*

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
