---
exam: accagl
examName: ACCA/CA Pakistan
subject: accounting
subjectName: Financial Accounting
topic: financ-008
topicName: "Leases & Financial Instruments"
weight: 3
country: accagl
generated: "2026-03-25T17:00:00"
---

# Topic 8: Leases & Financial Instruments

### 🟢 Lite — Quick Review (1h–1d)

**IFRS 16 — Leases & IFRS 9 — Financial Instruments**

**IFRS 16 — Key Changes (Effective 1 Jan 2019):**

Lessee accounting: ALL leases recognised on SoFP (no operating lease off-balance sheet treatment).

*At commencement date:*
- **Right-of-Use Asset** = Lease liability + Advance payments + Initial direct costs − Lease incentives received
- **Lease Liability** = PV of remaining lease payments (discounted at incremental borrowing rate)

*Subsequent measurement:*
- ROU Asset: Cost model (depreciate over lease term or useful life)
- Lease Liability: Effective Interest Method (interest expense + principal repayment)

**IFRS 9 — Financial Instruments Classification:**

| Classification | Basis | Measurement |
|---|---|---|
| **Amortised Cost** | Hold to collect contractual cash flows (SPPI test) | Cost less impairment |
| **FVOCI (Debt)** | Hold to collect + sell | Fair value, gains/losses to OCI |
| **FVOCI (Equity)** | Irrevocable election at initial recognition | Fair value, gains/losses to OCI |
| **FVPL** | Anything else, or if eliminates accounting mismatch | Fair value, gains/losses to P&L |

⚡ **Exam tip:** SPPI = Solely Payments of Principal and Interest. If cash flows include anything beyond principal and basic interest (e.g., equity returns, commodity prices), it's NOT amortised cost — it's FVPL.

---

### 🟡 Standard — Regular Study (2d–2mo)

**IFRS 16 — Leases (Lessee Perspective)**

**Lease Term — IAS 17 vs IFRS 16:**

Lease term = non-cancellable period + periods covered by extension/termination options if reasonably certain to exercise.

*Reasonably certain:* High bar — if entity is more likely than not to extend, include. If uncertain, don't include. This significantly affects lease term and liability.

**Lease Liability — Initial Measurement:**

Lease Liability = PV of:
- Fixed payments (including in-substance fixed)
- Variable payments based on index/rate (using index at commencement)
- Amounts expected under residual value guarantees
- Exercise price of purchase option (if reasonably certain)
- Payments for termination option (if reasonably certain to exercise)

Discounted at: Incremental Borrowing Rate (IBR) — rate a similar lessee would pay for a similar asset over a similar term.

**Lease Liability — Subsequent Measurement:**

```
Interest Expense = Opening Liability × IBR
Cash Payment (fixed rent) = ?
Principal Repayment = Cash Payment − Interest Expense
Closing Liability = Opening Liability − Principal Repayment
```

**Short-Term Leases & Low-Value Assets:**

- Short-term leases (<12 months): Exemption — recognise expense on straight-line basis
- Low-value assets (<$5,000): Exemption — same treatment as short-term
- Both exemptions are POLICY choices, applied class-by-class.

**Sale and Leaseback — IFRS 16.102-103:**

If sale meets IFRS 15 criteria for a genuine sale:
- Seller-lessee measures ROU asset at proportion of previous carrying amount
- Gain on sale = (Consideration − Carrying Amount) × (1 − Proportion retained)
- Excess = Deferred income (revenue over remaining lease term)

**IFRS 9 — Financial Instruments**

**Recognition and Derecognition:**

*Financial assets:* Recognised when entity becomes party to contract. Derecognised when contractual rights expire OR when transferred to another party who assumes those rights.

*Derecognition test (IFRS 9.3.2.1):*
1. Risks and rewards transferred? If yes → derecognise
2. If risks retained but control transferred → may derecognise
3. If neither → continue to recognise

**Impairment — Expected Credit Loss Model (IFRS 9.5.5):**

Three-stage model:
- **Stage 1:** No significant increase in credit risk → 12-month ECL
- **Stage 2:** Significant increase in credit risk (but not credit-impaired) → Lifetime ECL
- **Stage 3:** Credit-impaired (objective evidence of impairment) → Lifetime ECL

*ECL = PD × LGD × EAD*
- PD = Probability of Default
- LGD = Loss Given Default (1 − Recovery Rate)
- EAD = Exposure at Default

⚡ **Exam tip:** For trade receivables without significant financing component, the simplified approach is used — lifetime ECL always, no staging. This applies to most trade receivables in Pakistan.

**Hedge Accounting — IFRS 9.6:**

| Type | Hedged Item | Hedge Instrument |
|---|---|---|
| **Fair value hedge** | Recognised asset/liability or firm commitment | Derivatives |
| **Cash flow hedge** | Forecasted transaction or firm commitment | Derivatives |
| **Hedge of net investment** | Net assets of foreign operation | Derivatives |

---

### 🔴 Extended — Deep Study (3mo+)

**Comprehensive Leases & Financial Instruments Analysis**

**IFRS 16 — Lessor Accounting:**

Lessor accounting largely unchanged from IAS 17 (with some changes to definition):
- **Operating leases:** Lease payments as income, asset remains on lessor's books
- **Finance leases:** Derecognise asset, recognise net investment in lease

*Finance lease net investment = Gross lease receivable + Unguaranteed residual value*
*Finance income allocation:* Use effective interest method to produce constant periodic rate of return.

**IFRS 16 — Variable Lease Payments:**

Most variable payments are excluded from lease liability:
- Payments varying with performance or usage (e.g., turnover rent, machine hours)
- Contingent rents (e.g., increases tied to inflation index)
- These are expensed as incurred

Exception: In-substance fixed payments (payments that are in substance fixed even if form appears variable) ARE included.

**Subleases and Lease Modifications:**

*Sublease classification:* Determine by reference to ROU asset from head lease, not underlying asset.

*Lease modifications:* Treated as separate new lease if modification grants additional right-of-use AND price reflects standalone selling price. Otherwise, remeasure lease liability at effective date using revised discount rate.

**IFRS 9 — SPPI Test:**

The "Solely Payments of Principal and Interest" test determines whether financial asset qualifies for amortised cost.

*Examples of FAILS:*
- Investments with equity-linked returns (e.g., returns based on stock index)
- Asset-backed securities where cash flows depend on performance of underlying assets
- Convertible notes with equity conversion feature
- Investments with cash flows that include currency exchange movements

*Examples of PASSES:*
- Plain vanilla loans (principal + market interest)
- Trade receivables (short-term, no financing component)
- Government bonds (principal + interest)
- Corporate bonds with fixed or floating rates

**Business Model Assessment (IFRS 9.4.1.1):**

Entities assess their business model at portfolio level, not instrument-by-instrument:
- **Hold to collect:** Financial assets held to collect contractual cash flows → Amortised Cost
- **Hold to collect and sell:** Both objectives → FVOCI
- **Other:** Trading, managed on fair value basis → FVPL

**Impairment — Detailed Application:**

For trade receivables (simplified approach):
```
Allowance = Lifetime ECL (always)
Expected credit loss = Probability of default × Loss given default × Exposure

General approach (Stage 1-3):
ECL = 12-month ECL for Stage 1
ECL = Lifetime ECL for Stage 2 and 3
```

*Forward-looking information:* ECL must incorporate reasonable and supportable forward-looking information (macroeconomic factors, GDP growth, unemployment rates, industry outlook).

**Financial Guarantee Contracts:**

A financial guarantee contract requires the issuer to make specified payments to reimburse the holder for loss it incurs if a debtor fails to make payment when due. Initially recognised at fair value; subsequently at higher of:
- Amount determined under IAS 37
- Amount initially recognised less cumulative amortisation

**Compound Financial Instruments — IFRS 9/IAS 32:**

A compound instrument (e.g., convertible bond) has both liability and equity components:
1. At issuance: Calculate FV of similar debt without conversion option
2. Equity component = Total proceeds − FV of liability component
3. Issue costs: Allocated pro-rata to equity and liability components

**Worked Example — IFRS 16 Lease Liability:**

*Entity signs 5-year lease on equipment. Annual payments: Rs.100,000 at end of each year. IBR: 8%. PV factor (ordinary annuity, 5 years, 8%) = 3.99271.*

```
Lease liability (initial) = 100,000 × 3.99271 = Rs.399,271

Year 1:
  Opening liability: 399,271
  Interest (8%):     31,942
  Payment:         (100,000)
  Closing:          331,213

Year 2:
  Opening:          331,213
  Interest:          26,497
  Payment:         (100,000)
  Closing:          257,710
```

*ROU Asset:*
```
Initial: 399,271 (lease liability)
Add: Initial direct costs (say 5,000)
Less: Advance payments (nil)
ROU Asset at commencement: 404,271

Depreciation (straight-line over 5 years): 404,271 / 5 = 80,854/year
```

**Common Exam Mistakes:**

- Incorrectly calculating lease liability by using the wrong discount rate or wrong annuity factor
- Confusing IFRS 16 treatment of variable lease payments (often excluded from liability)
- Applying IFRS 9 classification to lease receivables as if they were financial assets
- Misapplying Stage 2 ECL when credit risk has not significantly increased
- Not distinguishing between modification and new lease under IFRS 16
- Forgetting that lease modifications require remeasurement of lease liability unless treated as a separate new lease
- Overlooking the simplified approach for trade receivables (always lifetime ECL)

**Practice Tips:**
- Master the annuity factor tables and understand how to interpolate for non-standard terms
- In consolidated financial statements, remember that intra-group leases are eliminated — the group presents as if it owned the asset
- For IFRS 9, always do the SPPI test first, then the business model test — in that order

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
