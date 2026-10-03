---
exam: ecat-eng
examName: "ECAT (Engineering)"
subject: mathematics
subjectName: "Mathematics"
topic: mathem-010
topicName: "Differentiation"
weight: 5
country: pakistan
generated: "2026-09-25T08:20:00"
lastUpdated: "2026-09-25"
---

# Differentiation — ECAT (Engineering)

Differentiation is one of the highest-weight Mathematics topics in ECAT (Engineering). The paper tests limits as the route into the derivative, then standard differentiation rules (power, product, quotient, chain), implicit differentiation, parametric derivatives, applications to tangents and normals, rates of change, and maxima/minima with second-derivative testing. The MCQs lean on three skills: differentiate cleanly under time pressure, recognise the rule a question is testing before reaching for a calculator-style approach, and translate a word problem ("rate of change of volume with respect to time…") into a derivative relationship and solve for the unknown rate. This topic also feeds into Integration (the next topic) and into kinematics for physics.

> Verify the live syllabus, paper pattern, and any in-year changes on https://www.uet.edu.pk/ before planning around the figures below.

### 🟢 Lite — Quick Review (1h-1d)

**Definition.** The derivative of $y = f(x)$ at $x = a$ is

$$f'(a) = \lim_{h \to 0}\frac{f(a+h) - f(a)}{h} = \lim_{x \to a}\frac{f(x) - f(a)}{x - a}.$$

Geometrically, $f'(a)$ is the slope of the tangent to the curve at $x = a$. Physically, it is the instantaneous rate of change of $f$ at $a$.

**Differentiability implies continuity**, but not vice versa: a continuous function with a corner (e.g., $|x|$ at 0) is continuous but not differentiable there. Check the left and right derivatives separately when you suspect a corner.

**Standard derivatives.**

| $f(x)$ | $f'(x)$ |
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

**Three product, quotient, and chain rules.**
- Product: $(uv)' = u'v + uv'$.
- Quotient: $(u/v)' = (u'v - uv')/v^2$.
- Chain: $(f(g(x)))' = f'(g(x)) \cdot g'(x)$.

**Implicit differentiation.** Differentiate both sides with respect to $x$, treating $y$ as a function of $x$, and gather $dy/dx$ on one side. Works for circles, ellipses, hyperbolas, and any curve where solving for $y$ explicitly is hard.

**Higher derivatives.** $f''(x)$ is the derivative of $f'$, $f'''(x)$ is the derivative of $f''$. Useful for second-derivative tests for maxima/minima and for acceleration (which is the second derivative of position with respect to time).

**Quick check before the exam.**
- Can you differentiate $y = \sin(3x^2 + 1)$ without hesitating?
- Can you find $dy/dx$ at a point on the curve $x^2 + y^2 = 25$ using implicit differentiation?
- Can you locate the maximum of a cubic by setting $f'(x) = 0$ and using $f''(x)$ for the test?

### 🟡 Standard — Exam Prep (3d-3w)

#### Limits and the birth of the derivative

The definition $f'(a) = \lim_{h\to 0} [f(a+h)-f(a)]/h$ is the route into everything else. Two classes of limit matter:

**0/0 indeterminate forms** — use algebraic manipulation (factor, conjugate, divide by highest power) or known limits.
- $\lim_{x\to 0}\frac{\sin x}{x} = 1$.
- $\lim_{x\to 0}\frac{1 - \cos x}{x^2} = 1/2$.
- $\lim_{x\to 0}\frac{\tan x}{x} = 1$.
- $\lim_{x\to 0}\frac{e^x - 1}{x} = 1$.
- $\lim_{x\to 0}\frac{\ln(1+x)}{x} = 1$.

**∞/∞ indeterminate forms** — divide numerator and denominator by the highest power of $x$ present, or use L'Hôpital's rule (differentiate top and bottom separately, repeat).

The Squeeze (sandwich) theorem helps with $\lim_{x\to 0} x \sin(1/x) = 0$ since $-|x| \le x\sin(1/x) \le |x|$ and $|x| \to 0$.

#### Power, sum, and constant-multiple rules

Linearity of differentiation: $(af + bg)' = af' + bg'$. This means any polynomial can be differentiated term by term. The chain rule extends linearity through compositions.

Example: $y = 4x^5 - 3x^2 + 7x - 11 \Rightarrow y' = 20x^4 - 6x + 7$.

#### Product, quotient, and chain in practice

**Product rule on $y = x^2 \sin x$:** $y' = 2x \sin x + x^2 \cos x$.

**Quotient rule on $y = \frac{\ln x}{x}$:** $y' = \frac{(1/x)x - \ln x \cdot 1}{x^2} = \frac{1 - \ln x}{x^2}$.

**Chain rule on $y = \sin(3x^2)$:** let $u = 3x^2$, then $y = \sin u$, $du/dx = 6x$, $dy/du = \cos u$, so $dy/dx = \cos(3x^2) \cdot 6x$.

**Nested chain on $y = \ln(\sin(e^x))$:** outer is ln, middle is sin, inner is $e^x$. $dy/dx = \frac{1}{\sin(e^x)} \cdot \cos(e^x) \cdot e^x = e^x \cot(e^x)$.

#### Implicit differentiation

For $x^2 + y^2 = 25$, differentiate both sides with respect to $x$:

$$2x + 2y \frac{dy}{dx} = 0 \;\Rightarrow\; \frac{dy}{dx} = -\frac{x}{y}.$$

At the point $(3, 4)$, $dy/dx = -3/4$. Note the slope is **infinite** at $(0, \pm 5)$ (vertical tangent).

For more complex curves like $x^3 + y^3 = 3axy$ (the Folium of Descartes), implicit differentiation gives

$$3x^2 + 3y^2 \frac{dy}{dx} = 3ay + 3ax \frac{dy}{dx},$$

and solve for $dy/dx$. This is a useful technique whenever solving for $y$ explicitly is messy.

#### Parametric derivatives

A curve given parametrically as $x = x(t)$, $y = y(t)$ has slope

$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}.$$

Second derivative (if needed) is

$$\frac{d^2 y}{dx^2} = \frac{d}{dt}\left(\frac{dy}{dx}\right) \cdot \frac{dt}{dx} = \frac{1}{dx/dt}\cdot \frac{d}{dt}\left(\frac{dy}{dx}\right).$$

Worked parametrics: $x = a\cos t$, $y = a\sin t$ → $dx/dt = -a\sin t$, $dy/dt = a\cos t$, $dy/dx = -\cot t$. For $x = at^2$, $y = 2at$ → $dy/dx = 2a/(2at) = 1/t$.

#### Tangents, normals, and applications

Equation of tangent at $(x_0, y_0)$ on $y = f(x)$: $y - y_0 = f'(x_0)(x - x_0)$. Equation of normal: $y - y_0 = -(1/f'(x_0))(x - x_0)$ (when $f'(x_0) \neq 0$).

**Angle between two curves** at a point of intersection is the angle between their tangents:

$$\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|.$$

For orthogonal curves, $m_1 m_2 = -1$.

#### Rates of change (related rates)

Translate the word problem into an equation involving derivatives, then differentiate both sides with respect to time (or whatever variable changes). Use the chain rule — every derivative picks up a $dt$ (or equivalent).

Template procedure:
1. Draw a diagram, label every quantity and every rate.
2. Write an equation linking the quantities.
3. Differentiate both sides with respect to $t$.
4. Substitute the known values, solve for the unknown rate.

Worked template: a stone dropped into a circular pond makes a circular ripple whose radius grows at $dr/dt = 0.5\,\text{m/s}$. Find $dA/dt$ when $r = 4\,\text{m}$. We have $A = \pi r^2$; differentiate: $dA/dt = 2\pi r \cdot dr/dt = 2\pi(4)(0.5) = 4\pi\,\text{m}^2/\text{s}$.

#### Maxima and minima

First-derivative test: find critical points where $f'(x) = 0$ or $f'(x)$ is undefined; check the sign of $f'$ on either side — change from $+$ to $-$ means a maximum; $-$ to $+$ means a minimum.

Second-derivative test: if $f''(x_0) > 0$, minimum; if $f''(x_0) < 0$, maximum; if $f''(x_0) = 0$, test is inconclusive, fall back to first-derivative test or higher derivatives.

For a closed interval, also check the endpoints. For open intervals or all real numbers, only critical points count.

**Application to word problems.** Define the quantity to optimise as a function of one variable (use the constraints to eliminate other variables), differentiate, set to zero, solve, verify the second derivative, then compute the extremum.

#### Worked example

**Problem.** A closed cylindrical can is to hold $500\,\text{cm}^3$ of liquid. Find the dimensions (radius and height) that minimise the surface area of the metal used.

**Solution.** Let $r$ be the radius and $h$ the height. Volume constraint: $V = \pi r^2 h = 500$, so $h = 500/(\pi r^2)$.

Surface area (top + bottom + side): $A = 2\pi r^2 + 2\pi r h = 2\pi r^2 + 2\pi r \cdot \frac{500}{\pi r^2} = 2\pi r^2 + \frac{1000}{r}$.

Differentiate with respect to $r$: $dA/dr = 4\pi r - 1000/r^2$. Set to zero:

$$4\pi r = \frac{1000}{r^2} \;\Rightarrow\; r^3 = \frac{1000}{4\pi} = \frac{250}{\pi} \;\Rightarrow\; r = \left(\frac{250}{\pi}\right)^{1/3} \approx 4.30\,\text{cm}.$$

Then $h = 500/(\pi r^2) = 500/(\pi \cdot (250/\pi)^{2/3})$. Compute: $r^2 \approx 18.49$, so $h \approx 500/(3.1416 \cdot 18.49) \approx 8.60\,\text{cm}$. So $h = 2r$ — the optimal cylinder has height equal to its diameter, and minimum area $A \approx 349\,\text{cm}^2$.

Second-derivative check: $d^2A/dr^2 = 4\pi + 2000/r^3 > 0$ for all $r > 0$, confirming a minimum.

### 🔴 Deep — Mastery (1mo+)

#### Differentiation of inverse trigonometric functions

These are most easily derived using implicit differentiation on $y = \arcsin x$ (so $\sin y = x$), then $\cos y \cdot dy/dx = 1$, $dy/dx = 1/\cos y = 1/\sqrt{1 - x^2}$ (positive because $y \in [-\pi/2, \pi/2]$). Similarly $\arccos x$ and $\arctan x$. A handy integration identity follows: $\int \frac{dx}{\sqrt{1-x^2}} = \arcsin x + C$, $\int \frac{dx}{1+x^2} = \arctan x + C$.

**Compositions with chain rule.** $\frac{d}{dx}[\arcsin(3x^2)] = \frac{1}{\sqrt{1 - 9x^4}} \cdot 6x = \frac{6x}{\sqrt{1 - 9x^4}}$ (when $|3x^2| < 1$, i.e., $|x| < 1/\sqrt{3}$).

#### Logarithmic differentiation

For $y = [f(x)]^{g(x)}$ or any expression that mixes powers, products and functions, take logs first:

$$\ln y = g(x) \ln f(x).$$

Differentiate:

$$\frac{1}{y}\frac{dy}{dx} = g'(x) \ln f(x) + g(x) \frac{f'(x)}{f(x)},$$

so

$$\frac{dy}{dx} = y \left[g'(x) \ln f(x) + g(x) \frac{f'(x)}{f(x)}\right].$$

This is the cleanest way to handle $y = x^x$, $y = (\sin x)^x$, or any other "variable base, variable exponent" mess.

#### Differentials and linear approximation

The differential $dy = f'(x)\,dx$ is the change in $y$ predicted by the tangent line for an infinitesimal change $dx$ in $x$. This gives the **linear approximation** $\Delta y \approx f'(x)\Delta x$ near a point, which is the basis of error propagation in physics measurements.

For example, if the radius of a sphere is measured as $r = 5.00 \pm 0.01\,\text{cm}$, the volume $V = \tfrac{4}{3}\pi r^3$ has differential $dV = 4\pi r^2\,dr = 4\pi (25)(0.01) = \pi \approx 3.14\,\text{cm}^3$. So $V = 523.6 \pm 3.1\,\text{cm}^3$.

#### Leibniz notation and the chain rule

In physics, the chain rule is often written with the variables explicit:

$$\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}.$$

This is useful for parametric problems (like position, velocity, acceleration in kinematics). For a function of position $y = f(x(t))$:

$$\frac{d^2 y}{dt^2} = \frac{d^2 y}{dx^2}\left(\frac{dx}{dt}\right)^2 + \frac{dy}{dx} \cdot \frac{d^2 x}{dt^2}.$$

ECAT rarely tests the full second-derivative chain but the notation comes up in physics problems.

#### L'Hôpital's rule and limit work

For 0/0 or ∞/∞ indeterminate forms, $\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$, provided the right-hand limit exists. This is a clean way to compute limits like

$$\lim_{x\to 0} \frac{\sin x - x}{x^3} = \lim_{x\to 0} \frac{\cos x - 1}{3x^2} = \lim_{x\to 0} \frac{-\sin x}{6x} = -\frac{1}{6}.$$

L'Hôpital fails on $\infty - \infty$ and $0 \cdot \infty$ until you convert them to 0/0 or ∞/0 (e.g., $f \cdot g = f/(1/g)$).

#### Practice prompts

1. **Chain-rule drill.** Differentiate: (a) $y = \tan^3(2x^2 + 1)$, (b) $y = e^{\sin(\ln x)}$, (c) $y = \arcsin(\sqrt{x})$.
2. **Implicit.** Find $dy/dx$ at $(1, 1)$ on $x^3 + y^3 = 2xy$. (Hint: differentiate both sides, then plug in.)
3. **Parametric.** For $x = t^2 - 1$, $y = t^3 - t$, find $dy/dx$ and $d^2y/dx^2$ at $t = 2$.
4. **Word problem.** A ladder 5 m long leans against a vertical wall. The foot of the ladder slides away from the wall at $0.5\,\text{m/s}$. How fast is the top of the ladder sliding down the wall when the foot is 3 m from the wall?
5. **Optimisation.** A rectangular field is to be fenced on three sides (the fourth side is a wall); the total fencing available is 100 m. Find the dimensions that maximise the enclosed area.

#### Connections to adjacent topics

Differentiation links directly to **Integration** (the Fundamental Theorem of Calculus says the integral is the antiderivative), to **Applications of Derivatives** (the next Mathematics topic: rate of change, maxima/minima, Rolle's and Mean Value Theorems), and to **physics** (velocity is $ds/dt$, acceleration is $dv/dt$, force is the derivative of momentum, and most field quantities are derivatives of a potential). The chain rule, implicit differentiation, and parametric derivatives are reused in every topic that uses calculus.

### Common traps

- **Forgetting the chain rule on composite functions.** $f(g(x))$ differentiates to $f'(g(x)) \cdot g'(x)$, not $f'(x) g'(x)$. Writing $d/dx[\sin(3x)] = \cos(3x)$ (without the inner derivative 3) is the classic error.
- **Mixing up $f'(x) = 0$ with "no slope".** $f'(x) = 0$ means the tangent is horizontal. To say the curve has no slope at a point you need $f'(x)$ to be undefined (a corner, a cusp, or a vertical tangent).
- **Sign errors in the second-derivative test.** Maximum is $f'' < 0$, minimum is $f'' > 0$. Switching them gives the opposite extremum — easily verified by sketching.
- **Forgetting the constraints in optimisation.** A word problem that says "minimise the cost given a fixed volume" needs you to express the cost in one variable using the constraint first. Setting $dC/dx = 0$ on a function of two variables without the constraint gives the wrong answer.
- **Conflating "rate of change" with "slope".** Both are the derivative, but rate-of-change problems are asked as a value at a specific instant (with units of the dependent variable per unit of the independent variable), not a slope at a generic point. Read the question.

---

*Verify all numerical claims against the official ECAT notice at https://ecat.uet.edu.pk/ and the UET admissions portal at https://www.uet.edu.pk/ before planning your revision timetable around them.*

## Continue your study

- **[View this topic in your ECAT (Engineering) roadmap](/roadmap/?exam=ecat-eng&duration=1mo)** — see where "Differentiation" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat-eng&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering) exam overview](/exams/ecat-eng/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat-eng/mathematics/)** — browse sibling topics in this subject

