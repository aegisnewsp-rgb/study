---
exam: cs-exec
examName: CS Executive
subject: economics
subjectName: Economics
topic: econom-002
topicName: Demand and Supply Analysis
weight: 3
country: cs
generated: "2026-03-25T17:00:00"
---

# Demand and Supply Analysis

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your CS Executive exam.

## Demand: The Willingness and Ability to Buy

### Law of Demand
**Statement**: Ceteris paribus, as the price of a good falls, quantity demanded rises; and as price rises, quantity demanded falls. (Inverse relationship)

**Why Inverse?**
- **Income Effect**: Lower price = real income increases = can buy more
- **Substitution Effect**: Good becomes relatively cheaper than substitutes
- **Diminishing Marginal Utility**: Additional units give less satisfaction, so lower price needed to induce purchase

### Movement vs Shift — Critical Distinction

| Type | Cause | Graph Effect |
|------|-------|--------------|
| **Movement along demand curve** | Price of the good changes | Point moves along D curve |
| **Shift of demand curve** | Non-price factors change | Entire D curve shifts left/right |

**Non-price Determinants of Demand (Shift Factors)**:
1. Income of consumers (normal goods ↑ income = ↑ demand; inferior goods ↑ income = ↓ demand)
2. Price of related goods (substitutes: tea ↑ price → coffee demand ↑; complements: pen ↑ price → ink demand ↓)
3. Tastes and preferences
4. Consumer expectations (future prices, future income)
5. Number of buyers in the market
6. Government policy (taxes, subsidies)

### Elasticity of Demand

**Price Elasticity of Demand (Ed)** = % Change in Quantity Demanded / % Change in Price

| Ed Value | Classification | Meaning |
|----------|---------------|---------|
| Ed = 0 | Perfectly inelastic | Quantity unchanged regardless of price |
| 0 < Ed < 1 | Inelastic | Qty changes less than proportionally to price |
| Ed = 1 | Unit elastic | Qty changes proportionally to price |
| 1 < Ed < ∞ | Elastic | Qty changes more than proportionally to price |
| Ed = ∞ | Perfectly elastic | Any price increase → quantity drops to zero |

**Factors Affecting Price Elasticity**:
- Availability of substitutes (more substitutes → more elastic)
- Necessity vs Luxury (necessity → inelastic)
- Proportion of income spent (higher proportion → more elastic)
- Time period (long run → more elastic, consumers can find substitutes)
- Habit-forming goods (inelastic)

⚡ **CS Executive High-Yield**: For exam questions, calculate Ed using the midpoint formula: Ed = (ΔQ/[(Q1+Q2)/2]) ÷ (ΔP/[(P1+P2)/2])

## Supply: The Willingness and Ability to Sell

### Law of Supply
**Statement**: Ceteris paribus, as the price of a good rises, quantity supplied rises; and as price falls, quantity supplied falls. (Direct/Positive relationship)

**Why Direct?**
- Higher price attracts new producers
- Existing firms expand output
- Some resources become profitable to use at higher margins
- Marginal cost rises with output → higher price needed to cover costs

### Movement vs Shift

| Type | Cause | Graph Effect |
|------|-------|--------------|
| **Movement along supply curve** | Price of the good changes | Point moves along S curve |
| **Shift of supply curve** | Non-price factors change | Entire S curve shifts left/right |

**Non-price Determinants of Supply (Shift Factors)**:
1. Input costs (wages, raw materials — ↑ costs = ↓ supply)
2. Technology (improvement → ↑ supply)
3. Number of sellers
4. Expectations of future prices
5. Government policies (taxes ↑ = ↓ supply; subsidies ↑ = ↑ supply)
6. Cost of alternative goods (opportunity cost)

### Market Equilibrium

**Equilibrium**: Price where Quantity Demanded = Quantity Supplied
- At equilibrium: No tendency for price to change
- **Shortage (Excess Demand)**: Qd > Qs → Price tends to rise
- **Surplus (Excess Supply)**: Qs > Qd → Price tends to fall

⚡ **Exam Tip**: Always draw the demand-supply diagram in equilibrium questions. Label axes clearly (P on Y-axis, Q on X-axis).

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with days to months for preparation.

## Chapter 2: Demand and Supply Analysis — Complete Coverage

### 2.1 Theory of Demand

#### 2.1.1 Individual Demand vs Market Demand

**Individual Demand**: Quantity demanded by a single consumer at each price
- The individual demand schedule shows what ONE buyer will purchase at each price level

**Market Demand**: Sum of all individual demands in the market
- Dmarket = Σ Dindividual for each price level
- More buyers at each price → market demand curve shifts right

**Demand Schedule Example**:
| Price (₹) | Individual A | Individual B | Market Demand |
|-----------|-------------|-------------|---------------|
| 10 | 2 | 3 | 5 |
| 8 | 4 | 5 | 9 |
| 6 | 6 | 7 | 13 |
| 4 | 8 | 10 | 18 |
| 2 | 10 | 12 | 22 |

#### 2.1.2 Demand Function

**Individual Demand Function**: Qd = f(P) — quantity demanded depends on own price

**Market Demand Function**: Qd = f(P, Y, P_sub, P_com, T, E, N)
- P = Own price
- Y = Consumer income
- P_sub = Price of substitutes
- P_com = Price of complements
- T = Tastes and preferences
- E = Expectations
- N = Number of buyers

**Linear Demand Function**: Qd = a – bP
- Where 'a' = intercept (demand at zero price, maximum possible)
- 'b' = slope (change in quantity per unit change in price)

#### 2.1.3 The Law of Demand — Exceptions and Limitations

**Giffen Goods** (Sir Robert Giffen, 19th century):
- Inferior good where income effect dominates substitution effect
- As price rises, quantity demanded increases (violates law of demand)
- Classic example: In 19th century Ireland, as potato prices rose, poor people consumed MORE potatoes (couldn't afford meat → bought more cheap potatoes)
- Condition: Good must be inferior AND have no close substitutes

**Veblen Goods** (Thorstein Veblen):
- Goods valued for their status symbol (conspicuous consumption)
- Higher price → more desirable (status signal) → higher demand
- Examples: Luxury cars, designer handbags, expensive watches
- These are NOT Giffen goods — the motivation is different (status vs income)

**Status Symbol Goods**:
- Goods where price = quality signal
- Higher price perceived as higher quality
- Inverse demand effect

**Speculative Demand**:
- During price rises, consumers buy more expecting further price rises
- Example: Stock market, real estate during inflation
- Contradicts law of demand

**Habitual Consumption**:
- Addictive goods (cigarettes, alcohol)
- Consumers may not reduce consumption despite price increases
- However: Long-run demand for addictive goods can be elastic

### 2.2 Elasticity of Demand — Detailed Analysis

#### 2.2.1 Price Elasticity of Demand (Ed)

**Formula (Point Elasticity)**:
Ed = (dQ/dP) × (P/Q)

**Formula (Arc/Midpoint Elasticity)** — For discrete changes:
Ed = [(Q2 – Q1)/((Q2 + Q1)/2)] ÷ [(P2 – P1)/((P2 + P1)/2)]
Ed = (ΔQ/[(Q1+Q2)/2]) ÷ (ΔP/[(P1+P2)/2])

**Example**:
- P1 = ₹10, Q1 = 100 units
- P2 = ₹8, Q2 = 130 units
- Ed = [(130-100)/115] ÷ [(-2)/9] = (30/115) ÷ (-2/9) = -1.17
- Since Ed > 1 (ignoring negative), demand is **elastic**

#### 2.2.2 Total Revenue (TR) and Elasticity Relationship

TR = P × Q

| Elasticity | Price ↓ | Price ↑ |
|------------|---------|---------|
| Elastic (Ed > 1) | TR ↑ | TR ↓ |
| Unit Elastic (Ed = 1) | TR unchanged | TR unchanged |
| Inelastic (Ed < 1) | TR ↓ | TR ↑ |

**Application**: Firms use elasticity to set prices:
- If demand is inelastic → can increase price to raise revenue
- If demand is elastic → lowering price can increase revenue

**Indian Examples**:
- **Petrol/Diesel**: Relatively inelastic (no close substitutes for transport)
- **Airline tickets (business class)**: Inelastic (business travelers must fly)
- **Gold jewelry**: Elastic among some consumer segments
- **3rd tier cinema tickets**: Elastic (many substitutes — streaming, TV)

#### 2.2.3 Other Elasticities

**Income Elasticity of Demand (Ey)**:
Ey = % Change in Qd / % Change in Income

| Ey Value | Type | Meaning |
|----------|------|---------|
| Ey > 1 | Superior/Normal | As income ↑, Qd ↑ more than proportionally |
| 0 < Ey < 1 | Necessity | As income ↑, Qd ↑ but less than proportionally |
| Ey = 0 | Neutral | Income change doesn't affect demand |
| Ey < 0 | Inferior | As income ↑, Qd ↓ |

**Cross Price Elasticity of Demand (Exy)**:
Exy = % Change in Qd of Good X / % Change in Price of Good Y

| Exy Value | Relationship |
|-----------|-------------|
| Exy > 0 | Substitutes (tea and coffee) |
| Exy = 0 | Unrelated goods |
| Exy < 0 | Complements (pen and ink) |

**Advertising/Promotional Elasticity**:
- Measures sensitivity of demand to advertising expenditure
- η = % Change in Qd / % Change in Advertising spend

#### 2.2.4 Determinants of Price Elasticity

1. **Number and closeness of substitutes**:
   - More close substitutes → more elastic
   - Example: Salt (no close substitutes → inelastic), Coca-Cola (many substitutes → elastic)

2. **Proportion of income spent**:
   - Larger proportion → more elastic
   - Example: Toothpaste vs. Car (car is larger expenditure → more elastic)

3. **Necessity vs Luxury**:
   - Necessities are inelastic (medicine, basic food)
   - Luxuries are elastic (designer clothing, premium dining)

4. **Time period**:
   - Short run → more inelastic (fewer substitutes available)
   - Long run → more elastic (consumers can find substitutes, change habits)

5. **Habit-forming goods**:
   - Cigarettes, alcohol: Inelastic even in long run

6. **Definition of the market**:
   - Narrowly defined goods (Coca-Cola) → more elastic
   - Broadly defined goods (beverages) → more inelastic

### 2.3 Theory of Supply

#### 2.3.1 Individual Supply vs Market Supply

**Market Supply**: Horizontal sum of all individual supply curves
- Qs market = Σ Qs individual at each price

#### 2.3.2 Supply Function

**Linear Supply Function**: Qs = c + dP
- 'c' = quantity supplied at zero price (typically negative or zero)
- 'd' = slope (change in quantity per unit change in price, d > 0)

#### 2.3.3 Elasticity of Supply (Es)

**Price Elasticity of Supply (Es)** = % Change in Qs / % Change in Price

| Es Value | Classification |
|----------|----------------|
| Es = 0 | Perfectly inelastic |
| 0 < Es < 1 | Relatively inelastic |
| Es = 1 | Unit elastic |
| 1 < Es < ∞ | Relatively elastic |
| Es = ∞ | Perfectly elastic |

**Key Difference from Demand Elasticity**:
- Elasticity of supply is usually positive (direct relationship)
- Perfectly inelastic supply: Vertical supply curve (unique goods, antiques, land at a location)

**Determinants of Supply Elasticity**:

1. **Time period**:
   - Very short run (momentary): Perfectly inelastic (cannot change output quickly)
   - Short run: Relatively inelastic (can adjust some inputs)
   - Long run: Relatively elastic (can fully adjust all inputs)

2. **Nature of the good**:
   - Perishable goods: Inelastic (cannot store)
   - Durable goods: More elastic (can store → can withhold supply)

3. **Mobility of factors**:
   - Easy to shift resources between uses → elastic
   - Specialized resources → inelastic

4. **Cost conditions**:
   - Low marginal cost of additional production → elastic
   - Rising marginal cost → increasingly inelastic

5. **Capacity of industry**:
   - Excess capacity → more elastic (can ramp up quickly)
   - Full capacity → inelastic

### 2.4 Market Equilibrium

#### 2.4.1 Determination of Equilibrium

**Equilibrium Price**: Price where Qd = Qs
- No tendency to change
- Market clears (no shortage, no surplus)

**Equilibrium Quantity**: Quantity traded at equilibrium price

**Example**:
| Price | Qd | Qs | Market Condition |
|-------|----|----|-----------------|
| 20 | 10 | 50 | Surplus (40 units) |
| 15 | 20 | 35 | Surplus (15 units) |
| 10 | 30 | 20 | Shortage (10 units) |
| 8 | 35 | 15 | Shortage (20 units) |
| 12 | 25 | 25 | **Equilibrium** |

Equilibrium: P = ₹12, Q = 25 units

#### 2.4.2 Effects of Changes in Demand and Supply

**Case 1: Demand increases (D shifts right)**:
- New equilibrium: Higher P, Higher Q
- Both price and quantity increase

**Case 2: Demand decreases (D shifts left)**:
- New equilibrium: Lower P, Lower Q

**Case 3: Supply increases (S shifts right)**:
- New equilibrium: Lower P, Higher Q

**Case 4: Supply decreases (S shifts left)**:
- New equilibrium: Higher P, Lower Q

**Combined Changes**:
| Change | Effect on P | Effect on Q |
|--------|------------|------------|
| D↑ S unchanged | ↑ | ↑ |
| D↓ S unchanged | ↓ | ↓ |
| S↑ D unchanged | ↓ | ↑ |
| S↓ D unchanged | ↑ | ↓ |
| D↑ S↑ | Ambiguous | ↑ |
| D↓ S↓ | Ambiguous | ↓ |
| D↑ S↓ | ↑ | Ambiguous |
| D↓ S↑ | ↓ | Ambiguous |

⚡ **Exam Tip**: When both D and S change, we cannot determine both P and Q without knowing the relative magnitude of shifts.

#### 2.4.3 Price Controls

**Price Ceiling (Maximum Price)**:
- Government-mandated maximum price (below equilibrium)
- Purpose: Make essential goods affordable
- Example: Essential Commodities Act — price ceiling on essential medicines, food grains
- Effect: Creates shortage (Qd > Qs) → black market may emerge
- **Rationing** often accompanies price ceilings

**Price Floor (Minimum Price)**:
- Government-mandated minimum price (above equilibrium)
- Purpose: Protect producers from unfairly low prices
- Example: Minimum Support Price (MSP) for agricultural produce in India
- Effect: Creates surplus (Qs > Qd) → government must purchase surplus
- **Buffer stocks** often accumulate

**MSP in India**:
- Government announces MSP for 23 crops (Kharif and Rabi)
- Food Corporation of India (FCI) procures at MSP
- Prevents distress sales by farmers
- Current controversy: Effectiveness and economic viability

### 2.5 Consumer's Surplus and Producer's Surplus

#### 2.5.1 Consumer's Surplus (CS)

**Definition**: The difference between what a consumer is willing to pay (maximum reservation price) and what they actually pay (market price).

**Formula**: CS = Sum of (Reservation Price – Market Price) for all units purchased

**Graphical Representation**: Area between demand curve and price line, up to the quantity purchased.

**Example**:
- Consumer willing to pay ₹100 for 1st unit, ₹80 for 2nd unit, ₹60 for 3rd unit
- Market price = ₹50
- CS = (100-50) + (80-50) + (60-50) = ₹90

**Applications**:
- Willingness to pay for new products
- Valuing environmental goods
- Tax burden analysis

#### 2.5.2 Producer's Surplus (PS)

**Definition**: The difference between what a producer actually receives (market price) and their minimum acceptable price (marginal cost for each unit up to the quantity sold).

**Formula**: PS = Sum of (Market Price – Minimum Acceptable Price) for all units sold

**Graphical Representation**: Area between price line and supply curve, up to the quantity sold.

**Relationship**: Producer's Surplus = Total Revenue – Total Variable Cost

### 2.6 Applications in Indian Context

#### 2.6.1 Demand-Supply Analysis in Indian Markets

**Petroleum Products**:
- India imports ~85% of crude oil
- Global price fluctuations → domestic price changes
- Government uses price bands, subsidies to manage

**Food Grains**:
- Demand relatively inelastic (necessity)
- Supply affected by monsoons, MSP policy
- Buffer stock management by FCI

**Housing/Real Estate**:
- Demand-supply mismatch in urban areas
- Prices rising faster than incomes
- RERA (Real Estate Regulatory Authority) trying to protect consumers

#### 2.6.2 Agricultural Price Policy in India

**Essential Commodities Act (1955)**:
- Prevents hoarding, black marketing
- Government can control prices of essential goods

**Minimum Support Price (MSP)**:
- Government guarantees minimum price
- Protects farmers from price fluctuations
- Creates supply-side certainty

**Public Distribution System (PDS)**:
- Supplies food grains at subsidized prices
- Addresses "for whom to produce" problem
- Demand for subsidized grain is highly inelastic

#### 2.6.3 Competition Commission of India (CCI)

- Prevents anti-competitive agreements
- Regulates abuse of dominant position
- Approves combinations (mergers, acquisitions)
- Ensures market forces work properly (demand-supply balance)

### 2.7 Mathematical Treatment

#### 2.7.1 Solving Equilibrium

**Given**:
- Demand: Qd = 100 – 5P
- Supply: Qs = 10 + 3P

**At Equilibrium**: Qd = Qs
100 – 5P = 10 + 3P
90 = 8P
P = 11.25

**Equilibrium Quantity**: Q = 100 – 5(11.25) = 43.75

#### 2.7.2 Incidence of Tax

**When supply is perfectly inelastic (vertical)**:
- Tax burden falls entirely on producers (sellers)
- Price to consumers unchanged
- Example: Land, unique antique items

**When demand is perfectly inelastic (vertical)**:
- Tax burden falls entirely on consumers
- Price to producers unchanged
- Example: Essential medicines for diabetic patients

**General case**:
- Tax burden shared between consumers and producers
- Share depends on relative elasticity of demand and supply
- More elastic side of market bears LESS tax burden

**Example**:
- Initial equilibrium: P = 10, Q = 100
- Tax of ₹2 per unit imposed
- New consumer price: Pc = 11
- New producer price: Pp = 9
- Tax burden: Consumers pay ₹1, Producers pay ₹1

### 2.8 CS Executive Exam Pattern — Demand and Supply

**Marks Distribution**:
- Demand analysis: 6-8 marks
- Supply analysis: 4-6 marks
- Equilibrium: 4-6 marks
- Elasticity: 8-10 marks (most important sub-topic)

**Commonly Asked Questions**:

*Short (4-6 marks)*:
1. Explain the law of demand with exceptions.
2. Distinguish between movement along and shift in demand curve.
3. Explain price elasticity of demand and its types.
4. What is consumer's surplus? Explain with an example.
5. Distinguish between price ceiling and price floor with examples.

*Long (10-12 marks)*:
1. Explain the factors determining price elasticity of demand. How is it measured?
2. Explain the relationship between elasticity and total revenue.
3. How is market equilibrium determined? What happens when demand and supply both increase?
4. Explain consumer's surplus and producer's surplus with diagrams.
5. Discuss the impact of a specific tax on equilibrium price and quantity with diagram.

**Numerical Problem Pattern**:
1. Calculate price elasticity from given demand schedule
2. Find equilibrium price and quantity from linear demand and supply functions
3. Determine new equilibrium after shift in demand or supply
4. Tax incidence calculation

⚡ **Exam Tip**: Always draw diagrams in equilibrium and elasticity questions. ICSI examiners give partial credit for well-drawn, labeled diagrams.

### 2.9 Practice Numerical Examples

**Q1**: From the following data, calculate price elasticity of demand:

| Price (₹) | Quantity Demanded |
|-----------|-------------------|
| 8 | 40 |
| 10 | 30 |

**Solution**:
Using midpoint formula:
Ed = [(30-40)/35] ÷ [(10-8)/9]
Ed = (-10/35) ÷ (2/9)
Ed = -0.286 ÷ 0.222
Ed = -1.29
|Demand is elastic (Ed > 1)|

**Q2**: Demand function: Qd = 100 – 4P; Supply function: Qs = 20 + 2P. Find equilibrium price and quantity.

**Solution**:
At equilibrium: Qd = Qs
100 – 4P = 20 + 2P
80 = 6P
P = ₹13.33
Q = 100 – 4(13.33) = 46.67 units

**Q3**: If the government imposes a price ceiling of ₹8 in Q2, what is the shortage?

**Solution**:
At P = 8:
Qd = 100 – 4(8) = 68 units
Qs = 20 + 2(8) = 36 units
Shortage = 68 – 36 = 32 units

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
