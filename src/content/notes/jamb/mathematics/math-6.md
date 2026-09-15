---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-6
topicName: "Trigonometry: Solutions of Triangles"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.733877"
lastUpdated: "2026-09-15"
diagramPrompt: "Mathematical diagram showing Trigonometry: Solutions of Triangles concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Trigonometry: Solutions of Triangles

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Solutions of Triangles** means finding the missing sides or angles of any triangle from the given data, using three rule families plus the angle sum $A + B + C = 180°$ ($\pi$ rad).

- **Pick the rule by what is given:**
  - Two angles + one side (AAS/ASA) or two sides + a non-included angle (SSA) → **Sine Rule**: $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R$.
  - Three sides (SSS) or two sides + included angle (SAS) → **Cosine Rule**: $a^{2}=b^{2}+c^{2}-2bc\cos A$.
  - Two sides + included angle → **Area**: $\text{Area} = \tfrac{1}{2}bc\sin A$ (m²).
  - Three sides, no angle → **Heron's formula**: $\text{Area}=\sqrt{s(s-a)(s-b)(s-c)}$, where $s=\tfrac{a+b+c}{2}$.

> 💡 **High-Yield Memory Hook:** **"SSS or SAS → Cosine; AAS, ASA or SSA → Sine; Three sides only → Heron."** Use the angle that is *included* (between two known sides) as the trigger for Cosine; otherwise reach for Sine.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Decision Framework

The Sine Rule and Cosine Rule solve every standard JAMB triangle problem once you match the rule to the data type. The Sine Rule relates each side to the sine of its **opposite** angle; the Cosine Rule ties one side to the angle opposite it using the **two sides that include** that angle. The Law of Tangents, $\tan\!\left(\tfrac{A-B}{2}\right)=\dfrac{a-b}{a+b}\cot\!\tfrac{C}{2}$, is rarely tested directly but underlies half-angle identities.

| Given data | Best tool | Why it works |
|---|---|---|
| AAS or ASA | Sine Rule + angle sum | Two angles known ⇒ third is $180°-A-B$, then $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}$. |
| SSA (ambiguous) | Sine Rule + check | $\sin B = \dfrac{b\sin A}{a}$; if $0<\sin B<1$, **two** triangles may exist. |
| SSS | Cosine Rule (find angle) then Sine Rule | $\cos A=\dfrac{b^{2}+c^{2}-a^{2}}{2bc}$ gives the largest angle safely. |
| SAS | Cosine Rule directly | $a^{2}=b^{2}+c^{2}-2bc\cos A$. |
| Three sides, area wanted | Heron's formula | $s=\tfrac{a+b+c}{2}$, area $=\sqrt{s(s-a)(s-b)(s-c)}$. |

#### Half-Angle Identities (Standard Derivations)

Once the semi-perimeter $s$ is known, half-angle sines and cosines collapse the Cosine Rule work:
$$\cos\!\tfrac{A}{2}=\sqrt{\dfrac{s(s-a)}{bc}}, \qquad \sin\!\tfrac{A}{2}=\sqrt{\dfrac{(s-b)(s-c)}{bc}}.$$
Here $s$ is in metres (m), $a,b,c$ are in metres, and $A$ is the angle (rad or °) opposite side $a$.

#### 🎯 Exam-Level Worked Problem

**Question:** In triangle $PQR$, $p=8$ cm, $q=5$ cm and $\angle R = 60°$. Find the area of the triangle and the length of side $r$ correct to one decimal place.

#### Solution:
1. Area uses SAS: $\text{Area} = \tfrac{1}{2}pq\sin R = \tfrac{1}{2}(8)(5)\sin 60° = 20 \times \tfrac{\sqrt{3}}{2} = 10\sqrt{3} \approx 17.3 \text{ cm}^{2}$.
2. Side $r$ (opposite the known included angle) needs the Cosine Rule:
   $$r^{2}=p^{2}+q^{2}-2pq\cos R = 64+25-80\cos 60° = 89-80(0.5)=49.$$
3. So $r = \sqrt{49}=7.0$ cm.

> ⚠️ **Examiner Trap:** Students often grab the Sine Rule here because they see $\sin 60°$. But $\angle R$ is *included* between $p$ and $q$, so the Cosine Rule — not the Sine Rule — gives $r$ directly and avoids an ambiguous second solution.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Ambiguous Case (SSA) — Boundary Conditions

When two sides $a, b$ and a non-included angle $A$ are known, set $h = b\sin A$. The number of valid triangles depends on $a$ relative to $h$ and $b$:

1. $a < h$: no triangle (side too short to reach the opposite side).
2. $a = h$: exactly **one** right triangle ($\angle B = 90°$).
3. $h < a < b$: **two** triangles (the "ambiguous case") — both $\angle B$ and $180°-\angle B$ are valid.
4. $a \ge b$: **one** triangle ($\angle B$ is acute).

JAMB tests this by giving SSA data and asking for a side that has two possible values; picking only one costs the mark.

#### Advanced Traps and Edge Cases

1. **Degree–radian conversion.** JAMB uses degrees. $\sin 30°=0.5$ but $\sin 30=−0.988$ (radians). Always work in degrees unless the stem specifies otherwise.
2. **Early rounding.** Keep at least 4 decimal places in intermediate values; rounding $\sin 37°$ to $0.60$ at step 1 can shift a final answer by >1%.
3. **Included-angle confusion.** In SAS, $\cos A$ uses the angle *between* $b$ and $c$. If you are given $\angle B$ but sides $a,c$, switch to the Sine Rule first.
4. **Angle-sum sanity check.** After using the Sine Rule, verify $A+B+C=180°$ exactly; a sum of $181°$ means a mis-assigned side or a dropped sine-sign branch.
5. **Heron over negative bracket.** Heron's formula needs $s>a, s>b, s>c$. If a side exceeds $s$, the "triangle" is invalid — a useful self-check.

#### Practice Prompts

1. A triangle has $a=7$, $b=9$, $A=30°$. Show that two valid values of $\angle B$ exist, and compute both.
2. Three sides $13$, $14$, $15$ (units m) are measured. Find the largest angle using the Cosine Rule, then the area using Heron's formula, and confirm they agree.

## Continue your study

- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Trigonometry: Solutions of Triangles" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jamb/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
