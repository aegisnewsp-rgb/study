---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-009
topicName: Inverse Trigonometry
weight: 4
country: india
generated: "2026-04-17T22:41:00.000000"
lastUpdated: "2026-09-18"
diagramPrompt: "Clean educational diagram showing Inverse Trigonometric Functions graphs with clear labels, white background, color-coded curves, exam-style illustration"





---

# Inverse Trigonometry

### 🟢 Lite — Quick Review (1h–1d)
> The single rule that decides one MCQ in 30 seconds: every inverse trig function returns only its **principal value**, never the general angle.

Inverse trigonometric functions undo the six standard trig ratios on a restricted **principal-value branch** so each becomes one-to-one. They are written sin⁻¹x, cos⁻¹x, tan⁻¹x, cot⁻¹x, sec⁻¹x, csc⁻¹x (also arcsin, arccos, arctan). Inputs are dimensionless ratios; outputs are dimensionless angles in radians.

| Function | Domain | Principal-value range |
|---|---|---|
| sin⁻¹x | [−1, 1] | [−π/2, π/2] |
| cos⁻¹x | [−1, 1] | [0, π] |
| tan⁻¹x | ℝ | (−π/2, π/2) |
| cot⁻¹x | ℝ | (0, π) |
| sec⁻¹x | (−∞,−1] ∪ [1,∞) | [0, π] − {π/2} |
| csc⁻¹x | (−∞,−1] ∪ [1,∞) | [−π/2, π/2] − {0} |

The must-know identities, all returning angles in radians:

- sin⁻¹x + cos⁻¹x = π/2
- tan⁻¹x + cot⁻¹x = π/2
- sec⁻¹x + csc⁻¹x = π/2
- 2 tan⁻¹x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1−x²)/(1+x²)) for |x| < 1

> 💡 **High-Yield Memory Hook (Mnemonic):** **"SECCS add to π/2"** — pair the functions whose names start with the same letter cluster as their complement: sin↔cos, tan↔cot, sec↔csc. Each pair sums to π/2 on its full domain.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Read this tier twice before the mock test — the sum-formulas and the sin⁻¹(sin x) trap decide two questions every paper.

#### Principal-value branches and why they exist

The unrestricted sine function is many-to-one, so it has no inverse. Restricting its domain to [−π/2, π/2] makes sin x strictly increasing and one-to-one, after which the inverse exists and lands inside [−π/2, π/2]. The same reasoning fixes every other arcfunction:

| Function | Restriction that makes parent one-to-one | Why this range specifically |
|---|---|---|
| sin⁻¹x | x ∈ [−π/2, π/2] | Zero-centred, matches derivative 1/√(1−x²) |
| cos⁻¹x | x ∈ [0, π] | Always non-negative output, keeps 1/√ continuity |
| tan⁻¹x | x ∈ (−π/2, π/2) | Open interval avoids asymptote at π/2 |
| sec⁻¹x | x ∈ [0, π] − {π/2} | Strictly increasing on two pieces, jump removed |
| cot⁻¹x, csc⁻¹x | follow from tan⁻¹, sec⁻¹ | Convention chosen by NCERT so that all complements sum to π/2 |

#### Derivative rules for JEE Main

| Function | d/dx | Domain of derivative |
|---|---|---|
| sin⁻¹x | 1/√(1−x²) | \|x\| < 1 |
| cos⁻¹x | −1/√(1−x²) | \|x\| < 1 |
| tan⁻¹x | 1/(1+x²) | all real x |
| cot⁻¹x | −1/(1+x²) | all real x |
| sec⁻¹x | 1/(\|x\|√(x²−1)) | \|x\| > 1 |
| csc⁻¹x | −1/(\|x\|√(x²−1)) | \|x\| > 1 |

The \|x\| (not x) inside the sec⁻¹, csc⁻¹ derivatives trips up half the candidates; it is required so the derivative stays positive on both branches of the domain.

#### The tan⁻¹ sum formula with quadrant check

tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)), provided xy < 1. The moment xy > 1 and both x,y > 0, the raw expression falls outside (−π/2, π/2) and you must add π. For x,y < 0 with xy > 1, subtract π instead.

#### Worked model problem

Find the value of sin⁻¹(sin 5).

The argument 5 rad lies far outside the principal range [−π/2, π/2] ≈ [−1.5708, 1.5708]. Reduce 5 using periodicity and the mirror symmetry of sine:

5 − 2π ≈ 5 − 6.2832 = −1.2832 rad, which already sits inside [−π/2, π/2].

Therefore sin⁻¹(sin 5) = 5 − 2π, not 5.

> ⚠️ **Examiner Trap:** Writing sin⁻¹(sin x) = x without checking whether x lies in the principal branch. The identity holds only for x ∈ [−π/2, π/2]; outside that interval you must map x back using 5 − 2π, x − π, π − x, or x − 2π depending on the quadrant.

---

### 🔴 Extended — Deep Study (3mo+)
> If you can draw all six inverse-trig graphs from memory and predict the sign of sec⁻¹x's derivative at x = −3, you are ready for JEE Advanced.

#### Edge case — composing sin⁻¹ with sin across the real line

sin⁻¹(sin x) is a piecewise linear function, not the identity. Its graph is a sawtooth with slope ±1 on alternating strips of width π, anchored at the origin. Concretely:

- For x ∈ [−π/2, π/2]: sin⁻¹(sin x) = x
- For x ∈ [π/2, 3π/2]: sin⁻¹(sin x) = π − x
- For x ∈ [−3π/2, −π/2]: sin⁻¹(sin x) = −π − x

This matters whenever a JEE question asks for the domain/range of sin⁻¹(sin(x²)) or sin⁻¹(2x) — you have to collapse the inner trig first and then read principal values off the restricted arcsin.

#### Edge case — limits and continuity at the boundaries

| Limit | Value | Reason |
|---|---|---|
| lim(x→1⁻) sin⁻¹x | π/2 | Right-hand approach to upper endpoint |
| lim(x→(π/2)⁻) tan⁻¹(tan x) | π/2 | Vertical asymptote not attained |
| lim(x→1⁺) sec⁻¹x | 0 | sec⁻¹ drops to 0 from the right |
| lim(x→(−1)⁻) csc⁻¹x | −π/2 | Left-hand approach to lower endpoint |

The sec⁻¹ function has a jump discontinuity at x = 0 conceptually (the branch excludes π/2), which is why its range is [0, π] minus that single point — a subtle graph-reading trap.

#### Connections to adjacent topics

- **Integration:** ∫ 1/√(a²−x²) dx = sin⁻¹(x/a) + C and ∫ 1/(a²+x²) dx = (1/a) tan⁻¹(x/a) + C. Every inverse-trig derivative formula inverts into a standard integral.
- **Complex numbers:** tan⁻¹z generalises to complex arguments via tan⁻¹z = (i/2) ln((1−iz)/(1+iz)).
- **Coordinate geometry:** Polar-coordinate angles use the arctan branch, so principal-value bugs surface in problems that ask for θ ∈ [0, 2π).

#### Advanced practice prompts

1. Evaluate lim(x→0) (tan⁻¹x − sin⁻¹x)/(x³) without L'Hôpital — use the small-angle expansions sin⁻¹x ≈ x + x³/6 and tan⁻¹x ≈ x − x³/3, then divide.
2. Solve for x ∈ ℝ: tan⁻¹(x−1) + tan⁻¹(x+1) = tan⁻¹(2x). Use the sum formula, then check the xy > 1 quadrant rule to decide whether to add π.

## Continue your study

- **[View this topic in your JEE Main roadmap](/roadmap/?exam=jeemain&duration=1mo)** — see where "Inverse Trigonometry" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeemain&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Main exam overview](/exams/jeemain/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeemain/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
