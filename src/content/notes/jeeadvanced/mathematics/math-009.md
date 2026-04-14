---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-009
topicName: Indefinite Integrals
weight: 5
country: india
generated: "2026-03-24T08:32:07.937784"
diagramPrompt: "Mathematical diagram showing Indefinite Integrals concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Indefinite Integrals

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Definition:**
An antiderivative: $\int f(x) dx = F(x) + C$ where $F'(x) = f(x)$.

**Basic Formulas:**

1. $\int x^n dx = \frac{x^{n+1}}{n+1} + C$ for $n \neq -1$
2. $\int \frac{1}{x} dx = \ln|x| + C$
3. $\int e^x dx = e^x + C$
4. $\int a^x dx = \frac{a^x}{\ln a} + C$
5. $\int \sin x dx = -\cos x + C$
6. $\int \cos x dx = \sin x + C$
7. $\int \sec^2 x dx = \tan x + C$
8. $\int \csc^2 x dx = -\cot x + C$
9. $\int \frac{dx}{\sqrt{1-x^2}} = \sin^{-1}x + C$ (or $-\cos^{-1}x + C$)
10. $\int \frac{dx}{1+x^2} = \tan^{-1}x + C$

**Integration by Substitution:**
If $u = g(x)$, then $\int f(g(x)) g'(x) dx = \int f(u) du$.

**Integration by Parts:**
$\int u dv = uv - \int v du$.

**LIATE Rule for choosing $u$:** Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.

⚡ **JEE Tip:** For rational functions, use partial fractions. For $\int \frac{P(x)}{Q(x)} dx$ where degree of $P$ >= degree of $Q$, first do polynomial division.

⚡ **Common Mistake:** $\int \frac{1}{x} dx = \ln|x|$, NOT $\ln x$. The absolute value is crucial for $x < 0$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Partial Fractions:**

**Type 1:** Linear distinct factors:
$\frac{A}{x-a} + frac{B}{x-b} + \cdots$

**Type 2:** Repeated linear factors:
$\frac{A}{x-a} + \frac{B}{(x-a)^2} + \cdots$

**Type 3:** Quadratic irreducible factors:
$\frac{Ax+B}{x^2+bx+c}$ → complete square and arctan.

**Standard Substitutions:**

1. **For** $\sqrt{a^2-x^2}$: $x = a\sin\theta$ or $x = a\cos\theta$
2. **For** $\sqrt{x^2+a^2}$: $x = a\tan\theta$ or $x = a\sinh t$
3. **For** $\sqrt{x^2-a^2}$: $x = a\sec\theta$ or $x = a\cosh t$
4. **For** $\frac{1}{\sqrt{a^2-x^2}}$: $x = a\sin\theta$

**Trigonometric Substitutions:**

For $\sqrt{a^2-bx^2}$, use $x = \frac{a}{b}\sin\theta$.

**Worked Examples:**

*Example 1:* Evaluate $\int \frac{x^2+1}{x^3+3x} dx$.

First check degrees: degree numerator 2, denominator 3, so proper fraction.
$\frac{x^2+1}{x(x^2+3)} = \frac{A}{x} + \frac{Bx+C}{x^2+3}$.
So $x^2+1 = A(x^2+3) + (Bx+C)x = A x^2 + 3A + Bx^2 + Cx$.
Equating coefficients: $x^2$: $1 = A+B$, constant: $1 = 3A$.
So $A = 1/3$, and $B = 1 - 1/3 = 2/3$. $C = 0$.
Thus $\int \frac{x^2+1}{x^3+3x} dx = \int \frac{1/3}{x} dx + \int \frac{(2/3)x}{x^2+3} dx = \frac{1}{3}\ln|x| + \frac{1}{3}\ln|x^2+3| + C = \frac{1}{3}\ln|x(x^2+3)| + C$.

Wait, checking: $\int \frac{Bx}{x^2+3} dx = \frac{B}{2}\ln|x^2+3|$.
So with $B=2/3$: $\frac{2}{3} \cdot \frac{1}{2} = 1/3$. ✓.

*Example 2 (JEE 2022):* Evaluate $\int \sin(\ln x) dx$.

Let $I = \int \sin(\ln x) dx$.
Substitute $t = \ln x$, so $x = e^t$, $dx = e^t dt$.
$I = \int e^t \sin t dt$.

Now use integration by parts twice:
$\int e^t \sin t dt = e^t \sin t - \int e^t \cos t dt$.
$\int e^t \cos t dt = e^t \cos t - \int e^t (-\sin t) dt = e^t \cos t + \int e^t \sin t dt$.
So $I = e^t \sin t - [e^t \cos t + I]$ → $I = e^t \sin t - e^t \cos t - I$ → $2I = e^t(\sin t - \cos t)$.
$I = \frac{e^t}{2}(\sin t - \cos t) + C = \frac{x}{2}[\sin(\ln x) - \cos(\ln x)] + C$.

*Example 3:* Evaluate $\int \frac{dx}{\sqrt{x^2+4x+5}}$.

Complete the square: $x^2+4x+5 = (x+2)^2 + 1$.
So $\int \frac{dx}{\sqrt{(x+2)^2+1}}$.
Let $u = x+2$, $du = dx$.
$= \int \frac{du}{\sqrt{u^2+1}} = \ln|u + \sqrt{u^2+1}| + C = \ln|x+2 + \sqrt{x^2+4x+5}| + C$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Reduction Formulas:**

For $I_n = \int \sin^n x dx$ or similar, derive recurrence.
For example: $I_n = \int \sin^n x dx = -\frac{\sin^{n-1}x \cos x}{n} + \frac{n-1}{n} I_{n-2}$.

**Integration of Special Functions:**

1. **Elliptic Integrals:** $\int \frac{dx}{\sqrt{1-k^2\sin^2 x}}$ cannot be expressed in elementary functions.
2. **Exponential Integral:** $\text{Ei}(x) = \int_{-\infty}^x \frac{e^t}{t} dt$.
3. **Error Function:** $\text{erf}(x) = \frac{2}{\sqrt{\pi}} \int_0^x e^{-t^2} dt$.

**Advanced Techniques:**

**1. Weierstrass Substitution:**
$t = \tan(x/2)$ converts rational functions of $\sin x$ and $\cos x$ to rational functions of $t$:
$\sin x = \frac{2t}{1+t^2}$, $\cos x = \frac{1-t^2}{1+t^2}$, $dx = \frac{2dt}{1+t^2}$.

**2. Differential Binomials:**
$\int x^m (a+bx^n)^p dx$ where $m, n, p$ are constants.
This is expressible in elementary functions when:
- $p$ is an integer: expand using binomial theorem
- $(m+1)/n$ is an integer: use substitution $u = (a+bx^n)^{p/q}$
- $(m+1)/n + p$ is an integer: use substitution $u = (a+bx^n)^{-p/q}$

**Advanced Problems:**

*Problem (JEE Advanced 2023):* Evaluate $\int \frac{\cos^6 x}{\sin^2 x} dx$.

Simplify: $\frac{\cos^6 x}{\sin^2 x} = \frac{(1-\sin^2 x)^3}{\sin^2 x}$ using $\cos^2 x = 1 - \sin^2 x$?
No: $\cos^6 x = (\cos^2 x)^3 = (1-\sin^2 x)^3$.
So integrand $= \frac{(1-\sin^2 x)^3}{\sin^2 x} = \frac{1 - 3\sin^2 x + 3\sin^4 x - \sin^6 x}{\sin^2 x} = \csc^2 x - 3 + 3\sin^2 x - \sin^4 x$.

So $\int \csc^2 x dx - 3\int dx + 3\int \sin^2 x dx - \int \sin^4 x dx$.
$= -\cot x - 3x + 3\int \frac{1-\cos 2x}{2} dx - \int (\sin^2 x)^2 dx$.
Continue with reductions.

*Problem 2:* Evaluate $\int \frac{dx}{x^4+1}$.

Factor $x^4+1 = (x^2+\sqrt{2}x+1)(x^2-\sqrt{2}x+1)$.
Then use partial fractions:
$\frac{1}{x^4+1} = \frac{Ax+B}{x^2+\sqrt{2}x+1} + \frac{Cx+D}{x^2-\sqrt{2}x+1}$.
Solving gives messy constants but ultimately evaluates to combination of $\tan^{-1}$ and $\ln$ terms.

**JEE Advanced Patterns (2018–2024):**
- Trigonometric integrals with power reduction are very common
- Partial fractions decomposition is essential for rational functions
- Substitution techniques for square roots are frequent
- Integration by parts for exponential-trigonometric combinations
- Reduction formulas for $\int \sin^n x$, $\int x^n e^x$ etc. are often tested

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
