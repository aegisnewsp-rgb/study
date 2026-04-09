---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-020
topicName: "Topic 20"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Electrical Machines — DC Machines and Induction Motors

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**GATE Weightage:** ~6–10 marks/year (Electrical branch); torque-speed characteristics and starting methods are most frequently tested.

---

**DC Machine — Generated EMF:** E = kΦω = (PΦNZ)/60A (volts)

**DC Motor — Torque:** T = kΦI_a (Nm)

**Speed Regulation:** SR = (N_no-load – N_full-load) / N_full-load × 100%

### DC Motor Types

| Type | Series Field | Shunt Field | Compound |
|---|---|---|---|
| **Series** | High current winding | None | None |
| **Shunt** | Few turns, many turns | High resistance parallel | Both |
| **Compound** | Series + Shunt | — | Series + Shunt |

- **Series motor:** High starting torque, no-load speed dangerously high (must never be disconnected)
- **Shunt motor:** Constant speed, good regulation
- **Compound:** Starting torque of series + speed stability of shunt

**Induction Motor — Synchronous Speed:** N_s = 120f/P (rpm)
**Slip:** s = (N_s – N_r)/N_s
**Rotor EMF frequency:** f_r = s·f
**Induced Torque:** T = (3/ω_s) × (V_th² × R_r'/s) / ((R_th + R_r'/s)² + (X_th + X_r')²)

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## DC Machines — Construction and Working

### Basic Principle

A DC machine converts mechanical energy to electrical energy (generator) or vice versa (motor) using **electromagnetic induction** and **commutation**.

### Generated EMF (Generator)

**E = kΦZ N / 60A = (PΦNZ) / 60A**

Where:
- P = number of poles
- Φ = flux per pole (Wb)
- N = speed (rpm)
- Z = total number of conductors
- A = number of parallel paths (A = 2 for lap winding, A = P for wave winding)
- k = PZ/60A (machine constant)

**No-load terminal voltage** (generator): V = E (since I_a ≈ 0)

**Loaded terminal voltage:** V = E – I_a R_a (armature voltage drop)

### Commutation

Commutation reverses the current in coils as they pass through the brushes. Sparking at brushes indicates **poor commutation**.

**Causes of sparking:** Mechanical issues, brush misalignment, high reactance of commutation.

## DC Motor — Types and Characteristics

### Armature Reaction

The **armature flux** (from armature current) distorts and weakens the **main field flux** from the field winding:

- **Armature reaction** reduces total flux → reduces generated EMF
- **Demagnetizing effect:** Cross-magnetizing component at quadrature axis
- **Compensating winding** or **interpoles** reduce armature reaction effects

**Solutions:**
- Compensating windings embedded in pole faces
- Interpoles (commutating poles) between main poles

### Shunt Motor

**Circuit:** Field winding in parallel with armature

- Field current I_sh = V/R_sh (constant, since V is constant)
- Armature current I_a = I_L – I_sh
- **Torque:** T ∝ Φ·I_a ∝ I_a (since Φ constant)
- **Speed:** N = (V – I_aR_a)/kΦ ≈ constant (since Φ constant, small speed drop)

**Characteristics:**
- Constant speed (good regulation)
- Starting torque limited (I_a limited by armature resistance)
- Suitable for: fans, blowers, conveyors, machine tools

### Series Motor

**Circuit:** Field winding in series with armature → I_a = I_sh = I_L

- **Torque:** T ∝ Φ·I_a ∝ I_a² (at low saturation) — **high starting torque**
- **Speed:** N ∝ V/(kΦ·I_a) — speed inversely proportional to load current
- **No-load condition:** I_a → 0 → Φ → 0 → **N → dangerously high** (runaway)

> **Critical safety point:** Series motors should NEVER be belt-driven (load can disconnect → runaway).

**Characteristics:**
- Very high starting torque
- Variable speed (widely used in traction)
- Suitable for: cranes, elevators, traction, locomotives

### Compound Motor

**Circuit:** Series + Shunt field windings

**Cumulative compound:** Series and shunt fields aid each other (same direction)
- Torque ∝ I_a(Φ_sh + Φ_se) — higher starting torque than shunt
- Less speed drop than series motor

**Differential compound:** Fields oppose (rarely used — unstable)
- Torque ∝ I_a(Φ_sh – Φ_se) — can cancel out

## Starting Methods for DC Motors

### Three-Point Starter

- Series resistance gradually cut out as motor speeds up
- **Problem:** If shunt field circuit opens → motor runs away
- Used with shunt and compound motors

### Four-Point Starter

- Separate overload and no-voltage release coils
- Shunt field current independent of armature current
- Field cannot open accidentally → safer than 3-point

### Series Motor Starters

- No-field-current-limiting (series field is armature current)
- Typically just a heavy-duty starting resistor

### Soft Starters / Electronic Starters

- SCR-based phase angle control
- Gradually increases voltage to armature
- Modern replacement for resistor-type starters

## Induction Motor — Working Principle

**Squirrel cage rotor** or **wound rotor** inside a rotating magnetic field from the stator.

**Synchronous speed:** N_s = 120f/P (rpm)
- f = supply frequency (50 Hz in India)
- P = number of poles

**Slip:** s = (N_s – N)/N_s
- s = 0 at synchronous (no torque)
- s = 1 at standstill (starting)
- s typically 0.01–0.05 at full load

**Rotor quantities (at slip s):**
- Rotor frequency: f_r = s·f
- Rotor induced EMF: E₂r = s·E₂
- Rotor impedance: Z₂r = R_r + jsX_r

## Induction Motor — Torque-Speed Characteristic

**Developed torque:** T = (3/ω_s) × (I_r² × R_r/s)

Using Thevenin equivalent from stator side:
```
T = (3/ω_s) × (V_th² × R_r'/s) / ((R_th + R_r'/s)² + (X_th + X_r')²)
```

**Maximum (pull-out) torque:** Occurs when R_r'/s = √((R_th)² + (X_th + X_r')²)

**Condition for T_max:** s_max = R_r'/√(R_th² + (X_th + X_r')²)

**Starting torque (s = 1):** T_start = (3/ω_s) × (V_th² × R_r') / ((R_th + R_r')² + (X_th + X_r')²)

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Induction Motor — Thevenin Equivalent

The **exact equivalent circuit** referred to stator:

```
V₁ → R₁ + jX₁ → → (+) → R_c || jX_m → R₂' + jX₂' → [s/R_r'] → (−)
```

For analysis, simplify to Thevenin equivalent seen by rotor circuit:
- V_th = V₁ × (jX_m || R_c) / (R₁ + jX₁ + jX_m || R_c)
- Z_th = (R₁ + jX₁) || (jX_m || R_c)
- R_th = real part of Z_th
- X_th = imaginary part of Z_th

**Torque equation** in terms of Thevenin values:
T = (3/ω_s) × (V_th² × (R_r'/s)) / ((R_th + R_r'/s)² + (X_th + X_r')²)

## Effect of Rotor Resistance on Torque

### Key Insight

Adding external resistance to rotor circuit (wound rotor):
- **T_max unchanged** (pull-out torque independent of R_r)
- **s_max increases** (slip at max torque increases linearly with R_r)
- **Starting torque increases** (initially low R_r gives low starting torque)

This is the primary advantage of wound rotor motors — **adjustable starting torque**.

**Rotor added resistance** used in:
- Soft starting (gradually reduce added R)
- Speed control (maintain torque at different speeds)

## Power Flow in Induction Motor

**Air-gap power** P_ag = Mechanical power developed + Rotor copper loss

**P_ag = T_dev × ω_s** (synchronous mechanical power)

**Rotor copper loss:** P_cu2 = s × P_ag

**Developed mechanical power:** P_dev = (1 – s) × P_ag

**Output (shaft) power:** P_out = P_dev – friction & windage losses

| Stage | Power | Formula |
|---|---|---|
| Input | P_in | √3 V_L I_L cosφ |
| Stator losses | P_cu1 + P_core | Fixed |
| Air-gap | P_ag | P_in – stator losses |
| Rotor copper loss | P_cu2 = s·P_ag | Proportional to slip |
| Developed | P_dev = (1–s)·P_ag | Useful mechanical |
| Output | P_out = P_dev – P_rot | Shaft power |

**Efficiency:** η = P_out/P_in = (1 – s) × (P_ag/P_in)

## Starting Methods for Induction Motors

### Direct-On-Line (DOL) Starter

- Full voltage applied → high starting current (6–7× rated)
- Used for small motors (< 5 kW) where supply can handle inrush

### Star-Delta Starter

- Motor starts in STAR → reduced voltage → reduced starting current
- After acceleration, switches to DELTA (full voltage)
- Starting current reduced to 1/3 of DOL
- Starting torque reduced to 1/3 of DOL

### Auto-Transformer Starter

- Variable tap on auto-transformer reduces voltage
- Adjustable starting current/torque (50%, 65%, 80% taps)
- Less harsh than DOL for large motors

### Soft Starter (Electronic)

- SCR phase-angle control gradually increases voltage
- Controlled starting current
- Smooth acceleration profile
- Can also provide soft stopping

### Variable Frequency Drive (VFD)

- AC → DC → AC with variable frequency
- Speed control N_s = 120f/P over wide range
- Best efficiency and control
- Can maintain constant V/f for constant torque

## Speed Control of Induction Motor

| Method | Principle | Range |
|---|---|---|
| **V/f control** | Change frequency | Wide range, constant torque |
| **Pole changing** | Change P | Discrete speeds (2:1, 4:1) |
| **Rotor resistance** | Change s_max | Limited to wound rotor |
| **Supply voltage** | Change torque ∝ V² | Narrow range |

**V/f method** is most common in modern drives because it maintains constant flux (Φ ∝ V/f).

## DC Machine — Armature Reaction in Detail

**Cross-magnetizing effect:** Distorts main field flux
**Demagnetizing effect:** Weakens main flux (at leading pole tips in generator, trailing in motor)

**Neutral plane shift:** Commutation plane shifts in direction of rotation.
- Generator: shifts in direction of rotation
- Motor: shifts opposite to direction of rotation

**Solutions:**
- **Compensating winding:** In pole faces, cancels cross flux
- **Interpoles:** Small poles between main poles, generated EMF opposes commutation

## Example Problem — DC Motor

> A 220 V DC shunt motor has R_a = 0.1 Ω, R_sh = 110 Ω. At no-load, current drawn = 5 A, speed = 1200 rpm. Find speed at full load when line current = 50 A.

**Solution:**
- No-load: I_sh = V/R_sh = 220/110 = 2 A
- I_a0 = I_0 – I_sh = 5 – 2 = 3 A
- E_0 = V – I_a0 R_a = 220 – 3(0.1) = 219.7 V

- Full-load: I_a = I_L – I_sh = 50 – 2 = 48 A
- E = V – I_a R_a = 220 – 48(0.1) = 215.2 V
- Since E = kΦω and Φ is constant (shunt motor):
- ω_0/ω = E_0/E → 1200/ω = 219.7/215.2
- **ω = 1175 rpm**

## Example Problem — Induction Motor

> A 4-pole, 50 Hz induction motor has s = 0.04 at full load. Find: (a) N_s, (b) N, (c) rotor frequency.

**Solution:**
(a) N_s = 120×50/4 = **1500 rpm**
(b) N = N_s(1–s) = 1500(0.96) = **1440 rpm**
(c) f_r = s·f = 0.04 × 50 = **2 Hz**

## GATE Exam Strategy — DC Machines and Induction Motors

**Expected question types:**
1. DC motor: Find speed/armature current for shunt/series motor
2. DC motor: Armature reaction effects
3. Induction motor: Find N_s, N, s, f_r from given data
4. Induction motor: Torque-slip characteristic (T_max, T_start)
5. Starting methods comparison
6. Power flow diagram in induction motor
7. Efficiency calculation

**Common GATE mistakes:**
- Forgetting that Φ varies with load in series motor (T ∝ I_a² not I_a)
- Confusing s = 0 (no-slip, synchronous) with s = 1 (standstill)
- Using line values instead of phase values in three-phase induction motor
- Confusing N_s and N in torque equation
- Forgetting that V_th in Thevenin equivalent depends on magnetizing branch

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
