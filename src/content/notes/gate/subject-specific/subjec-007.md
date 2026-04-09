---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-007
topicName: "Topic 7"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Machine Design — Stress Analysis

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Bending Stress:** σ_b = M × y / I = M / Z (where Z = I/y = section modulus). For a circular cross-section, Z = πd³/32. Maximum bending stress at extreme fibers.

**Torsional Stress:** τ = T × r / J = T / Z_p (Z_p = polar section modulus = πd³/16 for solid round). Shear stress varies linearly from center (zero) to surface (maximum).

**Combined Stress (Shaft):** σ_max/min = σ/2 ± √((σ/2)² + τ²) where σ = bending stress, τ = torsional shear stress. Use **Maximum Normal Stress Theory** or **Maximum Shear Stress Theory** for yield criteria.

**Mohr's Circle:** Construct with σ_avg = (σ₁+σ₃)/2 on x-axis, radius R = √(((σ₁-σ₃)/2)² + τ²_xy). Directly gives principal stresses and maximum shear stress.

**Fatigue:** S-N curve shows stress amplitude (S) vs cycles to failure (N). For steels, endurance limit ≈ 0.5 × UTS (ultimate tensile strength). For N > 10⁶–10⁷ cycles, the curve flattens (fatigue limit).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Bending Stress in Beams

### Fundamental Bending Equation

For a beam under **bending moment M**:

**σ_b = M × y / I**

- σ_b = bending stress (Pa or MPa)
- M = bending moment (Nm)
- y = distance from neutral axis (mm)
- I = second moment of area (mm⁴)

For a circular cross-section:
- I = πd⁴/64 (about neutral axis)
- y = d/2
- Section modulus Z = I/y = **πd³/32**

> ⚠️ **Common GATE mistake:** Using d instead of d/2 for y, or mixing up I for a hollow shaft (π(d_o⁴ – d_i⁴)/64).

### Bending Stress Distribution

- **Maximum tensile stress** at the bottom fiber (for positive M causing convex upward bending)
- **Maximum compressive stress** at the top fiber
- Linear variation: stress ∝ distance from neutral axis
- **Neutral axis** passes through centroid of cross-section

**Bending equation for round bar:**
σ_b = 32M / (πd³)

For a **hollow circular shaft** (outer diameter d_o, inner diameter d_i):
σ_b = 32M / (π(d_o⁴ – d_i⁴)/d_o) × ... actually I = π(d_o⁴ – d_i⁴)/64, and y = d_o/2
σ_b = 32M × (d_o/2) / (π(d_o⁴ – d_i⁴)/64) = **1024M × d_o / (π(d_o⁴ – d_i⁴))**

## Torsional Stress

### Circular Shaft Torsion

For a shaft under **torque T**:

**τ = T × r / J**

- τ = shear stress at radius r
- T = applied torque
- r = distance from center (max at outer surface)
- J = polar moment of inertia

For solid round shaft:
- J = πd⁴/32
- τ_max = 16T / (πd³) = T / Z_p where Z_p = πd³/16

For **hollow shaft** (outer d_o, inner d_i):
J = π(d_o⁴ – d_i⁴)/32
τ_max = T × r_max / J = 16T × d_o / (π(d_o⁴ – d_i⁴))

**Power transmission:**
P = 2πNT/60 where N = RPM

> 💡 **GATE often combines torsion with bending** for shafts — this is the "combined stress" scenario.

### Torsion of Non-Circular Sections

Only circular shafts carry pure torsion without warping. Non-circular sections (rectangular, square) experience warping and non-linear shear stress distribution.

**Rectangular shaft:** τ_max = T / (α × b × h²) where α depends on h/b ratio (from torsion tables).

This is rarely asked in GATE directly but understanding the concept helps.

## Combined Stress Analysis

### Shaft Under Bending + Torsion

This is the most common machine design problem in GATE — a rotating shaft carrying both bending loads and torque.

**Given:** Simultaneous bending moment M and torque T act on a shaft cross-section.

**Step 1:** Calculate bending stress σ = 32M/(πd³) (at extreme fiber)
**Step 2:** Calculate torsional stress τ = 16T/(πd³) (at extreme fiber)
**Step 3:** Use one of these theories:

### Maximum Normal Stress Theory (Rankine's Theory)
σ_1, σ_2 = (σ/2) ± √((σ/2)² + τ²)
σ_eq = σ_max = σ/2 + √((σ/2)² + τ²)  [largest principal stress]
**Design criterion:** σ_eq ≤ σ_allow

### Maximum Shear Stress Theory (Guest's Theory)
τ_max = √((σ/2)² + τ²)
**Design criterion:** 2τ_max ≤ σ_allow  or  τ_max ≤ τ_allow

### Distortion Energy Theory (von Mises Theory)
σ_eq = √(σ² + 3τ²)
**Most accurate for ductile materials**
**Design criterion:** σ_eq ≤ σ_allow

> ⚠️ **GATE Pattern:** Questions often ask which theory to use for ductile materials — the answer is **von Mises** or **Maximum Shear Stress Theory** (both conservative). For brittle materials, use **Maximum Normal Stress Theory**.

## Mohr's Circle for Stress Analysis

Mohr's circle provides a graphical solution for transforming stresses.

### Construction Steps

1. Mark point X(σ_x, +τ_xy) and Y(σ_y, –τ_xy) on σ-τ plane
2. Find center C at ((σ_x + σ_y)/2, 0)
3. Draw circle with radius R = √(((σ_x – σ_y)/2)² + τ_xy²)
4. **Principal stresses:** σ₁, σ₃ = center ± radius
5. **Maximum shear stress:** τ_max = radius (on horizontal line through center)

### Mohr's Circle for Combined Bending + Torsion

For a shaft surface point (where failure initiates):
- σ_x = σ_bending = 32M/(πd³)
- τ_xy = τ_torsion = 16T/(πd³)  
- σ_y = 0 (plane stress condition)

**Center:** (σ_b/2, 0)
**Radius:** √((σ_b/2)² + τ²)
**Principal stresses:** σ₁ = σ_b/2 + √((σ_b/2)² + τ²), σ₃ = σ_b/2 – √((σ_b/2)² + τ²)
**Maximum shear stress:** τ_max = √((σ_b/2)² + τ²)

This is identical to the formula for σ_max/min above.

## Fatigue Analysis — S-N Diagram

### S-N Curve Features

The **fatigue strength** or **endurance limit (S_e)** is the stress level below which the material can endure infinite cycles without failure.

**Key characteristics:**
- S-N curve for **steels** flattens after 10⁶ cycles (≈N_L = 10⁶–10⁷)
- For **aluminum/alloys**, curve continues to drop (no true fatigue limit)
- S_e ≈ 0.5 × UTS for steels (approximate; actual ranges 0.35–0.55 UTS)

### Marin Modification Factors

Actual endurance limit S_e = k × S_e' where S_e' is ideal endurance limit and:

| Factor | Parameter | Typical Values |
|--------|-----------|----------------|
| k_a | Surface finish | Ground: 0.9, Machined: 0.8, Hot rolled: 0.6 |
| k_b | Size factor | 1.0 for d<8mm, decreases for larger |
| k_c | Loading | Axial: 0.7, Bending: 1.0, Torsion: 0.6 |
| k_d | Temperature | Decreases above 450°C |
| k_e | Reliability | 0.9 at 50% survival, 0.75 at 99.9% |

### Stress Concentration Factors (K_t, K_f)

**K_t (theoretical):** Ratio of max stress to nominal stress from elastic analysis (from handbook tables)

**K_f (fatigue stress concentration factor):** K_f = 1 + q(K_t – 1) where q = sensitivity index (0 to 1)

- **q ≈ 1** for brittle materials (ceramics, glass)
- **q < 1** for ductile materials (metals show some yielding)
- For **fillets, keyways, holes** in shafts — K_t values are significant (2–4 range)

> ⚠️ **GATE Trap:** Students often forget to apply K_f when a fillet or shoulder radius exists. Always check for stress raisers in fatigue problems.

### High-Cycle Fatigue Criterion

For N > 10³ (high-cycle fatigue):
S_a × N^b = C (Basquin's law) where S_a is stress amplitude.

**Modified Goodman criterion** (common in GATE for reversing stresses):
σ_a/S_e + σ_m/UTS = 1

Where σ_a = alternating stress amplitude, σ_m = mean stress, S_e = endurance limit.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Three-Dimensional Stress State and Transformation

### General Stress Transformation

For a general 3D stress state with σ_x, σ_y, σ_z, τ_xy, τ_yz, τ_zx:

**Principal stresses** are eigenvalues of the stress tensor:
σ₁ ≥ σ₂ ≥ σ₃

**Invariant equations:**
I₁ = σ_x + σ_y + σ_z
I₂ = σ_xσ_y + σ_yσ_z + σ_zσ_x – τ_xy² – τ_yz² – τ_zx²
I₃ = det(stress tensor)

**Maximum shear stress:** τ_max = (σ₁ – σ₃)/2 (acts on planes at 45° to principal planes)

## Theories of Failure for Ductile Materials

| Theory | Criterion | Application |
|--------|-----------|-------------|
| **Maximum Normal Stress** | σ_max ≤ σ_allow | Brittle materials |
| **Maximum Shear Stress (Tresca)** | τ_max ≤ τ_allow = σ_allow/2 | Conservative, ductile |
| **Distortion Energy (von Mises)** | σ_eq = √(((σ₁-σ₂)²+(σ₂-σ₃)²+(σ₃-σ₁)²)/2) ≤ σ_allow | Most accurate for ductile |
| **Maximum Principal Strain** | ε_max ≤ ε_allow | Special cases |

**Tresca vs von Mises for shaft combined stress:**
- Tresca: τ_allow ≥ √((σ/2)² + τ²)
- von Mises: σ_allow ≥ √(σ² + 3τ²)

For the same shaft under same loading, **von Mises is always less conservative** (higher allowable stress by factor ≈1.155 at pure torsion where σ=0).

## Notch Sensitivity and Fatigue Life Estimation

### Notch Sensitivity Index (q)

q = (K_f – 1)/(K_t – 1)

| Material | q (approximately) |
|----------|-------------------|
| Aluminum alloys | 0.1–0.3 |
| Steel (low strength) | 0.3–0.5 |
| Steel (high strength) | 0.6–0.9 |
| Titanium | 0.4–0.6 |

High-strength steels are more notch-sensitive — their high hardness makes them more susceptible to crack initiation at stress concentrations.

## Soderberg and Modified Goodman Relations

### Soderberg (Most Conservative)
σ_a/S_e + σ_m/σ_yt = 1

### Modified Goodman (Common in Design)
σ_a/S_e + σ_m/UTS = 1

### Gerber (Parabolic, Optimistic)
(σ_a/S_e) + (σ_m/UTS)² = 1

### ASME Elliptic (Moderately Conservative)
(σ_a/S_e)² + (σ_m/σ_yt)² = 1

**GATE typically uses Modified Goodman** for design problems involving combined mean and alternating stresses.

## Finite Element Validation

While FE analysis is used in industry, hand calculations using the above formulas remain the basis for GATE questions. Understanding the **stress concentration at a fillet** or **keyway** is essential:

**Fillet radius to shaft diameter ratio:** r/d
- Small r/d (sharp fillet) → high K_t
- Large r/d → lower K_t

For r/d = 0.1, K_t ≈ 1.6 for a stepped shaft in bending.
For r/d = 0.05, K_t ≈ 2.0.

---

## Example Problem

**GATE 2019:** A solid circular shaft of diameter d = 50 mm is subjected to a bending moment M = 1.5 kNm and a torque T = 1 kNm. Using von Mises criterion, find the required diameter if yield strength σ_yt = 300 MPa and factor of safety = 3.

**Solution:**

Step 1: Calculate stresses at outer surface
σ_b = 32M/(πd³) = 32 × 1.5 × 10³/(π × 50³) = 48000/(π × 125000) = 48000/392699 ≈ **122 MPa**
τ = 16T/(πd³) = 16 × 1.0 × 10³/(π × 125000) = 16000/392699 ≈ **40.7 MPa**

Step 2: von Mises equivalent stress
σ_eq = √(σ_b² + 3τ²) = √(122² + 3×40.7²) = √(14884 + 4973) = √(19857) ≈ **141 MPa**

Step 3: Allowable stress
σ_allow = σ_yt/FS = 300/3 = **100 MPa**

Step 4: Required diameter
σ_eq ∝ M/d³ for bending and T/d³ for torsion — both scale as 1/d³.
Required d_new = d × (σ_eq/σ_allow)^(1/3) = 50 × (141/100)^(1/3) = 50 × 1.41^(0.333) ≈ 50 × 1.12 ≈ **56 mm**

Check: Since σ_eq > σ_allow at d=50mm, diameter must increase.
d_required ≈ 56 mm. Round to standard size.

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
