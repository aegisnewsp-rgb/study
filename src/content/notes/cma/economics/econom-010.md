---
exam: cma
examName: CMA Foundation
subject: economics
subjectName: "Economics"
topic: econom-010
topicName: Money and Banking
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Money and Banking

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Money is anything generally accepted as a medium of exchange, a unit of account, a store of value, and a standard of deferred payment. In India, the monetary aggregates are measured in four tiers — **M1** (narrow money), **M2**, **M3** (broad money, used by RBI), and **M4** — each adding wider deposit categories to the previous one. Commercial banks accept deposits and create credit using the money multiplier, while the **Reserve Bank of India (RBI)** regulates them through instruments such as CRR, SLR, Bank Rate, Repo Rate, and Open Market Operations.

| Aggregate | Composition | Typical Exam Reference |
|---|---|---|
| **M1** | Currency with public (C) + Demand Deposits (DD) | Narrow money |
| **M2** | M1 + Savings deposits with Post Office | – |
| **M3** | M1 + Time deposits with banks | Broad money (RBI benchmark) |
| **M4** | M3 + All deposits with Post Office | – |

> 💡 **High-Yield Memory Hook:** **"Cats Drop, Stop, All"** → **C**urrency + **D**emand + **S**avings + **T**ime + Post Office savings + Total deposits = **M1 → M2 → M3 → M4**. Remember: M3 is what RBI reports as broad money, not M1.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Functions and Types of Money

Money discharges four primary (statutory) functions: medium of exchange (eliminates the double-coincidence-of-wants problem of barter), unit of account (numerical measure of value), store of value (wealth held over time), and standard of deferred payment (settles future obligations). Secondary functions include transfer of value and maximisation of utility. Types of money range from commodity money (gold, silver) to fiat money (RBI-issued notes backed by government decree) and credit money (cheques, bills). **Near money** refers to highly liquid assets such as savings deposits and treasury bills that are not directly usable as exchange but convert easily into money.

#### Monetary Aggregates

The RBI compiles four monetary measures. **M1** = C + DD is the narrowest, most liquid stock. **M3** = M1 + time deposits with banks is the broad measure reported in weekly statistical supplements. **M4** = M3 + all post office deposits captures the widest formal deposit base.

| Aggregate | Formula | Liquidity Rank | Used by RBI? |
|---|---|---|---|
| M1 | C + DD | 1 (Highest) | For narrow-money analysis |
| M2 | M1 + Post Office savings | 2 | Limited reporting |
| M3 | M1 + Time deposits | 3 | Yes — broad money |
| M4 | M3 + Post Office deposits | 4 (Lowest) | For long-term studies |

#### Credit Creation by Commercial Banks

Commercial banks operate under a **fractional reserve system**: they keep a fraction of deposits as reserves and lend out the rest. The lending, once redeposited, generates further deposits, producing an **initial deposit × (1/r)** expansion, where **r** is the required reserve ratio.

> 📌 **Formula Check:** Credit Creation = Initial Deposit × (1/r). Example: with r = 10%, an initial deposit of ₹1,000 creates total deposits of ₹10,000. Dimension of the result is **[M]** (₹), dimensionless ratio (1/r) is a pure number.

The **money multiplier** **m = (1 + c) / (r + e + c)** links base money to broad money, where **c** = currency-deposit ratio, **r** = reserve-deposit ratio, **e** = excess reserve ratio. **Total Money Supply = H × m**, where **H = C + R** is high-powered money.

#### Functions of the RBI

The RBI performs six core roles:
1. **Issuer of currency** — issues all notes except the one-rupee coin.
2. **Banker to the government** — manages central and state government accounts.
3. **Banker's bank** — keeps the cash reserves of commercial banks.
4. **Controller of credit** — uses CRR, SLR, Repo Rate, OMO, MSF.
5. **Custodian of foreign exchange** — manages the forex reserves and the rupee's external value.
6. **Regulator of the banking system** — licensing, supervision, and inspection.

#### 🎯 Exam-Level Worked Problem

**Question:** A commercial bank receives an initial deposit of ₹5,000. The required reserve ratio is 20%. Assuming no leakages and no excess reserves, calculate (a) the total credit created by the banking system, and (b) the money multiplier.

#### Solution:
- (a) Credit Creation = Initial Deposit × (1/r) = ₹5,000 × (1/0.20) = ₹25,000.
- (b) Money Multiplier m = 1/r = 1/0.20 = 5.
- **Verification (round-by-round):**
  - Round 1: Deposit ₹5,000; keep ₹1,000 reserve; lend ₹4,000.
  - Round 2: ₹4,000 redeposited; keep ₹800; lend ₹3,200.
  - Round 3: ₹3,200 redeposited; keep ₹640; lend ₹2,560.
  - Sum of total deposits ≈ ₹5,000 + ₹4,000 + ₹3,200 + … = ₹25,000. ✓

> ⚠️ **Examiner Trap:** Students often divide by r instead of multiplying by (1/r), or compute the **new loan per round** (which is geometric and sums to a smaller number) instead of the **total deposits**. The credit-creation answer is always the *total deposit expansion*, not just the loans.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Quantitative vs Qualitative Credit Control

| Tool | Type | Mechanism | Effect |
|---|---|---|---|
| CRR | Quantitative | % of NDTL kept with RBI | ↑ CRR → ↓ lendable funds |
| SLR | Quantitative | % of NDTL in govt securities/gold | ↑ SLR → ↓ credit |
| Bank Rate | Quantitative | Long-term refinance rate | ↑ Bank Rate → ↓ borrowing |
| Repo Rate | Quantitative | Short-term LAF borrowing | ↑ Repo → ↓ liquidity |
| Reverse Repo | Quantitative | Rate on bank deposits with RBI | ↑ Reverse Repo → ↑ parking |
| MSF | Quantitative | Overnight standing facility | Penalty corridor rate |
| OMO | Quantitative | Buy/sell G-Secs | Direct liquidity injection |
| Margin | Qualitative | Down payment on loans | ↑ margin → ↓ demand |
| Moral Suasion | Qualitative | RBI's verbal/written advice | Voluntary compliance |
| Direct Action | Qualitative | Penal action on banks | Last-resort coercion |

#### Edge Cases and Exceptions

- **CRR is on NDTL, not just demand deposits.** Net Demand and Time Liabilities subtract inter-bank liabilities. A common error is to apply CRR only to demand deposits.
- **Bank Rate ≠ Repo Rate.** The Bank Rate (now aligned to the MSF rate since the Monetary Policy Framework Agreement, 2016) is the long-term refinance signal; Repo Rate operates only under the Liquidity Adjustment Facility (LAF) window.
- **NBFCs cannot accept demand deposits repayable on demand.** They accept only term deposits and operate under different prudential norms than scheduled commercial banks.
- **Open Market Operations are two-sided.** RBI both purchases (injects liquidity) and sells (absorbs liquidity) government securities — students recall only the "sale" side.
- **High-powered money (H) is base money, not narrow money.** H = C + R; M1 = C + DD. The two are related via the money multiplier but are not identical.
- **Quantity Theory of Money:** MV = PT, where M = money supply, V = velocity, P = price level, T = transactions. Doubling M with constant V and T doubles P — the classical inflation link.

#### Common Mistakes in CMA Foundation Papers

1. Stating M1 is the broadest measure — RBI tracks **M3** as broad money.
2. Treating credit creation as a single-step deposit, ignoring the multiplicative round-by-round process.
3. Confusing Repo Rate (LAF borrowing) with Reverse Repo Rate (LAF parking) — opposite directions of liquidity effect.
4. Forgetting that currency with banks is **excluded** from "Currency with public" in M1.
5. Believing NBFCs are banks — they accept only term deposits and cannot issue cheques drawn on themselves.

#### Advanced Practice Prompts

1. **Numerical:** If the public holds 20% of money as currency, banks keep 15% as reserves (including 4% excess), and the RBI injects ₹10,000 crore as base money, compute M1 using m = (1 + c)/(r + e + c).
2. **Conceptual:** Explain, with diagram-equivalent reasoning, why a simultaneous increase in CRR and Reverse Repo Rate is more contractionary than either used alone.

---

## Continue your study

- **[View this topic in your CMA Foundation roadmap](/roadmap/?exam=cma&duration=1mo)** — see where "Money and Banking" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cma&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CMA Foundation exam overview](/exams/cma/)** — pattern, eligibility, and syllabus
- **[All Economics notes](/notes/cma/economics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
