---




exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-11
topicName: "Trigonometry: Sine and Cosine Rules"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.668648"
lastUpdated: "2026-07-24"
diagramPrompt: "Mathematical diagram showing Trigonometry: Sine and Cosine Rules concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Trigonometry: Sine and Cosine Rules

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The **Sine Rule** and **Cosine Rule** solve any triangle when standard right-angle trigonometry cannot be applied. The Sine Rule connects each side to the sine of its opposite angle, while the Cosine Rule extends Pythagoras to non-right triangles.

- **Sine Rule:** a/sin A = b/sin B = c/sin C = 2R
- **Cosine Rule:** c² = a² + b² − 2ab cos C
- Use Sine Rule for **AAS, ASA**, or **SSA** data; use Cosine Rule for **SAS** or **SSS**.
- For NECO SSCE, always state units (cm, m, km) and convert angles consistently.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### When to Use Each Rule

Pick the rule by matching the given data to its strongest case. The **Sine Rule** excels when two angles plus any side (AAS) or two sides plus a non-included angle (SSA) are known. The **Cosine Rule** is mandatory when three sides (SSS) or two sides with their included angle (SAS) are given. Mixing the two rules on the same triangle is normal: start with whichever rule is sufficient to unlock one unknown, then switch.

#### Formulae and Their Rearrangements

The Sine Rule also gives the triangle's **circumradius** because a/sin A = 2R. Rearranging the Cosine Rule produces cos C = (a² + b² − c²) / (2ab), the standard tool for finding an unknown angle from three known sides. A useful side-product is the **sine area formula**: Area = ½ab sin C.

#### Decision Table

| Given data | Rule to use | Working equation |
| --- | --- | --- |
| AAS or ASA | Sine Rule | a/sin A = b/sin B |
| SSA (two sides, one opposite angle) | Sine Rule | check ambiguous case |
| SAS (two sides, included angle) | Cosine Rule | c² = a² + b² − 2ab cos C |
| SSS (three sides) | Cosine Rule | cos C = (a² + b² − c²)/(2ab) |

#### NECO SSCE Pointers

- Always convert angles to the same mode as your calculator (degree mode unless radians are explicitly asked).
- In bearing problems, draw a clean diagram and label angles with respect to North before applying a rule.
- After finding two angles, compute the third as 180° minus their sum, then verify consistency with the given data.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### The Ambiguous SSA Case

When using the Sine Rule on **SSA** data, an acute angle from sin⁻¹(h) and its supplement (180° − h) may both produce valid triangles. The deciding factors are the length of the side opposite the known angle and the height h = (opposite side) × sin(known angle). If that side is shorter than h, no triangle exists; if it equals h, exactly one right triangle forms; if longer than h, two triangles may exist unless it also exceeds the adjacent given side.

#### Handling Obtuse Angles

For an obtuse angle, **cos** returns a negative value, which increases c² in the Cosine Rule. This means the side opposite an obtuse angle is longer than it would be in an acute configuration. When using the rearranged cosine formula, compute cos⁻¹ of the result; if the value is negative, the angle lies between 90° and 180°.

#### Worked Mini-Example

Triangle PQR: p = 7 cm, q = 9 cm, included angle R = 60°. Find r and angle P.

- r² = 7² + 9² − 2(7)(9) cos 60° = 49 + 81 − 63 = 67
- r = √67 ≈ 8.185 cm
- sin P / 7 = sin 60° / 8.185 → sin P ≈ 0.7408 → P ≈ 47.8°
- Q = 180° − 60° − 47.8° = 72.2°

| Quantity | Value (to 3 s.f.) |
| --- | --- |
| Side r (cm) | 8.19 |
| Angle P (°) | 47.8 |
| Angle Q (°) | 72.2 |
| Area (½·7·9·sin 60°) (cm²) | 27.3 |

#### Common Mistakes and Exam Strategy

1. Wiring the wrong angle to the wrong side in the Sine Rule — the angle must be opposite its named side.
2. Forgetting the ambiguous-case check when SSA is given.
3. Dropping the 2ab denominator when isolating cos C, producing an angle that is nonsense on paper.

#### Practice Prompts

1. In triangle ABC, a = 5 m, A = 30°, B = 70°. Find sides b and c, then the area.
2. Three sides of a triangle are 8 cm, 11 cm, and 14 cm. Compute the largest angle using the Cosine Rule.

## Continue your study

- **[View this topic in your NECO SSCE roadmap](/roadmap/?exam=neco&duration=1mo)** — see where "Trigonometry: Sine and Cosine Rules" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neco&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NECO SSCE exam overview](/exams/neco/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/neco/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
