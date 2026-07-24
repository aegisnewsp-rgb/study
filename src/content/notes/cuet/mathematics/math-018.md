---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-018
topicName: Continuity
weight: 3
country: india
generated: "2026-03-29T05:06:05"
lastUpdated: "2026-07-24"
---

# Continuity

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A function $f$ is **continuous at $x = a$** when three conditions all hold: $f(a)$ is defined, $\lim_{x \to a} f(x)$ exists as a finite real number, and $\lim_{x \to a} f(x) = f(a)$. Equivalently, the left-hand limit equals the right-hand limit, and both equal $f(a)$. The function is continuous on $[a,b]$ when it is continuous at every interior point and one-sided continuous at the endpoints.

- **Polynomials, $\sin x$, $\cos x$, $e^x$, $\log x$** are continuous on their natural domains.
- **Algebra rule:** sum, difference, product, and quotient (where denominator ≠ 0) of continuous functions are continuous.
- **Composition rule:** if $g$ is continuous at $a$ and $f$ continuous at $g(a)$, then $f \circ g$ is continuous at $a$.
- **Jump, infinite, and removable** are the three discontinuity types to recognise in CUET MCQs.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Three-Condition Definition
At a point $a$, continuity demands $\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = f(a)$, with all three quantities finite. Failure of any single condition produces a discontinuity. Many students check only the central limit, but the CUET paper routinely tests whether $f(a)$ is defined separately.

#### Types of Discontinuities

| Type | Behaviour at $x = a$ | Example |
| --- | --- | --- |
| Removable | Limit exists but $\neq f(a)$ or $f(a)$ undefined | $f(x) = \frac{x^2 - 1}{x - 1}$ at $x = 1$ |
| Jump | One-sided limits finite but unequal | $f(x) = \begin{cases} x, & x < 0 \\ x+1, & x \ge 0 \end{cases}$ at $x = 0$ |
| Infinite | $\lim_{x \to a} f(x) = \pm\infty$ | $f(x) = \frac{1}{x}$ at $x = 0$ |

#### Algebra and Composition of Continuous Functions
- If $f$ and $g$ are continuous at $a$, then $f \pm g$, $f \cdot g$, and $f/g$ (with $g(a) \neq 0$) are continuous at $a$.
- If $g$ is continuous at $a$ and $f$ continuous at $g(a)$, then $(f \circ g)(x) = f(g(x))$ is continuous at $a$.
- Inverse trigonometric functions like $\sin^{-1}x$, $\cos^{-1}x$, $\tan^{-1}x$ are continuous on their principal restricted domains.

#### Intermediate Value Theorem (IVT)
If $f$ is continuous on $[a,b]$ and $k$ lies between $f(a)$ and $f(b)$, then there exists $c \in (a,b)$ with $f(c) = k$. IVT is the standard tool for proving roots of polynomial or transcendental equations lie in a given interval.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Continuity vs Differentiability
Differentiability at a point **implies** continuity at that point, but the converse is false. The classic counter-example is $f(x) = |x|$ at $x = 0$: it is continuous there, yet the left derivative is $-1$ and the right derivative is $+1$, so $f$ is not differentiable at $0$. In CUET composite questions, a continuity confirmation often precedes a differentiability check — examine both.

#### Worked Example: IVT Application
Consider $f(x) = x^3 + x - 1$ on $[0,1]$. We have $f(0) = -1$ and $f(1) = 1$. Since $f$ is a polynomial (continuous everywhere) and $0$ lies between $-1$ and $1$, by IVT there exists $c \in (0,1)$ with $f(c) = 0$. Bisection between $0.5$ and $1$ would locate $c$ numerically, but existence is guaranteed by IVT alone.

#### Common Traps in CUET MCQs

1. Writing $\lim_{x \to a} f(x) = f(a)$ without separately confirming that $f(a)$ is defined.
2. Treating $0/0$ forms as automatic discontinuities — they may simplify to a finite limit (removable case).
3. Applying IVT on a non-continuous function on $[a,b]$; the theorem requires continuity throughout the closed interval.

#### Practice Prompts
1. Determine the type of discontinuity of $f(x) = \frac{\sin x}{x}$ at $x = 0$ after defining $f(0) = 1$.
2. Use IVT to show the equation $x^5 - 4x - 2 = 0$ has a real root between $1$ and $2$.

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Continuity" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
