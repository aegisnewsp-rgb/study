---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-8
topicName: Wave Motion and Sound
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.043959"
diagramPrompt: "Clean educational diagram showing Wave Motion and Sound with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Wave Motion and Sound

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Wave — Disturbance That Propagates:**

A wave is a disturbance that transfers energy from one point to another without the net transfer of the medium's particles. Waves require a medium for propagation (mechanical waves like sound), except electromagnetic waves which propagate through vacuum.

Two fundamental types:
- **Transverse waves:** particle displacement perpendicular to direction of wave propagation (e.g., light, waves on a string, water surface waves)
- **Longitudinal waves:** particle displacement parallel to direction of wave propagation (e.g., sound in air, compression waves in springs)

**Wave Parameters:**

- Wavelength λ: distance between two consecutive points in phase (e.g., crest to crest)
- Frequency f: number of complete oscillations per second; SI unit: Hertz (Hz)
- Period T: time for one complete oscillation; T = 1/f
- Wave velocity v: v = fλ = λ/T (this fundamental equation connects all three)
- Amplitude A: maximum displacement from equilibrium position; determines wave intensity

**Sound Waves — Longitudinal Pressure Waves:**

Sound is a longitudinal wave propagating as alternating compressions (high pressure) and rarefactions (low pressure) in the medium. In air at room temperature, the speed of sound is approximately 343 m/s. The speed of sound in a gas: v = √(γP/ρ) = √(γRT/M), where γ is the adiabatic index, P is pressure, ρ is density, R is the gas constant, T is absolute temperature, and M is molar mass.

For sound in air (mostly diatomic N₂ and O₂): γ = 7/5 = 1.4, M = 0.029 kg/mol, so v ≈ 331 + 0.6T(°C) m/s (approximately 343 m/s at 20°C).

**⚡ ECAT Tip:** The Doppler effect describes how the observed frequency changes when there is relative motion between source and observer: f' = f × (v ± v_o)/(v ∓ v_s), where v is the speed of sound in the medium. Upper signs for approach, lower for recession. If the source moves toward a stationary observer: f' increases (higher pitch). If the observer moves away from a stationary source: f' also increases... wait, let me be precise: f' = f(v ± v_o)/v for observer moving (plus when approaching), and f' = f × v/(v ∓ v_s) for source moving (minus when approaching). For source and observer both moving: combine both effects.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

**Wave Equation Derivation:**

For a wave travelling in the +x direction with speed v, displacement y = A sin(kx - ωt + φ), where k = 2π/λ is the wave number and ω = 2πf is the angular frequency. The argument (kx - ωt) is the phase. This satisfies the wave equation: ∂²y/∂x² = (1/v²) ∂²y/∂t².

The wave speed v = ω/k = 2πf/(2π/λ) = fλ. This is always true for any wave, regardless of the medium.

**Stationary (Standing) Waves:**

When two waves of the same frequency and amplitude travel in opposite directions superpose, they create standing waves. For a string fixed at both ends (e.g., guitar string): the boundary conditions require nodes at both ends. Allowed wavelengths: λ_n = 2L/n, where n = 1, 2, 3, ... is the harmonic number. Resonant frequencies: f_n = nv/(2L), where v = √(T/μ) is the wave speed on the string (T = tension, μ = linear mass density).

For an open pipe (both ends open — antinodes at both ends): same formula f_n = nv/(2L).
For a closed pipe (one end closed — node at closed end, antinode at open end): λ_n = 4L/(2n-1), f_n = (2n-1)v/(4L). Only odd harmonics exist in a closed pipe.

**Sound Intensity and Loudness:**

Intensity I = Power/Area = P/(4πr²) for spherical spreading. Intensity level in decibels: β = 10 log₁₀(I/I₀), where I₀ = 10⁻¹² W/m² is the reference threshold of hearing. Each 10 dB increase corresponds to a 10-fold increase in intensity and approximately a doubling of perceived loudness. Normal conversation ≈ 60 dB; a rock concert ≈ 110 dB; jet engine ≈ 140 dB.

**⚡ ECAT Tip:** For beats to occur, two sound waves of slightly different frequencies f₁ and f₂ must superpose. Beat frequency f_beat = |f₁ - f₂|. This is used to tune musical instruments — adjust the tension (and hence frequency) until the beat frequency becomes zero.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

**Derivation of Wave Speed on a String:**

Consider a string element of mass dm and length ds under tension T. For a transverse wave of small amplitude, the restoring force at the crest provides centripetal acceleration. A simpler approach: from energy: a pulse traveling along a string with speed v has kinetic energy ½μv²A² per unit length (μ = linear mass density). The potential energy stored due to stretching is also ½μv²A². The speed is determined by v = √(T/μ). This result shows that wave speed depends only on the physical properties of the string — not on the amplitude or frequency.

**Sound in Tubes — End Corrections:**

Real tubes have end corrections because the antinode at an open end actually forms slightly beyond the tube opening. Effective length L_eff = L + 0.3D for a pipe of diameter D. This is why tuning a guitar string precisely requires adjusting for the actual scale length including the portion that extends over the bridge.

**Ultrasound and Its Applications:**

Ultrasound frequencies (> 20 kHz, above human hearing range) have important applications: (1) Medical imaging — A-scan, B-scan, and Doppler ultrasound in obstetrics and cardiology; (2) Industrial non-destructive testing — detecting flaws in welds and materials; (3) Sonar — using time-of-flight to measure ocean depth and detect submarines (v_sound in water ≈ 1500 m/s, much faster than in air).

The acoustic impedance Z = ρv determines how much sound is reflected at an interface. For ultrasound imaging, the reflection at tissue interfaces depends on Z₁ - Z₂. This is why ultrasound works well for soft tissues but cannot image bone or lung (too much impedance mismatch).

**⚡ ECAT Pattern:** ECAT frequently tests: (1) v = fλ calculations with numerical values given for any two of v, f, λ; (2) Doppler effect problems where a source or observer moves and students must determine whether the observed frequency increases or decreases; (3) standing wave patterns in strings and pipes, identifying nodes and antinodes; and (4) intensity level in decibels calculations. A typical ECAT problem: "A source of frequency 500 Hz moves toward a stationary observer at 30 m/s. If the speed of sound is 340 m/s, what is the observed frequency?" f' = f × v/(v - v_s) = 500 × 340/(340 - 30) = 500 × 340/310 ≈ 548 Hz.
