---
exam: junior-cycle
examName: "Junior Cycle"
subject: jc-mathematics
subjectName: "Mathematics"
topic: jc-math-014
topicName: "Functions, Graphs and Calculus"
weight: 4
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
---

# Functions, Graphs and Calculus — Junior Cycle Mathematics Notes

A function is a machine with one input and exactly one output. Almost everything in this topic follows from that: what the domain and range are, what a graph looks like, what a composite does, and what the rate of change means at a point. The specification asks you to move between a mapping, a table, a graph and an equation, so treat those four as four views of one thing.

## Domain and range

**Domain** = the set of permitted inputs. **Range** = the set of outputs actually produced.

Three restrictions appear in the specification and each has a reason:

- **Division by zero** is undefined, so any *x* making the denominator zero is excluded from the domain. For 1/(*x* − 3), *x* = 3 is excluded.
- **Negative square roots** are not real, so any input making the radicand negative is excluded from the domain.
- **Logarithms** need a positive argument.

The *y*-intercept is *f*(0), when 0 is in the domain — and sometimes it is not, which is worth checking.

**Mapping diagrams** show domain on the left and range on the right with arrows. One input must have exactly one arrow; two arrows from the same input make it a relation, not a function.

## Graphs

**Linear:** *y* = *mx* + *c* — a straight line, gradient *m*, cutting the *y*-axis at *c*.

**Quadratic:** a parabola. Sketch from roots, the *y*-intercept and whether the leading coefficient is positive or negative.

**Cubic:** an S-shape, opposite end behaviour at each end, always at least one turning point.

**Exponential:** *y* = *a*^*x* passes through (0, 1) for any base, is never negative, and has a horizontal asymptote at *y* = 0. Increasing for *a* > 1, decreasing for 0 < *a* < 1.

**Logarithmic:** the inverse, with a vertical asymptote at *x* = 0 and passing through (1, 0).

**Transformations** apply in a fixed order, and the sign conventions differ between families in a way that is worth writing down once:

- *f*(*x*) + *q* shifts **up** by *q*; *f*(*x* − *p*) shifts **right** by *p*.
- For **exponentials**, *a*^(x−p) shifts right by *p*.
- For **logarithms**, logₐ(*x* − *p*) shifts right by *p*.

Where the exam tests it, the reasoning that works is: the bracket is zero at *x* = *p*, and that is where the shifted curve takes the original curve's starting value.

## Composite functions

*f*(*g*(*x*)) means apply *g* first, then apply *f* to the result. The order is not interchangeable — *f*∘*g* and *g*∘*f* are different functions, and there are pairs where one is defined and the other is not.

The domain of *f*∘*g* is the set of inputs where *g*'s output falls inside *f*'s domain. That is the check the exam asks for and it is where the marks are.

**Inverse functions.** *f*⁻¹ reverses *f*. A function has an inverse function only if it is one-to-one; a parabola does not, because two different inputs give the same output. The graph of an inverse is the reflection of the original in the line *y* = *x*. The domain and range swap.

## Rate of change from first principles

The idea the Junior Cycle course introduces before formal differentiation:

**Average rate of change** between *x* = *a* and *x* = *b* is (*f*(*b*) − *f*(*a*)) ÷ (*b* − *a*) — the gradient of the chord. On a graph, that is the gradient of the straight line joining the two points.

**Rate of change at a point** is the gradient of the tangent there — the limit of the average rate as *b* approaches *a*. The picture that makes it concrete: stand on a graph and move further along the chord until the two points collapse into one, and the chord becomes the tangent.

**From a curve**, the tangent at a point is steeper (or shallower) than the chord to a neighbouring point, so the rate at a point is not the average rate over an interval. Questions ask you to compare them and say which is larger — for an increasing convex curve, the rate at the later point is larger.

**Average speed** is distance ÷ time; **average velocity** is displacement ÷ time, and it is signed. If the question asks for velocity and the object is moving back the way it came, the answer is negative, and saying so is the mark.

## Connecting to calculus

At Higher level in the same strand, differentiation formalises the tangent gradient and integration formalises accumulated change. The reasoning is identical; only the notation changes. A candidate who is secure on "gradient of the tangent at this point" has already understood what a derivative is.

## Frequent errors

1. **Domain excluding a value that is not actually a problem.** Check whether the excluded value is real and in the range of the inner function before removing it.
2. **Reading a range from the axis** rather than from where the curve actually reaches.
3. **Assuming *f*∘*g* = *g*∘*f*.**
4. **Confusing average rate with rate at a point**, and quoting a chord gradient where a tangent is required.
5. **Forgetting the sign** on a velocity that is negative.
6. **Stating a range without the domain restriction** when the function has one — for example *f*(*x*) = √(*x* − 4) has domain *x* ≥ 4 and range *y* ≥ 0, not all reals.

## Self-check

1. State the domain and range of *f*(*x*) = *x*² − 4. *(Domain is all real *x*. Range is *y* ≥ −4, because the parabola has a minimum at (0, −4) and rises in both directions — reading the range off the graph rather than from the axis is what makes the difference.)*
2. What is wrong with a mapping where one input points to two outputs? *(It is a relation, not a function. A function assigns exactly one output to each input; that condition is the definition, so this is a naming error as much as a mathematical one.)*
3. A car's position function gives *s*(10) = 50 and *s*(20) = 30. What is the average velocity, and what does the sign mean? *((30 − 50)/(20 − 10) = −2 units per time. Negative because the position decreased — the displacement is opposite in direction to the axis. The average *speed* would be 2, which is a different question.)*
4. Why does *f*(*x*) = *x*² have no inverse function? *(Because it is not one-to-one: *f*(3) and *f*(−3) are both 9, so knowing the output does not determine the input. The inverse would be a relation with two values for one input, which is why its graph is a sideways parabola rather than a function.)*
5. A curve is rising and getting steeper. Compare the rate of change at the earlier and later points. *(The rate at the later point is greater. A steepening curve means the tangents are getting steeper, and rate of change is the gradient of the tangent — not the gradient of the chord to a fixed later point.)*

## Sources

- NCCA Junior Cycle Mathematics Specification (Algebra and Functions strand): https://curriculumonline.ie/getmedia/6a7f1ff5-9b9e-4d71-8e1f-6d4f932191db/JC_Mathematics_Specification.pdf
- Expectations for Students, by strand: https://www.curriculumonline.ie/junior-cycle/junior-cycle-subjects/mathematics/expectations-for-students/

Confirm the live assessment arrangements and any in-year specification changes on curriculumonline.ie before committing a revision plan.

## Continue your study

- **[View this topic in your Junior Cycle roadmap](/roadmap/?exam=junior-cycle&duration=1mo)** — see where "Functions, Graphs and Calculus" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=junior-cycle&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Junior Cycle exam overview](/exams/junior-cycle/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/junior-cycle/jc-mathematics/)** — browse sibling topics in this subject