---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-20
topicName: Gravitation
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.093634"
lastUpdated: "2026-09-08"
diagramPrompt: "Clean educational diagram showing Gravitation with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Gravitation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your MDCAT Physics paper.

Gravitation is the universal attractive force between any two masses, described by **Newton's law of universal gravitation**: every point mass pulls every other point mass with a force that scales as the product of their masses and the inverse square of their separation. On MDCAT this single chapter covers Kepler's three laws, the gravitational field, gravitational potential, the variation of *g* with altitude and depth, orbital and escape velocity, and satellite motion.

| Quantity | Formula | Meaning |
| --- | --- | --- |
| Gravitational force | $F = \dfrac{G m_1 m_2}{r^2}$ | Attraction between two masses separated by distance $r$ |
| Surface field | $g = \dfrac{GM}{R^2}$ | Acceleration due to gravity at the planet's surface |

- **G** = 6.674 × 10⁻¹¹ N·m²/kg² is a universal constant; **g** ≈ 9.8 m/s² is a local field.
- Escape velocity $v_e = \sqrt{2GM/R}$ is $\sqrt{2}$ times the circular orbital speed at the surface.
- Kepler's third law: $T^2 \propto a^3$, where $a$ is the semi-major axis of the orbit.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before the MDCAT.

#### Newton's Law and the Gravitational Field

Newton's law gives the magnitude of attraction between two point masses as $F = G m_1 m_2 / r^2$, where $r$ is measured centre-to-centre. Dividing by a test mass gives the **gravitational field strength** $\mathbf{g} = \mathbf{F}/m = G M / r^2$, directed toward the source mass. Field is a vector; **gravitational potential** $V = -G M / r$ is the scalar work-per-unit-mass needed to bring a test mass from infinity to distance $r$. The negative sign reflects that gravity is attractive — moving inward releases energy.

#### Variation of *g* with Height and Depth

Above the surface, $r = R + h$, so $g_h = g \left(\dfrac{R}{R+h}\right)^2$. At small $h \ll R$ this is often linearised to $g_h \approx g(1 - 2h/R)$. Below the surface, only the mass enclosed by a sphere of radius $R-d$ contributes, giving the linear fall $g_d = g\left(1 - \dfrac{d}{R}\right)$, which drops to **zero at the Earth's centre**.

#### Kepler's Laws in Exam Form

1. Orbits are ellipses with the central body at one focus.
2. The areal velocity $dA/dt$ is constant (equal areas in equal times).
3. $T^2 / a^3 = \dfrac{4\pi^2}{GM}$, the same constant for all satellites of one central body.

For a circular orbit, replace $a$ with the orbital radius $r$.

#### Common Mistakes in MCQs

- Swapping $R$ and $R+h$ when applying $v_o = \sqrt{GM/r}$ to a satellite at altitude $h$.
- Assuming $v_e$ depends on the escaping body's mass; it depends only on the planet.
- Treating weightlessness in orbit as "zero gravity"; both satellite and astronaut accelerate at the same $g$.

| Concept | Formula | Exam Tip |
| --- | --- | --- |
| Orbital velocity | $v_o = \sqrt{GM/r}$ | Use radius from planet's centre, not altitude |
| Escape velocity | $v_e = \sqrt{2GM/R}$ | Independent of the escaping mass |
| Binding energy | $E = -\dfrac{GMm}{2r}$ | Negative; equals half the orbital kinetic energy |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Energy Bookkeeping in Orbits

For a circular orbit, kinetic energy $K = \tfrac{1}{2} m v_o^2 = GMm/(2r)$ and potential energy $U = -GMm/r$, giving total mechanical energy $E = K + U = -GMm/(2r)$. The minus sign encodes binding: $|E|$ is the energy needed to escape to infinity. A satellite moved from radius $r_1$ to $r_2 > r_1$ requires positive work against gravity; this is why geostationary transfer orbits are elliptical and require an apogee burn.

#### Geostationary and Polar Satellites

A **geostationary satellite** has $T = 24$ h and orbits in the equatorial plane with $r \approx 42{,}164$ km from Earth's centre. Setting $T^2 = 4\pi^2 r^3/(GM)$ with $T = 86400$ s fixes this radius. **Polar satellites** used for remote sensing have lower orbits (a few hundred km) and shorter periods; they sweep the whole Earth because the planet rotates beneath them.

#### Edge Cases and Traps

1. Inside a uniform sphere, $g$ is linear in depth; outside, $g$ is inverse-square. Never mix the two regimes.
2. The orbital period depends on the **central mass**, not the satellite mass — Galileo-style "heavy objects fall faster" ideas are wrong in orbital mechanics too.
3. Apparent weight in a satellite is zero, but the gravitational field is not — only the normal force vanishes in free fall.

> **Strategy:** In MDCAT, expect 1–2 MCQs from this 3%-weight chapter. Practise numerical substitution with $G = 6.674 \times 10^{-11}$ and $g = 9.8$ m/s², and memorise the $v_e/v_o = \sqrt{2}$ ratio.

#### Practice prompts:
1. A satellite orbits Earth at $r = 2R$. Find $T$ using $T^2 = 4\pi^2 r^3/(GM)$.
2. A meteorite is at depth $d = R/2$ inside Earth. Compute $g_d$ and explain why it is half of surface $g$.

---

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Gravitation" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/mdcat/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
