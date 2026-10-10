---
exam: manipal-met
examName: "Manipal MET"
subject: mathematics
subjectName: "Mathematics"
topic: mathem-011
topicName: "Differential Calculus"
weight: 5
country: india
generated: "2026-09-25T06:20:00"
lastUpdated: "2026-09-25"
---

# Differential Calculus — Manipal MET

Differential Calculus is a weight-5 topic inside the MET B.Tech Mathematics section. The 2026 official paper carries 15 MCQs plus 5 Numerical Answer Type (NAT) questions on Mathematics, and Differential Calculus is the chapter that anchors the highest-weight mathematics sub-strand along with Coordinate Geometry and Integral Calculus. The MET 2026 official syllabus explicitly bundles limits, continuity, differentiability, derivatives of standard functions (polynomial, rational, trigonometric, inverse trigonometric, logarithmic, exponential), the algebra of derivatives (sum, product, quotient), the chain rule, derivatives up to second order, and the rate-of-change / monotonicity / maxima-minima applications under the "Limit, Continuity and Differentiability" heading. Marking is +4 for a correct MCQ, −1 for a wrong MCQ, +4 for a correct NAT with no negative marking.

> Verify the live syllabus, paper pattern, and any in-year changes on https://manipal.edu/mu-met before planning around the figures below.

### 🟢 Lite — Quick Review (1h-1d)

**Limits — first-principles toolkit.** Limit notation $\lim_{x \to a} f(x) = L$ means $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to $a$. Standard forms:
- $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$
- $\lim_{x \to 0} \dfrac{\tan x}{x} = 1$
- $\lim_{x \to 0} \dfrac{1 - \cos x}{x^2} = \dfrac{1}{2}$
- $\lim_{x \to 0} \dfrac{e^x - 1}{x} = 1$
- $\lim_{x \to 0} \dfrac{\ln(1 + x)}{x} = 1$
- $\lim_{x \to \infty} \left(1 + \dfrac{1}{x}\right)^x = e$

Indeterminate forms $0/0$, $\infty/\infty$, $0 \cdot \infty$, $\infty - \infty$, $1^\infty$, $0^0$, $\infty^0$ need transformation (factor, rationalise, L'Hôpital, substitution).

**Continuity at a point.** $f$ is continuous at $x = a$ if three conditions all hold: (i) $f(a)$ is defined, (ii) $\lim_{x \to a} f(x)$ exists, (iii) $\lim_{x \to a} f(x) = f(a)$. Polynomials, rationals where defined, trigonometric, exponential, and logarithmic functions are continuous on their domains. Jump discontinuities and removable discontinuities are the two common failure modes.

**Differentiability at a point.** $f$ is differentiable at $x = a$ if $\lim_{h \to 0} \dfrac{f(a+h) - f(a)}{h}$ exists. Differentiability implies continuity; continuity does not imply differentiability (corner or cusp). The classic non-differentiable point: $|x|$ at $x = 0$.

**Standard derivatives to memorise.**

| Function | Derivative |
|---|---|
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\ln x$ | $1/x$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\arcsin x$ | $1/\sqrt{1-x^2}$ |
| $\arccos x$ | $-1/\sqrt{1-x^2}$ |
| $\arctan x$ | $1/(1+x^2)$ |

**Rules of differentiation.**
- Constant multiple: $(cf)' = cf'$
- Sum/difference: $(f \pm g)' = f' \pm g'$
- Product: $(fg)' = f'g + fg'$
- Quotient: $\left(\dfrac{f}{g}\right)' = \dfrac{f'g - fg'}{g^2}$
- Chain rule (composite): $\dfrac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)$

**L'Hôpital's rule.** For $0/0$ or $\infty/\infty$: $\lim \dfrac{f(x)}{g(x)} = \lim \dfrac{f'(x)}{g'(x)}$, provided the limit on the right exists. Apply only after confirming the form is indeterminate.

**Increasing/decreasing functions.** $f$ is strictly increasing on an interval if $f'(x) > 0$ there; strictly decreasing if $f'(x) < 0$. Maxima occur where $f'(x) = 0$ and $f'$ changes from $+$ to $-$; minima where $f'$ changes from $-$ to $+$. The second-derivative test: local maximum if $f''(x_0) < 0$, local minimum if $f''(x_0) > 0$.

### 🟡 Standard — Exam Prep (3d-3w)

**Worked Example 1 — Limit via standard form.**
Evaluate $\lim_{x \to 0} \dfrac{\sin 5x}{x}$.
Substitute $u = 5x$, then $x = u/5$ and as $x \to 0$, $u \to 0$: $\lim_{u \to 0} \dfrac{\sin u}{u/5} = 5 \lim_{u \to 0} \dfrac{\sin u}{u} = 5$.

**Worked Example 2 — L'Hôpital on $1^\infty$.**
Evaluate $\lim_{x \to 0} (1 + 3x)^{1/x}$.
This is the $1^\infty$ form. Take the log: $L = \lim_{x \to 0} \dfrac{\ln(1 + 3x)}{x}$. Apply L'Hôpital: $L = \lim_{x \to 0} \dfrac{3/(1 + 3x)}{1} = 3$. Then the original limit equals $e^L = e^3$.

**Worked Example 3 — Differentiability check.**
Is $f(x) = \begin{cases} x^2 \sin(1/x) & x \ne 0 \\ 0 & x = 0 \end{cases}$ differentiable at $x = 0$?
$f'(0) = \lim_{h \to 0} \dfrac{f(h) - f(0)}{h} = \lim_{h \to 0} \dfrac{h^2 \sin(1/h)}{h} = \lim_{h \to 0} h \sin(1/h)$. Since $|h \sin(1/h)| \le |h| \to 0$, the limit is $0$. So $f'(0) = 0$ exists — $f$ is differentiable at $0$ despite $\sin(1/x)$ being wildly oscillatory away from $0$.

**Worked Example 4 — Maxima/minima applied.**
A rectangular sheet of perimeter $20\,\text{m}$ is to be made into an open box by removing squares of side $x$ from each corner and folding up the sides. Find $x$ that maximises the volume.
Box dimensions: $(5 - 2x)(5 - 2x) \cdot x$, where the original $10 \times 10$ sheet (half of $20\,\text{m}$ perimeter as a $10 \times 10$ sheet is conventional, but the problem as given has perimeter $20$, so each side $\le 10$ minus $2x$ at each corner is correct only if sheet is $10 \times 10$ — assume square sheet of side $5\,\text{m}$). Then $V(x) = (5 - 2x)^2 x$. Differentiate: $V'(x) = (5 - 2x)^2 - 4x(5 - 2x) = (5 - 2x)[(5 - 2x) - 4x] = (5 - 2x)(5 - 6x)$. Set $V'(x) = 0$: $x = 5/2$ (degenerate, $V = 0$) or $x = 5/6$. $V''(5/6) < 0$, so $x = 5/6\,\text{m}$ gives maximum volume. $V_{\max} = (5 - 5/3)^2 \cdot (5/6) = (10/3)^2 \cdot (5/6) = (100/9)(5/6) = 500/54 \approx 9.26\,\text{m}^3$.

**Practice Set.**
1. Find $\lim_{x \to \pi/2} \dfrac{\cos x}{x - \pi/2}$. (Answer: $-1$, via L'Hôpital.)
2. Differentiate $y = \ln(\sin x^2)$ with respect to $x$. ($y' = \dfrac{2x \cos x^2}{\sin x^2}$.)
3. Find the rate of change of the area of a circle with respect to its radius when $r = 4\,\text{cm}$. ($dA/dr = 2\pi r = 8\pi\,\text{cm}^2/\text{cm}$.)

### 🔴 Deep — Mastery (1mo+)

**Continuity versus differentiability — the full landscape.** A function can be continuous everywhere and differentiable nowhere (the Weierstrass function is the classical pathological example — its graph has no tangent at any point). For practical MET purposes, the only corner of this landscape you need to navigate is: which functions are continuous on their domains (everything built from polynomials, exponentials, logs, trigs), and where they fail to be differentiable (corners like $|x|$ at $0$, vertical tangents like $x^{1/3}$ at $0$, cusp points like $x^{2/3}$ at $0$). The failure-mode list is what exam questions actually probe.

**Higher-order derivatives and Leibniz's rule.** Leibniz's formula generalises the product rule to $n$-th derivatives: $(fg)^{(n)} = \sum_{k=0}^n \binom{n}{k} f^{(k)} g^{(n-k)}$. For example, the second derivative of $x^2 \sin x$ is $(x^2)''\sin x + 2(x^2)'(\sin x)' + (x^2)(\sin x)'' = 2\sin x + 4x\cos x - x^2 \sin x$. The formula becomes useful when one factor has zero high-order derivatives — for $x^2$, derivatives above second vanish, simplifying the sum.

**L'Hôpital's rule — limitations.** L'Hôpital applies to $0/0$ and $\infty/\infty$ only — convert other indeterminate forms first. $0 \cdot \infty$ becomes $\infty/\infty$ by flipping one factor. $\infty - \infty$ is converted by common denominator, rationalisation, or substitution. $0^0$, $1^\infty$, $\infty^0$ all reduce to $0/0$ or $\infty/\infty$ via log and exponent. L'Hôpital also requires $g'(x) \ne 0$ near the limit point. And it sometimes loops — derivative may return the same form. In that case, apply L'Hôpital repeatedly until the form resolves.

**Implicit differentiation.** When $y$ is defined implicitly by $F(x, y) = 0$ (e.g. $x^2 + y^2 = 25$), differentiate both sides with respect to $x$, treating $y$ as a function of $x$: $\dfrac{d}{dx} F(x, y(x)) = 0$. Solve for $\dfrac{dy}{dx}$. At the point $(3, 4)$ on the circle: $2x + 2y \cdot y' = 0 \Rightarrow y' = -x/y = -3/4$. The chain rule $\dfrac{d}{dx} F(x, y(x)) = F_x + F_y \cdot y'$ is the formal expression.

**Parametric differentiation.** For $x = x(t)$, $y = y(t)$, the slope of the tangent is $\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt}$ provided $dx/dt \ne 0$. Second derivative: $\dfrac{d^2y}{dx^2} = \dfrac{d}{dt}\left(\dfrac{dy}{dx}\right) \Big/ \dfrac{dx}{dt}$. Useful for cycloid, ellipse-parametrisation, and projectile-motion problems.

**Newton's method and its limits.** Newton's method iterates $x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}$ to find roots of $f(x) = 0$. It converges quadratically when the initial guess is close enough to a simple root. It fails or diverges when $f'(x_n) = 0$ (division by zero) or when the starting point is in the wrong basin of attraction. MET rarely tests Newton's method explicitly, but understanding it sharpens intuition about iterative improvement and the role of $f'$.

## Common traps

1. **Treating $\lim_{x \to a} f(x)$ as $f(a)$ before checking continuity.** They are equal for continuous functions, but the limit can exist even when $f(a)$ is undefined or differently defined (removable discontinuity). Always test the three continuity conditions, not just plug in.
2. **Using L'Hôpital on a non-indeterminate form.** If $\lim_{x \to 0} f(x)/g(x) = 5/3$, no L'Hôpital needed — the limit is $5/3$ directly. Applying the rule incorrectly gives a wrong derivative-based answer.
3. **Confusing $f'(x) = 0$ with a maximum.** $f'(x) = 0$ identifies critical points. Whether each is a maximum, minimum, or inflection point depends on the sign change of $f'$ (or the sign of $f''$). $f'(x_0) = 0$ with $f'$ not changing sign is a stationary point of inflection, not an extremum.
4. **Dropping the chain rule.** $d/dx \sin(x^2) = 2x \cos(x^2)$, not $\cos(x^2)$. Forgetting the inner derivative is the single most common differentiation error on the MET.
5. **Wrong choice of branch for $\arcsin$ or $\arccos$.** The principal value of $\arcsin x$ lies in $[-\pi/2, \pi/2]$; $\arccos x$ in $[0, \pi]$. Outside these intervals, the inverse trig functions have different algebraic signs and domains. MET NAT questions sometimes test the range assumption.
6. **Misreading "rate of change" wording.** "Rate of change of $y$ with respect to $x$" means $dy/dx$, not $\Delta y / \Delta x$. Average rate of change over an interval is the secant slope; instantaneous rate of change is the derivative.

Source for MET 2026 B.Tech Mathematics section pattern (60 questions total, 120 minutes, MCQ +4/−1, NAT +4/0, 15 MCQs + 5 NATs in Mathematics): https://www.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf

## Continue your study

- **[View this topic in your Manipal MET roadmap](/roadmap/?exam=manipal-met&duration=1mo)** — see where "Differential Calculus" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=manipal-met&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Manipal MET exam overview](/exams/manipal-met/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/manipal-met/mathematics/)** — browse sibling topics in this subject

