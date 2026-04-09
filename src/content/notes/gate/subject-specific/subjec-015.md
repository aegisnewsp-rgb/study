---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-015
topicName: "Topic 15"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Engineering Mechanics — Statics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Equilibrium and Free Body Diagrams**

- **Equilibrium:** ΣF_x = 0, ΣF_y = 0, ΣM = 0 (2D problems)
- **Support reactions:** Roller → 1 reaction (perp. to surface); Pin → 2 reactions (F_x, F_y); Fixed → 3 reactions (F_x, F_y, M)
- **Static determinacy:** 3 unknowns for 2D → statically determinate; >3 → indeterminate

**Truss Analysis**

- **Method of joints:** Equilibrium at each joint; use ΣF_x = 0, ΣF_y = 0
- **Method of sections:** Cut through ≤3 members; ΣM = 0 about a point
- **Zero-force members:** If two members meet at a joint with no external force → both are zero-force; if one member and no force → that member is zero-force

**Friction and Centroids**

- **Friction force:** F ≤ μN (static); F = μN (impending motion)
- **Centroid:** x̄ = ∫x dA/A; ȳ = ∫y dA/A
- **Moment of inertia:** I = ∫y² dA about axis; I = I_G + Ad² (parallel axis theorem)

**Pappus-Guldinus:** Surface area = (generating curve length) × (distance traveled by centroid); Volume = (generating area) × (distance traveled by centroid)

⚡ **GATE Tip:** Always draw the FBD before writing equilibrium equations. Most statics errors come from omitting forces or mislabeling directions.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Free Body Diagrams and Equilibrium

A **Free Body Diagram (FBD)** is a sketch showing all forces and moments acting on a body, isolated from its surroundings. Every force must be accounted for.

### Support Reactions

| Support Type | Reactions | Statically Determinate? |
|-------------|-----------|-------------------------|
| Roller (smooth) | 1 perpendicular | Yes |
| Hinge/Pin | 2 (F_x, F_y) | Yes |
| Fixed/Built-in | 3 (F_x, F_y, M) | No (indeterminate) |
| Slider | 2 (perpendicular to slot + moment if rotation prevented) | Yes |

⚡ **GATE Watch:** A **fixed support** in 2D gives 3 unknowns (H, V, M). A **cantilever** is fixed at one end — statically determinate. A **propped cantilever** (fixed at one end, roller at the other) has 4 unknowns → statically indeterminate to 1°.

### Equilibrium Equations

For a 2D problem:
> **ΣF_x = 0**
> **ΣF_y = 0**
> **ΣM_O = 0** (moments about any point O)

For a 3D problem, add ΣF_z = 0 and ΣM_x = ΣM_y = ΣM_z = 0.

**Procedure:**
1. Draw FBD showing all known and unknown forces
2. Choose coordinate axes (horizontal and vertical usually suffice)
3. Write equilibrium equations
4. Solve for unknowns
5. Check: Substitute back; verify moment equilibrium about a different point

### Friction

**Static friction:** F_s ≤ μ_s N (force needed to start motion equals μ_s N)
**Kinetic friction:** F_k = μ_k N (during motion)
**Impending motion:** F = μ_s N (at the point of slipping)

⚡ **GATE Tip:** When solving friction problems with multiple bodies, check if motion is impending or not. If unsure, assume impending and check consistency.

**Friction on inclined planes:**
For a block on incline with angle θ: F = W sin θ, N = W cos θ. Sliding begins when tan θ = μ_s.

## Truss Analysis

### Method of Joints

Each joint is a **pin joint** in equilibrium under two-force members. At each joint:
> **ΣF_x = 0** and **ΣF_y = 0**

Always start at a joint with ≤2 unknowns (usually a support joint).

**Sign convention:** Members in **tension** are pulled apart at the joint; members in **compression** are pushed together.

### Zero-Force Members

These situations produce zero-force members:
1. Two members at a joint with **no external force** → both are zero-force
2. Three members at a joint with **one external force** collinear with one member → the other two are zero-force
3. Four members at a joint forming an X with **no external force** → diagonal members are zero-force (if symmetric and no deformation)

⚡ **GATE Watch:** GATE frequently asks "identify zero-force members" — knowing these rules saves time.

### Method of Sections

Cut the truss through members you want to find (≤3 unknowns), then apply **ΣM = 0** about a point to isolate individual member forces.

> **ΣM_point = 0** → eliminates the force through that point, solving for perpendicular forces directly.

This method is faster than joints when you need forces in specific members (not the whole truss).

### Centroids and Moment of Inertia

**Centroid** of a composite area:
> **x̄ = Σx_i A_i / ΣA_i**; **ȳ = Σy_i A_i / ΣA_i**

**Common centroids:**

| Shape | x̄ | ȳ |
|-------|---|---|
| Rectangle | b/2 | h/2 |
| Triangle | b/3 from vertex | h/3 from base |
| Semicircle | 0 | 4r/(3π) from base |
| Quarter circle | 4r/(3π) | 4r/(3π) |

### Moment of Inertia

> **I_x = ∫y² dA**; **I_y = ∫x² dA**

**Parallel Axis Theorem:**
> **I = I_G + Ad²**

where I_G is about centroidal axis, A is area, d is distance between parallel axes.

**Radius of gyration:**
> **r = √(I/A)**

### Pappus-Guldinus Theorems

**Theorem 1 (Surface area):**
> **S = L × 2πr̄**

The surface area generated by rotating a plane curve of length L about an axis equals L times the distance traveled by its centroid.

**Theorem 2 (Volume):**
> **V = A × 2πr̄**

The volume generated by rotating a plane area A about an external axis equals A times the distance traveled by its centroid.

⚡ **GATE Watch:** The axis of rotation must NOT intersect the curve/area being rotated. Both theorems require the centroid's path to be a circle.

### Example Problem
**A truss has a 10 kN load at joint C. Find forces in members BC, AC, and AD using method of joints. (Truss: A is pinned support, D is roller support, B is directly below A on horizontal line AD, C is midpoint of BD.)**

Solution (joint A):
R_A + R_D = 10 kN (vertical equilibrium)
ΣM_A: R_D × 6 = 10 × 3 → R_D = **5 kN**, R_A = **5 kN**

Joint D: Only members AD and BD meet. R_D = 5 kN ↑. Since no horizontal force at D, member AD has zero force. BD carries 5 kN (compression).

Joint B: Members BD (5 kN compression), BC, AB. ΣF_y = 0: BC sin θ = 0 → BC = 0 kN (zero-force member). ΣF_x = 0: AB = 5 kN (tension).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Advanced Truss Analysis

### Compound and Complex Trusses

**Compound truss types:**
- **Type 1:** Three肝炎 connected by pins (simplest truss)
- **Type 2:** Multiple simple trusses connected by joints + 1 member or 3 members
- **Type 3:** Complex trusses (non-Houston type) — must analyze by method of joints or computer methods

**Determinacy of plane trusses:**
> **m + r = 2j** (determinate); **m + r > 2j** (indeterminate)
where m = number of members, r = number of reactions, j = number of joints.

### Space Trusses

For 3D trusses:
> **ΣF_x = ΣF_y = ΣF_z = ΣM_x = ΣM_y = ΣM_z = 0** (6 equations per joint)

A space truss with **m = 3j − 6** is statically determinate (just rigid).

## Friction Applications

### Wedge Friction

A wedge under a block introduces additional force directions. Equilibrium requires:
- ΣF_x = 0, ΣF_y = 0 at each contacting surface
- Friction force at each contact ≤ μN

For a **self-locking wedge**: tan α ≤ μ where α is the wedge angle.

### Screw Jack

A screw thread with lead angle λ and friction angle φ acts like an inclined plane:
> **T = W r tan(λ + φ)** (raising the load)
> **T = W r tan(λ − φ)** (lowering, if λ > φ)

If λ < φ, the screw is **self-locking** (load won't fall).

### Belt Friction

For a flat belt wrapping around a pulley:
> **T₁/T₂ = e^(μθ)** (Euler-Euler belt friction formula)

where T₁ = tight side tension, T₂ = slack side tension, θ = angle of contact in radians.

⚡ **GATE Watch:** For V-belts, use T₁/T₂ = e^(μθ/sin(β)) where β = V-groove half-angle. Most flat belt problems assume flat surfaces.

## Virtual Work Method for Trusses

For a determinate truss, the deflection at a joint can be found using virtual work:
> **δ = Σ(F_i × (∂F_i/∂P) × L_i / (A_i × E))**

where F_i is member force due to unit load at the point/direction of desired displacement. This is the **unit load method** — particularly useful when only one displacement is needed.

### Example — Moment of Inertia (Composite Section)
**Find I_NA about the neutral axis of an I-section: Flange 150×20 mm, Web 20×100 mm, all about the horizontal centroidal axis.**

Solution:
Convert to all dimensions in mm. Total height = 20 + 100 + 20 = 140 mm.
A_total = 150×20×2 + 20×100 = 8000 mm²

Centroid ȳ = (150×20×10×2 + 20×100×70)/8000 = (60000 + 140000)/8000 = 25 mm (from bottom)

I_about_bottom = I_flange×2 + A_flange×d²_flange×2 + I_web + A_web×d²_web
= (150×20³/12)×2 + 3000×65²×2 + (20×100³/12) + 2000×45²
= (150×8000/12)×2 + 3000×4225×2 + (20×1000000/12) + 2000×2025
= 100000 + 25350000 + 1666667 + 4050000 = 31,066,667 mm⁴

I_NA = I_about_bottom − A_total × ȳ² = 31,066,667 − 8000×25² = 31,066,667 − 5,000,000 = **26,066,667 mm⁴**

### Friction Example — Block on Inclined Plane
**A 100 N block rests on a 30° incline with μ_s = 0.4. (a) Will it slide? (b) Minimum force P parallel to incline needed to start upward motion.**

Solution:
(a) Component down plane: W sin 30° = 100 × 0.5 = 50 N
Normal force: N = W cos 30° = 100 × 0.866 = 86.6 N
μ_s N = 0.4 × 86.6 = 34.6 N < 50 N → **Block slides down**

(b) To start upward: P ≥ μ_s N + W sin 30° = 34.6 + 50 = **84.6 N**

### GATE Previous Year Pattern
| Year | Topic | Marks |
|------|-------|-------|
| 2023 | Method of sections — truss | 5 |
| 2022 | FBD + equilibrium (beam) | 5 |
| 2021 | Friction — wedge | 2 |
| 2020 | Centroid + moment of inertia | 5 |
| 2019 | Method of joints + zero-force | 2 |

⚡ **Common Mistakes:** (1) Omitting self-weight or reactions on FBD, (2) Wrong direction for friction force, (3) Misidentifying zero-force members, (4) Using parallel axis theorem with wrong distance d, (5) Applying Pappus-Guldinus when axis intersects the generating shape.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
