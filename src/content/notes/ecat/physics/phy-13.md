---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-13
topicName: Electromagnetic Induction (EMI)
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.047992"
diagramPrompt: Clean educational diagram showing Electromagnetic Induction (EMI) with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Electromagnetic Induction (EMI)

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Faraday's Law of Electromagnetic Induction:**

Faraday's law states that the induced emf ε in any closed circuit is equal in magnitude to the rate of change of magnetic flux through the circuit: ε = -dΦ/dt. The negative sign indicates that the induced emf always opposes the change in flux that produces it (Lenz's law — energy conservation in electromagnetic induction).

Magnetic flux Φ = BA cosθ, where B is the magnetic field strength, A is the area of the loop, and θ is the angle between B and the normal to the loop. SI unit: Weber (Wb = T·m²).

Ways to induce emf: (1) change B (strength of magnetic field), (2) change A (area of loop in field), (3) change θ (rotate the loop), or (4) move the loop into/out of a magnetic field.

**Motional Emf:**

When a conductor of length ℓ moves with velocity v perpendicular to a uniform magnetic field B, the emf induced across its ends is ε = Bℓv (for v perpendicular to both B and ℓ). More generally: ε = Bℓv sinθ, where θ is the angle between v and B. This is fundamentally due to the magnetic force on charges in the moving conductor: F = qvB sinθ, causing charge separation.

**Self-Induction and Inductance:**

When the current in a coil changes, the changing magnetic flux through the coil itself induces an emf. This is self-induction. The self-induced emf ε = -L (dI/dt), where L is the self-inductance of the coil (SI unit: Henry, H).

Self-inductance of a solenoid: L = μ₀N²A/l (N = number of turns, A = cross-sectional area, l = length). More turns, larger area, and longer solenoid give greater inductance.

**⚡ ECAT Tip:** Lenz's law is the key to determining the direction of induced current. The induced current always flows in a direction such that its own magnetic field OPPOSES the original change in flux. This is a direct consequence of energy conservation — if the induced current didn't oppose the change, it would create energy from nothing.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

**Transformers — AC Voltage Transformation:**

A transformer consists of two coils (primary and secondary) wound on a common iron core. An alternating current in the primary creates an alternating magnetic flux in the iron core, which links to the secondary coil and induces an alternating emf in it.

Ideal transformer equation: V_s/V_p = N_s/N_p = I_p/I_s. For a step-up transformer (V_s > V_p): N_s > N_p. For step-down: N_s < N_p.

In an ideal transformer (100% efficient): V_p I_p = V_s I_s (power input = power output). In real transformers, losses occur due to: (1) copper resistance (I²R heating), (2) eddy currents in the iron core (heating), (3) magnetic hysteresis (energy lost in magnetising and demagnetising the core), and (4) flux leakage (not all flux from primary links with secondary).

Practical transformer efficiency: 95–99% for large power transformers.

**AC Generator — Production of emf:**

An AC generator converts mechanical energy into electrical energy using electromagnetic induction. For a coil of area A rotating with angular velocity ω in a uniform magnetic field B: the instantaneous emf ε = ε₀ sin(ωt), where the peak emf ε₀ = NBAω (N = number of turns, B = magnetic field strength, A = area of each turn). The frequency f = ω/(2π) = 50 Hz in Pakistan's grid (T = 1/f = 0.02 s per cycle).

The effective (rms) voltage: V_rms = V₀/√2. For ε₀ = 325 V (peak), V_rms = 325/√2 ≈ 230 V — this is the mains voltage in Pakistan.

**⚡ ECAT Tip:** For LR circuits (inductor + resistor in series with DC source), the current builds up as I = I_max(1 - e^(-tR/L)). The time constant τ = L/R is the time to reach 63% of the final current. After 5τ, the current is within 1% of its final value.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

**Energy Stored in an Inductor:**

When current I flows through an inductor of inductance L, a magnetic field is established. The energy stored in this field is U = ½LI². This is analogous to the kinetic energy of a moving object — just as kinetic energy requires work to accelerate a mass, energy must be supplied to build up current in an inductor. The energy density of a magnetic field in free space is u = B²/(2μ₀).

Derivation: Power input to inductor = εI = L(dI/dt) × I = L I (dI/dt). Integrating from 0 to I: total energy = ∫LI dI = ½LI². QED.

**Mutual Induction:**

When the current in one coil (primary) changes, it induces an emf in a nearby coil (secondary). The mutual inductance M quantifies this coupling: ε₂ = -M (dI₁/dt), where M depends on the geometry of both coils and their relative position. For two solenoids wound on the same core: M = μ₀N₁N₂A/l. The coefficient of coupling k = M/√(L₁L₂), where 0 ≤ k ≤ 1. k = 1 means all flux from primary links with secondary (ideal transformer); k < 1 means some flux leaks.

**AC Circuits — R, L, C Components:**

For AC current I = I₀ sin(ωt) through each component:
- Resistor R: V = IR (voltage and current in phase)
- Inductor L: V = I₀ωL sin(ωt + 90°) = I₀ X_L sin(ωt + π/2) — voltage LEADS current by 90°
- Capacitor C: V = (I₀/ωC) sin(ωt - 90°) = I₀ X_C sin(ωt - π/2) — voltage LAGS current by 90°

Inductive reactance X_L = ωL = 2πfL. Capacitive reactance X_C = 1/(ωC) = 1/(2πfC).

For a series RLC circuit: impedance Z = √(R² + (X_L - X_C)²), and tan φ = (X_L - X_C)/R, where φ is the phase angle by which voltage leads current.

**Resonance in AC Circuits:**

At resonance, X_L = X_C, so Z = R (minimum impedance, maximum current). The resonant frequency ω₀ = 1/√(LC) = 2πf₀. The quality factor Q = ω₀L/R = 1/(ω₀CR) — high Q means a sharp resonance peak (narrow bandwidth). This selectivity is used in radio tuners to pick a specific station frequency from many broadcast signals.

**⚡ ECAT Pattern:** ECAT frequently tests motional emf (ε = Bℓv), Lenz's law direction determination, transformer turns ratio calculations, and resonance frequency. A classic ECAT question: "A rod of length 0.5 m moves at 4 m/s perpendicular to a magnetic field of 0.2 T. Calculate the emf induced." Answer: ε = Bℓv = 0.2 × 0.5 × 4 = 0.4 V. If the rod is part of a circuit with total resistance 2 Ω, induced current = 0.4/2 = 0.2 A.
