---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-012
topicName: "Topic 12"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Strength of Materials — Beams and Columns

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Shear Force and Bending Moment**

- **SFD/SMD conventions:** SF positive when acting downward on left face; BM positive when causing **sagging** (concave upward)
- **Relationship:** w = −dV/dx; V = dM/dx; w = −d²M/dx²
- **Point of contraflexure:** Where M = 0 (bending moment changes sign)

**Bending and Shear Stress**

- **Bending stress:** σ = My/I (M = moment, y = distance from NA, I = moment of inertia)
- **Section modulus:** Z = I/y_max; σ_max = M/Z
- **Shear stress:** τ = VQ/(It) (Q = first moment, t = web thickness)

**Column Buckling**

- **Euler's load:** P_Euler = π²EI/(KL)²
- **Slenderness ratio:** λ = KL/r (r = √(I/A))
- **Rankine's formula:** 1/P = 1/P_Euler + 1/P_c (for intermediate columns)

**Key Formulas Table**

| Parameter | Formula |
|-----------|---------|
| Bending Stress | σ = My/I |
| Shear Stress | τ = VQ/(It) |
| Euler Load | P_cr = π²EI/(KL)² |
| Slenderness Ratio | λ = KL/r |
| Slope (Cantilever) | y'' = M/(EI) |
| Deflection | y = ∫∫ M/(EI) dx dx |

⚡ **GATE Tip:** Draw SFD and BMD first for any beam problem. Most mistakes come from wrong sign conventions or missing reactions.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Shear Force and Bending Moment Diagrams

The **Shear Force Diagram (SFD)** and **Bending Moment Diagram (BMD)** are essential tools for beam analysis. They are related to the distributed load w(x) through:
> **dV/dx = −w(x)** and **dM/dx = V(x)**

### Sign Conventions

| Convention | Shear Force | Bending Moment |
|-----------|-------------|----------------|
| Positive | ↓ on left face (acts downward on left portion) | Sagging (concave upward, compression at top) |
| Negative | ↑ on left face | Hogging (concave downward, compression at bottom) |

For a **simply supported beam** with UDL w over entire span L:
- Maximum SFD at supports: R_A = R_B = wL/2
- Maximum BM at midspan: M_max = wL²/8

### Bending Stress in Beams

The **bending stress formula** derives from Euler-Bernoulli beam theory:
> **σ = My/I**

where:
- M = bending moment at the section
- y = perpendicular distance from neutral axis
- I = moment of inertia about neutral axis (I = bd³/12 for rectangle; I = πd⁴/64 for circle)

**Neutral Axis (NA):** The axis where σ = 0. For symmetric sections it passes through the centroid.

### Shear Stress in Beams

The **shear stress distribution** across a beam depth is:
> **τ = VQ/(It)**

For a **rectangular section** (width b, depth h):
> **τ_max = 3V/(2bh)** at the neutral axis

For an **I-beam**, most shear is carried by the web. τ_web = V/(tw·h_web).

⚡ **GATE Watch:** Q = ∫y dA (first moment of area above/below the point), not the section modulus. Students often confuse Q with Z.

### Deflection by Integration

From beam theory: **EI d²y/dx² = M(x)**

Integrate twice to get slope and deflection. Boundary conditions determine constants.

**Standard cases:**
- Cantilever, tip load P: δ_max = PL³/(3EI)
- Cantilever, UDL w: δ_max = wL⁴/(8EI)
- Simply supported, point load at center: δ_max = PL³/(48EI)

### Moment-Area Method

Two theorems for slope and deflection between two points A and B on a beam:
1. **θ_B − θ_A** = (area under M/EI diagram between A and B)
2. **Deflection of B relative to tangent at A** = (moment of M/EI diagram area about B)

Useful for cantilever deflection at the free end.

### Example Problem
**A simply supported beam of span 6 m carries a point load of 20 kN at midspan. EI = 300 kN·m². Find maximum BM and midspan deflection.**

Solution:
R_A = R_B = 20/2 = 10 kN
M_max at midspan = R_A × 3 = 10 × 3 = **30 kN·m**
δ_max = PL³/(48EI) = 20×6³/(48×300) = 4320/14400 = **0.3 m = 300 mm**

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Euler's Column Theory and Slenderness

### Column Buckling

When a compression member is slender, it fails by **buckling** before material reaches compressive strength. The **Euler critical load** is:
> **P_cr = π²EI/(KL)²**

where K is the **effective length factor**:

| End Conditions | K |
|----------------|---|
| Both ends pinned | 1.0 |
| One end fixed, one free | 2.0 |
| Both ends fixed | 0.5 |
| One end fixed, one pinned | 0.7 |

### Slenderness Ratio

> **λ = KL/r** where **r = √(I/A)** (radius of gyration)

- **Short columns** (λ < π√(E/σ_y)): Fail by **compression** (material crushing)
- **Long columns** (λ > π√(E/σ_y)): Fail by **buckling** (Euler)
- **Intermediate columns**: Use **Rankine's formula**

### Rankine's Formula (Intermediate Columns)

> **1/P_R = 1/P_Euler + 1/P_c** where P_c = σ_c × A

Equivalent form:
> **P_R = P_Euler × P_c / (P_Euler + P_c)**

This gives a smooth transition between short-column crushing and long-column buckling. Many GATE questions use Rankine's formula for column design.

### Slenderness Ratio and Section Selection

For minimum weight design, the **optimal column** has a slenderness ratio around 80–100. Sections with high I/A (wide flanges, tubes) are more efficient. The **most efficient section** for a given area has the largest possible r.

### Bending Moment Diagram — Common Patterns

| Loading Type | BMD Shape |
|-------------|-----------|
| Cantilever + UDL | Parabolic (positive/hogging) |
| Simply supported + UDL | Parabolic (sagging, max at midspan) |
| Cantilever + point load at tip | Triangular (linear) |
| Simply supported + point load at center | Triangular (max at load) |
| Overhanging beam | May have negative BM region (hogging) |

⚡ **Point of Contraflexure:** Where BMD crosses zero (M = 0). At this section, bending stress is zero — important for reinforcement design in concrete.

### Shear Stress Distribution — I-Beam Details

In an I-beam:
- **Flange:** carries mostly bending stress
- **Web:** carries most of the shear
- **τ_max** occurs at the neutral axis (centroidal axis)
- Q for the web = area of flange × distance from NA to flange centroid

### Example — Column Design
**A steel column (E = 200 GPa, σ_y = 250 MPa) with both ends pinned, length 4 m, diameter 80 mm solid circular. Find critical load and slenderness ratio.**

Solution:
I = πd⁴/64 = π(0.08)⁴/64 = 2.01×10⁻⁶ m⁴
A = πd²/4 = π(0.08)²/4 = 5.027×10⁻³ m²
r = √(I/A) = √(2.01×10⁻⁶/5.027×10⁻³) = 0.02 m = 20 mm
KL = 1.0 × 4 = 4 m
λ = KL/r = 4/0.02 = **200**
P_cr = π²EI/(KL)² = π²×200×10⁹×2.01×10⁻⁶/16 = **248 kN**
Check: λ > π√(E/σ_y) = π√(200×10⁹/250×10⁶) = **89** → Long column (Euler applies)

### GATE Previous Year Pattern
| Year | Topic | Marks |
|------|-------|-------|
| 2023 | BMD/SFD — overhanging beam | 5 |
| 2022 | Column buckling — Euler load | 2 |
| 2021 | Deflection by integration | 5 |
| 2020 | Shear stress in I-beam | 2 |
| 2019 | Moment-area method | 2 |

⚡ **Common Mistakes:** (1) Wrong sign convention for BMD, (2) Forgetting KL factor in Euler formula, (3) Using diameter instead of radius in τ = VQ/(It), (4) Confusing slenderness ratio with flexibility factor.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
