---
exam: ucat
examName: "UCAT (University Clinical Aptitude Test)"
subject: ucat-quantitative-reasoning
subjectName: "Quantitative Reasoning"
topic: ucat-qr-001
topicName: "Speed Shortcuts for Percentages and Ratios"
weight: 4
country: uk
generated: "2026-09-26T12:55:00"
lastUpdated: "2026-09-26"
---

Quantitative Reasoning gives you 36 questions in 26 minutes, after a two-minute instruction section. That is roughly 43 seconds per question including reading the stem, scanning the chart, deciding which calculation to run and keying the on-screen calculator. Almost every question reduces to a percentage change, a ratio split, or a proportion with a unit conversion. The marks go to candidates who take the shortest route through the arithmetic, not to candidates who can multiply four-digit numbers fastest. This note collects the speed shortcuts that pay back across the subtest.

The factual scores you may rely on come from the published UCAT Consortium test-format page: the three cognitive subtests are each scored on a scale of 300 to 900, and the marker counts one mark per correct answer with no negative marking. Anything else — university thresholds, "average score" figures, year-on-year cut-offs — should be checked live on ucat.ac.uk before your sitting, because those numbers move each cycle.

---

### Quick revision

The four conversions that handle roughly two thirds of the arithmetic:

- **Percentage change in one step.** New = Original × (1 ± p/100). So a £240 item with 15% off is 240 × 0.85 = 204, not 240 − 15% of 240 done as two operations. Pair the multiplier with the direction and you avoid the classic sign error.
- **Reverse percentage.** Price after VAT = £306, VAT rate = 20%, find pre-VAT price. Divide: 306 / 1.20 = 255, then subtract to find the VAT contribution. Always divide when removing a percentage, never subtract.
- **Ratio split.** Part-to-part ratio A : B = 3 : 5 across total 240. One part = 240 / (3 + 5) = 30. A = 90, B = 150. Same trick works for 3-part ratios. When the ratio is part-to-whole, take the part-to-whole multiplier first.
- **Proportion with units.** A car travels 144 miles on 6 litres. Find fuel for 250 miles. Two routes: scaling factor 250 / 144 ≈ 1.736, then 6 × 1.736 ≈ 10.4 litres; or unit rate 144 / 6 = 24 miles per litre, then 250 / 24 ≈ 10.42. Both end at the same answer. Pick the one whose numbers stay small.

---

### Standard conceptual deep dive

The on-screen calculator is permitted but slow. Reducing the keystrokes you actually make is more important than the keystrokes themselves. Each shortcut below trims one layer of computation.

#### Percentage as a multiplier, not a subtraction

Percentages almost always appear in UCAT as "X% of Y" or "Y after an X% change." The mistake candidates make is to subtract 15 from 240 and add 240 − 36 = 204, missing that you can collapse to a single multiplication. Two traps hide inside that step.

First, "percentage point" vs "percentage." A price rises from £80 to £92. That is a 15% rise, not a 12-percentage-point rise. Question stems that switch between these will quietly change the answer. Re-read the verb before you reach for the calculator.

Second, "discount then tax" stacks multiplicatively, not additively. A 20% discount followed by 20% VAT is 0.80 × 1.20 = 0.96 of the original, not 1.00. UCAT loves this because students calculate the discount and the VAT separately and combine them by mistake.

Worked example:

```
  A £150 printer is marked "20% off, then 20% VAT added."
  What is the final price?

  Single multiplication form:
    Final = 150 × (1 − 0.20) × (1 + 0.20)
          = 150 × 0.80 × 1.20
          = 150 × 0.96
          = £144

  Two-step form (longer, same answer):
    After discount:  150 × 0.80 = 120
    After VAT:       120 × 1.20 = 144
```

If the question asks for the VAT portion only, the multiplicative form makes the intermediate number superfluous: VAT added = 150 × 0.80 × 0.20 = £24. The full price is 144 and you can read off £24 directly.

#### Ratios: pick the right one

UCAT ratio questions come in three shapes, and the wrong move on each shape costs marks.

Part-to-part ratio. "£900 is split between Alice and Bob in the ratio 2 : 3." Add to get 5 parts, then divide. £180 per part, Alice £360 and Bob £540. Same method for any number of parts.

Part-to-whole ratio. "In a class, 3 : 5 of students take biology." The 5 is the total. If the class has 240 students, biology-takers = 240 × 3/5 = 144. Candidates sometimes add 3 and 5 to get 8 parts and split, which is wrong: the 5 is already the total for this ratio.

Mixed ratio with a fixed quantity. "A baker uses flour and sugar in ratio 5 : 2. A recipe uses 350g flour. How much sugar?" The fixed anchor is the flour value, so one "part" of the ratio = 350 / 5 = 70g, and sugar = 2 × 70 = 140g. The trap is to divide 350 by 7 (the sum of parts): that only works when the fixed anchor is the total.

Worked example:

```
  A solution is made by mixing acid and water in the ratio 3 : 7.
  A bottle contains 420 ml of acid.
  How much water is in the bottle?

  Acid parts = 3, total = 10.
  But 420 ml is the acid amount, not the total.
  So one part of acid = 420 / 3 = 140 ml.
  Water = 7 × 140 = 980 ml.
  Total solution = 420 + 980 = 1,400 ml.

  Trap to avoid: 420 × 7/10 = 294 ml. That treats 3 + 7 = 10 as if the
  420 were the total. It is not.
```

#### Proportions under unit conversion

A proportion question in UCAT almost always hides a unit conversion between the given data and the asked quantity. The shape you should look for is: "X units of A convert to Y units of B. Given P units of A, find Q units of B." The shortest path is the conversion factor, not the equation.

Worked example:

```
  A recipe feeds 4 people using 180 g of flour and 60 ml of milk.
  How much flour (in grams) is needed to feed 9 people?

  Scale factor for people: 9 / 4 = 2.25.
  Flour: 180 × 2.25 = 405 g.
  Milk: 60 × 2.25 = 135 ml.
```

If the question adds a unit change — grams of flour per kilogram, miles per gallon, milligrams per kilogram of body weight — solve the unit change once, then do one proportion.

Worked example with unit change:

```
  A drug is dosed at 2.5 mg per kg of body weight, twice a day.
  A patient weighs 68 kg. What is the daily dose in mg?

  Per dose: 2.5 × 68 = 170 mg.
  Daily:    170 × 2 = 340 mg.
```

The "per kg then times body weight" form avoids setting up a fraction entirely. Candidates who reach for the formula P × D / V = Answer on every question waste seconds.

#### Speed-and-distance, rates, percentages of percentages

Three-rate questions ("A does X in Y, B does Y in Z, together?") show up rarely but routinely. The conversion is: combined rate = 1/X + 1/Y, then time = 1 / combined rate.

Worked example:

```
  Pipe A fills a tank in 6 minutes. Pipe B fills it in 4 minutes.
  How long do both take together?

  Rate A = 1/6 per minute. Rate B = 1/4 per minute.
  Combined rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per minute.
  Time = 1 / (5/12) = 12/5 = 2.4 minutes = 2 min 24 sec.
```

The trap is to average 6 and 4 to get 5 minutes. That arithmetic average is only equal to the harmonic mean in the two-pipe symmetric case (here, 4 and 6 give 2 × 4 × 6 / (4 + 6) = 4.8 — not 2.4). Always work in rates, not times.

---

### Memory anchors

A pocket card to glance at before each practice set:

- **P × M = R** for percentage change: new value equals original times the (1 ± p) multiplier.
- **Add the parts** for part-to-part, **multiply by the whole fraction** for part-to-whole, **anchor on the fixed number** for mixed.
- **Unit rate** then **multiply**, never **set up a fraction** if the numbers are simple.
- **Rates, not times**, for combined-work questions.
- **Read the verb.** Percentage vs percentage point, increase vs decrease, of vs by.

---

### Common traps

- Adding two percentage changes instead of multiplying: 20% off then 20% VAT is not "back to the original." It is 0.80 × 1.20 = 0.96.
- Treating a part-to-whole ratio as part-to-part and dividing by the sum.
- Using arithmetic mean where harmonic is required (combined rates).
- Trusting an answer because the calculator agrees, even when the operator order was wrong. Mental estimate before you key — does the answer have a sensible magnitude?
- Re-reading the chart to confirm a number the second time, then writing a different number in the answer box.

---

### What to do next

1. Time a single 9-question QR set in 10 minutes, every day for two weeks. The bar is 43 seconds per question including the chart read.
2. Build a flashcard set for the multiplier form: 15% off = 0.85, 8% VAT added = 1.08, 30% increase = 1.30. Drill until the multiplier is reflex.
3. On every wrong answer in review, write one line that names the trap (sign error, wrong ratio type, etc.). The trap is the lesson; the question is the example.
4. Sit one full QR mock per week, under timed conditions with the on-screen calculator only. The official UCAT practice tests are the right benchmark; specific current percentile figures should be checked on ucat.ac.uk rather than carried over from a prior year.
