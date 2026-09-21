---
exam: du-ad
examName: DU Admission (Bangladesh)
subject: science
subjectName: Science
topic: scienc-007
topicName: Mechanical Waves
weight: 3
country: bangladesh
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-21"
---

# Mechanical Waves

### 🟢 Lite — Quick Review (1h–1d)

> Grab the wave-equation trio before anything else: speed, frequency, wavelength.

A wave moves *energy*, not the medium itself. That is the single fact examiners exploit when they write "the particle travels with the wave" as a wrong option. For DU Admission Science (3% weight, typically 1–2 MCQs), the speed relation `v = fλ` carries every numeric problem; everything else is classification.

| Quantity | Symbol | SI unit | Dimension |
|---|---|---|---|
| Wave speed | v | m·s⁻¹ | [L T⁻¹] |
| Frequency | f | Hz | [T⁻¹] |
| Wavelength | λ | m | [L] |
| Time period | T | s | [T] |
| Amplitude | A | m | [L] |

> 💡 **High-Yield Memory Hook (Memory Hook — "SALT"):** **S**ound is **A**longitudinal, **L**ight-like ripples on a string are **T**ransverse. Wave shape rhymes with particle motion — perpendicular for transverse, parallel for longitudinal.

Sound in air at 20 °C travels near 343 m·s⁻¹, set by `v = √(γP/ρ)`, and it dies in vacuum.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Wave types and what actually oscillates

A transverse wave makes particles swing perpendicular to the direction the disturbance travels — picture a flicked guitar string. A longitudinal wave pushes particles back and forth along that same direction, producing alternating **compressions** (high-pressure zones) and **rarefactions** (low-pressure zones). Sound in air is longitudinal; waves on a stretched string are transverse. Light is *electromagnetic*, not mechanical, so it cannot be used as an example of transverse mechanical motion.

| Feature | Transverse mechanical wave | Longitudinal mechanical wave |
|---|---|---|
| Particle motion vs propagation | Perpendicular (⊥) | Parallel (∥) |
| Visible features | Crests, troughs | Compressions, rarefactions |
| Needs a medium? | Yes (solid preferred, e.g. string) | Yes (solid, liquid, or gas) |
| Textbook example | Stretched string, S-wave in earth | Sound in air, P-wave in earth |

#### The three master formulas

1. **Universal wave relation:** `v = f λ`, with v in m·s⁻¹, f in Hz, λ in m. Once the medium is fixed, v is fixed; changing f simply rescales λ.
2. **Stretched string (transverse):** `v = √(T/μ)`, where T is tension in N and μ is linear mass density in kg·m⁻¹. Thicker strings (higher μ) play slower notes at the same tension.
3. **Sound in a gas:** `v = √(γP/ρ)`, where γ is the adiabatic index (≈1.4 for air), P is pressure in N·m⁻², ρ is density in kg·m⁻³.

> 📌 **Formula Check:** In `v = √(T/μ)`, T is the *tension force*, not temperature, and μ has units kg·m⁻¹, not kg·m⁻³. Conflating these is the most common derivation error.

#### Worked problem

A sitar string has linear mass density 5.0 × 10⁻⁴ kg·m⁻¹ and is stretched to tension 80 N. A finger plucks a note of frequency 200 Hz. Find the wavelength of the transverse wave on the string.

- Step 1 — speed on string: `v = √(T/μ) = √(80 / 5.0×10⁻⁴) = √(1.6×10⁵) ≈ 400 m·s⁻¹`.
- Step 2 — apply `v = f λ`: `λ = v / f = 400 / 200 = 2.0 m`.
- Answer: **2.0 m**.

> ⚠️ **Examiner Trap:** Students often plug tension in kg directly or write `λ = f × v`. Forgetting the square root in `√(T/μ)` flips the answer by a factor of √T — a guaranteed loss of one mark.

#### Superposition and the superposition principle

When two waves overlap, the resultant displacement at any point equals the algebraic sum of the individual displacements. This is why standing waves form on a string fixed at both ends: the forward and reflected waves interfere, producing nodes (zero displacement) and antinodes (maximum displacement). The condition for a standing wave on a string of length L is `L = n(λ/2)`, n = 1, 2, 3, … — a derivation often tested under DU Admission's "wave in string" item.

> 💡 **Concept Check:** Amplitude controls loudness for sound and brightness for visible mechanical ripples; it does **not** change wave speed. Picking "louder → faster" is the trap answer.

---

### 🔴 Extended — Deep Study (3mo+)

#### Where the simple formula breaks down

`v = √(T/μ)` assumes an ideal, flexible string under uniform tension. Real strings show dispersion at high frequency (modes travel at slightly different speeds), and stiffness adds an extra term `√(T/μ − π² Y I / μ λ²)` where YI is the bending stiffness. The textbook relation still answers MCQs, but a numeric problem with wavelength approaching string thickness pushes the answer past the simple formula's range.

For longitudinal waves in a thin solid rod, the correct speed is `v = √(E/ρ)`, where E is Young's modulus (N·m⁻², dimension [M L⁻¹ T⁻²]) and ρ is density. Students commonly confuse this with `√(γP/ρ)` used for gases — the variables look similar but E and γP are dimensionally different quantities.

#### Advanced traps and exceptions

1. **Crest-to-adjacent-trough distance is λ/2, not λ.** A full wavelength runs crest-to-crest or trough-to-trough.
2. **Sound travels faster in solids than in air** because the elastic modulus rises faster than density: steel ≈ 5000 m·s⁻¹ vs air ≈ 343 m·s⁻¹.
3. **Doppler shift changes f, not v.** A moving source alters the wavelength but leaves the medium's speed alone.
4. **Phase difference of 180° between two coherent waves of equal amplitude gives zero resultant** — the cancellation principle behind noise-cancelling headphones and antinode destruction.
5. **Mechanical waves need an inertial-restoring mechanism.** No medium with both elasticity and inertia means no propagation — a perfect rigid solid does not transmit shear waves.

#### Practice prompts

- A tube open at one end and closed at the other resonates at its fundamental at 85 Hz when air is at 20 °C. What length of air column is required? (Use v = 343 m·s⁻¹ and the closed-end condition L = λ/4.)
- A steel wire of density 7800 kg·m⁻³ has Young's modulus 2.0 × 10¹¹ N·m⁻². A longitudinal pulse is sent along it. Compare its speed with sound in air and state which medium carries the disturbance faster.

---

## Continue your study

- **[View this topic in your DU Admission (Bangladesh) roadmap](/roadmap/?exam=du-ad&duration=1mo)** — see where "Mechanical Waves" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=du-ad&duration=1d)** — 1-day sprint covering highest-weight topics
- **[DU Admission (Bangladesh) exam overview](/exams/du-ad/)** — pattern, eligibility, and syllabus
- **[All Science notes](/notes/du-ad/science/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
