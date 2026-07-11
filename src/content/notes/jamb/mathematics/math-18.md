---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-18
topicName: Three-Dimensional Geometry Basics
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.740627"
lastUpdated: "2026-07-11"
diagramPrompt: "Mathematical diagram showing Three-Dimensional Geometry Basics concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Three-Dimensional Geometry Basics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Space point** P has coordinates **(x, y, z)** measured along three mutually perpendicular axes.
- **3D distance formula**: d = √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²), extension of the 2D Pythagorean result into space.
- **Midpoint of PQ**: ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2); the midpoint is just the section formula at ratio **1:1**.
- **Section formula** in ratio m:n gives ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), (mz₂+nz₁)/(m+n)); flip signs for external division.
- **Direction cosines** (l, m, n) of a line satisfy **l² + m² + n² = 1**; convert any direction ratios (a, b, c) using l = a/√(a²+b²+c²).
- **Angle between two lines**: cos θ = l₁l₂ + m₁m₂ + n₁n₂; report θ as the acute angle when JAMB asks for "the angle".

#### High-yield exam pointers

| # | Pointer |
|---|---------|
| 1 | Always **square all three** coordinate differences in the distance formula. |
| 2 | Direction **ratios** are not unique; direction **cosines** are unique only after normalisation. |
| 3 | JAMB sets 1–2 questions on this 3% topic — usually distance, midpoint, or direction cosines. |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### The 3D coordinate system

Space is described using three perpendicular axes: **x** (left–right), **y** (front–back), **z** (up–down). Their intersection is the origin **O(0,0,0)**. The eight regions formed by the three planes x = 0, y = 0, z = 0 are called **octants**; each is identified by the signs of x, y, z. Every point P in space is uniquely written as an ordered triple (x, y, z).

#### Distance between two points

For P(x₁, y₁, z₁) and Q(x₂, y₂, z₂), the Euclidean distance is:

> d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)

This follows from applying Pythagoras twice: the horizontal separation in the xy-plane is √((x₂−x₁)² + (y₂−y₁)²), and the vertical leg (z₂−z₁) completes the right triangle in space.

#### Midpoint and section formula

| Type | Coordinates of dividing point |
|------|-------------------------------|
| **Midpoint** (ratio 1 : 1) | ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2) |
| **Internal division** (m : n) | ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n), (mz₂ + nz₁)/(m+n)) |
| **External division** (m : n) | ((mx₂ − nx₁)/(m−n), (my₂ − ny₁)/(m−n), (mz₂ − nz₁)/(m−n)) |

For external division the point lies **outside** the segment PQ, so the denominators (m−n) must be non-zero and the two weighted coordinates take **opposite signs**.

#### Direction cosines and direction ratios

If a line makes angles α, β, γ with the positive x, y, z axes, its **direction cosines** are (l, m, n) = (cos α, cos β, cos γ). They obey:

> l² + m² + n² = 1

Any triple (a, b, c) proportional to (l, m, n) is a set of **direction ratios**. To convert ratios to cosines, divide each component by √(a² + b² + c²).

#### Angle between two lines

For lines with direction cosines (l₁, m₁, n₁) and (l₂, m₂, n₂):

> cos θ = l₁l₂ + m₁m₂ + n₁n₂

If only direction ratios are given, **normalise first**, then apply the formula. JAMB typically expects the **acute** angle, so take |cos θ| if needed.

#### Typical JAMB question patterns

1. Compute the distance between two named points — plug into the distance formula.
2. Find coordinates of a point dividing a segment internally or externally.
3. Test the identity l² + m² + n² = 1 given three numbers as direction cosines.
4. Compute the angle between two lines whose direction ratios are stated.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and deeper reasoning

- **Direction cosines are not unique in sign.** The line pointing from A to B and the same line pointing from B to A have direction cosines that are negatives of each other; both still satisfy l² + m² + n² = 1. JAMB rarely tests this, but be alert if a "find the direction cosines" question gives extra freedom.
- **Distance formula reduces to 2D** when one coordinate is identical across both points (e.g. z₁ = z₂), giving d = √((x₂−x₁)² + (y₂−y₁)²). Recognising this saves time.
- **External division pitfall:** when the ratio m : n has m ≠ n, swapping the points P and Q changes the external point. Verify which endpoint is which before applying the minus signs.
- **Plane vs line equations:** a plane in Cartesian form is **ax + by + cz + d = 0**; a line in symmetric form is **(x − x₀)/l = (y − y₀)/m = (z − z₀)/n**. Mixing these up is a frequent JAMB trap when a question is phrased as a "word problem about a surface".

#### Connection to adjacent topics

Direction cosines tie directly into **vectors** — the unit vector along a line is exactly (l, m, n). The dot-product form l₁l₂ + m₁m₂ + n₁n₂ is the cosine of the angle between two vectors, so this topic bridges 3D geometry with vector algebra. The plane equation ax + by + cz + d = 0 also emerges as the set of points whose position vector is perpendicular to the normal vector (a, b, c).

#### Common mistakes JAMB exploits

- Squaring only one difference and forgetting the other two in the distance formula.
- Using (mx₂ + nx₁)/(m − n) for **internal** division instead of (m + n).
- Treating direction **ratios** (a, b, c) as if they were direction cosines — plugging them straight into l² + m² + n² = 1 will fail unless a² + b² + c² = 1.
- Reporting θ > 90° when the question asks for "the angle between the lines" (conventionally acute).

#### Practice prompts

1. Find the distance between A(1, −2, 3) and B(4, 0, 5), then state the midpoint of AB.
2. A line has direction ratios (2, −1, 2). Compute its direction cosines and verify the identity l² + m² + n² = 1.

---

## Continue your study

- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Three-Dimensional Geometry Basics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jamb/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
