---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-025
topicName: Application of Integrals
weight: 5
country: india
generated: "2026-04-17T23:09:00.000000"
diagramPrompt: "Clean educational diagram showing Application of Integrals area between curves with clear labels, white background, color-coded regions, exam-style illustration"





---
# Application of Integrals

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Application of Integrals** — Key Facts for JEE Main
Area under curve y = f(x) from x = a to x = b: ∫_a^b f(x) dx (above x-axis only; below x-axis gives negative)
Area between curves y = f(x) and y = g(x): ∫_a^b |f(x) − g(x)| dx where a, b are intersection points
For region bounded by curves in polar coordinates: Area = ½∫ r² dθ
For parametric curves: Area = ∫ y dx with x as parameter
⚡ Exam tip: Always find intersection points first — they give the limits of integration. Sketch the curves mentally!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Application of Integrals** — JEE Main Study Guide

**Area under curve (Cartesian):**
- Region above x-axis: A = ∫_a^b f(x) dx
- Region below x-axis: A = −∫_a^b f(x) dx (take absolute)
- Total area between curve and x-axis: A = ∫_a^b |f(x)| dx

**Area between two curves:**
When f(x) ≥ g(x) on [a, b]: A = ∫_a^b [f(x) − g(x)] dx
When curves cross, split into intervals where one is above the other

**Steps to find area:**
1. Draw rough sketch of curves
2. Find intersection points (solve equations simultaneously)
3. Determine which curve is above in each interval
4. Set up integral with correct limits
5. Evaluate

**Area bounded by curves:**
- If curves are y = f(x) and y = g(x): use horizontal strips or vertical strips
- For curves given as x = f(y) and x = g(y): integrate with respect to y: A = ∫_c^d [f(y) − g(y)] dy

**When to use vertical vs horizontal strips:**
- Vertical strips: when it's easier to express y as function of x
- Horizontal strips: when curves are better expressed as x = f(y) or when bounded region is tall and narrow

**Area of region bounded by:**
- Parametric curve x = f(t), y = g(t): A = ∫ y (dx/dt) dt with t-limits
- Polar curve r = f(θ): A = ½ ∫ r² dθ

**Standard areas:**
- Circle x² + y² = r²: total area = πr²; quarter area = πr²/4
- Ellipse x²/a² + y²/b² = 1: total area = πab
- Parabola y² = 4ax and x = a: area = 4a²/3

**Area in polar coordinates:**
A = ½ ∫_{θ₁}^{θ₂} r² dθ for region bounded by r = f(θ) between angles θ₁ and θ₂

**Area of sector:**
In polar coordinates, sector from θ = 0 to θ = α has area = (1/2)r²α (if r is constant)
For variable r, use the integral formula

- **Key formula:** Area = ∫_a^b |f(x) − g(x)| dx; polar: A = ½∫ r² dθ
- **Common trap:** When finding area between curve and x-axis, if curve dips below axis, you must split the integral and add absolute values
- **Exam weight:** 1 question per year (4 marks); often combined with differentiation or differential equations

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Application of Integrals** — Comprehensive JEE Main Notes

**Area using horizontal strips:**
When region is bounded by curves x = f(y) and x = g(y):
A = ∫_{c}^{d} |f(y) − g(y)| dy
Example: region bounded by y² = 4x and x = 4 → use y-limits from y = −4 to y = 4
x = y²/4 from parabola, x = 4 from line; A = ∫_{-4}^{4} (4 − y²/4) dy

**Volume of solid of revolution:**
- About x-axis: V = π∫ y² dx
- About y-axis: V = π∫ x² dy
- Shell method (about y-axis using vertical strip): V = 2π∫ x·y dx

**Volume using cylindrical shells:**
- Strip parallel to axis of rotation: use washers/discs
- Strip perpendicular to axis: use shells
For region rotated about y-axis using vertical strip: V = 2π∫ x·f(x) dx

**Volume of solid with known cross-section:**
If area of cross-section perpendicular to x-axis is A(x), then V = ∫ A(x) dx

**Area between polar curves:**
For two curves r₁(θ) and r₂(θ): A = ½∫ (r₁² − r₂²) dθ with appropriate limits
Need to find where r₁ = r₂ (intersection angles)

**Important polar curves and areas:**
- Cardioid r = a(1 + cos θ): area = 3πa²/2
- Lemniscate r² = a² cos 2θ: area = a²
- Circle r = 2a cos θ: area = πa²

**Area bounded by parametric curve:**
For x = f(t), y = g(t): A = ∫ y (dx/dt) dt with t from t₁ to t₂
If curve is traced more than once, account for that

**Symmetry in area calculation:**
- About x-axis: if region is symmetric, double the area for y ≥ 0
- About y-axis: if symmetric, double the area for x ≥ 0
- About origin: if traced symmetrically, may need to multiply appropriately

**Area using double integration:**
A = ∫∫ dx dy over region
For region bounded by curves: set up limits carefully

**Wronskian and area:**
Not directly relevant, but used in differential equations context

**Surface area of revolution:**
About x-axis: S = 2π∫ y √(1 + (dy/dx)²) dx
About y-axis: S = 2π∫ x √(1 + (dx/dy)²) dy

**Arc length:**
- Cartesian: s = ∫ √(1 + (dy/dx)²) dx
- Parametric: s = ∫ √((dx/dt)² + (dy/dt)²) dt
- Polar: s = ∫ √(r² + (dr/dθ)²) dθ

**Bounded region in polar:**
For curve r = f(θ), area = (1/2)∫ r² dθ from θ₁ to θ₂
If curve goes to origin, find angle where r = 0 for limits

**Area common to two curves:**
For intersection of circle and parabola, etc.:
Find intersection points, determine which curve is inside in each region

**Volume of solid generated by rotating area between curves:**
- About x-axis: washers method: π∫ (y₁² − y₂²) dx where y₁ > y₂
- About y-axis: washers: π∫ (x₁² − x₂²) dy

**Integration by parts for area:**
Sometimes integration by parts needed to evaluate ∫ x·f(x) dx

**Proving area formulas:**
Using integration, we can derive area of circle = πr² by integrating y = √(r² − x²) from −r to r

**Area under rate curve:**
If dy/dx gives rate, area under rate curve gives total change
Example: velocity-time graph, area under curve = displacement

**Mean value via integration:**
Average value of f(x) on [a, b] = (1/(b−a))∫_a^b f(x) dx

**Using substitution in area:**
When region is transformed, Jacobian may be needed for double integral

- **Remember:** For area between curves y₁(x) and y₂(x): A = ∫_a^b |y₁ − y₂| dx; find intersection points for limits; polar area = (1/2)∫ r² dθ
- **Previous years:** "Find area bounded by y = x² and y = x" [2023]; "Find area of region bounded by y = sin x from x=0 to x=2π and x-axis" [2024]; "Find area of circle r = 2a cos θ" [2024]

---

## 📊 JEE Main Exam Essentials

| Detail | Value |
|---|---|
| Questions | 90 (30 per subject) |
| Time | 3 hours |
| Marks | 300 (90 per subject) |
| Section | Physics (30), Chemistry (30), Mathematics (30) |
| Negative | −1 for wrong answer |
| Mode | Computer-based |

### 🎯 High-Yield Topics for JEE Main Mathematics
- Calculus (Differentiation + Integration) — ~35 marks combined
- Coordinate Geometry (straight lines, circles, conics) — ~20 marks
- Algebra (Complex Numbers, Quadratics, P&C, Probability) — ~25 marks
- Trigonometry + Inverse Trigonometry — ~15 marks
- Vector + 3D — ~15 marks

### 📝 Previous Year Question Patterns
- Application of Integrals: 1 question per year, 4 marks
- Common patterns: area between curve and x-axis, area between two curves, area in polar coordinates
- Weight: medium frequency, high scoring

### 💡 Pro Tips
- Always find intersection points first — they define the integration limits
- Sketch the curves mentally to understand which is above/below
- For area between y = f(x) and y = g(x), integrate |f(x) − g(x)| with respect to x
- If the curve goes below x-axis, the integral gives negative value — take absolute for area
- For polar curves, sketch the curve first to understand how r changes with θ
- When in doubt about which method to use (vertical/horizontal strips), try to set up both and pick whichever gives simpler integrals

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*