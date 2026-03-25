---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-010
topicName: Mensuration (2D) — Deep Dive
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "An advanced diagram showing composite 2D shapes — a rectangle with a semicircle attached on one side, and a right triangle with altitude drawn inside, labeled with all relevant measurements"
country: India
generated: ai-v1
---



## Mensuration (2D) — Deep Dive

### Concept Deep Dive

Let's really understand what area and perimeter *mean*, not just how to calculate them. Think of area as how much paint you need to fill a shape, and perimeter as how much tape you'd need to go around its edge. They're measuring completely different things — one fills, one wraps.

**The Square** is the most symmetric shape in nature. Every side is the same. If you double the side length of a square, its area quadruples — because area scales by the *square* of the linear dimension. This is a pattern that appears everywhere in physics and engineering, which is why GATE loves testing it.

**The Rectangle** is essentially a square that got stretched in one direction. The diagonal of a rectangle is special: it's always the longest distance between any two points, and it satisfies the Pythagorean theorem (d² = l² + b²). This connects rectangles to right triangles — split any rectangle along its diagonal and you get two identical right triangles.

**The Circle** is where things get interesting. Every circle is defined by a single number: its radius. From that, everything else follows. The ratio of circumference to diameter is always π — this is one of the most important constants in all of mathematics. What surprises people is that the area of a circle is actually equal to π times the radius squared, which you can visualize as cutting the circle into infinitely thin pizza slices and rearranging them into a triangle with height = r and base = 2πr. Trippy, but true.

**The Triangle** has the most formulas to remember because triangles come in so many varieties. The most powerful relationship is Heron's formula, which lets you find the area when you only know all three sides — incredibly useful when there's no obvious height. And the Pythagorean theorem (a² + b² = c² for right triangles) is arguably the single most tested concept in all of quantitative aptitude.

### Advanced Formula Derivation

**Heron's Formula for Triangle Area:**

Imagine you know all three sides of a triangle but none of its angles or its height. You can still find the area using Heron's formula.

First, calculate the semi-perimeter: s = (a + b + c) / 2

Then the area = √[s(s – a)(s – b)(s – c)]

Why does this work? It's derived from the basic area formula and the law of cosines. The intuition is: s(s–a)(s–b)(s–c) is actually (area)² expressed in terms of side lengths. The semi-perimeter trick avoids needing the height or angles directly.

**Example:** Sides are 5, 6, and 7. Then s = 9. Area = √[9 × (9-5) × (9-6) × (9-7)] = √[9 × 4 × 3 × 2] = √216 = 6√6 ≈ 14.7

**The πr² derivation for circles:**

Cut a circle into 360 thin sectors. Now alternate the direction of every other sector so they interlock. You get something that looks almost like a parallelogram with height = r and base = πr (half the circumference). Area = base × height = πr × r = πr².

### GATE-Level Numerical Problems

**Q1 (GATE 2020 — style):**
The area of a right triangle is 30 cm² and its hypotenuse is 13 cm. Find the length of the shorter leg.

- Working: Let legs be a and b. a × b / 2 = 30 → ab = 60. Also a² + b² = 13² = 169. (a + b)² = a² + b² + 2ab = 169 + 120 = 289 → a + b = 17. Solve: a and b are roots of t² – 17t + 60 = 0 → (t – 12)(t – 5) = 0 → legs are 12 and 5.
- Answer: **5 cm** (shorter leg)
- Common error: Picking the wrong root. Always verify by checking a² + b² = 169.

**Q2 (GATE 2019 — style):**
A wire is bent into a circle with radius 7 cm. If the same wire is bent into a square, what is the ratio of the circle's area to the square's area?

- Working: Wire length = circumference = 2πr = 44 cm. For square, perimeter = 44 → side = 44/4 = 11 cm. Square area = 121 cm². Circle area = πr² = 154 cm². Ratio = 154 : 121 = **14 : 11**.
- Answer: **14 : 11**
- Common error: Forgetting to square the radius for area. If using π = 22/7, keep it consistent throughout.

**Q3:**
A rectangular park is 60 m long and 40 m wide. It has a circular fountain of radius 10 m at its center, and a triangular garden in one corner with base 20 m and height 15 m. Find the total area of the park excluding the fountain and the triangular garden.

- Working: Park area = 60 × 40 = 2400 m². Fountain area = π × 10² = 314 m². Garden area = ½ × 20 × 15 = 150 m². Excluded total = 314 + 150 = 464 m². Remaining = 2400 – 464 = **1936 m²**.
- Answer: **1936 m²**

### Multiple Approaches

**Method A (Standard):** Use formulas directly — identify shape → recall formula → substitute → calculate.

**Method B (Unit cancellation):** Before calculating, write out the formula with units included. This catches mistakes like "adding cm to cm²" early. Example: m × m = m² ✓, m + m² = ERROR ✓ caught.

**When to use:** Unit cancellation is your safety net for complex composite shape problems. The standard approach is fastest for single-shape problems.

### Tricky Cases

- **Circle inside a square:** When a circle is inscribed in a square (touches all four sides), the diameter equals the side of the square. When a circle is circumscribed around a square (touches all four vertices), the diameter equals the diagonal of the square.
- **Triangle with same area as a rectangle:** Two completely different shapes can have identical areas. Never assume "bigger-looking" shape has bigger area — always calculate.
- **Rounding π:** GATE questions usually expect π = 22/7 or 3.14. When neither is specified, leave your answer in terms of π (e.g., 44π) unless forced otherwise.
