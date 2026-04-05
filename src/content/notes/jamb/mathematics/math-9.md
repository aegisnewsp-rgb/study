---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-9
topicName: "Calculus: Integration"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.735350"
diagramPrompt: "Mathematical diagram showing Calculus: Integration concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"



---
# "Calculus: Integration"

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Calculus: Integration** — Quick Facts for JAMB

**Indefinite Integrals:**
Integration is the reverse of differentiation.
- $\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ (for $n \neq -1$)
- $\int \frac{1}{x}\,dx = \ln|x| + C$
- $\int e^x\,dx = e^x + C$
- $\int \sin x\,dx = -\cos x + C$
- $\int \cos x\,dx = \sin x + C$

**Definite Integrals:**
$\int_a^b f(x)\,dx = [F(x)]_a^b = F(b) - F(a)$ where $F'(x) = f(x)$. The constant $C$ cancels out in definite integrals.

**Basic Rules:**
- $\int [f(x) + g(x)]\,dx = \int f(x)\,dx + \int g(x)\,dx$
- $\int k f(x)\,dx = k \int f(x)\,dx$ (constant multiple rule)
- $\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$ (reversing limits changes sign)

⚡ **Exam tip:** Always include the constant of integration $C$ for indefinite integrals. Don't forget it!

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Calculus: Integration** — JAMB UTME Study Guide

**Integration by Substitution:**
For $\int f(g(x)) \cdot g'(x)\,dx$, let $u = g(x)$, then $\int f(u)\,du$.

Example: $\int 2x \cos(x^2)\,dx$. Let $u = x^2$, so $du = 2x\,dx$. $\int \cos(u)\,du = \sin(u) + C = \sin(x^2) + C$.

**Integration by Parts:**
$\int u\,dv = uv - \int v\,du$. Choose $u$ using LIATE: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.

Example: $\int x e^x\,dx$. Let $u = x$ (algebraic), $dv = e^x dx$ (exponential). Then $du = dx$, $v = e^x$. $\int x e^x\,dx = x e^x - \int e^x\,dx = x e^x - e^x + C = e^x(x-1) + C$.

**Trigonometric Integrals:**
- $\int \sin^2 x\,dx = \int \frac{1-\cos 2x}{2}\,dx = \frac{x}{2} - \frac{\sin 2x}{4} + C$
- $\int \cos^2 x\,dx = \int \frac{1+\cos 2x}{2}\,dx = \frac{x}{2} + \frac{\sin 2x}{4} + C$
- $\int \tan x\,dx = -\ln|\cos x| + C = \ln|\sec x| + C$

**Partial Fractions Before Integrating:**
Example: $\int \frac{1}{x^2-1}\,dx$. Partial fractions: $\frac{1}{x^2-1} = \frac{1/2}{x-1} - \frac{1/2}{x+1}$. $\int = \frac{1}{2}\ln|x-1| - \frac{1}{2}\ln|x+1| + C = \frac{1}{2}\ln\left|\frac{x-1}{x+1}\right| + C$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Calculus: Integration** — Comprehensive Mathematics Notes

**Definite Integrals — Area Under a Curve:**

The definite integral $\int_a^b f(x)\,dx$ represents the net signed area between $y = f(x)$ and the x-axis from $x = a$ to $x = b$. Area above the x-axis contributes positively; area below contributes negatively.

For area between two curves: $\int_a^b [f(x) - g(x)]\,dx$ where $f(x) \geq g(x)$ on $[a,b]$.

Example: Find area bounded by $y = x^2$ and $y = 4$.
Intersection: $x^2 = 4$, so $x = -2$ and $x = 2$.
Area = $\int_{-2}^{2} (4 - x^2)\,dx = [4x - x^3/3]_{-2}^{2} = (8 - 8/3) - (-8 + 8/3) = (16/3) - (-16/3) = 32/3$ square units.

**Mean Value Theorem for Integrals:**
If $f(x)$ is continuous on $[a,b]$, then there exists $c \in [a,b]$ such that $\int_a^b f(x)\,dx = f(c)(b-a)$. The average value of $f$ on $[a,b]$ is $\frac{1}{b-a}\int_a^b f(x)\,dx$.

**Volumes of Revolution:**
- About x-axis: $V = \pi \int_a^b [f(x)]^2\,dx$
- About y-axis: $V = 2\pi \int_a^b x f(x)\,dx$

Example: $y = \sqrt{x}$ from $x = 0$ to $x = 4$ rotated about x-axis.
$V = \pi \int_0^4 (\sqrt{x})^2\,dx = \pi \int_0^4 x\,dx = \pi [x^2/2]_0^4 = \pi(8) = 8\pi$ cubic units.

**Integration by Parts — Tabular Method (Repeated Integration by Parts):**

For $\int x^2 e^x\,dx$:
| Sign | D (differentiate) | I (integrate) |
|------|-------------------|---------------|
| $+$ | $x^2$ | $e^x$ |
| $-$ | $2x$ | $e^x$ |
| $+$ | $2$ | $e^x$ |
| $-$ | $0$ | $e^x$ |

Result: $x^2 e^x - 2x e^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$.

**Reduction Formulas:**
For $I_n = \int \sin^n x\,dx$: $I_n = -\frac{\sin^{n-1}x \cos x}{n} + \frac{n-1}{n} I_{n-2}$.
This reduces the power until you can integrate.

**Differential Equations — Separable:**
$\frac{dy}{dx} = f(x)g(y)$. Separate: $\frac{dy}{g(y)} = f(x)\,dx$. Integrate both sides.

Example: $\frac{dy}{dx} = xy$. $\frac{dy}{y} = x\,dx$. $\ln|y| = x^2/2 + C$. $y = Ce^{x^2/2}$.

**Trapezium Rule (Approximate Integration):**
For $n$ strips (even number for accuracy): $\int_a^b f(x)\,dx \approx \frac{h}{2}[y_0 + 2(y_1+y_2+...+y_{n-1}) + y_n]$ where $h = (b-a)/n$.

Example: $\int_0}^{2} x^2\,dx$ with 4 strips. $h = 0.5$. $y_0 = 0$, $y_1 = 0.25$, $y_2 = 1$, $y_3 = 2.25$, $y_4 = 4$.
Approximation: $\frac{0.5}{2}[0 + 2(0.25+1+2.25) + 4] = 0.25[0 + 2(3.5) + 4] = 0.25[7+4] = 0.25[11] = 2.75$.
Exact: $[x^3/3]_0^2 = 8/3 = 2.667$. Error = 0.083.

**JAMB Pattern Analysis:**
JAMB questions frequently test: (1) Basic indefinite integrals, (2) Definite integrals with $F(b)-F(a)$, (3) Integration by substitution, (4) Integration by parts for products of polynomials and exponentials/trig, (5) Finding areas under curves. Common mistake: forgetting the constant $C$ or applying the wrong sign in trigonometric integrals. JAMB 2023: "Evaluate $\int_0^1 (x^2 + 2x)\,dx$." Answer: $[x^3/3 + x^2]_0^1 = (1/3 + 1) - 0 = 4/3$.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
