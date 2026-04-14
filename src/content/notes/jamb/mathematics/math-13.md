---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-13
topicName: Sequence and Series (AP and GP)
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.737734"
diagramPrompt: "Mathematical diagram showing Sequence and Series (AP and GP) concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Sequence and Series (AP and GP)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Sequence and Series** — Quick Facts

**Arithmetic Progression (AP):**
- A sequence where the difference between consecutive terms is constant
- Common difference: $d = T_2 - T_1 = T_3 - T_2 = ...$
- General term: $T_n = a + (n - 1)d$
- Sum of n terms: $S_n = \frac{n}{2}[2a + (n - 1)d] = \frac{n(a + l)}{2}$ (where $l$ = last term)

**Geometric Progression (GP):**
- A sequence where the ratio between consecutive terms is constant
- Common ratio: $r = \frac{T_2}{T_1} = \frac{T_3}{T_2} = ...$
- General term: $T_n = ar^{n-1}$
- Sum of n terms: $S_n = \frac{a(r^n - 1)}{r - 1}$ for $r \neq 1$
- Sum to infinity exists only when $|r| < 1$: $S_\infty = \frac{a}{1 - r}$

**Quick Examples:**
- AP: 3, 7, 11, 15, ... (a=3, d=4)
- GP: 2, 6, 18, 54, ... (a=2, r=3)

⚡ **JAMB Exam Tip:** In "find the number of terms" questions, form the equation $T_n = \text{given value}$ and solve for $n$. Always check: is $n$ a positive integer?

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Sequence and Series** — Study Guide

**AP Worked Example:**

The 5th term of an AP is 23 and the 12th term is 37. Find the first term and common difference.

$T_5 = a + 4d = 23$
$T_{12} = a + 11d = 37$

Subtracting: $7d = 14 \Rightarrow d = 2$
Substituting: $a + 8 = 23 \Rightarrow a = 15$

**Finding the Middle Term of an AP:**
If there are an odd number of terms, the middle term $T_{(n+1)/2} = \frac{a + l}{2}$

**Sum Properties:**
- $S_n = \frac{n}{2}(a + l)$
- The sum of the first $n$ natural numbers: $S_n = \frac{n(n+1)}{2}$

**GP Worked Example:**

Find the sum of 5 terms of the GP: 3, 6, 12, ...

$a = 3$, $r = 2$, $n = 5$
$S_5 = 3(2^5 - 1)/(2 - 1) = 3(32 - 1) = 93$

**GP Sum to Infinity Worked Example:**

Find $S_\infty$ for the GP: $\frac{1}{3}, \frac{1}{9}, \frac{1}{27}, ...$

$a = \frac{1}{3}$, $r = \frac{1}{3}$ (since $|r| < 1$, sum exists)
$S_\infty = \frac{a}{1 - r} = \frac{1/3}{1 - 1/3} = \frac{1/3}{2/3} = \frac{1}{2}$

**Typical JAMB Questions:**
- "Find the 10th term of the sequence 2, 5, 8, ..."
- "The 4th term of a GP is 54 and the 7th term is 1458. Find the sum to infinity."
- "How many terms of the AP 3, 7, 11, ... give a sum of 190?"

⚡ **Common Student Mistake:** For GP, using $S_n = \frac{a(1 - r^n)}{1 - r}$ instead of $\frac{a(r^n - 1)}{r - 1}$. Both are equivalent, but the latter is easier when $r > 1$ as it avoids negative numbers.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Sequence and Series** — Comprehensive Notes

**Arithmetic Mean (AM):**

If $A$ is the arithmetic mean between $a$ and $b$:
$$A = \frac{a + b}{2}$$

For $n$ arithmetic means between $a$ and $b$:
$$d = \frac{b - a}{n + 1}$$

**Geometric Mean (GM):**

If $G$ is the geometric mean between $a$ and $b$:
$$G = \sqrt{ab}$$

For $n$ geometric means between $a$ and $b$, the sequence forms a GP with common ratio:
$$r = \sqrt[n+1]{\frac{b}{a}}$$

**Three Terms in AP:** Represent as $a - d$, $a$, $a + d$ (sum = $3a$, so $a = \frac{\text{sum}}{3}$)

**Three Terms in GP:** Represent as $a/r$, $a$, $ar$ (product = $a^3$, so $a = \sqrt[3]{\text{product}}$)

**Four Terms in AP:** Use $a - 3d$, $a - d$, $a + d$, $a + 3d$ (symmetric form, common difference = $2d$)

**Sum of Series Patterns:**

Sum of squares of first $n$ natural numbers:
$$S_n^2 = \frac{n(n+1)(2n+1)}{6}$$

Sum of cubes of first $n$ natural numbers:
$$S_n^3 = \left[\frac{n(n+1)}{2}\right]^2$$

**Compound Interest Connection:**

If a principal $P$ grows at rate $r\%$ per period, the amount after $n$ periods forms a GP:
$$A_n = P\left(1 + \frac{r}{100}\right)^n$$

This is also the formula for the $n$th term of a GP where $a = P$ and $r = 1 + \frac{r}{100}$.

**Convergence of GP:**

A GP converges (has a finite sum to infinity) if and only if $|r| < 1$.

Proof: As $n \to \infty$, $r^n \to 0$ when $|r| < 1$, so $S_n = \frac{a(r^n - 1)}{r - 1} \to \frac{-a}{-1} = \frac{a}{1 - r}$

**JAMB Pattern Analysis (2016-2024):**
- 2016: Sum of AP given first term and common difference (direct formula)
- 2018: GP sum to infinity (40% of sequence questions)
- 2020: Mixed AP and GP identification from given terms
- 2022: Three terms in AP/Gp representation
- 2024: Compound interest as GP application

⚡ **Exam Strategy:** When given two terms of a sequence, form two equations and solve simultaneously. For AP: find $a$ and $d$. For GP: find $a$ and $r$. Check whether the sequence converges or diverges for GP sum questions.

**Hard Problem Example:**

The sum of the first three terms of a GP is $\frac{13}{12}$ and the sum of the next three terms is $\frac{169}{12}$. Find the first term and common ratio.

Let first term = $a$, ratio = $r$.
First three terms: $a + ar + ar^2 = \frac{13}{12}$ ... (1)
Next three terms: $ar^3 + ar^4 + ar^5 = \frac{169}{12}$ ... (2)

Divide (2) by (1): $r^3 = \frac{169}{13} = 13$, so $r = \sqrt[3]{13}$
Substitute back to find $a$: $a = \frac{13}{12(1 + \sqrt[3]{13} + \sqrt[3]{169})}$