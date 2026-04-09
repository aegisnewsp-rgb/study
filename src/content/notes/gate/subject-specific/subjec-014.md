---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-014
topicName: "Topic 14"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Fluid Mechanics — Flow Through Pipes and Hydraulic Machines

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Laminar vs Turbulent Flow**

- **Reynolds number:** Re = ρVD/μ = VD/ν
- Re < 2000 → **Laminar**; Re > 4000 → **Turbulent**; 2000–4000 → Transition

**Pipe Flow Losses**

- **Darcy-Weisbach:** h_f = f(L/D)(V²/2g)
- **Major losses:** f = 64/Re (laminar); Moody chart (turbulent)
- **Minor losses:** h_m = K(V²/2g) — entrances, exits, elbows, valves

**Pipes in Series/Parallel**

- **Series:** Q same; h_f_total = Σh_f; equivalent D from Hazen-Williams or Darcy
- **Parallel:** Head loss same; Q_total = ΣQ_i

**Hydraulic Machines**

- **Turbines:** Pelton (impulse), Francis (reaction mixed), Kaplan (reaction axial)
- **Pumps:** Centrifugal — head H = (p₂−p₁)/ρg + (V₂²−V₁²)/2g + z₂−z₁

**Key Formulas Table**

| Concept | Formula |
|---------|---------|
| Reynolds Number | Re = ρVD/μ = VD/ν |
| Darcy Friction | h_f = f(L/D)(V²/2g) |
| Minor Loss | h_m = K(V²/2g) |
| Pump Power | P = ρgQH/η |
| Turbine Power | P = ρgQH·η |
| Specific Speed (Turbine) | N_s = N√P/H^1.25 |
| Specific Speed (Pump) | N_s = N√Q/H^0.75 |

⚡ **GATE Tip:** Pipe network problems are common. Master the series/parallel rules and the Moody chart for friction factor.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Flow Classification and Reynolds Number

The **Reynolds number** classifies flow regime:
> **Re = ρVD/μ = VD/ν**

where V = average velocity, D = pipe diameter, μ = dynamic viscosity, ν = kinematic viscosity.

- **Laminar** (Re < 2000): Viscous forces dominate; parabolic velocity profile; f = 64/Re
- **Turbulent** (Re > 4000): Inertial forces dominate; flat velocity profile; f from Moody chart
- **Transition** (2000–4000): Hysteresis region; behavior unpredictable

⚡ **GATE Watch:** Friction factor f is defined as the **Darcy friction factor** (fanning friction factor is 1/4 of Darcy). Verify which one is being used — most GATE problems use Darcy.

## Darcy-Weisbach Equation

The head loss due to friction in a pipe of length L and diameter D is:
> **h_f = f × (L/D) × (V²/2g)**

The friction factor f depends on:
- **Laminar:** f = 64/Re (theoretical, derived from Navier-Stokes)
- **Turbulent:** Use **Moody chart** or Colebrook-White equation

### Colebrook-White Equation (Implicit)

> **1/√f = −2 log₁₀(ε/(3.7D) + 2.51/(Re√f))**

where ε is the **absolute roughness** of the pipe inner surface.

**Swamee-Jain equation** (explicit approximation):
> **f = 0.25 / [log₁₀(ε/(3.7D) + 5.74/Re⁰·⁹)]²** (valid for Re > 10⁵)

### Minor Losses

Minor head losses occur at fittings, bends, expansions, contractions, and valves:
> **h_m = K × (V²/2g)**

| Fitting | K value |
|---------|---------|
| Pipe entrance (sharp) | 0.5 |
| Pipe entrance (bell-mouth) | 0.05–0.1 |
| Pipe exit (sudden) | 1.0 |
| 90° elbow (standard) | 0.3–0.9 |
| 90° elbow (long radius) | 0.2 |
| Open globe valve | 6.0 |
| Open gate valve | 0.15 |

⚡ **GATE Tip:** For fully developed pipe flow over long distances, minor losses are often negligible compared to major (friction) losses. But for short pipes with many fittings, they matter.

## Pipes in Series and Parallel

### Series Connection
- **Same discharge** through all pipes: Q₁ = Q₂ = Q₃
- **Total head loss:** h_f,total = h_f₁ + h_f₂ + h_f₃
- Equivalent pipe: solve for D_eq such that h_f,eq = h_f,total for same Q

### Parallel Connection
- **Same head loss** across each branch: h_f₁ = h_f₂
- **Total discharge:** Q_total = Q₁ + Q₂
- Flow splits according to resistance (Q proportional to 1/√f_i·L_i/D_i^5)

### Equivalent Pipe Concept

For a pipe of length L_eq and diameter D_eq that gives the same head loss as the original system at the same flow rate:
> **h_f = f(L_eq/D_eq)(Q²/k²)** where k = A√(2gD)

## Hydraulic Machines — Turbines

### Classification

| Type | Action | Head Range | Specific Speed |
|------|--------|------------|----------------|
| Pelton | Impulse (jet) | High (>300 m) | Low (10–50) |
| Francis | Reaction (mixed flow) | Medium (30–300 m) | Medium (50–300) |
| Kaplan | Reaction (axial) | Low (<30 m) | High (300–1000) |

### Turbine Parameters

**Power developed by turbine:**
> **P = ρg Q H η_t**

**Specific speed** (dimensionless form):
> **N_s = N√P / H^1.25** (turbines)
> **N_s = N√Q / H^0.75** (pumps)

where N is operating speed (RPM), P is power (kW), H is head (m), Q is discharge (m³/s).

⚡ **GATE Watch:** Kaplan turbines look like propeller turbines but have adjustable runner blades — making them efficient across a range of flows. Francis turbines have a scroll casing and guide vanes.

## Centrifugal Pumps

### Operating Characteristics

- **Head developed:** H = (p₂−p₁)/ρg + (V₂²−V₁²)/2g + (z₂−z₁)
- **Power input:** P_in = ρgQH/η
- **Suction head:** NPSH available must exceed NPSH required (cavitation criterion)

### Pump Affinity Laws (Similarity Laws)

For geometrically similar pumps operating at different speeds or sizes:
> **Q ∝ N × D³**
> **H ∝ N² × D²**
> **P ∝ N³ × D⁵**

⚡ **Scaling:** If speed changes from N₁ to N₂ at same diameter, Q₂/Q₁ = N₂/N₁, H₂/H₁ = (N₂/N₁)², P₂/P₁ = (N₂/N₁)³

### Example Problem
**Water (ρ = 1000 kg/m³) flows through a smooth pipe (D = 200 mm, L = 500 m) at 0.1 m³/s. Kinematic viscosity ν = 1×10⁻⁶ m²/s. Find head loss using Darcy-Weisbach (assume turbulent, f = 0.02).**

Solution:
V = Q/A = 0.1/(π×0.2²/4) = 0.1/0.0314 = **3.18 m/s**
Re = VD/ν = 3.18×0.2/1×10⁻⁶ = **6.36×10⁵** (clearly turbulent)
h_f = f(L/D)(V²/2g) = 0.02×(500/0.2)×(3.18²/(2×9.81))
h_f = 0.02×2500×0.516 = **25.8 m of water**

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Moody Chart Mastery

The Moody chart plots friction factor f versus Re for various relative roughness ε/D. Key zones:

1. **Laminar zone** (Re < 2000): f = 64/Re (straight line, roughness irrelevant)
2. **Transition zone** (2000–4000): Friction factor unreliable
3. **Hydraulically smooth zone** (4000–10⁵): f depends mainly on Re; roughness negligible
4. **Transitional zone** (10⁵–10⁶): f depends on both Re and ε/D
5. **Fully rough zone** (Re > 10⁶): f depends mainly on ε/D; Re effect vanishes

⚡ **GATE Strategy:** For fully rough turbulent flow, the Colebrook equation simplifies to 1/√f ≈ 2 log₁₀(3.7D/ε). This is why head loss becomes independent of flow rate at very high Re.

### Series-Parallel Pipe Networks

**Hazen-Williams formula** (empirical, used for water supply networks):
> **h_f = 10.67 × L × Q^1.852 / (C^1.852 × D^4.87)**

where C is the Hazen-Williams roughness coefficient (120 for smooth pipes, 140 for new cast iron).

### Pump Cavitation and NPSH

**Net Positive Suction Head Available:**
> **NPSH_A = (p_atm/ρg − p_v/ρg) − h_s + h_acc**

where p_v = vapor pressure, h_s = suction lift, h_acc = acceleration head.

Cavitation occurs when NPSH_A < NPSH_required (specified by manufacturer).

### Pump-Pipe System Curve

The **system head curve** (required by pump) consists of:
- Static head: H_s = z₂ − z₁
- Friction head: h_f ∝ Q² (Darcy friction)
- Velocity head differences

The **operating point** is where the pump curve intersects the system curve.

### Turbine Governing

Pelton turbines use **jet deflectors** and **spear valves** to regulate flow. Francis turbines use **guide vane angle** adjustment. Kaplan turbines adjust both **guide vanes** and **runner blade angle**.

⚡ **GATE Numerical Pattern:** Pipe flow problems frequently combine continuity, Darcy-Weisbach, and Bernoulli in a single question. Start with what you know, identify unknowns, apply equations in sequence.

### Water Hammer

Rapid valve closure creates a **pressure surge** (water hammer) traveling at speed a:
> **a = √(K/ρ) / √(1 + Kd/Et)** (for thin-walled pipes)

Pressure rise: Δp = ρaΔV. This can cause significant pipe stress — addressed by surge tanks and relief valves.

### Example — Pump Selection
**A pump delivers 0.05 m³/s water to a height of 30 m through a pipe (D = 150 mm, L = 200 m, f = 0.015). Pump efficiency = 75%. Find pump power required.**

Solution:
V = Q/A = 0.05/(π×0.15²/4) = 2.83 m/s
h_f = f(L/D)(V²/2g) = 0.015×(200/0.15)×(2.83²/19.62) = 0.015×1333×0.408 = **8.16 m**
Total head H = static + friction = 30 + 8.16 = **38.16 m**
P_hydraulic = ρgQH = 1000×9.81×0.05×38.16 = **18,710 W = 18.7 kW**
P_motor = P_hydraulic/η = 18.7/0.75 = **24.9 kW**

### GATE Previous Year Pattern
| Year | Topic | Marks |
|------|-------|-------|
| 2023 | Darcy-Weisbach + minor losses | 5 |
| 2022 | Centrifugal pump affinity laws | 2 |
| 2021 | Pipes in series/parallel network | 5 |
| 2020 | Specific speed — turbine selection | 2 |
| 2019 | Moody chart — turbulent friction | 5 |

⚡ **Common Mistakes:** (1) Confusing Darcy f with Fanning f (4× difference), (2) Wrong K value for minor loss coefficient, (3) Adding minor losses to major losses incorrectly, (4) Forgetting to include velocity head in pump head calculation.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
