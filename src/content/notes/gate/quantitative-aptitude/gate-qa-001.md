---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-001
topicName: "Simplification & BODMAS"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A hierarchical tree diagram showing BODMAS priority levels expanding into sub-categories, with example expressions branching at each level to illustrate how complexity builds from simple operations"
country: india
generated: 2026-05-26
lastUpdated: 2026-05-26
---

# Simplification & BODMAS

### 🟢 Lite

### Key Formula/Rule
BODMAS: Brackets → Orders → Division → Multiplication → Addition → Subtraction. Always work left to right within the same priority level.

### Quick Memory Trick
**B**e **O**f **D**elightful **M**y **A**unt **S**ara — that's your operation order from first to last.

### 1-Sentence Summary
BODMAS tells you which math operation to do first; brackets win everything, then powers, then div/mul left-to-right, then add/sub left-to-right.

### Quick Example
Q: 8 + 4 × 3 − 2 = ?
A: 8 + 12 − 2 = 18 (multiply first, then left-to-right)

### Must Remember
- Brackets () → {} → [] have highest priority, solve innermost first
- Division and multiplication have equal priority — do whichever comes first (left to right)
- Addition and subtraction have equal priority — do whichever comes first (left to right)
- Never mix BODMAS levels: always complete one tier before moving to the next

### 🟡 Standard

### Concept Explanation
BODMAS is a simple rule that answers the age-old question: "but which one do I do first?" When you look at something like 5 + 3 × 2, most people instinctively want to add first and get 16, but the correct answer is actually 11 because multiplication comes before addition in the order of operations. BODMAS exists precisely to eliminate this ambiguity so everyone reading the same expression gets the same answer.

The acronym stands for Brackets, Orders (powers and roots), Division, Multiplication, Addition, and Subtraction. But here's where people trip up — Division and Multiplication are actually tied in priority, which means you do whichever one appears first as you read left to right. Same goes for Addition and Subtraction at the bottom of the ladder. It's not that addition always comes after multiplication; it's that multiplication always comes before addition.

Brackets are your superpower in simplification. Anything inside a bracket gets resolved completely before it touches the rest of the expression. And when you have nested brackets like (5 + (3 × (2 + 1))), you always crack the innermost one open first. Think of it like unwrapping layers of an onion — one layer at a time, from the inside out.

### Key Formulas
| Symbol | Meaning |
|--------|---------|
| () | Round brackets — innermost priority |
| {} | Curly brackets — middle priority |
| [] | Square brackets — outermost priority among brackets |
| a^b | Power/exponent — evaluate after brackets |
| ÷ or / | Division — equal rank with multiplication |
| × or · | Multiplication — equal rank with division |
| + | Addition — equal rank with subtraction |
| − | Subtraction — equal rank with addition |

### Step-by-Step Example
**Q:** Simplify: 20 ÷ 4 × 3 + (6 − 2)^2 − 5

**Step 1:** Solve brackets: (6 − 2) = 4
→ 20 ÷ 4 × 3 + 4^2 − 5

**Step 2:** Solve orders (powers): 4^2 = 16
→ 20 ÷ 4 × 3 + 16 − 5

**Step 3:** Division and Multiplication (left to right): 20 ÷ 4 = 5, then 5 × 3 = 15
→ 15 + 16 − 5

**Step 4:** Addition and Subtraction (left to right): 15 + 16 = 31, then 31 − 5 = 26

**Answer:** 26

### Common Mistakes
- Treating D and M as having strict order (division always before multiplication) → Correction: check left-to-right position, not alphabetical order
- Solving (a − b)^2 as a^2 − b^2 without expanding the bracket first → Correction: always expand brackets completely before applying any power
- Ignoring nested brackets and trying to solve them all at once → Correction: work from innermost bracket outward, one layer at a time

### Quick Test (2 Qs)
1. Q: What is the value of 12 − 3 × 2 + 8 ÷ 4?
   Options: A) 10  B) 6  C) 8  D) 14
   Ans: C) 8 (3 × 2 = 6, 8 ÷ 4 = 2, so 12 − 6 + 2 = 8)

2. Q: Simplify: [2 + (3 × 4 − 2)] ÷ 4
   Options: A) 3  B) 4  C) 2.5  D) 3.5
   Ans: A) 3 (innermost: 3 × 4 = 12, then 12 − 2 = 10, then 2 + 10 = 12, finally 12 ÷ 4 = 3)

### 🔴 Extended

### Concept Deep Dive
BODMAS isn't just a random acronym someone made up — it's a codified system that reflects the fundamental structure of arithmetic itself. When you write "3 + 4 × 5", you're actually writing a compressed instruction set, and BODMAS is the rulebook for decoding which instruction runs first. The reason multiplication ranks above addition is mathematical — multiplication is repeated addition (4 × 5 literally means "add 4 to itself 5 times"), so it makes sense to resolve the more granular operation before the simpler one. This is why 3 + (4 × 5) = 23 but (3 + 4) × 5 = 35. The brackets completely change which operation is primary.

Think of BODMAS as a factory assembly line. Each operation is a workstation, and brackets are like quality-control checkpoints that must clear before work proceeds. Orders (powers) are specialized finishing stations that require more processing time. Division and multiplication share the same production floor — they're the twin engines of scaling. Addition and subtraction are the final packaging stations, where results are wrapped up and shipped out. You can't skip stages: a product can't be packaged before it's finished.

The left-to-right rule for equal-priority operations exists because subtraction and addition are actually mathematically equivalent in a subtle way. Subtracting a number is the same as adding its negative. So 10 − 3 + 2 − 1 is really just 10 + (−3) + 2 + (−1) — addition of signed numbers in disguise. This means the order within these groups doesn't affect the final result, which is why mathematicians agreed on left-to-right for consistency. Same logic applies to division and multiplication: dividing by 2 and then by 3 gives the same result as multiplying by (1/2 × 1/3), but again, the convention exists to prevent confusion.

### Advanced Formula Derivation
The real power of BODMAS comes from understanding that complex expressions are just nested operations. Consider a generalized expression: a ÷ b × c + (d − e)^f − g × h.

Breaking this down by priority level:
- **Level 1 (Brackets):** Replace (d − e) with its result B₁. Expression becomes a ÷ b × c + B₁^f − g × h.
- **Level 2 (Orders):** Compute B₁^f = B₂. Expression becomes a ÷ b × c + B₂ − g × h.
- **Level 3 (Div/Mul):** Process left-to-right. First a ÷ b = D₁, then D₁ × c = M₁. Then g × h = M₂. Expression becomes M₁ + B₂ − M₂.
- **Level 4 (Add/Sub):** Process left-to-right. M₁ + B₂ = A₁, then A₁ − M₂ = Final Answer.

The key insight: each level's result feeds into the next as a single operand. This is why 8 ÷ 4 × 2 ≠ 8 ÷ (4 × 2). In the first, you divide first (getting 2) then multiply (getting 4). In the second, you multiply first (getting 8) then divide (getting 1). Parentheses don't just group — they force entire sub-expressions to resolve before becoming a single value for the next operation.

### GATE-Level Numerical Problems

**Q1 (GATE 2020):** Find the value of: 36 ÷ 6 × 3 + 5 × (4 − 2)^2 − 18 ÷ 3 × 2
- Working:
  - Step 1 — Brackets: (4 − 2) = 2, so (4 − 2)^2 = 2^2 = 4
    Expression: 36 ÷ 6 × 3 + 5 × 4 − 18 ÷ 3 × 2
  - Step 2 — Div/Mul left to right:
    36 ÷ 6 = 6 → 6 × 3 = 18
    5 × 4 = 20
    18 ÷ 3 = 6 → 6 × 2 = 12
    Expression: 18 + 20 − 12
  - Step 3 — Add/Sub: 18 + 20 = 38 → 38 − 12 = 26
- Answer: 26
- Common error: Doing 6 × 3 before 36 ÷ 6 because 6 comes before 3 in the acronym BODMAS — but division and multiplication share priority and must go left-to-right.

**Q2 (GATE 2019):** If [x] denotes the greatest integer less than or equal to x, find the value of: 3 × [7.5] + 2 × [−3.2]
- Working:
  - Step 1 — Evaluate greatest integer functions:
    [7.5] = 7 (greatest integer ≤ 7.5)
    [−3.2] = −4 (greatest integer ≤ −3.2 — note: −4 < −3.2, not −3)
  - Step 2 — Multiply: 3 × 7 = 21, 2 × (−4) = −8
  - Step 3 — Add: 21 + (−8) = 13
- Answer: 13
- Common error: Thinking [−3.2] = −3 — but for negative numbers, the greatest integer less than or equal means rounding DOWN toward −∞, not toward zero.

**Q3:** A shopkeeper offers a 20% discount on a shirt, then adds a 5% service tax on the discounted price. If the marked price is ₹1,000, find the final price the customer pays.
- Working:
  - Step 1 — Apply discount: 1000 × (1 − 20/100) = 1000 × 0.80 = ₹800
  - Step 2 — Apply service tax on discounted price: 800 × (1 + 5/100) = 800 × 1.05 = ₹840
- Answer: ₹840
- Common error: Calculating tax on the original price (1000 × 1.05 = ₹1050, then 1050 − 20% = ₹840 — WRONG). Tax is always applied to the price after discount, not before.

### Multiple Approaches

**Method A: Strict BODMAS (safe, reliable)**
Follow BODMAS exactly as written: brackets first (innermost to outermost), then orders, then division/multiplication left-to-right, then addition/subtraction left-to-right. This method never fails but can be slower for simple expressions.

**Method B: PEDMAS variant (same thing, different name)**
Some countries use PEDMAS (Parentheses, Exponents, Division, Multiplication, Addition, Subtraction). The logic and priority order are identical — just a regional naming difference. If you ever see this, don't panic.

**When to use:** Method A for any expression you're unsure about — it's the universal standard. Method B is just a mental reframe if PEDMAS is more familiar to you from earlier schooling.

### Tricky Cases
- **Nested brackets with negative signs:** −(−3 + 5) — many students forget that the minus sign outside the bracket multiplies everything inside, so −(−3 + 5) = −(2) = −2, not just dropping the brackets.
- **Fraction bars act as grouping symbols:** (a + b) ÷ (c − d) means everything above the bar is divided by everything below it. In 4 + 6 ÷ 2, the 6 ÷ 2 happens first, giving 4 + 3 = 7. But in (4 + 6) ÷ 2, the 4 + 6 happens first, giving 10 ÷ 2 = 5.
- **Percentage operations in sequence:** Applying successive percentage changes is NOT additive. A 10% increase followed by a 20% increase is NOT a 30% increase — it's a 1.10 × 1.20 = 1.32 = 32% total increase. Always multiply the multipliers, never add percentages blindly.

*Content adapted based on your selected roadmap duration.*
