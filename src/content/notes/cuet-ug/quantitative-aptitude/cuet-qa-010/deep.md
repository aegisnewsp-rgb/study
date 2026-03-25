---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-010
topicName: "Geometry & Mensuration — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "Draw a composite solid: a cylinder with a cone on top (like a tent). Label the frustum portion. Show how Heron's formula can split a trapezium into two triangles and a rectangle."
country: India
generated: ai-v1
---



## Geometry & Mensuration — Deep Dive

### Full Concept

**Why πr² is the Area of a Circle**
Most students just memorize "πr²" without understanding *why*. Here's the intuition: imagine a circle as made of countless tiny slices like a pizza, each a thin triangle with height ≈ r and base ≈ arc length. The sum of all bases equals the circumference (2πr). So total area = ½ × r × (sum of all bases) = ½ × r × 2πr = πr². The slices cancel out perfectly. That's why π is fundamental to circles — it bridges the linear (circumference) and the squared (area).

**Heron's Formula — The Semi-Perimeter Approach**
For triangles where you don't know the height, Heron's formula is a lifesaver. The semi-perimeter s = (a + b + c)/2. Then Area = √[s(s-a)(s-b)(s-c)].

Why does this work? It's derived from the basic triangle area formula combined with the Pythagorean theorem. The semi-perimeter trick essentially encodes the height calculation into the formula so you never need to find the height explicitly.

**Frustum of a Cone**
A frustum is what you get when you slice the top off a cone. It appears in many practical problems — buckets, lampshades, traffic cones cut off at the top. The slant height l = √[h² + (R - r)²] where R and r are the two radii and h is the vertical height. Surface area of frustum = π(R + r) × l (curved part) + πR² + πr² (both ends).

**Cube vs Cuboid — Same Volume, Different Surface Area**
Here's a fascinating insight: a cube and a cuboid can have the same volume but very different surface areas. For a given volume V, surface area is minimized when the shape is a cube (all sides equal). This is why cubes are efficient — they pack the most volume with the least surface area. This concept appears in "minimum material to contain X volume" type problems.

**Painting Walls Problem**
When a room's walls need painting (but not the floor or ceiling), you calculate the wall area as: perimeter × height minus area of doors and windows. Common trap: students forget to subtract the area of openings, or they confuse total wall area with total surface area of all four walls.

**Units Conversion Trap**
This trips up even good students: 1 m = 100 cm. So 1 m² = (100 cm)² = 10,000 cm². Similarly, 1 m³ = 1,000,000 cm³. Always convert to the same unit *before* doing calculations. If the problem gives area in cm² and asks for cost in ₹/m², convert first.

**Combination of Solids**
Real objects aren't just one shape — they're combinations. To find total volume: add volumes of individual parts. For surface area: add curved surface areas, but be careful! When two solids are joined, the surface at the joint disappears from the total surface area. A capsule (cylinder + two hemispheres) has less surface area than the sum of its parts because the flat circular faces where they join are hidden.

### Multiple Approaches

**Standard:** Identify shape → recall formula → substitute values → calculate.

**Shortcut:** For area of regular polygons you can't easily split: use the fact that any quadrilateral can be divided into two triangles and use Heron's formula on each. For related 2D/3D shapes (e.g., a cylinder and a cone on top), use combined volume = V_cylinder + V_cone.

### CUET-Level Problems

**Q1:** A solid metal cylinder of height 10 cm and radius 3 cm is melted and recast into spherical balls of radius 1 cm each. How many balls are formed?

Working: Volume of cylinder = πr²h = π × 9 × 10 = 90π cm³
Volume of one sphere = ⁴⁄₃πr³ = ⁴⁄₃π × 1 = ⁴⁄₃π cm³
Number of balls = 90π ÷ (⁴⁄₃π) = 90 × ³⁄₄ = 67.5
Answer: **67 or 68** (since you need complete balls, 67 full balls can be made, with some metal left over — CUET usually expects you to take integer part: 67)

**Q2:** The radius of a sphere is increased by 10%. By what percentage does its surface area increase?

Working: Original SA = 4πr²
New radius = 1.1r
New SA = 4π(1.1r)² = 4π × 1.21 × r² = 1.21 × 4πr²
Increase = 21%
Answer: **21%**

### Tricky Cases
- **When given slant height but need vertical height for cone volume:** Always use l² = h² + r² to find h first. Volume uses h, not l.
- **Hemisphere vs half-sphere:** A hemisphere is exactly half a sphere — volume = ½ × (⁴⁄₃πr³) = ⅔πr³. But curved surface area = 2πr² (half of 4πr²), while total surface area includes the base circle → 3πr².
- **When solid is hollow:** Subtract inner volume from outer volume. Example: a pipe is a cylinder with another cylinder removed from inside.
- **Units mismatch in area:** If sides are in cm and answer options in m², convert cm² to m² by dividing by 10,000 (not 100!).
