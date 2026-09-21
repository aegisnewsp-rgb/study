---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-005
topicName: "Apply the algebra of complex numbers in solving problems (91577)"
weight: 5
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply the algebra of complex numbers in solving problems (91577) — NCEA Level 3 Calculus Notes

Achievement Standard 91577 is one of six external NCEA Level 3 Calculus standards, carrying 5 credits. It tests complex numbers in rectangular and polar form, modulus and argument, arithmetic operations, De Moivre's theorem, and roots of complex numbers. The content is essential for first-year university engineering, physics, and pure mathematics courses.

> Verify the live assessment specification on https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91577-spc-2026.pdf before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **5 credits**, external NZQA examination at the end of Year 13.
- Topics: complex numbers in rectangular (a + bi) and polar (r cis θ) form; modulus and argument; arithmetic (add, subtract, multiply, divide); De Moivre's theorem; roots of complex numbers; geometric interpretation on the Argand diagram.
- **Merit** requires relational thinking — converting between forms, applying De Moivre's theorem to simplify calculations.
- **Excellence** requires extended abstract thinking — connecting algebraic and geometric representations, generalising to n-th roots.

#### Examiner traps

- Argument is measured counterclockwise from the positive real axis, in radians for Level 3 (or degrees — check the paper).
- Dividing complex numbers: multiply by the conjugate of the denominator.
- Roots: there are n distinct n-th roots of any non-zero complex number, equally spaced around a circle.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Rectangular form

A complex number z = a + bi, where a is the real part, b is the imaginary part, and i = √(−1).

The conjugate of z is z̄ = a − bi.

#### Polar form

z = r cis θ = r(cos θ + i sin θ), where r is the modulus and θ is the argument.

- Modulus r = √(a² + b²)
- Argument θ = arctan(b/a), with the correct quadrant.

Conversion from rectangular to polar: r cis θ.
Conversion from polar to rectangular: r cos θ + i r sin θ.

#### Arithmetic

**Addition and subtraction** — add or subtract real and imaginary parts separately.

(a + bi) + (c + di) = (a + c) + (b + d)i

**Multiplication** — use the distributive law, or convert to polar and multiply moduli and add arguments.

(a + bi)(c + di) = (ac − bd) + (ad + bc)i

**Division** — multiply by the conjugate of the denominator, or convert to polar and divide moduli and subtract arguments.

(a + bi) / (c + di) = (a + bi)(c − di) / (c² + d²)

#### De Moivre's theorem

For any complex number z = r cis θ and any positive integer n:

zⁿ = (r cis θ)ⁿ = rⁿ cis nθ

This generalises to negative and fractional powers:

z⁻ⁿ = 1/zⁿ = r⁻ⁿ cis (−nθ)
z^(1/n) = r^(1/n) cis (θ/n) — but there are n such roots, equally spaced.

#### Roots of complex numbers

The n-th roots of z = r cis θ are:

r^(1/n) cis ((θ + 360°k)/n) for k = 0, 1, …, n − 1

These are n points equally spaced on a circle of radius r^(1/n) centred at the origin.

#### Worked example

Find all cube roots of z = 8 cis 60°.

Modulus of each root = 8^(1/3) = 2.
Arguments: (60° + 360°k) / 3 for k = 0, 1, 2.
- k = 0: 20°
- k = 1: 140°
- k = 2: 260°

Three cube roots: 2 cis 20°, 2 cis 140°, 2 cis 260°.

#### The Argand diagram

The Argand diagram represents complex numbers as points in the plane, with the real part on the x-axis and the imaginary part on the y-axis.

Addition of complex numbers is vector addition.
Multiplication rotates and scales (multiplying by cis θ rotates by θ).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Connection to geometry

The exponential form z = re^(iθ) makes the connection between complex numbers and rotation explicit:

- Multiplying by e^(iθ) rotates by θ.
- Multiplying by r scales by r.

So z^n = r^n e^(inθ) describes a rotation by nθ and a scaling by r^n.

This is the foundation of phasors in electrical engineering, wave functions in quantum mechanics, and the geometry of the unit circle.

#### Roots of unity

The n-th roots of unity are the solutions to z^n = 1:

z = cis (360°k/n) for k = 0, 1, …, n − 1

These n points are equally spaced on the unit circle and form a regular n-gon. They are the vertices of the regular n-gon inscribed in the unit circle.

#### Solving equations with complex numbers

Quadratic equations with negative discriminants have complex roots. The quadratic formula still applies:

x = (−b ± √(b² − 4ac)) / (2a)

If b² − 4ac < 0, the square root is imaginary and the solutions are complex conjugates.

#### Common misconceptions (and the correction)

- "i = √(−1) is undefined." By convention, i² = −1, which is consistent with i = √(−1). The complex numbers extend the reals to include √(−1).
- "The argument is unique." It is unique up to multiples of 360°. The principal argument is usually in (−180°, 180°] or [0°, 360°).
- "zⁿ has n values." zⁿ has one value for each n; the n-th roots of z have n values.
- "Complex numbers are not real." The real numbers are a subset of the complex numbers (with imaginary part 0).

#### Specification reference

This achievement standard is externally assessed by NZQA at the end of the academic year. The current assessment specification (2026) is published on nzqa.govt.nz. Re-check the live assessment specification before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics 91577 assessment specification 2026, https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91577-spc-2026.pdf. Awarding body: NZQA.*
