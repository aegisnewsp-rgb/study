---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-009
topicName: "Coordinate Geometry and the Geometry of Triangles"
weight: 4
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
diagramPrompt: "Educational diagram showing two triangles used in the ambiguous case for the sine rule — a fixed angle with two possible opposite sides — and the resolution of the ambiguity using the cosine rule, white background, exam-style illustration"
---

# Coordinate Geometry and the Geometry of Triangles — Leaving Certificate (Established) Mathematics Notes

Sections 2.3 and 2.4 are two separate toolkits that the exam likes to combine. Coordinate geometry turns shapes into algebra: once you have equations, intersection, distance and area become arithmetic. The geometry of triangles turns algebra back into lengths and angles when Pythagoras will not reach — the sine rule, the cosine rule and the area formula. A large share of the section questions in this block start as a diagram, become an equation system, and end with an angle.

## Coordinate geometry

**Gradient** between two points: (*y*₂ − *y*₁) ÷ (*x*₂ − *x*₁). Slope as well as gradient is used in Irish papers; same number.

**Equation of a line.** Point–slope form is *y* − *y*₁ = *m*(*x* − *x*₁); general form is *Ax* + *By* + *C* = 0. Choose based on the marks available.

**Parallel and perpendicular.** Lines are parallel if their gradients are equal. Perpendicular if the product of the gradients is −1 — the only case where the same rule does not simply mean "equal".

**Distance** between two points: √[(*x*₂ − *x*₁*)² + (*y*₂ − *y*₁*)²]. In the exam, name the two points and the formula before substituting.

**Midpoint** is the average of the coordinates. Perpendicular bisector of a line segment passes through the midpoint and has gradient equal to the negative reciprocal of the segment's gradient.

**Area of a triangle from coordinates** is *½* × base × perpendicular height, where the height is the *vertical* distance to the base. Take the base as horizontal when the diagram allows — it removes a step and a sign error.

**Intersections.** Solve the two equations simultaneously: by substitution or by elimination. Then *state the coordinates* and, if asked, what they mean in the diagram — which the question usually does, since the point of finding it is to know what it represents.

**Circles.** General form (*x* − *h*)² + (*y* − *k*)² = *r*², with centre (*h*, *k*) and radius *r*. A point on a circle satisfies the equation; a point outside does not. Intersection of a line and a circle gives a quadratic; the number of real solutions is the number of intersection points.

## Solving triangles: knowing when Pythagoras fails

Pythagoras requires a right angle. The moment there is not one, you need the rules.

**Sine rule.** *a* ÷ sin *A* = *b* ÷ sin *B* = *c* ÷ sin *C*. Use it when you have one angle and its opposite side, and you need any second quantity.

**Cosine rule.** *a*² = *b*² + *c*² − 2*bc* cos *A*. Rearranged for a side, it is *a* = √[*b*² + *c*² − 2*bc* cos *A*]. Use it to find an angle when you know all three sides, or to find a side when you know the included angle. Note it reduces to Pythagoras when *A* = 90°, since cos 90° = 0.

**Area formula.** Area = ½ *ab* sin *C*. This is the bridge between the two rules: when you know two sides and the included angle, the area is *½ab* sin *C*, and dividing by ½*bc* sin *A* recovers the sine rule.

## The ambiguous case

This is where the sine rule earns its reputation. Given two sides and a **non-included** angle, there may be two triangles that satisfy the data — one acute, one obtuse. The diagram will show you which one is wanted.

The rule: if the angle known is the larger of the two given angles, or if the side opposite it is the longer of the two given sides, there is only one solution. Otherwise, compute sin of the unknown angle, and if the acute value and its supplement both fall inside the triangle, both are geometrically possible. Decide from the diagram, and say which one you have chosen.

Omitting the second solution loses marks even when the first is right, because the question expects both unless the diagram rules one out.

## Higher-level extensions

**Section formula** for a point dividing a line in a given ratio — internal and external.

**Intersection of chords and tangents**: for two chords of a circle intersecting at a point *P*, the product of the segments of one equals the product of the segments of the other. The tangent–secant version replaces one chord with a tangent length.

**Complex plane / vectors** are strand 2 extensions at Higher level and appear with the geometry of triangles: a rotation on a complex plane is multiplication by a complex number, and the modulus and argument of that number give the scale factor and the angle turned.

## Frequent errors

1. **Negative reciprocal.** Perpendicular gradients multiply to −1; a gradient of ½ gives a perpendicular of −2, not 2.
2. **Area with a slanted base.** The perpendicular height is not the length of another side unless it is at right angles to the base.
3. **Sine rule in the ambiguous case** answered with one solution and no acknowledgement of the other.
4. **Cosine rule angle sign.** The −2*bc* cos *A* term must be subtracted, and cos of an obtuse angle is negative, which *adds*. Sign errors here are systematic.
5. **Degrees and radians** mixed in the calculator. Set the mode and stay in it.

## Self-check

1. Two points have gradients 3 and 3. Are the lines parallel, perpendicular or neither guaranteed? *(Parallel, provided they are distinct lines. Perpendicular would require the product to be −1, and here it is 9.)*
2. You know two sides and the angle *between* them. Which rule, and why not the sine rule? *(The cosine rule. The sine rule needs an angle and its opposite side, and the included angle has no opposite side among the givens. The cosine rule handles the included angle directly and will not give an ambiguous answer.)*
3. A triangle has sides 4, 6 and 8. Why is the cosine rule the only option? *(No right angle is present, so Pythagoras does not apply, and there is no single known angle paired with its opposite side, so the sine rule is unavailable. The cosine rule works from three sides alone.)*
4. Compute sin *B* = 0.5 from a two-side, non-included-angle problem. What happens next? *(*B* could be 30° or 150°. Both satisfy sin *B* = 0.5, and whether both form a triangle with the given sides is the ambiguity question. You must produce both candidates unless the diagram rules one out.)*
5. A circle equation is (*x* − 3*)² + (*y* + 2*)² = 25. Where is the centre and what is the radius? *(Centre (3, −2) — note the sign change on the *y* term, which is the common error — and radius 5, not 25.)*

## Sources

- NCCA Leaving Certificate Mathematics syllabus, examination from 2015 (sections 2.3–2.4): https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
- NCCA Leaving Certificate Mathematics syllabus landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/

Confirm which levels assess each sub-section on the current papers before you weight your revision time.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "Coordinate Geometry and the Geometry of Triangles" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject