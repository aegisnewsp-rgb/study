---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: finance
subjectName: "Finance"
topic: financ-008
topicName: Capital Budgeting
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-09"
---

# Capital Budgeting

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Capital Budgeting (or Investment Appraisal) is the planning process a firm uses to evaluate long-term capital expenditure proposals and decide which ones deserve funding, by estimating financial viability across the project's entire economic life. For RBI Grade B (Finance), it is the framework the Reserve Bank and regulated entities apply to long-gestation infrastructure, IT, and premises projects.

#### Core formula to memorise:
- NPV = Σ (CFₜ / (1+r)ᵗ) − CF₀
- IRR = r* such that Σ CFₜ / (1+r*)ᵗ = CF₀
- PI = PV of future inflows / Initial investment

**Decision rule:** Accept if NPV > 0, IRR > cost of capital, or PI > 1.

- **NPV is the gold standard** — it directly measures wealth creation in INR.
- **IRR's flaw** — assumes reinvestment at the IRR itself; MIRR fixes this by reinvesting at WACC.
- **Cash-flow rule** — use *incremental after-tax* flows only; exclude sunk costs; include working-capital changes and opportunity costs.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and Scope

Capital Budgeting is the financial planning method that quantifies the long-run viability of capital expenditure proposals. A "capital expenditure" is any outflow whose benefits extend beyond one accounting year — typically a fixed asset, an IT platform, or a building. The analysis horizon equals the project's economic life (n years), not a single reporting period.

#### Key Cash-Flow Rules

Only *incremental* cash flows matter. Sunk costs (already incurred, irreversible) are excluded. Allocated corporate overheads that do not vary with the project are also excluded. Working-capital investment at the start and its release at the end must be included. Opportunity costs (e.g. rent forgone on owned premises) enter as cash inflows of the *next-best* alternative.

#### Discounted-Cash-Flow Techniques

| Technique | Formula core | Decision rule | Strength |
| --- | --- | --- | --- |
| NPV | Σ CFₜ/(1+r)ᵗ − CF₀ | NPV > 0 | Measures value added in INR |
| IRR | r* with NPV = 0 | IRR > r | Percentage metric, intuitive |
| MIRR | (FV⁺ at WACC / \|PV⁻ at finance rate\|)^(1/n) − 1 | MIRR > r | Realistic reinvestment at WACC |
| Profitability Index | PV inflows / Initial outlay | PI > 1 | Useful under capital rationing |
| Discounted Payback | Years until Σ discounted CF recovers outlay | Within cutoff | Crude risk screen |

#### Ranking of Mutually Exclusive Projects

When projects are **independent**, accept all with positive NPV subject to capital availability. When **mutually exclusive** and of equal scale/timing, NPV and PI give the same ranking. When project lives differ, use the Equivalent Annual Cost (EAC) method or the replacement-chain assumption so that lives are matched over a common horizon.

#### Common Pitfalls

- Treating accounting profit (which includes depreciation) instead of cash flow as the input.
- Mixing real cash flows with a nominal discount rate, or vice versa.
- Reinvesting intermediate cash flows at the IRR instead of at WACC.
- Ignoring tax shields from depreciation under IT Act provisions.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Why NPV and IRR Can Disagree

NPV and IRR produce conflicting rankings for mutually exclusive projects under three conditions: (i) **scale difference** — the smaller project may have a higher IRR but lower absolute NPV; (ii) **timing difference** — a project whose cash flows arrive earlier can show a higher IRR while a later-heavy project has higher NPV; (iii) **multiple sign changes** — unconventional cash flows yield multiple IRRs, none of which is economically meaningful. Resolve the conflict by trusting NPV, or use MIRR/P I when a single percentage is required for communication.

#### Inflation Handling — Fisher Equation

Use the Fisher identity: (1 + nominal) = (1 + real)(1 + inflation). Discount **nominal** cash flows at the **nominal** WACC, or discount **real** cash flows at the **real** rate. Never mix a real rate with nominal cash flows — this silently understates NPV. In RBI-grade bank projects (e.g. CBS migration), inflation is typically built into the cash-flow forecast and matched with a nominal rupee discount rate.

#### Replacement Decisions and Real Options

For asset replacement, compute the **incremental** NPV of the new asset over the old, including the salvage of the existing asset and any tax effects on the written-down value. When replacement chains have unequal lives, EAC is preferred because it converts the lumpy NPV into a comparable annual rupee figure. Beyond static NPV, real options (defer, expand, abandon, switch) add value in long-gestation infrastructure projects where the RBI or a bank can stage the investment — for example, rolling out a treasury system in phases.

#### Common Mistakes in the Exam Hall

- Forgetting to add back depreciation and other non-cash items to accounting profit.
- Omitting the recovery of net working capital at project end.
- Using the corporate WACC for a project whose systematic risk differs from the firm's average beta.
- Accepting a project on payback alone when the payback ignores the time value of money.

#### Worked Micro-Example

A bank branch expansion needs an initial outlay of ₹100 lakh. It generates after-tax cash inflows of ₹30, ₹35, ₹40, and ₹45 lakh over 4 years, with a ₹10 lakh salvage at year 4 and a ₹5 lakh working-capital release. At a 10% cost of capital, compute NPV.

Discount factors at 10%: 0.9091, 0.8264, 0.7513, 0.6830.
PV of inflows = 30(0.9091) + 35(0.8264) + 40(0.7513) + 45(0.6830) + 10(0.6830) + 5(0.6830)
= 27.27 + 28.92 + 30.05 + 30.74 + 6.83 + 3.42 = ₹127.23 lakh.
NPV = 127.23 − 100 = **₹27.23 lakh** → accept.

#### Practice Prompts

1. A project shows NPV = +₹50 lakh and IRR = 14% against a WACC of 11%. A second mutually exclusive project shows NPV = +₹40 lakh and IRR = 18%. Which should be chosen and why? What additional data would change your answer?
2. Sensitivity analysis on the branch-expansion example above shows that NPV falls below zero if sales-volume growth drops by more than 4 percentage points. List the qualitative real options (defer, expand, abandon) and explain how each alters the risk profile.

---

## Continue your study

- **[View this topic in your RBI Grade B roadmap](/roadmap/?exam=rbi-grad-b&duration=1mo)** — see where "Capital Budgeting" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=rbi-grad-b&duration=1d)** — 1-day sprint covering highest-weight topics
- **[RBI Grade B exam overview](/exams/rbi-grad-b/)** — pattern, eligibility, and syllabus
- **[All Finance notes](/notes/rbi-grad-b/finance/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
