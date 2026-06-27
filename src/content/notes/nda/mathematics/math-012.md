---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-012
topicName: Binary Number
weight: 2
country: india
generated: "2026-03-24T08:32:07.810796"
lastUpdated: "2026-06-27"
diagramPrompt: "Mathematical diagram showing Binary Number concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Binary Number

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **binary number** is written in **base-2**, using only the digits **0** and **1**, where each position carries a weight of successive powers of **2**. The rightmost digit has weight 2⁰, the next 2¹, then 2², and so on; the leftmost digit is the **most significant bit (MSB)** and the rightmost is the **least significant bit (LSB)**.

**Binary → decimal:** multiply each bit by 2 raised to its position index and sum. For example, **1011₂** = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 8 + 0 + 2 + 1 = **11**.

**Decimal → binary:** repeatedly divide the number by 2 and record the remainders; read them **bottom-up** (reverse order).

**Addition rule:** 1 + 1 = 0 with carry 1. **1's complement** flips every bit; **2's complement** = 1's complement + 1, used to represent negative numbers. NDA typically tests conversions and basic addition; expect 1 MCQ from this 2%-weighted topic.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Positional Value and Conversion

Binary is a **positional numeral system with radix 2**. An *n*-bit number written as **b_{n−1} b_{n−2} … b₁ b₀** equals Σ (bᵢ · 2ⁱ). The smallest *n*-bit unsigned value is 0, and the largest is **2ⁿ − 1** (e.g., an 8-bit byte spans 0 to 255).

To convert a decimal integer **N** to binary, divide by 2 repeatedly until the quotient is 0; the **remainders**, read from last to first, give the binary digits. For fractions, multiply the fractional part by 2 repeatedly and record the integer parts — the process either terminates (denominator is a power of 2) or repeats.

#### Binary Arithmetic

Addition follows column-wise rules: 0+0 = 0, 0+1 = 1, 1+0 = 1, 1+1 = 10 (write 0, carry 1). Subtraction uses **borrow** at base 2, but in digital systems it is implemented by adding the **2's complement** of the subtrahend. The 1's complement of a binary string simply inverts every bit; the 2's complement adds 1 to that result, yielding the standard signed representation where the MSB acts as the sign bit (0 = positive, 1 = negative).

#### Quick Reference Table

| Operation | Rule | Example |
|---|---|---|
| B → D | Σ bᵢ · 2ⁱ | 1101₂ = 13 |
| D → B | Divide by 2, reverse remainders | 13 → 1101 |
| 1's comp | Flip every bit | 1101 → 0010 |
| 2's comp | 1's comp + 1 | 1101 → 0011 |
| Add 1+1 | 0, carry 1 | — |

#### Typical NDA Question Patterns

NDA Mathematics papers frame this topic either as direct conversion (decimal ↔ binary) or as a single arithmetic question involving **101 + 110** type additions, plus complement-based negation. Since weightage is only ~2%, mastery of four-bit conversions and two's complement suffices.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Subtleties

A leading zero carries no value, so **01101₂ = 1101₂ = 13**, but it matters when the bit-width is fixed (e.g., a signed 8-bit register). Fractions like **0.101₂** equal ½ + 0 + ⅛ = 0.625; binary fractions either terminate or recur, mirroring the way decimal fractions either terminate or recur depending on the prime factors of the denominator.

#### Worked Example

Convert **45** to binary:
45 ÷ 2 = 22 r **1**; 22 ÷ 2 = 11 r **0**; 11 ÷ 2 = 5 r **1**; 5 ÷ 2 = 2 r **1**; 2 ÷ 2 = 1 r **0**; 1 ÷ 2 = 0 r **1**.
Reading remainders upward: **101101₂**. Verify: 32 + 8 + 4 + 1 = 45. ✓

Now compute the **2's complement of 45** in 8-bit form: 00101101 → flip bits → 11010010 → add 1 → **11010011₂**, which represents **−45** in signed arithmetic.

#### Common Mistakes

- Writing **10₂** as "ten" instead of **two**.
- Reading remainders top-to-bottom during decimal-to-binary conversion.
- Forgetting the carry when adding **1 + 1 + 1 = 11₂** (answer 1, carry 1).
- Confusing 1's and 2's complement when a question asks for the *negative* of a binary number.

#### Connection to Adjacent Topics

Binary arithmetic underpins **Boolean algebra** (AND, OR, XOR), **digital logic gates**, and **hexadecimal (base-16)** shorthand, where each hex digit maps to four binary bits. NDA occasionally links this to **number systems** in general (octal, hex) within the same 2% slice.

#### Practice Prompts

1. Convert **173** to binary and verify by expansion.
2. Find the 2's complement of **01100100₂** and state the signed decimal value it represents.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
