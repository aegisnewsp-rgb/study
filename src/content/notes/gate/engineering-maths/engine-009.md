---
exam: gate
examName: "GATE"
subject: mathematics
subjectName: "Engineering Maths"
topic: engine-009
topicName: "Topic 9"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Numerical Methods — Root Finding

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

## **Three Methods at a Glance**

| Method | Formula | Convergence | Speed |
|---|---|---|---|
| **Bisection** | $c = \dfrac{a+b}{2}$ | Guaranteed (if $f(a)f(b)<0$) | Slow (linear) |
| **Newton-Raphson** | $x_{n+1}=x_n-\dfrac{f(x_n)}{f'(x_n)}$ | Fast when it works | Quadratic |
| **Secant** | $x_{n+1}=x_n-f(x_n)\dfrac{x_n-x_{n-1}}{f(x_n)-f(x_{n-1})}$ | Moderate | Superlinear |

**Convergence criteria (stop when):**
$$\text{Relative error: } \left|\frac{x_{n+1}-x_n}{x_{n+1}}\right| < \epsilon, \quad \text{or } |f(x_n)| < \delta$$

⚡ **GATE trap:** Newton-Raphson **diverges** for some functions and initial guesses. It requires $f'(x_n)\neq 0$ at every step and a good initial guess. Never assume NR will converge.

⚡ **GATE shortcut:** When asked to compare methods, Bisection is **always guaranteed** to converge (under sign-change condition). Newton-Raphson is **fastest** when it works. Secant doesn't need $f'(x)$ but needs two initial points.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

## **The Bisection Method**

### Algorithm
1. Find $a,b$ such that $f(a)\cdot f(b) < 0$ (opposite signs → root in interval by IVT)
2. Compute $c = \dfrac{a+b}{2}$
3. If $f(c)\approx 0$ → root found. Else:
   - If $f(a)\cdot f(c) < 0$ → root in $[a,c]$, set $b=c$
   - If $f(c)\cdot f(b) < 0$ → root in $[c,b]$, set $a=c$
4. Repeat until $|b-a| < \epsilon$ or $|f(c)| < \delta$

### Key Properties
- **Guaranteed convergence** under sign-change condition — always finds root eventually
- **Rate:** Linear (halves interval each step)
- **Error bound after $n$ iterations:** $|x - c_n| \le \dfrac{b-a}{2^n}$
- **How many iterations for accuracy $\epsilon$?** $n \ge \log_2\!\left(\dfrac{b-a}{\epsilon}\right)$

**Example:** For interval $[1,2]$ and tolerance $10^{-3}$: $n \ge \log_2(1000) \approx 10$ iterations.

### Limitations
- Requires $f$ to be continuous on $[a,b]$
- Only works if $f(a)$ and $f(b)$ have opposite signs
- Slow — many iterations needed for high accuracy
- Cannot find roots of multiplicity $>1$ efficiently

## **Newton-Raphson Method (NR)**

### Formula
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

### Geometric Interpretation
Tangent line at $(x_n, f(x_n))$: $y - f(x_n) = f'(x_n)(x - x_n)$. Setting $y=0$ gives the above formula — where the tangent hits the $x$-axis is the next approximation.

### Convergence Properties
- **Order 2** (quadratic): error roughly squares each iteration near the root
- **Conditions for guaranteed convergence:**
  1. $f$ is continuous on $[a,b]$
  2. $f'(x) \neq 0$ on $[a,b]$
  3. $f(a)\cdot f(b) < 0$
  4. $f''$ doesn't change sign (convex/concave)

### Common Pitfalls
| Problem | Example | Symptom |
|---|---|---|
| $f'(x_n)=0$ | $f(x)=x^2$ at $x=0$ | Division by zero |
| Oscillation | $f(x)=x^{1/3}$ near 0 | Cycles without converging |
| Divergence | $f(x)=x^3-x$ with bad $x_0$ | $x_n$ moves away from root |
| Root of multiplicity $m>1$ | $f(x)=(x-1)^2$ at $x=1$ | Slow (linear) convergence |

**Modified NR for multiplicity $m>1$:**
$$x_{n+1} = x_n - m\frac{f(x_n)}{f'(x_n)}$$

## **Secant Method**

### Formula
$$x_{n+1} = x_n - f(x_n)\cdot\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$$

- Doesn't require $f'(x)$ — replaces derivative with finite difference
- Needs **two initial guesses** $x_0, x_1$ (not necessarily bracketing)
- **Order:** approximately $1.618$ (golden ratio) — faster than bisection, slower than NR
- **No guaranteed convergence** — unlike bisection

**GATE comparison question:** Given $f(x)$, compare number of function evaluations needed. Bisection needs 1 eval/step, Secant needs 1 eval/step (reuses old), NR needs 1 eval + 1 derivative eval/step.

## **Error Analysis**

### Absolute and Relative Error
$$\text{Absolute error: } |x_n - x|$$
$$\text{Relative error: } \left|\frac{x_n - x}{x}\right| \approx \left|\frac{x_{n+1}-x_n}{x_{n+1}}\right| \text{ (approximate)}$$

### Order of Convergence
If $\lim_{n\to\infty} \dfrac{|e_{n+1}|}{|e_n|^p} = C \neq 0$, then order is $p$ and constant is $C$.

| Method | Order $p$ | Asymptotic constant $C$ |
|---|---|---|
| Bisection | 1 (linear) | $0.5$ |
| Secant | $\approx 1.618$ | varies |
| Newton-Raphson | 2 (quadratic) | varies |

### Fixed-Point Iteration (GATE variant)
Rewrite $f(x)=0$ as $x=g(x)$. Then iterate $x_{n+1}=g(x_n)$.
$$|e_{n+1}| \approx |g'(r)|\cdot|e_n| \quad \Rightarrow \quad \text{linear if }|g'(r)|<1$$

**Fixed-point form:** For convergence, require $|g'(x)|<1$ for all $x$ in interval containing the root.

## **Common GATE Mistakes to Avoid**
1. Applying Newton-Raphson without checking $f'(x_n)\neq 0$ at each step
2. Using bisection when the function doesn't change sign — IVT condition is mandatory
3. Confusing absolute error $\le(b-a)/2^n$ with relative error
4. Forgetting that secant uses two previous points, not one like NR
5. Not checking that the fixed-point iteration $|g'(r)|<1$ before iterating

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

## **Derivation of Newton-Raphson from Taylor Series**

Starting from $f(x)=0$ and expanding around $x_n$:
$$0 = f(x) = f(x_n) + f'(x_n)(x - x_n) + \frac{f''(x_n)}{2}(x - x_n)^2 + \cdots$$

Neglecting second-order and higher terms:
$$x \approx x_n - \frac{f(x_n)}{f'(x_n)}$$

This gives the NR update. The **quadratic convergence** can be shown from the Taylor remainder:
$$e_{n+1} \approx \frac{f''(r)}{2f'(r)}\cdot e_n^2$$

Hence $p=2$.

## **Rigorous Convergence Criteria for NR**

**Theorem:** If $f\in C^2[a,b]$ and:
1. $f(a)f(b)<0$
2. $f'(x)\neq 0$ on $[a,b]$
3. $f''$ doesn't change sign on $[a,b]$
4. $\max_{x\in[a,b]}\left|\dfrac{f(x)}{f'(x)}\right| \le b-a$ (optional, stronger condition)

Then NR converges for any $x_0\in[a,b]$.

**GATE 2017 pattern:** Questions sometimes ask you to verify convergence conditions for a specific function before applying NR. Always check:
- $f'(x)\neq 0$ on the interval
- Sign consistency of $f''$

## **Multiple Roots and the Modified NR**

If $f(x) = (x-r)^m h(x)$ where $h(r)\neq 0$, then $f'(x) = m(x-r)^{m-1}h(x) + (x-r)^m h'(x)$, and $f'(r)=0$ when $m>1$.

**Problem:** Standard NR slows down to linear convergence at multiple roots.
**Solution — modified NR:**
$$x_{n+1} = x_n - m\frac{f(x_n)}{f'(x_n)}$$

But $m$ (multiplicity) is usually unknown. An alternative is to use:
$$x_{n+1} = x_n - \frac{f(x_n)f'(x_n)}{[f'(x_n)]^2 - f(x_n)f''(x_n)}$$
which has quadratic convergence regardless of multiplicity.

## **Secant Method — Order Derivation**

The secant method is not simply a finite-difference version of NR. Its order $p$ satisfies $p^2 = p + 1$, giving $p \approx 1.618$ (golden ratio).

**Why not $p=2$?** Because the finite difference $f(x_n)-f(x_{n-1})$ uses $x_{n-1}$ which carries an error too. We can't perfectly approximate $f'(x_n)$ with one additional function evaluation.

**Regula Falsi (False Position):**
Similar to secant but **always keeps the bracket** (like bisection). One endpoint stays fixed when the line consistently over/under-estimates. Can get stuck if the function is not well-behaved on one side.

## **System of Non-Linear Equations**

Newton-Raphson extends to $n$ dimensions:
$$\mathbf{x}_{n+1} = \mathbf{x}_n - J(\mathbf{x}_n)^{-1}\mathbf{F}(\mathbf{x}_n)$$

where $J$ is the Jacobian matrix:
$$J_{ij} = \frac{\partial f_i}{\partial x_j}$$

**GATE rarely** asks for full systems, but may ask: "Write the iteration formula for solving $f(x,y)=0, g(x,y)=0$ using Newton-Raphson in 2D." Answer: set up the $2\times 2$ Jacobian and invert it.

## **Horner's Method (GATE connection)**

For evaluating polynomials efficiently, Horner's method reduces multiplications:
$$P(x) = a_nx^n + a_{n-1}x^{n-1}+\cdots+a_0 = (((\cdots(a_nx+a_{n-1})x+a_{n-2})\cdots)x+a_1)x+a_0$$

This is relevant because Newton-Raphson applied to a polynomial uses $f(x_n)$ and $f'(x_n)$ — Horner's method evaluates both **simultaneously** in $O(n)$ time instead of $O(n^2)$.

## **Applied GATE Questions**

**GATE 2020 (Numerical Methods):** "Using Newton-Raphson method with $x_0=1$, find the root of $x^3 - x - 1 = 0$ correct to 3 decimal places."

Iteration:
- $f(1) = -1$, $f'(1) = 3$ → $x_1 = 1 - (-1)/3 = 1.333$
- $f(1.333) \approx -0.185$, $f'(1.333) \approx 4.333$ → $x_2 \approx 1.333 + 0.0427 = 1.376$
- $f(1.376) \approx -0.007$, $f'(1.376) \approx 4.687$ → $x_3 \approx 1.376 + 0.0015 = 1.378$

Answer: $x \approx 1.324$ is the real root (actually $1.324718...$).

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
