---
exam: accagl
examName: ACCA/CA Pakistan
subject: accounting
subjectName: Financial Accounting
topic: financ-005
topicName: Topic 5
weight: 3
country: accagl
generated: "2026-03-25T17:00:00"
---

# Topic 5: Group Financial Statements — Consolidation

### 🟢 Lite — Quick Review (1h–1d)

**IFRS 10 — Consolidated Financial Statements**

**Key Definitions:**
- **Parent** — Controls one or more entities (Subsidiaries)
- **Control** — Power over investee, exposure to variable returns, ability to use power to affect returns (IFRS 10.7)
- **Subsidiary** — Entity controlled by parent
- **NCI** — Non-Controlling Interest: equity in subsidiary not attributable to parent
- **Goodwill** — Excess of consideration + NCI over fair value of net identifiable assets

**Consolidation Steps:**
1. Identify control at acquisition date
2. Measure NCI (either at full goodwill method or proportionate share method)
3. Calculate goodwill
4. Eliminate intra-group balances and transactions
5. Allocate OCI to NCI

**Eliminations:**
- Cancel intercompany sales/purchases
- Cancel unrealised profit in closing inventory (upstream) and opening inventory (downstream)
- Cancel intercompany dividends
- Cancel intercompany loans and unrealised interest

⚡ **Exam tip:** Upstream sales (subsidiary → parent) create NCI share of unrealised profit. Downstream sales (parent → subsidiary) give FULL unrealised profit elimination — NCI not affected because subsidiary didn't record the sale to outside world.

---

### 🟡 Standard — Regular Study (2d–2mo)

**IFRS 10 — Consolidated Financial Statements**

**Control — The Three Elements (IFRS 10.7):**

1. **Power** — Existing rights that give current ability to direct relevant activities (what the entity does, how it generates profits)
2. **Exposure to variable returns** — Returns that can vary (dividends, cost savings, residual value, strategic benefits)
3. **Link between power and returns** — Ability to use power to affect amount of returns

A parent must control ALL three. Having two is insufficient.

**Power Over Investee — IFRS 10.10-14:**

Power arises from existing rights (voting rights, contractual rights to appoint/remove key management, rights to direct relevant activities). Holding majority of voting rights = automatic control. But control can exist with <50% holding (e.g., power over board, contractual arrangements).

**Full Goodwill vs Partial Goodwill Method:**

| Aspect | Full Goodwill | Partial Goodwill |
|---|---|---|
| NCI valued at | Fair value of whole subsidiary | Proportionate share of net assets |
| Goodwill | Total FV − FV of whole net assets | Parent's share only |
| Goodwill on SFP | Full goodwill amount | Parent's portion only |
| NCI in P&L | NCI's share of impairment | NCI's share of profit |

*Full Goodwill example:* Parent buys 80% for Rs.1,000. Subsidiary FV = Rs.1,400. Fair value of net assets = Rs.1,200.
- Full goodwill = (1,400 − 1,200) = 200
- Partial goodwill = 200 × 80% = 160
- Goodwill on consolidated SFP (full) = 200; (partial) = 160

**Consolidated SoFP — Key Line Items:**

```
NON-CURRENT ASSETS:
  Goodwill (gross less impairment)
  Property, Plant and Equipment
  Intangible Assets (identifiable)
CURRENT ASSETS:
  Inventories (less unrealised profit)
  Trade Receivables (less intercompany)
  Cash and Bank
TOTAL ASSETS                           XXX

EQUITY ATTRIBUTABLE TO PARENTS:
  Share Capital
  Retained Earnings (consolidated)
  Other Reserves
NCI                                    XXX
TOTAL EQUITY                           XXX

NON-CURRENT LIABILITIES:
  Borrowings
CURRENT LIABILITIES:
  Trade Payables (less intercompany)
TOTAL EQUITY AND LIABILITIES           XXX
```

**Intra-group Eliminations:**

*Inventory unrealised profit:*
- Upstream (sub to parent): NCI also bears share of unrealised profit
  - Deduct: Unrealised profit × NCI%
  - Parent's share: Unrealised profit × Parent%
- Downstream (parent to sub): Full elimination, NCI unaffected
  - Deduct: Full unrealised profit

*Intercompany dividends:*
- Cancel: Dividend due from subsidiary (parent's books)
- Cancel: Dividend payable by subsidiary (subsidiary's P&L)
- Only the portion relating to parent's share is eliminated for consolidated purposes

⚡ **Exam tip:** In exam questions, always check direction of intra-group sale. Upstream vs downstream determines NCI impact on unrealised profit elimination.

---

### 🔴 Extended — Deep Study (3mo+)

**Comprehensive Consolidation Analysis**

**IFRS 10 vs Old IAS 27 — Key Changes:**

IFRS 10 introduced a single control model replacing the old "risks and rewards" approach of IAS 27. Key changes:
- Consolidated when parent "controls" (not just "exposes to risks/rewards")
- Introduced de facto control concept (even without majority, can control through practical situations)
- Removed the option to not consolidate a subsidiary "held for sale" under IFRS 5 scope
- Changed treatment of investment entities (exemption from consolidation if certain criteria met)

**De Facto Control — IFRS 10.B42-B45:**

Even with <50% shareholding, parent may control when:
- Parent's voting rights are sufficiently large compared to others
- Other shareholders are widely dispersed with low participation
- Parent has ability to direct operating decisions affecting returns

**Step Acquisition — IFRS 10.C1-C6:**

When parent acquires subsidiary in stages:
1. At each transaction, remeasure previously held equity interest at fair value
2. Recognise gain/loss in P&L for difference between FV and carrying amount
3. Calculate goodwill ONCE at date control is obtained using:
   - Consideration transferred (including previously held equity at FV)
   - NCI (at either full or partial method)
   - Less: FV of net identifiable assets

**Disposal of Subsidiary — IFRS 10.25:**

When parent loses control:
1. Derecognise subsidiary's assets and liabilities
2. Recognise fair value of consideration received
3. Recognise any retained interest at fair value
4. Recognise gain/loss in P&L: (consideration + fair value of retained) − (share of net assets disposed + goodwill)
5. Reclassify OCI related to subsidiary to P&L or retained earnings (depending on item)

**Non-Controlling Interest — Measurement Options:**

*Option 1 — Fair Value (Full Goodwill):* NCI = FV of subsidiary's total equity. Goodwill includes NCI's portion. Required in many jurisdictions including IFRS as preferred.

*Option 2 — Proportionate Share (Partial Goodwill):* NCI = proportion of net assets at carrying amount. Goodwill only includes parent's share.

**Goodwill — Accounting Treatment:**

- Recognised as intangible asset on consolidated SFP
- NOT amortised (per IFRS 3 and IAS 36)
- Subject to annual impairment testing (IAS 36)
- Impairment loss: reduce carrying amount of goodwill, then other assets pro-rata
- Negative goodwill (bargain purchase): recognised immediately in P&L as gain

**Intra-group Transactions — Complete Elimination:**

*Sale of non-current asset within group:*
- Selling entity: remove NBV, record cash; gain/loss recognised internally
- Buying entity: record at NBV (not at transfer price)
- Correction needed: remove internal gain/loss from P&L; adjust buyer's NBV to original cost
- Depreciation adjusted to be based on original cost (not transfer value)

*Loan within group:*
- Cancel loan asset and loan liability
- Cancel accrued/past interest
- Only external interest to third parties appears in group accounts

*Management charges within group:*
- If truly eliminated → remove from both entities' P&L
- If arm's length documented → may be retained in group accounts

**Consolidated P&L — Key Points:**

- NCI in P&L = NCI% × subsidiary's profit after tax
- For upstream sales with unrealised profit: NCI adjusts downward (sub's profit reduced by its portion of unrealised loss)
- OCI of subsidiary: allocated between parent and NCI in proportion to their holdings

**Worked Example — Full Goodwill:**

*H Co acquires 75% of S Co on 1 Jan 20X3 for Rs.900,000 cash. S Co's identifiable net assets BV = Rs.1,000,000, FV = Rs.1,200,000 (land worth Rs.200,000 extra). Assume full goodwill method.*

```
Consideration transferred            900,000
NCI (25% × 1,200,000)               300,000
                                    ---------
Total consideration                  1,200,000
Less: FV of net identifiable assets (1,200,000)
                                    ---------
Goodwill                              NIL

But if full goodwill = 400,000:
Goodwill in consolidated SFP = 400,000
(NCI's share of goodwill = 100,000 included in NCI)
```

**Common Exam Mistakes:**

- Failing to adjust for fair value differences at acquisition (overriding carrying values)
- Confusing upstream and downstream unrealised profit treatment for NCI
- Forgetting to eliminate intercompany dividends (they inflate parent income otherwise)
- Mixing up the two NCI measurement methods — consistently apply one
- Not calculating goodwill correctly when NCI is measured at fair value vs proportionate
- Omitting the control concept in multi-step acquisition problems
- Incorrectly allocating OCI between parent and NCI shareholders

**Practice Tips:**
- Always prepare a pro-forma consolidation with: pre-acquisition reserves, post-acquisition reserves split, goodwill computation table
- In exam, draw a timeline to identify acquisition date and post-acquisition periods
- For complex consolidation, start with goodwill calculation, then work capital items, then equity

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
