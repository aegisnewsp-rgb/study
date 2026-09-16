---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-17
topicName: Partial Fractions
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.072959"
lastUpdated: "2026-09-16"
diagramPrompt: "Mathematical diagram showing Partial Fractions concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Partial Fractions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Partial fraction decomposition rewrites a proper rational function P(x)/Q(x) as a sum of simpler fractions whose denominators are the linear and irreducible quadratic factors of Q(x). The technique is the gateway to integrating rational functions, since each piece integrates to a logarithm (linear factor) or arctan (irreducible quadratic).

- **Proper fraction rule:** deg P must be **strictly less** than deg Q; otherwise perform long division first to extract a polynomial plus a proper remainder.
- **Distinct linear factors** x − aᵢ give terms of the form A/(x − aᵢ); coefficients are dimensionless.
- **Repeated linear factor** (x − a)^k expands to A₁/(x−a) + A₂/(x−a)² + ⋯ + Aₖ/(x−a)^k.
- **Irreducible quadratic** ax² + bx + c (discriminant < 0) yields a numerator (Bx + C), where B has units of x⁻¹ and C is dimensionless.
- **Heaviside cover-up** finds a coefficient instantly: Aᵢ = (x − aᵢ)·P(x)/Q(x) evaluated at x = aᵢ, valid only for *distinct* linear factors.

> 💡 **High-Yield Memory Hook:** **"DividE First, FACtor Second, COVER for distinct lines, CLIMB for repeats."** Divide (long division) → Factor denominator → Cover-up (Heaviside) for simple linear roots → ClimB the tower (stack powers) for repeated factors.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Setting Up the Decomposition

The decomposition form depends entirely on the factorisation of Q(x). A valid setup is non-negotiable: every factor in Q(x) must appear on the right-hand side with an unknown numerator of appropriate degree.

| Factor in Q(x) | Partial fraction term | Numerator degree | Count of unknowns |
|---|---|---|---|
| (x − a), distinct | A/(x − a) | constant | 1 per factor |
| (x − a)^k, repeated | Σ Aᵢ/(x − a)ⁱ for i = 1…k | constant each | k per factor |
| ax² + bx + c, irreducible | (Bx + C)/(ax² + bx + c) | linear | 2 per factor |
| (ax² + bx + c)^k, repeated | Σ (Bᵢx + Cᵢ)/(ax² + bx + c)ⁱ for i = 1…k | linear each | 2k per factor |

The numerator degree rule: for a factor of degree n, the partial-fraction numerator has degree n − 1.

#### Solving for Coefficients

Two methods work in ECAT-style questions. **Equating coefficients** is universal but algebra-heavy: multiply through by Q(x), expand, then match coefficients of like powers of x. **Heaviside cover-up** is faster when each factor appears to the first power and is linear — substitute x equal to the root and the troublesome factor cancels, leaving the coefficient directly.

For irreducible quadratics and repeated factors, equate coefficients (or substitute two convenient x-values for quadratics).

#### Concept Comparison Matrix

| Feature | Heaviside Cover-Up | Equating Coefficients |
|---|---|---|
| Speed | One-line substitution | Multi-step expansion |
| Validity | Only distinct linear factors | Any factorisation |
| Risk | Silent failure on repeats/quadratics | Always works, just slower |
| ECAT use | Quick A, B, C extraction | Verify or solve quadratic cases |

| Mistake | What goes wrong | Correct approach |
|---|---|---|
| Skipping long division | Decomposing an improper fraction gives wrong identity | Divide P by Q first; decompose only the remainder |
| Missing a repeat term | Identity cannot hold near x = a | Include every power from 1 up to k |
| Cover-up on (x − a)² | Method silently returns A₁ only, A₂ stays unknown | Equate coefficients for repeated factors |
| Splitting x² + 1 | Discriminant is −4 < 0, no real roots | Keep (Bx + C)/(x² + 1) intact |

#### 🎯 Exam-Level Worked Problem

**Question:** Express (x² + 1)/[(x − 2)(x + 1)(x − 3)] in partial fractions and find the value of A corresponding to the factor (x − 2).

#### Solution:
Assume (x² + 1)/[(x − 2)(x + 1)(x − 3)] = A/(x − 2) + B/(x + 1) + C/(x − 3).

Cover-up for A: substitute x = 2.
A = (2² + 1)/[(2 + 1)(2 − 3)] = 5/[(3)(−1)] = −5/3.

Check by cover-up for B at x = −1:
B = ((−1)² + 1)/[(−1 − 2)((−1) − 3)] = 2/[−3 × −4] = 2/12 = 1/6.

Cover-up for C at x = 3:
C = (3² + 1)/[(3 − 2)(3 + 1)] = 10/[1 × 4] = 5/2.

Verify numerically at x = 0: LHS = 1/[−2 × 1 × −3] = 1/6. RHS = −5/(3·−2) + 1/6·1 + 5/2·−3 = 5/6 + 1/6 − 5/6 = 1/6 ✓.

> ⚠️ **Examiner Trap:** students often write A = (x − 2)·P(x)/Q(x) but forget to also cancel (x − 2) from Q(x) before substituting. The cover-up *requires* dividing out the factor being covered; plugging x = a into the un-cancelled expression produces garbage.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

The decomposition theorem assumes real coefficients and a denominator with no common factor between P(x) and Q(x). If gcd(P, Q) ≠ 1, cancel first. If Q(x) has a complex (non-real) root, its conjugate also appears as a root of Q(x) with real coefficients, so the pair combines into one irreducible quadratic factor — never split into two linear terms.

Numerical edge cases worth flagging:

1. **Repeated root at zero.** A factor of x² forces terms A/x + B/x²; cover-up fails for B because 0² is not defined. Equate coefficients or substitute two values instead.
2. **Quadratic with zero linear coefficient.** x² + a² still has discriminant −4a² < 0, so the numerator form is (Bx + C)/(x² + a²). The B/x term integrates cleanly; C/a² integrates to arctan(x/a).
3. **Higher-degree numerator than denominator.** Perform long division: e.g. (x³ + 1)/(x² + 1) = x − x/(x² + 1), then decompose the x/(x² + 1) piece.
4. **Repeated irreducible quadratic.** (x² + 1)² contributes (Bx + C)/(x² + 1) + (Dx + E)/(x² + 1)² — four unknowns for the tower.
5. **Mixed real-root cases.** When Q(x) factors as (x − a)(x − b)(x² + c), expect three unknowns A, B, and a single (Bx + C) pair for the quadratic — total four coefficients from one full decomposition.

#### Connection to Integration

Each partial fraction integrates in a pattern that makes the decomposition worth the algebra. For A/(x − a) dx, the antiderivative is A·ln|x − a| + k (units match A because ln is dimensionless). For (Bx + C)/(x² + bx + c) dx, complete the square in the denominator, split the numerator into the derivative of the denominator (gives ln) and a constant remainder (gives arctan). ECAT integration items often hinge on recognising which form produces which primitive.

#### Common ECAT-Specific Traps

- Setting (Bx + C) over an irreducible quadratic but writing only B (forgetting the C constant).
- Decomposing into "A/(x − a) + B/(x − b)" when the denominator also has a quadratic factor left unaccounted for.
- Multiplying through by Q(x) but then forgetting to expand the RHS fully before equating.

#### Advanced Practice Prompts

1. Decompose 1/[x(x − 1)(x − 2)] and use the result to evaluate ∫₀¹ 1/[x(x − 1)(x − 2)] dx without a calculator.
2. Set up (but do not solve) the full partial fraction form for (3x + 1)/[(x + 1)²(x² + 4)], listing every unknown introduced and the dimension of the system of equations you would solve.

> 💡 **High-Yield Revision Hook:** ECAT items under this 3% slice usually award full marks for the *form* alone when coefficients are messy. Write every term, count unknowns, then solve — never skip the form.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Partial Fractions" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
