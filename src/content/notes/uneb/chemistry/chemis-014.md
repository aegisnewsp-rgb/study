---
exam: uneb
examName: UNEB UACE (Uganda)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-014
topicName: Industrial Manufacture of Ammonia (Haber Process)
weight: 3
country: uganda
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Industrial Manufacture of Ammonia (Haber Process)

### 🟢 Lite — Quick Review (1h–1d)
> One pass before walking into the UNEB paper — read this first, then the worked problem in Standard.

Fritz Haber fixed atmospheric nitrogen in 1909 by forcing **N₂(g)** and **H₂(g)** over an **iron catalyst** at roughly **200 atm** and **450–500 °C**, recycling unreacted gas until overall conversion reaches ~98%.

- **Overall reaction:** N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g); ΔH = –92 kJ mol⁻¹ (exothermic, 4 mol gas → 2 mol gas).
- **Kp expression:** Kp = [P(NH₃)]² / {P(N₂) · [P(H₂)]³}, each P divided by 1 bar to make it dimensionless.
- **Feed ratio:** 1 volume N₂ : 3 volumes H₂ (the stoichiometric ratio gives the highest equilibrium yield).
- **Industrial compromise:** low T favours yield but kills the rate; high P favours yield but inflates cost — the iron catalyst plus ~200 atm and ~500 °C is the optimum.

| Quantity | Symbol | SI unit | Why it matters |
|---|---|---|---|
| Pressure | P | Pa (or atm) | Higher P shifts equilibrium right (fewer gas moles) |
| Temperature | T | K | Lower T favours exothermic forward reaction |
| Enthalpy change | ΔH | J mol⁻¹ | –92 000 J mol⁻¹ confirms exothermicity |
| Gas constant | R | J K⁻¹ mol⁻¹ | 8.314, used in Van 't Hoff equation |

> 💡 **High-Yield Memory Hook — "HPC"**: **H**igh **P**ressure, low-ish **C**ool temperature, **H**igh iron **C**atalyst area. Or use **LPSC**: **L**ow T, **P**ressure up, **S**toichiometric 1:3 feed, **C**atalyst (Fe + K₂O/Al₂O₃).

---

### 🟡 Standard — Regular Study (2d–2mo)
> The level you want solid two months before Paper 1.

#### Raw materials and the flow scheme

Nitrogen arrives by **fractional distillation of liquid air** (Linde process), giving pure N₂ at roughly 99.8%. Hydrogen is produced in three coupled steps from natural gas:

1. **Steam reforming:** CH₄(g) + H₂O(g) → CO(g) + 3 H₂(g)
2. **Water-gas shift:** CO(g) + H₂O(g) → CO₂(g) + H₂(g)
3. **CO₂ absorption** in an amine or K₂CO₃ scrubber, leaving essentially pure H₂ plus N₂.

The 1 : 3 mixture (by volume) is compressed to **150–300 atm**, mixed with recycle gas, and passed through a fixed bed of **finely divided iron promoted by K₂O, Al₂O₃ and CaO** at **400–550 °C**. Heat exchangers recover the reaction enthalpy to pre-warm incoming gas. The cold effluent passes into a separator where **liquid NH₃** is drawn off; unreacted N₂ and H₂ are recycled.

#### Equilibrium, rate, and the compromise

The reaction is reversible and equilibrium-limited. Le Chatelier reasoning gives three independent levers:

- **Pressure ↑** → equilibrium shifts to the side with fewer gas moles (4 → 2), so NH₃ yield rises.
- **Temperature ↓** → equilibrium shifts to the exothermic side (ΔH negative), so NH₃ yield rises.
- **Removing NH₃** as it forms → drives the equilibrium right (lowers P(NH₃) in the Kp quotient).

The rate, however, dies at low T because the N≡N bond (bond energy ≈ 945 kJ mol⁻¹) needs thermal activation. The catalyst lowers the activation energy Eₐ without touching Kp, which is why industrial T sits at 450–500 °C instead of, say, 200 °C.

#### Concept comparison: Haber vs Contact process

| Feature | Haber (NH₃) | Contact (H₂SO₄) |
|---|---|---|
| Equation | N₂ + 3 H₂ ⇌ 2 NH₃ | 2 SO₂ + O₂ ⇌ 2 SO₃ |
| ΔH sign | Negative (exothermic) | Negative (exothermic) |
| Δn(gas) | 4 → 2 (–2) | 3 → 2 (–1) |
| Catalyst | Fe + K₂O/Al₂O₃/CaO | V₂O₅ |
| Optimum T | ~450–500 °C | ~450 °C |
| Pressure effect | Strong (used industrially) | Small (used industrially) |
| Equilibrium yield per pass | ~10–20 % | ~70 % |

#### Quantitative worked passage

A UACE-style structured item typically hands you Kp and asks how a perturbation shifts the position of equilibrium.

**Item (4 marks).** At 500 °C the equilibrium constant for N₂ + 3 H₂ ⇌ 2 NH₃ is Kp = 6.0 × 10⁻⁵ (dimensionless). An equilibrium mixture has P(N₂) = 50 bar, P(H₂) = 150 bar, P(NH₃) = 1.5 bar. (a) Confirm the mixture is at equilibrium. (b) Predict, with reasoning, the effect of (i) doubling total pressure at constant T and (ii) raising T to 600 °C.

#### Solution outline.
(a) Compute the reaction quotient:

Q = (1.5)² / [50 × (150)³] = 2.25 / (50 × 3.375 × 10⁶) = 2.25 / (1.6875 × 10⁸) ≈ 1.33 × 10⁻⁸.

Since Q (1.33 × 10⁻⁸) < Kp (6.0 × 10⁻⁵), the reaction must proceed **forward** to reach equilibrium — the mixture as given is *not* yet at equilibrium; more NH₃ will form until Q rises to 6.0 × 10⁻⁵.

(b)(i) Compressing the total pressure at constant T doubles every partial pressure, so Q becomes Q' = (3.0)² / [100 × (300)³] = 9 / (100 × 2.7 × 10⁷) ≈ 3.33 × 10⁻⁹. Still less than Kp, so the system shifts right and more NH₃ forms. Net NH₃ yield rises because the equilibrium shifts toward fewer gas moles.

(b)(ii) Raising T makes the exothermic forward reaction less favourable; by the Van 't Hoff relation ln(K₂/K₁) = –(ΔH/R)(1/T₂ – 1/T₁), with ΔH = –92 000 J mol⁻¹, R = 8.314 J K⁻¹ mol⁻¹, T₁ = 773 K, T₂ = 873 K, we get 1/T₂ – 1/T₁ = –1.485 × 10⁻⁴ K⁻¹, so ln(K₂/K₁) = –(–92 000/8.314)(–1.485 × 10⁻⁴) ≈ –1.64. Hence K₂ ≈ K₁ · e^(–1.64) ≈ 6.0 × 10⁻⁵ × 0.194 ≈ 1.2 × 10⁻⁵. Lower Kp ⇒ lower NH₃ yield at the new temperature.

> ⚠️ **Examiner Trap:** students write Kp = P(NH₃)/[P(N₂) · P(H₂)] and lose both the **square on NH₃** and the **cube on H₂**. Always raise each partial pressure to the power of its stoichiometric coefficient — the UACE marking scheme deducts a mark for each missing exponent.

---

### 🔴 Extended — Deep Study (3mo+)
> Where to push when you have a full term and the syllabus is otherwise locked.

#### Where the 400–550 °C window comes from

The rate expression for the heterogeneous step is qualitative — first order in N₂ and fractional order in H₂ over the iron surface — with an Arrhenius factor exp(–Eₐ/RT). Eₐ for N₂ dissociation on promoted Fe is roughly 65–85 kJ mol⁻¹, much smaller than the gas-phase N≡N bond energy. Below ~400 °C the surface coverage of adsorbed N falls because the dissociation rate is too slow; above ~550 °C the equilibrium constant has dropped enough (K₇₇₃ ≈ 6 × 10⁻⁵; K₈₂₃ ≈ 2 × 10⁻⁵) that even a fast reactor cannot compensate.

Single-pass conversion is only **10–20 %** at 200 atm and 500 °C. That is *not* a process failure — it is the deliberate consequence of the rate-yield compromise. The recycle loop raises overall conversion to ~98 %, and the liquid-NH₃ draw-off is what keeps the per-pass yield economically tolerable.

#### Numerical edges worth memorising

| Parameter | Typical industrial value | Why it sits there |
|---|---|---|
| Pressure | 150–300 atm (modern plants trend to 150–200) | Equipment cost ceiling |
| Temperature | 400–550 °C | Rate/yield compromise |
| Fe crystal phase | α-Fe with Wüstite/magnetite skeleton | Stable under H₂/CO |
| Promoters | K₂O, Al₂O₃, CaO | Electron-donor + structural |
| Single-pass yield | 10–20 % | Recycle absorbs the gap |
| Overall yield | ~98 % | After 4–5 recycles |

#### UACE traps and how to read them

1. **"The catalyst increases the yield of ammonia."** It does not. It increases the rate at which equilibrium is reached; Kp and equilibrium position are unchanged.
2. **"Doubling P doubles the yield."** Yield rises but sub-linearly because the equilibrium shift is logarithmic in partial-pressure ratios, not multiplicative.
3. **"The process uses a molybdenum catalyst."** Molybdenum *promotes* the iron in some older formulations; modern promoted Fe uses K₂O/Al₂O₃/CaO. The active catalyst is iron.
4. **"ΔH is positive because the reaction needs heat to proceed."** Heat is required to *drive the rate*, not because the reaction is endothermic. ΔH° = –92 kJ mol⁻¹; lower T favours the forward direction.

#### Adjacent-topic connections

- **Equilibrium constants (Topic: Chemical equilibrium).** Kp, Kc, Kₓ, the relationship to ΔG°, and how to handle gases whose partial pressures are reported in bar rather than Pa.
- **Rate equations and catalysis (Topic: Reaction kinetics).** Activation energy, heterogeneous surface mechanism, role of promoters as electron donors (K₂O) and structural stabilisers (Al₂O₃).
- **Le Chatelier's principle (Topic: Effects of conditions on equilibrium).** Three independent levers — pressure, temperature, concentration — and why adding an inert gas at constant V does *not* shift this equilibrium.
- **Nitrogen cycle (Topic: Nitrogen and its compounds).** Compare biological fixation by *Rhizobium* (nitrogenase, ambient T and P) with industrial fixation; both reduce N₂ to NH₃ but by very different mechanisms.

#### Two advanced practice prompts

1. **Van 't Hoff drill.** Given Kp(700 K) = 4.4 × 10⁻⁵ and ΔH° = –92 kJ mol⁻¹, calculate Kp at 800 K to two significant figures and comment on whether the change is large enough to force an industrial operator to raise the operating temperature.
2. **Recycle mass balance.** A plant feeds 1000 m³ h⁻¹ of 1 : 3 N₂ : H₂ at 200 atm, achieves a 15 % single-pass conversion to NH₃, and recycles unreacted gas. Calculate (a) the moles of NH₃ produced per hour at STP and (b) the volume of recycle gas per hour, assuming the separator removes NH₃ completely. (Use PV = nRT with R = 8.314 J K⁻¹ mol⁻¹.)

---

## Continue your study

- **[View this topic in your UNEB UACE (Uganda) roadmap](/roadmap/?exam=uneb&duration=1mo)** — see where "Industrial Manufacture of Ammonia (Haber Process)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uneb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UNEB UACE (Uganda) exam overview](/exams/uneb/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/uneb/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
