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
lastUpdated: "2026-09-06"
diagramPrompt: "Mathematical diagram showing Number and Numeration (Bases) concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# Number and Numeration (Bases)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **base (radix)** *b* numeral system uses digits 0 to *b* − 1, with each place weighted by successive powers of *b*. Any number *N* expands as *N* = *a*ₙ*b*ⁿ + *a*ₙ₋₁*b*ⁿ⁻¹ + … + *a*₁*b* + *a*₀, where every coefficient *aᵢ* satisfies 0 ≤ *aᵢ* < *b*.

- Convert **to base 10** by expanding place values.
- Convert **from base 10** by repeatedly dividing by the new base and reading remainders bottom-up.
- **Binary ↔ octal**: group binary digits in 3s; **binary ↔ hexadecimal**: group in 4s, padding with zeros near the radix point.
- Valid digit rule: digit *d* is illegal in base *b* if *d* ≥ *b* (e.g., 2 in base 2, 9 in base 8).

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Positional Value and the Expanded Form
Every numeral is shorthand for a polynomial in the base. For a base *b* integer with digits *a*ₙ*a*ₙ₋₁…*a*₁*a*₀, the value is *N* = Σ *aᵢ*·*b*ᶦ from *i* = 0 to *n*. Converting to base 10 means substituting *b* and evaluating, e.g., 1011₂ = 1·2³ + 0·2² + 1·2 + 1 = 11₁₀.

#### Converting From Base 10
Repeatedly divide *N* by *b*; the remainders, read from **last to first**, are the digits of *N* in base *b*. Worked example: convert 42₁₀ to base 2 — 42 ÷ 2 = 21 r0, 21 ÷ 2 = 10 r1, 10 ÷ 2 = 5 r0, 5 ÷ 2 = 2 r1, 2 ÷ 2 = 1 r0, 1 ÷ 2 = 0 r1. Remainders bottom-up give **101010₂**.

#### Fractional Conversion
For the part after the radix point, multiply the fraction by *b* repeatedly; the integer parts become successive fractional digits. Example: 0.625₁₀ → base 2 gives 0.101₂.

#### Binary Grouping Shortcuts

| Conversion | Group size | Pad direction |
| --- | --- | --- |
| Binary → Octal | 3 binary digits | From radix point outward |
| Octal → Binary | Expand each octal digit to 3 bits | Right to left |
| Binary → Hex | 4 binary digits | From radix point outward |
| Hex → Binary | Expand each hex digit to 4 bits | Right to left |

#### Arithmetic in Non-Decimal Bases
Add column by column; if a column sum ≥ *b*, carry the quotient and keep the remainder. In binary, 1 + 1 = 10₂ (carry 1, write 0).

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Valid-Digit Discipline and the "Illegal Numeral" Trap
Before any arithmetic or conversion, scan every digit. In base 6 only {0,1,2,3,4,5} are legal, so 235₆ is invalid and the question must be rejected or corrected to base ≥ 6. WAEC Objective items occasionally test this recognition directly.

#### Remainder Order and the Fractional Radix Point
The division-by-base method requires **bottom-up** reading because the first remainder is the units digit *a*₀, the next is *a*₁, and so on. For fractions, repeated multiplication writes digits **top-down** after the radix point — opposite orderings — so swap your reading direction when switching between integer and fractional parts.

#### Worked Example: Base-6 Addition
Compute 145₆ + 234₆. Units: 5 + 4 = 9 = 1·6 + 3, write 3 carry 1. Sixes: 4 + 3 + 1 = 8 = 1·6 + 2, write 2 carry 1. Thirty-sixes: 1 + 2 + 1 = 4. Result: **425₆** (verify in base 10: 145₆ = 65, 234₆ = 94, sum 159 = 4·36 + 2·6 + 3 ✓).

#### Common Mistakes

| Mistake | Fix |
| --- | --- |
| Treating digit as its face value (1 in 101₂ = 1, not 4) | Multiply by place value *b*ᶦ |
| Padding on the wrong end when grouping bits | Pad outer ends with zeros, never the inner side |
| Carrying in base 10 during base-2/6/8 arithmetic | Carry in the *target* base |
| Reading division remainders top-to-bottom | Reverse them before writing the answer |

#### Exam Strategy for WAEC WASSCE
This topic carries ≈4% within Number and Numeration, usually 1–3 Objective items plus 1 short Essay question on Paper 2. Past papers favour: (1) base-10 ↔ base-2/5/6 conversion, (2) binary arithmetic (+/−), and (3) base recognition. Practise 2018–2024 WASSCE items for timing; aim for under 90 seconds per Objective.

#### Practice Prompts
1. Express 157₁₀ in base 3 and verify by expanding.
2. Without converting fully, state 11010110₂ in octal and hexadecimal.

## Continue your study

- **[View this topic in your WAEC WASSCE roadmap](/roadmap/?exam=waec&duration=1mo)** — see where "Number and Numeration (Bases)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=waec&duration=1d)** — 1-day sprint covering highest-weight topics
- **[WAEC WASSCE exam overview](/exams/waec/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/waec/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
