---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-1
topicName: Measurement
weight: 2
country: pakistan
generated: "2026-03-24T08:32:08.079227"
lastUpdated: "2026-06-25"
diagramPrompt: "Clean educational diagram showing Measurement with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Measurement

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Measurement** is the comparison of an unknown physical quantity with a fixed standard called a **unit**, written as **M = n × u**, where n is the numerical value and u is the unit. The SI system rests on **seven base quantities**: metre (length), kilogram (mass), second (time), ampere (electric current), kelvin (temperature), mole (amount of substance) and candela (luminous intensity); every other unit (newton, joule, pascal, watt) is **derived** from these. Two formulas decide most MCQs here: **Percentage error = (|measured − true|/true) × 100%**, and for a product z = x^a y^b the **maximum relative error is Δz/z = a(Δx/x) + b(Δy/y)**. **Least count** is the smallest readable increment: 0.01 cm for a vernier caliper (1 MSD − 1 VSD) and 0.01 mm for a micrometer screw gauge (pitch ÷ thimble divisions). Remember that **accuracy** = closeness to true value, **precision** = reproducibility of repeated readings. MDCAT asks ~2 MCQs from this chapter — expect a numerical on least count or percentage error.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Units and SI System
A **physical quantity** is anything measurable and is fully described by a **magnitude plus a unit**. The SI has seven **base units** (m, kg, s, A, K, mol, cd) from which all **derived units** are constructed by multiplication or division. For example, force (newton) = kg·m·s⁻², energy (joule) = kg·m²·s⁻², and pressure (pascal) = kg·m⁻¹·s⁻². Prefixes shift magnitudes in powers of ten: **kilo (10³), centi (10⁻²), milli (10⁻³), micro (10⁻⁶), nano (10⁻⁹), pico (10⁻¹²)**.

#### Dimensional Analysis
Every derived quantity has a **dimensional formula** in terms of M, L, T, I, Θ, N, J. The test of **dimensional homogeneity** says that an equation is physically meaningful only if both sides have the same dimensions. Dimensions can verify a formula or expose a wrong one, but they cannot capture dimensionless constants (2π, ½).

#### Significant Figures and Errors
**Significant figures** = all certain digits + one uncertain (estimated) digit. Leading zeros are never significant; trailing zeros after a decimal are. **Absolute error** Δa = |measured − true|; **mean absolute error** = Σ|xi − x̄|/n; **relative error** = Δa/a; **percentage error** = (Δa/a) × 100%. **Random errors** scatter readings around the true value and shrink with averaging; **systematic errors** shift all readings in one direction and require better calibration. Accuracy refers to the true value, precision to the spread among repeats.

#### Instruments — Least Count
The **vernier caliper** has least count = 1 MSD − 1 VSD, typically 0.01 cm. The **micrometer screw gauge** has least count = pitch / number of divisions on the thimble, typically 0.01 mm. Reading = main-scale reading + (coincident division × least count) ± zero error.

#### Typical MDCAT Patterns
MCQs test: percentage error in a product, least-count identification, zero-error sign convention, counting significant figures, and matching a derived unit to its dimensional form [M L T⁻²].

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Error Propagation — Full Rule Set
For a quantity **z = (xᵃ yᵇ)/wᶜ**, the maximum fractional error is
**Δz/z = |a|(Δx/x) + |b|(Δy/y) + |c|(Δw/w)** — every contribution is *added* (worst case). For sums or differences, absolute errors add: Δz = Δx + Δy. This is why instruments with the *smallest* fractional error dominate a chain measurement — never assume the largest absolute error matters most.

#### Worked Example
A quantity Y = (p² √q) / r³ is measured with relative errors 1% in p, 2% in q, and 3% in r. Maximum relative error in Y = 2(1%) + ½(2%) + 3(3%) = 2% + 1% + 9% = **12%**. The power on r dominates because it is cubed.

#### Edge Cases and Traps
- **Zero error**: positive if the zero of the vernier/thimble lies *beyond* the true zero; subtract it. Negative if it lies *before*; add it.
- **Precision ≠ accuracy**: a metre rule may give identical readings (high precision) that are all 2 mm off (low accuracy) due to a worn zero.
- **Dimensional analysis cannot** find pure numbers, so a derived relation may differ from the true law by a factor like ½ or 2π — a frequent MDCAT trap where students mark a dimensionally correct formula "wrong" because it lacks the constant.
- **Significant-figure rule for multiplication/division**: the answer keeps the *fewest* sig figs of any operand; for addition/subtraction it keeps the *fewest decimal places*.

#### Connections
Measurement feeds every later MDCAT topic — kinematics (m, s), dynamics (N, kg), waves (Hz, m), electricity (A, V, Ω), and modern physics (eV, nm). Mastering least counts and error arithmetic here pays off in practical-based MCQs across the paper.

#### Practice Prompts
1. The period of a pendulum is T = 2π√(L/g). If L has 0.2% error and g has 0.4% error, find the maximum percentage error in T.
2. A micrometer has a pitch of 0.5 mm and 50 thimble divisions. What is its least count, and what reading does it show when the main scale reads 4.5 mm with the 23rd thimble mark coinciding and a +0.03 mm zero error?

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
