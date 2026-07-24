---
exam: neet
examName: NEET UG
subject: physics
subjectName: Physics
topic: communications
topicName: Communication Systems
weight: 2
country: india
generated: 2026-04-23
lastUpdated: "2026-07-24"
---

# Communication Systems

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A communication system transmits information from a source to a destination through a **channel**, using a **transmitter**, **receiver**, and the mandatory step of **modulation**. Modulation shifts the low-frequency message signal onto a high-frequency **carrier wave** so the antenna length (L = λ/4) becomes practical and the signal can travel long distances.

For NEET, the highest-yield facts are:

- **Modulation index** for AM: m_a = A_m / A_c, bounded between 0 and 1.
- **AM bandwidth** = 2 f_m (twice the modulating frequency).
- **Three propagation modes**: ground wave (low freq, < 2 MHz), sky wave (HF, uses ionosphere), space wave (VHF/UHF, line-of-sight).

| Element | Function |
| --- | --- |
| Transducer | Converts message (sound/data) into electrical signal |
| Transmitter | Modulates and amplifies the signal |
| Channel | Transmission medium (wire, fiber, free space) |
| Receiver | Demodulates and reconstructs the original message |

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Block Diagram of a Communication System

The chain runs in this order: **information source → input transducer → transmitter → channel → receiver → output transducer → destination**. Noise is added at every stage from the channel onwards, so signal-to-noise ratio (SNR) is the figure that ultimately decides link quality.

#### Amplitude Modulation Essentials

In AM, the carrier amplitude is varied in proportion to the message signal while frequency stays constant. The mathematical form is:

s(t) = A_c [1 + m_a cos(2π f_m t)] cos(2π f_c t)

The envelope faithfully reproduces the message only when m_a ≤ 1; exceeding this causes **over-modulation** and severe distortion, a favourite one-mark trap in NEET.

#### Propagation of Electromagnetic Waves

| Mode | Frequency range | Mechanism | Typical use |
| --- | --- | --- | --- |
| Ground wave | Up to ~2 MHz | Follows Earth curvature, diffraction over surface | AM radio, navigation |
| Sky wave | 2–30 MHz | Reflection/refraction by ionospheric layers | Shortwave broadcasting |
| Space wave | > 30 MHz | Line-of-sight, tropospheric scatter | TV, FM, mobile, satellite uplink |

The **critical frequency** for sky-wave reflection is f_c = 9 × 10³ √N_max, where N_max is the peak electron density (per m³) of the ionospheric layer. The maximum usable frequency for a given angle of incidence is MUF = f_c sec θ.

- Higher m_a → louder received signal but more sideband power.
- Total AM power: P_total = P_c (1 + m_a²/2); sidebands carry only m_a²/2 of carrier power.
- Sky-wave range jumps at MUF; signals just below MUF are called **optimum working frequency (OWF)**.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### FM vs AM — Why FM Sounds Cleaner

Frequency modulation varies the carrier's instantaneous frequency while amplitude stays fixed. The bandwidth of FM is **2(β + 1) f_m**, where β is the modulation index (Δf / f_m). Because most natural and man-made noise is amplitude-based, FM's constant-amplitude property gives a much better SNR at the cost of larger bandwidth. NEET NCERT limits quantitative FM to band-width comparison, so focus on the β definition and the Carson rule.

#### Optical Fibre and Satellite Links

Optical fibres guide light via **total internal reflection**, requiring the numerical aperture NA = √(n₁² − n₂²). Higher NA admits more modes, raising bandwidth into the THz range. Commercial fibres use n₁ ≈ 1.48, n₂ ≈ 1.46, giving NA ≈ 0.24. Geostationary satellites sit at ~36,000 km altitude, producing a one-way latency of roughly 240 ms; their uplink/downlink frequencies lie in the microwave C (4–8 GHz) and Ku (12–18 GHz) bands.

#### Free-Space Path Loss (Extra)

Friis equation: P_r = P_t G_t G_r (λ / 4π d)². Doubling the distance drops received power by a factor of 4; halving the frequency (longer λ) multiplies received power by 4. This is why VHF TV transmitters need far more power than microwave links to cover the same range.

#### Common Mistakes

- Confusing AM bandwidth 2 f_m with FM bandwidth 2(β+1) f_m.
- Treating modulation index like a percentage signal loss.
- Combining **ground wave** with **sky wave** in the same range — ground waves are surface-bounded, sky waves are ionosphere-bounded.
- Forgetting that antenna length L = λ/4 uses the carrier frequency, not the modulating frequency.

#### Practice Prompts

1. A carrier of 1 MHz is amplitude-modulated by a 5 kHz sine wave with m_a = 0.8. Find the AM bandwidth and the fraction of total power carried by the sidebands.
2. For an ionospheric layer with N_max = 10¹² m⁻³ struck at 60°, compute the critical frequency and the MUF.

## Continue your study

- **[View this topic in your NEET UG roadmap](/roadmap/?exam=neet&duration=1mo)** — see where "Communication Systems" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NEET UG exam overview](/exams/neet/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/neet/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
