---



exam: jamb
examName: JAMB UTME
subject: physics
subjectName: Physics
topic: phy-10
topicName: Electrostatics
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.713002"
diagramPrompt: "Clean educational diagram showing Electrostatics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---
# Electrostatics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Electrostatics** — Key Facts for JAMB

**Coulomb's Law:**
$F = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r^2}$. In a medium: $F = \frac{1}{4\pi\varepsilon}\frac{q_1 q_2}{r^2}$. $k = 1/(4\pi\varepsilon_0) ≈ 9 × 10^9$ N·m²/C². Relative permittivity $\varepsilon_r$: $F_{vacuum} = F_{medium} × \varepsilon_r$. Force is repulsive for like charges ($q_1q_2 > 0$), attractive for unlike charges ($q_1q_2 < 0$).

**Electric Field and Potential:**
Electric field intensity $E = F/q = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}$ (point charge). Direction: away from positive, toward negative. Electric potential $V = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r}$ (point charge). $E = -dV/dr$.

⚡ **Exam tip:** Potential is a scalar — just add algebraically for multiple charges. Electric field is a vector — you must add vectorially using components.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Electrostatics** — JAMB UTME Study Guide

**Electric Dipole:**
Electric dipole moment $\vec{p} = q\vec{d}$. For a dipole in uniform electric field:
- Torque: $\tau = pE\sin\theta$
- Potential energy: $U = -pE\cos\theta$ (minimum when dipole aligns with field)

Potential at axial point (along axis): $V = \frac{1}{4\pi\varepsilon_0}\frac{p}{r^2}$. At equatorial point (perpendicular bisector): $V = -\frac{1}{4\pi\varepsilon_0}\frac{p}{2r^3}$.

**Capacitors:**
Capacitance: $C = Q/V = \varepsilon_0 A/d$ (parallel plate in vacuum).
Parallel plate with dielectric: $C = K\varepsilon_0 A/d$ where $K$ = dielectric constant.
Energy stored: $U = \frac{1}{2}CV^2 = \frac{1}{2}QV^2 = \frac{Q^2}{2C}$.

Combinations:
- Series: $1/C_{eq} = 1/C_1 + 1/C_2 + ...$ (charge same on each, voltages add)
- Parallel: $C_{eq} = C_1 + C_2 + ...$ (voltage same across each, charges add)

**Electric Flux and Gauss's Law:**
$\Phi_E = \vec{E} \cdot \vec{A} = EA\cos\theta$. Gauss's law: $\Phi_E = q_{enc}/\varepsilon_0$.
For a point charge $q$: flux through a sphere of radius $r$: $\Phi = q/\varepsilon_0$ (independent of $r$!).

**Charge Distribution:**
- **Conductor:** All excess charge resides on the outer surface. $E = 0$ inside a conductor.
- **Insulator:** Charge distributes throughout the volume.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Electrostatics** — Comprehensive Physics Notes

**Derivation of Electric Field from Potential:**
Since $E = -dV/dr$, the electric field points in the direction of steepest decrease of potential. Equipotential surfaces are always perpendicular to electric field lines. They never cross each other (otherwise the potential would be ambiguous).

**Gauss's Law — Detailed Applications:**

**Spherical Shell (thin):**
Consider a spherical shell of radius $R$ with uniform surface charge density $\sigma = q/(4\pi R^2)$.
- Outside ($r > R$): Treat as a point charge at centre. $E = \frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}$.
- On the surface ($r = R$): $E = \frac{1}{4\pi\varepsilon_0}\frac{q}{R^2} = \frac{\sigma}{\varepsilon_0}$.
- Inside ($r < R$): Enclosed charge $q_{enc} = 0$. So $E = 0$ everywhere inside. The potential is constant inside: $V = \frac{1}{4\pi\varepsilon_0}\frac{q}{R}$ (same as at the surface).

**Solid Sphere (uniform volume charge):**
Total charge $Q$ uniformly distributed in radius $R$.
- Outside ($r \geq R$): $E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}$ (point charge).
- Inside ($r \leq R$): Only fraction of charge inside: $q_{enc} = Q × (r^3/R^3)$. $E = \frac{1}{4\pi\varepsilon_0}\frac{Qr}{R^3}$ (increases linearly from 0 at centre to max at surface).
- At surface: $E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{R^2}$.
- Inside potential: $V = \frac{1}{4\pi\varepsilon_0}\frac{Q}{2R^3}(3R^2 - r^2)$ (parabolic, maximum at centre).
- Outside potential: $V = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r}$.

**Uniformly Charged Infinite Plane:**
Surface charge density $\sigma$ (C/m²). Using a cylindrical Gaussian pillbox crossing the plane: $\oint \vec{E} \cdot d\vec{A} = E(2A) = \sigma A/\varepsilon_0$. So $E = \sigma/(2\varepsilon_0)$ on each side, directed away from the positively charged plane. The field is independent of distance from the plane.

**Capacitors — Advanced:**
Force between plates: $F = \frac{Q^2}{2\varepsilon_0 A} = \frac{\varepsilon_0 E^2 A}{2}$. Pressure = $F/A = \frac{\varepsilon_0 E^2}{2}$.

Capacitor with mixed dielectric: If a dielectric of thickness $t_1$ and constant $K_1$ fills half the gap and another dielectric fills the other half (side by side, not stacked): treat as two capacitors in parallel: $C = C_1 + C_2 = \frac{\varepsilon_0 A/2}{t}(K_1 + K_2)$.

If dielectrics fill successive layers (stacked): treat as two capacitors in series: $1/C = 1/C_1 + 1/C_2 = \frac{t_1}{K_1\varepsilon_0 A} + \frac{t_2}{K_2\varepsilon_0 A}$.

**Van de Graaff — JAMB Favourite:**
Charge accumulates on the dome. Maximum field at the surface $E = V/r$. Breakdown occurs at $E ≈ 3 × 10^6$ V/m. For a dome of $r = 1$ m: $V_{max} ≈ 3 × 10^6$ V. Practically, much lower due to air humidity and sharp points.

**JAMB Pattern Analysis:**
JAMB questions frequently test: (1) Coulomb's law calculations, (2) Electric potential from point charges, (3) Capacitor combinations and energy, (4) Gauss's law for spherical shells and infinite planes, (5) Relationship between $E$ and $V$. Common mistakes: forgetting that $E$ is a vector and $V$ is a scalar. JAMB 2023: "Two charges of $+2 \mu C$ and $-3 \mu C$ are 0.1 m apart. Find the force between them." Answer: $F = 9×10^9 × (2×10^{-6} × 3×10^{-6})/(0.1)^2 = 9×10^9 × 6×10^{-12}/0.01 = 9×6×10^{-4}/10^{-2} = 54×10^{-2} = 0.54$ N (attractive).

---


---
## 📊 JAMB Exam Essentials

| Detail | Value |
|---|---|
| Questions | 180 MCQs (UTME) |
| Subjects | 4 subjects (language + 3 for course) |
| Time | 2 hours |
| Marking | +1 per correct answer |
| Score | 400 max (used for university admission) |
| Registration | January – February each year |

### 🎯 High-Yield Topics for JAMB
- Use of English (Grammar + Comprehension) — 60 marks
- Biology for Science students — 40 marks
- Chemistry (Organic + Physical) — 40 marks
- Physics (Mechanics + Optics) — 35 marks
- Mathematics (Algebra + Geometry) — 40 marks

### 📝 Previous Year Question Patterns
- Q: "The process of photosynthesis requires..." [2024 Biology]
- Q: "The electronic configuration of Fe is..." [2024 Chemistry]
- Q: "Find the value of x if 2x + 5 = 15..." [2024 Mathematics]

### 💡 Pro Tips
- Use of English carries the most weight — master grammar rules and comprehension strategies
- JAMB syllabus is your Bible — questions come directly from it. Download and use it.
- Past questions are highly predictive — repeat patterns appear every year
- For Science students, Biology and Chemistry are high-scoring if you study NCERT-level content

### 🔗 Official Resources
- [JAMB Official](https://www.jamb.gov.ng/)
- [JAMB Syllabus](https://www.jamb.gov.ng/syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
