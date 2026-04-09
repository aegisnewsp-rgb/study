---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-013
topicName: "Topic 13"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Fluid Mechanics — Fluid Statics and Kinematics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Fluid Statics**

- **Pressure at depth:** p = p₀ + ρgh
- **Pascal's law:** Pressure applied anywhere in a confined fluid transmits equally in all directions
- **Manometers:** p_A = p_atm + ρgh (vertical) or p_A − p_B = ρg(h_A − h_B)
- **Buoyancy:** F_B = ρ_f × V_d × g (Archimedes' principle); Body floats if ρ_body < ρ_fluid

**Fluid Kinematics**

- **Continuity equation:** A₁V₁ = A₂V₂ (Q = constant)
- **Bernoulli's equation:** p/ρg + V²/2g + z = constant (along a streamline)
- **Stream function** ψ: Lines of constant ψ = streamlines; Δψ = discharge between two streamlines

**Key Formulas Table**

| Concept | Formula |
|---------|---------|
| Hydrostatic Pressure | p = p₀ + ρgh |
| Buoyancy Force | F_B = ρVg |
| Continuity | A₁V₁ = A₂V₂ |
| Bernoulli | p/ρ + V²/2 + gz = const |
| Stream Function | dψ = V·dr (2D flow) |

⚡ **GATE Tip:** Bernoulli is for **inviscid, steady, incompressible flow along a streamline**. If viscosity or rotation is significant, Bernoulli does NOT apply directly.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Fluid Statics

### Hydrostatic Pressure Distribution

Pressure in a static fluid increases linearly with depth:
> **p = p₀ + ρgh**

where ρ is fluid density, g is acceleration due to gravity, and h is depth below the free surface. This means pressure is the same at all points at the same depth — it acts **perpendicularly** on any surface (Pascal's law).

**Absolute vs Gauge Pressure:**
- **Gauge pressure:** p_g = ρgh (relative to atmospheric)
- **Absolute pressure:** p_abs = p_atm + ρgh

⚡ **GATE Watch:** Many problems use gauge pressure implicitly. Watch for atmospheric pressure being explicitly stated or omitted.

### Manometers

Manometers measure pressure difference using fluid column heights.

**Simple U-tube manometer:**
> **p_A − p_B = ρ_m·g·h**

For a differential manometer with two fluids of different densities:
> **p_A − p_B = g(ρ₂h₂ − ρ₁h₁)**

Where the denser fluid goes on the heavier side. If both limbs have the same fluid, the pressure difference equals the weight of the column difference.

### Buoyancy and Archimedes' Principle

A body submerged or partially submerged in a fluid experiences an upward **buoyant force** equal to the weight of displaced fluid:
> **F_B = ρ_fluid × V_displaced × g**

**Floating vs Submerged:**
- **Fully submerged:** F_B = ρ_fluid × V_body × g; Body sinks if ρ_body > ρ_fluid
- **Floating (partially submerged):** F_B = ρ_fluid × V_submerged × g = W_body = ρ_body × V_total × g

The **metacentre** and **centre of buoyancy** determine stability of floating bodies. A floating body is stable if the metacentre is above the centre of gravity.

### Pascal's Law and Its Applications

Pascal's law states that pressure applied to an enclosed fluid transmits undiminished to all portions of the fluid and the container walls. This principle powers:
- **Hydraulic jacks:** Small force on small piston → large force on large piston (F₁/A₁ = F₂/A₂)
- **Hydraulic brakes:** Brake pedal force multiplied through master/slave cylinder system

### Fluid Kinematics

#### Continuity Equation

For **incompressible flow** (liquid or low-speed gas):
> **A₁V₁ = A₂V₂** or **Q = AV** (volume flow rate constant)

For **compressible flow** (high-speed gas): ρ₁A₁V₁ = ρ₂A₂V₂

The continuity equation is simply **mass conservation** applied to a flow tube.

#### Stream Function

In two-dimensional incompressible flow, the **stream function** ψ(x,y) satisfies:
> **u = ∂ψ/∂y**, **v = −∂ψ/∂x**

where u and v are velocity components in x and y directions. Lines of constant ψ are **streamlines**. The volume flow rate between two streamlines equals the difference in their ψ values:
> **Q = ψ₂ − ψ₁**

### Bernoulli's Equation

Derived from Newton's second law along a streamline for inviscid, steady, incompressible flow:
> **p/ρ + V²/2 + gz = constant**

Or in head form:
> **p/(ρg) + V²/(2g) + z = H** (total head)

⚡ **Critical Reminder:** Bernoulli's equation CANNOT be used when:
- Viscous effects are significant (boundary layers, pipes with friction)
- There is a pump or turbine (add/remove energy)
- Flow is rotational (vorticity present)
- Across a shock wave

### Example Problem
**Water flows through a horizontal pipe that reduces from 300 mm diameter to 150 mm diameter. Velocity in the 300 mm section is 2 m/s. Find velocity in the 150 mm section and pressure difference if the pressure in the larger section is 150 kPa.**

Solution:
A₁ = π(0.3)²/4 = 0.0707 m²; A₂ = π(0.15)²/4 = 0.01767 m²
V₂ = V₁(A₁/A₂) = 2×(0.0707/0.01767) = **8 m/s**
Applying Bernoulli (p₁/ρ + V₁²/2 = p₂/ρ + V₂²/2, since z₁ = z₂ = 0):
p₂ = p₁ + ρ(V₁²−V₂²)/2 = 150×10³ + 1000(4−64)/2 = 150000 − 30000 = **120 kPa**
Δp = p₁ − p₂ = **30 kPa**

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Potential Flow Theory

### Velocity Potential Function

For **irrotational flow**, a velocity potential φ exists such that:
> **u = ∂φ/∂x**, **v = ∂φ/∂y**, **w = ∂φ/∂z**

The Laplace equation governs potential flow:
> **∇²φ = ∂²φ/∂x² + ∂²φ/∂y² + ∂²φ/∂z² = 0**

A function is **harmonic** if it satisfies Laplace's equation. Both φ (potential) and ψ (stream function) are harmonic in irrotational, incompressible 2D flow.

### Combination of Basic Flows

Complex potential flow patterns can be built from superposition of elementary solutions:

| Flow Type | φ (potential) | ψ (stream function) |
|-----------|---------------|---------------------|
| Uniform flow | φ = Ux | ψ = Uy |
| Source/Sink | φ = (Q/2π) ln r | ψ = (Q/2π) θ |
| Free vortex | φ = −(Γ/2π) θ | ψ = (Γ/2π) ln r |
| Doublet | φ = −K y/(x²+y²) | ψ = K x/(x²+y²) |

### Doublet and Cylinder Flow

Superposition of uniform flow + source + sink (brought infinitely close) produces flow around a **cylinder**:
- Velocity at cylinder surface: V_θ = 2U sin θ
- Maximum velocity: 2U (at θ = 90° and 270°)
- Pressure distribution from Bernoulli gives **d'Alembert's paradox**: Zero drag force on a cylinder in inviscid flow

### Stagnation Points

Where V = 0 (from Bernoulli, p = p₀ + ρV²/2 = p₀ + ρ×0, so **maximum pressure**). On a cylinder in uniform flow, stagnation points occur at θ = 0° and 180°.

### Free Surface Flows

For flows with a **free surface** (open channel, weir flow), the **Euler's equation** in the vertical direction under hydrostatic assumption gives:
> **p/ρg + z = constant** (piezometric head)

This is used in **Weir formulas** and **orifice flow** with free discharge.

### Rotational vs Irrotational Flow

- **Irrotational:** No vorticity (∇ × V = 0); potential flow theory applies; Bernoulli valid along streamlines
- **Rotational:** Vorticity present (e.g., flow in boundary layers, downstream of bluff bodies, free vortices); Bernoulli NOT valid between arbitrary points

⚡ **GATE Trap:** Students often apply Bernoulli between two points on different streamlines in rotational flow — this is incorrect.

### Hydrostatic Forces on Surfaces

For a **submerged vertical plane surface** of width b at depth h:
> **F_R = ρg·b·h·h̄** (h̄ = centroid depth = h/2)
> **F_R = ρg·Ā·h̄** (Ā = area)

Line of action (center of pressure):
> **h_cp = I_G/Āh̄ + h̄** (about free surface)

The center of pressure is always **below** the centroid for a vertical surface (deeper = higher pressure).

For a **horizontal surface**, pressure is uniform → F_R = p·A at that depth.

### Example — Hydrostatic Force on a Gate
**A rectangular gate 3 m wide and 4 m deep is vertical, submerged in water with its top 2 m below the water surface. Find resultant force and its location.**

Solution:
Depth of centroid h̄ = 2 + 4/2 = **4 m**
Area A = 3×4 = 12 m²
F_R = ρg·A·h̄ = 1000×9.81×12×4 = **471,000 N = 471 kN**

I_G about horizontal axis through centroid = bh³/12 = 3×4³/12 = 16 m⁴
h_cp = h̄ + I_G/(Āh̄) = 4 + 16/(12×4) = 4 + 0.333 = **4.333 m below surface**

### GATE Previous Year Pattern
| Year | Topic | Marks |
|------|-------|-------|
| 2023 | Bernoulli + continuity (pipe contraction) | 5 |
| 2022 | Hydrostatic force on submerged plane | 2 |
| 2021 | Buoyancy and stability | 2 |
| 2020 | Manometer pressure measurement | 2 |
| 2019 | Potential flow — cylinder | 5 |

⚡ **Common Mistakes:** (1) Applying Bernoulli in viscous flows, (2) Wrong sign in manometer equation, (3) Confusing stream function ψ with velocity potential φ, (4) Forgetting that center of pressure is below centroid.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
