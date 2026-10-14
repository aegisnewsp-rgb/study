---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-002
topicName: "Coding-Decoding"
tier: unified
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "A comprehensive decision tree for coding-decoding: shows all major types (letter shift, position-based, atbash, pairwise swap, interweaving, number coding), each with examples and verification checklist. Shows wrap-around calculation for shifts beyond Z."
country: india
generated: 2026-05-26
lastUpdated: 2026-05-26
---

# Coding-Decoding

### 🟢 Lite — Quick Review (1h–1d)

Coding-decoding questions test your ability to identify patterns in letter or number transformations and apply them to decode new words or numbers. In the GATE exam, these questions typically appear in the General Aptitude section and carry 1-2 marks each. The key is to systematically identify the transformation rule and verify it against all given examples before applying it to the question word.

**Types of Coding Patterns You'll Encounter:**

- **Letter Shift Ciphers**: Each letter moves by a fixed number of positions in the alphabet (e.g., A→D is +3 shift). You must determine whether the shift is forward (+n) or backward (−n).
- **Opposite Letter Coding**: Each letter is replaced by its opposite in the alphabet (A↔Z, B↔Y, etc.). In this system, A=26, B=25, and position(i) + position(opposite) = 27.
- **Word Transformation**: The letters within a word are rearranged according to a rule (alphabetical order, first-last swap, position-based sorting).
- **Number-Letter Mapping**: Letters are replaced by numbers based on their position (A=1, B=2... Z=26) or some derived relationship.
- **Skipping Pattern**: Letters at specific positions are selected or skipped in a pattern (every 2nd letter, every 3rd letter, etc.).

**⚡ GATE Exam Tip:** In GATE 2023, a coding-decoding question appeared where letters were shifted by +5 positions. Always check if the pattern changes mid-word (odd/even position rule). When you think you've found the pattern, quickly verify by applying it to all given examples — one mismatch means the pattern is wrong.

**Memory Trick:** "Spot the shift, count the gap, apply it right." Count the position difference between corresponding letters to find the shift value. Write the alphabet with numbers: A=1, B=2, C=3... Z=26, and use modulo 26 arithmetic for wraparound.

---

### 🟡 Standard — Regular Study (2d–2mo)

**Step-by-Step Approach for Letter Shift Problems:**

Step 1: Write down the original word and coded word letter by letter.
Step 2: Find the positional difference between each letter pair.
Step 3: Check if the difference is constant. If yes, that's your shift value. If no, check for alternating patterns.
Step 4: Apply the pattern to the question word.

**Worked Example:**
Input: DIFFULT → EJGGVMU

- D(4) → E(5): +1
- I(9) → J(10): +1
- F(6) → G(7): +1
- F(6) → G(7): +1
- U(21) → V(22): +1
- L(12) → M(13): +1
- T(20) → U(21): +1

Pattern confirmed: +1 shift for all letters. The code is a Caesar cipher with shift = +1.

**Common Variations in GATE:**

1. **Alternating Shift**: Odd-position letters shift by +n, even-position letters shift by +m. Example: ABCD → EDGF (A+4, B+2, C+4, D+2).

2. **Middle Letter Swap**: First and last letters swap positions, middle letters shift. Example: MASTER → TAMERS.

3. **Vowel-Consonant Rule**: Vowels shift differently from consonants. Example: A(1)→E(5, +4), but B(2)→D(4, +2).

4. **Reverse Coding**: The word is written backwards and then each letter is shifted. Example: CAT → XEG (CAT reversed = TAC, then T→X(+4), A→E(+4), C→G(+4)).

**Comparison Table — Common Coding Patterns:**

| Pattern Type | Example Input | Example Output | Key Identifier |
|---|---|---|---|
| Constant shift | FLOWER | GMPXFS | Same difference throughout |
| Alternating shift | ABCD | EDGF | Odd and even positions shift differently |
| Reverse shift | HELP | TPIL | Reverse order, then one uniform shift |
| Position swap | MAN | NAM | First↔Last swap |
| Opposite letter | BAT | YZG | A↔Z mapping (sum = 27) |

**Common Student Mistakes:**
- Forgetting modulo 26 wraparound (Z + 1 = A)
- Assuming the same shift applies to all positions when it's actually alternating
- Not verifying the pattern against ALL examples before answering
- Mixing up forward and backward shifts

**Problem-Solving Strategy:**
When multiple patterns seem possible, eliminate options by applying each candidate pattern to the given word and seeing which result matches the coded word. GATE questions typically have 4 options, so you can work backwards from options if direct pattern-finding is difficult.

---

#### Coding Types You Will Meet Alongside Shifts

**Position-based coding.** The shift depends on where the letter sits in the word rather than on one rule for all letters. Odd positions may shift by +n while even positions shift by +m. Test for this whenever the letter-by-letter differences are not constant.

**Opposite-letter (Atbash) coding.** Each letter becomes its mirror in the alphabet, so A↔Z, B↔Y. With positions numbered 1–26 the mapping is position → 27 − position.

*Worked example:* FLY → UOB. F(6) → 27 − 6 = 21 = U; L(12) → 27 − 12 = 15 = O; Y(25) → 27 − 25 = 2 = B. ✓

**Word-structure coding.** Letters are rearranged rather than substituted. Adjacent pairs can swap (LE|AD → EL|DA = ELDA), the whole word can reverse, or the first and last letters can trade places.

**Number-symbol coding.** Letters map to digits or symbols through a fixed key that stays consistent across every example in the question.

**Pair and sequence swaps.** Letters can be rearranged by rule rather than substituted: adjacent pairs swap (AB CD → BA DC), first and last trade places (ABCD → DBCA), each pair reverses (AB CD EF → BA DC FE), or the whole word reverses before another operation applies. Test these four before inventing anything new.

**Interweaving.** Two words can merge their letters alternately — take the first letter of word one, then word two, and continue in turn. If the question supplies a pair of words rather than one, interweaving is usually the rule.

**Word-structure rules.** Beyond swaps, a code can use the first letters of the words in a phrase, separate vowels from consonants (shift the vowels, leave the consonants), or shift only the letters sitting at prime positions.

**Number-letter mapping.** Letters map to digits or symbols through a substitution table — for example A→4, E→3, I→1, O→0, S→5, T→7 in common leetspeak. Two position conventions appear: A=1…Z=26, and its mirror A=26…Z=1. The given examples decide which is in play.

#### Worked Example: Reversing Each Block of Three

**Q:** In a certain code, "MASTER" is written as "SAMRET". How is "CLASS" coded?

Step 1 — Label MASTER by position: M(1) A(2) S(3) T(4) E(5) R(6). The coded word SAMRET maps back to positions 3, 2, 1, 6, 5, 4.

Step 2 — Read the structure: positions 1–3 reverse in place, and positions 4–6 reverse in place. MAS → SAM and TER → RET, giving SAMRET. ✓

Step 3 — Apply to CLASS (5 letters): the first block of three is CLA → reversed = ALC; the remaining pair SS → SS.

**Answer:** ALCSS

#### Two Mistakes Worth Naming

- **Assuming one rule covers every position** → some questions use per-position rules (1st letter +N, 2nd letter −M). Recheck the differences letter by letter before committing.
- **Overcomplicating a simple rule** → most GATE patterns are simpler than they first appear. Try the straightforward rule first, then escalate.

### 🔴 Extended — Deep Study (3mo+)

**Historical Context: The Caesar Cipher**

Coding-decoding problems trace their roots to classical cryptography. Julius Caesar (100–44 BCE) used a simple letter substitution cipher to protect military communications. In his cipher, each letter in the plaintext was replaced by the letter three positions later in the Roman alphabet. For example, A became D, B became E, and so on. This is the same principle that governs most shift-based coding-decoding questions in modern aptitude tests.

Modern cryptography has evolved far beyond Caesar ciphers, but the logical reasoning skills tested by coding-decoding questions remain valuable for information security careers — particularly relevant for GATE exam candidates in Computer Science and Information Technology streams.

**Mathematical Foundation:**

The letter shift cipher operates on modular arithmetic. For a shift of +k:

$$\text{Coded}(i) = (i + k) \mod 26$$

where A=0, B=1, C=2... Z=25. The modulo operation handles wraparound (after Z comes A).

For opposite letter coding:
$$\text{Opposite}(i) = 25 - i$$

For example, A(i=0) → 25-0 = 25(Z), and Z(i=25) → 25-25 = 0(A).

**GATE Previous Year Patterns:**

GATE has featured coding-decoding in the General Aptitude section consistently across years:
- **GATE 2022 (CS)**: Letter shift by -3, medium difficulty
- **GATE 2021 (All streams)**: Mixed letter-number coding, easy
- **GATE 2020**: Reverse alphabetical coding, easy
- **GATE 2019**: Alternating shift pattern, medium

The difficulty level has remained consistently easy to medium, making this a high-scoring area if you master the patterns. Expect 1 question worth 1 mark.

**Advanced Problem Types:**

1. **Sentence Coding**: Each word in a sentence is coded using the same rule. Example: "COME HOME" → "FRPH KRPH" (each letter +3). You need to identify both word-level and letter-level patterns.

2. **Conditional Coding**: The coding rule applies only when certain conditions are met. Example: "If the letter is a vowel, shift by +2; if consonant, shift by -1."

3. **Number-to-Letter Mapping**: Given a sequence of numbers, identify which letters they represent and what word they form. Example: 3-1-20 → CAT (A=1, B=2...).

4. **Matrix-based Coding**: Letters are arranged in a grid, and coding involves row/column movement. Example: A is at row 1 column 1, coded as 11, B at row 1 column 2, coded as 12.

**Practice Problem with Full Solution:**

Question: In a certain code language, "EXAM" is written as "FYBN". How is "RESULTS" written?

Solution:

Step 1 — Compare EXAM with FYBN letter by letter to find the shift:
- E(5) → F(6): +1
- X(24) → Y(25): +1
- A(1) → B(2): +1
- M(13) → N(14): +1

Step 2 — The shift is constant: every letter moves +1 position. This is a Caesar cipher with shift = +1.

Step 3 — Verify there is no hidden wrap-around issue. None of these letters reach Z, so no modulo adjustment is needed here.

Step 4 — Apply the +1 shift to RESULTS:
- R(18) → S(19)
- E(5) → F(6)
- S(19) → T(20)
- U(21) → V(22)
- L(12) → M(13)
- T(20) → U(21)
- S(19) → T(20)

Answer: **SFTVMUT**

When direct pattern-finding stalls, work backwards from the answer choices: apply each candidate rule to the input and keep the rule whose output matches the given code for every letter.

**⚡ Pro Tip for GATE:** In coding-decoding, if you see Z involved, always check for wraparound (Z+1=A, A-1=Z). Time yourself — these questions should take no more than 90 seconds each in the actual exam.

#### Determinism Is the Thing Being Tested

The same input always produces the same output inside a single question. That is why a rule must be checked against *every* letter of *every* given example before you use it. A pattern that fits four letters out of five is not the pattern — it is a coincidence whose boundary you have not found yet.

#### Wrap-Around Arithmetic, With Numbers

Treat the alphabet as a circle of 26 positions.

- Forward shift past Z: Y(25) + 3 = 28 → 28 − 26 = 2 → **B**
- Backward shift past A: C(3) − 5 = −2 → −2 + 26 = 24 → **X**

Neither shift is possible without the wrap.

#### Three Shift Variants Worth Drilling

**Alternating shift.** Odd and even positions shift by different amounts. "HELLO" with the pattern +2, −1, +2, −1, +2 gives JDNKQ.

**Position-dependent shift.** The shift equals the letter's own position. A(1)→B, B(2)→D, C(3)→F = BDF.

**Vigenère (keyword) shift.** A repeating key sets the shift for each letter. Key "BAD" means +2, +1, +4, then repeat. MECH → O F G J = **OFGJ**. The key repeats cyclically: "CAT" applies +3, +1, +20, then +3 again on the fourth letter.

#### Practice Problem: Fixed Letter-to-Digit Substitution

**Q:** In a certain code, "TRAIN" is written as "12345" and "RAIN" as "2345". How is "PLAIN" written?

Step 1 — Read TRAIN = 12345 in order: T=1, R=2, A=3, I=4, N=5.

Step 2 — Confirm against RAIN = 2345: R=2, A=3, I=4, N=5. The substitution is consistent across both words.

Step 3 — Build PLAIN. A=3, I=4, N=5 are already fixed, so the code ends 3-4-5. The unused digits are 1 and 2, which go to P and L.

**Answer: 12345**

#### Four Ways to Approach an Unfamiliar Code

1. **Position mapping** — read the digit or letter straight off the alphabet position (A=1 or A=26).
2. **Shift detection** — take any letter, compute the difference, verify across all letters, then apply.
3. **Pair analysis** — test adjacent swap, first-last swap, full reverse, odd-even split.
4. **Input-output alignment** — write input over output and read the transformation off each column.

#### Edge Cases That Decide Marks

- **Alphabet boundaries** — Z+1 = A and A−1 = Z. Check this first whenever Z or A appears.
- **Different word lengths** — decide whether the rule is absolute (letter X always becomes Y) or relative (position-based). The examples decide which.
- **More than one plausible rule** — pick the simplest rule that explains every example, not the most elaborate.
- **Letters never seen in the examples** — infer them from the alphabet logic of the rule already confirmed.
- **Case, spaces and punctuation** — usually ignored, but check whether the question codes them.

*Content adapted based on your selected roadmap duration.*

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Coding-Decoding" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All Logical Reasoning notes](/notes/gate/logical-reasoning/)** — browse sibling topics in this subject

