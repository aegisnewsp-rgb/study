---
exam: gate
examName: "GATE"
subject: engineering-maths
subjectName: "Engineering-Maths"
topic: engine-006
topicName: "Complex Analysis"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-15"
---

# Complex Analysis

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Complex Analysis** studies functions of the variable $z = x + iy$ where $i = \sqrt{-1}$ and $x, y \in \mathbb{R}$. A function $f(z) = u(x,y) + iv(x,y)$ is **holomorphic** (complex differentiable) in an open domain precisely when it satisfies the **Cauchy–Riemann (CR) equations**:

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}.$$

#### Must-remember formulas

| Result | Statement | Use |
|---|---|---|
| Modulus–argument form | $z^n = r^n(\cos n\theta + i\sin n\theta)$ | Roots, powers |
| Cauchy's integral formula | $f(a) = \frac{1}{2\pi i}\oint_C \frac{f(z)}{z-a}\,dz$ | Extract values inside a contour |
| Residue theorem | $\oint_C f(z)\,dz = 2\pi i \sum_k \text{Res}(f, z_k)$ | Real and contour integrals |

#### High-yield pointers
- CR equations are the **gatekeeper**; only after they hold can you apply Cauchy's theorems.
- Isolated singularities fall into three classes: **removable**, **pole**, **essential**.
- GATE asks NATs on $\oint_C f(z)\,dz$ via residues and MCQs on classifying singularities.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Holomorphicity and the CR equations

A function $f: \mathbb{C} \to \mathbb{C}$ is holomorphic at $z_0$ if the limit $f'(z_0) = \lim_{z \to z_0} \frac{f(z)-f(z_0)}{z-z_0}$ exists finitely, independently of the path. Writing $f = u + iv$ with $u, v$ real-differentiable, the limit exists **iff** both CR equations hold and $u, v$ have continuous partials near $z_0$. If CR holds everywhere on a simply connected domain, $f$ is **analytic** there (equal to its Taylor series).

CR also forces $\nabla^2 u = 0 = \nabla^2 v$, so the real and imaginary parts of any holomorphic function are **harmonic** — a fact examiners test by giving $u$ and asking whether a conjugate $v$ exists.

#### Contour integration

**Cauchy's theorem:** if $f$ is holomorphic inside and on a simple closed contour $C$ in a simply connected domain, then $\oint_C f(z)\,dz = 0$. **Cauchy's integral formula** extends this: for $f$ holomorphic inside $C$, $f(a) = \frac{1}{2\pi i}\oint_C \frac{f(z)}{z-a}\,dz$ for any $a$ enclosed by $C$. Differentiating yields the higher-order formula $f^{(n)}(a) = \frac{n!}{2\pi i}\oint_C \frac{f(z)}{(z-a)^{n+1}}\,dz$.

#### Classification of isolated singularities

For an isolated singularity at $z = a$, expand $f$ in a **Laurent series** $f(z) = \sum_{n=-\infty}^{\infty} a_n (z-a)^n$.

| Type | Behaviour | Coefficient $a_{-1}$ (residue) |
|---|---|---|
| Removable | $\lim_{z\to a} f(z)$ finite | $= 0$ |
| Pole of order $m$ | $(z-a)^m f(z)$ finite and $\ne 0$ | from Laurent term |
| Essential | Laurent tail has infinitely many negative powers | generally $\ne 0$ |

#### Typical GATE patterns
- **NAT (1–2 marks):** evaluate $\oint_C \frac{e^z}{z^2+1}\,dz$ over $|z| = 2$ using the residue theorem.
- **MCQ:** classify the singularity of $e^{1/z}$ at $z = 0$ (essential), or test whether $u = x^2 - y^2$ admits a harmonic conjugate (yes; $v = 2xy + c$).
- **Common trap:** computing the residue of a simple pole via $\lim_{z\to a}(z-a)f(z)$, **not** $\lim_{z\to a} \frac{f(z)}{z-a}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Branch cuts, multi-valuedness, and conformal maps

The functions $\sqrt{z}$ and $\log z$ are not single-valued on all of $\mathbb{C}$. Each has a **branch point** at $z = 0$ (for $\sqrt{z}$) or $z = 0, \infty$ (for $\log z$). Selecting a branch cuts the plane along a ray (commonly the negative real axis, $\arg z \in (-\pi, \pi]$) where $\arg z$ jumps by $2\pi$. GATE statements like "find the principal value of $\log(-1)$" hinge on choosing the principal branch $i\pi$ instead of $-i\pi$ — the latter would be the [0, 2π) branch's value.

**Möbius transformations** $w = \frac{az+b}{cz+d}$ (with $ad-bc \neq 0$) are holomorphic on the Riemann sphere $\mathbb{C} \cup \{\infty\}$ and map circles/lines to circles/lines. They are the building blocks of **conformal maps**, useful in solving Laplace's equation on awkward domains via Schwarz–Christoffel mapping.

#### Computing residues and evaluating real integrals

For a **simple pole** at $a$: $\text{Res}(f,a) = \lim_{z \to a}(z-a)f(z)$. For $f = p(z)/q(z)$ with $q(a)=0$, $q'(a)\neq 0$: $\text{Res}(f,a) = p(a)/q'(a)$.

Two contour recipes GATE often uses:
1. **Semicircular contour in the upper half-plane** for $\int_{-\infty}^{\infty} \frac{P(x)}{Q(x)}dx$ where $\deg Q \geq \deg P + 2$ and $Q$ has no real zeros (Jordan's lemma kills the arc).
2. **Wedge / sector contours** for integrals of $x^{\alpha}$ on $[0,\infty)$; the factor $e^{2\pi i \alpha}$ from circling the origin equals 1 minus the residue contribution, giving a clean real-integral identity.

#### Worked micro-example

Compute $\oint_{|z-1|=1} \frac{\sin z}{(z-1)^3}\,dz$. The contour encloses the pole of order 3 at $z=1$. By Cauchy's formula for derivatives, $\oint \frac{\sin z}{(z-1)^3}\,dz = \frac{2\pi i}{2!}\,\sin^{(2)}(1) = \pi i\,(-\sin 1) = -\pi i \sin 1$.

#### Common mistakes and connections

- Forgetting that $u, v$ must have **continuous partials** — CR alone is necessary but not sufficient without smoothness.
- Treating $(0,0)$ as a pole just because $\log z$ blows up; it is a **branch point**, not an isolated singularity.
- **Links:** Residue theory bridges to **Fourier transforms** (closing contours in upper/lower half-planes) and to **linear systems** (inverse Laplace via Bromwich contour).
- **Exam strategy:** the 3% weight means one solvable NAT earns an easy 2 marks — keep the residue-of-simple-pole formula on a single flashcard.

#### Practice prompts
1. Show that $f(z) = \bar{z}$ is **not** holomorphic anywhere by checking CR at a general point.
2. Evaluate $\oint_{|z|=3} \frac{z+1}{z(z-2)(z+4i)}\,dz$ by listing all enclosed poles and summing residues.

---

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Complex Analysis" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All Engineering-Maths notes](/notes/gate/engineering-maths/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
