---
exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-13
topicName: Electromagnetic Induction (EMI)
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.088376"
lastUpdated: "2026-09-09"
diagramPrompt: "Clean educational diagram showing Electromagnetic Induction (EMI) with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"


---

# Electromagnetic Induction (EMI)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your MDCAT Physics paper.

Electromagnetic Induction is the production of an emf across a conductor whenever the **magnetic flux (Φ)** through it changes with time. The governing equation is **Faraday's Law**: ε = −dΦ/dt, where ε is in volts, Φ in webers, and t in seconds. The minus sign encodes **Lenz's Law** — the induced current opposes the change in flux, preserving energy conservation.

- **Φ = B·A·cosθ**, where B is field strength in tesla, A is area in m², and θ is the angle between B and the area's normal.
- **Motional emf** for a rod of length l moving at speed v perpendicular to B: ε = Blv.
- **Self-inductance:** ε = −L(dI/dt); **Mutual inductance:** couples primary and secondary coils in a **transformer**.
- MDCAT tests EMI through numericals on dΦ/dt, direction questions using **Fleming's Right-Hand Rule**, and transformer ratio problems (Vs/Vp = Ns/Np).

| Quantity | Symbol | SI unit |
| --- | --- | --- |
| Magnetic flux | Φ | weber (Wb) |
| Induced emf | ε | volt (V) |
| Inductance | L | henry (H) |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before MDCAT.

#### Faraday's Law and Lenz's Law

When the flux linking a coil of N turns changes, the magnitude of induced emf is ε = N|dΦ/dt|. The negative sign in ε = −N(dΦ/dt) comes from Lenz's Law and tells you the induced current flows so its own magnetic field opposes the original flux change. If you drop a magnet into a coil, the coil's induced field repels the approaching north pole — that is Lenz's Law in action, and the mechanical work done against this repulsion is exactly what gets converted to electrical energy.

#### Flux Dependence on Angle

The flux Φ = BA cosθ is maximum at θ = 0° (coil face perpendicular to B) and zero at θ = 90°. Consequently, the induced emf in a rotating coil is sinusoidal: ε = ε₀ sin(ωt) when the coil rotates at angular frequency ω in a uniform field — the working principle of every **AC generator**.

#### Self and Mutual Inductance

A coil carrying a changing current I produces a changing flux that induces a back-emf ε = −L(dI/dt). The inductance L = Φ/I (henry) depends on coil geometry and the **permeability of the core** — an iron core raises L dramatically compared with an air core.

- **Self-induction**: opposes any change in current through the same coil.
- **Mutual induction**: a changing current in coil 1 links flux into coil 2, inducing ε₂ = −M(dI₁/dt).
- **Transformer operation**: Vs/Vp = Ns/Np = Ip/Is (ideal case, no losses).
- **Energy stored in an inductor**: U = ½LI² (joules).

#### Exam Patterns in MDCAT

| Concept tested | Typical MDCAT format |
| --- | --- |
| Faraday's Law numerical | MCQ with rod/coil geometry |
| Lenz's Law direction | "current flows clockwise/anticlockwise" |
| Transformer ratio | Ns, Np, Ip, Is calculation |
| Motional emf | ε = Blv with rod on rails |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Mechanism Behind Motional emf

Consider a conducting rod of length l sliding at velocity v on parallel rails inside a uniform field B perpendicular to the plane. Free electrons in the rod experience the magnetic Lorentz force F = qv × B, which drives them along the rod and accumulates charge at one end. The potential difference that builds up exactly balances this force, giving ε = Blv. If the rod moves at an angle θ to B, replace v with v sinθ; if it moves **parallel** to B, no emf arises at all. A common MDCAT trap presents a stationary conductor in a changing field and asks for "motional emf using ε = Blv" — that formula is **invalid** because v = 0; the correct approach is Faraday's Law directly.

#### Energy Conservation in Eddy Currents

When bulk conductors (copper plates, transformer cores) sit in changing flux, circulating currents called **eddy currents** flow within them. Lenz's Law dictates that these currents dissipate energy by opposing the flux change, heating the conductor. Transformer cores are therefore laminated — thin sheets insulated from each other — to break up eddy-current loops and reduce losses. This is also why induction cooktops heat metal vessels efficiently without heating non-metallic cookware.

#### Connections to Adjacent MDCAT Topics

EMI ties directly into **Alternating Current** (the same rotating-coil emf is the source of sinusoidal AC), **Magnetic Effects of Current** (Fleming's Left-Hand Rule for motors vs Right-Hand Rule for generators — do not swap them), and **Electromagnetic Waves** (Maxwell's correction to Ampère's law, displacement current). The mutual-inductance concept reappears in **transformer-based numericals**, while energy storage U = ½LI² surfaces in LC-circuit problems.

#### Common Mistakes to Avoid

1. Writing Φ = BA without cosθ when the coil is tilted or rotating.
2. Treating ε = Blv as valid for a stationary rod in a time-varying field.
3. Confusing Fleming's rules — Right-Hand Rule (generator/EMI) vs Left-Hand Rule (motor).
4. Saying "induced current opposes the flux" — it opposes the **change** in flux.
5. Forgetting that L depends on the core material, not just coil geometry.

> **Mnemonic**: "Right Generates, Left Drives" — Right-Hand Rule for generators/induced current, Left-Hand Rule for motors.

#### Practice Prompts

1. A circular coil of 100 turns and radius 0.05 m lies perpendicular to a uniform field that drops from 0.4 T to 0.1 T in 0.5 s. Find the magnitude of the induced emf. *(Answer: ε ≈ 0.94 V)*
2. An ideal transformer has 200 primary turns and 1000 secondary turns connected to a 12 V battery — will it step up the voltage? Explain. *(Answer: No — transformers only work with time-varying (AC) input; a DC battery produces constant flux, so dΦ/dt = 0.)*

---

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Electromagnetic Induction (EMI)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/mdcat/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
