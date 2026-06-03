---
exam: ca-found
examName: CA Foundation
subject: economics
subjectName: "Economics"
topic: econom-003
topicName: Elasticity
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-05-25"
---

# Elasticity

### 🟢 Lite — Quick Review (1h–1d)

**Price Elasticity of Demand (Ed)** measures how responsive the quantity demanded of a good is to a change in its own price, holding other factors constant. The **coefficient of elasticity** (Ed) is always reported as a positive (absolute) value regardless of the inverse relationship between P and Q.

**Core Formula:**
Ed = (% change in quantity demanded) / (% change in price) = (ΔQ/Q) ÷ (ΔP/P)

**Key threshold values:**
| Ed Value | Classification | Effect on Total Revenue |
|---|---|---|
| Ed = 0 | Perfectly inelastic | TR moves with price only |
| Ed < 1 | Relatively inelastic | TR moves with price only |
| Ed = 1 | Unitary elastic | TR constant |
| Ed > 1 | Relatively elastic | TR moves opposite to price |
| Ed = ∞ | Perfectly elastic | Horizontal demand curve |

**Three exam shortcuts to memorise:**
- When price **falls** and Ed > 1 → Total Revenue (TR) **increases**
- Arc Ed uses mid-point formula: **(P₁+P₂)/(Q₁+Q₂) × (Q₂−Q₁)/(P₂−P₁)**
- Point Ed at (P, Q) on curve = **(P/Q) × (dQ/dP)**

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Definition and Interpretation

Price Elasticity of Demand (Ed) quantifies the **degree of responsiveness** of quantity demanded to a change in the good's own price, ceteris paribus. It is a **unitless ratio** comparing percentage changes, ensuring the measure remains valid regardless of the currency or scale used.

#### The Formula (Percentage Method)

$$E_d = \frac{\%\ \Delta Q_d}{\%\ \Delta P} = \frac{(Q_2 - Q_1)/Q_1}{(P_2 - P_1)/P_1}$$

Where Q₁, Q₂ are quantities before and after, and P₁, P₂ are prices before and after.

#### Five Classification Ranges

1. **Perfectly Inelastic (Ed = 0):** A 20% price rise causes zero change in quantity demanded. The demand curve is vertical. Example: life-saving medicines for a price-insensitive patient.
2. **Relatively Inelastic (0 < Ed < 1):** A 20% price rise yields less than 20% demand drop. Necessities typically fall here.
3. **Unitary Elastic (Ed = 1):** Percentage change in Q equals percentage change in P. TR remains unchanged regardless of direction.
4. **Relatively Elastic (1 < Ed < ∞):** A 20% price rise triggers more than 20% demand fall. Luxury goods and goods with many substitutes cluster here.
5. **Perfectly Elastic (Ed = ∞):** Any price increase above the market rate collapses demand to zero. A perfectly competitive seller's individual demand curve is this shape.

#### Arc Elasticity (Two-Point Method)

When you have only two data points, use the **mid-point (arc) formula** to avoid the denominator problem:

$$E_d = \frac{P_1 + P_2}{Q_1 + Q_2} \times \frac{Q_2 - Q_1}{P_2 - P_1}$$

Using the average of old and new values in the denominator ensures elasticity is identical whether price rises or falls between those points.

#### Point Elasticity (Calculus Method)

At a specific point on a continuous demand curve, point elasticity equals:

$$E_d = \frac{P}{Q} \times \frac{dQ}{dP}$$

This requires the derivative of the demand function. Example: if Q = 100 − 2P, then dQ/dP = −2. At P = 20, Q = 60, so Ed = (20/60) × (−2) = 0.67 (relatively inelastic).

#### Income and Cross Elasticity (Extensions)

- **Income Elasticity (Ey):** Ey = (% ΔQd) / (% ΔM) where M is income. Ey > 0 classifies the good as **normal/superior**; Ey < 0 classifies it as **inferior**.
- **Cross Elasticity (Ec):** Ec = (% ΔQx) / (% ΔPy). Ec > 0 means X and Y are **substitutes**; Ec < 0 means they are **complements**; Ec ≈ 0 means unrelated goods.

#### CA Foundation Exam Pattern

Expect 2–4 MCQ items from this topic. Common question types: calculate Ed from given price and quantity data, classify a computed Ed value, and apply the **total revenue test** (identify whether TR rises or falls from a price change based on the Ed classification).

---

### 🔴 Extended — Deep Study (3mo+)

#### Mechanism: Why Ed Varies Along a Linear Demand Curve

For a linear demand curve Q = a − bP, point elasticity is not constant. At the midpoint of the curve, Ed = 1. Near the Y-intercept (high price, low quantity), the ratio P/Q is large → Ed > 1. Near the X-intercept (low price, high quantity), P/Q is small → Ed < 1. This is why a single Ed value always has an **implicit price and quantity point** attached to it — arc Ed is more informative when comparing two scenarios.

#### Determinants of Price Elasticity (What Makes Ed High or Low)

Four factors shift elasticity without changing the demand curve's position:

1. **Availability of substitutes:** More close substitutes → more elastic. A 5% rice price rise causes a larger demand drop if wheat, oats, and quinoa are readily accessible.
2. **Proportion of income spent:** A 10% cigarette price rise is trivial for a high-income buyer but devastating for a budget smoker. Higher income share → more elastic.
3. **Necessity vs. luxury:** Salt, basic medicines, and water are inelastic. Dining out, branded clothing, and premium electronics are elastic.
4. **Time period:** Short-run elasticity is lower than long-run elasticity. Consumers need time to find substitutes, change habits, or adjust consumption patterns. A petrol price spike initially shows low elasticity; over months, carpooling, public transport, and fuel-efficient vehicles erode demand.

#### Relationship Between Ed and Total Revenue (TR)

TR = P × Q. Differentiating: d(TR)/dP = Q + P(dQ/dP) = Q(1 − Ed). This gives the **total revenue test**:

| Condition | dTR/dP Sign | Interpretation |
|---|---|---|
| Ed > 1 | Negative | Price and TR move opposite directions |
| Ed = 1 | Zero | TR is at a maximum; neither direction changes TR |
| Ed < 1 | Positive | Price and TR move together |

This is frequently tested: a firm should **lower price to increase TR** only when demand is elastic (Ed > 1). Raising price boosts TR when demand is inelastic.

#### Edge Cases and Common Mistakes

- **Reporting sign:** The law of demand makes ΔQ/ΔP always negative, yielding a negative Ed. Report only the absolute (positive) value unless the question specifically asks for signed elasticity.
- **Arc vs. point confusion:** Using the point formula when you have discrete data, or using the arc formula on a point on the curve, yields wrong answers. Choose based on available information.
- **Cross vs. income elasticity denominator:** Cross elasticity denominator is the price of **another** good, not income. Students routinely swap the denominator and compute Ey instead of Ec.
- **Perfectly elastic ≠ zero slope:** The perfectly elastic curve is horizontal (zero slope), but it represents **infinite** elasticity. The perfectly inelastic curve is vertical (undefined/infinite slope) but represents **zero** elasticity. Remember: slope ≠ elasticity.

#### Practice Prompts

1. Demand function: Q = 200 − 5P. Calculate point elasticity at P = 20. If price rises from 20 to 22, what is the arc elasticity using the mid-point method? Do the two methods give the same answer? Explain why or why not.

2. A restaurant raises its meal price by 15% and sees demand fall by 12%. Another restaurant in the same area raises its price by 15% and sees demand fall by 30%. Using the TR test logic, predict what happens to total revenue for each restaurant. Which restaurant has more substitutes available for its meals, and why?

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
