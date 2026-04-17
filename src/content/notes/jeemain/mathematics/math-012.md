---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-012
topicName: Applications of Derivatives
weight: 5
country: india
generated: "2026-04-17T22:51:00.000000"
diagramPrompt: "Clean educational diagram showing derivative applications tangent normal with clear labels, white background, color-coded curves, exam-style illustration"





---
# Applications of Derivatives

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Applications of Derivatives** — Key Facts for JEE Main
Equation of tangent at (x₁, y₁): (y − y₁) = f'(x₁)(x − x₁)
Equation of normal: (y − y₁) = −1/f'(x₁) · (x − x₁) (perpendicular to tangent)
Rate of change: dy/dx gives rate; related rates use dy/dt = (dy/dx) · (dx/dt)
Maxima: f'(x) = 0 and f''(x) < 0; Minima: f'(x) = 0 and f''(x) > 0
Mean Value Theorem: f'(c) = [f(b)−f(a)]/(b−a) for some c ∈ (a, b)
⚡ Exam tip: JEE Main tests tangent/normal equations and maxima/minima regularly — practice with varied functions!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Applications of Derivatives** — JEE Main Study Guide

**Tangent and Normal:**
- Slope of tangent at (x₁, y₁): m = f'(x₁)
- Equation: y − y₁ = m(x − x₁)
- Slope of normal = −1/m (perpendicular)
- If m = 0 (horizontal tangent): normal is vertical line x = x₁
- If m = ∞ (vertical tangent): normal is horizontal line y = y₁

**Angle between curves:**
Angle θ between two curves at intersection satisfies tan θ = |m₁ − m₂|/(1 + m₁m₂)|
Where m₁, m₂ are slopes of tangents at point of intersection

**Monotonicity:**
- f'(x) > 0 on (a, b) → f is strictly increasing
- f'(x) < 0 on (a, b) → f is strictly decreasing
- f'(x) ≥ 0 → f is non-decreasing (similarly for non-increasing)

**Critical points:**
f'(x) = 0 or f'(x) does not exist; these are candidates for maxima/minima

**First derivative test:**
- If f' changes from positive to negative at c: local maximum at c
- If f' changes from negative to positive at c: local minimum at c
- If f' does not change sign: neither max nor min

**Second derivative test:**
- f'(c) = 0 and f''(c) > 0 → local minimum
- f'(c) = 0 and f''(c) < 0 → local maximum
- f''(c) = 0 → test is inconclusive → use first derivative test

**Global max/min on [a, b]:**
Evaluate f at critical points inside (a, b) and at endpoints a, b; highest is global max, lowest is global min

**Rate problems:**
- dy/dt = (dy/dx) · (dx/dt)
- Always identify what is changing and relate them through the function

**Approximation:**
For small Δx, Δy ≈ f'(x) · Δx; useful for estimating function values near known points

- **Key formula:** Tangent: y − y₁ = f'(x₁)(x − x₁); Normal: y − y₁ = −(x − x₁)/f'(x₁)
- **Common trap:** For function with vertical tangent, f'(x) = ∞, so normal is horizontal line
- **Exam weight:** 2 questions per year (8 marks); tangent/normal and maxima/minima are most common

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Applications of Derivatives** — Comprehensive JEE Main Notes

**Rolle's theorem:**
If f(a) = f(b) and f is continuous on [a,b] and differentiable on (a,b), then ∃ c ∈ (a,b) where f'(c) = 0
Geometrically: there is at least one stationary point where tangent is horizontal

**Lagrange's MVT:**
If f is continuous on [a,b] and differentiable on (a,b), then ∃ c ∈ (a,b) where f'(c) = [f(b)−f(a)]/(b−a)
Interpretation: chord joining (a,f(a)) and (b,f(b)) is parallel to tangent at some point

**Using MVT to prove inequalities:**
If f'(x) ≤ M on (a,b) and f is continuous, then |f(b) − f(a)| ≤ M|b − a|

**Concavity and points of inflection:**
- f''(x) > 0 on interval → curve is concave up (cup-shaped)
- f''(x) < 0 on interval → curve is concave down (cap-shaped)
- Point of inflection: f''(x) = 0 or undefined, and f'' changes sign

**Curvature:**
Radius of curvature R at (x, y) = [(1 + (dy/dx)²)^{3/2}] / |d²y/dx²|
For parametric (x(t), y(t)): R = [(ẋ² + ẏ²)^{3/2}] / |ẋÿ − ÿẋ|

**Envelope of family of curves:**
Given y = f(x, a), eliminate a between y = f(x,a) and ∂f/∂a = 0
Result gives the envelope curve that is tangent to each member of the family

**Orthogonal trajectories:**
For family of curves F(x, y, c) = 0, first find differential equation by eliminating c
Replace dy/dx by −dx/dy to get OT differential equation, then solve

**Approximation formula:**
√(25.3) = √(25 + 0.3) ≈ 5 + 0.3/(2·5) = 5 + 0.03 = 5.03
General: √(a + δ) ≈ √a + δ/(2√a) for small δ

**Differential of arc length:**
ds = √[(dx)² + (dy)²]
For y = f(x): ds/dx = √[1 + (dy/dx)²]
For x = f(t), y = g(t): ds/dt = √[(dx/dt)² + (dy/dt)²]

**Applications in physics:**
- Velocity = dy/dt, Acceleration = d²y/dt²
- For motion along line: v = dx/dt, a = dv/dt = d²x/dt²
- Related rates: for circular ripple (radius r expanding at dr/dt), area A = πr² → dA/dt = 2πr·dr/dt

**Optimization problems:**
Steps: identify variable to optimize, express in terms of single variable, find domain, differentiate and set = 0, check endpoints and second derivative

**Mean Value Theorem for Cauchy:**
If f and g are continuous on [a,b] and differentiable on (a,b) and g'(x) ≠ 0, then ∃ c where:
[f(b)−f(a)]/[g(b)−g(a)] = f'(c)/g'(c)

**Advanced maxima/minima:**
- For two variables with constraint, use Lagrange multipliers
- If z = f(x,y) subject to g(x,y) = 0, then ∇f = λ∇g

- **Remember:** f'(x) > 0 → increasing; f'(x) < 0 → decreasing; f''(x) > 0 → concave up; Max: f'=0, f''<0; Min: f'=0, f''>0; Tangent: y−y₁ = f'(x₁)(x−x₁); Normal: slope = −1/f'(x₁)
- **Previous years:** "Find equation of tangent to y² = x³ at (1,1)" [2023]; "Find maximum value of x(1−x) for x∈[0,1]" [2024]; "If radius of sphere is increasing at 2 cm/s, find rate of change of volume when r=5 cm" [2024]

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
- Applications of Derivatives: 2 questions per year, 8 marks
- Common patterns: equation of tangent/normal, find local/global maxima and minima, rate problems, monotonicity
- Weight: very high frequency, highly scoring

### 💡 Pro Tips
- For tangent/normal equations, always find the slope first
- In rate problems, always state what dy/dx equals and relate through the given relation
- For optimization, express everything in terms of one variable before differentiating
- Check endpoints for global max/min — critical points alone don't guarantee global extremes
- The first derivative test is more reliable than the second when f''(c) = 0
- For approximation using differentials: Δy ≈ dy = f'(x)·Δx

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*