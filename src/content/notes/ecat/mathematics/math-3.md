---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-3
topicName: Geometric Progression and Binomial Theorem
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.064908"
lastUpdated: "2026-09-08"
diagramPrompt: "Mathematical diagram showing Geometric Progression and Binomial Theorem concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Geometric Progression and Binomial Theorem

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT Mathematics paper.

A **Geometric Progression (GP)** is a sequence where each term after the first equals the previous term multiplied by a fixed **common ratio r**: a, ar, ar², ar³, … . The **Binomial Theorem** expands (a + b)ⁿ as a sum of binomial-coefficient terms for any non-negative integer n.

#### Must-Know Formulas

| Concept | Formula |
| --- | --- |
| nth term of GP | aₙ = a·r^(n−1) |
| Sum of n GP terms (r ≠ 1) | Sₙ = a(rⁿ − 1)/(r − 1) |
| Infinite GP sum (|r| < 1) | S∞ = a/(1 − r) |
| Binomial expansion | (a + b)ⁿ = Σ C(n,k)·a^(n−k)·b^k |
| General term | T_(k+1) = C(n,k)·a^(n−k)·b^k |

#### ECAT Pointers

- The **general-term trick** solves "find the term containing x³" instantly — match powers to fix k.
- **Middle term** of (a + b)ⁿ: one term when n is even at T_(n/2+1); two middle terms when n is odd at T_((n+1)/2) and T_((n+3)/2).
- Watch the **|r| < 1** gate before applying the infinite GP formula.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before ECAT.

#### Geometric Progression Mechanics

A GP is identified by the constant ratio a_(n+1)/aₙ = r. For any GP with first term a and ratio r, the nth term is aₙ = a·r^(n−1), and the sum of the first n terms (r ≠ 1) is Sₙ = a(1 − rⁿ)/(1 − r). When |r| < 1, the series converges and S∞ = a/(1 − r). Three numbers a, b, c are in GP when b² = a·c, giving the geometric mean of a and c as √(a·c).

A common ECAT trap is the **r = 1** case — the sum formula divides by zero, but the correct value is simply Sₙ = n·a because every term equals a. Another trap: applying S∞ when |r| ≥ 1, where the terms do not approach zero and the infinite sum diverges.

#### Binomial Theorem Mechanics

For a positive integer n, (a + b)ⁿ = Σ(k=0 to n) C(n,k)·a^(n−k)·b^k. The **binomial coefficient** C(n,k) = n!/[k!(n−k)!] satisfies three identities that ECAT tests repeatedly:

| Property | Statement |
| --- | --- |
| Symmetry | C(n,k) = C(n, n−k) |
| Sum of all coefficients | C(n,0) + C(n,1) + … + C(n,n) = 2ⁿ |
| Pascal's rule | C(n,k) + C(n,k+1) = C(n+1, k+1) |

The **general term** T_(k+1) = C(n,k)·a^(n−k)·b^k lets you extract any single term directly. For "term independent of x" in (ax + b/x)ⁿ, set exponents of x to zero. For the **middle term** of (a + b)ⁿ, even n gives one term (k = n/2); odd n gives two terms (k = (n−1)/2 and k = (n+1)/2).

- Off-by-one errors: T_(k+1) uses C(n,k), never C(n,k+1) — index the (k+1)th term.
- For **fractional/negative exponent n**, use the general series (1 + x)ⁿ = 1 + nx + n(n−1)/2!·x² + … valid only when |x| < 1.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example

**Problem.** Find the term independent of x in (x² + 1/x³)¹⁰.

Using T_(k+1) = C(10,k)·(x²)^(10−k)·(1/x³)^k = C(10,k)·x^(20 − 5k). For independence, set 20 − 5k = 0, giving k = 4. The required term is C(10,4) = 210. This single trick — **matching the exponent to zero** — answers several ECAT MCQs in under a minute.

#### General Binomial Series and Approximations

When n is not a positive integer, the expansion is **infinite** and valid only for |x| < 1: (1 + x)ⁿ = 1 + nx + n(n−1)/2!·x² + n(n−1)(n−2)/3!·x³ + … . This series underlies ECAT questions on cube roots (n = 1/3), reciprocals (n = −1), and approximations such as √(1.02) ≈ 1 + 0.01 = 1.01 to first order.

#### Common Mistakes

| Mistake | Correction |
| --- | --- |
| Using S∞ = a/(1 − r) without checking |r| < 1 | Verify |r| < 1 first; otherwise series diverges |
| Writing C(n,k+1) for the (k+1)th term | T_(k+1) uses C(n,k) |
| One middle term for odd n | Odd n yields two middle terms |
| Forgetting r = 1 makes formula undefined | Use Sₙ = n·a when r = 1 |

#### Practice Prompts

1. If the 3rd and 6th terms of a GP are 12 and 96 respectively, find the 10th term and the sum of the first 8 terms.
2. Find the coefficient of x⁻² in (2x − 1/x)⁹ and state the term's position in the expansion.

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Geometric Progression and Binomial Theorem" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
