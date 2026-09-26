---
exam: ucat
examName: "UCAT (University Clinical Aptitude Test)"
subject: ucat-decision-making
subjectName: "Decision Making"
topic: ucat-dm-002
topicName: "Venn Diagrams and Probability"
weight: 4
country: uk
generated: "2026-09-26T12:55:00"
lastUpdated: "2026-09-26"
---

# Venn diagrams, probability and argument evaluation

Decision Making mixes logical puzzles with statistical and visual reasoning. The two statistical item types that show up most often are Venn-diagram problems (especially three-set Venns) and probability problems (single-event, conditional, and with-or-without-replacement). Argument evaluation sits in the same subtest but tests a different skill: spotting whether the data on the page actually supports the conclusion drawn from it.

> Source for subtest size, time and marking (35 items / 37 minutes / 300–900 scale / single-answer 1 mark, multiple-statement 2 marks with partial credit): UCAT Consortium, *Test Format*, https://www.ucat.ac.uk/about-ucat/test-format/. The Decision Making question tutorial is the official source for item-type examples.

## Venn diagrams — the inclusion-exclusion check

A Venn diagram represents sets as overlapping circles. For a two-set problem the regions are: only A, only B, A and B, neither. For a three-set problem the regions are: only A, only B, only C, A∩B only, A∩C only, B∩C only, A∩B∩C, none.

The arithmetic rule that holds the diagram together is inclusion-exclusion:

- Two sets: |A ∪ B| = |A| + |B| − |A ∩ B|
- Three sets: |A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|

The UCAT uses this rule in two ways. First, the diagram is given and you have to read a region. Second, the data is given in text and you have to draw the diagram. In both cases, the inclusion-exclusion check is what tells you whether your counts are consistent. If the totals do not match, you have miscounted at least one region.

A worked example:

A survey of 100 patients records which of three drugs they take. 50 take Drug A, 40 take Drug B, 30 take Drug C. 20 take A and B, 15 take B and C, 10 take A and C. 5 take all three. How many take none?

```
  Only A             | 50 − 20 − 10 + 5 = 25
  Only B             | 40 − 20 − 15 + 5 = 10
  Only C             | 30 − 15 − 10 + 5 = 10
  A ∩ B only (not C) | 20 − 5 = 15
  B ∩ C only (not A) | 15 − 5 = 10
  A ∩ C only (not B) | 10 − 5 = 5
  A ∩ B ∩ C          | 5
  Total in at least one | 25 + 10 + 10 + 15 + 10 + 5 + 5 = 80
  None               | 100 − 80 = 20
```

Inclusion-exclusion check: |A ∪ B ∪ C| = 50 + 40 + 30 − 20 − 15 − 10 + 5 = 80 ✓

The trap on three-set Venns is forgetting that the pairwise overlaps include the triple overlap. If you write down "A and B = 20" without subtracting the triple overlap, the only-A and only-B regions come out wrong.

## Probability — the rules that come up most often

The UCAT does not test advanced probability. It tests five rules, applied correctly under time pressure:
- Complement: P(not A) = 1 − P(A)
- Union (general): P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
- Union (mutually exclusive): P(A ∪ B) = P(A) + P(B)
- Intersection (independent): P(A ∩ B) = P(A) × P(B)
- Conditional: P(A | B) = P(A ∩ B) / P(B)

For sampling without replacement, the conditional probability changes after each draw. For sampling with replacement, it does not.

A worked example:

A bag contains 4 red and 6 blue marbles. Two marbles are drawn. Find P(both red).

```
  Without replacement
    P(1st red) = 4/10
    P(2nd red | 1st red) = 3/9
    P(both red) = 4/10 × 3/9 = 12/90 = 2/15

  With replacement
    P(1st red) = 4/10
    P(2nd red | 1st red) = 4/10
    P(both red) = 4/10 × 4/10 = 16/100 = 4/25
```

The trap is forgetting to update the denominator after the first draw when the sampling is without replacement. The conditional probability on the second draw is the new sample space divided by the new favourable count.

## Worked example — interpreting a probability claim from data

A clinic reports that 60% of patients referred for a sleep study are diagnosed with obstructive sleep apnoea (OSA). Among patients with OSA, 40% have a body mass index above 30. Among patients without OSA, 15% have a body mass index above 30.

What is the probability that a randomly selected patient with a BMI above 30 has OSA?

Let OSA = A. P(A) = 0.6. P(not A) = 0.4. P(BMI > 30 | A) = 0.4. P(BMI > 30 | not A) = 0.15.

```
  P(BMI > 30)   = P(BMI > 30 | A) × P(A) + P(BMI > 30 | not A) × P(not A)
                = 0.4 × 0.6 + 0.15 × 0.4
                = 0.24 + 0.06
                = 0.30

  P(A | BMI > 30) = P(BMI > 30 | A) × P(A) / P(BMI > 30)
                  = 0.4 × 0.6 / 0.30
                  = 0.24 / 0.30
                  = 0.80
```

So 80% of patients with a BMI above 30 have OSA under the clinic's data. The reverse-conditioning step (using Bayes' rule) is the part candidates miss: the question gives you P(BMI | OSA) and asks you to find P(OSA | BMI). The two are not equal, and the swap is one of the most common errors in Decision Making probability items.

## Argument evaluation — does the data actually support the conclusion?

The Decision Making subtest also includes short argument-evaluation items: a passage makes a claim, and you have to decide which conclusion is best supported by the data. The marking shape is the same as for syllogisms — pick the conclusion that follows, and reject any conclusion that adds an unsupported step.

Five patterns to watch for:

- **Conclusion overstates the data.** The data shows a correlation; the conclusion claims causation. Mark it down.
- **Conclusion adds a population the data did not measure.** The data is from one clinic, the conclusion is about all UK clinics. Mark it down.
- **Conclusion reverses direction.** The data says A is more than B; the conclusion says B is more than A. Mark it down.
- **Conclusion adds an absolute.** The data shows a trend; the conclusion claims it is always true. Mark it down.
- **Conclusion ignores a confounder.** The data shows two groups differ; the conclusion attributes the difference to one cause when other causes are plausible. Mark it down.

In each case the right response is the conclusion that sticks closest to what the data literally says.

## Worked example — argument evaluation against a chart

A hospital trust publishes a chart showing that, between 2019 and 2024, average length of stay for elective hip replacements fell from 4.2 days to 2.8 days, while the 30-day readmission rate rose from 3.1% to 4.0%.

Which conclusion is best supported?

- A. "Shorter stays are causing the rise in readmissions." — Not supported. The chart shows a co-occurrence, not a causal mechanism. The readmission rise could reflect a different patient mix, a change in coding, or a change in community care.
- B. "Hip replacement outcomes have worsened." — Not supported. A shorter length of stay is not, by itself, a worse outcome. Length of stay fell; readmissions rose slightly. The data does not say outcomes worsened.
- C. "Between 2019 and 2024, length of stay for elective hip replacements fell and the 30-day readmission rate rose." — Supported. The chart literally says this. No hidden assumption.
- D. "The trust should reverse its early-discharge policy." — Not supported. The chart does not address what the trust should do, and it does not establish that early discharge is the cause of the readmission rise.

The best-supported conclusion (C) is the one that mirrors the chart exactly. The UCAT rewards that discipline.

## Common mistakes to correct now

- Treating "more than half" and "most" as interchangeable. "More than half" is a strict mathematical statement (>50%); "most" can mean a non-strict majority.
- Forgetting that P(A ∪ B) subtracts the intersection. Adding P(A) + P(B) without subtracting the double-counted region overcounts the union.
- Switching the direction of Bayes' rule. P(A | B) and P(B | A) are not equal in general.
- Reading a chart and answering from the conclusion in the title rather than from the data in the body.
- Concluding causation from a chart that shows correlation. The chart shows what changed; it does not show what caused what.

## What to do next

- Drill three three-set Venn problems a day for a week, with the inclusion-exclusion check written down next to the answer.
- Take three probability problems from the official UCAT practice tests and identify which of the five rules each one tests before you calculate.
- For one Decision Making drill this week, write down the type of every wrong answer (Venn, Bayes, causation, scope, direction) and use that to pick the next drill topic.
- Re-read each Decision Making worked example in this note without looking at the answer, then check. The re-read is what turns the rule into a habit.