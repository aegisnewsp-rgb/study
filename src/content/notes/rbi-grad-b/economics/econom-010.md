---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: economics
subjectName: "Economics"
topic: econom-010
topicName: "Money and Banking"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-24"
---

# Money and Banking

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

Money is any generally accepted token that discharges debt, and banking is the system that creates and circulates it. The RBI fixes the monetary base MB = C + R, where C is currency with the public (₹) and R is bank reserves parked with the RBI (₹), then money supply expands through the multiplier. The working definition for policy purposes is M3 = M1 + time deposits of the public, and the multiplier relation $m = \dfrac{1 + cdr}{cdr + rdr}$ controls how a change in CRR or SLR moves broad money.

| Measure | Includes | Excludes | RBI's label |
|---|---|---|---|
| M0 | Currency with public + bankers' deposits with RBI | Demand deposits | Reserve money |
| M1 | M0 + demand deposits + other RBI deposits | Time deposits | Narrow money |
| M3 | M1 + time deposits of public with banks | NBFC deposits | Broad money |

> 💡 **High-Yield Memory Hook:** **C-D-R-D** — "**C**urrency with public sets **cdr**; banks' **D**eposits split into reserves and loans through **rdr**." Recall the C→cdr, D→rdr mapping and the multiplier formula writes itself.

Crank out the calculation: if cdr = 0.4 and rdr = 0.1, then m = 1.4 / 0.5 = 2.8, so every ₹1 of MB produces ₹2.80 of M3.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Core mechanisms, instrument toolkit, and one fully worked exam-style question.

#### Functions and Hierarchy of Money

Money discharges four jobs — medium of exchange, unit of account, store of value, and standard of deferred payment. The RBI publishes five aggregates weekly: M0, M1, M2, M3, M4. M2 = M1 + savings deposits of post office savings banks. M4 = M3 + total deposits with post offices (excluding those in M1). Policy action targets M3 because time deposits dominate the funding base of Indian banks.

#### Reserve Bank of India: Roles

The RBI Act, 1934 plus subsequent amendments give the RBI six statutory functions: monetary authority, issuer of banknotes (denominations ₹2, ₹5, ₹10, ₹20, ₹50, ₹100, ₹200, ₹500 with ₹2000 notes no longer printed, plus commemorative pieces), banker to the government, banker to banks (Lending Liquidity Facility, MSF, and Reverse Repo), manager of foreign exchange under FEMA 1999, and supervisor of banks, NBFCs and cooperative credit institutions. The Re 1 coin and coins below ₹1 are issued by the Ministry of Finance, not the RBI.

#### Quantitative vs Qualitative Tools

| Quantitative (reserve / rate) | Qualitative (selective) | Direct instruments |
|---|---|---|
| CRR on NDTL | Priority sector norms | OMO (outright + LAF) |
| SLR on NDTL | Moral suasion | MSS bond auctions |
| Repo / Reverse Repo / MSF | Margin requirements | |
| Bank Rate | Credit rationing | |

Quantitative tools move the policy rate directly; qualitative tools redirect existing credit.

#### Money Multiplier — First-Principles Derivation

Start from M = C + D (currency + deposits) and MB = C + R (currency + reserves). Divide M by MB:

$$m = \frac{M}{MB} = \frac{C + D}{C + R} = \frac{\frac{C}{D} + 1}{\frac{C}{D} + \frac{R}{D}} = \frac{cdr + 1}{cdr + rdr}$$

where cdr = C/D is the public's currency-to-deposit ratio (dimensionless) and rdr = R/D is the reserve-to-deposit ratio of banks (dimensionless). Consequently $M_s = m \times MB$. A one-percentage-point hike in CRR raises rdr, lowers m, and shrinks M3 even with an unchanged base.

#### Numerical Walk-through

Suppose cdr = 0.5, rdr = 0.2, MB = ₹10,00,000 crore. Money multiplier m = (1 + 0.5) / (0.5 + 0.2) = 1.5 / 0.7 = 2.143. Money supply M3 = 2.143 × 10,00,000 = ₹21,42,857.14 crore (dimension [₹]). Now raise CRR so that rdr climbs to 0.3. New m = 1.5 / 0.8 = 1.875. M3 = 1.875 × 10,00,000 = ₹18,75,000 crore. Multiplier contraction alone wiped out ₹2,67,857.14 crore, without the base moving.

#### Worked Exam-Style Question

*Items bank reserves ₹3,00,000, currency with public ₹6,00,000, demand deposits ₹9,00,000 and time deposits ₹18,00,000. Compute M0, M1, M3 and the money multiplier with MB as denominator.*

**Step 1 — M0 (reserve money):** bank reserves (₹3,00,000) + currency with public (₹6,00,000) + other RBI deposits (assume ₹0 here) = **₹9,00,000 crore**.

**Step 2 — M1 (narrow money):** M0 (₹9,00,000) + demand deposits (₹9,00,000) = **₹18,00,000 crore**.

**Step 3 — M3 (broad money):** M1 (₹18,00,000) + time deposits (₹18,00,000) = **₹36,00,000 crore**.

**Step 4 — multiplier:** MB = C + R = 6,00,000 + 3,00,000 = ₹9,00,000 crore. m = M3 / MB = 36,00,000 / 9,00,000 = **4.0**.

A student who defines MB as deposits with the RBI only, forgetting that currency with public is part of the base, would compute m = 36,00,000 / 3,00,000 = 12 — wrong by a factor of three.

> ⚠️ **Examiner Trap:** The correct denominator for the multiplier is the **monetary base**, never demand deposits and never total deposits; a base that excludes currency with public doubles the multiplier and inflates every downstream answer.

---

### 🔴 Extended — Deep Study (3mo+)

> Edge cases, transmission flaws, and the limits of the textbook multiplier.

#### Where the Standard Multiplier Breaks

The textbook m = (1 + cdr)/(cdr + rdr) assumes the public splits cash and deposits at a fixed cdr, banks hold only required reserves, and no leakage to the shadow economy. Three real-world breaks matter for descriptive answers.

| Textbook assumption | Real-world break | Policy consequence |
|---|---|---|
| Banks fully lend reserves | Excess reserves held for LCR compliance | Multiplier floor rises in stressed quarters |
| cdr fixed by the public | Digital payments flatten cdr | LM curve shifts right even with stable rdr |
| No NBFC leakage | NBFCs on-sold bank credit | Reported M3 understates total purchasing media |
| One-period | Banks recycle retail deposits over many cycles | Effective m exceeds the one-period value |

A precise answer would call this the "observed money multiplier" falling short of the "textbook money multiplier" during periods of high precautionary deposit demand.

#### Monetary Transmission: Channels and Frictions

Policy rate moves through four channels: bank lending rate pass-through, asset price (equity and bond revaluation), expectations (anchoring inflation outlook), and credit (bank balance sheet capacity). Pass-through is incomplete because PSL carve-outs, MCLR reset dates, and sticky term-deposit pricing protect bank Net Interest Margins. Effective transmission to CPI is now estimated at roughly half a one-percentage-point policy move reaches retail lending within four quarters under the current framework — exact figures vary by RBI study and must be checked against the latest Monetary Policy Report.

#### NPA, Capital Adequacy and Liquidity Buffers

An asset becomes an NPA when principal or interest is overdue for 90 days. Sub-standard is up to 12 months from NPA date, Doubtful-1 up to one year from that, Doubtful-2 the next year, Doubtful-3 the year after, and Loss when identified as uncollectible. Under Basel III, CRAR = (Tier 1 + Tier 2) / Risk-Weighted Assets × 100, with Tier 1 = paid-up equity + disclosed free reserves (core capital) and Tier 2 = subordinated debt + general provisions + upper Tier-2 instruments. The Liquidity Coverage Ratio (LCR) = High-Quality Liquid Assets / Total net cash outflows over 30 days, and the Net Stable Funding Ratio (NSFR) = Available Stable Funding / Required Stable Funding; both must remain ≥ 100%.

#### Advanced Practice Prompts

1. If the RBI raises the MSF corridor to 50 basis points above Repo, predict the order in which call money, CD, and government bond yields adjust, and explain why money market mutual fund NAVs may move before certificate of deposit yields.
2. Construct a balance-sheet table showing a ₹100 increase in RBI lending through Repo and trace its path into M3 when SLR also rises by 1 percentage point on the same day; quantify the offset to the policy impulse.

> ⚠️ **Examiner Trap:** Writing "Bank Rate = Repo Rate" without naming the 100-basis-point penalty differential that MSF carries, or claiming the RBI Governor decides the rate instead of the six-member MPC under Section 45ZL of the amended RBI Act.

## Continue your study

- **[View this topic in your RBI Grade B roadmap](/roadmap/?exam=rbi-grad-b&duration=1mo)** — see where "Money and Banking" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=rbi-grad-b&duration=1d)** — 1-day sprint covering highest-weight topics
- **[RBI Grade B exam overview](/exams/rbi-grad-b/)** — pattern, eligibility, and syllabus
- **[All Economics notes](/notes/rbi-grad-b/economics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
