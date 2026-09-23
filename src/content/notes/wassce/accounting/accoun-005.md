---
exam: wassce
examName: WASSCE (Ghana)
subject: accounting
subjectName: "Accounting"
topic: accoun-005
topicName: Depreciation
weight: 3
country: ghana
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Depreciation

### 🟢 Lite — Quick Review (1h–1d)
> The single fact that decides a Depreciation answer: it is **allocation of cost**, never a valuation of the asset and never a cash fund.

**Depreciation** spreads the *depreciable amount* (cost minus residual value) of a tangible fixed asset over its **estimated useful life**, so each accounting period bears a fair share of the asset's cost (matching principle).

| Method | Annual Charge | Formula |
|---|---|---|
| Straight-Line (Equal Instalment) | Same every year | (Cost − Residual) ÷ Useful life |
| Reducing-Balance (Diminishing Balance) | Falls each year | Book Value at year start × Rate % |

- SL annual rate (%) = 100 ÷ Useful life (years).
- RB rate (%) = 1 − (Residual ÷ Cost)^(1/n), where n = years of useful life.
- Partial-year charge = Full-year depreciation × Months held ÷ 12.
- Provision for Depreciation Account = credit-balance **contra-asset**, shown in the Balance Sheet; never credit the Asset Account directly.
- Land is **not** depreciated.

> 💡 **High-Yield Memory Hook:** "**SL = Straight cut; RB = Rises-then-Bows down.**" Straight-Line gives the same charge every year (a flat line on a graph); Reducing-Balance starts high and bows downward each year because the percentage is applied to a smaller book value. WASSCE questions almost always tag the method name in the stem — match the formula shape to the keyword and you avoid half the traps.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Why Depreciation Is Allocation, Not Valuation
The WASSCE Accounting syllabus treats depreciation as a **systematic allocation** of historical cost to the Income Statement over the asset's useful life. The Balance Sheet never re-states the asset at market value; it carries the asset at **cost less accumulated provision**. A common examiner line — "show depreciation in the books" — expects the candidate to debit Depreciation Expense and credit the *Provision for Depreciation Account*, *not* the Asset Account.

#### Comparing the Two Approved Methods

| Feature | Straight-Line | Reducing-Balance |
|---|---|---|
| Charge basis | Original cost less residual | Net book value at start of year |
| Yearly amount | Constant | Decreasing |
| Residual value | Explicitly deducted at the start | Built into the rate via the RB formula |
| Best matched to | Assets that wear evenly (buildings, fixtures) | Assets that lose more value early (vehicles, plant) |
| WASSCE rate label | "Equal Instalment" / "% on cost" | "% on reducing balance" |
| Typical trap | Forgetting to deduct residual | Using a different rate each year instead of a fixed % |

#### Ledger Entries — The Two Accounts

| Account | On charging depreciation | On disposal of asset |
|---|---|---|
| Asset Account | No entry (carries cost) | Debit: transferred to Disposal Account at full cost |
| Provision for Depreciation (PFD) | Credit: yearly charge | Debit: accumulated provision transferred to Disposal Account |
| Depreciation Expense (Income Stmt) | Debit: yearly charge | — |
| Disposal Account | — | Debit: cost; Credit: accumulated provision + proceeds; balance = profit/loss |

> 📌 **Formula Check (SI & units):** SL annual depreciation in **GHS/year**; dimensional group [M] (a money amount per unit time). RB rate is **dimensionless** (a percentage). RB annual depreciation is again **GHS/year**. Always state the unit "GHS per annum" in workings — WAEC markers knock marks off for naked figures.

#### Worked Practical (10–15 marks typical)
A machine was bought on **1 January 2021** for **GHS 48,000**. Residual value GHS 6,000. Useful life **6 years**. On **1 July 2024** it was sold for **GHS 18,000**. The firm uses the **straight-line method**. Show the **Provision for Depreciation Account** for 2021–2024 and the **Disposal Account**, stating profit or loss.

Step 1 — annual depreciation: (48,000 − 6,000) ÷ 6 = **GHS 7,000 per year**.

Step 2 — full years 2021, 2022, 2023 = 3 × 7,000 = **GHS 21,000**.

Step 3 — 2024 charge for 6 months (Jan–Jun, disposed 1 July): 7,000 × 6 ÷ 12 = **GHS 3,500**. Total accumulated provision = **GHS 24,500**.

Step 4 — net book value at disposal: 48,000 − 24,500 = **GHS 23,500**.

Step 5 — Disposal Account: Cost 48,000 (Dr) · PFD transferred 24,500 (Cr) · Proceeds 18,000 (Cr) · **Loss on disposal = GHS 5,500** (Dr balancing figure).

> ⚠️ **Examiner Trap:** Students forget the **partial-year charge** in 2024 and put only 7,000 × 4 = 28,000, which then makes the "loss on disposal" wrong by GHS 1,750. Read the disposal date — if the asset was held for part of the disposal year, scale the SL charge by months ÷ 12.

#### Principle the Examiner Always Tests
"Use the **same rate consistently** from year to year." Under reducing-balance you must lock the rate (e.g. 20%) and apply it to the *opening* book value of each year. Switching the rate to "recover" residual value is a syllabus violation and loses method marks.

---

### 🔴 Extended — Deep Study (3mo+)

#### Edge Cases That Catch Even Strong Candidates
- **Land, artworks, and financial assets:** Land is *never* depreciated under IAS 16 / WASSCE. If a "Motor Vehicle + Land" bundle is given, isolate and exclude the land portion *before* applying the rate.
- **Revaluation temptation:** WAEC papers do **not** ask you to revalue; the asset stays at original cost. Inventing a revaluation surplus entry is a method-mark killer.
- **Change of method mid-life:** Allowed only with disclosure in real IFRS; WASSCE expects you to **continue** with the original method at the same rate. Switching straight-line to reducing-balance (or vice versa) is outside the syllabus.
- **Residual value changes:** If given in the question, recompute SL using the new residual from the year of change. For RB, the rate is *fixed*; ignore later residual revisions unless the question explicitly says "revised residual".
- **Zero-residual RB asset:** RB rate = 1 − (0 ÷ Cost)^(1/n) = 100% — clearly nonsense. If RB is used on a "no residual" asset, the SL formula governs; do not fabricate an arbitrary RB rate.

#### Mathematical Limits Worth Noting
- SL rate (100/n) and RB rate (1 − (R/C)^(1/n)) **converge** only when residual → 0 and n is large; otherwise RB always charges more in year 1 than SL on the same asset.
- An RB rate applied to a fully-written-down asset produces a near-zero but non-zero charge forever; examiners accept "rounded to the nearest GHS" or treat the residual GHS as the cutoff.

#### Connections to Adjacent Topics
- **Provision for Doubtful Debts:** Both are credit-balance "provisions" deducted from their parent asset in the Balance Sheet; the journal shape (Dr Expense / Cr Provision) is identical.
- **Disposal of Non-Current Assets:** Depends entirely on the figures produced here — see the worked practical above.
- **Cash Flow Statement:** Depreciation is a **non-cash** item; add it back in the operating section under the indirect method. Treating it as cash is one of the highest-frequency WASSCE errors.

#### Advanced Practice Prompts
1. A delivery van cost GHS 120,000 on 1 Jan 2022, residual GHS 15,000, RB rate 25%. Sold on 30 September 2024 for GHS 50,000. Compute (a) accumulated provision at disposal, (b) net book value, (c) profit or loss — and prepare the Disposal Account.
2. A firm switches from straight-line to reducing-balance on a 1 Jan 2025 policy date, applied prospectively only. State (a) the SL charge for the final year under the old method, (b) the RB rate using residual and remaining useful life at the switch date, and (c) the new opening book value used for the first RB charge.

> ⚠️ **Examiner Trap (Extended):** "Proceeds − NBV" gives profit if positive and loss if negative — but only when the NBV is computed **after** charging the partial-year depreciation. Candidates who quote the NBV at the *start* of the disposal year silently overstate profit by exactly one year's depreciation.

---

## Continue your study
- **[View this topic in your WASSCE (Ghana) roadmap](/roadmap/?exam=wassce&duration=1mo)** — see where "Depreciation" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=wassce&duration=1d)** — 1-day sprint covering highest-weight topics
- **[WASSCE (Ghana) exam overview](/exams/wassce/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/wassce/accounting/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
