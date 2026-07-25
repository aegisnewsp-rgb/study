---



exam: nabteb
examName: NABTEB
subject: mathematics
subjectName: Mathematics
topic: math-1
topicName: Number Systems and Bases
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.546227"
lastUpdated: "2026-07-25"
diagramPrompt: "Mathematical diagram showing Number Systems and Bases concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Number Systems and Bases

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your NABTEB Mathematics paper.

A **base-b numeral** represents a number using digits from 0 to b−1, where each position carries a **place value** of b raised to an increasing power. The decimal value of any numeral is found by expanding it in powers of the base: N = dₙ·bⁿ + d_{n−1}·b^{n−1} + … + d₀·b⁰.

- **Binary (base 2)** uses digits 0, 1; powers: 1, 2, 4, 8, 16, 32…
- **Octal (base 8)** uses digits 0–7; **Hexadecimal (base 16)** uses 0–9 and A=10, B=11, C=12, D=13, E=14, F=15.
- **Decimal → base b:** repeatedly divide by b, then read remainders bottom-to-top.
- **Base b → decimal:** multiply each digit by its power of b and sum.
- **Arithmetic in base b:** same column method as base 10, but carry when a column sum reaches b, not 10.

> Tip: Octal and hexadecimal are short forms of binary since 2³ = 8 and 2⁴ = 16.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before the exam.

#### Place-Value Expansion

Every well-formed base-b numeral obeys the expansion N = Σ dᵢ·bⁱ, where b ≥ 2 is the **radix** and each digit dᵢ satisfies 0 ≤ dᵢ < b. For example, 2C5₁₆ = 2·16² + 12·16¹ + 5·16⁰ = 512 + 192 + 5 = 709₁₀. The subscript on a numeral (e.g. 1011₂) is mandatory to avoid ambiguity.

#### Converting Between Bases

To convert a decimal integer to base b, divide successively by b and record the remainders. The **last remainder** is the most significant digit because the first division extracts the highest power of b. For fractions, multiply the fractional part by b repeatedly and read the integer parts top-to-bottom.

| Conversion | Method | Direction of reading |
| --- | --- | --- |
| Decimal → base b (integer) | Repeated division by b | Remainders bottom-to-top |
| Decimal → base b (fraction) | Repeated multiplication by b | Integer parts top-to-bottom |
| Base b → decimal | Expand in powers of b | Single pass, left-to-right |

#### Arithmetic in Base b

Addition in base b sets the result digit to (dᵢ + dᵢ' + c_in) mod b, with carry c_out = ⌊(dᵢ + dᵢ' + c_in)/b⌋. For instance, 4 + 4 in base 5 gives 13₅ (digit 3, carry 1), not 8. The same rule governs subtraction via borrowing.

#### Common Exam Traps

- Treating remainders as if they were read top-to-bottom when converting decimal to binary.
- Writing digits like 2 or 5 in a base-2 or base-4 numeral.
- Forgetting that A–F stand for 10–15 in hexadecimal.

#### Typical NABTEB Questions

- Convert 156₁₀ to base 2.
- Evaluate 1A3₁₆ + 2F₁₆.
- State the place value of '3' in 4321₅.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Conversion Example

Convert 245₁₀ to base 2:
245 ÷ 2 = 122 remainder **1** (LSB)
122 ÷ 2 = 61 remainder **0**
61 ÷ 2 = 30 remainder **1**
30 ÷ 2 = 15 remainder **0**
15 ÷ 2 = 7 remainder **1**
7 ÷ 2 = 3 remainder **1**
3 ÷ 2 = 1 remainder **1**
1 ÷ 2 = 0 remainder **1** (MSB)

Reading bottom-to-top: 245₁₀ = 11110101₂. Verify: 128 + 64 + 32 + 16 + 4 + 1 = 245 ✓.

#### Edge Cases and Validity

A numeral is invalid the moment a digit equals or exceeds the base — 122₃ is illegal because '2' is the largest digit allowed in base 3, and 0.12₃ is illegal because '1' never appears before the decimal point's first fractional digit is processed. Leading zeros (e.g. 00101₂) are tolerated but never change the value.

#### Arithmetic in Hexadecimal

Hexadecimal addition combines the standard column algorithm with base-16 carries. Example: 1F₁₆ + 2A₁₆:
- Units: 15 + 10 = 25 = 16 + 9 → digit 9, carry 1.
- Sixteens: 1 + 2 + 1 = 4.
- Result: 49₁₆, which equals 73₁₀ — matching 31 + 42 in decimal.

#### Connections to Other Topics

Place-value expansion is the same logic used in **standard form** for scientific notation and in **decimal expansions** of fractions. Binary conversion underpins computer storage units (byte = 8 bits), and octal/hex codes correspond directly to 3-bit and 4-bit binary groups.

#### High-Yield Practice Prompts

1. Convert 0.625₁₀ to base 2 and express the result to four binary places.
2. Without first converting to decimal, compute 523₆ − 147₆ and state your answer in base 6.

| Mistake | Correct approach |
| --- | --- |
| Read remainders top-to-bottom | Read remainders bottom-to-top |
| Carry at 10 in base b | Carry at b in base b |
| Treat A as 0 in hex | A = 10, B = 11, …, F = 15 |
| Stop fractional conversion after one step | Repeat until fraction is 0 or target digits reached |

## Continue your study

- **[View this topic in your NABTEB roadmap](/roadmap/?exam=nabteb&duration=1mo)** — see where "Number Systems and Bases" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nabteb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NABTEB exam overview](/exams/nabteb/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/nabteb/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
