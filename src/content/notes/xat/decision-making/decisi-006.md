---
exam: xat
examName: XAT
subject: decision-making
subjectName: "Decision-Making"
topic: decisi-006
topicName: Financial and Investment Decisions
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-21"
---

# Financial and Investment Decisions

### 🟢 Lite — Quick Review (1h–1d)

> One-sentence orientation: pick the project with the largest **NPV**, fall back on PI when capital is rationed, and treat IRR as a supporting index rather than the final word.

Financial and Investment Decisions sit inside XAT's Decision-Making stream, not Quant. The arithmetic is simple; the judgement call is not. You will read a 150-word manager's case, see two or three projects with given cash flows and a discount rate, and have to defend a choice. The machine-checkable answer hinges on whether the firm faces a **capital rationing** constraint and whether the cash-flow stream is **conventional** (one sign change) or not.

| Decision rule | Formula (compact) | Accept if | Memory Hook (PID-RI): the four you actually need |
|---|---|---|---|
| NPV | $\sum CF_t/(1+r)^t - C_0$ | ≥ 0 | **N**ow, **P**roject, **V**alue — positive NPV means wealth added today |
| IRR | NPV = 0 | > r (cost of capital) | **I**nternal **R**ate must beat the hurdle rate |
| PI | ΣPV(inflows)/C₀ | > 1 under rationing | **P**rofitability per rupee invested |
| Payback | C₀ / annual CF | within management cut-off | crude liquidity proxy, not a value tool |

> 💡 **High-Yield Memory Hook:** **"NPV rules, IRR lies on scale, PI saves rationing, Payback is just a clock."** When two of these contradict on paper, NPV wins in XAT cases unless the stem explicitly imposes a capital ceiling.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### The decision ladder, top to bottom

Start at the top and walk down only when the rule above is silent.

1. **NPV test** — discount every cash flow at the firm's cost of capital (WACC) and accept if NPV ≥ 0.
2. **IRR test** — find r such that NPV = 0; accept if IRR exceeds WACC. Works only for conventional streams.
3. **PI test** — ΣPV(inflows)/C₀; used when a hard budget caps total outlay (capital rationing). Rank by PI, fund top projects until the budget is spent.
4. **Payback / Discounted Payback** — how many years to recover the outlay. A screening filter, never the tie-breaker.

For **mutually exclusive** projects of unequal life, NPV favours the longer-lived project by construction. Convert both to an **Equivalent Annual Annuity** (EAA = NPV / annuity factor) before comparing, or chain a replacement cycle and recompute NPV.

#### Formula precision table

| Symbol | Meaning | Unit | Dimension |
|---|---|---|---|
| $CF_t$ | Net cash flow at end of period t | INR | [Currency] |
| $r$ | Discount rate (cost of capital) | per period, decimal | dimensionless |
| $n$ | Project life | years | [Time] |
| $E, D, V$ | Market value of equity, debt, total | INR | [Currency] |
| $R_e, R_d$ | Cost of equity, pre-tax cost of debt | decimal per year | dimensionless |
| $T$ | Corporate tax rate | decimal | dimensionless |
| $EAA$ | Equivalent Annual Annuity | INR/year | [Currency·Time⁻¹] |

#### Where the rules collide

- **Scale problem.** A small plant shows IRR 22% with NPV ₹50 lakh; a large plant shows IRR 18% with NPV ₹300 lakh. Pick the large plant. NPV measures wealth added in rupees; IRR measures efficiency in percent.
- **Reinvestment assumption.** IRR implicitly assumes intermediate cash flows are redeployed at the IRR; NPV assumes reinvestment at the cost of capital. The second assumption is closer to reality, which is why textbook authors default to NPV when IRR and NPV disagree.
- **Multiple IRRs.** Non-conventional streams (e.g., + + − −) can produce more than one IRR. Use NPV or the **Modified IRR (MIRR)**: finance negative flows at r, reinvest positives at r, then solve a single rate.
- **Capital rationing.** With a ₹10 crore ceiling and three independent projects each costing ₹4 crore, you can fund only two. Rank by PI, not IRR. A project with PI 1.4 and NPV ₹2 cr beats one with PI 1.2 and NPV ₹1 cr when slots are tight.

#### Concept comparison matrix

| Concept | What it measures | When it rules | When it misleads |
|---|---|---|---|
| NPV | Absolute rupee wealth added | Independent projects; mutually exclusive (with EAA) | Unequal lives without adjustment |
| IRR | Percentage yield | Quick screening of conventional streams | Non-conventional cash flows; scale comparisons |
| PI | Value per rupee invested | Capital rationing | When projects are mutually exclusive (inconsistent ranking vs NPV) |
| Payback | Years to recover outlay | Liquidity-constrained firms | Ignores post-payback cash flows and time value |
| MIRR | Corrected IRR with realistic reinvestment | Non-conventional streams | More inputs needed, less intuitive in a case |

#### Worked resolution — capital rationing under competing projects

A firm has a ₹6 crore capital ceiling and three independent projects:

| Project | C₀ (₹ cr) | Annual CF (₹ cr, years 1–4) | NPV @ 12% (₹ cr) | PI |
|---|---|---|---|---|
| Alpha | 2.0 | 0.80 | 0.30 | 1.15 |
| Beta | 3.0 | 1.30 | 0.55 | 1.18 |
| Gamma | 4.0 | 1.60 | 0.50 | 1.125 |

Rank by PI: Beta (1.18) > Alpha (1.15) > Gamma (1.125). Spend the ceiling: fund Beta (₹3 cr) + Alpha (₹2 cr) = ₹5 cr, leaving ₹1 cr of slack — Gamma needs ₹4 cr and does not fit. Total NPV = 0.30 + 0.55 = **₹0.85 cr**, which beats any other feasible combination (e.g., Alpha + Gamma uses ₹6 cr but yields NPV 0.80).

> ⚠️ **Examiner Trap:** Students pick the project with the highest NPV alone (Beta, ₹0.55 cr) and stop, missing that Alpha is *also* fundable inside the ceiling and raises total NPV to ₹0.85 cr. Capital rationing asks for the *best combination*, not the best singleton.

---

### 🔴 Extended — Deep Study (3mo+)

#### WACC and the financing side

Investment decisions set the demand for capital; financing decisions set its price. The two meet at the discount rate. WACC = $(E/V)\cdot R_e + (D/V)\cdot R_d(1-T)$. Two traps sit inside this single line:

- Use **market values** of E and D. Book values are historical and almost always wrong for an active firm; using them distorts the weights and quietly changes the hurdle rate.
- The $(1-T)$ factor only applies to debt interest, because interest is tax-deductible. Equity dividends are paid out of post-tax profit and carry no shield. Forgetting the tax adjustment overstates the cost of debt and biases the firm against borrowing.

A worked check: E = ₹600 cr (market cap), D = ₹400 cr (book of long-tenor bonds trading near par), R_e = 14%, R_d = 9%, T = 25%. Then V = ₹1,000 cr, and WACC = 0.6 × 14% + 0.4 × 9% × 0.75 = 8.4% + 2.7% = **11.1%**. Any project promising more than 11.1% on a risk-adjusted basis earns its way in.

#### Dividends and the relevance question

Modigliani-Miller's dividend irrelevance proposition says the dividend payout does not change firm value when investment policy is fixed — paying a rupee in dividends is offset by a rupee less retained, with shareholders able to reinvest at their own return. The **relevance** school (Lintner, Gordon) argues dividends reduce investor uncertainty and signal confidence, so a stable or rising payout supports price. XAT cases typically present a promoter-founder wavering between "reward shareholders now" and "fund the expansion". The reasoning template: identify the **opportunity set** of positive-NPV projects; if it is large and the cost of external equity is high, retain; if it is thin and the firm is cash-rich, pay out.

#### Working capital and the inside of the balance sheet

Working capital is the day-to-day tug between liquidity and profitability. Excess inventory and receivables tie up cash that could fund a positive-NPV project; zero inventory invites stockouts and lost sales. The diagnostic questions in a case: how many days of receivables, how many days of inventory, how is the cash conversion cycle trending? A lengthening cycle without a matching revenue rise is a red flag that working-capital policy is quietly consuming investment capacity.

#### Real options, the under-tested edge

Static NPV treats a project as a one-shot commitment. Real-options thinking adds embedded choices: defer by one year and learn demand, expand capacity if the pilot succeeds, abandon if a competitor moves. A project with NPV of zero but a cheap abandonment clause may still be worth starting. XAT rarely quantifies these explicitly, but case answers that mention **deferral, staged commitment, or exit flexibility** score well because they reflect how managers actually think once the spreadsheet is closed.

#### Advanced traps and exceptions

1. **Nominal vs real rates.** A case giving 14% discount and 7% inflation must be deflated consistently — either use nominal cash flows with nominal r, or real cash flows with the Fisher-deflated r. Mixing the two overstates NPV.
2. **Sunk costs.** A manager pleads "we have already spent ₹2 cr on feasibility" — ignore it. Sunk costs cannot influence forward-looking decisions; only incremental future cash flows count.
3. **Inflation-driven IRR inflation. ** Cash flows and discount rates should use the same price base. NPV in real terms equals NPV in nominal terms only when both sides are converted consistently.
4. **Profitability Index under multiple constraints.** When both capital and a key input (e.g., skilled labour months) are rationed, simple PI ranking breaks; the correct tool is **integer linear programming**. XAT cases rarely reach this depth, but knowing the limit of PI is itself a marker of mastery.
5. **Lease vs buy.** Operating leases hide the cost of capital because rentals are below the depreciation-plus-interest line. A case asking why a firm prefers leasing despite a cheaper loan rate is usually testing whether you spot the implicit cost of owning — collateral, obsolescence, balance-sheet optics.

#### Advanced practice prompts

1. A firm has two mutually exclusive projects, A (life 4 years, NPV ₹40 cr) and B (life 6 years, NPV ₹52 cr). Cost of capital is 10%. Compute EAA for each and decide. *(Target: notice that raw NPV favours B; EAA is the correct arbiter when lives differ.)*
2. A promoter offers to fund a ₹100 cr expansion entirely with 12% debt. Current debt-to-capital is 20%; pushing it to 60% raises R_d to 14% because rating agencies downgrade. R_e rises from 13% to 16%. T = 30%. Recompute WACC at the new mix and decide whether the project at 13% IRR clears the new hurdle. *(Target: capture the rating-trigger feedback loop that textbook WACC examples hide.)*

---

## Continue your study

- **[View this topic in your XAT roadmap](/roadmap/?exam=xat&duration=1mo)** — see where "Financial and Investment Decisions" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=xat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[XAT exam overview](/exams/xat/)** — pattern, eligibility, and syllabus
- **[All Decision-Making notes](/notes/xat/decision-making/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
