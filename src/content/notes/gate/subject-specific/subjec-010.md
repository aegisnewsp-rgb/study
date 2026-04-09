---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-010
topicName: "Topic 10"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Theory of Machines — Dynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Flywheel:** Stores energy as kinetic energy. Energy stored E = ½I(ω₂² – ω₁²). For flywheel design, find **maximum fluctuation of speed** (ω_max – ω_min). Coefficient of fluctuation C_s = (ω_max – ω_min)/ω_mean.

**Governor:** Maintains mean speed. **Watt governor** (centrifugal, radial) vs **Porter governor** (adds weight on sleeve). **Hartnell governor** (spring-controlled). Sensitivity = dN/dM where N = speed, M = mass of sleeve.

**Balancing:** Rotating mass imbalance → equal masses at 180° apart. **Balancing of reciprocating masses** (single-cylinder engine): partial balance using balance weight (~0.5 × reciprocating mass).

**Vibration:** Undamped free: ω_n = √(k/m) = √(g/δ_static). Damped: c_c = 2√(km) = 2mω_n. **Logarithmic decrement** δ = ln(x₁/x₂) = 2πξ/√(1–ξ²).

**Critical speed:** N_c = 60 × √(k/m) / (2π) = (60/2π)ω_n for single mass system.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Flywheel Analysis

### Kinetic Energy and Speed Fluctuation

**Energy stored in flywheel:**
E = ½Iω²  where I = mass moment of inertia about axis

For a **rim-type flywheel** (concentrated rim):
I = m × r² where m = rim mass, r = mean radius

For a **solid disc flywheel:**
I = ½ m × r²

**Coefficient of fluctuation of speed:**
C_s = (ω_max – ω_min) / ω_mean

Where ω_mean = (ω_max + ω_min)/2

**Mean speed:** ω_mean = 2ω_mean (wrong!) → correct: ω_mean = (ω_max + ω_min)/2

> ⚠️ **GATE trap:** Confusion between mean speed and average speed. Mean speed = (max + min)/2. Average speed over a cycle = (area under ω-t curve)/period.

### Flywheel Design Problem

Given: Coefficient of fluctuation C_s, mean speed ω_mean, maximum fluctuation ΔE

**Energy equation:** ΔE = ½I(ω_max² – ω_min²) = ½I(ω_max – ω_min)(ω_max + ω_min) = ½I × (C_s × ω_mean) × (2ω_mean)
ΔE = I × C_s × ω_mean²

Therefore: **I = ΔE / (C_s × ω_mean²)**

**Example:** ΔE = 5 kJ, C_s = 0.02, ω_mean = 100 rad/s
I = 5000 / (0.02 × 10000) = 5000 / 200 = **25 kg·m²**

### Turning Moment Diagram

The **turning moment diagram** shows torque variation over one cycle:

1. **Mean torque line** drawn through the diagram area
2. **Maximum positive fluctuation:** Area above mean line = maximum energy storage needed
3. **Maximum negative fluctuation:** Area below mean line = energy released

For a **single-cylinder engine** (4-stroke):
- High torque during power stroke (expansion)
- Near-zero or negative torque during other strokes
- Large flywheel needed to smooth out these variations

## Governors

### Types of Governors

**Watt Governor (Centrifugal, 1780):**
Simple two-link mechanism. Balls rise as speed increases.
Height h = g/ω² (decreases with increasing ω — counter-intuitive from "rise" perspective).
At ground pivot, h = (g/ω²) is the perpendicular distance from pivot to ball line.

**Porter Governor:**
Watt governor with additional mass added to sleeve. Same height formula but heavier sleeve means **higher sensitivity**.

**Hartnell Governor:**
Spring-controlled governor. Spring force balances centrifugal force.
**Natural frequency:** ω_n = √(k/m_sleeve) where k = spring stiffness, m = equivalent sleeve mass

**Hartog Governor:**
Springs control each ball separately — more sensitive.

### Governor Terms

**Sensitiveness:**
S = (N₁ – N₂)/(N_mean) where N₁ and N₂ are speeds at upper and lower extreme positions.

For **Watt governor** at height h:
S = (2h/L) × (Δh/ω) ... complex.

More practically for Porter governor:
N₁ = √(g/W × (m+M) × L/m) ... (too many variations — understand the principle)

> 💡 **GATE Pattern:** Governor questions often ask which governor is most sensitive for the same speed change, or to calculate required spring stiffness for Hartnell governor.

### Force Analysis — Porter Governor

At equilibrium angle θ:
Centrifugal force on each ball = m × ω² × r = m × ω² × L × sin θ
Component along arm = m × ω² × L × sin θ × cos θ

**Nomenclature:**
L = length of link from pivot to center of gravity
m = mass of each rotating ball
M = mass of sleeve
θ = inclination of arm from vertical
r = L sin θ = horizontal radius

At speed N (RPM), equilibrium when:
m ω² L sin θ cos θ = m g sin θ + M g (L sin θ)/P ... (P = link ratio)

**Simplified:** Equilibrium when ω² × constant = g × constant
This leads to: N ∝ √(1/h) where h = height from pivot to plane of rotation

## Balancing of Rotating Masses

### Single-Plane Balancing (In-Line)

For masses m₁ at radius r₁ and m₂ at radius r₂ rotating at same angular position (same phase):
**Static balance:** m₁r₁ = m₂r₂ (vector, in same direction)

For **N masses** at angles θ₁, θ₂...:
∑mᵢrᵢ cos θᵢ = 0 (x-direction)
∑mᵢrᵢ sin θᵢ = 0 (y-direction)

Two equations → can balance with two known mass locations. **Minimum two masses** needed.

> ⚠️ **GATE Trap:** Students forget to use the **vector sum** (both x and y components) when balancing more than two masses.

### Balancing Procedure

1. Choose scale for mass-radius product (m×r) vectors
2. Draw vectors for each rotating mass in order of angular position
3. Complete the polygon — last vector closes the polygon
4. The closing vector (reversing direction) gives the required counterbalance

**Resultant unbalance** = vector sum of all m×r vectors.

### Example: Two Masses at 90°

Masses: m₁=5 kg at r₁=0.2m at θ=0°, m₂=3 kg at r₂=0.15m at θ=90°

m₁r₁ vector = 1.0 × 0° = (1.0, 0)
m₂r₂ vector = 0.45 × 90° = (0, 0.45)

Resultant = (1.0, 0.45)
Required balance mass m₃ at r₃: m₃r₃ = 1.0i + 0.45j
|m₃r₃| = √(1² + 0.45²) = √(1 + 0.2025) = √1.2025 = **1.097 kg·m**
Angle = tan⁻¹(0.45/1.0) = **24.2° from m₁ direction**

## Balancing of Reciprocating Masses

### Primary and Secondary Unbalance

**Primary unbalance:** 1st harmonic of reciprocating force = m × ω² × r × cos θ
This is the dominant component (largest magnitude).

**Secondary unbalance:** 2nd harmonic = m × ω² × r × (r/(2l)) × cos 2θ
Small for small r/l ratio (connecting rod).

### Balancing a Single-Cylinder Engine

**Fully balanced** would require m_p = m (all reciprocating mass). Practically impossible.

**Partial balance using balance weight on crank:**
Balance weight added to crank = (m × r) × (2/π) × ω² ... roughly 0.5 × m_p reciprocating mass is balanced.

Standard practice: **50% of reciprocating mass** is balanced by a counterweight on the crank (for inline engines).

**Residual unbalanced force** = 0.5 × m_p × ω² × cos θ (at primary frequency)

### Multi-Cylinder Engine Balancing

**Inline engine (i cylinders, equally spaced):**
- **Primary force:** Complete balance if cylinder spacing = 720°/i × k. For i=4, 90° crank spacing → primary balanced ✓
- **Secondary force:** May still be unbalanced — depends on cylinder arrangement

**V-engine (i cylinders each side):**
- If V-angle = 90° and cylinders opposite cancel secondary partially
- Primary balance: depends on crank arrangement

> ⚠️ **GATE exam note:** Two-cylinder inline engines cannot be fully balanced. V-twin engines can be partially balanced depending on firing order and crank phase.

## Vibration Analysis

### Undamped Free Vibration

**Equation of motion:** mẍ + kx = 0
**Natural frequency (ω_n):** ω_n = √(k/m) rad/s

**Period:** T = 2π/ω_n = 2π√(m/k)

**Static deflection method:** If a mass m deflects δ under its own weight: δ = mg/k
Therefore: ω_n = √(g/δ) — very useful for spring-supported systems.

**Frequency in Hz:** f_n = ω_n/2π = (1/2π)√(k/m)

### Damped Free Vibration

**Equation:** mẍ + cẋ + kx = 0
**Damping ratio:** ξ = c/c_c where c_c = 2√(km) = 2mω_n

| Damping | Condition | Behavior |
|---------|-----------|----------|
| Underdamped | ξ < 1 | Oscillatory decay |
| Critically damped | ξ = 1 | Fastest non-oscillatory return |
| Overdamped | ξ > 1 | Slow non-oscillatory decay |

**Underdamped case (most common):**
ω_d = ω_n√(1 – ξ²) — damped natural frequency

**Logarithmic decrement:** δ = ln(x₁/x₂) = 2πξ/√(1–ξ²)
If ξ is small (δ < 0.3): ξ ≈ δ/(2π)

**From test data:** ξ = δ/(√(δ² + 4π²))

> ⚠️ **GATE trick:** Using the wrong formula. Students often solve for ξ from δ incorrectly. Remember: δ = 2πξ/√(1–ξ²). So ξ²(δ² + 4π²) = 4π² ξ² → No: rearrange gives ξ = δ/√(δ² + 4π²).

## Critical Speed of Rotors

### Single Mass-Shaft System

**Rayleigh:** Assumes deflection shape is close to static deflection. Approximation.

**Whirling speed:** Speed at which lateral vibration amplitude becomes large (resonance).

**Critical speed formula (simple):**
N_c = (60/2π) × √(k/m) = (60/2π) × ω_n

**For shaft with disk at center:**
I_disk causes gyroscopic effects at high speed (affects critical speed in 3D).

**Bending critical speed:**
N_c = (60/2π) × √(g/δ_static) — same as natural frequency formula.

> 💡 **GATE Pattern:** Critical speed questions often involve finding the speed at which resonance occurs for a shaft with a disk. Convert deflection to natural frequency, then to RPM.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Flywheel — Torque-Time Diagram Integration

**Work-energy method:**
Area under T-θ diagram = change in kinetic energy = ½I(ω_max² – ω_min²)

For a complete cycle: Net work = 0 (system returns to same state). Mean torque line ensures this.

**Graphical method:**
1. Draw T-θ curve (mean line horizontal)
2. Identify maximum positive area (A_max) above mean
3. Maximum energy fluctuation = A_max (in appropriate units)
4. Use I = ΔE/(C_s × ω_mean²)

**Composite flywheel design:**
I_total = Σ I_i for each segment. For compound flywheels, calculate contribution from each part.

## Governor — Stability and Hunting

**Hunting:** Oscillation about set speed if too sensitive. Occurs when governor is too sensitive (S too high) relative to system response.

**Isochronous governor:** Zero speed droop (N₁ = N₂) — theoretically perfect but practically unstable. Requires spring.

**Watt governor:** Not isochronous — speed increases continuously as balls rise. Speed droop = (N₁-N₂)/N_mean.

**Porter governor with gravity:** Speed droop ≈ M/(M + m) ... heavier sleeve reduces droop (less hunting).

**Hartnell governor spring calculation:**
k = (m × ω² × r) / x where m = ball mass, ω = speed, r = arm radius, x = displacement

Required spring force at operating point = centrifugal force of balls at that speed.

## Multi-Cylinder Balancing — In-Line Engines

**Four-cylinder inline (90° crank spacing):**
- Primary forces: Balanced (centers of mass coincide)
- Primary couples: Zero (symmetric)
- Secondary forces: Balanced if firing order distributes
- Secondary couples: May exist (need calculation)

**Six-cylinder inline (120° crank spacing):**
- Primary and secondary both fully balanced

**V-8 engine balancing:**
Depends on configuration (cross-plane, flat-plane). Most V8s have some residual unbalance requiring counterweights.

## Vibration — Forced Vibration with Damping

**Equation:** mẍ + cẋ + kx = F₀ sin ωt

**Steady-state amplitude:**
X = F₀/√((k – mω²)² + (cω)²)

**Phase angle:** φ = tan⁻¹(cω/(k – mω²))

**Magnification factor (MF):**
MF = X/(F₀/k) = 1/√((1 – r²)² + (2ξr)²) where r = ω/ω_n

**At resonance (r=1):**
X_max = F₀/(2ξk) = (static deflection)/(2ξ)
Peak amplitude inversely proportional to damping!

> ⚠️ **GATE trap:** Forgetting that at resonance, the phase lag is 90° and amplitude is theoretically infinite for zero damping (which never happens in reality).

## Gyroscopic Effects

**Gyroscopic couple:** C = I × ω × Ω
- I = mass moment of inertia of rotor
- ω = spin speed of rotor
- Ω = precession rate (angular velocity of axis rotation)

**Direction (right-hand rule):** Point thumb along spin axis, fingers curl in direction of rotation. Palm shows precession direction.

**Practical application:** In aircraft, engine torque causes pitching moment. In ships, roll coupling creates yaw instability at certain speeds.

For a **disc-type rotor:**
C = (m × r_g²) × ω × Ω where r_g = radius of gyration.

---

## Example Problem

**GATE 2018:** A shaft carries a disc of mass 50 kg at midspan. Deflection under static load = 0.02 m. Find critical speed.

**Solution:**

Step 1: Find static deflection
δ = 0.02 m (given under disc weight)

Step 2: Natural frequency
ω_n = √(g/δ) = √(9.81/0.02) = √(490.5) ≈ **22.1 rad/s**

Step 3: Critical speed in RPM
N_c = (60/2π) × ω_n = (60/2π) × 22.1 = **211.2 RPM**

> 💡 Note: This is the first critical speed (bending mode). Higher modes exist but are less common in GATE.

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
