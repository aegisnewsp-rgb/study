---



exam: nabteb
examName: NABTEB
subject: physics
subjectName: Physics
topic: phy-1
topicName: Measurements and Units
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.555131"
lastUpdated: "2026-09-23"
diagramPrompt: "Clean educational diagram showing Measurements and Units with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Measurements and Units

### 🟢 Lite — Quick Review (1h–1d)
> The seven SI base units and how to chain them into everything else — that is the entire topic in one sentence.

A **physical quantity** is a number times a unit: $Q = \{Q\}\,[Q]$. NABTEB rewards students who read the bracket carefully — the curly part is the magnitude, the square-bracket part is the unit. Seven base quantities underpin every other quantity in the syllabus.

| Base quantity | Symbol | SI unit | Symbol | Dimension |
|---|---|---|---|---|
| Length | $l$ or $x$ | metre | m | $[L]$ |
| Mass | $m$ | kilogram | kg | $[M]$ |
| Time | $t$ | second | s | $[T]$ |
| Electric current | $I$ | ampere | A | $[I]$ |
| Temperature | $T$ | kelvin | K | $[\theta]$ |
| Amount of substance | $n$ | mole | mol | $[N]$ |
| Luminous intensity | $I_v$ | candela | cd | $[J]$ |

> 💡 **Memory Hook:** *"Light Men Take Kilograms; Ampere Keeps Newton Mole Candela"* — **L**ength, **M**ass, **T**ime (the big three), then **A**mpere, **K**elvin, **M**ole, **C**andela. The mnemonic doubles as the dimension list L, M, T, I, θ, N, J.

Derived units fall out by multiplication: $F = ma$ gives the newton $1\,\text{N} = 1\,\text{kg·m·s}^{-2}$, dimension $[M L T^{-2}]$. Pressure uses $p = F/A$, so $1\,\text{Pa} = 1\,\text{kg·m}^{-1}\text{·s}^{-2}$. Round every calculation to the **same number of significant figures as the worst input**; that single rule catches most of the marks dropped on this topic.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Base, Derived, and Supplementary

The seven SI base quantities are *defined*, not measured against something else. Every other quantity in Mechanics, Waves, Electricity and Modern Physics is built from these seven using multiplication, division, differentiation or integration. The metre, for example, is defined by the speed of light in vacuum — a fact NABTEB occasionally tests as a one-line Theory question.

> 📌 **Formula Check:** Dimensional analysis works because every valid equation is **dimensionally homogeneous** — both sides reduce to the same combination of $L, M, T, I, \theta, N, J$. A term like $a + b$ where $[a]=[L]$ and $[b]=[L T^{-1}]$ is illegal on dimensional grounds, even before the numbers are inserted.

#### Accuracy vs Precision

The two words look like synonyms; in the lab they are not. A metre rule pressed against a chipped wooden block will give readings that **agree with each other** (precise) but are **wrong** (not accurate) because the zero mark is damaged — that is a systematic error. Repeated readings of a swinging pendulum that scatter widely but centre on the true value show random error only; mean them, and accuracy improves without changing precision.

| Property | Definition | Affected by | Reduced by |
|---|---|---|---|
| **Accuracy** | closeness to the true value | systematic errors (zero offset, calibration drift) | recalibration, eliminating the offset |
| **Precision** | closeness of repeated readings to one another | random errors, instrument resolution | repeated measurements, averaging |

#### Uncertainty Propagation — Two Rules

NABTEB practical papers routinely give a measured length, mass and time and ask for density with its uncertainty. The rule of thumb is short enough to memorise:

> ⚠️ **Examiner Trap:** When the calculation is a product or quotient (e.g. $\rho = m/V$, $v = d/t$), **add the percentage uncertainties**. When it is a sum or difference, **add the absolute uncertainties** — never the percentages on an addition. NABTEB papers often mix the two operations in one expression to test exactly this.

A 0.5% ruler reading plus a 0.3% balance reading on a volume calculation therefore carries roughly 0.8% total uncertainty, not 1.25% (that would double-count) and not the linear sum of the absolute values in metres.

#### Worked Problem: Density of an Irregular Stone

**Question.** A NABTEB-style practical item asks: a stone of mass $24.8 \pm 0.1\,\text{g}$ is immersed in a Eureka can, displacing $9.4 \pm 0.2\,\text{cm}^3$ of water. Calculate the density of the stone in $\text{kg·m}^{-3}$, with its absolute uncertainty.

#### Solution.

1. Convert each quantity to SI.
   $m = 24.8\,\text{g} = 2.48 \times 10^{-2}\,\text{kg}$, $\Delta m = 0.1\,\text{g} = 1.0 \times 10^{-4}\,\text{kg}$.
   $V = 9.4\,\text{cm}^3 = 9.4 \times 10^{-6}\,\text{m}^3$, $\Delta V = 0.2\,\text{cm}^3 = 2 \times 10^{-7}\,\text{m}^3$.

2. Apply $\rho = m/V$.
   $$\rho = \frac{2.48 \times 10^{-2}}{9.4 \times 10^{-6}} = 2.638 \times 10^{3}\,\text{kg·m}^{-3}.$$

3. Add percentage uncertainties (division rule).
   $$\frac{\Delta m}{m} = \frac{0.1}{24.8} = 0.40\%, \qquad \frac{\Delta V}{V} = \frac{0.2}{9.4} = 2.13\%.$$
   $$\frac{\Delta \rho}{\rho} = 0.40\% + 2.13\% = 2.53\%.$$

4. Convert back to absolute uncertainty on $\rho$.
   $$\Delta \rho = 0.0253 \times 2638 \approx 67\,\text{kg·m}^{-3}.$$

5. Round $\rho$ and $\Delta\rho$ to two significant figures (the worst input has 2 s.f.).
   $$\boxed{\rho = (2.6 \pm 0.1) \times 10^{3}\,\text{kg·m}^{-3}}.$$

> ⚠️ **Examiner Trap:** A common wrong answer is $\rho = 2.6\,\text{kg·m}^{-3}$ — students write $24.8 / 9.4$ and forget to convert $\text{cm}^3$ to $\text{m}^3$. The factor-of-$10^{6}$ gap is the easiest mark to drop on this question.

---

### 🔴 Extended — Deep Study (3mo+)

#### Significant Figures in Calculations

The rule — round the final answer to the s.f. count of the *least precise* input — only applies to multiplication and division chains. In addition and subtraction, round to the same **decimal place** as the worst input. NABTEB examiners have set both styles in the same paper to catch students who learn only one variant.

#### Dimensions of Physical Constants

Writing $[G] = [M^{-1} L^{3} T^{-2}]$ is a direct route to half a Theory mark whenever a question asks for the dimensions of a constant. The trick is to rearrange any defining equation until the constant sits alone on one side, then substitute the dimensions of the other side:

| Constant | Defining equation | Dimensions |
|---|---|---|
| Gravitational $G$ | $F = G m_1 m_2 / r^2$ | $[M^{-1} L^{3} T^{-2}]$ |
| Planck's $h$ | $E = h f$ | $[M L^{2} T^{-1}]$ |
| Boltzmann's $k$ | $\tfrac{1}{2}m\langle c^2\rangle = \tfrac{3}{2}k T$ | $[M L^{2} T^{-2} \theta^{-1}]$ |
| Stefan–Boltzmann $\sigma$ | $P = \sigma A T^4$ | $[M T^{-3} \theta^{-4}]$ |

#### Unit Conversions Off by Powers of Ten

A $1\,\text{cm}^3$ block is $1 \times 10^{-6}\,\text{m}^3$, not $1\,\text{m}^3$. NABTEB practical scoring rewards candidates who write the conversion explicitly before substituting; a one-line "$\therefore V = 9.4 \times 10^{-6}\,\text{m}^3$" earns the method mark even if the division goes wrong later.

#### Practice Prompts

1. **Numerical.** A copper cylinder of mass $179.20 \pm 0.01\,\text{g}$ and diameter $2.40 \pm 0.01\,\text{cm}$ stands on a bench. Work out the height using the tabulated density $8.96 \times 10^{3}\,\text{kg·m}^{-3}$, and quote the absolute uncertainty.
2. **Dimensional check.** Show that the right-hand side of $s = ut + \tfrac{1}{2}at^2$ is dimensionally homogeneous, then decide whether the equation $v^2 = u^2 + 2as$ could be missing a physical constant or simply obey the rules without one.

## Continue your study

- **[View this topic in your NABTEB roadmap](/roadmap/?exam=nabteb&duration=1mo)** — see where "Measurements and Units" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nabteb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NABTEB exam overview](/exams/nabteb/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/nabteb/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
