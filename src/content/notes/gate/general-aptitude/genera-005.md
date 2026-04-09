---
exam: gate
examName: "GATE"
subject: quant
subjectName: "General Aptitude"
topic: genera-005
topicName: "Topic 5"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Geometry and Mensuration

Geometry in GATE's General Aptitude section tests your ability to visualize shapes, apply area/volume formulas, and use properties of similar figures. Mensuration (3D geometry) is a perennial favorite — the formulas are fixed, and so are the ways GATE tricks you.

---

### 🟢 Lite — Quick Review (1h–1d)

> **Must-know formulas:**
> - **Triangle:** Area = ½ × base × height; Perimeter = a + b + c
> - **Circle:** Area = πr²; Circumference = 2πr
> - **Rectangle:** Area = l × w; Perimeter = 2(l + w)
> - **Cube:** Volume = a³; Surface area = 6a²
> - **Cylinder:** Volume = πr²h; Curved SA = 2πrh; Total SA = 2πr(r + h)
> - **Sphere:** Volume = (4/3)πr³; Surface area = 4πr²
> - **Pythagorean theorem:** a² + b² = c² (for right-angled triangles)

**⚡ GATE exam tip:** When a problem mentions "the area of a semicircle," the formula is (1/2)πr² — don't forget the π. GATE often tests whether you retain π or approximate it as 22/7.

**⚡ Quick trick:** In an isosceles triangle with equal sides a and base b, the height = √(a² − b²/4). Use this when asked for area or altitude.

**⚡ Common trap:** Don't confuse **curved surface area** (lateral surface) with **total surface area**. For a cone, CSA = πrl, TSA = πr(r + l).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Triangles

**Classification by sides:**
- Equilateral: all sides equal, all angles = 60°
- Isosceles: two sides equal
- Scalene: all sides different

**Area formulas:**
- ½ × base × height
- Heron's formula: √[s(s−a)(s−b)(s−c)] where s = (a+b+c)/2 (semiperimeter)
- For equilateral triangle of side a: Area = (√3/4)a²

**Right-angled triangle (Pythagorean triples):**
| Set | Ratio |
|-----|-------|
| 3-4-5 | 3:4:5 |
| 5-12-13 | 5:12:13 |
| 7-24-25 | 7:24:25 |
| 8-15-17 | 8:15:17 |

**GATE Example (2019, 1 mark):** Find the area of a triangle with sides 9, 10, and 17 cm.
> s = (9+10+17)/2 = 18. Area = √[18×9×8×1] = √1296 = **36 cm²**. (Note: 9²+10²=181 ≠ 289=17², so not right-angled.)

**Similar triangles:** If two triangles are similar, the ratio of their areas = (ratio of corresponding sides)².

#### Circles

- **Area:** πr²
- **Circumference:** 2πr
- **Arc length:** (θ/360) × 2πr (where θ is the central angle in degrees)
- **Sector area:** (θ/360) × πr²

**GATE Example:** A circle has radius 7 cm. Find the area of a sector with a 60° angle.
> Area = (60/360) × π × 7² = (1/6) × 22/7 × 49 = **77/3 ≈ 25.67 cm²**.

#### Polygons

**Regular n-gon:**
- Each interior angle = [(n−2) × 180°] / n
- Each exterior angle = 360°/n
- Sum of interior angles = (n−2) × 180°

**Key polygons to know:**
| Polygon | Number of sides | Sum of angles |
|---------|----------------|---------------|
| Triangle | 3 | 180° |
| Quadrilateral | 4 | 360° |
| Pentagon | 5 | 540° |
| Hexagon | 6 | 720° |

#### 3D Mensuration — Key Solids

**Cube (side a):**
- Volume = a³
- Surface area = 6a²
- Diagonal = a√3

**Cuboid (l × b × h):**
- Volume = l × b × h
- Surface area = 2(lb + bh + hl)
- Diagonal = √(l² + b² + h²)

**Cylinder (radius r, height h):**
- Volume = πr²h
- Curved surface area = 2πrh
- Total surface area = 2πr(r + h)

**Cone (radius r, height h, slant height l):**
- l = √(r² + h²)
- Volume = (1/3)πr²h
- Curved surface area = πrl
- Total surface area = πr(r + l)

**Sphere (radius r):**
- Volume = (4/3)πr³
- Surface area = 4πr²

**GATE Example (2017, 1 mark):** The total surface area of a cube is 216 cm². Find its volume.
> 6a² = 216 → a² = 36 → a = 6 cm. Volume = 6³ = **216 cm³**.

---

### 🔴 Extended — Deep Study (3mo+)

#### Similar Figures — Area and Volume Ratios

**Important principle:** When two similar figures have corresponding sides in ratio k:1, then:
- Their **areas** are in ratio k²:1
- Their **volumes** are in ratio k³:1

**GATE Advanced Example:** Two spheres have radii in the ratio 2:3. Find the ratio of their volumes.
> Volume ratio = (2³):(3³) = 8:27.

#### Prism and Pyramid

**Right Prism:**
- Volume = Base area × height
- Lateral surface area = Perimeter of base × height

**Regular Pyramid:**
- Volume = (1/3) × Base area × height
- Lateral surface area = (1/2) × Perimeter of base × slant height

#### Frustum of a Cone

When a cone is sliced parallel to its base, the remaining portion is a frustum:
- Volume = (1/3)πh(R² + r² + Rr) where R and r are the radii of the two bases
- CSA = π(R + r) × slant height (where slant height = √[h² + (R−r)²])

#### Hemisphere

**Hemisphere (radius r):**
- Volume = (2/3)πr³
- Curved surface area = 2πr²
- Total surface area = 3πr² (including the base circle)

#### Combination of Solids

When multiple solids are combined (e.g., a cone on top of a cylinder), add volumes and surface areas carefully — shared faces are NOT exposed in the total surface area.

**GATE Example:** A wooden article is made by scooping out a hemisphere from each end of a solid cylinder of height 14 cm and radius 3 cm. Find the remaining volume.
> Cylinder volume = π×3²×14 = 126π. Two hemispheres = 1 full sphere = (4/3)π×3³ = 36π.
> Remaining = 126π − 36π = **90π cm³**.

#### Coordinate Geometry Basics

Distance between two points (x₁, y₁) and (x₂, y₂):
> d = √[(x₂−x₁)² + (y₂−y₁)²]

Section formula (internal division):
> Point dividing line joining (x₁, y₁) and (x₂, y₂) in ratio m:n = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))

Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)

Area of triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃):
> Area = ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|

#### Pythagorean Theorem Applications

**GATE trick:** The converse of Pythagorean theorem also works: if a² + b² = c², the triangle is right-angled with c as the hypotenuse.

**Distance from a point to a line:**
> Distance from (x₀, y₀) to Ax + By + C = 0 is |Ax₀ + By₀ + C| / √(A² + B²)

#### Angle Bisector Theorem

In triangle ABC, if AD bisects angle A (meeting BC at D):
> BD/DC = AB/AC

#### Quadrilaterals

| Type | Properties |
|------|-----------|
| Parallelogram | Opposite sides parallel, opposite angles equal, diagonals bisect each other |
| Rectangle | Parallelogram + right angles, diagonals equal |
| Rhombus | Parallelogram + all sides equal, diagonals perpendicular |
| Square | Rectangle + Rhombus |
| Trapezium | One pair of parallel sides |

Area of trapezium = ½(sum of parallel sides) × height

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
