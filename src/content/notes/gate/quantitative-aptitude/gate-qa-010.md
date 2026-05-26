---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-010
topicName: "Mensuration (2D)"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "An advanced diagram showing composite 2D shapes — a rectangle with a semicircle attached on one side, and a right triangle with altitude drawn inside, labeled with all relevant measurements"
country: India
generated: ai-v1
---

# Mensuration (2D)

### 🟢 Lite

### Key Formula/Rule
Area of rectangle = length × breadth; Circumference of circle = 2πr; Area of triangle = ½ × base × height.

### Quick Memory Trick
**"PIRL"** — **P**izza (**π**r²) **I**s **R**ound, **L**ength × **L**adies (for rectangle area).

### 1-Sentence Summary
For 2D shapes, "area" fills the inside (length × width for rectangles, π × radius² for circles), while "perimeter" walks the outside edge.

### Quick Example
Q: A rectangle has length 8 cm and breadth 5 cm. Find its area.
A: Area = 8 × 5 = **40 cm²**

### Must Remember
- Square: all 4 sides equal, area = a², perimeter = 4a
- Rectangle: opposite sides equal, area = l × b
- Circle: area = πr², circumference = 2πr (diameter = 2r)
- Triangle: area = ½ × base × height; special case — right triangle hypotenuse² = base² + height²

### 🟡 Standard

### Concept Explanation

Mensuration is just a fancy word for "measuring shapes." When you want to know how much space a flat shape covers — like how much carpet you need for a room — you're looking for its **area**. When you want to know how far it is to walk around the edge — like how much fencing you need for a plot of land — you're looking for its **perimeter** or **circumference**.

The four shapes that show up most often in exams are squares, rectangles, circles, and triangles. Each one has its own personality. A square is the simplest — all four sides are identical, so you only need to know one number (the side length) to figure out everything about it. A rectangle is like a stretched square — opposite sides match, so you need two numbers: length and breadth. A circle is different because it has no corners at all; everything revolves around one special number called the radius, which is the distance from the center to any point on the edge. A triangle is the simplest polygon — just three sides — and its area depends on how tall it is (the height), measured straight up from the base.

### Key Formulas

| Symbol | Meaning |
|--------|---------|
| a | Side of a square |
| l | Length of a rectangle |
| b | Breadth of a rectangle (or base of a triangle) |
| r | Radius of a circle |
| d | Diameter of a circle (d = 2r) |
| h | Height of a triangle |
| π | Pi, approximately 3.14159 or 22/7 |

### Step-by-Step Example

**Q:** The radius of a circle is 7 cm. Find its area and circumference.

**Step 1:** Identify the formula for area of a circle.
Area = πr²

**Step 2:** Substitute r = 7.
Area = π × 7² = π × 49 = 22/7 × 49 = 154 cm²

**Step 3:** Identify the formula for circumference.
Circumference = 2πr

**Step 4:** Substitute r = 7.
Circumference = 2 × π × 7 = 2 × 22/7 × 7 = 44 cm

**Answer:** Area = 154 cm², Circumference = 44 cm

### Common Mistakes

- Using diameter instead of radius in the area formula → Always square the radius first, not the diameter. If given diameter, halve it first.
- Confusing area with perimeter → Area is inside (measured in square units), perimeter is the boundary walk (measured in linear units).
- Forgetting to use consistent units → If length is in cm, area will be in cm². Mixing meters and centimeters destroys accuracy.

### Quick Test (2 Qs)

1. Q: A rectangle's length is 12 cm and its diagonal is 13 cm. What is its area? Options: A) 30 cm² B) 60 cm² C) 78 cm² D) 156 cm². Ans: **B** (Reason: breadth² = 13² – 12² = 169 – 144 = 25, so breadth = 5; area = 12 × 5 = 60 cm²)

2. Q: The circumference of a circle is 44 cm. What is its area? Options: A) 77 cm² B) 154 cm² C) 308 cm² D) 616 cm². Ans: **B** (Reason: 2πr = 44 → r = 7 cm; area = πr² = 22/7 × 49 = 154 cm²)

### 🔴 Extended

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

*Content adapted based on your selected roadmap duration.*
