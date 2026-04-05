---



exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-14
topicName: "Calculus: Integration"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.670153"
diagramPrompt: "Mathematical diagram showing Calculus: Integration concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"



---
# Calculus: Integration

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your NECO exam.

Integration is the reverse of differentiation. If $F'(x) = f(x)$, then $F(x)$ is an antiderivative (indefinite integral) of $f(x)$.

**Indefinite Integrals:**
$$\int f(x)\, dx = F(x) + C$$
where $C$ is the constant of integration.

**Standard Integrals:**

| Function | Integral |
|---|---|
| $x^n$ ($n \neq -1$) | $\dfrac{x^{n+1}}{n+1} + C$ |
| $\frac{1}{x}$ | $\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $e^{kx}$ | $\dfrac{e^{kx}}{k} + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |
| $\csc^2 x$ | $-\cot x + C$ |

**Rules:**
- $\int [f(x) + g(x)]\, dx = \int f(x)\, dx + \int g(x)\, dx$
- $\int k \cdot f(x)\, dx = k \int f(x)\, dx$

**Definite Integrals:**
$$\int_a^b f(x)\, dx = F(b) - F(a)$$
where $F$ is any antiderivative of $f$.

⚡ **NECO Tip:** For definite integrals, evaluate the antiderivative at both limits and subtract. The area under a curve $y = f(x)$ from $x = a$ to $x = b$ is $\int_a^b f(x)\, dx$. If the curve is below the x-axis, the integral gives a negative value.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for NECO Mathematics students with a few days to months.

**Integration by Substitution:**

Let $u = g(x)$, then $du = g'(x)\, dx$.

*Example:* $\int 2x e^{x^2}\, dx$
- $u = x^2 \Rightarrow du = 2x\, dx$
- $\int 2x e^{x^2}\, dx = \int e^u\, du = e^u + C = e^{x^2} + C$

**Integration by Parts:**
$$\int u\, dv = uv - \int v\, du$$

Choose $u$ using LIATE (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential).

*Example:* $\int x e^x\, dx$
- $u = x \Rightarrow du = dx$
- $dv = e^x dx \Rightarrow v = e^x$
- $\int x e^x\, dx = x e^x - \int e^x\, dx = x e^x - e^x + C = e^x(x-1) + C$

**Area Under a Curve:**
$$\text{Area} = \int_a^b f(x)\, dx$$

If $f(x)$ goes below the x-axis, find where it crosses and split the integral:
$$\text{Net area} = \int_a^{x_0} f(x)\, dx + \int_{x_0}^b f(x)\, dx$$

**Area Between Two Curves:**
$$\text{Area} = \int_a^b [f(x) - g(x)]\, dx \quad \text{where } f(x) \geq g(x)$$

*Example:* Area between $y = x^2$ and $y = x$ from $x = 0$ to $x = 1$:
$$\int_0^1 (x - x^2)\, dx = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6} \text{ square units}$$

⚡ **NECO Common Mistakes:**
- Forgetting the constant $C$ in indefinite integrals
- In integration by parts, choosing $u$ and $dv$ incorrectly — LIATE helps but isn't foolproof
- Not splitting the integral when the curve crosses the x-axis
- Mixing up the formula for area between curves vs area under a single curve

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for NECO and JAMB Mathematics preparation.

**Trigonometric Integrals:**

$$\int \sin^2 x\, dx = \int \frac{1 - \cos 2x}{2}\, dx = \frac{x}{2} - \frac{\sin 2x}{4} + C$$
$$\int \cos^2 x\, dx = \int \frac{1 + \cos 2x}{2}\, dx = \frac{x}{2} + \frac{\sin 2x}{4} + C$$
$$\int \tan x\, dx = -\ln|\cos x| + C = \ln|\sec x| + C$$
$$\int \sec x\, dx = \ln|\sec x + \tan x| + C$$

**Partial Fractions:**

*Example:* $\int \frac{3x+1}{x^2-4}\, dx$
1. $x^2 - 4 = (x+2)(x-2)$
2. $\frac{3x+1}{(x+2)(x-2)} = \frac{A}{x+2} + \frac{B}{x-2}$
3. $3x+1 = A(x-2) + B(x+2)$
4. Setting $x=2$: $7 = 4B \Rightarrow B = \frac{7}{4}$. Setting $x=-2$: $-5 = -4A \Rightarrow A = \frac{5}{4}$
5. $\int \frac{5/4}{x+2}\, dx + \int \frac{7/4}{x-2}\, dx = \frac{5}{4}\ln|x+2| + \frac{7}{4}\ln|x-2| + C$

**Integration of Rational Functions of Trigonometric Functions:**

For integrals of the form $\int \frac{dx}{\sin x}$ or $\int \frac{dx}{\cos x}$, multiply numerator and denominator by the conjugate.

**Reduction Formulas:**

$$\int \sin^n x\, dx = -\frac{\sin^{n-1} x \cos x}{n} + \frac{n-1}{n}\int \sin^{n-2} x\, dx$$

**Volumes of Revolution:**

Volume when $y = f(x)$ is rotated $360°$ about the x-axis from $x=a$ to $x=b$:
$$V = \pi \int_a^b [f(x)]^2\, dx$$

Volume when $x = g(y)$ is rotated $360°$ about the y-axis from $y=c$ to $y=d$:
$$V = \pi \int_c^d [g(y)]^2\, dy$$

**Mean Value Theorem for Integrals:**
If $f(x)$ is continuous on $[a,b]$, there exists $c \in (a,b)$ such that:
$$\int_a^b f(x)\, dx = f(c)(b-a)$$

**NECO/JAMB Patterns:**
- NECO frequently asks: evaluate definite and indefinite integrals; use substitution and integration by parts; find areas under curves and between curves; find volumes of revolution; integrate trigonometric functions

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
