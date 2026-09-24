---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-008
topicName: Integration
weight: 5
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Integration — A-Level Mathematics (AQA 7357) Notes

Integration is section H of the AQA 7357 specification. The section covers definite and indefinite integration, area under a curve and between curves, integration by substitution and by parts, volumes of revolution, and the trapezium rule as an approximation. Integration is the reverse of differentiation, but it is a much harder skill in practice because the answer is not unique — many different functions can have the same derivative, and a particular integral can usually be tackled by more than one method. The two habits that pay off most are: check the derivative of your answer, and look for the substitution that would make the integrand a single function before you start.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### The reverse-power rule

∫ x^n dx = x^(n+1)/(n+1) + c, provided n ≠ −1.

For n = −1: ∫ (1/x) dx = ln |x| + c.

The constant of integration c is mandatory for indefinite integrals and is what makes the answer non-unique (any antiderivative differs by a constant).

#### Definite integrals

∫ (a to b) f(x) dx = F(b) − F(a), where F is any antiderivative of f. The constant of integration cancels in definite integrals, so c is not needed.

#### Two key antiderivatives

- ∫ e^x dx = e^x + c.
- ∫ (1/x) dx = ln |x| + c.

#### The trapezium rule

Approximate ∫ (a to b) f(x) dx by splitting [a, b] into n strips of width h = (b − a)/n and summing:

∫ ≈ h/2 · [f(x₀) + 2(f(x₁) + f(x₂) + … + f(x_{n−1})) + f(x_n)].

The trapezium rule overestimates convex-up curves and underestimates convex-down curves. More strips means a better approximation, but the work scales linearly with n.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Indefinite integration

The reverse-power rule plus the sum rule plus the constant-multiple rule is enough for most A-level integrals:

∫ (3x² + 2x − 5) dx = x³ + x² − 5x + c.

The constant of integration must be present. Without it, the answer is incomplete and loses a mark.

**Worked example.** ∫ (2/x) dx = 2 ln |x| + c. (Use n = −1 rule for the 1/x term.)

**Worked example.** ∫ (e^(3x) − cos x) dx = (1/3) e^(3x) − sin x + c.

#### Integration by substitution

The technique: choose u to be a function of x that simplifies the integrand when substituted. Then du/dx = something nice, and dx = du / (something nice). Convert the integral to one in u, integrate, substitute back.

**Worked example.** ∫ 2x (x² + 1)⁵ dx.

Let u = x² + 1, then du/dx = 2x, dx = du/(2x). Integral becomes ∫ 2x · u⁵ · du/(2x) = ∫ u⁵ du = u⁶/6 + c = (x² + 1)⁶/6 + c.

**Worked example.** ∫ sin x · cos x dx.

Let u = sin x, du/dx = cos x, dx = du/cos x. Integral becomes ∫ u · du = u²/2 + c = sin²x / 2 + c. (Verify: d/dx (sin²x/2) = sin x · cos x ✓.)

#### Integration by parts

For ∫ u · dv/dx dx, use:

∫ u · dv/dx dx = u · v − ∫ v · du/dx dx.

The mnemonic is "uv minus integral of vu prime". Choose u as the function whose derivative is simpler (so du is simpler), and let dv/dx be the function you can integrate directly.

**Worked example.** ∫ x e^x dx.

u = x, du/dx = 1, dv/dx = e^x, v = e^x. ∫ x e^x dx = x · e^x − ∫ e^x dx = x e^x − e^x + c = e^x (x − 1) + c.

**Worked example.** ∫ x sin x dx.

u = x, du/dx = 1, dv/dx = sin x, v = −cos x. ∫ x sin x dx = −x cos x − ∫ −cos x dx = −x cos x + sin x + c.

**Worked example.** ∫ ln x dx.

u = ln x, du/dx = 1/x, dv/dx = 1, v = x. ∫ ln x dx = x ln x − ∫ x · (1/x) dx = x ln x − ∫ 1 dx = x ln x − x + c.

#### Area under a curve and between curves

For y = f(x) with f(x) ≥ 0 on [a, b]:

Area = ∫ (a to b) f(x) dx.

For two curves y = f(x) and y = g(x) with f(x) ≥ g(x) on [a, b]:

Area between = ∫ (a to b) [f(x) − g(x)] dx.

The area is positive when f(x) ≥ g(x). If the curves cross, split the integral at the crossing point and integrate with the upper function minus the lower function on each piece.

**Worked example.** Find the area enclosed by y = x² and y = x + 2.

Curves meet when x² = x + 2 → x² − x − 2 = 0 → (x − 2)(x + 1) = 0 → x = −1 or x = 2.

Between x = −1 and x = 2, y = x + 2 is above y = x².

Area = ∫ (−1 to 2) [(x + 2) − x²] dx = [x²/2 + 2x − x³/3] from −1 to 2 = (2 + 4 − 8/3) − (1/2 − 2 + 1/3) = (6 − 8/3) − (−3/2 + 1/3) = (18/3 − 8/3) − (−9/6 + 2/6) = 10/3 − (−7/6) = 10/3 + 7/6 = 20/6 + 7/6 = 27/6 = 9/2.

#### Volumes of revolution

Rotate y = f(x) around the x-axis from x = a to x = b. The volume is:

V = π ∫ (a to b) [f(x)]² dx.

Rotate around the y-axis from y = c to y = d where x = g(y): V = π ∫ (c to d) [g(y)]² dy.

**Worked example.** Find the volume when y = x is rotated around the x-axis from x = 0 to x = 3.

V = π ∫ (0 to 3) x² dx = π [x³/3] from 0 to 3 = π · 27/3 = 9π.

#### The trapezium rule in practice

To estimate ∫ (0 to 6) f(x) dx using 6 strips of width 1:

V = 1/2 · [f(0) + 2(f(1) + f(2) + f(3) + f(4) + f(5)) + f(6)].

If f(0) = 2, f(1) = 3, f(2) = 4, f(3) = 5, f(4) = 5.5, f(5) = 4, f(6) = 1, then:

V ≈ 0.5 · [2 + 2(3 + 4 + 5 + 5.5 + 4) + 1] = 0.5 · [2 + 2(21.5) + 1] = 0.5 · [2 + 43 + 1] = 0.5 · 46 = 23.

The trapezium rule is exact for linear functions and a reasonable approximation for smooth functions when the strip width is small.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why integration is harder than differentiation

Differentiation is mechanical: apply the rules, simplify. Integration is a search: pick a method, hope it works, and if not, try a different one. The four methods covered at A-level are:

- **Reverse-power / standard antiderivative**. Works when the integrand is a polynomial plus exponentials and trig.
- **Substitution**. Works when a derivative of part of the integrand appears elsewhere in the integrand.
- **By parts**. Works when the integrand is a product of two functions, one of which has a simple antiderivative.
- **Partial fractions**. Works when the integrand is a rational function whose denominator factorises.

The skill is recognising which to try first. The order is usually: standard, substitution, by parts, partial fractions. If the integral looks like f'(x)/f(x) (the integrand contains the derivative of something divided by that something), substitution is the natural first choice.

#### Worked pattern — definite integration by substitution

**Worked example.** Evaluate ∫ (0 to 2) x (x² + 1)³ dx.

Let u = x² + 1, du = 2x dx, so x dx = du/2. When x = 0, u = 1; when x = 2, u = 5.

∫ (1 to 5) (1/2) u³ du = (1/2) [u⁴/4] from 1 to 5 = (1/2)(625/4 − 1/4) = (1/2)(624/4) = 78.

#### Worked pattern — integration by parts twice

Some functions require integration by parts applied twice. The trick: after the first application, you end up with another integral that needs the same method.

**Worked example.** ∫ x² e^x dx.

u = x², du/dx = 2x, dv/dx = e^x, v = e^x. ∫ x² e^x dx = x² e^x − ∫ 2x e^x dx.

Now apply by parts to ∫ 2x e^x dx: u = 2x, du/dx = 2, dv/dx = e^x, v = e^x. ∫ 2x e^x dx = 2x e^x − ∫ 2 e^x dx = 2x e^x − 2 e^x.

So ∫ x² e^x dx = x² e^x − (2x e^x − 2 e^x) + c = e^x (x² − 2x + 2) + c.

#### Common misconceptions (and the correction)

- "Integration and differentiation are reverses of each other." They are inverse operations on functions (up to a constant), but the techniques are not symmetric — most differentiation rules are direct, but integration is a search.
- "The constant of integration is optional." For indefinite integrals it is mandatory. Without it, the answer is incomplete.
- "∫ (1/x) dx = ln x + c." It is ln |x| + c, because 1/x integrates to ln |x|, which works for both positive and negative x. (For x < 0, ln x is undefined; ln |x| is defined.)
- "The trapezium rule is exact." It is exact for linear functions; for others it is an approximation that improves as the strip width shrinks.

#### Specification reference

Section H of the AQA A-level Mathematics 7357 specification appears on Paper 1 (pure content) and feeds into the kinematics work on displacement, velocity and acceleration (sections P and Q). Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*