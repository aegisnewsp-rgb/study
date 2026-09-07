---
exam: gate
examName: "GATE"
subject: general-aptitude
subjectName: "General Aptitude"
topic: genera-003
topicName: "Ratio, Proportion and Mixtures"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-07"
---

# Ratio, Proportion and Mixtures

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **ratio** compares two same-kind quantities by division (a : b, also written a/b). A **proportion** equates two ratios: a : b = c : d equivalently gives ad = bc. A **mixture** combines ingredients with known quantities or prices, and the mean price P̄ = (Σ pᵢqᵢ) / Σqᵢ.

The **alligation rule** is the fastest two-component shortcut. Given cheap price p_c, dear price p_d, and mean price P̄, mix in the ratio

> **cheap : dear = (p_d − P̄) : (P̄ − p_c)**

For a repeated refill problem, replacement fractions multiply: after n steps with replacement fractions r₁, r₂, …, rₙ, the fraction of original substance left is (1 − r₁)(1 − r₂)…(1 − rₙ).

- **Direct proportion** ↗ quantities rise together (y = kx); **inverse proportion** ↘ product is constant (xy = k).
- **Componendo–dividendo:** if a/b = c/d, then (a+b)/(a−b) = (c+d)/(c−d).
- GATE tests this topic through 1-mark MCQs and 2-mark NATs on alligation and successive mixtures, usually solvable in under 3 minutes.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core definitions and the proportion theorem

Two quantities a and b of the same unit form ratio a : b = a/b, a dimensionless number. Equality of two ratios, a : b = c : d, is a proportion; cross-multiplying yields ad = bc. This identity lets you find any one unknown if the other three are given. Ratios scale freely: 3 : 5 = 6 : 10 = 0.6, because dividing a and b by the same number preserves the ratio.

#### Direct, inverse, and compound ratios

In **direct proportion**, y = kx, so doubling x doubles y. In **inverse proportion**, xy = k, so doubling x halves y. Word-problem cues: "more workers, less time" signals inverse; "more speed, more distance (in fixed time)" signals direct. A **compound ratio** of a : b and c : d is ac : bd; the **duplicate ratio** of a : b is a² : b².

| Relation | Formula | Typical cue |
| --- | --- | --- |
| Direct | y = kx | "increases with" |
| Inverse | xy = k | "decreases as … increases" |
| Compound of a:b, c:d | ac : bd | two effects combined |
| Componendo–dividendo | (a+b)/(a−b) = (c+d)/(c−d) | given a/b = c/d |

#### Mean price and the alligation shortcut

When q₁ kg at ₹p₁/kg and q₂ kg at ₹p₂/kg are mixed, the mean price per kg is

> **P̄ = (p₁q₁ + p₂q₂) / (q₁ + q₂)** (₹/kg)

Alligation rewrites the same weighted mean as a ratio of the two quantities. With p_c < P̄ < p_d, draw a cross and read the diagonals as quantity ratios:

> **q_c : q_d = (p_d − P̄) : (P̄ − p_c)**

#### Successive replacement (refill) problems

A vessel holds V litres of liquid; a fraction r₁ is drawn out and replaced by another liquid. The fraction of the **original** liquid remaining after one step is (1 − r₁). After n steps with replacement fractions r₁, r₂, …, rₙ, the fraction left is (1 − r₁)(1 − r₂)…(1 − rₙ). Quantities multiply, not add — a common GATE trap.

Common slip-ups:
- Mixing unit prices (₹/kg with ₹/L) without converting to a common denominator.
- Treating ratio a : b as the fraction a/(a+b) instead of a/b.
- Adding replacement fractions instead of multiplying them.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Mechanism behind alligation

Alligation is a graphical weighted-mean construction. If p_c and p_d are the two prices, any mixture with mean P̄ between them must satisfy P̄ = (p_c q_c + p_d q_d)/(q_c + q_d). Solving for the ratio q_c : q_d gives the cross-diagonal rule. Extend to three or more ingredients by repeated pairing: combine two ingredients via alligation to get a virtual mean, then alligate that virtual mean with the third. Always keep p_c < P̄ < p_d; otherwise the problem is infeasible or the mean lies outside the range.

#### Successive mixture — the multiplicative law

For a vessel of initial volume V₀ and original concentration C₀, after one replacement of fraction r₁ the original-substance amount is V₀ C₀ (1 − r₁). After n independent replacements the original-substance fraction is

> **f_n = (1 − r₁)(1 − r₂) ⋯ (1 − rₙ)**

A 40-litre vessel, 80% acid, replaces 25% thrice. Original acid left = 40 × 0.8 × (0.75)³ = 40 × 0.8 × 0.421875 = **13.5 L**. Successive fractions multiply even when r₁ = r₂ = r₃; three equal replacements of 25% are not "75% replaced" but (0.75)³ ≈ 42.2% remaining.

#### Worked example (GATE-style NAT)

Mix 12 kg of rice at ₹40/kg with 8 kg at ₹55/kg. Find the mean price. Mean = (12·40 + 8·55)/(12 + 8) = (480 + 440)/20 = 920/20 = **₹46/kg**. Cross-check via alligation: cheap : dear = (55 − 46) : (46 − 40) = 9 : 6 = 3 : 2, matching the given 12 : 8.

| Concept | Key check |
| --- | --- |
| Alligation sign | cheap share ∝ (p_d − P̄) |
| Refill law | remaining = product of (1 − rᵢ) |
| Componendo | (a+b) : (a−b) given a/b = c/d |

> Exam tip: in NAT questions, enter the mean price to two decimals unless the paper specifies otherwise; double-check that p_c < P̄ < p_d before writing the alligation ratio.

Practice prompts:
1. A 60-litre solution is 40% alcohol. 15 L is drawn out and replaced by water twice. Find the final alcohol percentage.
2. Tea costing ₹280/kg and ₹320/kg are mixed in ratio 3 : 2. At what price must the mixture be sold for a 20% profit?

---

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Ratio, Proportion and Mixtures" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All General Aptitude notes](/notes/gate/general-aptitude/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
