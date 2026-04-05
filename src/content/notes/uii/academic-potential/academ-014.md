---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Academic Potential
topic: academ-014
topicName: Spatial Visualisation
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
---

# Spatial Visualisation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Spatial visualisation is the ability to mentally manipulate, rotate, and compare 2D and 3D shapes. In the UI entrance test, questions in this category test your capacity to understand relationships between objects in space, visualise transformations, and interpret views from different angles. These skills are important for architecture, engineering, and scientific programmes.

**Key Concepts:**
- Rotations: 90° clockwise sends (x, y) → (y, −x); 90° anticlockwise sends (x, y) → (−y, x); 180° sends (x, y) → (−x, −y)
- Reflections: Over the x-axis: (x, y) → (x, −y); over the y-axis: (x, y) → (−x, y); over y = x: (x, y) → (y, x)
- 3D cubes: A cube has 6 faces, 12 edges, 8 vertices. A net of a cube shows all faces laid flat.
- Plans and elevations: The plan view is from directly above; front elevation is from the front; side elevation is from the side.
- Cross-sections: The shape formed when a plane cuts through a 3D object

**Essential Properties:**
- A cube of side n has n³ unit cubes total; surface area = 6n²; number of small cubes with painted faces depends on position
- When a 3D object is rotated, edges maintain their lengths; faces remain the same shape and area
- Front and back faces swap positions in a 180° rotation about a horizontal axis

⚡ **Exam Tip:** For cube-net questions in the UI entrance test, use elimination — if two nets look similar but one face is in the wrong position relative to the others, eliminate it. For rotation questions, mentally label the corners of the object before and after the rotation to track them.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Rotations in 2D**

Rotation preserves both shape and size — it's an isometry. The centre of rotation is the fixed point around which the object rotates.

Example: Rotate the point (3, 2) 90° clockwise about the origin: (3, 2) → (2, −3).
Check: Distance from origin is √(3²+2²) = √13, which is preserved after rotation: √(2²+(−3)²) = √13. ✓

For a shape, rotate each vertex and redraw the shape connecting the new vertices.

**Reflections in 2D**

Reflection across a line creates a mirror image. The original point and its image are equidistant from the line of reflection.

Example: Reflect the point (5, 3) across the line y = x.
Swap coordinates: (5, 3) → (3, 5). Verify: midpoint of (5, 3) and (3, 5) is (4, 4), which lies on y = x. ✓

**Combined Transformations**

A reflection followed by another reflection produces a rotation (if lines intersect) or a translation (if lines are parallel). Two rotations about the same centre produce a single rotation by the sum of angles. A rotation followed by a translation produces a translation.

**Understanding 3D Shapes**

Common 3D shapes tested:
- **Cube:** all faces are squares of equal size
- **Cuboid (rectangular prism):** faces are rectangles
- **Cylinder:** two circular faces connected by a curved surface
- **Cone:** circular base with a curved surface meeting at a point
- **Sphere:** perfectly round; every point on the surface is equidistant from the centre
- **Pyramid:** polygonal base with triangular faces meeting at an apex

Key formulas:
- Volume of cuboid = l × w × h
- Surface area of cuboid = 2(lw + lh + wh)
- Volume of cylinder = πr²h; curved surface area = 2πrh
- Volume of cone = (1/3)πr²h; curved surface area = πrl (l = slant height = √(r²+h²))
- Volume of sphere = (4/3)πr³; surface area = 4πr²

**Nets of 3D Objects**

A net is a 2D pattern that can be folded to form a 3D shape. A cube has 11 different nets. When matching a net to a cube, trace how each face connects.

Example: A cross-shaped net (plus a square on each arm) folds into a cube. The centre square becomes one face; each arm square shares an edge with the centre square and folds to form adjacent faces.

**Plans and Elevations**

These are 2D drawings showing what a 3D object looks like from specific directions.

*Plan view:* Looking down from directly above — shows the footprint/shadow of the object.
*Front elevation:* Looking from the front — shows height and width but not depth.
*Side elevation:* Looking from the side — shows height and depth but not width.

Example: A house with a main rectangular block and a smaller rectangular extension. The plan view shows one large rectangle and one smaller rectangle attached. The front elevation shows a tall rectangle for the main block and a shorter rectangle for the extension.

**Cross-Sections**

When a plane cuts through a 3D object, the cross-section is the shape of the cut surface. Common examples:
- A plane through the centre of a sphere parallel to any axis always produces a circular cross-section.
- A plane cutting a cone parallel to the base produces a circular cross-section; cutting perpendicular to the base produces an isosceles triangle.
- A plane cutting a cylinder perpendicular to the base produces a rectangle; parallel to the base produces a circle.

**Problem-Solving Strategies:**
- For 3D rotation questions, identify the axis of rotation and trace how each face moves
- In "how many cubes" problems, break the object into layers and count cubes in each layer
- For plans and elevations, imagine standing at the specific viewpoint and drawing what you see projected onto a 2D plane
- When matching nets to cubes, pick one face and trace all adjacent faces in order

**Common Mistakes:**
- Confusing 90° clockwise with 90° anticlockwise rotation — always check the direction
- Misidentifying the front view in elevation drawings — "front" is explicitly stated, not assumed from orientation on the page
- Forgetting that curved surfaces of cylinders and cones don't have edges, but faces have boundaries
- In net questions, putting adjacent faces on the wrong sides — count edges: each edge of the net corresponds to a fold, and each fold connects two faces

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Rotation Matrices**

Rotation by angle θ about the origin can be represented by a matrix:
- 90° clockwise: [ [0, 1], [-1, 0] ]
- 90° anticlockwise: [ [0, -1], [1, 0] ]
- 180°: [ [-1, 0], [0, -1] ]

Applying to vector [x, y]: new coordinates = matrix × [x, y].
Example: Rotate (3, 4) by 90° anticlockwise: [[0, -1], [1, 0]] × [3, 4] = [−4, 3]. Check: √(3²+4²) = 5, √((−4)²+3²) = 5. ✓

**Properties of 3D Objects — Euler's Formula**

For any convex polyhedron (a 3D shape with flat polygonal faces where any line segment between two points stays inside): V − E + F = 2, where V = vertices, E = edges, F = faces.

Example — cube: V = 8, E = 12, F = 6. Check: 8 − 12 + 6 = 2. ✓
Example — tetrahedron (triangular pyramid): V = 4, E = 6, F = 4. Check: 4 − 6 + 4 = 2. ✓

**Cube Colouring Problems**

Common UI entrance type: A large cube made of n×n×n smaller unit cubes is painted on the outside, then disassembled. How many small cubes have:
- 0 painted faces: (n−2)³ (interior cubes)
- 1 painted face: 6(n−2)² (face-centre cubes, excluding edges and corners)
- 2 painted faces: 12(n−2) (edge cubes, excluding corners)
- 3 painted faces: 8 (the 8 corner cubes)

Example: A 4×4×4 cube (n=4): 0 faces: (4−2)³ = 8; 1 face: 6(2)² = 24; 2 faces: 12(2) = 24; 3 faces: 8. Total = 8+24+24+8 = 64 = 4³. ✓

**Isometric Drawing — Representing 3D on 2D**

In isometric projection, the three axes are at 120° angles. Lines on the object that are parallel to the axes remain parallel (they don't converge to vanishing points). Vertical lines remain vertical; horizontal lines appear at 30° to the horizontal in isometric drawings.

**Drawing Plans and Elevations from Isometric Views**

Example: A stepped object made of three cuboids stacked. To draw the front elevation, project the highest point at each horizontal position onto the front plane. The resulting elevation shows a stepped outline corresponding to the visible heights at each position.

**Visualising Dice (Cube) Views**

A standard die has opposite faces summing to 7: 1-6, 2-5, 3-4. When asked which face is opposite a given visible face, use the rule that adjacent faces in the unfolded net are adjacent on the cube.

If two views of the same cube show faces A, B, C on one view and A, D, E on another (with A common), then B and D are on opposite sides of A, and the remaining faces can be deduced.

**Symmetry in 3D Objects**

A cube has 9 planes of symmetry: 3 through opposite faces (mid-planes), 6 through opposite edges.
A sphere has infinite planes of symmetry (any plane through the centre).
A cone has 1 plane of symmetry (through the axis).

**UI Entrance Exam Patterns**

Spatial visualisation questions typically include: identifying which 3D object is formed from a given net; matching different views (plan, front, side) to the correct 3D shape; rotating 2D shapes in the plane; counting cubes in composite shapes; and reading 3D objects from 2D projections.

⚡ **Exam Strategy:** For complex 3D-to-2D matching questions, start by identifying distinctive features — a unique face shape, a particular arrangement of edges — that can only appear in one answer choice. For counting-cubes questions, always draw the object layer by layer from the plan view and count systematically.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
