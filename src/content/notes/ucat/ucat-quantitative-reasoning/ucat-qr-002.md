---
exam: ucat
examName: "UCAT (University Clinical Aptitude Test)"
subject: ucat-quantitative-reasoning
subjectName: "Quantitative Reasoning"
topic: quantitative-reasoning
topicName: "Reading Charts and Tables"
weight: 4
country: uk
generated: "2026-09-26T12:55:00"
lastUpdated: "2026-09-26"
---

Quantitative Reasoning questions sit on a chart, a table, or a short text passage with figures. The arithmetic is rarely harder than GCSE Foundation level, but the bar is speed because you have 26 minutes for 36 questions after a two-minute instruction section. Every question costs you the time to read the stem, locate the data, run the calculation and check the answer. Cutting any of those four steps is where the marks live. This note covers the reading step, which is the one students most often underestimate.

You are scored on the published 300 to 900 scale per subtest, with one mark per correct answer and no negative marking. Anything else about university thresholds or cohort averages should be confirmed on ucat.ac.uk, because those figures update each admissions cycle.

---

### Quick revision

- **Read the question first.** Know which numbers you need before you scan the chart.
- **Skim for the axis label, the legend and the units.** A "thousand" vs "million" difference is the most common chart trap.
- **Locate, then read.** Mark the row or bar in your head. Do not re-read the chart on the second pass.
- **Estimate before you calculate.** A 20% rise on 800 must end near 960, not near 1,200. If your calculator says otherwise, the operator is wrong.
- **Skip the chart legend unless the question needs it.** Most QR charts have one or two questions that do not require the legend at all.

---

### Standard conceptual deep dive

#### The four chart types UCAT uses

UCAT Quantitative Reasoning presents data in a small set of repeating shapes. Recognising the shape in under three seconds saves the rest of the minute.

**Tables.** A small grid with row and column headers. Most tables have one numeric column you care about, plus identifiers. Read the header row first to know what each column is. Tables are the easiest chart type on the test because the data is already in form — the work is to locate and combine, not to estimate.

**Bar charts and column charts.** Vertical or horizontal bars of different lengths, each one a category. Read the axis tick to understand scale, then read one bar in full to check the axis spacing. UCAT bar charts sometimes use a non-zero baseline to exaggerate differences; check the y-axis number before you trust the visual gap.

**Line graphs.** A trend over an ordered axis, usually time. Used for "rate" questions and for "find the year when X happens" questions. Read the labels at line ends first to know what is on each line if there are multiple.

**Stacked or grouped bars.** Two or three categories per bar, stacked or side by side. The total bar height carries meaning, and so do the segments. UCAT is fond of asking "what fraction of the total" from this shape.

A fifth shape — **pie and donut charts** — appears, but only as a part-to-whole ratio question. The angle or arc tells you the share; the rest is proportion arithmetic.

#### Read the stem before the chart

The single biggest speed gain in QR comes from reading the stem first, in full. The stem tells you which numbers you need and what to do with them. If the stem asks "What is the percentage increase from 2014 to 2016?", you do not need to read every value in the table; you need the 2014 and 2016 values for one specific row.

A practical procedure:

1. Read the stem. Note the verb (find, compare, calculate, estimate) and the unit (milligrams per litre, £, patients per week).
2. Read the chart title and the axis labels. Glance at the legend if there is one.
3. Locate the specific row, bar or line the stem points to.
4. Read the two (or three) values you need.
5. Compute. Answer. Move on.

Step 1 and Step 2 take eight seconds. Steps 3 to 5 take thirty. Skipping Steps 1 or 2 turns the chart into a guessing exercise.

#### Common misreads

Charts in UCAT are designed to be misread. The misreads that recur are worth memorising.

- **Axis with a non-zero cut.** A bar chart that starts at 80, not 0, exaggerates a small difference. The numeric labels still tell the truth. Read the labels, not the visual gap.
- **Switching two rows.** Tables often have a row that is the answer and a row above or below that looks similar. Read the row identifier, not just the value.
- **Taking a sub-category as the total.** "Patients on beta blockers" vs "all cardiac patients" — the question asks about one, the chart shows both.
- **Units that change mid-chart.** A chart that gives January in £ and then February in £ thousands. Read every axis label, not just the first.
- **Off-by-one tick marks.** A bar ends just below the 400 line; the value is closer to 395 than to 405. Round to the nearest tick, then check the next nearest.

#### Worked example — table read with a percentage change

```
  Table. Number of GP appointments (thousands) per region, 2014 vs 2016.

  Region       | 2014 | 2016
  North        |  320 |  360
  South        |  540 |  510
  East         |  180 |  240
  West         |  260 |  290
  Central      |  150 |  170

  Question: "Which region had the largest percentage increase in
  appointments from 2014 to 2016?"

  Compute each percentage change:
    North:   (360 − 320) / 320 = 40 / 320 = 12.5%
    South:   (510 − 540) / 540 = −30 / 540 ≈ −5.6%  (decrease)
    East:    (240 − 180) / 180 = 60 / 180 ≈ 33.3%
    West:    (290 − 260) / 260 = 30 / 260 ≈ 11.5%
    Central: (170 − 150) / 150 = 20 / 150 ≈ 13.3%
```

The East region wins at about a third increase. The trap is to look at raw differences (40, 30, 60, 30, 20) and pick the 60 — but the East also has the smallest base, which inflates its percentage. Reading the stem before scanning prevents this: the stem asks for "percentage," not "absolute," so you skip the rows where raw difference is largest.

#### Worked example — line graph with rate of change

```
  Line graph. Mean daily calorie intake (kcal) per patient, 2010-2020.
  Each tick on the y-axis represents 200 kcal. The x-axis is years.

  Question: "By approximately how much did the mean daily calorie
  intake change between 2012 and 2018?"

  Step 1. Read 2012 value: line sits about 1,800 kcal (1 tick below
          the 2,000 line).
  Step 2. Read 2018 value: line sits about 2,200 kcal (1 tick above
          the 2,000 line).
  Step 3. Difference: 2,200 − 1,800 = 400 kcal.

  Trap to avoid. Reading the line-trend visually and estimating
  "around 500" because the line rises. Always use the y-axis tick
  values, not the visual angle of the line.
```

#### Worked example — grouped bar with part-to-whole

```
  Grouped bar chart. Total of three categories of A&E attendances
  in 2019 and 2020:
              2019      2020
  Minor       120       140
  Standard    180       160
  Major        40        50
  Total       340       350

  Question: "What percentage of 2020 attendances were minor?"

  Answer: 140 / 350 = 0.40 = 40%.

  Trap. Using 2019's total (340) as the denominator because the
  question was first read with the wrong row in mind.
```

#### Speed tactics

- **Glance at the answer choices before you compute.** UCAT answer choices are spaced non-uniformly. If two are close together and the others are far apart, the answer is probably between the two close ones. This tells you whether to be approximate or precise.
- **Round early when estimating.** Reading 1,238 vs 1,240 does not change which option is correct. Round to two significant figures for speed.
- **Mark the question mentally, not on the screen.** Annotating charts in your head is faster than moving the cursor. The UCAT screen does not let you scribble.
- **Skip and return.** If a chart read is taking more than 50 seconds, flag the question and move on. The flag only costs you one mark if you run out of time, and a guess on a question you nearly understood costs you the same as a guess on a question you skipped. The 50-second rule is the published pace: 36 questions / 26 minutes ≈ 43 seconds.

---

### Memory anchors

- **QR chart read = stem → axis → row → two values → compute.** Five steps, thirty seconds.
- **The answer choices are the second hint.** A tight cluster means the question rewards precise reading; a wide spread means estimation.
- **Non-zero baselines and unit switches are the two chart traps that recur.**
- **Percentage change, ratio split, part-to-whole.** Three calculation shapes; pick the one the stem points to.

---

### Common traps

- Reading the chart first and the stem second. By the time you read the stem, you have already read three values you do not need.
- Trusting the visual gap between bars instead of reading the y-axis labels.
- Dividing by the wrong year (base year vs final year) on a percentage change.
- Forgetting to convert £ to £ thousands or mg to g before computing.
- Running out of time in the last five questions because each chart took 60 seconds instead of 30.

---

### What to do next

1. Time ten chart-read questions in a single sitting. Aim for an average under 40 seconds per chart read, including reading the stem.
2. Build a six-card flashcard set: one card for each chart type, each with the axis-label warning printed on it.
3. After every timed set, list every wrong answer under one of three headings: misread the chart, misread the stem, slow arithmetic. The misreads are the ones to stop first.
4. Sit one full QR mock under timed conditions, then review the chart-read step before sitting the next. The official UCAT practice tests are the right benchmark; current cohort scoring distributions are published yearly on ucat.ac.uk and are the only figures worth trusting for your cycle.
