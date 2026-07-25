---
exam: xat
examName: XAT
subject: decision-making
subjectName: "Decision-Making"
topic: decisi-010
topicName: Core Analytical Toolkit
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-25"
---

# Core Analytical Toolkit

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Decision-Making** in XAT tests how a manager frames, analyses, and resolves a business problem using ethical reasoning, quantitative logic, and structured frameworks — never as isolated quant. The two high-yield muscles are **Expected Monetary Value (EMV)** and **stakeholder-impact analysis**.

- **EMV** = Σ [P(i) × Payoff(i)]. Always multiply each branch's payoff by its probability, then sum.
- **Sunk cost vs relevant cost**: past, irrecoverable spend is irrelevant; only future incremental cash flows matter.
- **Risk vs Uncertainty**: assign probabilities only when they are *known*; use maximin/maximax heuristics when they are not.
- XAT classically frames 22–25 questions where a caselet hides a decision tree, a utilitarian vs deontological trade-off, or a syllogism. **Read the question stem last, not first.**

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Analytical Toolkit

XAT Decision-Making rewards structured quantification, not intuition. Three instruments dominate the paper.

**Expected Monetary Value (EMV)** converts a probabilistic choice into a single number. For a decision node with branches having outcomes *x₁, x₂ … xₙ* and probabilities *p₁, p₂ … pₙ*, EMV = Σ pᵢxᵢ. The alternative with the highest EMV is preferred when the decision-maker is **risk-neutral**.

**Expected Utility (EU)** replaces money with a utility function *U(x)* to capture risk attitudes. EU = Σ pᵢU(xᵢ). A risk-averse manager accepts a lower EMV deal only if EU rises, and vice versa.

**Variance and Coefficient of Variation (CV)** measure dispersion. Variance = Σ pᵢ(xᵢ − EMV)²; σ = √Variance; CV = σ / EMV. CV lets you compare risk across projects of unequal size — a CV > 1 signals the project's risk is larger than its mean payoff, a useful red flag in capital-allocation caselets.

#### The Cost Distinction That Trips Test-Takers

A **sunk cost** is expenditure already incurred and unrecoverable — rent paid, R&D spent, a deposit forfeited. It must be excluded from incremental analysis. **Opportunity cost** is the foregone benefit of the next-best alternative and *is* a real cost: Net Gain = Benefit − Opportunity Cost. Common XAT trap: an option with lower accounting profit but higher net gain is the rational pick.

#### Decision Criteria Under Uncertainty

| Criterion | Attitude | Rule |
|---|---|---|
| **Maximax** | Optimist | Pick branch with highest possible payoff |
| **Maximin** | Pessimist | Pick branch with highest *worst-case* payoff |
| **Laplace (Equal Likelihood)** | Neutral | Average all payoffs, pick the maximum |
| **Hurwicz (α-index)** | Mixed | α·(best) + (1−α)·(worst); α reflects optimism |

#### Ethical Frameworks

XAT scenarios demand that you weigh consequences (**utilitarian**), duties (**deontological / Kantian**), rights and fairness (**justice**), and character (**virtue**). Identify stakeholders, separate facts from opinions, then test the decision against each lens before concluding.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Bounded Rationality and Satisficing

Herbert Simon's **bounded rationality** argues that real managers do not optimise — they **satisfice**, accepting the first alternative that clears an aspiration level because information is incomplete, time is scarce, and cognitive capacity is finite. In caselets describing a manager who "rushed" or "settled," the intended answer usually defends the satisficing choice, not an unrealistic optimum. Watch for distractors that propose exhaustive search as superior; XAT rewards realistic, constraint-aware reasoning.

#### Decision Trees and Roll-Back

A decision tree has **decision nodes** (squares, controlled by the manager), **chance nodes** (circles, governed by probabilities), and **terminal payoffs**. Solve by **rolling back**: compute EMV at every chance node, then at each decision node keep only the branch with the highest EMV and prune the rest. Sensitivity analysis — recomputing EMV as *p* shifts — reveals the **break-even probability** at which two alternatives tie; this is the figure XAT often asks for in numerical caselets.

#### Syllogism and Logical Validity

Logical-reasoning items follow the pattern: two premises + a conclusion; you must judge *must be true / could be true / cannot be true*. Memorise the four classic fallacies: **affirming the consequent**, **denying the antecedent**, **illicit major/minor**, and **undistributed middle**. The efficient method is the **Venn-diagram test** — draw two (or three) circles for the terms, mark the premises, and see if the conclusion's region is forced.

#### Common Mistakes

- Treating a sunk cost as "what we paid so we must recover it."
- Choosing maximax in a recessionary caselet or maximin for a venture-capital pitch.
- Confusing **risk** (known probabilities → use EMV) with **uncertainty** (unknown probabilities → use heuristics).
- Inserting personal moral preference into a stakeholder analysis; XAT wants the framework's verdict, not yours.

#### Practice Prompts

1. A firm must choose between Project A (payoffs 200/100/–50 with probabilities 0.4/0.4/0.2) and Project B (payoff 150 certain). Compute each project's EMV, variance, and CV. Which should a risk-averse manager pick if U(x) = √x?
2. A warehouse lease of ₹8 lakh was paid last year and is non-refundable. A new supplier offers a ₹2 lakh discount that forces abandoning the lease. Should the manager accept? Justify using sunk-cost and opportunity-cost reasoning.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
