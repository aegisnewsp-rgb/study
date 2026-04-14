---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-10
topicName: Integration and Definite Integrals
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.068914"
diagramPrompt: "Mathematical diagram showing Integration and Definite Integrals concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Integration and Definite Integrals

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Integration** — Key Facts

Integration is the reverse process of differentiation. If F'(x) = f(x), then ∫f(x)dx = F(x) + C, where C is the constant of integration.

**Basic Integrals:**

| Function | Integral |
|----------|----------|
| $x^n$ | $\frac{x^{n+1}}{n+1} + C$ (n ≠ -1) |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |
| $\csc^2 x$ | $-\cot x + C$ |
| $e^x$ | $e^x + C$ |
| $\frac{1}{x}$ | $\ln|x| + C$ |
| $a^x$ | $\frac{a^x}{\ln a} + C$ |

⚡ **ECAT Exam Tip:** Don't forget +C (constant of integration) for indefinite integrals! For definite integrals, the limits take the place of +C.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding...

**Methods of Integration:**

**1. Substitution:**

When integral is of form ∫f(g(x)) · g'(x) dx, let u = g(x)
$$\int f(g(x)) \cdot g'(x) dx = \int f(u) du$$

Example: ∫sin³x cosx dx
Let u = sinx, then du = cosx dx
∫u³ du = u⁴/4 + C = sin⁴x/4 + C

**2. Integration by Parts:**

$$\int u dv = uv - \int v du$$

LIATE Rule (choose u in this order):
- **L**ogarithmic
- **I**nverse trigonometric
- **A**lgebraic
- **T**rigonometric
- **E**xponential

Example: ∫x eˣ dx
Let u = x, dv = eˣdx → du = dx, v = eˣ
∫x eˣ dx = x eˣ - ∫eˣ dx = x eˣ - eˣ + C = eˣ(x-1) + C

**3. Partial Fractions:**

For rational functions where degree of numerator < degree of denominator:

**Case 1: Linear factors**
$$\frac{1}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$$

**Case 2: Repeated linear factors**
$$\frac{1}{(x-a)^2} = \frac{A}{x-a} + \frac{B}{(x-a)^2}$$

**Definite Integrals:**

$$\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$$

⚡ **ECAT Exam Tip:** When using substitution in definite integrals, change the limits (a and b) to u-values. Don't forget this — many students forget and get wrong answers.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Advanced Integration Techniques:**

**1. Trigonometric Substitutions:**

| Expression | Substitution | Identity |
|------------|--------------|----------|
| $\sqrt{a^2-x^2}$ | x = a sinθ | $1 - \sin^2\theta = \cos^2\theta$ |
| $\sqrt{a^2+x^2}$ | x = a tanθ | $1 + \tan^2\theta = \sec^2\theta$ |
| $\sqrt{x^2-a^2}$ | x = a secθ | $\sec^2\theta - 1 = \tan^2\theta$ |

**2. Integration of Special Functions:**

$$\int \frac{1}{\sqrt{a^2-x^2}} dx = \sin^{-1}\frac{x}{a} + C$$
$$\int \frac{1}{a^2+x^2} dx = \frac{1}{a}\tan^{-1}\frac{x}{a} + C$$
$$\int \frac{1}{x\sqrt{x^2-a^2}} dx = \frac{1}{a}\sec^{-1}\frac{x}{a} + C$$

**3. Reduction Formulas:**

For integrals of powers of trig functions:
$$\int \sin^n x dx = -\frac{\sin^{n-1}x \cos x}{n} + \frac{n-1}{n}\int \sin^{n-2}x dx$$

$$\int \cos^n x dx = \frac{\cos^{n-1}x \sin x}{n} + \frac{n-1}{n}\int \cos^{n-2}x dx$$

**4. Integration of Rational Functions by Partial Fractions:**

**Case 3: Irreducible quadratic factors**
$$\frac{px+q}{(x-a)(x^2+bx+c)} = \frac{A}{x-a} + \frac{Bx+C}{x^2+bx+c}$$

**Case 4: Repeated quadratic factors**
$$\frac{px+q}{(x^2+bx+c)^2} = \frac{Ax+B}{x^2+bx+c} + \frac{Cx+D}{(x^2+bx+c)^2}$$

**5. Area Under Curves:**

Area between curve y = f(x) and x-axis from a to b:
$$A = \int_a^b |f(x)| dx$$

Area between two curves:
$$A = \int_a^b |f(x) - g(x)| dx$$

**6. Volume of Revolution:**

Using disc method:
$$V = \pi \int_a^b [f(x)]^2 dx \quad \text{(rotate around x-axis)}$$
$$V = \pi \int_a^b [f(y)]^2 dy \quad \text{(rotate around y-axis)}$$

Using shell method (rotate around y-axis):
$$V = 2\pi \int_a^b x f(x) dx$$

**7. Improper Integrals:**

When limits are infinite or function is discontinuous:

$$\int_a^\infty f(x) dx = \lim_{b\to\infty} \int_a^b f(x) dx$$

$$\int_{-\infty}^\infty f(x) dx = \lim_{a\to-\infty}\lim_{b\to\infty}\int_a^b f(x) dx$$

**8. Differential Equations:**

First order separable:
$$\frac{dy}{dx} = f(x)g(y) \Rightarrow \int \frac{dy}{g(y)} = \int f(x) dx$$

Linear first order:
$$\frac{dy}{dx} + Py = Q \Rightarrow \text{Integrating Factor} = e^{\int P dx}$$

⚡ **ECAT 2024 Analysis:** Questions on integration by parts (LIATE rule) and area under curves are frequently tested. For definite integrals with absolute values, always identify where f(x) = 0 to split the integral. The volume of revolution is also in the ECAT syllabus.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
