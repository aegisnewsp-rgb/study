---
exam: hsc-mathematics-advanced
examName: HSC Mathematics Advanced (NESA 2024)
subject: hsc-mathematics-advanced
subjectName: Mathematics Advanced
topic: hscmathadv-001
topicName: Functions
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Functions — HSC Mathematics Advanced (NESA 2024) Notes

Functions is the foundation of every other Area of Study in Mathematics Advanced. The HSC 2024 syllabus introduces functions in Year 11 (Working with Functions, Graph Transformations) and extends in Year 12 (Further Graph Transformations and Modelling). Functions appear in every HSC examination paper — in algebra, calculus, trigonometry, exponential and financial modelling questions.

> Re-check the live specification details and any in-year assessment changes on https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Definition.** A function f maps each element x of a domain D to a single value f(x) in a range R. Notation: f: D → R; for an input x, the output is f(x).
- **Domain and range.** Domain = set of allowed x; range = set of actual outputs. State domain and range in interval or set-builder form.
- **Function types.** Linear (degree 1), quadratic (degree 2), cubic (degree 3), reciprocal (f(x) = 1/x), square root (f(x) = √x), absolute value (f(x) = |x|), and others added in Year 12.
- **Transformations.** Translate by vector (a, b): replace x with x − a, then y with y − b. Vertical stretch/compression by factor k: replace y with y/k. Horizontal stretch/compression by factor k: replace x with x/k.
- **Inverse functions.** A function f has an inverse f⁻¹ on its domain only if it is one-to-one (passes the horizontal line test). The graph of f⁻¹ is the reflection of f in the line y = x.
- **Composition.** (f ∘ g)(x) = f(g(x)). The domain of f ∘ g is the set of x such that x is in the domain of g and g(x) is in the domain of f.

#### Examiner traps

- Forgetting to check whether a function is one-to-one before finding its inverse — a function that fails the horizontal line test has no inverse.
- Confusing horizontal and vertical translations: y = f(x − 3) shifts the graph 3 units right; y = f(x) − 3 shifts it 3 units down.
- Treating domain restrictions (e.g. f(x) = 1/(x−2)) as removable — x = 2 must be excluded from the domain.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Working with functions

A function is a rule that assigns each input in the domain exactly one output. Set-builder notation {x : x ∈ ℝ, x > 0} is the standard way to specify a domain. The range is the set of actual outputs; for f(x) = x² on ℝ the range is [0, ∞).

**Notation conventions.** f(a) is the value at x = a. f(x + h) means replace every x in the rule with x + h. f(2x) is not the same as 2f(x).

**Types to know.** Linear f(x) = mx + c; quadratic f(x) = ax² + bx + c; cubic f(x) = ax³ + bx² + cx + d; reciprocal f(x) = 1/x; absolute value f(x) = |x|.

#### Graph transformations

For a parent function y = f(x):

| Transformation | Effect on the rule |
|---|---|
| Translate right a | y = f(x − a) |
| Translate left a | y = f(x + a) |
| Translate up b | y = f(x) + b |
| Translate down b | y = f(x) − b |
| Vertical stretch (factor k) | y = k f(x) |
| Vertical compression (factor k) | y = (1/k) f(x) |
| Horizontal stretch (factor k) | y = f(x/k) |
| Reflection in x-axis | y = −f(x) |
| Reflection in y-axis | y = f(−x) |

The order of transformations matters. For y = 2f(x − 3) + 1, apply in order: shift right 3, vertical stretch by 2, shift up 1. Reversing the vertical stretch and the translation produces a different graph.

#### Inverse functions

A function is one-to-one (injective) if every y value has exactly one pre-image. The horizontal line test: if any horizontal line cuts the graph of f at more than one point, f is not one-to-one and has no inverse on its natural domain.

To find f⁻¹: replace f(x) with y, swap x and y, then solve for y. The graph of f⁻¹ is the reflection of the graph of f in the line y = x. f and f⁻¹ satisfy f(f⁻¹(x)) = x and f⁻¹(f(x)) = x.

For f(x) = 2x + 5: y = 2x + 5, swap to x = 2y + 5, solve y = (x − 5)/2. So f⁻¹(x) = (x − 5)/2.

#### Composition

(f ∘ g)(x) = f(g(x)) — apply g first, then f. To find the domain of f ∘ g, take the set of x for which x is in g's domain AND g(x) is in f's domain.

For f(x) = √x and g(x) = x − 4: (f ∘ g)(x) = √(x − 4), defined for x ≥ 4. (g ∘ f)(x) = √x − 4, defined for x ≥ 0. The two compositions are different functions.

#### Year 12 further transformations and modelling

Year 12 extends transformations to combinations of functions (sums, products, compositions) and to modelling using polynomial, exponential, trigonometric and reciprocal functions. Question types include: sketch a function given a description in words; find the equation of a translated graph passing through a given point; determine parameters from a graph.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Functions underpins every other Area of Study

- **Calculus** uses function notation throughout. The derivative of f at x is f'(x); the second derivative is f''(x). Chain rule: d/dx f(g(x)) = f'(g(x)) g'(x). Product rule, quotient rule and chain rule are written in function notation.
- **Trigonometric Functions** are a class of functions. y = a sin(bx + c) + d is a sine function with vertical stretch a, period 2π/b, phase shift −c/b, vertical shift d.
- **Exponential and Logarithmic Functions** are inverses of each other. The graph of y = log_a(x) is the reflection of y = a^x in the line y = x.
- **Statistical Analysis** uses linear functions for regression lines and transformations for normalising data.

#### Exam technique

- Always state the domain of a function explicitly unless the question implies it. A function without a stated domain has an implied domain of all real numbers for which the rule is defined.
- Sketch graphs using transformation rules, not by plotting points. The transformation approach is faster and more accurate.
- For inverse questions, check one-to-oneness FIRST. If a function is not one-to-one on its natural domain, restrict it before finding the inverse.
- For modelling questions, identify the parent function first (linear, quadratic, exponential, etc.), then apply transformations to match the data.

#### Common misconceptions (and the correction)

- "y = f(x) + 3 and y = f(x + 3) are the same translation." They are not. f(x) + 3 shifts the graph up 3 units; f(x + 3) shifts it left 3 units.
- "A horizontal stretch always makes the function wider." True only for k > 1 in y = f(x/k); for 0 < k < 1 it compresses horizontally.
- "Inverse functions always exist." Only if the original function is one-to-one.
- "The graph of f⁻¹ is the same as f shifted." No — it is reflected in y = x.

#### Specification reference

This Area of Study is assessed across all HSC Mathematics Advanced examination papers. Higher-tariff questions combine functions with calculus (finding stationary points, optimisation) or with exponential and trigonometric forms. Confirm the live assessment weighting and any tier-specific exclusions on curriculum.nsw.edu.au for the current specification before final revision.

---

*Last updated 2026-09-20. Source: NSW Mathematics Advanced 11–12 Syllabus (2024), https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview. Awarding body: NSW Education Standards Authority (NESA). Tier rules, calculator policy and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*