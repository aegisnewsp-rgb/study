---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: finance
subjectName: "Finance"
topic: financ-002
topicName: "Bonds and Debentures"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-08"
---

# Bonds and Debentures

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **bond** is a debt instrument obligating the issuer to pay periodic **coupon interest** on a stated **face value (par)** and to repay the principal at maturity. A **debenture** is an *unsecured* corporate bond backed only by the issuer's general creditworthiness, governed in India by the Companies Act, 2013 (Sections 71–73) and the SEBI (Debenture Trustees) Regulations, 1993.

The single most-tested formula is the **price-yield** relationship:

$$P = \sum_{t=1}^{n} \frac{C_t}{(1+y)^t} + \frac{F}{(1+y)^n}$$

where $C_t$ = periodic coupon (₹), $y$ = periodic YTM, $F$ = face value (₹), $n$ = periods to maturity.

- **Premium** if coupon > YTM; **par** if equal; **discount** if coupon < YTM.
- **YTM** = IRR of all coupon + principal cash flows to maturity.
- **Dirty price** = Clean price + accrued interest (use this when settling trades).
- **Perpetual NCDs** issued by banks qualify as **Basel III Tier-1 (AT1) capital**.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Bond vs Debenture vs Equity

Bonds sit *senior* to preference share and equity in liquidation but pay a *contractual* return, not a residual one. Within bonds, **secured debentures** carry a charge on specific assets, while **unsecured (naked) debentures** rely only on general credit. Convertible debentures (CCDs) give the holder an option to swap into equity at a predetermined ratio.

#### Yield Measures

Three yields appear in numerical questions:

| Yield | Formula | Used for |
| --- | --- | --- |
| Current Yield | $CY = C / P_0$ | Quick income comparison across market prices |
| Yield to Maturity (YTM) | IRR of all coupons + principal | Total return if held to maturity |
| Yield to Call (YTC) | IRR to first call date | Callable bonds; YTC < YTM = call risk priced in |

C = annual coupon (₹); P₀ = current market price (₹).

#### Price-Yield Mechanics

The bond price curve is **convex**: a fall in yield produces a larger percentage price gain than the loss from an equal yield rise — this is *convexity*, exploited by long-duration portfolio managers.

- When $y$ falls 100 bps, price rises; when $y$ rises 100 bps, price falls.
- Modified Duration $\approx -\%$ price change per 100 bps yield move (a first-order linear approximation).
- Reinvestment risk grows as YTM rises because coupons reinvest at higher rates.

#### Indian Market Structure

Government of India securities (G-Secs) trade on the RBI's NDS-OM platform; corporate bonds and NCDs trade on BSE/NSE wholesale debt segments and largely settle through CCIL. Public issues follow SEBI (Issue and Listing of Non-Convertible Securities) Regulations, 2021; private placements route through QIBs with demat-only settlement.

#### Typical RBI Grade B Question Types

1. Compute current yield or price from coupon, YTM, maturity.
2. Identify whether a bond trades at premium/par/discount.
3. State whether a perpetual NCD qualifies as AT1 capital (yes, for banks).
4. Name the trustee or regulator (SEBI's Debenture Trustee Regulations, 1993).

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Numerical — Bond Price

A 5-year bond, face value ₹1,000, annual coupon 10% (₹100/yr), YTM 8%.

- $P = \frac{100}{1.08} + \frac{100}{1.08^2} + \frac{100}{1.08^3} + \frac{100}{1.08^4} + \frac{1100}{1.08^5}$
- $P ≈ 92.59 + 85.73 + 79.38 + 73.50 + 680.58 ≈ 1,011.78$

The bond trades at a **premium** (coupon 10% > YTM 8%). Approximate YTM check using $[C + (F-P)/n]/[(F+P)/2] = [100 + (1000-1011.78)/5]/[(1000+1011.78)/2] ≈ 9.86%$.

#### Approximate YTM — Exam Shortcut

For non-calculator MCQs, the shortcut formula suffices:

$$YTM \approx \frac{C + \frac{F-P}{n}}{\frac{F+P}{2}} \times 100$$

Accuracy improves when price is near par and maturity is short.

#### Edge Cases and Traps

1. **Accrued interest**: a buyer settling 90 days into a 180-day coupon period pays clean price + 50% of the coupon.
2. **Indexation** is *not* available on listed NCD interest — only capital-gains indexation applies on sale. Many students wrongly apply it to interest income.
3. **Perpetual AT1 bonds** carry a Basel III *coupon discretion* clause: the bank may skip coupons without triggering default, and the instrument is written down if the issuer hits a trigger event.
4. **Zero-coupon bonds** price at a deep discount because all reinvestment risk is concentrated at maturity.

#### Adjacent Topics to Link

- **Term structure of interest rates** (yield curve shapes).
- **Credit risk and rating migration** (CRAs: CRISIL, ICRA, CARE, India Ratings).
- **Securitisation and SARFAESI** for NBFC/HFC bond portfolios.
- **Basel III capital adequacy** — where AT1 perpetual NCDs slot in.

#### Practice Prompts

1. A 3-year bond of face value ₹500 pays 9% annual coupon. YTM is 11%. Compute the price and state whether it trades at premium, par or discount.
2. Explain in 4 lines why a callable bond's YTC is generally lower than its YTM, and what this implies for the investor's reinvestment option.

---

## Continue your study

- **[View this topic in your RBI Grade B roadmap](/roadmap/?exam=rbi-grad-b&duration=1mo)** — see where "Bonds and Debentures" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=rbi-grad-b&duration=1d)** — 1-day sprint covering highest-weight topics
- **[RBI Grade B exam overview](/exams/rbi-grad-b/)** — pattern, eligibility, and syllabus
- **[All Finance notes](/notes/rbi-grad-b/finance/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
