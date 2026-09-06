---
exam: xat
examName: XAT
subject: decision-making
subjectName: "Decision-Making"
topic: decisi-005
topicName: Operations and Supply Chain Dilemmas
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-06"
---

# Operations and Supply Chain Dilemmas

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your XAT Decision-Making section.

Operations and Supply Chain Dilemmas in XAT Decision-Making are short business cases where you must pick one option among sourcing, production, inventory, logistics, or network choices. Each dilemma hides a **trade-off** — cost vs service, efficiency vs resilience, centralisation vs responsiveness. Your score depends on (a) naming the operative trade-off, (b) applying the correct framework, and (c) stating what is being sacrificed.

The two quantitative workhorses are **EOQ** for steady, independent demand and the **Newsvendor critical ratio** Cu/(Cu+Co) for single-period, lumpy demand. Safety stock uses **SS = z·σ_d·√L**.

- **EOQ** = √(2DS/H) — minimises ordering + holding cost; ignore when demand is variable.
- **ROP** = d̄·L + SS — trigger point that ties lead time to average demand plus buffer.
- **Newsvendor critical ratio** — optimal order size meets the fractile Cu/(Cu+Co) on the demand CDF.
- **TCO** = Price + Ordering + Holding + Stockout + Quality + Disruption — never buy on sticker price alone.
- **Bullwhip effect** — amplify demand variability upstream; remedy via VMI, CPFR, smaller batches.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Trade-off First, Model Second
Every XAT operations case starts by asking which two objectives conflict. Cost minimisation and service-level maximisation pull in opposite directions because holding inventory raises working capital, while stockouts lose sales. Efficiency and resilience also conflict: cheaper single-sourcing lowers unit cost but raises disruption exposure. Centralisation lowers facility cost but lengthens last-mile delivery time. Before any formula, write the trade-off in one sentence — examiners reward clarity here more than arithmetic.

#### Core Models and When They Fit
The Economic Order Quantity (EOQ) assumes **steady, independent demand**, fixed ordering and holding costs, and instantaneous replenishment. It is the right model for staples like fasteners, packaging, or MRO items. For lumpy, perishable, or single-period demand (fashion, fresh produce, a one-shot seasonal SKU), use the **Newsvendor model** with critical ratio Cu/(Cu+Co), where Cu is underage cost (lost margin) and Co is overage cost (salvage or waste).

#### Make-or-Buy and Total Cost of Ownership
A make-or-buy decision must compare **relevant in-house cost** (variable + avoidable fixed) against the **net landed cost** of outsourcing. The TCO view includes ordering, holding, stockout, quality/defect, and disruption/risk costs — so a supplier quoting a 10% lower unit price can still be more expensive after defects and lead-time penalties are loaded.

| Concept | Key point |
| --- | --- |
| EOQ | √(2DS/H); valid only for steady, independent demand |
| ROP | d̄·L + SS; trigger replenishment when stock crosses this level |
| Safety Stock | z·σ_d·√L; z depends on Type-1 (cycle) vs Type-2 (fill rate) service level |
| TCO | Price + Ordering + Holding + Stockout + Quality + Disruption |
| Newsvendor | Optimal Q at fractile Cu/(Cu+Co) on demand CDF |

- **Sunk costs are irrelevant** — past setup, training, or capacity must not enter continue/abandon decisions.
- **Bullwhip root causes** are forecasting, lead time, batch ordering, and shortage gaming — fix with information sharing, not extra stock.
- **Capacity dilemma** — lead-time reduction costs fixed capacity; inventory build costs working capital.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Service-Level Distinction and Edge Cases
Type-1 (cycle) service level is the **fraction of order cycles without a stockout** and feeds a z-table directly. Type-2 (fill rate) service level is the **fraction of demand units fulfilled from stock** and requires iterative z because fill rate depends on the expected shortage per cycle. Confusing the two produces the wrong safety stock in roughly 30–40% of cases — a frequent XAT trap.

Safety stock scales with **√L under stationary demand**, but if lead time itself is variable, replace σ_d·√L with √(L·σ_d² + d̄²·σ_LT²). For service parts with long, intermittent demand, Croston's method or intermittent-demand smoothing outperforms EOQ.

#### Worked Micro-Example (Newsvendor)
A retailer buys festival gift packs at ₹400 each, sells at ₹600. Unsold packs salvage at ₹250. Demand is normally distributed with mean 1000 and σ = 200. **Cu = 600 − 400 = ₹200** (lost margin); **Co = 400 − 250 = ₹150** (waste loss). Critical ratio = 200/(200+150) = 0.571. The 0.571 fractile of N(1000, 200²) is ≈ 1000 + 0.18·200 ≈ 1036 packs. Order 1036, not the mean 1000.

#### Common Mistakes in the Exam
- Recommending "cheapest supplier" without loading TCO.
- Treating sunk setup cost as relevant in shutdown decisions.
- Centralising warehouses without weighing facility fixed cost vs last-mile transport.
- Using EOQ for lumpy or perishable demand.
- Optimising cost alone and never naming the sacrificed objective.

#### Practice Prompts
1. A garment exporter faces 30-day lead time with σ = 12 days and daily demand mean 200, σ = 40 units. Should they add safety stock, dual-source, or shorten lead time? Compute SS under both methods and justify.
2. An auto component firm can in-house machining at ₹180/unit or outsource at ₹160. In-house needs ₹50 lakh avoidable fixed cost. Annual volume 80,000. Include 2% defect cost on outsourcing and recommend with TCO framing.

---

## Continue your study

- **[View this topic in your XAT roadmap](/roadmap/?exam=xat&duration=1mo)** — see where "Operations and Supply Chain Dilemmas" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=xat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[XAT exam overview](/exams/xat/)** — pattern, eligibility, and syllabus
- **[All Decision-Making notes](/notes/xat/decision-making/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
