---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-19
topicName: Communication Systems
weight: 2
country: pakistan
generated: "2026-03-24T08:32:08.092912"
lastUpdated: "2026-07-11"
diagramPrompt: "Clean educational diagram showing Communication Systems with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Communication Systems

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **communication system** transfers information (voice, data, video) from a source to a destination using three elements: a **transmitter**, a **transmission channel**, and a **receiver**. The information signal (low-frequency audio) cannot be sent directly because it would require an antenna thousands of kilometres long. **Modulation** overcomes this by superimposing the information on a high-frequency **carrier wave**, shrinking the required antenna to roughly λ/2, where λ = c/f.

- **Amplitude Modulation (AM):** carrier **amplitude** changes with the modulating signal; frequency stays constant. Bandwidth **BW = 2 f_m**.
- **Frequency Modulation (FM):** carrier **frequency** changes; amplitude stays constant. Bandwidth uses **Carson's rule: BW = 2(Δf + f_m)**.
- **AM power:** P_t = P_c (1 + m²/2), where m = modulation index = (A_max − A_min)/(A_max + A_min).

> **MDCAT tip:** only 1 MCQ (≈2% weight) — focus on AM vs FM differences and the reason modulation is needed.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Why Modulation Is Necessary
Audio signals lie between **20 Hz and 20 kHz**. Transmitting them directly would need an antenna of length λ/2 = c/(2f). At 1 kHz this gives 150 km — physically impossible. Shifting the signal onto a carrier of frequency f_c around the MHz band reduces the antenna to a few metres, avoids low-frequency mixing between stations, and lifts the signal above most atmospheric noise.

#### Amplitude Modulation
The instantaneous carrier amplitude follows the modulating waveform: A_c(1 + m sin ω_m t)·sin ω_c t. The **modulation index** m must stay ≤ 1; values above 1 cause envelope distortion and interference. The transmitted AM signal contains three frequency components: f_c − f_m, f_c, and f_c + f_m, giving a bandwidth of **BW_AM = 2 f_m** (twice the highest audio frequency).

#### Frequency Modulation
Here the carrier frequency swings around f_c by a peak deviation Δf, while amplitude remains constant. FM is far more **noise-resistant** because atmospheric and electrical disturbances are mostly amplitude-based and are rejected by the FM limiter. Bandwidth is given by **Carson's rule: BW_FM = 2(Δf + f_m)** — substantially wider than AM, which is why FM stations are spaced ~200 kHz apart while AM stations use 10 kHz.

| Property | AM | FM |
|---|---|---|
| Carrier property varied | Amplitude | Frequency |
| Bandwidth formula | 2 f_m | 2(Δf + f_m) |
| Noise immunity | Lower | Higher |
| Typical bandwidth | ~10 kHz | ~200 kHz |
| Total power P_t | P_c(1 + m²/2) | Constant |

#### Wave Propagation
Ground waves (≤ 2 MHz) follow Earth's curvature, sky waves (2–30 MHz) reflect off the ionosphere for long-range broadcast, and space waves (> 30 MHz) travel line-of-sight for TV, satellites, and mobile links.

> **Common trap:** students swap AM and FM bandwidth formulas. Remember — AM bandwidth = 2 f_m, FM uses Carson's rule.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Modulation Index and Power Distribution
For an AM transmitter with carrier power P_c and modulation index m, the total radiated power is **P_t = P_c(1 + m²/2)**. The sidebands each carry **P_c m²/4**, so useful information power is only P_c m²/2 — roughly one-third of P_t at m = 1. Operating below m = 1 wastes transmitter power in the carrier, while m > 1 produces **over-modulation**, where the envelope flattens and the recovered audio distorts.

#### Worked Example
A 1 MHz carrier is amplitude-modulated by a 5 kHz audio signal with m = 0.8.

- Sideband frequencies: 995 kHz and 1005 kHz.
- Bandwidth: BW = 2 × 5 kHz = **10 kHz**.
- If P_c = 9 kW, then P_t = 9 × (1 + 0.32) = **11.88 kW**, with each sideband radiating 9 × (0.64)/4 = 1.44 kW.

#### Edge Cases and Adjacent Links
- **Antenna length:** minimum practical size is λ/4; the textbook λ/2 is the fundamental dipole. Higher carrier frequency → shorter antenna.
- **SNR trade-off:** FM's wider bandwidth improves SNR roughly as (Δf/f_m)² (Carson's insight), at the cost of occupying more spectrum.
- **Digital successors:** pulse-code modulation (PCM) and QAM extend these analogue principles; the bandwidth–noise trade-off persists in Shannon's channel capacity theorem.
- **Propagation linkage:** ground-wave absorption rises with frequency; sky-wave skip depends on the ionospheric critical frequency, set by solar activity — important when comparing AM radio ranges day vs night.

#### Common Mistakes
- Forgetting that modulation index is dimensionless and capped at 1.
- Using f_m instead of 2 f_m for AM bandwidth.
- Assuming FM uses less spectrum than AM — usually the opposite.
- Treating decibels as a unit of power instead of a ratio (10 log₁₀ P/P₀).

#### Practice Prompts
1. An AM broadcast at 600 kHz uses a 4 kHz audio signal with m = 0.75. Compute the bandwidth and the fraction of total power carried by the sidebands.
2. An FM station has Δf = 75 kHz and f_m = 15 kHz. Apply Carson's rule and compare the result with an equivalent AM station's bandwidth.

> **Exam strategy:** one MCQ in 90 minutes — spend under 60 seconds. Eliminate options by checking AM vs FM property and the bandwidth formula.

---

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Communication Systems" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/mdcat/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
