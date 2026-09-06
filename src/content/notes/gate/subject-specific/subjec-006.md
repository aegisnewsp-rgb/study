---
exam: gate
examName: "GATE"
subject: subject-specific
subjectName: "Subject-Specific"
topic: subjec-006
topicName: "Manufacturing Engineering — Machining and CNC"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-06"
---

# Manufacturing Engineering — Machining and CNC

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Machining** removes material with a harder tool governed by chip formation, cutting forces, and tool wear. **CNC** automates the same kinematics through G-code (ISO 6983 / RS-274).

- **MRR (material removal rate):** $MRR = f \cdot d \cdot v_c / 1000$ in mm³/s, with feed *f* in mm/rev, depth *d* in mm, cutting speed *v_c* in m/min.
- **Cutting speed:** $v_c = \pi D N / 1000$ (m/min), where *D* is the workpiece diameter in mm and *N* is spindle rpm.
- **Taylor's tool life:** $V \cdot T^n = C$; solve for $T = (C/V)^{1/n}$ to find optimum *v_c*.
- **G-code mnemonics:** G00 rapid, G01 linear, G02 CW arc, G03 CCW arc, G90 absolute, G91 incremental, G94/G95 feed-per-min vs feed-per-rev.
- **Wear criterion:** ISO 3685 uses flank wear *V_B* = 0.3 mm as the tool-life end point.

> GATE tip: numericals on MRR, power, and Taylor's algebra appear almost every year — carry units carefully.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Chip formation and Merchant's analysis

In **orthogonal cutting** (tool edge straight, perpendicular to *v_c*), a primary shear zone of thickness *t_1* thins to *t_2* across angle *φ*. Merchant's **minimum-energy shear angle** balances friction angle *β* and rake angle *α*:

$$\tan\phi = \frac{r\cos\alpha}{1 - r\sin\alpha}, \quad r = \frac{\cos\alpha \sin\beta}{\cos(\phi-\alpha)}$$

Shear strain $\gamma = \cot\phi + \tan(\phi - \alpha)$. The tangential cutting force $F_c$ is the largest component and dominates power; radial $F_r$ and feed-direction $F_f$ are smaller (steel ratio ≈ 1 : 0.5 : 0.3).

#### Cutting forces, power, specific energy

Cutting power from measured dynamometer force:

$$P_c = \frac{F_c \cdot v_c}{60\,000}\ \text{kW}$$

Specific cutting energy (a material property index):

$$p_s = \frac{F_c}{f \cdot d}\ \ \text{N·m/mm}^3$$

Higher *p_s* ⇒ tougher-to-cut material; reference 0.2 % C steel sits near 2.0 N·m/mm³.

#### Tool life and Taylor equation

Flank wear *V_B* grows with cutting time. Empirical model:

$$v_c \cdot T^{\,n} = C$$

| Tool / work pair | Typical *n* | Typical *C* (m/min)^(1/n)·min |
| --- | --- | --- |
| HSS on mild steel | 0.08–0.15 | ~250 |
| Uncoated carbide on steel | 0.20–0.25 | ~400 |
| Coated carbide (CVD) on steel | 0.30–0.45 | ~700 |
| Ceramic on cast iron | 0.40–0.60 | ~1200 |

Exponent *n* grows with hot-hardness of the tool.

#### CNC programming essentials

- **Modal codes** stay active until overridden; **non-modal** apply only to the next block.
- **Cutter compensation:** G41 left, G42 right of workpiece path (in milling).
- **Canned cycles** compress multi-block motions — G81 drilling, G83 peck-drilling, G76 threading, G90/G92 turning cycles.
- **Absolute vs incremental:** G90 uses work-zero coordinates; G91 uses last position as origin.
- **Inch/metric:** G20 / G21 — *not* G90/G91 (a classic confusion trap).

> Exam trap: in a **lathe** the +X axis points toward the operator (away from chuck centre), so a G02 arc in the XZ face appears reversed compared with a mill.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Economics: optimum cutting speed

Minimum-cost speed balances tool cost vs. machining time. With $T = (C/v)^{1/n}$ and Taylor exponent *n*:

$$v_{c,\text{opt}} = \frac{C}{\left[\left(\tfrac{1}{n}-1\right)(C_t/C_m \cdot t_h)\right]^n}$$

where $C_t$ is tool cost, $C_m$ machine+operator rate, and $t_h$ tool-change time. Maximum-production speed uses *n* = 1 in the exponent — whenever GATE asks for "minimum cost vs. maximum production," check the denominator.

#### Surface finish and machinability

Theoretical centre-line-average roughness from a nose-radius tool:

$$R_a \approx \frac{f^2}{32 R}\ \mu\text{m}$$

Real *R_a* is usually 1.5–3× higher due to tool wear, vibration, and built-up edge.

#### Worked numeric

A 50 mm diameter mild-steel bar is turned at *N* = 600 rpm with *f* = 0.25 mm/rev and *d* = 2 mm. Find MRR and *v_c*.

- $v_c = \pi D N / 1000 = \pi(50)(600)/1000 = 94.25$ m/min.
- $MRR = f\,d\,v_c/1000 = (0.25)(2)(94.25)/1000 = 0.0471$ mm³/s = 169.6 cm³/min.

If *F_c* measured = 1200 N, then $P_c = F_c v_c / 60\,000 = 1.886$ kW, and $p_s = F_c/(f\,d) = 2400$ N·m/mm³ (high — confirms a tough alloy).

> GATE strategy: drop unit markers (m/min, mm/rev, kW) into every line; the conversion factor of 60 000 is the single biggest source of silly-arithmetic losses.

#### Common mistakes

- Mixing **feed per revolution** (mm/rev) with **feed rate** (mm/min); the formula changes unless you keep the dimensions aligned.
- Treating $p_s$ like specific heat — they share neither units nor physical meaning.
- Using HSS exponent *n* ≈ 0.1 for a coated carbide and so over-predicting tool life by orders of magnitude.
- Reading G02/G03 from the wrong side of the tool — orientation flips between lathe and mill, and between top/bottom turret in multi-axis lathes.

---

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Manufacturing Engineering — Machining and CNC" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All Subject-Specific notes](/notes/gate/subject-specific/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
