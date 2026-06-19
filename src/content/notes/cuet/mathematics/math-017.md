---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-017
topicName: Limits
weight: 3
country: india
generated: "2026-03-29T05:06:06"
lastUpdated: "2026-06-19"
---

# Limits

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The **limit of a function** f(x) as x approaches a is the unique value L that f(x) gets arbitrarily close to, written **lim(x→a) f(x) = L**. A limit exists **only when the left-hand limit (LHL) equals the right-hand limit (RHL)** at the point in question. The two **standard trigonometric limits** every CUET UG student must memorise are **lim(x→0) sin(x)/x = 1** and **lim(x→0) (1 − cos x)/x = 0**, plus the exponential standard **lim(x→0) (1 + x)^(1/x) = e**. When direct substitution yields **0/0**, **∞/∞**, **1^∞**, or **0^0**, the form is indeterminate and needs algebraic manipulation (factorisation, rationalisation) or **L'Hôpital's rule** (differentiate numerator and denominator separately). High-yield CUET pointers: (1) For rational functions in x→a form, factorise to cancel the (x − a) term before substituting; (2) confirm LHL = RHL for **piecewise functions**; (3) x in limit expressions is in **radians**, never degrees.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and Existence
Formally, **lim(x→a) f(x) = L** means: for every ε > 0 there exists a δ > 0 such that |f(x) − L| < ε whenever 0 < |x − a| < δ (the **ε–δ definition**). A limit is said to exist at x = a only when **LHL = lim(x→a⁻) f(x)** equals **RHL = lim(x→a⁺) f(x)**. The actual value f(a) is irrelevant for the limit's existence — removable discontinuities are a classic illustration.

#### Algebra of Limits
If lim(x→a) f(x) = L and lim(x→a) g(x) = M with M ≠ 0 for division, then:
- **Sum/Difference:** lim [f(x) ± g(x)] = L ± M
- **Product:** lim [f(x) · g(x)] = L · M
- **Quotient:** lim [f(x)/g(x)] = L/M
- **Scalar multiple:** lim [k · f(x)] = kL

These rules break down when the resulting form is **indeterminate**: 0/0, ∞/∞, ∞ − ∞, 0·∞, 1^∞, 0^0, ∞^0.

#### Standard Limits (Memorise)
| Limit | Value |
|---|---|
| lim(x→0) sin x / x | 1 |
| lim(x→0) (1 − cos x) / x | 0 |
| lim(x→0) (1 − cos x) / x² | 1/2 |
| lim(x→0) tan x / x | 1 |
| lim(x→0) (1 + x)^(1/x) | e |
| lim(x→±∞) (1 + a/x)^x | e^a |
| lim(x→∞) (1 + 1/n)^n | e |

#### Evaluation Techniques
1. **Direct substitution** — works only when f(a) is defined and the form is not indeterminate.
2. **Factorisation** — for 0/0 rational functions, factor out (x − a) and cancel before substituting.
3. **Rationalisation** — multiply numerator and denominator by the conjugate to remove square roots.
4. **Substitution method** — let t = g(x) so the expression reduces to a standard limit.
5. **L'Hôpital's rule** — for 0/0 or ∞/∞, lim f(x)/g(x) = lim f'(x)/g'(x), provided the latter exists. Apply only to true indeterminate forms.
6. **Series expansion** — replace sin x, cos x, e^x, ln(1+x) by their Maclaurin equivalents near x = 0.

#### Continuity Link
f is continuous at x = a iff **f(a) is defined**, **lim(x→a) f(x) exists**, and **lim(x→a) f(x) = f(a)**. This three-part check is a common CUET MCQ trap: a function may have a finite limit yet fail continuity if f(a) is undefined or differs from L.

#### CUET Question Patterns
Expect 2–3 MCQs worth 5 marks each, typically: evaluating a rational limit (factorise and substitute), computing a standard trigonometric limit after a substitution, applying L'Hôpital's once, or testing LHL = RHL on a piecewise function.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Subtle Behaviours
**Limits of oscillatory functions** like lim(x→0) sin(1/x) do **not** exist because the function oscillates between −1 and +1 without settling — a frequent trap that students wrongly resolve to 0. Similarly, lim(x→0) x·sin(1/x) = 0 because the bounded factor sin(1/x) gets squeezed by the vanishing factor x (**sandwich/squeeze theorem**: if g(x) ≤ f(x) ≤ h(x) and both g, h tend to L, then f tends to L). Limits at infinity describe **end behaviour** and identify **horizontal asymptotes**: lim(x→∞) f(x) = L means y = L is the asymptote.

#### Indeterminate Form Resolutions
- **0/0 rationals** → factor and cancel.
- **∞/∞** → divide numerator and denominator by the highest power of x, or apply L'Hôpital.
- **∞ − ∞** → combine over a common denominator or use algebraic identities (e.g., conjugate multiplication).
- **1^∞** → rewrite as lim [1 + (f(x) − 1)]^(1/(f(x)−1))^(f(x)−1) and apply lim(1 + u)^(1/u) = e; the exponent collapses to lim(f(x) − 1)·g(x), giving **e^L**.
- **0^0, ∞^0** → take logarithms: let y = f(x)^g(x), then ln y = g(x)·ln f(x); evaluate the resulting 0·∞ or ∞·0 form.

#### Connection to Differentiation
The **derivative** is itself defined as a limit: **f'(a) = lim(h→0) [f(a + h) − f(a)] / h**. Hence every differentiation formula is ultimately justified by a limit argument, and many CUET UG problems in the Calculus section start by asking for the limit that *defines* a derivative, then asking for f'(a).

#### Common Mistakes to Avoid
- Confusing **lim(x→0) sin(x)/x = 1** (radians) with the degree-mode value **π/180 ≈ 0.01745** — CUET assumes radians.
- Applying **L'Hôpital's rule** to non-indeterminate forms like 0/1 or ∞/1, which yield 0 and ∞ directly.
- Forgetting to verify **LHL = RHL** for piecewise-defined functions such as f(x) = x for x < 1 and 2x − 1 for x ≥ 1, where both one-sided limits equal 1 but the function itself is continuous only at the matched value.
- Treating **∞ − ∞** as 0 instead of as an indeterminate form requiring algebraic rewriting.
- Dropping the exponent when using **lim(1 + a/x)^x = e^a**, mistakenly writing the limit as 1 instead of e^a.

#### Worked Example
Evaluate **lim(x→0) (sin 3x) / (sin 5x)**. Substitute t = 3x; then as x → 0, t → 0 and sin 5x = sin(5t/3). The expression becomes (sin t)/(sin(5t/3)) · 1 = (sin t / t) · (5t/3) / (sin(5t/3)) · 3/5 → 1 · 1 · 3/5 = **3/5**.

#### Practice Prompts
1. Evaluate lim(x→2) (x² − 4) / (x − 2) using factorisation, and state why the limit exists even though f(2) is undefined.
2. Compute lim(x→0) (e^(2x) − 1) / (sin 5x) by applying L'Hôpital's rule once and verify the answer using the standard limits table.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
