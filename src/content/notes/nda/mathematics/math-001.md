---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-001
topicName: Algebra
weight: 5
country: india
generated: "2026-03-24T08:32:07.805173"
diagramPrompt: Mathematical diagram showing Algebra concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Algebra

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Quadratic Equation:**
$ax^2 + bx + c = 0$ with $a \neq 0$.

**Quadratic Formula:**
$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$

**Discriminant** $D = b^2 - 4ac$:
- $D > 0$: Two distinct real roots
- $D = 0$: Equal real roots
- $D < 0$: Complex conjugate roots

**Sum and Product of Roots:**
If $\alpha, \beta$ are roots: $\alpha + \beta = -b/a$, $\alpha\beta = c/a$.

**Binomial Theorem:**
$(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^{n-k} b^k$.

**Logarithm Rules:**
- $\log_a (xy) = \log_a x + \log_a y$
- $\log_a (x/y) = \log_a x - \log_a y$
- $\log_a (x^k) = k \log_a x$

⚡ **NDA Tip:** When solving quadratic equations with parameters, identify cases where the parameter makes the equation degenerate (coefficient of $x^2$ becomes 0).

⚡ **Common Mistake:** $\log_a (x+y) \neq \log_a x + \log_a y$. Only product splits, not sum. Similarly $\log_a (x-y)$ is not defined in general.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Arithmetic Progression (AP):**
$a_n = a_1 + (n-1)d$.
Sum $S_n = \frac{n}{2}(2a_1 + (n-1)d) = \frac{n(a_1+a_n)}{2}$.

**Geometric Progression (GP):**
$a_n = a_1 \cdot r^{n-1}$.
Sum $S_n = a_1 \frac{r^n-1}{r-1}$ for $r \neq 1$.
Infinite sum $S_\infty = \frac{a_1}{1-r}$ if $|r| < 1$.

**Harmonic Progression (HP):**
If $a, b, c$ are in HP, then $\frac{1}{a}, \frac{1}{b}, \frac{1}{c}$ are in AP.
No formula for HP sum directly — convert to AP.

**Permutation and Combination:**

- $P(n,r) = \frac{n!}{(n-r)!}$ (arrangement)
- $C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$ (selection)
- $\binom{n}{r} = \binom{n}{n-r}$ (symmetry)

**Matrices:**
- $2 \times 2$ determinant: $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$
- Matrix multiplication: row of A times column of B

**Complex Numbers:**
$i = \sqrt{-1}$, $i^2 = -1$.
If $z = x + iy$, then $|z| = \sqrt{x^2+y^2}$ and $\bar{z} = x - iy$.
$z^{-1} = \frac{\bar{z}}{|z|^2}$.

**Worked Examples:**

*Example 1:* If roots of $x^2 - px + q = 0$ are in ratio 3:4, find relation between $p$ and $q$.

Let roots be $3k$ and $4k$.
Sum: $3k + 4k = 7k = p$ → $k = p/7$.
Product: $3k \cdot 4k = 12k^2 = q$.
So $12(p/7)^2 = q$ → $12p^2/49 = q$.
Thus $q = \frac{12}{49}p^2$.

*Example 2:* Solve $\log_2(x+1) + \log_2(x-1) = 3$.

Using log rules: $\log_2[(x+1)(x-1)] = 3$ → $\log_2(x^2-1) = 3$.
So $x^2 - 1 = 2^3 = 8$ → $x^2 = 9$ → $x = \pm 3$.
Check domain: $x+1 > 0$ and $x-1 > 0$ gives $x > 1$.
So $x = -3$ is extraneous (doesn't satisfy $x > 1$).
Thus $x = 3$.

*Example 3:* Find number of ways to arrange letters of "ARMY" and "ARRANGE".

ARMY: 4 distinct letters, arrangements $= 4! = 24$.
ARRANGE: A appears twice, R appears twice.
Arrangements $= \frac{7!}{2! \cdot 2!} = \frac{5040}{4} = 1260$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**De Moivre's Theorem:**
$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$.

This allows finding powers and roots of complex numbers.
$n$-th roots of unity: $z^k$ where $z = e^{2\pi i/n}$, $k = 0,1,\ldots,n-1$.

**Binomial Theorem for Any Index:**
For real $n$:
$(1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \cdots$.
Converges for $|x| < 1$ when $n$ is not a positive integer.

**Permutations with Repetitions:**
- $n$ objects with $p$ alike of type 1, $q$ alike of type 2: $\frac{n!}{p!q!}$
- Arrange $n$ items into $r$ groups (allow empty groups): $r^n$

**Determinant Properties:**
- Rows can be added/subtracted without changing value
- Swapping rows changes sign
- Multiply row by constant $k$: determinant multiplied by $k$
- If two rows identical, determinant is 0
- Cofactor expansion along any row/column

**Set Theory:**
- $|A \cup B| = |A| + |B| - |A \cap B|$
- $|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |C \cap A| + |A \cap B \cap C|$
- $A \times B$ (Cartesian product): $|A \times B| = |A| \cdot |B|$

**Advanced Problems:**

*Problem (NDA Pattern):* Find sum of all 4-digit numbers formed using digits 1, 2, 3, 4 if repetition allowed.

Using digits 1, 2, 3, 4, each of 4 positions can be filled in 4 ways: $4^4 = 256$ numbers.
Sum of digits in each position:
Ones place: each digit appears equally often: $256/4 = 64$ times.
Sum $= 64 \cdot (1+2+3+4) = 64 \cdot 10 = 640$.
Similarly for tens, hundreds, thousands: each gives sum $640 \cdot 10^{position}$.
Total sum $= 640(1 + 10 + 100 + 1000) = 640 \cdot 1111 = 711040$.

*Problem:* Find the complex cube roots of unity.

$z^3 = 1$ → $z^3 - 1 = 0$ → $(z-1)(z^2+z+1) = 0$.
Roots: $z = 1$ and $z = \frac{-1 \pm i\sqrt{3}}{2}$.
Note that the non-real roots are conjugates: if $\omega$ is one non-real root, $\omega^2$ is the other.

**NDA Exam Pattern:**
- NDA Mathematics has 120 questions, 300 marks
- Algebra questions are common (15-20 questions)
- Focus on solving equations and inequalities
- Permutations and combinations appear regularly
- Determinants and matrices (2x2, 3x3) are tested
- Complex numbers tested but usually basic operations

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
