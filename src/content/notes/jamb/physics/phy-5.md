---



exam: jamb
examName: JAMB UTME
subject: physics
subjectName: Physics
topic: phy-5
topicName: Circular Motion and Gravitation
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.709090"
lastUpdated: "2026-07-11"
diagramPrompt: "Clean educational diagram showing Circular Motion and Gravitation with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Circular Motion and Gravitation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your JAMB UTME Physics paper.

**Circular motion** is the movement of an object at constant speed along a circular path of fixed radius. Although the speed is steady, the velocity direction keeps changing, so an inward **centripetal acceleration** is required to bend the path into a circle. That acceleration is supplied by a real **centripetal force** directed toward the centre, never outward.

| Quantity | Formula | Meaning of symbols |
|---|---|---|
| Linear speed | v = 2πr / T | r = radius (m), T = period (s) |
| Centripetal acceleration | a_c = v² / r | v in m/s, r in m |
| Centripetal force | F_c = mv² / r = mω²r | m in kg, ω = 2π/T in rad/s |
| Newton's gravitation | F = GMm / r² | G = 6.67 × 10⁻¹¹ N·m²/kg² |
| Gravitational field | g = GM / r² | g in m/s², r from centre |

#### High-yield pointers:
- For an orbiting satellite, gravity itself plays the role of centripetal force, giving v_o = √(GM/r).
- Escape velocity from a body of mass M and radius r is v_e = √(2GM/r), exactly √2 times the orbital speed at the surface.
- Use g = 10 m/s² when a JAMB question leaves it unspecified; convert any period given in minutes or hours to seconds before substitution.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before JAMB UTME.

#### Uniform circular motion
An object undergoing **uniform circular motion** travels at constant speed v along a circle of radius r. The tangential velocity changes direction continuously, so even though |v| is constant the vector is not, producing an acceleration of magnitude a_c = v² / r pointing toward the centre. The corresponding **centripetal force** is F_c = mv² / r, and using v = ωr the same force can be written as mω²r, where ω = 2π/T is the angular velocity in rad/s and T is the period of one revolution.

The inward force is real: it can be tension in a string, gravity for a satellite, friction for a car rounding a bend, or the normal reaction of a banked road. The "outward pull" passengers feel in a turning car is a **centrifugal pseudo-force** that appears only in the rotating reference frame of the vehicle, not in an inertial frame.

#### Newton's law of universal gravitation
Every point mass attracts every other with a force F = GMm/r² directed along the line joining their centres. G = 6.67 × 10⁻¹¹ N·m²/kg² is the gravitational constant. The associated **gravitational field strength** at distance r from a mass M is g = GM/r², which is exactly the acceleration of free fall a freely released body would experience there. At Earth's surface g ≈ 9.8 m/s², but JAMB problems routinely use g = 10 m/s² when no value is stated.

#### Orbital mechanics and Kepler
For a satellite in a circular orbit, gravitational attraction provides the centripetal force:

> GMm / r² = mv_o² / r  ⇒  **v_o = √(GM/r)**  and  **T = 2π√(r³/GM)**

This last relation is **Kepler's third law** (T² ∝ r³). Kepler's other two laws state that planetary orbits are ellipses with the Sun at one focus, and that the line joining a planet to the Sun sweeps equal areas in equal times. **Escape velocity** v_e = √(2GM/r) is the minimum launch speed at which a projectile leaves the gravitational field without further propulsion.

| Orbital quantity | Expression | Where it appears in JAMB |
|---|---|---|
| Orbital speed | v_o = √(GM/r) | Satellite period / speed questions |
| Escape speed | v_e = √(2GM/r) | "minimum speed to leave Earth" |
| Geostationary orbit | T = 24 h, orbit in equatorial plane | Communication-satellite MCQs |

#### Common traps examiners exploit
- Plugging the **diameter (2r)** instead of the radius into v²/r or GMm/r².
- Forgetting to convert minutes or hours to seconds before substituting T.
- Treating "weightless" astronauts as gravity-free; gravity is still nearly full strength at low orbit — both astronaut and craft fall together.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer JAMB timeline who want full command of this 4%-weight topic.

#### Why the acceleration points inward
A particle moving with constant speed v sweeps an angle Δθ in time Δt, changing its velocity vector by Δv ≈ vΔθ perpendicular to the instantaneous velocity. Since a = Δv/Δt = v·(Δθ/Δt) = vω = v²/r, the acceleration is perpendicular to the path and therefore radial. This geometric argument is why circular motion **demands** a centre-seeking force regardless of whether the motion is at the end of a string, around a planet, or along a charged-particle track in a magnetic field (a separate but parallel formula F = qvB).

#### Connecting gravitation to field and potential
Gravitational field strength g = GM/r² is a vector field; gravitational potential V = −GM/r is a scalar from which g = −dV/dr. A body in circular orbit has constant V (conserved energy: ½mv² − GMm/r = constant). Setting v² = GM/r for circular motion gives total energy E = −GMm/(2r), showing bound orbits have negative energy while v ≥ v_e gives E ≥ 0 and the body escapes.

#### Edge cases and adjacent links
- **Banked curves and conical pendulums** reduce to the same F_c = mv²/r with components resolved along horizontal/vertical or along/perp to the string.
- **Geostationary orbit** requires T = 24 h AND the orbit to lie in the equatorial plane; the radius comes from T² = 4π²r³/(GM_E).
- **Variations of g** with latitude (Earth's rotation) and altitude: at height h, g_h = GM/(R+h)² ≈ g(1 − 2h/R) for small h.
- **Weightlessness in orbit** is free fall, not absence of gravity; g at 400 km altitude ≈ 8.7 m/s², still ≈ 89% of surface value.
- **Newton's vs Coulomb's law**: both are inverse-square, so v_o = √(GM/r) mirrors the Bohr orbital speed formula with k·e² replacing GMm.

#### Worked micro-example
A satellite orbits Earth at r = 7.0 × 10⁶ m. With M_E = 5.97 × 10²⁴ kg and G = 6.67 × 10⁻¹¹:

> v_o = √(GM/r) = √((6.67×10⁻¹¹)(5.97×10²⁴)/(7.0×10⁶)) ≈ 7.54 × 10³ m/s; T = 2πr/v ≈ 5.83 × 10³ s ≈ 97 min.

#### Practice prompts
1. A 0.50 kg mass on the end of a 1.2 m string makes 60 revolutions in 30 s on a frictionless table. Find the tension in the string.
2. Show that the escape velocity from the surface of a planet of mass M and radius R is exactly √2 times the speed of a low circular orbit at the same radius.

#### Common mistakes to delete from your script
- Writing F = mvr² or F = mv/r instead of mv²/r.
- Mixing g = 9.8 and g = 10 within one calculation.
- Treating centrifugal force as a real third-force instead of a frame artefact.
- Using r = surface-to-surface distance instead of centre-to-centre in F = GMm/r².

---

## Continue your study
- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Circular Motion and Gravitation" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/jamb/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
