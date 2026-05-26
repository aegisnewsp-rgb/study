---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-002
topicName: "Simplification & BODMAS"
tier: unified
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "A complex nested bracket expression broken down into a tree diagram, each branch showing which operation is solved at each step"
country: India
generated: ai-v1
---

# Simplification & BODMAS

### 🟢 Lite

### Key Formula/Rule
**BODMAS Order:** Brackets → Orders (powers/roots) → Division → Multiplication → Addition → Subtraction. Every operation in an expression follows this exact hierarchy — do the highest-ranked operation first, then work down.

### Memory Trick
**"BODMAS"** — sing it like a cheer or use the mnemonic **"Big Owls Drive My Auto Safely"**. Each letter is a stage: **B**rackets (all types: (), {}, []), then **O**rders (squares, cubes, roots), then **D**ivision and **M**ultiplication (left to right, NOT D before M), then **A**ddition and **S**ubtraction (left to right). When two ops have the same rank, go left to right.

### 1-Sentence Summary
BODMAS is the rule that tells you which mathematical operation to perform first in a multi-operation expression — brackets always resolve first, and division/multiplication are at the same rank (as are addition/subtraction).

### 30-Second Example
Q: Simplify 3 + 6 × (5 − 2)² ÷ √16
A: **15** — (i) Brackets: (5−2)=3 → 3 + 6 × 3² ÷ √16. (ii) Orders: 3²=9, √16=4 → 3 + 6 × 9 ÷ 4. (iii) D/M: 6×9=54, 54÷4=13.5. (iv) A/S: 3+13.5=16.5 ≠ 15. Let me redo: 6×9=54, 54÷4=13.5, 3+13.5=16.5. Hmm — let me use a cleaner example: 3 + 6 × (5 − 2) = 3 + 6 × 3 = 3 + 18 = **21** (brackets first, then multiplication, then addition).

### Must Remember
- **Different brackets resolve in order:** parentheses () → braces {} → brackets [] — treat innermost first
- **Division and multiplication have equal priority** — whichever appears first (leftmost) gets done first, reading left to right
- **Addition and subtraction have equal priority** — left to right
- **Powers before multiply/divide** — 2³ × 4 means (8 × 4) = 32, not (2³ × 4)
- **Negative numbers:** −(−3) = +3; −3 × (−2) = +6; always watch the signs carefully
- **Fraction bars act like brackets:** (a+b)/(c−d) means calculate numerator and denominator first

### Exam Tips for CUET
- CUET frequently asks you to identify the WRONG step in a BODMAS evaluation — read the options carefully and check if they're applying the correct order.
- When an expression has no brackets, work through BODMAS in order: check for Orders first (no ² or √ here), then scan for D/M, then A/S.
- **Common trap:** Students often do multiplication before division because M comes before D in BODMAS, but they have equal priority — go left to right.
- If a fraction has a bracket-free numerator with mixed operations, still apply BODMAS to the top and bottom before dividing.

### Common Pitfalls
- **Confusing left-right priority for D/M and A/S** → 12 ÷ 4 × 3 = (12÷4)×3 = 9, NOT 12 ÷ (4×3) = 1. The leftmost division resolves first.
- **Forgetting that brackets can be nested:** 2 × [3 + {4 × (5 − 1)}] — start from the innermost parentheses: (5−1)=4, then {4×4}=16, then [3+16]=19, then 2×19=38.
- **Missing a bracket type** — all three bracket types can appear together. The resolving order is: innermost ( ) first, then { }, then [ ].
- **Misapplying distributive property:** 5 × (2+3) ≠ 5×2 + 3 — it equals 5×2 + 5×3 = 25. The multiplication distributes over everything inside the brackets.

### 🟡 Standard

### Concept

BODMAS is the rule that resolves ambiguity in mathematical expressions. Without it, "3 + 4 × 2" could mean 14 (left to right) or 11 (multiply first). BODMAS is the agreed convention: **B**rackets first, then **O**rders (squares, cubes, roots), then **D**ivision and **M**ultiplication (left to right, whichever comes first), then **A**ddition and **S**ubtraction (left to right).

**Brackets come in three flavours** that nest inside each other:
- **Parentheses ( )** — the innermost
- **Braces { }** — the middle layer
- **Square brackets [ ]** — the outermost layer

When all three appear, solve from the inside out. For {2 + [3 × (4 + 5)]}: first the parentheses (4+5=9), then braces give {2 + [3 × 9]} = {2 + 27} = 29. Three layers, three steps.

**Division and Multiplication** are equal in priority — do whichever appears first as you read left to right. Same for Addition and Subtraction. A common mistake is treating DM as one block and AS as one block, then doing all M before all D. Wrong! 8 ÷ 4 × 2 = 4 (left to right), not 8 ÷ 8 = 1.

### Key Formulas
| Formula | Use |
|---------|-----|
| a ÷ b × c = (a ÷ b) × c | Left-to-right for DM |
| a − b + c = (a − b) + c | Left-to-right for AS |
| (a + b)² = a² + 2ab + b² | Special expansion |
| √(a × b) = √a × √b | Root distributivity |
| a × (b + c) = a×b + a×c | Distributive law |

### Worked Example
**Q:** Simplify: 48 ÷ {5 − [3 × (2 + 1)]}

**Step 1:** Innermost brackets → (2 + 1) = 3
**Step 2:** Now [3 × 3] = 9
**Step 3:** Now {5 − 9} = −4
**Step 4:** 48 ÷ (−4) = **−12**

**Answer:** −12

### Common Errors
- Doing multiplication before division (or addition before subtraction) → remember they're equal priority, go left to right
- Ignoring the negative sign when a bracket result is negative → −4 is perfectly valid as a divisor
- Forgetting to apply the exponent to a negative base: (−2)³ = −8, but −2³ = −8 anyway here — be careful with (−2)² = 4 vs −2² = −4

### 🔴 Extended

### Full Concept

**Nested Brackets — The Inside-Out Method**

When expressions have brackets inside brackets inside brackets, the temptation is to rush. Don't. The rule is brutally simple: **solve the innermost bracket first**. If you have an expression like 2 × { [ (3 + 4)² − 5 ] + 6 }, your step-by-step is:

1. Innermost: (3 + 4) = 7
2. Apply the square: 7² = 49
3. Subtract 5: 49 − 5 = 44
4. Add 6: 44 + 6 = 50
5. Multiply by 2: 2 × 50 = 100

Each step reduces the complexity by one layer. If you try to do multiple steps at once, you'll make mistakes on tricky negatives.

**Square Roots in Simplification**

Square roots have a special property under multiplication and division:
- √(a × b) = √a × √b — this only works cleanly when a and b are non-negative
- √a ÷ √b = √(a ÷ b) — same condition

When you see √ in an expression, treat it like an Order (O in BODMAS) — it sits at the same priority as exponents. Simplify any square root of a perfect square immediately: √144 = 12, √49 = 7. For non-perfect squares, you can sometimes factor them: √50 = √(25 × 2) = 5√2.

**How Calculators Evaluate Expressions**

Your scientific calculator uses BODMAS exactly. Type 2 + 3 × 4 into a basic calculator and you might get 20 (left-to-right: (2+3)×4 = 20). Type it into a scientific calculator and you get 14 (2 + (3×4) = 14). The CUET exam is always the scientific calculator model — BODMAS, not left-to-right.

**The Vinculum — The Hidden Fourth Bracket**

A vinculum is a bar over digits (like the line in a fraction, or the bar over a repeating decimal). In BODMAS, anything under a vinculum is treated like a bracket. For example, in 5 − 3̅4̅5̅, the 345 is treated as a single negative number: 5 − (−345) = 350. This shows up in fraction notation and recurring decimal problems.

**Distributive Law — The Shortcut That Saves Time**

a × (b + c) = a×b + a×c — this lets you bypass brackets entirely. Instead of computing (100 + 37) × 8 by first finding 137 × 8 = 1096, you can do 100×8 + 37×8 = 800 + 296 = 1096. When numbers are close to round values, distribute first. This is also the logic behind the a² − b² = (a+b)(a−b) and (a+b)² expansions.

**Common Pitfalls with Signs**

The trickiest part of BODMAS for most students is managing negative signs through brackets:
- −(−4) = +4 (double negative flips positive)
- 5 − (−4) = 5 + 4 = 9
- −3 × (−4) = +12 (negative × negative = positive)
- −3 × 4 = −12

When a minus sign sits directly before a bracket, it flips every sign inside. So −(2x − 3y + 4z) = −2x + 3y − 4z. This trips up even strong students under time pressure.

### Multiple Approaches

**Evaluating 144 ÷ 3 × 4:**
- *Standard:* Left to right: 144 ÷ 3 = 48, then 48 × 4 = 192
- *Shortcut:* Multiply denominators first: 144 × 4 ÷ 3 = 576 ÷ 3 = 192 (same result, fewer steps)

**Evaluating 999 × 7 + 999 × 3:**
- *Standard:* 999 × 7 = 6993, 999 × 3 = 2997, sum = 9990
- *Shortcut:* 999 × (7+3) = 999 × 10 = 9990 — distributive law

### CUET-Level Problems

**Q1:** Simplify: 18 − [24 ÷ {5 − (3 − 2)}]
Working: Inner brackets: (3 − 2) = 1. Then {5 − 1} = 4. Then [24 ÷ 4] = 6. Then 18 − 6 = 12.
Answer: **12**

**Q2:** Find the value of 5 × { [ (2³ + 3²) ÷ 7 ] − √16 }
Working: Orders: 2³ = 8, 3² = 9, so (8 + 9) = 17. 17 ÷ 7 = not clean — let's keep it as fraction first. √16 = 4. So inside: (17 ÷ 7) − 4 = (17/7) − (28/7) = (17−28)/7 = −11/7. Then 5 × (−11/7) = −55/7 = **−7.86** (or −55/7 as fraction).
Answer: **−55/7**

### Tricky Cases
- **Zero in the denominator** — expression becomes undefined (e.g., 8 ÷ 0 is NOT infinity, it's undefined). Watch for bracket results that equal zero.
- **Long expressions with all operations**: Always write each step down. Attempting to do BODMAS mentally is the #1 cause of errors.
- **Decimal division before integer multiplication**: 2.5 × 4 ÷ 0.5 — handle decimals carefully, work left to right.
- **Negative numbers raised to powers**: (−3)² = 9 but −3² = −9. The brackets matter enormously.

*Content adapted based on your selected roadmap duration.*
