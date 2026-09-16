---
exam: undana
examName: UNDANA Entrance Exam (Indonesia)
subject: science
subjectName: Science
topic: scienc-001
topicName: Physics Fundamentals
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Physics Fundamentals

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Physics Fundamentals for UTUL UNDANA (the Universitas Nusa Cendana entrance exam) covers the SMA-level physics strands that the **IPA (Science) competency** requires for science, health, and engineering programmes: mechanics, heat, waves, optics, electricity, and magnetism. The exam rewards **dimensional consistency** in SI units (metre, kilogram, second, ampere, kelvin, mole, candela) and one-step numerical computation.

- **Core quantities and SI units:** length *L* in m [L], mass *m* in kg [M], time *t* in s [T], force *F* in N [M L T⁻²], energy/work *W* in J [M L² T⁻²], power *P* in W [M L² T⁻³], voltage *V* in V [M L² T⁻³ A⁻¹], resistance *R* in Ω [M L² T⁻³ A⁻²].
- **Five must-know equations:** $v = s/t$, $F = m a$, $W = F s \cos\theta$, $Q = m c \Delta T$, $V = I R$.
- **Conversion flag:** 1 km/h = 1/3.6 m/s — applied whenever GLB/GLBB (uniform / uniformly accelerated motion) uses road-speed inputs.

> 💡 **High-Yield Memory Hook:** **"Very Fast Workers Question Voltage"** → **V**elocity, **F**orce, **W**ork, **Q** (heat), **V**oltage — the five formulas above in the order you meet them across mechanics → thermal → electricity. Pair it with the unit chain **m–kg–s–A–K–mol–cd** (the seven SI base units) to lock dimensional analysis in one breath.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core formula table

| # | Formula | Variables & SI units | Dimensional formula | Used for |
|---|---------|---------------------|----------------------|----------|
| 1 | $v = s/t$ | $v$ in m·s⁻¹, $s$ in m, $t$ in s | [L T⁻¹] | GLB (uniform motion) |
| 2 | $F = m a$ | $F$ in N, $m$ in kg, $a$ in m·s⁻² | [M L T⁻²] | Newton's second law |
| 3 | $W = F s \cos\theta$ | $W$ in J, $F$ in N, $s$ in m, $\theta$ in rad | [M L² T⁻²] | Work by an angled force |
| 4 | $P = W/t$ | $P$ in W, $W$ in J, $t$ in s | [M L² T⁻³] | Mechanical / electrical power |
| 5 | $Q = m c \Delta T$ | $Q$ in J, $m$ in kg, $c$ in J·kg⁻¹·K⁻¹, $\Delta T$ in K | [M L² T⁻²] | Sensible heat |
| 6 | $V = I R$ | $V$ in V, $I$ in A, $R$ in Ω | [M L² T⁻³ A⁻¹] | Ohm's law |
| 7 | $1/f = 1/s + 1/s'$ | $f, s, s'$ all in m, power $P = 1/f$ in dioptre | [L⁻¹] | Thin converging/diverging lens |

#### Concept Comparison Matrix

| Concept | What it really is | Common confusion to avoid |
|---------|-------------------|----------------------------|
| Massa vs Berat | Massa (kg) is intrinsic matter content; berat (N) is $m g$ and changes with $g$. | Treating 60 kg and 600 N (at Earth's $g \approx 10$ m·s⁻²) as identical. |
| Suhu vs Kalor | Suhu (K) is average molecular KE state; kalor (J) is energy transferred because of a $\Delta T$. | Saying "an object contains heat" — heat is energy *in transit*, not stored. |
| GLB vs GLBB | GLB: $v$ constant, $a = 0$; GLBB: $a$ constant, $v$ varies linearly with $t$. | Using $s = vt$ on accelerated motion where $s = v_0 t + \tfrac{1}{2} a t^2$ is required. |
| R seri vs paralel | Seri: $R_{\text{tot}} = \sum R_i$; paralel: $1/R_{\text{tot}} = \sum 1/R_i$ (always smaller than the smallest $R_i$). | Thinking "two equal resistors in parallel double the resistance." They halve it. |
| $s$ vs $s'$ pada lensa | $s$ = object distance (benda), $s'$ = image distance (bayangan); both measured from the lens. | Swapping them so the dioptric power $P = 1/f$ (in m⁻¹) comes out wrong-signed. |
| Usaha vs Energi kinetik | Usaha = $\int F\, ds$; energi kinetik = $\tfrac{1}{2} m v^2$. By the work–energy theorem, $W_{\text{net}} = \Delta KE$. | Adding usaha *to* KE as if they were separate totals instead of equal under net work. |

#### 🎯 Exam-Level Worked Problem

**Question:** A 2 kg block slides 5 m down a frictionless incline that makes a 30° angle with the horizontal. What is the kinetic energy of the block at the bottom if it started from rest? (Use $g = 10$ m·s⁻².)

(A) 25 J &nbsp;&nbsp; (B) 50 J &nbsp;&nbsp; (C) 75 J &nbsp;&nbsp; (D) 100 J &nbsp;&nbsp; (E) 125 J

#### Solution:
1. Work done by gravity: $W = F s \cos\theta$, with $F = mg = 2 \times 10 = 20$ N, $\theta = 0°$ between gravity and displacement along the slope.
2. $W = 20 \text{ N} \times 5 \text{ m} \times \cos 0° = 100$ J.
3. By the work–energy theorem, $W_{\text{net}} = \Delta KE = KE_f - KE_i$.
4. $KE_i = 0$ (starts from rest), so $KE_f = 100$ J → **Answer: (D)**.

> ⚠️ **Examiner Trap:** Many students compute $h = 5 \sin 30° = 2.5$ m and answer $m g h = 50$ J, mixing up the slope length with the vertical height. With frictionless motion the cleaner route is $W = F s$ along the slope; $m g h$ is the gravitational-PE route and both give 100 J *only* when the *vertical* drop is correctly extracted.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Newton's three laws — application checklist

1. **N1 (inertia):** A body keeps its velocity unless a *net* external force acts. Use it to identify "which forces cancel" in static or constant‑velocity problems; missing the friction or normal components is a common slip.
2. **N2 ($\sum F = m a$):** Pick a direction, write a free‑body diagram, sum components, then solve. Tensions and the normal force are *internal unknowns*; weight $w = m g$ is external and always points downward.
3. **N3 (action–reaction):** Pairs act on **different** bodies. A common slip is to draw an action–reaction pair on the *same* diagram; that breaks the law because the two forces would cancel each other out on a single object.

#### Edge cases and traps in thermal and electrical problems

1. **Latent vs sensible heat.** $Q = m c \Delta T$ governs temperature change at constant phase; $Q = m L$ governs phase change at constant temperature. Mixing the two constants gives answers off by a factor of 10–1000 (water: $c \approx 4200$ J·kg⁻¹·K⁻¹ vs $L_f \approx 3.34 \times 10^5$ J·kg⁻¹).
2. **Series–parallel hybrids.** When a circuit contains both, reduce each parallel block first (using $1/R = \sum 1/R_i$), then add serially. Never apply the parallel formula to series resistors or vice‑versa.
3. **Sign conventions for thin lenses.** For a converging lens, real images give $s' > 0$; virtual images give $s' < 0$. The dioptric power $P = 1/f$ (in m⁻¹) is positive for converging, negative for diverging — exam items test this sign discipline.

#### Two advanced practice prompts

1. A 1500 W kettle runs for 3 minutes on a 220 V supply. Calculate the current drawn, the energy consumed in kWh, and the cost if the tariff is Rp 1.500/kWh. *(Targets P = V I, unit conversion to kWh, real Indonesian tariff.)*
2. An object 30 cm from a converging lens of focal length 10 cm produces an image. Find $s'$, the magnification $M = s'/s$, and the lens power in dioptres. *(Targets thin-lens equation and dioptre conversion: 1 m = 100 cm.)*

---

## Continue your study

- **[View this topic in your UNDANA Entrance Exam (Indonesia) roadmap](/roadmap/?exam=undana&duration=1mo)** — see where "Physics Fundamentals" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=undana&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UNDANA Entrance Exam (Indonesia) exam overview](/exams/undana/)** — pattern, eligibility, and syllabus
- **[All Science notes](/notes/undana/science/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
