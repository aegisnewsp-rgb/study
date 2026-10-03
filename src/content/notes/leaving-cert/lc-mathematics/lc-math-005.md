---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-005
topicName: "Functions"
weight: 5
country: ireland
generated: "2026-09-26T11:20:00"
lastUpdated: "2026-09-26"
---

# Functions — Leaving Certificate (Established) Mathematics Notes

Functions is the second of the two strands at the highest weight in the Leaving Certificate Mathematics catalogue (weight 5 alongside Algebra). It carries the calculus — differentiation and integration — that distinguishes the Higher-level paper from the Ordinary-level paper and accounts for a substantial portion of the H1/H2 cohort's marks. The strand covers functions as mappings, the graphs of polynomial, exponential, logarithmic and trigonometric functions, transformations of functions, and the application of calculus to rates of change, maxima/minima and area. At Ordinary level the calculus is restricted to polynomial differentiation and integration; at Higher level it extends to exponential, logarithmic and trigonometric differentiation and integration, with second derivatives and related-rates-of-change problems appearing at the highest level.

What makes Functions the highest-leverage strand to revise is that it appears in some form in nearly every Higher-level question on either paper. A "rates of change" question is a differentiation question; an "area under the curve" question is an integration question; a "sketch the graph of f(x)" question is a function-graphing question. Candidates who are not fluent in calculus lose marks across the entire paper, not just in the dedicated calculus items. The implication for revision is the same as for Algebra: this strand's skills transfer across every other strand.

> Verify live paper patterns and specification details on curriculumonline.ie and examinations.ie before planning revision.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Strand weight & spread**: Weight 5/5 in the catalogue — joint largest. Marks are spread across both papers at Ordinary and Higher level; expect at least one differentiation item, one integration item and one graph-sketching item on each Higher-level paper.
- **Levels that include each sub-topic**: Linear, quadratic and simple polynomial functions appear at all three levels. Exponential, logarithmic and trigonometric functions, and the corresponding calculus, are Higher level only. Transformations of functions are Higher level. Confirm the live Ordinary-level specification on examinations.ie for whether any exponential or logarithmic content is currently included.
- **First move on any function question**: Identify the *family* of the function before applying calculus. Polynomial rules apply to polynomials; exponential rules apply to e^x and a^x; logarithmic rules apply to ln x and log x; trigonometric rules apply to sin x, cos x and tan x. Using the wrong family of rules is the most common error.
- **Differentiation rules**: polynomial rule (xn → nxn−1); chain rule (d/dx f(g(x)) = f'(g(x)) × g'(x)); product rule (d/dx uv = u'v + uv'); quotient rule (d/dx u/v = (u'v − uv')/v²). Each is one line once the family is identified.
- **Integration rules**: polynomial rule (∫ x^n dx = x^(n+1)/(n+1) + C); exponential rule (∫ e^x dx = e^x + C); trigonometric rules (∫ sin x dx = −cos x + C; ∫ cos x dx = sin x + C; ∫ sec² x dx = tan x + C).
- **Maxima and minima**: find f'(x), set to zero, solve for x, then use the second derivative test or a sign chart to classify. Higher-level candidates should also write the interpretation sentence stating what the maximum/minimum means in context.
- **Area under the curve**: ∫_a^b f(x) dx. Sketch the curve first, identify the bounded region, then integrate. If the curve crosses the x-axis between a and b, split the integral at the crossing.
- **Exponential and logarithmic functions (Higher)**: e^x and ln x are inverses. The exponential decay function A = P(1 − r)^t is a function in the same family as compound interest — the calculus extension connects the two.
- **Transformations (Higher)**: y = f(x) + k translates up by k; y = f(x + h) translates left by h; y = af(x) stretches vertically by factor a; y = f(bx) compresses horizontally by factor 1/b.

#### examiner traps

- Differentiating e^x as x × e^(x−1) — the derivative of e^x is e^x. The polynomial rule does not apply to exponential functions.
- Integrating 1/x as 1 (or as 0) — the integral of 1/x is ln|x| + C. The +C is essential; without it the answer is incomplete.
- Forgetting the chain rule when differentiating composite functions. The derivative of sin(2x) is 2 cos(2x), not cos(2x).
- Setting f'(x) = 0 without checking whether the resulting x is a maximum, minimum or neither. Candidates who skip the second derivative test or sign chart lose the classification mark.
- Computing the area between two curves without checking which curve is above the other across the integration interval. The integral ∫_a^b (top − bottom) dx must keep the sign correct.

#### 30-minute triage checklist

- [ ] Can you differentiate and integrate polynomial, exponential, logarithmic and trigonometric functions from memory, including the chain rule?
- [ ] Can you find the maximum or minimum of a function by setting f'(x) = 0 and using the second derivative test?
- [ ] Can you sketch the graph of y = f(x), y = f(x + h), y = af(x), and y = f(bx) from the graph of y = f(x)?
- [ ] Can you set up and solve a rates-of-change problem in context, including the interpretation sentence?

---

### 🟡 Standard — Structured Study (1d–1mo)

#### Differentiation in exam context

Differentiation at Leaving Certificate level tests four families of functions: polynomial, exponential, logarithmic and trigonometric. The polynomial rules are tested at both Ordinary and Higher levels; the exponential, logarithmic and trigonometric rules are Higher level only. Each family has a standard set of derivative formulas that the candidate must know from memory, plus the chain rule that handles composite functions.

A typical Higher-level differentiation question presents a function f(x) and asks the candidate to compute f'(x), then use it for one or more of: finding the slope of the tangent at a given point, finding the maximum or minimum, finding the rate of change at a given instant, or sketching the graph. The procedural skill is reliable; the navigation skill is recognising which of these four operations the question is asking for.

The chain rule at Higher level is tested in two variants: simple composite (sin(2x) → 2 cos(2x)) and nested composite (sin(x²) → 2x cos(x²)). The pattern is to multiply by the derivative of the inner function at every step. Candidates who forget this multiplication lose a mark per application.

#### Integration and the fundamental theorem

Integration at Leaving Certificate level is taught as the reverse of differentiation, with the constant of integration +C as the marker that the candidate understands the indefinite integral. The definite integral ∫_a^b f(x) dx is computed by finding the antiderivative F(x), then evaluating F(b) − F(a). The fundamental theorem of calculus links the two operations; the SEC exam tests both the procedural skill and the conceptual link.

A typical Higher-level integration question asks the candidate to find ∫ f(x) dx (indefinite) or ∫_a^b f(x) dx (definite). The procedural skill is to identify the family of the integrand, apply the corresponding rule, and add +C for the indefinite case. The conceptual skill is recognising that a definite integral computes the *signed* area under the curve — negative where the curve is below the x-axis.

#### Maxima, minima and curve sketching

Maxima and minima are tested through a single procedure that appears in nearly every Higher-level paper. Find f'(x); set f'(x) = 0; solve for x; substitute each solution into the original function f(x) to find the y-value; classify each as a maximum or minimum using the second derivative test or a sign chart of f'(x). The mark scheme awards marks for each step; candidates who skip the second derivative test or sign chart lose the classification mark.

Curve sketching at Higher level extends the function-graphing task beyond the quadratic. The candidate must sketch exponential functions (y = e^x, y = a^x), logarithmic functions (y = ln x, y = log x), and trigonometric functions (y = sin x, y = cos x) from memory, identifying key points (intercepts, asymptotes, turning points). The procedural skill is to know the *shape* of each curve; the interpretive skill is to label the key features.

#### Transformations and the graph of y = f(x)

Transformations at Higher level include translations (horizontal and vertical), reflections (in the x-axis and y-axis), and stretches/compressions (vertical and horizontal). Each transformation can be applied to any of the four function families, and the exam tests combinations: "sketch y = 2 sin x + 1" combines a vertical stretch with a vertical translation.

The procedural skill is to start with the base graph y = f(x), then apply each transformation in turn. The order matters: y = f(2x) compresses the graph horizontally; y = 2f(x) stretches it vertically. Candidates who confuse these two transformations lose the sketch mark.

---

### 🔴 Deep Dive — Full Mastery (1mo+)

#### Related rates of change (Higher)

Related rates of change at the highest level connect two or more variables through an equation, then ask the candidate to find the rate of change of one variable given the rate of change of another. A typical question: "A spherical balloon is being inflated at 10 cm³/s. Find the rate at which the radius is increasing when the radius is 5 cm." The candidate must (1) write the relation V = (4/3)πr³, (2) differentiate both sides with respect to time, (3) substitute the given values, (4) solve for dr/dt.

The procedural skill is differentiating an equation implicitly. The navigation skill is identifying which variable's rate of change is sought and which is given. The mark scheme gives marks for each step; candidates who skip the implicit differentiation lose the lead-in marks.

#### Area between two curves (Higher)

At the highest level, the area-between-two-curves question presents two functions f(x) and g(x) on an interval [a, b] and asks the candidate to find the enclosed area. The procedural skill is to identify which curve is above across the interval; the integration skill is ∫_a^b (top − bottom) dx. If the curves cross within the interval, the candidate must split the integral at the crossing.

A typical Higher-level question: "Find the area enclosed by y = x² and y = 2x − x² between their points of intersection." The candidate must (1) find the points of intersection by setting the functions equal, (2) determine which curve is above on each sub-interval, (3) integrate the difference. The mark scheme gives marks for each step; candidates who integrate without identifying the top and bottom lose the sign mark.

#### Calculus in the harder applied questions

The hardest Higher-level applied questions combine differentiation and integration with context: a population model using exponential decay, a cooling problem using Newton's law of cooling, an optimisation problem in geometry. Each requires the candidate to set up the equation, apply the calculus, and interpret the result. The procedural skill is the same as for the standard calculus items; the navigation skill is recognising which calculus operation is appropriate for each part of the question.

A common Higher-level item: "A rectangular garden is to be fenced on three sides using 60 m of fencing. Find the dimensions that maximise the area." The candidate must (1) define variables for the dimensions, (2) write the constraint equation, (3) express the area in terms of one variable, (4) differentiate and set to zero, (5) solve, (6) interpret the answer in context. Six marks for one question — candidates who skip the interpretation lose the final mark.

#### Common mistakes catalogue

1. **Differentiating e^x or ln x with the wrong rule**: the polynomial rule does not apply. The derivative of e^x is e^x; the derivative of ln x is 1/x.
2. **Forgetting +C in indefinite integrals**: the constant of integration is a marker that the candidate understands the indefinite integral. Without it, the answer is incomplete.
3. **Chain rule omission**: differentiating sin(2x) as cos(2x) instead of 2 cos(2x). The inner derivative must always be multiplied through.
4. **Maxima/minima classification**: finding x but not classifying it. The second derivative test or sign chart is essential; the question typically asks for "the maximum or minimum" and both must be identified.
5. **Area sign error**: integrating a function that is below the x-axis without flipping the sign. The definite integral computes *signed* area; the absolute area requires either |f(x)| or a split integral.

#### Long-run mastery schedule

A four-week pre-mock plan for Functions at Higher level:

- **Week 1**: Drill the four families of derivative and integral rules from memory. Aim for 20 functions differentiated and 20 integrated in a 30-minute session.
- **Week 2**: Work every past paper's maxima/minima question, then every past paper's curve-sketching question. Time each to 8 minutes.
- **Week 3**: Drill related rates and area-between-curves questions. Identify the relation, apply the calculus, and check the units. Then move to the optimisation items.
- **Week 4**: Mock-exam week. Solve three past papers under timed conditions; mark against the marking scheme; write the "errors I keep making" list; re-drill those errors specifically. Confirm the live paper pattern on examinations.ie — particularly whether related rates remains in the Higher-level specification.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "Functions" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject

