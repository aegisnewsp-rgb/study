---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-007
topicName: Integral Calculus
weight: 5
country: india
generated: "2026-03-24T08:32:07.808175"
diagramPrompt: "Mathematical diagram showing Integral Calculus concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Integral Calculus

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Antiderivative:**
If $F'(x) = f(x)$, then $\int f(x) dx = F(x) + C$, where $C$ is constant of integration.

**Basic Integration Formulas:**

1. $\int x^n dx = \frac{x^{n+1}}{n+1} + C$ (for $n \neq -1$)
2. $\int \frac{1}{x} dx = \ln|x| + C$
3. $\int e^x dx = e^x + C$
4. $\int a^x dx = \frac{a^x}{\ln a} + C$
5. $\int \sin x dx = -\cos x + C$
6. $\int \cos x dx = \sin x + C$
7. $\int \sec^2 x dx = \tan x + C$
8. $\int \csc^2 x dx = -\cot x + C$

**Definite Integral:**
$\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$, where $F$ is antiderivative of $f$.

**Area under Curve:**
$\int_a^b f(x) dx$ gives signed area between $y = f(x)$ and x-axis from $x=a$ to $x=b$.

⚡ **NDA Tip:** For area problems where curve is below x-axis, the integral gives negative value. Take absolute value for actual area. Sometimes easier to split into intervals.

⚡ **Common Mistake:** Don't forget constant of integration $C$ for indefinite integrals. Also $\ln|x|$ uses absolute value, not just $\ln x$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Methods of Integration:**

**1. Substitution (u-substitution):**
When you see composite function, try substitution.
If $u = g(x)$, then $\int f(g(x)) g'(x) dx = \int f(u) du$.

**2. Integration by Parts:**
$\int u dv = uv - \int v du$.
Choose $u$ using LIATE: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.

**3. Partial Fractions:**
For rational functions $\frac{P(x)}{Q(x)}$:
- If degree $P$ >= degree $Q$: polynomial division first
- Factor denominator and resolve into partial fractions

**Standard Substitutions:**

- $\sqrt{a^2-x^2}$: $x = a\sin\theta$ or $x = a\cos\theta$
- $\sqrt{a^2+x^2}$: $x = a\tan\theta$
- $\sqrt{x^2-a^2}$: $x = a\sec\theta$
- $\frac{1}{\sqrt{a^2-x^2}}$: $x = a\sin\theta$

**Definite Integral Properties:**

1. $\int_a^b f(x) dx = -\int_b^a f(x) dx$
2. $\int_a^b f(x) dx + \int_b^c f(x) dx = \int_a^c f(x) dx$
3. Even function: $\int_{-a}^a f(x) dx = 2\int_0^a f(x) dx$ if $f(-x) = f(x)$
4. Odd function: $\int_{-a}^a f(x) dx = 0$ if $f(-x) = -f(x)$

**Worked Examples:**

*Example 1:* Evaluate $\int x e^x dx$.

Using integration by parts: $u = x$, $dv = e^x dx$.
Then $du = dx$, $v = e^x$.
$\int x e^x dx = x e^x - \int e^x dx = x e^x - e^x + C = e^x(x-1) + C$.

*Example 2:* Evaluate $\int_0^1 \frac{dx}{1+x}$.

$\int \frac{dx}{1+x} = \ln|1+x| + C$.
So $\int_0^1 \frac{dx}{1+x} = [\ln(1+x)]_0^1 = \ln 2 - \ln 1 = \ln 2$.

*Example 3:* Find area enclosed by $y = x^2$ and $x = y^2$.

First find intersection: $y = x^2$ and $x = y^2$ means $x = (x^2)^2 = x^4$.
So $x^4 - x = 0$ → $x(x^3-1) = 0$ → $x = 0$ or $x = 1$.
For $x \in [0,1]$, the curve $x = y^2$ gives $y = \sqrt{x}$ (taking positive branch, but area is symmetric).
Actually $y = x^2$ and $y = \sqrt{x}$ (since $x = y^2$ → $y = \pm\sqrt{x}$).
Area $= \int_0^1 (\sqrt{x} - x^2) dx = \left[\frac{2}{3}x^{3/2} - \frac{x^3}{3}\right]_0^1 = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Reduction Formulas:**

For $I_n = \int \sin^n x dx$:
$I_n = -\frac{\sin^{n-1}x \cos x}{n} + \frac{n-1}{n} I_{n-2}$.

Similarly for powers of cosine and for products like $\int \sin^m x \cos^n x dx$.

**Wallis' Formulae:**

$$\int_0^{\pi/2} \sin^n x \, dx = \int_0^{\pi/2} \cos^n x \, dx = \begin{cases} \frac{(n-1)!!}{n!!} \cdot \frac{\pi}{2} & n \text{ even} \\ \frac{(n-1)!!}{n!!} & n \text{ odd} \end{cases}$$

where $n!! = n(n-2)(n-4)\cdots$ (product of all numbers from $n$ down to 1 or 2).

**Double Integrals:**

For $f(x,y)$ over region $R$:
$$\iint_R f(x,y) dA = \int_{x=a}^{b} \int_{y=g_1(x)}^{g_2(x)} f(x,y) dy dx$$

Can swap order of integration if helpful.

**Applications:**

1. **Area:** $A = \int_a^b |f(x)| dx$ or $\iint_R dA$
2. **Volume of revolution:** $V = \pi \int_a^b [f(x)]^2 dx$ (rotate about x-axis)
3. **Centre of mass:** $\bar{x} = \frac{1}{M}\iint_R x \rho(x,y) dA$

**Gamma Function (Extension):**
$$\Gamma(n) = \int_0^{\infty} x^{n-1} e^{-x} dx = (n-1)!$$
for positive integer $n$.

**Advanced Problems:**

*Problem:* Evaluate $\int_0^{\pi/2} \frac{\sin^{p-1} x \cos^{q-1} x}{\sin^{p+q} x} dx$ or similar Beta function integrals.

Using substitution $t = \tan x$ often simplifies.

*Problem:* Find $\int \sec x dx$.

Multiply numerator and denominator by $(\sec x + \tan x)$:
$\int \sec x dx = \int \frac{\sec x(\sec x + \tan x)}{\sec x + \tan x} dx = \int \frac{\sec^2 x + \sec x \tan x}{\sec x + \tan x} dx$.
Let $u = \sec x + \tan x$, then $du = (\sec x \tan x + \sec^2 x) dx$.
So $\int \sec x dx = \int \frac{du}{u} = \ln|u| + C = \ln|\sec x + \tan x| + C$.

**NDA Exam Pattern:**
- NDA Mathematics paper has 120 marks
- Integral calculus usually 10-15 marks
- Focus on basic techniques and definite integrals
- Area and volume applications are common
- Reduction formulas less common but appear in advanced problems

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
