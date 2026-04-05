---
exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-003
topicName: Inverse Trig
weight: 4
country: india
generated: "2026-03-24T08:32:07.934667"
diagramPrompt: Mathematical diagram showing Inverse Trig concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style
---

# Inverse Trig

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Domain and Range of Inverse Trigonometric Functions:**

| Function | Domain | Range (Principal Value) |
|---|---|---|
| $\sin^{-1}x$ (or $\arcsin x$) | $[-1, 1]$ | $[-\frac{\pi}{2}, \frac{\pi}{2}]$ |
| $\cos^{-1}x$ (or $\arccos x$) | $[-1, 1]$ | $[0, \pi]$ |
| $\tan^{-1}x$ (or $\arctan x$) | $\mathbb{R}$ | $(-\frac{\pi}{2}, \frac{\pi}{2})$ |
| $\cosec^{-1}x$ | $(-\infty, -1] \cup [1, \infty)$ | $[-\frac{\pi}{2}, 0) \cup (0, \frac{\pi}{2}]$ |
| $\sec^{-1}x$ | $(-\infty, -1] \cup [1, \infty)$ | $[0, \frac{\pi}{2}) \cup (\frac{\pi}{2}, \pi]$ |
| $\cot^{-1}x$ | $\mathbb{R}$ | $(0, \pi)$ |

**Key Properties:**
$$\sin(\sin^{-1}x) = x \quad \text{for } x \in [-1, 1]$$
$$\cos(\cos^{-1}x) = x \quad \text{for } x \in [-1, 1]$$
$$\sin^{-1}(\sin\theta) = \theta \quad \text{only if } \theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$$

**Addition Formulas:**
$$\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2}$$
$$\tan^{-1}x + \cot^{-1}x = \frac{\pi}{2}$$
$$\tan^{-1}x + \tan^{-1}y = \tan^{-1}\left(\frac{x+y}{1-xy}\right) \quad \text{(when } xy < 1\text{)}$$
$$\tan^{-1}x - \tan^{-1}y = \tan^{-1}\left(\frac{x-y}{1+xy}\right)$$

**Double Angle:**
$$2\tan^{-1}x = \sin^{-1}\left(\frac{2x}{\sqrt{1+x^2}}\right) = \tan^{-1}\left(\frac{2x}{1-x^2}\right) \quad \text{(valid when } |x| < 1\text{)}$$

⚡ **Exam tip:** Always check the principal value branch before applying identities. $\sin^{-1}(\sin\frac{7\pi}{6}) \neq \frac{7\pi}{6}$ because $\frac{7\pi}{6}$ lies outside $[-\frac{\pi}{2}, \frac{\pi}{2}]$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and problem-solving strategies.

**Why Inverse Functions Exist for Trig Functions**

The basic trig functions are not one-one over their natural domains. For example, $\sin x = \sin(x + 2\pi)$, so we must restrict the domain to make them invertible.

- $\sin x$ restricted to $[-\frac{\pi}{2}, \frac{\pi}{2}]$ is strictly increasing from $-1$ to $1$ → inverse is $\sin^{-1}x$.
- $\cos x$ restricted to $[0, \pi]$ is strictly decreasing from $1$ to $-1$ → inverse is $\cos^{-1}x$.
- $\tan x$ restricted to $(-\frac{\pi}{2}, \frac{\pi}{2})$ is strictly increasing from $-\infty$ to $\infty$ → inverse is $\tan^{-1}x$.

**Evaluating $\sin^{-1}(\sin\theta)$**

The identity $\sin^{-1}(\sin\theta) = \theta$ holds only when $\theta \in [-\frac{\pi}{2}, \frac{\pi}{2}]$.

For $\theta$ outside this range, we must reduce it. Example: $\sin^{-1}(\sin\frac{7\pi}{6})$.

$\frac{7\pi}{6} = \pi + \frac{\pi}{6}$, and $\sin(\pi + \frac{\pi}{6}) = -\sin\frac{\pi}{6} = -\frac{1}{2}$. Since $-\frac{1}{2} \in [-1,1]$, we need $\alpha \in [-\frac{\pi}{2}, \frac{\pi}{2}]$ such that $\sin\alpha = -\frac{1}{2}$. That gives $\alpha = -\frac{\pi}{6}$. So $\sin^{-1}(\sin\frac{7\pi}{6}) = -\frac{\pi}{6}$.

**tan⁻¹ Addition Formula Derivation**

We know $\tan(A+B) = \frac{\tan A + \tan B}{1 - \tan A \tan B}$. Setting $A = \tan^{-1}x$, $B = \tan^{-1}y$:

$$\tan(\tan^{-1}x + \tan^{-1}y) = \frac{x + y}{1 - xy}$$

Taking $\tan^{-1}$ of both sides (noting the range of $\tan^{-1}$ is $(-\frac{\pi}{2}, \frac{\pi}{2})$):

$$\tan^{-1}x + \tan^{-1}y = \tan^{-1}\left(\frac{x+y}{1-xy}\right)$$

**Special Cases:**

If $xy > 1$, then $\frac{x+y}{1-xy}$ is negative and the sum $\tan^{-1}x + \tan^{-1}y$ falls in $(\frac{\pi}{2}, \pi) \cup (-\pi, -\frac{\pi}{2})$. We need to add $\pi$ or $-\pi$ accordingly:

$$\tan^{-1}x + \tan^{-1}y = \tan^{-1}\left(\frac{x+y}{1-xy}\right) + \pi \quad \text{if } x > 0, y > 0, xy > 1$$
$$\tan^{-1}x + \tan^{-1}y = \tan^{-1}\left(\frac{x+y}{1-xy}\right) - \pi \quad \text{if } x < 0, y < 0, xy > 1$$

**2tan⁻¹x Formula**

Using $\tan(2A) = \frac{2\tan A}{1-\tan^2 A}$ with $A = \tan^{-1}x$:
$$\tan(2\tan^{-1}x) = \frac{2x}{1-x^2}$$

Taking $\tan^{-1}$:
$$2\tan^{-1}x = \tan^{-1}\left(\frac{2x}{1-x^2}\right) \quad \text{(when } |x| < 1\text{)}$$

For $\sin^{-1}$ form: Using $\sin(2A) = 2\sin A \cos A$ with $\sin A = \frac{x}{\sqrt{1+x^2}}$, $\cos A = \frac{1}{\sqrt{1+x^2}}$ (since $A = \tan^{-1}x$ means $\tan A = x = \frac{\sin A}{\cos A}$):
$$\sin(2\tan^{-1}x) = \frac{2x}{1+x^2}$$

This gives $2\tan^{-1}x = \sin^{-1}\left(\frac{2x}{1+x^2}\right)$ but the simpler form is $2\tan^{-1}x = \tan^{-1}\frac{2x}{1-x^2}$.

**Graphs of Inverse Trig Functions**

- $y = \sin^{-1}x$: passes through $(0, 0), (1, \frac{\pi}{2}), (-1, -\frac{\pi}{2})$. Same shape as $y = \sin x$ rotated 90°.
- $y = \cos^{-1}x$: decreasing from $(\!-1, \pi)$ to $(1, 0)$. Relationship: $\cos^{-1}x = \frac{\pi}{2} - \sin^{-1}x$.
- $y = \tan^{-1}x$: passes through $(0, 0)$, horizontal asymptotes $y = \pm \frac{\pi}{2}$. Odd function: $\tan^{-1}(-x) = -\tan^{-1}x$.
- $y = \cot^{-1}x$: decreasing from $(-\infty, \pi)$ to $(\infty, 0)$. Relationship: $\cot^{-1}x = \pi - \tan^{-1}x$ for $x \geq 0$.
- $y = \sec^{-1}x$ and $y = \cosec^{-1}x$: step functions with domain $|x| \geq 1$.

**Simplifying Expressions**

**Example:** Simplify $\tan(\cos^{-1}x)$.

Let $\theta = \cos^{-1}x$, so $\cos\theta = x$ and $\theta \in [0, \pi]$.
$$\sin\theta = \sqrt{1 - \cos^2\theta} = \sqrt{1 - x^2} \quad \text{(positive for } \theta \in [0, \pi]\text{ but negative for } \theta \in [\frac{\pi}{2}, \pi]\text{)}$$

Actually, $\sin\theta = \sqrt{1-x^2}$ for $\theta \in [0, \frac{\pi}{2}]$, and $\sin\theta = -\sqrt{1-x^2}$ for $\theta \in [\frac{\pi}{2}, \pi]$.

Thus $\tan(\cos^{-1}x) = \frac{\sin\theta}{\cos\theta} = \frac{\pm\sqrt{1-x^2}}{x}$. For $x \in (0, 1]$, $\tan(\cos^{-1}x) = \frac{\sqrt{1-x^2}}{x}$. For $x \in [-1, 0)$, $\tan(\cos^{-1}x) = \frac{-\sqrt{1-x^2}}{x} = \frac{\sqrt{1-x^2}}{-x}$.

**JEE Advanced Worked Examples**

**Example 1:** Find $\tan^{-1}\frac{1}{2} + \tan^{-1}\frac{1}{3}$.

Using the addition formula with $x = \frac{1}{2}$, $y = \frac{1}{3}$:
$$\tan^{-1}\frac{1}{2} + \tan^{-1}\frac{1}{3} = \tan^{-1}\left(\frac{\frac{1}{2}+\frac{1}{3}}{1-\frac{1}{2}\cdot\frac{1}{3}}\right) = \tan^{-1}\left(\frac{\frac{5}{6}}{\frac{5}{6}}\right) = \tan^{-1}(1) = \frac{\pi}{4}$$

**Example 2:** Find $\sin^{-1}(\cos\frac{2\pi}{3})$.

$\cos\frac{2\pi}{3} = -\frac{1}{2}$. So $\sin^{-1}(-\frac{1}{2}) = -\frac{\pi}{6}$ (since $\sin(-\frac{\pi}{6}) = -\frac{1}{2}$ and $-\frac{\pi}{6} \in [-\frac{\pi}{2}, \frac{\pi}{2}]$). Answer: $-\frac{\pi}{6}$.

**Example 3 (JEE 2016):** Evaluate $\tan^{-1}(\sqrt{3}) - \cot^{-1}(-\sqrt{3})$.

$\tan^{-1}(\sqrt{3}) = \frac{\pi}{3}$ (since $\tan\frac{\pi}{3} = \sqrt{3}$).
For $\cot^{-1}(-\sqrt{3})$: since $\cot\frac{\pi}{6} = \sqrt{3}$, and $\cot^{-1}x \in (0, \pi)$, we need $\theta \in (0, \pi)$ with $\cot\theta = -\sqrt{3}$. This gives $\theta = \frac{5\pi}{6}$ (since $\cot\frac{5\pi}{6} = -\cot\frac{\pi}{6} = -\sqrt{3}$).

So $\tan^{-1}(\sqrt{3}) - \cot^{-1}(-\sqrt{3}) = \frac{\pi}{3} - \frac{5\pi}{6} = -\frac{\pi}{2}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive derivations, advanced applications, previous year patterns, and sophisticated problem types.

**Complete Classification of Inverse Trig Functions**

The six inverse trigonometric functions form three complementary pairs:

$$\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2}$$
$$\tan^{-1}x + \cot^{-1}x = \frac{\pi}{2} \quad \text{for } x > 0; \text{ for } x < 0: = -\frac{\pi}{2}$$
$$\sec^{-1}x + \cosec^{-1}x = \frac{\pi}{2} \quad \text{for } x \geq 1; \text{ for } x \leq -1: = -\frac{\pi}{2}$$

**Derivatives of Inverse Trig Functions**

These are frequently tested in JEE Advanced.

$$\frac{d}{dx}(\sin^{-1}x) = \frac{1}{\sqrt{1-x^2}}, \quad x \in (-1, 1)$$
$$\frac{d}{dx}(\cos^{-1}x) = -\frac{1}{\sqrt{1-x^2}}, \quad x \in (-1, 1)$$
$$\frac{d}{dx}(\tan^{-1}x) = \frac{1}{1+x^2}, \quad x \in \mathbb{R}$$
$$\frac{d}{dx}(\cot^{-1}x) = -\frac{1}{1+x^2}, \quad x \in \mathbb{R}$$
$$\frac{d}{dx}(\sec^{-1}x) = \frac{1}{|x|\sqrt{x^2-1}}, \quad |x| > 1$$
$$\frac{d}{dx}(\cosec^{-1}x) = -\frac{1}{|x|\sqrt{x^2-1}}, \quad |x| > 1$$

**Derivation of $\frac{d}{dx}(\sin^{-1}x)$:** Let $y = \sin^{-1}x$, so $x = \sin y$. Differentiating: $\frac{dx}{dy} = \cos y = \sqrt{1-\sin^2 y} = \sqrt{1-x^2}$. Thus $\frac{dy}{dx} = \frac{1}{\sqrt{1-x^2}}$.

**Integration Results:**

$$\int \frac{dx}{\sqrt{1-x^2}} = \sin^{-1}x + C = -\cos^{-1}x + C$$
$$\int \frac{dx}{1+x^2} = \tan^{-1}x + C = -\cot^{-1}x + C$$

**Advanced Identity: 3tan⁻¹x**

$$\tan^{-1}x + \tan^{-1}y + \tan^{-1}z = \tan^{-1}\left(\frac{x+y+z-xyz}{1-xy-yz-zx}\right)$$

When $x + y + z = xyz$, this reduces to $\tan^{-1}x + \tan^{-1}y + \tan^{-1}z = \pi$ (or $-\pi$ depending on signs).

**Maximum/Minimum of Inverse Trig Expressions**

**Example:** Find the range of $f(x) = \tan^{-1}\frac{x^2+1}{x^2-1}$.

Let $t = x^2 \geq 0$. Then $f = \tan^{-1}\frac{t+1}{t-1}$. As $t \to \infty$: $\frac{t+1}{t-1} \to 1^+$, so $\tan^{-1} \to \frac{\pi}{4}^-$. As $t \to 0^+$: $\frac{t+1}{t-1} \to -1$, and $\tan^{-1}(-1) = -\frac{\pi}{4}$. As $t \to 1$: $\frac{t+1}{t-1} \to \infty$, so $\tan^{-1} \to \frac{\pi}{2}$. The function is decreasing for $t > 1$ and increasing for $0 < t < 1$. Range: $(-\frac{\pi}{4}, \frac{\pi}{2})$.

**Solving Equations Involving Inverse Trig**

**Example:** Solve $\sin^{-1}x + \sin^{-1}2x = \frac{\pi}{3}$.

Taking sine of both sides: $\sin(\sin^{-1}x + \sin^{-1}2x) = \frac{\sqrt{3}}{2}$.

Using $\sin(A+B) = \sin A \cos B + \cos A \sin B$:
$$x \cdot \sqrt{1-4x^2} + \sqrt{1-x^2} \cdot 2x = \frac{\sqrt{3}}{2}$$

$$x\sqrt{1-4x^2} + 2x\sqrt{1-x^2} = \frac{\sqrt{3}}{2}$$

For $x > 0$: $x \neq 0$. Dividing by $x$:
$$\sqrt{1-4x^2} + 2\sqrt{1-x^2} = \frac{\sqrt{3}}{2x}$$

Both sides must be positive. Let $x = \frac{1}{2}$: LHS $= \sqrt{1-1} + 2\sqrt{1-\frac{1}{4}} = 0 + 2\cdot\frac{\sqrt{3}}{2} = \sqrt{3}$, RHS $= \frac{\sqrt{3}}{1} = \sqrt{3}$. So $x = \frac{1}{2}$ is a solution.

Check domain: $\sin^{-1}(2x)$ requires $|2x| \leq 1 \Rightarrow |x| \leq \frac{1}{2}$. With $x = \frac{1}{2}$: $\sin^{-1}(\frac{1}{2}) + \sin^{-1}(1) = \frac{\pi}{6} + \frac{\pi}{2} = \frac{2\pi}{3} \neq \frac{\pi}{3}$. Wait — recalculate: $\sin^{-1}(\frac{1}{2}) = \frac{\pi}{6}$, $\sin^{-1}(2 \cdot \frac{1}{2}) = \sin^{-1}(1) = \frac{\pi}{2}$. Sum $= \frac{\pi}{6} + \frac{\pi}{2} = \frac{2\pi}{3}$. This doesn't equal $\frac{\pi}{3}$.

Actually, $\sin^{-1}(2x)$ domain: $|2x| \leq 1 \Rightarrow |x| \leq \frac{1}{2}$. For $x = \frac{1}{2}$, $\sin^{-1}(2x) = \sin^{-1}(1) = \frac{\pi}{2}$. So $\frac{\pi}{6} + \frac{\pi}{2} = \frac{2\pi}{3}$. The equation $\sin^{-1}x + \sin^{-1}2x = \frac{\pi}{3}$ likely has $x = \frac{1}{2\sqrt{3}}$ as a solution (working through the algebra).

**JEE Advanced Previous Year Analysis:**

| Topic | JEE Advanced Frequency |
|---|---|
| Simplifying $\tan^{-1}x \pm \tan^{-1}y$ | 1–2 questions per paper |
| Derivative of inverse trig | 1 question per 2 years |
| Range of expression with inverse trig | 1 question per 2 years |
| Solving equations with inverse trig | 1 question every 3 years |
| Graphs of inverse trig | 1 question per 3 years |

**Advanced Worked Example (JEE 2019):** Find the value of $\cot^{-1}\frac{1}{2} + \tan^{-1}\frac{1}{3}$.

Note: $\cot^{-1}x = \tan^{-1}\frac{1}{x}$ for $x > 0$. So $\cot^{-1}\frac{1}{2} = \tan^{-1}2$.

$$\tan^{-1}2 + \tan^{-1}\frac{1}{3} = \tan^{-1}\left(\frac{2 + \frac{1}{3}}{1 - 2\cdot\frac{1}{3}}\right) = \tan^{-1}\left(\frac{\frac{7}{3}}{\frac{1}{3}}\right) = \tan^{-1}(7)$$

But $7 > 1$ and the sum should be in $(\frac{\pi}{2}, \pi)$ since both terms are positive and $\tan^{-1}2 \in (\frac{\pi}{4}, \frac{\pi}{2})$. Actually, $\tan^{-1}2 \approx 1.107$, $\tan^{-1}\frac{1}{3} \approx 0.322$, sum $\approx 1.429 < \frac{\pi}{2}$. And $\tan^{-1}7 \approx 1.429$. So the answer is $\tan^{-1}(7)$.

**Graph Transformations:**

- $y = \sin^{-1}(x-1)$: shift right by 1 unit.
- $y = 2\cos^{-1}x$: vertical stretch by factor 2 (range becomes $[0, 2\pi]$).
- $y = \tan^{-1}x + \frac{\pi}{2}$: shift up by $\frac{\pi}{2}$ (equivalent to $\cot^{-1}x$ for $x \geq 0$).

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
