---
exam: cuet
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-010
topicName: "Geometry & Mensuration"
tier: unified
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "Draw a composite solid: a cylinder with a cone on top (like a tent). Label the frustum portion. Show how Heron's formula can split a trapezium into two triangles and a rectangle."
country: india
generated: 2026-03-25
lastUpdated: 2026-09-15
---

# Geometry & Mensuration

Mensuration is the least algebraic topic in quantitative aptitude and the one where a single formula error costs you everything. The formulas themselves are a memorisation job; the skill is knowing **which quantity the question is asking for** — curved or total surface area, radius or diameter, volume or area — and holding the units straight. Get those two decisions right and the rest is arithmetic you have done a hundred times.

### 🟢 Lite — Quick Review (1h–1d)

**2D shapes — area and perimeter**

| Shape | Area | Perimeter / Circumference |
| --- | --- | --- |
| Square | a² | 4a |
| Rectangle | l × b | 2(l + b) |
| Triangle | ½ × base × height | sum of three sides |
| Parallelogram | base × height | 2(a + b) |
| Rhombus | ½ d₁ × d₂ | 4a |
| Trapezium | ½ (a + b) × h | sum of four sides |
| Circle | πr² | 2πr |

**3D shapes — surface area and volume**

| Shape | Total surface area | Volume |
| --- | --- | --- |
| Cube | 6a² | a³ |
| Cuboid | 2(lb + bh + hl) | lbh |
| Cylinder | 2πr(r + h) | πr²h |
| Cone | πr(r + l) | ⅓πr²h |
| Sphere | 4πr² | ⁴⁄₃πr³ |
| Hemisphere | 3πr² | ⅔πr³ |

Curved surface area is the formula **without the circular ends**: cylinder 2πrh, cone πrl, hemisphere 2πr². If a question says TSA, add the bases back in.

**Three 30-second answers.** Circle of radius 7 cm: π × 49 = 22/7 × 49 = **154 cm²**. Rectangle 12 cm × 8 cm: 2(12 + 8) = **40 cm**. Cube of side 5 cm: 6 × 25 = **150 cm²**.

**Two habits that prevent most errors.** Decide CSA or TSA *before* you write anything, and convert every dimension to the same unit before you calculate. Working in cm² when the cost is quoted per m² is the single most common way to lose a mensuration mark.

**Memory hooks.** "**A rect = LB**" for area. "**Pie are squared**" for πr² — squared, not cubed; a circle is 2D. For volume, picture filling the solid with unit cubes; a 5 cm cube holds 125 of them.

### 🟡 Standard — Regular Study (2d–2mo)

#### The questions that ask more than they appear to

**Radius or diameter?** Every circle formula is written in r. If the question gives a diameter, halve it before substituting. Using πd² instead of πr² gives an answer four times too large, which is an error options often include precisely so that careless work is caught.

**CSA or TSA?** A closed cylinder has two circular faces as well as its curved side. TSA = 2πrh + 2πr² and CSA = 2πrh. A cone has a base; a hemisphere has a flat circular face. A sphere and a cuboid have no separate curved part, so their "total" and "surface" figures are the same number. Read the last two words of the question, not the shape name.

**Height or slant height?** A cone's volume uses the vertical height h; its curved surface area uses the slant height l, with l² = h² + r². Substituting the wrong one is a reliable way to produce a wrong answer, so extract both from the data and label them.

**2D or 3D?** Area is measured in squares, perimeter in units, volume in cubes, surface area in squares. A question about how much water a tank holds is a volume question; a question about how much paint a surface needs is an area question. The unit in the options is a reliable clue.

#### Worked Example — a practical application

**Q.** A hall is 20 m long and 15 m broad. Flooring costs ₹50 per m². Find the total cost.

- Floor area = l × b = 20 × 15 = **300 m²**
- Cost = 300 × 50 = **₹15,000**

Two multiplications and a unit check. Problems like this are worth attempting even when the numbers look trivial, because the marks come from identifying the area correctly and not from the arithmetic.

#### Heron's formula, for when there is no height

A triangle's area is ½ × base × height, but the height is often not given. Heron's formula uses only the three sides: with semi-perimeter s = (a + b + c)/2, the area is **√[s(s − a)(s − b)(s − c)]**.

A triangle with sides 13, 14 and 15 has s = 21, so the area is √[21 × 8 × 7 × 6] = √7056 = **84**. The same triangle has height 2 × 84/14 = 12 to base 14, and ½ × 14 × 12 = 84, confirming both routes. Heron's is not a different formula so much as the height calculation folded in, which is why it works for any triangle.

#### Composite solids, and the joint that disappears

Real objects are combinations: a tent is a cylinder with a cone on top, a capsule is a cylinder with two hemispheres, a bucket is a frustum. For **volume, add the parts**. For **surface area, add the parts and then subtract the hidden joints** — the circular faces where two solids meet are not part of the outside surface.

A capsule of cylinder radius 3 cm and cylinder length 10 cm, capped with hemispheres, has volume π(3²)(10) + ⅔π(3³) = 90π + 18π = **108π cm³**, but its surface area is 2π(3)(10) + 4π(3²) = 60π + 36π = **96π cm²** — the two flat circles of radius 3 that would have been exposed are internal, so they are not counted.

### 🔴 Extended — Deep Study (3mo+)

#### Why the area of a circle is πr²

Slice the circle into a great many thin wedges and bring them together into a near-rectangle. The wedges pair off so the slanted sides cancel, leaving a shape of height r and base equal to the circumference, 2πr. Its area is ½ × r × 2πr = **πr²**. The number π is simply the ratio of a circle's circumference to its diameter, and the "unrolling" shows why the same constant appears in both formulas.

#### Frustum of a cone

A frustum is a cone with its top sliced off — the shape of a bucket or a lampshade. With the two radii R and r, the vertical height h and the slant height l = √[h² + (R − r)²]:

- Curved surface area = π(R + r) × l
- Total surface area = π(R + r)l + πR² + πr²
- Volume = (⅓)πh(R² + Rr + r²)

#### Recasting problems: conservation of volume

When a solid is melted and recast, the volume is unchanged, which turns a solid-shape question into a division. A cylinder of radius 3 cm and height 10 cm has volume π × 9 × 10 = **90π cm³**. A sphere of radius 1 cm has volume ⁴⁄₃π cm³. The number of spheres is 90π ÷ (⁴⁄₃π) = 90 × ¾ = **67.5**, so 67 whole spheres with a little metal left over.

The two habits that make these reliable: **cancel π immediately** (it appears on both sides), and **decide what the question wants when the answer is not a whole number.** If it asks how many complete spheres, take the whole part and say what is left over; if it asks for a volume, keep the fraction.

#### Scaling: what changes when a length changes

If every length is multiplied by k, then area is multiplied by k² and volume by k³. So a sphere whose radius grows 10% has a surface area that grows by 1.1² = 1.21, i.e. a **21% increase**, and a volume that grows by 1.1³ = 1.331, i.e. **33.1%**. Cylinders and cones behave the same way, and this is the single most common way a mensuration question turns into a percentage question.

The same rule gives quick answers to shrinkage questions: a metal sphere melted into a smaller sphere of half the radius has 1/8 the volume, and if the metal is recast into wire of double the length, the cross-section must be a quarter of the original.

#### Minimum surface area for a fixed volume

Of all cuboids with a given volume, the **cube has the least surface area**; of all cylinders with a given volume, the one with height equal to the diameter. This is why packaging is roughly cubical and why drinks cans are roughly twice as tall as they are wide. It is worth knowing as a fact rather than deriving, because it converts an optimisation question into a single calculation.

#### Unit conversion, the part that catches everyone

Lengths are linear, areas are squared, volumes are cubed, so the conversion factors compound: 1 m = 100 cm, **1 m² = 10,000 cm²**, and **1 m³ = 1,000,000 cm³**. Dividing a cm² answer by 100 instead of 10,000 is the classic error. Convert the *dimensions* first rather than the final answer, and the arithmetic stays in whole numbers.

#### Hollow solids

A hollow cylinder is an outer cylinder minus an inner one, so its volume is π(R² − r²)h and its total surface area is 2πR(R + h) + 2πr(r + h), which includes the inner curved surface and both annular ends. Hollow spheres, hemispherical bowls and metal pipes all follow the same subtract-the-inner-solid pattern, and the same warning applies: the surface where the inner and outer surfaces meet is not exposed, but the inner surface itself is.

### 🧠 Memory Anchors

```mermaid
flowchart TD
    A[Mensuration question] --> B{What is being measured}
    B -->|length around| C[Perimeter or circumference]
    B -->|flat space| D[Area in square units]
    B -->|space inside| E[Volume in cubic units]
    B -->|outer skin| F[Surface area in square units]
    C --> G{Is it a circle?}
    G -->|yes| H[Circumference equals 2 pi r]
    G -->|no| I[Add the sides]
    D --> J{Any circle involved?}
    J -->|yes| K[Area equals pi r squared]
    J -->|no| L[Use the shape formula with the height, not the slant]
    E --> M[Is it a cone?}
    M -->|yes| N[One third pi r squared h]
    M -->|no| O[Pi r squared h for a cylinder, a cubed for a cube]
    F --> P{Curved or total?}
    P -->|curved| Q[Drop the circular bases]
    P -->|total| R[Include every exposed face]
    R --> S[Subtract any hidden joint]
```

- **"Pie are squared"** for a circle's area, and the circumference is 2πr — the same π, different power.
- **"A rect = LB."** Rectangle area, and the perimeter is the sum of the lengths times two.
- **"Trapezium uses the mean of the parallel sides."** ½(a + b)h, not abh — the average, not the product.
- **"CSA drops the bases; TSA keeps them."** Decide which one the question wants before you write a formula.
- **"Height for volume, slant for curved area."** A cone never uses l in its volume formula.
- **"Length × k, area × k², volume × k³."** A 10% longer radius means 21% more surface area and 33.1% more volume.
- **"Melting conserves volume, so cancel π."** Divide the volumes and take the whole part if you are counting objects.
- **Flashcard Q&A:**
  - *Circle r = 7?* → 154 cm², circumference 44 cm.
  - *Cube a = 5?* → TSA 150 cm², volume 125 cm³.
  - *Hemisphere r = 7?* → CSA 98π, TSA 147π, volume 686π/3.
  - *Sphere r up 10%?* → surface area up 21%, volume up 33.1%.
  - *Cylinder r = 3, h = 10 melted into r = 1 spheres?* → 67 whole spheres.

### 🎯 Exam Traps & Error Log

1. **Substituting the diameter into πr².** Halve it first; the error inflates every area by a factor of four.
2. **Using CSA when the question asks for TSA,** or adding the bases twice.
3. **Substituting the slant height for the vertical height** in a cone's volume.
4. **Forgetting to subtract the hidden joint** when a solid is assembled from two pieces and the question asks for surface area.
5. **Converting the final answer instead of the dimensions,** or dividing cm² by 100 rather than 10,000.
6. **Counting 67.5 spheres as 67.5,** or rounding up to 68 when only whole spheres can be cast.
7. **Adding volumes but also adding the internal faces to a surface area,** which double-counts the joint.
8. **Using abh for a trapezium** instead of ½(a + b)h.
9. **Reporting the area when the perimeter was asked,** which the unit of the options reveals immediately.
10. **Assuming a change in radius changes area by the same percentage.** Radii are linear; areas and volumes are not.

### 🧪 Self-Test — 8 Questions with Worked Answers

Do all eight on paper, and before each one write down the quantity actually being asked for.

1. **Find the area of a circle of radius 7 cm.**
   Area = πr² = 22/7 × 49 = 22 × 7 = **154 cm²**. The circumference, if that is what the question asked, would be 2πr = 2 × 22/7 × 7 = 44 cm. Notice that a radius of 7 gives a clean answer only with 22/7, which is the standard working value when the radius is a multiple of 7.
2. **Find the perimeter of a rectangle 12 cm long and 8 cm broad.**
   Perimeter = 2(l + b) = 2(12 + 8) = **40 cm**. The area, had it been asked, is 96 cm² — and it is in square units, which is how you tell the two questions apart in an option list.
3. **Find the total surface area of a cube of side 5 cm.**
   TSA = 6a² = 6 × 25 = **150 cm²**. Its volume is a³ = 125 cm³; if the question had asked for the number of unit cubes, the answer would be 125, not 150.
4. **A hall is 20 m long and 15 m broad. Flooring costs ₹50 per m². What is the total cost?**
   Area = 20 × 15 = 300 m², and the cost = 300 × 50 = **₹15,000**. The rate is per square metre and the area is in square metres, so no conversion is needed — a quick unit check that is worth doing on every application question.
5. **A cylinder of radius 3 cm and height 10 cm is melted and recast into spheres of radius 1 cm. How many whole spheres can be made?**
   Cylinder volume = π × 3² × 10 = 90π. One sphere = ⁴⁄₃π × 1³ = 4π/3. The number of spheres = 90π ÷ (4π/3) = 90 × 3/4 = **67.5**, so **67 whole spheres** with metal left over. Cancelling π first is what makes this a one-line calculation; the whole part is required because a part-sphere cannot be cast.
6. **The radius of a sphere is increased by 10%. By what percentage does its surface area increase, and its volume?**
   Surface area is proportional to r², so the factor is 1.1² = 1.21 — a **21% increase**. Volume is proportional to r³, so the factor is 1.1³ = 1.331 — a **33.1% increase**. A 10% increase in length is not a 10% increase in anything else, and options for 10% are there to catch exactly that.
7. **Find the volume of a cone of base radius 7 cm and vertical height 24 cm.**
   Volume = ⅓πr²h = ⅓ × 22/7 × 49 × 24 = (22 × 49 × 24)/21 = 22 × 7 × 8 = **1,232π cm³**, i.e. 3,872 cm³ with π = 22/7. If a slant height had been given instead of the height, you would first need h = √(l² − r²).
8. **A trapezium has parallel sides 10 cm and 6 cm with a perpendicular height of 4 cm. Find its area.**
   Area = ½(a + b)h = ½ × (10 + 6) × 4 = 8 × 4 = **32 cm²**. The key step is taking the *sum* of the parallel sides and halving it — ½(10 + 6) = 8 is the mean of the two bases, and 8 × 4 = 32. Using 10 × 6 × 4 would give 240, which is the shape of the error options usually take.

### 💡 Pro Tips

1. **Write the target quantity at the top of your rough work** — area, CSA, TSA or volume — before you touch a formula. It costs two seconds and prevents the most common mensuration error.
2. **Adopt 22/7 when the radius is a multiple of 7, and 3.14 otherwise,** and stay with it for the whole question.
3. **Convert dimensions to a single unit at the start,** never the final answer. Squared and cubed conversion factors are where the arithmetic goes wrong.
4. **For composite solids, do volume and surface area as two separate sums,** and delete the joint faces from the surface-area sum.
5. **Memorise the scaling law — length k, area k², volume k³ —** and use it to convert almost any "radius increased by x%" question.
6. **In recasting questions, cancel the common constants first** and then decide whether the question wants a count or a volume.
7. **Check the units in the options before you calculate.** A question offering both cm² and cm³ is telling you the answer, and picking the wrong one costs a mark.
8. **Keep Heron's formula and the ½bh formula both ready.** Trying ½bh with an unavailable height is where time is lost; switch to Heron's immediately instead.

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Geometry & Mensuration" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Quantitative Aptitude notes](/notes/cuet/quantitative-aptitude/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
