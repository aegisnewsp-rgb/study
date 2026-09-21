---
exam: ncea-level-2
examName: NCEA Level 2 (Mathematics)
subject: mathematics-l2
subjectName: Mathematics
topic: mathl2-007
topicName: "Apply calculus methods in solving problems (91262)"
weight: 5
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply calculus methods in solving problems (91262) — NCEA Level 2 Mathematics Notes

Achievement Standard 91262 is the highest-credit external standard in NCEA Level 2 Mathematics, carrying 5 credits and assessed by end-of-year NZQA examination. The standard covers differentiation of polynomial, exponential and trigonometric functions, rates of change, tangent lines, maxima and minima, and an introduction to anti-differentiation. The calculus content here is the foundation for first-year university STEM and the prerequisite for Level 3 calculus standards 91578 (differentiation) and 91579 (integration).

> Verify the live assessment specification on https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91262-spc-2026.pdf before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **5 credits**, external NZQA examination at the end of Year 12. The highest-credit external standard in Level 2 Mathematics.
- Topics: differentiation of polynomial, exponential (e^x) and trigonometric (sin x, cos x) functions; rates of change; tangent lines; maxima and minima; anti-differentiation as the reverse of differentiation.
- **Merit** requires relational thinking — choosing the right method (graphical, algebraic, numerical) for a problem.
- **Excellence** requires extended abstract thinking — connecting differentiation to motion, optimisation, and the fundamental theorem of calculus.

#### Examiner traps

- Forgetting the chain rule when differentiating composite functions (e.g., sin(2x) needs the chain rule).
- Sign errors on the derivative of sin x (cos x) and cos x (−sin x).
- Confusing maxima and minima — the second derivative test disambiguates.
- Anti-differentiation errors: forgetting the constant of integration, misapplying the power rule in reverse.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Differentiation rules

**Power rule:** if y = x^n, then dy/dx = nx^(n−1).

**Constant multiple rule:** if y = a × f(x), then dy/dx = a × f'(x).

**Sum rule:** if y = f(x) + g(x), then dy/dx = f'(x) + g'(x).

**Chain rule:** if y = f(g(x)), then dy/dx = f'(g(x)) × g'(x).

**Derivatives of standard functions:**

- d/dx (sin x) = cos x
- d/dx (cos x) = −sin x
- d/dx (tan x) = sec² x
- d/dx (e^x) = e^x
- d/dx (ln x) = 1/x
- d/dx (a^x) = a^x × ln a

**Product rule:** d/dx (f × g) = f' × g + f × g'.

**Quotient rule:** d/dx (f / g) = (f' × g − f × g') / g².

#### Tangent lines

The tangent to y = f(x) at x = a has:

- Gradient: f'(a)
- Point: (a, f(a))
- Equation: y − f(a) = f'(a)(x − a)

#### Maxima and minima

To find critical points of y = f(x):

1. Find f'(x).
2. Set f'(x) = 0 and solve for x. These are the critical points.
3. Classify each critical point as a local max, local min, or inflection using:
   - The second derivative test: f''(a) > 0 means local min, f''(a) < 0 means local max, f''(a) = 0 means inconclusive (try the first derivative test).
   - The first derivative test: check the sign of f'(x) just before and just after the critical point. If f' changes from + to −, it's a max; from − to +, it's a min.

#### Rates of change

If s(t) is the position at time t, then:

- Velocity: v(t) = s'(t)
- Acceleration: a(t) = v'(t) = s''(t)

If V(r) is the volume of a sphere with radius r, then dV/dr = 4πr² is the rate of change of volume with respect to radius.

#### Anti-differentiation

Anti-differentiation is the reverse of differentiation. If dy/dx = f(x), then y = ∫ f(x) dx + C, where C is the constant of integration.

**Standard anti-derivatives:**

- ∫ x^n dx = x^(n+1)/(n+1) + C (for n ≠ −1)
- ∫ e^x dx = e^x + C
- ∫ sin x dx = −cos x + C
- ∫ cos x dx = sin x + C
- ∫ 1/x dx = ln|x| + C
- ∫ a^x dx = a^x/ln a + C

The constant of integration is included because differentiating y = x² + 5 and y = x² + 7 both give dy/dx = 2x; the constant is not determined by the derivative alone.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### The Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus connects differentiation and integration. It says: if F(x) = ∫_a^x f(t) dt, then F'(x) = f(x). So differentiation and integration are inverse operations.

In practical terms: if you want to find the area under y = f(x) from x = a to x = b, find an anti-derivative F(x) and compute F(b) − F(a).

#### Connected rates of change

A common Excellence problem: "A spherical balloon is being inflated so that its volume increases at 10 cm³/s. Find the rate of change of radius when r = 5 cm."

- V = (4/3)πr³
- dV/dt = 4πr² × dr/dt
- 10 = 4π(5)² × dr/dt = 100π × dr/dt
- dr/dt = 10/(100π) = 1/(10π) cm/s

The chain rule connects the rates of change of two related quantities.

#### Optimisation at Level 2

Optimisation problems at Level 2 follow a standard pattern:

1. Identify the quantity to optimise (often a length, area or volume).
2. Write the quantity as a function of one variable.
3. Differentiate and set the derivative to zero.
4. Solve for the critical point.
5. Check that the critical point is a max or min (usually by context).

Example: "Find the dimensions of a rectangle with perimeter 100 m that maximises the area." The constraint A = xy with 2x + 2y = 100 (so y = 50 − x). Then A = x(50 − x) = 50x − x², dA/dx = 50 − 2x = 0, x = 25, y = 25. The rectangle is a 25 × 25 square.

#### Common misconceptions (and the correction)

- "d/dx (sin x) = cos x." Yes; but d/dx (sin 2x) = 2 cos 2x (chain rule).
- "f'(a) = 0 means maximum." No — it could be minimum, inflection, or none of these; check with second derivative or sign test.
- "Anti-differentiation gives a unique answer." No — there are infinitely many anti-differentials, all differing by a constant.
- "The chain rule doesn't apply to standard functions." It applies to every composite function, including sin(kx), e^(kx), and (f(x))^n.

#### Specification reference

This achievement standard is externally assessed by NZQA at the end of the academic year. The current assessment specification (2026) is published on nzqa.govt.nz. Re-check the live assessment specification before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 2 Mathematics 91262 assessment specification 2026, https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91262-spc-2026.pdf. Awarding body: NZQA.*
