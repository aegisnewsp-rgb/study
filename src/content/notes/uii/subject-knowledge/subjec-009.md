---
exam: uii
examName: UI Entrance (Indonesia)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: subjec-009
topicName: "Circles — Area, Circumference, Sectors"
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-15"
diagramPrompt: "Circle with radius r, showing centre O, diameter AB passing through O, chord CD not through centre, sector OAB with central angle theta, and arc AB"

---

# Circles — Area, Circumference, Sectors

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **circle** is the locus of points in a plane at a fixed distance *r* (the **radius**) from a **center** *O*. The **diameter** is *d = 2r*. Two results carry almost every UI Entrance numeric on this topic: the **circumference** (perimeter) and the **area enclosed**.

- **Circumference:** $C = 2\pi r$, where $r$ is the radius in metres (m); $C$ has dimension L (length).
- **Area of circle:** $A = \pi r^{2}$, where $r$ is in m; $A$ has dimension L² (m²).
- **Arc length** *s* with central angle *θ*: $s = r\theta$ when *θ* is in **radians**; $s = \dfrac{\theta}{360}\cdot 2\pi r$ when *θ* is in degrees.
- **Sector area** with central angle *θ*: $A_{\text{sector}} = \tfrac{1}{2} r^{2}\theta$ (radians), or $A_{\text{sector}} = \dfrac{\theta}{360}\cdot \pi r^{2}$ (degrees).

> 💡 **High-Yield Memory Hook:** **"Two-Pi-R for the Rim, Pi-R-Squared for the Filling."** Rim (perimeter) → $2\pi r$ (linear). Filling (inside) → $\pi r^{2}$ (area). When the angle is in **radians**, arc length is just *r·θ* and sector area is *½ r²θ* — no fractions, no 360s.

| Quantity | Formula | SI unit | Dimension |
|---|---|---|---|
| Circumference | $C = 2\pi r$ | m | L |
| Area (full disk) | $A = \pi r^{2}$ | m² | L² |
| Arc length (rad) | $s = r\theta$ | m | L |
| Sector area (rad) | $A = \tfrac{1}{2} r^{2}\theta$ | m² | L² |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core definitions and notation

Let *O* be the centre and let any point *P* on the circle satisfy $|OP| = r$. A **chord** is a straight line joining two points on the circle; a **diameter** is the longest chord through *O*; a **tangent** touches the circle at exactly one point and is perpendicular to the radius drawn to that point. An **arc** is the curved portion between two points, and a **sector** is the "pizza slice" bounded by two radii and the arc between them.

#### Radian versus degree measure

Degrees measure a rotation as a fraction of one full turn; radians measure the same rotation as the ratio *arc length ÷ radius*. The conversion is:

$$\theta_{\text{rad}} = \theta_{\text{deg}}\cdot \dfrac{\pi}{180}, \qquad \theta_{\text{deg}} = \theta_{\text{rad}}\cdot \dfrac{180}{\pi}.$$

A full circle is $2\pi$ rad or 360°; a semicircle is $\pi$ rad or 180°; a quarter circle is $\tfrac{\pi}{2}$ rad or 90°. **Radian measure is dimensionless**, which is why $s = r\theta$ produces a length directly.

#### Formula derivation for the sector

A sector is a fraction $\tfrac{\theta}{2\pi}$ (rad) or $\tfrac{\theta}{360}$ (deg) of the whole disk. Multiplying this fraction by the total area $\pi r^{2}$ gives the sector area; multiplying by the total arc $2\pi r$ gives the arc length. This is why both formulas collapse to the clean radial forms $s = r\theta$ and $A = \tfrac{1}{2}r^{2}\theta$ in radians.

#### Concept comparison matrix

| Feature | Full circle | Sector (angle θ rad) | Segment (angle θ rad) |
|---|---|---|---|
| Boundary | one full arc | two radii + one arc | one chord + one arc |
| Area formula | $\pi r^{2}$ | $\tfrac{1}{2}r^{2}\theta$ | $\tfrac{1}{2}r^{2}(\theta - \sin\theta)$ |
| Perimeter formula | $2\pi r$ | $2r + r\theta$ | chord length + arc length |
| Linear in θ? | n/a | yes (area) | yes (area) |
| Requires subtracting triangle? | no | no | **yes** (isosceles triangle $A = \tfrac{1}{2}r^{2}\sin\theta$) |

#### Standard problem types in UI Entrance

1. Compute *C* or *A* given *r* (or vice versa); round to one decimal using $\pi = 22/7$ or $3.14$.
2. Compute **arc length** given *r* and *θ* in degrees — convert to radians first if using $s = r\theta$.
3. Compute **sector area** given *r* and *θ* in degrees — apply $A = \tfrac{\theta}{360}\cdot \pi r^{2}$.
4. Find the **sector perimeter** = $2r + r\theta$ (rad) or $2r + \tfrac{\theta}{360}\cdot 2\pi r$ (deg).
5. Identify the **segment** as the region between a chord and the minor arc, and subtract the triangle.

#### 🎯 Exam-Level Worked Problem

**Question:** A circular sector has radius $r = 14$ cm and central angle $\theta = 60°$. Compute the **area of the sector** in cm² and the **perimeter of the sector** in cm. (Use $\pi = 22/7$.)

#### Solution:

- **Sector area** (degrees form): $A = \dfrac{\theta}{360}\cdot \pi r^{2} = \dfrac{60}{360}\cdot \dfrac{22}{7}\cdot (14)^{2}$.
- Simplify: $\dfrac{60}{360} = \tfrac{1}{6}$; $(14)^{2} = 196$; $\tfrac{22}{7}\cdot 196 = 22\cdot 28 = 616$.
- So $A = \tfrac{1}{6}\cdot 616 = \dfrac{308}{3} \approx 102.67$ cm².
- **Arc length** (degrees form): $s = \dfrac{\theta}{360}\cdot 2\pi r = \tfrac{1}{6}\cdot 2\cdot \tfrac{22}{7}\cdot 14 = \tfrac{1}{6}\cdot 88 = \dfrac{44}{3} \approx 14.67$ cm.
- **Sector perimeter** = two radii + arc length = $2r + s = 2(14) + \tfrac{44}{3} = 28 + \tfrac{44}{3} = \tfrac{84+44}{3} = \tfrac{128}{3} \approx 42.67$ cm.

> ⚠️ **Examiner Trap:** A frequent error is treating the "perimeter of a sector" as the **arc length only**, forgetting that the two straight radii $r + r = 2r$ also bound the region. Students who answer $\tfrac{44}{3}$ cm lose the marks for the $28$ cm contribution from the radii.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and limits

- **θ → 0:** The sector collapses to a thin sliver; $s \to 0$ and $A \to 0$. The chord and arc coincide, and the segment area $A = \tfrac{1}{2}r^{2}(\theta - \sin\theta) \to 0$ because $\sin\theta \approx \theta - \tfrac{\theta^{3}}{6}$.
- **θ → 2π:** The sector becomes the whole disk, recovering $A = \pi r^{2}$ and $C = 2\pi r$.
- **θ = π (semicircle):** Sector area = $\tfrac{1}{2}\pi r^{2}$; segment area = $\tfrac{1}{2}r^{2}(\pi - 0) = \tfrac{1}{2}\pi r^{2}$, since $\sin\pi = 0$. The bounding triangle vanishes.
- **θ = π/2 (quarter circle):** Sector area = $\tfrac{1}{4}\pi r^{2}$; segment area = $\tfrac{1}{2}r^{2}\!\left(\tfrac{\pi}{2} - 1\right)$.
- **Non-Euclidean context:** If a "circle" appears in a calculus setting (e.g., polar integration), the same formulas apply because $r$ is constant on the curve.

#### Connections to adjacent topics

- **Trigonometry:** The isosceles triangle inside a sector has equal sides $r$ and included angle $\theta$, so its area is $\tfrac{1}{2}r^{2}\sin\theta$ (SAS area). This is why the **segment** formula subtracts $\tfrac{1}{2}r^{2}\sin\theta$ from the sector.
- **Coordinate geometry:** The equation $(x-h)^{2} + (y-k)^{2} = r^{2}$ is the algebraic counterpart; UI Entrance sometimes asks for the area enclosed by this curve given *h, k, r*.
- **Mensuration packages:** Sector and segment problems combine with cylinder, cone, and sphere formulae; keep π exact until the final numeric step.

#### Advanced traps and how to dodge them

| Trap | What goes wrong | How to avoid |
|---|---|---|
| Mixing units | Plugging cm into $r$ but writing the answer in m² | Convert all lengths to one unit *before* squaring. |
| Using degrees in $s = r\theta$ | Result is off by a factor of $57.3$ | If θ is in degrees, use $s = \tfrac{\theta}{360}\cdot 2\pi r$. |
| Treating $\pi$ as having units | Writing "$\pi$ cm²" as if π were dimensional | π is dimensionless; cm² stays cm². |
| Confusing segment vs sector | Subtracting the triangle from $\pi r^{2}$ instead of $\tfrac{1}{2}r^{2}\theta$ | Segment area = sector area − triangle area, not full disk − triangle. |
| Wrong radius in chord length | Using $d$ instead of $r$ in $2r\sin(\theta/2)$ | Chord length $= 2r\sin(\theta/2)$ always uses the radius. |

#### Advanced practice prompts

1. A circular garden of radius 7 m has a straight path through its centre that is a chord of length 10 m. Find the **area of the smaller segment** cut off by the chord. (Hint: find $\theta$ from $\sin(\theta/2) = \tfrac{5}{7}$, then apply the segment formula.)
2. Two sectors from circles of radii 6 cm and 10 cm have the same arc length 12 cm. Which has the larger area, and by how much? (Hint: equal $s$ means $r\theta$ is constant, so $A = \tfrac{1}{2}s\,r$ scales with *r* — the larger-radius sector wins.)

## Continue your study

- **[View this topic in your UI Entrance (Indonesia) roadmap](/roadmap/?exam=uii&duration=1mo)** — see where "Circles — Area, Circumference, Sectors" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uii&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UI Entrance (Indonesia) exam overview](/exams/uii/)** — pattern, eligibility, and syllabus
- **[All Subject Knowledge notes](/notes/uii/subject-knowledge/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
