---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-016
topicName: Binomial
weight: 5
country: india
generated: "2026-03-24T08:32:07.941384"
lastUpdated: "2026-09-10"
diagramPrompt: "Mathematical diagram showing Binomial concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Binomial

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The **Binomial Theorem** states that for any non-negative integer n,
$(x + y)^n = \sum_{r=0}^{n} \binom{n}{r} x^{n-r} y^r$, where $\binom{n}{r} = \dfrac{n!}{r!(n-r)!}$ is the **binomial coefficient**.

- The expansion produces **n + 1 terms**, indexed r = 0, 1, …, n.
- The **general term** is $T_{r+1} = \binom{n}{r} x^{n-r} y^r$ — note the off-by-one: term number equals r + 1.
- Sum of all coefficients (put x = y = 1) equals **2ⁿ**; alternating sum with y = −1 equals **0** for n ≥ 1.
- **Greatest coefficient** $\binom{n}{r}$ lies at $r = \lfloor n/2 \rfloor$.

| Identity | Value |
| --- | --- |
| $\sum \binom{n}{r}$ | $2^n$ |
| $\sum (-1)^r \binom{n}{r}$ | 0 (n ≥ 1) |
| Expansion length | n + 1 terms |
| Middle term (n even) | $T_{n/2 + 1}$ |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### General Term and Indexing
The r-th term (counting from 0) of $(x+y)^n$ is $\binom{n}{r} x^{n-r} y^r$. In JEE Advanced questions, you will often be asked to "find the term independent of x" or "find the term containing $x^k$" — equate the exponent of x to the required power and solve for r. Remember that r must be a non-negative integer; otherwise the required term does not exist.

#### Pascal's Identity and Symmetry
Two properties carry most coefficient problems:
- **Symmetry:** $\binom{n}{r} = \binom{n}{n-r}$.
- **Pascal's rule:** $\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$.

These let you reduce any coefficient to a form suitable for evaluation or for use in divisibility arguments.

#### Middle Term and Greatest Coefficient
The greatest binomial coefficient occurs at $r = \lfloor n/2 \rfloor$.
- **n even:** single middle term at $T_{n/2 + 1}$.
- **n odd:** two middle terms, $T_{(n+1)/2}$ and $T_{(n+3)/2}$.

| n parity | Middle term(s) | Position |
| --- | --- | --- |
| Even | $T_{n/2+1}$ | Single |
| Odd | $T_{(n+1)/2}$, $T_{(n+3)/2}$ | Pair |

#### Coefficient Sums
- Total sum → substitute x = 1, y = 1 → $2^n$.
- Odd-indexed sum → substitute x = 1, y = −1 and split: sum of coefficients of even-indexed terms minus odd-indexed terms equals $2^n$ if n is even, 0 if n is odd.

#### General Binomial Series
When n is **not** a positive integer, use $\binom{n}{r} = \dfrac{n(n-1)\cdots(n-r+1)}{r!}$ and the infinite series converges only when $|x| < 1$ in $(1+x)^n$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example — Finding a Specific Term
Find the term independent of x in the expansion of $\left(x^2 + \dfrac{1}{x}\right)^{12}$.

General term: $T_{r+1} = \binom{12}{r} (x^2)^{12-r} \left(\dfrac{1}{x}\right)^r = \binom{12}{r} x^{24-3r}$.

For independence of x, set 24 − 3r = 0 → r = 8. The required term is $\binom{12}{8} = \binom{12}{4} = 495$.

#### Multinomial Generalisation
For $(x_1 + x_2 + \cdots + x_k)^n$, the coefficient of $x_1^{r_1} x_2^{r_2} \cdots x_k^{r_k}$ with $r_1 + r_2 + \cdots + r_k = n$ is $\dfrac{n!}{r_1! \, r_2! \cdots r_k!}$.

#### Common Mistakes
1. Writing $T_r$ instead of $T_{r+1}$ — causes off-by-one in exponents.
2. Applying $n/2 + 1$ for non-integer n — invalid; the middle-term formula needs integer n.
3. Using $\binom{n}{r} = n!/(r!(n-r)!)$ for general (non-integer, negative) n — must use $n(n-1)\cdots(n-r+1)/r!$ and respect $|x| < 1$.
4. Forgetting that the expansion has **n + 1** terms, not n.
5. For odd n, listing only one middle term instead of two.

#### Divisibility and Approximation
- To show $(1+x)^n - 1$ is divisible by x, expand and observe the first term cancels.
- For integer n, all coefficients except 1 are divisible by n when n is prime (used in $(a+b)^p \equiv a^p + b^p \pmod p$).
- Binomial series with first three non-zero terms gives rapid approximation: $(1+x)^n \approx 1 + nx + \dfrac{n(n-1)}{2}x^2$ for small x.

#### Practice Prompts
1. Find the coefficient of $x^5$ in the expansion of $(x^2 + 3x + 1)^7$ using the multinomial theorem.
2. Approximate $\sqrt{1.02}$ using the binomial series up to two terms, and estimate the error.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Binomial" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
