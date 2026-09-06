---
exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-12
topicName: Coordinate Geometry and Graphs
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.669176"
lastUpdated: "2026-09-06"
diagramPrompt: "Mathematical diagram showing Coordinate Geometry and Graphs concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"
---

# Coordinate Geometry and Graphs

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Coordinate Geometry and Graphs bridges algebraic equations and Euclidean geometry on the two-dimensional Cartesian plane for the NECO SSCE Mathematics syllabus. Every geometric point represents an ordered pair $(x, y)$, where $x$ defines the horizontal displacement from the origin (**abscissa**) and $y$ defines the vertical displacement (**ordinate**). The Cartesian plane divides into four quadrants via the perpendicular intersection of the $x$-axis ($y = 0$) and the $y$-axis ($x = 0$) at the origin $(0, 0)$.

| Core Formula | Mathematical Formulation | Direct Operational Application | High-Frequency NECO Trap |
|---|---|---|---|
| **Euclidean Distance** | $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ | Length of segment connecting $P(x_1, y_1)$ and $Q(x_2, y_2)$ | Omitting square root or making sign errors when subtracting negative coordinates |
| **Midpoint Coordinates** | $M = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)$ | Equidistant center point of line segment $PQ$ | Subtracting coordinates instead of calculating arithmetic mean |
| **Line Gradient (Slope)** | $m = \frac{y_2 - y_1}{x_2 - x_1} = \tan \theta$ | Rate of vertical rise over horizontal run; inclination angle $\theta$ | Inverting ratio as $\Delta x / \Delta y$, or confusing vertical line ($m$ undefined) with horizontal line ($m = 0$) |
| **Collinearity Criterion** | $m_{AB} = m_{BC}$ or $\text{Area}(\Delta ABC) = 0$ | Testing whether three given points lie on a single straight line | Assuming equal distances implies collinearity without verifying slope |
| **Perpendicular Bisector** | Pass through midpoint $M$ with slope $m_{\perp} = -\frac{1}{m}$ | Locus of points equidistant from two segment endpoints | Using original slope $m$ instead of negative reciprocal |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### 1. Straight Line Representations and Equation Forms

A straight line represents a first-degree linear relationship in two variables $x$ and $y$. NECO SSCE questions evaluate fluency across six standard algebraic formats.

| Line Equation Form | Algebraic Formulation | Defining Geometric Parameters | Typical Exam Scenario |
|---|---|---|---|
| **Slope-Intercept Form** | $y = m x + c$ | Gradient $m$; $y$-intercept $(0, c)$ | Reading slope and intercept directly to sketch lines |
| **Point-Slope Form** | $y - y_1 = m (x - x_1)$ | Given point $(x_1, y_1)$; known gradient $m$ | Writing tangent or perpendicular line through a fixed point |
| **Two-Point Form** | $\frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}$ | Two distinct given points $(x_1, y_1)$ and $(x_2, y_2)$ | Finding line equation passing through two observed data points |
| **Intercept Form** | $\frac{x}{a} + \frac{y}{b} = 1$ | $x$-intercept $(a, 0)$; $y$-intercept $(0, b)$ | Solving triangle area formed by line and coordinate axes: $\text{Area} = \frac{1}{2}|a b|$ |
| **General Linear Form** | $A x + B y + C = 0$ | Coefficients $A, B, C \in \mathbb{R}$; $m = -\frac{A}{B}$ | Standard format required for final answers in NECO Theory |
| **Perpendicular Normal Form** | $x \cos \alpha + y \sin \alpha = p$ | Normal distance from origin $p$; normal angle $\alpha$ | Advanced analytical geometry questions |

#### 2. Angular Relationships and Perpendicularity

Two lines $L_1$ with equation $A_1 x + B_1 y + C_1 = 0$ (slope $m_1$) and $L_2$ with equation $A_2 x + B_2 y + C_2 = 0$ (slope $m_2$) satisfy strict geometric conditions:

| Geometric Relationship | Slope Formulation ($m_1, m_2$) | General Coefficient Condition | Angle Between Lines ($\theta$) |
|---|---|---|---|
| **Parallel Lines** | $m_1 = m_2$ and $c_1 \neq c_2$ | $\frac{A_1}{A_2} = \frac{B_1}{B_2} \neq \frac{C_1}{C_2}$ | $\theta = 0^\circ$ |
| **Coincident Lines** | $m_1 = m_2$ and $c_1 = c_2$ | $\frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2}$ | $\theta = 0^\circ$ (Identical line) |
| **Perpendicular Lines** | $m_1 \cdot m_2 = -1 \iff m_2 = -\frac{1}{m_1}$ | $A_1 A_2 + B_1 B_2 = 0$ | $\theta = 90^\circ$ |
| **Acute Angle of Intersection** | $\tan \theta = \left| \frac{m_2 - m_1}{1 + m_1 m_2} \right|$ | $\cos \theta = \frac{|A_1 A_2 + B_1 B_2|}{\sqrt{A_1^2 + B_1^2}\sqrt{A_2^2 + B_2^2}}$ | $0^\circ < \theta < 90^\circ$ |
| **Perpendicular Distance from $(x_1, y_1)$** | $d = \frac{|A x_1 + B y_1 + C|}{\sqrt{A^2 + B^2}}$ | Length of normal segment from external point to line | Radius of inscribed or tangent circle |

#### 3. Quadratic Graphs and Curve Properties

Quadratic equations of the form $y = a x^2 + b x + c$ ($a \neq 0$) plot as parabolas on the Cartesian plane.

| Curve Property | Mathematical Formula | Graphical Implication ($a > 0$) | Graphical Implication ($a < 0$) |
|---|---|---|---|
| **Parabola Orientation** | Sign of leading coefficient $a$ | U-shaped curve (Opens upward; convex) | Inverted U-shape (Opens downward; concave) |
| **Axis of Symmetry** | $x = -\frac{b}{2a}$ | Vertical line bisecting the parabola into symmetrical halves | Vertical line bisecting the parabola |
| **Vertex (Turning Point)** | $\left( -\frac{b}{2a}, -\frac{b^2 - 4ac}{4a} \right)$ | Global minimum point | Global maximum point |
| **$y$-Intercept** | Set $x = 0 \implies y = c$ | Point $(0, c)$ where curve intersects vertical axis | Point $(0, c)$ |
| **Roots / $x$-Intercepts** | Solve $a x^2 + b x + c = 0$ via quadratic formula | Points $(x_1, 0)$ and $(x_2, 0)$ where curve crosses $x$-axis | Points $(x_1, 0)$ and $(x_2, 0)$ |
| **Discriminant $\Delta = b^2 - 4ac$** | $\Delta > 0$: 2 distinct real roots; $\Delta = 0$: 1 repeated root; $\Delta < 0$: 0 real roots | Intersects $x$-axis twice; touches once; or floats entirely above axis | Intersects twice; touches once; or lies entirely below axis |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Section Formula: Internal and External Ratio Division

When a point $P(x, y)$ divides the directed line segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ in the ratio $m : n$:

1. **Internal Division**: Point $P$ lies strictly between $A$ and $B$:
   $$x = \frac{m x_2 + n x_1}{m + n}, \quad y = \frac{m y_2 + n y_1}{m + n}$$
2. **External Division**: Point $P$ lies on the extension of segment $AB$ outside the endpoints:
   $$x = \frac{m x_2 - n x_1}{m - n}, \quad y = \frac{m y_2 - n y_1}{m - n}$$
3. **Centroid of a Triangle**: For triangle $ABC$ with vertices $(x_1, y_1)$, $(x_2, y_2)$, and $(x_3, y_3)$, the centroid $G$ (intersection of medians, dividing each median in ratio $2 : 1$) is:
   $$G = \left( \frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3} \right)$$

#### Area of a Polygon: The Shoelace Formula

For any triangle with ordered vertices $A(x_1, y_1)$, $B(x_2, y_2)$, and $C(x_3, y_3)$:
$$\text{Area} = \frac{1}{2} | x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) |$$
If the computed area equals zero, the three points are strictly collinear.

#### Worked NECO SSCE Examination Solutions

**Problem 1: Perpendicular Bisector Determination**  
*Problem:* Find the equation of the perpendicular bisector of the line segment joining the points $A(-2, 3)$ and $B(4, 7)$. Express the equation in the standard form $A x + B y + C = 0$.

*Step-by-Step Solution:*
1. Calculate the midpoint $M$ of $AB$:
   $$x_M = \frac{x_1 + x_2}{2} = \frac{-2 + 4}{2} = \frac{2}{2} = 1$$
   $$y_M = \frac{y_1 + y_2}{2} = \frac{3 + 7}{2} = \frac{10}{2} = 5$$
   The midpoint is $M(1, 5)$.
2. Calculate the gradient $m_{AB}$ of segment $AB$:
   $$m_{AB} = \frac{y_2 - y_1}{x_2 - x_1} = \frac{7 - 3}{4 - (-2)} = \frac{4}{4 + 2} = \frac{4}{6} = \frac{2}{3}$$
3. Find the perpendicular gradient $m_{\perp}$:
   $$m_{\perp} = -\frac{1}{m_{AB}} = -\frac{1}{2/3} = -\frac{3}{2}$$
4. Write the equation through $M(1, 5)$ using point-slope form:
   $$y - 5 = -\frac{3}{2} (x - 1)$$
5. Clear fractions by multiplying both sides by $2$:
   $$2(y - 5) = -3(x - 1)$$
   $$2y - 10 = -3x + 3$$
6. Rearrange into general linear form $A x + B y + C = 0$:
   $$3x + 2y - 13 = 0$$
*Final Answer:* The equation of the perpendicular bisector is **$3x + 2y - 13 = 0$**.

**Problem 2: Graphical Simultaneous Solution of Linear and Quadratic Equations**  
*Problem:* In a NECO SSCE Paper 2 examination, students are asked to graph $y = 2x^2 - 3x - 5$ for the domain $-2 \le x \le 4$. By drawing a suitable straight line on the same axes, solve the simultaneous equation $2x^2 - 4x - 6 = 0$.

*Step-by-Step Solution:*
1. State the original curve equation:
   $$y = 2x^2 - 3x - 5$$
2. Express the target equation to solve:
   $$2x^2 - 4x - 6 = 0$$
3. Isolate the quadratic terms:
   $$2x^2 = 4x + 6$$
4. Substitute $2x^2 = 4x + 6$ into the curve equation to find the straight line:
   $$y = (4x + 6) - 3x - 5$$
   $$y = x + 1$$
5. Compute points to draw the straight line $y = x + 1$:
   - When $x = 0 \implies y = 1$
   - When $x = 3 \implies y = 4$
   - When $x = -1 \implies y = 0$
6. Find the intersection points algebraically to verify graphical readings:
   Set curve equal to line:
   $$2x^2 - 3x - 5 = x + 1$$
   $$2x^2 - 4x - 6 = 0 \implies x^2 - 2x - 3 = 0$$
   $$(x - 3)(x + 1) = 0 \implies x = 3 \quad \text{or} \quad x = -1$$
*Final Answer:* The required straight line to draw is **$y = x + 1$**. The roots of the simultaneous equation read from the intersection points are **$x = -1$** and **$x = 3$**.

#### Common Traps and Exam Pitfalls

- **Negative Coordinate Signs in Distance Formula**: When computing $(x_2 - x_1)$, if $x_1 = -3$, write $(x_2 - (-3)) = (x_2 + 3)$. Squaring a negative number always produces a positive value: $(-4)^2 = +16$, never $-16$.
- **Scale Reading on Graph Paper**: NECO Paper 2 frequently specifies unequal scales (e.g., $2 \text{ cm to } 1 \text{ unit on the } x\text{-axis}$, but $2 \text{ cm to } 5 \text{ units on the } y\text{-axis}$). Always count sub-grid divisions according to the specified axis scale before recording coordinate values.
- **Gradient of Vertical Lines**: A line with equation $x = k$ is vertical. Its run is $\Delta x = 0$; therefore its gradient is **undefined**, not zero. A line with equation $y = k$ is horizontal; its rise is $\Delta y = 0$, and its gradient is **$0$**.

---

### Practice Prompts

1. A line passing through $P(k, 2)$ and $Q(4, 8)$ is perpendicular to the line $2x + 3y - 5 = 0$. Calculate the numerical value of $k$.
2. The vertices of a triangle are $A(1, 2)$, $B(5, 6)$, and $C(7, 2)$. Calculate the area of the triangle and determine whether the triangle is isosceles, right-angled, or scalene.

---

## Continue your study

- **[NECO SSCE Exam Hub](/exams/neco/)** — full syllabus outline, paper formats, grading system, and registration guidelines
- **[All NECO Mathematics Notes](/notes/neco/mathematics/)** — algebraic processes, trigonometry, statistics, circle geometry, and calculus
- **[NECO SSCE Preparation Roadmap](/exams/neco/#roadmap)** — structured revision schedule and high-yield scoring topics
