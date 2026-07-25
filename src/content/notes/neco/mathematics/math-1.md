---



exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-1
topicName: "Number and Bases (Binary, etc.)"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.662562"
lastUpdated: "2026-06-22"
diagramPrompt: "Mathematical diagram showing Number and Bases (Binary, etc.) concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Number and Bases (Binary, etc.)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **base** (or **radix**) is the count of unique digits a positional numeral system uses, and each digit's **place value** is a power of that base. NECO SSCE tests this topic almost exclusively through conversion problems and the occasional arithmetic-in-base question. Remember four practical anchors: **binary** (base 2) uses digits 0–1, **octal** (base 8) uses 0–7, **decimal** (base 10) uses 0–9, and **hexadecimal** (base 16) uses 0–9 then A–F (where A = 10, B = 11, …, F = 15). To convert **from base 10**, divide repeatedly by the new base and read the remainders bottom-up. To convert **to base 10**, expand the number as digits multiplied by powers of the base and add. Shortcut: group binary digits in **threes** for octal and in **fours** for hexadecimal, padding the leftmost group with zeros if needed. A common NECO trap is writing a digit equal to or larger than the base itself — instantly invalid.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Place Value and Expansion

Every digit in a positional system contributes a value equal to the digit times a power of the base. For a base-$b$ number with digits $d_n d_{n-1} \ldots d_1 d_0$ (where $d_0$ is the units digit), the value in base 10 is:

$$N = d_n \cdot b^n + d_{n-1} \cdot b^{n-1} + \cdots + d_1 \cdot b^1 + d_0 \cdot b^0$$

Example: $(1101)_2 = 1\cdot 2^3 + 1\cdot 2^2 + 0\cdot 2^1 + 1\cdot 2^0 = 8 + 4 + 0 + 1 = 13_{10}$.

#### Converting from Base 10

Use **repeated division by $b$**. Record each remainder; the **last** remainder is the most significant digit. Example — convert $25_{10}$ to binary: 25 ÷ 2 = 12 r **1**, 12 ÷ 2 = 6 r **0**, 6 ÷ 2 = 3 r **0**, 3 ÷ 2 = 1 r **1**, 1 ÷ 2 = 0 r **1**. Reading bottom-up: $25_{10} = (11001)_2$.

#### Converting to Base 10

Multiply each digit by $b^{\text{position}}$ (position counted from 0 at the right) and sum. Example: $(2A)_{16} = 2\cdot 16^1 + 10\cdot 16^0 = 32 + 10 = 42_{10}$.

#### Shortcut Conversions Between Bases

Because $8 = 2^3$ and $16 = 2^4$, binary ↔ octal uses **3-digit** groupings, and binary ↔ hex uses **4-digit** groupings. Example: $(11010110)_2$ → group as `0011 0101 0110` → $(356)_{16}$.

#### Arithmetic in Other Bases

Addition, subtraction, multiplication and division follow the same logic as in base 10, but **carries and borrows occur at the base**, not at 10. So in binary, $1 + 1 = 10_2$ (write 0, carry 1); in base 5, $4 + 3 = 12_5$ (write 2, carry 1).

#### Quick Reference Table

| Base | Name | Digits | Used For |
|------|------|--------|----------|
| 2 | Binary | 0, 1 | Computing |
| 8 | Octal | 0–7 | Computing (shorthand) |
| 10 | Decimal | 0–9 | Everyday arithmetic |
| 16 | Hexadecimal | 0–9, A–F | Computing, memory addresses |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Subscript Notation and Misreads

NECO often prints two numbers that look identical but mean different things. $(101)_2$ is **five** in decimal, not one hundred and one. Always check the subscript before solving.

#### Fractions in Non-Decimal Bases

Fractional positions use **negative powers** of the base. The base-$b$ number $0.d_1 d_2 d_3\ldots$ equals $d_1 b^{-1} + d_2 b^{-2} + d_3 b^{-3} + \cdots$. Example: $(0.11)_2 = \tfrac{1}{2} + \tfrac{1}{4} = 0.75_{10}$. To convert a base-10 fraction to another base, multiply repeatedly by the new base and record the integer parts.

#### Edge Cases That Appear in NECO

1. **Padding the leftmost group**: $(10110)_2$ to hex must be written `0001 0110` before mapping to $(16)_{16}$. Skipping the leading zeros is a frequent one-mark loss.
2. **Letters in arithmetic**: $(1F)_{16} + (2)_{16}$ requires knowing F = 15, so $1F + 2 = 21_{16}$.
3. **Two's complement**: introduced in NECO's Computer Mathematics strand occasionally — to negate a binary integer, invert every bit and add 1.

#### Common Mistakes

- Reversing remainders during decimal-to-binary conversion (writing the *first* remainder as the leading digit).
- Using a digit ≥ base, e.g. writing $(128)_8$ — invalid, since octal only allows 0–7.
- Forgetting that hex letters represent fixed **values**, not variables.
- Treating hexadecimal `10` as "ten" instead of sixteen.

#### Practice Prompts

1. Convert $(3B2)_{16}$ to base 10, then to binary.
2. Evaluate $(1101)_2 + (1011)_2$ and express the sum in base 10.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
