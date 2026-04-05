---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-1
topicName: Number and Numeration (Bases)
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.616408"
diagramPrompt: Mathematical diagram showing Number and Numeration (Bases) concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style
---

# Number and Numeration (Bases)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Number bases** (or numeration systems) allow us to represent numbers using different sets of digits. Our everyday number system is **base 10** (decimal), but computers use **base 2** (binary) and other bases are also important.

**Base 10 (Decimal):**
Digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
The number 5723 means:
$$5 \times 10^3 + 7 \times 10^2 + 2 \times 10^1 + 3 \times 10^0 = 5000 + 700 + 20 + 3$$

**Base 2 (Binary):**
Digits: 0, 1 only
The number $1101_2$ means:
$$1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 8 + 4 + 0 + 1 = 13_{10}$$

**Base 8 (Octal):**
Digits: 0, 1, 2, 3, 4, 5, 6, 7
The number $527_8$ means:
$$5 \times 8^2 + 2 \times 8^1 + 7 \times 8^0 = 320 + 16 + 7 = 343_{10}$$

**Base 16 (Hexadecimal):**
Digits: 0-9, then A(10), B(11), C(12), D(13), E(14), F(15)
The number $2AF_{16}$ means:
$$2 \times 16^2 + 10 \times 16^1 + 15 \times 16^0 = 512 + 160 + 15 = 687_{10}$$

⚡ **WAEC Tip:** When converting from base $b$ to decimal, expand using powers of $b$. When converting from decimal to base $b$, use repeated division by $b$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Converting Decimal to Other Bases:**

**Method: Repeated Division**

Convert 27 to base 2:
$$27 \div 2 = 13 \text{ remainder } 1$$
$$13 \div 2 = 6 \text{ remainder } 1$$
$$6 \div 2 = 3 \text{ remainder } 0$$
$$3 \div 2 = 1 \text{ remainder } 1$$
$$1 \div 2 = 0 \text{ remainder } 1$$

Reading remainders from bottom to top: $27 = 11011_2$

Convert 458 to base 8:
$$458 \div 8 = 57 \text{ remainder } 2$$
$$57 \div 8 = 7 \text{ remainder } 1$$
$$7 \div 8 = 0 \text{ remainder } 7$$

Reading up: $458 = 712_8$

Convert 2543 to base 16:
$$2543 \div 16 = 158 \text{ remainder } 15 \Rightarrow F$$
$$158 \div 16 = 9 \text{ remainder } 14 \Rightarrow E$$
$$9 \div 16 = 0 \text{ remainder } 9$$

Reading up: $2543 = 9EF_{16}$

**Converting Between Bases:**

**Binary to Octal (and vice versa):**
Group binary digits in threes from the right:
$$1101011_2 = \underbrace{001}_{1} \underbrace{101}_{5} \underbrace{011}_{3} = 153_8$$

**Binary to Hexadecimal (and vice versa):**
Group binary digits in fours from the right:
$$1101011_2 = \underbrace{0110}_{6} \underbrace{1011}_{B} = 6B_{16}$$

**Octal to Hexadecimal:**
Use binary as an intermediary:
$723_8 = 111\ 010\ 011_2 = 111010011_2 = \underbrace{0001}_{1} \underbrace{1101}_{D} \qdm 0011}_{3} = 1D3_{16}$

**Addition in Different Bases:**

In base $b$, digits range from 0 to $b-1$. When adding, carry when sum exceeds $b-1$.

*Problem*: Add $134_7 + 256_7$

$$134_7$$
$$+ 256_7$$
$$------$$
Units: $4 + 6 = 10_{10} = 13_7$ (write 3, carry 1)
Sevens: $1 + 3 + 5 = 9_{10} = 12_7$ (write 2, carry 1)
Forty-nines: $1 + 1 + 2 = 4$ (since $4 < 7$, write 4 directly)
$$134_7 + 256_7 = 423_7$$

**Subtraction in Bases:**

*Problem*: Subtract $234_5 - 143_5$

$$234_5$$
$$- 143_5$$
$$------$$
Units: $4 - 3 = 1$
Fives: $3 - 4$: Can't! Borrow 1 (which is 5 in base 5): $3 + 5 - 4 = 4$
Twenty-fives: $2 - 1 - 1$ (borrowed) = 0
$$234_5 - 143_5 = 041_5 = 41_5$$

⚡ **Common Student Mistakes:** Forgetting that in base $b$, you can only use digits 0 to $b-1$. Confusing the method for decimal-to-base conversion (it's division, not multiplication). Forgetting to regroup/chunk properly when converting between binary and octal/hex.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Computation in Bases:**

*Problem*: Multiply $213_4 \times 3_4$

$$213_4$$
$$\times 3_4$$
$$------$$
Units: $3 \times 3 = 9_{10} = 21_4$ (write 1, carry 2)
Fours: $3 \times 1 + 2 = 5_{10} = 11_4$ (write 1, carry 1)
Sixteens: $3 \times 2 + 1 = 7_{10} = 13_4$ (write 3, carry 1)
$$213_4 \times 3_4 = 1311_4$$

*Problem*: Divide $312_5$ by $4_5$

Convert to decimal: $312_5 = 3 \times 25 + 1 \times 5 + 2 = 75 + 5 + 2 = 82_{10}$
$4_5 = 4_{10}$
$82 \div 4 = 20$ remainder 2

Convert back: $20_{10} = 40_5$, $2_{10} = 2_5$
So $312_5 \div 4_5 = 40_5$ remainder $2_5$

Check: $40_5 \times 4_5 + 2_5 = 3 \times 40 + 2 = 120 + 2 = 122_5$
$312_5 - 122_5 = 190_5$... this is wrong.

Let me redo in base 5:
$312_5 \div 4_5$:
4 goes into 31 (base 5) = 3 times (3 × 4 = 12_5 = 7₁₀)
$31_5 - 12_5 = 31_5 - 12_5 = (3×5 + 1) - (1×5 + 2) = 16 - 7 = 9_{10} = 14_5$
Bring down 2: $14_5 \div 4_5 = 2$ remainder... $14_5 - 12_5 = 2_5$

So answer: $32_5$ remainder $2_5$

**Fractional Bases:**

*Problem*: Convert $0.625_{10}$ to base 2.

$$0.625 \times 2 = 1.25 \quad \Rightarrow \text{first digit } 1, \text{ carry } 0.25$$
$$0.25 \times 2 = 0.5 \quad \Rightarrow \text{second digit } 0, \text{ carry } 0.5$$
$$0.5 \times 2 = 1.0 \quad \Rightarrow \text{third digit } 1, \text{ carry } 0$$

So $0.625_{10} = 0.101_2$

*Problem*: Convert $0.3_{10}$ to base 2.

$$0.3 \times 2 = 0.6 \quad \Rightarrow 0, \text{ carry } 0.6$$
$$0.6 \times 2 = 1.2 \quad \Rightarrow 1, \text{ carry } 0.2$$
$$0.2 \times 2 = 0.4 \quad \Rightarrow 0, \text{ carry } 0.4$$
$$0.4 \times 2 = 0.8 \quad \Rightarrow 0, \text{ carry } 0.8$$
$$0.8 \times 2 = 1.6 \quad \Rightarrow 1, \text{ carry } 0.6$$

The pattern repeats. $0.3_{10} = 0.0100110011..._2$ (recurring)

**Number Base Systems — Complement Arithmetic:**

**Uses of Complements:**
- Simplified subtraction
- Representation of negative numbers

**Two's Complement in Binary:**
For n bits, the two's complement of a number is $2^n - \text{number}$

*Example*: Find 8-bit two's complement of $27$:
$2^8 - 27 = 256 - 27 = 229 = 11100101_2$

To subtract 27 from 50 in binary using complements:
- 50 = $00110010_2$
- -27 = $11100101_2$ (two's complement)
- Add: $00110010 + 11100101 = 100010111_2$
- Discard overflow bit (9th bit): $00010111_2 = 23_{10}$

**Uses of Different Bases:**

**Computing:**
- Binary (base 2): Fundamental to digital circuits (0 = off, 1 = on)
- Octal (base 8): Used as shorthand for binary (3 bits per octal digit)
- Hexadecimal (base 16): Used in computing (4 bits per hex digit), memory addresses

**Everyday life:**
- Base 60: Time (60 seconds/minutes), angles (60 minutes)
- Base 12: Months, hours, dozens
- Base 7: Days of the week
- Base 360: Degrees in a circle

**Modular Arithmetic:**

*Problem*: What day of the week will it be 100 days from Monday?

$100 \div 7 = 14$ remainder 2
So 2 days after Monday = Wednesday

*Problem*: Find the remainder when $3^{100}$ is divided by 7.

$3^1 \bmod 7 = 3$
$3^2 \bmod 7 = 9 \bmod 7 = 2$
$3^3 \bmod 7 = 6$
$3^4 \bmod 7 = 18 \bmod 7 = 4$
$3^5 \bmod 7 = 12 \bmod 7 = 5$
$3^6 \bmod 7 = 15 \bmod 7 = 1$
$3^7 \bmod 7 = 3$ (pattern repeats every 6)

$100 \div 6 = 16$ remainder 4
So $3^{100} \bmod 7 = 3^4 \bmod 7 = 4$

**Converting Fractional Numbers Between Bases:**

*Problem*: Convert $0.36_{10}$ to base 5.

$$0.36 \times 5 = 1.80 \quad \Rightarrow 1, \text{ carry } 0.80$$
$$0.80 \times 5 = 4.00 \quad \Rightarrow 4, \text{ carry } 0$$

So $0.36_{10} = 0.14_5$

Check: $1/5 + 4/25 = 0.2 + 0.16 = 0.36$ ✓

**Base 3 Arithmetic:**

Digits: 0, 1, 2

*Problem*: Convert $212_3$ to decimal.
$$212_3 = 2 \times 9 + 1 \times 3 + 2 = 18 + 3 + 2 = 23_{10}$$

*Problem*: Convert $47_{10}$ to base 3.
$$47 \div 3 = 15 \text{ remainder } 2$$
$$15 \div 3 = 5 \text{ remainder } 0$$
$$5 \div 3 = 1 \text{ remainder } 2$$
$$1 \div 3 = 0 \text{ remainder } 1$$
$$47_{10} = 1202_3$$

**Pattern Recognition in Bases:**

The expansion of $\frac{1}{3}$ in base 10 is $0.\overline{3}$.

In base 3: $\frac{1}{3} = 0.1_3$ (terminating because 3 divides $3^1$)

The expansion of $\frac{1}{6}$ in base 10 is $0.1\overline{6}$.

In base 6: $\frac{1}{6} = 0.1_6$ (terminating because 6 = 2 × 3, and base 6 has factors 2 and 3)

⚡ **WAEC Examination Patterns:** Convert numbers between bases (decimal to binary/octal/hex and vice versa). Add and subtract numbers in different bases. Multiply numbers in bases. Convert fractional numbers between bases. Use complements for subtraction. Solve problems involving modular arithmetic.
