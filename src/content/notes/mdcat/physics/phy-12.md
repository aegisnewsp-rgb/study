---
exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-12
topicName: Electromagnetism
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.087574"
lastUpdated: "2026-09-21"
diagramPrompt: "Clean educational diagram showing Electromagnetism with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"


---

# Electromagnetism

### 🟢 Lite — Quick Review (1h–1d)

> Most-tested snapshot for MDCAT: charges, fields, and induction in eight lines.

A moving charge creates a magnetic field; a changing magnetic field pushes charges. That reciprocity is the whole subject. For MDCAT, you must be able to (a) compute the force between two point charges, (b) push current through series and parallel networks, (c) apply the Lorentz force on a moving charge or current-carrying wire, and (d) use Faraday's law for induced EMF. About 4% of the Physics paper comes from this block — typically two to three MCQs.

| Quantity | Symbol | SI unit | Defining relation |
|---|---|---|---|
| Charge | Q | coulomb (C) | Q = I·t |
| Electric field | E | N/C ≡ V/m | E = kQ/r² |
| Magnetic field | B | tesla (T) | F = qvB sinθ |
| Capacitance | C | farad (F) | C = ε₀A/d |
| Inductance | L | henry (H) | ε = −L dI/dt |
| Induced EMF | ε | volt (V) | ε = −N dΦ/dt |

> 💡 **High-Yield Memory Hook — "Fleming's hands":** Left hand for **M**otor (force on current in B-field), Right hand for **G**enerator (motion of conductor → induced current). Same three fingers, opposite jobs. The only mnemonic in this block worth burning into memory.

- Right-hand grip rule: thumb = current, fingers curl = B-field circles.
- Peak-to-RMS = √2, never the other way around.

### 🟡 Standard — Regular Study (2d–2mo)

#### Electric interactions: Coulomb to Capacitance

Coulomb's law in vacuum gives the force between two point charges:

$$F = \frac{k q_1 q_2}{r^2}$$

with k = 8.99 × 10⁹ N·m²/C², q in coulombs, r in metres, F in newtons. The dimensional formula is [F] = M L T⁻².

Each charge produces an electric field E = kQ/r², measured in N/C or equivalently V/m. Work done against this field per unit charge defines potential V = kQ/r (unit: volt, V). For two parallel plates separated by vacuum, the geometry produces a uniform field and a capacitance:

$$C = \frac{\varepsilon_0 A}{d}$$

where ε₀ = 8.85 × 10⁻¹² F/m is the permittivity of free space, A is plate area in m², and d is plate separation in m.

#### DC circuits: Ohm, Kirchhoff, and combinations

Ohm's law (V = IR) holds for ohmic conductors at constant temperature. The same resistance R can be combined differently:

| Combination | Resistors | Capacitors |
|---|---|---|
| Series | R_s = Σ Rᵢ | 1/C_s = Σ 1/Cᵢ |
| Parallel | 1/R_p = Σ 1/Rᵢ | C_p = Σ Cᵢ |

> The two pairs invert. R and C behave like opposites when you flip between series and parallel — this inversion is the single most-failed question type.

Kirchhoff's junction rule (ΣI = 0) and loop rule (ΣV = 0) handle networks that don't reduce to a single series-parallel block.

#### Magnetic effects: Biot-Savart to Lorentz

A straight current-carrying wire produces circular magnetic field lines whose sense is given by the right-hand grip rule. The Biot-Savart law gives the field element dB from a current element, and Ampere's law wraps this into ∮B·dl = μ₀I for symmetric geometries. A charge moving through a magnetic field experiences the Lorentz force:

$$F = q v B \sin\theta$$

with v in m/s, B in tesla, θ the angle between v and B. Direction follows F = qv × B — note the charge sign flips the force on a negative particle.

#### Induction and AC

A changing magnetic flux through a coil induces an EMF given by Faraday's law:

$$\varepsilon = -N \frac{d\Phi}{dt}$$

The negative sign is Lenz's law: the induced EMF opposes the change that caused it. For a rod of length L moving at velocity v perpendicular to a uniform B-field, motional EMF simplifies to ε = BLv — only when all three vectors are mutually perpendicular.

An ideal transformer obeys:

$$\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s}$$

AC quantities are quoted in RMS (root-mean-square) values: V_rms = V_p/√2 and I_rms = I_p/√2. Power in an AC circuit uses RMS, never peak.

#### Concept Comparison Matrix

| Concept | Domain | SI unit | Common confusion |
|---|---|---|---|
| ε₀ (permittivity) | Electric field coupling in vacuum | F/m | Mixed with μ₀ (permeability) |
| μ₀ (permeability) | Magnetic field coupling in vacuum | H/m | Mixed with ε₀ |
| Capacitor | Stores energy as E-field | Farad (F) | Series formula has 1/C, not C |
| Inductor | Stores energy as B-field | Henry (H) | Energy U = ½LI², not LI² |
| RMS vs peak | AC averaging | V, A | AC power uses RMS, not peak |
| Fleming's L vs R | Motor vs generator force | — | Left = motor, right = generator |

#### Worked problem

**Problem.** A 0.50 m wire carrying 4.0 A lies in a uniform 0.30 T magnetic field, oriented perpendicular to the field. Find the force on the wire and the work done when it moves 0.20 m parallel to the force.

*Solution.*
Force on a current-carrying conductor: F = BIL sinθ.
θ = 90°, so sinθ = 1.
F = (0.30 T)(4.0 A)(0.50 m)(1) = 0.60 N.
Work done: W = F·d = (0.60 N)(0.20 m) = 0.12 J.

> ⚠️ **Examiner Trap:** Students plug in angle 0° when the wire is "along" the field's vicinity, then get F = 0 even though the wire is carrying current. The angle is between **current direction** and **B-field**, not between the wire and any external reference. If the wire lies in a plane and B is perpendicular to that plane, θ = 90° and F is maximum.

### 🔴 Extended — Deep Study (3mo+)

#### Where Coulomb's law breaks down and what replaces it

In a uniform dielectric medium, Coulomb's force is reduced by the relative permittivity εᵣ: F_medium = F_vacuum / εᵣ. The medium's molecules polarise and partially cancel the field. For MDCAT you need only the vacuum form, but the concept matters because εᵣ of water (~80) explains why charged objects discharge quickly in humid air.

#### Limits of Ohm's law

Ohmic conductors (metals, certain resistors) obey V = IR with R independent of V. Non-ohmic devices — diodes, filament lamps at high temperature, semiconductors — show I–V curves that bend. For an MDCAT MCQ, the examiner may show a non-linear I–V graph and ask "is Ohm's law obeyed?" Answer: only if the graph is a straight line through the origin.

#### Transformer losses and why RMS is used

Real transformers lose energy through:
- Copper (I²R) heating in windings
- Hysteresis in the iron core
- Eddy currents induced in the core

An MCQ may quote "efficiency 90%" — always check whether the question asks for ideal (100%) or real. RMS values are used because the average power over a full AC cycle equals V_rms·I_rms·cosφ, where cosφ is the power factor (φ = phase angle between V and I). For a pure resistor, cosφ = 1 and average power = V_rms·I_rms.

#### Maxwell's displacement current and EM waves

Maxwell noticed that Ampere's law fails during capacitor charging. He added a "displacement current" term ε₀ dΦ_E/dt to make it consistent. The unification yields electromagnetic waves in vacuum that travel at:

$$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} = 3.0 \times 10^8 \text{ m/s}$$

This is the same c that appears in relativity and optics — light is an EM wave.

#### Edge-case traps

- Motional EMF ε = BLv assumes v ⊥ B ⊥ L. If v is parallel to B, the EMF vanishes.
- For a solenoid, L = μ₀N²A/ℓ, where ℓ is the length. Inserting an iron core (high permeability) increases the inductance dramatically.
- For two parallel wires carrying currents in the same direction, the force is **attractive**; opposite directions repel. Easy to get backwards.
- Capacitor energy: U = ½CV² = ½QV = Q²/(2C). Students sometimes write U = CV² (off by ½).
- Inductor energy: U = ½LI². Switching off an inductor forces the current to continue briefly, producing a high-voltage spark across the switch.

#### Two advanced practice prompts

1. A capacitor of 6 µF charged to 200 V is disconnected from the battery and then its plate separation is doubled. Does the charge change? Does the voltage change? What happens to the stored energy?
2. A square loop of side 10 cm falls under gravity with its plane perpendicular to a horizontal magnetic field of 0.5 T confined to a region 10 cm tall. Derive the EMF induced while the loop enters and exits the field region, and identify the direction of the induced current during each phase.

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Electromagnetism" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/mdcat/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
