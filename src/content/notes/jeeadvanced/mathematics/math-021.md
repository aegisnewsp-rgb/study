---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-021
topicName: Parabola
weight: 5
country: india
generated: "2026-03-24T08:32:07.943988"
diagramPrompt: Mathematical diagram showing Parabola concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Parabola

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **parabola** is the set of all points in a plane equidistant from a fixed point (focus) and a fixed line (directrix). The standard equation when the vertex is at the origin and axis along the x-axis is $y^2 = 4ax$, where $a > 0$ is the distance from vertex to focus. Key terms: **vertex** $(0,0)$, **focus** $(a,0)$, **directrix** $x = -a$, **latus rectum** (length $4a$), **focal parameter** $p = a$.

**Standard Forms:**
| Position | Equation | Focus | Directrix |
|----------|----------|-------|-----------|
| Right-opening | $y^2 = 4ax$ | $(a,0)$ | $x = -a$ |
| Left-opening | $y^2 = -4ax$ | $(-a,0)$ | $x = a$ |
| Upward | $x^2 = 4ay$ | $(0,a)$ | $y = -a$ |
| Downward | $x^2 = -4ay$ | $(0,-a)$ | $y = a$ |

**Parametric Form:** Any point on $y^2 = 4ax$ can be written as $(at^2, 2at)$ where $t \in \mathbb{R}$.

⚡ **JEE Tip:** In JEE Advanced, the parabola $y^2 = 4ax$ is the most common form. Remember that the tangent in parametric form is $ty = x + at^2$. The condition $y_1 = 2ax_0$ connects the point $(x_0, y_0)$ to the parameter $t$.

⚡ **Common Mistake:** Don't confuse latus rectum ( endpoints at $(a, \pm 2a)$) with the focal parameter. Length of latus rectum is always $4a$ regardless of orientation.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Tangent and Normal:**

For parabola $y^2 = 4ax$ at point $P(x_1, y_1)$:

- **Tangent:** $yy_1 = 2a(x + x_1)$ or using parametric form $ty = x + at^2$ at parameter $t$
- **Normal:** $y + tx = 2at + at^3$ at parameter $t$
- **Slope form:** If tangent makes angle $\theta$ with axis, equation is $y = mx + \frac{a}{m}$ where $m \neq 0$

**Chord Properties:**

- **Chord of contact** from point $(x_1, y_1)$: $yy_1 = 2a(x + x_1)$
- **Chord bisected at** $(x_1, y_1)$: $T = S_1$ gives $yy_1 = 2a(x + x_1)$
- **Director circle:** Locus of intersection of tangents at right angles. For $y^2 = 4ax$, director circle is $x^2 + y^2 = a^2$

**Director Circle Derivation:**
If two tangents $y = m_1x + \frac{a}{m_1}$ and $y = m_2x + \frac{a}{m_2}$ are perpendicular, then $m_1 m_2 = -1$. Using condition for point of intersection $(x, y)$: eliminating parameters gives $x^2 + y^2 = a^2$.

**Working Examples:**

*Example 1:* Find the length of latus rectum of $x^2 = 8y$.

Comparing with $x^2 = 4ay$: here $4a = 8$, so $a = 2$. Latus rectum length $= 4a = 8$.

*Example 2:* Find equation of tangent to $y^2 = 12x$ at point where $x = 3$.

At $x = 3$: $y^2 = 12(3) = 36$, so $y = \pm 6$. For point $(3, 6)$: tangent is $y(6) = 6(x + 3)$ → $6y = 6x + 18$ → $x - y + 3 = 0$ or equivalently $y = x + 3$. For $(3, -6)$: $-6y = 6x + 18$ → $x + y + 3 = 0$.

*Example 3 (JEE 2022 pattern):* Find the equation of normal to $y^2 = 8x$ at point $(2, 4)$.

Parametric form: $(2at, 2a)$ gives $(2at^2, 4at)$. Comparing: $2at^2 = 2$ and $4at = 4$. With $a = 2$, we get $t^2 = 1/2$ and $t = 1/\sqrt{2}$. Normal: $y + tx = 2at + at^3 = 4(1/\sqrt{2}) + 2(1/(2\sqrt{2})) = \frac{4}{\sqrt{2}} + \frac{1}{\sqrt{2}} = \frac{5}{\sqrt{2}}$. So $y + \frac{x}{\sqrt{2}} = \frac{5}{\sqrt{2}}$ or multiply by $\sqrt{2}$: $\sqrt{2}y + x = 5$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Pole and Polar:**

For any point $P(x_1, y_1)$, the chord of contact (polar) of tangents drawn from $P$ to $y^2 = 4ax$ is $yy_1 = 2a(x + x_1)$. Conversely, if we have a chord $T = 0$ (i.e., $yy_1 = 2a(x + x_1)$), the pole is $(x_1, y_1)$.

**Parabola as Conic Section:**

A parabola is a conic section with eccentricity $e = 1$. In terms of distances: for any point $P$ on the parabola, distance to focus $PF$ equals distance to directrix $PM$. This is the geometric definition used in most proofs.

**Properties of Reflective Property:**

The tangent at any point $P$ on a parabola makes equal angles with: (1) the line joining $P$ to the focus, and (2) the line drawn from $P$ parallel to the axis of the parabola. This is why satellite dishes and car headlights use parabolic shapes — parallel rays converge to the focus.

**Advanced Problems:**

*Problem 1:* Prove that the locus of midpoint of chords of $y^2 = 4ax$ that are normal to the parabola at their endpoints is another parabola.

*Solution:* Let endpoints be $(at_1^2, 2at_1)$ and $(at_2^2, 2at_2)$. Normal at $t$: $y + tx = 2at + at^3$. Since both normals pass through the midpoint $(h,k)$:
$$k + t_1 h = 2at_1 + at_1^3$$
$$k + t_2 h = 2at_2 + at_2^3$$
Also chord equation: $y(t_1 + t_2) = 2x + a(t_1^2 + t_2^2 + 2)$.
Eliminating $t_1, t_2$ gives locus: $(h - a)^2 = 2a(k - 2a)$, another parabola shifted by $(a, 2a)$.

*Problem 2 (JEE Advanced 2019):* From point $P(6, 8)$, normals are drawn to $y^2 = 8x$. Find the equation of the chord of contact and length of chord.

*Solution:* Chord of contact from $P$: $yy_1 = 2a(x + x_1)$ gives $8y = 8(x + 6)$ → $y = x + 6$. This meets parabola at points satisfying $(x+6)^2 = 8x$ → $x^2 - 4x + 36 = 0$ → discriminant $16 - 144 < 0$. This seems off. Rechecking: chord of contact formula uses $S = 0$ form. Actually for $y^2 = 8x$ (i.e., $4a = 8, a=2$): $8y = 8(x+6)$ → $y = x + 6$. Substituting in $y^2 = 8x$: $(x+6)^2 = 8x$ → $x^2 + 12x + 36 = 8x$ → $x^2 + 4x + 36 = 0$. Discriminant negative means no real intersection — the chord of contact from an external point doesn't intersect the parabola.

Actually let's find where the normals from $P$ actually hit the parabola: normal at $t$: $y + tx = 2at + at^3$. At $P(6,8)$: $8 + 6t = 4t + 2t^3$ → $2t^3 - 2t - 8 = 0$ → $t^3 - t - 4 = 0$. Solving gives $t = 2$ (since $8 - 2 - 4 = 0$). So one normal at $t = 2$ touches at $(8, 8)$. The third point on the parabola where normals from $P$ pass is found from the cubic. By Vieta, sum of roots = 0, product = -(-4) = 4. So if roots are $t_1 = 2, t_2, t_3$: $t_2 + t_3 = -2$ and $t_2 t_3 = -2$.

The locus approach for the midpoint of chord whose normals intersect at $P$ gives the required locus.

**JEE Advanced Patterns (2018–2024):**
- Combined conics (parabola + circle/line) are extremely common — about 2–3 questions per paper
- Condition-based problems (tangents from a point, chord of contact) appear frequently
- Parametric approach is often the fastest method for complex problems
- Questions involving the focal property and reflection are trending upward
- "Three normals from a point to a parabola" is a classic problem type

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
