---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-004
topicName: Limits
weight: 5
country: india
generated: "2026-03-24T08:32:07.935122"
lastUpdated: "2026-09-16"
diagramPrompt: "Mathematical diagram showing Limits concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Limits

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **limit** describes the value a function approaches as its input nears a point. Formally, $\lim_{x \to c} f(x) = L$ means that for every $\varepsilon > 0$ there exists $\delta > 0$ such that $0 < |x - c| < \delta$ implies $|f(x) - L| < \varepsilon$.

| Term | Notation | Meaning |
|------|----------|---------|
| Left-hand limit | $\lim_{x \to c^-} f(x)$ | Behaviour of $f$ as $x$ approaches $c$ from values less than $c$ |
| Right-hand limit | $\lim_{x \to c^+} f(x)$ | Behaviour of $f$ as $x$ approaches $c$ from values greater than $c$ |
| Limit at infinity | $\lim_{x \to \infty} f(x)$ | End behaviour as $x$ grows without bound |
| Indeterminate form | $0/0$, $\infty/\infty$, $1^\infty$, $0^0$ | A form that does **not** directly yield a value |

- A limit at a finite point exists only when both one-sided limits are equal **and finite**.
- L'Hôpital's rule applies only to $0/0$ and $\infty/\infty$ forms after algebraic confirmation.
- All trigonometric standard limits require $x$ in **radians**.

> 💡 **High-Yield Memory Hook:** "**LDRS**" — **L**eft = **D**oes **R**ight = **S**ame? If LHL and RHL agree, the limit exists. Pair this with the 0/0 mantra: **F**actorise, **R**ationalise, **S**ubstitute, **L**'Hôpital — try them in that order before reaching for derivatives.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Existence Criterion

The single condition that separates a "limit exists" answer from a "limit does not exist" answer at a finite point is the **equality of the two one-sided limits**. For $\lim_{x \to c} f(x) = L$ to hold, the function must approach the same real number $L$ from both sides, and $L$ itself must be finite.

If $\lim_{x \to c^-} f(x) = 2$ and $\lim_{x \to c^+} f(x) = 2$, then $\lim_{x \to c} f(x) = 2$. But if one side gives $2$ and the other gives $-2$, the two-sided limit fails to exist, even though $f(c)$ might be defined or even equal to $3$.

#### Standard Limits Every JEE Aspirant Must Memorise

| Limit | Value | Condition |
|-------|-------|-----------|
| $\lim_{x \to 0} \dfrac{\sin x}{x}$ | $1$ | $x$ in radians |
| $\lim_{x \to 0} \dfrac{\tan x}{x}$ | $1$ | $x$ in radians |
| $\lim_{x \to 0} \dfrac{1 - \cos x}{x^2}$ | $\dfrac{1}{2}$ | $x$ in radians |
| $\lim_{x \to 0} \dfrac{\sin^{-1} x}{x}$ | $1$ | $x$ in radians |
| $\lim_{x \to 0} (1 + x)^{1/x}$ | $e$ | – |
| $\lim_{x \to \infty} \left(1 + \dfrac{a}{x}\right)^{x}$ | $e^{a}$ | $a$ constant |

#### Algebraic Toolkit for Indeterminate Forms

The seven indeterminate forms $0/0$, $\infty/\infty$, $0 \cdot \infty$, $\infty - \infty$, $0^0$, $\infty^0$, $1^\infty$ are not values — they are signals that direct substitution fails.

1. **Factorise** the numerator and denominator, then cancel the common $0$-factor.
2. **Rationalise** using conjugates when square roots create the $0/0$ form.
3. **Substitute** a standard limit (e.g. write $1 - \cos x$ as $2\sin^2(x/2)$).
4. **Apply L'Hôpital's rule** only after confirming $0/0$ or $\infty/\infty$: $\lim \dfrac{f(x)}{g(x)} = \lim \dfrac{f'(x)}{g'(x)}$, where $f'$ and $g'$ are derivatives with respect to $x$.

#### Concept Comparison Matrix

| Feature | L'Hôpital's Rule | Squeeze (Sandwich) Theorem |
|---------|------------------|----------------------------|
| Applicable forms | $0/0$ and $\infty/\infty$ only | Any limit when $g(x) \le f(x) \le h(x)$ near $c$ |
| What it needs | Differentiability of $f$ and $g$ around $c$ | Two simpler bounding functions with equal limits |
| Typical use | Algebraic and exponential limits | Bounded oscillating functions like $x \sin(1/x)$ |
| Failure mode | Used on $0 \cdot \infty$ or $\infty - \infty$ without conversion | Wrong bounding direction (lower bound exceeds upper) |

| Feature | Continuity at $x = c$ | Limit at $x = c$ |
|---------|------------------------|-------------------|
| Definition | $\lim_{x \to c} f(x) = f(c)$ | $\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L$ finite |
| Requires $f(c)$ defined? | Yes | No |
| Implies limit exists? | Yes | Not necessarily (limit can exist with a hole) |

#### 🎯 Exam-Level Worked Problem

**Question:** Evaluate $\displaystyle\lim_{x \to 0} \dfrac{\tan x - \sin x}{x^3}$.

#### Solution:

Direct substitution gives $0/0$, so algebraic manipulation is needed.

Step 1 — Write $\tan x = \dfrac{\sin x}{\cos x}$:
$$\lim_{x \to 0} \frac{\sin x}{x} \cdot \frac{1 - \cos x}{x^2 \cos x}$$

Step 2 — Apply standard limits ($\sin x / x \to 1$ and $(1-\cos x)/x^2 \to 1/2$) and note $\cos x \to 1$:
$$= 1 \cdot \frac{1/2}{1} = \frac{1}{2}$$

Step 3 — Verify dimensional/scaling check: numerator behaves like $x \cdot (x^2/2) = x^3/2$, denominator is $x^3$, confirming the ratio is $1/2$.

> ⚠️ **Examiner Trap:** Students often rewrite the expression as $\tan x (1 - \cos x)/x^2$, then forget the $\sin x / x$ factor outside, producing $1/2$ with an extra factor of $1$ — getting lucky on numerics but losing the step. Another common slip is using degrees: $\sin(5°)/5° \ne 1$ numerically, so the standard limits silently fail.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Edge Cases and Traps

| Trap / Edge Case | What Goes Wrong | Correct Treatment |
|------------------|-----------------|-------------------|
| $\lim_{x \to 0} \dfrac{\sin(x^2)}{x}$ written as $0$ | Treating $x^2$ as if it were $x$ in the standard formula | $\sin(x^2)/(x^2) \to 1$, then multiply by $x^2/x = x \to 0$ |
| $1^\infty$ form $\left(1 + \dfrac{2}{x}\right)^x$ as $x \to \infty$ | Substituting to get $1^\infty = 1$ | Use $\lim (1 + a/x)^x = e^a$ to get $e^2$ |
| $\lim_{x \to 0} x \sin(1/x)$ | "$\infty \cdot$ undefined" panic | Bound by $-|x| \le x \sin(1/x) \le |x|$; both bounds tend to $0$, so the limit is $0$ |
| $\lim_{x \to \pi/2} \dfrac{\cos x}{x - \pi/2}$ | Substitution gives $0/0$; derivative misapplied | Rewrite $\cos x = \sin(\pi/2 - x)$, then $\sin(\pi/2 - x)/(\pi/2 - x) \to 1$ |
| $\varepsilon$-$\delta$ writing " $x - c < \delta$ " | Drops absolute value, breaking symmetry | Must write $|x - c| < \delta$ |
| Applying L'Hôpital to $\lim_{x \to \infty} (x+1)/x$ | Differentiate to $1/1 = 1$ | Result is correct but method is overkill; the form is $\infty/\infty$ but direct division is faster |

#### Connections to Adjacent Topics

Limits are not a standalone chapter — they seed almost every later calculus concept.

- **Continuity and Differentiability:** A function is differentiable at $c$ only if it is continuous there, which requires the limit to equal $f(c)$.
- **Integration:** Definite integrals are defined as limits of Riemann sums; improper integrals are limits of integrals with one bound tending to $\infty$ or a singularity.
- **Series:** The convergence of an infinite series is itself a limit of partial sums; ratio and root tests rest on limit comparisons.
- **Asymptotes:** Vertical asymptotes occur where the limit is $\pm \infty$; horizontal asymptotes occur where $\lim_{x \to \infty} f(x)$ is finite.

#### ε–δ Intuition for JEE Advanced

JEE Advanced rarely asks for a full ε–δ proof, but conceptual questions test whether you grasp the *two-quantifier* structure: $\varepsilon$ is given first (how close $f(x)$ must be to $L$), and $\delta$ responds (how close $x$ must be to $c$).

- Smaller $\varepsilon$ generally demands smaller $\delta$, but the exact relationship depends on the slope of $f$ near $c$.
- For $f(x) = mx + k$ near $c$, choose $\delta = \varepsilon / |m|$ (when $m \ne 0$).

#### Advanced Practice Prompts

1. Evaluate $\displaystyle\lim_{x \to 0} \left(\dfrac{\sin x}{x}\right)^{1/x^2}$ using $\ln L$ and the standard limit $(1 - \cos x)/x^2 \to 1/2$. *Hint: take the log, expand $\sin x \approx x - x^3/6$, and reach $e^{-1/6}$.*
2. Determine $\displaystyle\lim_{x \to 1} \dfrac{\sqrt[3]{x} - 1}{\sqrt{x} - 1}$ by rationalising with the identities $a - b = (a^3 - b^3)/(a^2 + ab + b^2)$ and $a - b = (a^2 - b^2)/(a + b)$. *Expected value: $2/3$.*

#### Exam-Specific Strategy

In JEE Advanced, Limits contribute about **5–7 %** of Mathematics marks, usually appearing as:

- One single-correct MCQ testing a $0/0$ or $1^\infty$ evaluation.
- One numerical-answer item embedded in a comprehension passage.
- A foundational step inside a Differentiability or Integration problem worth 3–4 marks indirectly.

Time budget per question: roughly **90 seconds** for a direct standard-limit recall, **2–3 minutes** for a $0/0$ requiring factorisation, and **3–4 minutes** for a $1^\infty$ form needing the $e^{\text{limit-of-power}}$ technique.

> 📌 **Formula Check:** In $\lim_{x \to c} f(x) = L$, $x$ and $c$ carry units consistent with $f$'s domain; $L$ inherits the units of $f(x)$. Trigonometric standard limits $\sin x / x \to 1$ and $(1 - \cos x)/x^2 \to 1/2$ are **dimensionless ratios** valid only when $x$ is in radians.

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Limits" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
