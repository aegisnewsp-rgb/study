---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-005
topicName: "Parabola"
weight: 3
country: india
generated: "2026-03-29T05:04:42"
lastUpdated: 2026-09-06
diagramPrompt: "Educational diagram showing standard parabola y^2 = 4ax with labeled focus, directrix, vertex, latus rectum, and focal chord, white background, exam-style illustration"
---

# Parabola

### 🟢 Lite — Quick Review (1h–1d)

A parabola is the geometric locus of a point $P(x, y)$ that moves in a plane such that its distance from a fixed point (the focus $S$) strictly equals its perpendicular distance to a fixed straight line (the directrix $D$):
$$rac{SP}{PM} = e = 1$$
Every parabola has an eccentricity $e$ identically equal to $1$.

For the standard rightward-opening parabola $y^2 = 4ax$ ($a > 0$):
- Vertex: $V(0, 0)$
- Focus: $S(a, 0)$
- Equation of Directrix: $x + a = 0 \iff x = -a$
- Axis of Symmetry: $y = 0$ ($x$-axis)
- Length of Latus Rectum: $4a$ (chord through focus perpendicular to axis)
- Endpoints of Latus Rectum: $L(a, 2a)$ and $L'(a, -2a)$
- Focal Distance of point $P(x_1, y_1)$: $SP = x_1 + a$

Parametric coordinates express any point on $y^2 = 4ax$ in terms of single parameter $t$:
$$x = at^2, \quad y = 2at$$

⚡ **CUET UG Exam Strategy:** If the vertex is translated to $(h, k)$, replace $x$ with $(x - h)$ and $y$ with $(y - k)$. For example, $(y - k)^2 = 4a(x - h)$ has vertex $(h, k)$ and focus $(h + a, k)$. Never expand shifted quadratics when identifying geometric parameters; complete the square on the second-degree variable first.

---

### 🟡 Standard — Regular Study (2d–2mo)

CUET UG questions in conic sections frequently test parameter comparisons across all four canonical orientations of a parabola.

#### 1. Comparison of the Four Standard Parabolas

| Geometric Property | Rightward: $y^2 = 4ax$ | Leftward: $y^2 = -4ax$ | Upward: $x^2 = 4ay$ | Downward: $x^2 = -4ay$ |
| :--- | :--- | :--- | :--- | :--- |
| **Vertex** | $(0, 0)$ | $(0, 0)$ | $(0, 0)$ | $(0, 0)$ |
| **Focus Coordinates** | $(a, 0)$ | $(-a, 0)$ | $(0, a)$ | $(0, -a)$ |
| **Directrix Equation** | $x = -a$ | $x = a$ | $y = -a$ | $y = a$ |
| **Axis of Symmetry** | $y = 0$ ($x$-axis) | $y = 0$ ($x$-axis) | $x = 0$ ($y$-axis) | $x = 0$ ($y$-axis) |
| **Latus Rectum Length** | $4a$ | $4a$ | $4a$ | $4a$ |
| **Latus Rectum Ends** | $(a, \pm 2a)$ | $(-a, \pm 2a)$ | $(\pm 2a, a)$ | $(\pm 2a, -a)$ |
| **Focal Distance ($SP$)** | $x_1 + a$ | $a - x_1$ | $y_1 + a$ | $a - y_1$ |
| **Parametric Form** | $(at^2, 2at)$ | $(-at^2, 2at)$ | $(2at, at^2)$ | $(2at, -at^2)$ |

#### 2. Tangents and Normals Formulations

For the standard curve $y^2 = 4ax$:

| Line Type | Point Form $(x_1, y_1)$ | Parametric Form $t$ | Slope Form $m$ | Point of Contact |
| :--- | :--- | :--- | :--- | :--- |
| **Tangent** | $y y_1 = 2a(x + x_1)$ | $t y = x + a t^2$ | $y = m x + rac{a}{m}$ ($m 
e 0$) | $\left(rac{a}{m^2}, rac{2a}{m}ight)$ |
| **Normal** | $y - y_1 = -rac{y_1}{2a}(x - x_1)$ | $y + t x = 2at + a t^3$ | $y = m x - 2am - a m^3$ | $(a m^2, -2am)$ |

Director Circle Property: The locus of the point of intersection of two mutually perpendicular tangents to a parabola is its directrix ($x = -a$).

#### 3. Step-by-Step Worked Example: Shifted Vertex Equation

**Problem:** A parabola has its vertex at $(2, -3)$ and focus at $(5, -3)$. Determine its Cartesian equation, length of latus rectum, and equation of its directrix.

**Solution Steps:**
1. Plot the axis of symmetry: Both vertex $V(2, -3)$ and focus $S(5, -3)$ share the line $y = -3$.
2. The axis of symmetry is horizontal ($y = -3$). Because the focus lies to the right of the vertex ($5 > 2$), the parabola opens rightward.
3. Compute the focal length parameter $a$:
$$a = x_S - x_V = 5 - 2 = 3$$
4. Set up the shifted horizontal parabola formula:
$$(y - k)^2 = 4a(x - h)$$
5. Substitute $(h, k) = (2, -3)$ and $a = 3$:
$$(y - (-3))^2 = 4(3)(x - 2) \implies (y + 3)^2 = 12(x - 2)$$
$$y^2 + 6y + 9 = 12x - 24 \implies y^2 - 12x + 6y + 33 = 0$$
6. Length of latus rectum:
$$	ext{Length} = 4a = 4(3) = 12	ext{ units}$$
7. Equation of directrix: The directrix lies distance $a = 3$ to the left of the vertex:
$$x = h - a = 2 - 3 = -1 \iff x + 1 = 0$$

---

### 🔴 Extended — Deep Study (3mo+)

Extended study explores focal chord properties, reflective optical geometry, and normal chord intersections.

#### 1. Fundamental Theorems of Focal Chords

A focal chord is any secant line passing through focus $S(a, 0)$.
1. If the endpoints of a focal chord on $y^2 = 4ax$ have parametric parameters $t_1$ and $t_2$, then:
$$t_1 \cdot t_2 = -1 \implies t_2 = -rac{1}{t_1}$$
2. The length of a focal chord with parameter $t$ equals:
$$L = a\left(t + rac{1}{t}ight)^2$$
The minimum length of any focal chord occurs when $t = 1$, which equals the latus rectum $4a$.
3. The semi-latus rectum ($2a$) is the harmonic mean of the two focal segments $SP$ and $SQ$:
$$rac{1}{SP} + rac{1}{SQ} = rac{1}{a}$$

#### 2. Reflective Optical Property

Any incident light ray traveling parallel to the axis of symmetry reflects off the parabolic surface and converges at the focus $S$. Conversely, a light source positioned at the focus generates a parallel collimated beam.
- The tangent at any point $P$ bisects the angle formed by the focal radius $SP$ and the line passing through $P$ parallel to the axis.
- The portion of any tangent intercepted between the curve and the directrix subtends a right angle ($90^\circ$) at the focus.

#### 3. Step-by-Step Worked Example: Length of Focal Chord

**Problem:** A focal chord of the parabola $y^2 = 16x$ makes an angle of $60^\circ$ with the positive $x$-axis. Calculate the total length of this focal chord.

**Solution Steps:**
1. Compare $y^2 = 16x$ with $y^2 = 4ax \implies 4a = 16 \implies a = 4$. Focus is $S(4, 0)$.
2. The inclination of the chord is $lpha = 60^\circ$.
3. The general length of a focal chord inclined at angle $lpha$ to the axis of symmetry is:
$$L = 4a \csc^2lpha$$
4. Substitute $a = 4$ and $lpha = 60^\circ$:
$$\csc(60^\circ) = rac{2}{\sqrt{3}} \implies \csc^2(60^\circ) = rac{4}{3}$$
$$L = 4(4) 	imes rac{4}{3} = 16 	imes rac{4}{3} = rac{64}{3}	ext{ units} pprox 21.33	ext{ units}$$

#### 4. Exam Strategy and Navigation
- Review the complete [CUET UG Exam Syllabus and Strategy](/exams/cuet/) to align your coordinate geometry milestones.
- Explore adjacent conic sections in the [CUET Mathematics Subject Directory](/notes/cuet/mathematics/).
- Advance directly into [Ellipse Study Notes](/notes/cuet/mathematics/math-006/) to compare eccentricity constraints and focal properties.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
