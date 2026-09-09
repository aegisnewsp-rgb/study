---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-020
topicName: Complex Numbers
weight: 5
country: india
generated: "2026-03-24T08:32:07.943470"
lastUpdated: "2026-09-09"
diagramPrompt: "Mathematical diagram showing Complex Numbers concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Complex Numbers

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **complex number** has the form $z = x + iy$, where $x, y \in \mathbb{R}$ and $i^2 = -1$. Here $x = \operatorname{Re}(z)$, $y = \operatorname{Im}(z)$, and $\mathbb{C}$ is the field extending $\mathbb{R}$. JEE Advanced tests complex numbers through algebraic identities, locus problems, and roots-of-unity questions, usually worth one question per paper.

- **Modulus:** $|z| = \sqrt{x^2 + y^2}$, and the conjugate satisfies $|z|^2 = z \cdot \bar{z}$.
- **De Moivre:** $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$ for integer $n$.
- **Euler form:** $z = re^{i\theta}$, where $r = |z|$ and $\theta = \arg(z)$.
- **Locus shortcut:** $|z - a| = r$ is a circle centred at $a$ with radius $r$; $\arg(z)$ constant is a ray from the origin.

> Tip: Before any modulus manipulation, rewrite $|z|^2$ as $z\bar{z}$ — squaring $|z|$ directly breaks conjugate identities.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Algebraic Foundations

Every complex number is uniquely written as $x + iy$. The conjugate $\bar{z} = x - iy$ unlocks two workhorse identities: $z + \bar{z} = 2\operatorname{Re}(z)$ and $z - \bar{z} = 2i\operatorname{Im}(z)$. These convert "show $z$ is purely imaginary" problems into single-line algebra. Multiplicative inverses exist for all $z \neq 0$ because $\frac{1}{z} = \frac{\bar{z}}{|z|^2}$, the formula that makes $\mathbb{C}$ a field.

#### Polar and Euler Representations

Writing $z = r(\cos\theta + i\sin\theta)$ with $r = |z| \geq 0$ and $\theta = \arg(z)$ converts multiplication into rotation-plus-scaling: $z_1 z_2$ has modulus $r_1 r_2$ and argument $\theta_1 + \theta_2$. The Euler form $z = re^{i\theta}$ collapses this into one exponential identity. The principal argument $\operatorname{Arg}(z) \in (-\pi, \pi]$ avoids branch-cut ambiguity when comparing arguments of products or quotients.

#### De Moivre's Theorem and $n$th Roots

For integer $n$, $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$. The $n$ distinct $n$th roots of unity are $e^{2\pi i k / n}$ for $k = 0, 1, \dots, n-1$; their sum is zero and product is $(-1)^{n-1}$. These identities appear verbatim in Integer-type questions.

| Identity | Formula | When to use |
| --- | --- | --- |
| Modulus of product | $\|z_1 z_2\| = \|z_1\|\|z_2\|$ | Simplify magnitude after multiplication |
| Triangle inequality | $\|z_1 + z_2\| \leq \|z_1\| + \|z_2\|$ | Bounds on sums; equality when $\arg z_1 = \arg z_2$ |
| Conjugate product | $\|z\|^2 = z\bar{z} = x^2 + y^2$ | Convert modulus equations to real algebra |
| Rotation | $z \cdot e^{i\theta}$ rotates $z$ by $\theta$ | Geometric transformation problems |

#### Locus Toolkit

On the Argand plane, $|z - a| = r$ describes a circle centred at $a$; $|z - a|/|z - b| = k$ with $k \neq 1$ describes an Apollonius circle; $\arg\frac{z - z_1}{z - z_2} = \alpha$ traces a circular arc. Always sketch before computing — JEE problems often hide a "missing arc" trap.

> Trap: $|z_1 + z_2| = |z_1| + |z_2|$ holds only when $z_1$ and $z_2$ point in the same direction, i.e. $\arg z_1 = \arg z_2$ (with both nonzero).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example — Locus via Conjugate Identity

Find the locus of $z$ satisfying $|z - 1| = |z - i|$. Replace $|w|^2 = w\bar{w}$:

$(z-1)(\bar{z}-1) = (z-i)(\bar{z}+i)$

Expanding and using $z\bar{z} = |z|^2$ cancels on both sides, leaving $-z - \bar{z} = i\bar{z} - iz$, i.e. $z + \bar{z} = i(z - \bar{z})$. Writing $z = x + iy$ gives $2x = i(2iy) = -2y$, so the locus is the line $x + y = 0$. Squaring directly would skip the conjugate step and lose structure — the conjugate path is the disciplined one.

#### Common Pitfalls

- Writing $\frac{1}{i} = i$ instead of $-i$ — multiply top and bottom by $i$ first.
- Treating $\arg(z)$ as single-valued; sums of arguments accumulate $2\pi$ branches, so reduce mod $2\pi$.
- Applying De Moivre with non-integer exponents without enumerating all $n$th roots.
- Forgetting $i^4 = 1$ when simplifying $i^{137}$ — reduce the exponent mod 4.

#### Connections

Complex numbers bridge to coordinate geometry (rotation matrix is $\begin{pmatrix}\cos\theta & -\sin\theta\\ \sin\theta & \cos\theta\end{pmatrix}$, identical to multiplication by $e^{i\theta}$), to algebra (roots of unity diagonalise circulant matrices), and to probability (Euler-form expectation calculations). Mastery here unlocks several Paragraph-based JEE Advanced questions.

| Question type | Typical weight | Time budget |
| --- | --- | --- |
| Single Correct (locus / modulus) | 1–2 marks | 3–4 min |
| Integer (roots of unity, $\arg$ sum) | 3 marks | 4–5 min |
| Paragraph-based (multi-step) | 3 marks | 6–8 min |

#### Practice Prompts

1. If $z^3 = 8i$ and $\operatorname{Arg}(z) = \pi/6$, find $|z|$ and the remaining two cube roots.
2. Find the area of the triangle whose vertices are the roots of $z^3 = 1$ on the Argand plane.

> Strategy: For Integer-type questions, write the answer in closed form (e.g. $\sqrt{3}$) — partial decimal entries cost full marks in JEE Advanced.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Complex Numbers" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
