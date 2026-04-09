---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-011
topicName: "Topic 11"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Strength of Materials — Axial and Torsional Loading

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Stress-Strain Fundamentals**

- **Normal stress** (σ) = P/A; **Strain** (ε) = δ/L
- **Hooke's Law:** σ = E·ε (E = modulus of elasticity, ~200 GPa for steel)
- **Poisson's ratio** (ν) = −(lateral strain)/(axial strain), range 0–0.5
- **Thermal strain:** ε_th = α·ΔT; **Thermal stress:** σ_th = E·α·ΔT

**Torsion of Circular Shafts**

- **Torsional shear stress:** τ = T·r/J
- **Polar moment of inertia:** J = πd⁴/32 (solid); J = π(D⁴−d⁴)/32 (hollow)
- **Torque-power relation:** P = 2πNT/60 (N in RPM, T in N·m, P in watts)
- **Angle of twist:** θ = T·L/(J·G)

**Key Formulas Table**

| Parameter | Formula | Units |
|-----------|---------|-------|
| Normal Stress | σ = P/A | MPa |
| Strain | ε = δ/L | dimensionless |
| Hooke's Law | σ = E·ε | MPa |
| Poisson's Ratio | ν = −ε_lat/ε_ax | dimensionless |
| Thermal Stress | σ = E·α·ΔT | MPa |
| Torsional Stress | τ = T·r/J | MPa |
| Angle of Twist | θ = T·L/(J·G) | rad |

⚡ **GATE Tip:** Combined loading questions appear almost every year. Always resolve into axial, torsion, and bending components first.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Stress-Strain and Hooke's Law

When an axial load P is applied to a bar of uniform cross-section, the resulting **normal stress** is σ = P/A. The deformation δ follows from ε = δ/L, giving δ = PL/(AE). This is the foundational equation for axially loaded members.

**Hooke's Law** in its standard form σ = E·ε connects stress and strain through the **modulus of elasticity** (Young's modulus). For structural steel, E ≈ 200 GPa; for aluminum, E ≈ 70 GPa. The relationship is **linear-elastic** — valid only up to the proportional limit.

**Poisson's ratio** ν describes how a material contracts laterally when stretched axially. Most metals have ν ≈ 0.3. For incompressible materials (rubber, soil under confinement), ν → 0.5. GATE commonly tests that ν cannot exceed 0.5.

### Thermal Stress

When temperature changes and expansion/contraction is restrained, **thermal stress** develops:
> **σ_th = E·α·ΔT**

where α is the coefficient of thermal expansion. If the bar is free to expand, no stress develops — only **restrained** thermal loading causes stress. This is a classic GATE trap: students forget that "free thermal expansion" means zero stress, not zero strain.

### Torsion of Circular Shafts

Circular shafts under torque T develop **torsional shear stress** varying linearly from zero at the center to maximum at the outer surface:
> **τ_max = T·r/J = T·d/(2J)**

where J is the **polar moment of inertia**.

**Solid circular shaft:** J = πd⁴/32
**Hollow circular shaft:** J = π(D⁴ − d⁴)/32

The **angle of twist** over length L is:
> **θ = T·L/(J·G)** (in radians)

where G is the **shear modulus**, related to E and ν: G = E/[2(1+ν)].

⚡ **GATE Watch:** Questions often ask for minimum diameter given permissible shear stress and transmitted torque. Set τ_max = τ_permissible and solve for d.

### Power Transmission

> **P = T·ω = 2πNT/60**

A shaft rotating at N RPM transmitting torque T (N·m) carries power P in watts. Often combined with torsional stress equations.

### Combined Loading

Members can experience simultaneous axial load, torsion, and bending. The **principal stresses** are found using:
> **σ₁,₂ = (σ_x + σ_y)/2 ± √[((σ_x − σ_y)/2)² + τ_xy²]**

The **maximum shear stress** theory for ductile materials:
> **τ_max = √[((σ_x − σ_y)/2)² + τ_xy²]**

⚡ **Common GATE Mistake:** For combined axial + bending, direct stress σ = P/A ± My/I. Don't forget the sign convention — tensile stress is positive.

### Example Problem
**A steel bar (E = 200 GPa, ν = 0.3) with cross-section 20 mm × 40 mm carries an axial tensile load of 100 kN. Find σ, ε, and lateral strain.**

Solution:
σ = P/A = 100×10³/(20×40×10⁻⁶) = **125 MPa**
ε = σ/E = 125×10⁶/(200×10⁹) = **6.25×10⁻⁴**
Lateral strain = −ν·ε = −0.3 × 6.25×10⁻⁴ = **−1.875×10⁻⁴**

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Advanced Concepts in Axial and Torsional Loading

### Strain Energy Under Axial Loading

The **strain energy** stored in a bar under axial load is:
> **U = ∫₀^δ P dδ = P²L/(2AE) = (σ²/2E)·AL**

For a prismatic bar, this simplifies to U = σ²AL/(2E). The **strain energy density** (per unit volume) is u = σ²/(2E).

### Thermal Stress — Restrained vs Free Expansion

Three thermal stress scenarios appear in GATE:
1. **Both ends fixed:** σ = E·α·ΔT (compressive if heated)
2. **One end fixed, one end free:** stress = 0, deformation = α·ΔT·L
3. **Pre-stress + thermal:** Superpose thermal stress on existing stress state

### Torsion of Non-Circular Sections

Only **circular shafts** carry pure torsion without warping. For non-circular sections (rectangular, elliptical), torsion produces warping and the simple τ = Tr/J formula **does not apply**. GATE focuses on circular sections, but rectangular thin sections use τ_max = T/(k·a·b²) where a ≥ b.

### Combined Torsion and Bending

When a shaft carries both bending moment M and torque T:
1. Find bending stress: σ_b = My/I
2. Find torsional stress: τ_t = Tr/J
3. Compute principal stress or equivalent moment

**Equivalent torque** concept: Replace combined M and T with an equivalent torque T_eq:
> **T_eq = √(M² + T²)**

**Equivalent bending moment**:
> **M_eq = √(M² + T²)**

⚡ **Exam Weightage:** Axial + torsion typically carries **6–8 marks** per paper (1 question). Combined loading is more frequent than isolated topics.

### Stress Concentration

In members with **abrupt section changes** (holes, keyways, shoulders), local stress exceeds nominal stress. The **stress concentration factor** K_t multiplies nominal stress: σ_max = K_t × σ_nominal. For fillet transitions, K_t depends on the ratio of radii.

### Example — Torsional Power Transmission
**A hollow steel shaft (D = 80 mm, d = 60 mm) transmits 200 kW at 300 RPM. If τ_permissible = 50 MPa, verify adequacy.**

Solution:
P = 200×10³ W; N = 300 RPM
T = P×60/(2πN) = 200×10³×60/(2π×300) = **6366 N·m**
J = π(D⁴−d⁴)/32 = π(80⁴−60⁴)/32 = π(4.096×10⁸−1.296×10⁸)/32 = 8.796×10⁶ mm⁴ = 8.796×10⁻⁶ m⁴
τ_max = T·r/J = 6366×0.04/8.796×10⁻⁶ = **28.9 MPa < 50 MPa** ✓ Adequate

### GATE Previous Year Pattern
| Year | Topic | Marks |
|------|-------|-------|
| 2022 | Thermal stress + axial | 2 |
| 2021 | Torsion + angle of twist | 2 |
| 2020 | Combined loading, principal stress | 5 |
| 2019 | Power transmission + shaft design | 2 |

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
