---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-017
topicName: Sequences
weight: 5
country: india
generated: "2026-03-24T08:32:07.941897"
diagramPrompt: Mathematical diagram showing Sequences concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Sequences

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Definition:**
A sequence $\{a_n\}$ is a function from $\mathbb{N}$ to $\mathbb{R}$. We write $a_n$ for the $n$-th term.

**Convergence:**
$\{a_n\}$ converges to $L$ if $\forall \epsilon > 0, \exists N \in \mathbb{N}$ such that $n > N$ implies $|a_n - L| < \epsilon$.
We write $\lim_{n \to \infty} a_n = L$.

**Boundedness:**

- **Bounded above:** $\exists M$ such that $a_n \leq M$ for all $n$
- **Bounded below:** $\exists m$ such that $a_n \geq m$ for all $n$
- **Bounded:** both above and below

**Monotone Sequences:**

- **Increasing:** $a_{n+1} \geq a_n$ for all $n$
- **Strictly increasing:** $a_{n+1} > a_n$
- **Decreasing:** $a_{n+1} \leq a_n$
- **Strictly decreasing:** $a_{n+1} < a_n$

**Monotone Convergence Theorem:**
Every bounded monotone sequence converges.

⚡ **JEE Tip:** To test convergence of sequences like $a_n = \frac{n}{n+1}$, check if $a_n \to 1$ as $n \to \infty$. Always check if limit exists as $n \to \infty$.

⚡ **Common Mistake:** Not every convergent sequence is monotone, and not every bounded sequence is convergent (e.g., $a_n = (-1)^n$ is bounded but doesn't converge).

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Cauchy Sequences:**

A sequence $\{a_n\}$ is Cauchy if $\forall \epsilon > 0, \exists N$ such that $m,n > N$ implies $|a_m - a_n| < \epsilon$.

In $\mathbb{R}$, a sequence converges iff it is Cauchy (completeness axiom).

**Special Sequences:**

**1. Arithmetic Progression:**
$a_n = a_1 + (n-1)d$. Converges if $d = 0$ (constant sequence), diverges otherwise.

**2. Geometric Progression:**
$a_n = ar^{n-1}$. Converges iff $|r| < 1$ (limit is 0) or $|r| = 1$ with special cases (if $a=0$, converges to 0; if $|r|=1, r \neq 1$, diverges).

**3. Fibonacci-like sequences:**
Defined by recurrence. Can be solved using characteristic equation.

**Recurrence Relations:**

For linear recurrence $a_n = p a_{n-1} + q$, solve via characteristic equation $\lambda^2 = p\lambda + q$.

Example: $a_n = a_{n-1} + 2a_{n-2}$ with $a_1 = 1, a_2 = 3$.
Characteristic: $\lambda^2 = \lambda + 2$ → $\lambda^2 - \lambda - 2 = 0$ → $(\lambda-2)(\lambda+1) = 0$.
So $a_n = A \cdot 2^n + B \cdot (-1)^n$.
Using initial conditions: $a_1 = 2A - B = 1$, $a_2 = 4A + B = 3$.
Add: $6A = 4$ → $A = 2/3$. Then $B = 4/3 - 1 = 1/3$.
So $a_n = \frac{2^{n+1} + (-1)^n}{3}$.

**Worked Examples:**

*Example 1:* Find $\lim_{n \to \infty} \frac{2n^2 + 3n}{5n^2 - 1}$.

Divide numerator and denominator by $n^2$:
$\lim \frac{2 + 3/n}{5 - 1/n^2} = \frac{2}{5}$.

*Example 2 (JEE 2022):* Does $\{a_n\}$ converge? $a_1 = 1, a_{n+1} = \sqrt{2 + a_n}$.

We claim $a_n$ is increasing and bounded above by 2.
$a_1 = 1 < 2$.
Assume $a_n < 2$. Then $a_{n+1} = \sqrt{2 + a_n} < \sqrt{2+2} = 2$.
Also $a_{n+1} - a_n = \sqrt{2+a_n} - a_n$.
We need to check $a_n < \sqrt{2+a_n}$ for $a_n < 2$.
This is equivalent to $a_n^2 < 2 + a_n$ → $a_n^2 - a_n - 2 < 0$ → $(a_n-2)(a_n+1) < 0$.
Since $a_n \geq 1$, we have $a_n - 2 < 0$ and $a_n + 1 > 0$, so product is negative. ✓

So increasing and bounded above by 2, hence converges.
Let limit be $L$. Then $L = \sqrt{2+L}$ → $L^2 - L - 2 = 0$ → $(L-2)(L+1) = 0$.
Since $L \geq 1$, $L = 2$.
So sequence converges to 2.

*Example 3:* Find limit of $a_n = \left(1 + \frac{1}{n}\right)^n$.

$\lim_{n \to \infty} a_n = e$ (definition of $e$).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Subsequences:**

Every bounded sequence has a convergent subsequence (Bolzano-Weierstrass theorem).
A sequence converges to $L$ iff every subsequence converges to $L$.

**Limit Superior and Limit Inferior:**

For bounded sequence:
- $\limsup a_n = \lim_{n \to \infty} \sup_{k \geq n} a_k$
- $\liminf a_n = \lim_{n \to \infty} \inf_{k \geq n} a_k$

Always $\liminf a_n \leq \limsup a_n$.
Sequence converges iff $\liminf = \limsup = L$.

**Cesàro Summation:**
For convergent sequences: $\lim a_n = L$ implies $\lim \frac{1}{n}\sum_{k=1}^n a_k = L$.

**Advanced Limit Computation:**

*Problem (JEE Advanced 2020):* Evaluate $\lim_{n \to \infty} n \left(\sin \frac{1}{\sqrt{n}} - \frac{1}{\sqrt{n}}\right)$.

Using series expansion for small $x$: $\sin x = x - x^3/6 + O(x^5)$.
With $x = 1/\sqrt{n}$:
$\sin(1/\sqrt{n}) = \frac{1}{\sqrt{n}} - \frac{1}{6n^{3/2}} + O(n^{-5/2})$.
So $n(\sin(1/\sqrt{n}) - \frac{1}{\sqrt{n}}) = n(-\frac{1}{6n^{3/2}} + O(n^{-5/2})) = -\frac{1}{6\sqrt{n}} + O(n^{-3/2})$.
As $n \to \infty$, this $\to 0$.

But wait, we need limit of $n(\sin(1/\sqrt{n}) - 1/\sqrt{n})$.
Actually $\sin(1/\sqrt{n}) \approx 1/\sqrt{n} - (1/\sqrt{n})^3/6 = 1/\sqrt{n} - 1/(6n^{3/2})$.
So $\sin(1/\sqrt{n}) - 1/\sqrt{n} \approx -1/(6n^{3/2})$.
Multiply by $n$: $\approx -1/(6n^{1/2}) \to 0$.

So answer is 0.

Actually let me verify with Stolz-Cesàro or L'Hôpital type approach for sequences:
Define $b_n = n(\sin(1/\sqrt{n}) - 1/\sqrt{n})$.
As $n \to \infty$, $b_n \to 0$.

*Problem 2:* Find $\lim_{n \to \infty} \frac{1}{n^2} \sum_{k=1}^n k \sin(k/n)$.

Interpret as Riemann sum: $\frac{1}{n} \sum_{k=1}^n (k/n) \sin(k/n) \cdot (1/n)$? No.
$\frac{1}{n^2} \sum_{k=1}^n k \sin(k/n) = \frac{1}{n} \sum_{k=1}^n (k/n) \sin(k/n)$.
As $n \to \infty$, this $\to \int_0^1 x \sin x \, dx$.

Compute $\int_0^1 x \sin x \, dx = [-x \cos x]_0^1 + \int_0^1 \cos x \, dx = -\cos 1 + 1 + [\sin x]_0^1 = 1 - \cos 1 + \sin 1$.

So limit $= \sin 1 + 1 - \cos 1$.

**JEE Advanced Patterns (2018–2024):**
- Recurrence relations solving via characteristic equation is frequent
- Monotone convergence with bounding arguments is common
- Stolz-Cesàro theorem applications appeared in 2021, 2023
- Limit inferior and superior are tested less frequently but appear
- Riemann sum interpretation of summations appeared in 2020

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
