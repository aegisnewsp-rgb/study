---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-019
topicName: "Topic 19"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Electrical Machines — Transformers

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**GATE Weightage:** ~5–8 marks/year (Electrical branch); equivalent circuit and efficiency/voltage regulation are most frequently tested.

---

**Ideal Transformer:**
- V₁/V₂ = N₁/N₂ = a (turns ratio)
- I₁/I₂ = N₂/N₁ = 1/a (current ratio, neglecting magnetizing current)
- V₁I₁ = V₂I₂ (power conservation)

**Equivalent Circuit (referred to primary):**

```
V₁ → [R₁] → [jX₁] → (+) → [R_c || jX_m] → [R₂'/jX₂'] → [a²R_L] → (−)
                             |_____|         |_______|
                           magnetizing       referred
                             branch           secondary
```

**Open-Circuit Test (OCC):** Measures core losses → R_c, X_m (LV side shorted, HV open)
**Short-Circuit Test (SCT):** Measures copper losses → R_eq, X_eq (LV side shorted, rated current flows)

**Voltage Regulation (VR):**
VR = (E₂ – V₂)/V₂ × 100% (at full load, lagging PF)

**Efficiency:** η = (Output power) / (Output + losses) = P_out / (P_out + P_core + P_cu)

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Construction and Operating Principle

A **transformer** transfers electrical energy between circuits at different voltage levels using **electromagnetic induction**.

### Core Type vs Shell Type

| Feature | Core Type | Shell Type |
|---|---|---|
| Construction | Windings surround core limbs | Core surrounds windings |
| Flux path | Each limb has its own winding | Central limb with windings |
| Mechanical strength | Lower | Higher |
| Cooling | Easier | More difficult |
| Use | High voltage, high capacity | Low voltage, distribution |

### Ideal Transformer Equations

**EMF equation:**
E = 4.44 f N Φ_m = 4.44 f N B_m A_c

Where:
- f = frequency (Hz)
- N = number of turns
- Φ_m = maximum flux (Wb) = B_m · A_c
- B_m = maximum flux density (T)
- A_c = core cross-sectional area (m²)

**Voltage ratio:** V₁/V₂ = N₁/N₂ = a (a > 1 for step-down, a < 1 for step-up)

**Current ratio:** I₁/I₂ = N₂/N₁ = 1/a

**Power:** S₁ = V₁I₁ = V₂I₂ = S (apparent power conserved in ideal case)

## Equivalent Circuit — Complete Model

The **approximate equivalent circuit** referred to primary (all secondary quantities divided by a²):

```
V₁ → R₁ + jX₁ → → (+) → R_c || jX_m → R₂' + jX₂' → V₂' → (−)
```

Parameters:
- **R₁, X₁** = primary winding resistance and leakage reactance
- **R₂', X₂'** = secondary resistance/reactance referred to primary
- **R_c** = core loss resistance (represents hysteresis + eddy current losses)
- **X_m** = magnetizing reactance (represents magnetizing current)

> **Key insight:** The magnetizing branch draws a small current I_m even at no-load (mostly reactive). The core loss component I_c is in phase with V₁.

## Open-Circuit Test (OCT)

**Procedure:** Rated voltage applied to primary, secondary open-circuited. Measure I_oc, P_oc, V_oc.

**From OCT:**
- Core loss P_core = P_oc (at rated voltage)
- I_c = P_oc / V₁ (core loss component)
- I_m = √(I_oc² – I_c²) (magnetizing component)
- R_c = V₁ / I_c
- X_m = V₁ / I_m

**Typical values:** I_oc = 5–10% of rated current; P_oc = small (few hundred watts for small transformers)

> **GATE Tip:** OCT is performed at **rated voltage** to measure core losses. The LV side is typically shorted in this test (not the HV side).

## Short-Circuit Test (SCT)

**Procedure:** Low voltage applied to primary such that rated current flows, secondary short-circuited.

**From SCT:**
- Copper loss at rated current P_cu(rated) = P_sc
- Total series impedance Z_eq = V_sc / I_rated
- R_eq = P_sc / I_rated²
- X_eq = √(Z_eq² – R_eq²)

**Important:** P_sc represents full-load copper loss at rated current. Actual copper loss at any load = P_sc × (I/I_rated)²

## Voltage Regulation

**Definition:** Change in secondary voltage from no-load to full-load at a given power factor, expressed as percentage of full-load rated voltage.

**VR = (E₂ – V₂)/V₂ × 100%**

Where E₂ = induced EMF at no-load (same as rated secondary voltage), V₂ = actual terminal voltage at load.

### Regulation at Different Power Factors

For a lagging load (inductive):
- **Lagging PF:** VR > 0 (voltage drops, E₂ > V₂) — most common case
- **Unity PF:** Small positive VR
- **Leading PF:** VR can be negative (voltage rises due to capacitive effect)

**Formula:** VR ≈ (I_a R_eq cosφ ± I_r X_eq sinφ) / V₂ × 100%

The ± depends on load power factor:
- Lagging: + I_r X_eq sinφ (adds to regulation)
- Leading: – I_r X_eq sinφ (can subtract)

## Efficiency

**η = Output Power / Input Power = P_out / (P_out + P_core + P_cu)**

At any load level k (fraction of full load):
- Core loss P_core = constant (independent of load)
- Copper loss P_cu(k) = k² × P_cu(rated)

**Maximum efficiency** occurs when:
P_core = P_cu → k² P_cu(rated) = P_core

Solving for k: k_max = √(P_core / P_cu(rated))

> **Design principle:** Transformers are designed so that maximum efficiency occurs near 75–80% of full load, since they rarely operate at full load continuously.

## Autotransformers

An **autotransformer** has a single winding common to both primary and secondary circuits (partially shared).

**Advantages:**
- Lower cost (less copper, smaller core)
- Higher efficiency (lower losses)
- Better voltage regulation

**Disadvantages:**
- No isolation between primary and secondary (safety hazard)
- Higher fault currents due to low impedance

**Voltage ratio:** Same as two-winding: V₁/V₂ = N₁/N₂ = a

**Capacity:** For same VA rating, autotransformer is smaller but the advantage decreases as voltage ratio approaches 1.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Three-Phase Transformer Connections

### Common Configurations

| Connection | Primary | Secondary | Use case |
|---|---|---|---|
| Star-Star (Y-Y) | Y | Y | Neutral available both sides |
| Star-Delta (Y-Δ) | Y | Δ | Step-down, distribution |
| Delta-Star (Δ-Y) | Δ | Y | Step-up at generating stations |
| Delta-Delta (Δ-Δ) | Δ | Δ | No neutral; heavy industrial |

### Phase Shift in Star-Delta and Delta-Star

- Y-Y: 0° phase shift
- Y-Δ: Secondary lags primary by 30° (or +30°, depending on connection)
- Δ-Y: Secondary leads primary by 30°

**GATE frequently tests** the 30° phase shift relationship in star-delta transformations.

## Parallel Operation of Transformers

For parallel operation, conditions required:

1. **Same voltage ratio** (or as close as possible, to prevent circulating currents)
2. **Same polarity** (proper terminal connections)
3. **Same phase sequence** (essential — wrong sequence causes short circuit)
4. **Impedance ratios proportional to VA ratings** (for load sharing)

### Load Sharing

When two transformers share load:
- S₁/S₂ = (Z₂/Z₁) for proportional loading by impedance
- Each transformer carries load proportional to its rating divided by its impedance

**Circulating current** I_c = (V₁ – V₂) / (Z₁ + Z₂) when voltage ratios differ slightly.

## Per-Unit System

Per-unit simplifies three-phase transformer calculations:

**Base values:** S_base (VA), V_base (LV or HV side), I_base = S_base/(√3 V_base), Z_base = V_base²/S_base

**Impedance in pu** = Actual Z / Z_base

For three-phase transformers, per-unit impedance is the same on both sides when referred to appropriate base values.

## Harmonics in Transformers

### Magnetizing Current Harmonics

When operated near saturation, magnetizing current contains:
- 3rd harmonic (triple-n, absent in Y with neutral point)
- 5th, 7th harmonics

### Harmonic Effects

- **Third harmonic:** Circulates in Δ-connected windings, adds to core losses
- **Fifth, seventh:** Cause additional core and copper losses
- **K-factor:** Rating for harmonic current heating (used for non-linear loads)

## Thermal and Loading Considerations

**Temperature rise** depends on:
- Core loss (constant, all day)
- Copper loss (varies with load²)

**Loading guides:**
- Overload capability: 150% for short duration (emergency)
- Continuous overload reduces life expectancy

**Thermal model:** Time constant τ (typically 5–10 minutes for oil-filled transformers).

## Example Problem — Voltage Regulation

> A 100 kVA, 2000/200 V transformer has R_eq = 0.02 pu, X_eq = 0.05 pu. Find voltage regulation at 0.8 PF lagging, full load.

**Solution:**
- Base: S = 100 kVA, V₂ = 200 V
- I₂_full = S/(√3 × 200) = 100000/(346.4) = 288.7 A
- I₂_pu = 1.0 (full load)
- Regulation formula: VR = (I_pu R_eq cosφ + I_pu X_eq sinφ) × 100%
- cosφ = 0.8, sinφ = 0.6
- VR = (1 × 0.02 × 0.8 + 1 × 0.05 × 0.6) × 100%
- VR = (0.016 + 0.030) × 100% = **4.6%**

## Example Problem — Maximum Efficiency

> A 500 kVA transformer has core loss = 2 kW, full-load copper loss = 5 kW. At what load does η_max occur?

**Solution:**
- η_max when P_core = P_cu = k² × P_cu(rated)
- 2 = k² × 5 → k = √(2/5) = √0.4 = **0.632** = 63.2% of full load
- Load = 500 × 0.632 = **316 kVA**

## GATE Exam Strategy — Transformers

**Expected question types:**
1. Calculate voltage regulation from equivalent circuit parameters
2. Efficiency at given load and PF
3. Draw equivalent circuit parameters from OCC/SCT data
4. Determine which winding is LV/HV from test results
5. Parallel operation load sharing
6. Autotransformer VA rating and advantage ratio
7. Three-phase connections and phase shift

**Common GATE mistakes:**
- Confusing which quantities get divided by a² when referring to primary
- Mixing up the primary and secondary sides in OCC/SCT
- Forgetting that X_eq = √(Z_eq² – R_eq²) in SCT analysis
- Wrong sign for leading PF regulation (subtracts instead of adds)
- Using line values instead of phase values in three-phase problems

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
