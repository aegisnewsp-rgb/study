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
diagramPrompt: "Mathematical diagram showing Geometric Progression and Binomial Theorem concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Geometric Progression and Binomial Theorem

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

**Geometric Progression (GP):**

A sequence $a_1, a_2, a_3, ...$ is a GP if the ratio $r = a_{n+1}/a_n$ is constant for all $n$.

- General term: $a_n = a r^{n-1}$
- Three consecutive terms: $a/r, a, ar$ (centre is the geometric mean: $a = \sqrt{(a/r)(ar)}$)
- Geometric Mean (GM): For two numbers $a$ and $b$, $GM = \sqrt{ab}$
- Sum of first $n$ terms:
  $$S_n = \frac{a(r^n - 1)}{r - 1} = \frac{a(1 - r^n)}{1 - r} \quad (r \neq 1)$$
  For $r = 1$: $S_n = na$
- Sum of infinite GP (when $|r| < 1$): $S_\infty = \frac{a}{1 - r}$
- When $|r| \geq 1$: infinite sum does not exist (diverges)

**⚡ ECAT exam tips for GP:**
- If three numbers are in GP, represent them as $a/r, a, ar$ — this symmetric form makes multiplication easy
- The product of three terms in GP: $(a)(ar)(ar^2) = a^3 r^3 = (ar)^3$ — the middle term cubed
- For infinite GP: the formula $S_\infty = a/(1-r)$ only works when $|r| < 1$

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding of GP and the Binomial Theorem.

**GP Worked Examples:**

**Example 1:** The 3rd term of a GP is 12 and the 6th term is 96. Find the 10th term.
$a_3 = ar^2 = 12$. $a_6 = ar^5 = 96$.
Dividing: $r^3 = 96/12 = 8$, so $r = 2$.
Then $a = 12/r^2 = 12/4 = 3$.
$a_{10} = ar^9 = 3 \times 512 = 1536$.

**Example 2:** Find the sum of $1 + 2 + 4 + 8 + ... + 1024$.
$a = 1$, $r = 2$, $n = ?$ Since $1024 = 2^{10}$, the terms are $2^0, 2^1, ..., 2^{10}$: that's 11 terms.
$S_{11} = 1(2^{11} - 1)/(2-1) = 2047$.

**Example 3:** An infinite GP has sum 8 and first term 2. Find the common ratio.
$S_\infty = a/(1-r) = 8$. So $1-r = a/8 = 2/8 = 1/4$. Hence $r = 3/4$.
Check: $2 + 2(3/4) + 2(3/4)^2 + ... = 2/(1 - 3/4) = 2/(1/4) = 8$. ✓

**The Binomial Theorem:**

For any positive integer $n$:
$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k = x^n + \binom{n}{1}x^{n-1}y + \binom{n}{2}x^{n-2}y^2 + ... + y^n$$

where $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ (read as "$n$ choose $k$").

**Key properties:**
- General term: $T_{k+1} = \binom{n}{k} x^{n-k} y^k$
- Total terms: $n + 1$
- The binomial coefficients are symmetric: $\binom{n}{k} = \binom{n}{n-k}$
- Largest binomial coefficient: $\binom{n}{\lfloor n/2 \rfloor}$ (for $n$ even) or two equal maxima for $n$ odd

**⚡ ECAT exam tips:**
- $(a+b)^n$ and $(a-b)^n$: signs alternate for the second term when using $(a-b)^n$
- $\binom{n}{0} = \binom{n}{n} = 1$ always
- For $(1+x)^n$: coefficients are $\binom{n}{0}, \binom{n}{1}, ..., \binom{n}{n}$
- The sum of all binomial coefficients for $(x+y)^n$ evaluated at $x=y=1$: $\sum \binom{n}{k} = 2^n$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery of GP, infinite series, and binomial theorem.

**Infinite GP — Convergence Analysis:**

An infinite GP converges if and only if $|r| < 1$. The sum formula $S_\infty = a/(1-r)$ comes from the limit of partial sums as $n \to \infty$. As $n \to \infty$, $r^n \to 0$ when $|r| < 1$. Therefore:

$$S_\infty = \lim_{n \to \infty} \frac{a(1-r^n)}{1-r} = \frac{a(1-0)}{1-r} = \frac{a}{1-r}$$

**Sum of powers of integers:**
- Sum of first $n$ integers: $S_1 = n(n+1)/2$
- Sum of squares: $S_2 = n(n+1)(2n+1)/6$
- Sum of cubes: $S_3 = [n(n+1)/2]^2$ — the square of the sum of first $n$ integers

**Combined AP and GP:**
Some sequences are neither pure AP nor GP but combinations. For example: $1, 3, 7, 15, 31, ...$ — each term is $2^n - 1$. Recognising patterns is key.

**Binomial Coefficient Properties:**
$$\binom{n}{k} = \frac{n}{k}\binom{n-1}{k-1} \quad (k \geq 1)$$

**Pascal's Triangle:**
```
         1
        1 1
       1 2 1
      1 3 3 1
     1 4 6 4 1
```
Each entry is the sum of the two entries above it. Row $n$ (starting from 0) gives coefficients of $(a+b)^n$.

**Generalised Binomial Theorem (for fractional/negative indices):**

For $|x| < 1$:
$$(1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + ...$$

This extends the binomial theorem to non-integer exponents, giving infinite series.

Example: $(1+x)^{-1} = 1 - x + x^2 - x^3 + ...$ (geometric series)
Example: $(1-x)^{-2} = 1 + 2x + 3x^2 + 4x^3 + ...$

**Binomial Sum Identities:**
$$\sum_{k=0}^{n} \binom{n}{k} = 2^n$$
$$\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$$
$$\sum_{k=0}^{n} k \binom{n}{k} = n \cdot 2^{n-1}$$
$$\sum_{k=0}^{n} k^2 \binom{n}{k} = n(n+1) \cdot 2^{n-2}$$

**Multinomial Theorem (Extension):**

$$(x_1 + x_2 + ... + x_m)^n = \sum \frac{n!}{k_1! k_2! ... k_m!} x_1^{k_1} x_2^{k_2} ... x_m^{k_m}$$
where the sum is over all non-negative integers $k_1, k_2, ..., k_m$ such that $k_1 + k_2 + ... + k_m = n$.

**GP Applications in Finance and Physics:**
- Compound interest: $A = P(1 + r/n)^{nt}$ — actually a GP-like growth
- Population growth/decay follows exponential (GP-like) patterns
- Bouncing ball: total distance travelled if ball rebounds with coefficient of restitution $e$: $S = \frac{h}{1-e^2}$ for bounces, where heights form a GP with ratio $e^2$

**ECAT Previous Year Patterns:**
- GP term and sum calculations: very common
- Infinite GP: common when $|r| < 1$
- Binomial expansion: very common
- Finding specific terms: common
- Binomial coefficient sums: periodic

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
