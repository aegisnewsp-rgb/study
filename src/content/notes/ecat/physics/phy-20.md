---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-20
topicName: Electronics and Semiconductors
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.053591"
lastUpdated: "2026-06-27"
diagramPrompt: "Clean educational diagram showing Electronics and Semiconductors with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Electronics and Semiconductors

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Semiconductors are materials whose **electrical conductivity lies between that of metals and insulators** and can be tuned by doping, temperature, and electric field. Silicon (band gap Eg ≈ 1.1 eV) and germanium (Eg ≈ 0.67 eV) are the two textbook materials at 300 K.

**Energy-band picture:** the **valence band** holds bound electrons, the **conduction band** holds mobile electrons, and the **forbidden energy gap** (Eg) separates them. Intrinsic semiconductors have equal electrons (n) and holes (p) with n·p = nᵢ² (mass-action law). Doping with Group-V donors (P, As) creates **n-type** material (electrons as majority carriers); doping with Group-III acceptors (B, Ga) creates **p-type** material (holes as majority carriers).

A **P-N junction** forms a depletion region with built-in barrier (~0.7 V for Si, ~0.3 V for Ge). Under **forward bias** the diode conducts exponentially (Shockley equation); under **reverse bias** only a tiny saturation current flows until breakdown. A junction transistor (**BJT**) obeys I_C = β·I_B and α + β = 1.

**High-yield pointers:** (1) Thermal voltage V_T = kT/q ≈ 26 mV at 300 K — used in diode equations and amplifier biasing. (2) Half-wave rectifier efficiency ≈ 40.6%; full-wave bridge ≈ 81.2%. (3) Logic gates AND/OR/NOT and the universal gates NAND/NOR implement Boolean algebra.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Energy Bands and Material Classification
In the band theory of solids, allowed electron energies form continuous **valence** and **conduction bands** separated by a forbidden gap Eg. **Conductors** have overlapping bands or a partially filled conduction band. **Insulators** have Eg > 3 eV (≈ 5–10 eV), making thermal excitation negligible at room temperature. **Semiconductors** have Eg in the range ~0.1–3 eV, so a measurable number of electrons are thermally excited across the gap, leaving behind mobile **holes**. Silicon (Eg ≈ 1.12 eV), germanium (Eg ≈ 0.67 eV), and gallium arsenide (Eg ≈ 1.42 eV) are the standard examples.

#### Intrinsic vs Extrinsic Semiconductors
An **intrinsic semiconductor** is a pure crystal where n = p = nᵢ (intrinsic concentration, ~1.5 × 10¹⁰ cm⁻³ for Si at 300 K). **Doping** introduces impurities: a pentavalent donor (P, As, Sb) creates **n-type** material with electrons as majority carriers and a donor level just below E_C; a trivalent acceptor (B, Ga, In) creates **p-type** material with holes as majority carriers and an acceptor level just above E_V. The **mass-action law** n·p = nᵢ² holds at a given temperature, and the **Fermi level** lies near the band centre in intrinsic material, shifts toward E_C in n-type, and toward E_V in p-type.

#### P-N Junction Diode
At a P-N junction, holes diffuse from p to n and electrons from n to p, leaving behind ionised dopants that form a **depletion region** with a built-in **barrier potential** V_bi (≈ 0.7 V Si, ≈ 0.3 V Ge). The diode current follows the **Shockley diode equation**:

I = I_s · [exp(V / (η·V_T)) − 1],   V_T = kT/q ≈ 25.85 mV at 300 K

In **forward bias** (p-side positive), the barrier is reduced and current rises exponentially past the cut-in voltage. In **reverse bias** only a small saturation current I_s flows until breakdown (Zener/avalanche), exploited by the **Zener diode** as a voltage regulator.

#### Rectifiers and Filters
A **half-wave rectifier** conducts during only one half-cycle of the AC input; its maximum efficiency is 40.6% and ripple factor is 1.21. A **full-wave bridge rectifier** uses four diodes to use both half-cycles, giving efficiency 81.2% and ripple factor 0.48. A **capacitor filter** smooths the pulsating DC; the peak inverse voltage (PIV) rating of each diode must exceed the transformer peak.

#### BJT Basics
A bipolar junction transistor has three regions — emitter, base, collector — in NPN or PNP form. The terminal currents obey **I_E = I_B + I_C**, the current gain **β = I_C / I_B**, and the relation **α + β = 1** where α = I_C / I_E ≈ 1 for a well-designed transistor.

#### Exam Pattern (ECAT Physics)
ECAT Physics carries 30 MCQs (≈ 3 % weight for Electronics); questions usually test band-gap values, diode I-V identification, rectifier efficiency, and BJT current relations. Expect one or two numericals per paper on barrier potential, V_T, or β-based current calculations.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Deeper Band Theory and Carrier Statistics
The density of states in the conduction band and the Fermi–Dirac distribution give the electron concentration n = N_C · exp(−(E_C − E_F)/kT) and hole concentration p = N_V · exp(−(E_F − E_V)/kT). Multiplying yields the **mass-action law** n·p = nᵢ² = N_C·N_V·exp(−Eg/kT), which shows why the carrier product is temperature-dependent but independent of doping. Conductivity follows **σ = n·q·μ_n + p·q·μ_p**; because μ_n > μ_p in Si, n-type silicon has higher conductivity than p-type at equal dopant concentration.

#### Diode Edge Cases and Special Diodes
The **Zener diode** is reverse-biased into breakdown; below 5.6 V the mechanism is quantum tunnelling (Zener effect), above it is avalanche multiplication. A **photodiode** is operated in reverse bias; photon energy hν > Eg generates electron–hole pairs, so I ∝ incident light intensity. A **light-emitting diode (LED)** runs in forward bias; recombination across Eg emits photons of wavelength λ = h·c/Eg — choosing Eg selects the colour (GaAs ≈ 870 nm IR, GaP ≈ 565 nm green). A **Schottky diode** uses a metal–semiconductor junction with negligible depletion charge and very fast switching.

#### Transistor Configurations and Biasing
The three BJT amplifier configurations are **common-emitter (CE)**, **common-collector (CC)** and **common-base (CB)**, with very different voltage gain, current gain and input impedance. DC biasing is typically set by a resistive voltage divider so that V_out = V_in · R2/(R1 + R2), stabilising the Q-point against β variation and temperature drift. For field-effect devices, **JFET** and **MOSFET** (especially CMOS) are voltage-controlled, draw almost no gate current, and dominate digital ICs. A **thyristor (SCR)** latches on once triggered and stays on until current falls below the holding value — used in power control.

#### Logic Gates and Boolean Algebra
The seven basic gates implement Boolean functions: **AND** (Y = A·B), **OR** (Y = A + B), **NOT** (Y = Ā), **NAND** and **NOR** (universal gates), **XOR** and **XNOR** (parity/equality). De Morgan's laws — Ā·B̄ = Ā + B̄ and Ā + B̄ = Ā·B̄ — let any Boolean expression be realised with NAND or NOR alone, which is the basis of CMOS logic.

#### Common Mistakes and Worked Example
**Common mistakes:** (1) Confusing majority and minority carriers after doping. (2) Using V_T = 25.85 mV in mV units while V is in volts — keep units consistent. (3) Assuming the depletion region has mobile charge — it only has ionised dopants. (4) Forgetting that rectifier efficiency compares DC output to AC input, not to peak.

**Worked example:** A Si diode (η = 2) at 300 K carries I = 1 mA at V = 0.65 V. Find the saturation current I_s using V_T = 26 mV.
I ≈ I_s·exp(V/(ηV_T)) ⇒ I_s = I·exp(−V/(ηV_T)) = 10⁻³·exp(−0.65/0.052)
= 10⁻³·exp(−12.5) ≈ 10⁻³ × 3.73 × 10⁻⁶ ≈ 3.7 × 10⁻⁹ A = 3.7 nA.

#### Practice Prompts
1. A silicon sample is doped with 10¹⁶ cm⁻³ phosphorus. Using μ_n = 1350 cm²/V·s, q = 1.6 × 10⁻¹⁹ C, compute σ and the resistivity ρ.
2. A full-wave bridge rectifier feeds a 1 kΩ load from a 12 V RMS secondary. Find the DC output voltage, PIV per diode, and ripple factor with a 1000 μF smoothing capacitor at 50 Hz.

#### Strategy for ECAT
Allocate one focused sitting to this topic — it is short, high-yield, and often yields a "free" mark from a direct formula recall question on β, V_T, or rectifier efficiency.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
