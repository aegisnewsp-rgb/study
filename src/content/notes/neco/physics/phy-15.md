---



exam: neco
examName: NECO SSCE
subject: physics
subjectName: Physics
topic: phy-15
topicName: Magnetic Fields and Electromagnets
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.682487"
lastUpdated: "2026-09-23"
diagramPrompt: "Clean educational diagram showing Magnetic Fields and Electromagnets with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Magnetic Fields and Electromagnets

### 🟢 Lite — Quick Review (1h–1d)
> One screen of facts — the version you read between the door and your desk.

A magnetic field is the region around a magnet or current-carrying wire where a magnetic force is felt. Field lines leave the **north pole**, curve through the air, and re-enter the **south pole**, forming **closed loops**.

The equation that pays marks in every NECO paper:

- **F = B I L sin θ**, where F is force in newtons (N), B is flux density in tesla (T), I is current in amperes (A), and L is the length of conductor in metres (m) lying in the field.

- **Φ = B A cos θ**, where Φ is magnetic flux in webers (Wb), A is the coil area in m².

> 💡 **Memory Hook — "Left = Motor, Right = Generator":** Use Fleming's **left-hand** rule to find the force (motor effect); Fleming's **right-hand** rule gives the induced current direction (generator effect).

| Rule | Thumb | First finger | Second finger |
|---|---|---|---|
| Fleming's left (motor) | Force | Field (N→S) | Current (+ to −) |
| Right-hand grip | Thumb = current | Fingers curl = field |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard depth: mechanism, derivations, standard problems.

#### Field patterns you must sketch

A bar magnet and a single current loop have **identical** field shapes outside; inside the magnet the field runs **S to N** to keep the lines continuous. Two unlike poles (N facing S) give a strong uniform region between them. A solenoid with current acts like a bar magnet — the **right-hand grip rule** labels its poles.

#### The motor effect

A straight conductor carrying current I in a magnetic field B feels a force because free electrons are pushed sideways by the field. The magnitude:

- F = B I L sin θ, dimensions [M L T⁻²]
- Direction comes from Fleming's left-hand rule (force is perpendicular to **both** current and field).

For a moving charge q at speed v: F = q v B sin θ. Note the factor q is the charge, not to be confused with the angle; examiners sometimes reuse the letter for both, so watch the units.

#### Strength of an electromagnet

For an air-core solenoid: **B = μ₀ n I**, where μ₀ = 4π × 10⁻⁷ T m/A, n = turns per metre, I = current. Three levers raise B:

1. Larger current.
2. More turns per metre.
3. Insert a soft iron core — relative permeability μᵣ in the thousands.

Steel is the wrong choice for the core; it retains magnetism and defeats the point of a switchable electromagnet.

#### Comparison matrix: commonly confused items

| Feature | Soft iron core | Steel core | Permanent magnet |
|---|---|---|---|
| Retains magnetism | No | Yes | Always magnetised |
| Easy to demagnetise | Yes | No | — |
| Use in electromagnet | Yes | No | No |
| Use in bar magnet | No | Yes | Yes |

| Quantity | Symbol | Unit | Definition |
|---|---|---|---|
| Magnetic flux density | B | tesla (T) | Force per unit current per unit length |
| Magnetic flux | Φ | weber (Wb) | B × area; 1 T = 1 Wb/m² |
| Permeability | μ₀ | T m/A | 4π × 10⁻⁷ in free space |
| Current | I | ampere (A) | Charge per unit time |

#### Worked exam-level problem

> A straight wire of length 0.25 m carries a current of 8 A through a uniform field of flux density 0.4 T at right angles to the field. Find the force on the wire, and state its direction relative to both the current and the field.

**Step 1.** Identify variables.

- B = 0.4 T, I = 8 A, L = 0.25 m, θ = 90°, so sin θ = 1.

**Step 2.** Compute.

- F = B I L sin θ = 0.4 × 8 × 0.25 × 1 = **0.8 N**, perpendicular to the plane containing I and B.

**Step 3.** Direction by Fleming's left-hand rule: first finger along B, second along I, thumb gives force.

> ⚠️ **Examiner Trap:** Candidates write F = B I L and ignore the angle; marks are lost when θ ≠ 90°. Always insert sin θ even if you evaluate it as 1.

#### The electric bell and the relay

Both depend on a make-and-break contact driven by an electromagnet. In the bell, the armature is pulled toward the core, breaking the circuit; a spring restores it; the cycle makes the striker hit the gong about 50 times a second. In the relay, the same pull closes (or opens) a separate circuit carrying a much larger current — useful when a weak control signal must switch a heavy load.

---

### 🔴 Extended — Deep Study (3mo+)
> Edge cases, mathematical limits, and exam traps beyond the textbook.

#### When sin θ hides in the question

θ is the angle between the conductor and the field, **not** the angle between the conductor and the page. A wire drawn along the field direction (θ = 0) feels **zero** force even at high current — a common NECO essay trap. The force peaks at θ = 90°.

#### Boundaries you must respect

- B in F = B I L is the **external** field. The field produced by the wire itself does not count toward the force on that wire.
- For a solenoid, B = μ₀ n I is valid only on the axis at the centre and away from the ends; near the pole faces the field bows outward and n I underestimates it.
- μ₀ = 4π × 10⁻⁷ T m/A is exact by definition since 2019 (SI redefinition); use this constant verbatim.

#### Non-uniform fields and the Hall effect

Inside a solenoid B is roughly uniform; between the poles of a horseshoe magnet it is nearly uniform; near a single bar-pole it falls off roughly as 1/r². When a current-carrying strip lies in a perpendicular field, charges crowd one edge — measurable as the Hall voltage V_H = I B / (n q t), the principle behind Hall-effect sensors. NECO rarely tests the formula directly, but the qualitative explanation ("carriers deflect to one side") appears in Section B.

#### Adjacent-topic links

- Electromagnetic induction (Faraday's law) sits one chapter ahead and re-uses Φ = B A cos θ.
- The DC motor re-uses F = B I L for every armature conductor — the torque on a coil is T = B I A N sin φ.
- The cyclotron and mass spectrometer apply F = q v B for moving charges in uniform fields.

#### Advanced traps and edge cases

1. Choosing the wrong hand rule because the question hides the words "induced" or "force" — scan the stem for "induced current" vs "force on a conductor".
2. Mixing up tesla and weber/m² — write the unit symbol that the formula gives, not the one you remember.
3. Drawing field lines that cross inside the gap between two like poles — they repel and never cross.
4. Treating relative permeability as a fixed number; it depends on the iron grade and the magnetising current.
5. Forgetting that the solenoid's north pole is at the end where current flows **anticlockwise** when viewed from that end (right-hand grip).

#### Two practice prompts

1. A coil of 200 turns, area 5 × 10⁻³ m², sits perpendicular to a uniform field of 0.6 T. Calculate the flux through the coil and the flux linkage.
2. Explain, with a labelled diagram, why a relay can switch a 10 A motor using a control current of 0.05 A, naming the energy transfer involved.

---

## Continue your study

- **[View this topic in your NECO SSCE roadmap](/roadmap/?exam=neco&duration=1mo)** — see where "Magnetic Fields and Electromagnets" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neco&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NECO SSCE exam overview](/exams/neco/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/neco/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
