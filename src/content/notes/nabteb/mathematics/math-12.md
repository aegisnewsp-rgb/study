---



exam: nabteb
examName: NABTEB
subject: mathematics
subjectName: Mathematics
topic: math-12
topicName: "Calculus: Integration"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.552486"
diagramPrompt: "Mathematical diagram showing Calculus: Integration concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"



---
# Calculus: Integration

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your NABTEB exam.

Integration is the reverse process of differentiation. If you differentiate $f(x)$ and get $f'(x)$, then integrating $f'(x)$ brings you back to $f(x)$, up to a constant $C$. The indefinite integral of $f(x)$ is written as $\int f(x)\, dx$.

**Core Formulas to Memorise**

| Function | Integral |
|---|---|
| $\int x^n\, dx$ | $\dfrac{x^{n+1}}{n+1} + C$ (where $n \neq -1$) |
| $\int \frac{1}{x}\, dx$ | $\ln|x| + C$ |
| $\int e^x\, dx$ | $e^x + C$ |
| $\int \sin x\, dx$ | $-\cos x + C$ |
| $\int \cos x\, dx$ | $\sin x + C$ |
| $\int e^{kx}\, dx$ | $\dfrac{e^{kx}}{k} + C$ |
| $\int a^x\, dx$ | $\dfrac{a^x}{\ln a} + C$ |

**Key Rules**
- **Constant multiple:** $\int k \cdot f(x)\, dx = k \int f(x)\, dx$
- **Sum/difference:** $\int [f(x) \pm g(x)]\, dx = \int f(x)\, dx \pm \int g(x)\, dx$

**Definite Integrals** — These have limits $a$ and $b$:
$$\int_a^b f(x)\, dx = F(b) - F(a)$$
where $F(x)$ is any antiderivative of $f(x)$.

⚡ **NABTEB Exam Tip:** When you see "evaluate" or "find the area under the curve between $x=a$ and $x=b$", they're asking for a definite integral. Always substitute the limits correctly — upper limit first, then subtract lower limit. Watch out for negative areas: if the curve dips below the x-axis, the integral gives a negative value.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding before the NABTEB examination.

**The Fundamental Theorem of Calculus**

The two parts connect differentiation and integration:

1. If $F(x) = \int_a^x f(t)\, dt$, then $F'(x) = f(x)$
2. $\int_a^b f(x)\, dx = F(b) - F(a)$, where $F$ is any antiderivative of $f$

**Integration by Substitution**

When an integral looks complex, try substitution. The idea: let $u = g(x)$, then $du = g'(x)\, dx$.

*Example:* Evaluate $\int 2x \cdot e^{x^2}\, dx$

- Let $u = x^2$, so $du = 2x\, dx$
- The integral becomes $\int e^u\, du = e^u + C = e^{x^2} + C$

**Integration by Parts**

For products of functions, use: $\int u\, dv = uv - \int v\, du$

Choose $u$ using **LIATE** (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) as a guide.

*Example:* Evaluate $\int x e^x\, dx$
- Let $u = x$, $dv = e^x dx$, so $du = dx$, $v = e^x$
- $\int x e^x\, dx = x e^x - \int e^x\, dx = x e^x - e^x + C = e^x(x - 1) + C$

**Applications of Integration**

- **Area under a curve:** $\int_a^b y\, dx$ gives the net area between $y = f(x)$ and the x-axis from $x=a$ to $x=b$
- **Area between two curves:** $\int_a^b [f(x) - g(x)]\, dx$ (where $f(x) \geq g(x)$)
- **Volume of revolution:** $V = \pi \int_a^b [f(x)]^2\, dx$ rotated about the x-axis

**NABTEB Common Mistakes:**
- Forgetting the constant of integration $C$ in indefinite integrals
- Mixing up limits in definite integrals
- For integration by parts, choosing the wrong $u$ and $dv$ — LIATE helps
- Not checking if the region is entirely above the x-axis before interpreting a negative integral as an area

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough NABTEB preparation.

**Derivation of Basic Integration Formulas**

Integration is the inverse of differentiation. Starting from the power rule for differentiation:

If $\dfrac{d}{dx}\left(\dfrac{x^{n+1}}{n+1}\right) = x^n$ (for $n \neq -1$), then:

$$\int x^n\, dx = \frac{x^{n+1}}{n+1} + C$$

For the case $n = -1$: $\dfrac{d}{dx}(\ln x) = \dfrac{1}{x}$, so $\int \dfrac{1}{x}\, dx = \ln|x| + C$.

**Integration of Trigonometric Functions**

$$\int \sin x\, dx = -\cos x + C, \quad \int \cos x\, dx = \sin x + C$$
$$\int \sec^2 x\, dx = \tan x + C, \quad \int \csc^2 x\, dx = -\cot x + C$$
$$\int \tan x\, dx = -\ln|\cos x| + C, \quad \int \cot x\, dx = \ln|\sin x| + C$$

**Integration of $\sec x$ and $\csc x$:**

$$\int \sec x\, dx = \ln|\sec x + \tan x| + C$$
$$\int \csc x\, dx = \ln|\csc x - \cot x| + C$$

**Partial Fractions**

For rational functions where the denominator can be factorised:

Example: $\int \dfrac{2x+1}{x^2 - 5x + 6}\, dx$

1. Factor denominator: $x^2 - 5x + 6 = (x-2)(x-3)$
2. Write: $\dfrac{2x+1}{(x-2)(x-3)} = \dfrac{A}{x-2} + \dfrac{B}{x-3}$
3. Solve: $2x+1 = A(x-3) + B(x-2)$; setting $x=3$: $7=B$; setting $x=2$: $5=A(-1) \Rightarrow A=-5$
4. Integral: $-5\int \frac{dx}{x-2} + 7\int \frac{dx}{x-3} = -5\ln|x-2| + 7\ln|x-3| + C$

**Reduction Formulas**

For powers of trigonometric functions:
$$\int \sin^n x\, dx = -\frac{\sin^{n-1} x \cos x}{n} + \frac{n-1}{n}\int \sin^{n-2} x\, dx$$

**Numerical Integration (Trapezium Rule)**

When an integral cannot be solved analytically:
$$\int_a^b f(x)\, dx \approx \frac{h}{2}\left[f(x_0) + 2f(x_1) + 2f(x_2) + \cdots + 2f(x_{n-1}) + f(x_n)\right]$$
where $h = \frac{b-a}{n}$ and $x_i = a + ih$.

**NABTEB Patterns:**
- Questions on definite integrals and areas under curves appear frequently in Section B
- Always verify antiderivatives by differentiating your answer
- Integration by substitution typically appears as a two-step process

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
