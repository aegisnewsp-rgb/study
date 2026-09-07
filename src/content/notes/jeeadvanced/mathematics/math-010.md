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
lastUpdated: "2026-09-07"
diagramPrompt: "Mathematical diagram showing Definite Integrals concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Definite Integrals

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **definite integral** $\int_a^b f(x)\,dx$ is the signed area under $y=f(x)$ above the x-axis on $[a,b]$, defined as the limit of Riemann sums. The **Newton–Leibniz formula** evaluates it as $\int_a^b f(x)\,dx = F(b) - F(a)$, where $F$ is any antiderivative of $f$.

- **Limits $a$ and $b$ are fixed numbers**, unlike the indefinite integral $\int f(x)\,dx = F(x) + C$.
- **Sign matters**: positive area above the x-axis, negative below; splitting at zeros gives actual area.
- **Even/odd shortcuts**: $\int_{-a}^{a} f = 2\int_0^a f$ if $f$ is even; $= 0$ if $f$ is odd.
- **King's property**: $\int_0^{nT} f(x)\,dx = n\int_0^T f(x)\,dx$ for any periodic $f$ with period $T$.

| Must-remember fact | Statement |
| --- | --- |
| Newton–Leibniz | $\int_a^b f(x)\,dx = F(b)-F(a)$ |
| Sign reversal | $\int_a^b = -\int_b^a$ |
| Even function | $\int_{-a}^a f(x)\,dx = 2\int_0^a f(x)\,dx$ |

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and the Fundamental Theorem

A Riemann sum partitions $[a,b]$ into $n$ subintervals of width $\Delta x = (b-a)/n$, picks a sample point $x_r^*$ in each, and forms $\sum_{r=1}^n f(x_r^*)\,\Delta x$. The **definite integral** is the limit of this sum as $n \to \infty$, provided the limit exists. For continuous $f$ on $[a,b]$, the **Fundamental Theorem of Calculus** guarantees existence and gives the Newton–Leibniz evaluation $F(b)-F(a)$.

#### Core properties

Linearity, additivity $\int_a^b = \int_a^c + \int_c^b$ for $a<c<b$, and sign reversal are the workhorses of JEE Advanced manipulation. When you substitute $x = \phi(t)$, you must change both the integrand and the limits; forgetting the limit change is the single most common mark-losing error.

#### Standard problem types

- Reduction of $\sum_{r=1}^n f(r)$ to a definite integral (limit of sums).
- Substitution-driven evaluation, e.g. $\int_0^1 x(1-x)^5\,dx$ via $u = 1-x$.
- Periodic integrands on $[0, nT]$ using King's property.
- Even/odd symmetry after a suitable shift, e.g. $\int_0^{2\pi} \cos^n x\,dx$.

| Property | Formula | When to use |
| --- | --- | --- |
| Newton–Leibniz | $F(b)-F(a)$ | $f$ continuous, antiderivative $F$ known |
| Substitution | Change $x$ and both limits | Composite integrand |
| King's rule | $\int_0^{nT} f = n\int_0^T f$ | $f$ has period $T$ |
| Even/odd | $\int_{-a}^a f = 2\int_0^a f$ or $0$ | Symmetric interval |

- Always check continuity on $(a,b)$ before applying Newton–Leibniz directly.
- Split at every root of $f(x)$ before computing area, not signed value.
- Keep limits in the same variable after substitution; never leave $x$ in $u$-form.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Improper integrals and discontinuities

When $f$ blows up at an interior point $c \in (a,b)$ or the upper limit is $\infty$, split the integral at the offending point and take a limit. For $\int_0^1 x^{-1/2} e^x\,dx$, $f$ stays bounded so the standard antiderivative works; for $\int_0^1 x^{-1}\,dx$, you must write $\lim_{\varepsilon\to 0^+}\int_\varepsilon^1 x^{-1}\,dx$ and recognise the divergent logarithm.

#### Leibniz rule and the Beta–Gamma link

Differentiation under the integral sign gives $\dfrac{d}{db}\int_a^{g(b)} f(x)\,dx = f(g(b))\cdot g'(b)$. Forgetting the $g'(b)$ factor is a recurring JEE Advanced trap. On the larger canvas, definite integrals produce the Beta function $B(m,n)=\int_0^1 x^{m-1}(1-x)^{n-1}\,dx$ and Gamma function $\Gamma(n)=\int_0^\infty x^{n-1}e^{-x}\,dx$, which appear inside multi-step sums and probability questions.

#### Worked micro-example

Evaluate $\int_0^{\pi} x\sin x\,dx$. Integration by parts with $u=x$, $dv=\sin x\,dx$ gives $-x\cos x + \int \cos x\,dx = -x\cos x + \sin x$. Apply limits: $[-x\cos x + \sin x]_0^{\pi} = -(-\pi)(-1) + 0 - 0 = -\pi$. The sign comes from $\cos\pi=-1$; the answer is negative, which is correct since $x\sin x > 0$ on $(0,\pi)$ but the standard antiderivative introduces the sign.

#### Practice prompts

1. Compute $\int_0^{2\pi} \dfrac{1}{1+\sin^2 x}\,dx$ using King's property with $T=\pi$.
2. Evaluate $\sum_{r=1}^{n}\dfrac{r}{n^2+r^2}$ as a Riemann sum, then find $\lim_{n\to\infty}$ of the sum.

| Edge case | Correct handling |
| --- | --- |
| Discontinuity at $c\in(a,b)$ | Split at $c$, take one-sided limits |
| Upper limit is function $g(b)$ | Multiply by $g'(b)$ after differentiating |
| Periodic $f$, non-integer $nT$ | Use King's property with $nT = \text{quotient}\cdot T + \text{remainder}$ |
| Even integrand, asymmetric limits | Shift first: $u = x - c$ to centre at origin |

- In Paper 2, definite integrals frequently combine with area and differential-equation contexts.
- Allocate roughly 3–4 minutes per definite-integral item during the three-hour window.

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Definite Integrals" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
