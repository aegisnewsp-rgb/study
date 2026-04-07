---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-016
topicName: Functions
weight: 3
country: india
generated: "2026-03-29T05:05:57"
---
# Functions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision.

**Functions** — Key Facts for CUET
• **Core definition:** A **function** f: A → B assigns exactly one output f(x) ∈ B to each input x ∈ A. The **domain** is A; the **codomain** is B; the **range** is {f(x) : x ∈ A}.
• **Most tested concept:** Finding **domain** and **range** — remember to exclude values that make the denominator zero, the radicand negative, or the logarithm non-positive.
• **Common mistake:** Confusing **range** with **codomain** — codomain is the set of all possible outputs (stated), range is the actual set reached.
• **Key technique:** For **f(g(x))**, first find the domain of g, then ensure g(x) lies in the domain of f. The **horizontal line test** checks injectivity (one-to-one).
• **Important exception:** The **constant function** f(x) = c is both **even** and **odd only when c = 0**. A function can be neither even nor odd.
• **Most frequent question type:** Given f(x) = (expression), find its domain/range, or find f(g(x)) or f⁻¹(x) for inverse functions.
⚡ **Exam tip:** Before simplifying f(x), determine its domain restrictions first — otherwise you may include extraneous values that appear valid after simplification but are not.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Functions** — CUET Study Guide

A **function** f maps every element of the domain to exactly one element in the codomain. The **domain** is all permissible input values; the **range** is the set of actual outputs. For algebraic functions, factor numerator and denominator to cancel common factors — but note that cancellation does NOT restore excluded values that were originally prohibited.

**Key concepts and formulas:**
- **Even function:** f(−x) = f(x). **Odd function:** f(−x) = −f(x). Many functions are neither.
- **Periodic function:** f(x + T) = f(x) for all x; smallest positive T is the **period**. Example: sin x has period 2π.
- **Composite function:** (f ∘ g)(x) = f(g(x)). Domain of f ∘ g = {x in domain of g | g(x) in domain of f}.
- **Inverse function:** f⁻¹ exists iff f is **one-to-one** (injective). Condition: f(a) = f(b) ⇒ a = b.
- **Algebra of functions:** (f + g)(x) = f(x) + g(x); (fg)(x) = f(x) g(x); (f/g)(x) = f(x)/g(x) where g(x) ≠ 0.

**Common traps:**
- Assuming f(g(x)) = g(f(x)) — composition is not commutative.
- Forgetting that the **square-root function** returns the non-negative root: √(x²) = |x|, not x.
- Missing **restrictions** on logarithmic arguments: log g(x) defined only when g(x) > 0.

**Practice Numerical 1:** Find the domain of f(x) = √(x² − 4x + 3).
- The radicand must be ≥ 0: x² − 4x + 3 ≥ 0 → (x − 1)(x − 3) ≥ 0 → x ≤ 1 or x ≥ 3. Domain = (−∞, 1] ∪ [3, ∞).

**Practice Numerical 2:** If f(x) = 2x + 3 and g(x) = x² − 1, find (f ∘ g)(x) and its domain.
- (f ∘ g)(x) = f(g(x)) = 2(x² − 1) + 3 = 2x² + 1. Domain of g is ℝ; output g(x) = x² − 1 is always ≥ −1, which is in domain of f (all real). So domain of composite is ℝ.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer timeline.

**Functions** — Comprehensive CUET Notes

**Deeper theory and proof:**

*Injectivity proof using the definition:* To prove f is one-to-one, assume f(a) = f(b) and deduce a = b. Example: f(x) = ax + b (a ≠ 0). If f(a) = f(b) ⇒ a + b = c ⇒ a = b, so linear functions with non-zero slope are injective.

*Proving invertibility of specific functions:* f(x) = eˣ is strictly increasing on ℝ, so it is injective; its inverse is f⁻¹(x) = ln x. Similarly, f(x) = x³ is injective (monotonic), with inverse f⁻¹(x) = ∛x. However, f(x) = x² is not injective on ℝ (f(2) = f(−2) = 4), so it has no inverse on ℝ. Restrict to [0, ∞) to make it invertible.

*Intermediate Value Theorem (IVT) for continuity:* If f is continuous on [a, b] and f(a) and f(b) have opposite signs, then there exists at least one c ∈ (a, b) such that f(c) = 0. This is frequently used in problems about existence of roots and in proofs involving function behaviour.

*Advanced classification of functions:* 
- **Bounded:** sup |f(x)| < ∞. Example: sin x is bounded between −1 and 1.
- **Monotonic:** strictly increasing (a < b ⇒ f(a) < f(b)) or decreasing. Example: f(x) = 1/x is decreasing on (0, ∞) but not on (−∞, 0).
- **Periodic with fundamental period:** smallest positive T satisfying f(x + T) = f(x). Example: sin(2x) has period π, not 2π.

*Limit and continuity edge cases:* The function f(x) = (x² − 4)/(x − 2) simplifies to x + 2 for x ≠ 2, but at x = 2 the original expression is undefined (hole). The limit as x → 2 is 4, but f(2) is not defined. Always check domain before simplifying.

*Challenging solved example:* Let f(x) = { x² for x < 0; 2x + 1 for x ≥ 0 }. Find f⁻¹ if it exists.
- f is not one-to-one on ℝ because it is not monotonic across 0: For x < 0, f(x) = x² ≥ 0, so f(−1) = 1 and f(1) = 3 from the other branch. However, on [0, ∞), f(x) = 2x+1 is strictly increasing and maps [0, ∞) to [1, ∞). On (−∞, 0), f(x) = x² maps (−∞, 0) to (0, ∞). The two ranges overlap (0, 1), so f is not injective on ℝ and has no inverse globally. If restricted to [0, ∞), f⁻¹(y) = (y − 1)/2 for y ≥ 1.
