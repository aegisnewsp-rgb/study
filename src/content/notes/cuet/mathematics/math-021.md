---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-021
topicName: Differential Equations
weight: 3
country: india
generated: "2026-03-29T05:06:34"
lastUpdated: "2026-07-15"
---

# Differential Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Definition:** An equation linking a function y = f(x), the independent variable x, and one or more derivatives of y.
- **Order** = highest order derivative present; **degree** = exponent of that derivative (after clearing fractions, polynomial form only).
- **General solution** contains *n* arbitrary constants for an *n*th-order DE; a **particular solution** fixes those constants using initial/boundary conditions.
- **Variable separation** is the first method to try: write dy/dx = f(x)·g(y), then integrate both sides after separation.
- **Linear first-order DE:** dy/dx + P(x)y = Q(x); integrating factor = e^(∫P dx).

> **CUET trap:** A question asking for the *general* solution must include the constant of integration + C — answers without it lose the mark.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Vocabulary

| Term | Meaning |
|---|---|
| Order | Highest derivative in the equation (1st, 2nd, 3rd, …) |
| Degree | Power of the highest-order derivative, defined only when it is polynomial |
| General solution | Contains *n* arbitrary constants for an *n*th-order DE |
| Particular solution | Constants evaluated from given conditions |
| IVP | Initial value problem — DE plus y(x₀) = y₀ conditions |

#### Solving by Variable Separation

When dy/dx can be rewritten as f(x)·g(y), move all y-terms to one side:

∫ [1/g(y)] dy = ∫ f(x) dx + C

This works for forms like dy/dx = x²y, dy/dx = (1+y²)/(1+x²), and population-growth models.

#### Homogeneous Equations

A DE M dx + N dy = 0 is **homogeneous** if M and N are homogeneous functions of the *same* degree in x and y. Substitute **y = vx**, so dy/dx = v + x(dv/dx), then separate variables in v and x. After integration, replace v = y/x to obtain the solution in original variables.

#### First-Order Linear DE

Standard form: dy/dx + P(x)y = Q(x).

Multiply both sides by the integrating factor **I.F. = e^(∫P dx)**:

y · e^(∫P dx) = ∫ Q · e^(∫P dx) dx + C

#### Typical CUET MCQ Patterns

- Identify order and degree of a given equation (mind non-polynomial forms).
- Form a DE by eliminating one or two arbitrary constants from y = f(x, C₁, C₂).
- Match an equation to its solution family.
- Choose the correct integrating factor e^(∫P dx), not e^(∫Q dx).
- Apply a given initial condition to convert general to particular solution.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Bernoulli and Exact Equations

**Bernoulli form:** dy/dx + P(x)y = Q(x)·yⁿ with n ≠ 0, 1. Divide by yⁿ, let v = y^(1−n). The transformed equation dv/dx + (1−n)P·v = (1−n)Q is linear in v and solved by the integrating-factor method.

**Exact equations:** M dx + N dy = 0 is exact when ∂M/∂y = ∂N/∂x. The solution is reconstructed as ∫ M dx + ∫(terms of N free of x) dy = C. If the equation is not exact, search for an integrating factor depending on x only or y only using the standard test ratios (M_y − N_x)/N and (N_x − M_y)/M.

#### Higher-Order Linear DEs with Constant Coefficients

For (Dⁿ + a₁Dⁿ⁻¹ + … + aₙ)y = f(x), write **y = y_c + y_p**:

- **Complementary function y_c** comes from the auxiliary equation mⁿ + a₁mⁿ⁻¹ + … = 0.
- **Particular integral y_p** uses the operator method: y_p = 1/f(D) · f(x), with standard replacements 1/(D−a) = e^(ax) ∫ e^(−ax)(·) dx for cases where f(a) = 0.

#### Common Mistakes in CUET UG

- Treating **degree as defined for non-polynomial derivatives** — it is not; clear fractions first.
- Losing the constant of integration after the final step.
- Applying y = vx to equations that are *not* homogeneous (M, N of different total degrees).
- Writing I.F. = e^(∫Q dx) instead of e^(∫P dx).

#### Worked Micro-Example

Solve dy/dx + y tan x = sin x with y(0) = 0.

Here P = tan x, so I.F. = e^(∫tan x dx) = sec x. Multiplying:

d/dx (y sec x) = sin x · sec x = tan x

Integrate: y sec x = −ln|cos x| + C. With y(0) = 0: 0 = −ln 1 + C ⇒ C = 0. So **y = −cos x · ln(cos x)**.

#### Practice Prompts

1. Find the order and degree of (d³y/dx³)^(1/2) + (d²y/dx²)³ + y = 0 after rationalising.
2. Solve dy/dx = (x + y)/(x − y) and identify whether it is homogeneous; find the curve passing through (1, 1).

---

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Differential Equations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
