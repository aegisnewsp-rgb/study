---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: quant
subjectName: "Finance"
topic: financ-002
topicName: "Topic 2"
weight: 3
country: rbi
generated: "2026-03-25T17:00:00"
---

# Bonds and Debentures

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Bonds and debentures** are debt instruments that allow issuers (governments, corporations, municipalities) to borrow money from investors. Understanding these instruments — their pricing, yields, risk profiles, and tax treatments — is critical for the RBI Grade B examination, especially for the Finance and Economic & Social Issues sections.

**Key Facts for RBI Grade B:**
- A **bond** is a fixed-income instrument with a face value (typically ₹1,000), a coupon rate (interest), and a maturity date.
- The **yield** is the effective return on a bond — influenced by the coupon rate, purchase price, and time to maturity.
- **Government Securities (G-Secs)** are the safest bonds in India — backed by the government.
- **Corporate bonds** carry credit risk — rated by agencies (CRISIL, ICRA, CARE).
- The **Yield Curve** plots bond yields against maturities — an important tool for predicting economic conditions.
- **YTM (Yield to Maturity)** is the total return anticipated if a bond is held until it matures.

**⚡ Exam tip:** Bond pricing, YTM calculations, yield curve concepts, and the distinction between different types of bonds are frequently asked in RBI Grade B.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Bond Fundamentals

### Definition and Key Terms

A **bond** is a debt security where an investor lends money to a borrower (issuer) for a specified period at a predetermined interest rate (coupon):

**Key Terms:**

| Term | Definition |
|---|---|
| **Face Value (Par Value)** | The nominal value of the bond, typically ₹1,000 — returned at maturity |
| **Coupon Rate** | Annual interest rate paid on the bond (e.g., 7% of face value) |
| **Maturity Date** | Date when the bond expires and face value is repaid |
| **Current Price** | Market price of the bond — may be above or below par |
| **Yield** | The effective return on the bond, expressed as a percentage |
| **Tenure** | Time remaining until maturity |

### Types of Bonds

#### By Issuer

**1. Government Securities (G-Secs):**
- Issued by the **Central Government** (Gilt-edged securities) or **State Governments** (SDLs — State Development Loans)
- Risk: **Zero default risk** — backed by the government
- Tenure: 1 year to 30+ years
- **Taxation:** Interest taxable; capital gains taxable
- **Tradable** on NSE and BSE

**2. Corporate Bonds:**
- Issued by **private companies, PSUs, banks**
- Risk: **Credit risk** — possibility of default
- Rated by **CRISIL, ICRA, CARE, Fitch, Brickwork**
- Higher yields than G-Secs to compensate for higher risk

**3. Public Sector Undertakings (PSU) Bonds:**
- Issued by government-owned corporations
- Backed (implicitly) by the government
- Considered nearly risk-free

#### By Coupon Type

**1. Fixed Rate Bonds:**
- Coupon rate remains **constant** throughout the bond's life
- Most common type

**2. Floating Rate Bonds:**
- Coupon rate **changes** with a reference rate (e.g., linked to repo rate or Treasury bill rate)
- Advantage: Investor benefits if rates rise

**3. Zero Coupon Bonds:**
- **No periodic interest payments**
- Issued at a **deep discount** to face value
- Face value paid at maturity
- Example: **T-Bills** are zero coupon instruments

#### By Security

**1. Secured Bonds:**
- Backed by **collateral** — specific assets
- In case of default, bondholders can claim the collateral

**2. Unsecured Bonds (Debentures):**
- **Not backed by collateral**
- Relies on the issuer's **creditworthiness**
- Higher risk than secured bonds

### Bond Pricing — Core Concept

**Bond Price = PV of Coupon Payments + PV of Face Value**

The **Present Value (PV)** is calculated by discounting at the **yield (YTM):**

```
Bond Price = Σ [Coupon / (1+YTM)^t] + [Face Value / (1+YTM)^n]
```

Where:
- t = year (1, 2, 3... n)
- n = number of years to maturity
- YTM = Yield to Maturity

**Example:**
- Face Value: ₹1,000
- Coupon Rate: 7% (annual coupon = ₹70)
- Maturity: 5 years
- YTM: 8%

Bond Price = ₹70/(1.08)¹ + ₹70/(1.08)² + ₹70/(1.08)³ + ₹70/(1.08)⁴ + ₹70/(1.08)⁵ + ₹1,000/(1.08)⁵

Bond Price = ₹64.81 + ₹60.01 + ₹55.57 + ₹51.45 + ₹47.64 + ₹680.58 = **₹960.06**

This bond trades **at a discount** because YTM (8%) > Coupon Rate (7%).

**Rule:** When YTM > Coupon Rate → Bond trades at **discount**
When YTM < Coupon Rate → Bond trades at **premium**
When YTM = Coupon Rate → Bond trades at **par**

---

## YTM (Yield to Maturity) — Detailed

### Definition

**YTM** is the total return anticipated on a bond if held until maturity, assuming all payments are made on time.

### YTM Formula (Approximation)

```
YTM ≈ [Annual Coupon + (Face Value - Current Price)/Years to Maturity] / [(Face Value + Current Price)/2]
```

**Example:**
- Face Value: ₹1,000
- Current Price: ₹960
- Annual Coupon: ₹70
- Years to Maturity: 5

YTM ≈ [70 + (1,000 - 960)/5] / [(1,000 + 960)/2]
YTM ≈ [70 + 8] / 980
YTM ≈ 78 / 980 = **7.96%**

### Determinants of Bond Yields

1. **Interest Rate Environment:** Rising rates → bond prices fall → yields rise
2. **Credit Quality:** Lower rated bonds → higher yields to compensate
3. **Time to Maturity:** Longer tenure → typically higher yield (normal yield curve)
4. **Liquidity:** Less liquid bonds → higher yields

---

## The Yield Curve

### Definition

The **Yield Curve** plots the yields (interest rates) of bonds against their maturities:

```
Yield (%)
    │                          ████
    │                    ████████
    │               ████████
    │          ████████
    │     ████████
    │████████████████
    └─────────────────────────────
        1yr  3yr  5yr  10yr  20yr
```

### Types of Yield Curves

**1. Normal (Upward Sloping):**
- Short-term yields < Long-term yields
- Most common — reflects normal economic conditions
- **Interpretation:** Investors demand higher returns for longer commitment

**2. Inverted (Downward Sloping):**
- Short-term yields > Long-term yields
- **Interpretation:** Often a **predictor of recession** — markets expect future rate cuts

**3. Flat:**
- Short-term and long-term yields are similar
- **Interpretation:** Transition between normal and inverted

### What the Yield Curve Signals

**Normal Curve → Economic expansion**
**Inverted Curve → Recession ahead**
**Steepening Curve → Recovery beginning**

### The RBI and the Yield Curve

The RBI's **Monetary Policy Committee (MPC)** uses the yield curve to assess:
- Inflation expectations
- Economic growth prospects
- Market interest rate expectations

---

## Debentures — Distinction from Bonds

| Feature | Debenture | Bond |
|---|---|---|
| **Issuer** | Usually corporations | Usually government or PSUs |
| **Security** | Generally unsecured | Usually secured by assets |
| **Registration** | Not always mandatorily registered | Usually registered |
| **Trust Deed** | Mandatorily issued with trust deed | Required for bonds |

### Types of Debentures

**1. Non-Convertible Debentures (NCDs):**
- Cannot be converted into equity shares
- Pay fixed interest — popular investment option

**2. Partly Convertible Debentures (PCDs):**
- Part converts into equity; part remains as debt

**3. Fully Convertible Debentures (FCDs):**
- Entire debenture converts into equity at a predetermined ratio

**4. Zero Interest Debentures:**
- No coupon — issued at deep discount
- Face value paid at maturity

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Duration and Modified Duration

### Duration

**Duration** measures a bond's **sensitivity to interest rate changes** — expressed in years:

**Macaulay Duration:**
- Weighted average time to receive all cash flows (coupons and principal)
- Higher duration → Higher sensitivity to rate changes

**Modified Duration:**
- Modified Duration = Macaulay Duration / (1 + YTM/n)
- Measures the % change in bond price for a 1% change in yield

**Example:**
- Modified Duration = 5 years
- If yields rise by 1% → Bond price falls by approximately **5%**
- If yields fall by 1% → Bond price rises by approximately **5%**

### Why Duration Matters

For **RBI Grade B**, understanding duration is crucial because:
- When RBI raises repo rates, bond prices fall
- The extent of price change depends on duration
- Portfolio managers use duration to manage **interest rate risk**

**Practical application:**
- If you expect RBI to **raise rates**, invest in **short-duration bonds** (lower duration)
- If you expect RBI to **cut rates**, invest in **long-duration bonds** (higher duration) — prices will rise more

### Credit Rating Agencies

In India, **credit rating agencies** assess bond credit quality:

| Agency | Rating Symbol |
|---|---|
| **CRISIL** | CRISIL AAA, AA, A, BBB |
| **ICRA** | ICRA AAA, AA, A, BBB |
| **CARE** | CARE AAA, AA, A, BBB |
| **India Ratings** | IND AAA, AA, A, BBB |

**Rating meanings:**
- **AAA (or highest):** Extremely strong capacity to pay interest and principal — virtually no default risk
- **AA:** Very strong capacity — slightly higher risk than AAA
- **A:** Strong capacity — susceptible to adverse changes
- **BBB:** Adequate capacity — but adverse conditions could impair it
- **Below BBB:** Junk status — speculative

### Taxation of Bonds

| Bond Type | Interest/Tax | Capital Gains Tax |
|---|---|---|
| **G-Secs** | Taxable at slab rate | Capital gains taxable |
| **Corporate Bonds** | Taxable at slab rate | Capital gains taxable |
| **Capital Gains Bonds (54EC)** | Tax-free | Locked; 54EC bonds |
| **Infrastructure Bonds** | Section 80CCF eligible | — |

**Capital Gains Bonds (54EC):**
- Exempt from capital gains tax if proceeds reinvested
- Lock-in: 5 years
- Available for: NHAI, REC, PFC bonds

### Practice Questions for RBI Grade B

1. A bond with face value ₹1,000, coupon rate 8%, maturity in 5 years, is trading at ₹950. Calculate its approximate YTM.
2. What is the difference between a bond trading at par, at a discount, and at a premium?
3. What does an inverted yield curve indicate about the economy?
4. What is the difference between a debenture and a bond? Which is generally safer?
5. If the repo rate rises, what happens to bond prices? Explain with reference to duration.

### Common Mistakes to Avoid

- **Confusing coupon rate with yield** — coupon rate is fixed; yield changes with bond price.
- **Forgetting that bond prices and yields move in opposite directions** — when yields rise, bond prices fall.
- **Confusing duration with maturity** — they are related but different; duration is a measure of interest rate sensitivity.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
