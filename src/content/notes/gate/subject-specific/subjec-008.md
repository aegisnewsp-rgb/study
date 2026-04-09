---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-008
topicName: "Topic 8"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Machine Design — Bearings and Gears

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Bearings:** Ball bearings (contact angle) and roller bearings (line contact). **Bearing life** L₁₀ = (C/P)^p where C = basic dynamic capacity, P = equivalent load, p = 3 for ball, 10/3 for roller. Higher C means longer life.

**Gear Terminology:** Module m = d/T = pitch diameter / teeth count. Always use module (not diametral pitch) in GATE. **Pressure angle** typically 20° (standard).

**Gear Types:** Spur (parallel axes, no thrust), Helical (thrust component), Bevel (intersecting axes), Worm (crossed axes, high reduction ratio).

**Gear Trains:** Train value = product of teeth ratios. For compound gear train, output direction is determined by number of intermediate (idler) gears. Train value > 1 means speed reduction.

**Belts:** Flat belt — V > V_flat due to friction (V-belt wraps tighter). V-belt service factor depends on load type.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Bearings

### Types and Selection

**Ball bearings** carry combined radial and thrust loads. Key parameters:
- **Contact angle (α):** 0° = deep groove, 15–40° = angular contact
- **Basic dynamic capacity (C):** Load for 10⁶ revolutions to 10% failure (from manufacturer catalog)
- **Equivalents load (P):** X × F_r + Y × F_a (X = radial factor, Y = thrust factor)

**Roller bearings** carry higher loads at line contact:
- Cylindrical roller: Radial only, high capacity
- Tapered roller: Combined radial + thrust
- Needle roller: Maximum radial capacity per diameter

> ⚠️ **GATE trap:** Confusing static capacity (C₀) with dynamic capacity (C). C₀ is for non-rotating or slow-moving applications. C is for dynamically loaded rotating bearings.

### Bearing Life Calculation

**Basic rated life (L₁₀):** 10⁶ revolutions at 90% survival rate.

**L₁₀ = (C/P)^p**

| Bearing Type | Exponent p |
|--------------|-----------|
| Ball bearing | 3 |
| Roller bearing | 10/3 ≈ 3.33 |

**Equivalent load P:**
P = X × F_r + Y × F_a

For **deep groove ball bearings:**
- If F_a/F_r ≤ e (load ratio threshold): X=1, Y=0 → P = F_r
- If F_a/F_r > e: X=0.56, Y depends on F_a/C₀

**Example:** C = 22 kN, F_r = 5 kN, F_a = 2 kN
Check ratio: 2/5 = 0.4. If e = 0.4 (typical), ratio equals e → use radial only.
P = F_r = 5 kN.
L₁₀ = (22/5)³ = (4.4)³ = **85.2 million revolutions**

### Bearing Mounting

**Fixed-fixed:** Maximum rigidity, both ends locked against axial movement. For long shafts.
**Fixed-free:** One end fixed (against rotation and axial), other free to move axially. For short shafts.
**Floating-floating:** Both ends allow axial float. Requires preloading.

**Abutment dimensions:** Shoulder diameter > inner ring bore, fillet radius must be accommodated.

## Gear Geometry and Terminology

### Standard Gear Terms

| Term | Symbol | Formula | Description |
|------|--------|---------|-------------|
| Circular pitch | p | πm | Distance between adjacent teeth along pitch circle |
| Module | m | d/T | Size parameter (mm) — **use this in GATE** |
| Diametral pitch | P_d | T/d | Inverse of module — **avoid in GATE** |
| Pitch diameter | d | m × T | Reference circle diameter |
| Addendum | a | m | Tip of tooth above pitch circle |
| Dedendum | b | 1.25m | Root below pitch circle |
| Whole depth | h | 2.25m | a + b |
| Pressure angle | φ | 20° (std) | Normal to tooth profile |
| Base circle | d_b | d cos φ | For involute generation |

**Gear ratio (i):** i = T₂/T₁ = d₂/d₁ = N₁/N₂ (always > 1 for reduction)

### Gear Tooth Geometry

For standard full-depth teeth:
- **Addendum = m**
- **Dedendum = 1.25m** (standard clearance = 0.25m)
- **Working depth = 2m**
- **Whole depth = 2.25m**

**To avoid interference** (in spur gears):
Minimum teeth for rack with no interference: T_min = 2 × (1 + √(1+sin φ)/sin φ) × (for standard 20° gears, approximately 17 teeth at pinion)

---

## Gear Types

### Spur Gears

- Teeth parallel to axis of rotation
- **Line contact** along full width (actually point contact due to elastic deflection)
- Only transmit motion between parallel shafts
- **No axial thrust** (no helical angle)
- Highest load capacity for given size (simple geometry)
- **Noise and vibration** at high speeds

### Helical Gears

- Teeth cut at helix angle β to axis
- **Gradual tooth contact** — quieter, smoother
- **Creates axial thrust force** F_a = F_t × tan(β)
- Can transmit motion between **parallel or crossed axes** (spiral bevel)
- **Higher load capacity** due to larger contact ratio

**Double helical (herringbone):** Two helical gears mirrored to cancel axial thrust — but complex to manufacture.

### Bevel Gears

- Teeth cut on a cone surface
- Transmit motion between **intersecting shafts** (typically 90°)
- **Straight bevel:** No overlap, simpler, for low-speed
- **Spiral bevel:** Curved teeth, smoother, for higher speeds
- **Zerol bevel:** Zero helix angle but curved — compromise

**Force analysis for bevel gear (at pitch cone angle δ):**
- Tangential: F_t = 2T/d_m (at mean diameter)
- Radial: F_r = F_t × tan(φ) × cos(δ)
- Thrust: F_a = F_t × tan(φ) × sin(δ)

### Worm Gears

- Worm (screw) meshes with worm wheel
- **High reduction ratio** in single stage (up to 100:1)
- **Sliding contact** — low efficiency (typically 40–90%)
- **Self-locking:** Worm can drive wheel but not vice versa (if lead angle < friction angle)
- High heat generation due to sliding

**Worm geometry:**
Lead = π × d_worm × tan(λ) where λ = lead angle
Gear ratio = T_wheel / T_worm = 1 / tan(λ) = number of starts of worm

---

## Gear Trains

### Simple Gear Train

All gears mounted on fixed shafts. **Train value (velocity ratio):**
VR = N_input / N_output = T_driven / T_driving = product of driven/teeth of drivers

For gears 1-2-3-4 in sequence: VR = (T₂/T₁) × (T₃/T₂) × (T₄/T₃) = T₄/T₁
The intermediate gears cancel out (they rotate but don't affect VR).

### Compound Gear Train

For **stepped reduction** where shafts are fixed:
VR = (T₂/T₁) × (T₄/T₃) for two stages.

**Example:** T₁=20, T₂=40, T₃=25, T₄=75
Stage 1: T₂/T₁ = 40/20 = 2
Stage 2: T₄/T₃ = 75/25 = 3
Total VR = 2 × 3 = **6** (speed reduced 6×)

**Direction:** Compound train with odd number of mesh points → output rotates opposite to input. Even number → same direction.

### Epicyclic (Planetary) Gear Trains

This is the **most challenging gear train type** in GATE.

**Key formula (Willis equation):**
(N_sun – N_arm)/(N_ring – N_arm) = (–T_ring/T_sun)

Where typically:
- N_sun = N₁ (sun gear)
- N_ring = N₃ (ring gear / internal gear)
- N_arm = N₄ (carrier arm)

**When arm is fixed (holding):** Use relative speeds. Let N_arm = 0. Then:
(N_sun – 0)/(N_ring – 0) = –T_ring/T_sun

**Step-by-step for epicyclic:**
1. Identify which members are fixed, input, output
2. Apply Willis equation with arm as reference
3. Solve for unknown speed

> ⚠️ **Common GATE mistake:** Forgetting the negative sign in Willis equation. The ratio includes a minus because sun and ring rotate in opposite directions (internal mesh).

---

## Belt Drives

### Flat Belts

**Velocity ratio:** V = π × d₁ × N₁ / 60 = π × d₂ × N₂ / 60
VR = N₁/N₂ = d₂/d₁ (approximately, for no slip)

**Belt length (open belt):**
L = 2C + (π/2)(d₁+d₂) + (d₂–d₁)²/(4C)
Where C = center distance

**Tensions:** Tight side T₁, Slack side T₂
Power P = (T₁ – T₂) × V where V is belt velocity (m/s)
**Maximum tension ratio:** T₁/T₂ = e^(μθ) where θ = wrap angle in radians, μ = coefficient of friction

### V-Belts

**Advantage over flat belt:** Higher power capacity, tighter wrap angle (up to 180° per sheave), self-centering.

**V-shape** increases normal force and friction: effective μ_eff = μ / sin(β) where β = V-groove angle (typically 20° for standard V-belts, so μ_eff ≈ 2.9 × μ)

**Belt type selection** from manufacturer catalogs based on:
- Design power = rated power × service factor
- Small sheave diameter (limits speed)
- Center distance and length

**Service factors (typical):**
| Load Type | Service Factor |
|-----------|----------------|
| Uniform (fans, pumps) | 1.2–1.3 |
| Moderate shock (compressors) | 1.4–1.6 |
| Heavy shock (crushers) | 1.7–2.0 |

> 💡 **GATE Tip:** Belt drive questions often ask about VR with slip, or about tension ratio. Remember that belt length formulas are rarely needed in GATE — focus on VR and tension calculations.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Bearing Steels and Heat Treatment

**SAE 52100** (AISI 52100) — standard bearing steel:
- 1% Cr, 1% C
- Through-hardened to 60–65 HRC
- Used for balls, rollers, rings

**Heat treatment stages:**
1. **Austenitizing:** Heat to ~850°C
2. **Quenching:** Rapid cool to transform to martensite
3. **Tempering:** 150–200°C to relieve stresses and achieve target hardness

**Failure modes:**
- **Spalling:** Fatigue failure starting at subsurface — most common
- **Brinelling:** Static indentation from振动 or incorrect handling
- **Abrasive wear:** Contamination in lubricant
- **Corrosion:** Water or chemical contamination
- **Electrical pitting:** EDM damage from electric motors

## Surface Fatigue in Gears

Gear tooth failure by fatigue (pitting) follows the **Hertzian contact stress** model:

σ_H = Z_E × √(F_t × K / (b × d × q))  [contact/pitting stress]

Where:
- Z_E = elastic coefficient (for steel–steel, Z_E ≈ 1898 MPa√mm)
- F_t = tangential load
- b = face width
- d = pinion pitch diameter
- q = contact ratio

**Bending stress (Lewis equation):**
σ_b = F_t × K / (b × m × Y) where Y = Lewis form factor (depends on number of teeth and pressure angle)

Standard **20° full-depth teeth** have Lewis form factor:
| Teeth | Y (20° FD) |
|-------|------------|
| 20 | 0.326 |
| 30 | 0.358 |
| 50 | 0.384 |

---

## Epicyclic Gear Train — Detailed Problem

**Example:** Sun gear (T=24) meshes with planet gears (T=12 each, 3 planets) which mesh with ring gear (T=48). Arm is fixed. Find output speed of ring gear when sun gear is input at 100 RPM.

**Solution using Willis equation:**
Let arm fixed (N_arm = 0). Then Willis becomes:
(N_sun – 0)/(N_ring – 0) = –T_ring/T_sun
N_sun/N_ring = –48/24 = –2
N_ring = –N_sun/2 = –100/2 = **–50 RPM**

Negative sign means ring rotates opposite to sun. ✓

**Alternative method — tabulation:**
1. Column 1: Sun, Planet, Ring (fixed arm reference)
2. For each gear: teeth engagement = –(T_mesh/T_driver)
3. Solve systematically

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
