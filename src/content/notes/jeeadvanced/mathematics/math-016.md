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
diagramPrompt: Mathematical diagram showing Binomial concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Binomial

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Binomial Theorem:**
$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k = a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + b^n$$

where $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ (binomial coefficient).

**Special Cases:**

- $(1+x)^n = 1 + \binom{n}{1}x + \binom{n}{2}x^2 + \cdots + x^n$
- $(x-1)^n = \sum_{k=0}^{n} \binom{n}{k} (-1)^k x^{n-k}$

**Properties of Binomial Coefficients:**

- $\binom{n}{k} = \binom{n}{n-k}$ (symmetry)
- $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$ (Pascal's identity)
- $\sum_{k=0}^{n} \binom{n}{k} = 2^n$
- $\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ for $n \geq 1$

**General Term:**
$T_{k+1} = \binom{n}{k} a^{n-k} b^k$ for $k = 0, 1, 2, \ldots, n$.

⚡ **JEE Tip:** For middle terms in $(a+b)^n$, when $n$ is even, the middle term is $T_{\frac{n}{2}+1}$. When $n$ is odd, two middle terms are $T_{\frac{n+1}{2}}$ and $T_{\frac{n+1}{2}+1}$.

⚡ **Common Mistake:** For $(1-x)^n$, the signs alternate: $T_{k+1} = \binom{n}{k}(-x)^k = (-1)^k \binom{n}{k} x^k$. Don't forget the $(-1)^k$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Multinomial Theorem:**
$(x_1 + x_2 + \cdots + x_m)^n = \sum \frac{n!}{a_1! a_2! \cdots a_m!} x_1^{a_1} x_2^{a_2} \cdots x_m^{a_m}$
where sum is over all non-negative integers $a_1, a_2, \ldots, a_m$ with $a_1 + a_2 + \cdots + a_m = n$.

**Binomial Coefficient Identities:**

1. $\sum_{k=0}^{n} \binom{r+k}{k} = \binom{r+n+1}{n}$ ( Hockey-stick)
2. $\sum_{k=0}^{n} k \binom{n}{k} = n \cdot 2^{n-1}$
3. $\sum_{k=0}^{n} k^2 \binom{n}{k} = (n + n^2) 2^{n-2}$
4. $\sum_{k=0}^{n} \binom{n}{k}^2 = \binom{2n}{n}$ (special identity)

**Binomial for Any Index:**
For any real $n$:
$$(1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots$$

When $n$ is not a non-negative integer, the series is infinite and converges for $|x| < 1$.

**Worked Examples:**

*Example 1 (JEE 2022):* Find the coefficient of $x^{15}$ in $(1-x^2)^{-3}$.

Using general binomial: $(1+x)^n = \sum \binom{n}{k} x^k$ with $n = -3$.
$(1-x^2)^{-3} = \sum_{k=0}^{\infty} \binom{-3}{k}(-x^2)^k = \sum_{k=0}^{\infty} \binom{-3}{k}(-1)^k x^{2k}$.

General binomial coefficient: $\binom{-3}{k} = \frac{(-3)(-4)(-5)\cdots(-3-k+1)}{k!} = \frac{(-1)^k \cdot 3 \cdot 4 \cdot 5 \cdots (k+2)}{k!} = \frac{(-1)^k (k+2)!}{2! \cdot k!} = \frac{(-1)^k (k+2)(k+1)}{2}$.

So $\binom{-3}{k}(-1)^k = \frac{(k+2)(k+1)}{2}$.
Thus coefficient of $x^{2k}$ is $\frac{(k+2)(k+1)}{2}$.

We want $x^{15}$, but $x$ appears only with even powers $2k$. So coefficient of $x^{15}$ is 0.

*Example 2:* Find $n$ if the 3rd term in $(1+x)^n$ is 220.

The 3rd term corresponds to $k=2$: $T_3 = \binom{n}{2} x^2 \cdot 1^{n-2} = \frac{n(n-1)}{2} x^2$.
Given coefficient is 220: $\frac{n(n-1)}{2} = 220$ → $n(n-1) = 440$.
$n^2 - n - 440 = 0$.
$(n-21)(n+20) = 0$.
So $n = 21$ (positive integer).

*Example 3:* Find $\sum_{k=0}^{n} \binom{n}{k} 2^k$.

$(1+2)^n = 3^n = \sum_{k=0}^{n} \binom{n}{k} 1^{n-k} 2^k = \sum_{k=0}^{n} \binom{n}{k} 2^k$.
So sum $= 3^n$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Generalised Binomial Coefficient:**
$$\binom{n}{k} = \frac{n(n-1)(n-2)\cdots(n-k+1)}{k!}$$
works for any real $n$ and non-negative integer $k$.

**Exponential Generating Function:**
The EGF for binomial expansions is related to $(1+x)^n$.

**Applications in Probability:**
For binomial distribution: $(p+q)^n = \sum \binom{n}{k} p^k q^{n-k}$ where $p+q=1$.

**Advanced Problems:**

*Problem (JEE Advanced 2023):* Find the sum $\sum_{k=0}^{n} (-1)^k \binom{n}{k}^2$.

We need $\sum_{k=0}^{n} (-1)^k \binom{n}{k}^2$.

Using identity: $\sum_{k=0}^{n} (-1)^k \binom{n}{k}^2 = (-1)^{n/2} \binom{n}{n/2}$ if $n$ is even, and 0 if $n$ is odd.

Actually the exact result is:
$\sum_{k=0}^{n} (-1)^k \binom{n}{k}^2 = \begin{cases} (-1)^{n/2} \binom{n}{n/2} & n \text{ even} \\ 0 & n \text{ odd} \end{cases}$.

Proof: Using $\binom{n}{k} = \binom{n}{n-k}$ and the generating function approach.
Consider $(1+x)^n (1-x)^n = (1-x^2)^n$.
Coefficient of $x^n$ on left: $\sum_{k=0}^n (-1)^{n-k} \binom{n}{k} \binom{n}{n-k} = \sum_{k=0}^n (-1)^{n-k} \binom{n}{k}^2$.
Coefficient on right: 0 if $n$ is odd, $(-1)^{n/2} \binom{n}{n/2}$ if $n$ is even.

Wait, coefficient of $x^n$ in $(1-x^2)^n = \sum_{j=0}^n \binom{n}{j} (-1)^j x^{2j}$.
For odd $n$, no $x^n$ term. For even $n = 2m$, coefficient of $x^{2m}$ is $(-1)^m \binom{n}{m}$.
So sum $= (-1)^m \binom{2m}{m}$ when $n=2m$, and 0 when $n$ is odd.

*Problem 2:* Find the coefficient of $x^{10}$ in $(1-x)^{10} (1+x)^{10}$.

$((1-x)(1+x))^{10} = (1-x^2)^{10} = \sum_{k=0}^{10} \binom{10}{k} (-1)^k x^{2k}$.
Coefficient of $x^{10}$: since 10 is even, $2k = 10$ → $k=5$.
Coefficient: $\binom{10}{5} (-1)^5 = -\binom{10}{5} = -252$.

Actually $(1-x)^{10}(1+x)^{10} = (1-x^2)^{10}$.
Coefficient of $x^{10}$: when $10 = 2k$, $k=5$, coefficient $= \binom{10}{5}(-1)^5 = 252 \cdot (-1) = -252$.

**JEE Advanced Patterns (2018–2024):**
- General term and coefficient problems are very common
- Binomial for non-integer exponents (infinite series) appeared in 2020, 2022
- Summation of binomial coefficients with specific patterns is frequent
- Identities involving $\sum \binom{n}{k}^2$ and similar are advanced but appear
- Multinomial expansion for more than two terms is less common but tested

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
