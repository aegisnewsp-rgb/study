---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-010
topicName: Definite Integrals
weight: 5
country: india
generated: "2026-03-24T08:32:07.938261"
diagramPrompt: "Mathematical diagram showing Definite Integrals concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Definite Integrals

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Definition:**
$\int_a^b f(x) \, dx = F(b) - F(a)$ where $F'(x) = f(x)$ (Fundamental Theorem of Calculus).

**Key Properties:**

1. $\int_a^a f(x) \, dx = 0$
2. $\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx$
3. $\int_a^b [f(x) \pm g(x)] \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx$
4. $\int_a^b cf(x) \, dx = c \int_a^b f(x) \, dx$
5. $\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$ (additivity)

**Even and Odd Functions:**

- If $f$ is even ($f(-x) = f(x)$): $\int_{-a}^a f(x) \, dx = 2 \int_0^a f(x) \, dx$
- If $f$ is odd ($f(-x) = -f(x)$): $\int_{-a}^a f(x) \, dx = 0$

**Limits as Bounds:**

If limits equal, integral is 0 regardless of function. Watch for $\int_0^a 0 \, dx = 0$.

⚡ **JEE Tip:** For definite integrals with symmetric limits, always check if the integrand is even or odd before integrating. This can save significant work.

⚡ **Common Mistake:** $\int_a^b f(x) \, dx$ is a NUMBER, not a function of anything. It depends only on $a, b$ and $f$, not on the variable (can use any dummy variable): $\int_a^b f(x) dx = \int_a^b f(t) dt$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Substitution in Definite Integrals:**

If $x = g(t)$, then $\int_{x=a}^{x=b} f(x) dx = \int_{t=g^{-1}(a)}^{t=g^{-1}(b)} f(g(t)) g'(t) dt$.

**Integration by Parts:**
$\int_a^b u \, dv = [uv]_a^b - \int_a^b v \, du$.

**Wallis Formulae:**
$$\int_0^{\pi/2} \sin^n x \, dx = \int_0^{\pi/2} \cos^n x \, dx = \begin{cases} \frac{(n-1)!!}{n!!} \cdot \frac{\pi}{2} & n \text{ even} \\ \frac{(n-1)!!}{n!!} & n \text{ odd} \end{cases}$$

where double factorial: $n!! = n \cdot (n-2) \cdot (n-4) \cdots$.

**Definite Integral as Area:**

$\int_a^b f(x) dx$ represents the signed area between $y=f(x)$, the x-axis, and lines $x=a$ and $x=b$.

**Worked Examples:**

*Example 1:* Evaluate $\int_0^1 x e^x \, dx$.

Using integration by parts:
Let $u = x, dv = e^x dx$. Then $du = dx, v = e^x$.
$\int x e^x dx = x e^x - \int e^x dx = x e^x - e^x + C = e^x(x-1) + C$.

So $\int_0^1 x e^x dx = [e^x(x-1)]_0^1 = e^1(0) - e^0(-1) = 0 + 1 = 1$.

*Example 2 (JEE 2022):* Evaluate $\int_0^{\pi/2} \sin^4 x \, dx$.

Using Wallis formula with $n=4$ (even):
$\int_0^{\pi/2} \sin^4 x \, dx = \frac{(4-1)!!}{4!!} \cdot \frac{\pi}{2} = \frac{3!!}{4!!} \cdot \frac{\pi}{2}$.
$3!! = 3 \cdot 1 = 3$.
$4!! = 4 \cdot 2 = 8$.
So integral $= \frac{3}{8} \cdot \frac{\pi}{2} = \frac{3\pi}{16}$.

Alternatively using power-reduction: $\sin^4 x = \frac{3 - 4\cos 2x + \cos 4x}{8}$.
$\int_0^{\pi/2} \sin^4 x dx = \frac{1}{8}[3x - 2\sin 2x + \frac{1}{4}\sin 4x]_0^{\pi/2} = \frac{1}{8}[3 \cdot \frac{\pi}{2} - 0] = \frac{3\pi}{16}$.

*Example 3:* Evaluate $\int_{-1}^1 \frac{x^3 + x^2}{1+x^2} dx$.

Split: $\int_{-1}^1 \frac{x^3}{1+x^2} dx + \int_{-1}^1 \frac{x^2}{1+x^2} dx$.
First term: $f(x) = \frac{x^3}{1+x^2}$. Note $f(-x) = \frac{-x^3}{1+x^2} = -f(x)$, odd function.
So $\int_{-1}^1 f(x) dx = 0$.
Second term: $g(x) = \frac{x^2}{1+x^2}$. Note $g(-x) = g(x)$, even function.
So $\int_{-1}^1 g(x) dx = 2\int_0^1 \frac{x^2}{1+x^2} dx = 2\int_0^1 \frac{x^2+1-1}{1+x^2} dx = 2\int_0^1 (1 - \frac{1}{1+x^2}) dx = 2[x - \tan^{-1}x]_0^1 = 2(1 - \pi/4) = 2 - \pi/2$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Leibniz Rule for Differentiation under Integral Sign:**
If $I(\alpha) = \int_{a(\alpha)}^{b(\alpha)} f(x,\alpha) dx$, then:
$$I'(\alpha) = \int_{a}^{b} \frac{\partial f}{\partial \alpha} dx + f(b,\alpha) b'(\alpha) - f(a,\alpha) a'(\alpha)$$

**Gamma and Beta Functions:**

- $\Gamma(n) = \int_0^{\infty} x^{n-1} e^{-x} dx = (n-1)!$ for positive integer $n$
- $\Gamma(s) = 2\int_0^{\infty} t^{2s-1} e^{-t^2} dt$
- $\int_0^{\pi/2} \sin^{m-1} x \cos^{n-1} x dx = \frac{1}{2} B\left(\frac{m}{2}, \frac{n}{2}\right) = \frac{\Gamma(m/2)\Gamma(n/2)}{2\Gamma((m+n)/2)}$

**Special Definite Integrals:**

1. $\int_0^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$ (Gaussian)
2. $\int_0^1 \frac{\ln(1+x)}{x} dx = \frac{\pi^2}{6}$
3. $\int_0^{\pi} \frac{x \sin x}{1+\cos^2 x} dx = \frac{\pi^2}{4}$

**Advanced Problems:**

*Problem (JEE Advanced 2021):* Evaluate $\int_0^{\pi/2} \frac{dx}{1 + \tan^3 x}$.

Let $I = \int_0^{\pi/2} \frac{dx}{1 + \tan^3 x}$.
Use substitution $x \to \pi/2 - x$: $\tan(\pi/2 - x) = \cot x = 1/\tan x$.
$I = \int_0^{\pi/2} \frac{dx}{1 + \cot^3 x} = \int_0^{\pi/2} \frac{\tan^3 x}{1 + \tan^3 x} dx$.

Adding: $2I = \int_0^{\pi/2} \left(\frac{1}{1+\tan^3 x} + \frac{\tan^3 x}{1+\tan^3 x}\right) dx = \int_0^{\pi/2} 1 dx = \frac{\pi}{2}$.
So $I = \frac{\pi}{4}$.

*Problem 2:* Evaluate $\int_0^1 \frac{\ln(1+x)}{1+x^2} dx$.

Let $I = \int_0^1 \frac{\ln(1+x)}{1+x^2} dx$.
Use $x = \tan\theta$ substitution: $dx = \sec^2\theta d\theta$, $1+x^2 = \sec^2\theta$.
When $x=0$, $\theta=0$. When $x=1$, $\theta=\pi/4$.
$I = \int_0^{\pi/4} \frac{\ln(1+\tan\theta)}{\sec^2\theta} \cdot \sec^2\theta d\theta = \int_0^{\pi/4} \ln(1+\tan\theta) d\theta$.

Now use property $\int_0^a f(x) dx = \int_0^a f(a-x) dx$:
$I = \int_0^{\pi/4} \ln(1+\tan(\pi/4-\theta)) d\theta = \int_0^{\pi/4} \ln(1+\frac{1-\tan\theta}{1+\tan\theta}) d\theta = \int_0^{\pi/4} \ln\left(\frac{1+\tan\theta}{1+\tan\theta}\right) d\theta$... wait.
$\tan(\pi/4 - \theta) = \frac{1 - \tan\theta}{1 + \tan\theta}$.
So $1 + \tan(\pi/4 - \theta) = 1 + \frac{1-\tan\theta}{1+\tan\theta} = \frac{2}{1+\tan\theta}$.
Thus $\ln(1+\tan(\pi/4-\theta)) = \ln 2 - \ln(1+\tan\theta)$.
So $I = \int_0^{\pi/4} [\ln 2 - \ln(1+\tan\theta)] d\theta = \frac{\pi}{4}\ln 2 - I$.
Thus $2I = \frac{\pi}{4}\ln 2$ → $I = \frac{\pi}{8}\ln 2$.

**JEE Advanced Patterns (2018–2024):**
- Properties of definite integrals (even/odd, periodicity) are frequently tested
- Wallis formulas for $\int \sin^n x$ and $\int \cos^n x$ are essential
- Leibniz rule for differentiation under integral sign appeared in 2020, 2023
- Reduction formulas are common for higher powers of trig functions
- Special integrals (Gaussian, logarithmic) appear in advanced problems

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
