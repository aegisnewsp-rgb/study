---
exam: utbk
examName: UTBK/SNPMTN (Indonesia)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-005
topicName: Core Variables and Sign Convention
weight: 2
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-24"
---

# Core Variables and Sign Convention

### 🟢 Lite — Quick Review (1h–1d)
> The four state variables (P, V, T, n) and the IUPAC sign convention for q and w form the algebraic backbone of every Kimia calculation you will meet.

Four quantities run UTBK Kimia thermodynamics. **Pressure** (P) is force per unit area, in pascals (Pa) or atmospheres (atm). **Volume** (V) is the container space in litres or m³. **Temperature** (T) must be in Kelvin — add 273.15 to any Celsius reading before plugging it in. **Amount of substance** (n) is in moles. They collapse into one equation: **PV = nRT**, with R = 8.314 J/(mol·K). Sign convention follows IUPAC: heat absorbed q > 0, heat released q < 0; work done on the system w > 0, work done by the system w < 0. First Law: **ΔU = q + w**.

| Variable | Symbol | Unit | Type |
|---|---|---|---|
| Pressure | P | Pa (or atm) | Intensive |
| Volume | V | m³ or L | Extensive |
| Temperature | T | K (always) | Intensive |
| Moles | n | mol | Extensive |

> 💡 **High-Yield Memory Hook:** "**PVT-n Rules: K before R**" — convert to Kelvin *before* you ever write R. And for signs, think "**system-in = positive, system-out = negative**": energy or matter entering the system carries a plus, leaving carries a minus.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Master these definitions and the IUPAC convention before touching thermochemistry or gas-law problems.

#### The Four State Variables in Depth

Pressure comes from molecular collisions with container walls: P = F/A. Force F is in newtons, area A in m², giving Pa = N/m², dimensions [M L⁻¹ T⁻²]. Volume is extensive — doubling the substance doubles V — while T and P are intensive, unchanged by scaling up the sample. Amount n (mol) is the chemical count unit; Avogadro's number (6.022 × 10²³) particles per mole bridges the microscopic and macroscopic worlds.

The composite gas law **PV = nRT** ties the four together. R has two common values you will meet:

| Constant | Value | Use when P is in |
|---|---|---|
| R | 0.0821 L·atm/(mol·K) | atm |
| R | 8.314 J/(mol·K) | Pa (or kPa with conversion) |

Volume must match P's unit family: use L with atm, m³ with Pa. STP for UTBK purposes is 273.15 K and 1 atm, where one mole of ideal gas occupies 22.4 L.

#### Extensive vs Intensive — the Comparison Matrix

| Property | Example | Depends on amount? | Additive when systems combine? |
|---|---|---|---|
| Extensive | mass, V, n, U, H | Yes | Yes (masses add) |
| Intensive | T, P, density | No | No (T of two cups ≠ 2T of one cup) |

#### The IUPAC Sign Convention

q > 0 when heat flows *into* the system (endothermic); q < 0 when heat leaves (exothermic). w > 0 when surroundings compress it (compression, ΔV < 0); w < 0 when the system expands against the surroundings (ΔV > 0). For constant external pressure, **w = −PΔV**. Notice the minus: expansion (ΔV > 0) makes w negative — exactly matching the "system-out = negative" rule. First Law: **ΔU = q + w**, with ΔU in joules.

> ⚠️ **Examiner Trap:** Indonesian textbooks occasionally use the older physics sign convention (work done *by* the system positive). UTBK follows IUPAC. Pick the wrong sign once and an otherwise perfect thermochemistry problem scores zero.

#### Worked Problem

A 2.00 mol sample of an ideal gas expands isothermally at 300 K from 5.00 L to 15.00 L against a constant external pressure of 1.00 atm. Calculate w, q, and ΔU.

Step 1 — work. w = −PΔV = −(1.00 atm)(15.00 − 5.00 L) = −10.0 L·atm. Convert: 1 L·atm = 101.325 J, so w = −1013 J ≈ −1.01 kJ.

Step 2 — ΔU. Isothermal means ΔT = 0, so for an ideal gas ΔU = 0 (internal energy depends only on T).

Step 3 — q. From ΔU = q + w, 0 = q + (−1013 J), giving q = +1013 J. Heat flows in to compensate for the work the gas does on the surroundings — exactly what the sign convention predicts.

> ⚠️ **Examiner Trap:** students write q = −1013 J here because they confuse heat flow direction with work direction. Endothermic expansion always has q > 0 when w < 0 and ΔU = 0.

---

### 🔴 Extended — Deep Study (3mo+)
> Edge cases, boundary behaviour, and the connections that surface in harder UTBK items.

#### Path Functions vs State Functions

Heat (q) and work (w) are path-dependent: the numerical value changes with how the process is carried out. Internal energy (U) and enthalpy (H) are state functions — only the endpoints matter. The signature equation **H = U + PV** lets you convert between the two when pressure stays constant and the only work is PΔV. Under constant pressure with gases, ΔH = q_p (heat at constant pressure equals enthalpy change), and ΔU = q_v (heat at constant volume equals internal-energy change). The difference ΔH − ΔU = Δn_gas·RT is a recurring UTBK calculation: count moles of *gaseous* product minus gaseous reactant only — liquids and solids contribute zero.

#### Boundary Cases and Limits

1. Constant volume: ΔV = 0, so w = 0, and ΔU = q. Calorimetry in a sealed bomb uses this.
2. Free expansion into vacuum: P_ext = 0, so w = 0 regardless of ΔV.
3. Adiabatic walls: q = 0, so ΔU = w only.
4. Cyclic process: ΔU = 0 over the cycle, so q = −w — every joule of heat in becomes a joule of work out.
5. Phase change at constant T: ΔU ≠ 0 even though ΔT = 0, because intermolecular potential changes.

#### Connections to Adjacent Topics

| Linked topic | Where sign convention resurfaces |
|---|---|
| Equilibrium constants | K_eq expression uses activities, derived from ΔG° = −RT ln K |
| Electrochemistry | ΔG° = −nFE_cell; sign of E_cell tells reaction spontaneity |
| Solution thermodynamics | ΔH_soln sign convention same as IUPAC (endothermic positive) |
| Gas stoichiometry | PV = nRT links P, V, T to moles for limiting-reactant gas-yielding problems |

#### Common Traps Beyond the Basics

- Forgetting that Kelvin adds 273.15, not 273 — off by 0.15 K matters only rarely but the habit prevents silly slips.
- Using R = 0.0821 with pressure in kPa without converting kPa → atm first (1 atm = 101.325 kPa).
- Mixing ΔH (enthalpy change, kJ/mol of reaction as written) with q (heat for a specific mass of specific substance); ΔH = q/n only when the reaction proceeds completely.
- Reading "released 50 kJ" as q = +50; released means leaving the system, so q = −50 kJ.
- Treating ΔU and q as interchangeable when gases expand; they differ by exactly w = −PΔV.

#### Two Practice Prompts

1. 0.500 mol of N₂(g) is heated from 298 K to 398 K at constant volume. Given C_v = 20.8 J/(mol·K), compute ΔU and q. (Answer: ΔU = q = +1.04 kJ, because w = 0.)
2. 1.00 mol of an ideal gas expands isothermally and reversibly at 300 K from 10.0 L to 30.0 L. Find w (reversible path differs from constant-P: w = −nRT ln(V_f/V_i)). (Answer: w = −nRT ln 3 = −2.74 kJ, q = +2.74 kJ, ΔU = 0.)

## Continue your study

- **[View this topic in your UTBK/SNPMTN (Indonesia) roadmap](/roadmap/?exam=utbk&duration=1mo)** — see where "Core Variables and Sign Convention" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=utbk&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UTBK/SNPMTN (Indonesia) exam overview](/exams/utbk/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/utbk/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
