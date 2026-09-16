---



exam: jamb
examName: JAMB UTME
subject: physics
subjectName: Physics
topic: phy-7
topicName: Sound Waves
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.710608"
lastUpdated: "2026-09-16"
diagramPrompt: "Clean educational diagram showing Sound Waves with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Sound Waves

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Sound waves** are longitudinal mechanical waves that travel through solids, liquids, and gases by alternating **compressions** (high-pressure regions) and **rarefactions** (low-pressure regions) parallel to the direction of propagation. Sound needs a material medium and cannot cross a vacuum.

| Quantity | Symbol | SI Unit | Formula |
|---|---|---|---|
| Wave speed | v | m·s⁻¹ | v = fλ |
| Period | T | s | T = 1/f |
| Sound level | L | dB | L = 10 log₁₀(I/I₀), I₀ = 10⁻¹² W·m⁻² |
| Speed in air | v | m·s⁻¹ | v ≈ 331 + 0.6t (t in °C) |
| Speed in solid | v | m·s⁻¹ | v = √(E/ρ) |

Key range facts: ultrasound **f > 20 kHz**, audible band **20 Hz–20 kHz**, infrasound **f < 20 Hz**. Speed ranking: **solids > liquids > gases** (sound travels faster in steel than in air).

> 💡 **High-Yield Memory Hook:** **"CRA-V-S-P"** — Compressions and Rarefactions run Along (parallel to) the wave direction, Velocity in Solids is the highest, Pitch comes from frequency, Speed in air climbs 0.6 m·s⁻¹ per °C.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Wave Basics and the Speed Equations

A tuning fork prong pushes air molecules forward, compressing them, then recoils leaving a rarefaction behind. This is why a sound wave is **longitudinal**, not transverse like light or a stretched string. Three sub-topics of speed dominate JAMB questions:

- In **air at 0 °C**, v ≈ 331 m·s⁻¹; at temperature t (°C), v = 331 + 0.6t.
- In a **solid rod**, v = √(E/ρ), where E is Young's modulus (N·m⁻²) and ρ is density (kg·m⁻³).
- In a **gas**, v = √(γP/ρ), with γ = C_p/C_v (adiabatic index, dimensionless), P pressure (N·m⁻²).

The frequency f (Hz) and wavelength λ (m) are linked to speed by **v = fλ**, the single most-tested equation on this topic.

#### Concept Comparison Matrix

| Feature | Open Pipe (e.g., flute) | Closed Pipe (e.g., stopped organ pipe) |
|---|---|---|
| End conditions | Pressure node at both open ends | Pressure node at open end, antinode at closed end |
| Allowed harmonics | All: f, 2f, 3f, 4f… | Odd only: f, 3f, 5f, 7f… |
| First overtone | 2f (2× fundamental) | 3f (3× fundamental) |
| Fundamental wavelength | λ = 2L | λ = 4L |
| Timbre | Brighter (even + odd partials) | Hollower (odd partials only) |

| Quantity | Depends on | Common JAMB phrasing |
|---|---|---|
| **Pitch** | Frequency | "Higher f → higher pitch" |
| **Loudness** | Amplitude (and intensity) | "Louder sound has bigger amplitude" |
| **Timbre (quality)** | Harmonic content | "Same note, different instruments → different timbre" |

#### Doppler Effect and Decibels

When source or observer moves, the observed frequency shifts:

#### f′ = f · (v ± v_o) / (v ∓ v_s)

where v_o is observer speed toward source (numerator **plus** if approaching), and v_s is source speed toward observer (denominator **minus** if approaching). Sound intensity level in decibels:

#### L = 10 log₁₀(I/I₀), with I₀ = 10⁻¹² W·m⁻²

A +10 dB change means a 10× intensity ratio; a +20 dB change means 100×.

#### 🎯 Exam-Level Worked Problem

**Question:** A whistle emitting 600 Hz moves toward a stationary observer at 30 m·s⁻¹. Take the speed of sound in air as 330 m·s⁻¹. What frequency does the observer hear?

#### Solution:

1. Identify the case: source moves **toward** observer, observer stationary → denominator uses v − v_s.
2. Apply **f′ = f · v / (v − v_s)**:
   - f′ = 600 × 330 / (330 − 30)
   - f′ = 600 × 330 / 300
   - f′ = 660 Hz.
3. Convert and check units: f in Hz, v and v_s in m·s⁻¹, result in Hz — consistent.

#### Answer: 660 Hz

> ⚠️ **Examiner Trap:** Students flip the sign and write f′ = f · (v − v_s) / v, which would give 545 Hz. Memorise it as **"observer on top (numerator), source on the bottom (denominator)"** — and remember the minus sign appears in the denominator when the source approaches.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

- **Echo threshold:** The human ear distinguishes a reflected pulse from the original only if the gap exceeds ≈ 0.1 s. With v ≈ 340 m·s⁻¹, this demands a one-way distance of at least 17 m — hence the JAMB "minimum 17 m" rule of thumb.
- **Reverberation vs echo:** Reverberation is the persistence of sound due to multiple reflections within a small room (≤ 0.1 s gaps blend); an echo is a single, distinct repetition (gap > 0.1 s).
- **Temperature inversion of v = √(γRT/M):** The common student explanation "hot air is less dense, so sound travels faster" is incomplete. In the gas formula, v ∝ √T directly; the density ρ ∝ P/(RT) cancels most of its own effect, leaving the temperature dependence dominant. For air at STP, γ ≈ 1.4, M ≈ 0.029 kg·mol⁻¹, R = 8.314 J·mol⁻¹·K⁻¹, giving v ≈ √(1.4 × 8.314 × 273 / 0.029) ≈ 332 m·s⁻¹.
- **Stationary wave nodes:** Pressure nodes coincide with displacement antinodes, and vice versa. This is why a flute (open both ends) has displacement nodes at both ends but pressure antinodes there.

#### Advanced Traps and Exceptions

1. **Closed-pipe overtone trap** — First overtone is 3f, not 2f; never write "2nd harmonic = 2× fundamental" for a closed pipe.
2. **Decibel linearity trap** — Going from 40 dB to 80 dB is **not** "twice as loud" in intensity; it is 10 000× more intense.
3. **Unit-conversion trap** — Doppler values given in km·h⁻¹ (e.g., 108 km·h⁻¹) must become 30 m·s⁻¹ before substitution.
4. **Medium-order trap** — Sound travels faster in steel (≈ 5000 m·s⁻¹) than in water (≈ 1480 m·s⁻¹) than in air (≈ 340 m·s⁻¹); JAMB options occasionally swap liquids and gases.
5. **Harmonic vs overtone labelling** — "1st overtone = 2nd harmonic", "2nd overtone = 3rd harmonic". For a closed pipe the 1st overtone (3f) equals the 3rd harmonic.

#### Connections to Adjacent Topics

- **Wave motion (JAMB Physics):** The general v = fλ, transverse vs longitudinal contrast, and stationary-wave mathematics are tested in the same paper.
- **Energy and intensity:** Sound intensity I = P/A (W·m⁻²) ties this topic to the work-energy and power sub-topics.
- **Medical/industrial applications:** Ultrasound (f > 20 kHz) appears in JAMB "everyday physics" questions on sonar and pre-natal scanning.

#### Two Practice Prompts

1. A stretched string 0.6 m long vibrates in its 4th harmonic with a wave speed of 240 m·s⁻¹. Find (a) the wavelength, (b) the frequency. *(Hint: 4th harmonic of a string fixed at both ends has 4 half-wavelengths inside length L.)*
2. The intensity of a jackhammer at 5 m is 1.0 × 10⁻⁴ W·m⁻². At what distance will the sound level drop by 20 dB? *(Hint: −20 dB means intensity falls by factor 100; use inverse-square law I ∝ 1/r².)*

> 📌 **Formula Check:** Always keep v in m·s⁻¹ and f in Hz (= s⁻¹) so that λ comes out in metres. The Doppler denominator uses the **subtraction** sign whenever the source moves **toward** the observer.

---

## Continue your study

- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Sound Waves" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/jamb/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
